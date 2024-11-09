"use strict";

import { partTypes } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { isPartNonConsuming } from "../utilities/nonConsuming";

const { first } = arrayUtilities,
      { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function isDefinitionLeftRecursive(definition, ruleMap) {
  const parts = definition.getParts(),
        partsLeftRecursive = arePartsLeftRecursive(parts, ruleMap),
        definitionLeftRecursive = partsLeftRecursive; ///

  return definitionLeftRecursive;
}

export function leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);
  });

  return leftRecursiveRuleNames;
}

export function leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames = []) {
  const parts = definition.getParts();

  leftRecursiveRuleNamesFromParts(parts, ruleMap, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}

function arePartsLeftRecursive(parts, ruleMap) {
  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts, ruleMap),
        leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
        partsLeftRecursive = (leftRecursiveRuleNamesLength > 0);

  return partsLeftRecursive;
}

function leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames) {
  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case RuleNamePartType: {
        const ruleNamePart = nonTerminalPart,  ///
              ruleName = ruleNamePart.getRuleName(),
              leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

        if (!leftRecursiveRuleNamesIncludesRuleName) {
          const leftRecursiveRuleName = ruleName; ///

          leftRecursiveRuleNames.push(leftRecursiveRuleName);
        }

        break;
      }

      case OptionalPartPartType: {
        const optionalPartPart = nonTerminalPart, ///
              part = optionalPartPart.getPart();

        leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        break;
      }

      case OneOrMorePartsPartType: {
        const oneOrMorePartsPart = nonTerminalPart,  ///
              part = oneOrMorePartsPart.getPart();

        leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        break;
      }

      case ZeroOrMorePartsPartType: {
        const zeroOrMorePartsPart = nonTerminalPart, ///
              part = zeroOrMorePartsPart.getPart();

        leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        break;
      }

      case SequenceOfPartsPartType: {
        const sequenceOfPartsPart = nonTerminalPart,  ///
              parts = sequenceOfPartsPart.getParts(),
              firstPart = first(parts),
              part = firstPart; ///

        leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        break;
      }

      case ChoiceOfPartsPartType: {
        const choiceOfPartsPart = nonTerminalPart, ///
              parts = choiceOfPartsPart.getParts();

        parts.forEach((part) => {
          leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames)
        });

        break;
      }
    }
  }
}

function leftRecursiveRuleNamesFromParts(parts, ruleMap, leftRecursiveRuleNames = []) {
  parts.every((part) => {
    const partNonConsuming = isPartNonConsuming(part, ruleMap);

    if (!partNonConsuming) {
      leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);
    } else {
      return true;
    }
  });

  return leftRecursiveRuleNames;
}
