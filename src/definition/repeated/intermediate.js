"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import { intermediateRuleNameFromRuleNameAndIndirectRuleName, intermediateRuleNameFromRuleNameIndirectRuleNameAndNumber } from "../../utilities/ruleName";

const { first } = arrayUtilities,
      { RuleNamePart } = Parts;

export default class IntermediateRepeatedDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName, ruleMap) {
    const indirectRuleName = indirectRuleNameFromDefinition(definition),
          intermediateRuleName = intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          intermediateRuleNameRuleNamePart = RuleNamePart.fromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNameRuleNamePart
          ],
          precedence = definition.getPrecedence(),
          intermediateRepeatedDefinition = new IntermediateRepeatedDefinition(parts, precedence);

    return intermediateRepeatedDefinition;
  }

  static fromDefinitionRuleNameAndNumber(definition, ruleName, number, ruleMap) {
    const indirectRuleName = indirectRuleNameFromDefinition(definition),
          intermediateRuleName = intermediateRuleNameFromRuleNameIndirectRuleNameAndNumber(ruleName, indirectRuleName, number),
          intermediateRuleNameRuleNamePart = RuleNamePart.fromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNameRuleNamePart
          ],
          precedence = definition.getPrecedence(),
          intermediateRepeatedDefinition = new IntermediateRepeatedDefinition(parts, precedence);

    return intermediateRepeatedDefinition;
  }
}

export function indirectRuleNameFromDefinition(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        indirectRuleNamePart = firstPart, ///
        indirectRuleName = indirectRuleNamePart.getRuleName();

  return indirectRuleName;
}
