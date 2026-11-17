"use strict";

import { Definition } from "occam-parsers";

import { repeatedRuleNameFromRuleName, repeatedRuleNameFromIndirectRuleName } from "../utilities/ruleName";
import { epsilonPartFromNothing, ruleNamePartFromRuleName, choiceOfPartsPartFromParts } from "../utilities/part";
import { isDefinitionConsuming, isDefinitionRepeatable, isDefinitionRightRecursive, tailPartsfromDefinition } from "../utilities/definition";

export default class IntermediateDefinition extends Definition {
  static fromRightRecursiveDefinition(rightRecursiveDefinition, context) {
    const definition = rightRecursiveDefinition,  ///
          tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          precedence = definition.getPrecedence(),
          intermediateDefinition = new IntermediateDefinition(parts, precedence);

    isDefinitionConsuming(intermediateDefinition, context);

    return intermediateDefinition;
  }

  static fromDefinitionAndRuleName(definition, ruleName, context) {
    const epsilonPart = epsilonPartFromNothing(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName);

    let parts;

    parts = [
      repeatedRuleNamePart,
      epsilonPart
    ];

    const choiceOfPartsPart = choiceOfPartsPartFromParts(parts),
          tailParts = tailPartsfromDefinition(definition, context);

    parts = [
      ...tailParts,
      choiceOfPartsPart,
    ];

    const precedence = definition.getPrecedence(),
          intermediateDefinition = new IntermediateDefinition(parts, precedence);

    isDefinitionConsuming(intermediateDefinition, context);

    return intermediateDefinition;
  }

  static fromDefinitionAndIndirectRuleName(definition, indirectRuleName, context) {
    const epsilonPart = epsilonPartFromNothing(),
          repeatedRuleName = repeatedRuleNameFromIndirectRuleName(indirectRuleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName);

    let parts;

    parts = [
      repeatedRuleNamePart,
      epsilonPart
    ];


    const choiceOfPartsPart = choiceOfPartsPartFromParts(parts),
          tailParts = tailPartsfromDefinition(definition, context);

    parts = [
      ...tailParts,
      choiceOfPartsPart,
    ];

    const precedence = definition.getPrecedence(),
          intermediateDefinition = new IntermediateDefinition(parts, precedence);

    isDefinitionConsuming(intermediateDefinition, context);

    return intermediateDefinition;
  }
}

export function intermediateDefinitionsFromDefinitionsRuleNameAndIndirectRuleName(definitions, ruleName, indirectRuleName, context) {
  const intermediateDefinitions = definitions.reduce((intermediateDefinitions, definition) => {
    const definitioRepeatable = isDefinitionRepeatable(definition, ruleName, context);

    if (definitioRepeatable) {
      const definitionRightRecursive = isDefinitionRightRecursive(definition, ruleName, context);

      let intermediateDefinition;

      if (definitionRightRecursive) {
        const rightRecursiveDefinition = definition;  ///

        intermediateDefinition = IntermediateDefinition.fromRightRecursiveDefinition(rightRecursiveDefinition, context);
      } else {
        intermediateDefinition = IntermediateDefinition.fromDefinitionAndIndirectRuleName(definition, indirectRuleName, context);
      }

      intermediateDefinitions.push(intermediateDefinition);
    }

    return intermediateDefinitions;
  }, []);

  return intermediateDefinitions;
}

export function intermediateDefinitionsFromDefinitionsIndirectRuleNameAndRuleName(definitions, indirectRuleName, ruleName, context) {
  const intermediateDefinitions = definitions.reduce((intermediateDefinitions, definition) => {
    const definitioRepeatable = isDefinitionRepeatable(definition, indirectRuleName, context);

    if (definitioRepeatable) {
      const definitionRightRecursive = isDefinitionRightRecursive(definition, indirectRuleName, context);

      let intermediateDefinition;

      if (definitionRightRecursive) {
        const rightRecursiveDefinition = definition;  ///

        intermediateDefinition = IntermediateDefinition.fromRightRecursiveDefinition(rightRecursiveDefinition, context);
      } else {
        intermediateDefinition = IntermediateDefinition.fromDefinitionAndRuleName(definition, ruleName, context);
      }

      intermediateDefinitions.push(intermediateDefinition);
    }

    return intermediateDefinitions;
  }, []);

  return intermediateDefinitions;
}
