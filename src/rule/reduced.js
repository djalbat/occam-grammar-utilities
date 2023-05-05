"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";

import { isDefinitionLeftRecursive } from "../utilities/definition";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

export default class ReducedRule extends Rule {
  static fromRuleAndCycles(rule, cycles) {
    const ruleName = rule.getName();

    let reducedRule = null,
        definitions = rule.getDefinitions();

    definitions = definitions.filter((definition) => {
      const definitionLeftReducible = isDefinitionReducible(definition, ruleName, cycles);

      if (definitionLeftReducible) {
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

function isDefinitionReducible(definition, ruleName, cycles) {
  let definitionReducible = true;

  const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

  if (definitionLeftRecursive) {
    definitionReducible = false;
  }

  return definitionReducible;
}
