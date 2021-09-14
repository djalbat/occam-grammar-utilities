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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVjdXJzaXZlUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gocmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHBhcnQ7ICAvLy9cblxuICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IHBhcnQ7IC8vL1xuXG4gICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBYUksMEJBQTBCLEdBQTFCLDBCQUEwQjtRQXdFMUIsOEJBQThCLEdBQTlCLDhCQUE4QjtBQW5GcEIsR0FBZSxDQUFmLGFBQWU7QUFDVixHQUFXLENBQVgs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