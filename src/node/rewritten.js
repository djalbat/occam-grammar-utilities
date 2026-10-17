"use strict";

import { arrayUtilities } from "necessary";
import {NonTerminalNode as NonTerminalNodeBase, NonTerminalNode} from "occam-parsers";

const { first, tail } = arrayUtilities;

export default class RewrittenNode extends NonTerminalNode {
  isUnprecedented() {
    let unprecedented = false;

    const node = this,  ///
          nodeUnprecedented = isNodeUnprecedented(node);

    if (nodeUnprecedented) {
      unprecedented = true;
    }

    return unprecedented;
  }

  isSingular() {
    const multiplicity = this.getMultiplicity(),
          singular = (multiplicity === 1);

    return singular;
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

  findLeftLeaningNode() {
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

  findRightLeaningNode() {
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

  lift() {
    const parentNode = this.getParentNode(),
          removedChildNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = removedChildNodes;  ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  remove() {
    const parentNode = this.getParentNode(),
          removedChildNode = this;  ///

    parentNode.removeChildNode(removedChildNode);
  }

  rewrite(state) {
    let rewrittenNode;

    rewrittenNode = this.clone(); ///

    rewrittenNode.simplify(state);

    rewrittenNode.resolve(state);

    return rewrittenNode;
  }

  simplify(state) {
    const singular = this.isSingular(),
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          reducedNode = firstChildNode; ///

    if (singular) {
      reducedNode.lift(state);

      return;
    }

    const tailChildNodes = tail(childNodes),
          repeatedNodes = tailChildNodes, ///
          rewrittenNode = this; ///

    let accumulatorNode;

    accumulatorNode = reducedNode.accumulate(rewrittenNode, state);

    repeatedNodes.forEach((repeatedNode, index) => {
      const initial = (index === 0);

      accumulatorNode = repeatedNode.lift(accumulatorNode, rewrittenNode, initial, state);
    });
  }

  resolve(state) {
    const rightLeaningNode = this.findRightLeaningNode(),
          rightLeftLeaningNode = (rightLeaningNode !== null) ?
                                   rightLeaningNode.findLeftLeaningNode() :  ///
                                     null;

    if (rightLeftLeaningNode === null) {
      return;
    }

    const leftLeaningNode = this.rotateLeft(rightLeftLeaningNode, rightLeaningNode, state),
          childNodesPrecedenceCompares = this.compareChildNodesPrecedence();

    if (!childNodesPrecedenceCompares) {
      this.rotateRight(rightLeftLeaningNode, rightLeaningNode, leftLeaningNode)

      return;
    }

    const nonTerminalNode = leftLeaningNode;  ///

    nonTerminalNode.resolve(state);
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

  createNonTerminalNode(childNodes, precedence, state) {
    const opacity = this.getOpacity(),
          ruleName = this.getRuleName(),
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity); }
}

function isNodeUnprecedented(node) {
  let nodeUnprecedented = false;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node; ///

    if (!nodeUnprecedented) {
      const childNodesPrecedenceCompares = node.compareChildNodesPrecedence();

      if (!childNodesPrecedenceCompares) {
        nodeUnprecedented = true;
      }
    }

    if (!nodeUnprecedented) {
      nodeUnprecedented = nonTerminalNode.someChildNode((childNode) => {
        const childNodeUnprecedented = isNodeUnprecedented(childNode);

        if (childNodeUnprecedented) {
          return true;
        }
      });
    }
  }

  return nodeUnprecedented;
}
