"use strict";

import { Rule, Parts, Definition } from "occam-parsers";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { matchParts } from "../../utilities/part";
import { cloneParts } from "../../utilities/parts";
import { first, tail } from "../../utilities/array";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";

const { EpsilonPart } = Parts;

export default class IndirectlyRepeatedRule extends Rule {
  static fromRuleNameLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(ruleName, leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions) {
    let parts,
        definition,
        definitions = indirectlyLeftRecursiveDefinitions; ///

    const firstDefinition = first(definitions);

    definition = firstDefinition; ///

    parts = definition.getParts();

    const firstPart = first(parts),
          previousFirstPart = firstPart;  ///

    definitions = definitions.reduce((definitions, definition) => {
      let parts  = definition.getParts();

      const firstPart = first(parts),
        matches = matchParts(firstPart, previousFirstPart);

      if (!matches) {
        const definitionString = definition.asString();

        throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule does not match one of its sibling indirectly left recursive definitions and therefore the rule cannot be rewritten.`);
      }

      const partsLength = parts.length;

      if (partsLength > 1) {
        const partsTail = tail(parts);

        parts = partsTail;  ///

        parts = cloneParts(parts);  ///

        definition = new Definition(parts);

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

    const indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          name = indirectlyRepeatedRuleName,  ///
          ambiguous = false,
          NonTerminalNode = IndirectlyRepeatedNode,  ///
          indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return indirectlyRepeatedRule;
  }

  static fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions) {
    const firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions),
          indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition; ///

    let definitions = indirectlyLeftRecursiveDefinitions.reduce((definitions, indirectlyLeftRecursiveDefinition) => {
          const definition = indirectlyLeftRecursiveDefinition.getDefinition(),
                definitionsIncludesDefinition = definitions.includes(definition);

          if (!definitionsIncludesDefinition) {
            definitions.push(definition);
          }

          return definitions;
        }, []),
        definition,
        parts;

    const firstDefinition = first(definitions);

    definition = firstDefinition; ///

    parts = definition.getParts();

    const firstPart = first(parts),
          previousFirstPart = firstPart;  ///

    definitions = definitions.reduce((definitions, definition) => {
      let parts  = definition.getParts();

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

        definition = new Definition(parts);

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
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          name = indirectlyRepeatedRuleName,  ///
          ambiguous = false,
          NonTerminalNode = IndirectlyRepeatedNode,  ///
          indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return indirectlyRepeatedRule;
  }
}
