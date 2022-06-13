"use strict";

import ReducedRule from "./rule/reduced";
import RewrittenRule from "./rule/rewritten";
import RecursiveDefinition from "./definition/recursive";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { isInstanceOf } from "./utilities/class";

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

  rewriteLeftRecursiveRules(leftRecursiveRules, rewrittenRules, ruleMap);

  ///

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

function rewriteLeftRecursiveRules(leftRecursiveRules, rewrittenRules, ruleMap) {
  leftRecursiveRules.forEach((leftRecursiveRule) => {
    const rule = leftRecursiveRule, ///
          ruleName = rule.getName(),
          rewrittenRule = RewrittenRule.fromRule(rule);

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

    // const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, IndirectlyLeftRecursiveDefinition);
    //
    // if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
    //   const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
    //         implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
    //         ruleName = implicitlyLeftRecursiveDefinition.getRuleName(),
    //         rule = ruleMap[ruleName],
    //         leftRecursiveRulesIncludesRule = leftRecursiveRules.includes(rule);
    //
    //     if (!leftRecursiveRulesIncludesRule) {
    //       const leftRecursiveRule = rule; ///
    //
    //       leftRecursiveRules.push(leftRecursiveRule);
    //     }
    // }
  });
}

function eliminateDirectLeftRecursion(rewrittenRules, ruleMap) {
  rewrittenRules.forEach((rewrittenRule) => rewrittenRule.rewrite(ruleMap));
}

function retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, leftRecursiveDefinitions) {
  let recursiveDefinition;

  const ruleName = rule.getName(),
        definitionRecursiveDefinition = isInstanceOf(definition, RecursiveDefinition);

  if (definitionRecursiveDefinition) {
    recursiveDefinition = definition; ///
  } else {
    const leftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) ||
                                    DirectlyLeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition) ||
                                    LeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

    if (leftRecursiveDefinition !== null) {
      leftRecursiveDefinitions.push(leftRecursiveDefinition);

      recursiveDefinition = leftRecursiveDefinition;  ///
    } else {
      recursiveDefinition = RecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);
    }

    if (recursiveDefinition !== null) {
      const replaceDefinition = definition, ///
            replacementDefinition = recursiveDefinition;  ///

      rule.replaceDefinition(replaceDefinition, replacementDefinition);
    }
  }

  return recursiveDefinition;
}

function retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    const recursiveDefinition = retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, leftRecursiveDefinitions);

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

            retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, ruleMap);
          }
        }
      });
    }
  });
}
