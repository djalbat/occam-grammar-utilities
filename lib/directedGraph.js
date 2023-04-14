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
var _edge = /*#__PURE__*/ _interop_require_default(require("./edge"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0LCBmaW5kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgICB0aGlzLnN0YXJ0VmVydGV4ID0gc3RhcnRWZXJ0ZXg7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuXG4gIGdldFN0YXJ0VmVydGV4KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0VmVydGV4O1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3QgZWRnZUEgPSBlZGdlLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5lZGdlcy5zb21lKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlZGdlQiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgICAgZWRnZUFNYXRjaGVzRWRnZUIgPSBlZGdlQS5tYXRjaChlZGdlQik7XG5cbiAgICAgICAgICAgIGlmIChlZGdlQU1hdGNoZXNFZGdlQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmVkZ2VzLmluZGV4T2YoZWRnZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZWRnZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBkZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhlcyA9IHZlcnRleGVzLCAgLy8vXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSB0aGlzLmZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyh2ZXJ0ZXgpO1xuXG4gICAgc3VjY2Vzc29yVmVydGV4ZXMuZm9yRWFjaCgoc3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c1ZlcnRleGVzSW5jbHVkZXNTdWNjZXNzb3JWZXJ0ZXggPSBwcmV2aW91c1ZlcnRleGVzLmluY2x1ZGVzKHN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgICB2ZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgICAgLi4ucHJldmlvdXNWZXJ0ZXhlcyxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdmVydGV4ID0gc3VjY2Vzc29yVmVydGV4OyAgLy8vXG5cbiAgICAgIGlmIChwcmV2aW91c1ZlcnRleGVzSW5jbHVkZXNTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICAgICAgY2FsbGJhY2sodmVydGV4ZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRUcml2aWFsQ3ljbGVzKCkge1xuICAgIGNvbnN0IHRyaXZpYWxseUN5Y2xpY0VkZ2VzID0gdGhpcy5maW5kVHJpdmlhbGx5Q3ljbGljRWRnZXMoKSxcbiAgICAgICAgICB0cml2aWFsQ3ljbGVzID0gdHJpdmlhbGx5Q3ljbGljRWRnZXMubWFwKCh0cml2bGFsbHlDeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0cml2bGFsbHlDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleCgpLFxuICAgICAgICAgICAgICAgICAgdHJpdmlhbEN5Y2xlID0gW1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhcbiAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHJldHVybiB0cml2aWFsQ3ljbGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdHJpdmlhbEN5Y2xlcztcbiAgfVxuXG4gIGZpbmROb25Ucml2aWFsQ3ljbGVzKCkge1xuICAgIGNvbnN0IG5vblRyaXZpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSB0aGlzLnN0YXJ0VmVydGV4LCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleFxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLmRlcHRoRmlyc3RTZWFyY2godmVydGV4LCB2ZXJ0ZXhlcywgKHZlcnRleGVzKSA9PiB7XG4gICAgICBjb25zdCBub25Ucml2aWFsQ3ljbGUgPSBub25Ucml2aWFsQ3ljbGVGcm9tVmVydGV4ZXModmVydGV4ZXMpO1xuXG4gICAgICBub25Ucml2aWFsQ3ljbGVzLnB1c2gobm9uVHJpdmlhbEN5Y2xlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBub25Ucml2aWFsQ3ljbGVzO1xuICB9XG5cbiAgZmluZFN1Y2Nlc3NvclZlcnRleGVzKHZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgIGVkZ2VzID0gdGhpcy5maW5kRWRnZXNCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICAgIHN1Y2Nlc3NvckVkZ2VzID0gZWRnZXMuZmlsdGVyKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXggPSBlZGdlLmdldFRhcmdldFZlcnRleCgpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBzb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBzdWNjZXNzb3JFZGdlcy5tYXAoKHN1Y2Nlc3NvckVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvckVkZ2VUYXJnZXRWZXJ0ZXggPSBzdWNjZXNzb3JFZGdlLmdldFRhcmdldFZlcnRleCgpLFxuICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4ID0gc3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleDsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3QgZWRnZXMgPSBmaW5kKHRoaXMuZWRnZXMsIChlZGdlKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZWRnZU1hdGNoZXNTb3VyY2VWZXJ0ZXggPSBlZGdlLm1hdGNoU291cmNlVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICAgIGlmIChlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCB0cml2aWFsbHlDeWNsaWNFZGdlcyA9IGZpbmQodGhpcy5lZGdlcywgKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2VUcml2aWFsbHlDeWNsaWMgPSBlZGdlLmlzVHJpdmlhbGx5Q3ljbGljKCk7XG5cbiAgICAgIGlmIChlZGdlVHJpdmlhbGx5Q3ljbGljKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyaXZpYWxseUN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZmluZEVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2UgPSB0aGlzLmVkZ2VzLmZpbmQoKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG5cbiAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCBlZGdlID0gdGhpcy5maW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWRnZXNBbmRTdGFydFZlcnRleChlZGdlcywgc3RhcnRWZXJ0ZXgpIHtcbiAgICBjb25zdCBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoZWRnZXMsIHN0YXJ0VmVydGV4KTtcblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcykge1xuICBjb25zdCBsYXN0VmVydGV4ID0gbGFzdCh2ZXJ0ZXhlcyksXG4gICAgICAgIGluZGV4ID0gdmVydGV4ZXMuaW5kZXhPZihsYXN0VmVydGV4KSxcbiAgICAgICAgdmVydGV4ZXNMZW5ndGggPSB2ZXJ0ZXhlcy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgIGVuZCA9IHZlcnRleGVzTGVuZ3RoIC0gMSxcbiAgICAgICAgY3ljbGUgPSB2ZXJ0ZXhlcy5zbGljZShzdGFydCwgZW5kKTtcblxuICByZXR1cm4gY3ljbGU7XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0ZWRHcmFwaCIsImVkZ2VzIiwic3RhcnRWZXJ0ZXgiLCJnZXRFZGdlcyIsImdldFN0YXJ0VmVydGV4IiwiYWRkRWRnZSIsImVkZ2UiLCJlZGdlQSIsIm1hdGNoZXMiLCJzb21lIiwiZWRnZUIiLCJlZGdlQU1hdGNoZXNFZGdlQiIsIm1hdGNoIiwicHVzaCIsImFkZEVkZ2VzIiwiZm9yRWFjaCIsInJlbW92ZUVkZ2UiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZGVwdGhGaXJzdFNlYXJjaCIsInZlcnRleCIsInZlcnRleGVzIiwiY2FsbGJhY2siLCJwcmV2aW91c1ZlcnRleGVzIiwic3VjY2Vzc29yVmVydGV4ZXMiLCJmaW5kU3VjY2Vzc29yVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXgiLCJwcmV2aW91c1ZlcnRleGVzSW5jbHVkZXNTdWNjZXNzb3JWZXJ0ZXgiLCJpbmNsdWRlcyIsImZpbmRUcml2aWFsQ3ljbGVzIiwidHJpdmlhbGx5Q3ljbGljRWRnZXMiLCJmaW5kVHJpdmlhbGx5Q3ljbGljRWRnZXMiLCJ0cml2aWFsQ3ljbGVzIiwibWFwIiwidHJpdmxhbGx5Q3ljbGljRWRnZSIsInNvdXJjZVZlcnRleCIsImdldFNvdXJjZVZlcnRleCIsInRyaXZpYWxDeWNsZSIsImZpbmROb25Ucml2aWFsQ3ljbGVzIiwibm9uVHJpdmlhbEN5Y2xlcyIsIm5vblRyaXZpYWxDeWNsZSIsIm5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyIsImZpbmRFZGdlc0J5U291cmNlVmVydGV4Iiwic3VjY2Vzc29yRWRnZXMiLCJmaWx0ZXIiLCJ0YXJnZXRWZXJ0ZXgiLCJnZXRUYXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JFZGdlIiwic3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleCIsImZpbmQiLCJlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCIsIm1hdGNoU291cmNlVmVydGV4IiwiZWRnZVRyaXZpYWxseUN5Y2xpYyIsImlzVHJpdmlhbGx5Q3ljbGljIiwiZmluZEVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsImFkZEVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwicmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiZnJvbUVkZ2VzQW5kU3RhcnRWZXJ0ZXgiLCJkaXJlY3RlZEdyYXBoIiwibGFzdFZlcnRleCIsImxhc3QiLCJ2ZXJ0ZXhlc0xlbmd0aCIsImxlbmd0aCIsImVuZCIsImN5Y2xlIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpNOzJEQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLElBQUEsQUFBTUEsOEJBeUtsQixBQXpLWTthQUFNQSxjQUNQQyxLQUFLLEVBQUVDLFdBQVc7Z0NBRFhGO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSEZGOztZQU1uQkcsS0FB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