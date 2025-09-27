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
    get arePathsEqual () {
        return arePathsEqual;
    },
    get pathFromRuleNameAndCycle () {
        return pathFromRuleNameAndCycle;
    },
    get pathsFromRuleNameAndCycles () {
        return pathsFromRuleNameAndCycles;
    },
    get reducedRuleNameFromPath () {
        return reducedRuleNameFromPath;
    },
    get reducedRuleNamePartFromPath () {
        return reducedRuleNamePartFromPath;
    }
});
var _necessary = require("necessary");
var _cycle = require("../utilities/cycle");
var _part = require("../utilities/part");
var _ruleName = require("../utilities/ruleName");
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
var last = _necessary.arrayUtilities.last, match = _necessary.arrayUtilities.match, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
function arePathsEqual(pathA, pathB) {
    var ruleNamesA = pathA, ruleNamesB = pathB, ruleNamesMatch = match(ruleNamesA, ruleNamesB, function(ruleNameA, ruleNameB) {
        if (ruleNameA === ruleNameB) {
            return true;
        }
    }), pathsEqual = ruleNamesMatch; ///
    return pathsEqual;
}
function reducedRuleNameFromPath(path) {
    var ruleNames = path, lastRuleName = last(ruleNames), ruleName = lastRuleName, reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName);
    return reducedRuleName;
}
function pathFromRuleNameAndCycle(ruleName, cycle) {
    var ruleNames = (0, _cycle.ruleNamesFromCycle)(cycle), start, end;
    var index = ruleNames.indexOf(ruleName);
    start = 0;
    end = index; ///
    var leadingRuleNames = ruleNames.slice(start, end);
    start = index; ///
    var trailingRuleNames = ruleNames.slice(start), path = _to_consumable_array(trailingRuleNames).concat(_to_consumable_array(leadingRuleNames));
    return path;
}
function pathsFromRuleNameAndCycles(ruleName, cycles, ruleMap) {
    var paths = cycles.map(function(cycle) {
        var path = pathFromRuleNameAndCycle(ruleName, cycle);
        return path;
    });
    filter(paths, function(path) {
        var ruleNames = path, ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
        if (ruleNamesIncludesRuleName) {
            return true;
        }
    });
    var length;
    paths.forEach(function(path) {
        length = path.length;
        while(length > 2){
            path = path.slice(); ///
            path.pop();
            paths.push(path);
            length = path.length;
        }
    });
    compress(paths, function(pathA, pathB) {
        var pathsEqual = arePathsEqual(pathA, pathB);
        if (pathsEqual) {
            return true;
        }
    });
    return paths;
}
function reducedRuleNamePartFromPath(path) {
    var reducedRuleName = reducedRuleNameFromPath(path), reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName);
    return reducedRuleNamePart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3ljbGVcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGxhc3QsIG1hdGNoLCBmaWx0ZXIsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKSB7XG4gIGNvbnN0IHJ1bGVOYW1lc0EgPSBwYXRoQSwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQiwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc01hdGNoID0gbWF0Y2gocnVsZU5hbWVzQSwgcnVsZU5hbWVzQiwgKHJ1bGVOYW1lQSwgcnVsZU5hbWVCKSA9PiB7XG4gICAgICAgICAgaWYgKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwYXRoc0VxdWFsID0gcnVsZU5hbWVzTWF0Y2g7ICAvLy9cblxuICByZXR1cm4gcGF0aHNFcXVhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcGF0aCwgLy8vXG4gICAgICAgIGxhc3RSdWxlTmFtZSA9IGxhc3QocnVsZU5hbWVzKSxcbiAgICAgICAgcnVsZU5hbWUgPSBsYXN0UnVsZU5hbWUsIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKSB7XG4gIGxldCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUpLFxuICAgICAgc3RhcnQsXG4gICAgICBlbmQ7XG5cbiAgY29uc3QgaW5kZXggPSBydWxlTmFtZXMuaW5kZXhPZihydWxlTmFtZSk7XG5cbiAgc3RhcnQgPSAwO1xuXG4gIGVuZCA9IGluZGV4OyAgLy8vXG5cbiAgY29uc3QgbGVhZGluZ1J1bGVOYW1lcyA9IHJ1bGVOYW1lcy5zbGljZShzdGFydCwgZW5kKTtcblxuICBzdGFydCA9IGluZGV4OyAgLy8vXG5cbiAgY29uc3QgdHJhaWxpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQpLFxuICAgICAgICBwYXRoID0gW1xuICAgICAgICAgIC4uLnRyYWlsaW5nUnVsZU5hbWVzLFxuICAgICAgICAgIC4uLmxlYWRpbmdSdWxlTmFtZXNcbiAgICAgICAgXTtcblxuICByZXR1cm4gcGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMsIHJ1bGVNYXApIHtcbiAgY29uc3QgcGF0aHMgPSBjeWNsZXMubWFwKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKTtcblxuICAgIHJldHVybiBwYXRoO1xuICB9KTtcblxuICBmaWx0ZXIocGF0aHMsIChwYXRoKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gcGF0aCwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBsZXQgbGVuZ3RoO1xuXG4gIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGggPiAyKSB7XG4gICAgICBwYXRoID0gcGF0aC5zbGljZSgpOyAgLy8vXG5cbiAgICAgIHBhdGgucG9wKCk7XG5cbiAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG5cbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG5cbiAgY29tcHJlc3MocGF0aHMsIChwYXRoQSwgcGF0aEIpID0+IHtcbiAgICBjb25zdCBwYXRoc0VxdWFsID0gYXJlUGF0aHNFcXVhbChwYXRoQSwgcGF0aEIpO1xuXG4gICAgaWYgKHBhdGhzRXF1YWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhdGhzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lUGFydDtcbn1cbiJdLCJuYW1lcyI6WyJhcmVQYXRoc0VxdWFsIiwicGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aCIsInJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIm1hdGNoIiwiZmlsdGVyIiwiY29tcHJlc3MiLCJwYXRoQSIsInBhdGhCIiwicnVsZU5hbWVzQSIsInJ1bGVOYW1lc0IiLCJydWxlTmFtZXNNYXRjaCIsInJ1bGVOYW1lQSIsInJ1bGVOYW1lQiIsInBhdGhzRXF1YWwiLCJwYXRoIiwicnVsZU5hbWVzIiwibGFzdFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJjeWNsZSIsInJ1bGVOYW1lc0Zyb21DeWNsZSIsInN0YXJ0IiwiZW5kIiwiaW5kZXgiLCJpbmRleE9mIiwibGVhZGluZ1J1bGVOYW1lcyIsInNsaWNlIiwidHJhaWxpbmdSdWxlTmFtZXMiLCJjeWNsZXMiLCJydWxlTWFwIiwicGF0aHMiLCJtYXAiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwicG9wIiwicHVzaCIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVVnQkE7ZUFBQUE7O1FBc0JBQztlQUFBQTs7UUF3QkFDO2VBQUFBOztRQWpDQUM7ZUFBQUE7O1FBNEVBQztlQUFBQTs7O3lCQWpHZTtxQkFFSTtvQkFDTTt3QkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBUUMsT0FBa0NDLHlCQUFjLENBQWhERCxNQUFNRSxRQUE0QkQseUJBQWMsQ0FBMUNDLE9BQU9DLFNBQXFCRix5QkFBYyxDQUFuQ0UsUUFBUUMsV0FBYUgseUJBQWMsQ0FBM0JHO0FBRXRCLFNBQVNULGNBQWNVLEtBQUssRUFBRUMsS0FBSztJQUN4QyxJQUFNQyxhQUFhRixPQUNiRyxhQUFhRixPQUNiRyxpQkFBaUJQLE1BQU1LLFlBQVlDLFlBQVksU0FBQ0UsV0FBV0M7UUFDekQsSUFBSUQsY0FBY0MsV0FBVztZQUMzQixPQUFPO1FBQ1Q7SUFDRixJQUNBQyxhQUFhSCxnQkFBaUIsR0FBRztJQUV2QyxPQUFPRztBQUNUO0FBRU8sU0FBU2Qsd0JBQXdCZSxJQUFJO0lBQzFDLElBQU1DLFlBQVlELE1BQ1pFLGVBQWVmLEtBQUtjLFlBQ3BCRSxXQUFXRCxjQUNYRSxrQkFBa0JDLElBQUFBLHFDQUEyQixFQUFDRjtJQUVwRCxPQUFPQztBQUNUO0FBRU8sU0FBU3JCLHlCQUF5Qm9CLFFBQVEsRUFBRUcsS0FBSztJQUN0RCxJQUFJTCxZQUFZTSxJQUFBQSx5QkFBa0IsRUFBQ0QsUUFDL0JFLE9BQ0FDO0lBRUosSUFBTUMsUUFBUVQsVUFBVVUsT0FBTyxDQUFDUjtJQUVoQ0ssUUFBUTtJQUVSQyxNQUFNQyxPQUFRLEdBQUc7SUFFakIsSUFBTUUsbUJBQW1CWCxVQUFVWSxLQUFLLENBQUNMLE9BQU9DO0lBRWhERCxRQUFRRSxPQUFRLEdBQUc7SUFFbkIsSUFBTUksb0JBQW9CYixVQUFVWSxLQUFLLENBQUNMLFFBQ3BDUixPQUFPLEFBQ0wscUJBQUdjLDBCQUNILHFCQUFHRjtJQUdYLE9BQU9aO0FBQ1Q7QUFFTyxTQUFTaEIsMkJBQTJCbUIsUUFBUSxFQUFFWSxNQUFNLEVBQUVDLE9BQU87SUFDbEUsSUFBTUMsUUFBUUYsT0FBT0csR0FBRyxDQUFDLFNBQUNaO1FBQ3hCLElBQU1OLE9BQU9qQix5QkFBeUJvQixVQUFVRztRQUVoRCxPQUFPTjtJQUNUO0lBRUFWLE9BQU8yQixPQUFPLFNBQUNqQjtRQUNiLElBQU1DLFlBQVlELE1BQ1ptQiw0QkFBNEJsQixVQUFVbUIsUUFBUSxDQUFDakI7UUFFckQsSUFBSWdCLDJCQUEyQjtZQUM3QixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlFO0lBRUpKLE1BQU1LLE9BQU8sQ0FBQyxTQUFDdEI7UUFDYnFCLFNBQVNyQixLQUFLcUIsTUFBTTtRQUVwQixNQUFPQSxTQUFTLEVBQUc7WUFDakJyQixPQUFPQSxLQUFLYSxLQUFLLElBQUssR0FBRztZQUV6QmIsS0FBS3VCLEdBQUc7WUFFUk4sTUFBTU8sSUFBSSxDQUFDeEI7WUFFWHFCLFNBQVNyQixLQUFLcUIsTUFBTTtRQUN0QjtJQUNGO0lBRUE5QixTQUFTMEIsT0FBTyxTQUFDekIsT0FBT0M7UUFDdEIsSUFBTU0sYUFBYWpCLGNBQWNVLE9BQU9DO1FBRXhDLElBQUlNLFlBQVk7WUFDZCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9rQjtBQUNUO0FBRU8sU0FBUy9CLDRCQUE0QmMsSUFBSTtJQUM5QyxJQUFNSSxrQkFBa0JuQix3QkFBd0JlLE9BQzFDeUIsc0JBQXNCQyxJQUFBQSw4QkFBd0IsRUFBQ3RCO0lBRXJELE9BQU9xQjtBQUNUIn0=