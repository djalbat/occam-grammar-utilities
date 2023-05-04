"use strict";

import { Definition } from "occam-parsers";

import { first } from "../utilities/array";
import { forEachRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleNames";
import { ruleNamePartFromRuleName, zeroOrMorePartsPartFromPart } from "../utilities/part";
import {
  reducedRuleNameFromRuleName,
  directlyRepeatedRuleNameFromRuleName,
  indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName
} from "../utilities/ruleName";

export default class RewrittenDefinition extends Definition {
  static fromPath(path) {
    const parts = partsFromPath(path),
          rewrittenDefinition = new RewrittenDefinition(parts);

    return rewrittenDefinition;
  }
}

function partsFromPath(path) {
  path = reversePath(path); ///

  const parts = [],
        ruleNames = path.slice(), ///
        reducedRuleNamePart = reducedRuleNamePartFromPath(path);

  parts.push(reducedRuleNamePart);

  const pathLength = path.length;

  if (pathLength === 1) {
    const firstRuleName = first(ruleNames),
          ruleName = firstRuleName, ///
          directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName);

    parts.push(directlyRepeatedPart);
  } else {
    const lastIndex = pathLength - 1;

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
  }

  return parts;
}

function reversePath(path) {
  path = path.slice();

  path.reverse();

  return path;
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
