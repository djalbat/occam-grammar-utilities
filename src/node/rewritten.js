"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNonTerminalNodeUnprecedented } from "../utilities/precedence";
import { rewriteReducedNodes, rewriteDirectlyRepeatedNodes, rewriteIndirectlyRepeatedNodes } from "../utilities/rewrite";

export default class RewrittenNode extends NonTerminalNode {
  isUnprecedented() {
    const nonTerminalNode = this, ///
          nonTerminalNodeUnprecedented = isNonTerminalNodeUnprecedented(nonTerminalNode),
          unprecedented = nonTerminalNodeUnprecedented; ///

    return unprecedented;
  }

  rewrite() {
    const nonTerminalNode = this.clone();

    rewriteDirectlyRepeatedNodes(nonTerminalNode);

    const parentNode = rewriteIndirectlyRepeatedNodes(nonTerminalNode);

    {
      const nonTerminalNode = parentNode; ///

      rewriteReducedNodes(nonTerminalNode);
    }

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(RewrittenNode, ruleName, childNodes, opacity); }
}

