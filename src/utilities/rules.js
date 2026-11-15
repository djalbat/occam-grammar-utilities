"use strict";

import Context from "../context";

import { replacementRulesFromCycleAndCycles } from "../rule/replacement";
import { directlyReducedRulesFromCycleAndCycles } from "../rule/reduced/directly";
import { directlyRepeatedRulesFromCycleAndCycles } from "../rule/repeated/directly";
import { directlyRewrittenRulesFromCycleAndCycles } from "../rule/rewritten/directly";
import { indirectlyReducedRulesFromCycleAndCycles } from "../rule/reduced/indirectly";
import { indirectlyRepeatedRulesFromCycleAndCycles } from "../rule/repeated/indirectly";
import { indirectlyRewrittenRulesFromCycleAndCycles } from "../rule/rewritten/indirectly";
import { incidentallyRewrittenRulesFromCycleAndCycles } from "../rule/rewritten/incidentally"

export function rewriteRules(leftRecursiveCycle, cycles, graph, ruleMap) {
  const context = Context.fromLeftRecursiveCycleCyclesGraphAndRuleMap(leftRecursiveCycle, cycles, graph, ruleMap);

  createIncidentallyRewrittenRules(context);

  createDirectlyRewrittenRules(context);

  createDirectlyReducedRules(context);

  createDirectlyRepeatedRules(context);

  createIndirectlyRewrittenRules(context);

  // createRepeatedRules(context);
  //
  // createIndirectlyReducedRules(context);
  //
  // createIndirectlyRepeatedRules(context);
  //
  // createIntermediateRules(context);
}

export function replaceRules(leftRecursiveCycle, cycles, graph, ruleMap) {
  const context = Context.fromLeftRecursiveCycleCyclesGraphAndRuleMap(leftRecursiveCycle, cycles, graph, ruleMap);

  createReplacementRules(context);
}

function createReplacementRules(context) {
  const ruleMap = context.getRuleMap(),
        replacementRules = replacementRulesFromCycleAndCycles(context);

  replacementRules.forEach((replacementRule) => {
    const replacementRuleName = replacementRule.getName(),
          ruleName = replacementRuleName; ///

    ruleMap[ruleName] = replacementRule;
  });
}

function createDirectlyReducedRules(context) {
  const ruleMap = context.getRuleMap(),
        directlyReducedRules = directlyReducedRulesFromCycleAndCycles(context);

  directlyReducedRules.forEach((directlyReducedRule) => {
    const directlyReducedRuleName = directlyReducedRule.getName();

    ruleMap[directlyReducedRuleName] = directlyReducedRule;
  });
}

function createDirectlyRepeatedRules(context) {
  const ruleMap = context.getRuleMap(),
        directlyRepeatedRules = directlyRepeatedRulesFromCycleAndCycles(context);

  directlyRepeatedRules.map((directlyRepeatedRule) => {
    const directlyRepeatedRuleName = directlyRepeatedRule.getName();

    ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
  });
}

function createDirectlyRewrittenRules(context) {
  const ruleMap = context.getRuleMap(),
        directlyRewrittenRules = directlyRewrittenRulesFromCycleAndCycles(context);

  directlyRewrittenRules.map((directlyRewrittenRule) => {
    const directlyRewrittenRuleName = directlyRewrittenRule.getName();

    ruleMap[directlyRewrittenRuleName] = directlyRewrittenRule;
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

function createIndirectlyRewrittenRules(context) {
  const ruleMap = context.getRuleMap(),
        indirectlyRewrittenRules = indirectlyRewrittenRulesFromCycleAndCycles(context);

  indirectlyRewrittenRules.map((indirectlyRewrittenRule) => {
    const indirectlyRewrittenRuleName = indirectlyRewrittenRule.getName();

    ruleMap[indirectlyRewrittenRuleName] = indirectlyRewrittenRule;
  });
}

function createIncidentallyRewrittenRules(context) {
  const ruleMap = context.getRuleMap(),
        incidentallyRewrittenRules = incidentallyRewrittenRulesFromCycleAndCycles(context);

  incidentallyRewrittenRules.map((incidentallyRewrittenRule) => {
    const incidentallyRewrittenRuleName = incidentallyRewrittenRule.getName();

    ruleMap[incidentallyRewrittenRuleName] = incidentallyRewrittenRule;
  });
}
