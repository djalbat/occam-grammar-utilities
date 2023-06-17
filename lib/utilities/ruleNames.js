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
    ruleNamesFromCycle: function() {
        return ruleNamesFromCycle;
    },
    ruleNamesFromCycles: function() {
        return ruleNamesFromCycles;
    },
    forEachRuleNameAndLeftRecursiveRuleName: function() {
        return forEachRuleNameAndLeftRecursiveRuleName;
    }
});
function ruleNamesFromCycle(cycle) {
    var cycleVertexes = cycle.getVertexes(), ruleNames = cycleVertexes; ///
    return ruleNames;
}
function ruleNamesFromCycles(cycles) {
    var ruleNames = [];
    cycles.forEach(function(cycle) {
        var cycleVertexes = cycle.getVertexes(), cyclicRuleNames = cycleVertexes; ///
        cyclicRuleNames.forEach(function(cyclicRuleName) {
            var ruleNamesIncludesCyclicRuleName = ruleNames.includes(cyclicRuleName);
            if (!ruleNamesIncludesCyclicRuleName) {
                var ruleName = cyclicRuleName; ///
                ruleNames.push(ruleName);
            }
        });
    });
    return ruleNames;
}
function forEachRuleNameAndLeftRecursiveRuleName(ruleNames, callback) {
    var ruleNamesLength = ruleNames.length, lastIndex = ruleNamesLength - 1;
    ruleNames.forEach(function(ruleName, index) {
        var nextIndex = index === lastIndex ? 0 : index + 1, leftRecursiveRuleName = ruleNames[nextIndex];
        callback(ruleName, leftRecursiveRuleName, index);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSB7XG4gIGNvbnN0IGN5Y2xlVmVydGV4ZXMgPSBjeWNsZS5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICBydWxlTmFtZXMgPSBjeWNsZVZlcnRleGVzOyAgLy8vXG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21DeWNsZXMoY3ljbGVzKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IFtdO1xuXG4gIGN5Y2xlcy5mb3JFYWNoKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IGN5Y2xlVmVydGV4ZXMgPSBjeWNsZS5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGN5Y2xpY1J1bGVOYW1lcyA9IGN5Y2xlVmVydGV4ZXM7ICAvLy9cblxuICAgIGN5Y2xpY1J1bGVOYW1lcy5mb3JFYWNoKChjeWNsaWNSdWxlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZU5hbWVzSW5jbHVkZXNDeWNsaWNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhjeWNsaWNSdWxlTmFtZSk7XG5cbiAgICAgIGlmICghcnVsZU5hbWVzSW5jbHVkZXNDeWNsaWNSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IGN5Y2xpY1J1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lcywgY2FsbGJhY2spIHtcbiAgY29uc3QgcnVsZU5hbWVzTGVuZ3RoID0gcnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gcnVsZU5hbWVzTGVuZ3RoIC0gMTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gKGluZGV4ID09PSBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDEsXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWVzW25leHRJbmRleF07XG5cbiAgICBjYWxsYmFjayhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRleCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVOYW1lc0Zyb21DeWNsZSIsInJ1bGVOYW1lc0Zyb21DeWNsZXMiLCJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJjeWNsZSIsImN5Y2xlVmVydGV4ZXMiLCJnZXRWZXJ0ZXhlcyIsInJ1bGVOYW1lcyIsImN5Y2xlcyIsImZvckVhY2giLCJjeWNsaWNSdWxlTmFtZXMiLCJjeWNsaWNSdWxlTmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzQ3ljbGljUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJ1bGVOYW1lIiwicHVzaCIsImNhbGxiYWNrIiwicnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiaW5kZXgiLCJuZXh0SW5kZXgiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsa0JBQWtCO2VBQWxCQTs7SUFPQUMsbUJBQW1CO2VBQW5CQTs7SUFxQkFDLHVDQUF1QztlQUF2Q0E7OztBQTVCVCxTQUFTRixtQkFBbUJHLEtBQUs7SUFDdEMsSUFBTUMsZ0JBQWdCRCxNQUFNRSxXQUFXLElBQ2pDQyxZQUFZRixlQUFnQixHQUFHO0lBRXJDLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTTCxvQkFBb0JNLE1BQU07SUFDeEMsSUFBTUQsWUFBWSxFQUFFO0lBRXBCQyxPQUFPQyxPQUFPLENBQUMsU0FBQ0w7UUFDZCxJQUFNQyxnQkFBZ0JELE1BQU1FLFdBQVcsSUFDakNJLGtCQUFrQkwsZUFBZ0IsR0FBRztRQUUzQ0ssZ0JBQWdCRCxPQUFPLENBQUMsU0FBQ0U7WUFDdkIsSUFBTUMsa0NBQWtDTCxVQUFVTSxRQUFRLENBQUNGO1lBRTNELElBQUksQ0FBQ0MsaUNBQWlDO2dCQUNwQyxJQUFNRSxXQUFXSCxnQkFBaUIsR0FBRztnQkFFckNKLFVBQVVRLElBQUksQ0FBQ0Q7WUFDakI7UUFDRjtJQUNGO0lBRUEsT0FBT1A7QUFDVDtBQUVPLFNBQVNKLHdDQUF3Q0ksU0FBUyxFQUFFUyxRQUFRO0lBQ3pFLElBQU1DLGtCQUFrQlYsVUFBVVcsTUFBTSxFQUNsQ0MsWUFBWUYsa0JBQWtCO0lBRXBDVixVQUFVRSxPQUFPLENBQUMsU0FBQ0ssVUFBVU07UUFDM0IsSUFBTUMsWUFBWSxBQUFDRCxVQUFVRCxZQUNULElBQ0VDLFFBQVEsR0FDeEJFLHdCQUF3QmYsU0FBUyxDQUFDYyxVQUFVO1FBRWxETCxTQUFTRixVQUFVUSx1QkFBdUJGO0lBQzVDO0FBQ0YifQ==