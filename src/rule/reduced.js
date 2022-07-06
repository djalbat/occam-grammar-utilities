"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";
import DirectlyLeftRecursiveDefinition from "../definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "../definition/recursive/left/indirectly";

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

const { find } = arrayUtilities;

export default class ReducedRule extends Rule {
  static fromRule(rule) {
    let reducedRule = null;

    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition),
            definitionIndirectlyLeftRecursiveDefinition = (definition instanceof IndirectlyLeftRecursiveDefinition);

      if (!definitionDirectlyLeftRecursiveDefinition && !definitionIndirectlyLeftRecursiveDefinition) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength > 0) {
      const ruleName = rule.getName(),
            reducedRuleName = reducedRuleNameFromRuleName(ruleName),
            name = reducedRuleName, ///
            ambiguous = false,
            NonTerminalNode = ReducedNode;  ///

      reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return reducedRule;
  }
}
