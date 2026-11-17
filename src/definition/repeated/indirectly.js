"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { intermediateRuleNameFromRuleName } from "../../utilities/ruleName";
import { isDefinitionConsuming, isDefinitionRepeatable } from "../../utilities/definition";

export default class IndirectlyRepeatedDefinition extends Definition {
  static fromDefinitionRuleNamePrecedenceAndIndirectRuleName(definition, ruleName, precedence, indirectRuleName, context) {
    const intermediateRuleName = intermediateRuleNameFromRuleName(ruleName),
          intermediateRuleNamePart = ruleNamePartFromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNamePart
          ],
          indirectlyRepeatedDefinition = new IndirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(indirectlyRepeatedDefinition, context);

    return indirectlyRepeatedDefinition;
  }
}

export function indirectlyRepeatedDefinitionsFromDefinitionsRuleNamePrecedenceAndIndirectRuleName(definitions, ruleName, precedence, indirectRuleName, context) {
  const indirectlyRepeatedDefinitions = definitions.reduce((indirectlyRepeatedDefinitions, definition) => {
    const defintionRepeatable = isDefinitionRepeatable(definition, ruleName, context);

    if (defintionRepeatable) {
      const indirectlyRepeatedDefinition = IndirectlyRepeatedDefinition.fromDefinitionRuleNamePrecedenceAndIndirectRuleName(definition, ruleName, precedence, indirectRuleName, context);

      indirectlyRepeatedDefinitions.push(indirectlyRepeatedDefinition);
    }

    return indirectlyRepeatedDefinitions;
  }, []);

  return indirectlyRepeatedDefinitions;
}
