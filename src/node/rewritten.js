"use strict";

import { NonTerminalNode } from "occam-parsers";

import { ruleNameFromReducedRuleName, ruleNameFromRepeatedRuleName } from "../utilities/ruleName";

export default class RewrittenNode extends NonTerminalNode {
  clone() { return super.clone(RewrittenNode); }

  static fromReducedNode(reducedNode) {
    const reducedNodeRuleName = reducedNode.getRuleName(),
          reducedRuleName = reducedNodeRuleName,  ///
          ruleName = ruleNameFromReducedRuleName(reducedRuleName),
          childNodes = reducedNode.getChildNodes(),
          rewrittenNode = new RewrittenNode(ruleName, childNodes);

    return rewrittenNode;
  }

  static fromRepeatedNode(repeatedNode) {
    const repeatedNodeRuleName = repeatedNode.getRuleName(),
          repeatedRuleName = repeatedNodeRuleName,  ///
          ruleName = ruleNameFromRepeatedRuleName(repeatedRuleName),
          childNodes = repeatedNode.getChildNodes(),
          rewrittenNode = new RewrittenNode(ruleName, childNodes);

    return rewrittenNode;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RewrittenNode, ruleName, childNodes); }
}
