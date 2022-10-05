"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class ReducedNode extends NonTerminalNode {
  clone() { return super.clone(ReducedNode); }

  static fromRuleNameAndChildNodes(Class, ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(Class, ruleName, childNodes); }
}
