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
var _directedGraph = require("./utilities/directedGraph");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createReducedRules(ruleMap, directedGraph) {
    var cycles = directedGraph.findCycles(), ruleNames = (0, _directedGraph.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName], reducedRule = _reduced.default.fromRule(rule), reducedRuleName = reducedRule.getName();
        ruleMap[reducedRuleName] = reducedRule;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVSZWR1Y2VkUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi9ydWxlL3JlZHVjZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzRnJvbUN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9kaXJlY3RlZEdyYXBoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZWRSdWxlcyhydWxlTWFwLCBkaXJlY3RlZEdyYXBoKSB7XG4gIGNvbnN0IGN5Y2xlcyA9IGRpcmVjdGVkR3JhcGguZmluZEN5Y2xlcygpLFxuICAgICAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGVzKGN5Y2xlcyk7XG5cbiAgcnVsZU5hbWVzLmZvckVhY2goKHJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gUmVkdWNlZFJ1bGUuZnJvbVJ1bGUocnVsZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdID0gcmVkdWNlZFJ1bGU7XG4gIH0pO1xufVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlUmVkdWNlZFJ1bGVzIiwicnVsZU1hcCIsImRpcmVjdGVkR3JhcGgiLCJjeWNsZXMiLCJmaW5kQ3ljbGVzIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlcyIsImZvckVhY2giLCJydWxlTmFtZSIsInJ1bGUiLCJyZWR1Y2VkUnVsZSIsIlJlZHVjZWRSdWxlIiwiZnJvbVJ1bGUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzhEQUpBOzZCQUVZOzs7Ozs7QUFFckIsU0FBU0EsbUJBQW1CQyxPQUFPLEVBQUVDLGFBQWEsRUFBRTtJQUNqRSxJQUFNQyxTQUFTRCxjQUFjRSxVQUFVLElBQ2pDQyxZQUFZQyxJQUFBQSxrQ0FBbUIsRUFBQ0g7SUFFdENFLFVBQVVFLE9BQU8sQ0FBQyxTQUFDQyxVQUFhO1FBQzlCLElBQU1DLE9BQU9SLE9BQU8sQ0FBQ08sU0FBUyxFQUN4QkUsY0FBY0MsZ0JBQVcsQ0FBQ0MsUUFBUSxDQUFDSCxPQUNuQ0ksa0JBQWtCSCxZQUFZSSxPQUFPO1FBRTNDYixPQUFPLENBQUNZLGdCQUFnQixHQUFHSDtJQUM3QjtBQUNGIn0=