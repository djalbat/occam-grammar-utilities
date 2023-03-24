"use strict";

import { last, find, filter, flatten } from "./utilities/array";

export default class DirectedGraph {
  constructor(edges) {
    this.edges = edges;
  }

  getEdges() {
    return this.edges;
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

  findCycles(startVertex) {
    const cycles = [],
          vertex = startVertex, ///
          edges = [];

    this.depthFirstSearch(vertex, edges, (previousEdges) => {
      const cycle = cycleFromPreviousEdges(previousEdges);

      cycles.push(cycle);
    });

    return cycles;
  }

  findCyclicEdges(startVertex) {
    const cycles = this.findCycles(startVertex),
          cyclicEdges = flatten(cycles);

    return cyclicEdges;
  }

  removeNonCyclicEdges(startVertex) {
    const cyclicEdges = this.findCyclicEdges(startVertex);

    filter(this.edges, (edge) => {
      const cyclicEdgesIncludesEdge = cyclicEdges.includes(edge);

      if (cyclicEdgesIncludesEdge) {
        return true;
      }
    });
  }

  static fromEdges(edges) {
    const directedGraph = new DirectedGraph(edges);

    return directedGraph;
  }
}

function cycleFromPreviousEdges(previousEdges) {
  let cycle;

  const previousEdgesLength = previousEdges.length;

  if (previousEdgesLength === 1) {
    cycle = previousEdges;  ///
  } else {
    const lastPreviousEdge = last(previousEdges),
          lastPreviousEdgeTargetVertex = lastPreviousEdge.getTargetVertex();

    previousEdges.some((previousEdge, index) => {
      const previousEdgeTargetVertex = previousEdge.getTargetVertex();

      if (previousEdgeTargetVertex === lastPreviousEdgeTargetVertex) {
        const start = index + 1;

        cycle = previousEdges.slice(start);

        return true;
      }
    });
  }

  return cycle;
}
