"use strict";

import { partTypes } from "occam-parsers";

const { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        SequenceOfPartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

export function recursiveRuleNamesFromRule(rule, recursiveRuleNames = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    recursiveRuleNamesFromDefinition(definition, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

function recursiveRuleNamesFromDefinition(definition, recursiveRuleNames = []) {
  const parts = definition.getParts();

  recursiveRuleNamesFromParts(parts, recursiveRuleNames);

  return recursiveRuleNames;
}

function recursiveRuleNamesFromParts(parts, recursiveRuleNames = []) {
  parts.forEach((part) => {
    recursiveRuleNamesFromPart(part, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

function recursiveRuleNamesFromPart(part, recursiveRuleNames) {
  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case RuleNamePartType: {
        const ruleNamePart = nonTerminalPart,  ///
              ruleName = ruleNamePart.getRuleName(),
              recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);

        if (!recursiveRuleNamesIncludesRuleName) {
          const recursiveRuleName = ruleName; ///

          recursiveRuleNames.push(recursiveRuleName);
        }

        break;
      }

      case OptionalPartPartType: {
        const optionalPartPart = nonTerminalPart, ///
              part = optionalPartPart.getPart();

        recursiveRuleNamesFromPart(part, recursiveRuleNames);

        break;
      }

      case OneOrMorePartsPartType: {
        const oneOrMorePartsPart = nonTerminalPart,  ///
              part = oneOrMorePartsPart.getPart();

        recursiveRuleNamesFromPart(part, recursiveRuleNames);

        break;
      }

      case ZeroOrMorePartsPartType: {
        const zeroOrMorePartsPart = nonTerminalPart, ///
              part = zeroOrMorePartsPart.getPart();  ///

        recursiveRuleNamesFromPart(part, recursiveRuleNames);

        break;
      }

      case SequenceOfPartsPartType: {
        const sequenceOfPartsPart = nonTerminalPart,  ///
              parts = sequenceOfPartsPart.getParts();

        parts.forEach((part) => {
          recursiveRuleNamesFromPart(part, recursiveRuleNames);
        });

        break;
      }

      case ChoiceOfPartsPartType: {
        const choiceOfPartsPart = nonTerminalPart, ///
              parts = choiceOfPartsPart.getParts();

        parts.forEach((part) => {
          recursiveRuleNamesFromPart(part, recursiveRuleNames)
        });

        break;
      }
    }
  }
}
