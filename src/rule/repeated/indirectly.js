"use strict";

import { Rule } from "occam-parsers";

import RepeatedNode from "../../node/repeated";
import IndirectlyRepeatedDefinition from "../../definition/repeated/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleRepeatable } from "../../utilities/rule";
import { repeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";
import { isDefinitionRepeatable, isDefinitionSingular } from "../../utilities/definition";

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

    return NonTerminalNode;
  }

  static fromIndirectRuleAndRule(indirectRule, rule, context) {
    const indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyRepeatedDefinitions = definitions.reduce((indirectlyRepeatedDefinitions, definition) => {
      const definitionSingular = isDefinitionSingular(definition, indirectRuleName, context),
            definitionRepeatable = isDefinitionRepeatable(definition, indirectRuleName, context);

      if (definitionSingular || definitionRepeatable) {
        const ruleName = rule.getName(),
              precedence = definition.getPrecedence(),
              indirectlyRepeatedDefinition = IndirectlyRepeatedDefinition.fromRuleNameAndPrecedence(ruleName, precedence, context);

        indirectlyRepeatedDefinitions.push(indirectlyRepeatedDefinition);
      }

      return indirectlyRepeatedDefinitions;
    }, []);

    const repeatedRuleName = repeatedRuleNameFromIndirectRuleName(indirectRuleName),
          name = repeatedRuleName, ///
          opacity = indirectRule.getOpacity();

    definitions = indirectlyRepeatedDefinitions;  ///

    const indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions);

    return indirectlyRepeatedRule;
  }
}

export function indirectlyRepeatedRulesFromCycleAndCycles(context, indirectlyRepeatedRules = []) {
  const leftRecursiveCycleLength = context.getLeftRecursiveCycleLength();

  switch (leftRecursiveCycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectRule = context.getIndirectRule(),
            ruleRepeatable = isRuleRepeatable(rule, context);

      if (ruleRepeatable) {
        const indirectlyRepeatedRule = IndirectlyRepeatedRule.fromIndirectRuleAndRule(indirectRule, rule, context);

        indirectlyRepeatedRules.push(indirectlyRepeatedRule);
      }

      break;
    }
  }

  return indirectlyRepeatedRules;
}
