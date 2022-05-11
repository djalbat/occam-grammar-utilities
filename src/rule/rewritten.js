"use strict";

import { Rule } from "occam-parsers";

import RuleNameDefinition from "../definition/ruleName";
import RecursiveDefinition from "../definition/recursive";

import { isInstanceOf } from "../utilities/class";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

export default class RewrittenRule extends Rule {
  static fromRule(rule) {
    let definitions = rule.getDefinitions();

    const ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName);

    definitions = definitions.filter((definition) => {
      let recursiveDefinitionLeftRecursiveDefinition = false;

      const definitionRecursiveDefinition = isInstanceOf(definition, RecursiveDefinition);

      if (definitionRecursiveDefinition) {
        const recursiveDefinition = definition; ///

        recursiveDefinitionLeftRecursiveDefinition = recursiveDefinition.isLeftRecursiveDefinition();
      }

      if (recursiveDefinitionLeftRecursiveDefinition) {
        return true;
      }
    });

    definitions = [
      ...definitions,
      reducedRuleNameDefinition
    ];

    const name = ruleName,  ///
          ambiguous = rule.isAmbiguous(),
          NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);

    return rewrittenRule;
  }
}
