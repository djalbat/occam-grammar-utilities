"use strict";

import { last, find } from "./utilities/array";

import Edge from "./edge";

export default class DirectedGraph {
  constructor(edges, startVertex) {
    this.edges = edges;
    this.startVertex = startVertex;
  }

  getEdges() {
    return this.edges;
  }

  getStartVertex() {
    return this.startVertex;
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  removeEdge(edge) {
    const index = this.edges.indexOf(edge),
          start = index,  ///
          deleteCount = 1;

    this.edges.splice(start, deleteCount);
  }

  findSuccessorEdges(vertex) {
    const sourceVertex = vertex,  ///
          edges = this.findEdgesBySourceVertex(sourceVertex),
          successorEdges = edges; ///

    return successorEdges;
  }

  findEdgesBySourceVertex(sourceVertex) {
    const edges = find(this.edges, (edge) => { ///
      const edgeMatchesSourceVertex = edge.matchSourceVertex(sourceVertex);

      if (edgeMatchesSourceVertex) {
        return true;
      }
    });

    return edges;
  }

  findEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
    const edge = this.edges.find((edge) => {
      const matches = edge.match(sourceVertex, targetVertex);

      if (matches) {
        return true;
      }
    }) || null;

    return edge;
  }

  depthFirstSearch(vertex, edges, callback) {
    const previousEdges = edges,  ///
          successorEdges = this.findSuccessorEdges(vertex);

    successorEdges.forEach((successorEdge) => {
      const edge = successorEdge, ///
            previousEdgesIncludesEdge = previousEdges.includes(edge);

      if (previousEdgesIncludesEdge) {
        callback(previousEdges);
      } else {
        const targetVertex = successorEdge.getTargetVertex(),
              vertex = targetVertex,  ///
              edges = [
                ...previousEdges,
                edge
              ];

        this.depthFirstSearch(vertex, edges, callback);
      }
    });
  }

  addEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
    const edge = Edge.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);

    this.edges.push(edge);
  }

  removeEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
    const edge = this.findEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

    this.removeEdge(edge);
  }

  findCycles() {
    const cycles = [],
          vertex = this.startVertex, ///
          edges = [];

    this.depthFirstSearch(vertex, edges, (previousEdges) => {
      const cycle = cycleFromPreviousEdges(previousEdges);

      cycles.push(cycle);
    });

    return cycles;
  }

  static fromEdgesAndStartVertex(edges, startVertex) {
    const directedGraph = new DirectedGraph(edges, startVertex);

    return directedGraph;
  }
}

function cycleFromPreviousEdges(previousEdges) {
  let cycle;

  const lastPreviousEdge = last(previousEdges),
        targetVertex = lastPreviousEdge.getTargetVertex();

  previousEdges.some((previousEdge, index) => {
    const sourceVertex = previousEdge.getSourceVertex();

    if (sourceVertex === targetVertex) {
      const start = index;  ///

      cycle = previousEdges.slice(start);

      return true;
    }
  });

  return cycle;
}
