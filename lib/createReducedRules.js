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
        var rule = ruleMap[ruleName], reducedRule = _reduced.default.fromRule(rule);
        if (reducedRule !== null) {
            var reducedRuleName = reducedRule.getName();
            ruleMap[reducedRuleName] = reducedRule;
        }
    });
    cycles.forEach(function(cycle) {
        var cycleEmpty = isCycleEmpty(cycle, ruleMap);
        if (cycleEmpty) {
            var ruleNames = cycle, ruleNamesString = ruleNames.join(COMMA_CHARACTER);
            throw new Error("All of the reduced rules in the '".concat(ruleNamesString, "' cycle are empty."));
        }
    });
}
function isCycleEmpty(cycle, ruleMap) {
    var ruleNames = cycle, reducedRules = ruleNames.reduce(function(reducedRules, ruleName) {
        var reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName), reducedRule = ruleMap[reducedRuleName] || null;
        if (reducedRule !== null) {
            reducedRules.push(reducedRule);
        }
        return reducedRules;
    }, []), reducedRulesLength = reducedRules.length, cycleEmpty = reducedRulesLength === 0; ///
    return cycleEmpty;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVSZWR1Y2VkUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi9ydWxlL3JlZHVjZWRcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzRnJvbUN5Y2xlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IENPTU1BX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlZFJ1bGVzKHJ1bGVNYXAsIGRpcmVjdGVkR3JhcGgpIHtcbiAgY29uc3QgY3ljbGVzID0gZGlyZWN0ZWRHcmFwaC5maW5kQ3ljbGVzKCksXG4gICAgICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZXMoY3ljbGVzKTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBSZWR1Y2VkUnVsZS5mcm9tUnVsZShydWxlKTtcblxuICAgIGlmIChyZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW3JlZHVjZWRSdWxlTmFtZV0gPSByZWR1Y2VkUnVsZTtcbiAgICB9XG4gIH0pO1xuXG4gIGN5Y2xlcy5mb3JFYWNoKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IGN5Y2xlRW1wdHkgPSBpc0N5Y2xlRW1wdHkoY3ljbGUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKGN5Y2xlRW1wdHkpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lcyA9IGN5Y2xlLFxuICAgICAgICAgICAgcnVsZU5hbWVzU3RyaW5nID0gcnVsZU5hbWVzLmpvaW4oQ09NTUFfQ0hBUkFDVEVSKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbGwgb2YgdGhlIHJlZHVjZWQgcnVsZXMgaW4gdGhlICcke3J1bGVOYW1lc1N0cmluZ30nIGN5Y2xlIGFyZSBlbXB0eS5gKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0N5Y2xlRW1wdHkoY3ljbGUsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gY3ljbGUsICAvLy9cbiAgICAgICAgcmVkdWNlZFJ1bGVzID0gcnVsZU5hbWVzLnJlZHVjZSgocmVkdWNlZFJ1bGVzLCBydWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICAgICAgcmVkdWNlZFJ1bGUgPSBydWxlTWFwW3JlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgICAgIGlmIChyZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVzLnB1c2gocmVkdWNlZFJ1bGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZWR1Y2VkUnVsZXM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgcmVkdWNlZFJ1bGVzTGVuZ3RoID0gcmVkdWNlZFJ1bGVzLmxlbmd0aCxcbiAgICAgICAgY3ljbGVFbXB0eSA9IChyZWR1Y2VkUnVsZXNMZW5ndGggPT09IDApOyAvLy9cblxuICByZXR1cm4gY3ljbGVFbXB0eTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWR1Y2VkUnVsZXMiLCJDT01NQV9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwicnVsZU1hcCIsImRpcmVjdGVkR3JhcGgiLCJjeWNsZXMiLCJmaW5kQ3ljbGVzIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlcyIsImZvckVhY2giLCJydWxlTmFtZSIsInJ1bGUiLCJyZWR1Y2VkUnVsZSIsIlJlZHVjZWRSdWxlIiwiZnJvbVJ1bGUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJnZXROYW1lIiwiY3ljbGUiLCJjeWNsZUVtcHR5IiwiaXNDeWNsZUVtcHR5IiwicnVsZU5hbWVzU3RyaW5nIiwiam9pbiIsIkVycm9yIiwicmVkdWNlZFJ1bGVzIiwicmVkdWNlIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicHVzaCIsInJlZHVjZWRSdWxlc0xlbmd0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7Ozs4REFUQTt5QkFFRzt5QkFFUzt3QkFDUTs7Ozs7O0FBRTVDLElBQU0sQUFBRUMsa0JBQW9CQyxxQkFBVSxDQUE5QkQ7QUFFTyxTQUFTRCxtQkFBbUJHLE9BQU8sRUFBRUMsYUFBYSxFQUFFO0lBQ2pFLElBQU1DLFNBQVNELGNBQWNFLFVBQVUsSUFDakNDLFlBQVlDLElBQUFBLDhCQUFtQixFQUFDSDtJQUV0Q0UsVUFBVUUsT0FBTyxDQUFDLFNBQUNDLFVBQWE7UUFDOUIsSUFBTUMsT0FBT1IsT0FBTyxDQUFDTyxTQUFTLEVBQ3hCRSxjQUFjQyxnQkFBVyxDQUFDQyxRQUFRLENBQUNIO1FBRXpDLElBQUlDLGdCQUFnQixJQUFJLEVBQUU7WUFDeEIsSUFBTUcsa0JBQWtCSCxZQUFZSSxPQUFPO1lBRTNDYixPQUFPLENBQUNZLGdCQUFnQixHQUFHSDtRQUM3QixDQUFDO0lBQ0g7SUFFQVAsT0FBT0ksT0FBTyxDQUFDLFNBQUNRLE9BQVU7UUFDeEIsSUFBTUMsYUFBYUMsYUFBYUYsT0FBT2Q7UUFFdkMsSUFBSWUsWUFBWTtZQUNkLElBQU1YLFlBQVlVLE9BQ1pHLGtCQUFrQmIsVUFBVWMsSUFBSSxDQUFDcEI7WUFFdkMsTUFBTSxJQUFJcUIsTUFBTSxBQUFDLG9DQUFtRCxPQUFoQkYsaUJBQWdCLHVCQUFxQjtRQUMzRixDQUFDO0lBQ0g7QUFDRjtBQUVBLFNBQVNELGFBQWFGLEtBQUssRUFBRWQsT0FBTyxFQUFFO0lBQ3BDLElBQU1JLFlBQVlVLE9BQ1pNLGVBQWVoQixVQUFVaUIsTUFBTSxDQUFDLFNBQUNELGNBQWNiLFVBQWE7UUFDMUQsSUFBTUssa0JBQWtCVSxJQUFBQSxxQ0FBMkIsRUFBQ2YsV0FDOUNFLGNBQWNULE9BQU8sQ0FBQ1ksZ0JBQWdCLElBQUksSUFBSTtRQUVwRCxJQUFJSCxnQkFBZ0IsSUFBSSxFQUFFO1lBQ3hCVyxhQUFhRyxJQUFJLENBQUNkO1FBQ3BCLENBQUM7UUFFRCxPQUFPVztJQUNULEdBQUcsRUFBRSxHQUNMSSxxQkFBcUJKLGFBQWFLLE1BQU0sRUFDeENWLGFBQWNTLHVCQUF1QixHQUFJLEdBQUc7SUFFbEQsT0FBT1Q7QUFDVCJ9