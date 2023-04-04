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
            key: "findNonTrivialCycles",
            value: function findNonTrivialCycles() {
                var nonTrivialCycles = [], vertex = this.startVertex, edges = [];
                this.depthFirstSearch(vertex, edges, function(previousEdges) {
                    var nonTrivialCycle = nonTrivialCycleFromPreviousEdges(previousEdges);
                    nonTrivialCycles.push(nonTrivialCycle);
                });
                return nonTrivialCycles;
            }
        },
        {
            key: "findSuccessorEdges",
            value: function findSuccessorEdges(vertex) {
                var sourceVertex = vertex, edges = this.findEdgesBySourceVertex(sourceVertex), successorEdges = edges.filter(function(edge) {
                    var targetVertex = edge.getTargetVertex();
                    if (targetVertex !== sourceVertex) {
                        return true;
                    }
                });
                return successorEdges;
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
            key: "depthFirstSearch",
            value: function depthFirstSearch(vertex, edges, callback) {
                var _this = this;
                var previousEdges = edges, successorEdges = this.findSuccessorEdges(vertex);
                successorEdges.forEach(function(successorEdge) {
                    var edge = successorEdge, previousEdgesIncludesEdge = previousEdges.includes(edge);
                    if (previousEdgesIncludesEdge) {
                        callback(previousEdges);
                    } else {
                        var targetVertex = successorEdge.getTargetVertex(), _$vertex = targetVertex, _$edges = _toConsumableArray(previousEdges).concat([
                            edge
                        ]);
                        _this.depthFirstSearch(_$vertex, _$edges, callback);
                    }
                });
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
function nonTrivialCycleFromPreviousEdges(previousEdges) {
    var cycle;
    var lastPreviousEdge = (0, _array.last)(previousEdges), targetVertex = lastPreviousEdge.getTargetVertex();
    previousEdges.some(function(previousEdge, index) {
        var sourceVertex = previousEdge.getSourceVertex();
        if (sourceVertex === targetVertex) {
            var start = index; ///
            cycle = previousEdges.slice(start);
            return true;
        }
    });
    return cycle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0LCBmaW5kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgICB0aGlzLnN0YXJ0VmVydGV4ID0gc3RhcnRWZXJ0ZXg7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuXG4gIGdldFN0YXJ0VmVydGV4KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0VmVydGV4O1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3QgZWRnZUEgPSBlZGdlLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5lZGdlcy5zb21lKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlZGdlQiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgICAgZWRnZUFNYXRjaGVzRWRnZUIgPSBlZGdlQS5tYXRjaChlZGdlQik7XG5cbiAgICAgICAgICAgIGlmIChlZGdlQU1hdGNoZXNFZGdlQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmVkZ2VzLmluZGV4T2YoZWRnZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZWRnZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBmaW5kTm9uVHJpdmlhbEN5Y2xlcygpIHtcbiAgICBjb25zdCBub25Ucml2aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gdGhpcy5zdGFydFZlcnRleCwgLy8vXG4gICAgICAgICAgZWRnZXMgPSBbXTtcblxuICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGVkZ2VzLCAocHJldmlvdXNFZGdlcykgPT4ge1xuICAgICAgY29uc3Qgbm9uVHJpdmlhbEN5Y2xlID0gbm9uVHJpdmlhbEN5Y2xlRnJvbVByZXZpb3VzRWRnZXMocHJldmlvdXNFZGdlcyk7XG5cbiAgICAgIG5vblRyaXZpYWxDeWNsZXMucHVzaChub25Ucml2aWFsQ3ljbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxDeWNsZXM7XG4gIH1cblxuICBmaW5kU3VjY2Vzc29yRWRnZXModmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmZpbmRFZGdlc0J5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgc3VjY2Vzc29yRWRnZXMgPSBlZGdlcy5maWx0ZXIoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4KCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JFZGdlcztcbiAgfVxuXG4gIGZpbmRFZGdlc0J5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2VzID0gZmluZCh0aGlzLmVkZ2VzLCAoZWRnZSkgPT4geyAvLy9cbiAgICAgIGNvbnN0IGVkZ2VNYXRjaGVzU291cmNlVmVydGV4ID0gZWRnZS5tYXRjaFNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoZWRnZU1hdGNoZXNTb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWRnZXM7XG4gIH1cblxuICBmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgZWRnZSA9IHRoaXMuZWRnZXMuZmluZCgoZWRnZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGVkZ2UubWF0Y2goc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBkZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgZWRnZXMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcHJldmlvdXNFZGdlcyA9IGVkZ2VzLCAgLy8vXG4gICAgICAgICAgc3VjY2Vzc29yRWRnZXMgPSB0aGlzLmZpbmRTdWNjZXNzb3JFZGdlcyh2ZXJ0ZXgpO1xuXG4gICAgc3VjY2Vzc29yRWRnZXMuZm9yRWFjaCgoc3VjY2Vzc29yRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IHN1Y2Nlc3NvckVkZ2UsIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNFZGdlc0luY2x1ZGVzRWRnZSA9IHByZXZpb3VzRWRnZXMuaW5jbHVkZXMoZWRnZSk7XG5cbiAgICAgIGlmIChwcmV2aW91c0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNhbGxiYWNrKHByZXZpb3VzRWRnZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gc3VjY2Vzc29yRWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKSxcbiAgICAgICAgICAgICAgdmVydGV4ID0gdGFyZ2V0VmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGVkZ2VzID0gW1xuICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzRWRnZXMsXG4gICAgICAgICAgICAgICAgZWRnZVxuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGVkZ2VzLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2UgPSB0aGlzLmZpbmRFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21FZGdlc0FuZFN0YXJ0VmVydGV4KGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIGNvbnN0IGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChlZGdlcywgc3RhcnRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9uVHJpdmlhbEN5Y2xlRnJvbVByZXZpb3VzRWRnZXMocHJldmlvdXNFZGdlcykge1xuICBsZXQgY3ljbGU7XG5cbiAgY29uc3QgbGFzdFByZXZpb3VzRWRnZSA9IGxhc3QocHJldmlvdXNFZGdlcyksXG4gICAgICAgIHRhcmdldFZlcnRleCA9IGxhc3RQcmV2aW91c0VkZ2UuZ2V0VGFyZ2V0VmVydGV4KCk7XG5cbiAgcHJldmlvdXNFZGdlcy5zb21lKChwcmV2aW91c0VkZ2UsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gcHJldmlvdXNFZGdlLmdldFNvdXJjZVZlcnRleCgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCA9PT0gdGFyZ2V0VmVydGV4KSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4OyAgLy8vXG5cbiAgICAgIGN5Y2xlID0gcHJldmlvdXNFZGdlcy5zbGljZShzdGFydCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGN5Y2xlO1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGVkR3JhcGgiLCJlZGdlcyIsInN0YXJ0VmVydGV4IiwiZ2V0RWRnZXMiLCJnZXRTdGFydFZlcnRleCIsImFkZEVkZ2UiLCJlZGdlIiwiZWRnZUEiLCJtYXRjaGVzIiwic29tZSIsImVkZ2VCIiwiZWRnZUFNYXRjaGVzRWRnZUIiLCJtYXRjaCIsInB1c2giLCJhZGRFZGdlcyIsImZvckVhY2giLCJyZW1vdmVFZGdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZpbmROb25Ucml2aWFsQ3ljbGVzIiwibm9uVHJpdmlhbEN5Y2xlcyIsInZlcnRleCIsImRlcHRoRmlyc3RTZWFyY2giLCJwcmV2aW91c0VkZ2VzIiwibm9uVHJpdmlhbEN5Y2xlIiwibm9uVHJpdmlhbEN5Y2xlRnJvbVByZXZpb3VzRWRnZXMiLCJmaW5kU3VjY2Vzc29yRWRnZXMiLCJzb3VyY2VWZXJ0ZXgiLCJmaW5kRWRnZXNCeVNvdXJjZVZlcnRleCIsInN1Y2Nlc3NvckVkZ2VzIiwiZmlsdGVyIiwidGFyZ2V0VmVydGV4IiwiZ2V0VGFyZ2V0VmVydGV4IiwiZmluZCIsImVkZ2VNYXRjaGVzU291cmNlVmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXgiLCJmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiY2FsbGJhY2siLCJzdWNjZXNzb3JFZGdlIiwicHJldmlvdXNFZGdlc0luY2x1ZGVzRWRnZSIsImluY2x1ZGVzIiwiYWRkRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJyZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJmcm9tRWRnZXNBbmRTdGFydFZlcnRleCIsImRpcmVjdGVkR3JhcGgiLCJjeWNsZSIsImxhc3RQcmV2aW91c0VkZ2UiLCJsYXN0IiwicHJldmlvdXNFZGdlIiwiZ2V0U291cmNlVmVydGV4Iiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpNO3lEQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLElBQUEsQUFBTUEsOEJBMElsQixBQTFJWTthQUFNQSxjQUNQQyxLQUFLLEVBQUVDLFdBQVc7OEJBRFhGO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7aUJBSEZGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLElBQUksRUFBRTtnQkFDWixJ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