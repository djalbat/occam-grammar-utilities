"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Parts, Definition } from "occam-parsers";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { arePartsEqual } from "../../utilities/parts";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";
import { isDefinitionComplex, isDefinitionLookAhead, isDefinitionQualified, isDefinitionLeftRecursive, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

const { first } = arrayUtilities,
      { EpsilonPart } = Parts;

export default class IndirectlyRepeatedRule extends Rule {
  static fromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName) {
    let definitions = rule.getDefinitions();

    let leftRecursiveDefinitions = definitions.filter((definition) => {  ///
      const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

      if (definitionLeftRecursive) {
        const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
              firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

        if (firstLeftRecursiveRuleName === leftRecursiveRuleName) {
          const definitionComplex = isDefinitionComplex(definition);

          if (definitionComplex) {
            const ruleName = rule.getName(),
                  definitionString = definition.asString();

            throw new Error(`The '${definitionString}' definition of the '${ruleName}' rule is complex.`);
          }

          const definitionLookAhead = isDefinitionLookAhead(definition);

          if (definitionLookAhead) {
            const ruleName = rule.getName(),
                  definitionString = definition.asString();

            throw new Error(`The first part of the '${definitionString}' definition of the '${ruleName}' rule is look-ahead.`);
          }

          const definitionQualified = isDefinitionQualified(definition);

          if (definitionQualified) {
            const ruleName = rule.getName(),
                  definitionString = definition.asString();

            throw new Error(`The first part of the '${definitionString}' definition of the '${ruleName}' rule is qualified.`);
          }

          return true;
        }
      }
    });

    const firstPartsEqual = areFirstPartsEqual(leftRecursiveDefinitions);

    if (!firstPartsEqual) {
      const ruleName = rule.getName();

      throw new Error(`The first parts of the '${leftRecursiveRuleName}' left recursive definitions in the '${ruleName}' rule are not equal.`);
    }

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
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length,
          name = indirectlyRepeatedRuleName,  ///
          ambiguous = false;

    definitions = (leftRecursiveDefinitionsLength === 0) ?
                    definitionsFromPrecedence(precedence) :
                      definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions);

    const NonTerminalNode = IndirectlyRepeatedNode,  ///
          indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);

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

function definitionsFromPrecedence(precedence) {
  const epsilonPart = EpsilonPart.fromNothing(),
        parts = [
          epsilonPart
        ],
        definition = Definition.fromPartsAndPrecedence(parts, precedence),
        definitions = [
          definition
        ];

  return definitions;
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
