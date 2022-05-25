"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

export default class ReducedRule extends Rule {
  isEmpty() {
    const definitionsLength = this.definitions.length,
          empty = (definitionsLength === 0);

    return empty;
  }

  static fromRule(rule) {
    const ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          ambiguous = false,
          definitions = [],
          NonTerminalNode = ReducedNode,  ///
          reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);

    return reducedRule;
  }
}
