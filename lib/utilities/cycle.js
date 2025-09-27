"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get isCycleIrreducible () {
        return isCycleIrreducible;
    },
    get ruleCyclesFromRuleNameAndCycles () {
        return ruleCyclesFromRuleNameAndCycles;
    },
    get ruleNamesFromCycle () {
        return ruleNamesFromCycle;
    },
    get ruleNamesFromCycles () {
        return ruleNamesFromCycles;
    }
});
var _necessary = require("necessary");
var _ruleName = require("../utilities/ruleName");
var push = _necessary.arrayUtilities.push, compress = _necessary.arrayUtilities.compress;
function isCycleIrreducible(cycle, ruleMap) {
    var ruleNames = ruleNamesFromCycle(cycle), reducedRules = ruleNames.reduce(function(reducedRules, ruleName) {
        var reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName), reducedRule = ruleMap[reducedRuleName] || null;
        if (reducedRule !== null) {
            reducedRules.push(reducedRule);
        }
        return reducedRules;
    }, []), reducedRulesLength = reducedRules.length, cycleIrreducible = reducedRulesLength === 0; ///
    return cycleIrreducible;
}
function ruleNamesFromCycle(cycle) {
    var ruleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var cycleVertexes = cycle.getVertexes(), cycleRuleNames = cycleVertexes; ///
    push(ruleNames, cycleRuleNames);
    return ruleNames;
}
function ruleNamesFromCycles(cycles) {
    var ruleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    cycles.forEach(function(cycle) {
        ruleNamesFromCycle(cycle, ruleNames);
    });
    compress(ruleNames, function(ruleNameA, ruleNameB) {
        if (ruleNameA === ruleNameB) {
            return true;
        }
    });
    return ruleNames;
}
function ruleCyclesFromRuleNameAndCycles(ruleName, cycles) {
    var ruleCycles = cycles.reduce(function(ruleCycles, cycle) {
        var ruleNames = ruleNamesFromCycle(cycle), ruleNamesIncludeRuleName = ruleNames.includes(ruleName);
        if (ruleNamesIncludeRuleName) {
            var ruleCycle = cycle; ///
            ruleCycles.push(ruleCycle);
        }
        return ruleCycles;
    }, []);
    return ruleCycles;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3ljbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2gsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDeWNsZUlycmVkdWNpYmxlKGN5Y2xlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSksXG4gICAgICAgIHJlZHVjZWRSdWxlcyA9IHJ1bGVOYW1lcy5yZWR1Y2UoKHJlZHVjZWRSdWxlcywgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgICAgICAgIHJlZHVjZWRSdWxlID0gcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICAgICAgICBpZiAocmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlcy5wdXNoKHJlZHVjZWRSdWxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVkdWNlZFJ1bGVzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHJlZHVjZWRSdWxlc0xlbmd0aCA9IHJlZHVjZWRSdWxlcy5sZW5ndGgsXG4gICAgICAgIGN5Y2xlSXJyZWR1Y2libGUgPSAocmVkdWNlZFJ1bGVzTGVuZ3RoID09PSAwKTsgLy8vXG5cbiAgcmV0dXJuIGN5Y2xlSXJyZWR1Y2libGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUsIHJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGN5Y2xlVmVydGV4ZXMgPSBjeWNsZS5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICBjeWNsZVJ1bGVOYW1lcyA9IGN5Y2xlVmVydGV4ZXM7IC8vL1xuXG4gIHB1c2gocnVsZU5hbWVzLCBjeWNsZVJ1bGVOYW1lcyk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21DeWNsZXMoY3ljbGVzLCBydWxlTmFtZXMgPSBbXSkge1xuICBjeWNsZXMuZm9yRWFjaCgoY3ljbGUpID0+IHtcbiAgICBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUsIHJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIGNvbXByZXNzKHJ1bGVOYW1lcywgKHJ1bGVOYW1lQSwgcnVsZU5hbWVCKSA9PiB7XG4gICAgaWYgKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpIHtcbiAgY29uc3QgcnVsZUN5Y2xlcyA9IGN5Y2xlcy5yZWR1Y2UoKHJ1bGVDeWNsZXMsIGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZUN5Y2xlID0gY3ljbGU7ICAvLy9cblxuICAgICAgcnVsZUN5Y2xlcy5wdXNoKHJ1bGVDeWNsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVDeWNsZXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcnVsZUN5Y2xlcztcbn1cbiJdLCJuYW1lcyI6WyJpc0N5Y2xlSXJyZWR1Y2libGUiLCJydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlIiwicnVsZU5hbWVzRnJvbUN5Y2xlcyIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNvbXByZXNzIiwiY3ljbGUiLCJydWxlTWFwIiwicnVsZU5hbWVzIiwicmVkdWNlZFJ1bGVzIiwicmVkdWNlIiwicnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlc0xlbmd0aCIsImxlbmd0aCIsImN5Y2xlSXJyZWR1Y2libGUiLCJjeWNsZVZlcnRleGVzIiwiZ2V0VmVydGV4ZXMiLCJjeWNsZVJ1bGVOYW1lcyIsImN5Y2xlcyIsImZvckVhY2giLCJydWxlTmFtZUEiLCJydWxlTmFtZUIiLCJydWxlQ3ljbGVzIiwicnVsZU5hbWVzSW5jbHVkZVJ1bGVOYW1lIiwiaW5jbHVkZXMiLCJydWxlQ3ljbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVFnQkE7ZUFBQUE7O1FBeUNBQztlQUFBQTs7UUF2QkFDO2VBQUFBOztRQVNBQztlQUFBQTs7O3lCQWpDZTt3QkFJYTtBQUY1QyxJQUFRQyxPQUFtQkMseUJBQWMsQ0FBakNELE1BQU1FLFdBQWFELHlCQUFjLENBQTNCQztBQUlQLFNBQVNOLG1CQUFtQk8sS0FBSyxFQUFFQyxPQUFPO0lBQy9DLElBQU1DLFlBQVlQLG1CQUFtQkssUUFDL0JHLGVBQWVELFVBQVVFLE1BQU0sQ0FBQyxTQUFDRCxjQUFjRTtRQUM3QyxJQUFNQyxrQkFBa0JDLElBQUFBLHFDQUEyQixFQUFDRixXQUM5Q0csY0FBY1AsT0FBTyxDQUFDSyxnQkFBZ0IsSUFBSTtRQUVoRCxJQUFJRSxnQkFBZ0IsTUFBTTtZQUN4QkwsYUFBYU4sSUFBSSxDQUFDVztRQUNwQjtRQUVBLE9BQU9MO0lBQ1QsR0FBRyxFQUFFLEdBQ0xNLHFCQUFxQk4sYUFBYU8sTUFBTSxFQUN4Q0MsbUJBQW9CRix1QkFBdUIsR0FBSSxHQUFHO0lBRXhELE9BQU9FO0FBQ1Q7QUFFTyxTQUFTaEIsbUJBQW1CSyxLQUFLO1FBQUVFLFlBQUFBLGlFQUFZLEVBQUU7SUFDdEQsSUFBTVUsZ0JBQWdCWixNQUFNYSxXQUFXLElBQ2pDQyxpQkFBaUJGLGVBQWUsR0FBRztJQUV6Q2YsS0FBS0ssV0FBV1k7SUFFaEIsT0FBT1o7QUFDVDtBQUVPLFNBQVNOLG9CQUFvQm1CLE1BQU07UUFBRWIsWUFBQUEsaUVBQVksRUFBRTtJQUN4RGEsT0FBT0MsT0FBTyxDQUFDLFNBQUNoQjtRQUNkTCxtQkFBbUJLLE9BQU9FO0lBQzVCO0lBRUFILFNBQVNHLFdBQVcsU0FBQ2UsV0FBV0M7UUFDOUIsSUFBSUQsY0FBY0MsV0FBVztZQUMzQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9oQjtBQUNUO0FBRU8sU0FBU1IsZ0NBQWdDVyxRQUFRLEVBQUVVLE1BQU07SUFDOUQsSUFBTUksYUFBYUosT0FBT1gsTUFBTSxDQUFDLFNBQUNlLFlBQVluQjtRQUM1QyxJQUFNRSxZQUFZUCxtQkFBbUJLLFFBQy9Cb0IsMkJBQTJCbEIsVUFBVW1CLFFBQVEsQ0FBQ2hCO1FBRXBELElBQUllLDBCQUEwQjtZQUM1QixJQUFNRSxZQUFZdEIsT0FBUSxHQUFHO1lBRTdCbUIsV0FBV3RCLElBQUksQ0FBQ3lCO1FBQ2xCO1FBRUEsT0FBT0g7SUFDVCxHQUFHLEVBQUU7SUFFTCxPQUFPQTtBQUNUIn0=