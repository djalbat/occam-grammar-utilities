"use strict";

import { partTypes } from "occam-parsers";

import { isPartSimplePart } from "../utilities/part";

const { IsolatedPartPartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        BranchingPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function recursiveRuleNamesFromPart(part, ruleMap, recursiveRuleNames = []) {
  retrieveSimpleParts(part, (simplePart) => {
    const simplePartTerminalPart = simplePart.isTerminalPart();

    if (simplePartTerminalPart) {
      ///
    } else {
      const ruleNamePart = simplePart,  ///
            ruleName = ruleNamePart.getRuleName(),
            rule = ruleMap[ruleName] || null;

      if (rule == null) {
        throw new Error(`The  '${ruleName}' rule is missing.`);
      }

      const recursiveRuleNamesInclucesRuleName = recursiveRuleNames.includes(ruleName);

      if (!recursiveRuleNamesInclucesRuleName) {
        const recursiveRuleName = ruleName; ///

        recursiveRuleNames.push(recursiveRuleName);
      }
    }
  });

  return recursiveRuleNames;
}

export function recursiveRuleNamesFromDefinition(definition, ruleMap, recursiveRuleNames = []) {
  const parts = definition.getParts();

  parts.forEach((part) => {
    recursiveRuleNamesFromPart(part, ruleMap, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

export function recursiveRuleNamesFromRule(rule, ruleMap, recursiveRuleNames = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    recursiveRuleNamesFromDefinition(definition, ruleMap, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

export default {
  recursiveRuleNamesFromPart,
  recursiveRuleNamesFromDefinition,
  recursiveRuleNamesFromRule
};

export function retrieveSimpleParts(part, callback) {
  retrieveParts(part, (part) => {
    const partSimplePart = isPartSimplePart(part);

    if (partSimplePart) {
      const simplePart = part;  ///

      callback(simplePart);
    }
  });
}

function retrieveParts(part, callback) {
  callback(part);

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part,
          type = nonTerminalPart.getType();

    switch (type) {
      case OptionalPartPartType: {
        const optionalPart = nonTerminalPart, ///
              part = optionalPart.getPart();

        retrieveParts(part, callback);

        break;
      }

      case ZeroOrMorePartsPartType: {
        const zeroOfMorePartsPart = nonTerminalPart, ///
              part = zeroOfMorePartsPart.getPart();

        retrieveParts(part, callback);

        break;
      }

      case OneOrMorePartsPartType: {
        const oneOrMorePartsPart = nonTerminalPart,  ///
              part = oneOrMorePartsPart.getPart();

        retrieveParts(part, callback);

        break;
      }

      case IsolatedPartPartType: {
        const isolatedPartPart = nonTerminalPart,  ///
              part = isolatedPartPart.getPart();

        retrieveParts(part, callback);

        break;
      }

      case SequenceOfPartsPartType: {
        const sequenceOfPartsPart = nonTerminalPart, ///
              parts = sequenceOfPartsPart.getParts();

        parts.forEach((part) => {
          retrieveParts(part, callback);
        });

        break;
      }

      case BranchingPartsPartType: {
        const branchingPartsPart = nonTerminalPart, ///
              parts = branchingPartsPart.getParts();

        parts.forEach((part) => {
          retrieveParts(part, callback);
        });

        break;
      }

      case ChoiceOfPartsPartType: {
        const choiceOfPartsPart = nonTerminalPart, ///
              parts = choiceOfPartsPart.getParts();

        parts.forEach((part) => {
          retrieveParts(part, callback);
        });

        break;
      }
    }
  }
}
