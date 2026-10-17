"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

export default class NonTerminalNode extends NonTerminalNodeBase {
  isUnprecedented() {
    let unprecedented = false;

    const node = this,  ///
          nodeUnprecedented = isNodeUnprecedented(node);

    if (nodeUnprecedented) {
      unprecedented = true;
    }

    return unprecedented;
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

    this.someChildNode((childNode, index) => {
      if (index  === 0) {
        const childNodeNonTerminalNode = childNode.isNonTerminalNode();

        if (childNodeNonTerminalNode) {
          const nonTerminalNode = childNode,  ///
                nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

          if (nonTerminalNodeRuleName === ruleName) {
            leftLeaningNode = nonTerminalNode;  ///

            return true;
          }
        }
      }
    });

    return leftLeaningNode;
  }

  findRightLeaningNode() {
    let rightLeaningNode = null;

    const ruleName = this.getRuleName();

    this.backwardsSomeChildNode((childNode, index) => {
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

  resolve(rewrittenNode, state) {
    const rightLeaningNode = this.findRightLeaningNode(),
          rightLeftLeaningNode = (rightLeaningNode !== null) ?
                                   rightLeaningNode.findLeftLeaningNode() :  ///
                                     null;

    if (rightLeftLeaningNode === null) {
      return;
    }

    const leftLeaningNode = this.rotateLeft(rightLeftLeaningNode, rightLeaningNode, rewrittenNode, state),
          childNodesPrecedenceCompares = this.compareChildNodesPrecedence();

    if (!childNodesPrecedenceCompares) {
      this.rotateRight(rightLeftLeaningNode, rightLeaningNode, leftLeaningNode)

      return;
    }

    const nonTerminalNode = leftLeaningNode;  ///

    nonTerminalNode.resolve(rewrittenNode, state);
  }

  rotateLeft(rightLeftLeaningNode, rightLeaningNode, rewrittenNode, state) {
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

    const nonTerminalNode = rewrittenNode.createNonTerminalNode(childNodes, precedence, state);

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
