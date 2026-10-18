"use strict";

import { Rule } from "occam-parsers";

import RewrittenDefinition from "../definition/rewritten";

import { ruleNameFromCycle } from "../utilities/cycle";

export default class RewrittenRule extends Rule {
  static fromCycle(cycle, ruleMap) {
    const ruleName = ruleNameFromCycle(cycle),
          rule = ruleMap[ruleName],
          rewrittenDefinition = RewrittenDefinition.fromRule(rule),
          definition = rewrittenDefinition, ///
          name = rule.getName(),
          opacity = null,
          definitions = [
            definition
          ],
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}
