"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createReducedRules;
    }
});
var _reduced = /*#__PURE__*/ _interop_require_default(require("./rule/reduced"));
var _ruleNames = require("./utilities/ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createReducedRules(cycles, ruleMap) {
    var ruleNames = (0, _ruleNames.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName], reducedRule = _reduced.default.fromRuleAndCycles(rule, cycles);
        if (reducedRule !== null) {
            var reducedRuleName = reducedRule.getName();
            ruleMap[reducedRuleName] = reducedRule;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVSZWR1Y2VkUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi9ydWxlL3JlZHVjZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzRnJvbUN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlZFJ1bGVzKGN5Y2xlcywgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGVzKGN5Y2xlcyk7XG5cbiAgcnVsZU5hbWVzLmZvckVhY2goKHJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gUmVkdWNlZFJ1bGUuZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzKTtcblxuICAgIGlmIChyZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW3JlZHVjZWRSdWxlTmFtZV0gPSByZWR1Y2VkUnVsZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlZHVjZWRSdWxlcyIsImN5Y2xlcyIsInJ1bGVNYXAiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGVzIiwiZm9yRWFjaCIsInJ1bGVOYW1lIiwicnVsZSIsInJlZHVjZWRSdWxlIiwiUmVkdWNlZFJ1bGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsInJlZHVjZWRSdWxlTmFtZSIsImdldE5hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7OERBSkE7eUJBRVk7Ozs7OztBQUVyQixTQUFTQSxtQkFBbUJDLE1BQU0sRUFBRUMsT0FBTztJQUN4RCxJQUFNQyxZQUFZQyxJQUFBQSw4QkFBbUIsRUFBQ0g7SUFFdENFLFVBQVVFLE9BQU8sQ0FBQyxTQUFDQztRQUNqQixJQUFNQyxPQUFPTCxPQUFPLENBQUNJLFNBQVMsRUFDeEJFLGNBQWNDLGdCQUFXLENBQUNDLGlCQUFpQixDQUFDSCxNQUFNTjtRQUV4RCxJQUFJTyxnQkFBZ0IsTUFBTTtZQUN4QixJQUFNRyxrQkFBa0JILFlBQVlJLE9BQU87WUFFM0NWLE9BQU8sQ0FBQ1MsZ0JBQWdCLEdBQUdIO1FBQzdCO0lBQ0Y7QUFDRiJ9