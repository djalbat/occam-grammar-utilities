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
function nonTrivialCycleFromVertexes(vertexes) {
    var lastVertex = last(vertexes), index = vertexes.indexOf(lastVertex), vertexesLength = vertexes.length, start = index, end = vertexesLength - 1, cycle = vertexes.slice(start, end); ///
    return cycle;
}
function someCyclePermutation(cycle, callback) {
    var result = false;
    var length = cycle.length;
    for(var offset = 0; offset < length; offset++){
        result = callback(cycle);
        if (result) {
            break;
        }
        cycle = permuteCycle(cycle);
    }
    return result;
}
function areCyclesCoincident(cycleA, cycleB) {
    var cyclesCoincident = false;
    var cycleALength = cycleA.length, cycleBLength = cycleB.length;
    if (cycleALength === cycleBLength) {
        cyclesCoincident = someCyclePermutation(cycleA, function(cycleA) {
            var cyclesEqual = areCyclesEqual(cycleA, cycleB);
            if (cyclesEqual) {
                return true;
            }
        });
    }
    return cyclesCoincident;
}
function areCyclesEqual(cycleA, cycleB) {
    var vertexesA = cycleA, vertexesB = cycleB, cyclesEqual = vertexesA.every(function(vertexA, index) {
        var vertexB = vertexesB[index];
        if (vertexA === vertexB) {
            return true;
        }
    });
    return cyclesEqual;
}
function permuteCycle(cycle) {
    var vertexes = cycle.slice(), vertex = vertexes.pop();
    vertexes.unshift(vertex);
    cycle = vertexes; ///
    return cycle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBsYXN0LCBmaW5kLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihlZGdlcywgc3RhcnRWZXJ0ZXgpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gICAgdGhpcy5zdGFydFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cblxuICBnZXRTdGFydFZlcnRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFZlcnRleDtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IGVkZ2VBID0gZWRnZSwgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMuZWRnZXMuc29tZSgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRnZUIgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGVkZ2VBTWF0Y2hlc0VkZ2VCID0gZWRnZUEubWF0Y2goZWRnZUIpO1xuXG4gICAgICAgICAgICBpZiAoZWRnZUFNYXRjaGVzRWRnZUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICB9XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5lZGdlcy5pbmRleE9mKGVkZ2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmVkZ2VzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHByZXZpb3VzVmVydGV4ZXMgPSB2ZXJ0ZXhlcywgIC8vL1xuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gdGhpcy5maW5kU3VjY2Vzc29yVmVydGV4ZXModmVydGV4KTtcblxuICAgIHN1Y2Nlc3NvclZlcnRleGVzLmZvckVhY2goKHN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4ID0gcHJldmlvdXNWZXJ0ZXhlcy5pbmNsdWRlcyhzdWNjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgICAgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnByZXZpb3VzVmVydGV4ZXMsXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZlcnRleCA9IHN1Y2Nlc3NvclZlcnRleDsgIC8vL1xuXG4gICAgICBpZiAocHJldmlvdXNWZXJ0ZXhlc0luY2x1ZGVzU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgICAgIGNhbGxiYWNrKHZlcnRleGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIHZlcnRleGVzLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQ3ljbGVzKCkge1xuICAgIGNvbnN0IHRyaXZpYWxDeWNsZXMgPSB0aGlzLmZpbmRUcml2aWFsQ3ljbGVzKCksXG4gICAgICAgICAgbm9uVHJpdmlhbEN5Y2xlcyA9IHRoaXMuZmluZE5vblRyaXZpYWxDeWNsZXMoKSxcbiAgICAgICAgICBjeWNsZXMgPSBbXG4gICAgICAgICAgICAuLi50cml2aWFsQ3ljbGVzLFxuICAgICAgICAgICAgLi4ubm9uVHJpdmlhbEN5Y2xlc1xuICAgICAgICAgIF07XG5cbiAgICBjb21wcmVzcyhjeWNsZXMsIChjeWNsZUEsIGN5Y2xlQikgPT4ge1xuICAgICAgY29uc3QgY3ljbGVzQ29pbmNpZGVudCA9IGFyZUN5Y2xlc0NvaW5jaWRlbnQoY3ljbGVBLCBjeWNsZUIpO1xuXG4gICAgICBpZiAoY3ljbGVzQ29pbmNpZGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjeWNsZXM7XG4gIH1cblxuICBmaW5kVHJpdmlhbEN5Y2xlcygpIHtcbiAgICBjb25zdCB0cml2aWFsbHlDeWNsaWNFZGdlcyA9IHRoaXMuZmluZFRyaXZpYWxseUN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgdHJpdmlhbEN5Y2xlcyA9IHRyaXZpYWxseUN5Y2xpY0VkZ2VzLm1hcCgodHJpdmxhbGx5Q3ljbGljRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdHJpdmxhbGx5Q3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXgoKSxcbiAgICAgICAgICAgICAgICAgIHRyaXZpYWxDeWNsZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVmVydGV4XG4gICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJpdmlhbEN5Y2xlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyaXZpYWxDeWNsZXM7XG4gIH1cblxuICBmaW5kTm9uVHJpdmlhbEN5Y2xlcygpIHtcbiAgICBjb25zdCBub25Ucml2aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gdGhpcy5zdGFydFZlcnRleCwgLy8vXG4gICAgICAgICAgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhcbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5kZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgdmVydGV4ZXMsICh2ZXJ0ZXhlcykgPT4ge1xuICAgICAgY29uc3Qgbm9uVHJpdmlhbEN5Y2xlID0gbm9uVHJpdmlhbEN5Y2xlRnJvbVZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgICAgbm9uVHJpdmlhbEN5Y2xlcy5wdXNoKG5vblRyaXZpYWxDeWNsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9uVHJpdmlhbEN5Y2xlcztcbiAgfVxuXG4gIGZpbmRTdWNjZXNzb3JWZXJ0ZXhlcyh2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZmluZEVkZ2VzQnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBzdWNjZXNzb3JFZGdlcyA9IGVkZ2VzLmZpbHRlcigoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldFZlcnRleCAhPT0gc291cmNlVmVydGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gc3VjY2Vzc29yRWRnZXMubWFwKChzdWNjZXNzb3JFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JFZGdlVGFyZ2V0VmVydGV4ID0gc3VjY2Vzc29yRWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKSxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleCA9IHN1Y2Nlc3NvckVkZ2VUYXJnZXRWZXJ0ZXg7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGZpbmRFZGdlc0J5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2VzID0gZmluZCh0aGlzLmVkZ2VzLCAoZWRnZSkgPT4geyAvLy9cbiAgICAgIGNvbnN0IGVkZ2VNYXRjaGVzU291cmNlVmVydGV4ID0gZWRnZS5tYXRjaFNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoZWRnZU1hdGNoZXNTb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWRnZXM7XG4gIH1cblxuICBmaW5kVHJpdmlhbGx5Q3ljbGljRWRnZXMoKSB7XG4gICAgY29uc3QgdHJpdmlhbGx5Q3ljbGljRWRnZXMgPSBmaW5kKHRoaXMuZWRnZXMsIChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlVHJpdmlhbGx5Q3ljbGljID0gZWRnZS5pc1RyaXZpYWxseUN5Y2xpYygpO1xuXG4gICAgICBpZiAoZWRnZVRyaXZpYWxseUN5Y2xpYykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0cml2aWFsbHlDeWNsaWNFZGdlcztcbiAgfVxuXG4gIGZpbmRFZGdlQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCBlZGdlID0gdGhpcy5lZGdlcy5maW5kKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZWRnZS5tYXRjaFNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWRnZXNBbmRTdGFydFZlcnRleChlZGdlcywgc3RhcnRWZXJ0ZXgpIHtcbiAgICBjb25zdCBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoZWRnZXMsIHN0YXJ0VmVydGV4KTtcblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyh2ZXJ0ZXhlcykge1xuICBjb25zdCBsYXN0VmVydGV4ID0gbGFzdCh2ZXJ0ZXhlcyksXG4gICAgICAgIGluZGV4ID0gdmVydGV4ZXMuaW5kZXhPZihsYXN0VmVydGV4KSxcbiAgICAgICAgdmVydGV4ZXNMZW5ndGggPSB2ZXJ0ZXhlcy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgIGVuZCA9IHZlcnRleGVzTGVuZ3RoIC0gMSxcbiAgICAgICAgY3ljbGUgPSB2ZXJ0ZXhlcy5zbGljZShzdGFydCwgZW5kKTsgLy8vXG5cbiAgcmV0dXJuIGN5Y2xlO1xufVxuXG5mdW5jdGlvbiBzb21lQ3ljbGVQZXJtdXRhdGlvbihjeWNsZSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlbmd0aCA9IGN5Y2xlLmxlbmd0aDtcblxuICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBsZW5ndGg7IG9mZnNldCsrKSB7XG4gICAgcmVzdWx0ID0gY2FsbGJhY2soY3ljbGUpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY3ljbGUgPSBwZXJtdXRlQ3ljbGUoY3ljbGUpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gYXJlQ3ljbGVzQ29pbmNpZGVudChjeWNsZUEsIGN5Y2xlQikge1xuICBsZXQgY3ljbGVzQ29pbmNpZGVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGN5Y2xlQUxlbmd0aCA9IGN5Y2xlQS5sZW5ndGgsXG4gICAgICAgIGN5Y2xlQkxlbmd0aCA9IGN5Y2xlQi5sZW5ndGg7XG5cbiAgaWYgKGN5Y2xlQUxlbmd0aCA9PT0gY3ljbGVCTGVuZ3RoKSB7XG4gICAgY3ljbGVzQ29pbmNpZGVudCA9IHNvbWVDeWNsZVBlcm11dGF0aW9uKGN5Y2xlQSwgKGN5Y2xlQSkgPT4ge1xuICAgICAgY29uc3QgY3ljbGVzRXF1YWwgPSBhcmVDeWNsZXNFcXVhbChjeWNsZUEsIGN5Y2xlQik7XG5cbiAgICAgIGlmIChjeWNsZXNFcXVhbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjeWNsZXNDb2luY2lkZW50O1xufVxuXG5mdW5jdGlvbiBhcmVDeWNsZXNFcXVhbChjeWNsZUEsIGN5Y2xlQikge1xuICBjb25zdCB2ZXJ0ZXhlc0EgPSBjeWNsZUEsIC8vL1xuICAgICAgICB2ZXJ0ZXhlc0IgPSBjeWNsZUIsIC8vL1xuICAgICAgICBjeWNsZXNFcXVhbCA9IHZlcnRleGVzQS5ldmVyeSgodmVydGV4QSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXhCID0gdmVydGV4ZXNCW2luZGV4XTtcblxuICAgICAgICAgIGlmICh2ZXJ0ZXhBID09PSB2ZXJ0ZXhCKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBjeWNsZXNFcXVhbDtcbn1cblxuZnVuY3Rpb24gcGVybXV0ZUN5Y2xlKGN5Y2xlKSB7XG4gIGNvbnN0IHZlcnRleGVzID0gY3ljbGUuc2xpY2UoKSwgLy8vXG4gICAgICAgIHZlcnRleCA9IHZlcnRleGVzLnBvcCgpO1xuXG4gIHZlcnRleGVzLnVuc2hpZnQodmVydGV4KTtcblxuICBjeWNsZSA9IHZlcnRleGVzOyAvLy9cblxuICByZXR1cm4gY3ljbGU7XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0ZWRHcmFwaCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbmQiLCJjb21wcmVzcyIsImVkZ2VzIiwic3RhcnRWZXJ0ZXgiLCJnZXRFZGdlcyIsImdldFN0YXJ0VmVydGV4IiwiYWRkRWRnZSIsImVkZ2UiLCJlZGdlQSIsIm1hdGNoZXMiLCJzb21lIiwiZWRnZUIiLCJlZGdlQU1hdGNoZXNFZGdlQiIsIm1hdGNoIiwicHVzaCIsImFkZEVkZ2VzIiwiZm9yRWFjaCIsInJlbW92ZUVkZ2UiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZGVwdGhGaXJzdFNlYXJjaCIsInZlcnRleCIsInZlcnRleGVzIiwiY2FsbGJhY2siLCJwcmV2aW91c1ZlcnRleGVzIiwic3VjY2Vzc29yVmVydGV4ZXMiLCJmaW5kU3VjY2Vzc29yVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXgiLCJwcmV2aW91c1ZlcnRleGVzSW5jbHVkZXNTdWNjZXNzb3JWZXJ0ZXgiLCJpbmNsdWRlcyIsImZpbmRDeWNsZXMiLCJ0cml2aWFsQ3ljbGVzIiwiZmluZFRyaXZpYWxDeWNsZXMiLCJub25Ucml2aWFsQ3ljbGVzIiwiZmluZE5vblRyaXZpYWxDeWNsZXMiLCJjeWNsZXMiLCJjeWNsZUEiLCJjeWNsZUIiLCJjeWNsZXNDb2luY2lkZW50IiwiYXJlQ3ljbGVzQ29pbmNpZGVudCIsInRyaXZpYWxseUN5Y2xpY0VkZ2VzIiwiZmluZFRyaXZpYWxseUN5Y2xpY0VkZ2VzIiwibWFwIiwidHJpdmxhbGx5Q3ljbGljRWRnZSIsInNvdXJjZVZlcnRleCIsImdldFNvdXJjZVZlcnRleCIsInRyaXZpYWxDeWNsZSIsIm5vblRyaXZpYWxDeWNsZSIsIm5vblRyaXZpYWxDeWNsZUZyb21WZXJ0ZXhlcyIsImZpbmRFZGdlc0J5U291cmNlVmVydGV4Iiwic3VjY2Vzc29yRWRnZXMiLCJmaWx0ZXIiLCJ0YXJnZXRWZXJ0ZXgiLCJnZXRUYXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JFZGdlIiwic3VjY2Vzc29yRWRnZVRhcmdldFZlcnRleCIsImVkZ2VNYXRjaGVzU291cmNlVmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXgiLCJlZGdlVHJpdmlhbGx5Q3ljbGljIiwiaXNUcml2aWFsbHlDeWNsaWMiLCJmaW5kRWRnZUJ5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwibWF0Y2hTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJmcm9tRWRnZXNBbmRTdGFydFZlcnRleCIsImRpcmVjdGVkR3JhcGgiLCJsYXN0VmVydGV4IiwidmVydGV4ZXNMZW5ndGgiLCJsZW5ndGgiLCJlbmQiLCJjeWNsZSIsInNsaWNlIiwic29tZUN5Y2xlUGVybXV0YXRpb24iLCJyZXN1bHQiLCJvZmZzZXQiLCJwZXJtdXRlQ3ljbGUiLCJjeWNsZUFMZW5ndGgiLCJjeWNsZUJMZW5ndGgiLCJjeWNsZXNFcXVhbCIsImFyZUN5Y2xlc0VxdWFsIiwidmVydGV4ZXNBIiwidmVydGV4ZXNCIiwiZXZlcnkiLCJ2ZXJ0ZXhBIiwidmVydGV4QiIsInBvcCIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBUUMsT0FBeUJDLHlCQUFjLENBQXZDRCxNQUFNRSxPQUFtQkQseUJBQWMsQ0FBakNDLE1BQU1DLFdBQWFGLHlCQUFjLENBQTNCRTtBQUVMLElBQUEsQUFBTUosOEJBZ0xsQixBQWhMWTthQUFNQSxjQUNQSyxLQUFLLEVBQUVDLFdBQVc7Z0NBRFhOO1FBRWpCLElBQUksQ0FBQ0ssS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSEZOOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLElB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