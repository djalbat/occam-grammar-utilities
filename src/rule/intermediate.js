"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import IntermediateNode from "../node/intermediate";
import RepeatedDefinition from "../definition/repeated";

import { CYCLE_LENGTH_1 } from "../constants";
import { filterDefinitions } from "../rule/repeated";
import { ruleNamesFromCycle } from "../utilities/cycle";
import { isDefinitionReducible } from "../utilities/definition";
import { intermediateRuleNameFromRuleNameAndIndirectRuleName } from "../utilities/ruleName";

const { first, second } = arrayUtilities;

export default class IntermediateRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IntermediateNode; ///

    return NonTerminalNode;
  }

  static fromCycleAndCycles(cycle, cycles, ruleMap) {
    let intermediateRule = null;

    const length = cycle.getLength();

    if (length > CYCLE_LENGTH_1) {
      const ruleNames = ruleNamesFromCycle(cycle),
            firstRuleName = first(ruleNames),
            secondRuleName = second(ruleNames),
            indirectRuleName = secondRuleName,  ///
            ruleName = firstRuleName, ///
            rule = ruleMap[ruleName],
            indirectRule = ruleMap[indirectRuleName],
            intermediateRuleName = intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
            intermediateDefinitions = intermediateDefinitionsFromRuleIndirectRuleAndCycles(rule, indirectRule, cycles, ruleMap),
            name = intermediateRuleName,  ///
            opacity = indirectRule.getOpacity(),
            definitions = intermediateDefinitions;  ///

      intermediateRule = new IntermediateRule(name, opacity, definitions);
    }

    return intermediateRule;
  }
}

function intermediateDefinitionsFromRuleIndirectRuleAndCycles(rule, indirectRule, cycles, ruleMap) {
  const intermediateDefinitions = [],
        indirectRuleName = indirectRule.getName(),
        definitions = indirectRule.getDefinitions();

  definitions.forEach((definition) => {
    const definitionLeftRepeatable = isDefinitionIndirectlyRepeatable(definition, indirectRuleName, cycles, ruleMap);

    if (definitionLeftRepeatable) {
      const ruleName = rule.getName(),
            precedence = definition.getPrecedence();

      let definitions = rule.getDefinitions();

      definitions = filterDefinitions(definitions, ruleName, indirectRuleName, cycles, ruleMap);

      definitions.forEach((definition) => {
        const repeatedDefinition = RepeatedDefinition.fromDefinitionRuleNameAndPrecedence(definition, ruleName, precedence, ruleMap),
              intermediateDefinition = repeatedDefinition;  ///

        intermediateDefinitions.push(intermediateDefinition);
      });
    } else {
      const intermediateDefinition = definition;  ///

      intermediateDefinitions.push(intermediateDefinition);
    }
  });

  return intermediateDefinitions;
}

function isDefinitionIndirectlyRepeatable(definition, indirectRuleName, cycles, ruleMap) {
  const ruleName = indirectRuleName,  ///
        definitionReducible = isDefinitionReducible(definition, ruleName, cycles, ruleMap),
        definitionIndirectlyRepeatable = !definitionReducible;

  if (definitionIndirectlyRepeatable) {
    const parts = definition.getParts(),
          firstPart = first(parts),
          firstPartRuleNamePart = firstPart.isRuleNamePart();

    if (!firstPartRuleNamePart) {
      const firstPartString = firstPart.asString(),
            definitionString = definition.asString();

      throw new Error(`The '${firstPartString}' first part of the '${definitionString}' definition is not a rule name part.`);
    }
  }

  return definitionIndirectlyRepeatable;
}
