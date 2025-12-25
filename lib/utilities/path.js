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
    get differenceFromPaths () {
        return differenceFromPaths;
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
var _ruleNames = require("../utilities/ruleNames");
var _cycle = require("../utilities/cycle");
var _part = require("../utilities/part");
var _ruleName = require("../utilities/ruleName");
var last = _necessary.arrayUtilities.last, match = _necessary.arrayUtilities.match, compress = _necessary.arrayUtilities.compress;
function arePathsEqual(pathA, pathB) {
    var ruleNamesA = pathA, ruleNamesB = pathB, ruleNamesMatch = match(ruleNamesA, ruleNamesB, function(ruleNameA, ruleNameB) {
        if (ruleNameA === ruleNameB) {
            return true;
        }
    }), pathsEqual = ruleNamesMatch; ///
    return pathsEqual;
}
function differenceFromPaths(pathA, pathB, ruleName, ruleMap, ruleNamesMap) {
    var difference;
    var pathALength = pathA.length, pathBLength = pathB.length;
    if (false) {
    ///
    } else if (pathALength === 1) {
        difference = -1;
    } else if (pathBLength === 1) {
        difference = +1;
    } else if (pathALength === 0 && pathBLength === 0) {
        difference = 0;
    } else if (pathALength === 0) {
        difference = +1;
    } else if (pathBLength === 0) {
        difference = -1;
    } else {
        var ruleNamesA = pathA.slice(), ruleNamesB = pathB.slice(), ruleNameA = ruleNamesA.shift(), ruleNameB = ruleNamesB.shift();
        if (ruleNameA === ruleNameB) {
            pathA = ruleNamesA; ///
            pathB = ruleNamesB; ///
            ruleName = ruleNameA; ///
            difference = differenceFromPaths(pathA, pathB, ruleName, ruleMap, ruleNamesMap);
        } else {
            var ruleNames = ruleNamesMap[ruleName], indexA = ruleNames.indexOf(ruleNameA), indexB = ruleNames.indexOf(ruleNameB);
            difference = indexA - indexB;
        }
    }
    return difference;
}
function reducedRuleNameFromPath(path) {
    var ruleNames = path, lastRuleName = last(ruleNames), ruleName = lastRuleName, reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName);
    return reducedRuleName;
}
function pathsFromRuleNameAndCycles(ruleName, cycles, ruleMap, ruleNamesMap) {
    var paths = cycles.reduce(function(paths, cycle) {
        var ruleNames = (0, _cycle.ruleNamesFromCycle)(cycle), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
        if (ruleNamesIncludesRuleName) {
            var permutedRuleNames = (0, _ruleNames.permuteRuleNames)(ruleNames, ruleName), path = permutedRuleNames; ///
            paths.push(path);
        }
        return paths;
    }, []);
    var length;
    paths.forEach(function(path) {
        length = path.length;
        while(length > 1){
            path = path.slice(); ///
            path.pop();
            paths.push(path);
            length = path.length;
        }
    });
    compress(paths, function(pathA, pathB) {
        var pathsEqual = arePathsEqual(pathA, pathB);
        if (!pathsEqual) {
            return true;
        }
    });
    ruleName = null;
    paths.sort(function(pathA, pathB) {
        var difference = differenceFromPaths(pathA, pathB, ruleName, ruleMap, ruleNamesMap);
        return difference;
    });
    return paths;
}
function reducedRuleNamePartFromPath(path) {
    var reducedRuleName = reducedRuleNameFromPath(path), reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName);
    return reducedRuleNamePart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHBlcm11dGVSdWxlTmFtZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcnVsZU5hbWVzRnJvbUN5Y2xlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jeWNsZVwiO1xuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgbGFzdCwgbWF0Y2gsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKSB7XG4gIGNvbnN0IHJ1bGVOYW1lc0EgPSBwYXRoQSwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQiwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc01hdGNoID0gbWF0Y2gocnVsZU5hbWVzQSwgcnVsZU5hbWVzQiwgKHJ1bGVOYW1lQSwgcnVsZU5hbWVCKSA9PiB7XG4gICAgICAgICAgaWYgKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwYXRoc0VxdWFsID0gcnVsZU5hbWVzTWF0Y2g7ICAvLy9cblxuICByZXR1cm4gcGF0aHNFcXVhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VGcm9tUGF0aHMocGF0aEEsIHBhdGhCLCBydWxlTmFtZSwgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKSB7XG4gIGxldCBkaWZmZXJlbmNlO1xuXG4gIGNvbnN0IHBhdGhBTGVuZ3RoID0gcGF0aEEubGVuZ3RoLFxuICAgICAgICBwYXRoQkxlbmd0aCA9IHBhdGhCLmxlbmd0aDtcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmICgocGF0aEFMZW5ndGggPT09IDEpKSB7XG4gICAgZGlmZmVyZW5jZSA9IC0xO1xuICB9IGVsc2UgaWYgKChwYXRoQkxlbmd0aCA9PT0gMSkpIHtcbiAgICBkaWZmZXJlbmNlID0gKzE7XG4gIH0gZWxzZSBpZiAoKHBhdGhBTGVuZ3RoID09PSAwKSAmJiAocGF0aEJMZW5ndGggPT09IDApKSB7XG4gICAgZGlmZmVyZW5jZSA9IDA7XG4gIH0gZWxzZSBpZiAoKHBhdGhBTGVuZ3RoID09PSAwKSkge1xuICAgIGRpZmZlcmVuY2UgPSArMTtcbiAgfSBlbHNlIGlmICgocGF0aEJMZW5ndGggPT09IDApKSB7XG4gICAgZGlmZmVyZW5jZSA9IC0xO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJ1bGVOYW1lc0EgPSBwYXRoQS5zbGljZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQi5zbGljZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lQSA9IHJ1bGVOYW1lc0Euc2hpZnQoKSxcbiAgICAgICAgICBydWxlTmFtZUIgPSBydWxlTmFtZXNCLnNoaWZ0KCk7XG5cbiAgICBpZiAocnVsZU5hbWVBID09PSBydWxlTmFtZUIpIHtcbiAgICAgIHBhdGhBID0gcnVsZU5hbWVzQTsgLy8vXG5cbiAgICAgIHBhdGhCID0gcnVsZU5hbWVzQjsgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVBOyAvLy9cblxuICAgICAgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VGcm9tUGF0aHMocGF0aEEsIHBhdGhCLCBydWxlTmFtZSwgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICAgIGluZGV4QSA9IHJ1bGVOYW1lcy5pbmRleE9mKHJ1bGVOYW1lQSksXG4gICAgICAgICAgICBpbmRleEIgPSBydWxlTmFtZXMuaW5kZXhPZihydWxlTmFtZUIpO1xuXG4gICAgICBkaWZmZXJlbmNlID0gKGluZGV4QSAtIGluZGV4Qik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpZmZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHBhdGgsIC8vL1xuICAgICAgICBsYXN0UnVsZU5hbWUgPSBsYXN0KHJ1bGVOYW1lcyksXG4gICAgICAgIHJ1bGVOYW1lID0gbGFzdFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMocnVsZU5hbWUsIGN5Y2xlcywgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKSB7XG4gIGNvbnN0IHBhdGhzID0gY3ljbGVzLnJlZHVjZSgocGF0aHMsIGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICBjb25zdCBwZXJtdXRlZFJ1bGVOYW1lcyA9IHBlcm11dGVSdWxlTmFtZXMocnVsZU5hbWVzLCBydWxlTmFtZSksXG4gICAgICAgICAgICBwYXRoID0gcGVybXV0ZWRSdWxlTmFtZXM7IC8vL1xuXG4gICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRocztcbiAgfSwgW10pO1xuXG4gIGxldCBsZW5ndGg7XG5cbiAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aCA+IDEpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNsaWNlKCk7ICAvLy9cblxuICAgICAgcGF0aC5wb3AoKTtcblxuICAgICAgcGF0aHMucHVzaChwYXRoKTtcblxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgfVxuICB9KTtcblxuICBjb21wcmVzcyhwYXRocywgKHBhdGhBLCBwYXRoQikgPT4ge1xuICAgIGNvbnN0IHBhdGhzRXF1YWwgPSBhcmVQYXRoc0VxdWFsKHBhdGhBLCBwYXRoQik7XG5cbiAgICBpZiAoIXBhdGhzRXF1YWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcnVsZU5hbWUgPSBudWxsO1xuXG4gIHBhdGhzLnNvcnQoKHBhdGhBLCBwYXRoQikgPT4ge1xuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlRnJvbVBhdGhzKHBhdGhBLCBwYXRoQiwgcnVsZU5hbWUsIHJ1bGVNYXAsIHJ1bGVOYW1lc01hcCk7XG5cbiAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhdGhzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lUGFydDtcbn1cbiJdLCJuYW1lcyI6WyJhcmVQYXRoc0VxdWFsIiwiZGlmZmVyZW5jZUZyb21QYXRocyIsInBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGgiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJtYXRjaCIsImNvbXByZXNzIiwicGF0aEEiLCJwYXRoQiIsInJ1bGVOYW1lc0EiLCJydWxlTmFtZXNCIiwicnVsZU5hbWVzTWF0Y2giLCJydWxlTmFtZUEiLCJydWxlTmFtZUIiLCJwYXRoc0VxdWFsIiwicnVsZU5hbWUiLCJydWxlTWFwIiwicnVsZU5hbWVzTWFwIiwiZGlmZmVyZW5jZSIsInBhdGhBTGVuZ3RoIiwibGVuZ3RoIiwicGF0aEJMZW5ndGgiLCJzbGljZSIsInNoaWZ0IiwicnVsZU5hbWVzIiwiaW5kZXhBIiwiaW5kZXhPZiIsImluZGV4QiIsInBhdGgiLCJsYXN0UnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJjeWNsZXMiLCJwYXRocyIsInJlZHVjZSIsImN5Y2xlIiwicnVsZU5hbWVzRnJvbUN5Y2xlIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicGVybXV0ZWRSdWxlTmFtZXMiLCJwZXJtdXRlUnVsZU5hbWVzIiwicHVzaCIsImZvckVhY2giLCJwb3AiLCJzb3J0IiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBV2dCQTtlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBcURBQztlQUFBQTs7UUFUQUM7ZUFBQUE7O1FBMkRBQztlQUFBQTs7O3lCQTdIZTt5QkFFRTtxQkFDRTtvQkFDTTt3QkFDRztBQUU1QyxJQUFRQyxPQUEwQkMseUJBQWMsQ0FBeENELE1BQU1FLFFBQW9CRCx5QkFBYyxDQUFsQ0MsT0FBT0MsV0FBYUYseUJBQWMsQ0FBM0JFO0FBRWQsU0FBU1IsY0FBY1MsS0FBSyxFQUFFQyxLQUFLO0lBQ3hDLElBQU1DLGFBQWFGLE9BQ2JHLGFBQWFGLE9BQ2JHLGlCQUFpQk4sTUFBTUksWUFBWUMsWUFBWSxTQUFDRSxXQUFXQztRQUN6RCxJQUFJRCxjQUFjQyxXQUFXO1lBQzNCLE9BQU87UUFDVDtJQUNGLElBQ0FDLGFBQWFILGdCQUFpQixHQUFHO0lBRXZDLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTZixvQkFBb0JRLEtBQUssRUFBRUMsS0FBSyxFQUFFTyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUMvRSxJQUFJQztJQUVKLElBQU1DLGNBQWNaLE1BQU1hLE1BQU0sRUFDMUJDLGNBQWNiLE1BQU1ZLE1BQU07SUFFaEMsSUFBSSxPQUFPO0lBQ1QsR0FBRztJQUNMLE9BQU8sSUFBS0QsZ0JBQWdCLEdBQUk7UUFDOUJELGFBQWEsQ0FBQztJQUNoQixPQUFPLElBQUtHLGdCQUFnQixHQUFJO1FBQzlCSCxhQUFhLENBQUM7SUFDaEIsT0FBTyxJQUFJLEFBQUNDLGdCQUFnQixLQUFPRSxnQkFBZ0IsR0FBSTtRQUNyREgsYUFBYTtJQUNmLE9BQU8sSUFBS0MsZ0JBQWdCLEdBQUk7UUFDOUJELGFBQWEsQ0FBQztJQUNoQixPQUFPLElBQUtHLGdCQUFnQixHQUFJO1FBQzlCSCxhQUFhLENBQUM7SUFDaEIsT0FBTztRQUNMLElBQU1ULGFBQWFGLE1BQU1lLEtBQUssSUFDeEJaLGFBQWFGLE1BQU1jLEtBQUssSUFDeEJWLFlBQVlILFdBQVdjLEtBQUssSUFDNUJWLFlBQVlILFdBQVdhLEtBQUs7UUFFbEMsSUFBSVgsY0FBY0MsV0FBVztZQUMzQk4sUUFBUUUsWUFBWSxHQUFHO1lBRXZCRCxRQUFRRSxZQUFZLEdBQUc7WUFFdkJLLFdBQVdILFdBQVcsR0FBRztZQUV6Qk0sYUFBYW5CLG9CQUFvQlEsT0FBT0MsT0FBT08sVUFBVUMsU0FBU0M7UUFDcEUsT0FBTztZQUNMLElBQU1PLFlBQVlQLFlBQVksQ0FBQ0YsU0FBUyxFQUNsQ1UsU0FBU0QsVUFBVUUsT0FBTyxDQUFDZCxZQUMzQmUsU0FBU0gsVUFBVUUsT0FBTyxDQUFDYjtZQUVqQ0ssYUFBY08sU0FBU0U7UUFDekI7SUFDRjtJQUVBLE9BQU9UO0FBQ1Q7QUFFTyxTQUFTakIsd0JBQXdCMkIsSUFBSTtJQUMxQyxJQUFNSixZQUFZSSxNQUNaQyxlQUFlMUIsS0FBS3FCLFlBQ3BCVCxXQUFXYyxjQUNYQyxrQkFBa0JDLElBQUFBLHFDQUEyQixFQUFDaEI7SUFFcEQsT0FBT2U7QUFDVDtBQUVPLFNBQVM5QiwyQkFBMkJlLFFBQVEsRUFBRWlCLE1BQU0sRUFBRWhCLE9BQU8sRUFBRUMsWUFBWTtJQUNoRixJQUFNZ0IsUUFBUUQsT0FBT0UsTUFBTSxDQUFDLFNBQUNELE9BQU9FO1FBQ2xDLElBQU1YLFlBQVlZLElBQUFBLHlCQUFrQixFQUFDRCxRQUMvQkUsNEJBQTRCYixVQUFVYyxRQUFRLENBQUN2QjtRQUVyRCxJQUFJc0IsMkJBQTJCO1lBQzdCLElBQU1FLG9CQUFvQkMsSUFBQUEsMkJBQWdCLEVBQUNoQixXQUFXVCxXQUNoRGEsT0FBT1csbUJBQW1CLEdBQUc7WUFFbkNOLE1BQU1RLElBQUksQ0FBQ2I7UUFDYjtRQUVBLE9BQU9LO0lBQ1QsR0FBRyxFQUFFO0lBRUwsSUFBSWI7SUFFSmEsTUFBTVMsT0FBTyxDQUFDLFNBQUNkO1FBQ2JSLFNBQVNRLEtBQUtSLE1BQU07UUFFcEIsTUFBT0EsU0FBUyxFQUFHO1lBQ2pCUSxPQUFPQSxLQUFLTixLQUFLLElBQUssR0FBRztZQUV6Qk0sS0FBS2UsR0FBRztZQUVSVixNQUFNUSxJQUFJLENBQUNiO1lBRVhSLFNBQVNRLEtBQUtSLE1BQU07UUFDdEI7SUFDRjtJQUVBZCxTQUFTMkIsT0FBTyxTQUFDMUIsT0FBT0M7UUFDdEIsSUFBTU0sYUFBYWhCLGNBQWNTLE9BQU9DO1FBRXhDLElBQUksQ0FBQ00sWUFBWTtZQUNmLE9BQU87UUFDVDtJQUNGO0lBRUFDLFdBQVc7SUFFWGtCLE1BQU1XLElBQUksQ0FBQyxTQUFDckMsT0FBT0M7UUFDakIsSUFBTVUsYUFBYW5CLG9CQUFvQlEsT0FBT0MsT0FBT08sVUFBVUMsU0FBU0M7UUFFeEUsT0FBT0M7SUFDVDtJQUVBLE9BQU9lO0FBQ1Q7QUFFTyxTQUFTL0IsNEJBQTRCMEIsSUFBSTtJQUM5QyxJQUFNRSxrQkFBa0I3Qix3QkFBd0IyQixPQUMxQ2lCLHNCQUFzQkMsSUFBQUEsOEJBQXdCLEVBQUNoQjtJQUVyRCxPQUFPZTtBQUNUIn0=