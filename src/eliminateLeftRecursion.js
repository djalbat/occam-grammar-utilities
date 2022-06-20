"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import ReducedRule from "./rule/reduced";
import RepeatedRule from "./rule/repeated";
import RecursiveDefinition from "./definition/recursive";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { isInstanceOf } from "./utilities/class";
import { reducedPartFromRuleName } from "./utilities/part";
import { cloneParts, repeatedPartFromParts, singlePartFromParts } from "./utilities/parts";

const { ChoiceOfPartsPart } = Parts,
      { find, tail, push, first, filter } = arrayUtilities;

export default function eliminateLeftRecursion(startRule, ruleMap) {
  const rule = startRule, ///
        recursiveDefinitions = [],
        leftRecursiveDefinitions = [];

  retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

  eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap);

  eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap);

  const startRuleName = startRule.getName();

  startRule = ruleMap[startRuleName]; ///

  return startRule;
}

function eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions);

  directlyLeftRecursiveDefinitions.forEach((directlyLeftRecursiveDefinition) => {
    const directlyLeftRecursiveDefinitionRuleName = directlyLeftRecursiveDefinition.getRuleName(),
          directlyLeftRecursiveRuleName = directlyLeftRecursiveDefinitionRuleName,  ///
          directlyLeftRecursiveRule = ruleMap[directlyLeftRecursiveRuleName];

    const reducedRule = ReducedRule.fromDirectlyLeftRecursiveRule(directlyLeftRecursiveRule),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;

    filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
      const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition === directlyLeftRecursiveDefinition);

      if (!leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
        return true;
      }
    })

    rewriteDirectlyLeftRecursiveRule(directlyLeftRecursiveRule, leftRecursiveDefinitions);
  });
}

function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions);

  indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
    let directlyLeftRecursiveRule;

    const indirectlyLeftRecursiveDefinitionRuleName = indirectlyLeftRecursiveDefinition.getRuleName(),
          indirectlyLeftRecursiveRuleName = indirectlyLeftRecursiveDefinitionRuleName,  ///
          indirectlyLeftRecursiveRule = ruleMap[indirectlyLeftRecursiveRuleName];

    rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap);

    directlyLeftRecursiveRule = indirectlyLeftRecursiveRule; ///

    rewriteDirectlyLeftRecursiveRule(directlyLeftRecursiveRule, leftRecursiveDefinitions);

    const implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
          implicitlyLeftRecursiveDefinitionRuleName = implicitlyLeftRecursiveDefinition.getRuleName(),
          implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveDefinitionRuleName,  ///
          implicitlyLeftRecursiveRule = ruleMap[implicitlyLeftRecursiveRuleName];

    rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, indirectlyLeftRecursiveRule, leftRecursiveDefinitions, ruleMap);

    rewriteImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule, indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

    directlyLeftRecursiveRule = implicitlyLeftRecursiveRule;  ///

    rewriteDirectlyLeftRecursiveRule(directlyLeftRecursiveRule, leftRecursiveDefinitions);
  });
}

function rewriteDirectlyLeftRecursiveRule(directlyLeftRecursiveRule, leftRecursiveDefinitions) {
  const rule = directlyLeftRecursiveRule, ///
        directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        definition = definitionFromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
        replacedDefinition = directlyLeftRecursiveDefinition, ///
        replacementDefinition = definition; ///

  directlyLeftRecursiveRule.replaceDefinition(replacedDefinition, replacementDefinition);

  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition === directlyLeftRecursiveDefinition);

    if (!leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
      return true;
    }
  })
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

function rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap) {
  const reducedRule = ReducedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule),
        repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule),
        reducedRuleName = reducedRule.getName(),
        repeatedRuleName = repeatedRule.getName();

  ruleMap[reducedRuleName] = reducedRule;

  ruleMap[repeatedRuleName] = repeatedRule;
}

function rewriteImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule, indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const reducedRule = ReducedRule.fromImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule),
        reducedRuleName = reducedRule.getName();

  ruleMap[reducedRuleName] = reducedRule;

  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition === indirectlyLeftRecursiveDefinition);

    if (!leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      return true;
    }
  })

  indirectlyLeftRecursiveRule.removeDefinition(indirectlyLeftRecursiveDefinition);
}

function mergeDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
  let directlyLeftRecursiveDefinition;

  const definitions = rule.getDefinitions(),
        directlyLeftRecursiveDefinitions = find(definitions, (definition) => {
          const definitionDirectlyLeftRecursiveDefinition = isInstanceOf(definition, DirectlyLeftRecursiveDefinition);

          if (definitionDirectlyLeftRecursiveDefinition) {
            return true;
          }
        }),
        firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions),
        directlyLeftRecursiveDefinitionsLength = directlyLeftRecursiveDefinitions.length;

  if (directlyLeftRecursiveDefinitionsLength === 1) {
    directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition;
  } else {
    let parts;

    parts = firstDirectlyLeftRecursiveDefinition.getParts();  ///

    const firstPart = first(parts),
          part = firstPart; ///

    const singleParts = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
      const parts = directlyLeftRecursiveDefinition.getParts();

      parts.shift();  ///

      const singlePart = singlePartFromParts(parts);

      return singlePart;
    });

    parts = singleParts;  ///

    const choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    parts = [ ///
      part,
      choiceOfPartsPart
    ]

    const ruleName = firstDirectlyLeftRecursiveDefinition.getRuleName();

    directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndParts(ruleName, parts);

    filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
      const directlyLeftRecursiveDDefinitionsIncludesLeftRecursiveDefinition = directlyLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

      if (!directlyLeftRecursiveDDefinitionsIncludesLeftRecursiveDefinition) {
        return true;
      }
    });

    const definitions = tail(directlyLeftRecursiveDefinitions),
          replacedDefinition = firstDirectlyLeftRecursiveDefinition, ///
          replacementDefinition = directlyLeftRecursiveDefinition;  ///

    rule.removeDefinitions(definitions);

    rule.replaceDefinition(replacedDefinition, replacementDefinition);
  }

  return directlyLeftRecursiveDefinition;
}

function rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, indirectlyLeftRecursiveRule, leftRecursiveDefinitions, ruleMap) {
  const definitions = indirectlyLeftRecursiveRule.getDefinitions(),
        rewrittenDefinitions = definitions.map((definition, index) => {
          const Definition = (index === 0) ?
                               DirectlyLeftRecursiveDefinition :
                                 LeftRecursiveDefinition;

          let definitionParts = definition.getParts(),
              implicitlyLeftRecursiveDefinitionParts = implicitlyLeftRecursiveDefinition.getParts();

          definitionParts = cloneParts(definitionParts);  ///

          implicitlyLeftRecursiveDefinitionParts = tail(cloneParts(implicitlyLeftRecursiveDefinitionParts));  ///

          const parts = [
            ...definitionParts,
            ...implicitlyLeftRecursiveDefinitionParts
          ];

          const ruleName = implicitlyLeftRecursiveDefinition.getRuleName(),
                recursiveRuleNames = null,  ///
                leftRecursiveRuleNames = null;  ///

          definition = new Definition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///

          const rewrittenDefinition = definition; ///

          return rewrittenDefinition;
        }),
        ruleName = implicitlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName],
        replacedDefinition = implicitlyLeftRecursiveDefinition,  ///
        replacementDefinitions = rewrittenDefinitions;  ///

  rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);

  push(leftRecursiveDefinitions, rewrittenDefinitions);
}

function retrieveDirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, DirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      return true;
    }
  });

  return directlyLeftRecursiveDefinitions;
}

function retrieveIndirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions) {
  const indirectlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, IndirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      return true;
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}

function definitionFromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
  let parts = directlyLeftRecursiveDefinition.getParts();

  parts.shift();

  const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
        reducedPart = reducedPartFromRuleName(ruleName),
        repeatedPart = repeatedPartFromParts(parts);

  parts = [ ///
    reducedPart,
    repeatedPart
  ]

  const definition = new Definition(parts);

  return definition;
}