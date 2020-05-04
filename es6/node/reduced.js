"use strict";

import { NonTerminalNode } from "occam-parsers";

class ReducedNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(ReducedNode, ruleName, childNodes); }
}

module.exports = ReducedNode;
