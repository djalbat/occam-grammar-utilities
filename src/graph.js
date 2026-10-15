"use strict";

import { arrayUtilities } from "necessary";

import Cycle from "./cycle";

import { edgesMatchEdge } from "./edge";
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
    const matches = edgesMatchEdge(this.edges, edge);

    if (!matches) {
      this.edges.push(edge);
    }
  }

  addEdges(edges) {
    edges.forEach((edge) => {
      this.addEdge(edge);
    });
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

  depthFirstSearch(vertex, vertexes, callback) {
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
        callback(vertexes);

        return;
      }

      this.depthFirstSearch(vertex, vertexes, callback);
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

    this.depthFirstSearch(vertex, vertexes, (vertexes) => {
      const cycle = Cycle.fromGraphAndVertexes(graph, vertexes),
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
