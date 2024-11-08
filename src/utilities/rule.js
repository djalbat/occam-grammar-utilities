"use strict";

import { partTypes } from "occam-parsers";
import { specialSymbols } from "occam-lexers";

import { recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../utilities/definition";

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

export function isRuleNonProducing(rule, ruleMap, ruleNames = []) {
  let ruleNonProducing = true;

  const ruleName = rule.getName(),
        ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

  if (!ruleNamesIncludesRuleName) {
    ruleNames = [ ///
      ...ruleNames,
      ruleName
    ];

    const definitions = rule.getDefinitions(),
          definitionsNonProducing = areDefinitionsNonProducing(definitions, ruleMap, ruleNames);

    ruleNonProducing = definitionsNonProducing; ///
  }

  return ruleNonProducing;
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

function areDefinitionsNonProducing(definitions, ruleMap, ruleNames) {
  const definitionsNonProducing = definitions.every((definition) => {
    const definitionNonProducing = isDefinitionNonProducing(definition, ruleMap, ruleNames);

    if (definitionNonProducing) {
      return true;
    }
  });

  return definitionsNonProducing;
}

function isDefinitionNonProducing(definition, ruleMap, ruleNames) {
  const parts = definition.getParts(),
        partsNonConsuming = arePartsNonConsuming(parts, ruleMap, ruleNames),
        partsNonProducing = arePartsNonProducing(parts, ruleMap, ruleNames),
        definitionNonProducing = (partsNonConsuming || partsNonProducing);

  return definitionNonProducing;
}

function arePartsNonProducing(parts, ruleMap, ruleNames) {
  const partsNonProducing = parts.some((part) => {
    const partNonProducing = isPartNonProducing(part, ruleMap, ruleNames);

    if (partNonProducing) {
      return true;
    }
  });

  return partsNonProducing;
}

function isPartNonProducing(part, ruleMap, ruleNames) {
  let partNonProducing;

  const parTerminalPart = part.isTerminalPart();

  if (parTerminalPart) {
    const terminalPart = part,  ///
          terminalPartUseless = isTerminalPartNonProducing(terminalPart);

    partNonProducing = terminalPartUseless; ///
  } else {
    const nonTerminalNPart = part,  ///
          nonTerminalPartNonProducing = isNonTerminalPartNonProducing(nonTerminalNPart, ruleMap, ruleNames);

    partNonProducing = nonTerminalPartNonProducing; ///
  }

  return partNonProducing;
}

function isTerminalPartNonProducing(terminalPart) {
  const terminalPartNonProducing = false;

  return terminalPartNonProducing;
}

function isNonTerminalPartNonProducing(nonTerminalPart, ruleMap, ruleNames) {
  let partNonProducing = false;

  const type = nonTerminalPart.getType();

  switch (type) {
    case RuleNamePartType: {
      const ruleNamePart = nonTerminalPart,  ///
            ruleName = ruleNamePart.getRuleName(),
            rule = ruleMap[ruleName] || null;

      if (rule !== null) {
        const ruleNonProducing = isRuleNonProducing(rule, ruleMap, ruleNames);

        partNonProducing = ruleNonProducing;  ///
      }

      break;
    }

    case OptionalPartPartType: {
      partNonProducing = false;

      break;
    }

    case OneOrMorePartsPartType: {
      const oneOrMorePartsPart = nonTerminalPart,  ///
            part = oneOrMorePartsPart.getPart();

      partNonProducing = isPartNonProducing(part, ruleMap, ruleNames);

      break;
    }

    case ZeroOrMorePartsPartType: {
      partNonProducing = false;

      break;
    }

    case SequenceOfPartsPartType: {
      const sequenceOfPartsPart = nonTerminalPart, ///
            parts = sequenceOfPartsPart.getParts(),
            partsNonProducing = arePartsNonProducing(parts, ruleMap, ruleNames);

      partNonProducing = partsNonProducing; ///

      break;
    }

    case ChoiceOfPartsPartType: {
      const choiceOfPartsPart = nonTerminalPart, ///
            parts = choiceOfPartsPart.getParts(),
            partsNonProducing = parts.every((part) => {
              const partNonProducing = isPartNonProducing(part, ruleMap, ruleNames);

              return partNonProducing;
            })

      partNonProducing = partsNonProducing; ///

      break;
    }
  }

  return partNonProducing;
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
