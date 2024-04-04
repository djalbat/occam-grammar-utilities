"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Cycle;
    }
});
var _necessary = require("necessary");
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
var COMMA_CHARACTER = _necessary.characters.COMMA_CHARACTER;
var Cycle = /*#__PURE__*/ function() {
    function Cycle(edges) {
        _class_call_check(this, Cycle);
        this.edges = edges;
    }
    _create_class(Cycle, [
        {
            key: "getEdges",
            value: function getEdges() {
                return this.edges;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var length = this.edges.length;
                return length;
            }
        },
        {
            key: "getEdge",
            value: function getEdge(index) {
                var edge = this.edges[index];
                return edge;
            }
        },
        {
            key: "getVertexes",
            value: function getVertexes() {
                var vertexes = this.mapEdge(function(edge) {
                    var sourceVertex = edge.getSourceVertex(), vertex = sourceVertex; ///
                    return vertex;
                });
                return vertexes;
            }
        },
        {
            key: "mapEdge",
            value: function mapEdge(callback) {
                return this.edges.map(callback);
            }
        },
        {
            key: "everyEdge",
            value: function everyEdge(callback) {
                return this.edges.every(callback);
            }
        },
        {
            key: "forEachEdge",
            value: function forEachEdge(callback) {
                return this.edges.forEach(callback);
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(cycle) {
                var equalTo = false;
                var cycleA = this, cycleB = cycle, cycleALength = cycleA.getLength(), cycleBLength = cycleB.getLength();
                if (cycleALength === cycleBLength) {
                    equalTo = cycleA.everyEdge(function(edgeA, index) {
                        var edgeB = cycleB.getEdge(index), matches = edgeA.match(edgeB);
                        if (matches) {
                            return true;
                        }
                    });
                }
                return equalTo;
            }
        },
        {
            key: "permuted",
            value: function permuted() {
                var edges = this.edges.slice(), edge = edges.pop();
                edges.unshift(edge);
                var cycle = new Cycle(edges);
                return cycle;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var vertexes = this.getVertexes(), string = vertexes.join(COMMA_CHARACTER);
                return string;
            }
        }
    ], [
        {
            key: "fromEdge",
            value: function fromEdge(edge) {
                var edges = [
                    edge
                ], cycle = new Cycle(edges);
                return cycle;
            }
        },
        {
            key: "fromEdges",
            value: function fromEdges(edges) {
                var cycle = new Cycle(edges);
                return cycle;
            }
        }
    ]);
    return Cycle;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBDT01NQV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN5Y2xlIHtcbiAgY29uc3RydWN0b3IoZWRnZXMpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmVkZ2VzLmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRFZGdlKGluZGV4KSB7XG4gICAgY29uc3QgZWRnZSA9IHRoaXMuZWRnZXNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBnZXRWZXJ0ZXhlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMubWFwRWRnZSgoZWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXgoKSxcbiAgICAgICAgICAgIHZlcnRleCA9IHNvdXJjZVZlcnRleDsgIC8vL1xuXG4gICAgICByZXR1cm4gdmVydGV4O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcnRleGVzO1xuICB9XG5cbiAgbWFwRWRnZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5lZGdlcy5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFZGdlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmVkZ2VzLmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFZGdlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmVkZ2VzLmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgaXNFcXVhbFRvKGN5Y2xlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IGN5Y2xlQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjeWNsZUIgPSBjeWNsZSwgIC8vL1xuICAgICAgICAgIGN5Y2xlQUxlbmd0aCA9IGN5Y2xlQS5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBjeWNsZUJMZW5ndGggPSBjeWNsZUIuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoY3ljbGVBTGVuZ3RoID09PSBjeWNsZUJMZW5ndGgpIHtcbiAgICAgIGVxdWFsVG8gPSBjeWNsZUEuZXZlcnlFZGdlKChlZGdlQSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZWRnZUIgPSBjeWNsZUIuZ2V0RWRnZShpbmRleCksXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBlZGdlQS5tYXRjaChlZGdlQik7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBwZXJtdXRlZCgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuZWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZWRnZSA9IGVkZ2VzLnBvcCgpO1xuXG4gICAgZWRnZXMudW5zaGlmdChlZGdlKTtcblxuICAgIGNvbnN0IGN5Y2xlID0gbmV3IEN5Y2xlKGVkZ2VzKTtcblxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIHN0cmluZyA9IHZlcnRleGVzLmpvaW4oQ09NTUFfQ0hBUkFDVEVSKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW1xuICAgICAgICAgICAgZWRnZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUoZWRnZXMpO1xuXG4gICAgcmV0dXJuIGN5Y2xlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FZGdlcyhlZGdlcykge1xuICAgIGNvbnN0IGN5Y2xlID0gbmV3IEN5Y2xlKGVkZ2VzKTtcblxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkN5Y2xlIiwiQ09NTUFfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsImVkZ2VzIiwiZ2V0RWRnZXMiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRFZGdlIiwiaW5kZXgiLCJlZGdlIiwiZ2V0VmVydGV4ZXMiLCJ2ZXJ0ZXhlcyIsIm1hcEVkZ2UiLCJzb3VyY2VWZXJ0ZXgiLCJnZXRTb3VyY2VWZXJ0ZXgiLCJ2ZXJ0ZXgiLCJjYWxsYmFjayIsIm1hcCIsImV2ZXJ5RWRnZSIsImV2ZXJ5IiwiZm9yRWFjaEVkZ2UiLCJmb3JFYWNoIiwiaXNFcXVhbFRvIiwiY3ljbGUiLCJlcXVhbFRvIiwiY3ljbGVBIiwiY3ljbGVCIiwiY3ljbGVBTGVuZ3RoIiwiY3ljbGVCTGVuZ3RoIiwiZWRnZUEiLCJlZGdlQiIsIm1hdGNoZXMiLCJtYXRjaCIsInBlcm11dGVkIiwic2xpY2UiLCJwb3AiLCJ1bnNoaWZ0IiwiYXNTdHJpbmciLCJzdHJpbmciLCJqb2luIiwiZnJvbUVkZ2UiLCJmcm9tRWRnZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTSxBQUFFQyxrQkFBb0JDLHFCQUFVLENBQTlCRDtBQUVPLElBQUEsQUFBTUQsc0JBQUQsQUFBTDthQUFNQSxNQUNQRyxLQUFLO2dD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