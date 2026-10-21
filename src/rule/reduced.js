"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";
import ReducedDefinition from "../definition/reduced";

import { ruleNameFromCycle } from "../utilities/cycle";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

export default class ReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReducedNode;  ///

    return NonTerminalNode;
  }

  static fromCycleAndCycles(cycle, cycles, ruleMap) {
    const ruleName = ruleNameFromCycle(cycle),
          rule = ruleMap[ruleName];

    let definitions;

    definitions = rule.getDefinitions();

    const reducedDefinitions = filterDefinitions(definitions, ruleName, cycles, ruleMap),
          reducedDefinitionsLength = reducedDefinitions.length;

    if (reducedDefinitionsLength === 0) {
      const ruleString = rule.asString();

      throw new Error(`The '${ruleString}' rule has no reduced definitions.`);
    }

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          opacity = null;

    definitions = reducedDefinitions; ///

    const reducedRule = new ReducedRule(name, opacity, definitions);

    return reducedRule;
  }
}

function filterDefinitions(definitions, ruleName, cycles, ruleMap) {
  const reducedDefinitions = definitions.reduce((reducedDefinitions, definition) => {
    const reducedDefinition = ReducedDefinition.fromDefinitionRuleNameAndCycles(definition, ruleName, cycles, ruleMap);

    if (reducedDefinition !== null) {
      reducedDefinitions.push(reducedDefinition);
    }

    return reducedDefinitions;
  }, []);

  return reducedDefinitions;
}
