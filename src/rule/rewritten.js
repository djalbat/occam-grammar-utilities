"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

const { backwardsForEach } = arrayUtilities;

export default class RewrittenRule extends Rule {
  prune(ruleMap, RewrittenDefinition) {
    const name = this.getName(),
          ruleName = name,  ///
          definitions = this.getDefinitions(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRule = ruleMap[reducedRuleName],
          reducedRuleDefinitions = [];

    backwardsForEach(definitions, (definition, index) => {
      const definitionRewrittenDefinition = (definition instanceof RewrittenDefinition);

      if (!definitionRewrittenDefinition) {
        const start = index,
              deleteCount = 1;

        definitions.splice(start, deleteCount);

        const reducedRuleDefinition = definition; ///

        reducedRuleDefinitions.unshift(reducedRuleDefinition);
      }
    });

    reducedRuleDefinitions.forEach((reducedRuleDefinition) => {
      const definition = reducedRuleDefinition; ///

      reducedRule.addDefinition(definition);
    });
  }

  replaceDefinition(definition, rewrittenDefinition) {
    const replacedDefinition = definition, ///
          replacementDefinition = rewrittenDefinition;  ///

    super.replaceDefinition(replacedDefinition, replacementDefinition);
  }

  static fromRule(rule) {
    const ruleName = rule.getName(),
          name = ruleName, ///
          ambiguous = rule.isAmbiguous(),
          definitions = rule.getDefinitions(),
          NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);

    return rewrittenRule;
  }
}
