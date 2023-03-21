"use strict";

import { NonTerminalNode } from "occam-parsers";

import { ruleNameFromReducedRuleName,
         ruleNameFromRepeatedRuleName,
         ruleNameFromImplicitlyReducedRuleName,
         ruleNameFromIndirectlyRepeatedRuleName } from "../utilities/ruleName";

export default class RewrittenNode extends NonTerminalNode {
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

  static fromImplicitlyReducedNode(implicitlyReducedNode) {
    const implicitlyReducedNodeRuleName = implicitlyReducedNode.getRuleName(),
          implicitlyReducedRuleName = implicitlyReducedNodeRuleName,  ///
          ruleName = ruleNameFromImplicitlyReducedRuleName(implicitlyReducedRuleName),
          childNodes = implicitlyReducedNode.getChildNodes(),
          rewrittenNode = new RewrittenNode(ruleName, childNodes);

    return rewrittenNode;
  }

  static fromIndirectlyRepeatedNode(indirectlyRepeatedNode) {
    const indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,
          ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName),
          childNodes = indirectlyRepeatedNode.getChildNodes(),
          rewrittenNode = new RewrittenNode(ruleName, childNodes);

    return rewrittenNode;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RewrittenNode, ruleName, childNodes); }
}
