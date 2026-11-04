"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";

import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { isRuleSingular, isRuleRepeatable } from "../utilities/rule";
import { partsfromDefinition, isDefinitionSingular } from "../utilities/definition";

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
            indirectRuleName = context.getIndirectRuleName(),
            ruleSingular = isRuleSingular(rule, indirectRuleName, context),
            ruleRepeatable = isRuleRepeatable(rule, indirectRuleName, context);

      if (false) {
        ///
      } else if (ruleSingular) {
        const indirectlySingularRule = rule;  ///

        rewrittenRule = RewrittenRule.fromIndirectlySingularRule(indirectlySingularRule, context);

        rewrittenRules.push(rewrittenRule);
      } else if (ruleRepeatable) {
        const indirectlyRepeatableRule = rule;  ///

        rewrittenRule = RewrittenRule.fromIndirectlyRepeatableRule(indirectlyRepeatableRule, context);

        rewrittenRules.push(rewrittenRule);
      }

      const ruleName = context.getRuleName(),
            indirectRule = context.getIndirectRule(),
            indirectRuleRepeatable = isRuleRepeatable(indirectRule, ruleName, context);

      if (!indirectRuleRepeatable) {
        rewrittenRule = RewrittenRule.fromIndirectRule(indirectRule, context);

        rewrittenRules.push(rewrittenRule);
      }

      break;
    }
  }

  return rewrittenRules;
}
