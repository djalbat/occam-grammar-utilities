"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return rewriteLeftRecursiveRules;
    }
});
var _rewritten = /*#__PURE__*/ _interop_require_default(require("./rule/rewritten"));
var _ruleNames = require("./utilities/ruleNames");
var _rule = require("./utilities/rule");
var _ruleName = require("./utilities/ruleName");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function rewriteLeftRecursiveRules(cycles, ruleMap) {
    var ruleNames = (0, _ruleNames.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName];
        var rewrittenRule = _rewritten.default.fromRuleAndCycles(rule, cycles, ruleMap);
        rule = rewrittenRule; ///
        ruleMap[ruleName] = rule;
    });
    ruleNames.forEach(function(ruleName) {
        var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRule = ruleMap[directlyRepeatedRuleName], directlyRepeatedRuleEffectivelyEmpty = (0, _rule.isRuleEffectivelyEmpty)(directlyRepeatedRule, ruleMap);
        if (directlyRepeatedRuleEffectivelyEmpty) {
            var directlyRepeatedRuleName1 = directlyRepeatedRule.getName();
            throw new Error("The '".concat(directlyRepeatedRuleName1, "' directly repeated rule is effectively empty."));
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi9ydWxlL3Jld3JpdHRlblwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tQ3ljbGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgaXNSdWxlRWZmZWN0aXZlbHlFbXB0eSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV3cml0ZUxlZnRSZWN1cnNpdmVSdWxlcyhjeWNsZXMsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlcyhjeWNsZXMpO1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGxldCBydWxlID0gcnVsZU1hcFtydWxlTmFtZV07XG5cbiAgICBjb25zdCByZXdyaXR0ZW5SdWxlID0gUmV3cml0dGVuUnVsZS5mcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMsIHJ1bGVNYXApO1xuXG4gICAgcnVsZSA9IHJld3JpdHRlblJ1bGU7IC8vL1xuXG4gICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuICB9KTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gcnVsZU1hcFtkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVdLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlRWZmZWN0aXZlbHlFbXB0eSA9IGlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkoZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKGRpcmVjdGx5UmVwZWF0ZWRSdWxlRWZmZWN0aXZlbHlFbXB0eSkge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWV9JyBkaXJlY3RseSByZXBlYXRlZCBydWxlIGlzIGVmZmVjdGl2ZWx5IGVtcHR5LmApO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZUxlZnRSZWN1cnNpdmVSdWxlcyIsImN5Y2xlcyIsInJ1bGVNYXAiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGVzIiwiZm9yRWFjaCIsInJ1bGVOYW1lIiwicnVsZSIsInJld3JpdHRlblJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlRWZmZWN0aXZlbHlFbXB0eSIsImlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkiLCJnZXROYW1lIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7Z0VBTkU7eUJBRVU7b0JBQ0c7d0JBQ2M7Ozs7OztBQUV0QyxTQUFTQSwwQkFBMEJDLE1BQU0sRUFBRUMsT0FBTztJQUMvRCxJQUFNQyxZQUFZQyxJQUFBQSw4QkFBbUIsRUFBQ0g7SUFFdENFLFVBQVVFLE9BQU8sQ0FBQyxTQUFDQztRQUNqQixJQUFJQyxPQUFPTCxPQUFPLENBQUNJLFNBQVM7UUFFNUIsSUFBTUUsZ0JBQWdCQyxrQkFBYSxDQUFDQyxpQkFBaUIsQ0FBQ0gsTUFBTU4sUUFBUUM7UUFFcEVLLE9BQU9DLGVBQWUsR0FBRztRQUV6Qk4sT0FBTyxDQUFDSSxTQUFTLEdBQUdDO0lBQ3RCO0lBRUFKLFVBQVVFLE9BQU8sQ0FBQyxTQUFDQztRQUNqQixJQUFNSywyQkFBMkJDLElBQUFBLDhDQUFvQyxFQUFDTixXQUNoRU8sdUJBQXVCWCxPQUFPLENBQUNTLHlCQUF5QixFQUN4REcsdUNBQXVDQyxJQUFBQSw0QkFBc0IsRUFBQ0Ysc0JBQXNCWDtRQUUxRixJQUFJWSxzQ0FBc0M7WUFDeEMsSUFBTUgsNEJBQTJCRSxxQkFBcUJHLE9BQU87WUFFN0QsTUFBTSxJQUFJQyxNQUFNLEFBQUMsUUFBZ0MsT0FBekJOLDJCQUF5QjtRQUNuRDtJQUNGO0FBQ0YifQ==