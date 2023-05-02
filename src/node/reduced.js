"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class ReducedNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(ReducedNode, ruleName, childNodes); }
}
