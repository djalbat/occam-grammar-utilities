"use strict";

import { NonTerminalNode } from "occam-parsers";

import { ruleNameFromReducedRuleName } from "../utilities/ruleName";

export default class RewrittenNode extends NonTerminalNode {
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
