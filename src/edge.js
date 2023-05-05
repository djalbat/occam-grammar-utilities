"use strict";

export default class Edge {
  constructor(sourceVertex, targetVertex) {
    this.sourceVertex = sourceVertex;
    this.targetVertex = targetVertex;
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
    const sourceVertex = edge.getSourceVertex(),
          targetVertex = edge.getTargetVertex(),
          matches = this.matchSourceVertexAndTargetVertex(sourceVertex, targetVertex);

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

  static fromSourceVertexAndTargetVertex(sourceVertex, targetVertex) {
    const edge = new Edge(sourceVertex, targetVertex);

    return edge;
  }
}
