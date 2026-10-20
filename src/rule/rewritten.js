"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";

import { ruleNameFromCycle } from "../utilities/cycle";

export default class RewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode; ///

    return NonTerminalNode;
  }

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
