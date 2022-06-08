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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBQYXJ0cywgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0LCBPcHRpb25hbFBhcnRQYXJ0LCBPbmVPck1vcmVQYXJ0c1BhcnQsIFplcm9Pck1vcmVQYXJ0c1BhcnQgfSA9IFBhcnRzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFydENvbXBsZXgocGFydCkge1xuICBsZXQgcGFydENvbXBsZXggPSB0cnVlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOlxuICAgICAgICBwYXJ0Q29tcGxleCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZTpcbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6XG4gICAgICAgIHBhcnRDb21wbGV4ID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydENvbXBsZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpIHtcbiAgbGV0IHJlZHVjZWRQYXJ0O1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJlZHVjZWRSdWxlTmFtZSwgbG9va0FoZWFkKTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUnVsZU5hbWVQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IHJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQocmVkdWNlZFBhcnQpO1xuXG4gICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IHJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHJlZHVjZWRQYXJ0KTtcblxuICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IHJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocmVkdWNlZFBhcnQpO1xuXG4gICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWR1Y2VkUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpc1BhcnRDb21wbGV4IiwicmVkdWNlZFBhcnRGcm9tUGFydCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlJ1bGVOYW1lUGFydCIsIlBhcnRzIiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInBhcnQiLCJwYXJ0Q29tcGxleCIsInBhcnROb25UZXJtaW5hbFBhcnQiLCJpc05vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwib3B0aW9uYWxQYXJ0UGFydCIsImdldFBhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwicmVkdWNlZFBhcnQiLCJydWxlTmFtZVBhcnQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicmVkdWNlZE9wdGlvbmFsUGFydFBhcnQiLCJyZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0IiwicmVkdWNlZFplcm9Pck1vcmVQYXJ0c1BhcnQiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInB1c2giLCJjaG9pY2VPZlBhcnRzUGFydCIsInBhcnRzIiwiZ2V0UGFydHMiLCJmb3JFYWNoIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7O1FBZ0JHQSxhQUFhLEdBQWJBLGFBQWE7UUFxRGJDLG1CQUFtQixHQUFuQkEsbUJBQW1CO1FBOERuQkMsMEJBQTBCLEdBQTFCQSwwQkFBMEI7UUFzRTFCQyw4QkFBOEIsR0FBOUJBLDhCQUE4QjtBQXZNZixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFDVCxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFFSixJQUFBLFNBQXVCLFdBQXZCLHVCQUF1QixDQUFBO0FBRW5FLElBQU0sQUFBRUMsS0FBSyxHQUFLQyxVQUFjLGVBQUEsQ0FBeEJELEtBQUssQUFBbUIsRUFDeEJFLFlBQVksR0FBZ0VDLGFBQUssTUFBQSxDQUFqRkQsWUFBWSxFQUFFRSxnQkFBZ0IsR0FBOENELGFBQUssTUFBQSxDQUFuRUMsZ0JBQWdCLEVBQUVDLGtCQUFrQixHQUEwQkYsYUFBSyxNQUFBLENBQWpERSxrQkFBa0IsRUFBRUMsbUJBQW1CLEdBQUtILGFBQUss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