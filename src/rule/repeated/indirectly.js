"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Parts, Definition } from "occam-parsers";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";
import IndirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/indirectly";

import { matchParts } from "../../utilities/part";
import { cloneParts } from "../../utilities/parts";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";

const { EpsilonPart } = Parts,
      { first, tail, find } = arrayUtilities;

export default class IndirectlyRepeatedRule extends Rule {
  static fromRuleLeftRecursiveRuleNameAndLeftRecursiveDefinitions(rule, leftRecursiveRuleName, leftRecursiveDefinitions) {
    const indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
          firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions),
          indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, ///
          indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(),
          firstIndirectlyLeftRecursiveDefinitionPart = first(indirectlyLeftRecursiveDefinitionParts),
          previousFirstPart = firstIndirectlyLeftRecursiveDefinitionPart,  ///
          definitions = indirectlyLeftRecursiveDefinitions.reduce((definitions, indirectlyLeftRecursiveDefinition) => {
            const indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts();

            let parts = indirectlyLeftRecursiveDefinitionParts; ///

            const firstPart = first(parts),
                  matches = matchParts(firstPart, previousFirstPart);

            if (!matches) {
              const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
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
          }, []),
          definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      const epsilonPart = new EpsilonPart(),
            parts = [
              epsilonPart
            ],
            definition = new Definition(parts);

      definitions.push(definition);
    }

    const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          name = indirectlyRepeatedRuleName,  ///
          ambiguous = false,
          NonTerminalNode = IndirectlyRepeatedNode,  ///
          indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return indirectlyRepeatedRule;
  }
}

function findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
  const indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();

    if (leftRecursiveDefinitionRule === rule) {
      const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

      if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
        return true;
      }
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}
