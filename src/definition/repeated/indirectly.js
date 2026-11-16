"use strict";

import { Definition } from "occam-parsers";

import { epsilonPartFromNothing, ruleNamePartFromRuleName, choiceOfPartsPartFromParts } from "../../utilities/part";
import { intermediateRuleNameFromRuleName, indirectlyRepeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";
import { isDefinitionConsuming, isDefinitionRepeatable, tailPartsfromDefinition, isDefinitionRightRecursive } from "../../utilities/definition";

export default class IndirectlyRepeatedDefinition extends Definition {
  static fromRightRecursiveDefinition(rightRecursiveDefinition, context) {
    const definition = rightRecursiveDefinition,  ///
          tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          precedence = definition.getPrecedence(),
          indirectlyRepeatedDefinition = new IndirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(indirectlyRepeatedDefinition, context);

    return indirectlyRepeatedDefinition;
  }

  static fromDefinitionIndirectRuleNameAndRuleName(definition, indirectRuleName, ruleName, context) {
    const epsilonPart = epsilonPartFromNothing(),
          intermediateRuleName = intermediateRuleNameFromRuleName(ruleName),
          intermediateRuleNamePart = ruleNamePartFromRuleName(intermediateRuleName),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName);

    let parts;

    parts = [
      indirectlyRepeatedRuleNamePart,
      epsilonPart
    ];

    const choiceOfPartsPart = choiceOfPartsPartFromParts(parts);

    parts = [
      intermediateRuleNamePart,
      choiceOfPartsPart
    ];

    const precedence = definition.getPrecedence(),
          indirectlyRepeatedDefinition = new IndirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(indirectlyRepeatedDefinition, context);

    return indirectlyRepeatedDefinition;
  }
}

export function indirectlyRepeatedDefinitionsFromDefinitionsIndirectRuleNameAndRuleName(definitions, indirectRuleName, ruleName, context) {
  const indirectlyRepeatedDefinitions = definitions.reduce((indirectlyRepeatedDefinitions, definition) => {
    const defintionRepeatable = isDefinitionRepeatable(definition, ruleName, context);

    if (defintionRepeatable) {
      const definitionRightRecursive = isDefinitionRightRecursive(definition, ruleName, context);

      let indirectlyRepeatedDefinition;

      if (definitionRightRecursive) {
        const rightRecursiveDefinition = definition;  ///

        indirectlyRepeatedDefinition = IndirectlyRepeatedDefinition.fromRightRecursiveDefinition(rightRecursiveDefinition, context);
      } else {
        indirectlyRepeatedDefinition = IndirectlyRepeatedDefinition.fromDefinitionIndirectRuleNameAndRuleName(definition, indirectRuleName, ruleName, context);
      }

      indirectlyRepeatedDefinitions.push(indirectlyRepeatedDefinition);
    }

    return indirectlyRepeatedDefinitions;
  }, []);

  return indirectlyRepeatedDefinitions;
}
