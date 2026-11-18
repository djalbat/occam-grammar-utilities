"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { intermediateRuleNameFromRuleName } from "../../utilities/ruleName";

export default class IndirectlyRepeatedDefinition extends Definition {
  static fromRuleNameAndPrecedence(ruleName, precedence, context) {
    const intermediateRuleName = intermediateRuleNameFromRuleName(ruleName),
          intermediateRuleNamePart = ruleNamePartFromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNamePart
          ],
          indirectlyRepeatedDefinition = new IndirectlyRepeatedDefinition(parts, precedence);

    return indirectlyRepeatedDefinition;
  }
}
