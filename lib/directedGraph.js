"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return DirectedGraph;
    },
    get edgesMatchEdge () {
        return edgesMatchEdge;
    }
});
const _necessary = require("necessary");
const _cycle = /*#__PURE__*/ _interop_require_default(require("./cycle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { last, find, compress } = _necessary.arrayUtilities;
class DirectedGraph {
    constructor(edges, startVertex){
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
        edges.forEach((edge)=>{
            this.addEdge(edge);
        });
    }
    removeEdge(edge) {
        const index = this.edges.indexOf(edge), start = index, deleteCount = 1;
        this.edges.splice(start, deleteCount);
    }
    depthFirstSearch(vertex, vertexes, callback) {
        const previousVertexes = vertexes, successorVertexes = this.findSuccessorVertexes(vertex);
        successorVertexes.forEach((successorVertex)=>{
            const previousVertexesIncludesSuccessorVertex = previousVertexes.includes(successorVertex), vertexes = [
                ...previousVertexes,
                successorVertex
            ], vertex = successorVertex; ///
            if (previousVertexesIncludesSuccessorVertex) {
                callback(vertexes);
            } else {
                this.depthFirstSearch(vertex, vertexes, callback);
            }
        });
    }
    findCycles() {
        const trivialCycles = this.findTrivialCycles(), nonTrivialCycles = this.findNonTrivialCycles(), cycles = [
            ...trivialCycles,
            ...nonTrivialCycles
        ];
        compress(cycles, (cycleA, cycleB)=>{
            const cyclesCoincident = areCyclesCoincident(cycleA, cycleB);
            if (!cyclesCoincident) {
                return true;
            }
        });
        return cycles;
    }
    findTrivialCycles() {
        const triviallyCyclicEdges = this.findTriviallyCyclicEdges(), trivialCycles = triviallyCyclicEdges.map((triviallyCyclicEdge)=>{
            const edge = triviallyCyclicEdge, cycle = _cycle.default.fromEdge(edge), trivialCycle = cycle; ///
            return trivialCycle;
        });
        return trivialCycles;
    }
    findNonTrivialCycles() {
        const nonTrivialCycles = [], directedGraph = this, vertex = this.startVertex, vertexes = [
            vertex
        ];
        this.depthFirstSearch(vertex, vertexes, (vertexes)=>{
            const nonTrivialCycle = nonTrivialCycleFromVertexes(vertexes, directedGraph);
            nonTrivialCycles.push(nonTrivialCycle);
        });
        return nonTrivialCycles;
    }
    findSuccessorEdges(vertex) {
        const sourceVertex = vertex, edges = this.findEdgesBySourceVertex(sourceVertex), successorEdges = edges.filter((edge)=>{
            const targetVertex = edge.getTargetVertex();
            if (targetVertex !== sourceVertex) {
                return true;
            }
        });
        return successorEdges;
    }
    findSuccessorVertexes(vertex) {
        const successorEdges = this.findSuccessorEdges(vertex), successorVertexes = successorEdges.map((successorEdge)=>{
            const successorEdgeTargetVertex = successorEdge.getTargetVertex(), successorVertex = successorEdgeTargetVertex; ///
            return successorVertex;
        });
        return successorVertexes;
    }
    findEdgesBySourceVertex(sourceVertex) {
        const edges = find(this.edges, (edge)=>{
            const edgeMatchesSourceVertex = edge.matchSourceVertex(sourceVertex);
            if (edgeMatchesSourceVertex) {
                return true;
            }
        });
        return edges;
    }
    findTriviallyCyclicEdges() {
        const triviallyCyclicEdges = find(this.edges, (edge)=>{
            const edgeTriviallyCyclic = edge.isTriviallyCyclic();
            if (edgeTriviallyCyclic) {
                return true;
            }
        });
        return triviallyCyclicEdges;
    }
    findEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
        const edge = this.edges.find((edge)=>{
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
function edgesMatchEdge(edges, edge) {
    const edgeA = edge, matches = edges.some((edge)=>{
        const edgeB = edge, edgeAMatchesEdgeB = edgeA.match(edgeB);
        if (edgeAMatchesEdgeB) {
            return true;
        }
    });
    return matches;
}
function nonTrivialCycleFromVertexes(vertexes, directedGraph) {
    const lastVertex = last(vertexes), index = vertexes.indexOf(lastVertex), start = index; ///
    vertexes = vertexes.slice(start); ///
    vertexes.pop();
    const length = vertexes.length, edges = vertexes.map((vertex, index)=>{
        const nextIndex = (index + 1) % length, nextVertex = vertexes[nextIndex], sourceVertex = vertex, targetVertex = nextVertex, edge = directedGraph.findEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
        return edge;
    }), cycle = _cycle.default.fromEdges(edges);
    return cycle;
}
function someCyclePermutation(cycle, callback) {
    let result = false;
    const length = cycle.getLength();
    for(let offset = 0; offset < length; offset++){
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
    const cycleALength = cycleA.getLength(), cycleBLength = cycleB.getLength();
    if (cycleALength === cycleBLength) {
        cyclesCoincident = someCyclePermutation(cycleA, (cycleA)=>{
            const cycleAEqualTo = cycleA.isEqualTo(cycleB);
            if (cycleAEqualTo) {
                return true;
            }
        });
    }
    return cyclesCoincident;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmluZCwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RlZEdyYXBoIHtcbiAgY29uc3RydWN0b3IoZWRnZXMsIHN0YXJ0VmVydGV4KSB7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICAgIHRoaXMuc3RhcnRWZXJ0ZXggPSBzdGFydFZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG5cbiAgZ2V0U3RhcnRWZXJ0ZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRWZXJ0ZXg7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZWRnZXNNYXRjaEVkZ2UodGhpcy5lZGdlcywgZWRnZSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICB9XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5lZGdlcy5pbmRleE9mKGVkZ2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmVkZ2VzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHByZXZpb3VzVmVydGV4ZXMgPSB2ZXJ0ZXhlcywgIC8vL1xuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gdGhpcy5maW5kU3VjY2Vzc29yVmVydGV4ZXModmVydGV4KTtcblxuICAgIHN1Y2Nlc3NvclZlcnRleGVzLmZvckVhY2goKHN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4ID0gcHJldmlvdXNWZXJ0ZXhlcy5pbmNsdWRlcyhzdWNjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgICAgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnByZXZpb3VzVmVydGV4ZXMsXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZlcnRleCA9IHN1Y2Nlc3NvclZlcnRleDsgIC8vL1xuXG4gICAgICBpZiAocHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgICAgIGNhbGxiYWNrKHZlcnRleGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQ3ljbGVzKCkge1xuICAgIGNvbnN0IHRyaXZpYWxDeWNsZXMgPSB0aGlzLmZpbmRUcml2aWFsQ3ljbGVzKCksXG4gICAgICAgICAgbm9uVHJpdmlhbEN5Y2xlcyA9IHRoaXMuZmluZE5vblRyaXZpYWxDeWNsZXMoKSxcbiAgICAgICAgICBjeWNsZXMgPSBbXG4gICAgICAgICAgICAuLi50cml2aWFsQ3ljbGVzLFxuICAgICAgICAgICAgLi4ubm9uVHJpdmlhbEN5Y2xlc1xuICAgICAgICAgIF07XG5cbiAgICBjb21wcmVzcyhjeWNsZXMsIChjeWNsZUEsIGN5Y2xlQikgPT4ge1xuICAgICAgY29uc3QgY3ljbGVzQ29pbmNpZGVudCA9IGFyZUN5Y2xlc0NvaW5jaWRlbnQoY3ljbGVBLCBjeWNsZUIpO1xuXG4gICAgICBpZiAoIWN5Y2xlc0NvaW5jaWRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGVzO1xuICB9XG5cbiAgZmluZFRyaXZpYWxDeWNsZXMoKSB7XG4gICAgY29uc3QgdHJpdmlhbGx5Q3ljbGljRWRnZXMgPSB0aGlzLmZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcygpLFxuICAgICAgICAgIHRyaXZpYWxDeWNsZXMgPSB0cml2aWFsbHlDeWNsaWNFZGdlcy5tYXAoKHRyaXZpYWxseUN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UgPSB0cml2aWFsbHlDeWNsaWNFZGdlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21FZGdlKGVkZ2UpLFxuICAgICAgICAgICAgICAgICAgdHJpdmlhbEN5Y2xlID0gY3ljbGU7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHJpdmlhbEN5Y2xlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyaXZpYWxDeWNsZXM7XG4gIH1cblxuICBmaW5kTm9uVHJpdmlhbEN5Y2xlcygpIHtcbiAgICBjb25zdCBub25Ucml2aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZlcnRleCA9IHRoaXMuc3RhcnRWZXJ0ZXgsIC8vL1xuICAgICAgICAgIHZlcnRleGVzID0gW1xuICAgICAgICAgICAgdmVydGV4XG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCAodmVydGV4ZXMpID0+IHtcbiAgICAgIGNvbnN0IG5vblRyaXZpYWxDeWNsZSA9IG5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcywgZGlyZWN0ZWRHcmFwaCk7XG5cbiAgICAgIG5vblRyaXZpYWxDeWNsZXMucHVzaChub25Ucml2aWFsQ3ljbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxDeWNsZXM7XG4gIH1cblxuICBmaW5kU3VjY2Vzc29yRWRnZXModmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmZpbmRFZGdlc0J5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgc3VjY2Vzc29yRWRnZXMgPSBlZGdlcy5maWx0ZXIoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4KCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JFZGdlcztcbiAgfVxuXG4gIGZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyh2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JFZGdlcyA9IHRoaXMuZmluZFN1Y2Nlc3NvckVkZ2VzKHZlcnRleCksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBzdWNjZXNzb3JFZGdlcy5tYXAoKHN1Y2Nlc3NvckVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvckVkZ2VUYXJnZXRWZXJ0ZXggPSBzdWNjZXNzb3JFZGdlLmdldFRhcmdldFZlcnRleCgpLFxuICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4ID0gc3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleDsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3QgZWRnZXMgPSBmaW5kKHRoaXMuZWRnZXMsIChlZGdlKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZWRnZU1hdGNoZXNTb3VyY2VWZXJ0ZXggPSBlZGdlLm1hdGNoU291cmNlVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICAgIGlmIChlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCB0cml2aWFsbHlDeWNsaWNFZGdlcyA9IGZpbmQodGhpcy5lZGdlcywgKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2VUcml2aWFsbHlDeWNsaWMgPSBlZGdlLmlzVHJpdmlhbGx5Q3ljbGljKCk7XG5cbiAgICAgIGlmIChlZGdlVHJpdmlhbGx5Q3ljbGljKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyaXZpYWxseUN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZmluZEVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2UgPSB0aGlzLmVkZ2VzLmZpbmQoKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FZGdlc0FuZFN0YXJ0VmVydGV4KGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIGNvbnN0IGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChlZGdlcywgc3RhcnRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzTWF0Y2hFZGdlKGVkZ2VzLCBlZGdlKSB7XG4gIGNvbnN0IGVkZ2VBID0gZWRnZSwgLy8vXG4gICAgICAgIG1hdGNoZXMgPSBlZGdlcy5zb21lKChlZGdlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZWRnZUIgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgICBlZGdlQU1hdGNoZXNFZGdlQiA9IGVkZ2VBLm1hdGNoKGVkZ2VCKTtcblxuICAgICAgICAgIGlmIChlZGdlQU1hdGNoZXNFZGdlQikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbm9uVHJpdmlhbEN5Y2xlRnJvbVZlcnRleGVzKHZlcnRleGVzLCBkaXJlY3RlZEdyYXBoKSB7XG4gIGNvbnN0IGxhc3RWZXJ0ZXggPSBsYXN0KHZlcnRleGVzKSxcbiAgICAgICAgaW5kZXggPSB2ZXJ0ZXhlcy5pbmRleE9mKGxhc3RWZXJ0ZXgpLFxuICAgICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG5cbiAgdmVydGV4ZXMgPSB2ZXJ0ZXhlcy5zbGljZShzdGFydCk7IC8vL1xuXG4gIHZlcnRleGVzLnBvcCgpO1xuXG4gIGNvbnN0IGxlbmd0aCA9IHZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgZWRnZXMgPSB2ZXJ0ZXhlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSAoaW5kZXggKyAxKSAlIGxlbmd0aCxcbiAgICAgICAgICAgICAgICBuZXh0VmVydGV4ID0gdmVydGV4ZXNbbmV4dEluZGV4XSxcbiAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSBuZXh0VmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICBlZGdlID0gZGlyZWN0ZWRHcmFwaC5maW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBlZGdlO1xuICAgICAgICB9KSxcbiAgICAgICAgY3ljbGUgPSBDeWNsZS5mcm9tRWRnZXMoZWRnZXMpO1xuXG4gIHJldHVybiBjeWNsZTtcbn1cblxuZnVuY3Rpb24gc29tZUN5Y2xlUGVybXV0YXRpb24oY3ljbGUsIGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICBjb25zdCBsZW5ndGggPSBjeWNsZS5nZXRMZW5ndGgoKTtcblxuICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBsZW5ndGg7IG9mZnNldCsrKSB7XG4gICAgcmVzdWx0ID0gY2FsbGJhY2soY3ljbGUpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY3ljbGUgPSBjeWNsZS5wZXJtdXRlZCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gYXJlQ3ljbGVzQ29pbmNpZGVudChjeWNsZUEsIGN5Y2xlQikge1xuICBsZXQgY3ljbGVzQ29pbmNpZGVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGN5Y2xlQUxlbmd0aCA9IGN5Y2xlQS5nZXRMZW5ndGgoKSxcbiAgICAgICAgY3ljbGVCTGVuZ3RoID0gY3ljbGVCLmdldExlbmd0aCgpO1xuXG4gIGlmIChjeWNsZUFMZW5ndGggPT09IGN5Y2xlQkxlbmd0aCkge1xuICAgIGN5Y2xlc0NvaW5jaWRlbnQgPSBzb21lQ3ljbGVQZXJtdXRhdGlvbihjeWNsZUEsIChjeWNsZUEpID0+IHtcbiAgICAgIGNvbnN0IGN5Y2xlQUVxdWFsVG8gPSBjeWNsZUEuaXNFcXVhbFRvKGN5Y2xlQik7XG5cbiAgICAgIGlmIChjeWNsZUFFcXVhbFRvKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xlc0NvaW5jaWRlbnQ7XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0ZWRHcmFwaCIsImVkZ2VzTWF0Y2hFZGdlIiwibGFzdCIsImZpbmQiLCJjb21wcmVzcyIsImFycmF5VXRpbGl0aWVzIiwiZWRnZXMiLCJzdGFydFZlcnRleCIsImdldEVkZ2VzIiwiZ2V0U3RhcnRWZXJ0ZXgiLCJhZGRFZGdlIiwiZWRnZSIsIm1hdGNoZXMiLCJwdXNoIiwiYWRkRWRnZXMiLCJmb3JFYWNoIiwicmVtb3ZlRWRnZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZXB0aEZpcnN0U2VhcmNoIiwidmVydGV4IiwidmVydGV4ZXMiLCJjYWxsYmFjayIsInByZXZpb3VzVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXhlcyIsImZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyIsInN1Y2Nlc3NvclZlcnRleCIsInByZXZpb3VzVmVydGV4ZXNJbmNsdWRlc1N1Y2Nlc3NvclZlcnRleCIsImluY2x1ZGVzIiwiZmluZEN5Y2xlcyIsInRyaXZpYWxDeWNsZXMiLCJmaW5kVHJpdmlhbEN5Y2xlcyIsIm5vblRyaXZpYWxDeWNsZXMiLCJmaW5kTm9uVHJpdmlhbEN5Y2xlcyIsImN5Y2xlcyIsImN5Y2xlQSIsImN5Y2xlQiIsImN5Y2xlc0NvaW5jaWRlbnQiLCJhcmVDeWNsZXNDb2luY2lkZW50IiwidHJpdmlhbGx5Q3ljbGljRWRnZXMiLCJmaW5kVHJpdmlhbGx5Q3ljbGljRWRnZXMiLCJtYXAiLCJ0cml2aWFsbHlDeWNsaWNFZGdlIiwiY3ljbGUiLCJDeWNsZSIsImZyb21FZGdlIiwidHJpdmlhbEN5Y2xlIiwiZGlyZWN0ZWRHcmFwaCIsIm5vblRyaXZpYWxDeWNsZSIsIm5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyIsImZpbmRTdWNjZXNzb3JFZGdlcyIsInNvdXJjZVZlcnRleCIsImZpbmRFZGdlc0J5U291cmNlVmVydGV4Iiwic3VjY2Vzc29yRWRnZXMiLCJmaWx0ZXIiLCJ0YXJnZXRWZXJ0ZXgiLCJnZXRUYXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JFZGdlIiwic3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleCIsImVkZ2VNYXRjaGVzU291cmNlVmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXgiLCJlZGdlVHJpdmlhbGx5Q3ljbGljIiwiaXNUcml2aWFsbHlDeWNsaWMiLCJmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJmcm9tRWRnZXNBbmRTdGFydFZlcnRleCIsImVkZ2VBIiwic29tZSIsImVkZ2VCIiwiZWRnZUFNYXRjaGVzRWRnZUIiLCJtYXRjaCIsImxhc3RWZXJ0ZXgiLCJzbGljZSIsInBvcCIsImxlbmd0aCIsIm5leHRJbmRleCIsIm5leHRWZXJ0ZXgiLCJmcm9tRWRnZXMiLCJzb21lQ3ljbGVQZXJtdXRhdGlvbiIsInJlc3VsdCIsImdldExlbmd0aCIsIm9mZnNldCIsInBlcm11dGVkIiwiY3ljbGVBTGVuZ3RoIiwiY3ljbGVCTGVuZ3RoIiwiY3ljbGVBRXF1YWxUbyIsImlzRXF1YWxUbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBUUE7ZUFBcUJBOztRQThLTEM7ZUFBQUE7OzsyQkFwTGU7OERBRWI7Ozs7OztBQUVsQixNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUUsR0FBR0MseUJBQWM7QUFFaEMsTUFBTUw7SUFDbkIsWUFBWU0sS0FBSyxFQUFFQyxXQUFXLENBQUU7UUFDOUIsSUFBSSxDQUFDRCxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFdB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