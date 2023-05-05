"use strict";

import { characters } from "necessary";

const { COMMA_CHARACTER } = characters;

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

    edges.push(edge);

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
}
