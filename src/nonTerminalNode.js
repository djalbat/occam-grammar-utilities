"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

export default class NonTerminalNode extends NonTerminalNodeBase {
  findCutNode() {
    let cutNode = null;

    this.findChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              terminalNodeCutNode = terminalNode.isCutNode();

        if (terminalNodeCutNode) {
          cutNode = terminalNode;///

          return true;
        }
      }
    });

    return cutNode;
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

    this.someChildNode((childNode, index) => {
      if (index > 0) {
        const childNodeNonTerminalNode = childNode.isNonTerminalNode();

        if (childNodeNonTerminalNode) {
          const nonTerminalNode = childNode,  ///
                nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

          if (nonTerminalNodeRuleName === ruleName) {
            rightLeadningNode = nonTerminalNode;  ///

            return true;
          }
        }
      }
    });

    return rightLeadningNode;
  }

  removeChildNodesLeftOfNode(node) {
    const childNode = node, ///
          cutIndex = this.indexOfChildNode(childNode),
          startIndex = 0,
          deleteCount = cutIndex, ///
          removedChildNodesLeftOfCut = this.spliceChildNodes(startIndex, deleteCount);

    return removedChildNodesLeftOfCut;
  }

  isCut() {
    const cutNode = this.findCutNode(),
          cut = (cutNode !== null);

    return cut;
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

  isUnprecedented() {
    // const node = this,  ///
    //       nodeUnprecedented = isNodeUnprecedented(node),
    //       unprecedented = nodeUnprecedented;  ///

    const unprecedented = false;

    return unprecedented;
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

  tiltLeft(rewrittenNode, state) {
    const rightLeaningNode = this.findRightLeadningNode();

    if (rightLeaningNode === null) {
      return;
    }

    const leftLeaningNode = rightLeaningNode.findLeftLeadningNode();

    if (leftLeaningNode === null) {
      return;
    }

    leftLeaningNode.remove();

    const precedence = this.getPrecedence(),
          removedChildNodesLeftOfRightLeadningNode = this.removeChildNodesLeftOfNode(rightLeaningNode);

    rightLeaningNode.lift();

    const childNodes = [
            ...removedChildNodesLeftOfRightLeadningNode,
            leftLeaningNode
          ],
          nonTerminalNode = rewrittenNode.createNonTerminalNode(childNodes, precedence, state),
          childNode = nonTerminalNode,  ///
          startIndex = 0;

    this.addChildNode(childNode, startIndex);

    childNode.tiltLeft(rewrittenNode, state);
  }

  resolveCuts(rewrittenNode, state) {
    const cut = this.isCut();

    if (!cut) {
      return;
    }

    this.removeCutNode();

    this.tiltLeft(rewrittenNode, state);
  }

  removeCutNode() {
    const cutNode = this.findCutNode();

    if (cutNode !== null) {
      const removedChildNode = cutNode;  ///

      this.removeChildNode(removedChildNode);
    }
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity); }
}

function isNodeUnprecedented(node) {
  let nodeUnprecedented = false;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node; ///

    if (!nodeUnprecedented) {
      const childNodesLowerPrecedence = node.areChildNodesLowerPrecedence();

      if (childNodesLowerPrecedence) {
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
