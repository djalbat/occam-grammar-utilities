"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RecursiveDefinition from "./definition/recursive";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { cloneParts } from "./utilities/parts";
import { isInstanceOf } from "./utilities/class";
import { isRuleDirectlyLeftRecursive, ruleFromLeftRecursiveDefinition } from "./utilities/rule";

const { tail, first } = arrayUtilities;

export default function eliminateLeftRecursion(startRule, ruleMap) {
  const rule = startRule, ///
        rewrittenRules = [],
        recursiveDefinitions = [],
        leftRecursiveDefinitions = [];

  retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

  eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap);

  // eliminateDirectLeftRecursion(rewrittenRules, ruleMap);

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

    const directlyLeftRecursiveRule = indirectlyLeftRecursiveRuleDirectlyLeftRecursive ?
                                        indirectlyLeftRecursiveRule : ///
                                          implicitlyLeftRecursiveRule,  ///
          nonDirectlyLeftRecursiveRule = indirectlyLeftRecursiveRuleDirectlyLeftRecursive ?
                                           implicitlyLeftRecursiveRule :  ///
                                             indirectlyLeftRecursiveRule; ///

    reduceRule(nonDirectlyLeftRecursiveRule, ruleMap);

    const rule = directlyLeftRecursiveRule,
          ruleName = nonDirectlyLeftRecursiveRule.getName(),
          definitions = nonDirectlyLeftRecursiveRule.getDefinitions(),
          leftRecursiveRuleName = ruleName, ///
          leftRecursiveDefinitions = leftRecursiveDefinitionsFromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName);

    leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
      const rewrittenDefinitions = rewrittenDefinitionsFromLeftRecursiveDefinitionAndDefinitions(leftRecursiveDefinition, definitions),
            replacedDefinition = leftRecursiveDefinition, ///
            replacementDefinitions = rewrittenDefinitions;  ///

      directlyLeftRecursiveRule.replaceDefinition(replacedDefinition, ...replacementDefinitions);
    });

    mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveRule);

    reduceRule(directlyLeftRecursiveRule, ruleMap);
  });
}

function reduceRule(rule, ruleMap) {
  const reducedRule = ReducedRule.fromRule(rule),
        reducedRuleName = reducedRule.getName();

  ruleMap[reducedRuleName] = reducedRule;
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

function mergeDirectlyLeftRecursiveDefinitions(rule) {

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

function rewrittenDefinitionFromLeftRecursiveDefinitionAndDefinition(leftRecursiveDefinition, definition, Definition) {
  let definitionParts = definition.getParts(),
      leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts();

  definitionParts = cloneParts(definitionParts);  ///

  leftRecursiveDefinitionParts = tail(cloneParts(leftRecursiveDefinitionParts));  ///

  const parts = [
    ...definitionParts,
    ...leftRecursiveDefinitionParts
  ];

  definition = new Definition(parts); ///

  const rewrittenDefinition = definition; ///

  return rewrittenDefinition;
}

function rewrittenDefinitionsFromLeftRecursiveDefinitionAndDefinitions(leftRecursiveDefinition, definitions) {
  const rewrittenDefinitions = definitions.map((definition, index) => {
    const Definition = (index === 0) ?
                          DirectlyLeftRecursiveDefinition :
                            LeftRecursiveDefinition,
          rewrittenDefinition = rewrittenDefinitionFromLeftRecursiveDefinitionAndDefinition(leftRecursiveDefinition, definition, Definition);

    return rewrittenDefinition;
  });

  return rewrittenDefinitions;
}
