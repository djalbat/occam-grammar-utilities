"use strict";

import { NonTerminalNode } from "occam-parsers";

import { ruleNameFromReducedRuleName } from "../utilities/ruleName";
import { rewriteReducedNodes, rewriteDirectlyRepeatedNodes, rewriteIndirectlyRepeatedNodes } from "../utilities/nodes";

export default class RewrittenNode extends NonTerminalNode {
  getPreviousChildNodes() {
    return this.previousChildNodes;
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

  setPrecedence(precedence) {
    ///
  }

  rewritePrecedence(precedence) {
    super.setPrecedence(precedence);
  }

  static fromReducedNode(reducedNode) {
    const reducedNodeRuleName = reducedNode.getRuleName(),
          reducedRuleName = reducedNodeRuleName,  ///
          ruleName = ruleNameFromReducedRuleName(reducedRuleName),
          childNodes = reducedNode.getChildNodes(),
          precedence = reducedNode.getPrecedence(),
          rewrittenNode = new RewrittenNode(ruleName, childNodes, precedence);

    return rewrittenNode;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RewrittenNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(RewrittenNode, ruleName, childNodes, precedence); }
}
