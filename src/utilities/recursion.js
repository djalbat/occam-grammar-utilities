"use strict";

import { retrieveSimpleParts } from "../utilities/parts";

export function recursiveRuleNamesFromPart(part, ruleMap, recursiveRuleNames = []) {
  retrieveSimpleParts(part, (simplePart) => {
    let terminate = false;

    const simplePartTerminalPart = simplePart.isTerminalPart();

    if (simplePartTerminalPart) {
      ///
    } else {
      const ruleNamePart = simplePart,  ///
            ruleName = ruleNamePart.getRuleName(),
            rule = ruleMap[ruleName] || null;

      if (rule !== null) {
        const recursiveRuleNamesInclucesRuleName = recursiveRuleNames.includes(ruleName);

        if (!recursiveRuleNamesInclucesRuleName) {
          const recursiveRuleName = ruleName; ///

          recursiveRuleNames.push(recursiveRuleName);
        }
      }
    }

    return terminate;
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
