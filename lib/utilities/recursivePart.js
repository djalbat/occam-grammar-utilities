"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recursiveRuleNamesFromPart = recursiveRuleNamesFromPart;
exports.leftRecursiveRuleNamesFromPart = leftRecursiveRuleNamesFromPart;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, RuleNamePartType = _occamParsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamParsers.partTypes.OptionalPartPartType, SequenceOfPartsPartType = _occamParsers.partTypes.SequenceOfPartsPartType, ChoiceOfPartsPartType = _occamParsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamParsers.partTypes.OneOrMorePartsPartType, ZeroOrMorePartsPartType = _occamParsers.partTypes.ZeroOrMorePartsPartType;
function recursiveRuleNamesFromPart(part1, recursiveRuleNames) {
    var partNonTerminalPart = part1.isNonTerminalPart();
    if (partNonTerminalPart) {
        var type = part1.getType();
        switch(type){
            case RuleNamePartType:
                {
                    var ruleNamePart = part1, ruleName = ruleNamePart.getRuleName(), recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);
                    if (!recursiveRuleNamesIncludesRuleName) {
                        var recursiveRuleName = ruleName; ///
                        recursiveRuleNames.push(recursiveRuleName);
                    }
                }
                break;
            case OptionalPartPartType:
                {
                    var optionalPartPart = part1; ///
                    part1 = optionalPartPart.getPart();
                    recursiveRuleNamesFromPart(part1, recursiveRuleNames);
                }
                break;
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = part1; ///
                    part1 = oneOrMorePartsPart.getPart();
                    recursiveRuleNamesFromPart(part1, recursiveRuleNames);
                }
                break;
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = part1; ///
                    part1 = zeroOrMorePartsPart.getPart(); ///
                    recursiveRuleNamesFromPart(part1, recursiveRuleNames);
                }
                break;
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = part1, parts = sequenceOfPartsPart.getParts();
                    parts.forEach(function(part) {
                        return recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                }
                break;
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = part1, parts1 = choiceOfPartsPart.getParts();
                    parts1.forEach(function(part) {
                        return recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                }
                break;
        }
    }
}
function leftRecursiveRuleNamesFromPart(part2, leftRecursiveRuleNames) {
    var partNonTerminalPart = part2.isNonTerminalPart();
    if (partNonTerminalPart) {
        var type = part2.getType();
        switch(type){
            case RuleNamePartType:
                {
                    var ruleNamePart = part2, ruleName = ruleNamePart.getRuleName(), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);
                    if (!leftRecursiveRuleNamesIncludesRuleName) {
                        var leftRecursiveRuleName = ruleName; ///
                        leftRecursiveRuleNames.push(leftRecursiveRuleName);
                    }
                }
                break;
            case OptionalPartPartType:
                {
                    var optionalPartPart = part2; ///
                    part2 = optionalPartPart.getPart();
                    leftRecursiveRuleNamesFromPart(part2, leftRecursiveRuleNames);
                }
                break;
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = part2; ///
                    part2 = oneOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(part2, leftRecursiveRuleNames);
                }
                break;
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = part2; ///
                    part2 = zeroOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(part2, leftRecursiveRuleNames);
                }
                break;
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = part2, parts = sequenceOfPartsPart.getParts(), firstPart = first(parts);
                    part2 = firstPart; ///
                    leftRecursiveRuleNamesFromPart(part2, leftRecursiveRuleNames);
                }
                break;
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = part2, parts2 = choiceOfPartsPart.getParts();
                    parts2.forEach(function(part) {
                        return leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                    });
                }
                break;
        }
    }
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVjdXJzaXZlUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gocmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHBhcnQ7ICAvLy9cblxuICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IHBhcnQ7IC8vL1xuXG4gICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInBhcnQiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0IiwiaXNOb25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInB1c2giLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJnZXRQYXJ0cyIsImZvckVhY2giLCJjaG9pY2VPZlBhcnRzUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQWFJQSwwQkFBMEIsR0FBMUJBLDBCQUEwQjtRQXdFMUJDLDhCQUE4QixHQUE5QkEsOEJBQThCO0FBbkZwQixHQUFlLENBQWYsYUFBZTtBQUNWLEdBQVcsQ0FBWCxVQUFXO0FBRTFDLEdBQUssQ0FBR0MsS0FBSyxHQUFLQyxVQUFjLGdCQUF4QkQsS0FBSyxFQUNMRSxnQkFBZ0IsR0FLWUMsYUFBUyxXQUxyQ0QsZ0JBQWdCLEVBQ2hCRSxvQkFBb0IsR0FJUUQsYUFBUyxXQUpyQ0Msb0JBQW9CLEVBQ3BCQyx1QkFBdUIsR0FHS0YsYUFBUyxXQUhyQ0UsdUJBQXVCLEVBQ3ZCQyxxQkFBcUIsR0FFT0gsYUFBUyxXQUZyQ0cscUJBQXFCLEVB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