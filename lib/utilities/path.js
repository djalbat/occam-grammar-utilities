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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHBlcm11dGVSdWxlTmFtZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcnVsZU5hbWVzRnJvbUN5Y2xlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jeWNsZVwiO1xuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgbGFzdCwgbWF0Y2gsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKSB7XG4gIGNvbnN0IHJ1bGVOYW1lc0EgPSBwYXRoQSwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQiwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc01hdGNoID0gbWF0Y2gocnVsZU5hbWVzQSwgcnVsZU5hbWVzQiwgKHJ1bGVOYW1lQSwgcnVsZU5hbWVCKSA9PiB7XG4gICAgICAgICAgaWYgKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwYXRoc0VxdWFsID0gcnVsZU5hbWVzTWF0Y2g7ICAvLy9cblxuICByZXR1cm4gcGF0aHNFcXVhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VGcm9tUGF0aHMocGF0aEEsIHBhdGhCLCBydWxlTmFtZSwgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKSB7XG4gIGxldCBkaWZmZXJlbmNlO1xuXG4gIGNvbnN0IHBhdGhBTGVuZ3RoID0gcGF0aEEubGVuZ3RoLFxuICAgICAgICBwYXRoQkxlbmd0aCA9IHBhdGhCLmxlbmd0aDtcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmICgocGF0aEFMZW5ndGggPT09IDEpKSB7XG4gICAgZGlmZmVyZW5jZSA9IC0xO1xuICB9IGVsc2UgaWYgKChwYXRoQkxlbmd0aCA9PT0gMSkpIHtcbiAgICBkaWZmZXJlbmNlID0gKzE7XG4gIH0gZWxzZSBpZiAoKHBhdGhBTGVuZ3RoID09PSAwKSAmJiAocGF0aEJMZW5ndGggPT09IDApKSB7XG4gICAgZGlmZmVyZW5jZSA9IDA7XG4gIH0gZWxzZSBpZiAoKHBhdGhBTGVuZ3RoID09PSAwKSkge1xuICAgIGRpZmZlcmVuY2UgPSArMTtcbiAgfSBlbHNlIGlmICgocGF0aEJMZW5ndGggPT09IDApKSB7XG4gICAgZGlmZmVyZW5jZSA9IC0xO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJ1bGVOYW1lc0EgPSBwYXRoQS5zbGljZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQi5zbGljZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lQSA9IHJ1bGVOYW1lc0Euc2hpZnQoKSxcbiAgICAgICAgICBydWxlTmFtZUIgPSBydWxlTmFtZXNCLnNoaWZ0KCk7XG5cbiAgICBpZiAocnVsZU5hbWVBID09PSBydWxlTmFtZUIpIHtcbiAgICAgIHBhdGhBID0gcnVsZU5hbWVzQTsgLy8vXG5cbiAgICAgIHBhdGhCID0gcnVsZU5hbWVzQjsgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVBOyAvLy9cblxuICAgICAgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VGcm9tUGF0aHMocGF0aEEsIHBhdGhCLCBydWxlTmFtZSwgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICAgIGluZGV4QSA9IHJ1bGVOYW1lcy5pbmRleE9mKHJ1bGVOYW1lQSksXG4gICAgICAgICAgICBpbmRleEIgPSBydWxlTmFtZXMuaW5kZXhPZihydWxlTmFtZUIpO1xuXG4gICAgICBkaWZmZXJlbmNlID0gKGluZGV4QSAtIGluZGV4Qik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpZmZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHBhdGgsIC8vL1xuICAgICAgICBsYXN0UnVsZU5hbWUgPSBsYXN0KHJ1bGVOYW1lcyksXG4gICAgICAgIHJ1bGVOYW1lID0gbGFzdFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMocnVsZU5hbWUsIGN5Y2xlcywgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKSB7XG4gIGNvbnN0IHBhdGhzID0gY3ljbGVzLnJlZHVjZSgocGF0aHMsIGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICBjb25zdCBwZXJtdXRlZFJ1bGVOYW1lcyA9IHBlcm11dGVSdWxlTmFtZXMocnVsZU5hbWVzLCBydWxlTmFtZSksXG4gICAgICAgICAgICBwYXRoID0gcGVybXV0ZWRSdWxlTmFtZXM7IC8vL1xuXG4gICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRocztcbiAgfSwgW10pO1xuXG4gIGxldCBsZW5ndGg7XG5cbiAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aCA+IDEpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNsaWNlKCk7ICAvLy9cblxuICAgICAgcGF0aC5wb3AoKTtcblxuICAgICAgcGF0aHMucHVzaChwYXRoKTtcblxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgfVxuICB9KTtcblxuICBjb21wcmVzcyhwYXRocywgKHBhdGhBLCBwYXRoQikgPT4ge1xuICAgIGNvbnN0IHBhdGhzRXF1YWwgPSBhcmVQYXRoc0VxdWFsKHBhdGhBLCBwYXRoQik7XG5cbiAgICBpZiAocGF0aHNFcXVhbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBydWxlTmFtZSA9IG51bGw7XG5cbiAgcGF0aHMuc29ydCgocGF0aEEsIHBhdGhCKSA9PiB7XG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VGcm9tUGF0aHMocGF0aEEsIHBhdGhCLCBydWxlTmFtZSwgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKTtcblxuICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICB9KTtcblxuICByZXR1cm4gcGF0aHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGgocGF0aCkge1xuICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWVQYXJ0O1xufVxuIl0sIm5hbWVzIjpbImFyZVBhdGhzRXF1YWwiLCJkaWZmZXJlbmNlRnJvbVBhdGhzIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aCIsInJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIm1hdGNoIiwiY29tcHJlc3MiLCJwYXRoQSIsInBhdGhCIiwicnVsZU5hbWVzQSIsInJ1bGVOYW1lc0IiLCJydWxlTmFtZXNNYXRjaCIsInJ1bGVOYW1lQSIsInJ1bGVOYW1lQiIsInBhdGhzRXF1YWwiLCJydWxlTmFtZSIsInJ1bGVNYXAiLCJydWxlTmFtZXNNYXAiLCJkaWZmZXJlbmNlIiwicGF0aEFMZW5ndGgiLCJsZW5ndGgiLCJwYXRoQkxlbmd0aCIsInNsaWNlIiwic2hpZnQiLCJydWxlTmFtZXMiLCJpbmRleEEiLCJpbmRleE9mIiwiaW5kZXhCIiwicGF0aCIsImxhc3RSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImN5Y2xlcyIsInBhdGhzIiwicmVkdWNlIiwiY3ljbGUiLCJydWxlTmFtZXNGcm9tQ3ljbGUiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJwZXJtdXRlZFJ1bGVOYW1lcyIsInBlcm11dGVSdWxlTmFtZXMiLCJwdXNoIiwiZm9yRWFjaCIsInBvcCIsInNvcnQiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFXZ0JBO2VBQUFBOztRQWFBQztlQUFBQTs7UUFxREFDO2VBQUFBOztRQVRBQztlQUFBQTs7UUEyREFDO2VBQUFBOzs7eUJBN0hlO3lCQUVFO3FCQUNFO29CQUNNO3dCQUNHO0FBRTVDLElBQVFDLE9BQTBCQyx5QkFBYyxDQUF4Q0QsTUFBTUUsUUFBb0JELHlCQUFjLENBQWxDQyxPQUFPQyxXQUFhRix5QkFBYyxDQUEzQkU7QUFFZCxTQUFTUixjQUFjUyxLQUFLLEVBQUVDLEtBQUs7SUFDeEMsSUFBTUMsYUFB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