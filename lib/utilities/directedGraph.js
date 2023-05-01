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
    },
    ruleNamesFromCycles: function() {
        return ruleNamesFromCycles;
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
function ruleNamesFromCycles(cycles) {
    var ruleNames = [];
    cycles.forEach(function(cycle) {
        var cyclicRuleNames = cycle; ///
        cyclicRuleNames.forEach(function(cyclicRuleName) {
            var ruleNamesIncludesCyclicRuleName = ruleNames.includes(cyclicRuleName);
            if (!ruleNamesIncludesCyclicRuleName) {
                var ruleName = cyclicRuleName; ///
                ruleNames.push(ruleName);
            }
        });
    });
    return ruleNames;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSB9IGZyb20gXCIuL3J1bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGUgPSBzdGFydFJ1bGUsIC8vL1xuICAgICAgICBlZGdlcyA9IFtdLFxuICAgICAgICB2ZXJ0ZXhlcyA9IFtdO1xuXG4gIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlYXRlc3RDeWNsZUZyb21DeWNsZXMoY3ljbGVzKSB7XG4gIGNvbnN0IGdyZWF0ZXN0Q3ljbGUgPSBjeWNsZXMucmVkdWNlKChncmVhdGVzdEN5Y2xlLCBjeWNsZSkgPT4ge1xuICAgIGlmIChncmVhdGVzdEN5Y2xlID09PSBudWxsKSB7XG4gICAgICBncmVhdGVzdEN5Y2xlID0gY3ljbGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3ljbGVMZW5ndGggPSBjeWNsZS5sZW5ndGgsXG4gICAgICAgIGdyZWF0ZXN0Q3ljbGVMZW5ndGggPSBncmVhdGVzdEN5Y2xlLmxlbmd0aDtcblxuICAgICAgaWYgKGN5Y2xlTGVuZ3RoID4gZ3JlYXRlc3RDeWNsZUxlbmd0aCkge1xuICAgICAgICBncmVhdGVzdEN5Y2xlID0gY3ljbGU7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ3JlYXRlc3RDeWNsZTtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGdyZWF0ZXN0Q3ljbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZXNGcm9tQ3ljbGVzKGN5Y2xlcykge1xuICBjb25zdCBydWxlTmFtZXMgPSBbXTtcblxuICBjeWNsZXMuZm9yRWFjaCgoY3ljbGUpID0+IHtcbiAgICBjb25zdCBjeWNsaWNSdWxlTmFtZXMgPSBjeWNsZTsgIC8vL1xuXG4gICAgY3ljbGljUnVsZU5hbWVzLmZvckVhY2goKGN5Y2xpY1J1bGVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBydWxlTmFtZXNJbmNsdWRlc0N5Y2xpY1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKGN5Y2xpY1J1bGVOYW1lKTtcblxuICAgICAgaWYgKCFydWxlTmFtZXNJbmNsdWRlc0N5Y2xpY1J1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gY3ljbGljUnVsZU5hbWU7ICAvLy9cblxuICAgICAgICBydWxlTmFtZXMucHVzaChydWxlTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICB2ZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICB2ZXJ0ZXhlc0luY2x1ZGVzVmVydGV4ID0gdmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAodmVydGV4ZXNJbmNsdWRlc1ZlcnRleCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZlcnRleGVzID0gW1xuICAgIC4uLnZlcnRleGVzLFxuICAgIHZlcnRleFxuICBdO1xuXG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUpO1xuXG4gIHJlY3Vyc2l2ZVJ1bGVOYW1lcy5mb3JFYWNoKChyZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhyZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW3JlY3Vyc2l2ZVJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZVJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSByZWN1cnNpdmVSdWxlOyAvLy9cblxuICAgICAgZWRnZXNGcm9tUnVsZUFuZFJ1bGVNYXAocnVsZSwgZWRnZXMsIHZlcnRleGVzLCBydWxlTWFwKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImVkZ2VzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJncmVhdGVzdEN5Y2xlRnJvbUN5Y2xlcyIsInJ1bGVOYW1lc0Zyb21DeWNsZXMiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicnVsZSIsImVkZ2VzIiwidmVydGV4ZXMiLCJlZGdlc0Zyb21SdWxlQW5kUnVsZU1hcCIsImN5Y2xlcyIsImdyZWF0ZXN0Q3ljbGUiLCJyZWR1Y2UiLCJjeWNsZSIsImN5Y2xlTGVuZ3RoIiwibGVuZ3RoIiwiZ3JlYXRlc3RDeWNsZUxlbmd0aCIsInJ1bGVOYW1lcyIsImZvckVhY2giLCJjeWNsaWNSdWxlTmFtZXMiLCJjeWNsaWNSdWxlTmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzQ3ljbGljUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJ1bGVOYW1lIiwicHVzaCIsImdldE5hbWUiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhlc0luY2x1ZGVzVmVydGV4IiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInNvdXJjZVZlcnRleCIsInRhcmdldFZlcnRleCIsImVkZ2UiLCJFZGdlIiwiZnJvbVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsInJlY3Vyc2l2ZVJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1nQkEsNEJBQTRCO2VBQTVCQTs7SUFVQUMsdUJBQXVCO2VBQXZCQTs7SUFtQkFDLG1CQUFtQjtlQUFuQkE7OzsyREFqQ0M7b0JBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLFNBQVNGLDZCQUE2QkcsU0FBUyxFQUFFQyxPQUFPLEVBQUU7SUFDL0QsSUFBTUMsT0FBT0YsV0FDUEcsUUFBUSxFQUFFLEVBQ1ZDLFdBQVcsRUFBRTtJQUVuQkMsd0JBQXdCSCxNQUFNQyxPQUFPQyxVQUFVSDtJQUUvQyxPQUFPRTtBQUNUO0FBRU8sU0FBU0wsd0JBQXdCUSxNQUFNLEVBQUU7SUFDOUMsSUFBTUMsZ0JBQWdCRCxPQUFPRSxNQUFNLENBQUMsU0FBQ0QsZUFBZUUsT0FBVTtRQUM1RCxJQUFJRixrQkFBa0IsSUFBSSxFQUFFO1lBQzFCQSxnQkFBZ0JFLE9BQVEsR0FBRztRQUM3QixPQUFPO1lBQ0wsSUFBTUMsY0FBY0QsTUFBTUUsTUFBTSxFQUM5QkMsc0JBQXNCTCxjQUFjSSxNQUFNO1lBRTVDLElBQUlELGNBQWNFLHFCQUFxQjtnQkFDckNMLGdCQUFnQkUsT0FBUSxHQUFHO1lBQzdCLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBT0Y7SUFDVCxHQUFHLElBQUk7SUFFUCxPQUFPQTtBQUNUO0FBRU8sU0FBU1Isb0JBQW9CTyxNQUFNLEVBQUU7SUFDMUMsSUFBTU8sWUFBWSxFQUFFO0lBRXBCUCxPQUFPUSxPQUFPLENBQUMsU0FBQ0wsT0FBVTtRQUN4QixJQUFNTSxrQkFBa0JOLE9BQVEsR0FBRztRQUVuQ00sZ0JBQWdCRCxPQUFPLENBQUMsU0FBQ0UsZ0JBQW1CO1lBQzFDLElBQU1DLGtDQUFrQ0osVUFBVUssUUFBUSxDQUFDRjtZQUUzRCxJQUFJLENBQUNDLGlDQUFpQztnQkFDcEMsSUFBTUUsV0FBV0gsZ0JBQWlCLEdBQUc7Z0JBRXJDSCxVQUFVTyxJQUFJLENBQUNEO1lBQ2pCLENBQUM7UUFDSDtJQUNGO0lBRUEsT0FBT047QUFDVDtBQUVBLFNBQVNSLHdCQUF3QkgsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUgsT0FBTyxFQUFFO0lBQy9ELElBQU1rQixXQUFXakIsS0FBS21CLE9BQU8sSUFDdkJDLFNBQVNILFVBQ1RJLHlCQUF5Qm5CLFNBQVNjLFFBQVEsQ0FBQ0k7SUFFakQsSUFBSUMsd0JBQXdCO1FBQzFCO0lBQ0YsQ0FBQztJQUVEbkIsV0FBVyxBQUNULHFCQUFHQSxpQkFETTtRQUVUa0I7S0FDRDtJQUVELElBQU1FLHFCQUFxQkMsSUFBQUEsZ0NBQTBCLEVBQUN2QixPQUNoRHdCLHlCQUF5QkMsSUFBQUEsb0NBQThCLEVBQUN6QjtJQUU5RHNCLG1CQUFtQlYsT0FBTyxDQUFDLFNBQUNjLG1CQUFzQjtRQUNoRCxJQUFNQyxrREFBa0RILHVCQUF1QlIsUUFBUSxDQUFDVTtRQUV4RixJQUFJQyxpREFBaUQ7WUFDbkQsSUFBTUMsd0JBQXdCRixtQkFDeEJHLGVBQWVaLFVBQ2ZhLGVBQWVGLHVCQUNmRyxPQUFPQyxhQUFJLENBQUNDLCtCQUErQixDQUFDSixjQUFjQztZQUVoRTdCLE1BQU1pQixJQUFJLENBQUNhO1FBQ2IsQ0FBQztRQUVELElBQU1HLGdCQUFnQm5DLE9BQU8sQ0FBQzJCLGtCQUFrQixJQUFJLElBQUk7UUFFeEQsSUFBSVEsa0JBQWtCLElBQUksRUFBRTtZQUMxQixJQUFNbEMsU0FBT2tDLGVBQWUsR0FBRztZQUUvQi9CLHdCQUF3QkgsUUFBTUMsT0FBT0MsVUFBVUg7UUFDakQsQ0FBQztJQUNIO0FBQ0YifQ==