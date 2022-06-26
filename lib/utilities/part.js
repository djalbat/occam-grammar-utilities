"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPartComplex = isPartComplex;
exports.reducedPartFromPart = reducedPartFromPart;
exports.ruleNamePartFromRuleName = ruleNamePartFromRuleName;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBQYXJ0cywgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0LCBPcHRpb25hbFBhcnRQYXJ0LCBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRDb21wbGV4KHBhcnQpIHtcbiAgbGV0IHBhcnRDb21wbGV4ID0gdHJ1ZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZTpcbiAgICAgICAgcGFydENvbXBsZXggPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTsgIC8vL1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6XG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOlxuICAgICAgICBwYXJ0Q29tcGxleCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRDb21wbGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSB7XG4gIGxldCByZWR1Y2VkUGFydDtcblxuICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBsb29rQWhlYWQgPSBydWxlTmFtZVBhcnQuaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChyZWR1Y2VkUnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCByZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHJlZHVjZWRQYXJ0KTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCByZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChyZWR1Y2VkUGFydCk7XG5cbiAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZE9uZU9yTW9yZVBhcnRzUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCByZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHJlZHVjZWRQYXJ0KTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVkdWNlZFBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbImlzUGFydENvbXBsZXgiLCJyZWR1Y2VkUGFydEZyb21QYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUnVsZU5hbWVQYXJ0IiwiUGFydHMiLCJPcHRpb25hbFBhcnRQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwicGFydCIsInBhcnRDb21wbGV4IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJyZWR1Y2VkUGFydCIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJyZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydCIsInJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJyZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsImNob2ljZU9mUGFydHNQYXJ0IiwicGFydHMiLCJnZXRQYXJ0cyIsImZvckVhY2giLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3RQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7UUFnQkdBLGFBQWEsR0FBYkEsYUFBYTtRQXFEYkMsbUJBQW1CLEdBQW5CQSxtQkFBbUI7UUE4RG5CQyx3QkFBd0IsR0FBeEJBLHdCQUF3QjtRQU14QkMsMEJBQTBCLEdBQTFCQSwwQkFBMEI7UUFzRTFCQyw4QkFBOEIsR0FBOUJBLDhCQUE4QjtBQTdNZixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFDVCxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFFSixJQUFBLFNBQXVCLFdBQXZCLHVCQUF1QixDQUFBO0FBRW5FLElBQU0sQUFBRUMsS0FBSyxHQUFLQyxVQUFjLGVB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