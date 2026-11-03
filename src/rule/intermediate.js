"use strict";

import { Rule } from "occam-parsers";

import IntermediateNode from "../node/intermediate";

import { CYCLE_LENGTH_2 } from "../constants";
import { isRuleIndirectlyRepeatable } from "../utilities/rule";
import { isDefinitionIndirectlyRepeatable } from "../utilities/definition";
import { repeatedDefinitionsFromDefinitionsAndPrecedence } from "../definition/repeated";
import { intermediateRuleNameFromRuleNameAndIndirectRuleName, intermediateRuleNameFromRuleNameIndirectRuleNameAndIndex } from "../utilities/ruleName";

export default class IntermediateRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IntermediateNode; ///

    return NonTerminalNode;
  }

  static fromDefinitionAndIndex(definition, index, context) {
    const rule = context.getRule(),
          ruleName = context.getRuleName(),
          indirectRuleName = context.getIndirectRuleName(),
          intermediateRuleName = (index > 0) ?
                                   intermediateRuleNameFromRuleNameIndirectRuleNameAndIndex(ruleName, indirectRuleName, index) :
                                     intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          indirectRule = context.getIndirectRule();

    let definitions;

    definitions = rule.getDefinitions();

    const precedence = definition.getPrecedence(),
          repeatedDefinitions = repeatedDefinitionsFromDefinitionsAndPrecedence(definitions, precedence, context);

    definitions = repeatedDefinitions;  ///

    const name = intermediateRuleName,
          opacity = indirectRule.getOpacity(),
          intermediateRule = new IntermediateRule(name, opacity, definitions);

    return intermediateRule;
  }
}

export function intermediateRulesFromCycleAndCycles(context, intermediateRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            ruleIndirectlyRepeatedRule = isRuleIndirectlyRepeatable(rule, context);

      if (ruleIndirectlyRepeatedRule) {
        const definitions = rule.getDefinitions();

        let index = 0;

        definitions.forEach((definition) => {
          const definitionIndirectlyRepeatableRule = isDefinitionIndirectlyRepeatable(definition, context);

          if (definitionIndirectlyRepeatableRule) {
            const intermediateRule = IntermediateRule.fromDefinitionAndIndex(definition, index, context);

            intermediateRules.push(intermediateRule);

            index++;
          }
        });
      }

      break;
    }
  }

  return intermediateRules;
}
