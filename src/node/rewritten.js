"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class RewrittenNode extends NonTerminalNode {
  isSingular() {
    const multiplicity = this.getMultiplicity(),
          singular = (multiplicity === 1);

    return singular;
  }

  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state, topmost = false) {
    const singular = this.isSingular(),
          reducedNode = this.findReducedNode(),
          repeatedNodes = this.findRepeatedNodes();

    reducedNode.simplify(singular, state);

    repeatedNodes.forEach((repeatedNode, index) => {
      const initial = (index === 0);

      repeatedNode.simplify(initial, state);
    });

    const nonTerminalNode = this.overwrite(state);

    if (topmost) {
      const withPrecedence = true;

      nonTerminalNode.lift(withPrecedence);
    }
  }

  overwrite(state) {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(childNodes, precedence),
          replacedChildNode = this, ///
          replacementChildNode = nonTerminalNode, ///
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    return nonTerminalNode;
  }

  findReducedNode() {
    let reducedNode;

    this.someChildNode((childNode) => {
      reducedNode = childNode;  ///

      return true;
    });

    return reducedNode;
  }

  findRepeatedNodes() {
    const repeatedNodes = [];

    this.someChildNode((childNode, index) => {
      const initial = (index === 0);

      if (!initial) {
        const repeatedNode = childNode;  ///

        repeatedNodes.push(repeatedNode);
      }
    });

    return repeatedNodes;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}
