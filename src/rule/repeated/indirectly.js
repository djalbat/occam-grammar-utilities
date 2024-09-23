"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import EpsilonDefinition from "../../definition/epsilon";
import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { arePartsEqual } from "../../utilities/parts";
import { areDefinitionsEffectivelyUseless } from "../../utilities/rule";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";
import { isDefinitionComplex, isDefinitionLookAhead, isDefinitionQualified, isDefinitionLeftRecursive, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

const { first } = arrayUtilities;

export default class IndirectlyRepeatedRule extends Rule {
  static fromRuleAndLeftRecursiveRule(rule, leftRecursiveRule, ruleMap) {
    let definitions = rule.getDefinitions();

    const leftRecursiveRuleName = leftRecursiveRule.getName();

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
          leftRecursiveRuleOpacity = leftRecursiveRule.getOpacity(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length,
          name = indirectlyRepeatedRuleName,  ///
          opacity = leftRecursiveRuleOpacity; ///

    if (leftRecursiveDefinitionsLength === 0) {
      const epsilonDefinition = EpsilonDefinition.fromPrecedence(precedence);

      definitions = [
        epsilonDefinition
      ];
    } else {
      definitions = definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions);

      const definitionsEffectivelyUseless = areDefinitionsEffectivelyUseless(definitions, ruleMap);

      if (definitionsEffectivelyUseless) {
        const epsilonDefinition = EpsilonDefinition.fromPrecedence(precedence);

        definitions.push(epsilonDefinition);
      }
    }

    const NonTerminalNode = IndirectlyRepeatedNode,  ///
          indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions, NonTerminalNode);

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
