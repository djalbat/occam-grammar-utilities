"use strict";

import { retrieveSimpleParts } from "../utilities/parts";

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

          if (visitedRulesIncludesRule) {
            terminate = true;
          } else {
            const visitedRule = rule, ///
                  ruleConsuming = isRuleConsuming(rule, ruleMap, [
                    ...visitedRules,
                    visitedRule
                  ]);

            if (ruleConsuming) {
              terminate = true;
            }
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
        ruleConsuming = each(definitions, (definition) => {
          const definitionConsuming = isDefinitionConsuming(definition, ruleMap, visitedRules);

          if (definitionConsuming) {
            return true;
          }
        });

  return ruleConsuming;
}

export default {
  isPartConsuming,
  isDefinitionConsuming,
  isRuleConsuming
};

function each(array, callback) {
  let success = false;

  const arrayLength = array.length;

  if (arrayLength > 0) {
    success = array.every(callback);
  }

  return success
}
