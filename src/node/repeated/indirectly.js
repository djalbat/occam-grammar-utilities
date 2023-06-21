"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class IndirectlyRepeatedNode extends NonTerminalNode {
  constructor(ruleName, childNodes, precedence = null) {
    super(ruleName, childNodes);

    this.precedence = precedence;
  }

  getPrecedence() {
    return this.precedence;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(IndirectlyRepeatedNode, ruleName, childNodes, precedence); }
}
