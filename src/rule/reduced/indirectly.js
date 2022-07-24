"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import IndirectlyReducedNode from "../../node/reduced/indirectly";
import IndirectlyLeftRecursiveDefinition from "../../definition/recursive/left/indirectly";

import { indirectlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

const { find } = arrayUtilities;

export default class IndirectlyReducedRule extends Rule {
  static fromRule(rule) {
    let indirectlyReducedRule = null;

    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const definitionIndirectlyLeftRecursiveDefinition = (definition instanceof IndirectlyLeftRecursiveDefinition);

      if (!definitionIndirectlyLeftRecursiveDefinition) {
        return true;
      }
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
