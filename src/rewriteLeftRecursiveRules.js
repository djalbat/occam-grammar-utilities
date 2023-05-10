"use strict";

import RewrittenDefinition from "./definition/rewritten";

import { ruleNamesFromCycles } from "./utilities/ruleNames";
import { isRuleEffectivelyEmpty } from "./utilities/rule";
import { pathsFromRuleNameAndCycles } from "./utilities/path";
import { directlyRepeatedRuleNameFromRuleName } from "./utilities/ruleName";

export default function rewriteLeftRecursiveRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName];

    rewriteRecursiveRule(rule, cycles, ruleMap);
  });

  ruleNames.forEach((ruleName) => {
    const directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRule = ruleMap[directlyRepeatedRuleName],
          directlyRepeatedRuleEffectivelyEmpty = isRuleEffectivelyEmpty(directlyRepeatedRule, ruleMap);

    if (directlyRepeatedRuleEffectivelyEmpty) {
      const directlyRepeatedRuleName = directlyRepeatedRule.getName();

      throw new Error(`The '${directlyRepeatedRuleName}' directly repeated rule is effectively empty.`);
    }
  });
}

function rewriteRecursiveRule(rule, cycles, ruleMap) {
  const ruleName = rule.getName();

  rule.removeAllDefinitions();

  const paths = pathsFromRuleNameAndCycles(ruleName, cycles),
        rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, ruleMap),
        definition = rewrittenDefinition; ///

  rule.addDefinition(definition);

  paths.forEach((path) => {
    const rewrittenDefinition = RewrittenDefinition.fromPath(path, ruleMap),
          definition = rewrittenDefinition; ///

    rule.addDefinition(definition);
  });
}
