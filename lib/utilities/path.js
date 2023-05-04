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
    pathsFromRuleNameAndCycles: function() {
        return pathsFromRuleNameAndCycles;
    },
    pathFromRuleNameAndCycle: function() {
        return pathFromRuleNameAndCycle;
    }
});
var _array = require("../utilities/array");
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
function pathsFromRuleNameAndCycles(ruleName, cycles) {
    var paths = [];
    cycles.forEach(function(cycle) {
        var cycleIncludesRuleName = cycle.includes(ruleName);
        if (cycleIncludesRuleName) {
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
    (0, _array.compress)(paths, function(pathA, pathB) {
        var pathsEqual = arePathsEqual(pathA, pathB);
        if (pathsEqual) {
            return true;
        }
    });
    return paths;
}
function pathFromRuleNameAndCycle(ruleName, cycle) {
    var ruleNames = cycle, start, end;
    var index = cycle.indexOf(ruleName);
    start = 0;
    end = index; ///
    var leadingRuleNames = ruleNames.slice(start, end);
    start = index; ///
    var trailingRuleNames = ruleNames.slice(start), path = _to_consumable_array(trailingRuleNames).concat(_to_consumable_array(leadingRuleNames));
    return path;
}
function arePathsEqual(pathA, pathB) {
    var pathsEqual = false;
    var pathALength = pathA.length, pathBLength = pathB.length;
    if (pathALength === pathBLength) {
        var ruleNamesA = pathA, ruleNamesB = pathB; ///
        pathsEqual = ruleNamesA.every(function(ruleNameA, index) {
            var ruleNameB = ruleNamesB[index];
            if (ruleNameA === ruleNameB) {
                return true;
            }
        });
    }
    return pathsEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tcHJlc3MgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKSB7XG4gIGNvbnN0IHBhdGhzID0gW107XG5cbiAgY3ljbGVzLmZvckVhY2goKGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgY3ljbGVJbmNsdWRlc1J1bGVOYW1lID0gY3ljbGUuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKGN5Y2xlSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgbGV0IHBhdGggPSBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKTtcblxuICAgICAgbGV0IGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAobGVuZ3RoID4gMSkge1xuICAgICAgICBwYXRocy51bnNoaWZ0KHBhdGgpO1xuXG4gICAgICAgIHBhdGggPSBwYXRoLnNsaWNlKCk7ICAvLy9cblxuICAgICAgICBwYXRoLnBvcCgpO1xuXG4gICAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29tcHJlc3MocGF0aHMsIChwYXRoQSwgcGF0aEIpID0+IHtcbiAgICBjb25zdCBwYXRoc0VxdWFsID0gYXJlUGF0aHNFcXVhbChwYXRoQSwgcGF0aEIpO1xuXG4gICAgaWYgKHBhdGhzRXF1YWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhdGhzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlKHJ1bGVOYW1lLCBjeWNsZSkge1xuICBsZXQgcnVsZU5hbWVzID0gY3ljbGUsXG4gICAgICBzdGFydCxcbiAgICAgIGVuZDtcblxuICBjb25zdCBpbmRleCA9IGN5Y2xlLmluZGV4T2YocnVsZU5hbWUpO1xuXG4gIHN0YXJ0ID0gMDtcblxuICBlbmQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IGxlYWRpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgc3RhcnQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IHRyYWlsaW5nUnVsZU5hbWVzID0gcnVsZU5hbWVzLnNsaWNlKHN0YXJ0KSxcbiAgICAgICAgcGF0aCA9IFtcbiAgICAgICAgICAuLi50cmFpbGluZ1J1bGVOYW1lcyxcbiAgICAgICAgICAuLi5sZWFkaW5nUnVsZU5hbWVzXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKSB7XG4gIGxldCBwYXRoc0VxdWFsID0gZmFsc2U7XG5cbiAgY29uc3QgcGF0aEFMZW5ndGggPSBwYXRoQS5sZW5ndGgsXG4gICAgICAgIHBhdGhCTGVuZ3RoID0gcGF0aEIubGVuZ3RoO1xuXG4gIGlmIChwYXRoQUxlbmd0aCA9PT0gcGF0aEJMZW5ndGgpIHtcbiAgICBjb25zdCBydWxlTmFtZXNBID0gcGF0aEEsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQjsgLy8vXG5cbiAgICBwYXRoc0VxdWFsID0gcnVsZU5hbWVzQS5ldmVyeSgocnVsZU5hbWVBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcnVsZU5hbWVCID0gcnVsZU5hbWVzQltpbmRleF07XG5cbiAgICAgIGlmIChydWxlTmFtZUEgPT09IHJ1bGVOYW1lQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXRoc0VxdWFsO1xufVxuIl0sIm5hbWVzIjpbInBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwicGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlIiwicnVsZU5hbWUiLCJjeWNsZXMiLCJwYXRocyIsImZvckVhY2giLCJjeWNsZSIsImN5Y2xlSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicGF0aCIsImxlbmd0aCIsInVuc2hpZnQiLCJzbGljZSIsInBvcCIsImNvbXByZXNzIiwicGF0aEEiLCJwYXRoQiIsInBhdGhzRXF1YWwiLCJhcmVQYXRoc0VxdWFsIiwicnVsZU5hbWVzIiwic3RhcnQiLCJlbmQiLCJpbmRleCIsImluZGV4T2YiLCJsZWFkaW5nUnVsZU5hbWVzIiwidHJhaWxpbmdSdWxlTmFtZXMiLCJwYXRoQUxlbmd0aCIsInBhdGhCTGVuZ3RoIiwicnVsZU5hbWVzQSIsInJ1bGVOYW1lc0IiLCJldmVyeSIsInJ1bGVOYW1lQSIsInJ1bGVOYW1lQiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSwwQkFBMEI7ZUFBMUJBOztJQWtDQUMsd0JBQXdCO2VBQXhCQTs7O3FCQXBDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsU0FBU0QsMkJBQTJCRSxRQUFRLEVBQUVDLE1BQU0sRUFBRTtJQUMzRCxJQUFNQyxRQUFRLEVBQUU7SUFFaEJELE9BQU9FLE9BQU8sQ0FBQyxTQUFDQyxPQUFVO1FBQ3hCLElBQU1DLHdCQUF3QkQsTUFBTUUsUUFBUSxDQUFDTjtRQUU3QyxJQUFJSyx1QkFBdUI7WUFDekIsSUFBSUUsT0FBT1IseUJBQXlCQyxVQUFVSTtZQUU5QyxJQUFJSSxTQUFTRCxLQUFLQyxNQUFNO1lBRXhCLE1BQU9BLFNBQVMsRUFBRztnQkFDakJOLE1BQU1PLE9BQU8sQ0FBQ0Y7Z0JBRWRBLE9BQU9BLEtBQUtHLEtBQUssSUFBSyxHQUFHO2dCQUV6QkgsS0FBS0ksR0FBRztnQkFFUkgsU0FBU0QsS0FBS0MsTUFBTTtZQUN0QjtRQUNGLENBQUM7SUFDSDtJQUVBSSxJQUFBQSxlQUFRLEVBQUNWLE9BQU8sU0FBQ1csT0FBT0MsT0FBVTtRQUNoQyxJQUFNQyxhQUFhQyxjQUFjSCxPQUFPQztRQUV4QyxJQUFJQyxZQUFZO1lBQ2QsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUEsT0FBT2I7QUFDVDtBQUVPLFNBQVNILHlCQUF5QkMsUUFBUSxFQUFFSSxLQUFLLEVBQUU7SUFDeEQsSUFBSWEsWUFBWWIsT0FDWmMsT0FDQUM7SUFFSixJQUFNQyxRQUFRaEIsTUFBTWlCLE9BQU8sQ0FBQ3JCO0lBRTVCa0IsUUFBUTtJQUVSQyxNQUFNQyxPQUFRLEdBQUc7SUFFakIsSUFBTUUsbUJBQW1CTCxVQUFVUCxLQUFLLENBQUNRLE9BQU9DO0lBRWhERCxRQUFRRSxPQUFRLEdBQUc7SUFFbkIsSUFBTUcsb0JBQW9CTixVQUFVUCxLQUFLLENBQUNRLFFBQ3BDWCxPQUFPLEFBQ0wscUJBQUdnQiwwQkFDSCxxQkFBR0Q7SUFHWCxPQUFPZjtBQUNUO0FBRUEsU0FBU1MsY0FBY0gsS0FBSyxFQUFFQyxLQUFLLEVBQUU7SUFDbkMsSUFBSUMsYUFBYSxLQUFLO0lBRXRCLElBQU1TLGNBQWNYLE1BQU1MLE1BQU0sRUFDMUJpQixjQUFjWCxNQUFNTixNQUFNO0lBRWhDLElBQUlnQixnQkFBZ0JDLGFBQWE7UUFDL0IsSUFBTUMsYUFBYWIsT0FDYmMsYUFBYWIsT0FBTyxHQUFHO1FBRTdCQyxhQUFhVyxXQUFXRSxLQUFLLENBQUMsU0FBQ0MsV0FBV1QsT0FBVTtZQUNsRCxJQUFNVSxZQUFZSCxVQUFVLENBQUNQLE1BQU07WUFFbkMsSUFBSVMsY0FBY0MsV0FBVztnQkFDM0IsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO0lBQ0YsQ0FBQztJQUVELE9BQU9mO0FBQ1QifQ==