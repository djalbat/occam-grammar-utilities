"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isCycleIrreducible: function() {
        return isCycleIrreducible;
    },
    ruleCyclesFromRuleNameAndCycles: function() {
        return ruleCyclesFromRuleNameAndCycles;
    }
});
var _ruleNames = require("../utilities/ruleNames");
var _ruleName = require("../utilities/ruleName");
function isCycleIrreducible(cycle, ruleMap) {
    var ruleNames = (0, _ruleNames.ruleNamesFromCycle)(cycle), reducedRules = ruleNames.reduce(function(reducedRules, ruleName) {
        var reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName), reducedRule = ruleMap[reducedRuleName] || null;
        if (reducedRule !== null) {
            reducedRules.push(reducedRule);
        }
        return reducedRules;
    }, []), reducedRulesLength = reducedRules.length, cycleIrreducible = reducedRulesLength === 0; ///
    return cycleIrreducible;
}
function ruleCyclesFromRuleNameAndCycles(ruleName, cycles) {
    var ruleCycles = cycles.reduce(function(ruleCycles, cycle) {
        var ruleNames = (0, _ruleNames.ruleNamesFromCycle)(cycle), ruleNamesIncludeRuleName = ruleNames.includes(ruleName);
        if (ruleNamesIncludeRuleName) {
            var ruleCycle = cycle; ///
            ruleCycles.push(ruleCycle);
        }
        return ruleCycles;
    }, []);
    return ruleCycles;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3ljbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0N5Y2xlSXJyZWR1Y2libGUoY3ljbGUsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgcmVkdWNlZFJ1bGVzID0gcnVsZU5hbWVzLnJlZHVjZSgocmVkdWNlZFJ1bGVzLCBydWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICAgICAgcmVkdWNlZFJ1bGUgPSBydWxlTWFwW3JlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgICAgIGlmIChyZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlZHVjZWRSdWxlcy5wdXNoKHJlZHVjZWRSdWxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVkdWNlZFJ1bGVzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHJlZHVjZWRSdWxlc0xlbmd0aCA9IHJlZHVjZWRSdWxlcy5sZW5ndGgsXG4gICAgICAgIGN5Y2xlSXJyZWR1Y2libGUgPSAocmVkdWNlZFJ1bGVzTGVuZ3RoID09PSAwKTsgLy8vXG5cbiAgcmV0dXJuIGN5Y2xlSXJyZWR1Y2libGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpIHtcbiAgY29uc3QgcnVsZUN5Y2xlcyA9IGN5Y2xlcy5yZWR1Y2UoKHJ1bGVDeWNsZXMsIGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZUN5Y2xlID0gY3ljbGU7ICAvLy9cblxuICAgICAgcnVsZUN5Y2xlcy5wdXNoKHJ1bGVDeWNsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVDeWNsZXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcnVsZUN5Y2xlcztcbn1cbiJdLCJuYW1lcyI6WyJpc0N5Y2xlSXJyZWR1Y2libGUiLCJydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwiY3ljbGUiLCJydWxlTWFwIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlIiwicmVkdWNlZFJ1bGVzIiwicmVkdWNlIiwicnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZSIsInB1c2giLCJyZWR1Y2VkUnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJjeWNsZUlycmVkdWNpYmxlIiwiY3ljbGVzIiwicnVsZUN5Y2xlcyIsInJ1bGVOYW1lc0luY2x1ZGVSdWxlTmFtZSIsImluY2x1ZGVzIiwicnVsZUN5Y2xlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFLZ0JBLGtCQUFrQjtlQUFsQkE7O0lBa0JBQywrQkFBK0I7ZUFBL0JBOzs7eUJBckJtQjt3QkFDUztBQUVyQyxTQUFTRCxtQkFBbUJFLEtBQUssRUFBRUMsT0FBTztJQUMvQyxJQUFNQyxZQUFZQyxJQUFBQSw2QkFBa0IsRUFBQ0gsUUFDL0JJLGVBQWVGLFVBQVVHLE1BQU0sQ0FBQyxTQUFDRCxjQUFjRTtRQUM3QyxJQUFNQyxrQkFBa0JDLElBQUFBLHFDQUEyQixFQUFDRixXQUM5Q0csY0FBY1IsT0FBTyxDQUFDTSxnQkFBZ0IsSUFBSTtRQUVoRCxJQUFJRSxnQkFBZ0IsTUFBTTtZQUMxQkwsYUFBYU0sSUFBSSxDQUFDRDtRQUNsQjtRQUVBLE9BQU9MO0lBQ1QsR0FBRyxFQUFFLEdBQ0xPLHFCQUFxQlAsYUFBYVEsTUFBTSxFQUN4Q0MsbUJBQW9CRix1QkFBdUIsR0FBSSxHQUFHO0lBRXhELE9BQU9FO0FBQ1Q7QUFFTyxTQUFTZCxnQ0FBZ0NPLFFBQVEsRUFBRVEsTUFBTTtJQUM5RCxJQUFNQyxhQUFhRCxPQUFPVCxNQUFNLENBQUMsU0FBQ1UsWUFBWWY7UUFDNUMsSUFBTUUsWUFBWUMsSUFBQUEsNkJBQWtCLEVBQUNILFFBQy9CZ0IsMkJBQTJCZCxVQUFVZSxRQUFRLENBQUNYO1FBRXBELElBQUlVLDBCQUEwQjtZQUM1QixJQUFNRSxZQUFZbEIsT0FBUSxHQUFHO1lBRTdCZSxXQUFXTCxJQUFJLENBQUNRO1FBQ2xCO1FBRUEsT0FBT0g7SUFDVCxHQUFHLEVBQUU7SUFFTCxPQUFPQTtBQUNUIn0=