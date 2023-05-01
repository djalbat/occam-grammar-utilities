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
function createIndirectlyRepeatedRules(ruleMap, directedGraph) {
    var cycles = directedGraph.findCycles();
    cycles.forEach(function(cycle) {
        var ruleNames = cycle; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZnJvbSBcIi4vcnVsZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVzKHJ1bGVNYXAsIGRpcmVjdGVkR3JhcGgpIHtcbiAgY29uc3QgY3ljbGVzID0gZGlyZWN0ZWRHcmFwaC5maW5kQ3ljbGVzKCk7XG5cbiAgY3ljbGVzLmZvckVhY2goKGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gY3ljbGU7ICAvLy9cblxuICAgIGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZXMsIChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBsZXQgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IHJ1bGVNYXBbaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICAgIGlmIChpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXTtcblxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gSW5kaXJlY3RseVJlcGVhdGVkUnVsZS5mcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIHJ1bGVNYXBbaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVdID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlSW5kaXJlY3RseVJlcGVhdGVkUnVsZXMiLCJydWxlTWFwIiwiZGlyZWN0ZWRHcmFwaCIsImN5Y2xlcyIsImZpbmRDeWNsZXMiLCJmb3JFYWNoIiwiY3ljbGUiLCJydWxlTmFtZXMiLCJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwicnVsZSIsIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7OztpRUFMVzt5QkFFcUI7d0JBQ3VCOzs7Ozs7QUFFaEUsU0FBU0EsOEJBQThCQyxPQUFPLEVBQUVDLGFBQWEsRUFBRTtJQUM1RSxJQUFNQyxTQUFTRCxjQUFjRSxVQUFVO0lBRXZDRCxPQUFPRSxPQUFPLENBQUMsU0FBQ0MsT0FBVTtRQUN4QixJQUFNQyxZQUFZRCxPQUFRLEdBQUc7UUFFN0JFLElBQUFBLGtEQUF1QyxFQUFDRCxXQUFXLFNBQUNFLFVBQVVDLHVCQUEwQjtZQUN0RixJQUFNQyw2QkFBNkJDLElBQUFBLHdFQUE4RCxFQUFDSCxVQUFVQztZQUU1RyxJQUFJRyx5QkFBeUJaLE9BQU8sQ0FBQ1UsMkJBQTJCLElBQUksSUFBSTtZQUV4RSxJQUFJRSwyQkFBMkIsSUFBSSxFQUFFO2dCQUNuQyxJQUFNQyxPQUFPYixPQUFPLENBQUNRLFNBQVM7Z0JBRTlCSSx5QkFBeUJFLG1CQUFzQixDQUFDQyxnQ0FBZ0MsQ0FBQ0YsTUFBTUo7Z0JBRXZGVCxPQUFPLENBQUNVLDJCQUEyQixHQUFHRTtZQUN4QyxDQUFDO1FBQ0g7SUFDRjtBQUNGIn0=