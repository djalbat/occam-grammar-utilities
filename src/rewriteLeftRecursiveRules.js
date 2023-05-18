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

    rewriteRule(rule, cycles, ruleMap);
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

function rewriteRule(rule, cycles, ruleMap) {
  const ruleName = rule.getName();

  rule.removeAllDefinitions();

  const rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, ruleMap);

  if (rewrittenDefinition !== null) {
    const definition = rewrittenDefinition; ///

    rule.addDefinition(definition);
  }

  const paths = pathsFromRuleNameAndCycles(ruleName, cycles);

  paths.forEach((path) => {
    const rewrittenDefinition = RewrittenDefinition.fromPath(path, ruleMap);

    if (rewrittenDefinition !== null) {
      const definition = rewrittenDefinition; ///

      rule.addDefinition(definition);
    }
  });
}
