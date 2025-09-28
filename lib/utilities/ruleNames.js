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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function permuteRuleNames(ruleNames, ruleName) {
    var start, end;
    var index = ruleNames.indexOf(ruleName);
    start = 0;
    end = index; ///
    var leadingRuleNames = ruleNames.slice(start, end);
    start = index; ///
    var trailingRuleNames = ruleNames.slice(start), permutedRuleNames = _to_consumable_array(trailingRuleNames).concat(_to_consumable_array(leadingRuleNames));
    return permutedRuleNames;
}
function forEachRuleNameAndLeftRecursiveRuleName(ruleNames, callback) {
    var ruleNamesLength = ruleNames.length, lastIndex = ruleNamesLength - 1;
    ruleNames.forEach(function(ruleName, index) {
        var nextIndex = index === lastIndex ? 0 : index + 1, leftRecursiveRuleName = ruleNames[nextIndex];
        callback(ruleName, leftRecursiveRuleName, index);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGVybXV0ZVJ1bGVOYW1lcyhydWxlTmFtZXMsIHJ1bGVOYW1lKSB7XG4gIGxldCBzdGFydCxcbiAgICAgICAgZW5kO1xuXG4gIGNvbnN0IGluZGV4ID0gcnVsZU5hbWVzLmluZGV4T2YocnVsZU5hbWUpO1xuXG4gIHN0YXJ0ID0gMDtcblxuICBlbmQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IGxlYWRpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgc3RhcnQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IHRyYWlsaW5nUnVsZU5hbWVzID0gcnVsZU5hbWVzLnNsaWNlKHN0YXJ0KSxcbiAgICAgICAgcGVybXV0ZWRSdWxlTmFtZXMgPSBbXG4gICAgICAgICAgLi4udHJhaWxpbmdSdWxlTmFtZXMsXG4gICAgICAgICAgLi4ubGVhZGluZ1J1bGVOYW1lc1xuICAgICAgICBdO1xuXG4gIHJldHVybiBwZXJtdXRlZFJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZXMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJ1bGVOYW1lc0xlbmd0aCA9IHJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IHJ1bGVOYW1lc0xlbmd0aCAtIDE7XG5cbiAgcnVsZU5hbWVzLmZvckVhY2goKHJ1bGVOYW1lLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG5leHRJbmRleCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lc1tuZXh0SW5kZXhdO1xuXG4gICAgY2FsbGJhY2socnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kZXgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJwZXJtdXRlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwicnVsZU5hbWUiLCJzdGFydCIsImVuZCIsImluZGV4IiwiaW5kZXhPZiIsImxlYWRpbmdSdWxlTmFtZXMiLCJzbGljZSIsInRyYWlsaW5nUnVsZU5hbWVzIiwicGVybXV0ZWRSdWxlTmFtZXMiLCJjYWxsYmFjayIsInJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImxhc3RJbmRleCIsImZvckVhY2giLCJuZXh0SW5kZXgiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXlCZ0JBO2VBQUFBOztRQXZCQUM7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxTQUFTQSxpQkFBaUJDLFNBQVMsRUFBRUMsUUFBUTtJQUNsRCxJQUFJQyxPQUNFQztJQUVOLElBQU1DLFFBQVFKLFVBQVVLLE9BQU8sQ0FBQ0o7SUFFaENDLFFBQVE7SUFFUkMsTUFBTUMsT0FBUSxHQUFHO0lBRWpCLElBQU1FLG1CQUFtQk4sVUFBVU8sS0FBSyxDQUFDTCxPQUFPQztJQUVoREQsUUFBUUUsT0FBUSxHQUFHO0lBRW5CLElBQU1JLG9CQUFvQlIsVUFBVU8sS0FBSyxDQUFDTCxRQUNwQ08sb0JBQW9CLEFBQ2xCLHFCQUFHRCwwQkFDSCxxQkFBR0Y7SUFHWCxPQUFPRztBQUNUO0FBRU8sU0FBU1gsd0NBQXdDRSxTQUFTLEVBQUVVLFFBQVE7SUFDekUsSUFBTUMsa0JBQWtCWCxVQUFVWSxNQUFNLEVBQ2xDQyxZQUFZRixrQkFBa0I7SUFFcENYLFVBQVVjLE9BQU8sQ0FBQyxTQUFDYixVQUFVRztRQUMzQixJQUFNVyxZQUFZLEFBQUNYLFVBQVVTLFlBQ1QsSUFDRVQsUUFBUSxHQUNaWSx3QkFBd0JoQixTQUFTLENBQUNlLFVBQVU7UUFFOURMLFNBQVNULFVBQVVlLHVCQUF1Qlo7SUFDNUM7QUFDRiJ9