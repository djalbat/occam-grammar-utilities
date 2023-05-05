"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return DirectedGraph;
    },
    edgesMatchEdge: function() {
        return edgesMatchEdge;
    }
});
var _necessary = require("necessary");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var last = _necessary.arrayUtilities.last, find = _necessary.arrayUtilities.find, compress = _necessary.arrayUtilities.compress;
var DirectedGraph = /*#__PURE__*/ function() {
    function DirectedGraph(edges, startVertex) {
        _class_call_check(this, DirectedGraph);
        this.edges = edges;
        this.startVertex = startVertex;
    }
    _create_class(DirectedGraph, [
        {
            key: "getEdges",
            value: function getEdges() {
                return this.edges;
            }
        },
        {
            key: "getStartVertex",
            value: function getStartVertex() {
                return this.startVertex;
            }
        },
        {
            key: "addEdge",
            value: function addEdge(edge) {
                var matches = edgesMatchEdge(this.edges, edge);
                if (!matches) {
                    this.edges.push(edge);
                }
            }
        },
        {
            key: "addEdges",
            value: function addEdges(edges) {
                var _this = this;
                edges.forEach(function(edge) {
                    _this.addEdge(edge);
                });
            }
        },
        {
            key: "removeEdge",
            value: function removeEdge(edge) {
                var index = this.edges.indexOf(edge), start = index, deleteCount = 1;
                this.edges.splice(start, deleteCount);
            }
        },
        {
            key: "depthFirstSearch",
            value: function depthFirstSearch(vertex, vertexes, callback) {
                var _this = this;
                var previousVertexes = vertexes, successorVertexes = this.findSuccessorVertexes(vertex);
                successorVertexes.forEach(function(successorVertex) {
                    var previousVertexesIncludesSuccessorVertex = previousVertexes.includes(successorVertex), _$vertexes = _to_consumable_array(previousVertexes).concat([
                        successorVertex
                    ]), _$vertex = successorVertex; ///
                    if (previousVertexesIncludesSuccessorVertex) {
                        callback(_$vertexes);
                    } else {
                        _this.depthFirstSearch(_$vertex, _$vertexes, callback);
                    }
                });
            }
        },
        {
            key: "findCycles",
            value: function findCycles() {
                var trivialCycles = this.findTrivialCycles(), nonTrivialCycles = this.findNonTrivialCycles(), cycles = _to_consumable_array(trivialCycles).concat(_to_consumable_array(nonTrivialCycles));
                compress(cycles, function(cycleA, cycleB) {
                    var cyclesCoincident = areCyclesCoincident(cycleA, cycleB);
                    if (cyclesCoincident) {
                        return true;
                    }
                });
                return cycles;
            }
        },
        {
            key: "findTrivialCycles",
            value: function findTrivialCycles() {
                var triviallyCyclicEdges = this.findTriviallyCyclicEdges(), trivialCycles = triviallyCyclicEdges.map(function(trivlallyCyclicEdge) {
                    var sourceVertex = trivlallyCyclicEdge.getSourceVertex(), trivialCycle = [
                        sourceVertex
                    ];
                    return trivialCycle;
                });
                return trivialCycles;
            }
        },
        {
            key: "findNonTrivialCycles",
            value: function findNonTrivialCycles() {
                var nonTrivialCycles = [], vertex = this.startVertex, vertexes = [
                    vertex
                ];
                this.depthFirstSearch(vertex, vertexes, function(vertexes) {
                    var nonTrivialCycle = nonTrivialCycleFromVertexes(vertexes);
                    nonTrivialCycles.push(nonTrivialCycle);
                });
                return nonTrivialCycles;
            }
        },
        {
            key: "findSuccessorVertexes",
            value: function findSuccessorVertexes(vertex) {
                var sourceVertex = vertex, edges = this.findEdgesBySourceVertex(sourceVertex), successorEdges = edges.filter(function(edge) {
                    var targetVertex = edge.getTargetVertex();
                    if (targetVertex !== sourceVertex) {
                        return true;
                    }
                }), successorVertexes = successorEdges.map(function(successorEdge) {
                    var successorEdgeTargetVertex = successorEdge.getTargetVertex(), successorVertex = successorEdgeTargetVertex; ///
                    return successorVertex;
                });
                return successorVertexes;
            }
        },
        {
            key: "findEdgesBySourceVertex",
            value: function findEdgesBySourceVertex(sourceVertex) {
                var edges = find(this.edges, function(edge) {
                    var edgeMatchesSourceVertex = edge.matchSourceVertex(sourceVertex);
                    if (edgeMatchesSourceVertex) {
                        return true;
                    }
                });
                return edges;
            }
        },
        {
            key: "findTriviallyCyclicEdges",
            value: function findTriviallyCyclicEdges() {
                var triviallyCyclicEdges = find(this.edges, function(edge) {
                    var edgeTriviallyCyclic = edge.isTriviallyCyclic();
                    if (edgeTriviallyCyclic) {
                        return true;
                    }
                });
                return triviallyCyclicEdges;
            }
        },
        {
            key: "findEdgeBySourceVertexAndTargetVertex",
            value: function findEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
                var edge = this.edges.find(function(edge) {
                    var matches = edge.matchSourceVertexAndTargetVertex(sourceVertex, targetVertex);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return edge;
            }
        }
    ], [
        {
            key: "fromEdgesAndStartVertex",
            value: function fromEdgesAndStartVertex(edges, startVertex) {
                var directedGraph = new DirectedGraph(edges, startVertex);
                return directedGraph;
            }
        }
    ]);
    return DirectedGraph;
}();
function edgesMatchEdge(edges, edge) {
    var edgeA = edge, matches = edges.some(function(edge) {
        var edgeB = edge, edgeAMatchesEdgeB = edgeA.match(edgeB);
        if (edgeAMatchesEdgeB) {
            return true;
        }
    });
    return matches;
}
function nonTrivialCycleFromVertexes(vertexes) {
    var lastVertex = last(vertexes), index = vertexes.indexOf(lastVertex), vertexesLength = vertexes.length, start = index, end = vertexesLength - 1, cycle = vertexes.slice(start, end); ///
    return cycle;
}
function someCyclePermutation(cycle, callback) {
    var result = false;
    var length = cycle.length;
    for(var offset = 0; offset < length; offset++){
        result = callback(cycle);
        if (result) {
            break;
        }
        cycle = permuteCycle(cycle);
    }
    return result;
}
function areCyclesCoincident(cycleA, cycleB) {
    var cyclesCoincident = false;
    var cycleALength = cycleA.length, cycleBLength = cycleB.length;
    if (cycleALength === cycleBLength) {
        cyclesCoincident = someCyclePermutation(cycleA, function(cycleA) {
            var cyclesEqual = areCyclesEqual(cycleA, cycleB);
            if (cyclesEqual) {
                return true;
            }
        });
    }
    return cyclesCoincident;
}
function areCyclesEqual(cycleA, cycleB) {
    var vertexesA = cycleA, vertexesB = cycleB, cyclesEqual = vertexesA.every(function(vertexA, index) {
        var vertexB = vertexesB[index];
        if (vertexA === vertexB) {
            return true;
        }
    });
    return cyclesEqual;
}
function permuteCycle(cycle) {
    var vertexes = cycle.slice(), vertex = vertexes.pop();
    vertexes.unshift(vertex);
    cycle = vertexes; ///
    return cycle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBsYXN0LCBmaW5kLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihlZGdlcywgc3RhcnRWZXJ0ZXgpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gICAgdGhpcy5zdGFydFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cblxuICBnZXRTdGFydFZlcnRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFZlcnRleDtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlc01hdGNoRWRnZSh0aGlzLmVkZ2VzLCBlZGdlKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmVkZ2VzLmluZGV4T2YoZWRnZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZWRnZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBkZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhlcyA9IHZlcnRleGVzLCAgLy8vXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSB0aGlzLmZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyh2ZXJ0ZXgpO1xuXG4gICAgc3VjY2Vzc29yVmVydGV4ZXMuZm9yRWFjaCgoc3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c1ZlcnRleGVzSW5jbHVkZXNTdWNjZXNzb3JWZXJ0ZXggPSBwcmV2aW91c1ZlcnRleGVzLmluY2x1ZGVzKHN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgICB2ZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgICAgLi4ucHJldmlvdXNWZXJ0ZXhlcyxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdmVydGV4ID0gc3VjY2Vzc29yVmVydGV4OyAgLy8vXG5cbiAgICAgIGlmIChwcmV2aW91c1ZlcnRleGVzSW5jbHVkZXNTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICAgICAgY2FsbGJhY2sodmVydGV4ZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRDeWNsZXMoKSB7XG4gICAgY29uc3QgdHJpdmlhbEN5Y2xlcyA9IHRoaXMuZmluZFRyaXZpYWxDeWNsZXMoKSxcbiAgICAgICAgICBub25Ucml2aWFsQ3ljbGVzID0gdGhpcy5maW5kTm9uVHJpdmlhbEN5Y2xlcygpLFxuICAgICAgICAgIGN5Y2xlcyA9IFtcbiAgICAgICAgICAgIC4uLnRyaXZpYWxDeWNsZXMsXG4gICAgICAgICAgICAuLi5ub25Ucml2aWFsQ3ljbGVzXG4gICAgICAgICAgXTtcblxuICAgIGNvbXByZXNzKGN5Y2xlcywgKGN5Y2xlQSwgY3ljbGVCKSA9PiB7XG4gICAgICBjb25zdCBjeWNsZXNDb2luY2lkZW50ID0gYXJlQ3ljbGVzQ29pbmNpZGVudChjeWNsZUEsIGN5Y2xlQik7XG5cbiAgICAgIGlmIChjeWNsZXNDb2luY2lkZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN5Y2xlcztcbiAgfVxuXG4gIGZpbmRUcml2aWFsQ3ljbGVzKCkge1xuICAgIGNvbnN0IHRyaXZpYWxseUN5Y2xpY0VkZ2VzID0gdGhpcy5maW5kVHJpdmlhbGx5Q3ljbGljRWRnZXMoKSxcbiAgICAgICAgICB0cml2aWFsQ3ljbGVzID0gdHJpdmlhbGx5Q3ljbGljRWRnZXMubWFwKCh0cml2bGFsbHlDeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0cml2bGFsbHlDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleCgpLFxuICAgICAgICAgICAgICAgICAgdHJpdmlhbEN5Y2xlID0gW1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhcbiAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHJldHVybiB0cml2aWFsQ3ljbGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdHJpdmlhbEN5Y2xlcztcbiAgfVxuXG4gIGZpbmROb25Ucml2aWFsQ3ljbGVzKCkge1xuICAgIGNvbnN0IG5vblRyaXZpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSB0aGlzLnN0YXJ0VmVydGV4LCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleFxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLmRlcHRoRmlyc3RTZWFyY2godmVydGV4LCB2ZXJ0ZXhlcywgKHZlcnRleGVzKSA9PiB7XG4gICAgICBjb25zdCBub25Ucml2aWFsQ3ljbGUgPSBub25Ucml2aWFsQ3ljbGVGcm9tVmVydGV4ZXModmVydGV4ZXMpO1xuXG4gICAgICBub25Ucml2aWFsQ3ljbGVzLnB1c2gobm9uVHJpdmlhbEN5Y2xlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBub25Ucml2aWFsQ3ljbGVzO1xuICB9XG5cbiAgZmluZFN1Y2Nlc3NvclZlcnRleGVzKHZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgIGVkZ2VzID0gdGhpcy5maW5kRWRnZXNCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICAgIHN1Y2Nlc3NvckVkZ2VzID0gZWRnZXMuZmlsdGVyKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXggPSBlZGdlLmdldFRhcmdldFZlcnRleCgpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBzb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBzdWNjZXNzb3JFZGdlcy5tYXAoKHN1Y2Nlc3NvckVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvckVkZ2VUYXJnZXRWZXJ0ZXggPSBzdWNjZXNzb3JFZGdlLmdldFRhcmdldFZlcnRleCgpLFxuICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4ID0gc3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleDsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3QgZWRnZXMgPSBmaW5kKHRoaXMuZWRnZXMsIChlZGdlKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZWRnZU1hdGNoZXNTb3VyY2VWZXJ0ZXggPSBlZGdlLm1hdGNoU291cmNlVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICAgIGlmIChlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCB0cml2aWFsbHlDeWNsaWNFZGdlcyA9IGZpbmQodGhpcy5lZGdlcywgKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2VUcml2aWFsbHlDeWNsaWMgPSBlZGdlLmlzVHJpdmlhbGx5Q3ljbGljKCk7XG5cbiAgICAgIGlmIChlZGdlVHJpdmlhbGx5Q3ljbGljKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyaXZpYWxseUN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZmluZEVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2UgPSB0aGlzLmVkZ2VzLmZpbmQoKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FZGdlc0FuZFN0YXJ0VmVydGV4KGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIGNvbnN0IGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChlZGdlcywgc3RhcnRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzTWF0Y2hFZGdlKGVkZ2VzLCBlZGdlKSB7XG4gIGNvbnN0IGVkZ2VBID0gZWRnZSwgLy8vXG4gICAgICAgIG1hdGNoZXMgPSBlZGdlcy5zb21lKChlZGdlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZWRnZUIgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgICBlZGdlQU1hdGNoZXNFZGdlQiA9IGVkZ2VBLm1hdGNoKGVkZ2VCKTtcblxuICAgICAgICAgIGlmIChlZGdlQU1hdGNoZXNFZGdlQikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbm9uVHJpdmlhbEN5Y2xlRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IGxhc3RWZXJ0ZXggPSBsYXN0KHZlcnRleGVzKSxcbiAgICAgICAgaW5kZXggPSB2ZXJ0ZXhlcy5pbmRleE9mKGxhc3RWZXJ0ZXgpLFxuICAgICAgICB2ZXJ0ZXhlc0xlbmd0aCA9IHZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgZW5kID0gdmVydGV4ZXNMZW5ndGggLSAxLFxuICAgICAgICBjeWNsZSA9IHZlcnRleGVzLnNsaWNlKHN0YXJ0LCBlbmQpOyAvLy9cblxuICByZXR1cm4gY3ljbGU7XG59XG5cbmZ1bmN0aW9uIHNvbWVDeWNsZVBlcm11dGF0aW9uKGN5Y2xlLCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgY29uc3QgbGVuZ3RoID0gY3ljbGUubGVuZ3RoO1xuXG4gIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICByZXN1bHQgPSBjYWxsYmFjayhjeWNsZSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjeWNsZSA9IHBlcm11dGVDeWNsZShjeWNsZSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBhcmVDeWNsZXNDb2luY2lkZW50KGN5Y2xlQSwgY3ljbGVCKSB7XG4gIGxldCBjeWNsZXNDb2luY2lkZW50ID0gZmFsc2U7XG5cbiAgY29uc3QgY3ljbGVBTGVuZ3RoID0gY3ljbGVBLmxlbmd0aCxcbiAgICAgICAgY3ljbGVCTGVuZ3RoID0gY3ljbGVCLmxlbmd0aDtcblxuICBpZiAoY3ljbGVBTGVuZ3RoID09PSBjeWNsZUJMZW5ndGgpIHtcbiAgICBjeWNsZXNDb2luY2lkZW50ID0gc29tZUN5Y2xlUGVybXV0YXRpb24oY3ljbGVBLCAoY3ljbGVBKSA9PiB7XG4gICAgICBjb25zdCBjeWNsZXNFcXVhbCA9IGFyZUN5Y2xlc0VxdWFsKGN5Y2xlQSwgY3ljbGVCKTtcblxuICAgICAgaWYgKGN5Y2xlc0VxdWFsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xlc0NvaW5jaWRlbnQ7XG59XG5cbmZ1bmN0aW9uIGFyZUN5Y2xlc0VxdWFsKGN5Y2xlQSwgY3ljbGVCKSB7XG4gIGNvbnN0IHZlcnRleGVzQSA9IGN5Y2xlQSwgLy8vXG4gICAgICAgIHZlcnRleGVzQiA9IGN5Y2xlQiwgLy8vXG4gICAgICAgIGN5Y2xlc0VxdWFsID0gdmVydGV4ZXNBLmV2ZXJ5KCh2ZXJ0ZXhBLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcnRleEIgPSB2ZXJ0ZXhlc0JbaW5kZXhdO1xuXG4gICAgICAgICAgaWYgKHZlcnRleEEgPT09IHZlcnRleEIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGN5Y2xlc0VxdWFsO1xufVxuXG5mdW5jdGlvbiBwZXJtdXRlQ3ljbGUoY3ljbGUpIHtcbiAgY29uc3QgdmVydGV4ZXMgPSBjeWNsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgdmVydGV4ID0gdmVydGV4ZXMucG9wKCk7XG5cbiAgdmVydGV4ZXMudW5zaGlmdCh2ZXJ0ZXgpO1xuXG4gIGN5Y2xlID0gdmVydGV4ZXM7IC8vL1xuXG4gIHJldHVybiBjeWNsZTtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RlZEdyYXBoIiwiZWRnZXNNYXRjaEVkZ2UiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaW5kIiwiY29tcHJlc3MiLCJlZGdlcyIsInN0YXJ0VmVydGV4IiwiZ2V0RWRnZXMiLCJnZXRTdGFydFZlcnRleCIsImFkZEVkZ2UiLCJlZGdlIiwibWF0Y2hlcyIsInB1c2giLCJhZGRFZGdlcyIsImZvckVhY2giLCJyZW1vdmVFZGdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImRlcHRoRmlyc3RTZWFyY2giLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhlcyIsImNhbGxiYWNrIiwicHJldmlvdXNWZXJ0ZXhlcyIsInN1Y2Nlc3NvclZlcnRleGVzIiwiZmluZFN1Y2Nlc3NvclZlcnRleGVzIiwic3VjY2Vzc29yVmVydGV4IiwicHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4IiwiaW5jbHVkZXMiLCJmaW5kQ3ljbGVzIiwidHJpdmlhbEN5Y2xlcyIsImZpbmRUcml2aWFsQ3ljbGVzIiwibm9uVHJpdmlhbEN5Y2xlcyIsImZpbmROb25Ucml2aWFsQ3ljbGVzIiwiY3ljbGVzIiwiY3ljbGVBIiwiY3ljbGVCIiwiY3ljbGVzQ29pbmNpZGVudCIsImFyZUN5Y2xlc0NvaW5jaWRlbnQiLCJ0cml2aWFsbHlDeWNsaWNFZGdlcyIsImZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcyIsIm1hcCIsInRyaXZsYWxseUN5Y2xpY0VkZ2UiLCJzb3VyY2VWZXJ0ZXgiLCJnZXRTb3VyY2VWZXJ0ZXgiLCJ0cml2aWFsQ3ljbGUiLCJub25Ucml2aWFsQ3ljbGUiLCJub25Ucml2aWFsQ3ljbGVGcm9tVmVydGV4ZXMiLCJmaW5kRWRnZXNCeVNvdXJjZVZlcnRleCIsInN1Y2Nlc3NvckVkZ2VzIiwiZmlsdGVyIiwidGFyZ2V0VmVydGV4IiwiZ2V0VGFyZ2V0VmVydGV4Iiwic3VjY2Vzc29yRWRnZSIsInN1Y2Nlc3NvckVkZ2VUYXJnZXRWZXJ0ZXgiLCJlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCIsIm1hdGNoU291cmNlVmVydGV4IiwiZWRnZVRyaXZpYWxseUN5Y2xpYyIsImlzVHJpdmlhbGx5Q3ljbGljIiwiZmluZEVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsIm1hdGNoU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiZnJvbUVkZ2VzQW5kU3RhcnRWZXJ0ZXgiLCJkaXJlY3RlZEdyYXBoIiwiZWRnZUEiLCJzb21lIiwiZWRnZUIiLCJlZGdlQU1hdGNoZXNFZGdlQiIsIm1hdGNoIiwibGFzdFZlcnRleCIsInZlcnRleGVzTGVuZ3RoIiwibGVuZ3RoIiwiZW5kIiwiY3ljbGUiLCJzbGljZSIsInNvbWVDeWNsZVBlcm11dGF0aW9uIiwicmVzdWx0Iiwib2Zmc2V0IiwicGVybXV0ZUN5Y2xlIiwiY3ljbGVBTGVuZ3RoIiwiY3ljbGVCTGVuZ3RoIiwiY3ljbGVzRXF1YWwiLCJhcmVDeWNsZXNFcXVhbCIsInZlcnRleGVzQSIsInZlcnRleGVzQiIsImV2ZXJ5IiwidmVydGV4QSIsInZlcnRleEIiLCJwb3AiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBTXFCQTs7SUF3S0xDLGNBQWM7ZUFBZEE7Ozt5QkE1S2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFRQyxPQUF5QkMseUJBQWMsQ0FBdkNELE1BQU1FLE9BQW1CRCx5QkFBYyxDQUFqQ0MsTUFBTUMsV0FBYUYseUJBQWMsQ0FBM0JFO0FBRUwsSUFBQSxBQUFNTCw4QkF3S2xCLEFBeEtZO2FBQU1BLGNBQ1BNLEtBQUssRUFBRUMsV0FBVztnQ0FEWFA7UUFFakIsSUFBSSxDQUFDTSxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFIRlA7O1lBTW5CUSxLQUFBQTttQkFB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