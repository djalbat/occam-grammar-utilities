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

export function indirectRuleNameFromIntermediateRuleName(intermediateRuleName) {
  const indirectRuleName = intermediateRuleName.replace(/~.+$/g, EMPTY_STRING);

  return indirectRuleName;
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

export function incidentallyRewrittenRuleNameFromRuleName(ruleName) {
  const incidentallyRewrittenRuleName = `_${ruleName}`;

  return incidentallyRewrittenRuleName;
}

export function indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName) {
  const indirectlyRepeatedRuleName = `~${indirectRuleName}`;

  return indirectlyRepeatedRuleName;
}

export function intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName) {
  const intermediateRuleName = `${indirectRuleName}~${ruleName}`;

  return intermediateRuleName;
}

export function indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectlRuleName) {
  const indirectlyReducedRuleName = `${indirectlRuleName}_${ruleName}_`;

  return indirectlyReducedRuleName;
}

export function intermediateRuleNameFromRuleNameIndirectRuleNameAndIndex(ruleName, indirectRuleName, index) {
  const intermediateRuleName = `${indirectRuleName}~${ruleName}_${index}`;

  return intermediateRuleName;
}
