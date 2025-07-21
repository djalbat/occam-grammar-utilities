"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNonTerminalNodeUnprecedented } from "../utilities/precedence";
import { rewriteReducedNodes, rewriteDirectlyRepeatedNodes, rewriteIndirectlyRepeatedNodes } from "../utilities/rewrite";

export default class RewrittenNode extends NonTerminalNode {
  rewrite(state) {
    let nonTerminalNode;

    const ruleName = this.getRuleName(),
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName);

    nonTerminalNode = this.clone();

    const opacity = nonTerminalNode.getOpacity(),
          childNodes = nonTerminalNode.getChildNodes(),
          precedence = nonTerminalNode.getPrecedence();

    nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);

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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RewrittenNode, ruleName, childNodes, opacity, precedence); }
}
