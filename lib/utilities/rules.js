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
var filter = _necessary.arrayUtilities.filter, rulesFromBNF = _occamParsers.rulesUtilities.rulesFromBNF, rulesAsString = _occamParsers.rulesUtilities.rulesAsString, ruleMapFromRules = _occamParsers.rulesUtilities.ruleMapFromRules, startRuleFromRules = _occamParsers.rulesUtilities.startRuleFromRules;
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
    rulesFromBNF: rulesFromBNF,
    rulesAsString: rulesAsString,
    ruleMapFromRules: ruleMapFromRules,
    startRuleFromRules: startRuleFromRules,
    rulesFromStartRuleAndRuleMap: rulesFromStartRuleAndRuleMap,
    startRuleFromRulesAndStartRuleName: startRuleFromRulesAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzRnJvbUJORiwgcnVsZXNBc1N0cmluZywgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gPSBydWxlc1V0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVzID0gT2JqZWN0LnZhbHVlcyhydWxlTWFwKSxcbiAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHN0YXJ0UnVsZS5nZXROYW1lKCk7XG5cbiAgZmlsdGVyKHJ1bGVzLCAocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBpZiAocnVsZU5hbWUgIT09IHN0YXJ0UnVsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcnVsZXMudW5zaGlmdChzdGFydFJ1bGUpO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgbGV0IHN0YXJ0UnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBzdGFydFJ1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7IC8vL1xuXG4gIGlmIChzdGFydFJ1bGUgPT09IG51bGwpIHtcbiAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXJ0UnVsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlc0Zyb21CTkYsXG4gIHJ1bGVzQXNTdHJpbmcsXG4gIHJ1bGVNYXBGcm9tUnVsZXMsXG4gIHN0YXJ0UnVsZUZyb21SdWxlcyxcbiAgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCxcbiAgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZVxufTtcbiJdLCJuYW1lcyI6WyJydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicnVsZXNGcm9tQk5GIiwicnVsZXNVdGlsaXRpZXMiLCJydWxlc0FzU3RyaW5nIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlcyIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJydWxlcyIsIk9iamVjdCIsInZhbHVlcyIsInN0YXJ0UnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZSIsInJ1bGVOYW1lIiwidW5zaGlmdCIsImZpbmQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFRR0EsNEJBQTRCO2VBQTVCQSw0QkFBNEI7O0lBaUI1QkMsa0NBQWtDO2VBQWxDQSxrQ0FBa0M7O0lBZ0JsRCxPQU9FO2VBUEYsUUFPRTs7O3lCQTlDNkIsV0FBVzs0QkFDWCxlQUFlO0FBRTlDLElBQU0sQUFBRUMsTUFBTSxHQUFLQyxVQUFjLGVBQUEsQ0FBekJELE1BQU0sQUFBbUIsRUFDekJFLFlBQVksR0FBMERDLGFBQWMsZUFBQSxDQUFwRkQsWUFBWSxFQUFFRSxhQUFhLEdBQTJDRCxhQUFjLGVBQUEsQ0FBdEVDLGFBQWEsRUFBRUMsZ0JBQWdCLEdBQXlCRixhQUFjLGVBQUEsQ0FBdkRFLGdCQUFnQixFQUFFQyxrQkFBa0IsR0FBS0gsYUFBYyxlQUFBLENBQXJDRyxrQkFBa0IsQUFBb0I7QUFFdEYsU0FBU1IsNEJBQTRCLENBQUNTLFNBQVMsRUFBRUMsT0FBTyxFQUFFO0lBQy9ELElBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUNILE9BQU8sQ0FBQyxFQUM5QkksYUFBYSxHQUFHTCxTQUFTLENBQUNNLE9BQU8sRUFBRSxBQUFDO0lBRTFDYixNQUFNLENBQUNTLEtBQUssRUFBRSxTQUFDSyxJQUFJLEVBQUs7UUFDdEIsSUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNELE9BQU8sRUFBRSxBQUFDO1FBRWhDLElBQUlFLFFBQVEsS0FBS0gsYUFBYSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRixDQUFDLENBQUM7SUFFSEgsS0FBSyxDQUFDTyxPQUFPLENBQUNULFNBQVMsQ0FBQyxDQUFDO0lBRXpCLE9BQU9FLEtBQUssQ0FBQztDQUNkO0FBRU0sU0FBU1Ysa0NBQWtDLENBQUNVLEtBQUssRUFBRUcsYUFBYSxFQUFFO0lBQ3ZFLElBQUlMLFNBQVMsR0FBR0UsS0FBSyxDQUFDUSxJQUFJLENBQUMsU0FBQ0gsSUFBSSxFQUFLO1FBQ25DLElBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRCxPQUFPLEVBQUUsQUFBQztRQUVoQyxJQUFJRSxRQUFRLEtBQUtILGFBQWEsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0YsQ0FBQyxJQUFJLElBQUksQUFBQyxFQUFDLEdBQUc7SUFFZixJQUFJTCxTQUFTLEtBQUssSUFBSSxFQUFFO1FBQ3RCQSxTQUFTLEdBQUdELGtCQUFrQixDQUFDRyxLQUFLLENBQUMsQ0FBQztLQUN2QztJQUVELE9BQU9GLFNBQVMsQ0FBQztDQUNsQjtJQUVELFFBT0UsR0FQYTtJQUNiTCxZQUFZLEVBQVpBLFlBQVk7SUFDWkUsYUFBYSxFQUFiQSxhQUFhO0lBQ2JDLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQ2hCQyxrQkFBa0IsRUFBbEJBLGtCQUFrQjtJQUNsQlIsNEJBQTRCLEVBQTVCQSw0QkFBNEI7SUFDNUJDLGtDQUFrQyxFQUFsQ0Esa0NBQWtDO0NBQ25DIn0=