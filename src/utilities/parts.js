"use strict";

import { Parts, partTypes } from "occam-parsers";

import { first } from "../utilities/array";
import { recursiveRuleNamesFromPart, leftRecursiveRuleNamesFromPart } from "../utilities/part";

const { SequenceOfPartsPart, ZeroOrMorePartsPart } = Parts,
      { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        SequenceOfPartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

export function cloneParts(parts) {
  parts = parts.map((part) => part.clone());  ///

  return parts;
}

export function arePartsRecursive(parts) {
  const recursiveRuleNames = recursiveRuleNamesFromParts(parts),
        recursiveRuleNamesLength = recursiveRuleNames.length,
        partsRecursive = (recursiveRuleNamesLength > 0);

  return partsRecursive;
}

export function arePartsEffectivelyOptional(parts, ruleNames, context) {
  const partsEffectivelyOptional = parts.every((part) => {
    const partEffectivelyOptional = isPartEffectivelyOptional(part, ruleNames, context);

    if (partEffectivelyOptional) {
      return true;
    }
  });

  return partsEffectivelyOptional;
}

export function singlePartFromParts(parts) {
  let singlePart;

  const partsLength = parts.length;

  if (partsLength === 1) {
    const firstPart = first(parts);

    singlePart = firstPart; ///
  } else {
    const sequenceOfPartsPart = new SequenceOfPartsPart(parts);

    singlePart = sequenceOfPartsPart; ///
  }

  return singlePart;
}

export function arePartsLeftRecursive(parts) {
  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
        leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
        partsLeftRecursive = (leftRecursiveRuleNamesLength > 0);

  return partsLeftRecursive;
}

export function repeatedPartFromParts(parts) {
  const singlePart = singlePartFromParts(parts),
        part = singlePart,
        zeroOrMorePartsPart = new ZeroOrMorePartsPart(part),
        repeatedPart = zeroOrMorePartsPart;  ///

  return repeatedPart;
}

export function recursiveRuleNamesFromParts(parts) {
  const recursiveRuleNames = [];

  parts.forEach((part) => recursiveRuleNamesFromPart(part, recursiveRuleNames));

  return recursiveRuleNames;
}

export function leftRecursiveRuleNamesFromParts(parts) {
  const leftRecursiveRuleNames = [],
        firstPart = first(parts),
        part = firstPart; ///

  leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}

function isPartEffectivelyOptional(part, ruleNames, context) {
  let partEffectivelyOptional = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case RuleNamePartType: {
        const { ruleMap } = context,
              ruleNamePart = part,  ///
              ruleName = ruleNamePart.getRuleName(),
              rule = ruleMap[ruleName] || null;

        if (rule !== null) {
          const ruleEffectivelyOptional = isRuleEffectivelyOptional(rule, ruleNames, context);

          partEffectivelyOptional = ruleEffectivelyOptional;  ///
        }

        break;
      }

      case OptionalPartPartType: {
        partEffectivelyOptional = true;

        break;
      }

      case OneOrMorePartsPartType: {
        const oneOrMorePartsPart = nonTerminalPart,  ///
              part = oneOrMorePartsPart.getPart();

        partEffectivelyOptional = isPartEffectivelyOptional(part, ruleNames, context);

        break;
      }

      case ZeroOrMorePartsPartType: {
        partEffectivelyOptional = true;

        break;
      }

      case SequenceOfPartsPartType: {
        const sequenceOfPartsPart = part, ///
              parts = sequenceOfPartsPart.getParts(),
              partsEffectivelyOptional = arePartsEffectivelyOptional(parts, ruleNames, context);

        partEffectivelyOptional = partsEffectivelyOptional; ///

        break;
      }

      case ChoiceOfPartsPartType: {
        const choiceOfPartsPart = part, ///
              parts = choiceOfPartsPart.getParts(),
              partsEffectivelyOptional = arePartsEffectivelyOptional(parts, ruleNames, context);

        partEffectivelyOptional = partsEffectivelyOptional; ///

        break;
      }
    }
  }

  return partEffectivelyOptional;
}

function isRuleEffectivelyOptional(rule, ruleNames, context) {
  const ruleName = rule.getName(),
        ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

  if (ruleNamesIncludesRuleName) {
    throw new Error(`The '${ruleName}' rule has been encountered recursively whilst checking if a certain definition is effectively unary.`);
  }

  ruleNames = [ ///
    ...ruleNames,
    ruleName
  ];

  const definitions = rule.getDefinitions(),
        definitionsEffectivelyOptional = definitions.every((definition) => {
          const definitionEffectivelyOptional = isDefinitionEffectivelyOptional(definition, ruleNames, context);

          if (definitionEffectivelyOptional) {
            return true;
          }
        });

  return definitionsEffectivelyOptional;
}

function isDefinitionEffectivelyOptional(definition, ruleNames, context) {
  const parts = definition.getParts(),
        partsEffectivelyOptional = arePartsEffectivelyOptional(parts, ruleNames, context),
        definitionEffectivelyOptional = partsEffectivelyOptional; ///

  return definitionEffectivelyOptional;
}
