"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RewrittenRule from "./rule/rewritten";
import RecursiveDefinition from "./definition/recursive";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { isInstanceOf } from "./utilities/class";

const { find } = arrayUtilities;

export default function eliminateLeftRecursion(startRule, ruleMap) {
  const rule = startRule, ///
        reducedRules = [],
        rewrittenRules = [],
        leftRecursiveRules = [],
        recursiveDefinitions = [],
        leftRecursiveDefinitions = [];

  retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

  retrieveLeftRecursiveRules(leftRecursiveRules, leftRecursiveDefinitions, ruleMap);

  reduceLeftRecursiveRules(leftRecursiveRules, reducedRules, ruleMap);

  rewriteLeftRecursiveRules(leftRecursiveRules, rewrittenRules, leftRecursiveDefinitions, ruleMap);

  eliminateDirectLeftRecursion(rewrittenRules, ruleMap);

  const startRuleName = startRule.getName();

  startRule = ruleMap[startRuleName]; ///

  return startRule;
}

function reduceLeftRecursiveRules(leftRecursiveRules, reducedRules, ruleMap) {
  leftRecursiveRules.forEach((leftRecursiveRule) => {
    const rule = leftRecursiveRule, ///
          reducedRule = ReducedRule.fromRule(rule);

    if (reducedRule !== null) {
      const reducedRuleName = reducedRule.getName();

      ruleMap[reducedRuleName] = reducedRule;

      reducedRules.push(reducedRule);
    }
  });
}

function rewriteLeftRecursiveRules(leftRecursiveRules, rewrittenRules, leftRecursiveDefinitions, ruleMap) {
  leftRecursiveRules.forEach((leftRecursiveRule) => {
    const rule = leftRecursiveRule, ///
          ruleName = rule.getName(),
          rewrittenRule = RewrittenRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);

    delete ruleMap[ruleName];

    const rewrittenRuleName = ruleName; ///

    ruleMap[rewrittenRuleName] = rewrittenRule;

    rewrittenRules.push(rewrittenRule);
  });
}

function retrieveLeftRecursiveRules(leftRecursiveRules, leftRecursiveDefinitions, ruleMap) {
  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
    const ruleName = leftRecursiveDefinition.getRuleName(),
          rule = ruleMap[ruleName],
          leftRecursiveRulesIncludesRule = leftRecursiveRules.includes(rule);

    if (!leftRecursiveRulesIncludesRule) {
      const leftRecursiveRule = rule; ///

      leftRecursiveRules.push(leftRecursiveRule);
    }

    const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, IndirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
            implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
            ruleName = implicitlyLeftRecursiveDefinition.getRuleName(),
            rule = ruleMap[ruleName],
            leftRecursiveRulesIncludesRule = leftRecursiveRules.includes(rule);

        if (!leftRecursiveRulesIncludesRule) {
          const leftRecursiveRule = rule; ///

          leftRecursiveRules.push(leftRecursiveRule);
        }
    }
  });
}

function eliminateDirectLeftRecursion(rewrittenRules, ruleMap) {
  rewrittenRules.forEach((rewrittenRule) => {
    const rewrittenRuleDefinitions = rewrittenRule.getDefinitions(),
          directlyLeftRecursiveDefinitions = find(rewrittenRuleDefinitions, (rewrittenRuleDefinition) => {
            const rewrittenRuleDefinitionDirectlyLeftRecursiveDefinition = isInstanceOf(rewrittenRuleDefinition, DirectlyLeftRecursiveDefinition);

            if (rewrittenRuleDefinitionDirectlyLeftRecursiveDefinition) {
              return true;
            }
          });

    directlyLeftRecursiveDefinitions.forEach((directlyLeftRecursiveDefinition) => {
      directlyLeftRecursiveDefinition.rewrite(ruleMap);
    });
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
            previousRecursiveRuleNames = previousRecursiveDefinitions.map((previousRecursiveDefinition) => {
              const previousRecursiveDefinitionRuleName = previousRecursiveDefinition.getRuleName(),
                    previousRecursiveRuleName = previousRecursiveDefinitionRuleName;  ///

              return previousRecursiveRuleName;
            }),
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
