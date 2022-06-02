"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPartComplex = isPartComplex;
exports.reducedPartFromPart = reducedPartFromPart;
exports.recursiveRuleNamesFromPart = recursiveRuleNamesFromPart;
exports.leftRecursiveRuleNamesFromPart = leftRecursiveRuleNamesFromPart;
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _ruleName = require("../utilities/ruleName");
var first = _necessary.arrayUtilities.first, RuleNamePart = _occamParsers.Parts.RuleNamePart, OptionalPartPart = _occamParsers.Parts.OptionalPartPart, OneOrMorePartsPart = _occamParsers.Parts.OneOrMorePartsPart, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, RuleNamePartType = _occamParsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamParsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamParsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamParsers.partTypes.OneOrMorePartsPartType, SequenceOfPartsPartType = _occamParsers.partTypes.SequenceOfPartsPartType, ZeroOrMorePartsPartType = _occamParsers.partTypes.ZeroOrMorePartsPartType;
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
                var oneOrMorePartsPart = nonTerminalPart, _$part3 = oneOrMorePartsPart.getPart();
                reducedPart = reducedPartFromPart(_$part3);
                var reducedOneOrMorePartsPart = new OneOrMorePartsPart(reducedPart);
                reducedPart = reducedOneOrMorePartsPart; ///
                break;
            }
        case ZeroOrMorePartsPartType:
            {
                var zeroOrMorePartsPart = nonTerminalPart, _$part4 = zeroOrMorePartsPart.getPart();
                reducedPart = reducedPartFromPart(_$part4);
                var reducedZeroOrMorePartsPart = new ZeroOrMorePartsPart(reducedPart);
                reducedPart = reducedZeroOrMorePartsPart; ///
                break;
            }
    }
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
                    var oneOrMorePartsPart = nonTerminalPart, _$part5 = oneOrMorePartsPart.getPart();
                    recursiveRuleNamesFromPart(_$part5, recursiveRuleNames);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = nonTerminalPart, _$part6 = zeroOrMorePartsPart.getPart(); ///
                    recursiveRuleNamesFromPart(_$part6, recursiveRuleNames);
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
                    var oneOrMorePartsPart = nonTerminalPart, _$part7 = oneOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(_$part7, leftRecursiveRuleNames);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = nonTerminalPart, _$part8 = zeroOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(_$part8, leftRecursiveRuleNames);
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
                    var sequenceOfPartsPart = nonTerminalPart, parts2 = sequenceOfPartsPart.getParts(), firstPart = first(parts2), _$part9 = firstPart; ///
                    leftRecursiveRuleNamesFromPart(_$part9, leftRecursiveRuleNames);
                    break;
                }
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBQYXJ0cywgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0LCBPcHRpb25hbFBhcnRQYXJ0LCBPbmVPck1vcmVQYXJ0c1BhcnQsIFplcm9Pck1vcmVQYXJ0c1BhcnQgfSA9IFBhcnRzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFydENvbXBsZXgocGFydCkge1xuICBsZXQgcGFydENvbXBsZXggPSB0cnVlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOlxuICAgICAgICBwYXJ0Q29tcGxleCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZTpcbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6XG4gICAgICAgIHBhcnRDb21wbGV4ID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydENvbXBsZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpIHtcbiAgbGV0IHJlZHVjZWRQYXJ0O1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJlZHVjZWRSdWxlTmFtZSwgbG9va0FoZWFkKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUnVsZU5hbWVQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IHJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQocmVkdWNlZFBhcnQpO1xuXG4gICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IHJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHJlZHVjZWRQYXJ0KTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IHJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocmVkdWNlZFBhcnQpO1xuXG4gICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWR1Y2VkUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbImlzUGFydENvbXBsZXgiLCJyZWR1Y2VkUGFydEZyb21QYXJ0IiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUnVsZU5hbWVQYXJ0IiwiUGFydHMiLCJPcHRpb25hbFBhcnRQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwicGFydCIsInBhcnRDb21wbGV4IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJyZWR1Y2VkUGFydCIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJyZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydCIsInJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQiLCJyZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsImNob2ljZU9mUGFydHNQYXJ0IiwicGFydHMiLCJnZXRQYXJ0cyIsImZvckVhY2giLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3RQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7UUFnQkdBLGFBQWEsR0FBYkEsYUFBYTtRQXFEYkMsbUJBQW1CLEdBQW5CQSxtQkFBbUI7UUE4RG5CQywwQkFBMEIsR0FBMUJBLDBCQUEwQjtRQXNFMUJDLDhCQUE4QixHQUE5QkEsOEJBQThCO0FBdk1mLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUNULElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUVKLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFFbkUsSUFBTSxBQUFFQyxLQUFLLEdBQUtDLFVBQWMsZUFBQSxDQUF4QkQsS0FBSyxBQUFtQixFQUN4QkUsWUFBWSxHQUFnRUMsYUFBSyxNQUFBLENBQWpGRCxZQUFZLEVBQUVFLGdCQUFnQixHQUE4Q0QsYUFBSyxNQUFBLENBQW5FQyxnQkFBZ0IsRUFBRUMsa0JBQWtCLEdBQTBCRixhQUFLLE1BQUEsQ0FBakRFLGtCQUFrQixFQUFFQyxtQkFBbUIsR0FBS0gsYUFB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