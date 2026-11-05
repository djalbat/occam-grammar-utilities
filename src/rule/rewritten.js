"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";
import IndirectlyRewrittenDefinition from "../definition/rewritten/indirectly";

import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { rewrittenDefinitionsFromDefinitionsAndRuleName } from "../definition/rewritten";
import { isRuleSingular, isRuleRepeatable, isRuleReducible } from "../utilities/rule";

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

  static fromIndirectlySingularRule(indirectlySingularRule, context) {
    const rule = indirectlySingularRule,  ///
          ruleName = rule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const singular = true,
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, singular, context),
          rewrittenDefinitions = rewrittenDefinitionsFromDefinitionsAndRuleName(definitions, ruleName, context);

    rewrittenDefinitions.push(rewrittenDefinition);

    const name = rewrittenRuleName, ///
          opacity = null;

    definitions = rewrittenDefinitions; ///

    const rewrittenRule = new RewrittenRule(name, opacity, definitions);

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
    const rule = indirectlyRepeatableRule,  ///
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

  static fromIndirectlyRepeatableRuleAndIndirectRule(indirectlyRepeatableRule, indirectRule, context) {
    const rule = indirectlyRepeatableRule,  ///
          ruleName = rule.getName(),
          indirectRuleName = indirectRule.getName(),
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, context),
          indirectlyRewrittenDefinition = IndirectlyRewrittenDefinition.fromRuleNameAndIndirectRuleName(ruleName, indirectRuleName, context),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = null,
          definitions = [
            rewrittenDefinition,
            indirectlyRewrittenDefinition
          ],
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}

export function rewrittenRulesFromCycleAndCycles(context, rewrittenRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            directlyRepeatableRule = rule,  ///
            rewrittenRule = RewrittenRule.fromDirectlyRepeatableRule(directlyRepeatableRule, context);

      rewrittenRules.push(rewrittenRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            ruleSingular = isRuleSingular(rule, context),
            ruleRepeatable = isRuleRepeatable(rule, context);

      if (false) {
        ///
      } else if (ruleSingular) {
        const indirectlySingularRule = rule,  ///
              rewrittenRule = RewrittenRule.fromIndirectlySingularRule(indirectlySingularRule, context);

        rewrittenRules.push(rewrittenRule);
      } else if (ruleRepeatable) {
        const indirectRule = context.getIndirectRule(),
              indirectRuleReducible = isRuleReducible(indirectRule, context),
              indirectlyRepeatableRule = rule,  ///
              rewrittenRule = indirectRuleReducible ?
                                RewrittenRule.fromIndirectlyRepeatableRuleAndIndirectRule(indirectlyRepeatableRule, indirectRule, context) :
                                  RewrittenRule.fromIndirectlyRepeatableRule(indirectlyRepeatableRule, context);

        rewrittenRules.push(rewrittenRule);
      }

      break;
    }
  }

  return rewrittenRules;
}
