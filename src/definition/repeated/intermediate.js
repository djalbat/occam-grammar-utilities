"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import { intermediateRuleNameFromRuleNameAndIndirectRuleName } from "../../utilities/ruleName";

const { first } = arrayUtilities,
      { RuleNamePart } = Parts;

export default class IntermediateRepeatedDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName, ruleMap) {
    let parts;

    parts = definition.getParts();

    const firstPart = first(parts),
          indirectRuleNamePart = firstPart, ///
          indirectRuleName = indirectRuleNamePart.getRuleName(),  ///
          intermediateRuleName = intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          intermediateRuleNameRuleNamePart = RuleNamePart.fromRuleName(intermediateRuleName);

    parts = [
      intermediateRuleNameRuleNamePart
    ];

    const precedence = definition.getPrecedence(),
          intermediateRepeatedDefinition = new IntermediateRepeatedDefinition(parts, precedence);

    return intermediateRepeatedDefinition;
  }
}
