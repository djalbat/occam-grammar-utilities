"use strict";

import Edge from "../edge";

import { LEFT_RECURSIVE_LABEL } from "../labels";

export function edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const label = LEFT_RECURSIVE_LABEL,
        sourceVertex = ruleName,  ///
        targetVertex = leftRecursiveRuleName, ///
        edge = Edge.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex);

  return edge;
}
