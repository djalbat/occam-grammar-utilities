"use strict";

import { intersection } from "./utilities/collections";
import { INTERSECTION_MATCH_METHOD } from "./constants";

export default class Edge {
  constructor(labels,sourceVertex, targetVertex) {
    this.labels = labels;
    this.sourceVertex = sourceVertex;
    this.targetVertex = targetVertex;
  }

  getLabels() {
    return this.labels;
  }

  getSourceVertex() {
    return this.sourceVertex;
  }

  getTargetVertex() {
    return this.targetVertex;
  }

  isTriviallyCyclic() {
    const triviallyCyclic = (this.sourceVertex === this.targetVertex);

    return triviallyCyclic;
  }

  match(edge, matchMethod = INTERSECTION_MATCH_METHOD) {
    const labels = edge.getLabels(),
          sourceVertex = edge.getSourceVertex(),
          targetVertex = edge.getTargetVertex(),
          matches = this.matchLabelsSourceVertexAndTargetVertex(labels, sourceVertex, targetVertex, matchMethod);

    return matches;
  }

  matchSourceVertex(sourceVertex) {
    const matchesSourceVertex = (this.sourceVertex === sourceVertex);

    return matchesSourceVertex;
  }

  matchTargetVertex(targetVertex) {
    const matchesTargetVertex = (this.targetVertex === targetVertex);

    return matchesTargetVertex;
  }

  matchSourceVertexAndTargetVertex(sourceVertex, targetVertex) {
    const matches = ((this.sourceVertex === sourceVertex) && (this.targetVertex === targetVertex));

    return matches;
  }

  matchLabelsSourceVertexAndTargetVertex(labels, sourceVertex, targetVertex, matchMethod) {
    let matches = false;

    const labelsA = labels, ///
          labelsB = this.labels,  ///
          labelsMatch = matchLabels(labelsA, labelsB, matchMethod);

    if (labelsMatch) {
      if ((this.sourceVertex === sourceVertex) && (this.targetVertex === targetVertex)) {
        matches = true;
      }
    }

    return matches;
  }

  static fromLabelsSourceVertexAndTargetVertex(labels, sourceVertex, targetVertex) {
    const edge = new Edge(labels, sourceVertex, targetVertex);

    return edge;
  }
}

function matchLabels(labelsA, labelsB, matchMethod) {
  let labelsMatch = false;

  switch (matchMethod) {
    case INTERSECTION_MATCH_METHOD: {
      const labels = intersection(labelsA, labelsB),
            labelsLength = labels.length;

      if (labelsLength > 0) {
        labelsMatch = true;
      }

      break;
    }
  }

  return labelsMatch;
}
