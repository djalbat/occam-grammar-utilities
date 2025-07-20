"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNonTerminalNodeUnprecedented } from "../utilities/precedence";
import { rewriteReducedNodes, rewriteDirectlyRepeatedNodes, rewriteIndirectlyRepeatedNodes } from "../utilities/rewrite";

export default class RewrittenNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this.clone();

    rewriteDirectlyRepeatedNodes(nonTerminalNode, state);

    const parentNode = rewriteIndirectlyRepeatedNodes(nonTerminalNode, state);

    {
      const nonTerminalNode = parentNode; ///

      rewriteReducedNodes(nonTerminalNode, state);
    }

    return nonTerminalNode;
  }

  isUnprecedented() {
    const nonTerminalNode = this, ///
          nonTerminalNodeUnprecedented = isNonTerminalNodeUnprecedented(nonTerminalNode),
          unprecedented = nonTerminalNodeUnprecedented; ///

    return unprecedented;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(RewrittenNode, ruleName, childNodes, opacity); }
}
