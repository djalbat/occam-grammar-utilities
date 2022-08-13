"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import IndirectlyReducedNode from "../../node/reduced/indirectly";
import IndirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/indirectly";

import { indirectlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

const { find } = arrayUtilities;

export default class IndirectlyReducedRule extends Rule {
  static fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
    let indirectlyReducedRule = null;

    const indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);

    let definitions = rule.getDefinitions();

    definitions = definitions.slice(0);  ///

    indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
      const definition = indirectlyLeftRecursiveDefinition.getDefinition(),
            index = definitions.indexOf(definition),
            start = index,  ///
            deleteCount = 1;

        definitions.splice(start, deleteCount);
    });

    const definitionsLength = definitions.length;

    if (definitionsLength > 0) {
      const ruleName = rule.getName(),
            indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName),
            name = indirectlyReducedRuleName, ///
            ambiguous = false,
            NonTerminalNode = IndirectlyReducedNode;  ///

      indirectlyReducedRule = new IndirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return indirectlyReducedRule;
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
