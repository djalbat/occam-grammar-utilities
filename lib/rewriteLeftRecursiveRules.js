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
var _necessary = require("necessary");
var _rewritten = /*#__PURE__*/ _interop_require_default(require("./rule/rewritten"));
var _directly = /*#__PURE__*/ _interop_require_default(require("./rule/repeated/directly"));
var _nonConsuming = require("./utilities/nonConsuming");
var _cycle = require("./utilities/cycle");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var filter = _necessary.arrayUtilities.filter;
function rewriteLeftRecursiveRules(cycles, ruleMap, ruleNamesMap) {
    var ruleNames = (0, _cycle.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName];
        var rewrittenRule = _rewritten.default.fromRuleAndCycles(rule, cycles, ruleMap, ruleNamesMap);
        rule = rewrittenRule; ///
        ruleMap[ruleName] = rule;
    });
    var directlyRepeatedRules = rulesFromRule(_directly.default, ruleMap);
    directlyRepeatedRules.forEach(function(directlyRepeatedRule) {
        var directlyRepeatedRuleNonConsuming = (0, _nonConsuming.isRuleNonConsuming)(directlyRepeatedRule, ruleMap);
        if (directlyRepeatedRuleNonConsuming) {
            var directlyRepeatedRuleName = directlyRepeatedRule.getName();
            throw new Error("The directly repeated '".concat(directlyRepeatedRuleName, "' rule is non-consuming."));
        }
    });
    ruleNames.forEach(function(ruleName) {
        var ruleCycles = (0, _cycle.ruleCyclesFromRuleNameAndCycles)(ruleName, cycles), ruleCyclesIrreducible = ruleCycles.every(function(ruleCycle) {
            var ruleCycleIrreducible = (0, _cycle.isCycleIrreducible)(ruleCycle, ruleMap);
            if (ruleCycleIrreducible) {
                return true;
            }
        });
        if (ruleCyclesIrreducible) {
            throw new Error("None of the cycles including the '".concat(ruleName, "' rule have a reduced rule."));
        }
    });
}
function rulesFromRule(Rule, ruleMap) {
    var rules = Object.values(ruleMap); ///
    filter(rules, function(rule) {
        var ruleRule = _instanceof(rule, Rule);
        if (ruleRule) {
            return true;
        }
    });
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzUnVsZU5vbkNvbnN1bWluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub25Db25zdW1pbmdcIjtcbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY3ljbGVcIjtcbmltcG9ydCB7IGlzQ3ljbGVJcnJlZHVjaWJsZSwgcnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jeWNsZVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVMZWZ0UmVjdXJzaXZlUnVsZXMoY3ljbGVzLCBydWxlTWFwLCBydWxlTmFtZXNNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlcyhjeWNsZXMpO1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGxldCBydWxlID0gcnVsZU1hcFtydWxlTmFtZV07XG5cbiAgICBjb25zdCByZXdyaXR0ZW5SdWxlID0gUmV3cml0dGVuUnVsZS5mcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMsIHJ1bGVNYXAsIHJ1bGVOYW1lc01hcCk7XG5cbiAgICBydWxlID0gcmV3cml0dGVuUnVsZTsgLy8vXG5cbiAgICBydWxlTWFwW3J1bGVOYW1lXSA9IHJ1bGU7XG4gIH0pO1xuXG4gIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlcyA9IHJ1bGVzRnJvbVJ1bGUoRGlyZWN0bHlSZXBlYXRlZFJ1bGUsIHJ1bGVNYXApO1xuXG4gIGRpcmVjdGx5UmVwZWF0ZWRSdWxlcy5mb3JFYWNoKChkaXJlY3RseVJlcGVhdGVkUnVsZSkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTm9uQ29uc3VtaW5nID0gaXNSdWxlTm9uQ29uc3VtaW5nKGRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBydWxlTWFwKTtcblxuICAgIGlmIChkaXJlY3RseVJlcGVhdGVkUnVsZU5vbkNvbnN1bWluZykge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkaXJlY3RseSByZXBlYXRlZCAnJHtkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWV9JyBydWxlIGlzIG5vbi1jb25zdW1pbmcuYCk7XG4gICAgfVxuICB9KTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBydWxlQ3ljbGVzID0gcnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKSxcbiAgICAgICAgICBydWxlQ3ljbGVzSXJyZWR1Y2libGUgPSBydWxlQ3ljbGVzLmV2ZXJ5KChydWxlQ3ljbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVDeWNsZUlycmVkdWNpYmxlID0gaXNDeWNsZUlycmVkdWNpYmxlKHJ1bGVDeWNsZSwgcnVsZU1hcCk7XG5cbiAgICAgICAgICAgIGlmIChydWxlQ3ljbGVJcnJlZHVjaWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChydWxlQ3ljbGVzSXJyZWR1Y2libGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm9uZSBvZiB0aGUgY3ljbGVzIGluY2x1ZGluZyB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGhhdmUgYSByZWR1Y2VkIHJ1bGUuYCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tUnVsZShSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVzID0gT2JqZWN0LnZhbHVlcyhydWxlTWFwKTsgLy8vXG5cbiAgZmlsdGVyKHJ1bGVzLCAocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVSdWxlID0gKHJ1bGUgaW5zdGFuY2VvZiBSdWxlKTtcblxuICAgIGlmIChydWxlUnVsZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZUxlZnRSZWN1cnNpdmVSdWxlcyIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lc01hcCIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZXMiLCJmb3JFYWNoIiwicnVsZU5hbWUiLCJydWxlIiwicmV3cml0dGVuUnVsZSIsIlJld3JpdHRlblJ1bGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlcyIsInJ1bGVzRnJvbVJ1bGUiLCJEaXJlY3RseVJlcGVhdGVkUnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOb25Db25zdW1pbmciLCJpc1J1bGVOb25Db25zdW1pbmciLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJnZXROYW1lIiwiRXJyb3IiLCJydWxlQ3ljbGVzIiwicnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyIsInJ1bGVDeWNsZXNJcnJlZHVjaWJsZSIsImV2ZXJ5IiwicnVsZUN5Y2xlIiwicnVsZUN5Y2xlSXJyZWR1Y2libGUiLCJpc0N5Y2xlSXJyZWR1Y2libGUiLCJSdWxlIiwicnVsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJydWxlUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUF3QkE7Ozt5QkFYTztnRUFFTDsrREFDTzs0QkFFRTtxQkFDQzs7Ozs7Ozs7Ozs7OztBQUdwQyxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLFNBQVNELDBCQUEwQkcsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDN0UsSUFBTUMsWUFBWUMsSUFBQUEsMEJBQW1CLEVBQUNKO0lBRXRDRyxVQUFVRSxPQUFPLENBQUMsU0FBQ0M7UUFDakIsSUFBSUMsT0FBT04sT0FBTyxDQUFDSyxTQUFTO1FBRTVCLElBQU1FLGdCQUFnQkMsa0JBQWEsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1QLFFBQVFDLFNBQVNDO1FBRTdFSyxPQUFPQyxlQUFlLEdBQUc7UUFFekJQLE9BQU8sQ0FBQ0ssU0FBUyxHQUFHQztJQUN0QjtJQUVBLElBQU1JLHdCQUF3QkMsY0FBY0MsaUJBQW9CLEVBQUVaO0lBRWxFVSxzQkFBc0JOLE9BQU8sQ0FBQyxTQUFDUztRQUM3QixJQUFNQyxtQ0FBbUNDLElBQUFBLGdDQUFrQixFQUFDRixzQkFBc0JiO1FBRWxGLElBQUljLGtDQUFrQztZQUNwQyxJQUFNRSwyQkFBMkJILHFCQUFxQkksT0FBTztZQUU3RCxNQUFNLElBQUlDLE1BQU0sQUFBQywwQkFBa0QsT0FBekJGLDBCQUF5QjtRQUNyRTtJQUNGO0lBRUFkLFVBQVVFLE9BQU8sQ0FBQyxTQUFDQztRQUNqQixJQUFNYyxhQUFhQyxJQUFBQSxzQ0FBK0IsRUFBQ2YsVUFBVU4sU0FDdkRzQix3QkFBd0JGLFdBQVdHLEtBQUssQ0FBQyxTQUFDQztZQUN4QyxJQUFNQyx1QkFBdUJDLElBQUFBLHlCQUFrQixFQUFDRixXQUFXdkI7WUFFM0QsSUFBSXdCLHNCQUFzQjtnQkFDeEIsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJSCx1QkFBdUI7WUFDekIsTUFBTSxJQUFJSCxNQUFNLEFBQUMscUNBQTZDLE9BQVRiLFVBQVM7UUFDaEU7SUFDRjtBQUNGO0FBRUEsU0FBU00sY0FBY2UsSUFBSSxFQUFFMUIsT0FBTztJQUNsQyxJQUFNMkIsUUFBUUMsT0FBT0MsTUFBTSxDQUFDN0IsVUFBVSxHQUFHO0lBRXpDSCxPQUFPOEIsT0FBTyxTQUFDckI7UUFDYixJQUFNd0IsV0FBWXhCLEFBQUksWUFBSkEsTUFBZ0JvQjtRQUVsQyxJQUFJSSxVQUFVO1lBQ1osT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUIn0=