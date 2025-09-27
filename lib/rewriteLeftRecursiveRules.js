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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzUnVsZU5vbkNvbnN1bWluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub25Db25zdW1pbmdcIjtcbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY3ljbGVcIjtcbmltcG9ydCB7IGlzQ3ljbGVJcnJlZHVjaWJsZSwgcnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jeWNsZVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVMZWZ0UmVjdXJzaXZlUnVsZXMoY3ljbGVzLCBydWxlTWFwLCBydWxlTmFtZXNNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlcyhjeWNsZXMpO1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGxldCBydWxlID0gcnVsZU1hcFtydWxlTmFtZV07XG5cbiAgICBjb25zdCByZXdyaXR0ZW5SdWxlID0gUmV3cml0dGVuUnVsZS5mcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMsIHJ1bGVNYXAsIHJ1bGVOYW1lc01hcCk7XG5cbiAgICBydWxlID0gcmV3cml0dGVuUnVsZTsgLy8vXG5cbiAgICBydWxlTWFwW3J1bGVOYW1lXSA9IHJ1bGU7XG4gIH0pO1xuXG4gIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlcyA9IHJ1bGVzRnJvbVJ1bGVNYXBBbmRSdWxlKHJ1bGVNYXAsIERpcmVjdGx5UmVwZWF0ZWRSdWxlKTtcblxuICBkaXJlY3RseVJlcGVhdGVkUnVsZXMuZm9yRWFjaCgoZGlyZWN0bHlSZXBlYXRlZFJ1bGUpID0+IHtcbiAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5vbkNvbnN1bWluZyA9IGlzUnVsZU5vbkNvbnN1bWluZyhkaXJlY3RseVJlcGVhdGVkUnVsZSwgcnVsZU1hcCk7XG5cbiAgICBpZiAoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOb25Db25zdW1pbmcpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlLmdldE5hbWUoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGlyZWN0bHkgcmVwZWF0ZWQgJyR7ZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lfScgcnVsZSBpcyBub24tY29uc3VtaW5nLmApO1xuICAgIH1cbiAgfSk7XG5cbiAgcnVsZU5hbWVzLmZvckVhY2goKHJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgcnVsZUN5Y2xlcyA9IHJ1bGVDeWNsZXNGcm9tUnVsZU5hbWVBbmRDeWNsZXMocnVsZU5hbWUsIGN5Y2xlcyksXG4gICAgICAgICAgcnVsZUN5Y2xlc0lycmVkdWNpYmxlID0gcnVsZUN5Y2xlcy5ldmVyeSgocnVsZUN5Y2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlQ3ljbGVJcnJlZHVjaWJsZSA9IGlzQ3ljbGVJcnJlZHVjaWJsZShydWxlQ3ljbGUsIHJ1bGVNYXApO1xuXG4gICAgICAgICAgICBpZiAocnVsZUN5Y2xlSXJyZWR1Y2libGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAocnVsZUN5Y2xlc0lycmVkdWNpYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vbmUgb2YgdGhlIGN5Y2xlcyBpbmNsdWRpbmcgdGhlICcke3J1bGVOYW1lfScgcnVsZSBoYXZlIGEgcmVkdWNlZCBydWxlLmApO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVJ1bGVNYXBBbmRSdWxlKHJ1bGVNYXAsIFJ1bGUpIHtcbiAgY29uc3QgcnVsZXMgPSBPYmplY3QudmFsdWVzKHJ1bGVNYXApOyAvLy9cblxuICBmaWx0ZXIocnVsZXMsIChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZVJ1bGUgPSAocnVsZSBpbnN0YW5jZW9mIFJ1bGUpO1xuXG4gICAgaWYgKHJ1bGVSdWxlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJjeWNsZXMiLCJydWxlTWFwIiwicnVsZU5hbWVzTWFwIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlcyIsImZvckVhY2giLCJydWxlTmFtZSIsInJ1bGUiLCJyZXdyaXR0ZW5SdWxlIiwiUmV3cml0dGVuUnVsZSIsImZyb21SdWxlQW5kQ3ljbGVzIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVzIiwicnVsZXNGcm9tUnVsZU1hcEFuZFJ1bGUiLCJEaXJlY3RseVJlcGVhdGVkUnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOb25Db25zdW1pbmciLCJpc1J1bGVOb25Db25zdW1pbmciLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJnZXROYW1lIiwiRXJyb3IiLCJydWxlQ3ljbGVzIiwicnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyIsInJ1bGVDeWNsZXNJcnJlZHVjaWJsZSIsImV2ZXJ5IiwicnVsZUN5Y2xlIiwicnVsZUN5Y2xlSXJyZWR1Y2libGUiLCJpc0N5Y2xlSXJyZWR1Y2libGUiLCJSdWxlIiwicnVsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJydWxlUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUF3QkE7Ozt5QkFYTztnRUFFTDsrREFDTzs0QkFFRTtxQkFDQzs7Ozs7Ozs7Ozs7OztBQUdwQyxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLFNBQVNELDBCQUEwQkcsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDN0UsSUFBTUMsWUFBWUMsSUFBQUEsMEJBQW1CLEVBQUNKO0lBRXRDRyxVQUFVRSxPQUFPLENBQUMsU0FBQ0M7UUFDakIsSUFBSUMsT0FBT04sT0FBTyxDQUFDSyxTQUFTO1FBRTVCLElBQU1FLGdCQUFnQkMsa0JBQWEsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1QLFFBQVFDLFNBQVNDO1FBRTdFSyxPQUFPQyxlQUFlLEdBQUc7UUFFekJQLE9BQU8sQ0FBQ0ssU0FBUyxHQUFHQztJQUN0QjtJQUVBLElBQU1JLHdCQUF3QkMsd0JBQXdCWCxTQUFTWSxpQkFBb0I7SUFFbkZGLHNCQUFzQk4sT0FBTyxDQUFDLFNBQUNTO1FBQzdCLElBQU1DLG1DQUFtQ0MsSUFBQUEsZ0NBQWtCLEVBQUNGLHNCQUFzQmI7UUFFbEYsSUFBSWMsa0NBQWtDO1lBQ3BDLElBQU1FLDJCQUEyQkgscUJBQXFCSSxPQUFPO1lBRTdELE1BQU0sSUFBSUMsTUFBTSxBQUFDLDBCQUFrRCxPQUF6QkYsMEJBQXlCO1FBQ3JFO0lBQ0Y7SUFFQWQsVUFBVUUsT0FBTyxDQUFDLFNBQUNDO1FBQ2pCLElBQU1jLGFBQWFDLElBQUFBLHNDQUErQixFQUFDZixVQUFVTixTQUN2RHNCLHdCQUF3QkYsV0FBV0csS0FBSyxDQUFDLFNBQUNDO1lBQ3hDLElBQU1DLHVCQUF1QkMsSUFBQUEseUJBQWtCLEVBQUNGLFdBQVd2QjtZQUUzRCxJQUFJd0Isc0JBQXNCO2dCQUN4QixPQUFPO1lBQ1Q7UUFDRjtRQUVOLElBQUlILHVCQUF1QjtZQUN6QixNQUFNLElBQUlILE1BQU0sQUFBQyxxQ0FBNkMsT0FBVGIsVUFBUztRQUNoRTtJQUNGO0FBQ0Y7QUFFQSxTQUFTTSx3QkFBd0JYLE9BQU8sRUFBRTBCLElBQUk7SUFDNUMsSUFBTUMsUUFBUUMsT0FBT0MsTUFBTSxDQUFDN0IsVUFBVSxHQUFHO0lBRXpDSCxPQUFPOEIsT0FBTyxTQUFDckI7UUFDYixJQUFNd0IsV0FBWXhCLEFBQUksWUFBSkEsTUFBZ0JvQjtRQUVsQyxJQUFJSSxVQUFVO1lBQ1osT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUIn0=