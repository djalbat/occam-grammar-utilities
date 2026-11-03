"use strict";

import { isDefinitionIndirectlyReducible, isDefinitionIndirectlyRepeatable } from "../utilities/definition";

export function isRuleIndirectlyReducible(rule, context) {
  const definitions = rule.getDefinitions(),
        ruleIndirectlyReducible = definitions.some((definition) => {
          const definitionIndirectlyReducible = isDefinitionIndirectlyReducible(definition, context);

          if (definitionIndirectlyReducible) {
            return true;
          }
        });

  return ruleIndirectlyReducible;
}

export function isRuleIndirectlyRepeatable(rule, context) {
  const definitions = rule.getDefinitions(),
        ruleIndirectlyRepeatable = definitions.some((definition) => {
          const definitionIndirectlyRepeatable = isDefinitionIndirectlyRepeatable(definition, context);

          if (definitionIndirectlyRepeatable) {
            return true;
          }
        });

  return ruleIndirectlyRepeatable;
}
