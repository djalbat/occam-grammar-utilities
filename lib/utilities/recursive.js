"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "recursiveRuleNamesFromRule", {
    enumerable: true,
    get: function() {
        return recursiveRuleNamesFromRule;
    }
});
const _occamparsers = require("occam-parsers");
const { RuleNamePartType, OptionalPartPartType, ChoiceOfPartsPartType, OneOrMorePartsPartType, SequenceOfPartsPartType, ZeroOrMorePartsPartType } = _occamparsers.partTypes;
function recursiveRuleNamesFromRule(rule, recursiveRuleNames = []) {
    const definitions = rule.getDefinitions();
    definitions.forEach((definition)=>{
        recursiveRuleNamesFromDefinition(definition, recursiveRuleNames);
    });
    return recursiveRuleNames;
}
function recursiveRuleNamesFromDefinition(definition, recursiveRuleNames = []) {
    const parts = definition.getParts();
    recursiveRuleNamesFromParts(parts, recursiveRuleNames);
    return recursiveRuleNames;
}
function recursiveRuleNamesFromParts(parts, recursiveRuleNames = []) {
    parts.forEach((part)=>{
        recursiveRuleNamesFromPart(part, recursiveRuleNames);
    });
    return recursiveRuleNames;
}
function recursiveRuleNamesFromPart(part, recursiveRuleNames) {
    const partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        const nonTerminalPart = part, type = nonTerminalPart.getType();
        switch(type){
            case RuleNamePartType:
                {
                    const ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);
                    if (!recursiveRuleNamesIncludesRuleName) {
                        const recursiveRuleName = ruleName; ///
                        recursiveRuleNames.push(recursiveRuleName);
                    }
                    break;
                }
            case OptionalPartPartType:
                {
                    const optionalPartPart = nonTerminalPart, part = optionalPartPart.getPart();
                    recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    break;
                }
            case OneOrMorePartsPartType:
                {
                    const oneOrMorePartsPart = nonTerminalPart, part = oneOrMorePartsPart.getPart();
                    recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    const zeroOrMorePartsPart = nonTerminalPart, part = zeroOrMorePartsPart.getPart(); ///
                    recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    break;
                }
            case SequenceOfPartsPartType:
                {
                    const sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts();
                    parts.forEach((part)=>{
                        recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                    break;
                }
            case ChoiceOfPartsPartType:
                {
                    const choiceOfPartsPart = nonTerminalPart, parts = choiceOfPartsPart.getParts();
                    parts.forEach((part)=>{
                        recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                    break;
                }
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVjdXJzaXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUocnVsZSwgcmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cywgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gocmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTsgIC8vL1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJydWxlIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZvckVhY2giLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwicGFydCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTmFtZVBhcnQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJwdXNoIiwib3B0aW9uYWxQYXJ0UGFydCIsImdldFBhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImNob2ljZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXZ0JBOzs7ZUFBQUE7Ozs4QkFUVTtBQUUxQixNQUFNLEVBQUVDLGdCQUFnQixFQUNoQkMsb0JBQW9CLEVBQ3BCQyxxQkFBcUIsRUFDckJDLHNCQUFzQixFQUN0QkMsdUJBQXVCLEVBQ3ZCQyx1QkFBdUIsRUFBRSxHQUFHQyx1QkFBUztBQUV0QyxTQUFTUCwyQkFBMkJRLElBQUksRUFBRUMscUJBQXFCLEVBQUU7SUFDdEUsTUFBTUMsY0FBY0YsS0FBS0csY0FBYztJQUV2Q0QsWUFBWUUsT0FBTyxDQUFDLENBQUNDO1FBQ25CQyxpQ0FBaUNELFlBQVlKO0lBQy9DO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNLLGlDQUFpQ0QsVUFBVSxFQUFFSixxQkFBcUIsRUFBRTtJQUMzRSxNQUFNTSxRQUFRRixXQUFXRyxRQUFRO0lBRWpDQyw0QkFBNEJGLE9BQU9OO0lBRW5DLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTUSw0QkFBNEJGLEtBQUssRUFBRU4scUJBQXFCLEVBQUU7SUFDakVNLE1BQU1ILE9BQU8sQ0FBQyxDQUFDTTtRQUNiQywyQkFBMkJELE1BQU1UO0lBQ25DO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNVLDJCQUEyQkQsSUFBSSxFQUFFVCxrQkFBa0I7SUFDMUQsTUFBTVcsc0JBQXNCRixLQUFLRyxpQkFBaUI7SUFFbEQsSUFBSUQscUJBQXFCO1FBQ3ZCLE1BQU1FLGtCQUFrQkosTUFDbEJLLE9BQU9ELGdCQUFnQkUsT0FBTztRQUVwQyxPQUFRRDtZQUNOLEtBQUt0QjtnQkFBa0I7b0JBQ3JCLE1BQU13QixlQUFlSCxpQkFDZkksV0FBV0QsYUFBYUUsV0FBVyxJQUNuQ0MscUNBQXFDbkIsbUJBQW1Cb0IsUUFBUSxDQUFDSDtvQkFFdkUsSUFBSSxDQUFDRSxvQ0FBb0M7d0JBQ3ZDLE1BQU1FLG9CQUFvQkosVUFBVSxHQUFHO3dCQUV2Q2pCLG1CQUFtQnNCLElBQUksQ0FBQ0Q7b0JBQzFCO29CQUVBO2dCQUNGO1lBRUEsS0FBSzVCO2dCQUFzQjtvQkFDekIsTUFBTThCLG1CQUFtQlYsaUJBQ25CSixPQUFPYyxpQkFBaUJDLE9BQU87b0JBRXJDZCwyQkFBMkJELE1BQU1UO29CQUVqQztnQkFDRjtZQUVBLEtBQUtMO2dCQUF3QjtvQkFDM0IsTUFBTThCLHFCQUFxQlosaUJBQ3JCSixPQUFPZ0IsbUJBQW1CRCxPQUFPO29CQUV2Q2QsMkJBQTJCRCxNQUFNVDtvQkFFakM7Z0JBQ0Y7WUFFQSxLQUFLSDtnQkFBeUI7b0JBQzVCLE1BQU02QixzQkFBc0JiLGlCQUN0QkosT0FBT2lCLG9CQUFvQkYsT0FBTyxJQUFLLEdBQUc7b0JBRWhEZCwyQkFBMkJELE1BQU1UO29CQUVqQztnQkFDRjtZQUVBLEtBQUtKO2dCQUF5QjtvQkFDNUIsTUFBTStCLHNCQUFzQmQsaUJBQ3RCUCxRQUFRcUIsb0JBQW9CcEIsUUFBUTtvQkFFMUNELE1BQU1ILE9BQU8sQ0FBQyxDQUFDTTt3QkFDYkMsMkJBQTJCRCxNQUFNVDtvQkFDbkM7b0JBRUE7Z0JBQ0Y7WUFFQSxLQUFLTjtnQkFBdUI7b0JBQzFCLE1BQU1rQyxvQkFBb0JmLGlCQUNwQlAsUUFBUXNCLGtCQUFrQnJCLFFBQVE7b0JBRXhDRCxNQUFNSCxPQUFPLENBQUMsQ0FBQ007d0JBQ2JDLDJCQUEyQkQsTUFBTVQ7b0JBQ25DO29CQUVBO2dCQUNGO1FBQ0Y7SUFDRjtBQUNGIn0=