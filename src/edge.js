"use strict";

import { intersection } from "./utilities/collections";
import { INDIFFERENT_MATCH_METHOD, INTERSECTION_MATCH_METHOD } from "./constants";

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
          matchesLabelsSourceVertexAndTargetVertex = this.matchLabelsSourceVertexAndTargetVertex(labels, sourceVertex, targetVertex, matchMethod),
          matches = matchesLabelsSourceVertexAndTargetVertex; ///

    return matches;
  }

  matchLabel(label) {
    const labels = [
            label
          ],
          matchMethod = INTERSECTION_MATCH_METHOD,
          labelsMatch = this.matchLabels(labels, matchMethod),
          labelMatches = labelsMatch; ///

    return labelMatches;
  }

  matchLabels(labels, matchMethod = INTERSECTION_MATCH_METHOD) {
    let matchesLabels = false;

    const labelsA = labels, ///
          labelsB = this.labels;  ///

    switch (matchMethod) {
      case INDIFFERENT_MATCH_METHOD: {
        matchesLabels = true;

        break;
      }

      case INTERSECTION_MATCH_METHOD: {
        const labels = intersection(labelsA, labelsB),
              labelsLength = labels.length;

        if (labelsLength > 0) {
          matchesLabels = true;
        }

        break;
      }
    }

    return matchesLabels;
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
    const matchesSourceVertexAndTargetVertex = ((this.sourceVertex === sourceVertex) && (this.targetVertex === targetVertex));

    return matchesSourceVertexAndTargetVertex;
  }

  matchLabelsSourceVertexAndTargetVertex(labels, sourceVertex, targetVertex, matchMethod) {
    let matchesLabelsSourceVertexAndTargetVertex = false;

    const matchesLabels = this.matchLabels(labels, matchMethod);

    if (matchesLabels) {
      const matchesSourceVertexAndTargetVertex = this.matchSourceVertexAndTargetVertex(sourceVertex, targetVertex);

      if (matchesSourceVertexAndTargetVertex) {
        matchesLabelsSourceVertexAndTargetVertex = true;
      }
    }

    return matchesLabelsSourceVertexAndTargetVertex;
  }

  static fromLabelsSourceVertexAndTargetVertex(labels, sourceVertex, targetVertex) {
    const edge = new Edge(labels, sourceVertex, targetVertex);

    return edge;
  }
}
