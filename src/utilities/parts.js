"use strict";

import { partTypes } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { isPartEmpty, recursiveRuleNamesFromPart, leftRecursiveRuleNamesFromPart } from "../utilities/part";

const { first } = arrayUtilities,
      { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function arePartsEqual(parts) {
  const firstPart = first(parts),
        firstPartString = firstPart.asString(),
        partsEqual = parts.every((part) => {
          const partString = part.asString(),
                partStringFirstPartString = (partString === firstPartString);

          if (partStringFirstPartString) {
            return true;
          }
        });

  return partsEqual;
}

export function arePartsLeftRecursive(parts) {
  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
        leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
        partsLeftRecursive = (leftRecursiveRuleNamesLength > 0);

  return partsLeftRecursive;
}

export function recursiveRuleNamesFromParts(parts, recursiveRuleNames = []) {
  parts.forEach((part) => {
    recursiveRuleNamesFromPart(part, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

export function leftRecursiveRuleNamesFromParts(parts, leftRecursiveRuleNames = []) {
  const firstPart = first(parts),
        part = firstPart; ///

  leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}

export function isRuleEffectivelyEmpty(rule, ruleMap, ruleNames = []) { ///
  let ruleEffectivelyEmpty = false;

  const ruleName = rule.getName(),
        ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

  if (!ruleNamesIncludesRuleName) {
    ruleNames = [ ///
      ...ruleNames,
      ruleName
    ];

    const definitions = rule.getDefinitions(),
          definitionsEffectivelyEmpty = areDefinitionsEffectivelyEmpty(definitions, ruleMap, ruleNames);

    ruleEffectivelyEmpty = definitionsEffectivelyEmpty; ///
  }

  return ruleEffectivelyEmpty;
}

function areDefinitionsEffectivelyEmpty(definitions, ruleMap, ruleNames) {
  const definitionsEffectivelyEmpty = definitions.every((definition) => {
    const definitionEffectivelyEmpty = isDefinitionEffectivelyEmpty(definition, ruleMap, ruleNames);

    if (definitionEffectivelyEmpty) {
      return true;
    }
  });

  return definitionsEffectivelyEmpty;
}

function isDefinitionEffectivelyEmpty(definition, ruleMap, ruleNames) {
  const parts = definition.getParts(),
        partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap, ruleNames),
        definitionEffectivelyEmpty = partsEffectivelyEmpty; ///

  return definitionEffectivelyEmpty;
}

function arePartsEffectivelyEmpty(parts, ruleMap, ruleNames) {
  const partsEffectivelyEmpty = parts.every((part) => {
    const partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap, ruleNames);

    if (partEffectivelyEmpty) {
      return true;
    }
  });

  return partsEffectivelyEmpty;
}

function isPartEffectivelyEmpty(part, ruleMap, ruleNames) {
  let partEffectivelyEmpty;

  const parTerminalPart = part.isTerminalPart();

  if (parTerminalPart) {
    const terminalPart = part,  ///
          terminalPartEmpty = isTerminalPartEffectivelyEmpty(terminalPart);

    partEffectivelyEmpty = terminalPartEmpty; ///
  } else {
    const nonTerminalNPart = part,  ///
          nonTerminalPartEffectivelyEmpty = isNonTerminalPartEffectivelyEmpty(nonTerminalNPart, ruleMap, ruleNames);

    partEffectivelyEmpty = nonTerminalPartEffectivelyEmpty; ///
  }

  return partEffectivelyEmpty;
}

function isTerminalPartEffectivelyEmpty(terminalPart) {
  const part = terminalPart,  ///
        partEmpty = isPartEmpty(part),
        terminalPartEffectivelyEmpty = partEmpty; ///

  return terminalPartEffectivelyEmpty;
}

function isNonTerminalPartEffectivelyEmpty(nonTerminalPart, ruleMap, ruleNames) {
  let partEffectivelyEmpty = false;

  const type = nonTerminalPart.getType();

  switch (type) {
    case RuleNamePartType: {
      const ruleNamePart = nonTerminalPart,  ///
            ruleName = ruleNamePart.getRuleName(),
            rule = ruleMap[ruleName] || null;

      if (rule !== null) {
        const ruleEffectivelyEmpty = isRuleEffectivelyEmpty(rule, ruleMap, ruleNames);

        partEffectivelyEmpty = ruleEffectivelyEmpty;  ///
      }

      break;
    }

    case OptionalPartPartType: {
      partEffectivelyEmpty = true;

      break;
    }

    case OneOrMorePartsPartType: {
      const oneOrMorePartsPart = nonTerminalPart,  ///
            part = oneOrMorePartsPart.getPart();

      partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap, ruleNames);

      break;
    }

    case ZeroOrMorePartsPartType: {
      partEffectivelyEmpty = true;

      break;
    }

    case SequenceOfPartsPartType: {
      const sequenceOfPartsPart = nonTerminalPart, ///
            parts = sequenceOfPartsPart.getParts(),
            partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap, ruleNames);

      partEffectivelyEmpty = partsEffectivelyEmpty; ///

      break;
    }

    case ChoiceOfPartsPartType: {
      const choiceOfPartsPart = nonTerminalPart, ///
            parts = choiceOfPartsPart.getParts(),
            partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap, ruleNames);

      partEffectivelyEmpty = partsEffectivelyEmpty; ///

      break;
    }
  }

  return partEffectivelyEmpty;
}
