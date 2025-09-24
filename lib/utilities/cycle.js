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
var push = _necessary.arrayUtilities.push, match = _necessary.arrayUtilities.match, compress = _necessary.arrayUtilities.compress;
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
    var paths = [];
    cycles.forEach(function(cycle) {
        var ruleNames = ruleNamesFromCycle(cycle), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3ljbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2gsIG1hdGNoLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhdGhzRXF1YWwocGF0aEEsIHBhdGhCKSB7XG4gIGNvbnN0IHJ1bGVOYW1lc0EgPSBwYXRoQSwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQiwgLy8vXG4gICAgICAgIHJ1bGVOYW1lc01hdGNoID0gbWF0Y2gocnVsZU5hbWVzQSwgcnVsZU5hbWVzQiwgKHJ1bGVOYW1lQSwgcnVsZU5hbWVCKSA9PiB7XG4gICAgICAgICAgaWYgKHJ1bGVOYW1lQSA9PT0gcnVsZU5hbWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwYXRoc0VxdWFsID0gcnVsZU5hbWVzTWF0Y2g7ICAvLy9cblxuICByZXR1cm4gcGF0aHNFcXVhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ3ljbGVJcnJlZHVjaWJsZShjeWNsZSwgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUpLFxuICAgICAgICByZWR1Y2VkUnVsZXMgPSBydWxlTmFtZXMucmVkdWNlKChyZWR1Y2VkUnVsZXMsIHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgICAgICByZWR1Y2VkUnVsZSA9IHJ1bGVNYXBbcmVkdWNlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICAgICAgaWYgKHJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZWR1Y2VkUnVsZXMucHVzaChyZWR1Y2VkUnVsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlZHVjZWRSdWxlcztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICByZWR1Y2VkUnVsZXNMZW5ndGggPSByZWR1Y2VkUnVsZXMubGVuZ3RoLFxuICAgICAgICBjeWNsZUlycmVkdWNpYmxlID0gKHJlZHVjZWRSdWxlc0xlbmd0aCA9PT0gMCk7IC8vL1xuXG4gIHJldHVybiBjeWNsZUlycmVkdWNpYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlLCBydWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBjeWNsZVZlcnRleGVzID0gY3ljbGUuZ2V0VmVydGV4ZXMoKSxcbiAgICAgICAgY3ljbGVSdWxlTmFtZXMgPSBjeWNsZVZlcnRleGVzOyAvLy9cblxuICBwdXNoKHJ1bGVOYW1lcywgY3ljbGVSdWxlTmFtZXMpO1xuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZXNGcm9tQ3ljbGVzKGN5Y2xlcywgcnVsZU5hbWVzID0gW10pIHtcbiAgY3ljbGVzLmZvckVhY2goKGN5Y2xlKSA9PiB7XG4gICAgcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlLCBydWxlTmFtZXMpO1xuICB9KTtcblxuICBjb21wcmVzcyhydWxlTmFtZXMsIChydWxlTmFtZUEsIHJ1bGVOYW1lQikgPT4ge1xuICAgIGlmIChydWxlTmFtZUEgPT09IHJ1bGVOYW1lQikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlKHJ1bGVOYW1lLCBjeWNsZSkge1xuICBsZXQgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgIHN0YXJ0LFxuICAgICAgZW5kO1xuXG4gIGNvbnN0IGluZGV4ID0gcnVsZU5hbWVzLmluZGV4T2YocnVsZU5hbWUpO1xuXG4gIHN0YXJ0ID0gMDtcblxuICBlbmQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IGxlYWRpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgc3RhcnQgPSBpbmRleDsgIC8vL1xuXG4gIGNvbnN0IHRyYWlsaW5nUnVsZU5hbWVzID0gcnVsZU5hbWVzLnNsaWNlKHN0YXJ0KSxcbiAgICAgICAgcGF0aCA9IFtcbiAgICAgICAgICAuLi50cmFpbGluZ1J1bGVOYW1lcyxcbiAgICAgICAgICAuLi5sZWFkaW5nUnVsZU5hbWVzXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKSB7XG4gIGNvbnN0IHBhdGhzID0gW107XG5cbiAgY3ljbGVzLmZvckVhY2goKGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICBsZXQgcGF0aCA9IHBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZShydWxlTmFtZSwgY3ljbGUpO1xuXG4gICAgICBsZXQgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChsZW5ndGggPiAxKSB7XG4gICAgICAgIHBhdGhzLnVuc2hpZnQocGF0aCk7XG5cbiAgICAgICAgcGF0aCA9IHBhdGguc2xpY2UoKTsgIC8vL1xuXG4gICAgICAgIHBhdGgucG9wKCk7XG5cbiAgICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb21wcmVzcyhwYXRocywgKHBhdGhBLCBwYXRoQikgPT4ge1xuICAgIGNvbnN0IHBhdGhzRXF1YWwgPSBhcmVQYXRoc0VxdWFsKHBhdGhBLCBwYXRoQik7XG5cbiAgICBpZiAocGF0aHNFcXVhbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGF0aHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpIHtcbiAgY29uc3QgcnVsZUN5Y2xlcyA9IGN5Y2xlcy5yZWR1Y2UoKHJ1bGVDeWNsZXMsIGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZUN5Y2xlID0gY3ljbGU7ICAvLy9cblxuICAgICAgcnVsZUN5Y2xlcy5wdXNoKHJ1bGVDeWNsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVDeWNsZXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcnVsZUN5Y2xlcztcbn1cbiJdLCJuYW1lcyI6WyJhcmVQYXRoc0VxdWFsIiwiaXNDeWNsZUlycmVkdWNpYmxlIiwicGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlIiwicnVsZU5hbWVzRnJvbUN5Y2xlcyIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsIm1hdGNoIiwiY29tcHJlc3MiLCJwYXRoQSIsInBhdGhCIiwicnVsZU5hbWVzQSIsInJ1bGVOYW1lc0IiLCJydWxlTmFtZXNNYXRjaCIsInJ1bGVOYW1lQSIsInJ1bGVOYW1lQiIsInBhdGhzRXF1YWwiLCJjeWNsZSIsInJ1bGVNYXAiLCJydWxlTmFtZXMiLCJyZWR1Y2VkUnVsZXMiLCJyZWR1Y2UiLCJydWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlIiwicmVkdWNlZFJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiY3ljbGVJcnJlZHVjaWJsZSIsImN5Y2xlVmVydGV4ZXMiLCJnZXRWZXJ0ZXhlcyIsImN5Y2xlUnVsZU5hbWVzIiwiY3ljbGVzIiwiZm9yRWFjaCIsInN0YXJ0IiwiZW5kIiwiaW5kZXgiLCJpbmRleE9mIiwibGVhZGluZ1J1bGVOYW1lcyIsInNsaWNlIiwidHJhaWxpbmdSdWxlTmFtZXMiLCJwYXRoIiwicGF0aHMiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJ1bnNoaWZ0IiwicG9wIiwicnVsZUN5Y2xlcyIsInJ1bGVOYW1lc0luY2x1ZGVSdWxlTmFtZSIsInJ1bGVDeWNsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBUWdCQTtlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBeUNBQztlQUFBQTs7UUF3QkFDO2VBQUFBOztRQW1DQUM7ZUFBQUE7O1FBbEZBQztlQUFBQTs7UUFTQUM7ZUFBQUE7Ozt5QkE5Q2U7d0JBSWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRjVDLElBQVFDLE9BQTBCQyx5QkFBYyxDQUF4Q0QsTUFBTUUsUUFBb0JELHlCQUFjLENBQWxDQyxPQUFPQyxXQUFhRix5QkFBYyxDQUEzQkU7QUFJZCxTQUFTVixjQUFjVyxLQUFLLEVBQUVDLEtBQUs7SUFDeEMsSUFBTUMsYUFBYUYsT0FDYkcsYUFBYUYsT0FDYkcsaUJBQWlCTixNQUFNSSxZQUFZQyxZQUFZLFNBQUNFLFdB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