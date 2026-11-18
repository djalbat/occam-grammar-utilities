"use strict";

import { Definition } from "occam-parsers";

import { repeatedRuleNameFromIndirectRuleName } from "../utilities/ruleName";
import { isDefinitionRepeatable, isDefinitionRightRecursive, tailPartsfromDefinition } from "../utilities/definition";
import { epsilonPartFromNothing, ruleNamePartFromRuleName, choiceOfPartsPartFromParts } from "../utilities/part";

export default class IntermediateDefinition extends Definition {
  static fromRightRecursiveDefinition(rightRecursiveDefinition, context) {
    const definition = rightRecursiveDefinition,  ///
          tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          precedence = definition.getPrecedence(),
          intermediateDefinition = new IntermediateDefinition(parts, precedence);

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
