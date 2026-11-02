"use strict";

import { Rule } from "occam-parsers";

import IndirectlyReducedNode from "../../node/reduced/indirectly";
import IndirectlyReducedDefinition from "../../definition/reduced/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { indirectRuleNameFromCycle } from "../../utilities/cycle";
import { indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyReducedNode;  ///

    return NonTerminalNode;
  }

  static fromIndirectlyReducibleIndirectCycle(indirectlyReducibleIndirectCycle, context) {
    const cycle = context.getCycle(),
          ruleName = context.getRuleName(),
          indirectRule = context.getIndirectRule(),
          indirectRuleName = context.getIndirectRuleName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyReducedDefinitions = filterDefinitions(definitions, cycle, context),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          name = indirectlyReducedRuleName, ///
          opacity = null;

    definitions = indirectlyReducedDefinitions; ///

    const indirectlyReducedRule = new IndirectlyReducedRule(name, opacity, definitions);

    return indirectlyReducedRule;
  }
}

export function isCycleIndirectlyReducible(cycle, context) {
  const indirectRuleName = indirectRuleNameFromCycle(cycle),
        ruleMap = context.getRuleMap(),
        indirectRule = ruleMap[indirectRuleName],
        definitions = indirectRule.getDefinitions(),
        indirectlyReducedDefinitions = filterDefinitions(definitions, cycle, context),
        indirectlyReducedDefinitionsLength = indirectlyReducedDefinitions.length,
        cycleIndirectlyReducible = (indirectlyReducedDefinitionsLength > 0);

  return cycleIndirectlyReducible;
}

export function indirectlyReducedRulesFromCycleAndCycles(context, indirectlyReducedRules = []) {
  const cycle = context.getCycle(),
        cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const cycleIndirectlyReducible = isCycleIndirectlyReducible(cycle, context);

      if (cycleIndirectlyReducible) {
        const indirectlyReducibleIndirectCycle = cycle, ///
              indirectlyReducedRule = IndirectlyReducedRule.fromIndirectlyReducibleIndirectCycle(indirectlyReducibleIndirectCycle, context);

        indirectlyReducedRules.push(indirectlyReducedRule);
      }

      break;
    }
  }

  return indirectlyReducedRules;
}

function filterDefinitions(definitions, cycle, context) {
  const indirectlyReducedDefinitions = definitions.reduce((indirectlyReducedDefinitions, definition) => {
          const indirectlyReducedDefinition = IndirectlyReducedDefinition.fromDefinition(definition, context);

          if (indirectlyReducedDefinition !== null) {
            indirectlyReducedDefinitions.push(indirectlyReducedDefinition);
          }

          return indirectlyReducedDefinitions;
        }, []);

  return indirectlyReducedDefinitions;
}