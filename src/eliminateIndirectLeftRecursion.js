"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RepeatedRule from "./rule/repeated";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";

const { push, first, filter } = arrayUtilities;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let greatestIndirectlyLeftRecursiveDefinition = retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (greatestIndirectlyLeftRecursiveDefinition !== null) {
    let indirectlyLeftRecursiveDefinition = greatestIndirectlyLeftRecursiveDefinition; ///

    const directlyLeftRecursiveDefinition = retrieveDirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap);

    (directlyLeftRecursiveDefinition === null) ?
      rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) :
        rewriteDirectLeftRecursion(indirectlyLeftRecursiveDefinition, directlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

    greatestIndirectlyLeftRecursiveDefinition = retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);
  }
}

function rewriteDirectLeftRecursion(indirectlyLeftRecursiveDefinition, directlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  let repeatedRuleName = null,
      reducedRuleName = null,
      ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
      rule = ruleMap[ruleName];

  const repeatedRule = RepeatedRule.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

  if (repeatedRule !== null) {
    repeatedRuleName = repeatedRule.getName();

    ruleMap[repeatedRuleName] = repeatedRule;
  }

  const reducedRule = ReducedRule.fromRule(rule);

  if (reducedRule !== null) {
    reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;
  }

  let definitions = rule.getDefinitions(),
      leftRecursiveDefinition = LeftRecursiveDefinition.fromReducedRule(reducedRule),
      indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(definitions);

  const directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(definitions),
        removedLeftRecursiveDefinitions = [
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

  let repeatedRuleName = null,
      reducedRuleName = null,
      ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
      rule = ruleMap[ruleName];

  const repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition);

  if (repeatedRule !== null) {
    repeatedRuleName = repeatedRule.getName();

    ruleMap[repeatedRuleName] = repeatedRule;
  }

  const reducedRule = ReducedRule.fromRule(rule);

  if (reducedRule !== null) {
    reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;
  }

  const definitions = rule.getDefinitions(),
        indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName);

  indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions);  ///

  const replacedDefinition = leftRecursiveDefinition, ///
        replacementDefinitions = [],
        LeftRecursiveDefinition = least ?
                                    DirectlyLeftRecursiveDefinition :
                                      IndirectlyLeftRecursiveDefinition,
        replacementDefinition = LeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName),  ///
        addedLeftRecursiveDefinition = replacementDefinition, ///
        removedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///

  replacementDefinitions.push(replacementDefinition);

  if (reducedRuleName !== null) {
    const replacementDefinition = LeftRecursiveDefinition.fromLeftRecursiveDefinitionAndReducedRuleName(leftRecursiveDefinition, reducedRuleName);  ///

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

function mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinition = mergeLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, (parts, ruleName) => {
    const directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromPartsAndRuleName(parts, ruleName);

    return directlyLeftRecursiveDefinition;
  });

  return directlyLeftRecursiveDefinition;
}

function mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions) {
  const indirectlyLeftRecursiveDefinition = mergeLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, (parts, ruleName) => {
    let indirectlyLeftRecursiveDefinition;

    const firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions);

    indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition; ///

    const leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();

    indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromPartsRuleNameAndLeftRecursiveDefinitions(parts, ruleName, leftRecursiveDefinitions);

    return indirectlyLeftRecursiveDefinition;
  });

  return indirectlyLeftRecursiveDefinition;
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
