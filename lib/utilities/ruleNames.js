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
    ruleNamesFromCycles: function() {
        return ruleNamesFromCycles;
    },
    forEachRuleNameAndLeftRecursiveRuleName: function() {
        return forEachRuleNameAndLeftRecursiveRuleName;
    }
});
function ruleNamesFromCycles(cycles) {
    var ruleNames = [];
    cycles.forEach(function(cycle) {
        var cyclicRuleNames = cycle; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVzRnJvbUN5Y2xlcyhjeWNsZXMpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gW107XG5cbiAgY3ljbGVzLmZvckVhY2goKGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgY3ljbGljUnVsZU5hbWVzID0gY3ljbGU7ICAvLy9cblxuICAgIGN5Y2xpY1J1bGVOYW1lcy5mb3JFYWNoKChjeWNsaWNSdWxlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZU5hbWVzSW5jbHVkZXNDeWNsaWNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhjeWNsaWNSdWxlTmFtZSk7XG5cbiAgICAgIGlmICghcnVsZU5hbWVzSW5jbHVkZXNDeWNsaWNSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IGN5Y2xpY1J1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lcywgY2FsbGJhY2spIHtcbiAgY29uc3QgcnVsZU5hbWVzTGVuZ3RoID0gcnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gcnVsZU5hbWVzTGVuZ3RoIC0gMTtcblxuICBydWxlTmFtZXMuZm9yRWFjaCgocnVsZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gKGluZGV4ID09PSBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDEsXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWVzW25leHRJbmRleF07XG5cbiAgICBjYWxsYmFjayhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRleCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVOYW1lc0Zyb21DeWNsZXMiLCJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJjeWNsZXMiLCJydWxlTmFtZXMiLCJmb3JFYWNoIiwiY3ljbGUiLCJjeWNsaWNSdWxlTmFtZXMiLCJjeWNsaWNSdWxlTmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzQ3ljbGljUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJ1bGVOYW1lIiwicHVzaCIsImNhbGxiYWNrIiwicnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiaW5kZXgiLCJuZXh0SW5kZXgiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVnQkEsbUJBQW1CO2VBQW5CQTs7SUFvQkFDLHVDQUF1QztlQUF2Q0E7OztBQXBCVCxTQUFTRCxvQkFBb0JFLE1BQU0sRUFBRTtJQUMxQyxJQUFNQyxZQUFZLEVBQUU7SUFFcEJELE9BQU9FLE9BQU8sQ0FBQyxTQUFDQyxPQUFVO1FBQ3hCLElBQU1DLGtCQUFrQkQsT0FBUSxHQUFHO1FBRW5DQyxnQkFBZ0JGLE9BQU8sQ0FBQyxTQUFDRyxnQkFBbUI7WUFDMUMsSUFBTUMsa0NBQWtDTCxVQUFVTSxRQUFRLENBQUNGO1lBRTNELElBQUksQ0FBQ0MsaUNBQWlDO2dCQUNwQyxJQUFNRSxXQUFXSCxnQkFBaUIsR0FBRztnQkFFckNKLFVBQVVRLElBQUksQ0FBQ0Q7WUFDakIsQ0FBQztRQUNIO0lBQ0Y7SUFFQSxPQUFPUDtBQUNUO0FBRU8sU0FBU0Ysd0NBQXdDRSxTQUFTLEVBQUVTLFFBQVEsRUFBRTtJQUMzRSxJQUFNQyxrQkFBa0JWLFVBQVVXLE1BQU0sRUFDbENDLFlBQVlGLGtCQUFrQjtJQUVwQ1YsVUFBVUMsT0FBTyxDQUFDLFNBQUNNLFVBQVVNLE9BQVU7UUFDckMsSUFBTUMsWUFBWSxBQUFDRCxVQUFVRCxZQUNULElBQ0VDLFFBQVEsQ0FBQyxFQUN6QkUsd0JBQXdCZixTQUFTLENBQUNjLFVBQVU7UUFFbERMLFNBQVNGLFVBQVVRLHVCQUF1QkY7SUFDNUM7QUFDRiJ9