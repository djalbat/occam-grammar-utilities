"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class IndirectNode extends NonTerminalNode {
  isUnprecedented() {
    const unprecedented = false;

    return unprecedented;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IndirectNode, ruleName, childNodes, precedence, opacity); }
}
