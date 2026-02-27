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
const _necessary = require("necessary");
const _rewritten = /*#__PURE__*/ _interop_require_default(require("./rule/rewritten"));
const _directly = /*#__PURE__*/ _interop_require_default(require("./rule/repeated/directly"));
const _nonConsuming = require("./utilities/nonConsuming");
const _cycle = require("./utilities/cycle");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { filter } = _necessary.arrayUtilities;
function rewriteLeftRecursiveRules(cycles, ruleMap, ruleNamesMap) {
    const ruleNames = (0, _cycle.ruleNamesFromCycles)(cycles);
    ruleNames.forEach((ruleName)=>{
        let rule = ruleMap[ruleName];
        const rewrittenRule = _rewritten.default.fromRuleAndCycles(rule, cycles, ruleMap, ruleNamesMap);
        rule = rewrittenRule; ///
        ruleMap[ruleName] = rule;
    });
    const directlyRepeatedRules = rulesFromRule(_directly.default, ruleMap);
    directlyRepeatedRules.forEach((directlyRepeatedRule)=>{
        const directlyRepeatedRuleNonConsuming = (0, _nonConsuming.isRuleNonConsuming)(directlyRepeatedRule, ruleMap);
        if (directlyRepeatedRuleNonConsuming) {
            const directlyRepeatedRuleName = directlyRepeatedRule.getName();
            throw new Error(`The directly repeated '${directlyRepeatedRuleName}' rule is non-consuming.`);
        }
    });
    ruleNames.forEach((ruleName)=>{
        const ruleCycles = (0, _cycle.ruleCyclesFromRuleNameAndCycles)(ruleName, cycles), ruleCyclesIrreducible = ruleCycles.every((ruleCycle)=>{
            const ruleCycleIrreducible = (0, _cycle.isCycleIrreducible)(ruleCycle, ruleMap);
            if (ruleCycleIrreducible) {
                return true;
            }
        });
        if (ruleCyclesIrreducible) {
            throw new Error(`None of the cycles including the '${ruleName}' rule have a reduced rule.`);
        }
    });
}
function rulesFromRule(Rule, ruleMap) {
    const rules = Object.values(ruleMap); ///
    filter(rules, (rule)=>{
        const ruleRule = rule instanceof Rule;
        if (ruleRule) {
            return true;
        }
    });
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzUnVsZU5vbkNvbnN1bWluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub25Db25zdW1pbmdcIjtcbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY3ljbGVcIjtcbmltcG9ydCB7IGlzQ3ljbGVJcnJlZHVjaWJsZSwgcnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jeWNsZVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVMZWZ0UmVjdXJzaXZlUnVsZXMoY3ljbGVzLCBydWxlTWFwLCBydWxlTmFtZXNNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlcyhjeWNsZXMpO1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGxldCBydWxlID0gcnVsZU1hcFtydWxlTmFtZV07XG5cbiAgICBjb25zdCByZXdyaXR0ZW5SdWxlID0gUmV3cml0dGVuUnVsZS5mcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMsIHJ1bGVNYXAsIHJ1bGVOYW1lc01hcCk7XG5cbiAgICBydWxlID0gcmV3cml0dGVuUnVsZTsgLy8vXG5cbiAgICBydWxlTWFwW3J1bGVOYW1lXSA9IHJ1bGU7XG4gIH0pO1xuXG4gIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlcyA9IHJ1bGVzRnJvbVJ1bGUoRGlyZWN0bHlSZXBlYXRlZFJ1bGUsIHJ1bGVNYXApO1xuXG4gIGRpcmVjdGx5UmVwZWF0ZWRSdWxlcy5mb3JFYWNoKChkaXJlY3RseVJlcGVhdGVkUnVsZSkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTm9uQ29uc3VtaW5nID0gaXNSdWxlTm9uQ29uc3VtaW5nKGRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBydWxlTWFwKTtcblxuICAgIGlmIChkaXJlY3RseVJlcGVhdGVkUnVsZU5vbkNvbnN1bWluZykge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkaXJlY3RseSByZXBlYXRlZCAnJHtkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWV9JyBydWxlIGlzIG5vbi1jb25zdW1pbmcuYCk7XG4gICAgfVxuICB9KTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBydWxlQ3ljbGVzID0gcnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKSxcbiAgICAgICAgICBydWxlQ3ljbGVzSXJyZWR1Y2libGUgPSBydWxlQ3ljbGVzLmV2ZXJ5KChydWxlQ3ljbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVDeWNsZUlycmVkdWNpYmxlID0gaXNDeWNsZUlycmVkdWNpYmxlKHJ1bGVDeWNsZSwgcnVsZU1hcCk7XG5cbiAgICAgICAgICAgIGlmIChydWxlQ3ljbGVJcnJlZHVjaWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChydWxlQ3ljbGVzSXJyZWR1Y2libGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm9uZSBvZiB0aGUgY3ljbGVzIGluY2x1ZGluZyB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGhhdmUgYSByZWR1Y2VkIHJ1bGUuYCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tUnVsZShSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVzID0gT2JqZWN0LnZhbHVlcyhydWxlTWFwKTsgLy8vXG5cbiAgZmlsdGVyKHJ1bGVzLCAocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVSdWxlID0gKHJ1bGUgaW5zdGFuY2VvZiBSdWxlKTtcblxuICAgIGlmIChydWxlUnVsZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZUxlZnRSZWN1cnNpdmVSdWxlcyIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lc01hcCIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZXMiLCJmb3JFYWNoIiwicnVsZU5hbWUiLCJydWxlIiwicmV3cml0dGVuUnVsZSIsIlJld3JpdHRlblJ1bGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlcyIsInJ1bGVzRnJvbVJ1bGUiLCJEaXJlY3RseVJlcGVhdGVkUnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOb25Db25zdW1pbmciLCJpc1J1bGVOb25Db25zdW1pbmciLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJnZXROYW1lIiwiRXJyb3IiLCJydWxlQ3ljbGVzIiwicnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyIsInJ1bGVDeWNsZXNJcnJlZHVjaWJsZSIsImV2ZXJ5IiwicnVsZUN5Y2xlIiwicnVsZUN5Y2xlSXJyZWR1Y2libGUiLCJpc0N5Y2xlSXJyZWR1Y2libGUiLCJSdWxlIiwicnVsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJydWxlUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUF3QkE7OzsyQkFYTztrRUFFTDtpRUFDTzs4QkFFRTt1QkFDQzs7Ozs7O0FBR3BDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO0FBRWxCLFNBQVNGLDBCQUEwQkcsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDN0UsTUFBTUMsWUFBWUMsSUFBQUEsMEJBQW1CLEVBQUNKO0lBRXRDRyxVQUFVRSxPQUFPLENBQUMsQ0FBQ0M7UUFDakIsSUFBSUMsT0FBT04sT0FBTyxDQUFDSyxTQUFTO1FBRTVCLE1BQU1FLGdCQUFnQkMsa0JBQWEsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1QLFFBQVFDLFNBQVNDO1FBRTdFSyxPQUFPQyxlQUFlLEdBQUc7UUFFekJQLE9BQU8sQ0FBQ0ssU0FBUyxHQUFHQztJQUN0QjtJQUVBLE1BQU1JLHdCQUF3QkMsY0FBY0MsaUJBQW9CLEVBQUVaO0lBRWxFVSxzQkFBc0JOLE9BQU8sQ0FBQyxDQUFDUztRQUM3QixNQUFNQyxtQ0FBbUNDLElBQUFBLGdDQUFrQixFQUFDRixzQkFBc0JiO1FBRWxGLElBQUljLGtDQUFrQztZQUNwQyxNQUFNRSwyQkFBMkJILHFCQUFxQkksT0FBTztZQUU3RCxNQUFNLElBQUlDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRUYseUJBQXlCLHdCQUF3QixDQUFDO1FBQzlGO0lBQ0Y7SUFFQWQsVUFBVUUsT0FBTyxDQUFDLENBQUNDO1FBQ2pCLE1BQU1jLGFBQWFDLElBQUFBLHNDQUErQixFQUFDZixVQUFVTixTQUN2RHNCLHdCQUF3QkYsV0FBV0csS0FBSyxDQUFDLENBQUNDO1lBQ3hDLE1BQU1DLHVCQUF1QkMsSUFBQUEseUJBQWtCLEVBQUNGLFdBQVd2QjtZQUUzRCxJQUFJd0Isc0JBQXNCO2dCQUN4QixPQUFPO1lBQ1Q7UUFDRjtRQUVOLElBQUlILHVCQUF1QjtZQUN6QixNQUFNLElBQUlILE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRWIsU0FBUywyQkFBMkIsQ0FBQztRQUM1RjtJQUNGO0FBQ0Y7QUFFQSxTQUFTTSxjQUFjZSxJQUFJLEVBQUUxQixPQUFPO0lBQ2xDLE1BQU0yQixRQUFRQyxPQUFPQyxNQUFNLENBQUM3QixVQUFVLEdBQUc7SUFFekNILE9BQU84QixPQUFPLENBQUNyQjtRQUNiLE1BQU13QixXQUFZeEIsZ0JBQWdCb0I7UUFFbEMsSUFBSUksVUFBVTtZQUNaLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0g7QUFDVCJ9