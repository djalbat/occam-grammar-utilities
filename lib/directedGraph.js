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
                this.edges.push(edge);
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
            key: "findSuccessorEdges",
            value: function findSuccessorEdges(vertex) {
                var sourceVertex = vertex, edges = this.findEdgesBySourceVertex(sourceVertex), successorEdges = edges; ///
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
        },
        {
            key: "findCycles",
            value: function findCycles() {
                var cycles = [], vertex = this.startVertex, edges = [];
                this.depthFirstSearch(vertex, edges, function(previousEdges) {
                    var cycle = cycleFromPreviousEdges(previousEdges);
                    cycles.push(cycle);
                });
                return cycles;
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
function cycleFromPreviousEdges(previousEdges) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0LCBmaW5kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgICB0aGlzLnN0YXJ0VmVydGV4ID0gc3RhcnRWZXJ0ZXg7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuXG4gIGdldFN0YXJ0VmVydGV4KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0VmVydGV4O1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmVkZ2VzLmluZGV4T2YoZWRnZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZWRnZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBmaW5kU3VjY2Vzc29yRWRnZXModmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmZpbmRFZGdlc0J5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgc3VjY2Vzc29yRWRnZXMgPSBlZGdlczsgLy8vXG5cbiAgICByZXR1cm4gc3VjY2Vzc29yRWRnZXM7XG4gIH1cblxuICBmaW5kRWRnZXNCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZpbmQodGhpcy5lZGdlcywgKGVkZ2UpID0+IHsgLy8vXG4gICAgICBjb25zdCBlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCA9IGVkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KTtcblxuICAgICAgaWYgKGVkZ2VNYXRjaGVzU291cmNlVmVydGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZmluZEVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2UgPSB0aGlzLmVkZ2VzLmZpbmQoKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGVkZ2VzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHByZXZpb3VzRWRnZXMgPSBlZGdlcywgIC8vL1xuICAgICAgICAgIHN1Y2Nlc3NvckVkZ2VzID0gdGhpcy5maW5kU3VjY2Vzc29yRWRnZXModmVydGV4KTtcblxuICAgIHN1Y2Nlc3NvckVkZ2VzLmZvckVhY2goKHN1Y2Nlc3NvckVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBzdWNjZXNzb3JFZGdlLCAvLy9cbiAgICAgICAgICAgIHByZXZpb3VzRWRnZXNJbmNsdWRlc0VkZ2UgPSBwcmV2aW91c0VkZ2VzLmluY2x1ZGVzKGVkZ2UpO1xuXG4gICAgICBpZiAocHJldmlvdXNFZGdlc0luY2x1ZGVzRWRnZSkge1xuICAgICAgICBjYWxsYmFjayhwcmV2aW91c0VkZ2VzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IHN1Y2Nlc3NvckVkZ2UuZ2V0VGFyZ2V0VmVydGV4KCksXG4gICAgICAgICAgICAgIHZlcnRleCA9IHRhcmdldFZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICBlZGdlcyA9IFtcbiAgICAgICAgICAgICAgICAuLi5wcmV2aW91c0VkZ2VzLFxuICAgICAgICAgICAgICAgIGVkZ2VcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmRlcHRoRmlyc3RTZWFyY2godmVydGV4LCBlZGdlcywgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG5cbiAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCBlZGdlID0gdGhpcy5maW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlKTtcbiAgfVxuXG4gIGZpbmRDeWNsZXMoKSB7XG4gICAgY29uc3QgY3ljbGVzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gdGhpcy5zdGFydFZlcnRleCwgLy8vXG4gICAgICAgICAgZWRnZXMgPSBbXTtcblxuICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGVkZ2VzLCAocHJldmlvdXNFZGdlcykgPT4ge1xuICAgICAgY29uc3QgY3ljbGUgPSBjeWNsZUZyb21QcmV2aW91c0VkZ2VzKHByZXZpb3VzRWRnZXMpO1xuXG4gICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21FZGdlc0FuZFN0YXJ0VmVydGV4KGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIGNvbnN0IGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChlZGdlcywgc3RhcnRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3ljbGVGcm9tUHJldmlvdXNFZGdlcyhwcmV2aW91c0VkZ2VzKSB7XG4gIGxldCBjeWNsZTtcblxuICBjb25zdCBsYXN0UHJldmlvdXNFZGdlID0gbGFzdChwcmV2aW91c0VkZ2VzKSxcbiAgICAgICAgdGFyZ2V0VmVydGV4ID0gbGFzdFByZXZpb3VzRWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKTtcblxuICBwcmV2aW91c0VkZ2VzLnNvbWUoKHByZXZpb3VzRWRnZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSBwcmV2aW91c0VkZ2UuZ2V0U291cmNlVmVydGV4KCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ID09PSB0YXJnZXRWZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXg7ICAvLy9cblxuICAgICAgY3ljbGUgPSBwcmV2aW91c0VkZ2VzLnNsaWNlKHN0YXJ0KTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY3ljbGU7XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0ZWRHcmFwaCIsImVkZ2VzIiwic3RhcnRWZXJ0ZXgiLCJnZXRFZGdlcyIsImdldFN0YXJ0VmVydGV4IiwiYWRkRWRnZSIsImVkZ2UiLCJwdXNoIiwicmVtb3ZlRWRnZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJmaW5kU3VjY2Vzc29yRWRnZXMiLCJ2ZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXgiLCJmaW5kRWRnZXNCeVNvdXJjZVZlcnRleCIsInN1Y2Nlc3NvckVkZ2VzIiwiZmluZCIsImVkZ2VNYXRjaGVzU291cmNlVmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXgiLCJmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwidGFyZ2V0VmVydGV4IiwibWF0Y2hlcyIsIm1hdGNoIiwiZGVwdGhGaXJzdFNlYXJjaCIsImNhbGxiYWNrIiwicHJldmlvdXNFZGdlcyIsImZvckVhY2giLCJzdWNjZXNzb3JFZGdlIiwicHJldmlvdXNFZGdlc0luY2x1ZGVzRWRnZSIsImluY2x1ZGVzIiwiZ2V0VGFyZ2V0VmVydGV4IiwiYWRkRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJyZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJmaW5kQ3ljbGVzIiwiY3ljbGVzIiwiY3ljbGUiLCJjeWNsZUZyb21QcmV2aW91c0VkZ2VzIiwiZnJvbUVkZ2VzQW5kU3RhcnRWZXJ0ZXgiLCJkaXJlY3RlZEdyYXBoIiwibGFzdFByZXZpb3VzRWRnZSIsImxhc3QiLCJzb21lIiwicHJldmlvdXNFZGdlIiwiZ2V0U291cmNlVmVydGV4Iiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpNO3lEQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLElBQUEsQUFBTUEsOEJBa0hsQixBQWxIWTthQUFNQSxjQUNQQyxLQUFLLEVBQUVDLFdBQVc7OEJBRFhGO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7aUJBSEZGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsT0FBTyxJQUFJ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