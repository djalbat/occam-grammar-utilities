"use strict";

import { arrayUtilities } from "necessary";

import { retrieveSimpleParts } from "../utilities/parts";

const { forwardsSome } = arrayUtilities;

export function leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames) {
  const backwards = false,
        terminate = retrieveSimpleParts(part, backwards, (simplePart) => {
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
              throw new Error(`The '${ruleName}' rule is missing.`);
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

export function leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames = []) {
  const parts = definition.getParts();

  forwardsSome(parts, (part) => {
    const terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

    if (terminate) {
      return true;
    }
  });

  return leftRecursiveRuleNames;
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
