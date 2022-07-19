"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../../node/reduced";
import DirectlyLeftRecursiveDefinition from "../../definition/recursive/left/directly";

import { directlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

const { find } = arrayUtilities;

export default class DirectlyReducedRule extends Rule {
  static fromRule(rule) {
    let definitions = rule.getDefinitions();

    const directlyLeftRecursiveDefinitions = find(definitions, (definition) => { ///
      const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

      if (!definitionDirectlyLeftRecursiveDefinition) {
        return true;
      }
    });

    const directlyLeftRecursiveDefinitionsLength = directlyLeftRecursiveDefinitions.length;

    if (directlyLeftRecursiveDefinitionsLength === 0) {
      const ruleName = rule.getName();

      throw new Error(`The '${ruleName}' rule is isolated and therefore the rule cannot be rewritten.`);
    }

    const ruleName = rule.getName(),
          directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
          name = directlyReducedRuleName, ///
          ambiguous = false;

    definitions = directlyLeftRecursiveDefinitions; ///

    const NonTerminalNode = ReducedNode,  ///
          directlyReducedRule = new DirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);

    return directlyReducedRule;
  }
}
