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
    rulesFromStartRuleAndRuleMap: function() {
        return rulesFromStartRuleAndRuleMap;
    },
    startRuleFromRulesAndStartRuleName: function() {
        return startRuleFromRulesAndStartRuleName;
    },
    default: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var filter = _necessary.arrayUtilities.filter, rulesAsString = _occamParsers.rulesUtilities.rulesAsString, ruleMapFromRules = _occamParsers.rulesUtilities.ruleMapFromRules, startRuleFromRules = _occamParsers.rulesUtilities.startRuleFromRules;
function rulesFromStartRuleAndRuleMap(startRule, ruleMap) {
    var rules = Object.values(ruleMap), startRuleName = startRule.getName();
    filter(rules, function(rule) {
        var ruleName = rule.getName();
        if (ruleName !== startRuleName) {
            return true;
        }
    });
    rules.unshift(startRule);
    return rules;
}
function startRuleFromRulesAndStartRuleName(rules, startRuleName) {
    var startRule = rules.find(function(rule) {
        var ruleName = rule.getName();
        if (ruleName === startRuleName) {
            return true;
        }
    }) || null; ///
    if (startRule === null) {
        startRule = startRuleFromRules(rules);
    }
    return startRule;
}
var _default = {
    rulesAsString: rulesAsString,
    ruleMapFromRules: ruleMapFromRules,
    startRuleFromRules: startRuleFromRules,
    rulesFromStartRuleAndRuleMap: rulesFromStartRuleAndRuleMap,
    startRuleFromRulesAndStartRuleName: startRuleFromRulesAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICBjb25zdCBydWxlcyA9IE9iamVjdC52YWx1ZXMocnVsZU1hcCksXG4gICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBzdGFydFJ1bGUuZ2V0TmFtZSgpO1xuXG4gIGZpbHRlcihydWxlcywgKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHJ1bGVOYW1lICE9PSBzdGFydFJ1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJ1bGVzLnVuc2hpZnQoc3RhcnRSdWxlKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGxldCBzdGFydFJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGlmIChydWxlTmFtZSA9PT0gc3RhcnRSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsOyAvLy9cblxuICBpZiAoc3RhcnRSdWxlID09PSBudWxsKSB7XG4gICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKTtcbiAgfVxuXG4gIHJldHVybiBzdGFydFJ1bGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZXNBc1N0cmluZyxcbiAgcnVsZU1hcEZyb21SdWxlcyxcbiAgc3RhcnRSdWxlRnJvbVJ1bGVzLFxuICBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwLFxuICBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lXG59O1xuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInJ1bGVzIiwiT2JqZWN0IiwidmFsdWVzIiwic3RhcnRSdWxlTmFtZSIsImdldE5hbWUiLCJydWxlIiwicnVsZU5hbWUiLCJ1bnNoaWZ0IiwiZmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQVFHQSw0QkFBNEI7ZUFBNUJBLDRCQUE0Qjs7SUFpQjVCQyxrQ0FBa0M7ZUFBbENBLGtDQUFrQzs7SUFnQmxELE9BTUU7ZUFORixRQU1FOzs7eUJBN0M2QixXQUFXOzRCQUNYLGVBQWU7QUFFOUMsSUFBTSxBQUFFQyxNQUFNLEdBQUtDLFVBQWMsZUFBQSxDQUF6QkQsTUFBTSxBQUFtQixFQUN6QkUsYUFBYSxHQUEyQ0MsYUFBYyxlQUFBLENBQXRFRCxhQUFhLEVBQUVFLGdCQUFnQixHQUF5QkQsYUFBYyxlQUFBLENBQXZEQyxnQkFBZ0IsRUFBRUMsa0JBQWtCLEdBQUtGLGFBQWMsZUFBQSxDQUFyQ0Usa0JBQWtCLEFBQW9CO0FBRXhFLFNBQVNQLDRCQUE0QixDQUFDUSxTQUFTLEVBQUVDLE9BQU8sRUFBRTtJQUMvRCxJQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDSCxPQUFPLENBQUMsRUFDOUJJLGFBQWEsR0FBR0wsU0FBUyxDQUFDTSxPQUFPLEVBQUUsQUFBQztJQUUxQ1osTUFBTSxDQUFDUSxLQUFLLEVBQUUsU0FBQ0ssSUFBSSxFQUFLO1FBQ3RCLElBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRCxPQUFPLEVBQUUsQUFBQztRQUVoQyxJQUFJRSxRQUFRLEtBQUtILGFBQWEsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0YsQ0FBQyxDQUFDO0lBRUhILEtBQUssQ0FBQ08sT0FBTyxDQUFDVCxTQUFTLENBQUMsQ0FBQztJQUV6QixPQUFPRSxLQUFLLENBQUM7Q0FDZDtBQUVNLFNBQVNULGtDQUFrQyxDQUFDUyxLQUFLLEVBQUVHLGFBQWEsRUFBRTtJQUN2RSxJQUFJTCxTQUFTLEdBQUdFLEtBQUssQ0FBQ1EsSUFBSSxDQUFDLFNBQUNILElBQUksRUFBSztRQUNuQyxJQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0QsT0FBTyxFQUFFLEFBQUM7UUFFaEMsSUFBSUUsUUFBUSxLQUFLSCxhQUFhLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsSUFBSSxJQUFJLEFBQUMsRUFBQyxHQUFHO0lBRWYsSUFBSUwsU0FBUyxLQUFLLElBQUksRUFBRTtRQUN0QkEsU0FBUyxHQUFHRCxrQkFBa0IsQ0FBQ0csS0FBSyxDQUFDLENBQUM7S0FDdkM7SUFFRCxPQUFPRixTQUFTLENBQUM7Q0FDbEI7SUFFRCxRQU1FLEdBTmE7SUFDYkosYUFBYSxFQUFiQSxhQUFhO0lBQ2JFLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQ2hCQyxrQkFBa0IsRUFBbEJBLGtCQUFrQjtJQUNsQlAsNEJBQTRCLEVBQTVCQSw0QkFBNEI7SUFDNUJDLGtDQUFrQyxFQUFsQ0Esa0NBQWtDO0NBQ25DIn0=