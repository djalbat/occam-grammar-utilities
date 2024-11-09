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
var _cycle = require("./utilities/cycle");
var _ruleNames = require("./utilities/ruleNames");
var _ruleName = require("./utilities/ruleName");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createIndirectlyRepeatedRules(cycles, ruleMap) {
    cycles.forEach(function(cycle) {
        var ruleNames = (0, _cycle.ruleNamesFromCycle)(cycle);
        (0, _ruleNames.forEachRuleNameAndLeftRecursiveRuleName)(ruleNames, function(ruleName, leftRecursiveRuleName) {
            var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName);
            var indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;
            if (indirectlyRepeatedRule === null) {
                var rule = ruleMap[ruleName], leftRecursiveRule = ruleMap[leftRecursiveRuleName];
                indirectlyRepeatedRule = _indirectly.default.fromRuleAndLeftRecursiveRule(rule, leftRecursiveRule, ruleMap);
                ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
            }
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZnJvbSBcIi4vcnVsZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZSB9IGZyb20gXCIuL3V0aWxpdGllcy9jeWNsZVwiO1xuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSW5kaXJlY3RseVJlcGVhdGVkUnVsZXMoY3ljbGVzLCBydWxlTWFwKSB7XG4gIGN5Y2xlcy5mb3JFYWNoKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSk7XG5cbiAgICBmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWVzLCAocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgbGV0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBydWxlTWFwW2luZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICBpZiAoaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlID0gcnVsZU1hcFtsZWZ0UmVjdXJzaXZlUnVsZU5hbWVdO1xuXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlLmZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICAgIHJ1bGVNYXBbaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVdID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlSW5kaXJlY3RseVJlcGVhdGVkUnVsZXMiLCJjeWNsZXMiLCJydWxlTWFwIiwiZm9yRWFjaCIsImN5Y2xlIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlIiwiZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZSIsIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O2lFQU5XO3FCQUVBO3lCQUNxQjt3QkFDdUI7Ozs7OztBQUVoRSxTQUFTQSw4QkFBOEJDLE1BQU0sRUFBRUMsT0FBTztJQUNuRUQsT0FBT0UsT0FBTyxDQUFDLFNBQUNDO1FBQ2QsSUFBTUMsWUFBWUMsSUFBQUEseUJBQWtCLEVBQUNGO1FBRXJDRyxJQUFBQSxrREFBdUMsRUFBQ0YsV0FBVyxTQUFDRyxVQUFVQztZQUM1RCxJQUFNQyw2QkFBNkJDLElBQUFBLHdFQUE4RCxFQUFDSCxVQUFVQztZQUU1RyxJQUFJRyx5QkFBeUJWLE9BQU8sQ0FBQ1EsMkJBQTJCLElBQUk7WUFFcEUsSUFBSUUsMkJBQTJCLE1BQU07Z0JBQ25DLElBQU1DLE9BQU9YLE9BQU8sQ0FBQ00sU0FBUyxFQUN4Qk0sb0JBQW9CWixPQUFPLENBQUNPLHNCQUFzQjtnQkFFeERHLHlCQUF5QkcsbUJBQXNCLENBQUNDLDRCQUE0QixDQUFDSCxNQUFNQyxtQkFBbUJaO2dCQUV0R0EsT0FBTyxDQUFDUSwyQkFBMkIsR0FBR0U7WUFDeEM7UUFDRjtJQUNGO0FBQ0YifQ==