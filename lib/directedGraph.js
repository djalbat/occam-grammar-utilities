"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectedGraph;
    }
});
var _array = require("./utilities/array");
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
                var edgeA = edge, matches = this.edges.some(function(edge) {
                    var edgeB = edge, edgeAMatchesEdgeB = edgeA.match(edgeB);
                    if (edgeAMatchesEdgeB) {
                        return true;
                    }
                });
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
                var edges = (0, _array.find)(this.edges, function(edge) {
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
                var triviallyCyclicEdges = (0, _array.find)(this.edges, function(edge) {
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
                    var matches = edge.match(sourceVertex, targetVertex);
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
function nonTrivialCycleFromVertexes(vertexes) {
    var lastVertex = (0, _array.last)(vertexes), index = vertexes.indexOf(lastVertex), vertexesLength = vertexes.length, start = index, end = vertexesLength - 1, cycle = vertexes.slice(start, end); ///
    return cycle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0LCBmaW5kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihlZGdlcywgc3RhcnRWZXJ0ZXgpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gICAgdGhpcy5zdGFydFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cblxuICBnZXRTdGFydFZlcnRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFZlcnRleDtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IGVkZ2VBID0gZWRnZSwgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMuZWRnZXMuc29tZSgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRnZUIgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGVkZ2VBTWF0Y2hlc0VkZ2VCID0gZWRnZUEubWF0Y2goZWRnZUIpO1xuXG4gICAgICAgICAgICBpZiAoZWRnZUFNYXRjaGVzRWRnZUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICB9XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5lZGdlcy5pbmRleE9mKGVkZ2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmVkZ2VzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHByZXZpb3VzVmVydGV4ZXMgPSB2ZXJ0ZXhlcywgIC8vL1xuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gdGhpcy5maW5kU3VjY2Vzc29yVmVydGV4ZXModmVydGV4KTtcblxuICAgIHN1Y2Nlc3NvclZlcnRleGVzLmZvckVhY2goKHN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4ID0gcHJldmlvdXNWZXJ0ZXhlcy5pbmNsdWRlcyhzdWNjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgICAgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnByZXZpb3VzVmVydGV4ZXMsXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZlcnRleCA9IHN1Y2Nlc3NvclZlcnRleDsgIC8vL1xuXG4gICAgICBpZiAocHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgICAgIGNhbGxiYWNrKHZlcnRleGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQ3ljbGVzKCkge1xuICAgIGNvbnN0IHRyaXZpYWxDeWNsZXMgPSB0aGlzLmZpbmRUcml2aWFsQ3ljbGVzKCksXG4gICAgICAgICAgbm9uVHJpdmlhbEN5Y2xlcyA9IHRoaXMuZmluZE5vblRyaXZpYWxDeWNsZXMoKSxcbiAgICAgICAgICBjeWNsZXMgPSBbXG4gICAgICAgICAgICAuLi50cml2aWFsQ3ljbGVzLFxuICAgICAgICAgICAgLi4ubm9uVHJpdmlhbEN5Y2xlc1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gY3ljbGVzO1xuICB9XG5cbiAgZmluZFRyaXZpYWxDeWNsZXMoKSB7XG4gICAgY29uc3QgdHJpdmlhbGx5Q3ljbGljRWRnZXMgPSB0aGlzLmZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcygpLFxuICAgICAgICAgIHRyaXZpYWxDeWNsZXMgPSB0cml2aWFsbHlDeWNsaWNFZGdlcy5tYXAoKHRyaXZsYWxseUN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRyaXZsYWxseUN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4KCksXG4gICAgICAgICAgICAgICAgICB0cml2aWFsQ3ljbGUgPSBbXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVZlcnRleFxuICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgcmV0dXJuIHRyaXZpYWxDeWNsZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB0cml2aWFsQ3ljbGVzO1xuICB9XG5cbiAgZmluZE5vblRyaXZpYWxDeWNsZXMoKSB7XG4gICAgY29uc3Qgbm9uVHJpdmlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleCA9IHRoaXMuc3RhcnRWZXJ0ZXgsIC8vL1xuICAgICAgICAgIHZlcnRleGVzID0gW1xuICAgICAgICAgICAgdmVydGV4XG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCAodmVydGV4ZXMpID0+IHtcbiAgICAgIGNvbnN0IG5vblRyaXZpYWxDeWNsZSA9IG5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcyk7XG5cbiAgICAgIG5vblRyaXZpYWxDeWNsZXMucHVzaChub25Ucml2aWFsQ3ljbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxDeWNsZXM7XG4gIH1cblxuICBmaW5kU3VjY2Vzc29yVmVydGV4ZXModmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmZpbmRFZGdlc0J5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgc3VjY2Vzc29yRWRnZXMgPSBlZGdlcy5maWx0ZXIoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4KCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhlcyA9IHN1Y2Nlc3NvckVkZ2VzLm1hcCgoc3VjY2Vzc29yRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleCA9IHN1Y2Nlc3NvckVkZ2UuZ2V0VGFyZ2V0VmVydGV4KCksXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXggPSBzdWNjZXNzb3JFZGdlVGFyZ2V0VmVydGV4OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBmaW5kRWRnZXNCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZpbmQodGhpcy5lZGdlcywgKGVkZ2UpID0+IHsgLy8vXG4gICAgICBjb25zdCBlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCA9IGVkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KTtcblxuICAgICAgaWYgKGVkZ2VNYXRjaGVzU291cmNlVmVydGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZmluZFRyaXZpYWxseUN5Y2xpY0VkZ2VzKCkge1xuICAgIGNvbnN0IHRyaXZpYWxseUN5Y2xpY0VkZ2VzID0gZmluZCh0aGlzLmVkZ2VzLCAoZWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZVRyaXZpYWxseUN5Y2xpYyA9IGVkZ2UuaXNUcml2aWFsbHlDeWNsaWMoKTtcblxuICAgICAgaWYgKGVkZ2VUcml2aWFsbHlDeWNsaWMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJpdmlhbGx5Q3ljbGljRWRnZXM7XG4gIH1cblxuICBmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgZWRnZSA9IHRoaXMuZWRnZXMuZmluZCgoZWRnZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGVkZ2UubWF0Y2goc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVkZ2VzQW5kU3RhcnRWZXJ0ZXgoZWRnZXMsIHN0YXJ0VmVydGV4KSB7XG4gICAgY29uc3QgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGVkZ2VzLCBzdGFydFZlcnRleCk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxufVxuXG5mdW5jdGlvbiBub25Ucml2aWFsQ3ljbGVGcm9tVmVydGV4ZXModmVydGV4ZXMpIHtcbiAgY29uc3QgbGFzdFZlcnRleCA9IGxhc3QodmVydGV4ZXMpLFxuICAgICAgICBpbmRleCA9IHZlcnRleGVzLmluZGV4T2YobGFzdFZlcnRleCksXG4gICAgICAgIHZlcnRleGVzTGVuZ3RoID0gdmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICBzdGFydCA9IGluZGV4LFxuICAgICAgICBlbmQgPSB2ZXJ0ZXhlc0xlbmd0aCAtIDEsXG4gICAgICAgIGN5Y2xlID0gdmVydGV4ZXMuc2xpY2Uoc3RhcnQsIGVuZCk7IC8vL1xuXG4gIHJldHVybiBjeWNsZTtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RlZEdyYXBoIiwiZWRnZXMiLCJzdGFydFZlcnRleCIsImdldEVkZ2VzIiwiZ2V0U3RhcnRWZXJ0ZXgiLCJhZGRFZGdlIiwiZWRnZSIsImVkZ2VBIiwibWF0Y2hlcyIsInNvbWUiLCJlZGdlQiIsImVkZ2VBTWF0Y2hlc0VkZ2VCIiwibWF0Y2giLCJwdXNoIiwiYWRkRWRnZXMiLCJmb3JFYWNoIiwicmVtb3ZlRWRnZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZXB0aEZpcnN0U2VhcmNoIiwidmVydGV4IiwidmVydGV4ZXMiLCJjYWxsYmFjayIsInByZXZpb3VzVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXhlcyIsImZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyIsInN1Y2Nlc3NvclZlcnRleCIsInByZXZpb3VzVmVydGV4ZXNJbmNsdWRlc1N1Y2Nlc3NvclZlcnRleCIsImluY2x1ZGVzIiwiZmluZEN5Y2xlcyIsInRyaXZpYWxDeWNsZXMiLCJmaW5kVHJpdmlhbEN5Y2xlcyIsIm5vblRyaXZpYWxDeWNsZXMiLCJmaW5kTm9uVHJpdmlhbEN5Y2xlcyIsImN5Y2xlcyIsInRyaXZpYWxseUN5Y2xpY0VkZ2VzIiwiZmluZFRyaXZpYWxseUN5Y2xpY0VkZ2VzIiwibWFwIiwidHJpdmxhbGx5Q3ljbGljRWRnZSIsInNvdXJjZVZlcnRleCIsImdldFNvdXJjZVZlcnRleCIsInRyaXZpYWxDeWNsZSIsIm5vblRyaXZpYWxDeWNsZSIsIm5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyIsImZpbmRFZGdlc0J5U291cmNlVmVydGV4Iiwic3VjY2Vzc29yRWRnZXMiLCJmaWx0ZXIiLCJ0YXJnZXRWZXJ0ZXgiLCJnZXRUYXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JFZGdlIiwic3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleCIsImZpbmQiLCJlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCIsIm1hdGNoU291cmNlVmVydGV4IiwiZWRnZVRyaXZpYWxseUN5Y2xpYyIsImlzVHJpdmlhbGx5Q3ljbGljIiwiZmluZEVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsImZyb21FZGdlc0FuZFN0YXJ0VmVydGV4IiwiZGlyZWN0ZWRHcmFwaCIsImxhc3RWZXJ0ZXgiLCJsYXN0IiwidmVydGV4ZXNMZW5ndGgiLCJsZW5ndGgiLCJlbmQiLCJjeWNsZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxQkFGTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosSUFBQSxBQUFNQSw4QkF3S2xCLEFBeEtZO2FBQU1BLGNBQ1BDLEtBQUssRUFBRUMsV0FBVztnQ0FEWEY7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFIRkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsSUFBSSxFQUFFO2dCQUNaLElBQU1DLFFBQVFELE1BQ1JFLFVBQVUsSUFBSSxDQUFDUCxLQUFLLENBQUNRLElBQUksQ0FBQyxTQUFDSCxNQUFTO29CQUNsQyxJQUFNSSxRQUFRSixNQUNSSyxvQkFBb0JKLE1B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