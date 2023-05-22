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
var Edge = /*#__PURE__*/ function() {
    function Edge(label, sourceVertex, targetVertex) {
        _class_call_check(this, Edge);
        this.label = label;
        this.sourceVertex = sourceVertex;
        this.targetVertex = targetVertex;
    }
    _create_class(Edge, [
        {
            key: "getLabel",
            value: function getLabel() {
                return this.label;
            }
        },
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
            value: function match(edge) {
                var label = this.getLabel(), sourceVertex = edge.getSourceVertex(), targetVertex = edge.getTargetVertex(), matches = this.matchLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex);
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
        },
        {
            key: "matchSourceVertexAndTargetVertex",
            value: function matchSourceVertexAndTargetVertex(sourceVertex, targetVertex) {
                var matches = this.sourceVertex === sourceVertex && this.targetVertex === targetVertex;
                return matches;
            }
        },
        {
            key: "matchLabelSourceVertexAndTargetVertex",
            value: function matchLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex) {
                var matches = this.label === label && this.sourceVertex === sourceVertex && this.targetVertex === targetVertex;
                return matches;
            }
        }
    ], [
        {
            key: "fromLabelSourceVertexAndTargetVertex",
            value: function fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex) {
                var edge = new Edge(label, sourceVertex, targetVertex);
                return edge;
            }
        }
    ]);
    return Edge;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lZGdlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IobGFiZWwsc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5zb3VyY2VWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXg7XG4gICAgdGhpcy50YXJnZXRWZXJ0ZXggPSB0YXJnZXRWZXJ0ZXg7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFNvdXJjZVZlcnRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VWZXJ0ZXg7XG4gIH1cblxuICBnZXRUYXJnZXRWZXJ0ZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4O1xuICB9XG5cbiAgaXNUcml2aWFsbHlDeWNsaWMoKSB7XG4gICAgY29uc3QgdHJpdmlhbGx5Q3ljbGljID0gKHRoaXMuc291cmNlVmVydGV4ID09PSB0aGlzLnRhcmdldFZlcnRleCk7XG5cbiAgICByZXR1cm4gdHJpdmlhbGx5Q3ljbGljO1xuICB9XG5cbiAgbWF0Y2goZWRnZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRMYWJlbCgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IGVkZ2UuZ2V0U291cmNlVmVydGV4KCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXgoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5tYXRjaExhYmVsU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KGxhYmVsLCBzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IG1hdGNoZXNTb3VyY2VWZXJ0ZXggPSAodGhpcy5zb3VyY2VWZXJ0ZXggPT09IHNvdXJjZVZlcnRleCk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1NvdXJjZVZlcnRleDtcbiAgfVxuXG4gIG1hdGNoVGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IG1hdGNoZXNUYXJnZXRWZXJ0ZXggPSAodGhpcy50YXJnZXRWZXJ0ZXggPT09IHRhcmdldFZlcnRleCk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1RhcmdldFZlcnRleDtcbiAgfVxuXG4gIG1hdGNoU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICgodGhpcy5zb3VyY2VWZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkgJiYgKHRoaXMudGFyZ2V0VmVydGV4ID09PSB0YXJnZXRWZXJ0ZXgpKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hMYWJlbFNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChsYWJlbCwgc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLmxhYmVsID09PSBsYWJlbCkgJiYgKHRoaXMuc291cmNlVmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpICYmICh0aGlzLnRhcmdldFZlcnRleCA9PT0gdGFyZ2V0VmVydGV4KSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgobGFiZWwsIHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKGxhYmVsLCBzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJFZGdlIiwibGFiZWwiLCJzb3VyY2VWZXJ0ZXgiLCJ0YXJnZXRWZXJ0ZXgiLCJnZXRMYWJlbCIsImdldFNvdXJjZVZlcnRleCIsImdldFRhcmdldFZlcnRleCIsImlzVHJpdmlhbGx5Q3ljbGljIiwidHJpdmlhbGx5Q3ljbGljIiwibWF0Y2giLCJlZGdlIiwibWF0Y2hlcyIsIm1hdGNoTGFiZWxTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJtYXRjaFNvdXJjZVZlcnRleCIsIm1hdGNoZXNTb3VyY2VWZXJ0ZXgiLCJtYXRjaFRhcmdldFZlcnRleCIsIm1hdGNoZXNUYXJnZXRWZXJ0ZXgiLCJtYXRjaFNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsImZyb21MYWJlbFNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxxQkFBTjthQUFNQSxLQUNQQyxLQUFLLEVBQUNDLFlBQVksRUFBRUMsWUFBWTtnQ0FEekJIO1FBRWpCLElBQUksQ0FBQ0MsUUFBUUE7UUFDYixJQUFJLENBQUNDLGVBQWVBO1FBQ3BCLElBQUksQ0FBQ0MsZUFBZUE7O2tCQUpISDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0g7WUFDZDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0g7WUFDZDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0g7WUFDZDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBbUIsSUFBSSxDQUFDTixpQkFBaUIsSUFBSSxDQUFDQztnQkFFcEQsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxJQUFJO2dCQUNSLElBQU1ULFFBQVEsSUFBSSxDQUFDRyxZQUNiRixlQUFlUSxLQUFLTCxtQkFDcEJGLGVBQWVPLEtBQUtKLG1CQUNwQkssVUFBVSxJQUFJLENBQUNDLHNDQUFzQ1gsT0FBT0MsY0FBY0M7Z0JBRWhGLE9BQU9RO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCWCxZQUFZO2dCQUM1QixJQUFNWSxzQkFBdUIsSUFBSSxDQUFDWixpQkFBaUJBO2dCQUVuRCxPQUFPWTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlosWUFBWTtnQkFDNUIsSUFBTWEsc0JBQXVCLElBQUksQ0FBQ2IsaUJBQWlCQTtnQkFFbkQsT0FBT2E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQ0FBaUNmLFlBQVksRUFBRUMsWUFBWTtnQkFDekQsSUFBTVEsVUFBVyxBQUFDLElBQUksQ0FBQ1QsaUJBQWlCQSxnQkFBa0IsSUFBSSxDQUFDQyxpQkFBaUJBO2dCQUVoRixPQUFPUTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHNDQUFzQ1gsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFlBQVk7Z0JBQ3JFLElBQU1RLFVBQVcsQUFBQyxJQUFJLENBQUNWLFVBQVVBLFNBQVcsSUFBSSxDQUFDQyxpQkFBaUJBLGdCQUFrQixJQUFJLENBQUNDLGlCQUFpQkE7Z0JBRTFHLE9BQU9RO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDakIsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFlBQVk7Z0JBQzNFLElBQU1PLE9BQU8sSUEzRElWLEtBMkRLQyxPQUFPQyxjQUFjQztnQkFFM0MsT0FBT087WUFDVDs7O1dBOURtQlYifQ==