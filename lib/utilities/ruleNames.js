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
    get forEachRuleNameAndLeftRecursiveRuleName () {
        return forEachRuleNameAndLeftRecursiveRuleName;
    },
    get permuteRuleNames () {
        return permuteRuleNames;
    }
});
function permuteRuleNames(ruleNames, ruleName) {
    let start, end;
    const index = ruleNames.indexOf(ruleName);
    start = 0;
    end = index; ///
    const leadingRuleNames = ruleNames.slice(start, end);
    start = index; ///
    const trailingRuleNames = ruleNames.slice(start), permutedRuleNames = [
        ...trailingRuleNames,
        ...leadingRuleNames
    ];
    return permutedRuleNames;
}
function forEachRuleNameAndLeftRecursiveRuleName(ruleNames, callback) {
    const ruleNamesLength = ruleNames.length, lastIndex = ruleNamesLength - 1;
    ruleNames.forEach((ruleName, index)=>{
        const nextIndex = index === lastIndex ? 0 : index + 1, leftRecursiveRuleName = ruleNames[nextIndex];
        callback(ruleName, leftRecursiveRuleName, index);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGVybXV0ZVJ1bGVOYW1lcyhydWxlTmFtZXMsIHJ1bGVOYW1lKSB7XG4gIGxldCBzdGFydCxcbiAgICAgICAgZW5kO1xuXG4gIGNvbnN0IGluZGV4ID0gcnVsZU5hbWVzLmluZGV4T2YocnVsZU5hbWUpO1xuXG4gIHN0YXJ0ID0gMDtcblxuICBlbmQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IGxlYWRpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgc3RhcnQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IHRyYWlsaW5nUnVsZU5hbWVzID0gcnVsZU5hbWVzLnNsaWNlKHN0YXJ0KSxcbiAgICAgICAgcGVybXV0ZWRSdWxlTmFtZXMgPSBbXG4gICAgICAgICAgLi4udHJhaWxpbmdSdWxlTmFtZXMsXG4gICAgICAgICAgLi4ubGVhZGluZ1J1bGVOYW1lc1xuICAgICAgICBdO1xuXG4gIHJldHVybiBwZXJtdXRlZFJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZXMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJ1bGVOYW1lc0xlbmd0aCA9IHJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IHJ1bGVOYW1lc0xlbmd0aCAtIDE7XG5cbiAgcnVsZU5hbWVzLmZvckVhY2goKHJ1bGVOYW1lLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG5leHRJbmRleCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lc1tuZXh0SW5kZXhdO1xuXG4gICAgY2FsbGJhY2socnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kZXgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJwZXJtdXRlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwicnVsZU5hbWUiLCJzdGFydCIsImVuZCIsImluZGV4IiwiaW5kZXhPZiIsImxlYWRpbmdSdWxlTmFtZXMiLCJzbGljZSIsInRyYWlsaW5nUnVsZU5hbWVzIiwicGVybXV0ZWRSdWxlTmFtZXMiLCJjYWxsYmFjayIsInJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImxhc3RJbmRleCIsImZvckVhY2giLCJuZXh0SW5kZXgiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXlCZ0JBO2VBQUFBOztRQXZCQUM7ZUFBQUE7OztBQUFULFNBQVNBLGlCQUFpQkMsU0FBUyxFQUFFQyxRQUFRO0lBQ2xELElBQUlDLE9BQ0VDO0lBRU4sTUFBTUMsUUFBUUosVUFBVUssT0FBTyxDQUFDSjtJQUVoQ0MsUUFBUTtJQUVSQyxNQUFNQyxPQUFRLEdBQUc7SUFFakIsTUFBTUUsbUJBQW1CTixVQUFVTyxLQUFLLENBQUNMLE9BQU9DO0lBRWhERCxRQUFRRSxPQUFRLEdBQUc7SUFFbkIsTUFBTUksb0JBQW9CUixVQUFVTyxLQUFLLENBQUNMLFFBQ3BDTyxvQkFBb0I7V0FDZkQ7V0FDQUY7S0FDSjtJQUVQLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTWCx3Q0FBd0NFLFNBQVMsRUFBRVUsUUFBUTtJQUN6RSxNQUFNQyxrQkFBa0JYLFVBQVVZLE1BQU0sRUFDbENDLFlBQVlGLGtCQUFrQjtJQUVwQ1gsVUFBVWMsT0FBTyxDQUFDLENBQUNiLFVBQVVHO1FBQzNCLE1BQU1XLFlBQVksQUFBQ1gsVUFBVVMsWUFDVCxJQUNFVCxRQUFRLEdBQ1pZLHdCQUF3QmhCLFNBQVMsQ0FBQ2UsVUFBVTtRQUU5REwsU0FBU1QsVUFBVWUsdUJBQXVCWjtJQUM1QztBQUNGIn0=