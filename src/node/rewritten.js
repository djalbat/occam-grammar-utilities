"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class RewrittenNode extends NonTerminalNode {
  isSingular() {
    const multiplicity = this.getMultiplicity(),
          singular = (multiplicity === 1);

    return singular;
  }

  lift() {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = childNodes;  ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode.setPrecedence(precedence);
  }

  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  restore(state) {
    this.simplify(state);

    const precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(childNodes, precedence);

    return nonTerminalNode;
  }

  simplify(state) {
    const singular = this.isSingular(),
          reducedNode = this.findReducedNode();

    if (singular) {
      reducedNode.simplify(state);

      return;
    }

    let accumulatorNode;

    const repeatedNodes = this.findRepeatedNodes();

    accumulatorNode = reducedNode.accumulate(state);

    repeatedNodes.forEach((repeatedNode, index) => {
      const initial = (index === 0);

      accumulatorNode = repeatedNode.simplify(accumulatorNode, initial, state);
    });
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
