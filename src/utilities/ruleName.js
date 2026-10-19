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

export function repeatedRuleNameFromRuleName(ruleName) {
  const repeatedRuleName = `${ruleName}~`;

  return repeatedRuleName;
}

export function ruleNameFromRepeatedRuleName(repeatedRuleName) {
  const ruleName = repeatedRuleName.replace(/~$/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromIntermediateRuleName(intermediateRuleName) {
  const ruleName = intermediateRuleName.replace(/^.+~/g, EMPTY_STRING);

  return ruleName;
}

export function indirectRuleNameFromIntermediateRuleName(intermediateRuleName) {
  const indirectRuleName = intermediateRuleName.replace(/~.+$/g, EMPTY_STRING);

  return indirectRuleName;
}

export function intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName) {
  const intermediateRuleName = `${indirectRuleName}~${ruleName}`;

  return intermediateRuleName;
}
