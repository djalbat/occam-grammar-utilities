"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class LeftRecursiveNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(LeftRecursiveNode, ruleName, childNodes, opacity); }
}
