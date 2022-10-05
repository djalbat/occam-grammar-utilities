"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class RepeatedNode extends NonTerminalNode {
  clone() { return super.clone(RepeatedNode); }

  static fromRuleNameAndChildNodes(Class, ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(Class, ruleName, childNodes); }
}
