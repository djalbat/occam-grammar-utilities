"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RepeatedNode from "../../node/repeated";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleRepeatable } from "../../utilities/rule";
import { repeatedRuleNameFromRuleName, repeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";
import { indirectlyRepeatedDefinitionsFromDefinitionsRuleNameIndirectRuleNameAndPrecedence,
         indirectlyRepeatedDefinitionsFromDefinitionsIndirectRuleNameRuleNameAndPrecedence } from "../../definition/repeated/indirectly";

const { push } = arrayUtilities;

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

    return NonTerminalNode;
  }

  static fromRuleAndIndirectRule(rule, indirectRule, context) {
    const ruleName = rule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    definitions = definitions.reduce((definitions, definition) => {
      const precedence = definition.getPrecedence(),
            indirectlyRepeatedDefinitions = indirectlRepeatedDefinitionsFromIndirectRuleRuleNameAndPrecedence(indirectRule, ruleName, precedence, context);

      push(definitions, indirectlyRepeatedDefinitions);

      return definitions;
    }, []);

    const repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity(),
          indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions);

    return indirectlyRepeatedRule;
  }

  static fromIndirectRuleAndRule(indirectRule, rule, context) {
    const indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    definitions = definitions.reduce((definitions, definition) => {
      const precedence = definition.getPrecedence(),
            indirectlyRepeatedDefinitions = indirectlRepeatedDefinitionsFromRuleIndirectRuleNameAndPrecedence(rule, indirectRuleName, precedence, context);

      push(definitions, indirectlyRepeatedDefinitions);

      return definitions;
    }, []);

    const repeatedRuleName = repeatedRuleNameFromIndirectRuleName(indirectRuleName),
          name = repeatedRuleName, ///
          opacity = indirectRule.getOpacity(),
          indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions);

    return indirectlyRepeatedRule;
  }
}

export function indirectlyRepeatedRulesFromCycleAndCycles(context, indirectlyRepeatedRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectRule = context.getIndirectRule(),
            ruleRepeatable = isRuleRepeatable(rule, context),
            indirectRuleRepeatable = isRuleRepeatable(indirectRule, context);

      if (ruleRepeatable) {
        const indirectlyRepeatedRule = IndirectlyRepeatedRule.fromIndirectRuleAndRule(indirectRule, rule, context);

        indirectlyRepeatedRules.push(indirectlyRepeatedRule);
      }

      if (indirectRuleRepeatable) {
        const indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleAndIndirectRule(rule, indirectRule, context);

        indirectlyRepeatedRules.push(indirectlyRepeatedRule);
      }

      break;
    }
  }

  return indirectlyRepeatedRules;
}

function indirectlRepeatedDefinitionsFromIndirectRuleRuleNameAndPrecedence(indirectRule, ruleName, precedence, context) {
  let definitions;

  definitions = indirectRule.getDefinitions();

  const indirectRuleName = indirectRule.getName(),
        indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitionsIndirectRuleNameRuleNameAndPrecedence(definitions, indirectRuleName, ruleName, precedence, context);

  return indirectlyRepeatedDefinitions;
}

function indirectlRepeatedDefinitionsFromRuleIndirectRuleNameAndPrecedence(rule, indirectRuleName, precedence, context) {
  let definitions;

  definitions = rule.getDefinitions();

  const ruleName = rule.getName(),
        indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitionsRuleNameIndirectRuleNameAndPrecedence(definitions, ruleName, indirectRuleName, precedence, context);

  return indirectlyRepeatedDefinitions;
}