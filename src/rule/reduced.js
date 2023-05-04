"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";

import { isDefinitionLeftRecursive } from "../utilities/definition";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

export default class ReducedRule extends Rule {
  static fromRule(rule) {
    let reducedRule = null,
        definitions = rule.getDefinitions();

    definitions = definitions.filter((definition) => {
      const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

      if (!definitionLeftRecursive) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength > 0) {
      const ruleName = rule.getName(),
            reducedRuleName = reducedRuleNameFromRuleName(ruleName),
            name = reducedRuleName, ///
            ambiguous = rule.isAmbiguous(),
            NonTerminalNode = ReducedNode;  ///

      reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return reducedRule;
  }
}
