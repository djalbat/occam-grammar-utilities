"use strict";

import { Rule, Definition } from "occam-parsers";

import DirectlyRepeatedNode from "../../node/repeated/directly";

import { matchParts } from "../../utilities/part";
import { cloneParts } from "../../utilities/parts";
import { first, tail } from "../../utilities/array";
import { isDefinitionUnary } from "../../utilities/definition";
import { directlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyRepeatedRule extends Rule {
  static fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions) {
    const ruleName = rule.getName();

    directlyLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions.filter((directlyLeftRecursiveDefinition) => { ///
      const directlyLeftRecursiveDefinitionRule = directlyLeftRecursiveDefinition.getRule();

      if (directlyLeftRecursiveDefinitionRule === rule) {
        return true;
      }
    });

    let definitions = directlyLeftRecursiveDefinitions.reduce((definitions, directlyLeftRecursiveDefinition) => {
      const definition = directlyLeftRecursiveDefinition.getDefinition(),
            definitionsIncludesDefinition = definitions.includes(definition);

      if (!definitionsIncludesDefinition) {
        definitions.push(definition);
      }

      return definitions;
    }, []);

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
