"use strict";

import { arrayUtilities } from "necessary";

import { partTypes } from "occam-parsers";

import { isPartSimplePart } from "../utilities/part";

const { first } = arrayUtilities,
      { IsolatedPartPartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        BranchingPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function isDefinitionLeftRecursive(definition, ruleMap) {
  const leftRecursiveRuleNames = [];

  leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

  const leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
        definitionLeftRecursive = (leftRecursiveRuleNamesLength > 0);

  return definitionLeftRecursive;
}

export function leftRecursiveRuleNameFromDefinition(definition, ruleMap) {
  let leftRecursiveRuleName = null;

  const leftRecursiveRuleNames = [];

  leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

  const leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length;

  if (leftRecursiveRuleNamesLength === 1) {
    const firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

    leftRecursiveRuleName = firstLeftRecursiveRuleName; ///
  }

  return leftRecursiveRuleName;
}

export function leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames) {
  const terminate = retrieveSimpleParts(part, (simplePart) => {
    let terminate = false;

    const simplePartTerminalPart = simplePart.isTerminalPart();

    if (simplePartTerminalPart) {
      terminate = true;

      const simplePartConsuming = simplePart.isConsuming(ruleMap);

      if (!simplePartConsuming) {
        terminate = false;
      }
    } else {
      const ruleNamePart = simplePart,  ///
            ruleName = ruleNamePart.getRuleName(),
            rule = ruleMap[ruleName] || null;

      if (rule == null) {
        throw new Error(`The  '${ruleName}' rule is missing.`);
      }

      const leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

      if (!leftRecursiveRuleNamesIncludesRuleName) {
        const leftRecursiveRuleName = ruleName; ///

        leftRecursiveRuleNames.push(leftRecursiveRuleName);
      }

      terminate = true;

      const ruleConsuming = rule.isConsuming(ruleMap);

      if (!ruleConsuming) {
        terminate = false;
      }
    }

    return terminate;
  });

  return terminate;
}

export function leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames) {
  const parts = definition.getParts();

  parts.some((part) => {
    const terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

    if (terminate) {
      return true;
    }
  });
}

export function leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);
  });
}

export default {
  leftRecursiveRuleNamesFromPart,
  leftRecursiveRuleNamesFromDefinition,
  leftRecursiveRuleNamesFromRule
};

function retrieveSimpleParts(part, callback) {
  const terminate = retrieveParts(part, (part) => {
    let terminate = false;

    const partSimplePart = isPartSimplePart(part);

    if (partSimplePart) {
      const simplePart = part;  ///

      terminate = callback(simplePart);
    }

    return terminate;
  });

  return terminate;
}

function retrieveParts(part, callback) {
  let terminate;

  terminate = callback(part);

  if (!terminate) {
    const partNonTerminalPart = part.isNonTerminalPart();

    if (partNonTerminalPart) {
      const nonTerminalPart = part,
            type = nonTerminalPart.getType();

      switch (type) {
        case OptionalPartPartType: {
          const optionalPart = nonTerminalPart, ///
                part = optionalPart.getPart();

          terminate = retrieveParts(part, callback);

          terminate = false;

          break;
        }

        case ZeroOrMorePartsPartType: {
          const zeroOfMorePartsPart = nonTerminalPart, ///
                part = zeroOfMorePartsPart.getPart();

          terminate = retrieveParts(part, callback);

          terminate = false;

          break;
        }

        case OneOrMorePartsPartType: {
          const oneOrMorePartsPart = nonTerminalPart,  ///
                part = oneOrMorePartsPart.getPart();

          terminate = retrieveParts(part, callback);

          break;
        }

        case IsolatedPartPartType: {
          const isolatedPartPart = nonTerminalPart,  ///
                part = isolatedPartPart.getPart();

          terminate = retrieveParts(part, callback);

          break;
        }

        case SequenceOfPartsPartType: {
          const sequenceOfPartsPart = nonTerminalPart, ///
                parts = sequenceOfPartsPart.getParts();

          parts.some((part) => {
            terminate = retrieveParts(part, callback);

            if (terminate) {
              return true;
            }
          });

          break;
        }

        case BranchingPartsPartType: {
          const branchingPartsPart = nonTerminalPart, ///
                parts = branchingPartsPart.getParts();

          parts.some((part) => {
            terminate = retrieveParts(part, callback);

            if (terminate) {
              return true;
            }
          });

          break;
        }

        case ChoiceOfPartsPartType: {
          const choiceOfPartsPart = nonTerminalPart, ///
                parts = choiceOfPartsPart.getParts();

          terminate = true;

          parts.forEach((part) => {
            terminate = retrieveParts(part, callback) && terminate;
          });

          break;
        }
      }
    }
  }

  return terminate;
}
