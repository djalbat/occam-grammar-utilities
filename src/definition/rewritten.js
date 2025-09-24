"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { forEachRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleNames";
import { ruleNamePartFromRuleName, zeroOrMorePartsPartFromPart } from "../utilities/part";
import { reducedRuleNameFromRuleName, directlyRepeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleName";

const { last, second } = arrayUtilities;

export default class RewrittenDefinition extends Definition {
  static fromRuleName(ruleName, ruleMap) {
    let rewrittenDefinition = null;

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRule = ruleMap[reducedRuleName] || null;

    if (reducedRule !== null) {
      rewrittenDefinition = rewrittenDefinitionFromRuleName(ruleName);
    }

    return rewrittenDefinition;
  }

  static fromLeftRecursiveRuleNamesAndPath(leftRecursiveRuleNames, path, ruleMap) {
    let rewrittenDefinition = null;

    const leftRecursiveRuleName = leftRecursiveRuleNameFromPath(path),
          leftRecursiveRuleNamesIncludesLeftRecursiveRuleName = leftRecursiveRuleNames.includes(leftRecursiveRuleName);

    if (leftRecursiveRuleNamesIncludesLeftRecursiveRuleName) {
      const reducedRuleName = reducedRuleNameFromPath(path),
            reducedRule = ruleMap[reducedRuleName] || null;

      if (reducedRule !== null) {
        rewrittenDefinition = rewrittenDefinitionFromPath(path);
      }
    }

    return rewrittenDefinition;
  }
}

function reversePath(path) {
  const reversedPath = path.slice();

  reversedPath.reverse();

  return reversedPath;
}

function reducedRuleNameFromPath(path) {
  const ruleNames = path, ///
        lastRuleName = last(ruleNames),
        ruleName = lastRuleName, ///
        reducedRuleName = reducedRuleNameFromRuleName(ruleName);

  return reducedRuleName;
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

function reducedRuleNamePartFromPath(path) {
  const reducedRuleName = reducedRuleNameFromPath(path),
        reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName);

  return reducedRuleNamePart;
}

function leftRecursiveRuleNameFromPath(path) {
  const ruleNames = path, ///
        secondRuleName = second(ruleNames),
        leftRecursiveRuleName = secondRuleName; ///

  return leftRecursiveRuleName;
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

