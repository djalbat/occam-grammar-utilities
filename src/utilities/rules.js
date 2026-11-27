"use strict";

import Context from "../context";

import { incidentallyRewrittenRulesFromCycleAndCycles } from "../rule/rewritten/incidentally"
import { replacementRulesFromCycleAndCycles } from "../rule/replacement";
import { intermediateRulesFromCycleAndCycles } from "../rule/intermediate";
import { directlyReducedRulesFromCycleAndCycles } from "../rule/reduced/directly";
import { directlyRepeatedRulesFromCycleAndCycles } from "../rule/repeated/directly";
import { directlyRewrittenRulesFromCycleAndCycles } from "../rule/rewritten/directly";
import { indirectlyReducedRulesFromCycleAndCycles } from "../rule/reduced/indirectly";
import { indirectlyRepeatedRulesFromCycleAndCycles } from "../rule/repeated/indirectly";
import { indirectlyRewrittenRulesFromCycleAndCycles } from "../rule/rewritten/indirectly";
import { intermediateRepeatedRulesFromCycleAndCycles } from "../rule/repeated/intermediate";

export function rewriteRules(leftRecursiveCycle, cycles, graph, ruleMap) {
  const context = Context.fromLeftRecursiveCycleCyclesGraphAndRuleMap(leftRecursiveCycle, cycles, graph, ruleMap);

  createDirectlyRewrittenRules(context);

  createDirectlyReducedRules(context);

  createDirectlyRepeatedRules(context);

  createIndirectlyRewrittenRules(context);

  createIndirectlyReducedRules(context);

  createIndirectlyRepeatedRules(context);

  createIntermediateRepeatedRules(context);

  createIntermediateRules(context);
}

export function replaceRules(leftRecursiveCycle, cycles, graph, ruleMap) {
  const context = Context.fromLeftRecursiveCycleCyclesGraphAndRuleMap(leftRecursiveCycle, cycles, graph, ruleMap);

  createReplacementRules(context);
}

export function replicateRules(leftRecursiveCycle, cycles, graph, ruleMap) {
  const context = Context.fromLeftRecursiveCycleCyclesGraphAndRuleMap(leftRecursiveCycle, cycles, graph, ruleMap);

  createIncidentallyRewrittenRules(context);
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

function createIntermediateRules(context) {
  const ruleMap = context.getRuleMap(),
        intermediateRules = intermediateRulesFromCycleAndCycles(context);

  intermediateRules.forEach((intermediateRule) => {
    const intermediateRuleName = intermediateRule.getName();

    ruleMap[intermediateRuleName] = intermediateRule;
  });
}

function createDirectlyReducedRules(context) {
  const ruleMap = context.getRuleMap(),
        directlyReducedRules = directlyReducedRulesFromCycleAndCycles(context);

  directlyReducedRules.forEach((directlyReducedRule) => {
    const directlyReducedRuleName = directlyReducedRule.getName(),
          reducedRuleName = directlyReducedRuleName;  ///

    ruleMap[reducedRuleName] = directlyReducedRule;
  });
}

function createDirectlyRepeatedRules(context) {
  const ruleMap = context.getRuleMap(),
        directlyRepeatedRules = directlyRepeatedRulesFromCycleAndCycles(context);

  directlyRepeatedRules.map((directlyRepeatedRule) => {
    const directlyRepeatedRuleName = directlyRepeatedRule.getName(),
          repeatedRuleName = directlyRepeatedRuleName;  ///

    ruleMap[repeatedRuleName] = directlyRepeatedRule;
  });
}

function createDirectlyRewrittenRules(context) {
  const ruleMap = context.getRuleMap(),
        directlyRewrittenRules = directlyRewrittenRulesFromCycleAndCycles(context);

  directlyRewrittenRules.map((directlyRewrittenRule) => {
    const directlyRewrittenRuleName = directlyRewrittenRule.getName(),
          rewrittenRuleName = directlyRewrittenRuleName;  ///

    ruleMap[rewrittenRuleName] = directlyRewrittenRule;
  });
}

function createIndirectlyReducedRules(context) {
  const ruleMap = context.getRuleMap(),
        indirectlyReducedRules = indirectlyReducedRulesFromCycleAndCycles(context);

  indirectlyReducedRules.forEach((indirectlyReducedRule) => {
    const indirectlyReducedRuleName = indirectlyReducedRule.getName(),
          reducedRuleName = indirectlyReducedRuleName;  ///

    ruleMap[reducedRuleName] = indirectlyReducedRule;
  });
}

function createIndirectlyRepeatedRules(context) {
  const ruleMap = context.getRuleMap(),
        indirectlyRepeatedRules = indirectlyRepeatedRulesFromCycleAndCycles(context);

  indirectlyRepeatedRules.forEach((indirectlyRepeatedRule) => {
    const indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName(),
          repetaedRuleName = indirectlyRepeatedRuleName;  ///

    ruleMap[repetaedRuleName] = indirectlyRepeatedRule;
  });
}

function createIndirectlyRewrittenRules(context) {
  const ruleMap = context.getRuleMap(),
        indirectlyRewrittenRules = indirectlyRewrittenRulesFromCycleAndCycles(context);

  indirectlyRewrittenRules.map((indirectlyRewrittenRule) => {
    const indirectlyRewrittenRuleName = indirectlyRewrittenRule.getName(),
          rewrittenRuleName = indirectlyRewrittenRuleName;  ///

    ruleMap[rewrittenRuleName] = indirectlyRewrittenRule;
  });
}

function createIntermediateRepeatedRules(context) {
  const ruleMap = context.getRuleMap(),
        intermediateRepeatedRules = intermediateRepeatedRulesFromCycleAndCycles(context);

  intermediateRepeatedRules.forEach((intermediateRepeatedRule) => {
    const intermediateRepeatedRuleA = intermediateRepeatedRule, ///
          intermediateRepeatedRuleName = intermediateRepeatedRule.getName();

    intermediateRepeatedRule = ruleMap[intermediateRepeatedRuleName] || null;

    if (intermediateRepeatedRule !== null) {
      const intermediateRepeatedRuleB = intermediateRepeatedRule; ///

      intermediateRepeatedRule = intermediateRepeatedRuleB.mergedWith(intermediateRepeatedRuleA);
    } else {
      intermediateRepeatedRule = intermediateRepeatedRuleA; ///
    }

    ruleMap[intermediateRepeatedRuleName] = intermediateRepeatedRule;
  });
}

function createIncidentallyRewrittenRules(context) {
  const ruleMap = context.getRuleMap(),
        incidentallyRewrittenRules = incidentallyRewrittenRulesFromCycleAndCycles(context);

  incidentallyRewrittenRules.map((incidentallyRewrittenRule) => {
    const incidentallyRewrittenRuleName = incidentallyRewrittenRule.getName(),
          incidentallyRewrittenRuleA = incidentallyRewrittenRule, ///
          rewrittenRuleName = incidentallyRewrittenRuleName,  ///
          incidentallyRewrittenRuleB = ruleMap[rewrittenRuleName] || null;  ///

    if (incidentallyRewrittenRuleB === null) {
      ruleMap[rewrittenRuleName] = incidentallyRewrittenRuleA;
    }
  });
}
