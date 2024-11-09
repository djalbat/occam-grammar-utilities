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
function rewriteLeftRecursiveRules(cycles, ruleMap) {
    var ruleNames = (0, _cycle.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName];
        var rewrittenRule = _rewritten.default.fromRuleAndCycles(rule, cycles, ruleMap);
        rule = rewrittenRule; ///
        ruleMap[ruleName] = rule;
    });
    var directlyRepeatedRules = rulesFromRuleMapAndRule(ruleMap, _directly.default);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzUnVsZU5vbkNvbnN1bWluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub25Db25zdW1pbmdcIjtcbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY3ljbGVcIjtcbmltcG9ydCB7IGlzQ3ljbGVJcnJlZHVjaWJsZSwgcnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jeWNsZVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVMZWZ0UmVjdXJzaXZlUnVsZXMoY3ljbGVzLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZXMoY3ljbGVzKTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUpID0+IHtcbiAgICBsZXQgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdO1xuXG4gICAgY29uc3QgcmV3cml0dGVuUnVsZSA9IFJld3JpdHRlblJ1bGUuZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzLCBydWxlTWFwKTtcblxuICAgIHJ1bGUgPSByZXdyaXR0ZW5SdWxlOyAvLy9cblxuICAgIHJ1bGVNYXBbcnVsZU5hbWVdID0gcnVsZTtcbiAgfSk7XG5cbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVzID0gcnVsZXNGcm9tUnVsZU1hcEFuZFJ1bGUocnVsZU1hcCwgRGlyZWN0bHlSZXBlYXRlZFJ1bGUpO1xuXG4gIGRpcmVjdGx5UmVwZWF0ZWRSdWxlcy5mb3JFYWNoKChkaXJlY3RseVJlcGVhdGVkUnVsZSkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTm9uQ29uc3VtaW5nID0gaXNSdWxlTm9uQ29uc3VtaW5nKGRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBydWxlTWFwKTtcblxuICAgIGlmIChkaXJlY3RseVJlcGVhdGVkUnVsZU5vbkNvbnN1bWluZykge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkaXJlY3RseSByZXBlYXRlZCAnJHtkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWV9JyBydWxlIGlzIG5vbi1jb25zdW1pbmcuYCk7XG4gICAgfVxuICB9KTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBydWxlQ3ljbGVzID0gcnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKSxcbiAgICAgICAgICBydWxlQ3ljbGVzSXJyZWR1Y2libGUgPSBydWxlQ3ljbGVzLmV2ZXJ5KChydWxlQ3ljbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVDeWNsZUlycmVkdWNpYmxlID0gaXNDeWNsZUlycmVkdWNpYmxlKHJ1bGVDeWNsZSwgcnVsZU1hcCk7XG5cbiAgICAgICAgICAgIGlmIChydWxlQ3ljbGVJcnJlZHVjaWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChydWxlQ3ljbGVzSXJyZWR1Y2libGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm9uZSBvZiB0aGUgY3ljbGVzIGluY2x1ZGluZyB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGhhdmUgYSByZWR1Y2VkIHJ1bGUuYCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tUnVsZU1hcEFuZFJ1bGUocnVsZU1hcCwgUnVsZSkge1xuICBjb25zdCBydWxlcyA9IE9iamVjdC52YWx1ZXMocnVsZU1hcCk7IC8vL1xuXG4gIGZpbHRlcihydWxlcywgKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlUnVsZSA9IChydWxlIGluc3RhbmNlb2YgUnVsZSk7XG5cbiAgICBpZiAocnVsZVJ1bGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVMZWZ0UmVjdXJzaXZlUnVsZXMiLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImN5Y2xlcyIsInJ1bGVNYXAiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGVzIiwiZm9yRWFjaCIsInJ1bGVOYW1lIiwicnVsZSIsInJld3JpdHRlblJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJkaXJlY3RseVJlcGVhdGVkUnVsZXMiLCJydWxlc0Zyb21SdWxlTWFwQW5kUnVsZSIsIkRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5vbkNvbnN1bWluZyIsImlzUnVsZU5vbkNvbnN1bWluZyIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImdldE5hbWUiLCJFcnJvciIsInJ1bGVDeWNsZXMiLCJydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwicnVsZUN5Y2xlc0lycmVkdWNpYmxlIiwiZXZlcnkiLCJydWxlQ3ljbGUiLCJydWxlQ3ljbGVJcnJlZHVjaWJsZSIsImlzQ3ljbGVJcnJlZHVjaWJsZSIsIlJ1bGUiLCJydWxlcyIsIk9iamVjdCIsInZhbHVlcyIsInJ1bGVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQXdCQTs7O3lCQVhPO2dFQUVMOytEQUNPOzRCQUVFO3FCQUNDOzs7Ozs7Ozs7Ozs7O0FBR3BDLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sU0FBU0QsMEJBQTBCRyxNQUFNLEVBQUVDLE9BQU87SUFDL0QsSUFBTUMsWUFBWUMsSUFBQUEsMEJBQW1CLEVBQUNIO0lBRXRDRSxVQUFVRSxPQUFPLENBQUMsU0FBQ0M7UUFDakIsSUFBSUMsT0FBT0wsT0FBTyxDQUFDSSxTQUFTO1FBRTVCLElBQU1FLGdCQUFnQkMsa0JBQWEsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1OLFFBQVFDO1FBRXBFSyxPQUFPQyxlQUFlLEdBQUc7UUFFekJOLE9BQU8sQ0FBQ0ksU0FBUyxHQUFHQztJQUN0QjtJQUVBLElBQU1JLHdCQUF3QkMsd0JBQXdCVixTQUFTVyxpQkFBb0I7SUFFbkZGLHNCQUFzQk4sT0FBTyxDQUFDLFNBQUNTO1FBQzdCLElBQU1DLG1DQUFtQ0MsSUFBQUEsZ0NBQWtCLEVBQUNGLHNCQUFzQlo7UUFFbEYsSUFBSWEsa0NBQWtDO1lBQ3BDLElBQU1FLDJCQUEyQkgscUJBQXFCSSxPQUFPO1lBRTdELE1BQU0sSUFBSUMsTUFBTSxBQUFDLDBCQUFrRCxPQUF6QkYsMEJBQXlCO1FBQ3JFO0lBQ0Y7SUFFQWQsVUFBVUUsT0FBTyxDQUFDLFNBQUNDO1FBQ2pCLElBQU1jLGFBQWFDLElBQUFBLHNDQUErQixFQUFDZixVQUFVTCxTQUN2RHFCLHdCQUF3QkYsV0FBV0csS0FBSyxDQUFDLFNBQUNDO1lBQ3hDLElBQU1DLHVCQUF1QkMsSUFBQUEseUJBQWtCLEVBQUNGLFdBQVd0QjtZQUUzRCxJQUFJdUIsc0JBQXNCO2dCQUN4QixPQUFPO1lBQ1Q7UUFDRjtRQUVOLElBQUlILHVCQUF1QjtZQUN6QixNQUFNLElBQUlILE1BQU0sQUFBQyxxQ0FBNkMsT0FBVGIsVUFBUztRQUNoRTtJQUNGO0FBQ0Y7QUFFQSxTQUFTTSx3QkFBd0JWLE9BQU8sRUFBRXlCLElBQUk7SUFDNUMsSUFBTUMsUUFBUUMsT0FBT0MsTUFBTSxDQUFDNUIsVUFBVSxHQUFHO0lBRXpDSCxPQUFPNkIsT0FBTyxTQUFDckI7UUFDYixJQUFNd0IsV0FBWXhCLEFBQUksWUFBSkEsTUFBZ0JvQjtRQUVsQyxJQUFJSSxVQUFVO1lBQ1osT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUIn0=