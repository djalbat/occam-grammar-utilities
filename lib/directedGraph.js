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
    var previousEdgesLength = previousEdges.length;
    if (previousEdgesLength === 1) {
        cycle = previousEdges; ///
    } else {
        var lastPreviousEdge = (0, _array.last)(previousEdges), lastPreviousEdgeTargetVertex = lastPreviousEdge.getTargetVertex();
        previousEdges.some(function(previousEdge, index) {
            var previousEdgeTargetVertex = previousEdge.getTargetVertex();
            if (previousEdgeTargetVertex === lastPreviousEdgeTargetVertex) {
                var start = index + 1;
                cycle = previousEdges.slice(start);
                return true;
            }
        });
    }
    return cycle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0LCBmaW5kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihlZGdlcywgc3RhcnRWZXJ0ZXgpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gICAgdGhpcy5zdGFydFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cblxuICBnZXRTdGFydFZlcnRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFZlcnRleDtcbiAgfVxuXG4gIGZpbmRTdWNjZXNzb3JFZGdlcyh2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBzdWNjZXNzb3JFZGdlcyA9IGVkZ2VzOyAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzb3JFZGdlcztcbiAgfVxuXG4gIGZpbmRFZGdlc0J5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2VzID0gZmluZCh0aGlzLmVkZ2VzLCAoZWRnZSkgPT4geyAvLy9cbiAgICAgIGNvbnN0IGVkZ2VNYXRjaGVzU291cmNlVmVydGV4ID0gZWRnZS5tYXRjaFNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoZWRnZU1hdGNoZXNTb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWRnZXM7XG4gIH1cblxuICBkZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgZWRnZXMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcHJldmlvdXNFZGdlcyA9IGVkZ2VzLCAgLy8vXG4gICAgICAgICAgc3VjY2Vzc29yRWRnZXMgPSB0aGlzLmZpbmRTdWNjZXNzb3JFZGdlcyh2ZXJ0ZXgpO1xuXG4gICAgc3VjY2Vzc29yRWRnZXMuZm9yRWFjaCgoc3VjY2Vzc29yRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IHN1Y2Nlc3NvckVkZ2UsIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNFZGdlc0luY2x1ZGVzRWRnZSA9IHByZXZpb3VzRWRnZXMuaW5jbHVkZXMoZWRnZSk7XG5cbiAgICAgIGlmIChwcmV2aW91c0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNhbGxiYWNrKHByZXZpb3VzRWRnZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gc3VjY2Vzc29yRWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKSxcbiAgICAgICAgICAgICAgdmVydGV4ID0gdGFyZ2V0VmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGVkZ2VzID0gW1xuICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzRWRnZXMsXG4gICAgICAgICAgICAgICAgZWRnZVxuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGVkZ2VzLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQ3ljbGVzKCkge1xuICAgIGNvbnN0IGN5Y2xlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleCA9IHRoaXMuc3RhcnRWZXJ0ZXgsIC8vL1xuICAgICAgICAgIGVkZ2VzID0gW107XG5cbiAgICB0aGlzLmRlcHRoRmlyc3RTZWFyY2godmVydGV4LCBlZGdlcywgKHByZXZpb3VzRWRnZXMpID0+IHtcbiAgICAgIGNvbnN0IGN5Y2xlID0gY3ljbGVGcm9tUHJldmlvdXNFZGdlcyhwcmV2aW91c0VkZ2VzKTtcblxuICAgICAgY3ljbGVzLnB1c2goY3ljbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN5Y2xlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWRnZXNBbmRTdGFydFZlcnRleChlZGdlcywgc3RhcnRWZXJ0ZXgpIHtcbiAgICBjb25zdCBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoZWRnZXMsIHN0YXJ0VmVydGV4KTtcblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbmZ1bmN0aW9uIGN5Y2xlRnJvbVByZXZpb3VzRWRnZXMocHJldmlvdXNFZGdlcykge1xuICBsZXQgY3ljbGU7XG5cbiAgY29uc3QgcHJldmlvdXNFZGdlc0xlbmd0aCA9IHByZXZpb3VzRWRnZXMubGVuZ3RoO1xuXG4gIGlmIChwcmV2aW91c0VkZ2VzTGVuZ3RoID09PSAxKSB7XG4gICAgY3ljbGUgPSBwcmV2aW91c0VkZ2VzOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFzdFByZXZpb3VzRWRnZSA9IGxhc3QocHJldmlvdXNFZGdlcyksXG4gICAgICAgICAgbGFzdFByZXZpb3VzRWRnZVRhcmdldFZlcnRleCA9IGxhc3RQcmV2aW91c0VkZ2UuZ2V0VGFyZ2V0VmVydGV4KCk7XG5cbiAgICBwcmV2aW91c0VkZ2VzLnNvbWUoKHByZXZpb3VzRWRnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByZXZpb3VzRWRnZVRhcmdldFZlcnRleCA9IHByZXZpb3VzRWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKTtcblxuICAgICAgaWYgKHByZXZpb3VzRWRnZVRhcmdldFZlcnRleCA9PT0gbGFzdFByZXZpb3VzRWRnZVRhcmdldFZlcnRleCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMTtcblxuICAgICAgICBjeWNsZSA9IHByZXZpb3VzRWRnZXMuc2xpY2Uoc3RhcnQpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xlO1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGVkR3JhcGgiLCJlZGdlcyIsInN0YXJ0VmVydGV4IiwiZ2V0RWRnZXMiLCJnZXRTdGFydFZlcnRleCIsImZpbmRTdWNjZXNzb3JFZGdlcyIsInZlcnRleCIsInNvdXJjZVZlcnRleCIsImZpbmRFZGdlc0J5U291cmNlVmVydGV4Iiwic3VjY2Vzc29yRWRnZXMiLCJmaW5kIiwiZWRnZSIsImVkZ2VNYXRjaGVzU291cmNlVmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXgiLCJkZXB0aEZpcnN0U2VhcmNoIiwiY2FsbGJhY2siLCJwcmV2aW91c0VkZ2VzIiwiZm9yRWFjaCIsInN1Y2Nlc3NvckVkZ2UiLCJwcmV2aW91c0VkZ2VzSW5jbHVkZXNFZGdlIiwiaW5jbHVkZXMiLCJ0YXJnZXRWZXJ0ZXgiLCJnZXRUYXJnZXRWZXJ0ZXgiLCJmaW5kQ3ljbGVzIiwiY3ljbGVzIiwiY3ljbGUiLCJjeWNsZUZyb21QcmV2aW91c0VkZ2VzIiwicHVzaCIsImZyb21FZGdlc0FuZFN0YXJ0VmVydGV4IiwiZGlyZWN0ZWRHcmFwaCIsInByZXZpb3VzRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0UHJldmlvdXNFZGdlIiwibGFzdCIsImxhc3RQcmV2aW91c0VkZ2VUYXJnZXRWZXJ0ZXgiLCJzb21lIiwicHJldmlvdXNFZGdlIiwiaW5kZXgiLCJwcmV2aW91c0VkZ2VUYXJnZXRWZXJ0ZXgiLCJzdGFydCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxQkFGTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosSUFBQSxBQUFNQSw4QkE4RWxCLEFBOUVZO2FBQU1BLGNBQ1BDLEtBQUssRUFBRUMsV0FBVzs4QkFEWEY7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztpQkFIRkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxPQUFP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