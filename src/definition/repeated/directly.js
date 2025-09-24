"use strict";

import { Definition } from "occam-parsers";
import { forEachRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleNames";
import { ruleNamesFromCycle, pathFromRuleNameAndCycle } from "../../utilities/cycle";
import { ruleNamePartFromRuleName, zeroOrMorePartsPartFromPart } from "../../utilities/part";
import { directlyRepeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";

export default class DirectlyRepeatedDefinition extends Definition {
  static fromRuleAndCycle(rule, cycle) {
    let directlyRepeatedDefinition = null;

    const ruleName = rule.getName(),
          ruleNames = ruleNamesFromCycle(cycle),
          ruleNameIncludesRuleName = ruleNames.includes(ruleName);

    if (ruleNameIncludesRuleName) {
      const path = pathFromRuleNameAndCycle(ruleName, cycle),
            parts = partsFromPath(path),
            precedence = null;

      directlyRepeatedDefinition = new DirectlyRepeatedDefinition(parts, precedence);
    }

    return directlyRepeatedDefinition;
  }
}

function permutePath(path) {
  const permutedPath = path.slice();  ///

  permutedPath.reverse();

  const ruleName = permutedPath.pop();

  permutedPath.unshift(ruleName);

  return permutedPath;
}

function partsFromPath(path) {
  const permutedPath = permutePath(path),
        ruleNames = permutedPath, ///
        parts = [];

  forEachRuleNameAndLeftRecursiveRuleName(ruleNames, (ruleName, leftRecursiveRuleName) => {
    const temporaryRuleName = leftRecursiveRuleName; ///

    leftRecursiveRuleName = ruleName; ///

    ruleName = temporaryRuleName;  ///

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
