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
var _rewritten = /*#__PURE__*/ _interop_require_default(require("./definition/rewritten"));
var _ruleNames = require("./utilities/ruleNames");
var _rule = require("./utilities/rule");
var _path = require("./utilities/path");
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
        rewriteRule(rule, cycles, ruleMap);
    });
    ruleNames.forEach(function(ruleName) {
        var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRule = ruleMap[directlyRepeatedRuleName], directlyRepeatedRuleEffectivelyEmpty = (0, _rule.isRuleEffectivelyEmpty)(directlyRepeatedRule, ruleMap);
        if (directlyRepeatedRuleEffectivelyEmpty) {
            var directlyRepeatedRuleName1 = directlyRepeatedRule.getName();
            throw new Error("The '".concat(directlyRepeatedRuleName1, "' directly repeated rule is effectively empty."));
        }
    });
}
function rewriteRule(rule, cycles, ruleMap) {
    var ruleName = rule.getName();
    rule.removeAllDefinitions();
    var rewrittenDefinition = _rewritten.default.fromRuleName(ruleName, ruleMap);
    if (rewrittenDefinition !== null) {
        var definition = rewrittenDefinition; ///
        rule.addDefinition(definition);
    }
    var paths = (0, _path.pathsFromRuleNameAndCycles)(ruleName, cycles);
    paths.forEach(function(path) {
        var rewrittenDefinition = _rewritten.default.fromPath(path, ruleMap);
        if (rewrittenDefinition !== null) {
            var definition = rewrittenDefinition; ///
            rule.addDefinition(definition);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmV3cml0dGVuRGVmaW5pdGlvbiBmcm9tIFwiLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tQ3ljbGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgaXNSdWxlRWZmZWN0aXZlbHlFbXB0eSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV3cml0ZUxlZnRSZWN1cnNpdmVSdWxlcyhjeWNsZXMsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlcyhjeWNsZXMpO1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXTtcblxuICAgIHJld3JpdGVSdWxlKHJ1bGUsIGN5Y2xlcywgcnVsZU1hcCk7XG4gIH0pO1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBydWxlTWFwW2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0sXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVFZmZlY3RpdmVseUVtcHR5ID0gaXNSdWxlRWZmZWN0aXZlbHlFbXB0eShkaXJlY3RseVJlcGVhdGVkUnVsZSwgcnVsZU1hcCk7XG5cbiAgICBpZiAoZGlyZWN0bHlSZXBlYXRlZFJ1bGVFZmZlY3RpdmVseUVtcHR5KSB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZX0nIGRpcmVjdGx5IHJlcGVhdGVkIHJ1bGUgaXMgZWZmZWN0aXZlbHkgZW1wdHkuYCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZVJ1bGUocnVsZSwgY3ljbGVzLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgcnVsZS5yZW1vdmVBbGxEZWZpbml0aW9ucygpO1xuXG4gIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSwgcnVsZU1hcCk7XG5cbiAgaWYgKHJld3JpdHRlbkRlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICBydWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gIH1cblxuICBjb25zdCBwYXRocyA9IHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpO1xuXG4gIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICBjb25zdCByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tUGF0aChwYXRoLCBydWxlTWFwKTtcblxuICAgIGlmIChyZXdyaXR0ZW5EZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVMZWZ0UmVjdXJzaXZlUnVsZXMiLCJjeWNsZXMiLCJydWxlTWFwIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlcyIsImZvckVhY2giLCJydWxlTmFtZSIsInJ1bGUiLCJyZXdyaXRlUnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVFZmZlY3RpdmVseUVtcHR5IiwiaXNSdWxlRWZmZWN0aXZlbHlFbXB0eSIsImdldE5hbWUiLCJFcnJvciIsInJlbW92ZUFsbERlZmluaXRpb25zIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwiYWRkRGVmaW5pdGlvbiIsInBhdGhzIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJwYXRoIiwiZnJvbVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7Z0VBUFE7eUJBRUk7b0JBQ0c7b0JBQ0k7d0JBQ1U7Ozs7OztBQUV0QyxTQUFTQSwwQkFBMEJDLE1BQU0sRUFBRUMsT0FBTztJQUMvRCxJQUFNQyxZQUFZQyxJQUFBQSxnQ0FBb0JIO0lBRXRDRSxVQUFVRSxRQUFRLFNBQUNDO1FBQ2pCLElBQU1DLE9BQU9MLE9BQU8sQ0FBQ0ksU0FBUztRQUU5QkUsWUFBWUQsTUFBTU4sUUFBUUM7SUFDNUI7SUFFQUMsVUFBVUUsUUFBUSxTQUFDQztRQUNqQixJQUFNRywyQkFBMkJDLElBQUFBLGdEQUFxQ0osV0FDaEVLLHVCQUF1QlQsT0FBTyxDQUFDTyx5QkFBeUIsRUFDeERHLHVDQUF1Q0MsSUFBQUEsOEJBQXVCRixzQkFBc0JUO1FBRTFGLElBQUlVLHNDQUFzQztZQUN4QyxJQUFNSCw0QkFBMkJFLHFCQUFxQkc7WUFFdEQsTUFBTSxJQUFJQyxNQUFNLEFBQUMsUUFBZ0MsT0FBekJOLDJCQUF5QjtRQUNuRDtJQUNGO0FBQ0Y7QUFFQSxTQUFTRCxZQUFZRCxJQUFJLEVBQUVOLE1BQU0sRUFBRUMsT0FBTztJQUN4QyxJQUFNSSxXQUFXQyxLQUFLTztJQUV0QlAsS0FBS1M7SUFFTCxJQUFNQyxzQkFBc0JDLG1CQUFvQkMsYUFBYWIsVUFBVUo7SUFFdkUsSUFBSWUsd0JBQXdCLE1BQU07UUFDaEMsSUFBTUcsYUFBYUgscUJBQXFCLEdBQUc7UUFFM0NWLEtBQUtjLGNBQWNEO0lBQ3JCO0lBRUEsSUFBTUUsUUFBUUMsSUFBQUEsa0NBQTJCakIsVUFBVUw7SUFFbkRxQixNQUFNakIsUUFBUSxTQUFDbUI7UUFDYixJQUFNUCxzQkFBc0JDLG1CQUFvQk8sU0FBU0QsTUFBTXRCO1FBRS9ELElBQUllLHdCQUF3QixNQUFNO1lBQ2hDLElBQU1HLGFBQWFILHFCQUFxQixHQUFHO1lBRTNDVixLQUFLYyxjQUFjRDtRQUNyQjtJQUNGO0FBQ0YifQ==