"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName, zeroOrMorePartsPartFromPart } from "../utilities/part";
import { reducedRuleNameFromRuleName, directlyRepeatedRuleNameFromRuleName } from "../utilities/ruleName";

export default class RewrittenDefinition extends Definition {
  static fromRuleName(ruleName) {
    const reducedRuleNamePart = reducedRuleNamePartFromRuleName(ruleName),
          directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName),
          parts = [
            reducedRuleNamePart,
            directlyRepeatedPart
          ],
          rewrittenDefinition = new RewrittenDefinition(parts);

    return rewrittenDefinition;
  }
}

function reducedRuleNamePartFromRuleName(ruleName) {
  const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
        reducedRuleNamePert = ruleNamePartFromRuleName(reducedRuleName);

  return reducedRuleNamePert;
}

function directlyRepeatedPartFromRuleName(ruleName) {
  const directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
        directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
        zeroOrMoreDirectlyRepeatedRuleNamePartsPart = zeroOrMorePartsPartFromPart(directlyRepeatedRuleNamePart),
        directlyRepeatedPart = zeroOrMoreDirectlyRepeatedRuleNamePartsPart; ///

  return directlyRepeatedPart;
}
