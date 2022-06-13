"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";
import LeftRecursiveDefinition from "../definition/recursive/left";

import { isInstanceOf } from "../utilities/class";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

const { backwardsForEach } = arrayUtilities;

export default class ReducedRule extends Rule {
  static fromRule(rule) {
    let reducedRule = null;

    const definitions = rule.getDefinitions(),
          nonLeftRecursiveDefinitions = [];

    backwardsForEach(definitions, (definition, index) => {
      const definitionLeftRecursiveDefinition = isInstanceOf(definition, LeftRecursiveDefinition);

      if (!definitionLeftRecursiveDefinition) {
        const nonLeftRecursiveDefinition = definition; ///

        nonLeftRecursiveDefinitions.unshift(nonLeftRecursiveDefinition);

        rule.removeDefinition(definition);
      }
    });

    const nonLeftRecursiveDefinitionsLength = nonLeftRecursiveDefinitions.length;

    if (nonLeftRecursiveDefinitionsLength > 0) {
      const ruleName = rule.getName(),
            reducedRuleName = reducedRuleNameFromRuleName(ruleName),
            name = reducedRuleName, ///
            ambiguous = false,
            definitions = nonLeftRecursiveDefinitions,  ///
            NonTerminalNode = ReducedNode;  ///

      reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return reducedRule;
  }
}
