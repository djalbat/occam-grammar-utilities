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
function reducedRuleNameFromPath(path) {
    var ruleNames = path, lastRuleName = last(ruleNames), ruleName = lastRuleName, reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName);
    return reducedRuleName;
}
function pathsFromRuleNameAndCycles(ruleName, cycles, ruleMap, ruleNamesMap) {
    var paths = cycles.reduce(function(paths, cycle) {
        var ruleNames = (0, _cycle.ruleNamesFromCycle)(cycle), ruleNamesLength = ruleNames.length;
        if (ruleNamesLength > 1) {
            var ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
            if (ruleNamesIncludesRuleName) {
                var permutedRuleNames = (0, _ruleNames.permuteRuleNames)(ruleNames, ruleName), path = permutedRuleNames; ///
                paths.push(path);
            }
        }
        return paths;
    }, []);
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
function differenceFromPaths(pathA, pathB, ruleName, ruleMap, ruleNamesMap) {
    var difference;
    var pathALength = pathA.length, pathBLength = pathB.length;
    if (pathALength === 0 && pathBLength === 0) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHBlcm11dGVSdWxlTmFtZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcnVsZU5hbWVzRnJvbUN5Y2xlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jeWNsZVwiO1xuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgbGFzdCwgbWF0Y2gsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKSB7XG4gIGNvbnN0IHJ1bGVOYW1lc0EgPSBwYXRoQSwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQiwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc01hdGNoID0gbWF0Y2gocnVsZU5hbWVzQSwgcnVsZU5hbWVzQiwgKHJ1bGVOYW1lQSwgcnVsZU5hbWVCKSA9PiB7XG4gICAgICAgICAgaWYgKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwYXRoc0VxdWFsID0gcnVsZU5hbWVzTWF0Y2g7ICAvLy9cblxuICByZXR1cm4gcGF0aHNFcXVhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcGF0aCwgLy8vXG4gICAgICAgIGxhc3RSdWxlTmFtZSA9IGxhc3QocnVsZU5hbWVzKSxcbiAgICAgICAgcnVsZU5hbWUgPSBsYXN0UnVsZU5hbWUsIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzLCBydWxlTWFwLCBydWxlTmFtZXNNYXApIHtcbiAgY29uc3QgcGF0aHMgPSBjeWNsZXMucmVkdWNlKChwYXRocywgY3ljbGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUpLFxuICAgICAgICAgIHJ1bGVOYW1lc0xlbmd0aCA9IHJ1bGVOYW1lcy5sZW5ndGg7XG5cbiAgICBpZiAocnVsZU5hbWVzTGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHBlcm11dGVkUnVsZU5hbWVzID0gcGVybXV0ZVJ1bGVOYW1lcyhydWxlTmFtZXMsIHJ1bGVOYW1lKSxcbiAgICAgICAgICAgICAgcGF0aCA9IHBlcm11dGVkUnVsZU5hbWVzOyAvLy9cblxuICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXRocztcbiAgfSwgW10pO1xuXG4gIGxldCBsZW5ndGg7XG5cbiAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aCA+IDIpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNsaWNlKCk7ICAvLy9cblxuICAgICAgcGF0aC5wb3AoKTtcblxuICAgICAgcGF0aHMucHVzaChwYXRoKTtcblxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgfVxuICB9KTtcblxuICBjb21wcmVzcyhwYXRocywgKHBhdGhBLCBwYXRoQikgPT4ge1xuICAgIGNvbnN0IHBhdGhzRXF1YWwgPSBhcmVQYXRoc0VxdWFsKHBhdGhBLCBwYXRoQik7XG5cbiAgICBpZiAocGF0aHNFcXVhbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBydWxlTmFtZSA9IG51bGw7XG5cbiAgcGF0aHMuc29ydCgocGF0aEEsIHBhdGhCKSA9PiB7XG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VGcm9tUGF0aHMocGF0aEEsIHBhdGhCLCBydWxlTmFtZSwgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKTtcblxuICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICB9KTtcblxuICByZXR1cm4gcGF0aHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGgocGF0aCkge1xuICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWVQYXJ0O1xufVxuXG5mdW5jdGlvbiBkaWZmZXJlbmNlRnJvbVBhdGhzKHBhdGhBLCBwYXRoQiwgcnVsZU5hbWUsIHJ1bGVNYXAsIHJ1bGVOYW1lc01hcCkge1xuICBsZXQgZGlmZmVyZW5jZTtcblxuICBjb25zdCBwYXRoQUxlbmd0aCA9IHBhdGhBLmxlbmd0aCxcbiAgICAgICAgcGF0aEJMZW5ndGggPSBwYXRoQi5sZW5ndGg7XG5cbiAgaWYgKChwYXRoQUxlbmd0aCA9PT0gMCkgJiYgKHBhdGhCTGVuZ3RoID09PSAwKSkge1xuICAgIGRpZmZlcmVuY2UgPSAwO1xuICB9IGVsc2UgaWYgKHBhdGhBTGVuZ3RoID09PSAwKSB7XG4gICAgZGlmZmVyZW5jZSA9ICsxO1xuICB9IGVsc2UgaWYgKHBhdGhCTGVuZ3RoID09PSAwKSB7XG4gICAgZGlmZmVyZW5jZSA9IC0xO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJ1bGVOYW1lc0EgPSBwYXRoQS5zbGljZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQi5zbGljZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lQSA9IHJ1bGVOYW1lc0Euc2hpZnQoKSxcbiAgICAgICAgICBydWxlTmFtZUIgPSBydWxlTmFtZXNCLnNoaWZ0KCk7XG5cbiAgICBpZiAocnVsZU5hbWVBID09PSBydWxlTmFtZUIpIHtcbiAgICAgIHBhdGhBID0gcnVsZU5hbWVzQTsgLy8vXG5cbiAgICAgIHBhdGhCID0gcnVsZU5hbWVzQjsgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVBOyAvLy9cblxuICAgICAgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VGcm9tUGF0aHMocGF0aEEsIHBhdGhCLCBydWxlTmFtZSwgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICAgIGluZGV4QSA9IHJ1bGVOYW1lcy5pbmRleE9mKHJ1bGVOYW1lQSksXG4gICAgICAgICAgICBpbmRleEIgPSBydWxlTmFtZXMuaW5kZXhPZihydWxlTmFtZUIpO1xuXG4gICAgICBkaWZmZXJlbmNlID0gKGluZGV4QSAtIGluZGV4Qik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpZmZlcmVuY2U7XG59XG4iXSwibmFtZXMiOlsiYXJlUGF0aHNFcXVhbCIsInBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGgiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJtYXRjaCIsImNvbXByZXNzIiwicGF0aEEiLCJwYXRoQiIsInJ1bGVOYW1lc0EiLCJydWxlTmFtZXNCIiwicnVsZU5hbWVzTWF0Y2giLCJydWxlTmFtZUEiLCJydWxlTmFtZUIiLCJwYXRoc0VxdWFsIiwicGF0aCIsInJ1bGVOYW1lcyIsImxhc3RSdWxlTmFtZSIsInJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lc01hcCIsInBhdGhzIiwicmVkdWNlIiwiY3ljbGUiLCJydWxlTmFtZXNGcm9tQ3ljbGUiLCJydWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJwZXJtdXRlZFJ1bGVOYW1lcyIsInBlcm11dGVSdWxlTmFtZXMiLCJwdXNoIiwiZm9yRWFjaCIsInNsaWNlIiwicG9wIiwic29ydCIsImRpZmZlcmVuY2UiLCJkaWZmZXJlbmNlRnJvbVBhdGhzIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInBhdGhBTGVuZ3RoIiwicGF0aEJMZW5ndGgiLCJzaGlmdCIsImluZGV4QSIsImluZGV4T2YiLCJpbmRleEIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVdnQkE7ZUFBQUE7O1FBc0JBQztlQUFBQTs7UUFUQUM7ZUFBQUE7O1FBK0RBQztlQUFBQTs7O3lCQXJGZTt5QkFFRTtxQkFDRTtvQkFDTTt3QkFDRztBQUU1QyxJQUFRQyxPQUEwQkMseUJBQWMsQ0FBeENELE1BQU1FLFFBQW9CRCx5QkFBYyxDQUFsQ0MsT0FBT0MsV0FBYUYseUJBQWMsQ0FBM0JFO0FBRWQsU0FBU1AsY0FBY1EsS0FBSyxFQUFFQyxLQUFLO0lBQ3hDLElBQU1DLGFBQWFGLE9BQ2JHLGFBQWFGLE9BQ2JHLGlCQUFpQk4sTUFBTUksWUFBWUMsWUFBWSxTQUFDRSxXQUFX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