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
    edgesFromRuleNames: function() {
        return edgesFromRuleNames;
    },
    edgesFromStartRuleAndRuleMap: function() {
        return edgesFromStartRuleAndRuleMap;
    },
    edgeFromRuleNameAndLeftRecursiveRuleName: function() {
        return edgeFromRuleNameAndLeftRecursiveRuleName;
    }
});
var _edge = /*#__PURE__*/ _interop_require_default(require("../edge"));
var _directedGraph = require("../directedGraph");
var _rule = require("./rule");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function edgesFromRuleNames(ruleNames) {
    var length = ruleNames.length, edges = ruleNames.map(function(ruleName, index) {
        var sourceVertex = ruleName, nextIndex = (index + 1) % length, nextRuleName = ruleNames[nextIndex], leftRecursiveRuleName = nextRuleName, edge = edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);
        return edge;
    });
    return edges;
}
function edgesFromStartRuleAndRuleMap(startRule, ruleMap) {
    var rule = startRule, edges = [], vertexes = [];
    edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap);
    return edges;
}
function edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
    var sourceVertex = ruleName, targetVertex = leftRecursiveRuleName, edge = _edge.default.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);
    return edge;
}
function edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap) {
    var ruleName = rule.getName(), vertex = ruleName, vertexesIncludesVertex = vertexes.includes(vertex);
    if (vertexesIncludesVertex) {
        return;
    }
    vertexes = _to_consumable_array(vertexes).concat([
        vertex
    ]);
    var recursiveRuleNames = (0, _rule.recursiveRuleNamesFromRule)(rule), leftRecursiveRuleNames = (0, _rule.leftRecursiveRuleNamesFromRule)(rule);
    recursiveRuleNames.forEach(function(recursiveRuleName) {
        var leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName);
        if (leftRecursiveRuleNamesIncludesRecursiveRuleName) {
            var leftRecursiveRuleName = recursiveRuleName, sourceVertex = ruleName, targetVertex = leftRecursiveRuleName, edge = _edge.default.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex), matches = (0, _directedGraph.edgesMatchEdge)(edges, edge);
            if (!matches) {
                edges.push(edge);
            }
        }
        var recursiveRule = ruleMap[recursiveRuleName] || null;
        if (recursiveRule !== null) {
            var _$rule = recursiveRule; ///
            edgesFromRuleAndRuleMap(_$rule, edges, vertexes, ruleMap);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgZWRnZXNNYXRjaEVkZ2UgfSBmcm9tIFwiLi4vZGlyZWN0ZWRHcmFwaFwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSB9IGZyb20gXCIuL3J1bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzRnJvbVJ1bGVOYW1lcyhydWxlTmFtZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gcnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZWRnZXMgPSBydWxlTmFtZXMubWFwKChydWxlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IChpbmRleCArIDEpICUgbGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5leHRSdWxlTmFtZSA9IHJ1bGVOYW1lc1tuZXh0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IG5leHRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgZWRnZSA9IGVkZ2VGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gZWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZSA9IHN0YXJ0UnVsZSwgLy8vXG4gICAgICAgIGVkZ2VzID0gW10sXG4gICAgICAgIHZlcnRleGVzID0gW107XG5cbiAgZWRnZXNGcm9tUnVsZUFuZFJ1bGVNYXAocnVsZSwgZWRnZXMsIHZlcnRleGVzLCBydWxlTWFwKTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3Qgc291cmNlVmVydGV4ID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgdGFyZ2V0VmVydGV4ID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG5cbiAgcmV0dXJuIGVkZ2U7XG59XG5cbmZ1bmN0aW9uIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICB2ZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICB2ZXJ0ZXhlc0luY2x1ZGVzVmVydGV4ID0gdmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAodmVydGV4ZXNJbmNsdWRlc1ZlcnRleCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZlcnRleGVzID0gW1xuICAgIC4uLnZlcnRleGVzLFxuICAgIHZlcnRleFxuICBdO1xuXG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUpO1xuXG4gIHJlY3Vyc2l2ZVJ1bGVOYW1lcy5mb3JFYWNoKChyZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhyZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IGVkZ2VzTWF0Y2hFZGdlKGVkZ2VzLCBlZGdlKTtcblxuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZSA9IHJ1bGVNYXBbcmVjdXJzaXZlUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAocmVjdXJzaXZlUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZSA9IHJlY3Vyc2l2ZVJ1bGU7IC8vL1xuXG4gICAgICBlZGdlc0Zyb21SdWxlQW5kUnVsZU1hcChydWxlLCBlZGdlcywgdmVydGV4ZXMsIHJ1bGVNYXApO1xuICAgIH1cbiAgfSk7XG59XG5cbiJdLCJuYW1lcyI6WyJlZGdlc0Zyb21SdWxlTmFtZXMiLCJlZGdlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIiwiZWRnZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lcyIsImxlbmd0aCIsImVkZ2VzIiwibWFwIiwicnVsZU5hbWUiLCJpbmRleCIsInNvdXJjZVZlcnRleCIsIm5leHRJbmRleCIsIm5leHRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImVkZ2UiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicnVsZSIsInZlcnRleGVzIiwiZWRnZXNGcm9tUnVsZUFuZFJ1bGVNYXAiLCJ0YXJnZXRWZXJ0ZXgiLCJFZGdlIiwiZnJvbVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsImdldE5hbWUiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhlc0luY2x1ZGVzVmVydGV4IiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJmb3JFYWNoIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSIsIm1hdGNoZXMiLCJlZGdlc01hdGNoRWRnZSIsInB1c2giLCJyZWN1cnNpdmVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFPZ0JBLGtCQUFrQjtlQUFsQkE7O0lBZUFDLDRCQUE0QjtlQUE1QkE7O0lBVUFDLHdDQUF3QztlQUF4Q0E7OzsyREE5QkM7NkJBRWM7b0JBQzRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLFNBQVNGLG1CQUFtQkcsU0FBUyxFQUFFO0lBQzVDLElBQU1DLFNBQVNELFVBQVVDLE1BQU0sRUFDekJDLFFBQVFGLFVBQVVHLEdBQUcsQ0FBQyxTQUFDQyxVQUFVQyxPQUFVO1FBQ3pDLElBQU1DLGVBQWVGLFVBQ2ZHLFlBQVksQUFBQ0YsQ0FBQUEsUUFBUSxDQUFBLElBQUtKLFFBQzFCTyxlQUFlUixTQUFTLENBQUNPLFVBQVUsRUFDbkNFLHdCQUF3QkQsY0FDeEJFLE9BQU9YLHlDQUF5Q0ssVUFBVUs7UUFFaEUsT0FBT0M7SUFDVDtJQUVOLE9BQU9SO0FBQ1Q7QUFFTyxTQUFTSiw2QkFBNkJhLFNBQVMsRUFBRUMsT0FBTyxFQUFFO0lBQy9ELElBQU1DLE9BQU9GLFdBQ1BULFFBQVEsRUFBRSxFQUNWWSxXQUFXLEVBQUU7SUFFbkJDLHdCQUF3QkYsTUFBTVgsT0FBT1ksVUFBVUY7SUFFL0MsT0FBT1Y7QUFDVDtBQUVPLFNBQVNILHlDQUF5Q0ssUUFBUSxFQUFFSyxxQkFBcUIsRUFBRTtJQUN4RixJQUFNSCxlQUFlRixVQUNmWSxlQUFlUCx1QkFDZkMsT0FBT08sYUFBSSxDQUFDQywrQkFBK0IsQ0FBQ1osY0FBY1U7SUFFaEUsT0FBT047QUFDVDtBQUVBLFNBQVNLLHdCQUF3QkYsSUFBSSxFQUFFWCxLQUFLLEVBQUVZLFFBQVEsRUFBRUYsT0FBTyxFQUFFO0lBQy9ELElBQU1SLFdBQVdTLEtBQUtNLE9BQU8sSUFDdkJDLFNBQVNoQixVQUNUaUIseUJBQXlCUCxTQUFTUSxRQUFRLENBQUNGO0lBRWpELElBQUlDLHdCQUF3QjtRQUMxQjtJQUNGLENBQUM7SUFFRFAsV0FBVyxBQUNULHFCQUFHQSxpQkFETTtRQUVUTTtLQUNEO0lBRUQsSUFBTUcscUJBQXFCQyxJQUFBQSxnQ0FBMEIsRUFBQ1gsT0FDaERZLHlCQUF5QkMsSUFBQUEsb0NBQThCLEVBQUNiO0lBRTlEVSxtQkFBbUJJLE9BQU8sQ0FBQyxTQUFDQyxtQkFBc0I7UUFDaEQsSUFBTUMsa0RBQWtESix1QkFBdUJILFFBQVEsQ0FBQ007UUFFeEYsSUFBSUMsaURBQWlEO1lBQ25ELElBQU1wQix3QkFBd0JtQixtQkFDeEJ0QixlQUFlRixVQUNmWSxlQUFlUCx1QkFDZkMsT0FBT08sYUFBSSxDQUFDQywrQkFBK0IsQ0FBQ1osY0FBY1UsZUFDMURjLFVBQVVDLElBQUFBLDZCQUFjLEVBQUM3QixPQUFPUTtZQUV0QyxJQUFJLENBQUNvQixTQUFTO2dCQUNaNUIsTUFBTThCLElBQUksQ0FBQ3RCO1lBQ2IsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFNdUIsZ0JBQWdCckIsT0FBTyxDQUFDZ0Isa0JBQWtCLElBQUksSUFBSTtRQUV4RCxJQUFJSyxrQkFBa0IsSUFBSSxFQUFFO1lBQzFCLElBQU1wQixTQUFPb0IsZUFBZSxHQUFHO1lBRS9CbEIsd0JBQXdCRixRQUFNWCxPQUFPWSxVQUFVRjtRQUNqRCxDQUFDO0lBQ0g7QUFDRiJ9