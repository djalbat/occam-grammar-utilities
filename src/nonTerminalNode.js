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

  findLeftLeaningNode(rewrittenNode, state) {
    let leftLeaningNode = null;

    const ruleName = this.getRuleName();

    this.forwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
          nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

        if (nonTerminalNodeRuleName === ruleName) {
          leftLeaningNode = nonTerminalNode;  ///
        }
      }

      return true;
    });

    return leftLeaningNode;
  }

  findRightLeaningNode(rewrittenNode, state) {
    let rightLeaningNode = null;

    const ruleName = this.getRuleName();

    this.backwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
          nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

        if (nonTerminalNodeRuleName === ruleName) {
          rightLeaningNode = nonTerminalNode;  ///
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
    let rewrittenNode = this;

    const rightLeaningNode = this.findRightLeaningNode(rewrittenNode, state),
      rightLeftLeaningNode = (rightLeaningNode !== null) ?
        rightLeaningNode.findLeftLeaningNode(rewrittenNode, state) :  ///
        null;

    if (rightLeftLeaningNode !== null) {
      let leftLeaningNode = this.rotateLeft(rightLeftLeaningNode, rightLeaningNode, state);

      const unprecedented = this.isUnprecedented(),  ///
        leftLeaningNodeUnprecedented = leftLeaningNode.isUnprecedented();

      if (unprecedented || leftLeaningNodeUnprecedented) {
        this.rotateRight(rightLeftLeaningNode, rightLeaningNode, leftLeaningNode)
      } else {
        leftLeaningNode = leftLeaningNode.balance(state); ///

        if (leftLeaningNode === null) {
          rewrittenNode = null;
        }
      }
    }

    if (rewrittenNode !== null) {
      const unprecedented = this.isUnprecedented();

      if (unprecedented) {
        rewrittenNode = null;
      }
    }

    return rewrittenNode;
  }

  remove() {
    const parentNode = this.getParentNode(),
          removedChildNode = this;  ///

    parentNode.removeChildNode(removedChildNode);
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

  rotateRight(rightLeftLeaningNode, rightLeaningNode, leftLeaningNode) {
    let childNodes;

    childNodes = this.removeAllButFirstChildNode();

    rightLeftLeaningNode.remove();

    leftLeaningNode.lift();

    let precedence;

    precedence = this.getPrecedence();

    rightLeaningNode.setPrecedence(precedence);

    precedence = leftLeaningNode.getPrecedence();

    this.setPrecedence(precedence);

    childNodes = [  ///
      rightLeftLeaningNode,
      ...childNodes
    ];

    rightLeaningNode.addChildNodes(childNodes);

    const childNode = rightLeaningNode,  ///
      multiplicity = this.getMultiplicity(),
      startIndex = multiplicity;  ///

    this.addChildNode(childNode, startIndex);
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
