"use strict";

import { isDefinitionSingular, isDefinitionRepeatable } from "../utilities/definition";

export function isRuleSingular(rule, context) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions(),
        ruleSingular = definitions.some((definition) => {
          const definitionSingular = isDefinitionSingular(definition, ruleName, context);

          if (definitionSingular) {
            return true;
          }
        });

  return ruleSingular;
}

export function isRuleRepeatable(rule, context) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions(),
        ruleRepeatable = definitions.some((definition) => {
          const definitionRepeatable = isDefinitionRepeatable(definition, ruleName, context);

          if (definitionRepeatable) {
            return true;
          }
        });

  return ruleRepeatable;
}
