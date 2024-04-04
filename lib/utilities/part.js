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
    isPartComplex: function() {
        return isPartComplex;
    },
    isPartEmpty: function() {
        return isPartEmpty;
    },
    isPartLookAhead: function() {
        return isPartLookAhead;
    },
    isPartQualified: function() {
        return isPartQualified;
    },
    leftRecursiveRuleNamesFromPart: function() {
        return leftRecursiveRuleNamesFromPart;
    },
    recursiveRuleNamesFromPart: function() {
        return recursiveRuleNamesFromPart;
    },
    ruleNamePartFromRuleName: function() {
        return ruleNamePartFromRuleName;
    },
    zeroOrMorePartsPartFromPart: function() {
        return zeroOrMorePartsPartFromPart;
    }
});
var _necessary = require("necessary");
var _occamlexers = require("occam-lexers");
var _occamparsers = require("occam-parsers");
var RuleNamePart = _occamparsers.Parts.RuleNamePart, ZeroOrMorePartsPart = _occamparsers.Parts.ZeroOrMorePartsPart, RuleNamePartType = _occamparsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamparsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamparsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamparsers.partTypes.OneOrMorePartsPartType, SequenceOfPartsPartType = _occamparsers.partTypes.SequenceOfPartsPartType, ZeroOrMorePartsPartType = _occamparsers.partTypes.ZeroOrMorePartsPartType;
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
        var nonTerminalPart = part, nonTerminalPartRuleNamePart = nonTerminalPart.isRuleNamePart();
        if (nonTerminalPartRuleNamePart) {
            var ruleNamePart = nonTerminalPart, lookAhead = ruleNamePart.isLookAhead();
            partLookAhead = lookAhead; ///
        }
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
    var ruleNamePart = RuleNamePart.fromRuleName(ruleName);
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
    var zeroOrMorePartsPart = ZeroOrMorePartsPart.fromPart(part);
    return zeroOrMorePartsPart;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IFJ1bGVOYW1lUGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRFbXB0eShwYXJ0KSB7XG4gIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgIHBhcnRTdHJpbmdFcHNpbG9uID0gKHBhcnRTdHJpbmcgPT09IGVwc2lsb24pLFxuICAgICAgICBwYXJ0RW1wdHkgPSBwYXJ0U3RyaW5nRXBzaWxvbjsgIC8vL1xuXG4gIHJldHVybiBwYXJ0RW1wdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRDb21wbGV4KHBhcnQpIHtcbiAgbGV0IHBhcnRDb21wbGV4ID0gdHJ1ZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBwYXJ0Q29tcGxleCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOlxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgcGFydENvbXBsZXggPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0Q29tcGxleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFydExvb2tBaGVhZChwYXJ0KSB7XG4gIGxldCBwYXJ0TG9va0FoZWFkID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydC5pc1J1bGVOYW1lUGFydCgpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCkge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpO1xuXG4gICAgICBwYXJ0TG9va0FoZWFkID0gbG9va0FoZWFkOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRMb29rQWhlYWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnRRdWFsaWZpZWQocGFydCkge1xuICBsZXQgcGFydFF1YWxpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZTpcbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZTpcbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgcGFydFF1YWxpZmllZCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRRdWFsaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydChwYXJ0KSB7XG4gIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gIHJldHVybiB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMucHVzaChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImlzUGFydENvbXBsZXgiLCJpc1BhcnRFbXB0eSIsImlzUGFydExvb2tBaGVhZCIsImlzUGFydFF1YWxpZmllZCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IiwiUnVsZU5hbWVQYXJ0IiwiUGFydHMiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwicGFydCIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInBhcnRTdHJpbmdFcHNpbG9uIiwicGFydEVtcHR5IiwicGFydENvbXBsZXgiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0IiwiaXNOb25UZXJtaW5hbFBhcnQiLCJub25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsIm9wdGlvbmFsUGFydFBhcnQiLCJnZXRQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsInBhcnRMb29rQWhlYWQiLCJub25UZXJtaW5hbFBhcnRSdWxlTmFtZVBhcnQiLCJpc1J1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwicGFydFF1YWxpZmllZCIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInB1c2giLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJnZXRQYXJ0cyIsImZvckVhY2giLCJjaG9pY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3RQYXJ0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlCZ0JBLGFBQWE7ZUFBYkE7O0lBUkFDLFdBQVc7ZUFBWEE7O0lBK0RBQyxlQUFlO2VBQWZBOztJQW9CQUMsZUFBZTtlQUFmQTs7SUF5R0FDLDhCQUE4QjtlQUE5QkE7O0lBNUVBQywwQkFBMEI7ZUFBMUJBOztJQU5BQyx3QkFBd0I7ZUFBeEJBOztJQTRFQUMsMkJBQTJCO2VBQTNCQTs7O3lCQXJNZTsyQkFDQTs0QkFDRTtBQUVqQyxJQUFRQyxlQUFzQ0MsbUJBQUssQ0FBM0NELGNBQWNFLHNCQUF3QkQsbUJBQUssQ0FBN0JDLHFCQUNkQyxtQkFLNEJDLHVCQUFTLENBTHJDRCxrQkFDQUUs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