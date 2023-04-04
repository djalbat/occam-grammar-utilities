"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Edge;
    }
});
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
var Edge = /*#__PURE__*/ function() {
    function Edge(sourceVertex, targetVertex) {
        _classCallCheck(this, Edge);
        this.sourceVertex = sourceVertex;
        this.targetVertex = targetVertex;
    }
    _createClass(Edge, [
        {
            key: "getSourceVertex",
            value: function getSourceVertex() {
                return this.sourceVertex;
            }
        },
        {
            key: "getTargetVertex",
            value: function getTargetVertex() {
                return this.targetVertex;
            }
        },
        {
            key: "isTriviallyCyclic",
            value: function isTriviallyCyclic() {
                var triviallyCyclic = this.sourceVertex === this.targetVertex;
                return triviallyCyclic;
            }
        },
        {
            key: "match",
            value: function match(sourceVertex, targetVertex) {
                var matches = this.sourceVertex === sourceVertex && this.targetVertex === targetVertex;
                return matches;
            }
        },
        {
            key: "matchSourceVertex",
            value: function matchSourceVertex(sourceVertex) {
                var matchesSourceVertex = this.sourceVertex === sourceVertex;
                return matchesSourceVertex;
            }
        },
        {
            key: "matchTargetVertex",
            value: function matchTargetVertex(targetVertex) {
                var matchesTargetVertex = this.targetVertex === targetVertex;
                return matchesTargetVertex;
            }
        }
    ], [
        {
            key: "fromSourceVertexAndTargetVertex",
            value: function fromSourceVertexAndTargetVertex(sourceVertex, targetVertex) {
                var edge = new Edge(sourceVertex, targetVertex);
                return edge;
            }
        }
    ]);
    return Edge;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lZGdlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3Ioc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgICB0aGlzLnNvdXJjZVZlcnRleCA9IHNvdXJjZVZlcnRleDtcbiAgICB0aGlzLnRhcmdldFZlcnRleCA9IHRhcmdldFZlcnRleDtcbiAgfVxuXG4gIGdldFNvdXJjZVZlcnRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VWZXJ0ZXg7XG4gIH1cblxuICBnZXRUYXJnZXRWZXJ0ZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4O1xuICB9XG5cbiAgaXNUcml2aWFsbHlDeWNsaWMoKSB7XG4gICAgY29uc3QgdHJpdmlhbGx5Q3ljbGljID0gKHRoaXMuc291cmNlVmVydGV4ID09PSB0aGlzLnRhcmdldFZlcnRleCk7XG5cbiAgICByZXR1cm4gdHJpdmlhbGx5Q3ljbGljO1xuICB9XG5cbiAgbWF0Y2goc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLnNvdXJjZVZlcnRleCA9PT0gc291cmNlVmVydGV4KSAmJiAodGhpcy50YXJnZXRWZXJ0ZXggPT09IHRhcmdldFZlcnRleCkpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBtYXRjaGVzU291cmNlVmVydGV4ID0gKHRoaXMuc291cmNlVmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNTb3VyY2VWZXJ0ZXg7XG4gIH1cblxuICBtYXRjaFRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCBtYXRjaGVzVGFyZ2V0VmVydGV4ID0gKHRoaXMudGFyZ2V0VmVydGV4ID09PSB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUYXJnZXRWZXJ0ZXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJFZGdlIiwic291cmNlVmVydGV4IiwidGFyZ2V0VmVydGV4IiwiZ2V0U291cmNlVmVydGV4IiwiZ2V0VGFyZ2V0VmVydGV4IiwiaXNUcml2aWFsbHlDeWNsaWMiLCJ0cml2aWFsbHlDeWNsaWMiLCJtYXRjaCIsIm1hdGNoZXMiLCJtYXRjaFNvdXJjZVZlcnRleCIsIm1hdGNoZXNTb3VyY2VWZXJ0ZXgiLCJtYXRjaFRhcmdldFZlcnRleCIsIm1hdGNoZXNUYXJnZXRWZXJ0ZXgiLCJmcm9tU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiZWRnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxxQkFBTjthQUFNQSxLQUNQQyxZQUFZLEVBQUVDLFlBQVk7OEJBRG5CRjtRQUVqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztpQkFISEY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjtnQkFDbEIsSUFBTUMsa0JBQW1CLElBQUksQ0FBQ0wsWUFBWSxLQUFLLElBQUksQ0FBQ0MsWUFBWTtnQkFFaEUsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNTixZQUFZLEVBQUVDLFlBQVksRUFBRTtnQkFDaEMsSUFBTU0sVUFBVyxBQUFDLElBQUksQ0FBQ1AsWUFBWSxLQUFLQSxnQkFBa0IsSUFBSSxDQUFDQyxZQUFZLEtBQUtBO2dCQUVoRixPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlIsWUFBWSxFQUFFO2dCQUM5QixJQUFNUyxzQkFBdUIsSUFBSSxDQUFDVCxZQUFZLEtBQUtBO2dCQUVuRCxPQUFPUztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlQsWUFBWSxFQUFFO2dCQUM5QixJQUFNVSxzQkFBdUIsSUFBSSxDQUFDVixZQUFZLEtBQUtBO2dCQUVuRCxPQUFPVTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGdDQUFnQ1osWUFBWSxFQUFFQyxZQUFZLEVBQUU7Z0JBQ2pFLElBQU1ZLE9BQU8sSUF2Q0lkLEtBdUNLQyxjQUFjQztnQkFFcEMsT0FBT1k7WUFDVDs7O1dBMUNtQmQifQ==