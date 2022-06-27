"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matchParts = matchParts;
exports.isPartComplex = isPartComplex;
exports.reducedPartFromPart = reducedPartFromPart;
exports.ruleNamePartFromRuleName = ruleNamePartFromRuleName;
exports.recursiveRuleNamesFromPart = recursiveRuleNamesFromPart;
exports.leftRecursiveRuleNamesFromPart = leftRecursiveRuleNamesFromPart;
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _ruleName = require("../utilities/ruleName");
var first = _necessary.arrayUtilities.first, RuleNamePart = _occamParsers.Parts.RuleNamePart, OptionalPartPart = _occamParsers.Parts.OptionalPartPart, OneOrMorePartsPart = _occamParsers.Parts.OneOrMorePartsPart, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, RuleNamePartType = _occamParsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamParsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamParsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamParsers.partTypes.OneOrMorePartsPartType, SequenceOfPartsPartType = _occamParsers.partTypes.SequenceOfPartsPartType, ZeroOrMorePartsPartType = _occamParsers.partTypes.ZeroOrMorePartsPartType;
function matchParts(partA, partB) {
    var partAString = partA.asString(), partBString = partB.asString(), matches = partAString === partBString;
    return matches;
}
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
                var oneOrMorePartsPart = nonTerminalPart, _$part1 = oneOrMorePartsPart.getPart();
                reducedPart = reducedPartFromPart(_$part1);
                var reducedOneOrMorePartsPart = new OneOrMorePartsPart(reducedPart);
                reducedPart = reducedOneOrMorePartsPart; ///
                break;
            }
        case ZeroOrMorePartsPartType:
            {
                var zeroOrMorePartsPart = nonTerminalPart, _$part2 = zeroOrMorePartsPart.getPart();
                reducedPart = reducedPartFromPart(_$part2);
                var reducedZeroOrMorePartsPart = new ZeroOrMorePartsPart(reducedPart);
                reducedPart = reducedZeroOrMorePartsPart; ///
                break;
            }
    }
    return reducedPart;
}
function ruleNamePartFromRuleName(ruleName) {
    var ruleNamePart = new RuleNamePart(ruleName);
    return ruleNamePart;
}
function recursiveRuleNamesFromPart(part, recursiveRuleNames) {
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part, type = nonTerminalPart.getType();
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
                    var oneOrMorePartsPart = nonTerminalPart, _$part1 = oneOrMorePartsPart.getPart();
                    recursiveRuleNamesFromPart(_$part1, recursiveRuleNames);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = nonTerminalPart, _$part2 = zeroOrMorePartsPart.getPart(); ///
                    recursiveRuleNamesFromPart(_$part2, recursiveRuleNames);
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
function leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames) {
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part, type = nonTerminalPart.getType();
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
                    var oneOrMorePartsPart = nonTerminalPart, _$part1 = oneOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(_$part1, leftRecursiveRuleNames);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = nonTerminalPart, _$part2 = zeroOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(_$part2, leftRecursiveRuleNames);
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
                    var sequenceOfPartsPart = nonTerminalPart, parts1 = sequenceOfPartsPart.getParts(), firstPart = first(parts1), _$part3 = firstPart; ///
                    leftRecursiveRuleNamesFromPart(_$part3, leftRecursiveRuleNames);
                    break;
                }
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBQYXJ0cywgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0LCBPcHRpb25hbFBhcnRQYXJ0LCBPbmVPck1vcmVQYXJ0c1BhcnQsIFplcm9Pck1vcmVQYXJ0c1BhcnQgfSA9IFBhcnRzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUGFydHMocGFydEEsIHBhcnRCKSB7XG4gIGNvbnN0IHBhcnRBU3RyaW5nID0gcGFydEEuYXNTdHJpbmcoKSxcbiAgICAgICAgcGFydEJTdHJpbmcgPSBwYXJ0Qi5hc1N0cmluZygpLFxuICAgICAgICBtYXRjaGVzID0gKHBhcnRBU3RyaW5nID09PSBwYXJ0QlN0cmluZyk7XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRDb21wbGV4KHBhcnQpIHtcbiAgbGV0IHBhcnRDb21wbGV4ID0gdHJ1ZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZTpcbiAgICAgICAgcGFydENvbXBsZXggPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTsgIC8vL1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6XG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOlxuICAgICAgICBwYXJ0Q29tcGxleCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRDb21wbGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSB7XG4gIGxldCByZWR1Y2VkUGFydDtcblxuICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBsb29rQWhlYWQgPSBydWxlTmFtZVBhcnQuaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyZWR1Y2VkUnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCByZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHJlZHVjZWRQYXJ0KTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCByZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChyZWR1Y2VkUGFydCk7XG5cbiAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZE9uZU9yTW9yZVBhcnRzUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCByZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHJlZHVjZWRQYXJ0KTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVkdWNlZFBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIm1hdGNoUGFydHMiLCJpc1BhcnRDb21wbGV4IiwicmVkdWNlZFBhcnRGcm9tUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlJ1bGVOYW1lUGFydCIsIlBhcnRzIiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInBhcnRBIiwicGFydEIiLCJwYXJ0QVN0cmluZyIsImFzU3RyaW5nIiwicGFydEJTdHJpbmciLCJtYXRjaGVzIiwicGFydCIsInBhcnRDb21wbGV4IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJyZWR1Y2VkUGFydCIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJyZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydCIsInJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQiLCJyZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsImNob2ljZU9mUGFydHNQYXJ0IiwicGFydHMiLCJnZXRQYXJ0cyIsImZvckVhY2giLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3RQYXJ0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