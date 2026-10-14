"use strict";

import { NonTerminalNode } from "occam-parsers";

import { first, tail } from "../utilities/array";

export default class RewrittenNode extends NonTerminalNode {
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
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          tailChildNodes = tail(childNodes),
          reducedNode = firstChildNode, ///
          repeatedNodes = tailChildNodes, ///
          rewrittenNode = this; ///

    let accumulatorNode;

    accumulatorNode = reducedNode.accumulate(rewrittenNode, state);

    repeatedNodes.forEach((repeatedNode) => {
      accumulatorNode = repeatedNode.lift(accumulatorNode, rewrittenNode, state);
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

