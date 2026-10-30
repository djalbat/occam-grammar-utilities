"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import IntermediateNode from "../node/intermediate";
import RepeatedDefinition from "../definition/repeated";

import { filterDefinitions } from "../rule/repeated";
import { isDefinitionReducible } from "../utilities/definition";
import { isRuleIndirectlyRepeated } from "./repeated/indirectly";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { ruleNameFromCycle, indirectRuleNameFromCycle } from "../utilities/cycle";
import { intermediateRuleNameFromRuleNameAndIndirectRuleName, intermediateRuleNameFromRuleNameIndirectRuleNameAndNumber } from "../utilities/ruleName";

const { first } = arrayUtilities;

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

export function intermediateRulesFromCycleAndCycles(cycle, cycles, ruleMap) {
  const intermediateRules = [],
        cycleLength = cycle.getLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {

      break;
    }

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
  const indirectRuleName = indirectRuleNameFromCycle(cycle),
        ruleName = ruleNameFromCycle(cycle), ///
        rule = ruleMap[ruleName],
        indirectRule = ruleMap[indirectRuleName],
        intermediateDefinitions = intermediateDefinitionsFromRuleIndirectRuleAndCycles(rule, indirectRule, cycles, ruleMap),
        definitions = intermediateDefinitions;  ///

  return definitions;
}

function isDefinitionIndirectlyRepeatable(definition, indirectRuleName, cycles, ruleMap) {
  const ruleName = indirectRuleName,  ///
        definitionReducible = isDefinitionReducible(definition, ruleName, cycles, ruleMap),
        definitionIndirectlyRepeatable = !definitionReducible;

  if (definitionIndirectlyRepeatable) {
    const parts = definition.getParts(),
          firstPart = first(parts),
          firstPartRuleNamePart = firstPart.isRuleNamePart();

    if (!firstPartRuleNamePart) {
      const firstPartString = firstPart.asString(),
            definitionString = definition.asString();

      throw new Error(`The '${firstPartString}' first part of the '${definitionString}' definition is not a rule name part.`);
    }
  }

  return definitionIndirectlyRepeatable;
}

function intermediateDefinitionsFromRuleIndirectRuleAndCycles(rule, indirectRule, cycles, ruleMap) {
  const intermediateDefinitions = [],
        indirectRuleName = indirectRule.getName(),
        definitions = indirectRule.getDefinitions(),
        ruleName = rule.getName(),
        ruleNames = [
          ruleName,
          indirectRuleName
        ];

  definitions.forEach((definition) => {
    const definitionLeftRepeatable = isDefinitionIndirectlyRepeatable(definition, indirectRuleName, cycles, ruleMap);

    if (definitionLeftRepeatable) {
      const precedence = definition.getPrecedence();

      let definitions = rule.getDefinitions();

      definitions = filterDefinitions(definitions, ruleName, indirectRuleName, cycles, ruleMap);

      definitions.forEach((definition) => {
        const repeatedDefinition = RepeatedDefinition.fromDefinitionRuleNamesAndPrecedence(definition, ruleNames, precedence, ruleMap),
              intermediateDefinition = repeatedDefinition;  ///

        intermediateDefinitions.push(intermediateDefinition);
      });
    } else {
      const intermediateDefinition = definition;  ///

      intermediateDefinitions.push(intermediateDefinition);
    }
  });

  return intermediateDefinitions;
}
