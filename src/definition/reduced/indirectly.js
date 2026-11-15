"use strict";

import { Definition } from "occam-parsers";

import { indirectlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";
import { partsfromDefinition, isDefinitionSingular, isDefinitionRepeatable } from "../../utilities/definition";
import {ruleNamePartFromRuleName} from "../../utilities/part";

export default class IndirectlyReducedDefinition extends Definition {
  static fromDefinition(definition, context) {
    const parts = partsfromDefinition(definition, context),
          precedence = definition.getPrecedence(),
          indirectlyReducedDefinition = new IndirectlyReducedDefinition(parts, precedence);

    return indirectlyReducedDefinition;
  }

  static fromSingularDefinition(singularDefinition, context) {
    const ruleName = context.getRuleName(),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName),
          indirectlyReducedRuleNamePart = ruleNamePartFromRuleName(indirectlyReducedRuleName),
          parts = [
            indirectlyReducedRuleNamePart
          ],
          precedence = singularDefinition.getPrecedence(),
          indirectlyReducedDefinition = new IndirectlyReducedDefinition(parts, precedence);

    return indirectlyReducedDefinition;
  }
}

export function indirectlyReducedDefinitionsFromDefinitions(definitions, context) {
  const indirectRuleName = context.getIndirectRuleName(),
        indirectlyReducedDefinitions = definitions.map((definition) => {
          let indirectlyReducedDefinition;

          const ruleName = indirectRuleName,  ///
                definitionSinglular = isDefinitionSingular(definition, ruleName, context),
                definitionRepeatable = isDefinitionRepeatable(definition, ruleName, context);

          if (false) {
            ///
          } else if (definitionSinglular) {
            const singularDefinition = definition;  ///

            indirectlyReducedDefinition = IndirectlyReducedDefinition.fromSingularDefinition(singularDefinition, context);
          } else if (definitionRepeatable) {
            debugger
          } else {
            indirectlyReducedDefinition = IndirectlyReducedDefinition.fromDefinition(definition, context);
          }

          return indirectlyReducedDefinition;
        });

  return indirectlyReducedDefinitions;
}
