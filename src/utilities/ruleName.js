"use strict";

import { EMPTY_STRING } from "../constants";

export function ruleNameFromRewrittenRuleName(rewrittenRuleName) {
  const ruleName = rewrittenRuleName.replace(/^_/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromDirectlyReducedRuleName(directlyReducedRuleName) {
  const ruleName = directlyReducedRuleName.replace(/_$/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromDirectlyRepeatedRuleName(directlyRepeatedRuleName) {
  const ruleName = directlyRepeatedRuleName.replace(/~$/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromDirectlyRewrittenRuleName(directlyRewrittenRuleName) {
  const ruleName = directlyRewrittenRuleName.replace(/^_/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
  const ruleName = indirectlyRepeatedRuleName.replace(/^~/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromIndirectlyRewrittenRuleName(indirectlyRewrittenRuleName) {
  const ruleName = indirectlyRewrittenRuleName.replace(/^_/g, EMPTY_STRING);

  return ruleName;
}

export function ruleNameFromIncidentallyRewrittenRuleName(incidentallyRewrittenRuleName) {
  const ruleName = incidentallyRewrittenRuleName.replace(/^_/g, EMPTY_STRING);

  return ruleName;
}

export function indirectRuleNameFromIndirectlyReducedRuleName(indirectlyReducedRuleName) {
  const indirectRuleName = indirectlyReducedRuleName.replace(/_.+$/g, EMPTY_STRING);

  return indirectRuleName;
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

export function directlyReducedRuleNameFromRuleName(ruleName) {
  const directlyReducedRuleName = `${ruleName}_`;

  return directlyReducedRuleName;
}

export function directlyRepeatedRuleNameFromRuleName(ruleName) {
  const directlyRepeatedRuleName = `${ruleName}~`;

  return directlyRepeatedRuleName;
}

export function directlyRewrittenRuleNameFromRuleName(ruleName) {
  const directlyRewrittenRuleName = `_${ruleName}`;

  return directlyRewrittenRuleName;
}

export function indirectlyReducedRuleNameFromRuleName(ruleName) {
  const indirectlyReducedRuleName = `${ruleName}_`;

  return indirectlyReducedRuleName;
}

export function indirectlyRepeatedRuleNameFromRuleName(ruleName) {
  const indirectlyRepeatedRuleName = `~${ruleName}`;

  return indirectlyRepeatedRuleName;
}

export function indirectlyRewrittenRuleNameFromRuleName(ruleName) {
  const directlyRewrittenRuleName = `_${ruleName}`;

  return directlyRewrittenRuleName;
}

export function incidentallyRewrittenRuleNameFromRuleName(ruleName) {
  const incidentallyRewrittenRuleName = `_${ruleName}`;

  return incidentallyRewrittenRuleName;
}

export function indirectlyReducedRuleNameFromIndirectRuleName(indirectRuleName) {
  const directlyReducedRuleName = `${indirectRuleName}_`;

  return directlyReducedRuleName;
}

export function indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName) {
  const indirectlyRepeatedRuleName = `~${indirectRuleName}`;

  return indirectlyRepeatedRuleName;
}

export function indirectlyRewrittenRuleNameFromIndirectRuleName(indirectRuleName) {
  const directlyRewrittenRuleName = `_${indirectRuleName}`;

  return directlyRewrittenRuleName;
}

export function indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectlRuleName) {
  const indirectlyReducedRuleName = `${indirectlRuleName}_${ruleName}_`;

  return indirectlyReducedRuleName;
}
