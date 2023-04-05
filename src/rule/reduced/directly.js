"use strict";

import { Rule } from "occam-parsers";

import DirectlyReducedNode from "../../node/reduced/directly";

import { find } from "../../utilities/array";
import { directlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyReducedRule extends Rule {
  static fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions) {
    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const directlyLeftRecursiveDefinitionsIncludesDefinition = directlyLeftRecursiveDefinitions.includes(definition);

      if (!directlyLeftRecursiveDefinitionsIncludesDefinition) {
        return true;
      }
    });

    // const definitionsLength = definitions.length;
    //
    // if (definitionsLength === 0) {
    //   const ruleName = rule.getName();
    //
    //   throw new Error(`The directly left recursive definitions of the '${ruleName}' rule are isolated and therefore cannot be rewritten.`);
    // }

    const ruleName = rule.getName(),
          directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
          name = directlyReducedRuleName, ///
          ambiguous = false,
          NonTerminalNode = DirectlyReducedNode,  ///
          directlyReducedRule = new DirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);

    return directlyReducedRule;
  }
}
