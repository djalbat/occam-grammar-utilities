"use strict";

import { partTypes } from "occam-parsers";
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities,
      { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function isDefinitionLeftRecursive(definition) {
  const parts = definition.getParts(),
        partsLeftRecursive = arePartsLeftRecursive(parts),
        definitionLeftRecursive = partsLeftRecursive; ///

  return definitionLeftRecursive;
}

export function leftRecursiveRuleNamesFromRule(rule, leftRecursiveRuleNames = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    leftRecursiveRuleNamesFromDefinition(definition, leftRecursiveRuleNames);
  });

  return leftRecursiveRuleNames;
}

export function leftRecursiveRuleNamesFromDefinition(definition, leftRecursiveRuleNames = []) {
  const parts = definition.getParts();

  leftRecursiveRuleNamesFromParts(parts, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}

function arePartsLeftRecursive(parts) {
  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
    leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
    partsLeftRecursive = (leftRecursiveRuleNamesLength > 0);

  return partsLeftRecursive;
}

function leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames) {
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

        leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

        break;
      }

      case OneOrMorePartsPartType: {
        const oneOrMorePartsPart = nonTerminalPart,  ///
              part = oneOrMorePartsPart.getPart();

        leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

        break;
      }

      case ZeroOrMorePartsPartType: {
        const zeroOrMorePartsPart = nonTerminalPart, ///
              part = zeroOrMorePartsPart.getPart();

        leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

        break;
      }

      case SequenceOfPartsPartType: {
        const sequenceOfPartsPart = nonTerminalPart,  ///
              parts = sequenceOfPartsPart.getParts(),
              firstPart = first(parts),
              part = firstPart; ///

        leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

        break;
      }

      case ChoiceOfPartsPartType: {
        const choiceOfPartsPart = nonTerminalPart, ///
              parts = choiceOfPartsPart.getParts();

        parts.forEach((part) => leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames));

        break;
      }
    }
  }
}

function leftRecursiveRuleNamesFromParts(parts, leftRecursiveRuleNames = []) {
  const firstPart = first(parts),
        part = firstPart; ///

  leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}
