"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../../node/reduced";
import DirectlyLeftRecursiveDefinition from "../../definition/recursive/left/directly";

import { directlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

const { find } = arrayUtilities;

export default class DirectlyReducedRule extends Rule {
  static fromRule(rule) {
    let directlyReducedRule = null;

    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

      if (!definitionDirectlyLeftRecursiveDefinition) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength > 0) {
      const ruleName = rule.getName(),
            directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
            name = directlyReducedRuleName, ///
            ambiguous = false,
            NonTerminalNode = ReducedNode;  ///

      directlyReducedRule = new DirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return directlyReducedRule;
  }
}
