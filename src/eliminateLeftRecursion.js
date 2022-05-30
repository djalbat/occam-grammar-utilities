"use strict";

import ReducedRule from "./rule/reduced";
import RecursiveDefinition from "./definition/recursive";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { isInstanceOf } from "./utilities/class";

export default function eliminateLeftRecursion(startRule, ruleMap) {
  const rule = startRule, ///
        reducedRules = [],
        recursiveDefinitions = [],
        leftRecursiveDefinitions = [];

  retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

  rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, ruleMap);

  retrieveReducedRules(reducedRules, ruleMap);

  rewriteReducedRules(reducedRules, ruleMap);

  const startRuleName = startRule.getName();

  startRule = ruleMap[startRuleName]; ///

  return startRule;
}

function rewriteReducedRules(reducedRules, ruleMap) {
  reducedRules.forEach((reducedRule) => {
    reducedRule.rewrite(ruleMap);
  });
}

function retrieveReducedRules(reducedRules, ruleMap) {
  const rules = Object.values(ruleMap);

  rules.forEach((rule) => {
    const ruleReducedRule = isInstanceOf(rule, ReducedRule);

    if (ruleReducedRule) {
      const reducedRule = rule; ///

      reducedRules.push(reducedRule);
    }
  });
}

function rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, ruleMap) {
  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
    leftRecursiveDefinition.rewrite(ruleMap);
  });
}

function retrieveLeftRecursiveDefinition(ruleName, definition, recursiveDefinitions, leftRecursiveDefinitions) {
  const leftRecursiveDefinitionMatchesDefinition = leftRecursiveDefinitions.some((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionMatchesDefinition = leftRecursiveDefinition.match(definition);

    if (leftRecursiveDefinitionMatchesDefinition) {
      return true;
    }
  });

  if (leftRecursiveDefinitionMatchesDefinition) {
    return;
  }

  const leftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition) ||
                                  IndirectlyLeftRecursiveDefinition.fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions);

  if (leftRecursiveDefinition !== null) {
    leftRecursiveDefinitions.push(leftRecursiveDefinition);
  }
}

function retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    retrieveLeftRecursiveDefinition(ruleName, definition, recursiveDefinitions, leftRecursiveDefinitions);

    const recursiveDefinition = LeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition) ||
                                RecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

    if (recursiveDefinition !== null) {
      const previousRecursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ],
            previousRecursiveRuleNames = previousRecursiveDefinitions.map((previousRecursiveDefinition) => recursiveRuleNameFromRecursiveDefinition(previousRecursiveDefinition)),
            recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames();

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const previousRecursiveRuleNamesIncludesRecursiveRuleName = previousRecursiveRuleNames.includes(recursiveRuleName);

        if (!previousRecursiveRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = ruleMap[ruleName] || null; ///

          if (rule !== null) {
            const recursiveDefinitions = previousRecursiveDefinitions;  ///

            retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);
          }
        }
      });
    }
  });
}

function recursiveRuleNameFromRecursiveDefinition(recursiveDefinition) {
  const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
        recursiveRuleName = recursiveDefinitionRuleName;  ///

  return recursiveRuleName;
}
