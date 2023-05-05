"use strict";

import { arrayUtilities } from "necessary";

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
          trivialCycles = triviallyCyclicEdges.map((trivlallyCyclicEdge) => {
            const sourceVertex = trivlallyCyclicEdge.getSourceVertex(),
                  trivialCycle = [
                    sourceVertex
                  ];

            return trivialCycle;
          });

    return trivialCycles;
  }

  findNonTrivialCycles() {
    const nonTrivialCycles = [],
          vertex = this.startVertex, ///
          vertexes = [
            vertex
          ];

    this.depthFirstSearch(vertex, vertexes, (vertexes) => {
      const nonTrivialCycle = nonTrivialCycleFromVertexes(vertexes);

      nonTrivialCycles.push(nonTrivialCycle);
    });

    return nonTrivialCycles;
  }

  findSuccessorVertexes(vertex) {
    const sourceVertex = vertex,  ///
          edges = this.findEdgesBySourceVertex(sourceVertex),
          successorEdges = edges.filter((edge) => {
            const targetVertex = edge.getTargetVertex();

            if (targetVertex !== sourceVertex) {
              return true;
            }
          }),
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

function nonTrivialCycleFromVertexes(vertexes) {
  const lastVertex = last(vertexes),
        index = vertexes.indexOf(lastVertex),
        vertexesLength = vertexes.length,
        start = index,
        end = vertexesLength - 1,
        cycle = vertexes.slice(start, end); ///

  return cycle;
}

function someCyclePermutation(cycle, callback) {
  let result = false;

  const length = cycle.length;

  for (let offset = 0; offset < length; offset++) {
    result = callback(cycle);

    if (result) {
      break;
    }

    cycle = permuteCycle(cycle);
  }

  return result;
}

function areCyclesCoincident(cycleA, cycleB) {
  let cyclesCoincident = false;

  const cycleALength = cycleA.length,
        cycleBLength = cycleB.length;

  if (cycleALength === cycleBLength) {
    cyclesCoincident = someCyclePermutation(cycleA, (cycleA) => {
      const cyclesEqual = areCyclesEqual(cycleA, cycleB);

      if (cyclesEqual) {
        return true;
      }
    });
  }

  return cyclesCoincident;
}

function areCyclesEqual(cycleA, cycleB) {
  const vertexesA = cycleA, ///
        vertexesB = cycleB, ///
        cyclesEqual = vertexesA.every((vertexA, index) => {
          const vertexB = vertexesB[index];

          if (vertexA === vertexB) {
            return true;
          }
        });

  return cyclesEqual;
}

function permuteCycle(cycle) {
  const vertexes = cycle.slice(), ///
        vertex = vertexes.pop();

  vertexes.unshift(vertex);

  cycle = vertexes; ///

  return cycle;
}
