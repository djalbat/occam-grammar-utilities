"use strict";

import { removedRulesFromCycleAndCycles } from "../rule/removed";
import { reducedRulesFromCycleAndCycles } from "../rule/reduced";
import { repeatedRulesFromCycleAndCycles } from "../rule/repeated";
import { rewrittenRulesFromCycleAndCycles } from "../rule/rewritten";
import { replacementRulesFromCycleAndCycles } from "../rule/replacement";
import { intermediateRulesFromCycleAndCycles } from "../rule/intermediate";
import { indirectlyReducedRulesFromCycleAndCycles } from "../rule/reduced/indirectly";
import { indirectlyRepeatedRulesFromCycleAndCycles } from "../rule/repeated/indirectly";

export function rewriteRules(context) {
  createRewrittenRules(context);

  createReducedRules(context);

  createRepeatedRules(context);

  createIndirectlyReducedRules(context);

  createIndirectlyRepeatedRules(context);

  createIntermediateRules(context);

  createRemoevedRules(context);

  createReplacementRules(context);
}

export function replaceOrRemoveRules(context) {
  const ruleMap = context.getRuleMap(),
        removedRules = context.getRemovedRules(),
        replacementRules = context.getReplacementRules();

  removedRules.forEach((removedRule) => {
    const removedRuleName = removedRule.getName(),
          ruleName = removedRuleName; ///

    delete ruleMap[ruleName];
  });

  replacementRules.forEach((replacementRule) => {
    const replacementRuleName = replacementRule.getName(),
          ruleName = replacementRuleName; ///

    ruleMap[ruleName] = replacementRule;
  });
}

function createReducedRules(context) {
  const ruleMap = context.getRuleMap(),
        reducedRules = reducedRulesFromCycleAndCycles(context);

  reducedRules.forEach((reducedRule) => {
    const reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;
  });
}

function createRepeatedRules(context) {
  const ruleMap = context.getRuleMap(),
        repeatedRules = repeatedRulesFromCycleAndCycles(context);

  repeatedRules.forEach((repeatedRule) => {
    const repeatedRuleName = repeatedRule.getName();

    ruleMap[repeatedRuleName] = repeatedRule;
  });
}

function createRewrittenRules(context) {
  const ruleMap = context.getRuleMap(),
        rewrittenRules = rewrittenRulesFromCycleAndCycles(context);

  rewrittenRules.map((rewrittenRule) => {
    const rewrittenRuleName = rewrittenRule.getName(),
          rewrittenRuleA = rewrittenRule, ///
          rewrittenRuleB = ruleMap[rewrittenRuleName] || null;  ///

    rewrittenRule = (rewrittenRuleB !== null) ?
                      rewrittenRuleB.mergedWith(rewrittenRuleA) :
                        rewrittenRuleA;

    ruleMap[rewrittenRuleName] = rewrittenRule;
  });
}

function createIntermediateRules(context) {
  const ruleMap = context.getRuleMap(),
        intermediateRules = intermediateRulesFromCycleAndCycles(context);

  intermediateRules.forEach((intermediateRule) => {
    const intermediatedRuleName = intermediateRule.getName();

    ruleMap[intermediatedRuleName] = intermediateRule;
  });
}

function createIndirectlyReducedRules(context) {
  const ruleMap = context.getRuleMap(),
        indirectlyReducedRules = indirectlyReducedRulesFromCycleAndCycles(context);

  indirectlyReducedRules.forEach((indirectlyReducedRule) => {
    const indirectlyReducedRuleName = indirectlyReducedRule.getName();

    ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;
  });
}

function createIndirectlyRepeatedRules(context) {
  const ruleMap = context.getRuleMap(),
        indirectlyRepeatedRules = indirectlyRepeatedRulesFromCycleAndCycles(context);

  indirectlyRepeatedRules.forEach((indirectlyRepeatedRule) => {
    const indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();

    ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
  });
}

function createReplacementRules(context) {
  replacementRulesFromCycleAndCycles(context);
}

function createRemoevedRules(context) {
  removedRulesFromCycleAndCycles(context);
}
