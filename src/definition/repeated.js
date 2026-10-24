"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import { replaceRuleNameParts } from "../utilities/parts";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";

const { tail } = arrayUtilities,
      { RuleNamePart } = Parts;

export default class RepeatedDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName, ruleMap) {
    const parts = partsfromDefinitionAndRuleName(definition, ruleName),
          precedence = definition.getPrecedence(),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    isRepeatedDefinitionConsuming(repeatedDefinition, ruleMap);

    return repeatedDefinition;
  }

  static fromDefinitionRuleNameAndPrecedence(definition, ruleName, precedence, ruleMap) {
    const parts = partsfromDefinitionAndRuleName(definition, ruleName),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    isRepeatedDefinitionConsuming(repeatedDefinition, ruleMap);

    return repeatedDefinition;
  }
}

function isRepeatedDefinitionConsuming(repeatedDefinition, ruleMap) {
  const visitedRules = [],
        checkForCutParts = true;

  repeatedDefinition.isConsuming(ruleMap, visitedRules, checkForCutParts);
}

function partsfromDefinitionAndRuleName(definition, ruleName) {
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

  return parts;
}
