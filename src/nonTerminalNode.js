"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

export default class NonTerminalNode extends NonTerminalNodeBase {
  rewrite(state) {
    let nonTerminalNode = this;

    const precedence = this.getPrecedence();

    if (precedence !== null) {
      nonTerminalNode = this.clone();

      const effectiveDescendantNode = nonTerminalNode.retrieveEffectiveDescendantNode();

      effectiveDescendantNode.tiltLeft();

      const unprecedented = effectiveDescendantNode.balance();

      if (unprecedented) {
        nonTerminalNode = null;
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

  lift() {
    const parentNode = this.getParentNode(),
      precedence = this.getPrecedence(),
      childNodes = this.removeChildNodes(),
      replacedChildNode = this,  ///
      replacementChildNodes = childNodes; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode.setPrecedence(precedence);
  }

  remove() {
    const parentNode = this.getParentNode(),
          removedChildNode = this;  ///

    parentNode.removeChildNode(removedChildNode);
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

  leanLeft() {
    const effectiveDescendantNode = this.retrieveEffectiveDescendantNode();

    const shallow = true,
          rightLeaningNode = effectiveDescendantNode.findRightLeaningNode(),
          rightLeftLeaningNode = rightLeaningNode.findLeftLeaningNode(shallow),
          rightLeaningNodeEffectiveAscendantNode = rightLeaningNode.retrieveEffectiveAscendantNode(),
          rightLeftLeaningNodeEffectiveAscendantNode = rightLeftLeaningNode.retrieveEffectiveAscendantNode(),
          rightLeaningAscendantNode = rightLeaningNodeEffectiveAscendantNode,  ///
          rightLeftLeaningAscendantNode = rightLeftLeaningNodeEffectiveAscendantNode;  ///

    effectiveDescendantNode.rotateLeft(rightLeaningNode, rightLeftLeaningNode, rightLeaningAscendantNode, rightLeftLeaningAscendantNode);
  }

  leanRight() {
    const effectiveDescendantNode = this.retrieveEffectiveDescendantNode();

    const shallow = true,
          leftLeaningNode = effectiveDescendantNode.findLeftLeaningNode(),
          leftRightLeaningNode = leftLeaningNode.findRightLeaningNode(shallow),
          leftLeaningNodeEffectiveAscendantNode = leftLeaningNode.retrieveEffectiveAscendantNode(),
          leftRightLeaningNodeEffectiveAscendantNode = leftRightLeaningNode.retrieveEffectiveAscendantNode(),
          leftLeaningAscendantNode = leftLeaningNodeEffectiveAscendantNode,  ///
          leftRightLeaningAscendantNode = leftRightLeaningNodeEffectiveAscendantNode;  ///

    effectiveDescendantNode.rotateRight(leftLeaningNode, leftRightLeaningNode, leftLeaningAscendantNode, leftRightLeaningAscendantNode);
  }

  rotateLeft(rightLeaningNode, rightLeftLeaningNode, rightLeaningAscendantNode, rightLeftLeaningAscendantNode) {
    let addedChildNodes,
        removedChildNodes;

    removedChildNodes = rightLeaningNode.removeAllButFirstChildNode();

    const rightChildNodes = removedChildNodes;  ///

    rightLeftLeaningAscendantNode.remove();

    removedChildNodes = this.removeAllButLastChildNode();

    const leftChildNodes = removedChildNodes; ///

    rightLeaningAscendantNode.remove();

    const startIndex = 0;

    addedChildNodes = [  ///
      ...leftChildNodes,
      rightLeftLeaningAscendantNode
    ];

    rightLeaningNode.addChildNodes(addedChildNodes, startIndex);

    addedChildNodes = [  ///
      rightLeaningAscendantNode,
      ...rightChildNodes
    ];

    this.addChildNodes(addedChildNodes, startIndex);

    let ruleName,
        precedence;

    ruleName = this.getRuleName();

    precedence = this.getPrecedence();

    const rightLeaningNodeRuleName = rightLeaningNode.getRuleName(),
          rightLeaningNodePrecedence = rightLeaningNode.getPrecedence();

    rightLeaningNode.setRuleName(ruleName);

    rightLeaningNode.setPrecedence(precedence);

    ruleName = rightLeaningNodeRuleName;  ///

    precedence = rightLeaningNodePrecedence;  ///

    this.setRuleName(ruleName);

    this.setPrecedence(precedence);
  }

  rotateRight(leftLeaningNode, leftRightLeaningNode, leftLeaningAscendantNode, leftRightLeaningAscendantNode) {
    let addedChildNodes,
        removedChildNodes;

    removedChildNodes = leftLeaningNode.removeAllButLastChildNode();

    const leftChildNodes = removedChildNodes;  ///

    leftRightLeaningAscendantNode.remove();

    removedChildNodes = this.removeAllButFirstChildNode();

    const rightChildNodes = removedChildNodes; ///

    leftLeaningAscendantNode.remove();

    const startIndex = 0;

    addedChildNodes = [  ///
      leftRightLeaningAscendantNode,
      ...rightChildNodes,
    ];

    leftLeaningNode.addChildNodes(addedChildNodes, startIndex);

    addedChildNodes = [  ///
      ...leftChildNodes,
      leftLeaningAscendantNode
    ];

    this.addChildNodes(addedChildNodes, startIndex);

    let ruleName,
        precedence;

    ruleName = this.getRuleName();

    precedence = this.getPrecedence();

    const leftLeaningNodeRuleName = leftLeaningNode.getRuleName(),
          leftLeaningNodePrecedence = leftLeaningNode.getPrecedence();

    leftLeaningNode.setRuleName(ruleName);

    leftLeaningNode.setPrecedence(precedence);

    ruleName = leftLeaningNodeRuleName; ///

    precedence = leftLeaningNodePrecedence;  ///

    this.setRuleName(ruleName);

    this.setPrecedence(precedence);
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

    const effectiveDescendantNode = this.retrieveEffectiveDescendantNode();

    effectiveDescendantNode.forwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              effectiveDescendantNode = nonTerminalNode.retrieveEffectiveDescendantNode();

        if (shallow) {
          leftLeaningNode = effectiveDescendantNode;  ///
        } else {
          const shallow = true,
            rightLeaningNode = effectiveDescendantNode.findRightLeaningNode(shallow);

          if (rightLeaningNode !== null) {
            leftLeaningNode = effectiveDescendantNode;  ///
          }
        }
      }

      return true;
    });

    return leftLeaningNode;
  }

  findRightLeaningNode(shallow = false) {
    let rightLeaningNode = null;

    const effectiveDescendantNode = this.retrieveEffectiveDescendantNode();

    effectiveDescendantNode.backwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              effectiveDescendantNode = nonTerminalNode.retrieveEffectiveDescendantNode();

        if (shallow) {
          rightLeaningNode = effectiveDescendantNode;  ///
        } else {
          const shallow = true,
            leftLeaningNode = effectiveDescendantNode.findLeftLeaningNode(shallow);

          if (leftLeaningNode !== null) {
            rightLeaningNode = effectiveDescendantNode; ///
          }
        }
      }

      return true;
    });

    return rightLeaningNode;
  }

  retrieveEffectiveAscendantNode() {
    let effectiveAscendantNode;

    const irrelevantAscendantNode = this.retrieveIrrelevantAscendantNode();

    if (irrelevantAscendantNode !== null) {
      const irrelevantAscendantNodeParentNode = irrelevantAscendantNode.getParentNode();

      effectiveAscendantNode = irrelevantAscendantNodeParentNode; ///
    } else {
      effectiveAscendantNode = this;

      const single = this.isSingle();

      if (single) {
        const parentNode = this.getParentNode();

        if (parentNode !== null) {
          effectiveAscendantNode = parentNode; ///
        }
      }
    }

    return effectiveAscendantNode;
  }

  retrieveEffectiveDescendantNode() {
    let effectiveDescendantNode;

    const irrelevantDescendantNode = this.retrieveIrrelevantDescendantNode();

    if (irrelevantDescendantNode !== null) {
      const irrelevantDescendantNodeSingleChildNode = irrelevantDescendantNode.getSingleChildNode();

      effectiveDescendantNode = irrelevantDescendantNodeSingleChildNode;  ///
    } else {
      effectiveDescendantNode = this;

      const singular = this.isSingular();

      if (singular) {
        const singleChildNonTerminalNode = this.getSingleChildNonTerminalNode();

        if (singleChildNonTerminalNode !== null) {
          effectiveDescendantNode = singleChildNonTerminalNode;  ///
        }
      }
    }

    return effectiveDescendantNode;
  }

  retrieveIrrelevantAscendantNode() {
    let irrelevantAscendantNode = null;

    const parentNode = this.getParentNode();

    if (parentNode !== null) {
      const parentNodeIrrelevant = parentNode.isIrrelevant();

      if (parentNodeIrrelevant) {
        irrelevantAscendantNode = parentNode.retrieveIrrelevantAscendantNode();

        if (irrelevantAscendantNode === null) {
          irrelevantAscendantNode = parentNode; ///
        }
      }
    }

    return irrelevantAscendantNode;
  }

  retrieveIrrelevantDescendantNode() {
    let irrelevantDescendantNode = null;

    const singleChildNode = this.getSingleChildNode();

    if (singleChildNode !== null) {
      const singleChildNodeIrrelevant = singleChildNode.isIrrelevant();

      if (singleChildNodeIrrelevant) {
        irrelevantDescendantNode = singleChildNode.retrieveIrrelevantDescendantNode();

        if (irrelevantDescendantNode === null) {
          irrelevantDescendantNode = singleChildNode;  ///
        }
      }
    }

    return irrelevantDescendantNode;
  }

  getSingleChildNonTerminalNode() {
    let singleChildNonTerminalNode = null;

    const singleChildNode = this.getSingleChildNode();

    if (singleChildNode !== null) {
      const singleChildNodeNonTerminalNode = singleChildNode.isNonTerminalNode();

      if (singleChildNodeNonTerminalNode) {
        singleChildNonTerminalNode = singleChildNode; ///
      }
    }

    return singleChildNonTerminalNode;
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

  createNonTerminalNode(childNodes, precedence, state) {
    const opacity = this.getOpacity(),
          ruleName = this.getRuleName(),
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity) {
    if (opacity === undefined) {
      opacity = precedence; ///

      precedence = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const nonTerminalNode = NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }
}
