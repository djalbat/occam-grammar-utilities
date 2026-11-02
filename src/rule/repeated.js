"use strict";

import { Rule } from "occam-parsers";

import RepeatedNode from "../node/repeated";
import RepeatedDefinition from "../definition/repeated";
import IntermediateRepeatedDefinition from "../definition/repeated/intermediate";

import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { filterDefinitions, isCycleIndirectlyRepeatable } from "../utilities/cycle";

export default class RepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

    return NonTerminalNode;
  }

  static fromDirectlyRepeatableDirectCycle(directlyRepeatableDirectCycle, context) {
    const rule = context.getRule(),
          cycle = context.getCycle(),
          ruleName = context.getRuleName(),
          repeatedDefinitions = repeatedDefinitionsFromCycle(cycle, context),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity(),
          definitions = repeatedDefinitions,  ///
          repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }

  static fromDirectlyRepeatableIndirectCycle(directlyRepeatableIndirectCycle, context) {
    const rule = context.getRule(),
          cycle = context.getCycle(),
          ruleName = context.getRuleName(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          intermediateRepeatedDefinitions = intermediateRepeatedDefinitionsFromCycle(cycle, context),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity(),
          definitions = intermediateRepeatedDefinitions,  ///
          repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }
}

export function repeatedDefinitionsFromCycle(cycle, context) {
  const rule = context.getRule();

  let definitions;

  definitions = rule.getDefinitions();

  definitions = filterDefinitions(definitions, context); ///

  const repeatedDefinitions = definitions.map((definition) => {
    const repeatedDefinition = RepeatedDefinition.fromDefinition(definition, context);

    return repeatedDefinition;
  });

  return repeatedDefinitions;
}

export function repeatedRulesFromCycleAndCycles(context, repeatedRules = []) {
  const cycle = context.getCycle(),
        cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const directlyRepeatableDirectCycle = cycle,  ///
            repeatedRule = RepeatedRule.fromDirectlyRepeatableDirectCycle(directlyRepeatableDirectCycle, context);

      repeatedRules.push(repeatedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const cycleIndirectlyRepeatable = isCycleIndirectlyRepeatable(context);

      if (!cycleIndirectlyRepeatable) {
        const directlyRepeatableIndirectCycle = cycle,  ///
              repeatedRule = RepeatedRule.fromDirectlyRepeatableIndirectCycle(directlyRepeatableIndirectCycle, context);

        repeatedRules.push(repeatedRule);
      }

      break;
    }
  }

  return repeatedRules;
}

function intermediateRepeatedDefinitionsFromCycle(cycle, context) {
  const rule = context.getRule();

  let definitions;

  definitions = rule.getDefinitions();

  definitions = filterDefinitions(definitions, context); ///

  definitions = definitions.filter((definition) => {
    const parts = definition.getParts(),
          partsLength = parts.length;

    if (partsLength > 1) {
      return true;
    }
  });

  const ruleName = context.getRuleName(),
        definitionsLength = definitions.length,
        intermediateRepeatedDefinitions = definitions.map((definition, index) => {
          const number = index + 1,
                intermediateRepeatedDefinition = (definitionsLength === 1) ?
                                                   IntermediateRepeatedDefinition.fromDefinitionAndRuleName(definition, ruleName, context) :
                                                     IntermediateRepeatedDefinition.fromDefinitionRuleNameAndNumber(definition, ruleName, number, context);

          return intermediateRepeatedDefinition;
        });

  return intermediateRepeatedDefinitions;
}
