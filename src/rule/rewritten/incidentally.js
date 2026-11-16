"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../../node/rewritten";

import { rewrittenRuleNameFromRuleName } from "../../utilities/ruleName";
import { incidentallyRewrittenDefinitionsFromDefinitions } from "../../definition/rewritten/incidentally";

export default class IncidentallyRewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode; ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    let definitions;

    definitions = rule.getDefinitions();

    const ruleName = rule.getName(),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          incidentallyRewrittenDefinitions = incidentallyRewrittenDefinitionsFromDefinitions(definitions, context),
          name = rewrittenRuleName,  ///
          opacity = rule.getOpacity();

    definitions = incidentallyRewrittenDefinitions;  ///

    const incidentallyRewrittenRule = new IncidentallyRewrittenRule(name, opacity, definitions);

    return incidentallyRewrittenRule;
  }
}

export function incidentallyRewrittenRulesFromCycleAndCycles(context, incidentallyRewrittenRules = []) {
  const ruleMap = context.getRuleMap(),
        incidentalRuleNames = context.getIncidentalRuleNames();

  incidentalRuleNames.forEach((incidentalRuleName) => {
    const ruleName = incidentalRuleName,  ///
          rule = ruleMap[ruleName],
          incidentallyRewrittenRule = IncidentallyRewrittenRule.fromRule(rule, context);

    incidentallyRewrittenRules.push(incidentallyRewrittenRule);
  });

  return incidentallyRewrittenRules;
}
