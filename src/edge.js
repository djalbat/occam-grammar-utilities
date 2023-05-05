"use strict";

export default class Edge {
  constructor(label,sourceVertex, targetVertex) {
    this.label = label;
    this.sourceVertex = sourceVertex;
    this.targetVertex = targetVertex;
  }

  getLabel() {
    return this.label;
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

  match(edge) {
    const label = this.getLabel(),
          sourceVertex = edge.getSourceVertex(),
          targetVertex = edge.getTargetVertex(),
          matches = this.matchLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex);

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

  matchLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex) {
    const matches = ((this.label === label) && (this.sourceVertex === sourceVertex) && (this.targetVertex === targetVertex));

    return matches;
  }

  static fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex) {
    const edge = new Edge(label, sourceVertex, targetVertex);

    return edge;
  }
}
