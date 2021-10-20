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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVjdXJzaXZlUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gocmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHBhcnQ7ICAvLy9cblxuICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IHBhcnQ7IC8vL1xuXG4gICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImZpcnN0IiwiUnVsZU5hbWVQYXJ0VHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJ0IiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTmFtZVBhcnQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJwdXNoIiwib3B0aW9uYWxQYXJ0UGFydCIsImdldFBhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnRzIiwiZ2V0UGFydHMiLCJmb3JFYWNoIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmaXJzdFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7UUFhSUEsMEJBQTBCLEdBQTFCQSwwQkFBMEI7UUF3RTFCQyw4QkFBOEIsR0FBOUJBLDhCQUE4QjtBQW5GcEIsR0FBZSxDQUFmLGFBQWU7QUFDVixHQUFXLENBQVgsVUFBVztBQUUxQyxHQUFLLENBQUdDLEtBQUssR0FGa0IsVUFBVyxnQkFFbENBLEtBQUssRUFDTEMsZ0JBQWdCLEdBSkUsYUFBZSxXQUlqQ0EsZ0JBQWdCLEVBQ2hCQyxvQkFBb0IsR0FMRixhQUFlLFdBS2pDQSxvQkFBb0IsRUFDcEJDLHVCQUF1QixHQU5MLGFBQWUsV0FNakNBLHVCQUF1QixFQUN2QkMscUJBQXFCLEdBUEgsYUFBZSxXQU9qQ0EscUJBQXFCLEVBQ3JCQyxzQkFBc0IsR0FSSixhQUFlLFdBUWpDQSxzQkFB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