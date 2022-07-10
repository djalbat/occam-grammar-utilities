"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RepeatedNode from "../node/repeated";

import { cloneParts } from "../utilities/parts";
import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";

const { first, tail } = arrayUtilities;

export default class RepeatedRule extends Rule {
  static fromDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
    const definitions = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
      let parts = directlyLeftRecursiveDefinition.getParts();

      const partsTail = tail(parts);

      parts = partsTail;  ///

      parts = cloneParts(parts);  ///

      const definition = new Definition(parts);

      return definition;
    });

    const firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions),
          directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition,  ///
          ruleName = directlyLeftRecursiveDefinition.getRuleName(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          name = repeatedRuleName,  ///
          ambiguous = false,
          NonTerminalNode = RepeatedNode,  ///
          repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return repeatedRule;
  }

  static fromIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions) {
    let repeatedRule = null;

    const definitions = indirectlyLeftRecursiveDefinitions.reduce((definitions, indirectlyLeftRecursiveDefinition) => {
      let parts = indirectlyLeftRecursiveDefinition.getParts();

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

    if (definitionsLength > 0) {
      const firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions),
            indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, ///
            ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
            repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
            name = repeatedRuleName,  ///
            ambiguous = false,
            NonTerminalNode = RepeatedNode;  ///

      repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return repeatedRule;
  }
}
