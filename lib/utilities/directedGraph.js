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
    get edgeFromRuleNameAndLeftRecursiveRuleName () {
        return edgeFromRuleNameAndLeftRecursiveRuleName;
    },
    get edgesFromRuleNames () {
        return edgesFromRuleNames;
    },
    get edgesFromStartRuleAndRuleMap () {
        return edgesFromStartRuleAndRuleMap;
    }
});
var _edge = /*#__PURE__*/ _interop_require_default(require("../edge"));
var _directedGraph = require("../directedGraph");
var _recursive = require("../utilities/recursive");
var _leftRecursive = require("../utilities/leftRecursive");
var _labels = require("../labels");
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
    var recursiveRuleNames = (0, _recursive.recursiveRuleNamesFromRule)(rule), leftRecursiveRuleNames = (0, _leftRecursive.leftRecursiveRuleNamesFromRule)(rule, ruleMap);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgZWRnZXNNYXRjaEVkZ2UgfSBmcm9tIFwiLi4vZGlyZWN0ZWRHcmFwaFwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlY3Vyc2l2ZVwiO1xuaW1wb3J0IHsgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9sZWZ0UmVjdXJzaXZlXCI7XG5pbXBvcnQgeyBSRUNVUlNJVkVfTEFCRUwsIExFRlRfUkVDVVJTSVZFX0xBQkVMIH0gZnJvbSBcIi4uL2xhYmVsc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNGcm9tUnVsZU5hbWVzKHJ1bGVOYW1lcykge1xuICBjb25zdCBsZW5ndGggPSBydWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICBlZGdlcyA9IHJ1bGVOYW1lcy5tYXAoKHJ1bGVOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IChpbmRleCArIDEpICUgbGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5leHRSdWxlTmFtZSA9IHJ1bGVOYW1lc1tuZXh0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IG5leHRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgZWRnZSA9IGVkZ2VGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gZWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZSA9IHN0YXJ0UnVsZSwgLy8vXG4gICAgICAgIGVkZ2VzID0gW10sXG4gICAgICAgIHZlcnRleGVzID0gW107XG5cbiAgZWRnZXNGcm9tUnVsZUFuZFJ1bGVNYXAocnVsZSwgZWRnZXMsIHZlcnRleGVzLCBydWxlTWFwKTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgbGFiZWwgPSBMRUZUX1JFQ1VSU0lWRV9MQUJFTCxcbiAgICAgICAgc291cmNlVmVydGV4ID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgdGFyZ2V0VmVydGV4ID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbUxhYmVsU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KGxhYmVsLCBzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG5cbiAgcmV0dXJuIGVkZ2U7XG59XG5cbmZ1bmN0aW9uIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICB2ZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICB2ZXJ0ZXhlc0luY2x1ZGVzVmVydGV4ID0gdmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAodmVydGV4ZXNJbmNsdWRlc1ZlcnRleCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZlcnRleGVzID0gW1xuICAgIC4uLnZlcnRleGVzLFxuICAgIHZlcnRleFxuICBdO1xuXG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIHJ1bGVNYXApO1xuXG4gIHJlY3Vyc2l2ZVJ1bGVOYW1lcy5mb3JFYWNoKChyZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhyZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBsYWJlbCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID9cbiAgICAgICAgICAgICAgICAgICAgTEVGVF9SRUNVUlNJVkVfTEFCRUwgOlxuICAgICAgICAgICAgICAgICAgICAgIFJFQ1VSU0lWRV9MQUJFTCxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHRhcmdldFZlcnRleCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbUxhYmVsU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KGxhYmVsLCBzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCksXG4gICAgICAgICAgbWF0Y2hlcyA9IGVkZ2VzTWF0Y2hFZGdlKGVkZ2VzLCBlZGdlKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlID0gcnVsZU1hcFtyZWN1cnNpdmVSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChyZWN1cnNpdmVSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlID0gcmVjdXJzaXZlUnVsZTsgLy8vXG5cbiAgICAgIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCk7XG4gICAgfVxuICB9KTtcbn1cblxuIl0sIm5hbWVzIjpbImVkZ2VGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJlZGdlc0Zyb21SdWxlTmFtZXMiLCJlZGdlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIiwicnVsZU5hbWVzIiwibGVuZ3RoIiwiZWRnZXMiLCJtYXAiLCJydWxlTmFtZSIsImluZGV4IiwibmV4dEluZGV4IiwibmV4dFJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZWRnZSIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJydWxlIiwidmVydGV4ZXMiLCJlZGdlc0Zyb21SdWxlQW5kUnVsZU1hcCIsImxhYmVsIiwiTEVGVF9SRUNVUlNJVkVfTEFCRUwiLCJzb3VyY2VWZXJ0ZXgiLCJ0YXJnZXRWZXJ0ZXgiLCJFZGdlIiwiZnJvbUxhYmVsU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiZ2V0TmFtZSIsInZlcnRleCIsInZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImZvckVhY2giLCJyZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lIiwiUkVDVVJTSVZFX0xBQkVMIiwibWF0Y2hlcyIsImVkZ2VzTWF0Y2hFZGdlIiwicHVzaCIsInJlY3Vyc2l2ZVJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWlDZ0JBO2VBQUFBOztRQXhCQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOzs7MkRBckJDOzZCQUVjO3lCQUNZOzZCQUNJO3NCQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLFNBQVNELG1CQUFtQkUsU0FBUztJQUMxQyxJQUFNQyxTQUFTRCxVQUFVQyxNQUFNLEVBQ3pCQyxRQUFRRixVQUFVRyxHQUFHLENBQUMsU0FBQ0MsVUFBVUM7UUFDL0IsSUFBTUMsWUFBWSxBQUFDRCxDQUFBQSxRQUFRLENBQUEsSUFBS0osUUFDMUJNLGVBQWVQLFNBQVMsQ0FBQ00sVUFBVSxFQUNuQ0Usd0JBQXdCRCxjQUN4QkUsT0FBT1oseUNBQXlDTyxVQUFVSTtRQUVoRSxPQUFPQztJQUNUO0lBRU4sT0FBT1A7QUFDVDtBQUVPLFNBQVNILDZCQUE2QlcsU0FBUyxFQUFFQyxPQUFPO0lBQzdELElBQU1DLE9BQU9GLFdBQ1BSLFFBQVEsRUFBRSxFQUNWVyxXQUFXLEVBQUU7SUFFbkJDLHdCQUF3QkYsTUFBTVYsT0FBT1csVUFBVUY7SUFFL0MsT0FBT1Q7QUFDVDtBQUVPLFNBQVNMLHlDQUF5Q08sUUFBUSxFQUFFSSxxQkFBcUI7SUFDdEYsSUFBTU8sUUFBUUMsNEJBQW9CLEVBQzVCQyxlQUFlYixVQUNmYyxlQUFlVix1QkFDZkMsT0FBT1UsYUFBSSxDQUFDQyxvQ0FBb0MsQ0FBQ0wsT0FBT0UsY0FBY0M7SUFFNUUsT0FBT1Q7QUFDVDtBQUVBLFNBQVNLLHdCQUF3QkYsSUFBSSxFQUFFVixLQUFLLEVBQUVXLFFBQVEsRUFBRUYsT0FBTztJQUM3RCxJQUFNUCxXQUFXUSxLQUFLUyxPQUFPLElBQ3ZCQyxTQUFTbEIsVUFDVG1CLHlCQUF5QlYsU0FBU1csUUFBUSxDQUFDRjtJQUVqRCxJQUFJQyx3QkFBd0I7UUFDMUI7SUFDRjtJQUVBVixXQUFXLEFBQ1QscUJBQUdBLGlCQURNO1FBRVRTO0tBQ0Q7SUFFRCxJQUFNRyxxQkFBcUJDLElBQUFBLHFDQUEwQixFQUFDZCxPQUNoRGUseUJBQXlCQyxJQUFBQSw2Q0FBOEIsRUFBQ2hCLE1BQU1EO0lBRXBFYyxtQkFBbUJJLE9BQU8sQ0FBQyxTQUFDQztRQUMxQixJQUFNQyxrREFBa0RKLHVCQUF1QkgsUUFBUSxDQUFDTSxvQkFDbEZ0Qix3QkFBd0JzQixtQkFDeEJmLFFBQVFnQixrREFDRWYsNEJBQW9CLEdBQ2xCZ0IsdUJBQWUsRUFDM0JmLGVBQWViLFVBQ2ZjLGVBQWVWLHVCQUNmQyxPQUFPVSxhQUFJLENBQUNDLG9DQUFvQyxDQUFDTCxPQUFPRSxjQUFjQyxlQUN0RWUsVUFBVUMsSUFBQUEsNkJBQWMsRUFBQ2hDLE9BQU9PO1FBRXRDLElBQUksQ0FBQ3dCLFNBQVM7WUFDWi9CLE1BQU1pQyxJQUFJLENBQUMxQjtRQUNiO1FBRUEsSUFBTTJCLGdCQUFnQnpCLE9BQU8sQ0FBQ21CLGtCQUFrQixJQUFJO1FBRXBELElBQUlNLGtCQUFrQixNQUFNO1lBQzFCLElBQU14QixTQUFPd0IsZUFBZSxHQUFHO1lBRS9CdEIsd0JBQXdCRixRQUFNVixPQUFPVyxVQUFVRjtRQUNqRDtJQUNGO0FBQ0YifQ==