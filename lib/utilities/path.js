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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHBlcm11dGVSdWxlTmFtZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcnVsZU5hbWVzRnJvbUN5Y2xlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jeWNsZVwiO1xuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgbGFzdCwgbWF0Y2gsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKSB7XG4gIGNvbnN0IHJ1bGVOYW1lc0EgPSBwYXRoQSwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQiwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc01hdGNoID0gbWF0Y2gocnVsZU5hbWVzQSwgcnVsZU5hbWVzQiwgKHJ1bGVOYW1lQSwgcnVsZU5hbWVCKSA9PiB7XG4gICAgICAgICAgaWYgKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwYXRoc0VxdWFsID0gcnVsZU5hbWVzTWF0Y2g7ICAvLy9cblxuICByZXR1cm4gcGF0aHNFcXVhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcGF0aCwgLy8vXG4gICAgICAgIGxhc3RSdWxlTmFtZSA9IGxhc3QocnVsZU5hbWVzKSxcbiAgICAgICAgcnVsZU5hbWUgPSBsYXN0UnVsZU5hbWUsIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzLCBydWxlTWFwLCBydWxlTmFtZXNNYXApIHtcbiAgY29uc3QgcGF0aHMgPSBjeWNsZXMucmVkdWNlKChwYXRocywgY3ljbGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUpLFxuICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHBlcm11dGVkUnVsZU5hbWVzID0gcGVybXV0ZVJ1bGVOYW1lcyhydWxlTmFtZXMsIHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIHBhdGggPSBwZXJtdXRlZFJ1bGVOYW1lczsgLy8vXG5cbiAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhzO1xuICB9LCBbXSk7XG5cbiAgbGV0IGxlbmd0aDtcblxuICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoID4gMikge1xuICAgICAgcGF0aCA9IHBhdGguc2xpY2UoKTsgIC8vL1xuXG4gICAgICBwYXRoLnBvcCgpO1xuXG4gICAgICBwYXRocy5wdXNoKHBhdGgpO1xuXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbXByZXNzKHBhdGhzLCAocGF0aEEsIHBhdGhCKSA9PiB7XG4gICAgY29uc3QgcGF0aHNFcXVhbCA9IGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKTtcblxuICAgIGlmIChwYXRoc0VxdWFsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJ1bGVOYW1lID0gbnVsbDtcblxuICBwYXRocy5zb3J0KChwYXRoQSwgcGF0aEIpID0+IHtcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gZGlmZmVyZW5jZUZyb21QYXRocyhwYXRoQSwgcGF0aEIsIHJ1bGVOYW1lLCBydWxlTWFwLCBydWxlTmFtZXNNYXApO1xuXG4gICAgcmV0dXJuIGRpZmZlcmVuY2U7XG4gIH0pO1xuXG4gIHJldHVybiBwYXRocztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZVBhcnQ7XG59XG5cbmZ1bmN0aW9uIGRpZmZlcmVuY2VGcm9tUGF0aHMocGF0aEEsIHBhdGhCLCBydWxlTmFtZSwgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKSB7XG4gIGxldCBkaWZmZXJlbmNlO1xuXG4gIGNvbnN0IHBhdGhBTGVuZ3RoID0gcGF0aEEubGVuZ3RoLFxuICAgICAgICBwYXRoQkxlbmd0aCA9IHBhdGhCLmxlbmd0aDtcblxuICBpZiAoKHBhdGhBTGVuZ3RoID09PSAwKSAmJiAocGF0aEJMZW5ndGggPT09IDApKSB7XG4gICAgZGlmZmVyZW5jZSA9IDA7XG4gIH0gZWxzZSBpZiAocGF0aEFMZW5ndGggPT09IDApIHtcbiAgICBkaWZmZXJlbmNlID0gKzE7XG4gIH0gZWxzZSBpZiAocGF0aEJMZW5ndGggPT09IDApIHtcbiAgICBkaWZmZXJlbmNlID0gLTE7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcnVsZU5hbWVzQSA9IHBhdGhBLnNsaWNlKCksXG4gICAgICAgICAgcnVsZU5hbWVzQiA9IHBhdGhCLnNsaWNlKCksXG4gICAgICAgICAgcnVsZU5hbWVBID0gcnVsZU5hbWVzQS5zaGlmdCgpLFxuICAgICAgICAgIHJ1bGVOYW1lQiA9IHJ1bGVOYW1lc0Iuc2hpZnQoKTtcblxuICAgIGlmIChydWxlTmFtZUEgPT09IHJ1bGVOYW1lQikge1xuICAgICAgcGF0aEEgPSBydWxlTmFtZXNBOyAvLy9cblxuICAgICAgcGF0aEIgPSBydWxlTmFtZXNCOyAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUE7IC8vL1xuXG4gICAgICBkaWZmZXJlbmNlID0gZGlmZmVyZW5jZUZyb21QYXRocyhwYXRoQSwgcGF0aEIsIHJ1bGVOYW1lLCBydWxlTWFwLCBydWxlTmFtZXNNYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgICAgaW5kZXhBID0gcnVsZU5hbWVzLmluZGV4T2YocnVsZU5hbWVBKSxcbiAgICAgICAgICAgIGluZGV4QiA9IHJ1bGVOYW1lcy5pbmRleE9mKHJ1bGVOYW1lQik7XG5cbiAgICAgIGRpZmZlcmVuY2UgPSAoaW5kZXhBIC0gaW5kZXhCKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlmZmVyZW5jZTtcbn1cbiJdLCJuYW1lcyI6WyJhcmVQYXRoc0VxdWFsIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aCIsInJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIm1hdGNoIiwiY29tcHJlc3MiLCJwYXRoQSIsInBhdGhCIiwicnVsZU5hbWVzQSIsInJ1bGVOYW1lc0IiLCJydWxlTmFtZXNNYXRjaCIsInJ1bGVOYW1lQSIsInJ1bGVOYW1lQiIsInBhdGhzRXF1YWwiLCJwYXRoIiwicnVsZU5hbWVzIiwibGFzdFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJjeWNsZXMiLCJydWxlTWFwIiwicnVsZU5hbWVzTWFwIiwicGF0aHMiLCJyZWR1Y2UiLCJjeWNsZSIsInJ1bGVOYW1lc0Zyb21DeWNsZSIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInBlcm11dGVkUnVsZU5hbWVzIiwicGVybXV0ZVJ1bGVOYW1lcyIsInB1c2giLCJsZW5ndGgiLCJmb3JFYWNoIiwic2xpY2UiLCJwb3AiLCJzb3J0IiwiZGlmZmVyZW5jZSIsImRpZmZlcmVuY2VGcm9tUGF0aHMiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicGF0aEFMZW5ndGgiLCJwYXRoQkxlbmd0aCIsInNoaWZ0IiwiaW5kZXhBIiwiaW5kZXhPZiIsImluZGV4QiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBV2dCQTtlQUFBQTs7UUFzQkFDO2VBQUFBOztRQVRBQztlQUFBQTs7UUEyREFDO2VBQUFBOzs7eUJBakZlO3lCQUVFO3FCQUNFO29CQUNNO3dCQUNHO0FBRTVDLElBQVFDLE9BQTBCQyx5QkFBYyxDQUF4Q0QsTUFBTUUsUUFBb0JELHlCQUFjLENBQWxDQyxPQUFPQyxXQUFhRix5QkFBYyxDQUEzQkU7QUFFZCxTQUFTUCxjQUFjUSxLQUFLLEVBQUVDLEtBQUs7SUFDeEMsSUFBTUMsYUFBYUYsT0FDYkcsYUFBYUYsT0FDYkcsaUJBQWlCTixNQUFNSSxZQUFZQyxZQUFZLFNBQUNFLFdBQVdDO1FBQ3pELElBQUlELGNBQWNDLFdBQVc7WUFDM0IsT0FBTztRQUNUO0lBQ0YsSUFDQUMsYUFBYUgsZ0JBQWlCLEdBQUc7SUFFdkMsT0FBT0c7QUFDVDtBQUVPLFNBQVNiLHdCQUF3QmMsSUFBSTtJQUMxQyxJ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