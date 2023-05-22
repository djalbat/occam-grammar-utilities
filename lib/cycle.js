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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBDT01NQV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN5Y2xlIHtcbiAgY29uc3RydWN0b3IoZWRnZXMpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmVkZ2VzLmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRFZGdlKGluZGV4KSB7XG4gICAgY29uc3QgZWRnZSA9IHRoaXMuZWRnZXNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBnZXRWZXJ0ZXhlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMubWFwRWRnZSgoZWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXgoKSxcbiAgICAgICAgICAgIHZlcnRleCA9IHNvdXJjZVZlcnRleDsgIC8vL1xuXG4gICAgICByZXR1cm4gdmVydGV4O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcnRleGVzO1xuICB9XG5cbiAgbWFwRWRnZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5lZGdlcy5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFZGdlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmVkZ2VzLmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFZGdlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmVkZ2VzLmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgaXNFcXVhbFRvKGN5Y2xlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IGN5Y2xlQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjeWNsZUIgPSBjeWNsZSwgIC8vL1xuICAgICAgICAgIGN5Y2xlQUxlbmd0aCA9IGN5Y2xlQS5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBjeWNsZUJMZW5ndGggPSBjeWNsZUIuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoY3ljbGVBTGVuZ3RoID09PSBjeWNsZUJMZW5ndGgpIHtcbiAgICAgIGVxdWFsVG8gPSBjeWNsZUEuZXZlcnlFZGdlKChlZGdlQSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZWRnZUIgPSBjeWNsZUIuZ2V0RWRnZShpbmRleCksXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBlZGdlQS5tYXRjaChlZGdlQik7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBwZXJtdXRlZCgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuZWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZWRnZSA9IGVkZ2VzLnBvcCgpO1xuXG4gICAgZWRnZXMudW5zaGlmdChlZGdlKTtcblxuICAgIGNvbnN0IGN5Y2xlID0gbmV3IEN5Y2xlKGVkZ2VzKTtcblxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIHN0cmluZyA9IHZlcnRleGVzLmpvaW4oQ09NTUFfQ0hBUkFDVEVSKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW1xuICAgICAgICAgICAgZWRnZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUoZWRnZXMpO1xuXG4gICAgcmV0dXJuIGN5Y2xlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FZGdlcyhlZGdlcykge1xuICAgIGNvbnN0IGN5Y2xlID0gbmV3IEN5Y2xlKGVkZ2VzKTtcblxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDeWNsZSIsIkNPTU1BX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJlZGdlcyIsImdldEVkZ2VzIiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0RWRnZSIsImluZGV4IiwiZWRnZSIsImdldFZlcnRleGVzIiwidmVydGV4ZXMiLCJtYXBFZGdlIiwic291cmNlVmVydGV4IiwiZ2V0U291cmNlVmVydGV4IiwidmVydGV4IiwiY2FsbGJhY2siLCJtYXAiLCJldmVyeUVkZ2UiLCJldmVyeSIsImZvckVhY2hFZGdlIiwiZm9yRWFjaCIsImlzRXF1YWxUbyIsImN5Y2xlIiwiZXF1YWxUbyIsImN5Y2xlQSIsImN5Y2xlQiIsImN5Y2xlQUxlbmd0aCIsImN5Y2xlQkxlbmd0aCIsImVkZ2VBIiwiZWRnZUIiLCJtYXRjaGVzIiwibWF0Y2giLCJwZXJtdXRlZCIsInNsaWNlIiwicG9wIiwidW5zaGlmdCIsImFzU3RyaW5nIiwic3RyaW5nIiwiam9pbiIsImZyb21FZGdlIiwiZnJvbUVkZ2VzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTSxBQUFFQyxrQkFBb0JDLHNCQUFwQkQ7QUFFTyxJQUFBLEFBQU1ELHNCQUFOO2FBQU1BLE1BQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csUUFBUUE7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Q7WUFDZDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0gsTUFBTUc7Z0JBRTFCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsS0FBSztnQkFDWCxJQUFNQyxPQUFPLElBQUksQ0FBQ04sS0FBSyxDQUFDSyxNQUFNO2dCQUU5QixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxRQUFRLFNBQUNIO29CQUM3QixJQUFNSSxlQUFlSixLQUFLSyxtQkFDcEJDLFNBQVNGLGNBQWUsR0FBRztvQkFFakMsT0FBT0U7Z0JBQ1Q7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSSxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDYixNQUFNYyxJQUFJRDtZQUFXOzs7WUFFckRFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRixRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDYixNQUFNZ0IsTUFBTUg7WUFBVzs7O1lBRXpESSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUosUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ2IsTUFBTWtCLFFBQVFMO1lBQVc7OztZQUU3RE0sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLEtBQUs7Z0JBQ2IsSUFBSUMsVUFBVTtnQkFFZCxJQUFNQyxTQUFTLElBQUksRUFDYkMsU0FBU0gsT0FDVEksZUFBZUYsT0FBT3BCLGFBQ3RCdUIsZUFBZUYsT0FBT3JCO2dCQUU1QixJQUFJc0IsaUJBQWlCQyxjQUFjO29CQUNqQ0osVUFBVUMsT0FBT1AsVUFBVSxTQUFDVyxPQUFPckI7d0JBQ2pDLElBQU1zQixRQUFRSixPQUFPbkIsUUFBUUMsUUFDdkJ1QixVQUFVRixNQUFNRyxNQUFNRjt3QkFFNUIsSUFBSUMsU0FBUzs0QkFDWCxPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9QO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTlCLFFBQVEsSUFBSSxDQUFDQSxNQUFNK0IsU0FDbkJ6QixPQUFPTixNQUFNZ0M7Z0JBRW5CaEMsTUFBTWlDLFFBQVEzQjtnQkFFZCxJQUFNYyxRQUFRLElBbEVHdkIsTUFrRU9HO2dCQUV4QixPQUFPb0I7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNMUIsV0FBVyxJQUFJLENBQUNELGVBQ2hCNEIsU0FBUzNCLFNBQVM0QixLQUFLdEM7Z0JBRTdCLE9BQU9xQztZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLFNBQVMvQixJQUFJO2dCQUNsQixJQUFNTixRQUFRO29CQUNOTTtpQkFDRCxFQUNEYyxRQUFRLElBbEZHdkIsTUFrRk9HO2dCQUV4QixPQUFPb0I7WUFDVDs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSxVQUFVdEMsS0FBSztnQkFDcEIsSUFBTW9CLFFBQVEsSUF4Rkd2QixNQXdGT0c7Z0JBRXhCLE9BQU9vQjtZQUNUOzs7V0EzRm1CdkIifQ==