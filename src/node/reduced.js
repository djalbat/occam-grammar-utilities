"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class ReducedNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(Class, ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(Class, ruleName, childNodes); }
}
