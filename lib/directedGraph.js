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
var _edge = /*#__PURE__*/ _interopRequireDefault(require("./edge"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var DirectedGraph = /*#__PURE__*/ function() {
    function DirectedGraph(edges, startVertex) {
        _classCallCheck(this, DirectedGraph);
        this.edges = edges;
        this.startVertex = startVertex;
    }
    _createClass(DirectedGraph, [
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
                    var previousVertexesIncludesSuccessorVertex = previousVertexes.includes(successorVertex), _$vertexes = _toConsumableArray(previousVertexes).concat([
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
                var triviallyCyclicEdges = this.find(function(edge) {
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
        },
        {
            key: "addEdgeBySourceVertexAndTargetVertex",
            value: function addEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
                var edge = _edge.default.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);
                this.edges.push(edge);
            }
        },
        {
            key: "removeEdgeBySourceVertexAndTargetVertex",
            value: function removeEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
                var edge = this.findEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
                this.removeEdge(edge);
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
    var lastVertex = (0, _array.last)(vertexes), index = vertexes.indexOf(lastVertex), vertexesLength = vertexes.length, start = index, end = vertexesLength - 1, cycle = vertexes.slice(start, end);
    return cycle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0LCBmaW5kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgICB0aGlzLnN0YXJ0VmVydGV4ID0gc3RhcnRWZXJ0ZXg7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuXG4gIGdldFN0YXJ0VmVydGV4KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0VmVydGV4O1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3QgZWRnZUEgPSBlZGdlLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5lZGdlcy5zb21lKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlZGdlQiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgICAgZWRnZUFNYXRjaGVzRWRnZUIgPSBlZGdlQS5tYXRjaChlZGdlQik7XG5cbiAgICAgICAgICAgIGlmIChlZGdlQU1hdGNoZXNFZGdlQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmVkZ2VzLmluZGV4T2YoZWRnZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZWRnZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBkZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhlcyA9IHZlcnRleGVzLCAgLy8vXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSB0aGlzLmZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyh2ZXJ0ZXgpO1xuXG4gICAgc3VjY2Vzc29yVmVydGV4ZXMuZm9yRWFjaCgoc3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c1ZlcnRleGVzSW5jbHVkZXNTdWNjZXNzb3JWZXJ0ZXggPSBwcmV2aW91c1ZlcnRleGVzLmluY2x1ZGVzKHN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgICB2ZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgICAgLi4ucHJldmlvdXNWZXJ0ZXhlcyxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdmVydGV4ID0gc3VjY2Vzc29yVmVydGV4OyAgLy8vXG5cbiAgICAgIGlmIChwcmV2aW91c1ZlcnRleGVzSW5jbHVkZXNTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICAgICAgY2FsbGJhY2sodmVydGV4ZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRUcml2aWFsQ3ljbGVzKCkge1xuICAgIGNvbnN0IHRyaXZpYWxseUN5Y2xpY0VkZ2VzID0gdGhpcy5maW5kVHJpdmlhbGx5Q3ljbGljRWRnZXMoKSxcbiAgICAgICAgICB0cml2aWFsQ3ljbGVzID0gdHJpdmlhbGx5Q3ljbGljRWRnZXMubWFwKCh0cml2bGFsbHlDeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0cml2bGFsbHlDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleCgpLFxuICAgICAgICAgICAgICAgICAgdHJpdmlhbEN5Y2xlID0gW1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhcbiAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHJldHVybiB0cml2aWFsQ3ljbGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdHJpdmlhbEN5Y2xlcztcbiAgfVxuXG4gIGZpbmROb25Ucml2aWFsQ3ljbGVzKCkge1xuICAgIGNvbnN0IG5vblRyaXZpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSB0aGlzLnN0YXJ0VmVydGV4LCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleFxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLmRlcHRoRmlyc3RTZWFyY2godmVydGV4LCB2ZXJ0ZXhlcywgKHZlcnRleGVzKSA9PiB7XG4gICAgICBjb25zdCBub25Ucml2aWFsQ3ljbGUgPSBub25Ucml2aWFsQ3ljbGVGcm9tVmVydGV4ZXModmVydGV4ZXMpO1xuXG4gICAgICBub25Ucml2aWFsQ3ljbGVzLnB1c2gobm9uVHJpdmlhbEN5Y2xlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBub25Ucml2aWFsQ3ljbGVzO1xuICB9XG5cbiAgZmluZFN1Y2Nlc3NvclZlcnRleGVzKHZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgIGVkZ2VzID0gdGhpcy5maW5kRWRnZXNCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICAgIHN1Y2Nlc3NvckVkZ2VzID0gZWRnZXMuZmlsdGVyKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXggPSBlZGdlLmdldFRhcmdldFZlcnRleCgpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBzb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBzdWNjZXNzb3JFZGdlcy5tYXAoKHN1Y2Nlc3NvckVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvckVkZ2VUYXJnZXRWZXJ0ZXggPSBzdWNjZXNzb3JFZGdlLmdldFRhcmdldFZlcnRleCgpLFxuICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4ID0gc3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleDsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3QgZWRnZXMgPSBmaW5kKHRoaXMuZWRnZXMsIChlZGdlKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZWRnZU1hdGNoZXNTb3VyY2VWZXJ0ZXggPSBlZGdlLm1hdGNoU291cmNlVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICAgIGlmIChlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCB0cml2aWFsbHlDeWNsaWNFZGdlcyA9IHRoaXMuZmluZCgoZWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZVRyaXZpYWxseUN5Y2xpYyA9IGVkZ2UuaXNUcml2aWFsbHlDeWNsaWMoKTtcblxuICAgICAgaWYgKGVkZ2VUcml2aWFsbHlDeWNsaWMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJpdmlhbGx5Q3ljbGljRWRnZXM7XG4gIH1cblxuICBmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgZWRnZSA9IHRoaXMuZWRnZXMuZmluZCgoZWRnZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGVkZ2UubWF0Y2goc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2UgPSB0aGlzLmZpbmRFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21FZGdlc0FuZFN0YXJ0VmVydGV4KGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIGNvbnN0IGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChlZGdlcywgc3RhcnRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9uVHJpdmlhbEN5Y2xlRnJvbVZlcnRleGVzKHZlcnRleGVzKSB7XG4gIGNvbnN0IGxhc3RWZXJ0ZXggPSBsYXN0KHZlcnRleGVzKSxcbiAgICAgICAgaW5kZXggPSB2ZXJ0ZXhlcy5pbmRleE9mKGxhc3RWZXJ0ZXgpLFxuICAgICAgICB2ZXJ0ZXhlc0xlbmd0aCA9IHZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgZW5kID0gdmVydGV4ZXNMZW5ndGggLSAxLFxuICAgICAgICBjeWNsZSA9IHZlcnRleGVzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gIHJldHVybiBjeWNsZTtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RlZEdyYXBoIiwiZWRnZXMiLCJzdGFydFZlcnRleCIsImdldEVkZ2VzIiwiZ2V0U3RhcnRWZXJ0ZXgiLCJhZGRFZGdlIiwiZWRnZSIsImVkZ2VBIiwibWF0Y2hlcyIsInNvbWUiLCJlZGdlQiIsImVkZ2VBTWF0Y2hlc0VkZ2VCIiwibWF0Y2giLCJwdXNoIiwiYWRkRWRnZXMiLCJmb3JFYWNoIiwicmVtb3ZlRWRnZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZXB0aEZpcnN0U2VhcmNoIiwidmVydGV4IiwidmVydGV4ZXMiLCJjYWxsYmFjayIsInByZXZpb3VzVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXhlcyIsImZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyIsInN1Y2Nlc3NvclZlcnRleCIsInByZXZpb3VzVmVydGV4ZXNJbmNsdWRlc1N1Y2Nlc3NvclZlcnRleCIsImluY2x1ZGVzIiwiZmluZFRyaXZpYWxDeWNsZXMiLCJ0cml2aWFsbHlDeWNsaWNFZGdlcyIsImZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcyIsInRyaXZpYWxDeWNsZXMiLCJtYXAiLCJ0cml2bGFsbHlDeWNsaWNFZGdlIiwic291cmNlVmVydGV4IiwiZ2V0U291cmNlVmVydGV4IiwidHJpdmlhbEN5Y2xlIiwiZmluZE5vblRyaXZpYWxDeWNsZXMiLCJub25Ucml2aWFsQ3ljbGVzIiwibm9uVHJpdmlhbEN5Y2xlIiwibm9uVHJpdmlhbEN5Y2xlRnJvbVZlcnRleGVzIiwiZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgiLCJzdWNjZXNzb3JFZGdlcyIsImZpbHRlciIsInRhcmdldFZlcnRleCIsImdldFRhcmdldFZlcnRleCIsInN1Y2Nlc3NvckVkZ2UiLCJzdWNjZXNzb3JFZGdlVGFyZ2V0VmVydGV4IiwiZmluZCIsImVkZ2VNYXRjaGVzU291cmNlVmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXgiLCJlZGdlVHJpdmlhbGx5Q3ljbGljIiwiaXNUcml2aWFsbHlDeWNsaWMiLCJmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiYWRkRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJyZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJmcm9tRWRnZXNBbmRTdGFydFZlcnRleCIsImRpcmVjdGVkR3JhcGgiLCJsYXN0VmVydGV4IiwibGFzdCIsInZlcnRleGVzTGVuZ3RoIiwibGVuZ3RoIiwiZW5kIiwiY3ljbGUiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUJBSk07eURBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUYsSUFBQSxBQUFNQSw4QkF5S2xCLEFBektZO2FBQU1BLGNBQ1BDLEtBQUssRUFBRUMsV0FBVzs4QkFEWEY7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztpQkFIRkY7O1lBTW5CRyxLQUFBQTttQkFB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