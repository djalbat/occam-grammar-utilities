"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducedRuleFromRule = reducedRuleFromRule;
exports.repeatedRuleFromRule = repeatedRuleFromRule;
exports.rewrittenRuleFromRule = rewrittenRuleFromRule;
var _class = require("../utilities/class");
var _ruleName = require("../utilities/ruleName");
function reducedRuleFromRule(rule, ruleMap, ReducedRule) {
    var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName);
    var reducedRule = ruleMap[reducedRuleName] || null;
    if (reducedRule === null) {
        reducedRule = ReducedRule.fromRule(rule);
        ruleMap[reducedRuleName] = reducedRule;
    }
    return reducedRule;
}
function repeatedRuleFromRule(rule, ruleMap, RepeatedRule) {
    var ruleName = rule.getName(), repeatedRuleName = (0, _ruleName).repeatedRuleNameFromRuleName(ruleName);
    var repeatedRule = ruleMap[repeatedRuleName] || null;
    if (repeatedRule === null) {
        repeatedRule = RepeatedRule.fromRule(rule);
        ruleMap[repeatedRuleName] = repeatedRule;
    }
    return repeatedRule;
}
function rewrittenRuleFromRule(rule, ruleMap, RewrittenRule) {
    var rewrittenRule;
    var ruleRewrittenRule = (0, _class).isInstanceOf(rule, RewrittenRule);
    if (ruleRewrittenRule) {
        rewrittenRule = rule; ///
    } else {
        rewrittenRule = RewrittenRule.fromRule(rule);
        var replacedRule = rule, replacementRule = rewrittenRule; ///
        replaceRule(replacedRule, replacementRule, ruleMap);
    }
    return rewrittenRule;
}
function replaceRule(replacedRule, replacementRule, ruleMap) {
    var replacedRuleName = replacedRule.getName(), replacementRuleName = replacementRule.getName();
    delete ruleMap[replacedRuleName];
    ruleMap[replacementRuleName] = replacementRule;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJuYW1lcyI6WyJpc0luc3RhbmNlT2YiLCJyZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsInJ1bGUiLCJydWxlTWFwIiwiUmVkdWNlZFJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZSIsImZyb21SdWxlIiwicmVwZWF0ZWRSdWxlRnJvbVJ1bGUiLCJSZXBlYXRlZFJ1bGUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiUmV3cml0dGVuUnVsZSIsInJld3JpdHRlblJ1bGUiLCJydWxlUmV3cml0dGVuUnVsZSIsInJlcGxhY2VkUnVsZSIsInJlcGxhY2VtZW50UnVsZSIsInJlcGxhY2VSdWxlIiwicmVwbGFjZWRSdWxlTmFtZSIsInJlcGxhY2VtZW50UnVsZU5hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFLSSxtQkFBbUIsR0FBbkIsbUJBQW1CO1FBZW5CLG9CQUFvQixHQUFwQixvQkFBb0I7UUFlcEIscUJBQXFCLEdBQXJCLHFCQUFxQjtBQWpDUixHQUFvQixDQUFwQixNQUFvQjtBQUN5QixHQUF1QixDQUF2QixTQUF1QjtTQUVqRixtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ2hFLEdBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFDMUIsZUFBZSxPQUp1RCxTQUF1Qiw4QkFJL0MsUUFBUTtJQUV6RCxHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxlQUFlLEtBQUssSUFBSTtJQUVsRCxFQUFFLEVBQUUsV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3hCLFdBQVcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUk7UUFFdkMsT0FBTyxDQUFDLGVBQWUsSUFBSSxXQUFXO0lBQ3pDLENBQUM7SUFFRCxNQUFNLENBQUMsV0FBVztBQUNuQixDQUFDO1NBRWUsb0JBQW9CLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUNqRSxHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQ3ZCLGdCQUFnQixPQW5Ca0QsU0FBdUIsK0JBbUJ6QyxRQUFRO0lBRTlELEdBQUcsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixLQUFLLElBQUk7SUFFcEQsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUMxQixZQUFZLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1FBRXpDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxZQUFZO0lBQzFDLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWTtBQUNyQixDQUFDO1NBRWUscUJBQXFCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQztJQUNuRSxHQUFHLENBQUMsYUFBYTtJQUVqQixHQUFLLENBQUMsaUJBQWlCLE9BcENJLE1BQW9CLGVBb0NSLElBQUksRUFBRSxhQUFhO0lBRTFELEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RCLGFBQWEsR0FBRyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBQzNCLENBQUMsTUFBTSxDQUFDO1FBQ04sYUFBYSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUUzQyxHQUFLLENBQUMsWUFBWSxHQUFHLElBQUksRUFDbkIsZUFBZSxHQUFHLGFBQWEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFM0MsV0FBVyxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsT0FBTztJQUNwRCxDQUFDO0lBRUQsTUFBTSxDQUFDLGFBQWE7QUFDdEIsQ0FBQztTQUVRLFdBQVcsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzVELEdBQUssQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsT0FBTyxJQUN2QyxtQkFBbUIsR0FBRyxlQUFlLENBQUMsT0FBTztJQUVuRCxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQjtJQUUvQixPQUFPLENBQUMsbUJBQW1CLElBQUksZUFBZTtBQUNoRCxDQUFDIn0=