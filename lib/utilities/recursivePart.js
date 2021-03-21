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
                    parts.forEach(function(part1) {
                        return recursiveRuleNamesFromPart(part1, recursiveRuleNames);
                    });
                }
                break;
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = part, parts = choiceOfPartsPart.getParts();
                    parts.forEach(function(part1) {
                        return recursiveRuleNamesFromPart(part1, recursiveRuleNames);
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
                    parts.forEach(function(part1) {
                        return leftRecursiveRuleNamesFromPart(part1, leftRecursiveRuleNames);
                    });
                }
                break;
        }
    }
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVjdXJzaXZlUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gocmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gcGFydDsgIC8vL1xuXG4gICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHBhcnQ7ICAvLy9cblxuICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IHBhcnQ7IC8vL1xuXG4gICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgIC8vL1xuXG4gICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IHBhcnQ7IC8vL1xuXG4gICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7O1FBYUEsMEJBQUEsR0FBQSwwQkFBQTtRQWtFQSw4QkFBQSxHQUFBLDhCQUFBO0lBN0VBLGFBQUE7SUFDQSxVQUFBO0lBRUEsS0FBQSxHQUZBLFVBQUEsZ0JBRUEsS0FBQSxFQUNBLGdCQUFBLEdBSkEs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