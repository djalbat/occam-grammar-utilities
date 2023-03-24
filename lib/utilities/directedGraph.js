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
    ruleNamesFromCycle: function() {
        return ruleNamesFromCycle;
    },
    edgesFromStartRuleAndRuleMap: function() {
        return edgesFromStartRuleAndRuleMap;
    }
});
var _edge = /*#__PURE__*/ _interopRequireDefault(require("../edge"));
var _rule = require("./rule");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function ruleNamesFromCycle(cycle) {
    var edges = cycle, ruleNames = edges.map(function(edge) {
        var sourceVertex = edge.getSourceVertex(), ruleName = sourceVertex; ///
        return ruleName;
    });
    return ruleNames;
}
function edgesFromStartRuleAndRuleMap(startRule, ruleMap) {
    var rule = startRule, edges = [], vertexes = [];
    edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap);
    return edges;
}
function edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap) {
    var ruleName = rule.getName(), vertex = ruleName, vertexesIncludesVertex = vertexes.includes(vertex);
    if (vertexesIncludesVertex) {
        return;
    }
    vertexes = _toConsumableArray(vertexes).concat([
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSB9IGZyb20gXCIuL3J1bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSkge1xuICBjb25zdCBlZGdlcyA9IGN5Y2xlLCAgLy9cbiAgICAgICAgcnVsZU5hbWVzID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXgoKSxcbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IHNvdXJjZVZlcnRleDsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRnZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZSA9IHN0YXJ0UnVsZSwgLy8vXG4gICAgICAgIGVkZ2VzID0gW10sXG4gICAgICAgIHZlcnRleGVzID0gW107XG5cbiAgZWRnZXNGcm9tUnVsZUFuZFJ1bGVNYXAocnVsZSwgZWRnZXMsIHZlcnRleGVzLCBydWxlTWFwKTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmZ1bmN0aW9uIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICB2ZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICB2ZXJ0ZXhlc0luY2x1ZGVzVmVydGV4ID0gdmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICBpZiAodmVydGV4ZXNJbmNsdWRlc1ZlcnRleCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZlcnRleGVzID0gW1xuICAgIC4uLnZlcnRleGVzLFxuICAgIHZlcnRleFxuICBdO1xuXG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUpO1xuXG4gIHJlY3Vyc2l2ZVJ1bGVOYW1lcy5mb3JFYWNoKChyZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhyZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW3JlY3Vyc2l2ZVJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZVJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSByZWN1cnNpdmVSdWxlOyAvLy9cblxuICAgICAgZWRnZXNGcm9tUnVsZUFuZFJ1bGVNYXAocnVsZSwgZWRnZXMsIHZlcnRleGVzLCBydWxlTWFwKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVOYW1lc0Zyb21DeWNsZSIsImVkZ2VzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJjeWNsZSIsImVkZ2VzIiwicnVsZU5hbWVzIiwibWFwIiwiZWRnZSIsInNvdXJjZVZlcnRleCIsImdldFNvdXJjZVZlcnRleCIsInJ1bGVOYW1lIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInJ1bGUiLCJ2ZXJ0ZXhlcyIsImVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwIiwiZ2V0TmFtZSIsInZlcnRleCIsInZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImZvckVhY2giLCJyZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwidGFyZ2V0VmVydGV4IiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJwdXNoIiwicmVjdXJzaXZlUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWdCQSxrQkFBa0I7ZUFBbEJBOztJQVlBQyw0QkFBNEI7ZUFBNUJBOzs7eURBaEJDO29CQUUwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxTQUFTRCxtQkFBbUJFLEtBQUssRUFBRTtJQUN4QyxJQUFNQyxRQUFRRCxPQUNSRSxZQUFZRCxNQUFNRSxHQUFHLENBQUMsU0FBQ0MsTUFBUztRQUM5QixJQUFNQyxlQUFlRCxLQUFLRSxlQUFlLElBQ25DQyxXQUFXRixjQUFlLEdBQUc7UUFFbkMsT0FBT0U7SUFDVDtJQUVOLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTSCw2QkFBNkJTLFNBQVMsRUFBRUMsT0FBTyxFQUFFO0lBQy9ELElBQU1DLE9BQU9GLFdBQ1BQLFFBQVEsRUFBRSxFQUNWVSxXQUFXLEVBQUU7SUFFbkJDLHdCQUF3QkYsTUFBTVQsT0FBT1UsVUFBVUY7SUFFL0MsT0FBT1I7QUFDVDtBQUVBLFNBQVNXLHdCQUF3QkYsSUFBSSxFQUFFVCxLQUFLLEVBQUVVLFFBQVEsRUFBRUYsT0FBTyxFQUFFO0lBQy9ELElBQU1GLFdBQVdHLEtBQUtHLE9BQU8sSUFDdkJDLFNBQVNQLFVBQ1RRLHlCQUF5QkosU0FBU0ssUUFBUSxDQUFDRjtJQUVqRCxJQUFJQyx3QkFBd0I7UUFDMUI7SUFDRixDQUFDO0lBRURKLFdBQVcsQUFDVCxtQkFBR0EsaUJBRE07UUFFVEc7S0FDRDtJQUVELElBQU1HLHFCQUFxQkMsSUFBQUEsZ0NBQTBCLEVBQUNSLE9BQ2hEUyx5QkFBeUJDLElBQUFBLG9DQUE4QixFQUFDVjtJQUU5RE8sbUJBQW1CSSxPQUFPLENBQUMsU0FBQ0MsbUJBQXNCO1FBQ2hELElBQU1DLGtEQUFrREosdUJBQXVCSCxRQUFRLENBQUNNO1FBRXhGLElBQUlDLGlEQUFpRDtZQUNuRCxJQUFNQyx3QkFBd0JGLG1CQUN4QmpCLGVBQWVFLFVBQ2ZrQixlQUFlRCx1QkFDZnBCLE9BQU9zQixhQUFJLENBQUNDLCtCQUErQixDQUFDdEIsY0FBY29CO1lBRWhFeEIsTUFBTTJCLElBQUksQ0FBQ3hCO1FBQ2IsQ0FBQztRQUVELElBQU15QixnQkFBZ0JwQixPQUFPLENBQUNhLGtCQUFrQixJQUFJLElBQUk7UUFFeEQsSUFBSU8sa0JBQWtCLElBQUksRUFBRTtZQUMxQixJQUFNbkIsU0FBT21CLGVBQWUsR0FBRztZQUUvQmpCLHdCQUF3QkYsUUFBTVQsT0FBT1UsVUFBVUY7UUFDakQsQ0FBQztJQUNIO0FBQ0YifQ==