"use strict";

import { Rule } from "occam-parsers";

export default class RewrittenRule extends Rule {
  static fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
    const name = rule.getName(),
          ambiguous = rule.isAmbiguous();

    let definitions = rule.getDefinitions();

    definitions = definitions.map((definition) => {
      definition = leftRecursiveDefinitions.find((leftRecursiveDefinition) => {
        const leftRecursiveDefinitionMatchesDefinition = leftRecursiveDefinition.match(definition);

        if (leftRecursiveDefinitionMatchesDefinition) {
          return true;
        }
      });

      return definition;
    });

    const NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);

    return rewrittenRule;
  }
}
