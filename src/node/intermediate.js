"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class IntermediateNode extends NonTerminalNode {
  rewrite() {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IntermediateNode, ruleName, childNodes, precedence, opacity); }
}
