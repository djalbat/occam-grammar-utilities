"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RepeatedRule from "./rule/repeated";
import RecursiveDefinition from "./definition/recursive";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";
import ImplicitlyLeftRecursiveDefinition from "./definition/recursive/left/implicitly";

import { isInstanceOf } from "./utilities/class";
import { cloneParts, singlePartFromParts } from "./utilities/parts";

const { ChoiceOfPartsPart } = Parts,
      { find, tail, first } = arrayUtilities;

export default function eliminateLeftRecursion(startRule, ruleMap) {
  const rule = startRule, ///
        recursiveDefinitions = [],
        leftRecursiveDefinitions = [];

  retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

  rewriteIndirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  // eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap);

  // retrieveDirectlyLeftRecursiveRules(directlyLeftRecursiveRules, leftRecursiveDefinitions, ruleMap);

  // eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap);

  const startRuleName = startRule.getName();

  startRule = ruleMap[startRuleName]; ///

  return startRule;
}

function eliminateDirectLeftRecursion(directlyLeftRecursiveRules, ruleMap) {
  directlyLeftRecursiveRules.forEach((directlyLeftRecursiveRule) => {
    const rule = directlyLeftRecursiveRule, ///
          definitions = rule.getDefinitions(),
          directlyLeftRecursiveDefinitions = find(definitions, (definition) => {
            const definitionDirectlyLeftRecursiveDefinition = isInstanceOf(definition, DirectlyLeftRecursiveDefinition);

            if (definitionDirectlyLeftRecursiveDefinition) {
              return true;
            }
          }),
          directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);

    directlyLeftRecursiveDefinition.rewrite();

    rule.removeAllDefinitions();

    rule.addDefinition(directlyLeftRecursiveDefinition);
  });
}

function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions);

  indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
    const implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
        implicitlyLeftRecursiveDefinitionRuleName = implicitlyLeftRecursiveDefinition.getRuleName(),
        indirectlyLeftRecursiveDefinitionRuleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveDefinitionRuleName,  ///
        indirectlyLeftRecursiveRuleName = indirectlyLeftRecursiveDefinitionRuleName,  ///
        indirectlyLeftRecursiveRule = ruleMap[indirectlyLeftRecursiveRuleName],
        implicitlyLeftRecursiveRule = ruleMap[implicitlyLeftRecursiveRuleName];

    rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap);

    // const implicitlyLeftRecursiveDefinitions = retrieveImplicitlyLeftRecursiveDefinitions(implicitlyLeftRecursiveRule, indirectlyLeftRecursiveRuleName);
    //
    // rewriteImplicitlyLeftRecursiveDefinitions(implicitlyLeftRecursiveDefinitions, indirectlyLeftRecursiveRule, ruleMap);
    //
    // reduceImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule, ruleMap);
  });
}

function reduceImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule, ruleMap) {
  const reducedRule = ReducedRule.fromImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule),
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

function rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, leftRecursiveDefinitions, ruleMap) {
  const reducedRule = ReducedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule),
        repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule),
        reducedRuleName = reducedRule.getName(),
        repeatedRuleName = repeatedRule.getName();

  ruleMap[reducedRuleName] = reducedRule;

  ruleMap[repeatedRuleName] = repeatedRule;
}

function retrieveDirectlyLeftRecursiveRules(directlyLeftRecursiveRules, leftRecursiveDefinitions, ruleMap) {
  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, DirectlyLeftRecursiveDefinition),
          leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, IndirectlyLeftRecursiveDefinition),
          leftRecursiveDefinitionImplicitlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, ImplicitlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition || leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition || leftRecursiveDefinitionImplicitlyLeftRecursiveDefinition) {
      const ruleName = leftRecursiveDefinition.getRuleName(),
            rule = ruleMap[ruleName],
            definitions = rule.getDefinitions(),
            ruleDirectlyLeftRecursiveRule = definitions.some((definition) => {
              const definitionDirectlyLeftRecursiveDefinition = isInstanceOf(definition, DirectlyLeftRecursiveDefinition);

              if (definitionDirectlyLeftRecursiveDefinition) {
                return true;
              }
            });

      if (ruleDirectlyLeftRecursiveRule) {
        const directlyLeftRecursiveRule = rule, ///
              directlyLeftRecursiveRulesIncludesDirectlyLeftRecursiveRule = directlyLeftRecursiveRules.includes(directlyLeftRecursiveRule);

        if (!directlyLeftRecursiveRulesIncludesDirectlyLeftRecursiveRule) {

          directlyLeftRecursiveRules.push(directlyLeftRecursiveRule);
        }
      }
    }
  });
}

function rewriteIndirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions);

  indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
    const indirectlyLeftRecursiveDefinitionRuleName = indirectlyLeftRecursiveDefinition.getRuleName(),
          indirectlyLeftRecursiveRuleName = indirectlyLeftRecursiveDefinitionRuleName,  ///
          indirectlyLeftRecursiveRule = ruleMap[indirectlyLeftRecursiveRuleName];

    rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, leftRecursiveDefinitions, ruleMap);
  });
}

function mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
  let directlyLeftRecursiveDefinition;

  const firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions),
        directlyLeftRecursiveDefinitionsLength = directlyLeftRecursiveDefinitions.length;

  if (directlyLeftRecursiveDefinitionsLength === 1) {
    directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition; ///
  } else {
    let parts;

    parts = firstDirectlyLeftRecursiveDefinition.getParts();  ///

    const firstPart = first(parts),
          part = firstPart; ///

    const singleParts = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
      directlyLeftRecursiveDefinition.removeFirstPart();

      const parts = directlyLeftRecursiveDefinition.getParts(),
            singlePart = singlePartFromParts(parts);

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
  }

  return directlyLeftRecursiveDefinition;
}

function rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, indirectlyLeftRecursiveRule, ruleMap) {
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
}

function rewriteImplicitlyLeftRecursiveDefinitions(implicitlyLeftRecursiveDefinitions, indirectlyLeftRecursiveRule, ruleMap) {
  implicitlyLeftRecursiveDefinitions.forEach((implicitlyLeftRecursiveDefinition) => {
    rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, indirectlyLeftRecursiveRule, ruleMap);
  });
}

function retrieveImplicitlyLeftRecursiveDefinitions(directlyLeftRecursiveRule, indirectlyLeftRecursiveRuleName) {
  const rule = directlyLeftRecursiveRule, ///
        ruleName = indirectlyLeftRecursiveRuleName,  ///
        definitions = rule.getDefinitions(),
        implicitlyLeftRecursiveDefinitions = definitions.filter((definition) => {
          const definitionLeftRecursiveDefinition = isInstanceOf(definition, LeftRecursiveDefinition);

          if (definitionLeftRecursiveDefinition) {
            const leftRecursiveDefinition = definition, ///
                  leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(),
                  firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
                  leftRecursiveRuleName = firstLeftRecursiveRuleName; ///

            if (leftRecursiveRuleName === ruleName) {
              return true;
            }
          }
        });

  return implicitlyLeftRecursiveDefinitions;
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
