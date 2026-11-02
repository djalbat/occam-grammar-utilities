"use strict";

import { Rule } from "occam-parsers";

import IntermediateNode from "../node/intermediate";
import RepeatedDefinition from "../definition/repeated";

import { CYCLE_LENGTH_2 } from "../constants";
import { isDefinitionIndirectlyRepeatable } from "../utilities/definition";
import { filterDefinitions, isCycleIndirectlyRepeatable } from "../utilities/cycle";
import { intermediateRuleNameFromRuleNameAndIndirectRuleName, intermediateRuleNameFromRuleNameIndirectRuleNameAndNumber } from "../utilities/ruleName";

export default class IntermediateRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IntermediateNode; ///

    return NonTerminalNode;
  }

  static fromDefinition(definition, context) {
    const ruleName = context.getRuleName(),
          indirectRuleName = context.getIndirectRuleName(),
          intermediateRuleName = intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          indirectRule = context.getIndirectRule(),
          name = intermediateRuleName,  ///
          opacity = indirectRule.getOpacity(),
          definitions = [
            definition
          ],
          intermediateRule = new IntermediateRule(name, opacity, definitions);

    return intermediateRule;
  }

  static fromDefinitionAndNumber(definition, number, context) {
    const ruleName = context.getRuleName(),
          indirectRuleName = context.getIndirectRuleName(),
          intermediateRuleName = intermediateRuleNameFromRuleNameIndirectRuleNameAndNumber(ruleName, indirectRuleName, number),
          indirectRule = context.getIndirectRule(),
          name = intermediateRuleName,  ///
          opacity = indirectRule.getOpacity(),
          definitions = [
            definition
          ],
          intermediateRule = new IntermediateRule(name, opacity, definitions);

    return intermediateRule;
  }
}

export function intermediateRulesFromCycleAndCycles(context, intermediateRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const cycleIndirectlyRepeatable = isCycleIndirectlyRepeatable(context);

      if (!cycleIndirectlyRepeatable) {
        const cycle = context.getCycle(),
              definitions = definitionsFromCycle(cycle, context),
              definitionsLength = definitions.length;

        definitions.forEach((definition, index) => {
          const number = index + 1,
                intermediateRule = (definitionsLength === 1) ?
                                     IntermediateRule.fromDefinition(definition, context) :
                                       IntermediateRule.fromDefinitionAndNumber(definition, number, context);

          intermediateRules.push(intermediateRule);
        });
      }

      break;
    }
  }

  return intermediateRules;
}

function definitionsFromCycle(cycle, context) {
  const intermediateDefinitions = intermediateDefinitionsFromCycle(cycle, context),
        definitions = intermediateDefinitions;  ///

  return definitions;
}

function intermediateDefinitionsFromCycle(cycle, context) {
  const intermediateDefinitions = [],
        indirectRule = context.getIndirectRule(),
        definitions = indirectRule.getDefinitions();

  definitions.forEach((definition) => {
    const definitionLeftRepeatable = isDefinitionIndirectlyRepeatable(definition, context);

    if (definitionLeftRepeatable) {
      const rule = context.getRule(),
            precedence = definition.getPrecedence();

      let definitions = rule.getDefinitions();

      definitions = filterDefinitions(definitions, context); ///

      definitions.forEach((definition) => {
        const repeatedDefinition = RepeatedDefinition.fromDefinitionAndPrecedence(definition, precedence, context),
              intermediateDefinition = repeatedDefinition;  ///

        intermediateDefinitions.push(intermediateDefinition);
      });
    }
  });

  return intermediateDefinitions;
}
