"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import EpsilonDefinition from "../../definition/epsilon";
import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { arePartsEqual } from "../../utilities/parts";
import { isRuleNonProducing } from "../../utilities/nonProducing";
import { isDefinitionComplex } from "../../utilities/complex";
import { isDefinitionOccluded } from "../../utilities/occluded";
import { isDefinitionCallAhead } from "../../utilities/callAhead";
import { isDefinitionQualified } from "../../utilities/qualified";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";
import { isDefinitionLeftRecursive, leftRecursiveRuleNamesFromDefinition } from "../../utilities/leftRecursive";

const { first } = arrayUtilities;

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyRepeatedNode;

    return NonTerminalNode;
  }

  static fromRuleAndLeftRecursiveRule(rule, leftRecursiveRule, ruleMap) {
    let definitions = rule.getDefinitions();

    const leftRecursiveRuleName = leftRecursiveRule.getName();

    let leftRecursiveDefinitions = definitions.filter((definition) => {  ///
      const definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleMap);

      if (definitionLeftRecursive) {
        const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition, ruleMap),
              firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

        if (firstLeftRecursiveRuleName === leftRecursiveRuleName) {
          const ruleName = rule.getName(),
                definitionString = definition.asString();

          const definitionComplex = isDefinitionComplex(definition);

          if (definitionComplex) {
            throw new Error(`The '${definitionString}' left recursive-definition of the '${ruleName}' rule is complex.`);
          }

          const definitionOccluded = isDefinitionOccluded(definition, ruleMap);

          if (definitionOccluded) {
            const definitionString = definition.asString();

            throw new Error(`The '${definitionString}' left recursive definition of the '${ruleName}' rule is occluded.`);
          }

          const definitionCallAhead = isDefinitionCallAhead(definition);

          if (definitionCallAhead) {
            throw new Error(`The first part of the '${definitionString}' left recursive definition of the '${ruleName}' rule is look-ahead.`);
          }

          const definitionQualified = isDefinitionQualified(definition);

          if (definitionQualified) {
            throw new Error(`The first part of the '${definitionString}' left recursive definition of the '${ruleName}' rule is qualified.`);
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
          name = indirectlyRepeatedRuleName,  ///
          opacity = leftRecursiveRuleOpacity; ///

    definitions = definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions);

    const indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions),
          indirectlyRepeatedRuleNonProducing = isRuleNonProducing(indirectlyRepeatedRule, ruleMap);

    if (indirectlyRepeatedRuleNonProducing) {
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
