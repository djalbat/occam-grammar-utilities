"use strict";

import { Rule } from "occam-parsers";

import DirectlyReducedNode from "../../node/reduced/directly";

import { directlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyReducedRule extends Rule {
  static fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, disallowIsolated) {
    let directlyReducedRule = null;

    let definitions = rule.getDefinitions();

    definitions = definitions.slice(0);  ///

    leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
      const definition = leftRecursiveDefinition.getDefinition(),
            index = definitions.indexOf(definition);

      if (index > -1) {
        const start = index,  ///
              deleteCount = 1;

        definitions.splice(start, deleteCount);
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      if (disallowIsolated) {
        const ruleName = rule.getName();

        throw new Error(`The directly left recursive definitions of the '${ruleName}' rule are isolated and therefore cannot be rewritten.`);
      }
    }

    if (definitionsLength > 0) {
      const ruleName = rule.getName(),
            directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
            name = directlyReducedRuleName, ///
            ambiguous = false,
            NonTerminalNode = DirectlyReducedNode;  ///

      directlyReducedRule = new DirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return directlyReducedRule;
  }
}
