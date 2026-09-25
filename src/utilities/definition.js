"use strict";

import { partTypes } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { isPartConsuming } from "../utilities/nonConsuming";

const { first } = arrayUtilities,
      { RuleNamePartType,
        IsolatedPartPartType,
        OptionalPartPartType,
        CommittedPartPartType,
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

export function isDefinitionsFirstPartConsuming(definition, ruleMap) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartConsuming = isPartConsuming(firstPart, ruleMap),
        definitionsFirstPartConsuming = firstPartConsuming;  ///

  return definitionsFirstPartConsuming;
}

export function isDefinitionsFirstPartNakedRuleNamePart(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartNakedRuleNamePart = isPartNakedRuleNamePart(firstPart),
        definitionsFirstPartNakedRuleNamePart = firstPartNakedRuleNamePart;  ///

  return definitionsFirstPartNakedRuleNamePart;
}

export function leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);
  });

  return leftRecursiveRuleNames;
}

export function leftRecursiveRuleNameFromDefinition(definition, ruleMap) {
  let leftRecursiveRuleName = null;

  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition, ruleMap),
        leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length;

  if (leftRecursiveRuleNamesLength === 1) {
    const firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

    leftRecursiveRuleName = firstLeftRecursiveRuleName; ///
  }

  return leftRecursiveRuleName;
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

function isPartNakedRuleNamePart(part) {
  let partNakedRuleNamePart = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    if (type === RuleNamePartType) {
      const ruleNamePart = nonTerminalPart, ///
            continuation = ruleNamePart.isContinuation();

      if (!continuation) {
        partNakedRuleNamePart = true;
      }
    }
  }

  return partNakedRuleNamePart;
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

      case CommittedPartPartType: {
        const committedPartPart = nonTerminalPart,  ///
              part = committedPartPart.getPart();

        leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        break;
      }

      case IsolatedPartPartType: {
        const isolatedPartPart = nonTerminalPart,  ///
            part = isolatedPartPart.getPart();

        leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        break;
      }
    }
  }
}

function leftRecursiveRuleNamesFromParts(parts, ruleMap, leftRecursiveRuleNames = []) {
  parts.some((part) => {
    const partConsuming = isPartConsuming(part, ruleMap);

    if (partConsuming) {
      leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

      return true;
    }
  });

  return leftRecursiveRuleNames;
}
