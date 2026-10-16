"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

export default class NonTerminalNode extends NonTerminalNodeBase {
  isUnprecedented(shallow = false) {
    let unprecedented;

    if (shallow) {
      unprecedented = super.isUnprecedented();
    } else {
      unprecedented = false;

      const node = this,  ///
            nodeUnprecedented = isNodeUnprecedented(node);

      if (nodeUnprecedented) {
        unprecedented = true;
      }
    }

    return unprecedented;
  }

  isLeftLeadning() {
    const leftLeadningNode = this.findLeftLeadningNode(),
          leftLeadning = (leftLeadningNode !== null);

    return leftLeadning;
  }

  isRightLeaning() {
    const rightLeadningNode = this.findRightLeadningNode(),
          rightLeaning = (rightLeadningNode !== null);

    return rightLeaning;
  }

  findLeftLeadningNode() {
    let leftLeadningNode = null;

    const ruleName = this.getRuleName();

    this.someChildNode((childNode, index) => {
      if (index  === 0) {
        const childNodeNonTerminalNode = childNode.isNonTerminalNode();

        if (childNodeNonTerminalNode) {
          const nonTerminalNode = childNode,  ///
                nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

          if (nonTerminalNodeRuleName === ruleName) {
            leftLeadningNode = nonTerminalNode;  ///

            return true;
          }
        }
      }
    });

    return leftLeadningNode;
  }

  findRightLeadningNode() {
    let rightLeadningNode = null;

    const ruleName = this.getRuleName();

    this.backwardsSomeChildNode((childNode, index) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

        if (nonTerminalNodeRuleName === ruleName) {
          rightLeadningNode = nonTerminalNode;  ///
        }
      }

      return true;
    });

    return rightLeadningNode;
  }

  remove() {
    const parentNode = this.getParentNode(),
          removedChildNode = this;  ///

    parentNode.removeChildNode(removedChildNode);
  }

  lift() {
    const parentNode = this.getParentNode(),
          removedChildNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = removedChildNodes;  ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  rotate(rewrittenNode, state) {
    let nonTerminalNode = null;

    const rightLeaningNode = this.findRightLeadningNode(),
          leftLeaningNode = (rightLeaningNode !== null) ?
                              rightLeaningNode.findLeftLeadningNode() :
                                null;

    if (leftLeaningNode !== null) {
      this.transform(() => {
        let success = true;

        leftLeaningNode.remove();

        const removedChildNodes = this.removeChildNodesLeftOfNode(rightLeaningNode);

        rightLeaningNode.lift();

        const childNodes = [
          ...removedChildNodes,
          leftLeaningNode
        ];

        let precedence;

        precedence = this.getPrecedence();

        nonTerminalNode = rewrittenNode.createNonTerminalNode(childNodes, precedence, state);

        precedence = rightLeaningNode.getPrecedence();

        this.setPrecedence(precedence);

        const childNode = nonTerminalNode,  ///
              startIndex = 0;

        this.addChildNode(childNode, startIndex);

        const shallow = true,
              unprecedented = this.isUnprecedented(shallow);

        if (unprecedented) {
          nonTerminalNode = null;

          success = false;
        }

        return success;
      });
    }

    return nonTerminalNode;
  }

  resolve(rewrittenNode, state) {
    const nonTerminalNode = this.rotate(rewrittenNode, state);

    if (nonTerminalNode !== null) {
      nonTerminalNode.resolve(rewrittenNode, state);
    }
  }

  transform(callback) {
    const nonTerminalNode = this.clone(),
          childNodes = nonTerminalNode.removeChildNodes(),
          precedence = nonTerminalNode.getPrecedence(),
          success = callback();

    if (!success) {
      this.removeChildNodes();

      this.addChildNodes(childNodes);

      this.setPrecedence(precedence);
    }
  }

  removeChildNodesLeftOfNode(node) {
    const childNode = node, ///
          cutIndex = this.indexOfChildNode(childNode),
          startIndex = 0,
          deleteCount = cutIndex, ///
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

      if (childNodesPrecedenceCompares) {
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
