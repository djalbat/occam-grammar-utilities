"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";

import { ruleNameFromCycle } from "../utilities/cycle";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";

export default class RewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode; ///

    return NonTerminalNode;
  }

  static fromCycle(cycle, ruleMap) {
    const ruleName = ruleNameFromCycle(cycle),
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          definition = rewrittenDefinition, ///
          name = rewrittenRuleName, ///
          opacity = null,
          definitions = [
            definition
          ],
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}
