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
var _ruleName = require("./utilities/ruleName");
var _ruleNames = require("./utilities/ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createReducedRules(cycles, ruleMap) {
    var ruleNames = (0, _ruleNames.ruleNamesFromCycles)(cycles);
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
            var cycleString = -cycle.asString();
            throw new Error("All of the reduced rules in the '".concat(cycleString, "' cycle are missing."));
        }
    });
}
function areReducedRulesMissing(cycle, ruleMap) {
    var ruleNames = (0, _ruleNames.ruleNamesFromCycle)(cycle), reducedRules = ruleNames.reduce(function(reducedRules, ruleName) {
        var reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName), reducedRule = ruleMap[reducedRuleName] || null;
        if (reducedRule !== null) {
            reducedRules.push(reducedRule);
        }
        return reducedRules;
    }, []), reducedRulesLength = reducedRules.length, reducedRulesMissing = reducedRulesLength === 0; ///
    return reducedRulesMissing;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVSZWR1Y2VkUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi9ydWxlL3JlZHVjZWRcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tQ3ljbGUsIHJ1bGVOYW1lc0Zyb21DeWNsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZWRSdWxlcyhjeWNsZXMsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlcyhjeWNsZXMpO1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IFJlZHVjZWRSdWxlLmZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcyk7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlLmdldE5hbWUoKTtcblxuICAgICAgcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdID0gcmVkdWNlZFJ1bGU7XG4gICAgfVxuICB9KTtcblxuICBjeWNsZXMuZm9yRWFjaCgoY3ljbGUpID0+IHtcbiAgICBjb25zdCByZWR1Y2VkUnVsZXNNaXNzaW5nID0gYXJlUmVkdWNlZFJ1bGVzTWlzc2luZyhjeWNsZSwgcnVsZU1hcCk7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGVzTWlzc2luZykge1xuICAgICAgY29uc3QgY3ljbGVTdHJpbmcgPS0gY3ljbGUuYXNTdHJpbmcoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbGwgb2YgdGhlIHJlZHVjZWQgcnVsZXMgaW4gdGhlICcke2N5Y2xlU3RyaW5nfScgY3ljbGUgYXJlIG1pc3NpbmcuYCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYXJlUmVkdWNlZFJ1bGVzTWlzc2luZyhjeWNsZSwgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUpLFxuICAgICAgICByZWR1Y2VkUnVsZXMgPSBydWxlTmFtZXMucmVkdWNlKChyZWR1Y2VkUnVsZXMsIHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgICAgICByZWR1Y2VkUnVsZSA9IHJ1bGVNYXBbcmVkdWNlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICAgICAgaWYgKHJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZWR1Y2VkUnVsZXMucHVzaChyZWR1Y2VkUnVsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlZHVjZWRSdWxlcztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICByZWR1Y2VkUnVsZXNMZW5ndGggPSByZWR1Y2VkUnVsZXMubGVuZ3RoLFxuICAgICAgICByZWR1Y2VkUnVsZXNNaXNzaW5nID0gKHJlZHVjZWRSdWxlc0xlbmd0aCA9PT0gMCk7IC8vL1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZXNNaXNzaW5nO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlZHVjZWRSdWxlcyIsImN5Y2xlcyIsInJ1bGVNYXAiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGVzIiwiZm9yRWFjaCIsInJ1bGVOYW1lIiwicnVsZSIsInJlZHVjZWRSdWxlIiwiUmVkdWNlZFJ1bGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsInJlZHVjZWRSdWxlTmFtZSIsImdldE5hbWUiLCJjeWNsZSIsInJlZHVjZWRSdWxlc01pc3NpbmciLCJhcmVSZWR1Y2VkUnVsZXNNaXNzaW5nIiwiY3ljbGVTdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwicnVsZU5hbWVzRnJvbUN5Y2xlIiwicmVkdWNlZFJ1bGVzIiwicmVkdWNlIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicHVzaCIsInJlZHVjZWRSdWxlc0xlbmd0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7Ozs4REFMQTt3QkFFb0I7eUJBQ1k7Ozs7OztBQUV6QyxTQUFTQSxtQkFBbUJDLE1BQU0sRUFBRUMsT0FBTztJQUN4RCxJQUFNQyxZQUFZQyxJQUFBQSw4QkFBbUIsRUFBQ0g7SUFFdENFLFVBQVVFLE9BQU8sQ0FBQyxTQUFDQztRQUNqQixJQUFNQyxPQUFPTCxPQUFPLENBQUNJLFNBQVMsRUFDeEJFLGNBQWNDLGdCQUFXLENBQUNDLGlCQUFpQixDQUFDSCxNQUFNTjtRQUV4RCxJQUFJTyxnQkFBZ0IsTUFBTTtZQUN4QixJQUFNRyxrQkFBa0JILFlBQVlJLE9BQU87WUFFM0NWLE9BQU8sQ0FBQ1MsZ0JBQWdCLEdBQUdIO1FBQzdCO0lBQ0Y7SUFFQVAsT0FBT0ksT0FBTyxDQUFDLFNBQUNRO1FBQ2QsSUFBTUMsc0JBQXNCQyx1QkFBdUJGLE9BQU9YO1FBRTFELElBQUlZLHFCQUFxQjtZQUN2QixJQUFNRSxjQUFhLENBQUVILE1BQU1JLFFBQVE7WUFFbkMsTUFBTSxJQUFJQyxNQUFNLEFBQUMsb0NBQStDLE9BQVpGLGFBQVk7UUFDbEU7SUFDRjtBQUNGO0FBRUEsU0FBU0QsdUJBQXVCRixLQUFLLEVBQUVYLE9BQU87SUFDNUMsSUFBTUMsWUFBWWdCLElBQUFBLDZCQUFrQixFQUFDTixRQUMvQk8sZUFBZWpCLFVBQVVrQixNQUFNLENBQUMsU0FBQ0QsY0FBY2Q7UUFDN0MsSUFBTUssa0JBQWtCVyxJQUFBQSxxQ0FBMkIsRUFBQ2hCLFdBQzlDRSxjQUFjTixPQUFPLENBQUNTLGdCQUFnQixJQUFJO1FBRWhELElBQUlILGdCQUFnQixNQUFNO1lBQ3hCWSxhQUFhRyxJQUFJLENBQUNmO1FBQ3BCO1FBRUEsT0FBT1k7SUFDVCxHQUFHLEVBQUUsR0FDTEkscUJBQXFCSixhQUFhSyxNQUFNLEVBQ3hDWCxzQkFBdUJVLHVCQUF1QixHQUFJLEdBQUc7SUFFM0QsT0FBT1Y7QUFDVCJ9