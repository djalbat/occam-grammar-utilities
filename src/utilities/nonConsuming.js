"use strict";

import { partTypes } from "occam-parsers";
import { specialSymbols } from "occam-lexers";

const { epsilon, noWhitespace, startOfContent } = specialSymbols,
      { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function isRuleNonConsuming(rule, ruleMap, ruleNames = []) {
  let ruleNonConsuming = true;

  const ruleName = rule.getName(),
        ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

  if (!ruleNamesIncludesRuleName) {
    ruleNames = [ ///
      ...ruleNames,
      ruleName
    ];

    const definitions = rule.getDefinitions(),
          definitionsNonConsuming = areDefinitionsNonConsuming(definitions, ruleMap, ruleNames);

    ruleNonConsuming = definitionsNonConsuming; ///
  }

  return ruleNonConsuming;
}

function areDefinitionsNonConsuming(definitions, ruleMap, ruleNames) {
  const definitionsNonConsuming = definitions.some((definition) => {
    const definitionNonConsuming = isDefinitionNonConsuming(definition, ruleMap, ruleNames);

    if (definitionNonConsuming) {
      return true;
    }
  });

  return definitionsNonConsuming;
}

function isDefinitionNonConsuming(definition, ruleMap, ruleNames) {
  const parts = definition.getParts(),
        partsNonConsuming = arePartsNonConsuming(parts, ruleMap, ruleNames),
        definitionNonConsuming = partsNonConsuming; ///

  return definitionNonConsuming;
}

function arePartsNonConsuming(parts, ruleMap, ruleNames) {
  const partsNonConsuming = parts.every((part) => {
    const partNonConsuming = isPartNonConsuming(part, ruleMap, ruleNames);

    if (partNonConsuming) {
      return true;
    }
  });

  return partsNonConsuming;
}

function isPartNonConsuming(part, ruleMap, ruleNames) {
  let partNonConsuming;

  const parTerminalPart = part.isTerminalPart();

  if (parTerminalPart) {
    const terminalPart = part,  ///
          terminalPartNonConsuming = isTerminalPartNonConsuming(terminalPart);

    partNonConsuming = terminalPartNonConsuming; ///
  } else {
    const nonTerminalNPart = part,  ///
          nonTerminalPartNonConsuming = isNonTerminalPartNonConsuming(nonTerminalNPart, ruleMap, ruleNames);

    partNonConsuming = nonTerminalPartNonConsuming; ///
  }

  return partNonConsuming;
}

function isTerminalPartNonConsuming(terminalPart) {
  let terminalPartNonConsuming;

  const terminalPartString = terminalPart.asString();

  switch (terminalPartString) {
    case epsilon:
    case noWhitespace:
    case startOfContent: {
      terminalPartNonConsuming = true;

      break;
    }

    default: {
      terminalPartNonConsuming = false;

      break;
    }
  }

  return terminalPartNonConsuming;
}

function isNonTerminalPartNonConsuming(nonTerminalPart, ruleMap, ruleNames) {
  let partNonConsuming = false;

  const type = nonTerminalPart.getType();

  switch (type) {
    case RuleNamePartType: {
      const ruleNamePart = nonTerminalPart,  ///
            ruleName = ruleNamePart.getRuleName(),
            rule = ruleMap[ruleName] || null;

      if (rule !== null) {
        const ruleNonConsuming = isRuleNonConsuming(rule, ruleMap, ruleNames);

        partNonConsuming = ruleNonConsuming;  ///
      }

      break;
    }

    case OptionalPartPartType: {
      partNonConsuming = true;

      break;
    }

    case OneOrMorePartsPartType: {
      const oneOrMorePartsPart = nonTerminalPart,  ///
            part = oneOrMorePartsPart.getPart();

      partNonConsuming = isPartNonConsuming(part, ruleMap, ruleNames);

      break;
    }

    case ZeroOrMorePartsPartType: {
      partNonConsuming = true;

      break;
    }

    case SequenceOfPartsPartType: {
      const sequenceOfPartsPart = nonTerminalPart, ///
            parts = sequenceOfPartsPart.getParts(),
            partsNonConsuming = arePartsNonConsuming(parts, ruleMap, ruleNames);

      partNonConsuming = partsNonConsuming; ///

      break;
    }

    case ChoiceOfPartsPartType: {
      const choiceOfPartsPart = nonTerminalPart, ///
            parts = choiceOfPartsPart.getParts(),
            partsNonConsuming = parts.some((part) => {
              const partNonConsuming = isPartNonConsuming(part, ruleMap, ruleNames);

              return partNonConsuming;
            })

      partNonConsuming = partsNonConsuming; ///

      break;
    }
  }

  return partNonConsuming;
}
