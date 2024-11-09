"use strict";

import { partTypes } from "occam-parsers";

const { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function isRuleNonProducing(rule, ruleMap, ruleNames = []) {
  let ruleNonProducing = false;

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
        partsNonProducing = arePartsNonProducing(parts, ruleMap, ruleNames),
        definitionNonProducing = partsNonProducing;

  return definitionNonProducing;
}

function arePartsNonProducing(parts, ruleMap, ruleNames) {
  const partsNonProducing = parts.every((part) => {
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
      partNonProducing = true;

      break;
    }

    case OneOrMorePartsPartType: {
      const oneOrMorePartsPart = nonTerminalPart,  ///
            part = oneOrMorePartsPart.getPart();

      partNonProducing = isPartNonProducing(part, ruleMap, ruleNames);

      break;
    }

    case ZeroOrMorePartsPartType: {
      partNonProducing = true;

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
