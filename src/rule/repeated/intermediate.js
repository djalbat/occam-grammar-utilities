"use strict";

import { Rule } from "occam-parsers";

import IntermediateRepeatedNode from "../../node/repeated/intermediate";
import IntermediateRepeatedDefinition from "../../definition/repeated/intermediate";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleRepeatable } from "../../utilities/rule";
import { intermediateRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";
import { isDefinitionRepeatable, isDefinitionSingular } from "../../utilities/definition";

export default class IntermediateRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IntermediateRepeatedNode; ///

    return NonTerminalNode;
  }

  static fromRuleAndIndirectRule(rule, indirectRule, context) {
    const ruleName = rule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const intermediateRepeatedDefinitions = definitions.reduce((intermediateRepeatedDefinitions, definition) => {
      const definitionSingular = isDefinitionSingular(definition, ruleName, context),
            definitionRepeatable = isDefinitionRepeatable(definition, ruleName, context);

      if (definitionSingular || definitionRepeatable) {
        const precedence = definition.getPrecedence(),
              indirectRuleName = indirectRule.getName(),
              intermediateRepeatedDefinition = IntermediateRepeatedDefinition.fromIndirectRuleNameAndPrecedence(indirectRuleName, precedence, context);

        intermediateRepeatedDefinitions.push(intermediateRepeatedDefinition);
      }

      return intermediateRepeatedDefinitions;
    }, []);

    const intermediateRepeatedRuleName = intermediateRepeatedRuleNameFromRuleName(ruleName),
          name = intermediateRepeatedRuleName, ///
          opacity = rule.getOpacity();

    definitions = intermediateRepeatedDefinitions;  ///

    const intermediateRepeatedRule = new IntermediateRepeatedRule(name, opacity, definitions);

    return intermediateRepeatedRule;
  }
}

export function intermediateRepeatedRulesFromCycleAndCycles(context, intermediateRepeatedRules = []) {
  const leftRecursiveCycleLength = context.getLeftRecursiveCycleLength();

  switch (leftRecursiveCycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectRule = context.getIndirectRule(),
            ruleRepeatable = isRuleRepeatable(rule, context);

      if (!ruleRepeatable) {
        const intermediateRepeatedRule = IntermediateRepeatedRule.fromRuleAndIndirectRule(rule, indirectRule, context);

        intermediateRepeatedRules.push(intermediateRepeatedRule);
      }

      break;
    }
  }

  return intermediateRepeatedRules;
}
