"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";

import { isDefinitionReducible } from "../utilities/definition";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

export default class ReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReducedNode;  ///

    return NonTerminalNode;
  }

  static fromRuleAndCycles(rule, cycles, ruleMap) {
    const ruleName = rule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    definitions = filterDefinitions(definitions, ruleName, cycles, ruleMap);

    const definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      const ruleString = rule.asString();

      throw new Error(`The '${ruleString}' rule has no reduced definitions.`);
    }

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          opacity = rule.getOpacity(),
          reducedRule = new ReducedRule(name, opacity, definitions);

    return reducedRule;
  }
}

function filterDefinitions(definitions, ruleName, cycles, ruleMap) {
  definitions = definitions.filter((definition) => {
    const definitionLeftReducible = isDefinitionReducible(definition, ruleName, cycles, ruleMap);

    if (definitionLeftReducible) {
      return true;
    }
  });

  return definitions;
}
