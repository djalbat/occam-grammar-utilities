"use strict";

import { partTypes } from "occam-parsers";

import { isPartEmpty } from "../utilities/part";
import { recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../utilities/definition";

const { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function isRuleEffectivelyEmpty(rule, ruleMap, ruleNames = []) {
  let ruleEffectivelyEmpty = true;

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

export function isRuleEffectivelyUseless(rule, ruleMap, ruleNames = []) {
  let ruleEffectivelyUseless = true;

  const ruleName = rule.getName(),
        ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

  if (!ruleNamesIncludesRuleName) {
    ruleNames = [ ///
      ...ruleNames,
      ruleName
    ];

    const definitions = rule.getDefinitions(),
          definitionsEffectivelyUseless = areDefinitionsEffectivelyUseless(definitions, ruleMap, ruleNames);

    ruleEffectivelyUseless = definitionsEffectivelyUseless; ///
  }

  return ruleEffectivelyUseless;
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

export function areDefinitionsEffectivelyUseless(definitions, ruleMap, ruleNames) {
  const definitionsEffectivelyUseless = definitions.every((definition) => {
    const definitionEffectivelyUseless = isDefinitionEffectivelyUseless(definition, ruleMap, ruleNames);

    if (definitionEffectivelyUseless) {
      return true;
    }
  });

  return definitionsEffectivelyUseless;
}

function isDefinitionEffectivelyUseless(definition, ruleMap, ruleNames) {
  const parts = definition.getParts(),
        partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap, ruleNames),
        partsEffectivelyUseless = arePartsEffectivelyUseless(parts, ruleMap, ruleNames),
        definitionEffectivelyUseless = (partsEffectivelyEmpty || partsEffectivelyUseless);

  return definitionEffectivelyUseless;
}

function arePartsEffectivelyUseless(parts, ruleMap, ruleNames) {
  const partsEffectivelyUseless = parts.some((part) => {
    const partEffectivelyUseless = isPartEffectivelyUseless(part, ruleMap, ruleNames);

    if (partEffectivelyUseless) {
      return true;
    }
  });

  return partsEffectivelyUseless;
}

function isPartEffectivelyUseless(part, ruleMap, ruleNames) {
  let partEffectivelyUseless;

  const parTerminalPart = part.isTerminalPart();

  if (parTerminalPart) {
    const terminalPart = part,  ///
          terminalPartUseless = isTerminalPartEffectivelyUseless(terminalPart);

    partEffectivelyUseless = terminalPartUseless; ///
  } else {
    const nonTerminalNPart = part,  ///
          nonTerminalPartEffectivelyUseless = isNonTerminalPartEffectivelyUseless(nonTerminalNPart, ruleMap, ruleNames);

    partEffectivelyUseless = nonTerminalPartEffectivelyUseless; ///
  }

  return partEffectivelyUseless;
}

function isTerminalPartEffectivelyUseless(terminalPart) {
  const terminalPartEffectivelyUseless = false;

  return terminalPartEffectivelyUseless;
}

function isNonTerminalPartEffectivelyUseless(nonTerminalPart, ruleMap, ruleNames) {
  let partEffectivelyUseless = false;

  const type = nonTerminalPart.getType();

  switch (type) {
    case RuleNamePartType: {
      const ruleNamePart = nonTerminalPart,  ///
            ruleName = ruleNamePart.getRuleName(),
            rule = ruleMap[ruleName] || null;

      if (rule !== null) {
        const ruleEffectivelyUseless = isRuleEffectivelyUseless(rule, ruleMap, ruleNames);

        partEffectivelyUseless = ruleEffectivelyUseless;  ///
      }

      break;
    }

    case OptionalPartPartType: {
      partEffectivelyUseless = false

      break;
    }

    case OneOrMorePartsPartType: {
      const oneOrMorePartsPart = nonTerminalPart,  ///
            part = oneOrMorePartsPart.getPart();

      partEffectivelyUseless = isPartEffectivelyUseless(part, ruleMap, ruleNames);

      break;
    }

    case ZeroOrMorePartsPartType: {
      partEffectivelyUseless = false

      break;
    }

    case SequenceOfPartsPartType: {
      const sequenceOfPartsPart = nonTerminalPart, ///
            parts = sequenceOfPartsPart.getParts(),
            partsEffectivelyUseless = arePartsEffectivelyUseless(parts, ruleMap, ruleNames);

      partEffectivelyUseless = partsEffectivelyUseless; ///

      break;
    }

    case ChoiceOfPartsPartType: {
      const choiceOfPartsPart = nonTerminalPart, ///
            parts = choiceOfPartsPart.getParts(),
            partsEffectivelyUseless = parts.every((part) => {
              const partEffectivelyUseless = isPartEffectivelyUseless(part, ruleMap, ruleNames);

              return partEffectivelyUseless;
            })

      partEffectivelyUseless = partsEffectivelyUseless; ///

      break;
    }
  }

  return partEffectivelyUseless;
}

function areDefinitionsEffectivelyEmpty(definitions, ruleMap, ruleNames) {
  const definitionsEffectivelyEmpty = definitions.some((definition) => {
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
            partsEffectivelyEmpty = parts.some((part) => {
              const partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap, ruleNames);

              return partEffectivelyEmpty;
            })

      partEffectivelyEmpty = partsEffectivelyEmpty; ///

      break;
    }
  }

  return partEffectivelyEmpty;
}
