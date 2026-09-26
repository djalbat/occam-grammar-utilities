"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import EpsilonDefinition from "../../definition/epsilon";
import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { arePartsEqual } from "../../utilities/parts";
import { isRuleProducing } from "../../utilities/production";
import { isPartConsuming } from "../../utilities/consumption";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";
import { isDefinitionLeftRecursive, leftRecursiveRuleNameFromDefinition, isDefinitionsFirstPartNakedRuleNamePart } from "../../utilities/definition";

const { first } = arrayUtilities;

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, context) {
    const NonTerminalNode = IndirectlyRepeatedNode; ///

    return NonTerminalNode;
  }

  static fromRuleAndLeftRecursiveRule(rule, leftRecursiveRule, ruleMap) {
    let definitions = rule.getDefinitions();

    const leftRecursiveRuleName = leftRecursiveRule.getName();

    let leftRecursiveDefinitions = leftRecursiveDefinitionsFromRuleDefinitionsAndLeftRecursiveRuleName(rule, definitions, leftRecursiveRuleName, ruleMap);

    let precedence = null;

    leftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {
      const parts = leftRecursiveDefinition.getParts(),
            partsLength = parts.length;

      if (partsLength === 1) {
        precedence = leftRecursiveDefinition.getPrecedence();
      } else  {
        return true;
      }
    });

    const ruleName = rule.getName(),
          leftRecursiveRuleOpacity = leftRecursiveRule.getOpacity(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          name = indirectlyRepeatedRuleName,  ///
          opacity = leftRecursiveRuleOpacity; ///

    definitions = definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions);

    const indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions),
          indirectlyRepeatedRuleProducing = isRuleProducing(indirectlyRepeatedRule, ruleMap);

    if (!indirectlyRepeatedRuleProducing) {
      const epsilonDefinition = EpsilonDefinition.fromPrecedence(precedence);

      definitions.push(epsilonDefinition);
    }

    return indirectlyRepeatedRule;
  }
}

function areFirstPartsEqual(definitions) {
  const firstParts = definitions.map((definition) => {
          const parts = definition.getParts(),
                firstPart = first(parts);

          return firstPart;
        }),
        firstPartsEqual = arePartsEqual(firstParts);

  return firstPartsEqual;
}

function isDefinitionsFirstPartConsuming(definition, ruleMap) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartConsuming = isPartConsuming(firstPart, ruleMap),
        definitionsFirstPartConsuming = firstPartConsuming;  ///

  return definitionsFirstPartConsuming;
}

function definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions) {
  const definitions = leftRecursiveDefinitions.map((leftRecursiveDefinition) => { ///
    let parts = leftRecursiveDefinition.getParts();

    parts = [ ///
      ...parts
    ]

    parts.shift();

    const precedence = leftRecursiveDefinition.getPrecedence(),
          definition = Definition.fromPartsAndPrecedence(parts, precedence);

    return definition;
  });

  return definitions;
}

function leftRecursiveDefinitionsFromRuleDefinitionsAndLeftRecursiveRuleName(rule, definitions, leftRecursiveRuleName, ruleMap) {
  const definitionLeftRecursiveRuleName = leftRecursiveRuleName,  ///
        leftRecursiveDefinitions = definitions.filter((definition) => {  ///
          const definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleMap);

          if (definitionLeftRecursive) {
            const definitionsFirstPartConsuming = isDefinitionsFirstPartConsuming(definition, ruleMap);

            if (!definitionsFirstPartConsuming) {
              const definitionString = definition.asString();

              throw new Error(`The first part of the '${definitionString}' left recursive-definition is not a consuming part.`);
            }

            const definitionsFirstPartNakedRuleNamePart = isDefinitionsFirstPartNakedRuleNamePart(definition);

            if (!definitionsFirstPartNakedRuleNamePart) {
              const definitionString = definition.asString();

              throw new Error(`The first part of the '${definitionString}' left recursive-definition is not a naked rule name part.`);
            }

            leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition, ruleMap);

            if (leftRecursiveRuleName === definitionLeftRecursiveRuleName) {
              return true;
            }
          }
        });

  leftRecursiveRuleName = definitionLeftRecursiveRuleName;  ///

  const firstPartsEqual = areFirstPartsEqual(leftRecursiveDefinitions);

  if (!firstPartsEqual) {
    const ruleName = rule.getName();

    throw new Error(`The first parts of the '${leftRecursiveRuleName}' left recursive definitions in the '${ruleName}' rule are not all equal.`);
  }

  return leftRecursiveDefinitions;
}
