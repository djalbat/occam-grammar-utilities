"use strict";

import { Rule, Definition } from "occam-parsers";

import DirectlyRepeatedNode from "../../node/repeated/directly";

import { matchParts } from "../../utilities/part";
import { cloneParts } from "../../utilities/parts";
import { first, tail } from "../../utilities/array";
import { directlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyRepeatedRule extends Rule {
  static fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions) {
    const ruleName = rule.getName();

    let definitions = directlyLeftRecursiveDefinitions; ///

    const firstDefinition = first(definitions),
          definition = firstDefinition, ///
          parts = definition.getParts(),
          firstPart = first(parts),
          previousFirstPart = firstPart;  ///

    definitions = definitions.map((definition) => {
      let parts = definition.getParts();

      const firstPart = first(parts),
            partsTail = tail(parts),
            matches = matchParts(firstPart, previousFirstPart);

      if (!matches) {
        const definitionString = definition.asString();

        throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule does not match one of its sibling directly left recursive definitions and therefore the rule cannot be rewritten.`);
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
