"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

export default class NonTerminalNode extends NonTerminalNodeBase {
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

  transform(transformation) {
    const nonTerminalNode = this.clone(),
          childNodes = nonTerminalNode.removeChildNodes(),
          precedence = nonTerminalNode.getPrecedence(),
          rollback = transformation();

    if (rollback) {
      this.removeChildNodes();

      this.addChildNodes(childNodes);

      this.setPrecedence(precedence);
    }
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
    let nonTerminalNode = null;

    const rightLeaningNode = this.findRightLeadningNode(),
          leftLeaningNode = (rightLeaningNode !== null) ?
                              rightLeaningNode.findLeftLeadningNode() :
                                null;

    if (leftLeaningNode !== null) {
      this.transform(() => {
        let rollback = false;

        leftLeaningNode.remove();

        const removedChildNodesLeftOfRightLeadningNode = this.removeChildNodesLeftOfNode(rightLeaningNode);

        rightLeaningNode.lift();

        const childNodes = [
          ...removedChildNodesLeftOfRightLeadningNode,
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

          rollback = true;
        }

        return rollback;
      });
    }

    return nonTerminalNode;
  }

  resolveCuts(rewrittenNode, state) {
    // const cut = this.isCut();
    //
    // if (!cut) {
    //   return;
    // }

    const nonTerminalNode = this.tiltLeft(rewrittenNode, state);

    if (nonTerminalNode !== null) {
      nonTerminalNode.resolveCuts(rewrittenNode, state);
    }
  }

  removeChildNodesLeftOfNode(node) {
    const childNode = node, ///
          cutIndex = this.indexOfChildNode(childNode),
          startIndex = 0,
          deleteCount = cutIndex, ///
          removedChildNodesLeftOfCut = this.spliceChildNodes(startIndex, deleteCount);

    return removedChildNodesLeftOfCut;
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
