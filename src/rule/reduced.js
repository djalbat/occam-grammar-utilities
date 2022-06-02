"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";

import { isDefinitionLeftRecursive } from "../utilities/definition";
import { reducedRuleNameFromRuleName, ruleNameFromReducedRuleName } from "../utilities/ruleName";

const { backwardsForEach } = arrayUtilities;

export default class ReducedRule extends Rule {
  rewrite(ruleMap) {
    const name = this.getName(),
          reducedRuleName = name, ///
          ruleName = ruleNameFromReducedRuleName(reducedRuleName),
          rule = ruleMap[ruleName],
          definitions = rule.getDefinitions(),
          nonLeftRecursiveDefinitions = [];

    let reducedDefinition = null;

    backwardsForEach(definitions, (definition, index) => {
      const definitionLeftRecursive = isDefinitionLeftRecursive(definition)

      if (!definitionLeftRecursive) {
        const start = index,
              deleteCount = 1;

        definitions.splice(start, deleteCount);

        const nonLeftRecursiveDefinition = definition; ///

        nonLeftRecursiveDefinitions.unshift(nonLeftRecursiveDefinition);
      }
    });

    if (reducedDefinition !== null) {
      const definition = reducedDefinition; ///

      this.addDefinition(definition);
    }

    nonLeftRecursiveDefinitions.forEach((nonLeftRecursiveDefinition) => {
      const definition = nonLeftRecursiveDefinition; ///

      this.addDefinition(definition);
    });
  }

  static fromRule(rule) {
    const ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          ambiguous = false,
          definitions = [],
          NonTerminalNode = ReducedNode,  ///
          reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);

    return reducedRule;
  }
}
