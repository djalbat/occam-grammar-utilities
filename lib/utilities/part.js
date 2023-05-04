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
    isPartEmpty: function() {
        return isPartEmpty;
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
function matchParts(partA, partB) {
    var partAString = partA.asString(), partBString = partB.asString(), matches = partAString === partBString;
    return matches;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBSdWxlTmFtZVBhcnQsIE9wdGlvbmFsUGFydFBhcnQsIE9uZU9yTW9yZVBhcnRzUGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFBhcnRzKHBhcnRBLCBwYXJ0Qikge1xuICBjb25zdCBwYXJ0QVN0cmluZyA9IHBhcnRBLmFzU3RyaW5nKCksXG4gICAgICAgIHBhcnRCU3RyaW5nID0gcGFydEIuYXNTdHJpbmcoKSxcbiAgICAgICAgbWF0Y2hlcyA9IChwYXJ0QVN0cmluZyA9PT0gcGFydEJTdHJpbmcpO1xuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXJ0RW1wdHkocGFydCkge1xuICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpLFxuICAgICAgICBwYXJ0U3RyaW5nRXBzaWxvbiA9IChwYXJ0U3RyaW5nID09PSBlcHNpbG9uKSxcbiAgICAgICAgcGFydEVtcHR5ID0gcGFydFN0cmluZ0Vwc2lsb247ICAvLy9cblxuICByZXR1cm4gcGFydEVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXJ0Q29tcGxleChwYXJ0KSB7XG4gIGxldCBwYXJ0Q29tcGxleCA9IHRydWU7XG5cbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgICAgcGFydENvbXBsZXggPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTsgIC8vL1xuXG4gICAgICAgIHBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChwYXJ0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZTpcbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIHBhcnRDb21wbGV4ID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydENvbXBsZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpOyAgLy8vXG5cbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydChwYXJ0KSB7XG4gIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICByZXR1cm4gemVyb09yTW9yZVBhcnRzUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSB7XG4gIGxldCBkaXJlY3RseVJlZHVjZWRQYXJ0O1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lLCBsb29rQWhlYWQpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQoZGlyZWN0bHlSZWR1Y2VkUGFydCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGRpcmVjdGx5UmVkdWNlZFBhcnQpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZWR1Y2VkUGFydCk7XG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RseVJlZHVjZWRQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMucHVzaChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1hdGNoUGFydHMiLCJpc1BhcnRFbXB0eSIsImlzUGFydENvbXBsZXgiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsIlJ1bGVOYW1lUGFydCIsIlBhcnRzIiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJlcHNpbG9uIiwic3BlY2lhbFN5bWJvbHMiLCJwYXJ0QSIsInBhcnRCIiwicGFydEFTdHJpbmciLCJhc1N0cmluZyIsInBhcnRCU3RyaW5nIiwibWF0Y2hlcyIsInBhcnQiLCJwYXJ0U3RyaW5nIiwicGFydFN0cmluZ0Vwc2lsb24iLCJwYXJ0RW1wdHkiLCJwYXJ0Q29tcGxleCIsInBhcnROb25UZXJtaW5hbFBhcnQiLCJpc05vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwib3B0aW9uYWxQYXJ0UGFydCIsImdldFBhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwicnVsZU5hbWUiLCJydWxlTmFtZVBhcnQiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImdldFBhcnRzIiwiZm9yRWFjaCIsImNob2ljZU9mUGFydHNQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCIsImRpcmVjdGx5UmVkdWNlZE9wdGlvbmFsUGFydFBhcnQiLCJkaXJlY3RseVJlZHVjZWRPbmVPck1vcmVQYXJ0c1BhcnQiLCJkaXJlY3RseVJlZHVjZWRaZXJvT3JNb3JlUGFydHNQYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3RQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7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