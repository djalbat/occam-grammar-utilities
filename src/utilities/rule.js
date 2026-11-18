"use strict";

import { isDefinitionSingular, isDefinitionReducible, isDefinitionRepeatable } from "../utilities/definition";

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

export function isRuleReducible(rule, context) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions(),
        ruleReducible = definitions.some((definition) => {
          const definitionReducible = isDefinitionReducible(definition, ruleName, context);

          if (definitionReducible) {
            return true;
          }
        });

  return ruleReducible;
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
