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
var compress = _necessary.arrayUtilities.compress;
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
        var pathsEqual = arePathsEqual(pathA, pathB);
        if (pathsEqual) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMocnVsZU5hbWUsIGN5Y2xlcykge1xuICBjb25zdCBwYXRocyA9IFtdO1xuXG4gIGN5Y2xlcy5mb3JFYWNoKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSksXG4gICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgbGV0IHBhdGggPSBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKTtcblxuICAgICAgbGV0IGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAobGVuZ3RoID4gMSkge1xuICAgICAgICBwYXRocy51bnNoaWZ0KHBhdGgpO1xuXG4gICAgICAgIHBhdGggPSBwYXRoLnNsaWNlKCk7ICAvLy9cblxuICAgICAgICBwYXRoLnBvcCgpO1xuXG4gICAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29tcHJlc3MocGF0aHMsIChwYXRoQSwgcGF0aEIpID0+IHtcbiAgICBjb25zdCBwYXRoc0VxdWFsID0gYXJlUGF0aHNFcXVhbChwYXRoQSwgcGF0aEIpO1xuXG4gICAgaWYgKHBhdGhzRXF1YWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhdGhzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlKHJ1bGVOYW1lLCBjeWNsZSkge1xuICBsZXQgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgIHN0YXJ0LFxuICAgICAgZW5kO1xuXG4gIGNvbnN0IGluZGV4ID0gcnVsZU5hbWVzLmluZGV4T2YocnVsZU5hbWUpO1xuXG4gIHN0YXJ0ID0gMDtcblxuICBlbmQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IGxlYWRpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgc3RhcnQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IHRyYWlsaW5nUnVsZU5hbWVzID0gcnVsZU5hbWVzLnNsaWNlKHN0YXJ0KSxcbiAgICAgICAgcGF0aCA9IFtcbiAgICAgICAgICAuLi50cmFpbGluZ1J1bGVOYW1lcyxcbiAgICAgICAgICAuLi5sZWFkaW5nUnVsZU5hbWVzXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKSB7XG4gIGxldCBwYXRoc0VxdWFsID0gZmFsc2U7XG5cbiAgY29uc3QgcGF0aEFMZW5ndGggPSBwYXRoQS5sZW5ndGgsXG4gICAgICAgIHBhdGhCTGVuZ3RoID0gcGF0aEIubGVuZ3RoO1xuXG4gIGlmIChwYXRoQUxlbmd0aCA9PT0gcGF0aEJMZW5ndGgpIHtcbiAgICBjb25zdCBydWxlTmFtZXNBID0gcGF0aEEsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQjsgLy8vXG5cbiAgICBwYXRoc0VxdWFsID0gcnVsZU5hbWVzQS5ldmVyeSgocnVsZU5hbWVBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcnVsZU5hbWVCID0gcnVsZU5hbWVzQltpbmRleF07XG5cbiAgICAgIGlmIChydWxlTmFtZUEgPT09IHJ1bGVOYW1lQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXRoc0VxdWFsO1xufVxuIl0sIm5hbWVzIjpbInBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZSIsInBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVOYW1lIiwiY3ljbGVzIiwicGF0aHMiLCJmb3JFYWNoIiwiY3ljbGUiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGUiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJwYXRoIiwibGVuZ3RoIiwidW5zaGlmdCIsInNsaWNlIiwicG9wIiwicGF0aEEiLCJwYXRoQiIsInBhdGhzRXF1YWwiLCJhcmVQYXRoc0VxdWFsIiwic3RhcnQiLCJlbmQiLCJpbmRleCIsImluZGV4T2YiLCJsZWFkaW5nUnVsZU5hbWVzIiwidHJhaWxpbmdSdWxlTmFtZXMiLCJwYXRoQUxlbmd0aCIsInBhdGhCTGVuZ3RoIiwicnVsZU5hbWVzQSIsInJ1bGVOYW1lc0IiLCJldmVyeSIsInJ1bGVOYW1lQSIsInJ1bGVOYW1lQiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMkNnQkEsd0JBQXdCO2VBQXhCQTs7SUFuQ0FDLDBCQUEwQjtlQUExQkE7Ozt5QkFOZTt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBTSxBQUFFQyxXQUFhQyx5QkFBYyxDQUEzQkQ7QUFFRCxTQUFTRCwyQkFBMkJHLFFBQVEsRUFBRUMsTUFBTTtJQUN6RCxJQUFNQyxRQUFRLEVBQUU7SUFFaEJELE9BQU9FLE9BQU8sQ0FBQyxTQUFDQztRQUNkLElBQU1DLFlBQVlDLElBQUFBLDZCQUFrQixFQUFDRixRQUMvQkcsNEJBQTRCRixVQUFVRyxRQUFRLENBQUNSO1FBRXJELElBQUlPLDJCQUEyQjtZQUM3QixJQUFJRSxPQUFPYix5QkFBeUJJLFVBQVVJO1lBRTlDLElBQUlNLFNBQVNELEtBQUtDLE1BQU07WUFFeEIsTUFBT0EsU0FBUyxFQUFHO2dCQUNqQlIsTUFBTVMsT0FBTyxDQUFDRjtnQkFFZEEsT0FBT0EsS0FBS0csS0FBSyxJQUFLLEdBQUc7Z0JBRXpCSCxLQUFLSSxHQUFHO2dCQUVSSCxTQUFTRCxLQUFLQyxNQUFNO1lBQ3RCO1FBQ0Y7SUFDRjtJQUVBWixTQUFTSSxPQUFPLFNBQUNZLE9BQU9DO1FBQ3RCLElBQU1DLGFBQWFDLGNBQWNILE9BQU9DO1FBRXhDLElBQUlDLFlBQVk7WUFDZCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9kO0FBQ1Q7QUFFTyxTQUFTTix5QkFBeUJJLFFBQVEsRUFBRUksS0FBSztJQUN0RCxJQUFJQyxZQUFZQyxJQUFBQSw2QkFBa0IsRUFBQ0YsUUFDL0JjLE9BQ0FDO0lBRUosSUFBTUMsUUFBUWYsVUFBVWdCLE9BQU8sQ0FBQ3JCO0lBRWhDa0IsUUFBUTtJQUVSQyxNQUFNQyxPQUFRLEdBQUc7SUFFakIsSUFBTUUsbUJBQW1CakIsVUFBVU8sS0FBSyxDQUFDTSxPQUFPQztJQUVoREQsUUFBUUUsT0FBUSxHQUFHO0lBRW5CLElBQU1HLG9CQUFvQmxCLFVBQVVPLEtBQUssQ0FBQ00sUUFDcENULE9BQU8sQUFDTCxxQkFBR2MsMEJBQ0gscUJBQUdEO0lBR1gsT0FBT2I7QUFDVDtBQUVBLFNBQVNRLGNBQWNILEtBQUssRUFBRUMsS0FBSztJQUNqQyxJQUFJQyxhQUFhO0lBRWpCLElBQU1RLGNBQWNWLE1BQU1KLE1BQU0sRUFDMUJlLGNBQWNWLE1BQU1MLE1BQU07SUFFaEMsSUFBSWMsZ0JBQWdCQyxhQUFhO1FBQy9CLElBQU1DLGFBQWFaLE9BQ2JhLGFBQWFaLE9BQU8sR0FBRztRQUU3QkMsYUFBYVUsV0FBV0UsS0FBSyxDQUFDLFNBQUNDLFdBQVdUO1lBQ3hDLElBQU1VLFlBQVlILFVBQVUsQ0FBQ1AsTUFBTTtZQUVuQyxJQUFJUyxjQUFjQyxXQUFXO2dCQUMzQixPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT2Q7QUFDVCJ9