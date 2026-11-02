"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { indirectRuleNameFromDefinition } from "../../utilities/definition";
import { intermediateRuleNameFromRuleNameAndIndirectRuleName, intermediateRuleNameFromRuleNameIndirectRuleNameAndNumber } from "../../utilities/ruleName";

export default class IntermediateRepeatedDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName, context) {
    const indirectRuleName = indirectRuleNameFromDefinition(definition),
          intermediateRuleName = intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          intermediateRuleNameRuleNamePart = ruleNamePartFromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNameRuleNamePart
          ],
          precedence = definition.getPrecedence(),
          intermediateRepeatedDefinition = new IntermediateRepeatedDefinition(parts, precedence);

    return intermediateRepeatedDefinition;
  }

  static fromDefinitionRuleNameAndNumber(definition, ruleName, number, context) {
    const indirectRuleName = indirectRuleNameFromDefinition(definition),
          intermediateRuleName = intermediateRuleNameFromRuleNameIndirectRuleNameAndNumber(ruleName, indirectRuleName, number),
          intermediateRuleNameRuleNamePart = ruleNamePartFromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNameRuleNamePart
          ],
          precedence = definition.getPrecedence(),
          intermediateRepeatedDefinition = new IntermediateRepeatedDefinition(parts, precedence);

    return intermediateRepeatedDefinition;
  }
}
