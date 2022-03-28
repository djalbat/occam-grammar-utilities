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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVjdXJzaXZlUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gocmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHBhcnQ7ICAvLy9cblxuICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IHBhcnQ7IC8vL1xuXG4gICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInBhcnQiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0IiwiaXNOb25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInB1c2giLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJnZXRQYXJ0cyIsImZvckVhY2giLCJjaG9pY2VPZlBhcnRzUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7O1FBYUdBLDBCQUEwQixHQUExQkEsMEJBQTBCO1FBd0UxQkMsOEJBQThCLEdBQTlCQSw4QkFBOEI7QUFuRnBCLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUNWLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUUxQyxJQUFNLEFBQUVDLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEVBQ3hCRSxnQkFBZ0IsR0FLWUMsYUFBUyxVQUFBLENBTHJDRCxnQkFBZ0IsRUFDaEJFLG9CQUFvQixHQUlRRCxhQUFTLFVBQUEsQ0FKckNDLG9CQUFvQixFQUNwQkMsdUJBQXVCLEdBR0tGLGFBQVMsVUFBQSxDQUhy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