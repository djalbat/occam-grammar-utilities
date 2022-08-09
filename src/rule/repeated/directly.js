"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import DirectlyRepeatedNode from "../../node/repeated/directly";
import DirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/directly";

import { matchParts } from "../../utilities/part";
import { cloneParts } from "../../utilities/parts";
import { isDefinitionUnary } from "../../utilities/definition";
import { directlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

const { first, find, tail } = arrayUtilities;

export default class DirectlyRepeatedRule extends Rule {
  static fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
    const ruleName = rule.getName(),
          directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);

    let definitions = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
      const definition = directlyLeftRecursiveDefinition.getDefinition();

      return definition;
    });

    const firstDefinition = first(definitions),
          definition = firstDefinition, ///
          parts = definition.getParts(),
          firstPart = first(parts),
          previousFirstPart = firstPart;  ///

    definitions = definitions.map((definition) => {
      let parts = definition.getParts();

      const firstPart = first(parts),
            partsTail = tail(parts);

      const matches = matchParts(firstPart, previousFirstPart),
            definitionUnary = isDefinitionUnary(definition);

      if (!matches) {
        const definitionString = definition.asString();

        throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule does not match one of its sibling directly left recursive definitions and therefore the rule cannot be rewritten.`);
      }

      if (definitionUnary) {
        const definitionString = definition.asString();

        throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
      }

      parts = partsTail;  ///

      parts = cloneParts(parts);  ///

      definition = new Definition(parts);

      return definition;
    });

    const directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          name = directlyRepeatedRuleName, ///
          ambiguous = false,
          NonTerminalNode = DirectlyRepeatedNode,  ///
          directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return directlyRepeatedRule;
  }
}

function findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();

    if (leftRecursiveDefinitionRule === rule) {
      const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

      if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
        return true;
      }
    }
  });

  return directlyLeftRecursiveDefinitions;
}
