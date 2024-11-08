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
var _ruleNames = require("./utilities/ruleNames");
var _rule = require("./utilities/rule");
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
function rewriteLeftRecursiveRules(cycles, ruleMap) {
    var ruleNames = (0, _ruleNames.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName];
        var rewrittenRule = _rewritten.default.fromRuleAndCycles(rule, cycles, ruleMap);
        rule = rewrittenRule; ///
        ruleMap[ruleName] = rule;
    });
    var directlyRepeatedRules = rulesFromRuleMapAndRule(ruleMap, _directly.default);
    directlyRepeatedRules.forEach(function(directlyRepeatedRule) {
        var directlyRepeatedRuleNonConsuming = (0, _rule.isRuleNonConsuming)(directlyRepeatedRule, ruleMap);
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
function rulesFromRuleMapAndRule(ruleMap, Rule) {
    var rules = Object.values(ruleMap); ///
    filter(rules, function(rule) {
        var ruleRule = _instanceof(rule, Rule);
        if (ruleRule) {
            return true;
        }
    });
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBpc1J1bGVOb25Db25zdW1pbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZVwiO1xuaW1wb3J0IHsgaXNDeWNsZUlycmVkdWNpYmxlLCBydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2N5Y2xlXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV3cml0ZUxlZnRSZWN1cnNpdmVSdWxlcyhjeWNsZXMsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlcyhjeWNsZXMpO1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGxldCBydWxlID0gcnVsZU1hcFtydWxlTmFtZV07XG5cbiAgICBjb25zdCByZXdyaXR0ZW5SdWxlID0gUmV3cml0dGVuUnVsZS5mcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMsIHJ1bGVNYXApO1xuXG4gICAgcnVsZSA9IHJld3JpdHRlblJ1bGU7IC8vL1xuXG4gICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuICB9KTtcblxuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZXMgPSBydWxlc0Zyb21SdWxlTWFwQW5kUnVsZShydWxlTWFwLCBEaXJlY3RseVJlcGVhdGVkUnVsZSk7XG5cbiAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVzLmZvckVhY2goKGRpcmVjdGx5UmVwZWF0ZWRSdWxlKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOb25Db25zdW1pbmcgPSBpc1J1bGVOb25Db25zdW1pbmcoZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTm9uQ29uc3VtaW5nKSB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRpcmVjdGx5IHJlcGVhdGVkICcke2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZX0nIHJ1bGUgaXMgbm9uLWNvbnN1bWluZy5gKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVDeWNsZXMgPSBydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpLFxuICAgICAgICAgIHJ1bGVDeWNsZXNJcnJlZHVjaWJsZSA9IHJ1bGVDeWNsZXMuZXZlcnkoKHJ1bGVDeWNsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZUN5Y2xlSXJyZWR1Y2libGUgPSBpc0N5Y2xlSXJyZWR1Y2libGUocnVsZUN5Y2xlLCBydWxlTWFwKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVDeWNsZUlycmVkdWNpYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHJ1bGVDeWNsZXNJcnJlZHVjaWJsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb25lIG9mIHRoZSBjeWNsZXMgaW5jbHVkaW5nIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaGF2ZSBhIHJlZHVjZWQgcnVsZS5gKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21SdWxlTWFwQW5kUnVsZShydWxlTWFwLCBSdWxlKSB7XG4gIGNvbnN0IHJ1bGVzID0gT2JqZWN0LnZhbHVlcyhydWxlTWFwKTsgLy8vXG5cbiAgZmlsdGVyKHJ1bGVzLCAocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVSdWxlID0gKHJ1bGUgaW5zdGFuY2VvZiBSdWxlKTtcblxuICAgIGlmIChydWxlUnVsZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZUxlZnRSZWN1cnNpdmVSdWxlcyIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZXMiLCJmb3JFYWNoIiwicnVsZU5hbWUiLCJydWxlIiwicmV3cml0dGVuUnVsZSIsIlJld3JpdHRlblJ1bGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlcyIsInJ1bGVzRnJvbVJ1bGVNYXBBbmRSdWxlIiwiRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTm9uQ29uc3VtaW5nIiwiaXNSdWxlTm9uQ29uc3VtaW5nIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZ2V0TmFtZSIsIkVycm9yIiwicnVsZUN5Y2xlcyIsInJ1bGVDeWNsZXNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJydWxlQ3ljbGVzSXJyZWR1Y2libGUiLCJldmVyeSIsInJ1bGVDeWNsZSIsInJ1bGVDeWNsZUlycmVkdWNpYmxlIiwiaXNDeWNsZUlycmVkdWNpYmxlIiwiUnVsZSIsInJ1bGVzIiwiT2JqZWN0IiwidmFsdWVzIiwicnVsZVJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBd0JBOzs7eUJBWE87Z0VBRUw7K0RBQ087eUJBRUc7b0JBQ0Q7cUJBQ2lDOzs7Ozs7Ozs7Ozs7O0FBRXBFLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sU0FBU0QsMEJBQTBCRyxNQUFNLEVBQUVDLE9BQU87SUFDL0QsSUFBTUMsWUFBWUMsSUFBQUEsOEJBQW1CLEVBQUNIO0lBRXRDRSxVQUFVRSxPQUFPLENBQUMsU0FBQ0M7UUFDakIsSUFBSUMsT0FBT0wsT0FBTyxDQUFDSSxTQUFTO1FBRTVCLElBQU1FLGdCQUFnQkMsa0JBQWEsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1OLFFBQVFDO1FBRXBFSyxPQUFPQyxlQUFlLEdBQUc7UUFFekJOLE9BQU8sQ0FBQ0ksU0FBUyxHQUFHQztJQUN0QjtJQUVBLElBQU1JLHdCQUF3QkMsd0JBQXdCVixTQUFTVyxpQkFBb0I7SUFFbkZGLHNCQUFzQk4sT0FBTyxDQUFDLFNBQUNTO1FBQzdCLElBQU1DLG1DQUFtQ0MsSUFBQUEsd0JBQWtCLEVBQUNGLHNCQUFzQlo7UUFFbEYsSUFBSWEsa0NBQWtDO1lBQ3BDLElBQU1FLDJCQUEyQkgscUJBQXFCSSxPQUFPO1lBRTdELE1BQU0sSUFBSUMsTUFBTSxBQUFDLDBCQUFrRCxPQUF6QkYsMEJBQXlCO1FBQ3JFO0lBQ0Y7SUFFQWQsVUFBVUUsT0FBTyxDQUFDLFNBQUNDO1FBQ2pCLElBQU1jLGFBQWFDLElBQUFBLHNDQUErQixFQUFDZixVQUFVTCxTQUN2RHFCLHdCQUF3QkYsV0FBV0csS0FBSyxDQUFDLFNBQUNDO1lBQ3hDLElBQU1DLHVCQUF1QkMsSUFBQUEseUJBQWtCLEVBQUNGLFdBQVd0QjtZQUUzRCxJQUFJdUIsc0JBQXNCO2dCQUN4QixPQUFPO1lBQ1Q7UUFDRjtRQUVOLElBQUlILHVCQUF1QjtZQUN6QixNQUFNLElBQUlILE1BQU0sQUFBQyxxQ0FBNkMsT0FBVGIsVUFBUztRQUNoRTtJQUNGO0FBQ0Y7QUFFQSxTQUFTTSx3QkFBd0JWLE9BQU8sRUFBRXlCLElBQUk7SUFDNUMsSUFBTUMsUUFBUUMsT0FBT0MsTUFBTSxDQUFDNUIsVUFBVSxHQUFHO0lBRXpDSCxPQUFPNkIsT0FBTyxTQUFDckI7UUFDYixJQUFNd0IsV0FBWXhCLEFBQUksWUFBSkEsTUFBZ0JvQjtRQUVsQyxJQUFJSSxVQUFVO1lBQ1osT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUIn0=