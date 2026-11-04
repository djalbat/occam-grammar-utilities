"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";
import IndirectlyRewrittenDefinition from "../definition/rewritten/indirectly";

import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { partsfromDefinition, isDefinitionSingular } from "../utilities/definition";
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

  static fromIndirectlySingularRule(indirectlySingularRule, context) {
    const rule = indirectlySingularRule,  ///
          indirectRuleName = context.getIndirectRuleName(),
          rewrittenDefinitions = [];

    let definitions;

    definitions = rule.getDefinitions();

    definitions.forEach((definition) => {
      const definitionSingular = isDefinitionSingular(definition, indirectRuleName, context);

      if (definitionSingular) {
        const indirectlyRepeatedDefinition = definition,  ///
              rewrittenDefinition = RewrittenDefinition.fromIndirectlyRepeatedDefinition(indirectlyRepeatedDefinition, context);

        rewrittenDefinitions.push(rewrittenDefinition);
      }
    });

    const ruleName = context.getRuleName(),
          singular = true,
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, singular, context);

    rewrittenDefinitions.push(rewrittenDefinition);

    const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
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

  static fromIndirectlyRepeatableRuleAndIndirectlyReducibleIndirectRule(indirectlyRepeatableRule, indirectlyReducibleIndirectRule, context) {
    const rule = indirectlyRepeatableRule,  ///
          ruleName = rule.getName(),
          indirectRule = indirectlyReducibleIndirectRule,  ///
          indirectRuleName = indirectRule.getName(),
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, context),
          indirectlyRewrittenDefinition = IndirectlyRewrittenDefinition.fromRuleNameAndIndirectRuleName(ruleName, indirectRuleName, context),
          rewrittenDefinitions = [
            rewrittenDefinition,
            indirectlyRewrittenDefinition
          ],
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = null,
          definitions = rewrittenDefinitions, ///
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
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
            ruleName = context.getRuleName(),
            indirectRule = context.getIndirectRule(),
            indirectRuleName = context.getIndirectRuleName(),
            ruleSingular = isRuleSingular(rule, indirectRuleName, context),
            ruleRepeatable = isRuleRepeatable(rule, indirectRuleName, context),
            indirectRuleRedicible = isRuleReducible(indirectRule, indirectRuleName, context),
            indirectRuleRepeatable = isRuleRepeatable(indirectRule, ruleName, context);

      if (false) {
        ///
      } else if (ruleSingular) {
        const indirectlySingularRule = rule;  ///

        rewrittenRule = RewrittenRule.fromIndirectlySingularRule(indirectlySingularRule, context);

        rewrittenRules.push(rewrittenRule);
      } else if (ruleRepeatable) {
        const indirectlyRepeatableRule = rule;  ///

        if (indirectRuleRedicible) {
          const indirectlyReducibleIndirectRule = indirectRule;  ///

          rewrittenRule = RewrittenRule.fromIndirectlyRepeatableRuleAndIndirectlyReducibleIndirectRule(indirectlyRepeatableRule, indirectlyReducibleIndirectRule, context);

          rewrittenRules.push(rewrittenRule);
        } else {
          rewrittenRule = RewrittenRule.fromIndirectlyRepeatableRule(indirectlyRepeatableRule, context);

          rewrittenRules.push(rewrittenRule);
        }
      }

      if (!indirectRuleRepeatable) {
        rewrittenRule = RewrittenRule.fromIndirectRule(indirectRule, context);

        rewrittenRules.push(rewrittenRule);
      }

      break;
    }
  }

  return rewrittenRules;
}
