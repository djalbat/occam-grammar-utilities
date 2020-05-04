"use strict";

import { Rule } from "occam-parsers";

import RuleNameDefinition from "../definition/ruleName";
import RecursiveDefinition from "../definition/recursive";

import { isInstanceOf } from "../utilities/class";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { DIRECTLY_LEFT_RECURSIVE_TYPE, INDIRECTLY_LEFT_RECURSIVE_TYPE, IMPLICITLY_LEFT_RECURSIVE_TYPE } from "../types";

export default class RewrittenRule extends Rule {
  static fromRule(rule) {
    let definitions = rule.getDefinitions();

    const ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName);

    definitions = definitions.filter((definition) => {
      let keep = false;

      const definitionRecursiveDefinition = isInstanceOf(definition, RecursiveDefinition);

      if (definitionRecursiveDefinition) {
        const recursiveDefinition = definition, ///
              type = recursiveDefinition.getType();

        keep = (type === DIRECTLY_LEFT_RECURSIVE_TYPE) ||
               (type === INDIRECTLY_LEFT_RECURSIVE_TYPE) ||
               (type === IMPLICITLY_LEFT_RECURSIVE_TYPE);
      }

      return keep;
    });

    definitions = [
      ...definitions,
      reducedRuleNameDefinition
    ];

    const name = ruleName,  ///
          NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, definitions, NonTerminalNode);

    return rewrittenRule;
  }
}
