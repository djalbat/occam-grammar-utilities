"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { forEachRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleNames";
import { reducedRuleNameFromPath, reducedRuleNamePartFromPath } from "../utilities/path";
import { ruleNamePartFromRuleName, zeroOrMorePartsPartFromPart } from "../utilities/part";
import { directlyRepeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleName";

const { first } = arrayUtilities;

export default class RewrittenDefinition extends Definition {
  static fromPath(path, ruleMap) {
    let rewrittenDefinition = null;

    const reducedRuleName = reducedRuleNameFromPath(path),
          reducedRule = ruleMap[reducedRuleName] || null;

    if (reducedRule !== null) {
      rewrittenDefinition = rewrittenDefinitionFromPath(path);
    }

    return rewrittenDefinition;
  }
}

function reversePath(path) {
  const reversedPath = path.slice();

  reversedPath.reverse();

  return reversedPath;
}

function rewrittenDefinitionFromPath(path) {
  const reducedRuleNamePart = reducedRuleNamePartFromPath(path),
        reversedPath = reversePath(path),
        ruleNames = reversedPath, ///
        ruleNamesLength = ruleNames.length,
        lastIndex = ruleNamesLength - 1,
        parts = []; ///

  parts.push(reducedRuleNamePart);

  forEachRuleNameAndLeftRecursiveRuleName(ruleNames, (ruleName, leftRecursiveRuleName, index) => {
    if (index !== lastIndex) {
      const directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName);

      parts.push(directlyRepeatedPart);

      const temporaryRuleName = leftRecursiveRuleName; ///

      leftRecursiveRuleName = ruleName; ///

      ruleName = temporaryRuleName;  ///

      const indirectlyRepeatedPart = indirectlyRepeatedPartFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);

      parts.push(indirectlyRepeatedPart);
    }
  });

  if (ruleNamesLength === 1) {
    const firstRuleName = first(ruleNames),
          ruleName = firstRuleName,
          directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName);

    parts.push(directlyRepeatedPart);
  }

  const precedence = null,
        rewrittenDefinition = new RewrittenDefinition(parts, precedence);

  return rewrittenDefinition;
}

function directlyRepeatedPartFromRuleName(ruleName) {
  const directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
        directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
        zeroOrMoreDirectlyRepeatedRuleNamePartsPart = zeroOrMorePartsPartFromPart(directlyRepeatedRuleNamePart),
        directlyRepeatedPart = zeroOrMoreDirectlyRepeatedRuleNamePartsPart; ///

  return directlyRepeatedPart;
}

function indirectlyRepeatedPartFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
        indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
        indirectlyRepeatedPart = indirectlyRepeatedRuleNamePart;  ///

  return indirectlyRepeatedPart;
}

