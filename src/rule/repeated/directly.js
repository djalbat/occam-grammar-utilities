"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RecursiveDefinition from "../../definition/recursive";
import DirectlyRepeatedNode from "../../node/repeated/directly";
import DirectlyLeftRecursiveDefinition from "../../definition/recursive/left/directly";

import { cloneParts } from "../../utilities/parts";
import { matchParts } from "../../utilities/part";
import { directlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

const { first, find, tail } = arrayUtilities;

export default class DirectlyRepeatedRule extends Rule {
  static fromRule(rule) {
    let definitions = rule.getDefinitions();

    const ruleName = rule.getName(),
          directlyLeftRecursiveDefinitions = find(definitions, (definition) => { ///
            const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

            if (definitionDirectlyLeftRecursiveDefinition) {
              return true;
            }
          }),
          firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions),
          directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition, ///
          parts = directlyLeftRecursiveDefinition.getParts(),
          firstPart = first(parts),
          previousFirstPart = firstPart;  ///

    definitions = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
      let parts = directlyLeftRecursiveDefinition.getParts();

      const firstPart = first(parts),
            matches = matchParts(firstPart, previousFirstPart);

      if (!matches) {
        const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
              definition = directlyLeftRecursiveDefinition, ///
              definitionString = definition.asString();

        throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule does not match one of its sibling directly left recursive definitions and therefore the rule cannot be rewritten.`);
      }

      const partsLength = parts.length;

      if (partsLength === 1) {
        const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
              definition = directlyLeftRecursiveDefinition, ///
              definitionString = definition.asString();

        throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
      }

      const partsTail = tail(parts);

      parts = partsTail;  ///

      parts = cloneParts(parts);  ///

      const recursiveDefinition = RecursiveDefinition.fromRuleNameAndParts(ruleName, parts),
            definition = (recursiveDefinition !== null) ?
                            recursiveDefinition : ///
                              new Definition(parts);

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
