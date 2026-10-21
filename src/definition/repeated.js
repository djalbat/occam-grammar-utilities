"use strict";

import { Parts, Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { replaceRuleNameParts } from "../utilities/parts";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";

const { tail } = arrayUtilities,
      { RuleNamePart } = Parts;

export default class RepeatedDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName, ruleMap) {
    let parts = definition.getParts();

    const tailParts = tail(parts);

    parts = tailParts;  ///

    parts = replaceRuleNameParts(parts, (ruleNamePart) => { ///
      const ruleNamePartRuleName = ruleNamePart.getRuleName();

      if (ruleNamePartRuleName === ruleName) {
        const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
              rewrittenRuleNamePart = RuleNamePart.fromRuleName(rewrittenRuleName);

        ruleNamePart = rewrittenRuleNamePart; ///
      }

      return ruleNamePart;
    });

    const precedence = definition.getPrecedence(),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    const visitedRules = [],
          checkForCutParts = true;

    repeatedDefinition.isConsuming(ruleMap, visitedRules, checkForCutParts);

    return repeatedDefinition;
  }
}
