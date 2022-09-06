"use strict";

import { Rule } from "occam-parsers";

import IndirectlyReducedNode from "../../node/reduced/indirectly";

import { indirectlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class IndirectlyReducedRule extends Rule {
  isVacuous() {
    const definitionsLength = this.definitions.length,
          vacuous = (definitionsLength === 0);

    return vacuous;
  }

  static fromRuleAndIndirectlyLeftRecursiveDefinitions(rule, indirectlyLeftRecursiveDefinitions) {
    indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.filter((indirectlyLeftRecursiveDefinition) => { ///
      const indirectlyLeftRecursiveDefinitionRule = indirectlyLeftRecursiveDefinition.getRule();

      if (indirectlyLeftRecursiveDefinitionRule === rule) {
        return true;
      }
    });

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
