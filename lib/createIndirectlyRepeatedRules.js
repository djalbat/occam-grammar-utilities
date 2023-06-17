"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createIndirectlyRepeatedRules;
    }
});
var _indirectly = /*#__PURE__*/ _interop_require_default(require("./rule/repeated/indirectly"));
var _ruleNames = require("./utilities/ruleNames");
var _ruleName = require("./utilities/ruleName");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createIndirectlyRepeatedRules(cycles, ruleMap) {
    cycles.forEach(function(cycle) {
        var ruleNames = (0, _ruleNames.ruleNamesFromCycle)(cycle);
        (0, _ruleNames.forEachRuleNameAndLeftRecursiveRuleName)(ruleNames, function(ruleName, leftRecursiveRuleName) {
            var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName);
            var indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;
            if (indirectlyRepeatedRule === null) {
                var rule = ruleMap[ruleName];
                indirectlyRepeatedRule = _indirectly.default.fromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName);
                ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
            }
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZnJvbSBcIi4vcnVsZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZSwgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSW5kaXJlY3RseVJlcGVhdGVkUnVsZXMoY3ljbGVzLCBydWxlTWFwKSB7XG4gIGN5Y2xlcy5mb3JFYWNoKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSk7XG5cbiAgICBmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWVzLCAocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgbGV0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBydWxlTWFwW2luZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICBpZiAoaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlID0gcnVsZU1hcFtydWxlTmFtZV07XG5cbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBydWxlTWFwW2luZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lXSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVzIiwiY3ljbGVzIiwicnVsZU1hcCIsImZvckVhY2giLCJjeWNsZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZSIsImZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJydWxlIiwiSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7O2lFQUxXO3lCQUV5Qzt3QkFDRzs7Ozs7O0FBRWhFLFNBQVNBLDhCQUE4QkMsTUFBTSxFQUFFQyxPQUFPO0lBQ25FRCxPQUFPRSxPQUFPLENBQUMsU0FBQ0M7UUFDZCxJQUFNQyxZQUFZQyxJQUFBQSw2QkFBa0IsRUFBQ0Y7UUFFckNHLElBQUFBLGtEQUF1QyxFQUFDRixXQUFXLFNBQUNHLFVBQVVDO1lBQzVELElBQU1DLDZCQUE2QkMsSUFBQUEsd0VBQThELEVBQUNILFVBQVVDO1lBRTVHLElBQUlHLHlCQUF5QlYsT0FBTyxDQUFDUSwyQkFBMkIsSUFBSTtZQUVwRSxJQUFJRSwyQkFBMkIsTUFBTTtnQkFDbkMsSUFBTUMsT0FBT1gsT0FBTyxDQUFDTSxTQUFTO2dCQUU5QkkseUJBQXlCRSxtQkFBc0IsQ0FBQ0MsZ0NBQWdDLENBQUNGLE1BQU1KO2dCQUV2RlAsT0FBTyxDQUFDUSwyQkFBMkIsR0FBR0U7WUFDeEM7UUFDRjtJQUNGO0FBQ0YifQ==