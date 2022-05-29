"use strict";

import { Rule } from "occam-parsers";

export default class RewrittenRule extends Rule {
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
