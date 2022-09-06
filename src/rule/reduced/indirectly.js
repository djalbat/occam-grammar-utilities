"use strict";

import { Rule } from "occam-parsers";

import IndirectlyReducedNode from "../../node/reduced/indirectly";
import IndirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/indirectly";

import { find } from "../../utilities/array";
import { indirectlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class IndirectlyReducedRule extends Rule {
  isVacuous() {
    const definitionsLength = this.definitions.length,
          vacuous = (definitionsLength === 0);

    return vacuous;
  }

  static fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
    const indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);

    let definitions = rule.getDefinitions();

    definitions = definitions.slice(0);  ///

    indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
      const definition = indirectlyLeftRecursiveDefinition.getDefinition(),
            index = definitions.indexOf(definition);

      if (index > -1) {
        const start = index,  ///
              deleteCount = 1;

        definitions.splice(start, deleteCount);
      }
    });

    const ruleName = rule.getName(),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName),
          name = indirectlyReducedRuleName, ///
          ambiguous = false,
          NonTerminalNode = IndirectlyReducedNode,  ///
          indirectlyReducedRule = new IndirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);

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
