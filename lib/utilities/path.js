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
    }
});
var _necessary = require("necessary");
var _cycle = require("../utilities/cycle");
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
var match = _necessary.arrayUtilities.match, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
function arePathsEqual(pathA, pathB) {
    var ruleNamesA = pathA, ruleNamesB = pathB, ruleNamesMatch = match(ruleNamesA, ruleNamesB, function(ruleNameA, ruleNameB) {
        if (ruleNameA === ruleNameB) {
            return true;
        }
    }), pathsEqual = ruleNamesMatch; ///
    return pathsEqual;
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
function pathsFromRuleNameAndCycles(ruleName, cycles) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3ljbGVcIjtcblxuY29uc3QgeyBtYXRjaCwgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVQYXRoc0VxdWFsKHBhdGhBLCBwYXRoQikge1xuICBjb25zdCBydWxlTmFtZXNBID0gcGF0aEEsIC8vL1xuICAgICAgICBydWxlTmFtZXNCID0gcGF0aEIsIC8vL1xuICAgICAgICBydWxlTmFtZXNNYXRjaCA9IG1hdGNoKHJ1bGVOYW1lc0EsIHJ1bGVOYW1lc0IsIChydWxlTmFtZUEsIHJ1bGVOYW1lQikgPT4ge1xuICAgICAgICAgIGlmIChydWxlTmFtZUEgPT09IHJ1bGVOYW1lQikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgcGF0aHNFcXVhbCA9IHJ1bGVOYW1lc01hdGNoOyAgLy8vXG5cbiAgcmV0dXJuIHBhdGhzRXF1YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKSB7XG4gIGxldCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUpLFxuICAgICAgc3RhcnQsXG4gICAgICBlbmQ7XG5cbiAgY29uc3QgaW5kZXggPSBydWxlTmFtZXMuaW5kZXhPZihydWxlTmFtZSk7XG5cbiAgc3RhcnQgPSAwO1xuXG4gIGVuZCA9IGluZGV4OyAgLy8vXG5cbiAgY29uc3QgbGVhZGluZ1J1bGVOYW1lcyA9IHJ1bGVOYW1lcy5zbGljZShzdGFydCwgZW5kKTtcblxuICBzdGFydCA9IGluZGV4OyAgLy8vXG5cbiAgY29uc3QgdHJhaWxpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQpLFxuICAgICAgICBwYXRoID0gW1xuICAgICAgICAgIC4uLnRyYWlsaW5nUnVsZU5hbWVzLFxuICAgICAgICAgIC4uLmxlYWRpbmdSdWxlTmFtZXNcbiAgICAgICAgXTtcblxuICByZXR1cm4gcGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpIHtcbiAgY29uc3QgcGF0aHMgPSBjeWNsZXMubWFwKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKTtcblxuICAgIHJldHVybiBwYXRoO1xuICB9KTtcblxuICBmaWx0ZXIocGF0aHMsIChwYXRoKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gcGF0aCwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBsZXQgbGVuZ3RoO1xuXG4gIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGggPiAyKSB7XG4gICAgICBwYXRoID0gcGF0aC5zbGljZSgpOyAgLy8vXG5cbiAgICAgIHBhdGgucG9wKCk7XG5cbiAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG5cbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG5cbiAgY29tcHJlc3MocGF0aHMsIChwYXRoQSwgcGF0aEIpID0+IHtcbiAgICBjb25zdCBwYXRoc0VxdWFsID0gYXJlUGF0aHNFcXVhbChwYXRoQSwgcGF0aEIpO1xuXG4gICAgaWYgKHBhdGhzRXF1YWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhdGhzO1xufVxuIl0sIm5hbWVzIjpbImFyZVBhdGhzRXF1YWwiLCJwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUiLCJwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyIsIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJjb21wcmVzcyIsInBhdGhBIiwicGF0aEIiLCJydWxlTmFtZXNBIiwicnVsZU5hbWVzQiIsInJ1bGVOYW1lc01hdGNoIiwicnVsZU5hbWVBIiwicnVsZU5hbWVCIiwicGF0aHNFcXVhbCIsInJ1bGVOYW1lIiwiY3ljbGUiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGUiLCJzdGFydCIsImVuZCIsImluZGV4IiwiaW5kZXhPZiIsImxlYWRpbmdSdWxlTmFtZXMiLCJzbGljZSIsInRyYWlsaW5nUnVsZU5hbWVzIiwicGF0aCIsImN5Y2xlcyIsInBhdGhzIiwibWFwIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwibGVuZ3RoIiwiZm9yRWFjaCIsInBvcCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVFnQkE7ZUFBQUE7O1FBYUFDO2VBQUFBOztRQXdCQUM7ZUFBQUE7Ozt5QkEzQ2U7cUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQVFDLFFBQTRCQyx5QkFBYyxDQUExQ0QsT0FBT0UsU0FBcUJELHlCQUFjLENBQW5DQyxRQUFRQyxXQUFhRix5QkFBYyxDQUEzQkU7QUFFaEIsU0FBU04sY0FBY08sS0FBSyxFQUFFQyxLQUFLO0lBQ3hDLElBQU1DLGFBQWFGLE9BQ2JHLGFBQWFGLE9BQ2JHLGlCQUFpQlIsTUFBTU0sWUFBWUMsWUFBWSxTQUFDRSxXQUFXQztRQUN6RCxJQUFJRCxjQUFjQyxXQUFXO1lBQzNCLE9BQU87UUFDVDtJQUNGLElBQ0FDLGFBQWFILGdCQUFpQixHQUFHO0lBRXZDLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTYix5QkFBeUJjLFFBQVEsRUFBRUMsS0FBSztJQUN0RCxJQUFJQyxZQUFZQyxJQUFBQSx5QkFBa0IsRUFBQ0YsUUFDL0JHLE9BQ0FDO0lBRUosSUFBTUMsUUFBUUosVUFBVUssT0FBTyxDQUFDUDtJQUVoQ0ksUUFBUTtJQUVSQyxNQUFNQyxPQUFRLEdBQUc7SUFFakIsSUFBTUUsbUJBQW1CTixVQUFVTyxLQUFLLENBQUNMLE9BQU9DO0lBRWhERCxRQUFRRSxPQUFRLEdBQUc7SUFFbkIsSUFBTUksb0JBQW9CUixVQUFVTyxLQUFLLENBQUNMLFFBQ3BDTyxPQUFPLEFBQ0wscUJBQUdELDBCQUNILHFCQUFHRjtJQUdYLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTeEIsMkJBQTJCYSxRQUFRLEVBQUVZLE1BQU07SUFDekQsSUFBTUMsUUFBUUQsT0FBT0UsR0FBRyxDQUFDLFNBQUNiO1FBQ3hCLElBQU1VLE9BQU96Qix5QkFBeUJjLFVBQVVDO1FBRWhELE9BQU9VO0lBQ1Q7SUFFQXJCLE9BQU91QixPQUFPLFNBQUNGO1FBQ2IsSUFBTVQsWUFBWVMsTUFDWkksNEJBQTRCYixVQUFVYyxRQUFRLENBQUNoQjtRQUVyRCxJQUFJZSwyQkFBMkI7WUFDN0IsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJRTtJQUVKSixNQUFNSyxPQUFPLENBQUMsU0FBQ1A7UUFDYk0sU0FBU04sS0FBS00sTUFBTTtRQUVwQixNQUFPQSxTQUFTLEVBQUc7WUFDakJOLE9BQU9BLEtBQUtGLEtBQUssSUFBSyxHQUFHO1lBRXpCRSxLQUFLUSxHQUFHO1lBRVJOLE1BQU1PLElBQUksQ0FBQ1Q7WUFFWE0sU0FBU04sS0FBS00sTUFBTTtRQUN0QjtJQUNGO0lBRUExQixTQUFTc0IsT0FBTyxTQUFDckIsT0FBT0M7UUFDdEIsSUFBTU0sYUFBYWQsY0FBY08sT0FBT0M7UUFFeEMsSUFBSU0sWUFBWTtZQUNkLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT2M7QUFDVCJ9