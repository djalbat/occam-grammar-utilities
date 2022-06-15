"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";
import LeftRecursiveDefinition from "../definition/recursive/left";

import { isInstanceOf } from "../utilities/class";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { reducedDefinitionFromRuleName } from "../utilities/definition";

const { backwardsForEach } = arrayUtilities;

export default class ReducedRule extends Rule {
  static fromRule(rule) {
    let reducedRule = null;

    const definitions = rule.getDefinitions(),
          nonLeftRecursiveDefinitions = nonLeftRecursiveDefinitionsFromDefinitions(definitions),
          nonLeftRecursiveDefinitionsLength = nonLeftRecursiveDefinitions.length;

    if (nonLeftRecursiveDefinitionsLength > 0) {
      const ruleName = rule.getName(),
            reducedDefinition = reducedDefinitionFromRuleName(ruleName),
            reducedRuleName = reducedRuleNameFromRuleName(ruleName),
            definitions = nonLeftRecursiveDefinitions,  ///
            definition = reducedDefinition; ///

      definitions.forEach((definition) => {
        rule.removeDefinition(definition);
      });

      rule.addDefinition(definition);

      const name = reducedRuleName, ///
            ambiguous = false,
            NonTerminalNode = ReducedNode;  ///

      reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return reducedRule;
  }
}

function nonLeftRecursiveDefinitionsFromDefinitions(definitions) {
  const nonLeftRecursiveDefinitions = [];

  backwardsForEach(definitions, (definition) => {
    const definitionLeftRecursiveDefinition = isInstanceOf(definition, LeftRecursiveDefinition);

    if (!definitionLeftRecursiveDefinition) {
      const nonLeftRecursiveDefinition = definition;  ///

      nonLeftRecursiveDefinitions.push(nonLeftRecursiveDefinition);
    }
  });

  return nonLeftRecursiveDefinitions;
}
