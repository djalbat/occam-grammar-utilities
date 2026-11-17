"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RepeatedNode from "../../node/repeated";

import { CYCLE_LENGTH_2 } from "../../constants";
import { repeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";
import { indirectlyRepeatedDefinitionsFromDefinitionsRuleNamePrecedenceAndIndirectRuleName } from "../../definition/repeated/indirectly";

const { push } = arrayUtilities;

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

    return NonTerminalNode;
  }

  static fromIndirectRuleAndRule(indirectRule, rule, context) {
    const indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    definitions = definitions.reduce((definitions, definition) => {
      const precedence = definition.getPrecedence(),
            indirectlyRepeatedDefinitions = indirectlRepeatedDefinitionsFromRulePrecedenceAndIndirectRuleName(rule, precedence, indirectRuleName, context);

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
            indirectlyRepeatedRule = IndirectlyRepeatedRule.fromIndirectRuleAndRule(indirectRule, rule, context);

      indirectlyRepeatedRules.push(indirectlyRepeatedRule);

      break;
    }
  }

  return indirectlyRepeatedRules;
}

function indirectlRepeatedDefinitionsFromRulePrecedenceAndIndirectRuleName(rule, precedence, indirectRuleName, context) {
  let definitions;

  definitions = rule.getDefinitions();

  const ruleName = rule.getName(),
        indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitionsRuleNamePrecedenceAndIndirectRuleName(definitions, ruleName, precedence, indirectRuleName, context);

  return indirectlyRepeatedDefinitions;
}