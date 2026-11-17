"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { isDefinitionConsuming, isDefinitionRepeatable } from "../../utilities/definition";
import { intermediateRuleNameFromRuleName, intermediateRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyRepeatedDefinition extends Definition {
  static fromRepeatableDefinitionRuleNameIndirectRuleNameAndPrecedence(repeatableDefinition, ruleName, indirectRuleName, precedence, context) {
    const intermediateRuleName = intermediateRuleNameFromRuleName(ruleName),
          intermediateRuleNamePart = ruleNamePartFromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNamePart
          ],
          indirectlyRepeatedDefinition = new IndirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(indirectlyRepeatedDefinition, context);

    return indirectlyRepeatedDefinition;
  }

  static fromRepeatableDefinitionIndirectRuleNameRuleNameAndPrecedence(repeatableDefinition, indirectRuleName, ruleName, precedence, context) {
    const intermediateRuleName = intermediateRuleNameFromIndirectRuleName(indirectRuleName),
          intermediateRuleNamePart = ruleNamePartFromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNamePart
          ],
          indirectlyRepeatedDefinition = new IndirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(indirectlyRepeatedDefinition, context);

    return indirectlyRepeatedDefinition;
  }
}

export function indirectlyRepeatedDefinitionsFromDefinitionsRuleNameIndirectRuleNameAndPrecedence(definitions, ruleName, indirectRuleName, precedence, context) {
  const indirectlyRepeatedDefinitions = definitions.reduce((indirectlyRepeatedDefinitions, definition) => {
    const defintionRepeatable = isDefinitionRepeatable(definition, ruleName, context);

    if (defintionRepeatable) {
      const repeatableDefinition = definition,  ///
            indirectlyRepeatedDefinition = IndirectlyRepeatedDefinition.fromRepeatableDefinitionRuleNameIndirectRuleNameAndPrecedence(repeatableDefinition, ruleName, indirectRuleName, precedence, context);

      indirectlyRepeatedDefinitions.push(indirectlyRepeatedDefinition);
    }

    return indirectlyRepeatedDefinitions;
  }, []);

  return indirectlyRepeatedDefinitions;
}

export function indirectlyRepeatedDefinitionsFromDefinitionsIndirectRuleNameRuleNameAndPrecedence(definitions, indirectRuleName, ruleName, precedence, context) {
  const indirectlyRepeatedDefinitions = definitions.reduce((indirectlyRepeatedDefinitions, definition) => {
    const defintionRepeatable = isDefinitionRepeatable(definition, indirectRuleName, context);

    if (defintionRepeatable) {
      const repeatableDefinition = definition,  ///
            indirectlyRepeatedDefinition = IndirectlyRepeatedDefinition.fromRepeatableDefinitionIndirectRuleNameRuleNameAndPrecedence(repeatableDefinition, indirectRuleName, ruleName, precedence, context);

      indirectlyRepeatedDefinitions.push(indirectlyRepeatedDefinition);
    }

    return indirectlyRepeatedDefinitions;
  }, []);

  return indirectlyRepeatedDefinitions;
}
