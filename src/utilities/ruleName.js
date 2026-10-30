"use strict";

import { EMPTY_STRING } from "../constants";

export function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/_$/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromRepeatedRuleName(repeatedRuleName) {
  const ruleName = repeatedRuleName.replace(/~$/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromRewrittenRuleName(rewrittenRuleName) {
  const ruleName = rewrittenRuleName.replace(/^_/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromIntermediateRuleName(intermediateRuleName) {
  const ruleName = intermediateRuleName.replace(/^.+~|_\d+$/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
  const ruleName = indirectlyRepeatedRuleName.replace(/^~/g, EMPTY_STRING);

  return ruleName;
}

export function reducedRuleNameFromRuleName(ruleName) {
  const reducedRuleName = `${ruleName}_`;

  return reducedRuleName;
}

export function repeatedRuleNameFromRuleName(ruleName) {
  const repeatedRuleName = `${ruleName}~`;

  return repeatedRuleName;
}

export function rewrittenRuleNameFromRuleName(ruleName) {
  const rewrittenRuleName = `_${ruleName}`;

  return rewrittenRuleName;
}

export function indirectRuleNameFromIntermediateRuleName(intermediateRuleName) {
  const indirectRuleName = intermediateRuleName.replace(/~.+$/g, EMPTY_STRING);

  return indirectRuleName;
}

export function indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName) {
  const indirectlyRepeatedRuleName = `~${indirectRuleName}`;

  return indirectlyRepeatedRuleName;
}

export function intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName) {
  const intermediateRuleName = `${indirectRuleName}~${ruleName}`;

  return intermediateRuleName;
}

export function intermediateRuleNameFromRuleNameIndirectRuleNameAndNumber(ruleName, indirectRuleName, number) {
  const intermediateRuleName = `${indirectRuleName}~${ruleName}_${number}`;

  return intermediateRuleName;
}

export function isRuleNameIntermedaiteRuleName(ruleName) {
  const ruleNameIntermediateRuleName = /^.+~.+$/.test(ruleName);

  return ruleNameIntermediateRuleName;
}
