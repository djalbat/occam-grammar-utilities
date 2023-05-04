"use strict";

import { NonTerminalNode } from "occam-parsers";

import { ruleNameFromReducedRuleName } from "../utilities/ruleName";

export default class RewrittenNode extends NonTerminalNode {
  static fromReducedNode(reducedNode) {
    const reducedNodeRuleName = reducedNode.getRuleName(),
          reducedRuleName = reducedNodeRuleName,  ///
          ruleName = ruleNameFromReducedRuleName(reducedRuleName),
          childNodes = reducedNode.getChildNodes(),
          rewrittenNode = new RewrittenNode(ruleName, childNodes);

    return rewrittenNode;
  }
}
