"use strict";

import { Parts } from "occam-parsers";

import { replaceRuleNameParts } from "../utilities/parts";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";

const { RuleNamePart } = Parts;

export function rewriteRuleNameParts(parts, ruleNames) {
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