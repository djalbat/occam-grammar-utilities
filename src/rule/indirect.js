"use strict";

import { Rule } from "occam-parsers";

import IndirectNode from "../node/indirect";

export default class IndirectRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectNode; ///

    return NonTerminalNode;
  }

  static fromCycle(cycle, ruleMap) {
    let indirectRule = null;

    const length = cycle.getLength();

    if (length > 1) {
      debugger
    }

    return indirectRule;
  }
}
