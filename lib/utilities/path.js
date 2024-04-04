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
    pathFromRuleNameAndCycle: function() {
        return pathFromRuleNameAndCycle;
    },
    pathsFromRuleNameAndCycles: function() {
        return pathsFromRuleNameAndCycles;
    }
});
var _necessary = require("necessary");
var _ruleNames = require("../utilities/ruleNames");
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
var match = _necessary.arrayUtilities.match, compress = _necessary.arrayUtilities.compress;
function pathsFromRuleNameAndCycles(ruleName, cycles) {
    var paths = [];
    cycles.forEach(function(cycle) {
        var ruleNames = (0, _ruleNames.ruleNamesFromCycle)(cycle), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
        if (ruleNamesIncludesRuleName) {
            var path = pathFromRuleNameAndCycle(ruleName, cycle);
            var length = path.length;
            while(length > 1){
                paths.unshift(path);
                path = path.slice(); ///
                path.pop();
                length = path.length;
            }
        }
    });
    compress(paths, function(pathA, pathB) {
        var ruleNamesA = pathA, ruleNamesB = pathB, ruleNamesMatch = match(ruleNamesA, ruleNamesB, function(ruleNameA, ruleNameB) {
            var ruleNameAMatchesRuleNameB = ruleNameA === ruleNameB;
            if (ruleNameAMatchesRuleNameB) {
                return true;
            }
        });
        if (ruleNamesMatch) {
            return true;
        }
    });
    return paths;
}
function pathFromRuleNameAndCycle(ruleName, cycle) {
    var ruleNames = (0, _ruleNames.ruleNamesFromCycle)(cycle), start, end;
    var index = ruleNames.indexOf(ruleName);
    start = 0;
    end = index; ///
    var leadingRuleNames = ruleNames.slice(start, end);
    start = index; ///
    var trailingRuleNames = ruleNames.slice(start), path = _to_consumable_array(trailingRuleNames).concat(_to_consumable_array(leadingRuleNames));
    return path;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpIHtcbiAgY29uc3QgcGF0aHMgPSBbXTtcblxuICBjeWNsZXMuZm9yRWFjaCgoY3ljbGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUpLFxuICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIGxldCBwYXRoID0gcGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlKHJ1bGVOYW1lLCBjeWNsZSk7XG5cbiAgICAgIGxldCBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGF0aHMudW5zaGlmdChwYXRoKTtcblxuICAgICAgICBwYXRoID0gcGF0aC5zbGljZSgpOyAgLy8vXG5cbiAgICAgICAgcGF0aC5wb3AoKTtcblxuICAgICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbXByZXNzKHBhdGhzLCAocGF0aEEsIHBhdGhCKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzQSA9IHBhdGhBLCAvLy9cbiAgICAgICAgICBydWxlTmFtZXNCID0gcGF0aEIsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lc01hdGNoID0gbWF0Y2gocnVsZU5hbWVzQSwgcnVsZU5hbWVzQiwgKHJ1bGVOYW1lQSwgcnVsZU5hbWVCKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZUFNYXRjaGVzUnVsZU5hbWVCID0gKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVOYW1lQU1hdGNoZXNSdWxlTmFtZUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAocnVsZU5hbWVzTWF0Y2gpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhdGhzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlKHJ1bGVOYW1lLCBjeWNsZSkge1xuICBsZXQgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgIHN0YXJ0LFxuICAgICAgZW5kO1xuXG4gIGNvbnN0IGluZGV4ID0gcnVsZU5hbWVzLmluZGV4T2YocnVsZU5hbWUpO1xuXG4gIHN0YXJ0ID0gMDtcblxuICBlbmQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IGxlYWRpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgc3RhcnQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IHRyYWlsaW5nUnVsZU5hbWVzID0gcnVsZU5hbWVzLnNsaWNlKHN0YXJ0KSxcbiAgICAgICAgcGF0aCA9IFtcbiAgICAgICAgICAuLi50cmFpbGluZ1J1bGVOYW1lcyxcbiAgICAgICAgICAuLi5sZWFkaW5nUnVsZU5hbWVzXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHBhdGg7XG59XG4iXSwibmFtZXMiOlsicGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiY29tcHJlc3MiLCJydWxlTmFtZSIsImN5Y2xlcyIsInBhdGhzIiwiZm9yRWFjaCIsImN5Y2xlIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicGF0aCIsImxlbmd0aCIsInVuc2hpZnQiLCJzbGljZSIsInBvcCIsInBhdGhBIiwicGF0aEIiLCJydWxlTmFtZXNBIiwicnVsZU5hbWVzQiIsInJ1bGVOYW1lc01hdGNoIiwicnVsZU5hbWVBIiwicnVsZU5hbWVCIiwicnVsZU5hbWVBTWF0Y2hlc1J1bGVOYW1lQiIsInN0YXJ0IiwiZW5kIiwiaW5kZXgiLCJpbmRleE9mIiwibGVhZGluZ1J1bGVOYW1lcyIsInRyYWlsaW5nUnVsZU5hbWVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFtRGdCQSx3QkFBd0I7ZUFBeEJBOztJQTNDQUMsMEJBQTBCO2VBQTFCQTs7O3lCQU5lO3lCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFRQyxRQUFvQkMseUJBQWMsQ0FBbENELE9BQU9FLFdBQWFELHlCQUFjLENBQTNCQztBQUVSLFNBQVNILDJCQUEyQkksUUFBUSxFQUFFQyxNQUFNO0lBQ3pELElBQU1DLFFBQVEsRUFBRTtJQUVoQkQsT0FBT0UsT0FBTyxDQUFDLFNBQUNDO1FBQ2QsSUFBTUMsWUFBWUMsSUFBQUEsNkJBQWtCLEVBQUNGLFFBQy9CRyw0QkFBNEJGLFVBQVVHLFFBQVEsQ0FBQ1I7UUFFckQsSUFBSU8sMkJBQTJCO1lBQzdCLElBQUlFLE9BQU9kLHlCQUF5QkssVUFBVUk7WUFFOUMsSUFBSU0sU0FBU0QsS0FBS0MsTUFBTTtZQUV4QixNQUFPQSxTQUFTLEVBQUc7Z0JBQ2pCUixNQUFNUyxPQUFPLENBQUNGO2dCQUVkQSxPQUFPQSxLQUFLRyxLQUFLLElBQUssR0FBRztnQkFFekJILEtBQUtJLEdBQUc7Z0JBRVJILFNBQVNELEtBQUtDLE1BQU07WUFDdEI7UUFDRjtJQUNGO0lBRUFYLFNBQVNHLE9BQU8sU0FBQ1ksT0FBT0M7UUFDdEIsSUFBTUMsYUFBYUYsT0FDYkcsYUFBYUYsT0FDYkcsaUJBQWlCckIsTUFBTW1CLFlBQVlDLFlBQVksU0FBQ0UsV0FBV0M7WUFDekQsSUFBTUMsNEJBQTZCRixjQUFjQztZQUVqRCxJQUFJQywyQkFBMkI7Z0JBQzdCLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSUgsZ0JBQWdCO1lBQ2xCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT2hCO0FBQ1Q7QUFFTyxTQUFTUCx5QkFBeUJLLFFBQVEsRUFBRUksS0FBSztJQUN0RCxJQUFJQyxZQUFZQyxJQUFBQSw2QkFBa0IsRUFBQ0YsUUFDL0JrQixPQUNBQztJQUVKLElBQU1DLFFBQVFuQixVQUFVb0IsT0FBTyxDQUFDekI7SUFFaENzQixRQUFRO0lBRVJDLE1BQU1DLE9BQVEsR0FBRztJQUVqQixJQUFNRSxtQkFBbUJyQixVQUFVTyxLQUFLLENBQUNVLE9BQU9DO0lBRWhERCxRQUFRRSxPQUFRLEdBQUc7SUFFbkIsSUFBTUcsb0JBQW9CdEIsVUFBVU8sS0FBSyxDQUFDVSxRQUNwQ2IsT0FBTyxBQUNMLHFCQUFHa0IsMEJBQ0gscUJBQUdEO0lBR1gsT0FBT2pCO0FBQ1QifQ==