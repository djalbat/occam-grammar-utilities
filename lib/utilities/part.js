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
            case ChoiceOfPartsPartType:
            case SequenceOfPartsPartType:
                partUnary = false;
                break;
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
                    var sequenceOfPartsPart = nonTerminalPart, parts1 = sequenceOfPartsPart.getParts(), firstPart = (0, _array.first)(parts1), _$part3 = firstPart; ///
                    leftRecursiveRuleNamesFromPart(_$part3, leftRecursiveRuleNames);
                    break;
                }
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydHMsIHBhcnRUeXBlcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgUnVsZU5hbWVQYXJ0LCBPcHRpb25hbFBhcnRQYXJ0LCBPbmVPck1vcmVQYXJ0c1BhcnQsIFplcm9Pck1vcmVQYXJ0c1BhcnQgfSA9IFBhcnRzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUGFydHMocGFydEEsIHBhcnRCKSB7XG4gIGNvbnN0IHBhcnRBU3RyaW5nID0gcGFydEEuYXNTdHJpbmcoKSxcbiAgICAgICAgcGFydEJTdHJpbmcgPSBwYXJ0Qi5hc1N0cmluZygpLFxuICAgICAgICBtYXRjaGVzID0gKHBhcnRBU3RyaW5nID09PSBwYXJ0QlN0cmluZyk7XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRVbmFyeShwYXJ0KSB7XG4gIGxldCBwYXJ0VW5hcnkgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZTpcbiAgICAgICAgcGFydFVuYXJ5ID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRVbmFyeSA9IGlzUGFydFVuYXJ5KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRVbmFyeSA9IGlzUGFydFVuYXJ5KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICBwYXJ0VW5hcnkgPSBpc1BhcnRVbmFyeShwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6XG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOlxuICAgICAgICBwYXJ0VW5hcnkgPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydFVuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXJ0Q29tcGxleChwYXJ0KSB7XG4gIGxldCBwYXJ0Q29tcGxleCA9IHRydWU7XG5cbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6XG4gICAgICAgIHBhcnRDb21wbGV4ID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOlxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZTpcbiAgICAgICAgcGFydENvbXBsZXggPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0Q29tcGxleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcy5wdXNoKHJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpIHtcbiAgbGV0IGRpcmVjdGx5UmVkdWNlZFBhcnQ7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQoZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZE9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChkaXJlY3RseVJlZHVjZWRQYXJ0KTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZE9wdGlvbmFsUGFydFBhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZE9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZWR1Y2VkUGFydCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZFplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlZHVjZWRQYXJ0KTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIWxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5wdXNoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsibWF0Y2hQYXJ0cyIsImlzUGFydFVuYXJ5IiwiaXNQYXJ0Q29tcGxleCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiUGFydHMiLCJPcHRpb25hbFBhcnRQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwicGFydEEiLCJwYXJ0QiIsInBhcnRBU3RyaW5nIiwiYXNTdHJpbmciLCJwYXJ0QlN0cmluZyIsIm1hdGNoZXMiLCJwYXJ0IiwicGFydFVuYXJ5IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJwYXJ0Q29tcGxleCIsInJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0IiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInB1c2giLCJjaG9pY2VPZlBhcnRzUGFydCIsInBhcnRzIiwiZ2V0UGFydHMiLCJmb3JFYWNoIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQiLCJkaXJlY3RseVJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydCIsImZpcnN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFlZ0JBLFVBQVU7ZUFBVkE7O0lBUUFDLFdBQVc7ZUFBWEE7O0lBcURBQyxhQUFhO2VBQWJBOztJQXFEQUMsd0JBQXdCO2VBQXhCQTs7SUFNQUMsMEJBQTBCO2VBQTFCQTs7SUFzRUFDLDJCQUEyQjtlQUEzQkE7O0lBOERBQyw4QkFBOEI7ZUFBOUJBOzs7NEJBelFpQjtxQkFFWDt3QkFDOEI7QUFFcEQsSUFBUUMsZUFBNEVDLG1CQUFLLENBQWpGRCxjQUFjRSxtQkFBOERELG1CQUFLLENBQW5FQyxrQkFBa0JDLHFCQUE0Q0YsbUJBQUssQ0FBakRFLG9CQUFvQkMsc0JBQXdCSCxtQkFBSyxDQUE3QkcscUJBQ3BEQyxtQkFLNEJDLHVCQUFTLENBTHJDRCxrQkFDQUUsdUJBSTRCRCx1QkFBUyxDQUpyQ0Msc0JBQ0FDLHdCQUc0QkYsdUJB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