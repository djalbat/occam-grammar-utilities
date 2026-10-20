"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import { ruleNamesFromCycle } from "../utilities/cycle";
import { intermediateRuleNameFromRuleNameAndIndirectRuleName } from "../utilities/ruleName";

const { RuleNamePart } = Parts,
      { first, second } = arrayUtilities;

export default class IndirectDefinition extends Definition {
  static fromCycle(cycle, ruleMap) {
    const ruleNames = ruleNamesFromCycle(cycle),
          firstRuleName = first(ruleNames),
          secondRuleName = second(ruleNames),
          indirectRuleName = secondRuleName,  ///
          ruleName = firstRuleName, ///
          intermediateRuleName = intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          intermediateRuleNameRuleNamePart = RuleNamePart.fromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNameRuleNamePart
          ],
          precedence = null,
          indirectDefinition = new IndirectDefinition(parts, precedence);

    return indirectDefinition;
  }
}
