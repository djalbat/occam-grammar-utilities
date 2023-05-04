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
var _necessary = require("necessary");
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
var compress = _necessary.arrayUtilities.compress;
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
    compress(paths, function(pathA, pathB) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMocnVsZU5hbWUsIGN5Y2xlcykge1xuICBjb25zdCBwYXRocyA9IFtdO1xuXG4gIGN5Y2xlcy5mb3JFYWNoKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IGN5Y2xlSW5jbHVkZXNSdWxlTmFtZSA9IGN5Y2xlLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChjeWNsZUluY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIGxldCBwYXRoID0gcGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlKHJ1bGVOYW1lLCBjeWNsZSk7XG5cbiAgICAgIGxldCBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGF0aHMudW5zaGlmdChwYXRoKTtcblxuICAgICAgICBwYXRoID0gcGF0aC5zbGljZSgpOyAgLy8vXG5cbiAgICAgICAgcGF0aC5wb3AoKTtcblxuICAgICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbXByZXNzKHBhdGhzLCAocGF0aEEsIHBhdGhCKSA9PiB7XG4gICAgY29uc3QgcGF0aHNFcXVhbCA9IGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKTtcblxuICAgIGlmIChwYXRoc0VxdWFsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXRocztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZShydWxlTmFtZSwgY3ljbGUpIHtcbiAgbGV0IHJ1bGVOYW1lcyA9IGN5Y2xlLFxuICAgICAgc3RhcnQsXG4gICAgICBlbmQ7XG5cbiAgY29uc3QgaW5kZXggPSBjeWNsZS5pbmRleE9mKHJ1bGVOYW1lKTtcblxuICBzdGFydCA9IDA7XG5cbiAgZW5kID0gaW5kZXg7ICAvLy9cblxuICBjb25zdCBsZWFkaW5nUnVsZU5hbWVzID0gcnVsZU5hbWVzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gIHN0YXJ0ID0gaW5kZXg7ICAvLy9cblxuICBjb25zdCB0cmFpbGluZ1J1bGVOYW1lcyA9IHJ1bGVOYW1lcy5zbGljZShzdGFydCksXG4gICAgICAgIHBhdGggPSBbXG4gICAgICAgICAgLi4udHJhaWxpbmdSdWxlTmFtZXMsXG4gICAgICAgICAgLi4ubGVhZGluZ1J1bGVOYW1lc1xuICAgICAgICBdO1xuXG4gIHJldHVybiBwYXRoO1xufVxuXG5mdW5jdGlvbiBhcmVQYXRoc0VxdWFsKHBhdGhBLCBwYXRoQikge1xuICBsZXQgcGF0aHNFcXVhbCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhdGhBTGVuZ3RoID0gcGF0aEEubGVuZ3RoLFxuICAgICAgICBwYXRoQkxlbmd0aCA9IHBhdGhCLmxlbmd0aDtcblxuICBpZiAocGF0aEFMZW5ndGggPT09IHBhdGhCTGVuZ3RoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVzQSA9IHBhdGhBLCAvLy9cbiAgICAgICAgICBydWxlTmFtZXNCID0gcGF0aEI7IC8vL1xuXG4gICAgcGF0aHNFcXVhbCA9IHJ1bGVOYW1lc0EuZXZlcnkoKHJ1bGVOYW1lQSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lQiA9IHJ1bGVOYW1lc0JbaW5kZXhdO1xuXG4gICAgICBpZiAocnVsZU5hbWVBID09PSBydWxlTmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGF0aHNFcXVhbDtcbn1cbiJdLCJuYW1lcyI6WyJwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyIsInBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZSIsImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImN5Y2xlcyIsInBhdGhzIiwiZm9yRWFjaCIsImN5Y2xlIiwiY3ljbGVJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJwYXRoIiwibGVuZ3RoIiwidW5zaGlmdCIsInNsaWNlIiwicG9wIiwicGF0aEEiLCJwYXRoQiIsInBhdGhzRXF1YWwiLCJhcmVQYXRoc0VxdWFsIiwicnVsZU5hbWVzIiwic3RhcnQiLCJlbmQiLCJpbmRleCIsImluZGV4T2YiLCJsZWFkaW5nUnVsZU5hbWVzIiwidHJhaWxpbmdSdWxlTmFtZXMiLCJwYXRoQUxlbmd0aCIsInBhdGhCTGVuZ3RoIiwicnVsZU5hbWVzQSIsInJ1bGVOYW1lc0IiLCJldmVyeSIsInJ1bGVOYW1lQSIsInJ1bGVOYW1lQiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWdCQSwwQkFBMEI7ZUFBMUJBOztJQWtDQUMsd0JBQXdCO2VBQXhCQTs7O3lCQXRDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTSxBQUFFQyxXQUFhQyx5QkFBYyxDQUEzQkQ7QUFFRCxTQUFTRiwyQkFBMkJJLFFBQVEsRUFBRUMsTUFBTSxFQUFFO0lBQzNELElBQU1DLFFBQVEsRUFBRTtJQUVoQkQsT0FBT0UsT0FBTyxDQUFDLFNBQUNDLE9BQVU7UUFDeEIsSUFBTUMsd0JBQXdCRCxNQUFNRSxRQUFRLENBQUNOO1FBRTdDLElBQUlLLHVCQUF1QjtZQUN6QixJQUFJRSxPQUFPVix5QkFBeUJHLFVBQVVJO1lBRTlDLElBQUlJLFNBQVNELEtBQUtDLE1BQU07WUFFeEIsTUFBT0EsU0FBUyxFQUFHO2dCQUNqQk4sTUFBTU8sT0FBTyxDQUFDRjtnQkFFZEEsT0FBT0EsS0FBS0csS0FBSyxJQUFLLEdBQUc7Z0JBRXpCSCxLQUFLSSxHQUFHO2dCQUVSSCxTQUFTRCxLQUFLQyxNQUFNO1lBQ3RCO1FBQ0YsQ0FBQztJQUNIO0lBRUFWLFNBQVNJLE9BQU8sU0FBQ1UsT0FBT0MsT0FBVTtRQUNoQyxJQUFNQyxhQUFhQyxjQUFjSCxPQUFPQztRQUV4QyxJQUFJQyxZQUFZO1lBQ2QsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUEsT0FBT1o7QUFDVDtBQUVPLFNBQVNMLHlCQUF5QkcsUUFBUSxFQUFFSSxLQUFLLEVBQUU7SUFDeEQsSUFBSVksWUFBWVosT0FDWmEsT0FDQUM7SUFFSixJQUFNQyxRQUFRZixNQUFNZ0IsT0FBTyxDQUFDcEI7SUFFNUJpQixRQUFRO0lBRVJDLE1BQU1DLE9BQVEsR0FBRztJQUVqQixJQUFNRSxtQkFBbUJMLFVBQVVOLEtBQUssQ0FBQ08sT0FBT0M7SUFFaERELFFBQVFFLE9BQVEsR0FBRztJQUVuQixJQUFNRyxvQkFBb0JOLFVBQVVOLEtBQUssQ0FBQ08sUUFDcENWLE9BQU8sQUFDTCxxQkFBR2UsMEJBQ0gscUJBQUdEO0lBR1gsT0FBT2Q7QUFDVDtBQUVBLFNBQVNRLGNBQWNILEtBQUssRUFBRUMsS0FBSyxFQUFFO0lBQ25DLElBQUlDLGFBQWEsS0FBSztJQUV0QixJQUFNUyxjQUFjWCxNQUFNSixNQUFNLEVBQzFCZ0IsY0FBY1gsTUFBTUwsTUFBTTtJQUVoQyxJQUFJZSxnQkFBZ0JDLGFBQWE7UUFDL0IsSUFBTUMsYUFBYWIsT0FDYmMsYUFBYWIsT0FBTyxHQUFHO1FBRTdCQyxhQUFhVyxXQUFXRSxLQUFLLENBQUMsU0FBQ0MsV0FBV1QsT0FBVTtZQUNsRCxJQUFNVSxZQUFZSCxVQUFVLENBQUNQLE1BQU07WUFFbkMsSUFBSVMsY0FBY0MsV0FBVztnQkFDM0IsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO0lBQ0YsQ0FBQztJQUVELE9BQU9mO0FBQ1QifQ==