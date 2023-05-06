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
    isRuleEffectivelyEmpty: function() {
        return isRuleEffectivelyEmpty;
    },
    recursiveRuleNamesFromRule: function() {
        return recursiveRuleNamesFromRule;
    },
    leftRecursiveRuleNamesFromRule: function() {
        return leftRecursiveRuleNamesFromRule;
    }
});
var _occamparsers = require("occam-parsers");
var _part = require("./part");
var _definition = require("./definition");
var RuleNamePartType = _occamparsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamparsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamparsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamparsers.partTypes.OneOrMorePartsPartType, ZeroOrMorePartsPartType = _occamparsers.partTypes.ZeroOrMorePartsPartType, SequenceOfPartsPartType = _occamparsers.partTypes.SequenceOfPartsPartType;
function isRuleEffectivelyEmpty(rule, ruleMap) {
    var definitions = rule.getDefinitions(), definitionsEffectivelyEmpty = areDefinitionsEffectivelyEmpty(definitions, ruleMap), ruleEffectivelyEmpty = definitionsEffectivelyEmpty; ///
    return ruleEffectivelyEmpty;
}
function recursiveRuleNamesFromRule(rule) {
    var recursiveRuleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var definitions = rule.getDefinitions();
    definitions.forEach(function(definition) {
        (0, _definition.recursiveRuleNamesFromDefinition)(definition, recursiveRuleNames);
    });
    return recursiveRuleNames;
}
function leftRecursiveRuleNamesFromRule(rule) {
    var leftRecursiveRuleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var definitions = rule.getDefinitions();
    definitions.forEach(function(definition) {
        (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition, leftRecursiveRuleNames);
    });
    return leftRecursiveRuleNames;
}
function areDefinitionsEffectivelyEmpty(definitions, ruleMap) {
    var definitionsEffectivelyEmpty = definitions.every(function(definition) {
        var definitionEffectivelyEmpty = isDefinitionEffectivelyEmpty(definition, ruleMap);
        if (definitionEffectivelyEmpty) {
            return true;
        }
    });
    return definitionsEffectivelyEmpty;
}
function isDefinitionEffectivelyEmpty(definition, ruleMap) {
    var parts = definition.getParts(), partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap), definitionEffectivelyEmpty = partsEffectivelyEmpty; ///
    return definitionEffectivelyEmpty;
}
function arePartsEffectivelyEmpty(parts, ruleMap) {
    var partsEffectivelyEmpty = parts.every(function(part) {
        var partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap);
        if (partEffectivelyEmpty) {
            return true;
        }
    });
    return partsEffectivelyEmpty;
}
function isPartEffectivelyEmpty(part, ruleMap) {
    var partEffectivelyEmpty;
    var parTerminalPart = part.isTerminalPart();
    if (parTerminalPart) {
        var terminalPart = part, terminalPartEmpty = isTerminalPartEffectivelyEmpty(terminalPart);
        partEffectivelyEmpty = terminalPartEmpty; ///
    } else {
        var nonTerminalNPart = part, nonTerminalPartEffectivelyEmpty = isNonTerminalPartEffectivelyEmpty(nonTerminalNPart, ruleMap);
        partEffectivelyEmpty = nonTerminalPartEffectivelyEmpty; ///
    }
    return partEffectivelyEmpty;
}
function isTerminalPartEffectivelyEmpty(terminalPart) {
    var part = terminalPart, partEmpty = (0, _part.isPartEmpty)(part), terminalPartEffectivelyEmpty = partEmpty; ///
    return terminalPartEffectivelyEmpty;
}
function isNonTerminalPartEffectivelyEmpty(nonTerminalPart, ruleMap) {
    var partEffectivelyEmpty = false;
    var type = nonTerminalPart.getType();
    switch(type){
        case RuleNamePartType:
            {
                var ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), rule = ruleMap[ruleName] || null;
                if (rule !== null) {
                    var ruleEffectivelyEmpty = isRuleEffectivelyEmpty(rule, ruleMap);
                    partEffectivelyEmpty = ruleEffectivelyEmpty; ///
                }
                break;
            }
        case OptionalPartPartType:
            {
                partEffectivelyEmpty = true;
                break;
            }
        case OneOrMorePartsPartType:
            {
                var oneOrMorePartsPart = nonTerminalPart, part = oneOrMorePartsPart.getPart();
                partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap);
                break;
            }
        case ZeroOrMorePartsPartType:
            {
                partEffectivelyEmpty = true;
                break;
            }
        case SequenceOfPartsPartType:
            {
                var sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts(), partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap);
                partEffectivelyEmpty = partsEffectivelyEmpty; ///
                break;
            }
        case ChoiceOfPartsPartType:
            {
                var choiceOfPartsPart = nonTerminalPart, parts1 = choiceOfPartsPart.getParts(), partsEffectivelyEmpty1 = arePartsEffectivelyEmpty(parts1, ruleMap);
                partEffectivelyEmpty = partsEffectivelyEmpty1; ///
                break;
            }
    }
    return partEffectivelyEmpty;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNQYXJ0RW1wdHkgfSBmcm9tIFwiLi9wYXJ0XCI7XG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4vZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlRWZmZWN0aXZlbHlFbXB0eShydWxlLCBydWxlTWFwKSB7IC8vL1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5ID0gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb25zLCBydWxlTWFwKSxcbiAgICAgICAgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gIHJldHVybiBydWxlRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZnVuY3Rpb24gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb25zLCBydWxlTWFwKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSA9IGRlZmluaXRpb25zLmV2ZXJ5KChkZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkgPSBpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb24sIHJ1bGVNYXApO1xuXG4gICAgaWYgKGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbiwgcnVsZU1hcCkge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwKSxcbiAgICAgICAgZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gIHJldHVybiBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwKSB7XG4gIGNvbnN0IHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgY29uc3QgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXApO1xuXG4gICAgaWYgKHBhcnRFZmZlY3RpdmVseUVtcHR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCkge1xuICBsZXQgcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG5cbiAgY29uc3QgcGFyVGVybWluYWxQYXJ0ID0gcGFydC5pc1Rlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJUZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgdGVybWluYWxQYXJ0RW1wdHkgPSBpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkodGVybWluYWxQYXJ0KTtcblxuICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gdGVybWluYWxQYXJ0RW1wdHk7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTlBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eShub25UZXJtaW5hbE5QYXJ0LCBydWxlTWFwKTtcblxuICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gbm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eTsgLy8vXG4gIH1cblxuICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSh0ZXJtaW5hbFBhcnQpIHtcbiAgY29uc3QgcGFydCA9IHRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICBwYXJ0RW1wdHkgPSBpc1BhcnRFbXB0eShwYXJ0KSxcbiAgICAgICAgdGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRFbXB0eTsgLy8vXG5cbiAgcmV0dXJuIHRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eShub25UZXJtaW5hbFBhcnQsIHJ1bGVNYXApIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBpc1J1bGVFZmZlY3RpdmVseUVtcHR5KHJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gcnVsZUVmZmVjdGl2ZWx5RW1wdHk7ICAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eShwYXJ0LCBydWxlTWFwKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG59XG4iXSwibmFtZXMiOlsiaXNSdWxlRWZmZWN0aXZlbHlFbXB0eSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJydWxlIiwicnVsZU1hcCIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkiLCJhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkiLCJydWxlRWZmZWN0aXZlbHlFbXB0eSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZvckVhY2giLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZXZlcnkiLCJkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSIsImlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkiLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNFZmZlY3RpdmVseUVtcHR5IiwiYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5IiwicGFydCIsInBhcnRFZmZlY3RpdmVseUVtcHR5IiwiaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsInBhclRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0RW1wdHkiLCJpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJub25UZXJtaW5hbE5QYXJ0Iiwibm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsImlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsInBhcnRFbXB0eSIsImlzUGFydEVtcHR5IiwidGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwicnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsImdldFBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNnQkEsc0JBQXNCO2VBQXRCQTs7SUFRQUMsMEJBQTBCO2VBQTFCQTs7SUFVQUMsOEJBQThCO2VBQTlCQTs7OzRCQTlCVTtvQkFFRTswQkFDMkQ7QUFFdkYsSUFBUUMsbUJBSzRCQyx1QkFBUyxDQUxyQ0Qsa0JBQ0FFLHVCQUk0QkQsdUJBQVMsQ0FKckNDLHNCQUNBQyx3QkFHNEJGLHVCQUFTLENBSHJDRSx1QkFDQUMseUJBRTRCSCx1QkFBUyxDQUZyQ0csd0JBQ0FDLDBCQUM0QkosdUJBQVMsQ0FEckNJLHlCQUNBQywwQkFBNEJMLHVCQUFTLENBQXJDSztBQUVELFNBQVNULHVCQUF1QlUsSUFBSSxFQUFFQyxPQUFPLEVBQUU7SUFDcEQsSUFBTUMsY0FBY0YsS0FBS0csY0FBYyxJQUNqQ0MsOEJBQThCQywrQkFBK0JILGFBQWFELFVBQzFFSyx1QkFBdUJGLDZCQUE2QixHQUFHO0lBRTdELE9BQU9FO0FBQ1Q7QUFFTyxTQUFTZiwyQkFBMkJTLElBQUksRUFBMkI7UUFBekJPLHFCQUFBQSxpRUFBcUIsRUFBRTtJQUN0RSxJQUFNTCxjQUFjRixLQUFLRyxjQUFjO0lBRXZDRCxZQUFZTSxPQUFPLENBQUMsU0FBQ0MsWUFBZTtRQUNsQ0MsSUFBQUEsNENBQWdDLEVBQUNELFlBQVlGO0lBQy9DO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNmLCtCQUErQlEsSUFBSSxFQUErQjtRQUE3QlcseUJBQUFBLGlFQUF5QixFQUFFO0lBQzlFLElBQU1ULGNBQWNGLEtBQUtHLGNBQWM7SUFFdkNELFlBQVlNLE9BQU8sQ0FBQyxTQUFDQyxZQUFlO1FBQ2xDRyxJQUFBQSxnREFBb0MsRUFBQ0gsWUFBWUU7SUFDbkQ7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU04sK0JBQStCSCxXQUFXLEVBQUVELE9BQU8sRUFBRTtJQUM1RCxJQUFNRyw4QkFBOEJGLFlBQVlXLEtBQUssQ0FBQyxTQUFDSixZQUFlO1FBQ3BFLElBQU1LLDZCQUE2QkMsNkJBQTZCTixZQUFZUjtRQUU1RSxJQUFJYSw0QkFBNEI7WUFDOUIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUEsT0FBT1Y7QUFDVDtBQUVBLFNBQVNXLDZCQUE2Qk4sVUFBVSxFQUFFUixPQUFPLEVBQUU7SUFDekQsSUFBTWUsUUFBUVAsV0FBV1EsUUFBUSxJQUMzQkMsd0JBQXdCQyx5QkFBeUJILE9BQU9mLFVBQ3hEYSw2QkFBNkJJLHVCQUF1QixHQUFHO0lBRTdELE9BQU9KO0FBQ1Q7QUFFQSxTQUFTSyx5QkFBeUJILEtBQUssRUFBRWYsT0FBTyxFQUFFO0lBQ2hELElBQU1pQix3QkFBd0JGLE1BQU1ILEtBQUssQ0FBQyxTQUFDTyxNQUFTO1FBQ2xELElBQU1DLHVCQUF1QkMsdUJBQXVCRixNQUFNbkI7UUFFMUQsSUFBSW9CLHNCQUFzQjtZQUN4QixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFQSxPQUFPSDtBQUNUO0FBRUEsU0FBU0ksdUJBQXVCRixJQUFJLEVBQUVuQixPQUFPLEVBQUU7SUFDN0MsSUFBSW9CO0lBRUosSUFBTUUsa0JBQWtCSCxLQUFLSSxjQUFjO0lBRTNDLElBQUlELGlCQUFpQjtRQUNuQixJQUFNRSxlQUFlTCxNQUNmTSxvQkFBb0JDLCtCQUErQkY7UUFFekRKLHVCQUF1QkssbUJBQW1CLEdBQUc7SUFDL0MsT0FBTztRQUNMLElBQU1FLG1CQUFtQlIsTUFDbkJTLGtDQUFrQ0Msa0NBQWtDRixrQkFBa0IzQjtRQUU1Rm9CLHVCQUF1QlEsaUNBQWlDLEdBQUc7SUFDN0QsQ0FBQztJQUVELE9BQU9SO0FBQ1Q7QUFFQSxTQUFTTSwrQkFBK0JGLFlBQVksRUFBRTtJQUNwRCxJQUFNTCxPQUFPSyxjQUNQTSxZQUFZQyxJQUFBQSxpQkFBVyxFQUFDWixPQUN4QmEsK0JBQStCRixXQUFXLEdBQUc7SUFFbkQsT0FBT0U7QUFDVDtBQUVBLFNBQVNILGtDQUFrQ0ksZUFBZSxFQUFFakMsT0FBTyxFQUFFO0lBQ25FLElBQUlvQix1QkFBdUIsS0FBSztJQUVoQyxJQUFNYyxPQUFPRCxnQkFBZ0JFLE9BQU87SUFFcEMsT0FBUUQ7UUFDTixLQUFLMUM7WUFBa0I7Z0JBQ3JCLElBQU00QyxlQUFlSCxpQkFDZkksV0FBV0QsYUFBYUUsV0FBVyxJQUNuQ3ZDLE9BQU9DLE9BQU8sQ0FBQ3FDLFNBQVMsSUFBSSxJQUFJO2dCQUV0QyxJQUFJdEMsU0FBUyxJQUFJLEVBQUU7b0JBQ2pCLElBQU1NLHVCQUF1QmhCLHVCQUF1QlUsTUFBTUM7b0JBRTFEb0IsdUJBQXVCZixzQkFBdUIsR0FBRztnQkFDbkQsQ0FBQztnQkFFRCxLQUFNO1lBQ1I7UUFFQSxLQUFLWDtZQUFzQjtnQkFDekIwQix1QkFBdUIsSUFBSTtnQkFFM0IsS0FBTTtZQUNSO1FBRUEsS0FBS3hCO1lBQXdCO2dCQUMzQixJQUFNMkMscUJBQXFCTixpQkFDckJkLE9BQU9vQixtQkFBbUJDLE9BQU87Z0JBRXZDcEIsdUJBQXVCQyx1QkFBdUJGLE1BQU1uQjtnQkFFcEQsS0FBTTtZQUNSO1FBRUEsS0FBS0g7WUFBeUI7Z0JBQzVCdUIsdUJBQXVCLElBQUk7Z0JBRTNCLEtBQU07WUFDUjtRQUVBLEtBQUt0QjtZQUF5QjtnQkFDNUIsSUFBTTJDLHNCQUFzQlIsaUJBQ3RCbEIsUUFBUTBCLG9CQUFvQnpCLFFBQVEsSUFDcENDLHdCQUF3QkMseUJBQXlCSCxPQUFPZjtnQkFFOURvQix1QkFBdUJILHVCQUF1QixHQUFHO2dCQUVqRCxLQUFNO1lBQ1I7UUFFQSxLQUFLdEI7WUFBdUI7Z0JBQzFCLElBQU0rQyxvQkFBb0JULGlCQUNwQmxCLFNBQVEyQixrQkFBa0IxQixRQUFRLElBQ2xDQyx5QkFBd0JDLHlCQUF5QkgsUUFBT2Y7Z0JBRTlEb0IsdUJBQXVCSCx3QkFBdUIsR0FBRztnQkFFakQsS0FBTTtZQUNSO0lBQ0Y7SUFFQSxPQUFPRztBQUNUIn0=