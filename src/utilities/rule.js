"use strict";

import { partTypes } from "occam-parsers";

import { isPartEmpty } from "./part";
import { recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "./definition";

const { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function isRuleEffectivelyEmpty(rule, ruleMap) { ///
  const definitions = rule.getDefinitions(),
        definitionsEffectivelyEmpty = areDefinitionsEffectivelyEmpty(definitions, ruleMap),
        ruleEffectivelyEmpty = definitionsEffectivelyEmpty; ///

  return ruleEffectivelyEmpty;
}

export function recursiveRuleNamesFromRule(rule, recursiveRuleNames = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    recursiveRuleNamesFromDefinition(definition, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

export function leftRecursiveRuleNamesFromRule(rule, leftRecursiveRuleNames = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    leftRecursiveRuleNamesFromDefinition(definition, leftRecursiveRuleNames);
  });

  return leftRecursiveRuleNames;
}

function areDefinitionsEffectivelyEmpty(definitions, ruleMap) {
  const definitionsEffectivelyEmpty = definitions.some((definition) => {
    const definitionEffectivelyEmpty = isDefinitionEffectivelyEmpty(definition, ruleMap);

    if (definitionEffectivelyEmpty) {
      return true;
    }
  });

  return definitionsEffectivelyEmpty;
}

function isDefinitionEffectivelyEmpty(definition, ruleMap) {
  const parts = definition.getParts(),
        partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap),
        definitionEffectivelyEmpty = partsEffectivelyEmpty; ///

  return definitionEffectivelyEmpty;
}

function arePartsEffectivelyEmpty(parts, ruleMap) {
  const partsEffectivelyEmpty = parts.every((part) => {
    const partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap);

    if (partEffectivelyEmpty) {
      return true;
    }
  });

  return partsEffectivelyEmpty;
}

function isPartEffectivelyEmpty(part, ruleMap) {
  let partEffectivelyEmpty;

  const parTerminalPart = part.isTerminalPart();

  if (parTerminalPart) {
    const terminalPart = part,  ///
          terminalPartEmpty = isTerminalPartEffectivelyEmpty(terminalPart);

    partEffectivelyEmpty = terminalPartEmpty; ///
  } else {
    const nonTerminalNPart = part,  ///
          nonTerminalPartEffectivelyEmpty = isNonTerminalPartEffectivelyEmpty(nonTerminalNPart, ruleMap);

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

function isNonTerminalPartEffectivelyEmpty(nonTerminalPart, ruleMap) {
  let partEffectivelyEmpty = false;

  const type = nonTerminalPart.getType();

  switch (type) {
    case RuleNamePartType: {
      const ruleNamePart = nonTerminalPart,  ///
            ruleName = ruleNamePart.getRuleName(),
            rule = ruleMap[ruleName] || null;

      if (rule !== null) {
        const ruleEffectivelyEmpty = isRuleEffectivelyEmpty(rule, ruleMap);

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

      partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap);

      break;
    }

    case ZeroOrMorePartsPartType: {
      partEffectivelyEmpty = true;

      break;
    }

    case SequenceOfPartsPartType: {
      const sequenceOfPartsPart = nonTerminalPart, ///
            parts = sequenceOfPartsPart.getParts(),
            partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap);

      partEffectivelyEmpty = partsEffectivelyEmpty; ///

      break;
    }

    case ChoiceOfPartsPartType: {
      const choiceOfPartsPart = nonTerminalPart, ///
            parts = choiceOfPartsPart.getParts(),
            partsEffectivelyEmpty = parts.some((part) => {
              const partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap);

              return partEffectivelyEmpty;
            })

      partEffectivelyEmpty = partsEffectivelyEmpty; ///

      break;
    }
  }

  return partEffectivelyEmpty;
}
