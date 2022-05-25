"use strict";

import RewrittenRule from "./rule/rewritten";
import RecursiveDefinition from "./definition/recursive";
import RewrittenDefinition from "./definition/rewritten";
import DirectlyLeftRecursiveDefinition from "./definition/leftRecursive/directly";
// import IndirectlyLeftRecursiveDefinition from "./definition/leftRecursive/indirectly";

import { isInstanceOf } from "./utilities/class";

export default function eliminateLeftRecursion(startRule, ruleMap) {
  const rule = startRule, ///
        recursiveDefinitions = [],
        leftRecursiveDefinitions = [];

  retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

  rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, ruleMap);

  const rewrittenRules = retrieveRewrittenRules(ruleMap);

  pruneRewrittenRules(rewrittenRules, ruleMap);

  const startRuleName = startRule.getName();

  startRule = ruleMap[startRuleName]; ///

  return startRule;
}

function pruneRewrittenRules(rewrittenRules, ruleMap) {
  rewrittenRules.forEach((rewrittenRule) => {
    rewrittenRule.prune(ruleMap, RewrittenDefinition);
  });
}

function retrieveRewrittenRules(ruleMap) {
  const rules = Object.values(ruleMap),
        rewrittenRules = rules.reduce((rewrittenRules, rule) => {
          const ruleRewrittenRule = isInstanceOf(rule, RewrittenRule);

          if (ruleRewrittenRule) {
            const rewrittenRule = rule; ///

            rewrittenRules.push(rewrittenRule);
          }

          return rewrittenRules;
        }, []);

  return rewrittenRules;
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

  const leftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition); /// ||
                                  /// IndirectlyLeftRecursiveDefinition.fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions); */

  if (leftRecursiveDefinition !== null) {
    leftRecursiveDefinitions.push(leftRecursiveDefinition);
  }
}

function retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    retrieveLeftRecursiveDefinition(ruleName, definition, recursiveDefinitions, leftRecursiveDefinitions);

    const recursiveDefinition = RecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

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
