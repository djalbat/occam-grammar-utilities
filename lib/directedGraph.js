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
var _cycle = /*#__PURE__*/ _interop_require_default(require("./cycle"));
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
                var triviallyCyclicEdges = this.findTriviallyCyclicEdges(), trivialCycles = triviallyCyclicEdges.map(function(triviallyCyclicEdge) {
                    var edge = triviallyCyclicEdge, cycle = _cycle.default.fromEdge(edge), trivialCycle = cycle; ///
                    return trivialCycle;
                });
                return trivialCycles;
            }
        },
        {
            key: "findNonTrivialCycles",
            value: function findNonTrivialCycles() {
                var nonTrivialCycles = [], directedGraph = this, vertex = this.startVertex, vertexes = [
                    vertex
                ];
                this.depthFirstSearch(vertex, vertexes, function(vertexes) {
                    var nonTrivialCycle = nonTrivialCycleFromVertexes(vertexes, directedGraph);
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
            key: "findSuccessorVertexes",
            value: function findSuccessorVertexes(vertex) {
                var successorEdges = this.findSuccessorEdges(vertex), successorVertexes = successorEdges.map(function(successorEdge) {
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
function nonTrivialCycleFromVertexes(vertexes, directedGraph) {
    var lastVertex = last(vertexes), index = vertexes.indexOf(lastVertex), start = index; ///
    vertexes = vertexes.slice(start); ///
    vertexes.pop();
    var length = vertexes.length, edges = vertexes.map(function(vertex, index) {
        var nextIndex = (index + 1) % length, nextVertex = vertexes[nextIndex], sourceVertex = vertex, targetVertex = nextVertex, edge = directedGraph.findEdgeBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
        return edge;
    }), cycle = _cycle.default.fromEdges(edges);
    return cycle;
}
function someCyclePermutation(cycle, callback) {
    var result = false;
    var length = cycle.getLength();
    for(var offset = 0; offset < length; offset++){
        result = callback(cycle);
        if (result) {
            break;
        }
        cycle = cycle.permuted();
    }
    return result;
}
function areCyclesCoincident(cycleA, cycleB) {
    var cyclesCoincident = false;
    var cycleALength = cycleA.getLength(), cycleBLength = cycleB.getLength();
    if (cycleALength === cycleBLength) {
        cyclesCoincident = someCyclePermutation(cycleA, function(cycleA) {
            var cycleAEqualTo = cycleA.isEqualTo(cycleB);
            if (cycleAEqualTo) {
                return true;
            }
        });
    }
    return cyclesCoincident;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmluZCwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RlZEdyYXBoIHtcbiAgY29uc3RydWN0b3IoZWRnZXMsIHN0YXJ0VmVydGV4KSB7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICAgIHRoaXMuc3RhcnRWZXJ0ZXggPSBzdGFydFZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG5cbiAgZ2V0U3RhcnRWZXJ0ZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRWZXJ0ZXg7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZWRnZXNNYXRjaEVkZ2UodGhpcy5lZGdlcywgZWRnZSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICB9XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5lZGdlcy5pbmRleE9mKGVkZ2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmVkZ2VzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHByZXZpb3VzVmVydGV4ZXMgPSB2ZXJ0ZXhlcywgIC8vL1xuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gdGhpcy5maW5kU3VjY2Vzc29yVmVydGV4ZXModmVydGV4KTtcblxuICAgIHN1Y2Nlc3NvclZlcnRleGVzLmZvckVhY2goKHN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4ID0gcHJldmlvdXNWZXJ0ZXhlcy5pbmNsdWRlcyhzdWNjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgICAgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnByZXZpb3VzVmVydGV4ZXMsXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZlcnRleCA9IHN1Y2Nlc3NvclZlcnRleDsgIC8vL1xuXG4gICAgICBpZiAocHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgICAgIGNhbGxiYWNrKHZlcnRleGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQ3ljbGVzKCkge1xuICAgIGNvbnN0IHRyaXZpYWxDeWNsZXMgPSB0aGlzLmZpbmRUcml2aWFsQ3ljbGVzKCksXG4gICAgICAgICAgbm9uVHJpdmlhbEN5Y2xlcyA9IHRoaXMuZmluZE5vblRyaXZpYWxDeWNsZXMoKSxcbiAgICAgICAgICBjeWNsZXMgPSBbXG4gICAgICAgICAgICAuLi50cml2aWFsQ3ljbGVzLFxuICAgICAgICAgICAgLi4ubm9uVHJpdmlhbEN5Y2xlc1xuICAgICAgICAgIF07XG5cbiAgICBjb21wcmVzcyhjeWNsZXMsIChjeWNsZUEsIGN5Y2xlQikgPT4ge1xuICAgICAgY29uc3QgY3ljbGVzQ29pbmNpZGVudCA9IGFyZUN5Y2xlc0NvaW5jaWRlbnQoY3ljbGVBLCBjeWNsZUIpO1xuXG4gICAgICBpZiAoY3ljbGVzQ29pbmNpZGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjeWNsZXM7XG4gIH1cblxuICBmaW5kVHJpdmlhbEN5Y2xlcygpIHtcbiAgICBjb25zdCB0cml2aWFsbHlDeWNsaWNFZGdlcyA9IHRoaXMuZmluZFRyaXZpYWxseUN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgdHJpdmlhbEN5Y2xlcyA9IHRyaXZpYWxseUN5Y2xpY0VkZ2VzLm1hcCgodHJpdmlhbGx5Q3ljbGljRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRnZSA9IHRyaXZpYWxseUN5Y2xpY0VkZ2UsICAvLy9cbiAgICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbUVkZ2UoZWRnZSksXG4gICAgICAgICAgICAgICAgICB0cml2aWFsQ3ljbGUgPSBjeWNsZTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0cml2aWFsQ3ljbGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdHJpdmlhbEN5Y2xlcztcbiAgfVxuXG4gIGZpbmROb25Ucml2aWFsQ3ljbGVzKCkge1xuICAgIGNvbnN0IG5vblRyaXZpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVydGV4ID0gdGhpcy5zdGFydFZlcnRleCwgLy8vXG4gICAgICAgICAgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhcbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5kZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsICh2ZXJ0ZXhlcykgPT4ge1xuICAgICAgY29uc3Qgbm9uVHJpdmlhbEN5Y2xlID0gbm9uVHJpdmlhbEN5Y2xlRnJvbVZlcnRleGVzKHZlcnRleGVzLCBkaXJlY3RlZEdyYXBoKTtcblxuICAgICAgbm9uVHJpdmlhbEN5Y2xlcy5wdXNoKG5vblRyaXZpYWxDeWNsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbEN5Y2xlcztcbiAgfVxuXG4gIGZpbmRTdWNjZXNzb3JFZGdlcyh2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBzdWNjZXNzb3JFZGdlcyA9IGVkZ2VzLmZpbHRlcigoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldFZlcnRleCAhPT0gc291cmNlVmVydGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvckVkZ2VzO1xuICB9XG5cbiAgZmluZFN1Y2Nlc3NvclZlcnRleGVzKHZlcnRleCkge1xuICAgIGNvbnN0IHN1Y2Nlc3NvckVkZ2VzID0gdGhpcy5maW5kU3VjY2Vzc29yRWRnZXModmVydGV4KSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhlcyA9IHN1Y2Nlc3NvckVkZ2VzLm1hcCgoc3VjY2Vzc29yRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleCA9IHN1Y2Nlc3NvckVkZ2UuZ2V0VGFyZ2V0VmVydGV4KCksXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXggPSBzdWNjZXNzb3JFZGdlVGFyZ2V0VmVydGV4OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBmaW5kRWRnZXNCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZpbmQodGhpcy5lZGdlcywgKGVkZ2UpID0+IHsgLy8vXG4gICAgICBjb25zdCBlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCA9IGVkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KTtcblxuICAgICAgaWYgKGVkZ2VNYXRjaGVzU291cmNlVmVydGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZmluZFRyaXZpYWxseUN5Y2xpY0VkZ2VzKCkge1xuICAgIGNvbnN0IHRyaXZpYWxseUN5Y2xpY0VkZ2VzID0gZmluZCh0aGlzLmVkZ2VzLCAoZWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZVRyaXZpYWxseUN5Y2xpYyA9IGVkZ2UuaXNUcml2aWFsbHlDeWNsaWMoKTtcblxuICAgICAgaWYgKGVkZ2VUcml2aWFsbHlDeWNsaWMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJpdmlhbGx5Q3ljbGljRWRnZXM7XG4gIH1cblxuICBmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgZWRnZSA9IHRoaXMuZWRnZXMuZmluZCgoZWRnZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGVkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVkZ2VzQW5kU3RhcnRWZXJ0ZXgoZWRnZXMsIHN0YXJ0VmVydGV4KSB7XG4gICAgY29uc3QgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGVkZ2VzLCBzdGFydFZlcnRleCk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNNYXRjaEVkZ2UoZWRnZXMsIGVkZ2UpIHtcbiAgY29uc3QgZWRnZUEgPSBlZGdlLCAvLy9cbiAgICAgICAgbWF0Y2hlcyA9IGVkZ2VzLnNvbWUoKGVkZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBlZGdlQiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgIGVkZ2VBTWF0Y2hlc0VkZ2VCID0gZWRnZUEubWF0Y2goZWRnZUIpO1xuXG4gICAgICAgICAgaWYgKGVkZ2VBTWF0Y2hlc0VkZ2VCKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBub25Ucml2aWFsQ3ljbGVGcm9tVmVydGV4ZXModmVydGV4ZXMsIGRpcmVjdGVkR3JhcGgpIHtcbiAgY29uc3QgbGFzdFZlcnRleCA9IGxhc3QodmVydGV4ZXMpLFxuICAgICAgICBpbmRleCA9IHZlcnRleGVzLmluZGV4T2YobGFzdFZlcnRleCksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cblxuICB2ZXJ0ZXhlcyA9IHZlcnRleGVzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgdmVydGV4ZXMucG9wKCk7XG5cbiAgY29uc3QgbGVuZ3RoID0gdmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICBlZGdlcyA9IHZlcnRleGVzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IChpbmRleCArIDEpICUgbGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5leHRWZXJ0ZXggPSB2ZXJ0ZXhlc1tuZXh0SW5kZXhdLFxuICAgICAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IG5leHRWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgIGVkZ2UgPSBkaXJlY3RlZEdyYXBoLmZpbmRFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgIH0pLFxuICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21FZGdlcyhlZGdlcyk7XG5cbiAgcmV0dXJuIGN5Y2xlO1xufVxuXG5mdW5jdGlvbiBzb21lQ3ljbGVQZXJtdXRhdGlvbihjeWNsZSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlbmd0aCA9IGN5Y2xlLmdldExlbmd0aCgpO1xuXG4gIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICByZXN1bHQgPSBjYWxsYmFjayhjeWNsZSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjeWNsZSA9IGN5Y2xlLnBlcm11dGVkKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBhcmVDeWNsZXNDb2luY2lkZW50KGN5Y2xlQSwgY3ljbGVCKSB7XG4gIGxldCBjeWNsZXNDb2luY2lkZW50ID0gZmFsc2U7XG5cbiAgY29uc3QgY3ljbGVBTGVuZ3RoID0gY3ljbGVBLmdldExlbmd0aCgpLFxuICAgICAgICBjeWNsZUJMZW5ndGggPSBjeWNsZUIuZ2V0TGVuZ3RoKCk7XG5cbiAgaWYgKGN5Y2xlQUxlbmd0aCA9PT0gY3ljbGVCTGVuZ3RoKSB7XG4gICAgY3ljbGVzQ29pbmNpZGVudCA9IHNvbWVDeWNsZVBlcm11dGF0aW9uKGN5Y2xlQSwgKGN5Y2xlQSkgPT4ge1xuICAgICAgY29uc3QgY3ljbGVBRXF1YWxUbyA9IGN5Y2xlQS5pc0VxdWFsVG8oY3ljbGVCKTtcblxuICAgICAgaWYgKGN5Y2xlQUVxdWFsVG8pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY3ljbGVzQ29pbmNpZGVudDtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RlZEdyYXBoIiwiZWRnZXNNYXRjaEVkZ2UiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaW5kIiwiY29tcHJlc3MiLCJlZGdlcyIsInN0YXJ0VmVydGV4IiwiZ2V0RWRnZXMiLCJnZXRTdGFydFZlcnRleCIsImFkZEVkZ2UiLCJlZGdlIiwibWF0Y2hlcyIsInB1c2giLCJhZGRFZGdlcyIsImZvckVhY2giLCJyZW1vdmVFZGdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImRlcHRoRmlyc3RTZWFyY2giLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhlcyIsImNhbGxiYWNrIiwicHJldmlvdXNWZXJ0ZXhlcyIsInN1Y2Nlc3NvclZlcnRleGVzIiwiZmluZFN1Y2Nlc3NvclZlcnRleGVzIiwic3VjY2Vzc29yVmVydGV4IiwicHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4IiwiaW5jbHVkZXMiLCJmaW5kQ3ljbGVzIiwidHJpdmlhbEN5Y2xlcyIsImZpbmRUcml2aWFsQ3ljbGVzIiwibm9uVHJpdmlhbEN5Y2xlcyIsImZpbmROb25Ucml2aWFsQ3ljbGVzIiwiY3ljbGVzIiwiY3ljbGVBIiwiY3ljbGVCIiwiY3ljbGVzQ29pbmNpZGVudCIsImFyZUN5Y2xlc0NvaW5jaWRlbnQiLCJ0cml2aWFsbHlDeWNsaWNFZGdlcyIsImZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcyIsIm1hcCIsInRyaXZpYWxseUN5Y2xpY0VkZ2UiLCJjeWNsZSIsIkN5Y2xlIiwiZnJvbUVkZ2UiLCJ0cml2aWFsQ3ljbGUiLCJkaXJlY3RlZEdyYXBoIiwibm9uVHJpdmlhbEN5Y2xlIiwibm9uVHJpdmlhbEN5Y2xlRnJvbVZlcnRleGVzIiwiZmluZFN1Y2Nlc3NvckVkZ2VzIiwic291cmNlVmVydGV4IiwiZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgiLCJzdWNjZXNzb3JFZGdlcyIsImZpbHRlciIsInRhcmdldFZlcnRleCIsImdldFRhcmdldFZlcnRleCIsInN1Y2Nlc3NvckVkZ2UiLCJzdWNjZXNzb3JFZGdlVGFyZ2V0VmVydGV4IiwiZWRnZU1hdGNoZXNTb3VyY2VWZXJ0ZXgiLCJtYXRjaFNvdXJjZVZlcnRleCIsImVkZ2VUcml2aWFsbHlDeWNsaWMiLCJpc1RyaXZpYWxseUN5Y2xpYyIsImZpbmRFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJtYXRjaFNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsImZyb21FZGdlc0FuZFN0YXJ0VmVydGV4IiwiZWRnZUEiLCJzb21lIiwiZWRnZUIiLCJlZGdlQU1hdGNoZXNFZGdlQiIsIm1hdGNoIiwibGFzdFZlcnRleCIsInNsaWNlIiwicG9wIiwibGVuZ3RoIiwibmV4dEluZGV4IiwibmV4dFZlcnRleCIsImZyb21FZGdlcyIsInNvbWVDeWNsZVBlcm11dGF0aW9uIiwicmVzdWx0IiwiZ2V0TGVuZ3RoIiwib2Zmc2V0IiwicGVybXV0ZWQiLCJjeWNsZUFMZW5ndGgiLCJjeWNsZUJMZW5ndGgiLCJjeWNsZUFFcXVhbFRvIiwiaXNFcXVhbFRvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBUXFCQTs7SUE4S0xDLGNBQWM7ZUFBZEE7Ozt5QkFwTGU7NERBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQVFDLE9BQXlCQyx5QkFBYyxDQUF2Q0QsTUFBTUUsT0FBbUJELHlCQUFjLENBQWpDQyxNQUFNQyxXQUFhRix5QkFBYyxDQUEzQkU7QUFFTCxJQUFBLEFBQU1MLDhCQThLbEIsQUE5S1k7YUFBTUEsY0FDUE0sS0FBSyxFQUFFQyxXQUFXO2dDQURYUDtRQUVqQixJQUFJLENBQUNNLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUhGUDs7WUFNbkJRLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxJQUFJLEVBQUU7Z0JBQ1osSUFBTUMsVUFBVVgsZUFBZSxJQUFJLENBQUNLLEtBQUssRUFBRUs7Z0JBRTNDLElBQUksQ0FBQ0MsU0FBUztvQkFDWixJQUFJLENBQUNOLEtBQUssQ0FBQ08sSUFBSSxDQUFDRjtnQkFDbEIsQ0FBQztZQUNIOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNSLEtBQUssRUFBRTs7Z0JBQ2RBLE1BQU1TLE9BQU8sQ0FBQyxTQUFDSixNQUFTO29CQUN0QixNQUFLRCxPQUFPLENBQUNDO2dCQUNmO1lBQ0Y7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0wsSUFBSSxFQUFFO2dCQUNmLElBQU1NLFFBQVEsSUFBSSxDQUFDWCxLQUFLLENBQUNZLE9BQU8sQ0FBQ1AsT0FDM0JRLFFBQVFGLE9BQ1JHLGNBQWM7Z0JBRXBCLElBQUksQ0FBQ2QsS0FBSyxDQUFDZSxNQUFNLENBQUNGLE9BQU9DO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTs7Z0JBQzNDLElBQU1DLG1CQUFtQkYsVUFDbkJHLG9CQUFvQixJQUFJLENBQUNDLHFCQUFxQixDQUFDTDtnQkFFckRJLGtCQUFrQlosT0FBTyxDQUFDLFNBQUNjLGlCQUFvQjtvQkFDN0MsSUFBTUMsMENBQTBDSixpQkFBaUJLLFFBQVEsQ0FBQ0Ysa0JBQ3BFTCxhQUFXLEFBQ1QscUJBQUdFLHlCQURNO3dCQUVURztxQkFDRCxHQUNETixXQUFTTSxpQkFBa0IsR0FBRztvQkFFcEMsSUFBSUMseUNBQXlDO3dCQUMzQ0wsU0FBU0Q7b0JBQ1gsT0FBTzt3QkFDTCxNQUFLRixnQkFBZ0IsQ0FBQ0MsVUFBUUMsWUFBVUM7b0JBQzFDLENBQUM7Z0JBQ0g7WUFDRjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLGlCQUFpQixJQUN0Q0MsbUJBQW1CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzVDQyxTQUFTLEFBQ1AscUJBQUdKLHNCQUNILHFCQUFHRTtnQkFHWDlCLFNBQVNnQyxRQUFRLFNBQUNDLFFBQVFDLFFBQVc7b0JBQ25DLElBQU1DLG1CQUFtQkMsb0JBQW9CSCxRQUFRQztvQkFFckQsSUFBSUMsa0JBQWtCO3dCQUNwQixPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSDtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjtnQkFDbEIsSUFBTVEsdUJBQXVCLElBQUksQ0FBQ0Msd0JBQXdCLElBQ3BEVixnQkFBZ0JTLHFCQUFxQkUsR0FBRyxDQUFDLFNBQUNDLHFCQUF3QjtvQkFDaEUsSUFBTWxDLE9BQU9rQyxxQkFDUEMsUUFBUUMsY0FBSyxDQUFDQyxRQUFRLENBQUNyQyxPQUN2QnNDLGVBQWVILE9BQU8sR0FBRztvQkFFL0IsT0FBT0c7Z0JBQ1Q7Z0JBRU4sT0FBT2hCO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixJQUFNRCxtQkFBbUIsRUFBRSxFQUNyQmUsZ0JBQWdCLElBQUksRUFDcEIzQixTQUFTLElBQUksQ0FBQ2hCLFdBQVcsRUFDekJpQixXQUFXO29CQUNURDtpQkFDRDtnQkFFUCxJQUFJLENBQUNELGdCQUFnQixDQUFDQyxRQUFRQyxVQUFVLFNBQUNBLFVBQWE7b0JBQ3BELElBQU0yQixrQkFBa0JDLDRCQUE0QjVCLFVBQVUwQjtvQkFFOURmLGlCQUFpQnRCLElBQUksQ0FBQ3NDO2dCQUN4QjtnQkFFQSxPQUFPaEI7WUFDVDs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1COUIsTUFBTSxFQUFFO2dCQUN6QixJQUFNK0IsZUFBZS9CLFFBQ2ZqQixRQUFRLElBQUksQ0FBQ2lELHVCQUF1QixDQUFDRCxlQUNyQ0UsaUJBQWlCbEQsTUFBTW1ELE1BQU0sQ0FBQyxTQUFDOUMsTUFBUztvQkFDdEMsSUFBTStDLGVBQWUvQyxLQUFLZ0QsZUFBZTtvQkFFekMsSUFBSUQsaUJBQWlCSixjQUFjO3dCQUNqQyxPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSDtnQkFFTixPQUFPRTtZQUNUOzs7WUFFQTVCLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JMLE1BQU0sRUFBRTtnQkFDNUIsSUFBTWlDLGlCQUFpQixJQUFJLENBQUNILGtCQUFrQixDQUFDOUIsU0FDekNJLG9CQUFvQjZCLGVBQWVaLEdBQUcsQ0FBQyxTQUFDZ0IsZUFBa0I7b0JBQ3hELElBQU1DLDRCQUE0QkQsY0FBY0QsZUFBZSxJQUN6RDlCLGtCQUFrQmdDLDJCQUE0QixHQUFHO29CQUV2RCxPQUFPaEM7Z0JBQ1Q7Z0JBRU4sT0FBT0Y7WUFDVDs7O1lBRUE0QixLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCRCxZQUFZLEVBQUU7Z0JBQ3BDLElBQU1oRCxRQUFRRixLQUFLLElBQUksQ0FBQ0UsS0FBSyxFQUFFLFNBQUNLLE1BQVM7b0JBQ3ZDLElBQU1tRCwwQkFBMEJuRCxLQUFLb0QsaUJBQWlCLENBQUNUO29CQUV2RCxJQUFJUSx5QkFBeUI7d0JBQzNCLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNIO2dCQUVBLE9BQU94RDtZQUNUOzs7WUFFQXFDLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkI7Z0JBQ3pCLElBQU1ELHVCQUF1QnRDLEtBQUssSUFBSSxDQUFDRSxLQUFLLEVBQUUsU0FBQ0ssTUFBUztvQkFDdEQsSUFBTXFELHNCQUFzQnJELEtBQUtzRCxpQkFBaUI7b0JBRWxELElBQUlELHFCQUFxQjt3QkFDdkIsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsT0FBT3RCO1lBQ1Q7OztZQUVBd0IsS0FBQUE7bUJBQUFBLFNBQUFBLHNDQUFzQ1osWUFBWSxFQUFFSSxZQUFZLEVBQUU7Z0JBQ2hFLElBQU0vQyxPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDRixJQUFJLENBQUMsU0FBQ08sTUFBUztvQkFDckMsSUFBTUMsVUFBVUQsS0FBS3dELGdDQUFnQyxDQUFDYixjQUFjSTtvQkFFcEUsSUFBSTlDLFNBQVM7d0JBQ1gsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsTUFBTSxJQUFJO2dCQUVWLE9BQU9EO1lBQ1Q7Ozs7WUFFT3lELEtBQUFBO21CQUFQLFNBQU9BLHdCQUF3QjlELEtBQUssRUFBRUMsV0FBVyxFQUFFO2dCQUNqRCxJQUFNMkMsZ0JBQWdCLElBeEtMbEQsY0F3S3VCTSxPQUFPQztnQkFFL0MsT0FBTzJDO1lBQ1Q7OztXQTNLbUJsRDs7QUE4S2QsU0FBU0MsZUFBZUssS0FBSyxFQUFFSyxJQUFJLEVBQUU7SUFDMUMsSUFBTTBELFFBQVExRCxNQUNSQyxVQUFVTixNQUFNZ0UsSUFBSSxDQUFDLFNBQUMzRCxNQUFTO1FBQzdCLElBQU00RCxRQUFRNUQsTUFDUjZELG9CQUFvQkgsTUFBTUksS0FBSyxDQUFDRjtRQUV0QyxJQUFJQyxtQkFBbUI7WUFDckIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRU4sT0FBTzVEO0FBQ1Q7QUFFQSxTQUFTd0MsNEJBQTRCNUIsUUFBUSxFQUFFMEIsYUFBYSxFQUFFO0lBQzVELElBQU13QixhQUFheEUsS0FBS3NCLFdBQ2xCUCxRQUFRTyxTQUFTTixPQUFPLENBQUN3RCxhQUN6QnZELFFBQVFGLE9BQVEsR0FBRztJQUV6Qk8sV0FBV0EsU0FBU21ELEtBQUssQ0FBQ3hELFFBQVEsR0FBRztJQUVyQ0ssU0FBU29ELEdBQUc7SUFFWixJQUFNQyxTQUFTckQsU0FBU3FELE1BQU0sRUFDeEJ2RSxRQUFRa0IsU0FBU29CLEdBQUcsQ0FBQyxTQUFDckIsUUFBUU4sT0FBVTtRQUN0QyxJQUFNNkQsWUFBWSxBQUFDN0QsQ0FBQUEsUUFBUSxDQUFBLElBQUs0RCxRQUMxQkUsYUFBYXZELFFBQVEsQ0FBQ3NELFVBQVUsRUFDaEN4QixlQUFlL0IsUUFDZm1DLGVBQWVxQixZQUNmcEUsT0FBT3VDLGNBQWNnQixxQ0FBcUMsQ0FBQ1osY0FBY0k7UUFFL0UsT0FBTy9DO0lBQ1QsSUFDQW1DLFFBQVFDLGNBQUssQ0FBQ2lDLFNBQVMsQ0FBQzFFO0lBRTlCLE9BQU93QztBQUNUO0FBRUEsU0FBU21DLHFCQUFxQm5DLEtBQUssRUFBRXJCLFFBQVEsRUFBRTtJQUM3QyxJQUFJeUQsU0FBUyxLQUFLO0lBRWxCLElBQU1MLFNBQVMvQixNQUFNcUMsU0FBUztJQUU5QixJQUFLLElBQUlDLFNBQVMsR0FBR0EsU0FBU1AsUUFBUU8sU0FBVTtRQUM5Q0YsU0FBU3pELFNBQVNxQjtRQUVsQixJQUFJb0MsUUFBUTtZQUNWLEtBQU07UUFDUixDQUFDO1FBRURwQyxRQUFRQSxNQUFNdUMsUUFBUTtJQUN4QjtJQUVBLE9BQU9IO0FBQ1Q7QUFFQSxTQUFTekMsb0JBQW9CSCxNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUMzQyxJQUFJQyxtQkFBbUIsS0FBSztJQUU1QixJQUFNOEMsZUFBZWhELE9BQU82QyxTQUFTLElBQy9CSSxlQUFlaEQsT0FBTzRDLFNBQVM7SUFFckMsSUFBSUcsaUJBQWlCQyxjQUFjO1FBQ2pDL0MsbUJBQW1CeUMscUJBQXFCM0MsUUFBUSxTQUFDQSxRQUFXO1lBQzFELElBQU1rRCxnQkFBZ0JsRCxPQUFPbUQsU0FBUyxDQUFDbEQ7WUFFdkMsSUFBSWlELGVBQWU7Z0JBQ2pCLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSDtJQUNGLENBQUM7SUFFRCxPQUFPaEQ7QUFDVCJ9