"use strict";

import { retrieveSimpleParts } from "../utilities/parts";

export function isPartProducing(part, ruleMap, visitedRules = []) {
  let partProducing = false;

  const terminate = retrieveSimpleParts(part, (simplePart, nullified) => {
    let terminate = false;

    if (!nullified) {
      const simplePartTerminalPart = simplePart.isTerminalPart();

      if (simplePartTerminalPart) {
        terminate = true;
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
                  ruleProducing = isRuleProducing(rule, ruleMap, [
                    ...visitedRules,
                    visitedRule
                  ]);

            if (ruleProducing) {
              terminate = true;
            }
          }
        }
      }
    }

    return terminate;
  });

  if (terminate) {
    partProducing = true;
  }

  return partProducing;
}

export function isDefinitionProducing(definition, ruleMap, visitedRules = []) {
  const parts = definition.getParts(),
        definitionProducing = parts.some((part) => {
          const partProducing = isPartProducing(part, ruleMap, visitedRules);

          if (partProducing) {
            return true;
          }
        });

  return definitionProducing;
}

export function isRuleProducing(rule, ruleMap, visitedRules = []) {
  const definitions = rule.getDefinitions(),
        ruleProducing = each(definitions, (definition) => {
          const definitionProducing = isDefinitionProducing(definition, ruleMap, visitedRules);

          if (definitionProducing) {
            return true;
          }
        });

  return ruleProducing;
}

export default {
  isPartProducing,
  isDefinitionProducing,
  isRuleProducing
};

function each(array, callback) {
  let success = false;

  const arrayLength = array.length;

  if (arrayLength > 0) {
    success = array.every(callback);
  }

  return success
}