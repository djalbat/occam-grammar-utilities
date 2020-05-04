"use strict";

import { NonTerminalNode } from "occam-parsers";

class RepeatedNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RepeatedNode, ruleName, childNodes); }
}

module.exports = RepeatedNode;
