"use strict";

import { NonTerminalNode } from "occam-parsers";

import { rewriteReducedChildNode, rewriteDirectlyRepeatedNodes, rewriteIndirectlyRepeatedNodes } from "../utilities/rewrite";

export default class RewrittenNode extends NonTerminalNode {
  rewrite(context) {
    let nonTerminalNode;

    nonTerminalNode = this.clone(); ///

    nonTerminalNode = nonTerminalNodeFromNonTerminalNode(nonTerminalNode, context); ///

    rewriteDirectlyRepeatedNodes(nonTerminalNode, context);

    const parentNode = rewriteIndirectlyRepeatedNodes(nonTerminalNode, context);

    {
      const nonTerminalNode = parentNode; ///

      rewriteReducedChildNode(nonTerminalNode, context);
    }

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RewrittenNode, ruleName, childNodes, opacity, precedence); }
}

function nonTerminalNodeFromNonTerminalNode(nonTerminalNode, context) {
  const opacity = nonTerminalNode.getOpacity(),
        ruleName = nonTerminalNode.getRuleName(),
        precedence = nonTerminalNode.getPrecedence(),
        childNodes = nonTerminalNode.removeChildNodes(),
        NonTerminalNode = context.NonTerminalNodeFromRuleName(ruleName);

  nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);  ///

  return nonTerminalNode;
}
