"use strict";

import Edge from "./edge";
import Definition from "./definition";
import IndirectlyRepeatedRule from "./rule/repeated/indirectly";

import { ruleNamesFromCycle } from "./utilities/directedGraph";
import { first, firstLast, secondLast } from "./utilities/array";
import { findLeftRecursiveDefinitions } from "./utilities/context"
import { isDefinitionDirectlyLeftRecursive, leftRecursiveRuleNamesFromDefinition } from "./utilities/definition";

export default function eliminateIndirectLeftRecursion(context) {
  let greatestNonTrivialCycle = findGreatestNonTrivialCycle(context);

  while (greatestNonTrivialCycle !== null) {
    const cycle = greatestNonTrivialCycle,  ///
          ruleNames = ruleNamesFromCycle(cycle),
          firstLastRuleName = firstLast(ruleNames),
          secondLastRuleName = secondLast(ruleNames),
          ruleName = firstLastRuleName, ///
          leftRecursiveRuleName = secondLastRuleName; ///

    rewriteIndirectLeftRecursion(ruleName, leftRecursiveRuleName, context);

    rewriteDirectedGraph(ruleName, leftRecursiveRuleName, context);

    greatestNonTrivialCycle = findGreatestNonTrivialCycle(context);
  }
}

function rewriteDirectedGraph(ruleName, leftRecursiveRuleName, context) {
  const { directedGraph } = context;

  let sourceVertex,
      targetVertex;

  sourceVertex = leftRecursiveRuleName; ///

  targetVertex = ruleName;  ///

  directedGraph.removeEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

  sourceVertex = ruleName;  ///

  let edges = directedGraph.findEdgesBySourceVertex(sourceVertex);

  edges = edges.reduce((edges, edge) => { ///
    const edgeTriviallyCyclic = edge.isTriviallyCyclic();

    if (!edgeTriviallyCyclic) {
      const sourceVertex = leftRecursiveRuleName, ///
            targetVertex = edge.getTargetVertex();

      edge = Edge.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);

      edges.push(edge);
    }

    return edges;
  }, []);

  directedGraph.addEdges(edges);
}

function greatestCycleFromCycles(cycles) {
  const greatestCycle = cycles.reduce((greatestCycle, cycle) => {
    if (greatestCycle === null) {
      greatestCycle = cycle;  ///
    } else {
      const cycleLength = cycle.length,
            greatestCycleLength = greatestCycle.length;

      if (cycleLength > greatestCycleLength) {
        greatestCycle = cycle;  ///
      }
    }

    return greatestCycle;
  }, null);

  return greatestCycle;
}

function findGreatestNonTrivialCycle(context) {
  const { directedGraph } = context;

  let nonTrivialCycles = directedGraph.findNonTrivialCycles(),
      greatestNonTrivialCycle = greatestCycleFromCycles(nonTrivialCycles);

  return greatestNonTrivialCycle;
}

function rewriteIndirectLeftRecursion(ruleName, leftRecursiveRuleName, context) {
  const { ruleMap } = context;

  const rule = ruleMap[ruleName],
        leftRecursiveRule = ruleMap[leftRecursiveRuleName],
        leftRecursiveDefinitions = findLeftRecursiveDefinitions(leftRecursiveRule, (leftRecursiveDefinition) => {
          const definition = leftRecursiveDefinition, ///
                leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
                firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

          if (firstLeftRecursiveRuleName === ruleName) {
            return true;
          }
        }, context);

  const indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleNameLeftRecursiveRuleNameAndLeftRecursiveDefinitions(ruleName, leftRecursiveRuleName, leftRecursiveDefinitions),
        indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();

  ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;

  let definitions;

  definitions = leftRecursiveDefinitions; ///

  leftRecursiveRule.removeDefinitions(definitions);

  definitions = rule.getDefinitions();

  definitions = definitions.reduce((definitions, definition) => { ///
    const leftRecursiveRuleName = ruleName, ///
          definitionDirectlyLeftRecursive = isDefinitionDirectlyLeftRecursive(definition, leftRecursiveRuleName);

    if (!definitionDirectlyLeftRecursive) {
      definition = Definition.fromDefinitionAndIndirectlyRepeatedRuleName(definition, indirectlyRepeatedRuleName);  ///

      definitions.push(definition);
    }

    return definitions;
  }, []);

  leftRecursiveRule.addDefinitions(definitions);
}

