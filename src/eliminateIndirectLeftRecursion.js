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
    let indirectlyLeftRecursiveDefinition = maximalIndirectlyLeftRecursiveDefinition, ///
        ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName],
        definitions = rule.getDefinitions();

    const directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(definitions),
          directlyLeftRecursiveDefinitionsLength = directlyLeftRecursiveDefinitions.length;

    if (directlyLeftRecursiveDefinitionsLength > 0) {
      let definitions;

      const directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions),
            reducedLeftRecursiveDefinition = reduceRule(rule, ruleMap),
            repeatedRuleName = repeatDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, ruleMap);

      definitions = directlyLeftRecursiveDefinitions; ///

      rule.removeDefinitions(definitions);

      definitions = rule.getDefinitions();

      let leftRecursiveDefinitions = definitions; ///

      leftRecursiveDefinitions = rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, directlyLeftRecursiveDefinition, ruleName); ///

      rule.removeAllDefinitions();

      definitions = leftRecursiveDefinitions; ///

      definitions.forEach((definition) => {
        rule.addDefinition(definition);
      });

      const last = indirectlyLeftRecursiveDefinition.isLast(),
            lastLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLastLeftRecursiveDefinition(),
            leftRecursiveDefinition = lastLeftRecursiveDefinition;  ///

      const replacedDefinition = leftRecursiveDefinition, ///
            replacementDefinitions = rewriteLeftRecursiveDefinitionsEx(leftRecursiveDefinitions, leftRecursiveDefinition, repeatedRuleName, ruleName, last);

      ruleName = leftRecursiveDefinition.getRuleName();

      rule = ruleMap[ruleName];

      rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);
    }

    // const leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
    //       indirectlyLeftRecursiveRule = rule, ///
    //       reducedLeftRecursiveDefinition = reduceRule(indirectlyLeftRecursiveRule, ruleMap),
    //       indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName);
    //
    // indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions);  ///
    //
    // const last = indirectlyLeftRecursiveDefinition.isLast(),
    //       lastLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLastLeftRecursiveDefinition(),
    //       leftRecursiveDefinition = lastLeftRecursiveDefinition;  ///
    //
    // ruleName = leftRecursiveDefinition.getRuleName();
    // rule = ruleMap[ruleName];
    //
    // const repeatedRuleName = repeatIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap),
    //       replacedDefinition = leftRecursiveDefinition, ///
    //       replacementDefinitions = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName, last),
    //       firstReplacementDefinition = first(replacementDefinitions),
    //       addedLeftRecursiveDefinition = firstReplacementDefinition,  ///
    //       removedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///
    //
    // rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);
    //
    // amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, addedLeftRecursiveDefinition);
    //
    // maximalIndirectlyLeftRecursiveDefinition = retrieveMaximalIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

    maximalIndirectlyLeftRecursiveDefinition = null;
  }
}

function reduceRule(rule, ruleMap) {
  let reducedLeftRecursiveDefinition = null;

  const reducedRule = ReducedRule.fromRule(rule);

  if (reducedRule !== null) {
    const leftRecursiveDefinition = LeftRecursiveDefinition.fromReducedRule(reducedRule),
          reducedRuleName = reducedRule.getName(),
          definitions = reducedRule.getDefinitions(),
          definition = leftRecursiveDefinition; ///

    rule.removeDefinitions(definitions);

    rule.addDefinition(definition);

    ruleMap[reducedRuleName] = reducedRule;

    reducedLeftRecursiveDefinition = definition;  ///
  }

  return reducedLeftRecursiveDefinition;
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

function rewriteLeftRecursiveDefinitionsEx(leftRecursiveDefinitions, leftRecursiveDefinition, repeatedRuleName, ruleName, last) {
  const replacementDefinitions = [];

  let replacementDefinition,
      leftRecursiveDefinitionA;

  const leftRecursiveDefinitionB = leftRecursiveDefinition; ///

  const firstLeftRecursiveDefinition = first(leftRecursiveDefinitions);

  leftRecursiveDefinitionA = firstLeftRecursiveDefinition;  ///

  replacementDefinition = DirectlyLeftRecursiveDefinition.fromLeftRecursiveDefinitionsAndRepeatedRuleName(leftRecursiveDefinitionA, leftRecursiveDefinitionB, repeatedRuleName);  ///

  replacementDefinitions.push(replacementDefinition);

  replacementDefinition = LeftRecursiveDefinition.fromRuleNameAndLeftRecursiveDefinition(ruleName, leftRecursiveDefinitionB);  ///

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

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName, last) {
  const replacementDefinitions = [],
        LeftRecursiveDefinition = last ?
                                    DirectlyLeftRecursiveDefinition :
                                      IndirectlyLeftRecursiveDefinition,
        replacementDefinition = LeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName);  ///

  replacementDefinitions.push(replacementDefinition);

  if (reducedLeftRecursiveDefinition !== null) {
    const replacementDefinition = LeftRecursiveDefinition.fromReducedLeftRecursiveDefinitionAndLeftRecursiveDefinition(reducedLeftRecursiveDefinition, leftRecursiveDefinition);  ///

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
