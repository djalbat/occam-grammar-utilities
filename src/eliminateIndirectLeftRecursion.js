"use strict";

import { arrayUtilities } from "necessary";

import RepeatedRule from "./rule/repeated";
import DirectlyReducedRule from "./rule/reduced/directly";
import IndirectlyReducedRule from "./rule/reduced/indirectly";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { repeatedRuleNameFromRuleName, indirectlyReducedRuleNameFromRuleName } from "./utilities/ruleName";
import { mergeDirectlyLeftRecursiveDefinitions, mergeIndirectlyLeftRecursiveDefinitions } from "./utilities/definitions";

const { push, first, filter } = arrayUtilities;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let greatestIndirectlyLeftRecursiveDefinition = retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (greatestIndirectlyLeftRecursiveDefinition !== null) {
    const indirectlyLeftRecursiveDefinition = greatestIndirectlyLeftRecursiveDefinition, ///
          directlyLeftRecursiveDefinition = retrieveDirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap);

    (directlyLeftRecursiveDefinition !== null) ?
      rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) :
        rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

    greatestIndirectlyLeftRecursiveDefinition = retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);
  }
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName],
        directlyReducedRule = DirectlyReducedRule.fromRule(rule);

  if (directlyReducedRule === null) {
    const definition = directlyLeftRecursiveDefinition, ///
          definitionString = definition.asString();

    throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is isolated and therefore cannot be rewritten.`);
  }

  const directlyReducedRuleName = directlyReducedRule.getName();

  ruleMap[directlyReducedRuleName] = directlyReducedRule;

  const definitions = rule.getDefinitions(),
        directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(definitions);

  let leftRecursiveDefinition = LeftRecursiveDefinition.fromDirectlyReducedRuleName(directlyReducedRuleName),
      indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(definitions);

  const removedLeftRecursiveDefinitions = [
          ...directlyLeftRecursiveDefinitions,
          ...indirectlyLeftRecursiveDefinitions
        ];

  directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);  ///

  leftRecursiveDefinition = LeftRecursiveDefinition.fromLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition(leftRecursiveDefinition, directlyLeftRecursiveDefinition);  ///

  indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {
    indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, directlyLeftRecursiveDefinition);  ///

    return indirectlyLeftRecursiveDefinition;
  });

  const replacementDefinitions = [
          ...indirectlyLeftRecursiveDefinitions,
          leftRecursiveDefinition
        ],
        addedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///

  rule.replaceAllDefinitions(...replacementDefinitions);

  amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, ...addedLeftRecursiveDefinitions);
}

function rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        least = indirectlyLeftRecursiveDefinition.isLeast();

  let ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
      rule = ruleMap[ruleName];

  let indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName),
      indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null,
      repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
      repeatedRule = ruleMap[repeatedRuleName] || null;

  if (indirectlyReducedRule === null) {
    indirectlyReducedRule = IndirectlyReducedRule.fromRule(rule);

    if (indirectlyReducedRule !== null) {
      ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;
    } else {
      indirectlyReducedRule = null;
    }
  }

  const definitions = rule.getDefinitions(),
        indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName);

  if (repeatedRule === null) {
    repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions);

    if (repeatedRule !== null) {
      ruleMap[repeatedRuleName] = repeatedRule;
    } else {
      repeatedRuleName = null;
    }
  }

  indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions);  ///

  const replacedDefinition = leftRecursiveDefinition, ///
        replacementDefinitions = [],
        replacementDefinition = least ?
                                  DirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) :  ///
                                    IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName),  ///
        addedLeftRecursiveDefinition = replacementDefinition, ///
        removedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///

  replacementDefinitions.push(replacementDefinition);

  if (indirectlyReducedRuleName !== null) {
    const replacementDefinition = LeftRecursiveDefinition.fromLeftRecursiveDefinitionAndIndirectlyReducedRuleName(leftRecursiveDefinition, indirectlyReducedRuleName);  ///

    replacementDefinitions.push(replacementDefinition);
  }

  ruleName = leftRecursiveDefinition.getRuleName();

  rule = ruleMap[ruleName];

  rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);

  amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, addedLeftRecursiveDefinition);
}

function amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, ...addedLeftRecursiveDefinitions) {
  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition = removedLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

    if (!removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition) {
      return true;
    }
  });

  push(leftRecursiveDefinitions, addedLeftRecursiveDefinitions);
}

function retrieveDirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap) {
  let directlyLeftRecursiveDefinition = null;

  const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName],
        definitions = rule.getDefinitions();

  definitions.some((definition) => {
    const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

    if (definitionDirectlyLeftRecursiveDefinition) {
      directlyLeftRecursiveDefinition = definition; ///

      return true;
    }
  });

  return directlyLeftRecursiveDefinition;
}

function retrieveDirectlyLeftRecursiveDefinitions(definitions) {
  const directlyLeftRecursiveDefinitions = definitions.filter((definition) => {
    const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

    if (definitionDirectlyLeftRecursiveDefinition) {
      return true;
    }
  });

  return directlyLeftRecursiveDefinitions;
}

function retrieveIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName = null) {
  const indirectlyLeftRecursiveDefinitions = definitions.filter((definition) => {
    const definitionIndirectlyLeftRecursiveDefinition = (definition instanceof IndirectlyLeftRecursiveDefinition);

    if (definitionIndirectlyLeftRecursiveDefinition) {
      if (leftRecursiveRuleName === null) {
        return true;
      }

      const indirectlyLeftRecursiveDefinition = definition,  ///
            leftRecursiveRuleNames = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleNames(),
            firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
            ruleName = firstLeftRecursiveRuleName; ///

      if (ruleName === leftRecursiveRuleName) {
        return true;
      }
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}

function retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions) {
  let greatestIndirectlyLeftRecursiveDefinition = null;

  const definitions = leftRecursiveDefinitions, ///
        indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(definitions);

  indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
    if (greatestIndirectlyLeftRecursiveDefinition === null) {
      greatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
    } else {
      const indirectlyLeftRecursiveDefinitionGreaterThanGreatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.isGreaterThan(greatestIndirectlyLeftRecursiveDefinition);

      if (indirectlyLeftRecursiveDefinitionGreaterThanGreatestIndirectlyLeftRecursiveDefinition) {
        greatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
      }
    }
  });

  return greatestIndirectlyLeftRecursiveDefinition;
}
