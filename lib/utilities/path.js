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
        var cycleLength = cycle.length;
        for(var length = 1; length <= cycleLength; length++){
            var path = pathFromRuleNameAndCycle(ruleName, cycle, length);
            paths.push(path);
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
    var length = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity;
    var path;
    var ruleNames = cycle, start, end;
    var index = cycle.indexOf(ruleName);
    start = 0;
    end = index; ///
    var leadingRuleNames = ruleNames.slice(start, end);
    start = index; ///
    var trailingRuleNames = ruleNames.slice(start);
    path = _to_consumable_array(trailingRuleNames).concat(_to_consumable_array(leadingRuleNames));
    start = 0;
    end = length; ///
    path = path.slice(start, end);
    return path;
}
function arePathsEqual(pathA, pathB) {
    var pathsEqual = false;
    var pathALength = pathA.length, pathBLength = pathB.length;
    if (pathALength === pathBLength) {
        var ruleNamesA = pathA, ruleNamesB = pathB; ///
        pathsEqual = ruleNamesA.forEach(function(ruleNameA, index) {
            var ruleNameB = ruleNamesB[index];
            if (ruleNameA === ruleNameB) {
                return true;
            }
        });
    }
    return pathsEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tcHJlc3MgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKSB7XG4gIGNvbnN0IHBhdGhzID0gW107XG5cbiAgY3ljbGVzLmZvckVhY2goKGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgY3ljbGVMZW5ndGggPSBjeWNsZS5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBsZW5ndGggPSAxOyBsZW5ndGggPD0gY3ljbGVMZW5ndGg7IGxlbmd0aCsrKSB7XG4gICAgICBjb25zdCBwYXRoID0gcGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlKHJ1bGVOYW1lLCBjeWNsZSwgbGVuZ3RoKTtcblxuICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbXByZXNzKHBhdGhzLCAocGF0aEEsIHBhdGhCKSA9PiB7XG4gICAgY29uc3QgcGF0aHNFcXVhbCA9IGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKTtcblxuICAgIGlmIChwYXRoc0VxdWFsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXRocztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZShydWxlTmFtZSwgY3ljbGUsIGxlbmd0aCA9IEluZmluaXR5KSB7XG4gIGxldCBwYXRoO1xuXG4gIGxldCBydWxlTmFtZXMgPSBjeWNsZSxcbiAgICAgIHN0YXJ0LFxuICAgICAgZW5kO1xuXG4gIGNvbnN0IGluZGV4ID0gY3ljbGUuaW5kZXhPZihydWxlTmFtZSk7XG5cbiAgc3RhcnQgPSAwO1xuXG4gIGVuZCA9IGluZGV4OyAgLy8vXG5cbiAgY29uc3QgbGVhZGluZ1J1bGVOYW1lcyA9IHJ1bGVOYW1lcy5zbGljZShzdGFydCwgZW5kKTtcblxuICBzdGFydCA9IGluZGV4OyAgLy8vXG5cbiAgY29uc3QgdHJhaWxpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQpO1xuXG4gIHBhdGggPSBbXG4gICAgLi4udHJhaWxpbmdSdWxlTmFtZXMsXG4gICAgLi4ubGVhZGluZ1J1bGVOYW1lc1xuICBdO1xuXG4gIHN0YXJ0ID0gMDtcblxuICBlbmQgPSBsZW5ndGg7IC8vL1xuXG4gIHBhdGggPSBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gIHJldHVybiBwYXRoO1xufVxuXG5mdW5jdGlvbiBhcmVQYXRoc0VxdWFsKHBhdGhBLCBwYXRoQikge1xuICBsZXQgcGF0aHNFcXVhbCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhdGhBTGVuZ3RoID0gcGF0aEEubGVuZ3RoLFxuICAgICAgICBwYXRoQkxlbmd0aCA9IHBhdGhCLmxlbmd0aDtcblxuICBpZiAocGF0aEFMZW5ndGggPT09IHBhdGhCTGVuZ3RoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVzQSA9IHBhdGhBLCAvLy9cbiAgICAgICAgICBydWxlTmFtZXNCID0gcGF0aEI7IC8vL1xuXG4gICAgcGF0aHNFcXVhbCA9IHJ1bGVOYW1lc0EuZm9yRWFjaCgocnVsZU5hbWVBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcnVsZU5hbWVCID0gcnVsZU5hbWVzQltpbmRleF07XG5cbiAgICAgIGlmIChydWxlTmFtZUEgPT09IHJ1bGVOYW1lQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXRoc0VxdWFsO1xufVxuIl0sIm5hbWVzIjpbInBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwicGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlIiwicnVsZU5hbWUiLCJjeWNsZXMiLCJwYXRocyIsImZvckVhY2giLCJjeWNsZSIsImN5Y2xlTGVuZ3RoIiwibGVuZ3RoIiwicGF0aCIsInB1c2giLCJjb21wcmVzcyIsInBhdGhBIiwicGF0aEIiLCJwYXRoc0VxdWFsIiwiYXJlUGF0aHNFcXVhbCIsIkluZmluaXR5IiwicnVsZU5hbWVzIiwic3RhcnQiLCJlbmQiLCJpbmRleCIsImluZGV4T2YiLCJsZWFkaW5nUnVsZU5hbWVzIiwic2xpY2UiLCJ0cmFpbGluZ1J1bGVOYW1lcyIsInBhdGhBTGVuZ3RoIiwicGF0aEJMZW5ndGgiLCJydWxlTmFtZXNBIiwicnVsZU5hbWVzQiIsInJ1bGVOYW1lQSIsInJ1bGVOYW1lQiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSwwQkFBMEI7ZUFBMUJBOztJQXdCQUMsd0JBQXdCO2VBQXhCQTs7O3FCQTFCUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsU0FBU0QsMkJBQTJCRSxRQUFRLEVBQUVDLE1BQU0sRUFBRTtJQUMzRCxJQUFNQyxRQUFRLEVBQUU7SUFFaEJELE9BQU9FLE9BQU8sQ0FBQyxTQUFDQyxPQUFVO1FBQ3hCLElBQU1DLGNBQWNELE1BQU1FLE1BQU07UUFFaEMsSUFBSyxJQUFJQSxTQUFTLEdBQUdBLFVBQVVELGFBQWFDLFNBQVU7WUFDcEQsSUFBTUMsT0FBT1IseUJBQXlCQyxVQUFVSSxPQUFPRTtZQUV2REosTUFBTU0sSUFBSSxDQUFDRDtRQUNiO0lBQ0Y7SUFFQUUsSUFBQUEsZUFBUSxFQUFDUCxPQUFPLFNBQUNRLE9BQU9DLE9BQVU7UUFDaEMsSUFBTUMsYUFBYUMsY0FBY0gsT0FBT0M7UUFFeEMsSUFBSUMsWUFBWTtZQUNkLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtJQUVBLE9BQU9WO0FBQ1Q7QUFFTyxTQUFTSCx5QkFBeUJDLFFBQVEsRUFBRUksS0FBSyxFQUFxQjtRQUFuQkUsU0FBQUEsaUVBQVNRLFFBQVE7SUFDekUsSUFBSVA7SUFFSixJQUFJUSxZQUFZWCxPQUNaWSxPQUNBQztJQUVKLElBQU1DLFFBQVFkLE1BQU1lLE9BQU8sQ0FBQ25CO0lBRTVCZ0IsUUFBUTtJQUVSQyxNQUFNQyxPQUFRLEdBQUc7SUFFakIsSUFBTUUsbUJBQW1CTCxVQUFVTSxLQUFLLENBQUNMLE9BQU9DO0lBRWhERCxRQUFRRSxPQUFRLEdBQUc7SUFFbkIsSUFBTUksb0JBQW9CUCxVQUFVTSxLQUFLLENBQUNMO0lBRTFDVCxPQUFPLEFBQ0wscUJBQUdlLDBCQUNILHFCQUFHRjtJQUdMSixRQUFRO0lBRVJDLE1BQU1YLFFBQVEsR0FBRztJQUVqQkMsT0FBT0EsS0FBS2MsS0FBSyxDQUFDTCxPQUFPQztJQUV6QixPQUFPVjtBQUNUO0FBRUEsU0FBU00sY0FBY0gsS0FBSyxFQUFFQyxLQUFLLEVBQUU7SUFDbkMsSUFBSUMsYUFBYSxLQUFLO0lBRXRCLElBQU1XLGNBQWNiLE1BQU1KLE1BQU0sRUFDMUJrQixjQUFjYixNQUFNTCxNQUFNO0lBRWhDLElBQUlpQixnQkFBZ0JDLGFBQWE7UUFDL0IsSUFBTUMsYUFBYWYsT0FDYmdCLGFBQWFmLE9BQU8sR0FBRztRQUU3QkMsYUFBYWEsV0FBV3RCLE9BQU8sQ0FBQyxTQUFDd0IsV0FBV1QsT0FBVTtZQUNwRCxJQUFNVSxZQUFZRixVQUFVLENBQUNSLE1BQU07WUFFbkMsSUFBSVMsY0FBY0MsV0FBVztnQkFDM0IsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO0lBQ0YsQ0FBQztJQUVELE9BQU9oQjtBQUNUIn0=