"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../../node/reduced";
import IndirectlyLeftRecursiveDefinition from "../../definition/recursive/left/indirectly";

import { indirectlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

const { find } = arrayUtilities;

export default class IndirectlyReducedRule extends Rule {
  static fromRule(rule) {
    let indirectlyReducedRule = null;

    let definitions = rule.getDefinitions();

    const indirectlyLeftRecursiveDefinitions = find(definitions, (definition) => { ///
      const definitionIndirectlyLeftRecursiveDefinition = (definition instanceof IndirectlyLeftRecursiveDefinition);

      if (!definitionIndirectlyLeftRecursiveDefinition) {
        return true;
      }
    });

    const indirectlyLeftRecursiveDefinitionsLength = indirectlyLeftRecursiveDefinitions.length;

    if (indirectlyLeftRecursiveDefinitionsLength > 0) {
      const ruleName = rule.getName(),
            indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName),
            name = indirectlyReducedRuleName, ///
            ambiguous = false,
            definitions = indirectlyLeftRecursiveDefinitions, ///
            NonTerminalNode = ReducedNode;  ///

      indirectlyReducedRule = new IndirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return indirectlyReducedRule;
  }
}
