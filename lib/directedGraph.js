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
var last = _necessary.arrayUtilities.last, find = _necessary.arrayUtilities.find;
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
    var lastVertex = last(vertexes), index = vertexes.indexOf(lastVertex), vertexesLength = vertexes.length, start = index, end = vertexesLength - 1, cycle = vertexes.slice(start, end); ///
    return cycle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBsYXN0LCBmaW5kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgICB0aGlzLnN0YXJ0VmVydGV4ID0gc3RhcnRWZXJ0ZXg7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuXG4gIGdldFN0YXJ0VmVydGV4KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0VmVydGV4O1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3QgZWRnZUEgPSBlZGdlLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5lZGdlcy5zb21lKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlZGdlQiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgICAgZWRnZUFNYXRjaGVzRWRnZUIgPSBlZGdlQS5tYXRjaChlZGdlQik7XG5cbiAgICAgICAgICAgIGlmIChlZGdlQU1hdGNoZXNFZGdlQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmVkZ2VzLmluZGV4T2YoZWRnZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZWRnZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBkZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhlcyA9IHZlcnRleGVzLCAgLy8vXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSB0aGlzLmZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyh2ZXJ0ZXgpO1xuXG4gICAgc3VjY2Vzc29yVmVydGV4ZXMuZm9yRWFjaCgoc3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c1ZlcnRleGVzSW5jbHVkZXNTdWNjZXNzb3JWZXJ0ZXggPSBwcmV2aW91c1ZlcnRleGVzLmluY2x1ZGVzKHN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgICB2ZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgICAgLi4ucHJldmlvdXNWZXJ0ZXhlcyxcbiAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdmVydGV4ID0gc3VjY2Vzc29yVmVydGV4OyAgLy8vXG5cbiAgICAgIGlmIChwcmV2aW91c1ZlcnRleGVzSW5jbHVkZXNTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICAgICAgY2FsbGJhY2sodmVydGV4ZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRDeWNsZXMoKSB7XG4gICAgY29uc3QgdHJpdmlhbEN5Y2xlcyA9IHRoaXMuZmluZFRyaXZpYWxDeWNsZXMoKSxcbiAgICAgICAgICBub25Ucml2aWFsQ3ljbGVzID0gdGhpcy5maW5kTm9uVHJpdmlhbEN5Y2xlcygpLFxuICAgICAgICAgIGN5Y2xlcyA9IFtcbiAgICAgICAgICAgIC4uLnRyaXZpYWxDeWNsZXMsXG4gICAgICAgICAgICAuLi5ub25Ucml2aWFsQ3ljbGVzXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBjeWNsZXM7XG4gIH1cblxuICBmaW5kVHJpdmlhbEN5Y2xlcygpIHtcbiAgICBjb25zdCB0cml2aWFsbHlDeWNsaWNFZGdlcyA9IHRoaXMuZmluZFRyaXZpYWxseUN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgdHJpdmlhbEN5Y2xlcyA9IHRyaXZpYWxseUN5Y2xpY0VkZ2VzLm1hcCgodHJpdmxhbGx5Q3ljbGljRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdHJpdmxhbGx5Q3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXgoKSxcbiAgICAgICAgICAgICAgICAgIHRyaXZpYWxDeWNsZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVmVydGV4XG4gICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJpdmlhbEN5Y2xlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyaXZpYWxDeWNsZXM7XG4gIH1cblxuICBmaW5kTm9uVHJpdmlhbEN5Y2xlcygpIHtcbiAgICBjb25zdCBub25Ucml2aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gdGhpcy5zdGFydFZlcnRleCwgLy8vXG4gICAgICAgICAgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhcbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5kZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsICh2ZXJ0ZXhlcykgPT4ge1xuICAgICAgY29uc3Qgbm9uVHJpdmlhbEN5Y2xlID0gbm9uVHJpdmlhbEN5Y2xlRnJvbVZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgICAgbm9uVHJpdmlhbEN5Y2xlcy5wdXNoKG5vblRyaXZpYWxDeWNsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbEN5Y2xlcztcbiAgfVxuXG4gIGZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyh2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBzdWNjZXNzb3JFZGdlcyA9IGVkZ2VzLmZpbHRlcigoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldFZlcnRleCAhPT0gc291cmNlVmVydGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gc3VjY2Vzc29yRWRnZXMubWFwKChzdWNjZXNzb3JFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JFZGdlVGFyZ2V0VmVydGV4ID0gc3VjY2Vzc29yRWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKSxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleCA9IHN1Y2Nlc3NvckVkZ2VUYXJnZXRWZXJ0ZXg7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGZpbmRFZGdlc0J5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2VzID0gZmluZCh0aGlzLmVkZ2VzLCAoZWRnZSkgPT4geyAvLy9cbiAgICAgIGNvbnN0IGVkZ2VNYXRjaGVzU291cmNlVmVydGV4ID0gZWRnZS5tYXRjaFNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoZWRnZU1hdGNoZXNTb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWRnZXM7XG4gIH1cblxuICBmaW5kVHJpdmlhbGx5Q3ljbGljRWRnZXMoKSB7XG4gICAgY29uc3QgdHJpdmlhbGx5Q3ljbGljRWRnZXMgPSBmaW5kKHRoaXMuZWRnZXMsIChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlVHJpdmlhbGx5Q3ljbGljID0gZWRnZS5pc1RyaXZpYWxseUN5Y2xpYygpO1xuXG4gICAgICBpZiAoZWRnZVRyaXZpYWxseUN5Y2xpYykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0cml2aWFsbHlDeWNsaWNFZGdlcztcbiAgfVxuXG4gIGZpbmRFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCBlZGdlID0gdGhpcy5lZGdlcy5maW5kKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZWRnZS5tYXRjaChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWRnZXNBbmRTdGFydFZlcnRleChlZGdlcywgc3RhcnRWZXJ0ZXgpIHtcbiAgICBjb25zdCBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoZWRnZXMsIHN0YXJ0VmVydGV4KTtcblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcykge1xuICBjb25zdCBsYXN0VmVydGV4ID0gbGFzdCh2ZXJ0ZXhlcyksXG4gICAgICAgIGluZGV4ID0gdmVydGV4ZXMuaW5kZXhPZihsYXN0VmVydGV4KSxcbiAgICAgICAgdmVydGV4ZXNMZW5ndGggPSB2ZXJ0ZXhlcy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgIGVuZCA9IHZlcnRleGVzTGVuZ3RoIC0gMSxcbiAgICAgICAgY3ljbGUgPSB2ZXJ0ZXhlcy5zbGljZShzdGFydCwgZW5kKTsgLy8vXG5cbiAgcmV0dXJuIGN5Y2xlO1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGVkR3JhcGgiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaW5kIiwiZWRnZXMiLCJzdGFydFZlcnRleCIsImdldEVkZ2VzIiwiZ2V0U3RhcnRWZXJ0ZXgiLCJhZGRFZGdlIiwiZWRnZSIsImVkZ2VBIiwibWF0Y2hlcyIsInNvbWUiLCJlZGdlQiIsImVkZ2VBTWF0Y2hlc0VkZ2VCIiwibWF0Y2giLCJwdXNoIiwiYWRkRWRnZXMiLCJmb3JFYWNoIiwicmVtb3ZlRWRnZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZXB0aEZpcnN0U2VhcmNoIiwidmVydGV4IiwidmVydGV4ZXMiLCJjYWxsYmFjayIsInByZXZpb3VzVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXhlcyIsImZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyIsInN1Y2Nlc3NvclZlcnRleCIsInByZXZpb3VzVmVydGV4ZXNJbmNsdWRlc1N1Y2Nlc3NvclZlcnRleCIsImluY2x1ZGVzIiwiZmluZEN5Y2xlcyIsInRyaXZpYWxDeWNsZXMiLCJmaW5kVHJpdmlhbEN5Y2xlcyIsIm5vblRyaXZpYWxDeWNsZXMiLCJmaW5kTm9uVHJpdmlhbEN5Y2xlcyIsImN5Y2xlcyIsInRyaXZpYWxseUN5Y2xpY0VkZ2VzIiwiZmluZFRyaXZpYWxseUN5Y2xpY0VkZ2VzIiwibWFwIiwidHJpdmxhbGx5Q3ljbGljRWRnZSIsInNvdXJjZVZlcnRleCIsImdldFNvdXJjZVZlcnRleCIsInRyaXZpYWxDeWNsZSIsIm5vblRyaXZpYWxDeWNsZSIsIm5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyIsImZpbmRFZGdlc0J5U291cmNlVmVydGV4Iiwic3VjY2Vzc29yRWRnZXMiLCJmaWx0ZXIiLCJ0YXJnZXRWZXJ0ZXgiLCJnZXRUYXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JFZGdlIiwic3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleCIsImVkZ2VNYXRjaGVzU291cmNlVmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXgiLCJlZGdlVHJpdmlhbGx5Q3ljbGljIiwiaXNUcml2aWFsbHlDeWNsaWMiLCJmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiZnJvbUVkZ2VzQW5kU3RhcnRWZXJ0ZXgiLCJkaXJlY3RlZEdyYXBoIiwibGFzdFZlcnRleCIsInZlcnRleGVzTGVuZ3RoIiwibGVuZ3RoIiwiZW5kIiwiY3ljbGUiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFRQyxPQUFlQyx5QkFBYyxDQUE3QkQsTUFBTUUsT0FBU0QseUJBQWMsQ0FBdkJDO0FBRUMsSUFBQSxBQUFNSCw4QkF3S2xCLEFBeEtZO2FBQU1BLGNBQ1BJLEtBQUssRUFBRUMsV0FBVztnQ0FEWEw7UUFFakIsSUFBSSxDQUFDSSxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFIRkw7O1lBTW5CTSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsSUFBSSxF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