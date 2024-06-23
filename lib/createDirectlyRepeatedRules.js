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
var _ruleNames = require("./utilities/ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createDirectlyRepeatedRules(cycles, ruleMap) {
    var ruleNames = (0, _ruleNames.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName], directlyRepeatedRule = _directly.default.fromRuleAndCycles(rule, cycles), directlyRepeatedRuleName = directlyRepeatedRule.getName();
        ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXJlY3RseVJlcGVhdGVkUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdGx5UmVwZWF0ZWRSdWxlcyhjeWNsZXMsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlcyhjeWNsZXMpO1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IERpcmVjdGx5UmVwZWF0ZWRSdWxlLmZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcyksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgcnVsZU1hcFtkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVdID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZURpcmVjdGx5UmVwZWF0ZWRSdWxlcyIsImN5Y2xlcyIsInJ1bGVNYXAiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGVzIiwiZm9yRWFjaCIsInJ1bGVOYW1lIiwicnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7K0RBSlM7eUJBRUc7Ozs7OztBQUVyQixTQUFTQSw0QkFBNEJDLE1BQU0sRUFBRUMsT0FBTztJQUNqRSxJQUFNQyxZQUFZQyxJQUFBQSw4QkFBbUIsRUFBQ0g7SUFFdENFLFVBQVVFLE9BQU8sQ0FBQyxTQUFDQztRQUNqQixJQUFNQyxPQUFPTCxPQUFPLENBQUNJLFNBQVMsRUFDeEJFLHVCQUF1QkMsaUJBQW9CLENBQUNDLGlCQUFpQixDQUFDSCxNQUFNTixTQUNwRVUsMkJBQTJCSCxxQkFBcUJJLE9BQU87UUFFN0RWLE9BQU8sQ0FBQ1MseUJBQXlCLEdBQUdIO0lBQ3RDO0FBQ0YifQ==