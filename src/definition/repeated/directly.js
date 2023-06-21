"use strict";

import { Definition } from "occam-parsers";
import { pathFromRuleNameAndCycle } from "../../utilities/path";
import { ruleNamePartFromRuleName, zeroOrMorePartsPartFromPart } from "../../utilities/part";
import { ruleNamesFromCycle, forEachRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleNames";
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
  path = path.slice();

  path.reverse();

  const ruleName = path.pop();

  path.unshift(ruleName);

  return path;
}

function partsFromPath(path) {
  const parts = [];

  path = permutePath(path);

  const ruleNames = path.slice(); ///

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
