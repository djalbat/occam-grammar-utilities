"use strict";

import { characters, arrayUtilities } from "necessary";

const { last } = arrayUtilities,
      { COMMA_CHARACTER } = characters;

export default class Cycle {
  constructor(edges) {
    this.edges = edges;
  }

  getEdges() {
    return this.edges;
  }

  getLength() {
    const length = this.edges.length;

    return length;
  }

  getEdge(index) {
    const edge = this.edges[index];

    return edge;
  }

  getVertexes() {
    const vertexes = this.mapEdge((edge) => {
      const sourceVertex = edge.getSourceVertex(),
            vertex = sourceVertex;  ///

      return vertex;
    });

    return vertexes;
  }

  mapEdge(callback) { return this.edges.map(callback); }

  everyEdge(callback) { return this.edges.every(callback); }

  forEachEdge(callback) { return this.edges.forEach(callback); }

  isEqualTo(cycle) {
    let equalTo = false;

    const cycleA = this,  ///
          cycleB = cycle,  ///
          cycleALength = cycleA.getLength(),
          cycleBLength = cycleB.getLength();

    if (cycleALength === cycleBLength) {
      equalTo = cycleA.everyEdge((edgeA, index) => {
        const edgeB = cycleB.getEdge(index),
              matches = edgeA.match(edgeB);

        if (matches) {
          return true;
        }
      });
    }

    return equalTo;
  }

  permuted() {
    const edges = this.edges.slice(), ///
          edge = edges.pop();

    edges.unshift(edge);

    const cycle = new Cycle(edges);

    return cycle;
  }

  asString() {
    const vertexes = this.getVertexes(),
          string = vertexes.join(COMMA_CHARACTER);

    return string;
  }

  static fromEdge(edge) {
    const edges = [
            edge
          ],
          cycle = new Cycle(edges);

    return cycle;
  }

  static fromEdges(edges) {
    const cycle = new Cycle(edges);

    return cycle;
  }

  static fromGraphAndVertexes(graph, vertexes) {
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
                  edge = graph.findEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex);

            return edge;
          }),
          cycle = new Cycle(edges);

    return cycle;
  }
}

export function areCyclesCoincident(cycleA, cycleB) {
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
