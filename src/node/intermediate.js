"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class IntermediateNode extends NonTerminalNode {
  isUnprecedented() {
    const unprecedented = false;

    return unprecedented;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IntermediateNode, ruleName, childNodes, precedence, opacity); }
}
