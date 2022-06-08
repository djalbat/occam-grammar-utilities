"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPartComplex = isPartComplex;
exports.reducedPartFromRuleName = reducedPartFromRuleName;
exports.recursiveRuleNamesFromPart = recursiveRuleNamesFromPart;
exports.leftRecursiveRuleNamesFromPart = leftRecursiveRuleNamesFromPart;
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _ruleName = require("../utilities/ruleName");
var first = _necessary.arrayUtilities.first, RuleNamePart = _occamParsers.Parts.RuleNamePart, OptionalPartPart = _occamParsers.Parts.OptionalPartPart, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, RuleNamePartType = _occamParsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamParsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamParsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamParsers.partTypes.OneOrMorePartsPartType, SequenceOfPartsPartType = _occamParsers.partTypes.SequenceOfPartsPartType, ZeroOrMorePartsPartType = _occamParsers.partTypes.ZeroOrMorePartsPartType;
function isPartComplex(part) {
    var partComplex = true;
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part, type = nonTerminalPart.getType();
        switch(type){
            case RuleNamePartType:
                partComplex = false;
                break;
            case OptionalPartPartType:
                {
                    var optionalPartPart = nonTerminalPart, _$part = optionalPartPart.getPart();
                    partComplex = isPartComplex(_$part);
                    break;
                }
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = nonTerminalPart, _$part1 = oneOrMorePartsPart.getPart();
                    partComplex = isPartComplex(_$part1);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = nonTerminalPart, _$part2 = zeroOrMorePartsPart.getPart(); ///
                    partComplex = isPartComplex(_$part2);
                    break;
                }
            case ChoiceOfPartsPartType:
            case SequenceOfPartsPartType:
                partComplex = true;
                break;
        }
    }
    return partComplex;
}
function reducedPartFromRuleName(ruleName) {
    var ruleNamePart = new RuleNamePart(ruleName), part = ruleNamePart, reducedPart = reducedPartFromPart(part);
    return reducedPart;
}
function recursiveRuleNamesFromPart(part1, recursiveRuleNames) {
    var partNonTerminalPart = part1.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part1, type = nonTerminalPart.getType();
        switch(type){
            case RuleNamePartType:
                {
                    var ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);
                    if (!recursiveRuleNamesIncludesRuleName) {
                        var recursiveRuleName = ruleName; ///
                        recursiveRuleNames.push(recursiveRuleName);
                    }
                    break;
                }
            case OptionalPartPartType:
                {
                    var optionalPartPart = nonTerminalPart, _$part = optionalPartPart.getPart();
                    recursiveRuleNamesFromPart(_$part, recursiveRuleNames);
                    break;
                }
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = nonTerminalPart, _$part3 = oneOrMorePartsPart.getPart();
                    recursiveRuleNamesFromPart(_$part3, recursiveRuleNames);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = nonTerminalPart, _$part4 = zeroOrMorePartsPart.getPart(); ///
                    recursiveRuleNamesFromPart(_$part4, recursiveRuleNames);
                    break;
                }
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = nonTerminalPart, parts = choiceOfPartsPart.getParts();
                    parts.forEach(function(part) {
                        return recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                    break;
                }
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = nonTerminalPart, parts1 = sequenceOfPartsPart.getParts();
                    parts1.forEach(function(part) {
                        return recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                    break;
                }
        }
    }
}
function leftRecursiveRuleNamesFromPart(part2, leftRecursiveRuleNames) {
    var partNonTerminalPart = part2.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part2, type = nonTerminalPart.getType();
        switch(type){
            case RuleNamePartType:
                {
                    var ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);
                    if (!leftRecursiveRuleNamesIncludesRuleName) {
                        var leftRecursiveRuleName = ruleName; ///
                        leftRecursiveRuleNames.push(leftRecursiveRuleName);
                    }
                    break;
                }
            case OptionalPartPartType:
                {
                    var optionalPartPart = nonTerminalPart, _$part = optionalPartPart.getPart();
                    leftRecursiveRuleNamesFromPart(_$part, leftRecursiveRuleNames);
                    break;
                }
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = nonTerminalPart, _$part5 = oneOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(_$part5, leftRecursiveRuleNames);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = nonTerminalPart, _$part6 = zeroOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(_$part6, leftRecursiveRuleNames);
                    break;
                }
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = nonTerminalPart, parts = choiceOfPartsPart.getParts();
                    parts.forEach(function(part) {
                        return leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                    });
                    break;
                }
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = nonTerminalPart, parts2 = sequenceOfPartsPart.getParts(), firstPart = first(parts2), _$part7 = firstPart; ///
                    leftRecursiveRuleNamesFromPart(_$part7, leftRecursiveRuleNames);
                    break;
                }
        }
    }
}
function reducedPartFromPart(part) {
    var reducedPart;
    var nonTerminalPart = part, type = nonTerminalPart.getType();
    switch(type){
        case RuleNamePartType:
            {
                var ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), lookAhead = ruleNamePart.isLookAhead(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), reducedRuleNamePart = new RuleNamePart(reducedRuleName, lookAhead);
                reducedPart = reducedRuleNamePart; ///
                break;
            }
        case OptionalPartPartType:
            {
                var optionalPartPart = nonTerminalPart, _$part = optionalPartPart.getPart();
                reducedPart = reducedPartFromPart(_$part);
                var reducedOptionalPartPart = new OptionalPartPart(reducedPart);
                reducedPart = reducedOptionalPartPart; ///
                break;
            }
        case OneOrMorePartsPartType:
            {
                var oneOrMorePartsPart = nonTerminalPart, _$part8 = oneOrMorePartsPart.getPart();
                reducedPart = reducedPartFromPart(_$part8);
                var reducedOneOrMorePartsPart = new OneOrMorePartsPart(reducedPart);
                reducedPart = reducedOneOrMorePartsPart; ///
                break;
            }
        case ZeroOrMorePartsPartType:
            {
                var zeroOrMorePartsPart = nonTerminalPart, _$part9 = zeroOrMorePartsPart.getPart();
                reducedPart = reducedPartFromPart(_$part9);
                var reducedZeroOrMorePartsPart = new ZeroOrMorePartsPart(reducedPart);
                reducedPart = reducedZeroOrMorePartsPart; ///
                break;
            }
    }
    return reducedPart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBQYXJ0cywgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0LCBPcHRpb25hbFBhcnRQYXJ0LCBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRDb21wbGV4KHBhcnQpIHtcbiAgbGV0IHBhcnRDb21wbGV4ID0gdHJ1ZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZTpcbiAgICAgICAgcGFydENvbXBsZXggPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTsgIC8vL1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6XG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOlxuICAgICAgICBwYXJ0Q29tcGxleCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRDb21wbGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSksXG4gICAgICAgIHBhcnQgPSBydWxlTmFtZVBhcnQsICAvLy9cbiAgICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gIHJldHVybiByZWR1Y2VkUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSB7XG4gIGxldCByZWR1Y2VkUGFydDtcblxuICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBsb29rQWhlYWQgPSBydWxlTmFtZVBhcnQuaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyZWR1Y2VkUnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCByZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHJlZHVjZWRQYXJ0KTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCByZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChyZWR1Y2VkUGFydCk7XG5cbiAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZE9uZU9yTW9yZVBhcnRzUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCByZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHJlZHVjZWRQYXJ0KTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVkdWNlZFBhcnQ7XG59XG4iXSwibmFtZXMiOlsiaXNQYXJ0Q29tcGxleCIsInJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUnVsZU5hbWVQYXJ0IiwiUGFydHMiLCJPcHRpb25hbFBhcnRQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwicGFydCIsInBhcnRDb21wbGV4IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJydWxlTmFtZSIsInJ1bGVOYW1lUGFydCIsInJlZHVjZWRQYXJ0IiwicmVkdWNlZFBhcnRGcm9tUGFydCIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldFJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJwdXNoIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImdldFBhcnRzIiwiZm9yRWFjaCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmaXJzdFBhcnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJyZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydCIsInJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJyZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7O1FBZ0JHQSxhQUFhLEdBQWJBLGFBQWE7UUFxRGJDLHVCQUF1QixHQUF2QkEsdUJBQXVCO1FBUXZCQywwQkFBMEIsR0FBMUJBLDBCQUEwQjtRQXNFMUJDLDhCQUE4QixHQUE5QkEsOEJBQThCO0FBakpmLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUNULElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUVKLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFFbkUsSUFBTSxBQUFFQyxLQUFLLEdBQUtDLFVBQWMsZUFBQSxDQUF4QkQsS0FBSyxBQUFtQixFQUN4QkUsWUFBWSxHQUE0Q0MsYUFBSyxNQUFBLENBQTdERCxZQUFZLEVBQUVFLGdCQUFnQixHQUEwQkQsYUFBSyxNQUFBLENBQS9DQyxnQkFBZ0IsRUFBRUMsbUJBQW1CLEdBQUtGLGFBQUssTUFBQSxDQUE3QkUsbUJBQW1CLEVBQ25EQyxnQkFBZ0IsR0FLWUMsYUFBUyxVQUFBLENBTHJDRCxnQkFBZ0IsRUFDaEJFLG9CQUFvQixHQUlRRCxhQUFTLFVBQUEsQ0FKckNDLG9CQUFvQixFQUNwQkMscUJBQXFCLEdBR09GLGFBQVMsVUFBQSxDQUhyQ0UscUJBQXFCLEVBQ3JCQyxzQkFBc0IsR0FFTUgsYUFBUyxVQUFBLENBRnJDRyxzQkFBc0IsRUFDdEJDLHVCQUF1QixHQUNLSixhQUFTLFVBQUEsQ0FEckNJLHVCQUF1QixFQUN2QkMsdUJBQXVCLEdBQUtMLGFBQVMsVUFBQSxDQUFyQ0ssdUJBQXVCLEFBQWU7QUFFdkMsU0FBU2hCLGFBQWEsQ0FBQ2lCLElBQUksRUFBRTtJQUNsQyxJQUFJQyxXQUFXLEdBQUcsSUFBSSxBQUFDO0lBRXZCLElBQU1DLG1CQUFtQixHQUFHRixJQUFJLENBQUNHLGlCQUFpQixFQUFFLEFBQUM7SUFFckQsSUFBSUQsbUJBQW1CLEVBQUU7UUFDdkIsSUFBTUUsZUFBZSxHQUFHSixJQUFJLEVBQ3RCSyxJQUFJLEdBQUdELGVBQWUsQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7UUFFdkMsT0FBUUQsSUFBSTtZQUNWLEtBQUtaLGdCQUFnQjtnQkFDbkJRLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBRXBCLE1BQU07WUFFUixLQUFLTixvQkFBb0I7Z0JBQUU7b0JBQ3pCLElBQU1ZLGdCQUFnQixHQUFHSCxlQUFlLEVBQ2xDSixNQUFJLEdBQUdPLGdCQUFnQixDQUFDQyxPQUFPLEVBQUUsQUFBQztvQkFFeENQLFdBQVcsR0FBR2xCLGFBQWEsQ0FBQ2lCLE1BQUksQ0FBQyxDQUFDO29CQUVsQyxNQUFNO2lCQUNQO1lBRUQsS0FBS0gsc0JBQXNCO2dCQUFFO29CQUMzQixJQUFNWSxrQkFBa0IsR0FBR0wsZUFBZSxFQUNwQ0osT0FBSSxHQUFHUyxrQkFBa0IsQ0FBQ0QsT0FBTyxFQUFFLEFBQUM7b0JBRTFDUCxXQUFXLEdBQUdsQixhQUFhLENBQUNpQixPQUFJLENBQUMsQ0FBQztvQkFFbEMsTUFBTTtpQkFDUDtZQUVELEtBQUtELHVCQUF1QjtnQkFBRTtvQkFDNUIsSUFBTVcsbUJBQW1CLEdBQUdOLGVBQWUsRUFDckNKLE9BQUksR0FBR1UsbUJBQW1CLENBQUNGLE9BQU8sRUFBRSxBQUFDLEVBQUUsR0FBRztvQkFFaERQLFdBQVcsR0FBR2xCLGFBQWEsQ0FBQ2lCLE9BQUksQ0FBQyxDQUFDO29CQUVsQyxNQUFNO2lCQUNQO1lBRUQsS0FBS0oscUJBQXFCLENBQUM7WUFDM0IsS0FBS0UsdUJBQXVCO2dCQUMxQkcsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFFbkIsTUFBTTtTQUNUO0tBQ0Y7SUFFRCxPQUFPQSxXQUFXLENBQUM7Q0FDcEI7QUFFTSxTQUFTakIsdUJBQXVCLENBQUMyQixRQUFRLEVBQUU7SUFDaEQsSUFBTUMsWUFBWSxHQUFHLElBQUl2QixZQUFZLENBQUNzQixRQUFRLENBQUMsRUFDekNYLElBQUksR0FBR1ksWUFBWSxFQUNuQkMsV0FBVyxHQUFHQyxtQkFBbUIsQ0FBQ2QsSUFBSSxDQUFDLEFBQUM7SUFFOUMsT0FBT2EsV0FBVyxDQUFDO0NBQ3BCO0FBRU0sU0FBUzVCLDBCQUEwQixDQUFDZSxLQUFJLEVBQUVlLGtCQUFrQixFQUFFO0lBQ25FLElBQU1iLG1CQUFtQixHQUFHRixLQUFJLENBQUNHLGlCQUFpQixFQUFFLEFBQUM7SUFFckQsSUFBSUQsbUJBQW1CLEVBQUU7UUFDdkIsSUFBTUUsZUFBZSxHQUFHSixLQUFJLEVBQ3RCSyxJQUFJLEdBQUdELGVBQWUsQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7UUFFdkMsT0FBUUQsSUFBSTtZQUNWLEtBQUtaLGdCQUFnQjtnQkFBRTtvQkFDckIsSUFBTW1CLFlBQVksR0FBR1IsZUFBZSxFQUM5Qk8sUUFBUSxHQUFHQyxZQUFZLENBQUNJLFdBQVcsRUFBRSxFQUNyQ0Msa0NBQWtDLEdBQUdGLGtCQUFrQixDQUFDRyxRQUFRLENBQUNQLFFBQVEsQ0FBQyxBQUFDO29CQUVqRixJQUFJLENBQUNNLGtDQUFrQyxFQUFFO3dCQUN2QyxJQUFNRSxpQkFBaUIsR0FBR1IsUUFBUSxBQUFDLEVBQUMsR0FBRzt3QkFFdkNJLGtCQUFrQixDQUFDSyxJQUFJLENBQUNELGlCQUFpQixDQUFDLENBQUM7cUJBQzVDO29CQUVELE1BQU07aUJBQ1A7WUFFRCxLQUFLeEIsb0JBQW9CO2dCQUFFO29CQUN6QixJQUFNWSxnQkFBZ0IsR0FBR0gsZUFBZSxFQUNsQ0osTUFBSSxHQUFHTyxnQkFBZ0IsQ0FBQ0MsT0FBTyxFQUFFLEFBQUM7b0JBRXhDdkIsMEJBQTBCLENBQUNlLE1BQUksRUFBRWUsa0JBQWtCLENBQUMsQ0FBQztvQkFFckQsTUFBTTtpQkFDUDtZQUVELEtBQUtsQixzQkFBc0I7Z0JBQUU7b0JBQzNCLElBQU1ZLGtCQUFrQixHQUFHTCxlQUFlLEVBQ3BDSixPQUFJLEdBQUdTLGtCQUFrQixDQUFDRCxPQUFPLEVBQUUsQUFBQztvQkFFMUN2QiwwQkFBMEIsQ0FBQ2UsT0FBSSxFQUFFZSxrQkFBa0IsQ0FBQyxDQUFDO29CQUVyRCxNQUFNO2lCQUNQO1lBRUQsS0FBS2hCLHVCQUF1QjtnQkFBRTtvQkFDNUIsSUFBTVcsbUJBQW1CLEdBQUdOLGVBQWUsRUFDckNKLE9BQUksR0FBR1UsbUJBQW1CLENBQUNGLE9BQU8sRUFBRSxBQUFDLEVBQUUsR0FBRztvQkFFaER2QiwwQkFBMEIsQ0FBQ2UsT0FBSSxFQUFFZSxrQkFBa0IsQ0FBQyxDQUFDO29CQUVyRCxNQUFNO2lCQUNQO1lBRUQsS0FBS25CLHFCQUFxQjtnQkFBRTtvQkFDMUIsSUFBTXlCLGlCQUFpQixHQUFHakIsZUFBZSxFQUNuQ2tCLEtBQUssR0FBR0QsaUJBQWlCLENBQUNFLFFBQVEsRUFBRSxBQUFDO29CQUUzQ0QsS0FBSyxDQUFDRSxPQUFPLENBQUMsU0FBQ3hCLElBQUk7K0JBQUtmLDBCQUEwQixDQUFDZSxJQUFJLEVBQUVlLGtCQUFrQixDQUFDO3FCQUFBLENBQUMsQ0FBQztvQkFFOUUsTUFBTTtpQkFDUDtZQUVELEtBQUtqQix1QkFBdUI7Z0JBQUU7b0JBQzVCLElBQU0yQixtQkFBbUIsR0FBR3JCLGVBQWUsRUFDckNrQixNQUFLLEdBQUdHLG1CQUFtQixDQUFDRixRQUFRLEVBQUUsQUFBQztvQkFFN0NELE1BQUssQ0FBQ0UsT0FBTyxDQUFDLFNBQUN4QixJQUFJOytCQUFLZiwwQkFBMEIsQ0FBQ2UsSUFBSSxFQUFFZSxrQkFBa0IsQ0FBQztxQkFBQSxDQUFDLENBQUM7b0JBRTlFLE1BQU07aUJBQ1A7U0FDRjtLQUNGO0NBQ0Y7QUFFTSxTQUFTN0IsOEJBQThCLENBQUNjLEtBQUksRUFBRTBCLHNCQUFzQixFQUFFO0lBQzNFLElBQU14QixtQkFBbUIsR0FBR0YsS0FBSSxDQUFDRyxpQkFBaUIsRUFBRSxBQUFDO0lBRXJELElBQUlELG1CQUFtQixFQUFFO1FBQ3ZCLElBQU1FLGVBQWUsR0FBR0osS0FBSSxFQUN0QkssSUFBSSxHQUFHRCxlQUFlLENBQUNFLE9BQU8sRUFBRSxBQUFDO1FBRXZDLE9BQVFELElBQUk7WUFDVixLQUFLWixnQkFBZ0I7Z0JBQUU7b0JBQ3JCLElBQU1tQixZQUFZLEdBQUdSLGVBQWUsRUFDOUJPLFFBQVEsR0FBR0MsWUFBWSxDQUFDSSxXQUFXLEVBQUUsRUFDckNXLHNDQUFzQyxHQUFHRCxzQkFBc0IsQ0FBQ1IsUUFBUSxDQUFDUCxRQUFRLENBQUMsQUFBQztvQkFFekYsSUFBSSxDQUFDZ0Isc0NBQXNDLEVBQUU7d0JBQzNDLElBQU1DLHFCQUFxQixHQUFHakIsUUFBUSxBQUFDLEVBQUMsR0FBRzt3QkFFM0NlLHNCQUFzQixDQUFDTixJQUFJLENBQUNRLHFCQUFxQixDQUFDLENBQUM7cUJBQ3BEO29CQUVELE1BQU07aUJBQ1A7WUFFRCxLQUFLakMsb0JBQW9CO2dCQUFFO29CQUN6QixJQUFNWSxnQkFBZ0IsR0FBR0gsZUFBZSxFQUNsQ0osTUFBSSxHQUFHTyxnQkFBZ0IsQ0FBQ0MsT0FBTyxFQUFFLEFBQUM7b0JBRXhDdEIsOEJBQThCLENBQUNjLE1BQUksRUFBRTBCLHNCQUFzQixDQUFDLENBQUM7b0JBRTdELE1BQU07aUJBQ1A7WUFFRCxLQUFLN0Isc0JBQXNCO2dCQUFFO29CQUMzQixJQUFNWSxrQkFBa0IsR0FBR0wsZUFBZSxFQUNwQ0osT0FBSSxHQUFHUyxrQkFBa0IsQ0FBQ0QsT0FBTyxFQUFFLEFBQUM7b0JBRTFDdEIsOEJBQThCLENBQUNjLE9BQUksRUFBRTBCLHNCQUFzQixDQUFDLENBQUM7b0JBRTdELE1BQU07aUJBQ1A7WUFFRCxLQUFLM0IsdUJBQXVCO2dCQUFFO29CQUM1QixJQUFNVyxtQkFBbUIsR0FBR04sZUFBZSxFQUNyQ0osT0FBSSxHQUFHVSxtQkFBbUIsQ0FBQ0YsT0FBTyxFQUFFLEFBQUM7b0JBRTNDdEIsOEJBQThCLENBQUNjLE9BQUksRUFBRTBCLHNCQUFzQixDQUFDLENBQUM7b0JBRTdELE1BQU07aUJBQ1A7WUFFRCxLQUFLOUIscUJBQXFCO2dCQUFFO29CQUMxQixJQUFNeUIsaUJBQWlCLEdBQUdqQixlQUFlLEVBQ25Da0IsS0FBSyxHQUFHRCxpQkFBaUIsQ0FBQ0UsUUFBUSxFQUFFLEFBQUM7b0JBRTNDRCxLQUFLLENBQUNFLE9BQU8sQ0FBQyxTQUFDeEIsSUFBSTsrQkFBS2QsOEJBQThCLENBQUNjLElBQUksRUFBRTBCLHNCQUFzQixDQUFDO3FCQUFBLENBQUMsQ0FBQztvQkFFdEYsTUFBTTtpQkFDUDtZQUVELEtBQUs1Qix1QkFBdUI7Z0JBQUU7b0JBQzVCLElBQU0yQixtQkFBbUIsR0FBR3JCLGVBQWUsRUFDckNrQixNQUFLLEdBQUdHLG1CQUFtQixDQUFDRixRQUFRLEVBQUUsRUFDdENNLFNBQVMsR0FBRzFDLEtBQUssQ0FBQ21DLE1BQUssQ0FBQyxFQUN4QnRCLE9BQUksR0FBRzZCLFNBQVMsQUFBQyxFQUFDLEdBQUc7b0JBRTNCM0MsOEJBQThCLENBQUNjLE9BQUksRUFBRTBCLHNCQUFzQixDQUFDLENBQUM7b0JBRTdELE1BQU07aUJBQ1A7U0FDRjtLQUNGO0NBQ0Y7QUFFRCxTQUFTWixtQkFBbUIsQ0FBQ2QsSUFBSSxFQUFFO0lBQ2pDLElBQUlhLFdBQVcsQUFBQztJQUVoQixJQUFNVCxlQUFlLEdBQUdKLElBQUksRUFDdEJLLElBQUksR0FBR0QsZUFBZSxDQUFDRSxPQUFPLEVBQUUsQUFBQztJQUV2QyxPQUFRRCxJQUFJO1FBQ1YsS0FBS1osZ0JBQWdCO1lBQUU7Z0JBQ3JCLElBQU1tQixZQUFZLEdBQUdSLGVBQWUsRUFDOUJPLFFBQVEsR0FBR0MsWUFBWSxDQUFDSSxXQUFXLEVBQUUsRUFDckNjLFNBQVMsR0FBR2xCLFlBQVksQ0FBQ21CLFdBQVcsRUFBRSxFQUN0Q0MsZUFBZSxHQUFHQyxDQUFBQSxHQUFBQSxTQUEyQixBQUFVLENBQUEsNEJBQVYsQ0FBQ3RCLFFBQVEsQ0FBQyxFQUN2RHVCLG1CQUFtQixHQUFHLElBQUk3QyxZQUFZLENBQUMyQyxlQUFlLEVBQUVGLFNBQVMsQ0FBQyxBQUFDO2dCQUV6RWpCLFdBQVcsR0FBR3FCLG1CQUFtQixDQUFDLENBQUUsR0FBRztnQkFFdkMsTUFBTTthQUNQO1FBRUQsS0FBS3ZDLG9CQUFvQjtZQUFFO2dCQUN6QixJQUFNWSxnQkFBZ0IsR0FBR0gsZUFBZSxFQUNsQ0osTUFBSSxHQUFHTyxnQkFBZ0IsQ0FBQ0MsT0FBTyxFQUFFLEFBQUM7Z0JBRXhDSyxXQUFXLEdBQUdDLG1CQUFtQixDQUFDZCxNQUFJLENBQUMsQ0FBQztnQkFFeEMsSUFBTW1DLHVCQUF1QixHQUFHLElBQUk1QyxnQkFBZ0IsQ0FBQ3NCLFdBQVcsQ0FBQyxBQUFDO2dCQUVsRUEsV0FBVyxHQUFHc0IsdUJBQXVCLENBQUMsQ0FBRSxHQUFHO2dCQUUzQyxNQUFNO2FBQ1A7UUFFRCxLQUFLdEMsc0JBQXNCO1lBQUU7Z0JBQzNCLElBQU1ZLGtCQUFrQixHQUFHTCxlQUFlLEVBQ3BDSixPQUFJLEdBQUdTLGtCQUFrQixDQUFDRCxPQUFPLEVBQUUsQUFBQztnQkFFMUNLLFdBQVcsR0FBR0MsbUJBQW1CLENBQUNkLE9BQUksQ0FBQyxDQUFDO2dCQUV4QyxJQUFNb0MseUJBQXlCLEdBQUcsSUFBSUMsa0JBQWtCLENBQUN4QixXQUFXLENBQUMsQUFBQztnQkFFdEVBLFdBQVcsR0FBR3VCLHlCQUF5QixDQUFDLENBQUUsR0FBRztnQkFFN0MsTUFBTTthQUNQO1FBRUQsS0FBS3JDLHVCQUF1QjtZQUFFO2dCQUM1QixJQUFNVyxtQkFBbUIsR0FBR04sZUFBZSxFQUNyQ0osT0FBSSxHQUFHVSxtQkFBbUIsQ0FBQ0YsT0FBTyxFQUFFLEFBQUM7Z0JBRTNDSyxXQUFXLEdBQUdDLG1CQUFtQixDQUFDZCxPQUFJLENBQUMsQ0FBQztnQkFFeEMsSUFBTXNDLDBCQUEwQixHQUFHLElBQUk5QyxtQkFBbUIsQ0FBQ3FCLFdBQVcsQ0FBQyxBQUFDO2dCQUV4RUEsV0FBVyxHQUFHeUIsMEJBQTBCLENBQUMsQ0FBRSxHQUFHO2dCQUU5QyxNQUFNO2FBQ1A7S0FDRjtJQUVELE9BQU96QixXQUFXLENBQUM7Q0FDcEIifQ==