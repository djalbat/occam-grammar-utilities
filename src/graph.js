"use strict";

import { arrayUtilities } from "necessary";

import Cycle from "./cycle";

import { areCyclesCoincident } from "./cycle";

const { find, compress } = arrayUtilities;

export default class Graph {
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
    const edgeMatches = this.matchEdge(edge);

    if (edgeMatches) {
      return;
    }

    this.edges.push(edge);
  }

  addEdges(edges) {
    edges.forEach((edge) => {
      this.addEdge(edge);
    });
  }

  matchEdge(edge) {
    const edgeA = edge, ///
          edgeMatches = this.edges.some((edge) => {
            const edgeB = edge, ///
                  edgeAMatchesEdgeB = edgeA.match(edgeB);

            if (edgeAMatchesEdgeB) {
              return true;
            }
          });

    return edgeMatches;
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
          successorEdges = edges.filter((edge) => {
            const targetVertex = edge.getTargetVertex();

            if (targetVertex !== sourceVertex) {
              return true;
            }
          });

    return successorEdges;
  }

  findSuccessorVertexes(vertex) {
    const successorEdges = this.findSuccessorEdges(vertex),
          successorVertexes = successorEdges.map((successorEdge) => {
            const successorEdgeTargetVertex = successorEdge.getTargetVertex(),
                  successorVertex = successorEdgeTargetVertex;  ///

            return successorVertex;
          });

    return successorVertexes;
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
      const matches = edge.matchSourceVertexAndTargetVertex(sourceVertex, targetVertex);

      if (matches) {
        return true;
      }
    }) || null;

    return edge;
  }

  depthFirstVertexSearch(vertex, visitedVertexes = []) {
    const visitedVertexesIncludesVertex = visitedVertexes.includes(vertex);

    if (visitedVertexesIncludesVertex) {
      return;
    }

    const visitedVertex = vertex; ///

    visitedVertexes.push(visitedVertex);

    const successorVertexes = this.findSuccessorVertexes(vertex);

    successorVertexes.forEach((successorVertex) => {
      const vertex = successorVertex; ///

      this.depthFirstVertexSearch(vertex, visitedVertexes);
    });

    const vertexes = visitedVertexes; ///

    return vertexes;
  }

  nonTrivalCycleVertexesSearch(vertex, vertexes, callback) {
    const previousVertexes = vertexes,  ///
          successorVertexes = this.findSuccessorVertexes(vertex);

    successorVertexes.forEach((successorVertex) => {
      const previousVertexesIncludesSuccessorVertex = previousVertexes.includes(successorVertex),
            vertexes = [
              ...previousVertexes,
              successorVertex
            ],
            vertex = successorVertex;  ///

      if (previousVertexesIncludesSuccessorVertex) {
        const nonTrivialCyclicVertexes = vertexes;  ///

        callback(nonTrivialCyclicVertexes);

        return;
      }

      this.nonTrivalCycleVertexesSearch(vertex, vertexes, callback);
    });
  }

  findCycles() {
    const trivialCycles = this.findTrivialCycles(),
          nonTrivialCycles = this.findNonTrivialCycles(),
          cycles = [
            ...trivialCycles,
            ...nonTrivialCycles
          ];

    compress(cycles, (cycleA, cycleB) => {
      const cyclesCoincident = areCyclesCoincident(cycleA, cycleB);

      if (!cyclesCoincident) {
        return true;
      }
    });

    return cycles;
  }

  findTrivialCycles() {
    const triviallyCyclicEdges = this.findTriviallyCyclicEdges(),
          trivialCycles = triviallyCyclicEdges.map((triviallyCyclicEdge) => {
            const edge = triviallyCyclicEdge,  ///
                  cycle = Cycle.fromEdge(edge),
                  trivialCycle = cycle; ///

            return trivialCycle;
          });

    return trivialCycles;
  }

  findNonTrivialCycles() {
    const nonTrivialCycles = [],
          graph = this, ///
          vertex = this.startVertex, ///
          vertexes = [
            vertex
          ];

    this.nonTrivalCycleVertexesSearch(vertex, vertexes, (nonTrivialCyclicVertexes) => {
      const vertexes = nonTrivialCyclicVertexes,  ///
            cycle = Cycle.fromGraphAndVertexes(graph, vertexes),
            nonTrivialCycle = cycle;  ///

      nonTrivialCycles.push(nonTrivialCycle);
    });

    return nonTrivialCycles;
  }

  findTriviallyCyclicEdges() {
    const triviallyCyclicEdges = find(this.edges, (edge) => {
      const edgeTriviallyCyclic = edge.isTriviallyCyclic();

      if (edgeTriviallyCyclic) {
        return true;
      }
    });

    return triviallyCyclicEdges;
  }

  static fromEdgesAndStartVertex(edges, startVertex) {
    const graph = new Graph(edges, startVertex);

    return graph;
  }
}
