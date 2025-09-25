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
    get isCycleIrreducible () {
        return isCycleIrreducible;
    },
    get pathFromRuleNameAndCycle () {
        return pathFromRuleNameAndCycle;
    },
    get pathsFromRuleNameAndCycles () {
        return pathsFromRuleNameAndCycles;
    },
    get ruleCyclesFromRuleNameAndCycles () {
        return ruleCyclesFromRuleNameAndCycles;
    },
    get ruleNamesFromCycle () {
        return ruleNamesFromCycle;
    },
    get ruleNamesFromCycles () {
        return ruleNamesFromCycles;
    }
});
var _necessary = require("necessary");
var _ruleName = require("../utilities/ruleName");
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
var push = _necessary.arrayUtilities.push, match = _necessary.arrayUtilities.match, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
function arePathsEqual(pathA, pathB) {
    var ruleNamesA = pathA, ruleNamesB = pathB, ruleNamesMatch = match(ruleNamesA, ruleNamesB, function(ruleNameA, ruleNameB) {
        if (ruleNameA === ruleNameB) {
            return true;
        }
    }), pathsEqual = ruleNamesMatch; ///
    return pathsEqual;
}
function isCycleIrreducible(cycle, ruleMap) {
    var ruleNames = ruleNamesFromCycle(cycle), reducedRules = ruleNames.reduce(function(reducedRules, ruleName) {
        var reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName), reducedRule = ruleMap[reducedRuleName] || null;
        if (reducedRule !== null) {
            reducedRules.push(reducedRule);
        }
        return reducedRules;
    }, []), reducedRulesLength = reducedRules.length, cycleIrreducible = reducedRulesLength === 0; ///
    return cycleIrreducible;
}
function ruleNamesFromCycle(cycle) {
    var ruleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var cycleVertexes = cycle.getVertexes(), cycleRuleNames = cycleVertexes; ///
    push(ruleNames, cycleRuleNames);
    return ruleNames;
}
function ruleNamesFromCycles(cycles) {
    var ruleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    cycles.forEach(function(cycle) {
        ruleNamesFromCycle(cycle, ruleNames);
    });
    compress(ruleNames, function(ruleNameA, ruleNameB) {
        if (ruleNameA === ruleNameB) {
            return true;
        }
    });
    return ruleNames;
}
function pathFromRuleNameAndCycle(ruleName, cycle) {
    var ruleNames = ruleNamesFromCycle(cycle), start, end;
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
function ruleCyclesFromRuleNameAndCycles(ruleName, cycles) {
    var ruleCycles = cycles.reduce(function(ruleCycles, cycle) {
        var ruleNames = ruleNamesFromCycle(cycle), ruleNamesIncludeRuleName = ruleNames.includes(ruleName);
        if (ruleNamesIncludeRuleName) {
            var ruleCycle = cycle; ///
            ruleCycles.push(ruleCycle);
        }
        return ruleCycles;
    }, []);
    return ruleCycles;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3ljbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2gsIG1hdGNoLCBmaWx0ZXIsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGF0aHNFcXVhbChwYXRoQSwgcGF0aEIpIHtcbiAgY29uc3QgcnVsZU5hbWVzQSA9IHBhdGhBLCAvLy9cbiAgICAgICAgcnVsZU5hbWVzQiA9IHBhdGhCLCAvLy9cbiAgICAgICAgcnVsZU5hbWVzTWF0Y2ggPSBtYXRjaChydWxlTmFtZXNBLCBydWxlTmFtZXNCLCAocnVsZU5hbWVBLCBydWxlTmFtZUIpID0+IHtcbiAgICAgICAgICBpZiAocnVsZU5hbWVBID09PSBydWxlTmFtZUIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHBhdGhzRXF1YWwgPSBydWxlTmFtZXNNYXRjaDsgIC8vL1xuXG4gIHJldHVybiBwYXRoc0VxdWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDeWNsZUlycmVkdWNpYmxlKGN5Y2xlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSksXG4gICAgICAgIHJlZHVjZWRSdWxlcyA9IHJ1bGVOYW1lcy5yZWR1Y2UoKHJlZHVjZWRSdWxlcywgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgICAgICAgIHJlZHVjZWRSdWxlID0gcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICAgICAgICBpZiAocmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlcy5wdXNoKHJlZHVjZWRSdWxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVkdWNlZFJ1bGVzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHJlZHVjZWRSdWxlc0xlbmd0aCA9IHJlZHVjZWRSdWxlcy5sZW5ndGgsXG4gICAgICAgIGN5Y2xlSXJyZWR1Y2libGUgPSAocmVkdWNlZFJ1bGVzTGVuZ3RoID09PSAwKTsgLy8vXG5cbiAgcmV0dXJuIGN5Y2xlSXJyZWR1Y2libGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUsIHJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGN5Y2xlVmVydGV4ZXMgPSBjeWNsZS5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICBjeWNsZVJ1bGVOYW1lcyA9IGN5Y2xlVmVydGV4ZXM7IC8vL1xuXG4gIHB1c2gocnVsZU5hbWVzLCBjeWNsZVJ1bGVOYW1lcyk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21DeWNsZXMoY3ljbGVzLCBydWxlTmFtZXMgPSBbXSkge1xuICBjeWNsZXMuZm9yRWFjaCgoY3ljbGUpID0+IHtcbiAgICBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUsIHJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIGNvbXByZXNzKHJ1bGVOYW1lcywgKHJ1bGVOYW1lQSwgcnVsZU5hbWVCKSA9PiB7XG4gICAgaWYgKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKSB7XG4gIGxldCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUpLFxuICAgICAgc3RhcnQsXG4gICAgICBlbmQ7XG5cbiAgY29uc3QgaW5kZXggPSBydWxlTmFtZXMuaW5kZXhPZihydWxlTmFtZSk7XG5cbiAgc3RhcnQgPSAwO1xuXG4gIGVuZCA9IGluZGV4OyAgLy8vXG5cbiAgY29uc3QgbGVhZGluZ1J1bGVOYW1lcyA9IHJ1bGVOYW1lcy5zbGljZShzdGFydCwgZW5kKTtcblxuICBzdGFydCA9IGluZGV4OyAgLy8vXG5cbiAgY29uc3QgdHJhaWxpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQpLFxuICAgICAgICBwYXRoID0gW1xuICAgICAgICAgIC4uLnRyYWlsaW5nUnVsZU5hbWVzLFxuICAgICAgICAgIC4uLmxlYWRpbmdSdWxlTmFtZXNcbiAgICAgICAgXTtcblxuICByZXR1cm4gcGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpIHtcbiAgY29uc3QgcGF0aHMgPSBjeWNsZXMubWFwKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKTtcblxuICAgIHJldHVybiBwYXRoO1xuICB9KTtcblxuICBmaWx0ZXIocGF0aHMsIChwYXRoKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gcGF0aCwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBsZXQgbGVuZ3RoO1xuXG4gIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGggPiAyKSB7XG4gICAgICBwYXRoID0gcGF0aC5zbGljZSgpOyAgLy8vXG5cbiAgICAgIHBhdGgucG9wKCk7XG5cbiAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG5cbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG5cbiAgY29tcHJlc3MocGF0aHMsIChwYXRoQSwgcGF0aEIpID0+IHtcbiAgICBjb25zdCBwYXRoc0VxdWFsID0gYXJlUGF0aHNFcXVhbChwYXRoQSwgcGF0aEIpO1xuXG4gICAgaWYgKHBhdGhzRXF1YWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhdGhzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKSB7XG4gIGNvbnN0IHJ1bGVDeWNsZXMgPSBjeWNsZXMucmVkdWNlKChydWxlQ3ljbGVzLCBjeWNsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSksXG4gICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZVJ1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChydWxlTmFtZXNJbmNsdWRlUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVDeWNsZSA9IGN5Y2xlOyAgLy8vXG5cbiAgICAgIHJ1bGVDeWNsZXMucHVzaChydWxlQ3ljbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlQ3ljbGVzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHJ1bGVDeWNsZXM7XG59XG4iXSwibmFtZXMiOlsiYXJlUGF0aHNFcXVhbCIsImlzQ3ljbGVJcnJlZHVjaWJsZSIsInBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZSIsInBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwicnVsZUN5Y2xlc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyIsInJ1bGVOYW1lc0Zyb21DeWNsZSIsInJ1bGVOYW1lc0Zyb21DeWNsZXMiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJtYXRjaCIsImZpbHRlciIsImNvbXByZXNzIiwicGF0aEEiLCJwYXRoQiIsInJ1bGVOYW1lc0EiLCJydWxlTmFtZXNCIiwicnVsZU5hbWVzTWF0Y2giLCJydWxlTmFtZUEiLCJydWxlTmFtZUIiLCJwYXRoc0VxdWFsIiwiY3ljbGUiLCJydWxlTWFwIiwicnVsZU5hbWVzIiwicmVkdWNlZFJ1bGVzIiwicmVkdWNlIiwicnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlc0xlbmd0aCIsImxlbmd0aCIsImN5Y2xlSXJyZWR1Y2libGUiLCJjeWNsZVZlcnRleGVzIiwiZ2V0VmVydGV4ZXMiLCJjeWNsZVJ1bGVOYW1lcyIsImN5Y2xlcyIsImZvckVhY2giLCJzdGFydCIsImVuZCIsImluZGV4IiwiaW5kZXhPZiIsImxlYWRpbmdSdWxlTmFtZXMiLCJzbGljZSIsInRyYWlsaW5nUnVsZU5hbWVzIiwicGF0aCIsInBhdGhzIiwibWFwIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicG9wIiwicnVsZUN5Y2xlcyIsInJ1bGVOYW1lc0luY2x1ZGVSdWxlTmFtZSIsInJ1bGVDeWNsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBUWdCQTtlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBeUNBQztlQUFBQTs7UUF3QkFDO2VBQUFBOztRQTJDQUM7ZUFBQUE7O1FBMUZBQztlQUFBQTs7UUFTQUM7ZUFBQUE7Ozt5QkE5Q2U7d0JBSWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRjVDLElBQVFDLE9BQWtDQyx5QkFBYyxDQUFoREQsTUFBTUUsUUFBNEJELHlCQUFjLENBQTFDQyxPQUFPQyxTQUFxQkYseUJBQWMsQ0FBbkNFLFFBQVFDLFdB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