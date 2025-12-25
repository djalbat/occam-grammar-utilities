"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return DirectedGraph;
    },
    get edgesMatchEdge () {
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
                    if (!cyclesCoincident) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmluZCwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RlZEdyYXBoIHtcbiAgY29uc3RydWN0b3IoZWRnZXMsIHN0YXJ0VmVydGV4KSB7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICAgIHRoaXMuc3RhcnRWZXJ0ZXggPSBzdGFydFZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG5cbiAgZ2V0U3RhcnRWZXJ0ZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRWZXJ0ZXg7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZWRnZXNNYXRjaEVkZ2UodGhpcy5lZGdlcywgZWRnZSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICB9XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5lZGdlcy5pbmRleE9mKGVkZ2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmVkZ2VzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHByZXZpb3VzVmVydGV4ZXMgPSB2ZXJ0ZXhlcywgIC8vL1xuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gdGhpcy5maW5kU3VjY2Vzc29yVmVydGV4ZXModmVydGV4KTtcblxuICAgIHN1Y2Nlc3NvclZlcnRleGVzLmZvckVhY2goKHN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4ID0gcHJldmlvdXNWZXJ0ZXhlcy5pbmNsdWRlcyhzdWNjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgICAgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnByZXZpb3VzVmVydGV4ZXMsXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZlcnRleCA9IHN1Y2Nlc3NvclZlcnRleDsgIC8vL1xuXG4gICAgICBpZiAocHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgICAgIGNhbGxiYWNrKHZlcnRleGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQ3ljbGVzKCkge1xuICAgIGNvbnN0IHRyaXZpYWxDeWNsZXMgPSB0aGlzLmZpbmRUcml2aWFsQ3ljbGVzKCksXG4gICAgICAgICAgbm9uVHJpdmlhbEN5Y2xlcyA9IHRoaXMuZmluZE5vblRyaXZpYWxDeWNsZXMoKSxcbiAgICAgICAgICBjeWNsZXMgPSBbXG4gICAgICAgICAgICAuLi50cml2aWFsQ3ljbGVzLFxuICAgICAgICAgICAgLi4ubm9uVHJpdmlhbEN5Y2xlc1xuICAgICAgICAgIF07XG5cbiAgICBjb21wcmVzcyhjeWNsZXMsIChjeWNsZUEsIGN5Y2xlQikgPT4ge1xuICAgICAgY29uc3QgY3ljbGVzQ29pbmNpZGVudCA9IGFyZUN5Y2xlc0NvaW5jaWRlbnQoY3ljbGVBLCBjeWNsZUIpO1xuXG4gICAgICBpZiAoIWN5Y2xlc0NvaW5jaWRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGVzO1xuICB9XG5cbiAgZmluZFRyaXZpYWxDeWNsZXMoKSB7XG4gICAgY29uc3QgdHJpdmlhbGx5Q3ljbGljRWRnZXMgPSB0aGlzLmZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcygpLFxuICAgICAgICAgIHRyaXZpYWxDeWNsZXMgPSB0cml2aWFsbHlDeWNsaWNFZGdlcy5tYXAoKHRyaXZpYWxseUN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UgPSB0cml2aWFsbHlDeWNsaWNFZGdlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21FZGdlKGVkZ2UpLFxuICAgICAgICAgICAgICAgICAgdHJpdmlhbEN5Y2xlID0gY3ljbGU7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHJpdmlhbEN5Y2xlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyaXZpYWxDeWNsZXM7XG4gIH1cblxuICBmaW5kTm9uVHJpdmlhbEN5Y2xlcygpIHtcbiAgICBjb25zdCBub25Ucml2aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZlcnRleCA9IHRoaXMuc3RhcnRWZXJ0ZXgsIC8vL1xuICAgICAgICAgIHZlcnRleGVzID0gW1xuICAgICAgICAgICAgdmVydGV4XG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCAodmVydGV4ZXMpID0+IHtcbiAgICAgIGNvbnN0IG5vblRyaXZpYWxDeWNsZSA9IG5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcywgZGlyZWN0ZWRHcmFwaCk7XG5cbiAgICAgIG5vblRyaXZpYWxDeWNsZXMucHVzaChub25Ucml2aWFsQ3ljbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vblRyaXZpYWxDeWNsZXM7XG4gIH1cblxuICBmaW5kU3VjY2Vzc29yRWRnZXModmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmZpbmRFZGdlc0J5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgc3VjY2Vzc29yRWRnZXMgPSBlZGdlcy5maWx0ZXIoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4KCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JFZGdlcztcbiAgfVxuXG4gIGZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyh2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JFZGdlcyA9IHRoaXMuZmluZFN1Y2Nlc3NvckVkZ2VzKHZlcnRleCksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBzdWNjZXNzb3JFZGdlcy5tYXAoKHN1Y2Nlc3NvckVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvckVkZ2VUYXJnZXRWZXJ0ZXggPSBzdWNjZXNzb3JFZGdlLmdldFRhcmdldFZlcnRleCgpLFxuICAgICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4ID0gc3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleDsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3QgZWRnZXMgPSBmaW5kKHRoaXMuZWRnZXMsIChlZGdlKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZWRnZU1hdGNoZXNTb3VyY2VWZXJ0ZXggPSBlZGdlLm1hdGNoU291cmNlVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICAgIGlmIChlZGdlTWF0Y2hlc1NvdXJjZVZlcnRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGZpbmRUcml2aWFsbHlDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCB0cml2aWFsbHlDeWNsaWNFZGdlcyA9IGZpbmQodGhpcy5lZGdlcywgKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2VUcml2aWFsbHlDeWNsaWMgPSBlZGdlLmlzVHJpdmlhbGx5Q3ljbGljKCk7XG5cbiAgICAgIGlmIChlZGdlVHJpdmlhbGx5Q3ljbGljKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyaXZpYWxseUN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZmluZEVkZ2VCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2UgPSB0aGlzLmVkZ2VzLmZpbmQoKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBlZGdlLm1hdGNoU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FZGdlc0FuZFN0YXJ0VmVydGV4KGVkZ2VzLCBzdGFydFZlcnRleCkge1xuICAgIGNvbnN0IGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChlZGdlcywgc3RhcnRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzTWF0Y2hFZGdlKGVkZ2VzLCBlZGdlKSB7XG4gIGNvbnN0IGVkZ2VBID0gZWRnZSwgLy8vXG4gICAgICAgIG1hdGNoZXMgPSBlZGdlcy5zb21lKChlZGdlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZWRnZUIgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgICBlZGdlQU1hdGNoZXNFZGdlQiA9IGVkZ2VBLm1hdGNoKGVkZ2VCKTtcblxuICAgICAgICAgIGlmIChlZGdlQU1hdGNoZXNFZGdlQikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbm9uVHJpdmlhbEN5Y2xlRnJvbVZlcnRleGVzKHZlcnRleGVzLCBkaXJlY3RlZEdyYXBoKSB7XG4gIGNvbnN0IGxhc3RWZXJ0ZXggPSBsYXN0KHZlcnRleGVzKSxcbiAgICAgICAgaW5kZXggPSB2ZXJ0ZXhlcy5pbmRleE9mKGxhc3RWZXJ0ZXgpLFxuICAgICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG5cbiAgdmVydGV4ZXMgPSB2ZXJ0ZXhlcy5zbGljZShzdGFydCk7IC8vL1xuXG4gIHZlcnRleGVzLnBvcCgpO1xuXG4gIGNvbnN0IGxlbmd0aCA9IHZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgZWRnZXMgPSB2ZXJ0ZXhlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSAoaW5kZXggKyAxKSAlIGxlbmd0aCxcbiAgICAgICAgICAgICAgICBuZXh0VmVydGV4ID0gdmVydGV4ZXNbbmV4dEluZGV4XSxcbiAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSBuZXh0VmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICBlZGdlID0gZGlyZWN0ZWRHcmFwaC5maW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBlZGdlO1xuICAgICAgICB9KSxcbiAgICAgICAgY3ljbGUgPSBDeWNsZS5mcm9tRWRnZXMoZWRnZXMpO1xuXG4gIHJldHVybiBjeWNsZTtcbn1cblxuZnVuY3Rpb24gc29tZUN5Y2xlUGVybXV0YXRpb24oY3ljbGUsIGNhbGxiYWNrKSB7XG4gIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICBjb25zdCBsZW5ndGggPSBjeWNsZS5nZXRMZW5ndGgoKTtcblxuICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBsZW5ndGg7IG9mZnNldCsrKSB7XG4gICAgcmVzdWx0ID0gY2FsbGJhY2soY3ljbGUpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY3ljbGUgPSBjeWNsZS5wZXJtdXRlZCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gYXJlQ3ljbGVzQ29pbmNpZGVudChjeWNsZUEsIGN5Y2xlQikge1xuICBsZXQgY3ljbGVzQ29pbmNpZGVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGN5Y2xlQUxlbmd0aCA9IGN5Y2xlQS5nZXRMZW5ndGgoKSxcbiAgICAgICAgY3ljbGVCTGVuZ3RoID0gY3ljbGVCLmdldExlbmd0aCgpO1xuXG4gIGlmIChjeWNsZUFMZW5ndGggPT09IGN5Y2xlQkxlbmd0aCkge1xuICAgIGN5Y2xlc0NvaW5jaWRlbnQgPSBzb21lQ3ljbGVQZXJtdXRhdGlvbihjeWNsZUEsIChjeWNsZUEpID0+IHtcbiAgICAgIGNvbnN0IGN5Y2xlQUVxdWFsVG8gPSBjeWNsZUEuaXNFcXVhbFRvKGN5Y2xlQik7XG5cbiAgICAgIGlmIChjeWNsZUFFcXVhbFRvKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xlc0NvaW5jaWRlbnQ7XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0ZWRHcmFwaCIsImVkZ2VzTWF0Y2hFZGdlIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZmluZCIsImNvbXByZXNzIiwiZWRnZXMiLCJzdGFydFZlcnRleCIsImdldEVkZ2VzIiwiZ2V0U3RhcnRWZXJ0ZXgiLCJhZGRFZGdlIiwiZWRnZSIsIm1hdGNoZXMiLCJwdXNoIiwiYWRkRWRnZXMiLCJmb3JFYWNoIiwicmVtb3ZlRWRnZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZXB0aEZpcnN0U2VhcmNoIiwidmVydGV4IiwidmVydGV4ZXMiLCJjYWxsYmFjayIsInByZXZpb3VzVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXhlcyIsImZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyIsInN1Y2Nlc3NvclZlcnRleCIsInByZXZpb3VzVmVydGV4ZXNJbmNsdWRlc1N1Y2Nlc3NvclZlcnRleCIsImluY2x1ZGVzIiwiZmluZEN5Y2xlcyIsInRyaXZpYWxDeWNsZXMiLCJmaW5kVHJpdmlhbEN5Y2xlcyIsIm5vblRyaXZpYWxDeWNsZXMiLCJmaW5kTm9uVHJpdmlhbEN5Y2xlcyIsImN5Y2xlcyIsImN5Y2xlQSIsImN5Y2xlQiIsImN5Y2xlc0NvaW5jaWRlbnQiLCJhcmVDeWNsZXNDb2luY2lkZW50IiwidHJpdmlhbGx5Q3ljbGljRWRnZXMiLCJmaW5kVHJpdmlhbGx5Q3ljbGljRWRnZXMiLCJtYXAiLCJ0cml2aWFsbHlDeWNsaWNFZGdlIiwiY3ljbGUiLCJDeWNsZSIsImZyb21FZGdlIiwidHJpdmlhbEN5Y2xlIiwiZGlyZWN0ZWRHcmFwaCIsIm5vblRyaXZpYWxDeWNsZSIsIm5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyIsImZpbmRTdWNjZXNzb3JFZGdlcyIsInNvdXJjZVZlcnRleCIsImZpbmRFZGdlc0J5U291cmNlVmVydGV4Iiwic3VjY2Vzc29yRWRnZXMiLCJmaWx0ZXIiLCJ0YXJnZXRWZXJ0ZXgiLCJnZXRUYXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JFZGdlIiwic3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleCIsImVkZ2VNYXRjaGVzU291cmNlVmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXgiLCJlZGdlVHJpdmlhbGx5Q3ljbGljIiwiaXNUcml2aWFsbHlDeWNsaWMiLCJmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJmcm9tRWRnZXNBbmRTdGFydFZlcnRleCIsImVkZ2VBIiwic29tZSIsImVkZ2VCIiwiZWRnZUFNYXRjaGVzRWRnZUIiLCJtYXRjaCIsImxhc3RWZXJ0ZXgiLCJzbGljZSIsInBvcCIsImxlbmd0aCIsIm5leHRJbmRleCIsIm5leHRWZXJ0ZXgiLCJmcm9tRWRnZXMiLCJzb21lQ3ljbGVQZXJtdXRhdGlvbiIsInJlc3VsdCIsImdldExlbmd0aCIsIm9mZnNldCIsInBlcm11dGVkIiwiY3ljbGVBTGVuZ3RoIiwiY3ljbGVCTGVuZ3RoIiwiY3ljbGVBRXF1YWxUbyIsImlzRXF1YWxUbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQVFxQkE7O1FBOEtMQztlQUFBQTs7O3lCQXBMZTs0REFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBUUMsT0FBeUJDLHlCQUFjLENBQXZDRCxNQUFNRSxPQUFtQkQseUJBQWMsQ0FBakNDLE1BQU1DLFdBQWFGLHlCQUFjLENBQTNCRTtBQUVMLElBQUEsQUFBTUwsOEJBQU47YUFBTUEsY0FDUE0sS0FBSyxFQUFFQyxXQUFXO2dD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