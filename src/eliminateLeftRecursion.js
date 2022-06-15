"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RecursiveDefinition from "./definition/recursive";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { isInstanceOf } from "./utilities/class";
import { isRuleDirectlyLeftRecursive, ruleFromLeftRecursiveDefinition } from "./utilities/rule";

const { first } = arrayUtilities;

export default function eliminateLeftRecursion(startRule, ruleMap) {
  const rule = startRule, ///
        rewrittenRules = [],
        recursiveDefinitions = [],
        leftRecursiveDefinitions = [];

  retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

  eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap);

  eliminateDirectLeftRecursion(rewrittenRules, ruleMap);

  const startRuleName = startRule.getName();

  startRule = ruleMap[startRuleName]; ///

  return startRule;
}

function eliminateDirectLeftRecursion(rewrittenRules, ruleMap) {
  rewrittenRules.forEach((rewrittenRule) => rewrittenRule.rewrite(ruleMap));
}

function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, IndirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      return true;
    }
  });

  indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
    const implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
          indirectlyLeftRecursiveRule = ruleFromLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap),
          implicitlyLeftRecursiveRule = ruleFromLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, ruleMap),
          indirectlyLeftRecursiveRuleDirectlyLeftRecursive = isRuleDirectlyLeftRecursive(indirectlyLeftRecursiveRule),
          implicitlyLeftRecursiveRuleDirectlyLeftRecursive = isRuleDirectlyLeftRecursive(implicitlyLeftRecursiveRule);

    if (indirectlyLeftRecursiveRuleDirectlyLeftRecursive && implicitlyLeftRecursiveRuleDirectlyLeftRecursive) {
      const indirectlyLeftRecursiveDefinitionString = indirectlyLeftRecursiveDefinition.asString(),
            implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();

      throw new Error(`The rules containing the '${indirectlyLeftRecursiveDefinitionString}' indirectly left recursive and ${implicitlyLeftRecursiveDefinitionString} implicitly left recursive definitions are both additionally directly recursive and therefore cannot be rewritten.`);
    }

    let rule;

    const directlyLeftRecursiveRule = indirectlyLeftRecursiveRuleDirectlyLeftRecursive ?
                                        indirectlyLeftRecursiveRule : ///
                                          implicitlyLeftRecursiveRule,  ///
          nonDirectlyLeftRecursiveRule = indirectlyLeftRecursiveRuleDirectlyLeftRecursive ?
                                           implicitlyLeftRecursiveRule :  ///
                                             indirectlyLeftRecursiveRule; ///

    rule = nonDirectlyLeftRecursiveRule;  ///

    const ruleName = rule.getName(),
          reducedRule = ReducedRule.fromRule(rule),
          reducedRuleName = reducedRule.getName(),
          leftRecursiveRuleName = ruleName; ///

    ruleMap[reducedRuleName] = reducedRule;

    rule = directlyLeftRecursiveRule; ///

    const leftRecursiveDefinitions = leftRecursiveDefinitionsFromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName);

    debugger
  });
}

function retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
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
      const replacedDefinition = definition, ///
            replacementDefinition = recursiveDefinition;  ///

      rule.replaceDefinition(replacedDefinition, replacementDefinition);

      const recursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(recursiveDefinition, IndirectlyLeftRecursiveDefinition);

      if (recursiveDefinitionIndirectlyLeftRecursiveDefinition) {
        const indirectlyLeftRecursiveDefinition = recursiveDefinition, ///
              implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
              leftRecursiveDefinition = implicitlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
              ruleName = implicitlyLeftRecursiveDefinition.getRuleName(),
              replacedDefinition = leftRecursiveDefinition, ///
              replacementDefinition = implicitlyLeftRecursiveDefinition;  ///

        rule = ruleMap[ruleName];

        rule.replaceDefinition(replacedDefinition, replacementDefinition);
      }
    }
  }

  return recursiveDefinition;
}

function retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    const recursiveDefinition = retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

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

function leftRecursiveDefinitionsFromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName) {
  const definitions = rule.getDefinitions(),
        leftRecursiveDefinitions = definitions.filter((definition) => {
          const definitionLeftRecursiveDefinition = isInstanceOf(definition, LeftRecursiveDefinition);

          if (definitionLeftRecursiveDefinition) {
            const leftRecursiveDefinition = definition, ///
                  leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(),
                  firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

            if (firstLeftRecursiveRuleName === leftRecursiveRuleName) {
              return true;
            }
          }
        });

  return leftRecursiveDefinitions;
}

