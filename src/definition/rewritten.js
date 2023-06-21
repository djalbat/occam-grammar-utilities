"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { forEachRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleNames";
import { ruleNamePartFromRuleName, zeroOrMorePartsPartFromPart } from "../utilities/part";
import { reducedRuleNameFromRuleName, directlyRepeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleName";

const { first } = arrayUtilities;

export default class RewrittenDefinition extends Definition {
  static fromPath(path, ruleMap) {
    path = reversePath(path); ///

    let rewrittenDefinition = null;

    const reducedRuleName = reducedRuleNameFromPath(path),
          reducedRule = ruleMap[reducedRuleName] || null;

    if (reducedRule !== null) {
      const parts = [],
            ruleNames = path.slice(), ///
            pathLength = path.length,
            lastIndex = pathLength - 1,
            reducedRuleNamePart = reducedRuleNamePartFromPath(path);

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

      const precedence = null;

      rewrittenDefinition = new RewrittenDefinition(parts, precedence);
    }

    return rewrittenDefinition;
  }

  static fromRuleName(ruleName, ruleMap) {
    let rewrittenDefinition = null;

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRule = ruleMap[reducedRuleName] || null;

    if (reducedRule !== null) {
      const reducedRuleNamePart = reducedRuleNamePartFromRuleName(ruleName),
            directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName),
            parts = [
              reducedRuleNamePart,
              directlyRepeatedPart
            ],
            precedence = null;

      rewrittenDefinition = new RewrittenDefinition(parts, precedence);
    }

    return rewrittenDefinition;
  }
}

function reversePath(path) {
  path = path.slice();

  path.reverse();

  return path;
}

function reducedRuleNameFromPath(path) {
  const ruleNames = path.slice(), ///
        firstRuleName = first(ruleNames),
        ruleName = firstRuleName, ///
        reducedRuleName = reducedRuleNameFromRuleName(ruleName);

  return reducedRuleName;
}

function reducedRuleNamePartFromPath(path) {
  const ruleNames = path.slice(), ///
        firstRuleName = first(ruleNames),
        ruleName = firstRuleName, ///
        reducedRuleNamePart = reducedRuleNamePartFromRuleName(ruleName);

  return reducedRuleNamePart;
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
