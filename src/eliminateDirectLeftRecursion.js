"use strict";

import Definition from "./definition";
import DirectlyReducedRule from "./rule/reduced/directly";
import DirectlyRepeatedRule from "./rule/repeated/directly";

import { first } from "./utilities/array";
import { findLeftRecursiveDefinitions } from "./utilities/context";
import { leftRecursiveRuleNamesFromDefinition } from "./utilities/definition";

export default function eliminateDirectLeftRecursion(context) {
  let trivialCycle = findTrivialCycle(context);

  while (trivialCycle !== null) {
    const ruleNames = trivialCycle, ///
          firstRuleName = first(ruleNames),
          directlyLeftRecursiveRuleName = firstRuleName;  ///

    rewriteDirectLeftRecursion(directlyLeftRecursiveRuleName, context);

    rewriteDirectedGraph(directlyLeftRecursiveRuleName, context);

    trivialCycle = findTrivialCycle(context);
  }
}

function findTrivialCycle(context) {
  let trivialCycle = null;

  const { directedGraph } = context,
        trivialCycles = directedGraph.findTrivialCycles(),
        trivialCyclesLength = trivialCycles.length;

  if (trivialCyclesLength > 0) {
    const firstTrivialCycle = first(trivialCycles);

    trivialCycle = firstTrivialCycle; ///
  }

  return trivialCycle;
}

function rewriteDirectedGraph(directlyLeftRecursiveRuleName, context) {
  const { directedGraph } = context,
        sourceVertex = directlyLeftRecursiveRuleName, ///
        targetVertex = directlyLeftRecursiveRuleName; ///

  directedGraph.removeEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveRuleName, context) {
  const { ruleMap } = context;

  const ruleName = directlyLeftRecursiveRuleName, ///
        rule = ruleMap[ruleName],
        directlyLeftRecursiveDefinitions = findLeftRecursiveDefinitions(rule, (leftRecursiveDefinition) => {
          const definition = leftRecursiveDefinition, ///
                leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
                firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

          if (firstLeftRecursiveRuleName === ruleName) {
            return true;
          }
        }, context),
        directlyReducedRule = DirectlyReducedRule.fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions),
        directlyReducedRuleName = directlyReducedRule.getName();

  ruleMap[directlyReducedRuleName] = directlyReducedRule;

  const directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions),
        directlyRepeatedRuleName = directlyRepeatedRule.getName();

  ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;

  rule.removeAllDefinitions();

  const firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions),
        directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition, ///
        definition = Definition.fromRuleNameAndDirectlyLeftRecursiveDefinitionAndDirectlyReducedRule(ruleName, directlyLeftRecursiveDefinition);

  rule.addDefinition(definition);
}
