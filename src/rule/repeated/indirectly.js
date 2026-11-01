"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";
import IndirectlyRepeatedDefinition from "../../definition/repeated/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { filterDefinitions } from "../../rule/repeated";
import { isDefinitionReducible } from "../../utilities/definition";
import { ruleNameFromCycle, indirectRuleNameFromCycle } from "../../utilities/cycle";
import { indirectlyRepeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

const { first } = arrayUtilities;

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyRepeatedNode; ///

    return NonTerminalNode;
  }

  static fromIndirectRuleCycleAndCycles(indirectRule, cycle, cycles, ruleMap) {
    let definitions;

    definitions = indirectRule.getDefinitions();

    cycle = cycle.permuted();

    definitions = filterDefinitions(definitions, cycle, cycles, ruleMap);  ///

    cycle = cycle.permuted();

    const indirectlyRepeatedDefinitions = definitions.map((definition) => {
            const indirectlyRepeatedDefinition = IndirectlyRepeatedDefinition.fromDefinitionAndCycle(definition, cycle, ruleMap);

            return indirectlyRepeatedDefinition;
          }),
          indirectRuleName = indirectRuleNameFromCycle(cycle),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName),
          name = indirectlyRepeatedRuleName, ///
          opacity = indirectRule.getOpacity();

    definitions = indirectlyRepeatedDefinitions;  ///

    const indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions);

    return indirectlyRepeatedRule;
  }
}

export function indirectlyRepeatedRulesFromCycleAndCycles(cycle, cycles, ruleMap, indirectlyRepeatedRules = []) {
  const cycleLength = cycle.getLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const ruleIndirectlyRepeated = isRuleIndirectlyRepeated(cycle, cycles, ruleMap);

      if (ruleIndirectlyRepeated) {
        const indirectRuleName = indirectRuleNameFromCycle(cycle),
              indirectRule = ruleMap[indirectRuleName],
              indirectlyRepeatedRule = IndirectlyRepeatedRule.fromIndirectRuleCycleAndCycles(indirectRule, cycle, cycles, ruleMap);

        indirectlyRepeatedRules.push(indirectlyRepeatedRule);
      }

      break;
    }
  }

  return indirectlyRepeatedRules;
}

export function isDefinitionIndirectlyRepeatable(definition, indirectRuleName, cycles, ruleMap) {
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

export function isRuleIndirectlyRepeated(cycle, cycles, ruleMap) {
  let ruleIndirectlyRepeated = false;

  const ruleName = ruleNameFromCycle(cycle),
        rule = ruleMap[ruleName];

  let definitions;

  definitions = rule.getDefinitions();

  definitions = filterDefinitions(definitions, cycle, cycles, ruleMap);  ///

  const definitionsIndirectlyRepeated = definitions.every((definition) => {
    const definitionIndirectlyRepeated = isDefinitionIndirectlyRepeated(definition);

    if (definitionIndirectlyRepeated) {
      return true;
    }
  });

  if (definitionsIndirectlyRepeated) {
    ruleIndirectlyRepeated = true;
  }

  return ruleIndirectlyRepeated;
}

function isDefinitionIndirectlyRepeated(definition) {
  const parts = definition.getParts(),
        partsLength = parts.length,
        definitionIndirectlyRepeated = (partsLength === 1);

  return definitionIndirectlyRepeated;
}
