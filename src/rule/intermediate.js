"use strict";

import { Rule } from "occam-parsers";

import IntermediateNode from "../node/intermediate";
import RepeatedDefinition from "../definition/repeated";

import { CYCLE_LENGTH_2 } from "../constants";
import { filterDefinitions } from "../rule/repeated";
import { isRuleIndirectlyRepeated } from "../rule/repeated/indirectly";
import { isDefinitionIndirectlyRepeatable } from "../rule/repeated/indirectly";
import { ruleNameFromCycle, indirectRuleNameFromCycle } from "../utilities/cycle";
import { intermediateRuleNameFromRuleNameAndIndirectRuleName, intermediateRuleNameFromRuleNameIndirectRuleNameAndNumber } from "../utilities/ruleName";

export default class IntermediateRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IntermediateNode; ///

    return NonTerminalNode;
  }

  static fromDefinitionAndCycle(definition, cycle, ruleMap) {
    const ruleName = ruleNameFromCycle(cycle),
          indirectRuleName = indirectRuleNameFromCycle(cycle),
          indirectRule = ruleMap[indirectRuleName],
          intermediateRuleName = intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          name = intermediateRuleName,  ///
          opacity = indirectRule.getOpacity(),
          definitions = [
            definition
          ],
          intermediateRule = new IntermediateRule(name, opacity, definitions);

    return intermediateRule;
  }

  static fromDefinitionCycleAndNumber(definition, cycle, number, ruleMap) {
    const ruleName = ruleNameFromCycle(cycle),
          indirectRuleName = indirectRuleNameFromCycle(cycle),
          indirectRule = ruleMap[indirectRuleName],
          intermediateRuleName = intermediateRuleNameFromRuleNameIndirectRuleNameAndNumber(ruleName, indirectRuleName, number),
          name = intermediateRuleName,  ///
          opacity = indirectRule.getOpacity(),
          definitions = [
            definition
          ],
          intermediateRule = new IntermediateRule(name, opacity, definitions);

    return intermediateRule;
  }
}

export function intermediateRulesFromCycleAndCycles(cycle, cycles, ruleMap, intermediateRules = []) {
  const cycleLength = cycle.getLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const ruleName = ruleNameFromCycle(cycle),
            rule = ruleMap[ruleName],
            ruleIndirectlyRepeated = isRuleIndirectlyRepeated(rule, cycle, cycles, ruleMap);

      if (!ruleIndirectlyRepeated) {
        const definitions = definitionsFromCycleAndCycles(cycle, cycles, ruleMap),
              definitionsLength = definitions.length;

        definitions.forEach((definition, index) => {
          const number = index + 1,
                intermediateRule = (definitionsLength === 1) ?
                                     IntermediateRule.fromDefinitionAndCycle(definition, cycle, ruleMap) :
                                       IntermediateRule.fromDefinitionCycleAndNumber(definition, cycle, number, ruleMap);

          intermediateRules.push(intermediateRule);
        });
      }

      break;
    }
  }

  return intermediateRules;
}

function definitionsFromCycleAndCycles(cycle, cycles, ruleMap) {
  const intermediateDefinitions = intermediateDefinitionsFromCycleAndCycles(cycle, cycles, ruleMap),
        definitions = intermediateDefinitions;  ///

  return definitions;
}

function intermediateDefinitionsFromCycleAndCycles(cycle, cycles, ruleMap) {
  const intermediateDefinitions = [],
        indirectRuleName = indirectRuleNameFromCycle(cycle),
        ruleName = ruleNameFromCycle(cycle), ///
        rule = ruleMap[ruleName],
        indirectRule = ruleMap[indirectRuleName],
        definitions = indirectRule.getDefinitions();

  definitions.forEach((definition) => {
    const definitionLeftRepeatable = isDefinitionIndirectlyRepeatable(definition, indirectRuleName, cycles, ruleMap);

    if (definitionLeftRepeatable) {
      const precedence = definition.getPrecedence();

      let definitions = rule.getDefinitions();

      definitions = filterDefinitions(definitions, cycle, cycles, ruleMap); ///

      definitions.forEach((definition) => {
        const repeatedDefinition = RepeatedDefinition.fromDefinitionCycleAndPrecedence(definition, cycle, precedence, ruleMap),
              intermediateDefinition = repeatedDefinition;  ///

        intermediateDefinitions.push(intermediateDefinition);
      });
    }
  });

  return intermediateDefinitions;
}
