"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

export default class NonTerminalNode extends NonTerminalNodeBase {
  isUnprecedented() {
    const node = this,  ///
          unprecedented = isUnprecedented(node);

    return unprecedented;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}

function isUnprecedented(node) {
  let unprecedented = false;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          precedence = nonTerminalNode.getPrecedence();

    if (!unprecedented) {
      const multiplicity = node.getMultiplicity(),
            lastIndex = (multiplicity - 1),
            firstIndex = 0,
            strength = Math.abs(precedence),
            associativity = Math.sign(precedence);


      if ((precedence !== null) && (precedence !== Infinity)) {
        unprecedented = nonTerminalNode.someChildNode((childNode, index) => {
          const last = (index === lastIndex),
                first = (index === firstIndex),
                childNodeLowerPrecedence = childNode.isLowerPrecedence(associativity, strength, first, last);

          if (childNodeLowerPrecedence) {
            return true;
          }
        });
      }
    }

    if (!unprecedented) {
      nonTerminalNode.someChildNode((childNode) => {
        const node = childNode; ///

        unprecedented = isUnprecedented(node);

        if (unprecedented) {
          return true;
        }
      });
    }
  }

  return unprecedented;
}
