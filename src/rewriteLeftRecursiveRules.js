"use strict";

import { arrayUtilities } from "necessary";

import RewrittenRule from "./rule/rewritten";
import DirectlyRepeatedRule from "./rule/repeated/directly";

import { ruleNamesFromCycles } from "./utilities/ruleNames";
import { isRuleEffectivelyEmpty } from "./utilities/rule";
import { isCycleIrreducible, ruleCyclesFromRuleNameAndCycles } from "./utilities/cycle";

const { filter } = arrayUtilities;

export default function rewriteLeftRecursiveRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    let rule = ruleMap[ruleName];

    const rewrittenRule = RewrittenRule.fromRuleAndCycles(rule, cycles, ruleMap);

    rule = rewrittenRule; ///

    ruleMap[ruleName] = rule;
  });

  const directlyRepeatedRules = rulesFromRuleMapAndRule(ruleMap, DirectlyRepeatedRule);

  directlyRepeatedRules.forEach((directlyRepeatedRule) => {
    const directlyRepeatedRuleEffectivelyEmpty = isRuleEffectivelyEmpty(directlyRepeatedRule, ruleMap);

    if (directlyRepeatedRuleEffectivelyEmpty) {
      const directlyRepeatedRuleName = directlyRepeatedRule.getName();

      throw new Error(`The directly repeated '${directlyRepeatedRuleName}' rule is effectively empty.`);
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

function rulesFromRuleMapAndRule(ruleMap, Rule) {
  const rules = Object.values(ruleMap); ///

  filter(rules, (rule) => {
    const ruleRule = (rule instanceof Rule);

    if (ruleRule) {
      return true;
    }
  });

  return rules;
}
