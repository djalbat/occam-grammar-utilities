"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createDirectlyRepeatedRules;
    }
});
var _directly = /*#__PURE__*/ _interop_require_default(require("./rule/repeated/directly"));
var _cycle = require("./utilities/cycle");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createDirectlyRepeatedRules(cycles, ruleMap) {
    var ruleNames = (0, _cycle.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName], directlyRepeatedRule = _directly.default.fromRuleAndCycles(rule, cycles, ruleMap), directlyRepeatedRuleName = directlyRepeatedRule.getName();
        ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXJlY3RseVJlcGVhdGVkUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY3ljbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGlyZWN0bHlSZXBlYXRlZFJ1bGVzKGN5Y2xlcywgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGVzKGN5Y2xlcyk7XG5cbiAgcnVsZU5hbWVzLmZvckVhY2goKHJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gRGlyZWN0bHlSZXBlYXRlZFJ1bGUuZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzLCBydWxlTWFwKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZS5nZXROYW1lKCk7XG5cbiAgICBydWxlTWFwW2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0gPSBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRGlyZWN0bHlSZXBlYXRlZFJ1bGVzIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZXMiLCJmb3JFYWNoIiwicnVsZU5hbWUiLCJydWxlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJEaXJlY3RseVJlcGVhdGVkUnVsZSIsImZyb21SdWxlQW5kQ3ljbGVzIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzsrREFKUztxQkFFRzs7Ozs7O0FBRXJCLFNBQVNBLDRCQUE0QkMsTUFBTSxFQUFFQyxPQUFPO0lBQ2pFLElBQU1DLFlBQVlDLElBQUFBLDBCQUFtQixFQUFDSDtJQUV0Q0UsVUFBVUUsT0FBTyxDQUFDLFNBQUNDO1FBQ2pCLElBQU1DLE9BQU9MLE9BQU8sQ0FBQ0ksU0FBUyxFQUN4QkUsdUJBQXVCQyxpQkFBb0IsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1OLFFBQVFDLFVBQzVFUywyQkFBMkJILHFCQUFxQkksT0FBTztRQUU3RFYsT0FBTyxDQUFDUyx5QkFBeUIsR0FBR0g7SUFDdEM7QUFDRiJ9