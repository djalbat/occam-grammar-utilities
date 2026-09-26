"use strict";

import { retrieveSimpleParts } from "../utilities/parts";
import { isPartConsuming, isRuleConsuming } from "../utilities/consumption";

export function leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames) {
  const terminate = retrieveSimpleParts(part, (simplePart, nullified) => {
    let terminate = false;

    const simplePartTerminalPart = simplePart.isTerminalPart();

    if (simplePartTerminalPart) {
      if (!nullified) {
        terminate = true;

        const simplePartConsuming = isPartConsuming(simplePart, ruleMap);

        if (!simplePartConsuming) {
          terminate = false;
        }
      }
    } else {
      const ruleNamePart = simplePart,  ///
            ruleName = ruleNamePart.getRuleName(),
            rule = ruleMap[ruleName] || null;

      if (rule !== null) {
        const leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

        if (!leftRecursiveRuleNamesIncludesRuleName) {
          const leftRecursiveRuleName = ruleName; ///

          leftRecursiveRuleNames.push(leftRecursiveRuleName);
        }

        if (!nullified) {
          terminate = true;

          const ruleConsuming = isRuleConsuming(rule, ruleMap);

          if (!ruleConsuming) {
            terminate = false;
          }
        }
      }
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

export default {
  leftRecursiveRuleNamesFromPart,
  leftRecursiveRuleNamesFromDefinition,
  leftRecursiveRuleNamesFromRule
};
