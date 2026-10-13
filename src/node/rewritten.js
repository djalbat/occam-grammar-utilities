"use strict";

import { NonTerminalNode } from "occam-parsers";

import { rewriteRewrittenNode } from "../utilities/node";

export default class RewrittenNode extends NonTerminalNode {
  rewrite(state) {
    let rewrittenNode;

    rewrittenNode = this.clone(); ///

    rewriteRewrittenNode(rewrittenNode, state);

    const nonTerminalNode = nonTerminalNodeFromRewrittenNode(rewrittenNode, state); ///

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}

function nonTerminalNodeFromRewrittenNode(rewrittenNode, state) {
  const opacity = rewrittenNode.getOpacity(),
        ruleName = rewrittenNode.getRuleName(),
        precedence = rewrittenNode.getPrecedence(),
        childNodes = rewrittenNode.removeChildNodes(),
        NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
        nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

  return nonTerminalNode;
}
