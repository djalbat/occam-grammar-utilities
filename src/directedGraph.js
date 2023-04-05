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
    const edgeA = edge, ///
          matches = this.edges.some((edge) => {
            const edgeB = edge, ///
                  edgeAMatchesEdgeB = edgeA.match(edgeB);

            if (edgeAMatchesEdgeB) {
              return true;
            }
          });

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
    const triviallyCyclicEdges = this.find((edge) => {
      const edgeTriviallyCyclic = edge.isTriviallyCyclic();

      if (edgeTriviallyCyclic) {
        return true;
      }
    });

    return triviallyCyclicEdges;
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

  addEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
    const edge = Edge.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);

    this.edges.push(edge);
  }

  removeEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
    const edge = this.findEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

    this.removeEdge(edge);
  }

  static fromEdgesAndStartVertex(edges, startVertex) {
    const directedGraph = new DirectedGraph(edges, startVertex);

    return directedGraph;
  }
}

function nonTrivialCycleFromVertexes(vertexes) {
  const lastVertex = last(vertexes),
        index = vertexes.indexOf(lastVertex),
        vertexesLength = vertexes.length,
        start = index,
        end = vertexesLength - 1,
        cycle = vertexes.slice(start, end);

  return cycle;
}
