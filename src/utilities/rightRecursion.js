"use strict";

import { arrayUtilities } from "necessary";

import { retrieveSimpleParts } from "../utilities/parts";

const { backwardsSome } = arrayUtilities;

export function rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames) {
  const backwards = true,
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

            const rightRecursiveRuleNamesIncludesRuleName = rightRecursiveRuleNames.includes(ruleName);

            if (!rightRecursiveRuleNamesIncludesRuleName) {
              const rightRecursiveRuleName = ruleName; ///

              rightRecursiveRuleNames.push(rightRecursiveRuleName);
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

export function rightRecursiveRuleNamesFromDefinition(definition, ruleMap, rightRecursiveRuleNames = []) {
  const parts = definition.getParts();

  backwardsSome(parts, (part) => {
    const terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

    if (terminate) {
      return true;
    }
  });

  return rightRecursiveRuleNames;
}

export function rightRecursiveRuleNamesFromRule(rule, ruleMap, rightRecursiveRuleNames) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    rightRecursiveRuleNamesFromDefinition(definition, ruleMap, rightRecursiveRuleNames);
  });
}

export default {
  rightRecursiveRuleNamesFromPart,
  rightRecursiveRuleNamesFromDefinition,
  rightRecursiveRuleNamesFromRule
};
