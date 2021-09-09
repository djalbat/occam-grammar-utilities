"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recursiveRuleNamesFromPart = recursiveRuleNamesFromPart;
exports.leftRecursiveRuleNamesFromPart = leftRecursiveRuleNamesFromPart;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, RuleNamePartType = _occamParsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamParsers.partTypes.OptionalPartPartType, SequenceOfPartsPartType = _occamParsers.partTypes.SequenceOfPartsPartType, ChoiceOfPartsPartType = _occamParsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamParsers.partTypes.OneOrMorePartsPartType, ZeroOrMorePartsPartType = _occamParsers.partTypes.ZeroOrMorePartsPartType;
function recursiveRuleNamesFromPart(part, recursiveRuleNames) {
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var type = part.getType();
        switch(type){
            case RuleNamePartType:
                {
                    var ruleNamePart = part, ruleName = ruleNamePart.getRuleName(), recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);
                    if (!recursiveRuleNamesIncludesRuleName) {
                        var recursiveRuleName = ruleName; ///
                        recursiveRuleNames.push(recursiveRuleName);
                    }
                }
                break;
            case OptionalPartPartType:
                {
                    var optionalPartPart = part; ///
                    part = optionalPartPart.getPart();
                    recursiveRuleNamesFromPart(part, recursiveRuleNames);
                }
                break;
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = part; ///
                    part = oneOrMorePartsPart.getPart();
                    recursiveRuleNamesFromPart(part, recursiveRuleNames);
                }
                break;
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = part; ///
                    part = zeroOrMorePartsPart.getPart(); ///
                    recursiveRuleNamesFromPart(part, recursiveRuleNames);
                }
                break;
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = part, parts = sequenceOfPartsPart.getParts();
                    parts.forEach(function(part) {
                        return recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                }
                break;
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = part, parts = choiceOfPartsPart.getParts();
                    parts.forEach(function(part) {
                        return recursiveRuleNamesFromPart(part, recursiveRuleNames);
                    });
                }
                break;
        }
    }
}
function leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames) {
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var type = part.getType();
        switch(type){
            case RuleNamePartType:
                {
                    var ruleNamePart = part, ruleName = ruleNamePart.getRuleName(), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);
                    if (!leftRecursiveRuleNamesIncludesRuleName) {
                        var leftRecursiveRuleName = ruleName; ///
                        leftRecursiveRuleNames.push(leftRecursiveRuleName);
                    }
                }
                break;
            case OptionalPartPartType:
                {
                    var optionalPartPart = part; ///
                    part = optionalPartPart.getPart();
                    leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                }
                break;
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = part; ///
                    part = oneOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                }
                break;
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = part; ///
                    part = zeroOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                }
                break;
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = part, parts = sequenceOfPartsPart.getParts(), firstPart = first(parts);
                    part = firstPart; ///
                    leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                }
                break;
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = part, parts = choiceOfPartsPart.getParts();
                    parts.forEach(function(part) {
                        return leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
                    });
                }
                break;
        }
    }
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVjdXJzaXZlUGFydC5qcyJdLCJuYW1lcyI6WyJwYXJ0VHlwZXMiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiUnVsZU5hbWVQYXJ0VHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsInBhcnQiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0IiwiaXNOb25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInB1c2giLCJvcHRpb25hbFBhcnRQYXJ0IiwiZ2V0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJnZXRQYXJ0cyIsImZvckVhY2giLCJjaG9pY2VPZlBhcnRzUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQWFJLDBCQUEwQixHQUExQiwwQkFBMEI7UUF3RTFCLDhCQUE4QixHQUE5Qiw4QkFBOEI7QUFuRnBCLEdBQWUsQ0FBZixhQUFlO0FBQ1YsR0FBVyxDQUFYLFVBQVc7QUFFMUMsR0FBSyxDQUFHLEtB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