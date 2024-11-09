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
    isCycleIrreducible: function() {
        return isCycleIrreducible;
    },
    pathFromRuleNameAndCycle: function() {
        return pathFromRuleNameAndCycle;
    },
    pathsFromRuleNameAndCycles: function() {
        return pathsFromRuleNameAndCycles;
    },
    ruleCyclesFromRuleNameAndCycles: function() {
        return ruleCyclesFromRuleNameAndCycles;
    },
    ruleNamesFromCycle: function() {
        return ruleNamesFromCycle;
    },
    ruleNamesFromCycles: function() {
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
var match = _necessary.arrayUtilities.match, compress = _necessary.arrayUtilities.compress;
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
    var cycleVertexes = cycle.getVertexes(), ruleNames = cycleVertexes; ///
    return ruleNames;
}
function ruleNamesFromCycles(cycles) {
    var ruleNames = [];
    cycles.forEach(function(cycle) {
        var cycleVertexes = cycle.getVertexes(), cyclicRuleNames = cycleVertexes; ///
        cyclicRuleNames.forEach(function(cyclicRuleName) {
            var ruleNamesIncludesCyclicRuleName = ruleNames.includes(cyclicRuleName);
            if (!ruleNamesIncludesCyclicRuleName) {
                var ruleName = cyclicRuleName; ///
                ruleNames.push(ruleName);
            }
        });
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
        var ruleNamesA = pathA, ruleNamesB = pathB, ruleNamesMatch = match(ruleNamesA, ruleNamesB, function(ruleNameA, ruleNameB) {
            var ruleNameAMatchesRuleNameB = ruleNameA === ruleNameB;
            if (ruleNameAMatchesRuleNameB) {
                return true;
            }
        });
        if (ruleNamesMatch) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3ljbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IG1hdGNoLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ3ljbGVJcnJlZHVjaWJsZShjeWNsZSwgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGUoY3ljbGUpLFxuICAgICAgICByZWR1Y2VkUnVsZXMgPSBydWxlTmFtZXMucmVkdWNlKChyZWR1Y2VkUnVsZXMsIHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgICAgICByZWR1Y2VkUnVsZSA9IHJ1bGVNYXBbcmVkdWNlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICAgICAgaWYgKHJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZWR1Y2VkUnVsZXMucHVzaChyZWR1Y2VkUnVsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlZHVjZWRSdWxlcztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICByZWR1Y2VkUnVsZXNMZW5ndGggPSByZWR1Y2VkUnVsZXMubGVuZ3RoLFxuICAgICAgICBjeWNsZUlycmVkdWNpYmxlID0gKHJlZHVjZWRSdWxlc0xlbmd0aCA9PT0gMCk7IC8vL1xuXG4gIHJldHVybiBjeWNsZUlycmVkdWNpYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSB7XG4gIGNvbnN0IGN5Y2xlVmVydGV4ZXMgPSBjeWNsZS5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICBydWxlTmFtZXMgPSBjeWNsZVZlcnRleGVzOyAgLy8vXG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21DeWNsZXMoY3ljbGVzKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IFtdO1xuXG4gIGN5Y2xlcy5mb3JFYWNoKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IGN5Y2xlVmVydGV4ZXMgPSBjeWNsZS5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGN5Y2xpY1J1bGVOYW1lcyA9IGN5Y2xlVmVydGV4ZXM7ICAvLy9cblxuICAgIGN5Y2xpY1J1bGVOYW1lcy5mb3JFYWNoKChjeWNsaWNSdWxlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZU5hbWVzSW5jbHVkZXNDeWNsaWNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhjeWNsaWNSdWxlTmFtZSk7XG5cbiAgICAgIGlmICghcnVsZU5hbWVzSW5jbHVkZXNDeWNsaWNSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IGN5Y2xpY1J1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlKHJ1bGVOYW1lLCBjeWNsZSkge1xuICBsZXQgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICBzdGFydCxcbiAgICBlbmQ7XG5cbiAgY29uc3QgaW5kZXggPSBydWxlTmFtZXMuaW5kZXhPZihydWxlTmFtZSk7XG5cbiAgc3RhcnQgPSAwO1xuXG4gIGVuZCA9IGluZGV4OyAgLy8vXG5cbiAgY29uc3QgbGVhZGluZ1J1bGVOYW1lcyA9IHJ1bGVOYW1lcy5zbGljZShzdGFydCwgZW5kKTtcblxuICBzdGFydCA9IGluZGV4OyAgLy8vXG5cbiAgY29uc3QgdHJhaWxpbmdSdWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2Uoc3RhcnQpLFxuICAgIHBhdGggPSBbXG4gICAgICAuLi50cmFpbGluZ1J1bGVOYW1lcyxcbiAgICAgIC4uLmxlYWRpbmdSdWxlTmFtZXNcbiAgICBdO1xuXG4gIHJldHVybiBwYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMocnVsZU5hbWUsIGN5Y2xlcykge1xuICBjb25zdCBwYXRocyA9IFtdO1xuXG4gIGN5Y2xlcy5mb3JFYWNoKChjeWNsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSksXG4gICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgbGV0IHBhdGggPSBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKTtcblxuICAgICAgbGV0IGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAobGVuZ3RoID4gMSkge1xuICAgICAgICBwYXRocy51bnNoaWZ0KHBhdGgpO1xuXG4gICAgICAgIHBhdGggPSBwYXRoLnNsaWNlKCk7ICAvLy9cblxuICAgICAgICBwYXRoLnBvcCgpO1xuXG4gICAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29tcHJlc3MocGF0aHMsIChwYXRoQSwgcGF0aEIpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZXNBID0gcGF0aEEsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lc0IgPSBwYXRoQiwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVzTWF0Y2ggPSBtYXRjaChydWxlTmFtZXNBLCBydWxlTmFtZXNCLCAocnVsZU5hbWVBLCBydWxlTmFtZUIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lQU1hdGNoZXNSdWxlTmFtZUIgPSAocnVsZU5hbWVBID09PSBydWxlTmFtZUIpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU5hbWVBTWF0Y2hlc1J1bGVOYW1lQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChydWxlTmFtZXNNYXRjaCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGF0aHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlQ3ljbGVzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpIHtcbiAgY29uc3QgcnVsZUN5Y2xlcyA9IGN5Y2xlcy5yZWR1Y2UoKHJ1bGVDeWNsZXMsIGN5Y2xlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZUN5Y2xlID0gY3ljbGU7ICAvLy9cblxuICAgICAgcnVsZUN5Y2xlcy5wdXNoKHJ1bGVDeWNsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVDeWNsZXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcnVsZUN5Y2xlcztcbn1cbiJdLCJuYW1lcyI6WyJpc0N5Y2xlSXJyZWR1Y2libGUiLCJwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUiLCJwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyIsInJ1bGVDeWNsZXNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGUiLCJydWxlTmFtZXNGcm9tQ3ljbGVzIiwibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImNvbXByZXNzIiwiY3ljbGUiLCJydWxlTWFwIiwicnVsZU5hbWVzIiwicmVkdWNlZFJ1bGVzIiwicmVkdWNlIiwicnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZSIsInB1c2giLCJyZWR1Y2VkUnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJjeWNsZUlycmVkdWNpYmxlIiwiY3ljbGVWZXJ0ZXhlcyIsImdldFZlcnRleGVzIiwiY3ljbGVzIiwiZm9yRWFjaCIsImN5Y2xpY1J1bGVOYW1lcyIsImN5Y2xpY1J1bGVOYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNDeWNsaWNSdWxlTmFtZSIsImluY2x1ZGVzIiwic3RhcnQiLCJlbmQiLCJpbmRleCIsImluZGV4T2YiLCJsZWFkaW5nUnVsZU5hbWVzIiwic2xpY2UiLCJ0cmFpbGluZ1J1bGVOYW1lcyIsInBhdGgiLCJwYXRocyIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJ1bnNoaWZ0IiwicG9wIiwicGF0aEEiLCJwYXRoQiIsInJ1bGVOYW1lc0EiLCJydWxlTmFtZXNCIiwicnVsZU5hbWVzTWF0Y2giLCJydWxlTmFtZUEiLCJydWxlTmFtZUIiLCJydWxlTmFtZUFNYXRjaGVzUnVsZU5hbWVCIiwicnVsZUN5Y2xlcyIsInJ1bGVOYW1lc0luY2x1ZGVSdWxlTmFtZSIsInJ1bGVDeWNsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdCQSxrQkFBa0I7ZUFBbEJBOztJQThDQUMsd0JBQXdCO2VBQXhCQTs7SUF3QkFDLDBCQUEwQjtlQUExQkE7O0lBMkNBQywrQkFBK0I7ZUFBL0JBOztJQS9GQUMsa0JBQWtCO2VBQWxCQTs7SUFPQUMsbUJBQW1CO2VBQW5CQTs7O3lCQS9CZTt3QkFJYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGNUMsSUFBUUMsUUFBb0JDLHlCQUFjLENBQWxD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