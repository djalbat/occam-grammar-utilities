"use strict";

import Edge from "./edge";
import Definition from "./definition";
import IndirectlyRepeatedRule from "./rule/repeated/indirectly";

import { greatestCycleFromCycles } from "./utilities/directedGraph";
import { first, firstLast, secondLast } from "./utilities/array";
import { findLeftRecursiveDefinitions } from "./utilities/context"
import { isDefinitionDirectlyLeftRecursive, leftRecursiveRuleNamesFromDefinition } from "./utilities/definition";

export default function eliminateIndirectLeftRecursion(context) {
  let greatestNonTrivialCycle = findGreatestNonTrivialCycle(context);

  while (greatestNonTrivialCycle !== null) {
    const ruleNames = greatestNonTrivialCycle,  ///
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
        indirectlyLeftRecursiveDefinitions = findLeftRecursiveDefinitions(leftRecursiveRule, (leftRecursiveDefinition) => {
          const definition = leftRecursiveDefinition, ///
                leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
                firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

          if (firstLeftRecursiveRuleName === ruleName) {
            return true;
          }
        }, context);

  const indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleNameLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(ruleName, leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions),
        indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();

  ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;

  let definitions;

  definitions = indirectlyLeftRecursiveDefinitions; ///

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

