"use strict";

import { arrayUtilities } from "necessary";

import Cycle from "./cycle";

const { last, find, compress } = arrayUtilities;

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
      } else {
        this.depthFirstSearch(vertex, vertexes, callback);
      }
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

      if (cyclesCoincident) {
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
          directedGraph = this, ///
          vertex = this.startVertex, ///
          vertexes = [
            vertex
          ];

    this.depthFirstSearch(vertex, vertexes, (vertexes) => {
      const nonTrivialCycle = nonTrivialCycleFromVertexes(vertexes, directedGraph);

      nonTrivialCycles.push(nonTrivialCycle);
    });

    return nonTrivialCycles;
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

  findTriviallyCyclicEdges() {
    const triviallyCyclicEdges = find(this.edges, (edge) => {
      const edgeTriviallyCyclic = edge.isTriviallyCyclic();

      if (edgeTriviallyCyclic) {
        return true;
      }
    });

    return triviallyCyclicEdges;
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

  static fromEdgesAndStartVertex(edges, startVertex) {
    const directedGraph = new DirectedGraph(edges, startVertex);

    return directedGraph;
  }
}

export function edgesMatchEdge(edges, edge) {
  const edgeA = edge, ///
        matches = edges.some((edge) => {
          const edgeB = edge, ///
                edgeAMatchesEdgeB = edgeA.match(edgeB);

          if (edgeAMatchesEdgeB) {
            return true;
          }
        });

  return matches;
}

function nonTrivialCycleFromVertexes(vertexes, directedGraph) {
  const lastVertex = last(vertexes),
        index = vertexes.indexOf(lastVertex),
        start = index;  ///

  vertexes = vertexes.slice(start); ///

  vertexes.pop();

  const length = vertexes.length,
        edges = vertexes.map((vertex, index) => {
          const nextIndex = (index + 1) % length,
                nextVertex = vertexes[nextIndex],
                sourceVertex = vertex,  ///
                targetVertex = nextVertex, ///
                edge = directedGraph.findEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

          return edge;
        }),
        cycle = Cycle.fromEdges(edges);

  return cycle;
}

function someCyclePermutation(cycle, callback) {
  let result = false;

  const length = cycle.getLength();

  for (let offset = 0; offset < length; offset++) {
    result = callback(cycle);

    if (result) {
      break;
    }

    cycle = cycle.permuted();
  }

  return result;
}

function areCyclesCoincident(cycleA, cycleB) {
  let cyclesCoincident = false;

  const cycleALength = cycleA.getLength(),
        cycleBLength = cycleB.getLength();

  if (cycleALength === cycleBLength) {
    cyclesCoincident = someCyclePermutation(cycleA, (cycleA) => {
      const cycleAEqualTo = cycleA.isEqualTo(cycleB);

      if (cycleAEqualTo) {
        return true;
      }
    });
  }

  return cyclesCoincident;
}
