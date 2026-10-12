"use strict";

import { NonTerminalNode } from "occam-parsers";

import { rewriteReducedChildNode, rewriteDirectlyRepeatedNodes, rewriteIndirectlyRepeatedNodes } from "../utilities/rewrite";

export default class RewrittenNode extends NonTerminalNode {
  rewrite(state) {
    let nonTerminalNode;

    nonTerminalNode = this.clone(); ///

    nonTerminalNode = nonTerminalNodeFromNonTerminalNode(nonTerminalNode, state); ///

    rewriteDirectlyRepeatedNodes(nonTerminalNode, state);

    const parentNode = rewriteIndirectlyRepeatedNodes(nonTerminalNode, state);

    {
      const nonTerminalNode = parentNode; ///

      rewriteReducedChildNode(nonTerminalNode, state);
    }

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}

function nonTerminalNodeFromNonTerminalNode(nonTerminalNode, state) {
  const opacity = nonTerminalNode.getOpacity(),
        ruleName = nonTerminalNode.getRuleName(),
        precedence = nonTerminalNode.getPrecedence(),
        childNodes = nonTerminalNode.removeChildNodes(),
        NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName);

  nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);  ///

  return nonTerminalNode;
}
