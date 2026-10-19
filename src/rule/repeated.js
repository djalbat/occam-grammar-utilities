"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RepeatedNode from "../node/repeated";
import RepeatedDefinition from "../definition/repeated";

import { ruleNameFromCycle } from "../utilities/cycle";
import { isDefinitionRepeatable } from "../utilities/definition";
import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";

const { first } = arrayUtilities;

export default class RepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

    return NonTerminalNode;
  }

  static fromCycleAndCycles(cucle, cycles, ruleMap) {
    const ruleName = ruleNameFromCycle(cucle),
          rule = ruleMap[ruleName],
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          indirectRuleName = ruleName,  ///
          repeatedDefinitions = repeatedDefinitionsFromRuleCyclesAndIndirectRuleName(rule, cycles, indirectRuleName, ruleMap),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity(),
          definitions = repeatedDefinitions,  ///
          repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }
}

export function repeatedDefinitionsFromRuleCyclesAndIndirectRuleName(rule, cycles, indirectRuleName, ruleMap) {
  let definitions;

  const ruleName = rule.getName();

  definitions = rule.getDefinitions();

  definitions = definitions.filter((definition) => {
    const definitionLeftRepeatable = isDefinitionRepeatable(definition, ruleName, cycles, ruleMap);

    if (definitionLeftRepeatable) {
      const parts = definition.getParts(),
            firstPart = first(parts),
            ruleNamePart = firstPart, ///
            ruleName = ruleNamePart.getRuleName();

      if (ruleName === indirectRuleName) {
        return true;
      }
    }
  });

  const definitionsLength = definitions.length;

  if (definitionsLength === 0) {
    const ruleString = rule.asString();

    throw new Error(`The '${ruleString}' rule has no repeated definitions.`);
  }

  const repeatedDefinitions = repeatedDefinitionsFromDefintiions(definitions, ruleMap);

  return repeatedDefinitions;
}

function repeatedDefinitionsFromDefintiions(definitions, ruleMap) {
  const repeatedDefinitions = definitions.map((definition) => {
    const repeatedDefinition = RepeatedDefinition.fromDefinition(definition, ruleMap);

    return repeatedDefinition;
  });

  return repeatedDefinitions;
}