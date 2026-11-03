"use strict";

import { Rule } from "occam-parsers";

import IntermediateNode from "../node/intermediate";

import { CYCLE_LENGTH_2 } from "../constants";
import { isRuleIndirectlyRepeatable } from "../utilities/rule";
import { repeatedDefinitionsFromPDefinitionAndPrecedences } from "../definition/repeated";
import { isDefinitionIndirectlySingular, isDefinitionIndirectlyRepeatable } from "../utilities/definition";
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
            ruleIndirectlyRepeatedRule = isRuleIndirectlyRepeatable(rule, context);

      if (ruleIndirectlyRepeatedRule) {
        const rule = context.getRule(),
              definitions = rule.getDefinitions();

        let index = 0;

        definitions.forEach((definition) => {
          const definitionIndirectlyRepeatable = isDefinitionIndirectlyRepeatable(definition, context);

          if (definitionIndirectlyRepeatable) {
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
  context.permuteCycle();

  const definitions = indirectRule.getDefinitions(),
        precedences = definitions.reduce((precedences, definition) => {
          const definitionIndirectlySingular = isDefinitionIndirectlySingular(definition, context);

          if (definitionIndirectlySingular) {
            const precedence = definition.getPrecedence();

            precedences.push(precedence);
          }

          return precedences;
        }, []);

  context.permuteCycle();

  return precedences;
}