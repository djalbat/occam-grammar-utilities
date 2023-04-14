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
    edgesFromStartRuleAndRuleMap: function() {
        return edgesFromStartRuleAndRuleMap;
    },
    greatestCycleFromCycles: function() {
        return greatestCycleFromCycles;
    }
});
var _edge = /*#__PURE__*/ _interop_require_default(require("../edge"));
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
function edgesFromStartRuleAndRuleMap(startRule, ruleMap) {
    var rule = startRule, edges = [], vertexes = [];
    edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap);
    return edges;
}
function greatestCycleFromCycles(cycles) {
    var greatestCycle = cycles.reduce(function(greatestCycle, cycle) {
        if (greatestCycle === null) {
            greatestCycle = cycle; ///
        } else {
            var cycleLength = cycle.length, greatestCycleLength = greatestCycle.length;
            if (cycleLength > greatestCycleLength) {
                greatestCycle = cycle; ///
            }
        }
        return greatestCycle;
    }, null);
    return greatestCycle;
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
            var leftRecursiveRuleName = recursiveRuleName, sourceVertex = ruleName, targetVertex = leftRecursiveRuleName, edge = _edge.default.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);
            edges.push(edge);
        }
        var recursiveRule = ruleMap[recursiveRuleName] || null;
        if (recursiveRule !== null) {
            var _$rule = recursiveRule; ///
            edgesFromRuleAndRuleMap(_$rule, edges, vertexes, ruleMap);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSB9IGZyb20gXCIuL3J1bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGUgPSBzdGFydFJ1bGUsIC8vL1xuICAgICAgICBlZGdlcyA9IFtdLFxuICAgICAgICB2ZXJ0ZXhlcyA9IFtdO1xuXG4gIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlYXRlc3RDeWNsZUZyb21DeWNsZXMoY3ljbGVzKSB7XG4gIGNvbnN0IGdyZWF0ZXN0Q3ljbGUgPSBjeWNsZXMucmVkdWNlKChncmVhdGVzdEN5Y2xlLCBjeWNsZSkgPT4ge1xuICAgIGlmIChncmVhdGVzdEN5Y2xlID09PSBudWxsKSB7XG4gICAgICBncmVhdGVzdEN5Y2xlID0gY3ljbGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3ljbGVMZW5ndGggPSBjeWNsZS5sZW5ndGgsXG4gICAgICAgIGdyZWF0ZXN0Q3ljbGVMZW5ndGggPSBncmVhdGVzdEN5Y2xlLmxlbmd0aDtcblxuICAgICAgaWYgKGN5Y2xlTGVuZ3RoID4gZ3JlYXRlc3RDeWNsZUxlbmd0aCkge1xuICAgICAgICBncmVhdGVzdEN5Y2xlID0gY3ljbGU7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ3JlYXRlc3RDeWNsZTtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGdyZWF0ZXN0Q3ljbGU7XG59XG5cbmZ1bmN0aW9uIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICB2ZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICB2ZXJ0ZXhlc0luY2x1ZGVzVmVydGV4ID0gdmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAodmVydGV4ZXNJbmNsdWRlc1ZlcnRleCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZlcnRleGVzID0gW1xuICAgIC4uLnZlcnRleGVzLFxuICAgIHZlcnRleFxuICBdO1xuXG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUpO1xuXG4gIHJlY3Vyc2l2ZVJ1bGVOYW1lcy5mb3JFYWNoKChyZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhyZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW3JlY3Vyc2l2ZVJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZVJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSByZWN1cnNpdmVSdWxlOyAvLy9cblxuICAgICAgZWRnZXNGcm9tUnVsZUFuZFJ1bGVNYXAocnVsZSwgZWRnZXMsIHZlcnRleGVzLCBydWxlTWFwKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImVkZ2VzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJncmVhdGVzdEN5Y2xlRnJvbUN5Y2xlcyIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJydWxlIiwiZWRnZXMiLCJ2ZXJ0ZXhlcyIsImVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwIiwiY3ljbGVzIiwiZ3JlYXRlc3RDeWNsZSIsInJlZHVjZSIsImN5Y2xlIiwiY3ljbGVMZW5ndGgiLCJsZW5ndGgiLCJncmVhdGVzdEN5Y2xlTGVuZ3RoIiwicnVsZU5hbWUiLCJnZXROYW1lIiwidmVydGV4IiwidmVydGV4ZXNJbmNsdWRlc1ZlcnRleCIsImluY2x1ZGVzIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwiZm9yRWFjaCIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJzb3VyY2VWZXJ0ZXgiLCJ0YXJnZXRWZXJ0ZXgiLCJlZGdlIiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJwdXNoIiwicmVjdXJzaXZlUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWdCQSw0QkFBNEI7ZUFBNUJBOztJQVVBQyx1QkFBdUI7ZUFBdkJBOzs7MkRBZEM7b0JBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLFNBQVNELDZCQUE2QkUsU0FBUyxFQUFFQyxPQUFPLEVBQUU7SUFDL0QsSUFBTUMsT0FBT0YsV0FDUEcsUUFBUSxFQUFFLEVBQ1ZDLFdBQVcsRUFBRTtJQUVuQkMsd0JBQXdCSCxNQUFNQyxPQUFPQyxVQUFVSDtJQUUvQyxPQUFPRTtBQUNUO0FBRU8sU0FBU0osd0JBQXdCTyxNQUFNLEVBQUU7SUFDOUMsSUFBTUMsZ0JBQWdCRCxPQUFPRSxNQUFNLENBQUMsU0FBQ0QsZUFBZUUsT0FBVTtRQUM1RCxJQUFJRixrQkFBa0IsSUFBSSxFQUFFO1lBQzFCQSxnQkFBZ0JFLE9BQVEsR0FBRztRQUM3QixPQUFPO1lBQ0wsSUFBTUMsY0FBY0QsTUFBTUUsTUFBTSxFQUM5QkMsc0JBQXNCTCxjQUFjSSxNQUFNO1lBRTVDLElBQUlELGNBQWNFLHFCQUFxQjtnQkFDckNMLGdCQUFnQkUsT0FBUSxHQUFHO1lBQzdCLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBT0Y7SUFDVCxHQUFHLElBQUk7SUFFUCxPQUFPQTtBQUNUO0FBRUEsU0FBU0Ysd0JBQXdCSCxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFSCxPQUFPLEVBQUU7SUFDL0QsSUFBTVksV0FBV1gsS0FBS1ksT0FBTyxJQUN2QkMsU0FBU0YsVUFDVEcseUJBQXlCWixTQUFTYSxRQUFRLENBQUNGO0lBRWpELElBQUlDLHdCQUF3QjtRQUMxQjtJQUNGLENBQUM7SUFFRFosV0FBVyxBQUNULHFCQUFHQSxpQkFETTtRQUVUVztLQUNEO0lBRUQsSUFBTUcscUJBQXFCQyxJQUFBQSxnQ0FBMEIsRUFBQ2pCLE9BQ2hEa0IseUJBQXlCQyxJQUFBQSxvQ0FBOEIsRUFBQ25CO0lBRTlEZ0IsbUJBQW1CSSxPQUFPLENBQUMsU0FBQ0MsbUJBQXNCO1FBQ2hELElBQU1DLGtEQUFrREosdUJBQXVCSCxRQUFRLENBQUNNO1FBRXhGLElBQUlDLGlEQUFpRDtZQUNuRCxJQUFNQyx3QkFBd0JGLG1CQUN4QkcsZUFBZWIsVUFDZmMsZUFBZUYsdUJBQ2ZHLE9BQU9DLGFBQUksQ0FBQ0MsK0JBQStCLENBQUNKLGNBQWNDO1lBRWhFeEIsTUFBTTRCLElBQUksQ0FBQ0g7UUFDYixDQUFDO1FBRUQsSUFBTUksZ0JBQWdCL0IsT0FBTyxDQUFDc0Isa0JBQWtCLElBQUksSUFBSTtRQUV4RCxJQUFJUyxrQkFBa0IsSUFBSSxFQUFFO1lBQzFCLElBQU05QixTQUFPOEIsZUFBZSxHQUFHO1lBRS9CM0Isd0JBQXdCSCxRQUFNQyxPQUFPQyxVQUFVSDtRQUNqRCxDQUFDO0lBQ0g7QUFDRiJ9