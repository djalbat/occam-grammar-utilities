"use strict";

import { Definition } from "occam-parsers";
import { forEachRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleNames";
import { ruleNamePartFromRuleName, zeroOrMorePartsPartFromPart } from "../../utilities/part";
import { directlyRepeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";

export default class DirectlyRepeatedDefinition extends Definition {
  static fromRuleAndCycle(rule, cycle) {
    let directlyRepeatedDefinition = null;

    const ruleName = rule.getName(),
          ruleNames = cycle,  ///
          ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

    if (ruleNamesIncludesRuleName) {
      const parts = partsFromRuleNames(ruleNames);

      directlyRepeatedDefinition = new DirectlyRepeatedDefinition(parts);
    }

    return directlyRepeatedDefinition;
  }
}

function permuteRuleNames(ruleNames) {
  ruleNames = ruleNames.slice();

  ruleNames.reverse();

  const ruleName = ruleNames.pop();

  ruleNames.unshift(ruleName);

  return ruleNames;
}

function partsFromRuleNames(ruleNames) {
  const parts = [];

  ruleNames = permuteRuleNames(ruleNames);

  forEachRuleNameAndLeftRecursiveRuleName(ruleNames, (ruleName, leftRecursiveRuleName) => {
    const tempRuleName = leftRecursiveRuleName; ///

    leftRecursiveRuleName = ruleName; ///

    ruleName = tempRuleName;  ///

    const indirectlyRepeatedPart = indirectlyRepeatedPartFromRuleNameAndLeftReucrsiveRuleName(ruleName, leftRecursiveRuleName),
          directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName);

    parts.push(indirectlyRepeatedPart);

    parts.push(directlyRepeatedPart);
  });

  parts.pop();

  return parts;
}

function directlyRepeatedPartFromRuleName(ruleName) {
  const directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
        directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
        zeroOrMoreDirectlyRepeatedRuleNamePartsPart = zeroOrMorePartsPartFromPart(directlyRepeatedRuleNamePart),
        directlyRepeatedPart = zeroOrMoreDirectlyRepeatedRuleNamePartsPart; ///

  return directlyRepeatedPart;
}

function indirectlyRepeatedPartFromRuleNameAndLeftReucrsiveRuleName(ruleName, leftRecursiveRuleName) {
  const indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
        indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
        indirectlyRepeatedPart = indirectlyRepeatedRuleNamePart;  ///

  return indirectlyRepeatedPart;
}
