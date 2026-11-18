"use strict";

import { EMPTY_STRING } from "../constants";

export function ruleNameFromRepeatedRuleName(repeatedRuleName) {
  const ruleName = repeatedRuleName.replace(/~$/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromRewrittenRuleName(rewrittenRuleName) {
  const ruleName = rewrittenRuleName.replace(/^_/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromIntermediateRuleName(intermediateRuleName) {
  const ruleName = intermediateRuleName.replace(/^~/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromIntermediateRepeatedRuleName(intermediateRepeatedRuleName) {
  const ruleName = intermediateRepeatedRuleName.replace(/~/g, EMPTY_STRING);

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

export function intermediateRuleNameFromRuleName(ruleName) {
  const intermediateRuleName = `~${ruleName}`;

  return intermediateRuleName;
}

export function intermediateRepeatedRuleNameFromRuleName(ruleName) {
  const intermediateRepeatedRuleName = `~${ruleName}~`;

  return intermediateRepeatedRuleName;
}

export function reducedRuleNameFromIndirectRuleName(indirectRuleName) {
  const reducedRuleName = `${indirectRuleName}_`;

  return reducedRuleName;
}

export function repeatedRuleNameFromIndirectRuleName(indirectRuleName) {
  const repeatedRuleName = `${indirectRuleName}~`;

  return repeatedRuleName;
}

export function intermediateRuleNameFromIndirectRuleName(indirectRuleName) {
  const intermediateRuleName = `~${indirectRuleName}`;

  return intermediateRuleName;
}

export function indirectlyReducedRuleNameFromIndirectRuleName(indirectRuleName) {
  const indirectlyReducedRuleName = `_${indirectRuleName}_`;

  return indirectlyReducedRuleName;
}
