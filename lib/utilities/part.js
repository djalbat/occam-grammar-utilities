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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydHMsIHBhcnRUeXBlcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgUnVsZU5hbWVQYXJ0LCBPcHRpb25hbFBhcnRQYXJ0LCBPbmVPck1vcmVQYXJ0c1BhcnQsIFplcm9Pck1vcmVQYXJ0c1BhcnQgfSA9IFBhcnRzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUGFydHMocGFydEEsIHBhcnRCKSB7XG4gIGNvbnN0IHBhcnRBU3RyaW5nID0gcGFydEEuYXNTdHJpbmcoKSxcbiAgICAgICAgcGFydEJTdHJpbmcgPSBwYXJ0Qi5hc1N0cmluZygpLFxuICAgICAgICBtYXRjaGVzID0gKHBhcnRBU3RyaW5nID09PSBwYXJ0QlN0cmluZyk7XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRVbmFyeShwYXJ0KSB7XG4gIGxldCBwYXJ0VW5hcnkgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZTpcbiAgICAgICAgcGFydFVuYXJ5ID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRVbmFyeSA9IGlzUGFydFVuYXJ5KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRVbmFyeSA9IGlzUGFydFVuYXJ5KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICBwYXJ0VW5hcnkgPSBpc1BhcnRVbmFyeShwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6XG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOlxuICAgICAgICBwYXJ0VW5hcnkgPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydFVuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXJ0Q29tcGxleChwYXJ0KSB7XG4gIGxldCBwYXJ0Q29tcGxleCA9IHRydWU7XG5cbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6XG4gICAgICAgIHBhcnRDb21wbGV4ID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOlxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZTpcbiAgICAgICAgcGFydENvbXBsZXggPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0Q29tcGxleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcy5wdXNoKHJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpIHtcbiAgbGV0IGRpcmVjdGx5UmVkdWNlZFBhcnQ7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQoZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZE9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChkaXJlY3RseVJlZHVjZWRQYXJ0KTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZE9wdGlvbmFsUGFydFBhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZE9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZWR1Y2VkUGFydCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZFplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlZHVjZWRQYXJ0KTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIWxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5wdXNoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsibWF0Y2hQYXJ0cyIsImlzUGFydFVuYXJ5IiwiaXNQYXJ0Q29tcGxleCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiUGFydHMiLCJPcHRpb25hbFBhcnRQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwicGFydEEiLCJwYXJ0QiIsInBhcnRBU3RyaW5nIiwiYXNTdHJpbmciLCJwYXJ0QlN0cmluZyIsIm1hdGNoZXMiLCJwYXJ0IiwicGFydFVuYXJ5IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJwYXJ0Q29tcGxleCIsInJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0IiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInB1c2giLCJjaG9pY2VPZlBhcnRzUGFydCIsInBhcnRzIiwiZ2V0UGFydHMiLCJmb3JFYWNoIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQiLCJkaXJlY3RseVJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydCIsImZpcnN0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBZUdBLFVBQVU7ZUFBVkEsVUFBVTs7SUFRVkMsV0FBVztlQUFYQSxXQUFXOztJQXFEWEMsYUFBYTtlQUFiQSxhQUFhOztJQXFEYkMsd0JBQXdCO2VBQXhCQSx3QkFBd0I7O0lBTXhCQywwQkFBMEI7ZUFBMUJBLDBCQUEwQjs7SUFzRTFCQywyQkFBMkI7ZUFBM0JBLDJCQUEyQjs7SUE4RDNCQyw4QkFBOEI7ZUFBOUJBLDhCQUE4Qjs7OzRCQXpRYixlQUFlO3FCQUUxQixvQkFBb0I7d0JBQ1UsdUJBQXVCO0FBRTNFLElBQVFDLFlBQVksR0FBZ0VDLGFBQUssTUFBQSxDQUFqRkQsWUFBWSxFQUFFRSxnQkFBZ0IsR0FBOENELGFBQUssTUFBQSxDQUFuRUMsZ0JBQWdCLEVBQUVDLGtCQUFrQixHQUEwQkYsYUFBSyxNQUFB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