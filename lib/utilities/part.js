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
    isPartUnary: function() {
        return isPartUnary;
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
var _occamParsers = require("occam-parsers");
var _array = require("../utilities/array");
var _ruleName = require("../utilities/ruleName");
var RuleNamePart = _occamParsers.Parts.RuleNamePart, OptionalPartPart = _occamParsers.Parts.OptionalPartPart, OneOrMorePartsPart = _occamParsers.Parts.OneOrMorePartsPart, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, RuleNamePartType = _occamParsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamParsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamParsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamParsers.partTypes.OneOrMorePartsPartType, SequenceOfPartsPartType = _occamParsers.partTypes.SequenceOfPartsPartType, ZeroOrMorePartsPartType = _occamParsers.partTypes.ZeroOrMorePartsPartType;
function matchParts(partA, partB) {
    var partAString = partA.asString(), partBString = partB.asString(), matches = partAString === partBString;
    return matches;
}
function isPartUnary(part) {
    var partUnary = false;
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part, type = nonTerminalPart.getType();
        switch(type){
            case RuleNamePartType:
                partUnary = true;
                break;
            case OptionalPartPartType:
                {
                    var optionalPartPart = nonTerminalPart, _$part = optionalPartPart.getPart();
                    partUnary = isPartUnary(_$part);
                    break;
                }
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = nonTerminalPart, _$part1 = oneOrMorePartsPart.getPart();
                    partUnary = isPartUnary(_$part1);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = nonTerminalPart, _$part2 = zeroOrMorePartsPart.getPart(); ///
                    partUnary = isPartUnary(_$part2);
                    break;
                }
            case SequenceOfPartsPartType:
                {
                    partUnary = false;
                    break;
                }
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = nonTerminalPart, parts = choiceOfPartsPart.getParts();
                    partUnary = parts.every(function(part) {
                        var partUnary = isPartUnary(part);
                        if (partUnary) {
                            return true;
                        }
                    });
                    break;
                }
        }
    }
    return partUnary;
}
function isPartComplex(part) {
    var partComplex = true;
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part, type = nonTerminalPart.getType();
        switch(type){
            case RuleNamePartType:
                {
                    partComplex = false;
                    break;
                }
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
            case SequenceOfPartsPartType:
            case ChoiceOfPartsPartType:
                {
                    partComplex = true;
                    break;
                }
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
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts();
                    parts.forEach(function(part) {
                        return recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                    break;
                }
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = nonTerminalPart, parts1 = choiceOfPartsPart.getParts();
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
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts(), firstPart = (0, _array.first)(parts), _$part3 = firstPart; ///
                    leftRecursiveRuleNamesFromPart(_$part3, leftRecursiveRuleNames);
                    break;
                }
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = nonTerminalPart, parts1 = choiceOfPartsPart.getParts();
                    parts1.forEach(function(part) {
                        return leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                    });
                    break;
                }
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydHMsIHBhcnRUeXBlcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgUnVsZU5hbWVQYXJ0LCBPcHRpb25hbFBhcnRQYXJ0LCBPbmVPck1vcmVQYXJ0c1BhcnQsIFplcm9Pck1vcmVQYXJ0c1BhcnQgfSA9IFBhcnRzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUGFydHMocGFydEEsIHBhcnRCKSB7XG4gIGNvbnN0IHBhcnRBU3RyaW5nID0gcGFydEEuYXNTdHJpbmcoKSxcbiAgICAgICAgcGFydEJTdHJpbmcgPSBwYXJ0Qi5hc1N0cmluZygpLFxuICAgICAgICBtYXRjaGVzID0gKHBhcnRBU3RyaW5nID09PSBwYXJ0QlN0cmluZyk7XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRVbmFyeShwYXJ0KSB7XG4gIGxldCBwYXJ0VW5hcnkgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZTpcbiAgICAgICAgcGFydFVuYXJ5ID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRVbmFyeSA9IGlzUGFydFVuYXJ5KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRVbmFyeSA9IGlzUGFydFVuYXJ5KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICBwYXJ0VW5hcnkgPSBpc1BhcnRVbmFyeShwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBwYXJ0VW5hcnkgPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRVbmFyeSA9IHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFVuYXJ5ID0gaXNQYXJ0VW5hcnkocGFydCk7XG5cbiAgICAgICAgICBpZiAocGFydFVuYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0VW5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRDb21wbGV4KHBhcnQpIHtcbiAgbGV0IHBhcnRDb21wbGV4ID0gdHJ1ZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBwYXJ0Q29tcGxleCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOlxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgcGFydENvbXBsZXggPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0Q29tcGxleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcy5wdXNoKHJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpIHtcbiAgbGV0IGRpcmVjdGx5UmVkdWNlZFBhcnQ7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQoZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZE9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChkaXJlY3RseVJlZHVjZWRQYXJ0KTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZE9wdGlvbmFsUGFydFBhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZE9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZWR1Y2VkUGFydCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZFplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlZHVjZWRQYXJ0KTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIWxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5wdXNoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsibWF0Y2hQYXJ0cyIsImlzUGFydFVuYXJ5IiwiaXNQYXJ0Q29tcGxleCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiUGFydHMiLCJPcHRpb25hbFBhcnRQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwicGFydEEiLCJwYXJ0QiIsInBhcnRBU3RyaW5nIiwiYXNTdHJpbmciLCJwYXJ0QlN0cmluZyIsIm1hdGNoZXMiLCJwYXJ0IiwicGFydFVuYXJ5IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCIsInBhcnRzIiwiZ2V0UGFydHMiLCJldmVyeSIsInBhcnRDb21wbGV4IiwicnVsZU5hbWUiLCJydWxlTmFtZVBhcnQiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJmb3JFYWNoIiwiZGlyZWN0bHlSZWR1Y2VkUGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCIsImRpcmVjdGx5UmVkdWNlZE9wdGlvbmFsUGFydFBhcnQiLCJkaXJlY3RseVJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQiLCJkaXJlY3RseVJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3RQYXJ0IiwiZmlyc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7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