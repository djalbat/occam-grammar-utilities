"use strict";

import { Rule } from "occam-parsers";

import RepeatedNode from "../node/repeated";

import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";

export default class RepeatedRule extends Rule {
  static fromRule(rule) {
    const ruleName = rule.getName(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          name = repeatedRuleName,  ///
          definitions = [],
          NonTerminalNode = RepeatedNode, ///
          repeatedRule = new RepeatedRule(name, definitions, NonTerminalNode);

    return repeatedRule;
  }
}
