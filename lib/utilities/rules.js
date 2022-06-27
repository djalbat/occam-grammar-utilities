"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        get: all[name],
        enumerable: true
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    retrieveLeftRecursiveRules: function() {
        return retrieveLeftRecursiveRules;
    },
    rulesFromStartRuleAndRuleMap: function() {
        return rulesFromStartRuleAndRuleMap;
    },
    startRuleFromRulesAndStartRuleName: function() {
        return startRuleFromRulesAndStartRuleName;
    }
});
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var filter = _necessary.arrayUtilities.filter, rulesAsString = _occamParsers.rulesUtilities.rulesAsString, ruleMapFromRules = _occamParsers.rulesUtilities.ruleMapFromRules, startRuleFromRules = _occamParsers.rulesUtilities.startRuleFromRules;
function retrieveLeftRecursiveRules(leftRecursiveDefinitions, LeftRecursiveDefinition, ruleMap) {
    var leftRecursiveRules = [];
    leftRecursiveDefinitions.forEach(function(leftRecursiveDefinition) {
        if (_instanceof(leftRecursiveDefinition, LeftRecursiveDefinition)) {
            var ruleName = leftRecursiveDefinition.getRuleName(), rule = ruleMap[ruleName], leftRecursiveRulesIncludesRule = leftRecursiveRules.includes(rule);
            if (!leftRecursiveRulesIncludesRule) {
                var leftRecursiveRule = rule; ///
                leftRecursiveRules.push(leftRecursiveRule);
            }
        }
    });
    return leftRecursiveRules;
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
    retrieveLeftRecursiveRules: retrieveLeftRecursiveRules,
    rulesFromStartRuleAndRuleMap: rulesFromStartRuleAndRuleMap,
    startRuleFromRulesAndStartRuleName: startRuleFromRulesAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZUxlZnRSZWN1cnNpdmVSdWxlcyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBydWxlTWFwKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlcyA9IFtdO1xuXG4gIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5mb3JFYWNoKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZXNJbmNsdWRlc1J1bGUgPSBsZWZ0UmVjdXJzaXZlUnVsZXMuaW5jbHVkZXMocnVsZSk7XG5cbiAgICAgIGlmICghbGVmdFJlY3Vyc2l2ZVJ1bGVzSW5jbHVkZXNSdWxlKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlID0gcnVsZTsgLy8vXG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGVzID0gT2JqZWN0LnZhbHVlcyhydWxlTWFwKSxcbiAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHN0YXJ0UnVsZS5nZXROYW1lKCk7XG5cbiAgZmlsdGVyKHJ1bGVzLCAocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBpZiAocnVsZU5hbWUgIT09IHN0YXJ0UnVsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcnVsZXMudW5zaGlmdChzdGFydFJ1bGUpO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgbGV0IHN0YXJ0UnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBzdGFydFJ1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7IC8vL1xuXG4gIGlmIChzdGFydFJ1bGUgPT09IG51bGwpIHtcbiAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXJ0UnVsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlc0FzU3RyaW5nLFxuICBydWxlTWFwRnJvbVJ1bGVzLFxuICBzdGFydFJ1bGVGcm9tUnVsZXMsXG4gIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZVJ1bGVzLFxuICBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwLFxuICBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lXG59O1xuIl0sIm5hbWVzIjpbInJldHJpZXZlTGVmdFJlY3Vyc2l2ZVJ1bGVzIiwicnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVNYXAiLCJsZWZ0UmVjdXJzaXZlUnVsZXMiLCJmb3JFYWNoIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlc0luY2x1ZGVzUnVsZSIsImluY2x1ZGVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGUiLCJwdXNoIiwic3RhcnRSdWxlIiwicnVsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0TmFtZSIsInVuc2hpZnQiLCJmaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBUUdBLDBCQUEwQjtlQUExQkEsMEJBQTBCOztJQW9CMUJDLDRCQUE0QjtlQUE1QkEsNEJBQTRCOztJQWlCNUJDLGtDQUFrQztlQUFsQ0Esa0NBQWtDOzs7eUJBM0NuQixXQUFXOzRCQUNYLGVBQWU7Ozs7Ozs7O0FBRTlDLElBQU0sQUFBRUMsTUFBTSxHQUFLQyxVQUFjLGVBQUEsQ0FBekJELE1BQU0sQUFBbUIsRUFDekJFLGFBQWEsR0FBMkNDLGFBQWMsZUFBQSxDQUF0RUQsYUFBYSxFQUFFRSxnQkFBZ0IsR0FBeUJELGFBQWMsZUFBQSxDQUF2REMsZ0JBQWdCLEVBQUVDLGtCQUFrQixHQUFLRixhQUFjLGVBQUEsQ0FBckNFLGtCQUFrQixBQUFvQjtBQUV4RSxTQUFTUiwwQkFBMEIsQ0FBQ1Msd0JBQXdCLEVBQUVDLHVCQUF1QixFQUFFQyxPQUFPLEVBQUU7SUFDckcsSUFBTUMsa0JBQWtCLEdBQUcsRUFBRSxBQUFDO0lBRTlCSCx3QkFBd0IsQ0FBQ0ksT0FBTyxDQUFDLFNBQUNDLHVCQUF1QixFQUFLO1FBQzVELElBQUlBLEFBQXVCLFdBQVlKLENBQW5DSSx1QkFBdUIsRUFBWUosdUJBQXVCLENBQUEsRUFBRTtZQUM5RCxJQUFNSyxRQUFRLEdBQUdELHVCQUF1QixDQUFDRSxXQUFXLEVBQUUsRUFDaERDLElBQUksR0FBR04sT0FBTyxDQUFDSSxRQUFRLENBQUMsRUFDeEJHLDhCQUE4QixHQUFHTixrQkFBa0IsQ0FBQ08sUUFBUSxDQUFDRixJQUFJLENBQUMsQUFBQztZQUV6RSxJQUFJLENBQUNDLDhCQUE4QixFQUFFO2dCQUNuQyxJQUFNRSxpQkFBaUIsR0FBR0gsSUFBSSxBQUFDLEVBQUMsR0FBRztnQkFFbkNMLGtCQUFrQixDQUFDUyxJQUFJLENBQUNELGlCQUFpQixDQUFDLENBQUM7YUFDNUM7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU9SLGtCQUFrQixDQUFDO0NBQzNCO0FBRU0sU0FBU1gsNEJBQTRCLENBQUNxQixTQUFTLEVBQUVYLE9BQU8sRUFBRTtJQUMvRCxJQUFNWSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDZCxPQUFPLENBQUMsRUFDOUJlLGFBQWEsR0FBR0osU0FBUyxDQUFDSyxPQUFPLEVBQUUsQUFBQztJQUUxQ3hCLE1BQU0sQ0FBQ29CLEtBQUssRUFBRSxTQUFDTixJQUFJLEVBQUs7UUFDdEIsSUFBTUYsUUFBUSxHQUFHRSxJQUFJLENBQUNVLE9BQU8sRUFBRSxBQUFDO1FBRWhDLElBQUlaLFFBQVEsS0FBS1csYUFBYSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRixDQUFDLENBQUM7SUFFSEgsS0FBSyxDQUFDSyxPQUFPLENBQUNOLFNBQVMsQ0FBQyxDQUFDO0lBRXpCLE9BQU9DLEtBQUssQ0FBQztDQUNkO0FBRU0sU0FBU3JCLGtDQUFrQyxDQUFDcUIsS0FBSyxFQUFFRyxhQUFhLEVBQUU7SUFDdkUsSUFBSUosU0FBUyxHQUFHQyxLQUFLLENBQUNNLElBQUksQ0FBQyxTQUFDWixJQUFJLEVBQUs7UUFDbkMsSUFBTUYsUUFBUSxHQUFHRSxJQUFJLENBQUNVLE9BQU8sRUFBRSxBQUFDO1FBRWhDLElBQUlaLFFBQVEsS0FBS1csYUFBYSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRixDQUFDLElBQUksSUFBSSxBQUFDLEVBQUMsR0FBRztJQUVmLElBQUlKLFNBQVMsS0FBSyxJQUFJLEVBQUU7UUFDdEJBLFNBQVMsR0FBR2Qsa0JBQWtCLENBQUNlLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsT0FBT0QsU0FBUyxDQUFDO0NBQ2xCO2VBRWM7SUFDYmpCLGFBQWEsRUFBYkEsYUFBYTtJQUNiRSxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQkMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJSLDBCQUEwQixFQUExQkEsMEJBQTBCO0lBQzFCQyw0QkFBNEIsRUFBNUJBLDRCQUE0QjtJQUM1QkMsa0NBQWtDLEVBQWxDQSxrQ0FBa0M7Q0FDbkMifQ==