"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recursiveRuleNamesFromPart = recursiveRuleNamesFromPart;
exports.leftRecursiveRuleNamesFromPart = leftRecursiveRuleNamesFromPart;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, RuleNamePartType = _occamParsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamParsers.partTypes.OptionalPartPartType, SequenceOfPartsPartType = _occamParsers.partTypes.SequenceOfPartsPartType, ChoiceOfPartsPartType = _occamParsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamParsers.partTypes.OneOrMorePartsPartType, ZeroOrMorePartsPartType = _occamParsers.partTypes.ZeroOrMorePartsPartType;
function recursiveRuleNamesFromPart(part, recursiveRuleNames) {
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var type = part.getType();
        switch(type){
            case RuleNamePartType:
                {
                    var ruleNamePart = part, ruleName = ruleNamePart.getRuleName(), recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);
                    if (!recursiveRuleNamesIncludesRuleName) {
                        var recursiveRuleName = ruleName; ///
                        recursiveRuleNames.push(recursiveRuleName);
                    }
                }
                break;
            case OptionalPartPartType:
                {
                    var optionalPartPart = part; ///
                    part = optionalPartPart.getPart();
                    recursiveRuleNamesFromPart(part, recursiveRuleNames);
                }
                break;
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = part; ///
                    part = oneOrMorePartsPart.getPart();
                    recursiveRuleNamesFromPart(part, recursiveRuleNames);
                }
                break;
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = part; ///
                    part = zeroOrMorePartsPart.getPart(); ///
                    recursiveRuleNamesFromPart(part, recursiveRuleNames);
                }
                break;
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = part, parts = sequenceOfPartsPart.getParts();
                    parts.forEach(function(part) {
                        return recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                }
                break;
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = part, parts = choiceOfPartsPart.getParts();
                    parts.forEach(function(part) {
                        return recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                }
                break;
        }
    }
}
function leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames) {
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var type = part.getType();
        switch(type){
            case RuleNamePartType:
                {
                    var ruleNamePart = part, ruleName = ruleNamePart.getRuleName(), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);
                    if (!leftRecursiveRuleNamesIncludesRuleName) {
                        var leftRecursiveRuleName = ruleName; ///
                        leftRecursiveRuleNames.push(leftRecursiveRuleName);
                    }
                }
                break;
            case OptionalPartPartType:
                {
                    var optionalPartPart = part; ///
                    part = optionalPartPart.getPart();
                    leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                }
                break;
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = part; ///
                    part = oneOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                }
                break;
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = part; ///
                    part = zeroOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                }
                break;
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = part, parts = sequenceOfPartsPart.getParts(), firstPart = first(parts);
                    part = firstPart; ///
                    leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                }
                break;
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = part, parts = choiceOfPartsPart.getParts();
                    parts.forEach(function(part) {
                        return leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                    });
                }
                break;
        }
    }
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVjdXJzaXZlUGFydC5qcyJdLCJuYW1lcyI6WyJwYXJ0VHlwZXMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUnVsZU5hbWVQYXJ0VHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsInBhcnQiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0IiwiaXNOb25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInB1c2giLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJnZXRQYXJ0cyIsImZvckVhY2giLCJjaG9pY2VPZlBhcnRzUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQWFJLDBCQUEwQixHQUExQiwwQkFBMEI7UUF3RTFCLDhCQUE4QixHQUE5Qiw4QkFBOEI7QUFuRnBCLEdBQWUsQ0FBZixhQUFlO0FBQ1YsR0FBVyxDQUFYLFVBQVc7QUFFMUMsR0FBSyxDQUFHLEtBQUssR0FGa0IsVUFBVyxnQkFFbEMsS0FBSyxFQUNMLGdCQUFnQixHQUpFLGFBQWUsV0FJakMsZ0JBQWdCLEVBQ2hCLG9CQUFvQixHQUxGLGFBQWUsV0FLakMsb0JBQW9CLEVBQ3BCLHVCQUF1QixHQU5MLGFBQWUsV0FNakMsdUJBQXVCLEVBQ3ZCLHFCQUFxQixHQVBILGFBQWUsV0FPakMscUJBQXFCLEVBQ3JCLHNCQUFzQixHQVJKLGFBQWUsV0FRakMsc0JBQXNCLEVBQ3RCLHVCQUF1QixHQVRMLGFBQWUsV0FTakMsdUJBQXVCO1NBRWYsMEJBQTBCLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLENBQUM7SUFDcEUsR0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7SUFFbEQsRUFBRSxFQUFFLG1CQUFtQixFQUFFLENBQUM7UUFDeEIsR0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTztRQUV6QixNQUFNLENBQUUsSUFBSTtZQUNWLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQUcsQ0FBQztvQkFDckIsR0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQ25CLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxJQUNuQyxrQ0FBa0MsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsUUFBUTtvQkFFL0UsRUFBRSxHQUFHLGtDQUFrQyxFQUFFLENBQUM7d0JBQ3hDLEdBQUssQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUV2QyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO29CQUMzQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsS0FBSztZQUVQLElBQUksQ0FBQyxvQkFBb0I7Z0JBQUcsQ0FBQztvQkFDekIsR0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRW5DLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPO29CQUUvQiwwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCO2dCQUNyRCxDQUFDO2dCQUVELEtBQUs7WUFFUCxJQUFJLENBQUMsc0JBQXNCO2dCQUFHLENBQUM7b0JBQzNCLEdBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUVyQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsT0FBTztvQkFFakMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLGtCQUFrQjtnQkFDckQsQ0FBQztnQkFFRCxLQUFLO1lBRVAsSUFBSSxDQUFDLHVCQUF1QjtnQkFBRyxDQUFDO29CQUM1QixHQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFckMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sR0FBSyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRTFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3JELENBQUM7Z0JBRUQsS0FBSztZQUVQLElBQUksQ0FBQyx1QkFBdUI7Z0JBQUcsQ0FBQztvQkFDOUIsR0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksRUFDMUIsS0FBSyxHQUFHLG1CQUFtQixDQUFDLFFBQVE7b0JBRXhDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLElBQUk7d0JBQUssTUFBTSxDQUFOLDBCQUEwQixDQUFDLElBQUksRUFBRSxrQkFBa0I7O2dCQUM3RSxDQUFDO2dCQUVELEtBQUs7WUFFUCxJQUFJLENBQUMscUJBQXFCO2dCQUFHLENBQUM7b0JBQzVCLEdBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEVBQ3hCLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxRQUFRO29CQUV0QyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBUCxJQUFJO3dCQUFLLE1BQU0sQ0FBTiwwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCOztnQkFDN0UsQ0FBQztnQkFFRCxLQUFLOztJQUVYLENBQUM7QUFDSCxDQUFDO1NBRWUsOEJBQThCLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLENBQUM7SUFDNUUsR0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7SUFFbEQsRUFBRSxFQUFFLG1CQUFtQixFQUFFLENBQUM7UUFDeEIsR0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTztRQUV6QixNQUFNLENBQUUsSUFBSTtZQUNWLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQUcsQ0FBQztvQkFDckIsR0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQ25CLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxJQUNuQyxzQ0FBc0MsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsUUFBUTtvQkFFdkYsRUFBRSxHQUFHLHNDQUFzQyxFQUFFLENBQUM7d0JBQzVDLEdBQUssQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUUzQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCO29CQUNuRCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsS0FBSztZQUVQLElBQUksQ0FBQyxvQkFBb0I7Z0JBQUcsQ0FBQztvQkFDekIsR0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRWxDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPO29CQUUvQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCO2dCQUM3RCxDQUFDO2dCQUVELEtBQUs7WUFFUCxJQUFJLENBQUMsc0JBQXNCO2dCQUFHLENBQUM7b0JBQzNCLEdBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUVyQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsT0FBTztvQkFFakMsOEJBQThCLENBQUMsSUFBSSxFQUFFLHNCQUFzQjtnQkFDN0QsQ0FBQztnQkFFRCxLQUFLO1lBRVAsSUFBSSxDQUFDLHVCQUF1QjtnQkFBRyxDQUFDO29CQUM1QixHQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFckMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLE9BQU87b0JBRWxDLDhCQUE4QixDQUFDLElBQUksRUFBRSxzQkFBc0I7Z0JBQzdELENBQUM7Z0JBRUQsS0FBSztZQUVQLElBQUksQ0FBQyx1QkFBdUI7Z0JBQUcsQ0FBQztvQkFDNUIsR0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksRUFDMUIsS0FBSyxHQUFHLG1CQUFtQixDQUFDLFFBQVEsSUFDcEMsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLO29CQUU3QixJQUFJLEdBQUcsU0FBUyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFckIsOEJBQThCLENBQUMsSUFBSSxFQUFFLHNCQUFzQjtnQkFDN0QsQ0FBQztnQkFFRCxLQUFLO1lBRVAsSUFBSSxDQUFDLHFCQUFxQjtnQkFBRyxDQUFDO29CQUMxQixHQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxFQUN4QixLQUFLLEdBQUcsaUJBQWlCLENBQUMsUUFBUTtvQkFFeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAsSUFBSTt3QkFBSyxNQUFNLENBQU4sOEJBQThCLENBQUMsSUFBSSxFQUFFLHNCQUFzQjs7Z0JBQ3JGLENBQUM7Z0JBRUQsS0FBSzs7SUFFWCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoIXJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IHBhcnQ7ICAvLy9cblxuICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHBhcnQ7ICAvLy9cblxuICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBwYXJ0OyAvLy9cblxuICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTsgIC8vL1xuXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoIWxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMucHVzaChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBwYXJ0OyAvLy9cblxuICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgIC8vL1xuXG4gICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19