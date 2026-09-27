"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

export default class NonTerminalNode extends NonTerminalNodeBase {
  isUnprecedented() {
    const node = this,  ///
          nodeUnprecedented = isNodeUnprecedented(node),
          unprecedented = nodeUnprecedented;  ///

    return unprecedented;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
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
