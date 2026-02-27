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
const _reduced = /*#__PURE__*/ _interop_require_default(require("./rule/reduced"));
const _cycle = require("./utilities/cycle");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createReducedRules(cycles, ruleMap) {
    const ruleNames = (0, _cycle.ruleNamesFromCycles)(cycles);
    ruleNames.forEach((ruleName)=>{
        const rule = ruleMap[ruleName], reducedRule = _reduced.default.fromRuleAndCycles(rule, cycles, ruleMap);
        if (reducedRule !== null) {
            const reducedRuleName = reducedRule.getName();
            ruleMap[reducedRuleName] = reducedRule;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVSZWR1Y2VkUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi9ydWxlL3JlZHVjZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzRnJvbUN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jeWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VkUnVsZXMoY3ljbGVzLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZXMoY3ljbGVzKTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBSZWR1Y2VkUnVsZS5mcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMsIHJ1bGVNYXApO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHJ1bGVNYXBbcmVkdWNlZFJ1bGVOYW1lXSA9IHJlZHVjZWRSdWxlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVkdWNlZFJ1bGVzIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZXMiLCJmb3JFYWNoIiwicnVsZU5hbWUiLCJydWxlIiwicmVkdWNlZFJ1bGUiLCJSZWR1Y2VkUnVsZSIsImZyb21SdWxlQW5kQ3ljbGVzIiwicmVkdWNlZFJ1bGVOYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OztnRUFKQTt1QkFFWTs7Ozs7O0FBRXJCLFNBQVNBLG1CQUFtQkMsTUFBTSxFQUFFQyxPQUFPO0lBQ3hELE1BQU1DLFlBQVlDLElBQUFBLDBCQUFtQixFQUFDSDtJQUV0Q0UsVUFBVUUsT0FBTyxDQUFDLENBQUNDO1FBQ2pCLE1BQU1DLE9BQU9MLE9BQU8sQ0FBQ0ksU0FBUyxFQUN4QkUsY0FBY0MsZ0JBQVcsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1OLFFBQVFDO1FBRWhFLElBQUlNLGdCQUFnQixNQUFNO1lBQ3hCLE1BQU1HLGtCQUFrQkgsWUFBWUksT0FBTztZQUUzQ1YsT0FBTyxDQUFDUyxnQkFBZ0IsR0FBR0g7UUFDN0I7SUFDRjtBQUNGIn0=