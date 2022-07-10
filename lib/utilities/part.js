"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchParts: function() {
        return matchParts;
    },
    isPartComplex: function() {
        return isPartComplex;
    },
    ruleNamePartFromRuleName: function() {
        return ruleNamePartFromRuleName;
    },
    recursiveRuleNamesFromPart: function() {
        return recursiveRuleNamesFromPart;
    },
    directlyReducedPartFromPart: function() {
        return directlyReducedPartFromPart;
    },
    leftRecursiveRuleNamesFromPart: function() {
        return leftRecursiveRuleNamesFromPart;
    }
});
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
function directlyReducedPartFromPart(part) {
    var directlyReducedPart;
    var nonTerminalPart = part, type = nonTerminalPart.getType();
    switch(type){
        case RuleNamePartType:
            {
                var ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), lookAhead = ruleNamePart.isLookAhead(), directlyReducedRuleName = (0, _ruleName.directlyReducedRuleNameFromRuleName)(ruleName), directlyReducedRuleNamePart = new RuleNamePart(directlyReducedRuleName, lookAhead);
                directlyReducedPart = directlyReducedRuleNamePart; ///
                break;
            }
        case OptionalPartPartType:
            {
                var optionalPartPart = nonTerminalPart, _$part = optionalPartPart.getPart();
                directlyReducedPart = directlyReducedPartFromPart(_$part);
                var directlyReducedOptionalPartPart = new OptionalPartPart(directlyReducedPart);
                directlyReducedPart = directlyReducedOptionalPartPart; ///
                break;
            }
        case OneOrMorePartsPartType:
            {
                var oneOrMorePartsPart = nonTerminalPart, _$part1 = oneOrMorePartsPart.getPart();
                directlyReducedPart = directlyReducedPartFromPart(_$part1);
                var directlyReducedOneOrMorePartsPart = new OneOrMorePartsPart(directlyReducedPart);
                directlyReducedPart = directlyReducedOneOrMorePartsPart; ///
                break;
            }
        case ZeroOrMorePartsPartType:
            {
                var zeroOrMorePartsPart = nonTerminalPart, _$part2 = zeroOrMorePartsPart.getPart();
                directlyReducedPart = directlyReducedPartFromPart(_$part2);
                var directlyReducedZeroOrMorePartsPart = new ZeroOrMorePartsPart(directlyReducedPart);
                directlyReducedPart = directlyReducedZeroOrMorePartsPart; ///
                break;
            }
    }
    return directlyReducedPart;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBQYXJ0cywgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBSdWxlTmFtZVBhcnQsIE9wdGlvbmFsUGFydFBhcnQsIE9uZU9yTW9yZVBhcnRzUGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hQYXJ0cyhwYXJ0QSwgcGFydEIpIHtcbiAgY29uc3QgcGFydEFTdHJpbmcgPSBwYXJ0QS5hc1N0cmluZygpLFxuICAgICAgICBwYXJ0QlN0cmluZyA9IHBhcnRCLmFzU3RyaW5nKCksXG4gICAgICAgIG1hdGNoZXMgPSAocGFydEFTdHJpbmcgPT09IHBhcnRCU3RyaW5nKTtcblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFydENvbXBsZXgocGFydCkge1xuICBsZXQgcGFydENvbXBsZXggPSB0cnVlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOlxuICAgICAgICBwYXJ0Q29tcGxleCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZTpcbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6XG4gICAgICAgIHBhcnRDb21wbGV4ID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydENvbXBsZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSB7XG4gIGxldCBkaXJlY3RseVJlZHVjZWRQYXJ0O1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lLCBsb29rQWhlYWQpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQoZGlyZWN0bHlSZWR1Y2VkUGFydCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGRpcmVjdGx5UmVkdWNlZFBhcnQpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZWR1Y2VkUGFydCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RseVJlZHVjZWRQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMucHVzaChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXSwibmFtZXMiOlsibWF0Y2hQYXJ0cyIsImlzUGFydENvbXBsZXgiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJSdWxlTmFtZVBhcnQiLCJQYXJ0cyIsIk9wdGlvbmFsUGFydFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJ0QSIsInBhcnRCIiwicGFydEFTdHJpbmciLCJhc1N0cmluZyIsInBhcnRCU3RyaW5nIiwibWF0Y2hlcyIsInBhcnQiLCJwYXJ0Q29tcGxleCIsInBhcnROb25UZXJtaW5hbFBhcnQiLCJpc05vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwib3B0aW9uYWxQYXJ0UGFydCIsImdldFBhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwicnVsZU5hbWUiLCJydWxlTmFtZVBhcnQiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsImNob2ljZU9mUGFydHNQYXJ0IiwicGFydHMiLCJnZXRQYXJ0cyIsImZvckVhY2giLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCIsImRpcmVjdGx5UmVkdWNlZE9wdGlvbmFsUGFydFBhcnQiLCJkaXJlY3RseVJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQiLCJkaXJlY3RseVJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3RQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBZ0JHQSxVQUFVO2VBQVZBLFVBQVU7O0lBUVZDLGFBQWE7ZUFBYkEsYUFBYTs7SUFxRGJDLHdCQUF3QjtlQUF4QkEsd0JBQXdCOztJQU14QkMsMEJBQTBCO2VBQTFCQSwwQkFBMEI7O0lBc0UxQkMsMkJBQTJCO2VBQTNCQSwyQkFBMkI7O0lBOEQzQkMsOEJBQThCO2VBQTlCQSw4QkFBOEI7Ozt5QkFyTmYsV0FBVzs0QkFDVCxlQUFlO3dCQUVJLHVCQUF1QjtBQUUzRSxJQUFNLEFBQUVDLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEVBQ3hCRSxZQUFZLEdBQWdFQyxhQUFLLE1BQUEsQ0FBakZELFlBQVksRUFBRUUsZ0JBQWdCLEdBQThDRCxhQUFLLE1BQUEsQ0FBbkVDLGdCQUFnQixFQUFFQyxrQkFBa0IsR0FBMEJGLGFBQUssTUFBQSxDQUFqREUsa0JBQWtCLEVBQUVDLG1CQUFtQixHQUFLSCxhQUFLLE1BQUEsQ0FBN0JHLG1CQUFtQixFQUN2RUMsZ0JBQWdCLEdBS1lDLGFBQVMsVUFBQSxDQUxyQ0QsZ0JBQWdCLEVBQ2hCRSxvQkFBb0IsR0FJUUQsYUFBUyxVQUFBLENBSnJDQyxvQkFBb0IsRUFDcEJDLHFCQUFxQixHQUdPRixhQUFTLFVBQUEsQ0FIckNFLHFCQUFxQixFQUNyQkMsc0JB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