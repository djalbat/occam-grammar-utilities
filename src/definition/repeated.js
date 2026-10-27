"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import { replaceRuleNameParts } from "../utilities/parts";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";

const { tail } = arrayUtilities,
      { RuleNamePart } = Parts;

export default class RepeatedDefinition extends Definition {
  static fromDefinitionAndRuleNames(definition, ruleNames, ruleMap) {
    const parts = partsfromDefinitionAndRuleNames(definition, ruleNames),
          precedence = definition.getPrecedence(),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    isRepeatedDefinitionConsuming(repeatedDefinition, ruleMap);

    return repeatedDefinition;
  }
}

export function partsfromPartsAndRuleNames(parts, ruleNames) {
  parts = replaceRuleNameParts(parts, (ruleNamePart) => { ///
    const ruleNamePartRuleName = ruleNamePart.getRuleName(),
          ruleNamesIncludesRuleNamePartRuleName = ruleNames.includes(ruleNamePartRuleName);

    if (ruleNamesIncludesRuleNamePartRuleName) {
      const ruleName = ruleNamePartRuleName,  ///
            rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
            rewrittenRuleNamePart = RuleNamePart.fromRuleName(rewrittenRuleName);

      ruleNamePart = rewrittenRuleNamePart; ///
    }

    return ruleNamePart;
  });

  return parts;
}

function partsfromDefinitionAndRuleNames(definition, ruleNames) {
  let parts = definition.getParts();

  const tailParts = tail(parts);

  parts = tailParts;  ///

  parts = partsfromPartsAndRuleNames(parts, ruleNames); ///

  return parts;
}

function isRepeatedDefinitionConsuming(repeatedDefinition, ruleMap) {
  const visitedRules = [],
        checkForCutParts = true;

  repeatedDefinition.isConsuming(ruleMap, visitedRules, checkForCutParts);
}
