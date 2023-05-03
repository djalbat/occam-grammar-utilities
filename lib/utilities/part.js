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
var _occamlexers = require("occam-lexers");
var _occamparsers = require("occam-parsers");
var _array = require("../utilities/array");
var _ruleName = require("../utilities/ruleName");
var RuleNamePart = _occamparsers.Parts.RuleNamePart, OptionalPartPart = _occamparsers.Parts.OptionalPartPart, OneOrMorePartsPart = _occamparsers.Parts.OneOrMorePartsPart, ZeroOrMorePartsPart = _occamparsers.Parts.ZeroOrMorePartsPart, RuleNamePartType = _occamparsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamparsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamparsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamparsers.partTypes.OneOrMorePartsPartType, SequenceOfPartsPartType = _occamparsers.partTypes.SequenceOfPartsPartType, ZeroOrMorePartsPartType = _occamparsers.partTypes.ZeroOrMorePartsPartType;
var epsilon = _occamlexers.specialSymbols.epsilon;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBQYXJ0cywgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBSdWxlTmFtZVBhcnQsIE9wdGlvbmFsUGFydFBhcnQsIE9uZU9yTW9yZVBhcnRzUGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5jb25zdCB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hQYXJ0cyhwYXJ0QSwgcGFydEIpIHtcbiAgY29uc3QgcGFydEFTdHJpbmcgPSBwYXJ0QS5hc1N0cmluZygpLFxuICAgICAgICBwYXJ0QlN0cmluZyA9IHBhcnRCLmFzU3RyaW5nKCksXG4gICAgICAgIG1hdGNoZXMgPSAocGFydEFTdHJpbmcgPT09IHBhcnRCU3RyaW5nKTtcblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFydFVuYXJ5KHBhcnQpIHtcbiAgbGV0IHBhcnRVbmFyeSA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOlxuICAgICAgICBwYXJ0VW5hcnkgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydFVuYXJ5ID0gaXNQYXJ0VW5hcnkocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydFVuYXJ5ID0gaXNQYXJ0VW5hcnkocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTsgIC8vL1xuXG4gICAgICAgIHBhcnRVbmFyeSA9IGlzUGFydFVuYXJ5KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIHBhcnRVbmFyeSA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydFVuYXJ5ID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0VW5hcnkgPSBpc1BhcnRVbmFyeShwYXJ0KTtcblxuICAgICAgICAgIGlmIChwYXJ0VW5hcnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRVbmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFydEVtcHR5KHBhcnQpIHtcbiAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgcGFydFN0cmluZ0Vwc2lsb24gPSAocGFydFN0cmluZyA9PT0gZXBzaWxvbiksXG4gICAgICAgIHBhcnRFbXB0eSA9IHBhcnRTdHJpbmdFcHNpbG9uOyAgLy8vXG5cbiAgcmV0dXJuIHBhcnRFbXB0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFydENvbXBsZXgocGFydCkge1xuICBsZXQgcGFydENvbXBsZXggPSB0cnVlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIHBhcnRDb21wbGV4ID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6XG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBwYXJ0Q29tcGxleCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRDb21wbGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWUpO1xuXG4gIHJldHVybiBydWxlTmFtZVBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gocmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTsgIC8vL1xuXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKTtcblxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQocGFydCkge1xuICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCkge1xuICBsZXQgZGlyZWN0bHlSZWR1Y2VkUGFydDtcblxuICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBsb29rQWhlYWQgPSBydWxlTmFtZVBhcnQuaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgbG9va0FoZWFkKTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KTtcblxuICAgICAgY29uc3QgZGlyZWN0bHlSZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KGRpcmVjdGx5UmVkdWNlZFBhcnQpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkT3B0aW9uYWxQYXJ0UGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KTtcblxuICAgICAgY29uc3QgZGlyZWN0bHlSZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlZHVjZWRQYXJ0KTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZE9uZU9yTW9yZVBhcnRzUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KTtcblxuICAgICAgY29uc3QgZGlyZWN0bHlSZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KGRpcmVjdGx5UmVkdWNlZFBhcnQpO1xuXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0bHlSZWR1Y2VkUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYXRjaFBhcnRzIiwiaXNQYXJ0VW5hcnkiLCJpc1BhcnRFbXB0eSIsImlzUGFydENvbXBsZXgiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsIlJ1bGVOYW1lUGFydCIsIlBhcnRzIiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsImVwc2lsb24iLCJzcGVjaWFsU3ltYm9scyIsInBhcnRBIiwicGFydEIiLCJwYXJ0QVN0cmluZyIsImFzU3RyaW5nIiwicGFydEJTdHJpbmciLCJtYXRjaGVzIiwicGFydCIsInBhcnRVbmFyeSIsInBhcnROb25UZXJtaW5hbFBhcnQiLCJpc05vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwib3B0aW9uYWxQYXJ0UGFydCIsImdldFBhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImdldFBhcnRzIiwiZXZlcnkiLCJwYXJ0U3RyaW5nIiwicGFydFN0cmluZ0Vwc2lsb24iLCJwYXJ0RW1wdHkiLCJwYXJ0Q29tcGxleCIsInJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0IiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInB1c2giLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiZm9yRWFjaCIsImRpcmVjdGx5UmVkdWNlZFBhcnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQiLCJkaXJlY3RseVJlZHVjZWRPcHRpb25hbFBhcnRQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkT25lT3JNb3JlUGFydHNQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkWmVyb09yTW9yZVBhcnRzUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydCIsImZpcnN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFrQmdCQSxVQUFVO2VBQVZBOztJQVFBQyxXQUFXO2VBQVhBOztJQW9FQUMsV0FBVztlQUFYQTs7SUFRQUMsYUFBYTtlQUFiQTs7SUF1REFDLHdCQUF3QjtlQUF4QkE7O0lBTUFDLDBCQUEwQjtlQUExQkE7O0lBc0VBQywyQkFBMkI7ZUFBM0JBOztJQU1BQywyQkFBMkI7ZUFBM0JBOztJQThEQUMsOEJBQThCO2VBQTlCQTs7OzJCQTNTZTs0QkFDRTtxQkFFWDt3QkFDOEI7QUFFcEQsSUFBUUMsZUFBNEVDLG1CQUFLLENBQWpGRCxjQUFjRSxtQkFBOERELG1CQUFLLENBQW5FQyxrQkFBa0JDLHFCQUE0Q0YsbUJBQUssQ0FBakRFLG9CQUFvQkMsc0JBQXdCSCxtQkFBSyxDQUE3QkcscUJBQ3BEQyxt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