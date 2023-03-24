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
    function DirectedGraph(edges) {
        _classCallCheck(this, DirectedGraph);
        this.edges = edges;
    }
    _createClass(DirectedGraph, [
        {
            key: "getEdges",
            value: function getEdges() {
                return this.edges;
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
            key: "findCycles",
            value: function findCycles(startVertex) {
                var cycles = [], vertex = startVertex, edges = [];
                this.depthFirstSearch(vertex, edges, function(previousEdges) {
                    var cycle = cycleFromPreviousEdges(previousEdges);
                    cycles.push(cycle);
                });
                return cycles;
            }
        },
        {
            key: "findCyclicEdges",
            value: function findCyclicEdges(startVertex) {
                var cycles = this.findCycles(startVertex), cyclicEdges = (0, _array.flatten)(cycles);
                return cyclicEdges;
            }
        },
        {
            key: "removeNonCyclicEdges",
            value: function removeNonCyclicEdges(startVertex) {
                var cyclicEdges = this.findCyclicEdges(startVertex);
                (0, _array.filter)(this.edges, function(edge) {
                    var cyclicEdgesIncludesEdge = cyclicEdges.includes(edge);
                    if (cyclicEdgesIncludesEdge) {
                        return true;
                    }
                });
            }
        }
    ], [
        {
            key: "fromEdges",
            value: function fromEdges(edges) {
                var directedGraph = new DirectedGraph(edges);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0LCBmaW5kLCBmaWx0ZXIsIGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGVkZ2VzKSB7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cblxuICBkZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgZWRnZXMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcHJldmlvdXNFZGdlcyA9IGVkZ2VzLCAgLy8vXG4gICAgICAgICAgc3VjY2Vzc29yRWRnZXMgPSB0aGlzLmZpbmRTdWNjZXNzb3JFZGdlcyh2ZXJ0ZXgpO1xuXG4gICAgc3VjY2Vzc29yRWRnZXMuZm9yRWFjaCgoc3VjY2Vzc29yRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IHN1Y2Nlc3NvckVkZ2UsIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNFZGdlc0luY2x1ZGVzRWRnZSA9IHByZXZpb3VzRWRnZXMuaW5jbHVkZXMoZWRnZSk7XG5cbiAgICAgIGlmIChwcmV2aW91c0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNhbGxiYWNrKHByZXZpb3VzRWRnZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gc3VjY2Vzc29yRWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKSxcbiAgICAgICAgICAgICAgdmVydGV4ID0gdGFyZ2V0VmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGVkZ2VzID0gW1xuICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzRWRnZXMsXG4gICAgICAgICAgICAgICAgZWRnZVxuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGVkZ2VzLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU3VjY2Vzc29yRWRnZXModmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmZpbmRFZGdlc0J5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgc3VjY2Vzc29yRWRnZXMgPSBlZGdlczsgLy8vXG5cbiAgICByZXR1cm4gc3VjY2Vzc29yRWRnZXM7XG4gIH1cblxuICBmaW5kRWRnZXNCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZpbmQodGhpcy5lZGdlcywgKGVkZ2UpID0+IHsgLy8vXG4gICAgICBjb25zdCBlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCA9IGVkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KTtcblxuICAgICAgaWYgKGVkZ2VNYXRjaGVzU291cmNlVmVydGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZmluZEN5Y2xlcyhzdGFydFZlcnRleCkge1xuICAgIGNvbnN0IGN5Y2xlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleCA9IHN0YXJ0VmVydGV4LCAvLy9cbiAgICAgICAgICBlZGdlcyA9IFtdO1xuXG4gICAgdGhpcy5kZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgZWRnZXMsIChwcmV2aW91c0VkZ2VzKSA9PiB7XG4gICAgICBjb25zdCBjeWNsZSA9IGN5Y2xlRnJvbVByZXZpb3VzRWRnZXMocHJldmlvdXNFZGdlcyk7XG5cbiAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjeWNsZXM7XG4gIH1cblxuICBmaW5kQ3ljbGljRWRnZXMoc3RhcnRWZXJ0ZXgpIHtcbiAgICBjb25zdCBjeWNsZXMgPSB0aGlzLmZpbmRDeWNsZXMoc3RhcnRWZXJ0ZXgpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gZmxhdHRlbihjeWNsZXMpO1xuXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgcmVtb3ZlTm9uQ3ljbGljRWRnZXMoc3RhcnRWZXJ0ZXgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IHRoaXMuZmluZEN5Y2xpY0VkZ2VzKHN0YXJ0VmVydGV4KTtcblxuICAgIGZpbHRlcih0aGlzLmVkZ2VzLCAoZWRnZSkgPT4ge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjeWNsaWNFZGdlcy5pbmNsdWRlcyhlZGdlKTtcblxuICAgICAgaWYgKGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21FZGdlcyhlZGdlcykge1xuICAgIGNvbnN0IGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChlZGdlcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjeWNsZUZyb21QcmV2aW91c0VkZ2VzKHByZXZpb3VzRWRnZXMpIHtcbiAgbGV0IGN5Y2xlO1xuXG4gIGNvbnN0IHByZXZpb3VzRWRnZXNMZW5ndGggPSBwcmV2aW91c0VkZ2VzLmxlbmd0aDtcblxuICBpZiAocHJldmlvdXNFZGdlc0xlbmd0aCA9PT0gMSkge1xuICAgIGN5Y2xlID0gcHJldmlvdXNFZGdlczsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhc3RQcmV2aW91c0VkZ2UgPSBsYXN0KHByZXZpb3VzRWRnZXMpLFxuICAgICAgICAgIGxhc3RQcmV2aW91c0VkZ2VUYXJnZXRWZXJ0ZXggPSBsYXN0UHJldmlvdXNFZGdlLmdldFRhcmdldFZlcnRleCgpO1xuXG4gICAgcHJldmlvdXNFZGdlcy5zb21lKChwcmV2aW91c0VkZ2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c0VkZ2VUYXJnZXRWZXJ0ZXggPSBwcmV2aW91c0VkZ2UuZ2V0VGFyZ2V0VmVydGV4KCk7XG5cbiAgICAgIGlmIChwcmV2aW91c0VkZ2VUYXJnZXRWZXJ0ZXggPT09IGxhc3RQcmV2aW91c0VkZ2VUYXJnZXRWZXJ0ZXgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgICAgICAgY3ljbGUgPSBwcmV2aW91c0VkZ2VzLnNsaWNlKHN0YXJ0KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjeWNsZTtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RlZEdyYXBoIiwiZWRnZXMiLCJnZXRFZGdlcyIsImRlcHRoRmlyc3RTZWFyY2giLCJ2ZXJ0ZXgiLCJjYWxsYmFjayIsInByZXZpb3VzRWRnZXMiLCJzdWNjZXNzb3JFZGdlcyIsImZpbmRTdWNjZXNzb3JFZGdlcyIsImZvckVhY2giLCJzdWNjZXNzb3JFZGdlIiwiZWRnZSIsInByZXZpb3VzRWRnZXNJbmNsdWRlc0VkZ2UiLCJpbmNsdWRlcyIsInRhcmdldFZlcnRleCIsImdldFRhcmdldFZlcnRleCIsInNvdXJjZVZlcnRleCIsImZpbmRFZGdlc0J5U291cmNlVmVydGV4IiwiZmluZCIsImVkZ2VNYXRjaGVzU291cmNlVmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXgiLCJmaW5kQ3ljbGVzIiwic3RhcnRWZXJ0ZXgiLCJjeWNsZXMiLCJjeWNsZSIsImN5Y2xlRnJvbVByZXZpb3VzRWRnZXMiLCJwdXNoIiwiZmluZEN5Y2xpY0VkZ2VzIiwiY3ljbGljRWRnZXMiLCJmbGF0dGVuIiwicmVtb3ZlTm9uQ3ljbGljRWRnZXMiLCJmaWx0ZXIiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImZyb21FZGdlcyIsImRpcmVjdGVkR3JhcGgiLCJwcmV2aW91c0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdFByZXZpb3VzRWRnZSIsImxhc3QiLCJsYXN0UHJldmlvdXNFZGdlVGFyZ2V0VmVydGV4Iiwic29tZSIsInByZXZpb3VzRWRnZSIsImluZGV4IiwicHJldmlvdXNFZGdlVGFyZ2V0VmVydGV4Iiwic3RhcnQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7cUJBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSw4QkE0RmxCLEFBNUZZO2FBQU1BLGNBQ1BDLEtBQUs7OEJBREVEO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7aUJBRklEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVILEtBQUssRUFBRUksUUFBUSxFQUFFOztnQkFDeEMsSUFBTUMsZ0JBQWdCTCxPQUNoQk0saUJBQWlCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNKO2dCQUUvQ0csZUFBZUUsT0FBTyxDQUFDLFNBQUNDLGVBQWtCO29CQUN4QyxJQUFNQyxPQUFPRCxlQUNQRSw0QkFBNEJOLGNBQWNPLFFBQVEsQ0FBQ0Y7b0JBRXpELElBQUlDLDJCQUEyQjt3QkFDN0JQLFNBQVNDO29CQUNYLE9BQU87d0JBQ0wsSUFBTVEsZUFBZUosY0FBY0ssZUFBZSxJQUM1Q1gsV0FBU1UsY0FDVGIsVUFBUSxBQUNOLG1CQUFHSyxzQkFERzs0QkFFTks7eUJBQ0Q7d0JBRVAsTUFBS1IsZ0JBQWdCLENBQUNDLFVBQVFILFNBQU9JO29CQUN2QyxDQUFDO2dCQUNIO1lBQ0Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CSixNQUFNLEVBQUU7Z0JBQ3pCLElBQU1ZLGVBQWVaLFFBQ2ZILFFBQVEsSUFBSSxDQUFDZ0IsdUJBQXVCLENBQUNELGVBQ3JDVCxpQkFBaUJOLE9BQU8sR0FBRztnQkFFakMsT0FBT007WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JELFlBQVksRUFBRTtnQkFDcEMsSUFBTWYsUUFBUWlCLElBQUFBLFdBQUksRUFBQyxJQUFJLENBQUNqQixLQUFLLEVBQUUsU0FBQ1UsTUFBUztvQkFDdkMsSUFBTVEsMEJBQTBCUixLQUFLUyxpQkFBaUIsQ0FBQ0o7b0JBRXZELElBQUlHLHlCQUF5Qjt3QkFDM0IsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsT0FBT2xCO1lBQ1Q7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLFdBQVcsRUFBRTtnQkFDdEIsSUFBTUMsU0FBUyxFQUFFLEVBQ1huQixTQUFTa0IsYUFDVHJCLFFBQVEsRUFBRTtnQkFFaEIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ0MsUUFBUUgsT0FBTyxTQUFDSyxlQUFrQjtvQkFDdEQsSUFBTWtCLFFBQVFDLHVCQUF1Qm5CO29CQUVyQ2lCLE9BQU9HLElBQUksQ0FBQ0Y7Z0JBQ2Q7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JMLFdBQVcsRUFBRTtnQkFDM0IsSUFBTUMsU0FBUyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0MsY0FDekJNLGNBQWNDLElBQUFBLGNBQU8sRUFBQ047Z0JBRTVCLE9BQU9LO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCUixXQUFXLEVBQUU7Z0JBQ2hDLElBQU1NLGNBQWMsSUFBSSxDQUFDRCxlQUFlLENBQUNMO2dCQUV6Q1MsSUFBQUEsYUFBTSxFQUFDLElBQUksQ0FBQzlCLEtBQUssRUFBRSxTQUFDVSxNQUFTO29CQUMzQixJQUFNcUIsMEJBQTBCSixZQUFZZixRQUFRLENBQUNGO29CQUVyRCxJQUFJcUIseUJBQXlCO3dCQUMzQixPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSDtZQUNGOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVoQyxLQUFLLEVBQUU7Z0JBQ3RCLElBQU1pQyxnQkFBZ0IsSUF0RkxsQyxjQXNGdUJDO2dCQUV4QyxPQUFPaUM7WUFDVDs7O1dBekZtQmxDOztBQTRGckIsU0FBU3lCLHVCQUF1Qm5CLGFBQWEsRUFBRTtJQUM3QyxJQUFJa0I7SUFFSixJQUFNVyxzQkFBc0I3QixjQUFjOEIsTUFBTTtJQUVoRCxJQUFJRCx3QkFBd0IsR0FBRztRQUM3QlgsUUFBUWxCLGVBQWdCLEdBQUc7SUFDN0IsT0FBTztRQUNMLElBQU0rQixtQkFBbUJDLElBQUFBLFdBQUksRUFBQ2hDLGdCQUN4QmlDLCtCQUErQkYsaUJBQWlCdEIsZUFBZTtRQUVyRVQsY0FBY2tDLElBQUksQ0FBQyxTQUFDQyxjQUFjQyxPQUFVO1lBQzFDLElBQU1DLDJCQUEyQkYsYUFBYTFCLGVBQWU7WUFFN0QsSUFBSTRCLDZCQUE2QkosOEJBQThCO2dCQUM3RCxJQUFNSyxRQUFRRixRQUFRO2dCQUV0QmxCLFFBQVFsQixjQUFjdUMsS0FBSyxDQUFDRDtnQkFFNUIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO0lBQ0YsQ0FBQztJQUVELE9BQU9wQjtBQUNUIn0=