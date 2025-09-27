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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHBlcm11dGVSdWxlTmFtZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcnVsZU5hbWVzRnJvbUN5Y2xlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jeWNsZVwiO1xuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgbGFzdCwgbWF0Y2gsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKSB7XG4gIGNvbnN0IHJ1bGVOYW1lc0EgPSBwYXRoQSwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQiwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc01hdGNoID0gbWF0Y2gocnVsZU5hbWVzQSwgcnVsZU5hbWVzQiwgKHJ1bGVOYW1lQSwgcnVsZU5hbWVCKSA9PiB7XG4gICAgICAgICAgaWYgKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwYXRoc0VxdWFsID0gcnVsZU5hbWVzTWF0Y2g7ICAvLy9cblxuICByZXR1cm4gcGF0aHNFcXVhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VGcm9tUGF0aHMocGF0aEEsIHBhdGhCLCBydWxlTmFtZSwgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKSB7XG4gIGxldCBkaWZmZXJlbmNlO1xuXG4gIGNvbnN0IHBhdGhBTGVuZ3RoID0gcGF0aEEubGVuZ3RoLFxuICAgICAgICBwYXRoQkxlbmd0aCA9IHBhdGhCLmxlbmd0aDtcblxuICBpZiAoKHBhdGhBTGVuZ3RoID09PSAwKSAmJiAocGF0aEJMZW5ndGggPT09IDApKSB7XG4gICAgZGlmZmVyZW5jZSA9IDA7XG4gIH0gZWxzZSBpZiAocGF0aEFMZW5ndGggPT09IDApIHtcbiAgICBkaWZmZXJlbmNlID0gKzE7XG4gIH0gZWxzZSBpZiAocGF0aEJMZW5ndGggPT09IDApIHtcbiAgICBkaWZmZXJlbmNlID0gLTE7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcnVsZU5hbWVzQSA9IHBhdGhBLnNsaWNlKCksXG4gICAgICAgICAgcnVsZU5hbWVzQiA9IHBhdGhCLnNsaWNlKCksXG4gICAgICAgICAgcnVsZU5hbWVBID0gcnVsZU5hbWVzQS5zaGlmdCgpLFxuICAgICAgICAgIHJ1bGVOYW1lQiA9IHJ1bGVOYW1lc0Iuc2hpZnQoKTtcblxuICAgIGlmIChydWxlTmFtZUEgPT09IHJ1bGVOYW1lQikge1xuICAgICAgcGF0aEEgPSBydWxlTmFtZXNBOyAvLy9cblxuICAgICAgcGF0aEIgPSBydWxlTmFtZXNCOyAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUE7IC8vL1xuXG4gICAgICBkaWZmZXJlbmNlID0gZGlmZmVyZW5jZUZyb21QYXRocyhwYXRoQSwgcGF0aEIsIHJ1bGVOYW1lLCBydWxlTWFwLCBydWxlTmFtZXNNYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgICAgaW5kZXhBID0gcnVsZU5hbWVzLmluZGV4T2YocnVsZU5hbWVBKSxcbiAgICAgICAgICAgIGluZGV4QiA9IHJ1bGVOYW1lcy5pbmRleE9mKHJ1bGVOYW1lQik7XG5cbiAgICAgIGRpZmZlcmVuY2UgPSAoaW5kZXhBIC0gaW5kZXhCKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlmZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcGF0aCwgLy8vXG4gICAgICAgIGxhc3RSdWxlTmFtZSA9IGxhc3QocnVsZU5hbWVzKSxcbiAgICAgICAgcnVsZU5hbWUgPSBsYXN0UnVsZU5hbWUsIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzLCBydWxlTWFwLCBydWxlTmFtZXNNYXApIHtcbiAgY29uc3QgcGF0aHMgPSBjeWNsZXMucmVkdWNlKChwYXRocywgY3ljbGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUpLFxuICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHBlcm11dGVkUnVsZU5hbWVzID0gcGVybXV0ZVJ1bGVOYW1lcyhydWxlTmFtZXMsIHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIHBhdGggPSBwZXJtdXRlZFJ1bGVOYW1lczsgLy8vXG5cbiAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhzO1xuICB9LCBbXSk7XG5cbiAgbGV0IGxlbmd0aDtcblxuICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoID4gMSkge1xuICAgICAgcGF0aCA9IHBhdGguc2xpY2UoKTsgIC8vL1xuXG4gICAgICBwYXRoLnBvcCgpO1xuXG4gICAgICBwYXRocy5wdXNoKHBhdGgpO1xuXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbXByZXNzKHBhdGhzLCAocGF0aEEsIHBhdGhCKSA9PiB7XG4gICAgY29uc3QgcGF0aHNFcXVhbCA9IGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKTtcblxuICAgIGlmIChwYXRoc0VxdWFsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJ1bGVOYW1lID0gbnVsbDtcblxuICBwYXRocy5zb3J0KChwYXRoQSwgcGF0aEIpID0+IHtcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gZGlmZmVyZW5jZUZyb21QYXRocyhwYXRoQSwgcGF0aEIsIHJ1bGVOYW1lLCBydWxlTWFwLCBydWxlTmFtZXNNYXApO1xuXG4gICAgcmV0dXJuIGRpZmZlcmVuY2U7XG4gIH0pO1xuXG4gIHJldHVybiBwYXRocztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZVBhcnQ7XG59XG4iXSwibmFtZXMiOlsiYXJlUGF0aHNFcXVhbCIsImRpZmZlcmVuY2VGcm9tUGF0aHMiLCJwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyIsInJlZHVjZWRSdWxlTmFtZUZyb21QYXRoIiwicmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwibWF0Y2giLCJjb21wcmVzcyIsInBhdGhBIiwicGF0aEIiLCJydWxlTmFtZXNBIiwicnVsZU5hbWVzQiIsInJ1bGVOYW1lc01hdGNoIiwicnVsZU5hbWVBIiwicnVsZU5hbWVCIiwicGF0aHNFcXVhbCIsInJ1bGVOYW1lIiwicnVsZU1hcCIsInJ1bGVOYW1lc01hcCIsImRpZmZlcmVuY2UiLCJwYXRoQUxlbmd0aCIsImxlbmd0aCIsInBhdGhCTGVuZ3RoIiwic2xpY2UiLCJzaGlmdCIsInJ1bGVOYW1lcyIsImluZGV4QSIsImluZGV4T2YiLCJpbmRleEIiLCJwYXRoIiwibGFzdFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiY3ljbGVzIiwicGF0aHMiLCJyZWR1Y2UiLCJjeWNsZSIsInJ1bGVOYW1lc0Zyb21DeWNsZSIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInBlcm11dGVkUnVsZU5hbWVzIiwicGVybXV0ZVJ1bGVOYW1lcyIsInB1c2giLCJmb3JFYWNoIiwicG9wIiwic29ydCIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVdnQkE7ZUFBQUE7O1FBYUFDO2VBQUFBOztRQStDQUM7ZUFBQUE7O1FBVEFDO2VBQUFBOztRQTJEQUM7ZUFBQUE7Ozt5QkF2SGU7eUJBRUU7cUJBQ0U7b0JBQ007d0JBQ0c7QUFFNUMsSUFBUUMsT0FBMEJDLHlCQUFjLENBQXhDRCxNQUFNRSxRQUFvQkQseUJBQWMsQ0FBbENDLE9BQU9DLFdBQWFGLHlCQUFjLENBQTNCRTtBQUVkLFNBQVNSLGNBQWNTLEtBQUssRUFBRUMsS0FBSztJQUN4QyxJQUFNQyxhQUFhRixPQUNiRyxhQUFhRixPQUNiRyxpQkFBaUJOLE1BQU1JLFlBQVlDLFlBQVksU0FBQ0UsV0FBV0M7UUFDekQsSUFBSUQsY0FBY0MsV0FBVztZQUMzQixPQUFPO1FBQ1Q7SUFDRixJQUNBQyxhQUFhSCxnQkFBaUIsR0FBRztJQUV2QyxPQUFPRztBQUNUO0FBRU8sU0FBU2Ys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