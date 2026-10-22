"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

export default class NonTerminalNode extends NonTerminalNodeBase {
  isLeadning() {
    const rightLeaning = this.isRightLeaning(),
          leftLeaning = this.isLeftLeaning(),
          leaning = (leftLeaning || rightLeaning);

    return leaning;
  }

  isLeftLeaning() {
    const leftLeaningNode = this.findLeftLeaningNode(),
          leftLeaning = (leftLeaningNode !== null);

    return leftLeaning;
  }

  isRightLeaning() {
    const rightLeaningNode = this.findRightLeaningNode(),
          rightLeaning = (rightLeaningNode !== null);

    return rightLeaning;
  }

  findLeftLeaningNode(shallow = false) {
    let leftLeaningNode = null;

    const ruleName = this.getRuleName();

    this.forwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

        if (nonTerminalNodeRuleName === ruleName) {
          if (shallow) {
            leftLeaningNode = nonTerminalNode;  ///
          } else {
            const shallow = true,
                  rightLeaningNode = nonTerminalNode.findRightLeaningNode(shallow);

            if (rightLeaningNode !== null) {
              leftLeaningNode = nonTerminalNode;  ///
            }
          }
        }
      }

      return true;
    });

    return leftLeaningNode;
  }

  findRightLeaningNode(shallow = false) {
    let rightLeaningNode = null;

    const ruleName = this.getRuleName();

    this.backwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

        if (nonTerminalNodeRuleName === ruleName) {
          if (shallow) {
            rightLeaningNode = nonTerminalNode;  ///
          } else {
            const shallow = true,
                  leftLeaningNode = nonTerminalNode.findLeftLeaningNode(shallow);

            if (leftLeaningNode !== null) {
              rightLeaningNode = nonTerminalNode; ///
            }
          }
        }
      }

      return true;
    });

    return rightLeaningNode;
  }

  rewrite(state) {
    let nonTerminalNode = this;

    const precedence = this.getPrecedence();

    if (precedence !== null) {
      nonTerminalNode = this.clone();

      nonTerminalNode = nonTerminalNode.balance(state);
    }

    return nonTerminalNode;
  }

  balance(state) {
    let nonTerminalNode = this; ///

    const precedence = this.getPrecedence();

    if (precedence !== null) {
      const childNodesBalanced = this.balanceChildNodes(state);

      if (childNodesBalanced) {
        const leaning = this.isLeadning();

        if (leaning) {
          this.leanLeft(state);

          const unprecedencted = this.isUnprecedented();

          if (unprecedencted) {
            this.leanRight(state);
          }
        }

        const unprecedencted = this.isUnprecedented();

        if (unprecedencted) {
          nonTerminalNode = null;
        }
      } else {
        nonTerminalNode = null;
      }
    }

    return nonTerminalNode;
  }

  balanceChildNodes(state) {
    const childNodesBalanced = this.everyChildNode((childNode) => {
      childNode = childNode.balance(state); ///

      if (childNode !== null) {
        return true;
      }
    });

    return childNodesBalanced;
  }

  lift() {
    const parentNode = this.getParentNode(),
          childNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = childNodes; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  remove() {
    const parentNode = this.getParentNode(),
          removedChildNode = this;  ///

    parentNode.removeChildNode(removedChildNode);
  }

  leanLeft(state) {
    let leftLeaningNode;

    const leftLeadning = this.isLeftLeaning();

    if (!leftLeadning) {
      const shallow = true,
            rightLeaningNode = this.findRightLeaningNode(),
            rightLeftLeaningNode = rightLeaningNode.findLeftLeaningNode(shallow);

      leftLeaningNode = this.rotateLeft(rightLeftLeaningNode, rightLeaningNode, state);
    } else {
      const shallow = true;

      leftLeaningNode = this.findLeftLeaningNode(shallow);
    }

    return leftLeaningNode;
  }

  leanRight(state) {
    let rightLeaningNode;

    const rightLeadning = this.isRightLeaning();

    if (!rightLeadning) {
      const shallow = true,
            leftLeaningNode = this.findLeftLeaningNode(),
            leftRightLeaningNode = leftLeaningNode.findRightLeaningNode(shallow);

      rightLeaningNode = this.rotateRight(leftRightLeaningNode, leftLeaningNode, state);
    } else {
      const shallow = true;

      rightLeaningNode = this.findRightLeaningNode(shallow);
    }

    return rightLeaningNode;
  }

  rotateLeft(rightLeftLeaningNode, rightLeaningNode, state) {
    let leftLeaningNode;

    rightLeftLeaningNode.remove();

    const removedChildNodes = this.removeAllButLastChildNode();

    rightLeaningNode.lift();

    const childNodes = [
      ...removedChildNodes,
      rightLeftLeaningNode
    ];

    let precedence;

    precedence = this.getPrecedence();

    const nonTerminalNode = this.createNonTerminalNode(childNodes, precedence, state);

    leftLeaningNode = nonTerminalNode; ///

    precedence = rightLeaningNode.getPrecedence();

    this.setPrecedence(precedence);

    const childNode = leftLeaningNode,  ///
          startIndex = 0;

    this.addChildNode(childNode, startIndex);

    return leftLeaningNode;
  }

  rotateRight(leftRightLeaningNode, leftLeaningNode, state) {
    let rightLeadningNode;

    leftRightLeaningNode.remove();

    const removedChildNodes = this.removeAllButFirstChildNode();

    leftLeaningNode.lift();

    const childNodes = [
      leftRightLeaningNode,
      ...removedChildNodes
    ];

    let precedence;

    precedence = this.getPrecedence();

    const nonTerminalNode = this.createNonTerminalNode(childNodes, precedence, state);

    rightLeadningNode = nonTerminalNode; ///

    precedence = leftLeaningNode.getPrecedence();

    this.setPrecedence(precedence);

    const multiplicity = this.getMultiplicity(),
          startIndex = multiplicity,  ///
          childNode = rightLeadningNode;  ///

    this.addChildNode(childNode, startIndex);

    return rightLeadningNode;
  }

  createNonTerminalNode(childNodes, precedence, state) {
    const opacity = this.getOpacity(),
          ruleName = this.getRuleName(),
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  removeAllButLastChildNode() {
    const multiplicity = this.getMultiplicity(),
      startIndex = 0,
      deleteCount = (multiplicity - 1),
      removedChildNodes = this.spliceChildNodes(startIndex, deleteCount);

    return removedChildNodes;
  }

  removeAllButFirstChildNode() {
    const multiplicity = this.getMultiplicity(),
      startIndex = 1,
      deleteCount = (multiplicity - 1),
      removedChildNodes = this.spliceChildNodes(startIndex, deleteCount);

    return removedChildNodes;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity); }
}
