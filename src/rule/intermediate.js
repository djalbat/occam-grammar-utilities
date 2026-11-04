"use strict";

import { Rule } from "occam-parsers";

import IntermediateNode from "../node/intermediate";

import { CYCLE_LENGTH_2 } from "../constants";
import { isRuleRepeatable } from "../utilities/rule";
import { isDefinitionSingular, isDefinitionRepeatable } from "../utilities/definition";
import { repeatedDefinitionsFromPDefinitionAndPrecedences } from "../definition/repeated";
import { intermediateRuleNameFromRuleNameAndIndirectRuleName, intermediateRuleNameFromRuleNameIndirectRuleNameAndIndex } from "../utilities/ruleName";

export default class IntermediateRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IntermediateNode; ///

    return NonTerminalNode;
  }

  static fromDefinitionAndIndex(definition, index, context) {
    const ruleName = context.getRuleName(),
          indirectRuleName = context.getIndirectRuleName(),
          intermediateRuleName = (index > 0) ?
                                   intermediateRuleNameFromRuleNameIndirectRuleNameAndIndex(ruleName, indirectRuleName, index) :
                                     intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          indirectRule = context.getIndirectRule(),
          precedences = precedencesFromIndirectRule(indirectRule, context),
          repeatedDefinitions = repeatedDefinitionsFromPDefinitionAndPrecedences(definition, precedences, context),
          name = intermediateRuleName,  ///
          opacity = indirectRule.getOpacity(),
          definitions = repeatedDefinitions,  ///
          intermediateRule = new IntermediateRule(name, opacity, definitions);

    return intermediateRule;
  }
}

export function intermediateRulesFromCycleAndCycles(context, intermediateRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectRuleName = context.getIndirectRuleName(),
            ruleRepeatable = isRuleRepeatable(rule, indirectRuleName, context);

      if (ruleRepeatable) {
        const rule = context.getRule(),
              definitions = rule.getDefinitions(),
              indirectRuleName = context.getIndirectRuleName();

        let index = 0;

        definitions.forEach((definition) => {
          const definitionRepeatable = isDefinitionRepeatable(definition, indirectRuleName, context);

          if (definitionRepeatable) {
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

function precedencesFromIndirectRule(indirectRule, context) {
  const ruleName = context.getRuleName(),
        definitions = indirectRule.getDefinitions(),
        precedences = definitions.reduce((precedences, definition) => {
          const definitionSingular = isDefinitionSingular(definition, ruleName, context);

          if (definitionSingular) {
            const precedence = definition.getPrecedence();

            precedences.push(precedence);
          }

          return precedences;
        }, []);

  return precedences;
}