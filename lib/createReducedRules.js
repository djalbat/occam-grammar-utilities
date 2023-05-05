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
var _necessary = require("necessary");
var _ruleNames = require("./utilities/ruleNames");
var _ruleName = require("./utilities/ruleName");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var COMMA_CHARACTER = _necessary.characters.COMMA_CHARACTER;
function createReducedRules(ruleMap, directedGraph) {
    var cycles = directedGraph.findCycles(), ruleNames = (0, _ruleNames.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName], reducedRule = _reduced.default.fromRuleAndCycles(rule, cycles);
        if (reducedRule !== null) {
            var reducedRuleName = reducedRule.getName();
            ruleMap[reducedRuleName] = reducedRule;
        }
    });
    cycles.forEach(function(cycle) {
        var reducedRulesMissing = areReducedRulesMissing(cycle, ruleMap);
        if (reducedRulesMissing) {
            var ruleNames = cycle, ruleNamesString = ruleNames.join(COMMA_CHARACTER);
            throw new Error("All of the reduced rules in the '".concat(ruleNamesString, "' cycle are missing."));
        }
    });
}
function areReducedRulesMissing(cycle, ruleMap) {
    var ruleNames = cycle, reducedRules = ruleNames.reduce(function(reducedRules, ruleName) {
        var reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName), reducedRule = ruleMap[reducedRuleName] || null;
        if (reducedRule !== null) {
            reducedRules.push(reducedRule);
        }
        return reducedRules;
    }, []), reducedRulesLength = reducedRules.length, reducedRulesMissing = reducedRulesLength === 0; ///
    return reducedRulesMissing;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVSZWR1Y2VkUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi9ydWxlL3JlZHVjZWRcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzRnJvbUN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IENPTU1BX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlZFJ1bGVzKHJ1bGVNYXAsIGRpcmVjdGVkR3JhcGgpIHtcbiAgY29uc3QgY3ljbGVzID0gZGlyZWN0ZWRHcmFwaC5maW5kQ3ljbGVzKCksXG4gICAgICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZXMoY3ljbGVzKTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBSZWR1Y2VkUnVsZS5mcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHJ1bGVNYXBbcmVkdWNlZFJ1bGVOYW1lXSA9IHJlZHVjZWRSdWxlO1xuICAgIH1cbiAgfSk7XG5cbiAgY3ljbGVzLmZvckVhY2goKGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgcmVkdWNlZFJ1bGVzTWlzc2luZyA9IGFyZVJlZHVjZWRSdWxlc01pc3NpbmcoY3ljbGUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlc01pc3NpbmcpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lcyA9IGN5Y2xlLFxuICAgICAgICAgICAgcnVsZU5hbWVzU3RyaW5nID0gcnVsZU5hbWVzLmpvaW4oQ09NTUFfQ0hBUkFDVEVSKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbGwgb2YgdGhlIHJlZHVjZWQgcnVsZXMgaW4gdGhlICcke3J1bGVOYW1lc1N0cmluZ30nIGN5Y2xlIGFyZSBtaXNzaW5nLmApO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFyZVJlZHVjZWRSdWxlc01pc3NpbmcoY3ljbGUsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gY3ljbGUsICAvLy9cbiAgICAgICAgcmVkdWNlZFJ1bGVzID0gcnVsZU5hbWVzLnJlZHVjZSgocmVkdWNlZFJ1bGVzLCBydWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICAgICAgcmVkdWNlZFJ1bGUgPSBydWxlTWFwW3JlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgICAgIGlmIChyZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVzLnB1c2gocmVkdWNlZFJ1bGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZWR1Y2VkUnVsZXM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgcmVkdWNlZFJ1bGVzTGVuZ3RoID0gcmVkdWNlZFJ1bGVzLmxlbmd0aCxcbiAgICAgICAgcmVkdWNlZFJ1bGVzTWlzc2luZyA9IChyZWR1Y2VkUnVsZXNMZW5ndGggPT09IDApOyAvLy9cblxuICByZXR1cm4gcmVkdWNlZFJ1bGVzTWlzc2luZztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWR1Y2VkUnVsZXMiLCJDT01NQV9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwicnVsZU1hcCIsImRpcmVjdGVkR3JhcGgiLCJjeWNsZXMiLCJmaW5kQ3ljbGVzIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlcyIsImZvckVhY2giLCJydWxlTmFtZSIsInJ1bGUiLCJyZWR1Y2VkUnVsZSIsIlJlZHVjZWRSdWxlIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJyZWR1Y2VkUnVsZU5hbWUiLCJnZXROYW1lIiwiY3ljbGUiLCJyZWR1Y2VkUnVsZXNNaXNzaW5nIiwiYXJlUmVkdWNlZFJ1bGVzTWlzc2luZyIsInJ1bGVOYW1lc1N0cmluZyIsImpvaW4iLCJFcnJvciIsInJlZHVjZWRSdWxlcyIsInJlZHVjZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInB1c2giLCJyZWR1Y2VkUnVsZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7OERBVEE7eUJBRUc7eUJBRVM7d0JBQ1E7Ozs7OztBQUU1QyxJQUFNLEFBQUVDLGtCQUFvQkMscUJBQVUsQ0FBOUJEO0FBRU8sU0FBU0QsbUJBQW1CRyxPQUFPLEVBQUVDLGFBQWEsRUFBRTtJQUNqRSxJQUFNQyxTQUFTRCxjQUFjRSxVQUFVLElBQ2pDQyxZQUFZQyxJQUFBQSw4QkFBbUIsRUFBQ0g7SUFFdENFLFVBQVVFLE9BQU8sQ0FBQyxTQUFDQyxVQUFhO1FBQzlCLElBQU1DLE9BQU9SLE9BQU8sQ0FBQ08sU0FBUyxFQUN4QkUsY0FBY0MsZ0JBQVcsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1OO1FBRXhELElBQUlPLGdCQUFnQixJQUFJLEVBQUU7WUFDeEIsSUFBTUcsa0JBQWtCSCxZQUFZSSxPQUFPO1lBRTNDYixPQUFPLENBQUNZLGdCQUFnQixHQUFHSDtRQUM3QixDQUFDO0lBQ0g7SUFFQVAsT0FBT0ksT0FBTyxDQUFDLFNBQUNRLE9BQVU7UUFDeEIsSUFBTUMsc0JBQXNCQyx1QkFBdUJGLE9BQU9kO1FBRTFELElBQUllLHFCQUFxQjtZQUN2QixJQUFNWCxZQUFZVSxPQUNaRyxrQkFBa0JiLFVBQVVjLElBQUksQ0FBQ3BCO1lBRXZDLE1BQU0sSUFBSXFCLE1BQU0sQUFBQyxvQ0FBbUQsT0FBaEJGLGlCQUFnQix5QkFBdUI7UUFDN0YsQ0FBQztJQUNIO0FBQ0Y7QUFFQSxTQUFTRCx1QkFBdUJGLEtBQUssRUFBRWQsT0FBTyxFQUFFO0lBQzlDLElBQU1JLFlBQVlVLE9BQ1pNLGVBQWVoQixVQUFVaUIsTUFBTSxDQUFDLFNBQUNELGNBQWNiLFVBQWE7UUFDMUQsSUFBTUssa0JBQWtCVSxJQUFBQSxxQ0FBMkIsRUFBQ2YsV0FDOUNFLGNBQWNULE9BQU8sQ0FBQ1ksZ0JBQWdCLElBQUksSUFBSTtRQUVwRCxJQUFJSCxnQkFBZ0IsSUFBSSxFQUFFO1lBQ3hCVyxhQUFhRyxJQUFJLENBQUNkO1FBQ3BCLENBQUM7UUFFRCxPQUFPVztJQUNULEdBQUcsRUFBRSxHQUNMSSxxQkFBcUJKLGFBQWFLLE1BQU0sRUFDeENWLHNCQUF1QlMsdUJBQXVCLEdBQUksR0FBRztJQUUzRCxPQUFPVDtBQUNUIn0=