"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RecursiveDefinition from "./definition/recursive";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";
import ImplicitlyLeftRecursiveDefinition from "./definition/recursive/left/implicitly";

import { isInstanceOf } from "./utilities/class";
import { cloneParts, singlePartFromParts } from "./utilities/parts";
import { isRuleDirectlyLeftRecursive, ruleFromLeftRecursiveDefinition } from "./utilities/rule";

const { ChoiceOfPartsPart } = Parts,
      { find, tail, first } = arrayUtilities;

export default function eliminateLeftRecursion(startRule, ruleMap) {
  const rule = startRule, ///
        leftRecursiveDefinitions = retrieveLeftRecursiveDefinitions(rule, ruleMap);

  eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap);

  const directlyLeftRecursiveRules = retrieveDirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  eliminateDirectLeftRecursion(directlyLeftRecursiveRules, ruleMap);

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

    directlyLeftRecursiveDefinition.rewrite(ruleMap);

    definitions.splice(0); // rule.removeDefinitions();

    rule.addDefinition(directlyLeftRecursiveDefinition);
  });
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

    reduceNonDirectlyLeftRecursiveRule(nonDirectlyLeftRecursiveRule, ruleMap);

    const nonDirectlyLeftRecursiveDefinitions = retrieveNonDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveRule, nonDirectlyLeftRecursiveRule);

    rewriteNonDirectlyLeftRecursiveDefinitions(nonDirectlyLeftRecursiveDefinitions, nonDirectlyLeftRecursiveRule, ruleMap);

    reduceDirectlyLeftRecursiveRule(directlyLeftRecursiveRule, ruleMap);
  });
}

function reduceDirectlyLeftRecursiveRule(directlyLeftRecursiveRule, ruleMap) {
  const reducedRule = ReducedRule.fromDirectlyLeftRecursiveRule(directlyLeftRecursiveRule),
        reducedRuleName = reducedRule.getName();

  ruleMap[reducedRuleName] = reducedRule;
}

function retrieveLeftRecursiveDefinition(rule, definition, ruleMap, recursiveDefinitions, leftRecursiveDefinitions) {
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

function retrieveLeftRecursiveDefinitions(rule, ruleMap, recursiveDefinitions = [], leftRecursiveDefinitions = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    const recursiveDefinition = retrieveLeftRecursiveDefinition(rule, definition, ruleMap, recursiveDefinitions, leftRecursiveDefinitions);

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

            retrieveLeftRecursiveDefinitions(rule, ruleMap, recursiveDefinitions, leftRecursiveDefinitions);
          }
        }
      });
    }
  });

  return leftRecursiveDefinitions;
}

function reduceNonDirectlyLeftRecursiveRule(nonDirectlyLeftRecursiveRule, ruleMap) {
  const reducedRule = ReducedRule.fromNonDirectlyLeftRecursiveRule(nonDirectlyLeftRecursiveRule),
        reducedRuleName = reducedRule.getName();

  ruleMap[reducedRuleName] = reducedRule;
}

function retrieveDirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap) {
  const directlyLeftRecursiveRules = leftRecursiveDefinitions.reduce((directlyLeftRecursiveRules, leftRecursiveDefinition) => {
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

    return directlyLeftRecursiveRules;
  }, []);

  return directlyLeftRecursiveRules;
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

function rewriteNonDirectlyLeftRecursiveDefinition(nonDirectlyLeftRecursiveDefinition, nonDirectlyLeftRecursiveRule, ruleMap) {
  const definitions = nonDirectlyLeftRecursiveRule.getDefinitions(),
        rewrittenDefinitions = definitions.map((definition, index) => {
          const Definition = (index === 0) ?
                               DirectlyLeftRecursiveDefinition :
                                 LeftRecursiveDefinition;

          let definitionParts = definition.getParts(),
              nonDirectlyLeftRecursiveDefinitionParts = nonDirectlyLeftRecursiveDefinition.getParts();

          definitionParts = cloneParts(definitionParts);  ///

          nonDirectlyLeftRecursiveDefinitionParts = tail(cloneParts(nonDirectlyLeftRecursiveDefinitionParts));  ///

          const parts = [
            ...definitionParts,
            ...nonDirectlyLeftRecursiveDefinitionParts
          ];

          const ruleName = nonDirectlyLeftRecursiveDefinition.getRuleName(),
                recursiveRuleNames = null,  ///
                leftRecursiveRuleNames = null;  ///

          definition = new Definition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///

          const rewrittenDefinition = definition; ///

          return rewrittenDefinition;
        }),
        ruleName = nonDirectlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName],
        replacedDefinition = nonDirectlyLeftRecursiveDefinition,  ///
        replacementDefinitions = rewrittenDefinitions;  ///

  rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);
}

function rewriteNonDirectlyLeftRecursiveDefinitions(nonDirectlyLeftRecursiveDefinitions, nonDirectlyLeftRecursiveRule, ruleMap) {
  nonDirectlyLeftRecursiveDefinitions.forEach((nonDirectlyLeftRecursiveDefinition) => {
    rewriteNonDirectlyLeftRecursiveDefinition(nonDirectlyLeftRecursiveDefinition, nonDirectlyLeftRecursiveRule, ruleMap);
  });
}

function retrieveNonDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveRule, nonDirectlyLeftRecursiveRule) {
  const nonDirectlyLeftRecursiveRuleName = nonDirectlyLeftRecursiveRule.getName(),
        rule = directlyLeftRecursiveRule, ///
        ruleName = nonDirectlyLeftRecursiveRuleName,  ///
        definitions = rule.getDefinitions(),
        nonDirectlyLeftRecursiveDefinitions = definitions.filter((definition) => {
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

  return nonDirectlyLeftRecursiveDefinitions;
}
