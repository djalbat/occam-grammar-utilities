"use strict";

import { Rule } from "occam-parsers";

import RepeatedNode from "../node/repeated";
import RepeatedDefinition from "../definition/repeated";

import { isDefinitionRepeatable } from "../utilities/definition";
import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";

export default class RepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

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

      throw new Error(`The '${ruleString}' rule has no repeated definitions.`);
    }

    const repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          repeatedDefinitions = rewrittenDefinitionsFromDefintiions(definitions),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity();

    definitions = repeatedDefinitions;  ///

    const repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }
}

function filterDefinitions(definitions, ruleName, cycles, ruleMap) {
  definitions = definitions.filter((definition) => {
    const definitionLeftRepeatable = isDefinitionRepeatable(definition, ruleName, cycles, ruleMap);

    if (definitionLeftRepeatable) {
      return true;
    }
  });

  return definitions;
}

function rewrittenDefinitionsFromDefintiions(definitions) {
  const repeatedDefinitions = definitions.map((definition) => {
    const repeatedDefinition = RepeatedDefinition.fromDefinition(definition);

    return repeatedDefinition;
  });

  return repeatedDefinitions;
}