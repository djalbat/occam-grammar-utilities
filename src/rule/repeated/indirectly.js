"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Parts, Definition } from "occam-parsers";

import RepeatedNode from "../../node/repeated";
import IndirectlyLeftRecursiveDefinition from "../../definition/recursive/left/indirectly";

import { matchParts } from "../../utilities/part";
import { cloneParts } from "../../utilities/parts";
import { indirectlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

const { EpsilonPart } = Parts,
      { first, tail, find } = arrayUtilities;

export default class IndirectlyRepeatedRule extends Rule {
  static fromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName) {
    let definitions = rule.getDefinitions();

    const indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName),
          firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions),
          indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, ///
          parts = indirectlyLeftRecursiveDefinition.getParts(),
          firstPart = first(parts),
          previousFirstPart = firstPart;  ///

    definitions = indirectlyLeftRecursiveDefinitions.reduce((definitions, indirectlyLeftRecursiveDefinition) => {
      let parts = indirectlyLeftRecursiveDefinition.getParts();

      const firstPart = first(parts),
            matches = matchParts(firstPart, previousFirstPart);

      if (!matches) {
        const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
              definition = indirectlyLeftRecursiveDefinition, ///
              definitionString = definition.asString();

        throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule does not match one of its sibling indirectly left recursive definitions and therefore the rule cannot be rewritten.`);
      }

      const partsLength = parts.length;

      if (partsLength > 1) {
        const partsTail = tail(parts);

        parts = partsTail;  ///

        parts = cloneParts(parts);  ///

        const definition = new Definition(parts);

        definitions.push(definition);
      }

      return definitions;
    }, []);

    const definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      const epsilonPart = new EpsilonPart(),
            parts = [
              epsilonPart
            ],
            definition = new Definition(parts);

      definitions.push(definition);
    }

    const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleName(ruleName),
          name = indirectlyRepeatedRuleName,  ///
          ambiguous = false,
          NonTerminalNode = RepeatedNode,  ///
          indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return indirectlyRepeatedRule;
  }
}

function findIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName) {
  const indirectlyLeftRecursiveDefinitions = find(definitions, (definition) => {
    const definitionIndirectlyLeftRecursiveDefinition = (definition instanceof IndirectlyLeftRecursiveDefinition);

    if (definitionIndirectlyLeftRecursiveDefinition) {
      const indirectlyLeftRecursiveDefinition = definition,  ///
            leftRecursiveRuleNames = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleNames(),
            firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
            ruleName = firstLeftRecursiveRuleName; ///

      if (ruleName === leftRecursiveRuleName) {
        return true;
      }
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}
