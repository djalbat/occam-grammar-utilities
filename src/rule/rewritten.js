"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";
import IndirectlyRewrittenDefinition from "../definition/rewritten/indirectly";

import { partsfromDefinition } from "../utilities/definition";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { rewrittenDefinitionsFromDefinitions } from "../definition/rewritten";
import { isCycleIndirectlyReducible, isCycleIndirectlyRepeatable } from "../utilities/cycle";

const { front } = arrayUtilities;

export default class RewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode; ///

    return NonTerminalNode;
  }

  mergedWith(rewrittenRule) {
    let definitions;

    definitions = this.getDefinitions();

    const frontDefinitions = front(definitions);

    definitions = rewrittenRule.getDefinitions();

    definitions = [ ///
      ...frontDefinitions,
      ...definitions
    ];

    const name = this.getName(),
          opacity = this.getOpacity();

    rewrittenRule = new RewrittenRule(name, opacity, definitions);  ///

    return rewrittenRule;
  }

  static fromIndirectRuleName(indirectRuleName, context) {
    const ruleMap = context.getRuleMap(),
          indirectRule = ruleMap[indirectRuleName];

    let definitions;

    definitions = indirectRule.getDefinitions();

    definitions = definitions.map((definition) => {
      const parts = partsfromDefinition(definition, context),
            precedence = definition.getPrecedence();

      definition = Definition.fromPartsAndPrecedence(parts, precedence);

      return definition;
    });

    const ruleName = indirectRuleName,  ///
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName,  ///
          opacity = indirectRule.getOpacity(),
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }

  static fromDirectlyRepeatableDirectCycle(directlyRepeatableDirectCycle, context) {
    const ruleName = context.getRuleName(),
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, context),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = null,
          definitions = [
            rewrittenDefinition
          ],
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }

  static fromDirectlyRepeatableIndirectCycle(directlyRepeatableIndirectcycle, context) {
    let definitions = [];

    const cycle = context.getCycle(),
          ruleMap = context.getRuleMap(),
          ruleName = context.getRuleName(),
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, ruleMap);

    definitions.push(rewrittenDefinition);

    const cycleIndirectlyReducible = isCycleIndirectlyReducible(context);

    if (cycleIndirectlyReducible) {
      const indirectlyRewrittenDefinition = IndirectlyRewrittenDefinition.fromCycle(cycle, context);

      definitions.push(indirectlyRewrittenDefinition);
    }

    const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = null,
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }

  static fromIndirectlyRepeatableIndirectCycle(indirectlyRepeatableIndirectCycle, context) {
    const rule = context.getRule(),
          ruleMap = context.getRuleMap(),
          ruleName = context.getRuleName();

    let definitions;

    definitions = rule.getDefinitions();

    const rewrittenDefinitions = rewrittenDefinitionsFromDefinitions(definitions, context),
          singular = true,
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, singular, ruleMap);

    rewrittenDefinitions.push(rewrittenDefinition);

    const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = null;

    definitions = rewrittenDefinitions; ///

    const rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}

export function rewrittenRulesFromCycleAndCycles(context, rewrittenRules = []) {
  const cycle = context.getCycle(),
        cycleLength = context.getCycleLength();

  let rewrittenRule;

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const directlyRepeatableDirectCycle = cycle;  ///

      rewrittenRule = RewrittenRule.fromDirectlyRepeatableDirectCycle(directlyRepeatableDirectCycle, context);

      rewrittenRules.push(rewrittenRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const cycleIndirectlyRepeatable = isCycleIndirectlyRepeatable(context);

      if (cycleIndirectlyRepeatable) {
        const indirectlyRepeatableIndirectCycle = cycle;  ///

        rewrittenRule = RewrittenRule.fromIndirectlyRepeatableIndirectCycle(indirectlyRepeatableIndirectCycle, context);

        rewrittenRules.push(rewrittenRule);
      } else {
        const indirectRuleName = context.getIndirectRuleName(),
              directlyRepeatableIndirectCycle = cycle;  ///

        rewrittenRule = RewrittenRule.fromDirectlyRepeatableIndirectCycle(directlyRepeatableIndirectCycle, context);

        rewrittenRules.push(rewrittenRule);

        rewrittenRule = RewrittenRule.fromIndirectRuleName(indirectRuleName, context);

        rewrittenRules.push(rewrittenRule);
      }

      break;
    }
  }

  return rewrittenRules;
}
