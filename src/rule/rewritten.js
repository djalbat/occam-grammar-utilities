"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";
import IndirectlyRewrittenDefinition from "../definition/rewritten/indirectly";

import { partsfromDefinition } from "../utilities/definition";
import { isRuleIndirectlyRepeatable } from "../utilities/rule";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { rewrittenDefinitionsFromDefinitions } from "../definition/rewritten";

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

  static fromIndirectRule(indirectRule, context) {
    let definitions;

    definitions = indirectRule.getDefinitions();

    definitions = definitions.map((definition) => {
      const parts = partsfromDefinition(definition, context),
            precedence = definition.getPrecedence();

      definition = Definition.fromPartsAndPrecedence(parts, precedence);

      return definition;
    });

    const indirectRuleName = indirectRule.getName(),
          ruleName = indirectRuleName,  ///
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName,  ///
          opacity = indirectRule.getOpacity(),
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }

  static fromDirectlyRepeatableRule(directlyRepeatableRule, context) {
    const rule = directlyRepeatableRule,  ///
          ruleName = rule.getName(),
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

  static fromIndirectlyRepeatableRule(indirectlyRepeatableRule, context) {
    const ruleName = context.getRuleName(),
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, context),
          rewrittenDefinitions = [
            rewrittenDefinition
          ],
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = null,
          definitions = rewrittenDefinitions, ///
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }

  // static fromDirectlyRepeatableIndirectCycle(directlyRepeatableIndirectcycle, context) {
  //   let definitions = [];
  //
  //   const cycle = context.getCycle(),
  //         ruleMap = context.getRuleMap(),
  //         ruleName = context.getRuleName(),
  //         rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, ruleMap);
  //
  //   definitions.push(rewrittenDefinition);
  //
  //   const cycleIndirectlyReducible = isCycleIndirectlyReducible(context);
  //
  //   if (cycleIndirectlyReducible) {
  //     const indirectlyRewrittenDefinition = IndirectlyRewrittenDefinition.fromCycle(cycle, context);
  //
  //     definitions.push(indirectlyRewrittenDefinition);
  //   }
  //
  //   const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
  //         name = rewrittenRuleName, ///
  //         opacity = null,
  //         rewrittenRule = new RewrittenRule(name, opacity, definitions);
  //
  //   return rewrittenRule;
  // }
}

export function rewrittenRulesFromCycleAndCycles(context, rewrittenRules = []) {
  const cycleLength = context.getCycleLength();

  let rewrittenRule;

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            directlyRepeatableRule = rule;  ///

      rewrittenRule = RewrittenRule.fromDirectlyRepeatableRule(directlyRepeatableRule, context);

      rewrittenRules.push(rewrittenRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            ruleIndirectlyRepeatable = isRuleIndirectlyRepeatable(rule, context);

      if (ruleIndirectlyRepeatable) {
        const indirectlyRepeatableRule = rule;  ///

        rewrittenRule = RewrittenRule.fromIndirectlyRepeatableRule(indirectlyRepeatableRule, context);

        rewrittenRules.push(rewrittenRule);
      }

      const indirectRule = context.getIndirectRule(),
            indirectRuleIndirectlyRepeatable = isRuleIndirectlyRepeatable(indirectRule, context);

      if (!indirectRuleIndirectlyRepeatable) {
        rewrittenRule = RewrittenRule.fromIndirectRule(indirectRule, context);

        rewrittenRules.push(rewrittenRule);
      }

      break;
    }
  }

  return rewrittenRules;
}
