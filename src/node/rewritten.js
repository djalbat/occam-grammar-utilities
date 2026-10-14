"use strict";

import { NonTerminalNode } from "occam-parsers";

import { first, tail } from "../utilities/array";

export default class RewrittenNode extends NonTerminalNode {
  isSingular() {
    const multiplicity = this.getMultiplicity(),
          singular = (multiplicity === 1);

    return singular;
  }

  rewrite(state) {
    let rewrittenNode;

    rewrittenNode = this.clone(); ///

    rewrittenNode.rewriteChildNodes(state);

    const precedence = rewrittenNode.getPrecedence(),
          childNodes = rewrittenNode.removeChildNodes(),
          nonTerminalNode = this.createNonTerminalNode(childNodes, precedence, state);

    return nonTerminalNode;
  }

  rewriteChildNodes(state) {
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

  createNonTerminalNode(childNodes, precedence, state) {
    const opacity = this.getOpacity(),
          ruleName = this.getRuleName(),
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}

