"use strict";

import { EMPTY_STRING } from "../constants";

export function reducedRuleNameFromRuleName(ruleName) {
  const reducedRuleName = `${ruleName}_`;

  return reducedRuleName;
}

export function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/_$/g, EMPTY_STRING);

  return ruleName;
}

export function directlyRepeatedRuleNameFromRuleName(ruleName) {
  const directlyRepeatedRuleName = `${ruleName}~`;

  return directlyRepeatedRuleName;
}

export function ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
  const ruleName = indirectlyRepeatedRuleName.replace(/~.+$/g, EMPTY_STRING);

  return ruleName;
}

export function leftRecursiveRuleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
  const leftRecursiveRuleName = indirectlyRepeatedRuleName.replace(/^[^~]+~/g, EMPTY_STRING);

  return leftRecursiveRuleName;
}

export function indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const indirectlyRepeatedRuleName = `${ruleName}~${leftRecursiveRuleName}`;

  return indirectlyRepeatedRuleName;
}
