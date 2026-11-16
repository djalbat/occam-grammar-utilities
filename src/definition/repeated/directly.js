"use strict";

import { Definition } from "occam-parsers";

import { repeatedRuleNameFromRuleName } from "../../utilities/ruleName";
import { epsilonPartFromNothing, ruleNamePartFromRuleName, choiceOfPartsPartFromParts } from "../../utilities/part";
import { isDefinitionConsuming, tailPartsfromDefinition, isDefinitionRepeatable, isDefinitionRightRecursive } from "../../utilities/definition";

export default class DirectlyRepeatedDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName, context) {
    const tailParts = tailPartsfromDefinition(definition, context),
          epsilonPart = epsilonPartFromNothing(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName);

    let parts;

    parts = [
      repeatedRuleNamePart,
      epsilonPart
    ];

    const choiceOfPartsPart = choiceOfPartsPartFromParts(parts);

    parts = [
      ...tailParts,
      choiceOfPartsPart
    ];

    const precedence = definition.getPrecedence(),
          directlyRepeatedDefinition = new DirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(directlyRepeatedDefinition, context);

    return directlyRepeatedDefinition;
  }

  static fromRightRecursiveDefinitionAndRuleName(rightRecursiveDefinition, ruleName, context) {
    const definition = rightRecursiveDefinition,  ///
          tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          precedence = definition.getPrecedence(),
          directlyRepeatedDefinition = new DirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(directlyRepeatedDefinition, context);

    return directlyRepeatedDefinition;
  }
}

export function directlyRepeatedDefinitionsFromDefinitionsAndRuleName(definitions, ruleName, context) {
  const directlyRepeatedDefinitions = definitions.reduce((directlyRepeatedDefinitions, definition) => {
    const defintionRepeatable = isDefinitionRepeatable(definition, ruleName, context);

    if (defintionRepeatable) {
      const definitionRightRecursive = isDefinitionRightRecursive(definition, ruleName, context);

      let directlyRepeatedDefinition;

      if (definitionRightRecursive) {
        const rightRecursiveDefinition = definition;  ///

        directlyRepeatedDefinition = DirectlyRepeatedDefinition.fromRightRecursiveDefinitionAndRuleName(rightRecursiveDefinition, ruleName, context);
      } else {
        directlyRepeatedDefinition = DirectlyRepeatedDefinition.fromDefinitionAndRuleName(definition, ruleName, context);
      }

      directlyRepeatedDefinitions.push(directlyRepeatedDefinition);
    }

    return directlyRepeatedDefinitions;
  }, []);

  return directlyRepeatedDefinitions;
}
