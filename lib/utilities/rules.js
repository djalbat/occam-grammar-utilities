"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rulesAsString = rulesAsString;
exports.ruleMapFromRules = ruleMapFromRules;
exports.startRuleFromRules = startRuleFromRules;
exports.rulesFromStartRuleAndRuleMap = rulesFromStartRuleAndRuleMap;
var _necessary = require("necessary");
var _constants = require("../constants");
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter;
function rulesAsString(rules, multiLine) {
    var maximumRuleNameLength = rules.reduce(function(maximumRuleNameLength, rule) {
        var ruleName = rule.getName(), ruleNameLength = ruleName.length;
        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);
        return maximumRuleNameLength;
    }, 0), rulesString = rules.reduce(function(rulesString, rule) {
        var ruleString = rule.asString(maximumRuleNameLength, multiLine);
        rulesString += ruleString;
        return rulesString;
    }, _constants.EMPTY_STRING).replace(/^\n\n/, _constants.EMPTY_STRING);
    return rulesString;
}
function ruleMapFromRules(rules) {
    var ruleMap = rules.reduce(function(ruleMap, rule) {
        var ruleName = rule.getName();
        ruleMap[ruleName] = rule;
        return ruleMap;
    }, {
    });
    return ruleMap;
}
function startRuleFromRules(rules) {
    var firstRule = first(rules), startRule = firstRule; ///
    return startRule;
}
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJFTVBUWV9TVFJJTkciLCJmaXJzdCIsImZpbHRlciIsInJ1bGVzQXNTdHJpbmciLCJydWxlcyIsIm11bHRpTGluZSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZUxlbmd0aCIsImxlbmd0aCIsIk1hdGgiLCJtYXgiLCJydWxlc1N0cmluZyIsInJ1bGVTdHJpbmciLCJhc1N0cmluZyIsInJlcGxhY2UiLCJydWxlTWFwRnJvbVJ1bGVzIiwicnVsZU1hcCIsInN0YXJ0UnVsZUZyb21SdWxlcyIsImZpcnN0UnVsZSIsInN0YXJ0UnVsZSIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzdGFydFJ1bGVOYW1lIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQVFJLGFBQWEsR0FBYixhQUFhO1FBb0JiLGdCQUFnQixHQUFoQixnQkFBZ0I7UUFZaEIsa0JBQWtCLEdBQWxCLGtCQUFrQjtRQU9sQiw0QkFBNEIsR0FBNUIsNEJBQTRCO0FBN0NiLEdBQVcsQ0FBWCxVQUFXO0FBRWIsR0FBYyxDQUFkLFVBQWM7QUFFM0MsR0FBSyxDQUFHLEtBQUssR0FKa0IsVUFBVyxnQkFJbEMsS0FBSyxFQUFFLE1BQU0sR0FKVSxVQUFXLGdCQUkzQixNQUFNO1NBRUwsYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUMvQyxHQUFLLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAscUJBQXFCLEVBQUUsSUFBSSxFQUFLLENBQUM7UUFDckUsR0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUN2QixjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU07UUFFdEMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxjQUFjO1FBRXRFLE1BQU0sQ0FBQyxxQkFBcUI7SUFDOUIsQ0FBQyxFQUFFLENBQUMsR0FDSixXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsV0FBVyxFQUFFLElBQUksRUFBSyxDQUFDO1FBQ2pELEdBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTO1FBRWpFLFdBQVcsSUFBSSxVQUFVO1FBRXpCLE1BQU0sQ0FBQyxXQUFXO0lBQ3BCLENBQUMsRUFuQm9CLFVBQWMsZUFtQmxCLE9BQU8sVUFuQkgsVUFBYztJQXFCekMsTUFBTSxDQUFDLFdBQVc7QUFDcEIsQ0FBQztTQUVlLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLEdBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsT0FBTyxFQUFFLElBQUksRUFBSyxDQUFDO1FBQy9DLEdBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFN0IsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJO1FBRXhCLE1BQU0sQ0FBQyxPQUFPO0lBQ2hCLENBQUMsRUFBRSxDQUFDO0lBQUEsQ0FBQztJQUVMLE1BQU0sQ0FBQyxPQUFPO0FBQ2hCLENBQUM7U0FFZSxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxHQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQ3ZCLFNBQVMsR0FBRyxTQUFTLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRWpDLE1BQU0sQ0FBQyxTQUFTO0FBQ2xCLENBQUM7U0FFZSw0QkFBNEIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDaEUsR0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FDN0IsYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPO0lBRXZDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFQLElBQUksRUFBSyxDQUFDO1FBQ3ZCLEdBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFN0IsRUFBRSxFQUFFLFFBQVEsS0FBSyxhQUFhLEVBQUUsQ0FBQztZQUMvQixNQUFNLENBQUMsSUFBSTtRQUNiLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTO0lBRXZCLE1BQU0sQ0FBQyxLQUFLO0FBQ2QsQ0FBQyJ9