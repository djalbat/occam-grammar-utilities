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

    const nonSingularInterveningDescendantNode = this.retrieveNonSingularInterveningDescendantNode();

    nonSingularInterveningDescendantNode.forwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              nonSingularInterveningDescendantNode = nonTerminalNode.retrieveNonSingularInterveningDescendantNode();

        if (shallow) {
          leftLeaningNode = nonSingularInterveningDescendantNode;  ///
        } else {
          const shallow = true,
                rightLeaningNode = nonSingularInterveningDescendantNode.findRightLeaningNode(shallow);

          if (rightLeaningNode !== null) {
            leftLeaningNode = nonSingularInterveningDescendantNode;  ///
          }
        }
      }

      return true;
    });

    return leftLeaningNode;
  }

  findRightLeaningNode(shallow = false) {
    let rightLeaningNode = null;

    const nonSingularInterveningDescendantNode = this.retrieveNonSingularInterveningDescendantNode();

    nonSingularInterveningDescendantNode.backwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              nonSingularInterveningDescendantNode = nonTerminalNode.retrieveNonSingularInterveningDescendantNode();

        if (shallow) {
          rightLeaningNode = nonSingularInterveningDescendantNode;  ///
        } else {
          const shallow = true,
                leftLeaningNode = nonSingularInterveningDescendantNode.findLeftLeaningNode(shallow);

          if (leftLeaningNode !== null) {
            rightLeaningNode = nonSingularInterveningDescendantNode; ///
          }
        }
      }

      return true;
    });

    return rightLeaningNode;
  }

  retrieveSingularInterveningAscendantNode() {
    let singularInterveningAscendantNode = null;

    const parentNode = this.getParentNode(),
          parentNodeSingular = parentNode.isSingular(),
          parentNodeIntervening = parentNode.isIntervening();

    if (parentNodeSingular && parentNodeIntervening) {
      singularInterveningAscendantNode = parentNode.retrieveSingularInterveningAscendantNode();

      if (singularInterveningAscendantNode === null) {
        singularInterveningAscendantNode = parentNode; ///
      }
    }

    return singularInterveningAscendantNode;
  }

  retrieveNonSingularInterveningDescendantNode() {
    let nonSingularInterveningDescendantNode = this;  ///

    const singular = this.isSingular(),
          intervening = this.isIntervening();

    if (singular && intervening) {
      const singleChildNode = this.getSingleChildNode();

      nonSingularInterveningDescendantNode = singleChildNode.retrieveNonSingularInterveningDescendantNode();
    }

    return nonSingularInterveningDescendantNode;
  }

  rewrite(state) {
    let nonTerminalNode = this;

    const precedence = this.getPrecedence();

    if (precedence !== null) {
      const intervening = this.isIntervening();

      if (!intervening) {
        nonTerminalNode = this.clone();

        nonTerminalNode.tiltLeft();

        const unprecedented = nonTerminalNode.balance();

        if (unprecedented) {
          nonTerminalNode = null;
        }
      }
    }

    return nonTerminalNode;
  }

  balance() {
    let unprecedencted;

    const precedence = this.getPrecedence();

    if (precedence !== null) {
      unprecedencted = this.isUnprecedented();

      if (unprecedencted) {
        const leftLeaning = this.isLeftLeaning();

        if (leftLeaning) {
          this.leanRight();

          const shallow = true,
                rightLeaningNode = this.findRightLeaningNode(shallow);

          unprecedencted = rightLeaningNode.isUnprecedented();

          if (!unprecedencted) {
            unprecedencted = this.balance();
          }
        }
      } else {
        const shallow = true,
              leftLeaningNode = this.findLeftLeaningNode(shallow);

        if (leftLeaningNode !== null) {
          unprecedencted = leftLeaningNode.balance();
        }
      }
    } else {
      unprecedencted = false;
    }

    return unprecedencted;
  }

  tiltLeft() {
    let rightLeaning;

    rightLeaning = this.isRightLeaning();

    while (rightLeaning) {
      this.leanLeft();

      rightLeaning = this.isRightLeaning();
    }

    this.forEachChildNonTerrminalNode((nonTermionalNode) => {
      nonTermionalNode.tiltLeft();
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

  leanLeft() {
    const shallow = true,
          rightLeaningNode = this.findRightLeaningNode(),
          rightLeftLeaningNode = rightLeaningNode.findLeftLeaningNode(shallow),
          rightLeaningNodeSingularInterveningAscendantNode = rightLeaningNode.retrieveSingularInterveningAscendantNode(),
          rightLeftLeaningNodeSingularInterveningAscendantNode = rightLeftLeaningNode.retrieveSingularInterveningAscendantNode(),
          rightLeaningAscendantNode = rightLeaningNodeSingularInterveningAscendantNode || rightLeaningNode,
          rightLeftLeaningAscendantNode = rightLeftLeaningNodeSingularInterveningAscendantNode || rightLeftLeaningNode;

    this.rotateLeft(rightLeaningNode, rightLeftLeaningNode, rightLeaningAscendantNode, rightLeftLeaningAscendantNode);
  }

  leanRight() {
    const shallow = true,
          leftLeaningNode = this.findLeftLeaningNode(),
          leftRightLeaningNode = leftLeaningNode.findRightLeaningNode(shallow),
          leftLeaningNodeSingularInterveningAscendantNode = leftLeaningNode.retrieveSingularInterveningAscendantNode(),
          leftRightLeaningNodeSingularInterveningAscendantNode = leftRightLeaningNode.retrieveSingularInterveningAscendantNode(),
          leftLeaningAscendantNode = leftLeaningNodeSingularInterveningAscendantNode || leftLeaningNode,
          leftRightLeaningAscendantNode = leftRightLeaningNodeSingularInterveningAscendantNode || leftRightLeaningNode;

    this.rotateRight(leftLeaningNode, leftRightLeaningNode, leftLeaningAscendantNode, leftRightLeaningAscendantNode);
  }

  rotateLeft(rightLeaningNode, rightLeftLeaningNode, rightLeaningAscendantNode, rightLeftLeaningAscendantNode) {
    let childNodes,
        removedChildNodes;

    removedChildNodes = rightLeaningNode.removeAllButFirstChildNode();

    const rightChildNodes = removedChildNodes;  ///

    rightLeftLeaningAscendantNode.remove();

    removedChildNodes = this.removeAllButLastChildNode();

    const leftChildNodes = removedChildNodes; ///

    rightLeaningAscendantNode.remove();

    childNodes = [  ///
      ...leftChildNodes,
      rightLeftLeaningAscendantNode
    ];

    rightLeaningNode.addChildNodes(childNodes);

    childNodes = [  ///
      rightLeaningAscendantNode,
      ...rightChildNodes
    ];

    this.addChildNodes(childNodes);

    let precedence;

    precedence = this.getPrecedence();

    const rightLeaningNodePrecedence = rightLeaningNode.getPrecedence();

    rightLeaningNode.setPrecedence(precedence);

    precedence = rightLeaningNodePrecedence;  ///

    this.setPrecedence(precedence);
  }

  rotateRight(leftLeaningNode, leftRightLeaningNode, leftLeaningAscendantNode, leftRightLeaningAscendantNode) {
    let childNodes,
        removedChildNodes;

    removedChildNodes = leftLeaningNode.removeAllButLastChildNode();

    const leftChildNodes = removedChildNodes;  ///

    leftRightLeaningAscendantNode.remove();

    removedChildNodes = this.removeAllButFirstChildNode();

    const rightChildNodes = removedChildNodes; ///

    leftLeaningAscendantNode.remove();

    childNodes = [  ///
      leftRightLeaningAscendantNode,
      ...rightChildNodes,
    ];

    leftLeaningNode.addChildNodes(childNodes);

    childNodes = [  ///
      ...leftChildNodes,
      leftLeaningAscendantNode
    ];

    this.addChildNodes(childNodes);

    let precedence;

    precedence = this.getPrecedence();

    const leftLeaningNodePrecedence = leftLeaningNode.getPrecedence();

    leftLeaningNode.setPrecedence(precedence);

    precedence = leftLeaningNodePrecedence;  ///

    this.setPrecedence(precedence);
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
