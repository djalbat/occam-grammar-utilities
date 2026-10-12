"use strict";

import { arrayUtilities } from "necessary";

import RepeatedRule from "./rule/repeated";
import RewrittenRule from "./rule/rewritten";

import { ruleNamesFromCycles } from "./utilities/cycle";
import { isCycleIrreducible, ruleCyclesFromRuleNameAndCycles } from "./utilities/cycle";

const { filter } = arrayUtilities;

export default function rewriteLeftRecursiveRules(cycles, ruleMap, ruleNamesMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    let rule = ruleMap[ruleName] || null

    if (rule == null) {
      throw new Error(`The  '${ruleName}' rule is missing.`);
    }

    const rewrittenRule = RewrittenRule.fromRuleAndCycles(rule, cycles, ruleMap, ruleNamesMap);

    rule = rewrittenRule; ///

    ruleMap[ruleName] = rule;
  });

  const repeatedRules = rulesFromRule(RepeatedRule, ruleMap);

  repeatedRules.forEach((repeatedRule) => {
    const repeatedRuleConsuming = repeatedRule.isConsuming(ruleMap);

    if (!repeatedRuleConsuming) {
      const repeatedRuleName = repeatedRule.getName();

      throw new Error(`The directly repeated '${repeatedRuleName}' rule is non-consuming.`);
    }
  });

  ruleNames.forEach((ruleName) => {
    const ruleCycles = ruleCyclesFromRuleNameAndCycles(ruleName, cycles),
          ruleCyclesIrreducible = ruleCycles.every((ruleCycle) => {
            const ruleCycleIrreducible = isCycleIrreducible(ruleCycle, ruleMap);

            if (ruleCycleIrreducible) {
              return true;
            }
          });

    if (ruleCyclesIrreducible) {
      throw new Error(`None of the cycles including the '${ruleName}' rule have a reduced rule.`);
    }
  });
}

function rulesFromRule(Rule, ruleMap) {
  const rules = Object.values(ruleMap); ///

  filter(rules, (rule) => {
    const ruleRule =  Rule.prototype.isPrototypeOf(rule);

    if (ruleRule) {
      return true;
    }
  });

  return rules;
}
