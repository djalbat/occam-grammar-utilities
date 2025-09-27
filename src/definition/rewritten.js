"use strict";

import { Definition } from "occam-parsers";

import { forEachRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleNames";
import { reducedRuleNameFromPath, reducedRuleNamePartFromPath } from "../utilities/path";
import { ruleNamePartFromRuleName, zeroOrMorePartsPartFromPart } from "../utilities/part";
import { reducedRuleNameFromRuleName, directlyRepeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleName";

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

  static fromRuleName(ruleName, ruleMap) {
    let rewrittenDefinition = null;

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRule = ruleMap[reducedRuleName] || null;

    if (reducedRule !== null) {
      rewrittenDefinition = rewrittenDefinitionFromRuleName(ruleName);
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
        pathLength = path.length,
        lastIndex = pathLength - 1,
        ruleNames = reversedPath, ///
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

  const precedence = null,
        rewrittenDefinition = new RewrittenDefinition(parts, precedence);

  return rewrittenDefinition;
}

function rewrittenDefinitionFromRuleName(ruleName) {
  const reducedRuleNamePart = reducedRuleNamePartFromRuleName(ruleName),
        directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName),
        parts = [
          reducedRuleNamePart,
          directlyRepeatedPart
        ],
        precedence = null,
        rewrittenDefinition = new RewrittenDefinition(parts, precedence);

  return rewrittenDefinition;
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

function indirectlyRepeatedPartFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
        indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
        indirectlyRepeatedPart = indirectlyRepeatedRuleNamePart;  ///

  return indirectlyRepeatedPart;
}

