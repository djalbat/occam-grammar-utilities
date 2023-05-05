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
    isPartEmpty: function() {
        return isPartEmpty;
    },
    isPartComplex: function() {
        return isPartComplex;
    },
    isPartLookAhead: function() {
        return isPartLookAhead;
    },
    isPartQualified: function() {
        return isPartQualified;
    },
    ruleNamePartFromRuleName: function() {
        return ruleNamePartFromRuleName;
    },
    recursiveRuleNamesFromPart: function() {
        return recursiveRuleNamesFromPart;
    },
    zeroOrMorePartsPartFromPart: function() {
        return zeroOrMorePartsPartFromPart;
    },
    directlyReducedPartFromPart: function() {
        return directlyReducedPartFromPart;
    },
    leftRecursiveRuleNamesFromPart: function() {
        return leftRecursiveRuleNamesFromPart;
    }
});
var _necessary = require("necessary");
var _occamlexers = require("occam-lexers");
var _occamparsers = require("occam-parsers");
var _ruleName = require("../utilities/ruleName");
var RuleNamePart = _occamparsers.Parts.RuleNamePart, OptionalPartPart = _occamparsers.Parts.OptionalPartPart, OneOrMorePartsPart = _occamparsers.Parts.OneOrMorePartsPart, ZeroOrMorePartsPart = _occamparsers.Parts.ZeroOrMorePartsPart, RuleNamePartType = _occamparsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamparsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamparsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamparsers.partTypes.OneOrMorePartsPartType, SequenceOfPartsPartType = _occamparsers.partTypes.SequenceOfPartsPartType, ZeroOrMorePartsPartType = _occamparsers.partTypes.ZeroOrMorePartsPartType;
var first = _necessary.arrayUtilities.first, epsilon = _occamlexers.specialSymbols.epsilon;
function isPartEmpty(part) {
    var partString = part.asString(), partStringEpsilon = partString === epsilon, partEmpty = partStringEpsilon; ///
    return partEmpty;
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
function isPartLookAhead(part) {
    var partLookAhead = false;
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part, lookAhead = nonTerminalPart.isLookAhead();
        partLookAhead = lookAhead; ///
    }
    return partLookAhead;
}
function isPartQualified(part) {
    var partQualified = false;
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part, type = nonTerminalPart.getType();
        switch(type){
            case OptionalPartPartType:
            case OneOrMorePartsPartType:
            case ZeroOrMorePartsPartType:
                {
                    partQualified = true;
                    break;
                }
        }
    }
    return partQualified;
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
function zeroOrMorePartsPartFromPart(part) {
    var zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
    return zeroOrMorePartsPart;
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
                    var sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts(), firstPart = first(parts), _$part3 = firstPart; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBSdWxlTmFtZVBhcnQsIE9wdGlvbmFsUGFydFBhcnQsIE9uZU9yTW9yZVBhcnRzUGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRFbXB0eShwYXJ0KSB7XG4gIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgIHBhcnRTdHJpbmdFcHNpbG9uID0gKHBhcnRTdHJpbmcgPT09IGVwc2lsb24pLFxuICAgICAgICBwYXJ0RW1wdHkgPSBwYXJ0U3RyaW5nRXBzaWxvbjsgIC8vL1xuXG4gIHJldHVybiBwYXJ0RW1wdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRDb21wbGV4KHBhcnQpIHtcbiAgbGV0IHBhcnRDb21wbGV4ID0gdHJ1ZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBwYXJ0Q29tcGxleCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOlxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgcGFydENvbXBsZXggPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0Q29tcGxleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFydExvb2tBaGVhZChwYXJ0KSB7XG4gIGxldCBwYXJ0TG9va0FoZWFkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIGxvb2tBaGVhZCA9IG5vblRlcm1pbmFsUGFydC5pc0xvb2tBaGVhZCgpO1xuXG4gICAgcGFydExvb2tBaGVhZCA9IGxvb2tBaGVhZDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnRMb29rQWhlYWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRRdWFsaWZpZWQocGFydCkge1xuICBsZXQgcGFydFF1YWxpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZTpcbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZTpcbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgcGFydFF1YWxpZmllZCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRRdWFsaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydChwYXJ0KSB7XG4gIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICByZXR1cm4gemVyb09yTW9yZVBhcnRzUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSB7XG4gIGxldCBkaXJlY3RseVJlZHVjZWRQYXJ0O1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lLCBsb29rQWhlYWQpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQoZGlyZWN0bHlSZWR1Y2VkUGFydCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGRpcmVjdGx5UmVkdWNlZFBhcnQpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZWR1Y2VkUGFydCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RseVJlZHVjZWRQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMucHVzaChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImlzUGFydEVtcHR5IiwiaXNQYXJ0Q29tcGxleCIsImlzUGFydExvb2tBaGVhZCIsImlzUGFydFF1YWxpZmllZCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiUGFydHMiLCJPcHRpb25hbFBhcnRQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImVwc2lsb24iLCJzcGVjaWFsU3ltYm9scyIsInBhcnQiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJwYXJ0U3RyaW5nRXBzaWxvbiIsInBhcnRFbXB0eSIsInBhcnRDb21wbGV4IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJwYXJ0TG9va0FoZWFkIiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJwYXJ0UXVhbGlmaWVkIiwicnVsZU5hbWUiLCJydWxlTmFtZVBhcnQiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImdldFBhcnRzIiwiZm9yRWFjaCIsImNob2ljZU9mUGFydHNQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydCIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQiLCJkaXJlY3RseVJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBbUJnQkEsV0FBVztlQUFYQTs7SUFRQUMsYUFBYTtlQUFiQTs7SUF1REFDLGVBQWU7ZUFBZkE7O0lBZUFDLGVBQWU7ZUFBZkE7O0lBdUJBQyx3QkFBd0I7ZUFBeEJBOztJQU1BQywwQkFBMEI7ZUFBMUJBOztJQXNFQUMsMkJBQTJCO2VBQTNCQTs7SUFNQUMsMkJBQTJCO2VBQTNCQTs7SUE4REFDLDhCQUE4QjtlQUE5QkE7Ozt5QkF0UWU7MkJBQ0E7NEJBQ0U7d0JBRW1CO0FBRXBELElBQVFDLGVBQTRFQyxtQkFBSyxDQUFqRkQsY0FBY0UsbUJBQThERCxtQkFBSyxDQUFuRUMsa0JBQWtCQyxxQkFBNENGLG1CQUFL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