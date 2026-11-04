"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { isDefinitionRepeatable, ruleNameFromRepeatableDefinition } from "../../utilities/definition";
import { intermediateRuleNameFromRuleNameAndIndirectRuleName, intermediateRuleNameFromRuleNameIndirectRuleNameAndIndex } from "../../utilities/ruleName";

export default class IntermediateRepeatedDefinition extends Definition {
  static fromDefinitionAndIndex(definition, index, context) {
    const ruleName = context.getRuleName(),
          indirectRuleName = indirectRuleNameFromDefinition(definition),
          intermediateRuleName = (index > 0) ?
                                   intermediateRuleNameFromRuleNameIndirectRuleNameAndIndex(ruleName, indirectRuleName, index) :
                                     intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          intermediateRuleNameRuleNamePart = ruleNamePartFromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNameRuleNamePart
          ],
          precedence = definition.getPrecedence(),
          intermediateRepeatedDefinition = new IntermediateRepeatedDefinition(parts, precedence);

    return intermediateRepeatedDefinition;
  }
}

function indirectRuleNameFromDefinition(definition) {
  const repeatableDefinition = definition,  ///
        ruleName = ruleNameFromRepeatableDefinition(repeatableDefinition),
        indirectRuleName = ruleName;  ///

  return indirectRuleName;
}

export function intermediateRepeatedDefinitionsFromDefinitions(definitions, context) {
  let index = 0;

  const indirectRuleName = context.getIndirectRuleName(),
        intermediateRepeatedDefinitions = definitions.reduce((intermediateRepeatedDefinitions, definition) => {
          const definitionRepeatable = isDefinitionRepeatable(definition, indirectRuleName, context);

          if (definitionRepeatable) {
            const intermediateRepeatedDefinition = IntermediateRepeatedDefinition.fromDefinitionAndIndex(definition, index, context);

            intermediateRepeatedDefinitions.push(intermediateRepeatedDefinition);

            index++;
          }

          return intermediateRepeatedDefinitions;
        }, []);

  return intermediateRepeatedDefinitions;
}
