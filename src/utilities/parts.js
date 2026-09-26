"use strict";

import { partTypes } from "occam-parsers";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities,
      { RuleNamePartType,
        IsolatedPartPartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        CommittedPartPartType,
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

export function leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames) {
  const terminate = retrieveSimpleParts(part, (simplePart, nullified) => {
    let terminate = false;

    const simplePartTerminalPart = simplePart.isTerminalPart();

    if (simplePartTerminalPart) {
      ///
    } else {
      const ruleNamePart = simplePart,  ///
            ruleName = ruleNamePart.getRuleName(),
            leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

      if (!leftRecursiveRuleNamesIncludesRuleName) {
        const leftRecursiveRuleName = ruleName; ///

        leftRecursiveRuleNames.push(leftRecursiveRuleName);
      }
    }

    if (!nullified) {
      terminate = true;
    }

    return terminate;
  });

  return terminate;
}

export function leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames) {
  const parts = definition.getParts(),
        terminate = parts.some((part) => {
          const terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

          if (terminate) {
            return true;
          }
        });

  return terminate;
}

export function leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames) {
  let terminate = true;

  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    terminate = leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames) && terminate;
  });

  return terminate;
}

export function isPartConsuming(part, ruleMap, visitedRules = []) {
  let partConsuming = false;

  const terminate = retrieveSimpleParts(part, (simplePart, nullified) => {
    let terminate = false;

    if (!nullified) {
      const simplePartTerminalPart = simplePart.isTerminalPart();

      if (simplePartTerminalPart) {
        const terminalPart = simplePart,  ///
              terminalPartEpsilonPart = terminalPart.isEpsilonPart(),
              terminalPartNonWhitespacePart = terminalPart.isNoWhitespacePart();

        if (!terminalPartEpsilonPart && !terminalPartNonWhitespacePart) {
          terminate = true;
        }
      } else {
        const ruleNamePart = simplePart,  ///
              ruleName = ruleNamePart.getRuleName(),
              rule = ruleMap[ruleName] || null;

        if (rule !== null) {
          const visitedRulesIncludesRule = visitedRules.includes(rule);

          if (!visitedRulesIncludesRule) {
            const visitedRule = rule, ///
                  ruleConsuming = isRuleConsuming(rule, ruleMap, [
                    ...visitedRules,
                    visitedRule
                  ]);

            terminate = ruleConsuming;  ///
          }
        }
      }
    }

    return terminate;
  });

  if (terminate) {
    partConsuming = true;
  }

  return partConsuming;
}

export function isDefinitionConsuming(definition, ruleMap, visitedRules = []) {
  const parts = definition.getParts(),
        definitionConsuming = parts.some((part) => {
          const partConsuming = isPartConsuming(part, ruleMap, visitedRules);

          if (partConsuming) {
            return true;
          }
        });

  return definitionConsuming;
}

export function isRuleConsuming(rule, ruleMap, visitedRules = []) {
  const definitions = rule.getDefinitions(),
        ruleConsuming = definitions.every((definition) => {
          const definitionConsuming = isDefinitionConsuming(definition, ruleMap, visitedRules);

          if (definitionConsuming) {
            return true;
          }
        });

  return ruleConsuming;
}

export function recursiveRuleNamesFromPart(part, recursiveRuleNames = []) {
  retrieveSimpleParts(part, (simplePart) => {
    let terminate = false;

    const simplePartTerminalPart = simplePart.isTerminalPart();

    if (simplePartTerminalPart) {
      ///
    } else {
      const ruleNamePart = simplePart,  ///
            ruleName = ruleNamePart.getRuleName(),
            recursiveRuleNamesInclucesRuleName = recursiveRuleNames.includes(ruleName);

      if (!recursiveRuleNamesInclucesRuleName) {
        const recursiveRuleName = ruleName; ///

        recursiveRuleNames.push(recursiveRuleName);
      }
    }

    return terminate;
  });

  return recursiveRuleNames;
}

export function recursiveRuleNamesFromDefinition(definition, recursiveRuleNames = []) {
  const parts = definition.getParts();

  parts.forEach((part) => {
    recursiveRuleNamesFromPart(part, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

export function recursiveRuleNamesFromRule(rule, recursiveRuleNames = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    recursiveRuleNamesFromDefinition(definition, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

function retrieveSimpleParts(part, callback) {
  const terminate = retrieveParts(part, (part, nullified) => {
    let terminate = false;

    const partSimplePart = isPartSimplePart(part);

    if (partSimplePart) {
      const simplePart = part;  ///

      terminate = callback(simplePart, nullified);
    }

    return terminate;
  });

  return terminate;
}

function retrieveParts(part, nullified, callback) {
  if (callback === undefined) {
    callback = nullified; ///

    nullified = false;
  }

  let terminate;

  terminate = callback(part, nullified);

  if (!terminate) {
    const partNonTerminalPart = part.isNonTerminalPart();

    if (partNonTerminalPart) {
      const nonTerminalPart = part,
            type = nonTerminalPart.getType();

      switch (type) {
        case OptionalPartPartType: {
          const optionalPart = nonTerminalPart, ///
                part = optionalPart.getPart();

          nullified = true;

          terminate = retrieveParts(part, nullified, callback);

          break;
        }

        case ZeroOrMorePartsPartType: {
          const zeroOfMorePartsPart = nonTerminalPart, ///
                part = zeroOfMorePartsPart.getPart();

          nullified = true;

          terminate = retrieveParts(part, nullified, callback);

          break;
        }

        case OneOrMorePartsPartType: {
          const oneOrMorePartsPart = nonTerminalPart,  ///
                part = oneOrMorePartsPart.getPart();

          terminate = retrieveParts(part, nullified, callback);

          break;
        }

        case IsolatedPartPartType: {
          const isolatedPartPart = nonTerminalPart,  ///
                part = isolatedPartPart.getPart();

          terminate = retrieveParts(part, nullified, callback);

          break;
        }

        case CommittedPartPartType: {
          const committedPartPart = nonTerminalPart,  ///
                part = committedPartPart.getPart();

          terminate = retrieveParts(part, nullified, callback);

          break;
        }

        case SequenceOfPartsPartType: {
          const sequenceOfPartsPart = nonTerminalPart, ///
                parts = sequenceOfPartsPart.getParts();

          parts.some((part) => {
            terminate = retrieveParts(part, nullified, callback);

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
            terminate = retrieveParts(part, nullified, callback) && terminate;
          });

          break;
        }
      }
    }
  }

  return terminate;
}

function isPartSimplePart(part) {
  let partSimplePart = false;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    partSimplePart = true;
  } else {
    const nonTerminalPart = part, ///
         type = nonTerminalPart.getType();

    if (type === RuleNamePartType) {
      partSimplePart = true;
    }
  }

  return partSimplePart;
}

export default {
  arePartsEqual,
  leftRecursiveRuleNamesFromPart,
  leftRecursiveRuleNamesFromDefinition,
  leftRecursiveRuleNamesFromRule,
  isPartConsuming,
  isDefinitionConsuming,
  isRuleConsuming,
  recursiveRuleNamesFromPart,
  recursiveRuleNamesFromDefinition,
  recursiveRuleNamesFromRule
};
