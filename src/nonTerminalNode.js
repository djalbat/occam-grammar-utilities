"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

export default class NonTerminalNode extends NonTerminalNodeBase {
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

    const nonSingularInterveningNode = this.findNonSingularInterveningNode();

    nonSingularInterveningNode.forwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode;  ///

        if (shallow) {
          const nonSingularInterveningNode = nonTerminalNode.findNonSingularInterveningNode();

          leftLeaningNode = nonSingularInterveningNode;  ///
        } else {
          const shallow = true,
                rightLeaningNode = nonTerminalNode.findRightLeaningNode(shallow);

          if (rightLeaningNode !== null) {
            leftLeaningNode = nonTerminalNode;  ///
          }
        }
      }

      return true;
    });

    return leftLeaningNode;
  }

  findRightLeaningNode(shallow = false) {
    let rightLeaningNode = null;

    const nonSingularInterveningNode = this.findNonSingularInterveningNode();

    nonSingularInterveningNode.backwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode;  ///

        if (shallow) {
          const nonSingularInterveningNode = nonTerminalNode.findNonSingularInterveningNode();

          rightLeaningNode = nonSingularInterveningNode;  ///
        } else {
          const shallow = true,
                leftLeaningNode = nonTerminalNode.findLeftLeaningNode(shallow);

          if (leftLeaningNode !== null) {
            rightLeaningNode = nonTerminalNode; ///
          }
        }
      }

      return true;
    });

    return rightLeaningNode;
  }

  findNonSingularInterveningNode() {
    let nonSingularInterveningNode = this;  ///

    const singular = this.isSingular(),
          intervening = this.isIntervening();

    if (singular && intervening) {
      const singleChildNode = this.getSingleChildNode();

      nonSingularInterveningNode = singleChildNode.findNonSingularInterveningNode();
    }

    return nonSingularInterveningNode;
  }

  rewrite(state) {
    let nonTerminalNode = this;

    const precedence = this.getPrecedence();

    if (precedence !== null) {
      const intervening = this.isIntervening();

      if (!intervening) {
        nonTerminalNode = this.clone();

        nonTerminalNode.tiltLeft(state);

        const unprecedented = nonTerminalNode.balance(state);

        if (unprecedented) {
          nonTerminalNode = null;
        }
      }
    }

    return nonTerminalNode;
  }

  balance(state) {
    let unprecedencted;

    const precedence = this.getPrecedence();

    if (precedence !== null) {
      unprecedencted = this.isUnprecedented();

      if (unprecedencted) {
        const leftLeadning = this.isLeftLeaning();

        if (leftLeadning) {
          this.leanRight(state);

          const shallow = true,
                rightLeadningNode = this.findRightLeaningNode(shallow);

          unprecedencted = rightLeadningNode.isUnprecedented();

          if (!unprecedencted) {
            unprecedencted = this.balance(state);
          }
        }
      } else {
        const shallow = true,
              leftLeaningNode = this.findLeftLeaningNode(shallow);

        if (leftLeaningNode !== null) {
          unprecedencted = leftLeaningNode.balance(state);
        }
      }
    } else {
      unprecedencted = false;
    }

    return unprecedencted;
  }

  tiltLeft(state) {
    let rightLeaning;

    rightLeaning = this.isRightLeaning();

    while (rightLeaning) {
      this.leanLeft(state);

      rightLeaning = this.isRightLeaning();
    }

    this.forEachChildNonTerrminalNode((nonTermionalNode) => {
      nonTermionalNode.tiltLeft(state);
    });
  }

  lift(withPrecedence = false) {
    const parentNode = this.getParentNode(),
          childNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = childNodes; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    if (withPrecedence) {
      const precedence = this.getPrecedence();

      parentNode.setPrecedence(precedence);
    }
  }

  remove() {
    const parentNode = this.getParentNode(),
          removedChildNode = this;  ///

    parentNode.removeChildNode(removedChildNode);
  }

  leanLeft(state) {
    const shallow = true,
          rightLeaningNode = this.findRightLeaningNode(),
          rightLeftLeaningNode = rightLeaningNode.findLeftLeaningNode(shallow);

    this.rotateLeft(rightLeftLeaningNode, rightLeaningNode, state);
  }

  leanRight(state) {
    const shallow = true,
          leftLeaningNode = this.findLeftLeaningNode(),
          leftRightLeaningNode = leftLeaningNode.findRightLeaningNode(shallow);

    this.rotateRight(leftRightLeaningNode, leftLeaningNode, state);
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

  forEachChildNonTerrminalNode(callback) {
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
