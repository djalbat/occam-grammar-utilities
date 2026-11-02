"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";
import IndirectlyRepeatedDefinition from "../../definition/repeated/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { filterDefinitions } from "../../utilities/cycle";
import { isDefinitionReducible } from "../../utilities/definition";
import { indirectlyRepeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";
import { indirectRuleNameFromCycle, isCycleIndirectlyRepeated } from "../../utilities/cycle";

const { first } = arrayUtilities;

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyRepeatedNode; ///

    return NonTerminalNode;
  }

  static fromIndirectlyRepeatedIndirectCycle(indirectlyRepeatedIndirectCycle, context) {
    let definitions;

    const indirectRule = context.getIndirectRule();

    definitions = indirectRule.getDefinitions();

    context.permuteCycle();

    definitions = filterDefinitions(definitions, context); ///

    context.permuteCycle();

    const cycle = context.getCycle(),
          indirectlyRepeatedDefinitions = definitions.map((definition) => {
            const indirectlyRepeatedDefinition = IndirectlyRepeatedDefinition.fromDefinition(definition, context);

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

export function indirectlyRepeatedRulesFromCycleAndCycles(context, indirectlyRepeatedRules = []) {
  const cycle = context.getCycle(),
        cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const cycleIndirectlyRepeated = isCycleIndirectlyRepeated(context);

      if (cycleIndirectlyRepeated) {
        const indirectlyRepeatedIndirectCycle = cycle,  ///
              indirectlyRepeatedRule = IndirectlyRepeatedRule.fromIndirectlyRepeatedIndirectCycle(indirectlyRepeatedIndirectCycle, context);

        indirectlyRepeatedRules.push(indirectlyRepeatedRule);
      }

      break;
    }
  }

  return indirectlyRepeatedRules;
}
