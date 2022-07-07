"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RepeatedRule from "./rule/repeated";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";

const { first, filter } = arrayUtilities;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let maximalIndirectlyLeftRecursiveDefinition = retrieveMaximalIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (maximalIndirectlyLeftRecursiveDefinition !== null) {
    let indirectlyLeftRecursiveDefinition = maximalIndirectlyLeftRecursiveDefinition; ///

    let replacedDefinition,
        replacementDefinitions;

    let ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName],
        definitions = rule.getDefinitions();

    let indirectlyLeftRecursiveDefinitions;

    const directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(definitions),
          directlyLeftRecursiveDefinitionsLength = directlyLeftRecursiveDefinitions.length;

    if (directlyLeftRecursiveDefinitionsLength > 0) {
      // let definitions;
      //
      // const directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);
      //
      // reduceRule(rule, ruleMap);
      //
      // definitions = directlyLeftRecursiveDefinitions; ///
      //
      // rule.removeDefinitions(definitions);
      //
      // definitions = rule.getDefinitions();
      //
      // definitions = rewriteLeftRecursiveDefinitions(definitions, directlyLeftRecursiveDefinition, ruleName); ///
      //
      // rule.removeAllDefinitions();
      //
      // definitions.forEach((definition) => {
      //   rule.addDefinition(definition);
      // });
      //
      // const lastLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLastLeftRecursiveDefinition(),
      //       leftRecursiveDefinition = lastLeftRecursiveDefinition;  ///
      //
      // ruleName = leftRecursiveDefinition.getRuleName();
      //
      // rule = ruleMap[ruleName];
      //
      // const repeatedRuleName = repeatDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, ruleMap);
      //
      // replacedDefinition = leftRecursiveDefinition; ///
      //
      // replacementDefinitions = rewriteLeftRecursiveDefinitionsEx(definitions, leftRecursiveDefinition, repeatedRuleName, ruleName);
    } else {
      const leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

      indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName);

      indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions);  ///

      const last = indirectlyLeftRecursiveDefinition.isLast(),
            lastLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLastLeftRecursiveDefinition(),
            leftRecursiveDefinition = lastLeftRecursiveDefinition;  ///

      const reducedRuleName = reduceRule(rule, ruleMap),
            repeatedRuleName = repeatIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap)

      ruleName = leftRecursiveDefinition.getRuleName();

      rule = ruleMap[ruleName];

      replacedDefinition = leftRecursiveDefinition; ///

      replacementDefinitions = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName, reducedRuleName, last);
    }

    const firstReplacementDefinition = first(replacementDefinitions),
          addedLeftRecursiveDefinition = firstReplacementDefinition,  ///
          removedLeftRecursiveDefinitions = [
            ...indirectlyLeftRecursiveDefinitions,
            ...directlyLeftRecursiveDefinitions
          ];

    rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);

    amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, addedLeftRecursiveDefinition); ///

    maximalIndirectlyLeftRecursiveDefinition = retrieveMaximalIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);
  }
}

function reduceRule(rule, ruleMap) {
  let reducedRuleName = null;

  const reducedRule = ReducedRule.fromRule(rule);

  if (reducedRule !== null) {
    reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;
  }

  return reducedRuleName;
}

function amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, addedLeftRecursiveDefinition) {
  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition = removedLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

    if (!removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition) {
      return true;
    }
  });

  leftRecursiveDefinitions.push(addedLeftRecursiveDefinition);
}

function rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, directlyLeftRecursiveDefinition, ruleName) {
  leftRecursiveDefinitions = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
    leftRecursiveDefinition = LeftRecursiveDefinition.fromRuleNameLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition(ruleName, leftRecursiveDefinition, directlyLeftRecursiveDefinition);  ///

    return leftRecursiveDefinition;
  });

  return leftRecursiveDefinitions;
}

function rewriteLeftRecursiveDefinitionsEx(leftRecursiveDefinitions, leftRecursiveDefinition, repeatedRuleName, ruleName) {
  const replacementDefinitions = [];

  let replacementDefinition,
      leftRecursiveDefinitionA;

  const leftRecursiveDefinitionB = leftRecursiveDefinition; ///

  const firstLeftRecursiveDefinition = first(leftRecursiveDefinitions);

  leftRecursiveDefinitionA = firstLeftRecursiveDefinition;  ///

  replacementDefinition = DirectlyLeftRecursiveDefinition.fromLeftRecursiveDefinitionsRepeatedRuleNameAndRuleName(leftRecursiveDefinitionA, leftRecursiveDefinitionB, repeatedRuleName, ruleName);  ///

  replacementDefinitions.push(replacementDefinition);

  replacementDefinition = LeftRecursiveDefinition.fromLeftRecursiveDefinitionRepeatedRuleNameAndRuleName(leftRecursiveDefinitionB, repeatedRuleName, ruleName);  ///

  replacementDefinitions.push(replacementDefinition);

  return replacementDefinitions;
}

function mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinition = mergeLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, (parts, ruleName) => {
    const directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromPartsAndRuleName(parts, ruleName);

    return directlyLeftRecursiveDefinition;
  });

  return directlyLeftRecursiveDefinition;
}

function repeatDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, ruleMap) {
  const repeatedRule = RepeatedRule.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
        repeatedRuleName = repeatedRule.getName();

  ruleMap[repeatedRuleName] = repeatedRule;

  return repeatedRuleName;
}

function repeatIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap) {
  let repeatedRuleName = null;

  const repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition);

  if (repeatedRule !== null) {
    repeatedRuleName = repeatedRule.getName();

    ruleMap[repeatedRuleName] = repeatedRule;
  }

  return repeatedRuleName;
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

function retrieveDirectlyLeftRecursiveDefinitions(definitions) {
  const directlyLeftRecursiveDefinitions = definitions.filter((definition) => {
    const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

    if (definitionDirectlyLeftRecursiveDefinition) {
      return true;
    }
  });

  return directlyLeftRecursiveDefinitions;
}

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName, reducedRuleName, last) {
  const replacementDefinitions = [],
        LeftRecursiveDefinition = last ?
                                    DirectlyLeftRecursiveDefinition :
                                      IndirectlyLeftRecursiveDefinition,
        replacementDefinition = LeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName);  ///

  replacementDefinitions.push(replacementDefinition);

  if (reducedRuleName !== null) {
    const replacementDefinition = LeftRecursiveDefinition.fromLeftRecursiveDefinitionAndReducedRuleName(leftRecursiveDefinition, reducedRuleName);  ///

    replacementDefinitions.push(replacementDefinition);
  }

  return replacementDefinitions;
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

function retrieveMaximalIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions) {
  let maximalIndirectlyLeftRecursiveDefinition = null;

  const definitions = leftRecursiveDefinitions, ///
        indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(definitions);

  indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
    if (maximalIndirectlyLeftRecursiveDefinition === null) {
      maximalIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
    } else {
      const indirectlyLeftRecursiveDefinitionGreaterThanMaximalIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.isGreaterThan(maximalIndirectlyLeftRecursiveDefinition);

      if (indirectlyLeftRecursiveDefinitionGreaterThanMaximalIndirectlyLeftRecursiveDefinition) {
        maximalIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
      }
    }
  });

  return maximalIndirectlyLeftRecursiveDefinition;
}
