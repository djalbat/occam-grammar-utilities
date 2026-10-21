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
    const nonTerminalNode = this.balance(state);

    return nonTerminalNode;
  }

  balance(state) {
    let nonTerminalNode = this;

    this.forEachChildNonTerminalNode((childNonTerminalNode) => {
      childNonTerminalNode.balance(state);
    });

    const unprecedencted = this.isUnprecedented();

    if (unprecedencted) {
      const leaning = this.isLeadning();

      if (leaning) {
        debugger
      } else {
        nonTerminalNode = null;
      }
    }

    return nonTerminalNode;
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
      const rightLeaningNode = this.findRightLeaningNode(),
            rightLeftLeaningNode = rightLeaningNode.findLeftLeaningNode();

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
      const leftLeaningNode = this.findLeftLeaningNode(),
            leftRightLeaningNode = leftLeaningNode.findLeftLeaningNode();

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

    const childNode = rightLeadningNode,  ///
          startIndex = 0;

    this.addChildNode(childNode, startIndex);

    return rightLeadningNode;
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

  forEachChildNonTerminalNode(callback) {
    this.forEachChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const childNonTerminalNode = childNode; ///

        callback(childNonTerminalNode);
      }
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity); }
}
