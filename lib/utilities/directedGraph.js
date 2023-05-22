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
var _labels = require("../labels");
var _rule = require("../utilities/rule");
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
        var nextIndex = (index + 1) % length, nextRuleName = ruleNames[nextIndex], leftRecursiveRuleName = nextRuleName, edge = edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);
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
    var label = _labels.LEFT_RECURSIVE_LABEL, sourceVertex = ruleName, targetVertex = leftRecursiveRuleName, edge = _edge.default.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex);
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
        var leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName), leftRecursiveRuleName = recursiveRuleName, label = leftRecursiveRuleNamesIncludesRecursiveRuleName ? _labels.LEFT_RECURSIVE_LABEL : _labels.RECURSIVE_LABEL, sourceVertex = ruleName, targetVertex = leftRecursiveRuleName, edge = _edge.default.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex), matches = (0, _directedGraph.edgesMatchEdge)(edges, edge);
        if (!matches) {
            edges.push(edge);
        }
        var recursiveRule = ruleMap[recursiveRuleName] || null;
        if (recursiveRule !== null) {
            var _$rule = recursiveRule; ///
            edgesFromRuleAndRuleMap(_$rule, edges, vertexes, ruleMap);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgZWRnZXNNYXRjaEVkZ2UgfSBmcm9tIFwiLi4vZGlyZWN0ZWRHcmFwaFwiO1xuaW1wb3J0IHsgUkVDVVJTSVZFX0xBQkVMLCBMRUZUX1JFQ1VSU0lWRV9MQUJFTCB9IGZyb20gXCIuLi9sYWJlbHNcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzRnJvbVJ1bGVOYW1lcyhydWxlTmFtZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gcnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZWRnZXMgPSBydWxlTmFtZXMubWFwKChydWxlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSAoaW5kZXggKyAxKSAlIGxlbmd0aCxcbiAgICAgICAgICAgICAgICBuZXh0UnVsZU5hbWUgPSBydWxlTmFtZXNbbmV4dEluZGV4XSxcbiAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBuZXh0UnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIGVkZ2UgPSBlZGdlRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGUgPSBzdGFydFJ1bGUsIC8vL1xuICAgICAgICBlZGdlcyA9IFtdLFxuICAgICAgICB2ZXJ0ZXhlcyA9IFtdO1xuXG4gIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRnZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IGxhYmVsID0gTEVGVF9SRUNVUlNJVkVfTEFCRUwsXG4gICAgICAgIHNvdXJjZVZlcnRleCA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgIHRhcmdldFZlcnRleCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgIGVkZ2UgPSBFZGdlLmZyb21MYWJlbFNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChsYWJlbCwgc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gIHJldHVybiBlZGdlO1xufVxuXG5mdW5jdGlvbiBlZGdlc0Zyb21SdWxlQW5kUnVsZU1hcChydWxlLCBlZGdlcywgdmVydGV4ZXMsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgdmVydGV4ID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgdmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgaWYgKHZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2ZXJ0ZXhlcyA9IFtcbiAgICAuLi52ZXJ0ZXhlcyxcbiAgICB2ZXJ0ZXhcbiAgXTtcblxuICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlKTtcblxuICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgbGFiZWwgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSA/XG4gICAgICAgICAgICAgICAgICAgIExFRlRfUkVDVVJTSVZFX0xBQkVMIDpcbiAgICAgICAgICAgICAgICAgICAgICBSRUNVUlNJVkVfTEFCRUwsXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGVkZ2UgPSBFZGdlLmZyb21MYWJlbFNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChsYWJlbCwgc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpLFxuICAgICAgICAgIG1hdGNoZXMgPSBlZGdlc01hdGNoRWRnZShlZGdlcywgZWRnZSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZSA9IHJ1bGVNYXBbcmVjdXJzaXZlUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAocmVjdXJzaXZlUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZSA9IHJlY3Vyc2l2ZVJ1bGU7IC8vL1xuXG4gICAgICBlZGdlc0Zyb21SdWxlQW5kUnVsZU1hcChydWxlLCBlZGdlcywgdmVydGV4ZXMsIHJ1bGVNYXApO1xuICAgIH1cbiAgfSk7XG59XG5cbiJdLCJuYW1lcyI6WyJlZGdlc0Zyb21SdWxlTmFtZXMiLCJlZGdlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIiwiZWRnZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lcyIsImxlbmd0aCIsImVkZ2VzIiwibWFwIiwicnVsZU5hbWUiLCJpbmRleCIsIm5leHRJbmRleCIsIm5leHRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImVkZ2UiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicnVsZSIsInZlcnRleGVzIiwiZWRnZXNGcm9tUnVsZUFuZFJ1bGVNYXAiLCJsYWJlbCIsIkxFRlRfUkVDVVJTSVZFX0xBQkVMIiwic291cmNlVmVydGV4IiwidGFyZ2V0VmVydGV4IiwiRWRnZSIsImZyb21MYWJlbFNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsImdldE5hbWUiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhlc0luY2x1ZGVzVmVydGV4IiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJmb3JFYWNoIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSIsIlJFQ1VSU0lWRV9MQUJFTCIsIm1hdGNoZXMiLCJlZGdlc01hdGNoRWRnZSIsInB1c2giLCJyZWN1cnNpdmVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0JBLGtCQUFrQjtlQUFsQkE7O0lBY0FDLDRCQUE0QjtlQUE1QkE7O0lBVUFDLHdDQUF3QztlQUF4Q0E7OzsyREE5QkM7NkJBRWM7c0JBQ3VCO29CQUNxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxTQUFTRixtQkFBbUJHLFNBQVM7SUFDMUMsSUFBTUMsU0FBU0QsVUFBVUMsUUFDbkJDLFFBQVFGLFVBQVVHLElBQUksU0FBQ0MsVUFBVUM7UUFDL0IsSUFBTUMsWUFBWSxBQUFDRCxDQUFBQSxRQUFRLENBQUEsSUFBS0osUUFDMUJNLGVBQWVQLFNBQVMsQ0FBQ00sVUFBVSxFQUNuQ0Usd0JBQXdCRCxjQUN4QkUsT0FBT1YseUNBQXlDSyxVQUFVSTtRQUVoRSxPQUFPQztJQUNUO0lBRU4sT0FBT1A7QUFDVDtBQUVPLFNBQVNKLDZCQUE2QlksU0FBUyxFQUFFQyxPQUFPO0lBQzdELElBQU1DLE9BQU9GLFdBQ1BSLFFBQVEsRUFBRSxFQUNWVyxXQUFXLEVBQUU7SUFFbkJDLHdCQUF3QkYsTUFBTVYsT0FBT1csVUFBVUY7SUFFL0MsT0FBT1Q7QUFDVDtBQUVPLFNBQVNILHlDQUF5Q0ssUUFBUSxFQUFFSSxxQkFBcUI7SUFDdEYsSUFBTU8sUUFBUUMsOEJBQ1JDLGVBQWViLFVBQ2ZjLGVBQWVWLHVCQUNmQyxPQUFPVSxjQUFLQyxxQ0FBcUNMLE9BQU9FLGNBQWNDO0lBRTVFLE9BQU9UO0FBQ1Q7QUFFQSxTQUFTSyx3QkFBd0JGLElBQUksRUFBRVYsS0FBSyxFQUFFVyxRQUFRLEVBQUVGLE9BQU87SUFDN0QsSUFBTVAsV0FBV1EsS0FBS1MsV0FDaEJDLFNBQVNsQixVQUNUbUIseUJBQXlCVixTQUFTVyxTQUFTRjtJQUVqRCxJQUFJQyx3QkFBd0I7UUFDMUI7SUFDRjtJQUVBVixXQUFXLEFBQ1QscUJBQUdBLGlCQURNO1FBRVRTO0tBQ0Q7SUFFRCxJQUFNRyxxQkFBcUJDLElBQUFBLGtDQUEyQmQsT0FDaERlLHlCQUF5QkMsSUFBQUEsc0NBQStCaEI7SUFFOURhLG1CQUFtQkksUUFBUSxTQUFDQztRQUMxQixJQUFNQyxrREFBa0RKLHVCQUF1QkgsU0FBU00sb0JBQ2xGdEIsd0JBQXdCc0IsbUJBQ3hCZixRQUFRZ0Isa0RBQ0VmLCtCQUNFZ0IseUJBQ1pmLGVBQWViLFVBQ2ZjLGVBQWVWLHVCQUNmQyxPQUFPVSxjQUFLQyxxQ0FBcUNMLE9BQU9FLGNBQWNDLGVBQ3RFZSxVQUFVQyxJQUFBQSwrQkFBZWhDLE9BQU9PO1FBRXRDLElBQUksQ0FBQ3dCLFNBQVM7WUFDWi9CLE1BQU1pQyxLQUFLMUI7UUFDYjtRQUVBLElBQU0yQixnQkFBZ0J6QixPQUFPLENBQUNtQixrQkFBa0IsSUFBSTtRQUVwRCxJQUFJTSxrQkFBa0IsTUFBTTtZQUMxQixJQUFNeEIsU0FBT3dCLGVBQWUsR0FBRztZQUUvQnRCLHdCQUF3QkYsUUFBTVYsT0FBT1csVUFBVUY7UUFDakQ7SUFDRjtBQUNGIn0=