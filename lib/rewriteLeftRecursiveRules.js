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
        var directlyRepeatedRuleEffectivelyEmpty = (0, _rule.isRuleEffectivelyEmpty)(directlyRepeatedRule, ruleMap);
        if (directlyRepeatedRuleEffectivelyEmpty) {
            var directlyRepeatedRuleName = directlyRepeatedRule.getName();
            throw new Error("The directly repeated '".concat(directlyRepeatedRuleName, "' rule is effectively empty."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBpc1J1bGVFZmZlY3RpdmVseUVtcHR5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzQ3ljbGVJcnJlZHVjaWJsZSwgcnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jeWNsZVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVMZWZ0UmVjdXJzaXZlUnVsZXMoY3ljbGVzLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZXMoY3ljbGVzKTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUpID0+IHtcbiAgICBsZXQgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdO1xuXG4gICAgY29uc3QgcmV3cml0dGVuUnVsZSA9IFJld3JpdHRlblJ1bGUuZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzLCBydWxlTWFwKTtcblxuICAgIHJ1bGUgPSByZXdyaXR0ZW5SdWxlOyAvLy9cblxuICAgIHJ1bGVNYXBbcnVsZU5hbWVdID0gcnVsZTtcbiAgfSk7XG5cbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVzID0gcnVsZXNGcm9tUnVsZU1hcEFuZFJ1bGUocnVsZU1hcCwgRGlyZWN0bHlSZXBlYXRlZFJ1bGUpO1xuXG4gIGRpcmVjdGx5UmVwZWF0ZWRSdWxlcy5mb3JFYWNoKChkaXJlY3RseVJlcGVhdGVkUnVsZSkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlRWZmZWN0aXZlbHlFbXB0eSA9IGlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkoZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKGRpcmVjdGx5UmVwZWF0ZWRSdWxlRWZmZWN0aXZlbHlFbXB0eSkge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkaXJlY3RseSByZXBlYXRlZCAnJHtkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWV9JyBydWxlIGlzIGVmZmVjdGl2ZWx5IGVtcHR5LmApO1xuICAgIH1cbiAgfSk7XG5cbiAgcnVsZU5hbWVzLmZvckVhY2goKHJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgcnVsZUN5Y2xlcyA9IHJ1bGVDeWNsZXNGcm9tUnVsZU5hbWVBbmRDeWNsZXMocnVsZU5hbWUsIGN5Y2xlcyksXG4gICAgICAgICAgcnVsZUN5Y2xlc0lycmVkdWNpYmxlID0gcnVsZUN5Y2xlcy5ldmVyeSgocnVsZUN5Y2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlQ3ljbGVJcnJlZHVjaWJsZSA9IGlzQ3ljbGVJcnJlZHVjaWJsZShydWxlQ3ljbGUsIHJ1bGVNYXApO1xuXG4gICAgICAgICAgICBpZiAocnVsZUN5Y2xlSXJyZWR1Y2libGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAocnVsZUN5Y2xlc0lycmVkdWNpYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vbmUgb2YgdGhlIGN5Y2xlcyBpbmNsdWRpbmcgdGhlICcke3J1bGVOYW1lfScgcnVsZSBoYXZlIGEgcmVkdWNlZCBydWxlLmApO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVJ1bGVNYXBBbmRSdWxlKHJ1bGVNYXAsIFJ1bGUpIHtcbiAgY29uc3QgcnVsZXMgPSBPYmplY3QudmFsdWVzKHJ1bGVNYXApOyAvLy9cblxuICBmaWx0ZXIocnVsZXMsIChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZVJ1bGUgPSAocnVsZSBpbnN0YW5jZW9mIFJ1bGUpO1xuXG4gICAgaWYgKHJ1bGVSdWxlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJjeWNsZXMiLCJydWxlTWFwIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlcyIsImZvckVhY2giLCJydWxlTmFtZSIsInJ1bGUiLCJyZXdyaXR0ZW5SdWxlIiwiUmV3cml0dGVuUnVsZSIsImZyb21SdWxlQW5kQ3ljbGVzIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVzIiwicnVsZXNGcm9tUnVsZU1hcEFuZFJ1bGUiLCJEaXJlY3RseVJlcGVhdGVkUnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVFZmZlY3RpdmVseUVtcHR5IiwiaXNSdWxlRWZmZWN0aXZlbHlFbXB0eSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImdldE5hbWUiLCJFcnJvciIsInJ1bGVDeWNsZXMiLCJydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwicnVsZUN5Y2xlc0lycmVkdWNpYmxlIiwiZXZlcnkiLCJydWxlQ3ljbGUiLCJydWxlQ3ljbGVJcnJlZHVjaWJsZSIsImlzQ3ljbGVJcnJlZHVjaWJsZSIsIlJ1bGUiLCJydWxlcyIsIk9iamVjdCIsInZhbHVlcyIsInJ1bGVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQXdCQTs7O3lCQVhPO2dFQUVMOytEQUNPO3lCQUVHO29CQUNHO3FCQUM2Qjs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLFNBQVNELDBCQUEwQkcsTUFBTSxFQUFFQyxPQUFPO0lBQy9ELElBQU1DLFlBQVlDLElBQUFBLDhCQUFtQixFQUFDSDtJQUV0Q0UsVUFBVUUsT0FBTyxDQUFDLFNBQUNDO1FBQ2pCLElBQUlDLE9BQU9MLE9BQU8sQ0FBQ0ksU0FBUztRQUU1QixJQUFNRSxnQkFBZ0JDLGtCQUFhLENBQUNDLGlCQUFpQixDQUFDSCxNQUFNTixRQUFRQztRQUVwRUssT0FBT0MsZUFBZSxHQUFHO1FBRXpCTixPQUFPLENBQUNJLFNBQVMsR0FBR0M7SUFDdEI7SUFFQSxJQUFNSSx3QkFBd0JDLHdCQUF3QlYsU0FBU1csaUJBQW9CO0lBRW5GRixzQkFBc0JOLE9BQU8sQ0FBQyxTQUFDUztRQUM3QixJQUFNQyx1Q0FBdUNDLElBQUFBLDRCQUFzQixFQUFDRixzQkFBc0JaO1FBRTFGLElBQUlhLHNDQUFzQztZQUN4QyxJQUFNRSwyQkFBMkJILHFCQUFxQkksT0FBTztZQUU3RCxNQUFNLElBQUlDLE1BQU0sQUFBQywwQkFBa0QsT0FBekJGLDBCQUF5QjtRQUNyRTtJQUNGO0lBRUFkLFVBQVVFLE9BQU8sQ0FBQyxTQUFDQztRQUNqQixJQUFNYyxhQUFhQyxJQUFBQSxzQ0FBK0IsRUFBQ2YsVUFBVUwsU0FDdkRxQix3QkFBd0JGLFdBQVdHLEtBQUssQ0FBQyxTQUFDQztZQUN4QyxJQUFNQyx1QkFBdUJDLElBQUFBLHlCQUFrQixFQUFDRixXQUFXdEI7WUFFM0QsSUFBSXVCLHNCQUFzQjtnQkFDeEIsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJSCx1QkFBdUI7WUFDekIsTUFBTSxJQUFJSCxNQUFNLEFBQUMscUNBQTZDLE9BQVRiLFVBQVM7UUFDaEU7SUFDRjtBQUNGO0FBRUEsU0FBU00sd0JBQXdCVixPQUFPLEVBQUV5QixJQUFJO0lBQzVDLElBQU1DLFFBQVFDLE9BQU9DLE1BQU0sQ0FBQzVCLFVBQVUsR0FBRztJQUV6Q0gsT0FBTzZCLE9BQU8sU0FBQ3JCO1FBQ2IsSUFBTXdCLFdBQVl4QixBQUFJLFlBQUpBLE1BQWdCb0I7UUFFbEMsSUFBSUksVUFBVTtZQUNaLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0g7QUFDVCJ9