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
    var definitionsEffectivelyEmpty = definitions.some(function(definition) {
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
                var choiceOfPartsPart = nonTerminalPart, parts1 = choiceOfPartsPart.getParts(), partsEffectivelyEmpty1 = parts1.some(function(part) {
                    var partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap);
                    return partEffectivelyEmpty;
                });
                partEffectivelyEmpty = partsEffectivelyEmpty1; ///
                break;
            }
    }
    return partEffectivelyEmpty;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNQYXJ0RW1wdHkgfSBmcm9tIFwiLi9wYXJ0XCI7XG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4vZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlRWZmZWN0aXZlbHlFbXB0eShydWxlLCBydWxlTWFwKSB7IC8vL1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5ID0gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb25zLCBydWxlTWFwKSxcbiAgICAgICAgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gIHJldHVybiBydWxlRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZnVuY3Rpb24gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb25zLCBydWxlTWFwKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSA9IGRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSA9IGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbiwgcnVsZU1hcCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eShkZWZpbml0aW9uLCBydWxlTWFwKSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXApLFxuICAgICAgICBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgcmV0dXJuIGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXApIHtcbiAgY29uc3QgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCk7XG5cbiAgICBpZiAocGFydEVmZmVjdGl2ZWx5RW1wdHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eShwYXJ0LCBydWxlTWFwKSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcblxuICBjb25zdCBwYXJUZXJtaW5hbFBhcnQgPSBwYXJ0LmlzVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhclRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnRFbXB0eSA9IGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSh0ZXJtaW5hbFBhcnQpO1xuXG4gICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0ZXJtaW5hbFBhcnRFbXB0eTsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KG5vblRlcm1pbmFsTlBhcnQsIHJ1bGVNYXApO1xuXG4gICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNUZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KHRlcm1pbmFsUGFydCkge1xuICBjb25zdCBwYXJ0ID0gdGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgIHBhcnRFbXB0eSA9IGlzUGFydEVtcHR5KHBhcnQpLFxuICAgICAgICB0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5ID0gcGFydEVtcHR5OyAvLy9cblxuICByZXR1cm4gdGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KG5vblRlcm1pbmFsUGFydCwgcnVsZU1hcCkge1xuICBsZXQgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlRWZmZWN0aXZlbHlFbXB0eSA9IGlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkocnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBydWxlRWZmZWN0aXZlbHlFbXB0eTsgIC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXApO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXApO1xuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0cy5zb21lKChwYXJ0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eShwYXJ0LCBydWxlTWFwKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cbiJdLCJuYW1lcyI6WyJpc1J1bGVFZmZlY3RpdmVseUVtcHR5IiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsInJ1bGUiLCJydWxlTWFwIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSIsImFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSIsInJ1bGVFZmZlY3RpdmVseUVtcHR5IiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZm9yRWFjaCIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJzb21lIiwiZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkiLCJpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5IiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzRWZmZWN0aXZlbHlFbXB0eSIsImFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eSIsImV2ZXJ5IiwicGFydCIsInBhcnRFZmZlY3RpdmVseUVtcHR5IiwiaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsInBhclRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0RW1wdHkiLCJpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJub25UZXJtaW5hbE5QYXJ0Iiwibm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsImlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsInBhcnRFbXB0eSIsImlzUGFydEVtcHR5IiwidGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwicnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsImdldFBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNnQkEsc0JBQXNCO2VBQXRCQTs7SUFRQUMsMEJBQTBCO2VBQTFCQTs7SUFVQUMsOEJBQThCO2VBQTlCQTs7OzRCQTlCVTtvQkFFRTswQkFDMkQ7QUFFdkYsSUFBUUMsbUJBSzRCQyx1QkFBUyxDQUxyQ0Qsa0JBQ0FFLHVCQUk0QkQsdUJBQVMsQ0FKckNDLHNCQUNBQyx3QkFHNEJGLHVCQUFTLENBSHJDRSx1QkFDQUMseUJBRTRCSCx1QkFBUyxDQUZyQ0csd0JBQ0FDLDBCQUM0QkosdUJBQVMsQ0FEckNJLHlCQUNBQywwQkFBNEJMLHVCQUFTLENBQXJDSztBQUVELFNBQVNULHVCQUF1QlUsSUFBSSxFQUFFQyxPQUFPLEVBQUU7SUFDcEQsSUFBTUMsY0FBY0YsS0FBS0csY0FBYyxJQUNqQ0MsOEJBQThCQywrQkFBK0JILGFBQWFELFVBQzFFSyx1QkFBdUJGLDZCQUE2QixHQUFHO0lBRTdELE9BQU9FO0FBQ1Q7QUFFTyxTQUFTZiwyQkFBMkJTLElBQUksRUFBMkI7UUFBekJPLHFCQUFBQSxpRUFBcUIsRUFBRTtJQUN0RSxJQUFNTCxjQUFjRixLQUFLRyxjQUFjO0lBRXZDRCxZQUFZTSxPQUFPLENBQUMsU0FBQ0MsWUFBZTtRQUNsQ0MsSUFBQUEsNENBQWdDLEVBQUNELFlBQVlGO0lBQy9DO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNmLCtCQUErQlEsSUFBSSxFQUErQjtRQUE3QlcseUJBQUFBLGlFQUF5QixFQUFFO0lBQzlFLElBQU1ULGNBQWNGLEtBQUtHLGNBQWM7SUFFdkNELFlBQVlNLE9BQU8sQ0FBQyxTQUFDQyxZQUFlO1FBQ2xDRyxJQUFBQSxnREFBb0MsRUFBQ0gsWUFBWUU7SUFDbkQ7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU04sK0JBQStCSCxXQUFXLEVBQUVELE9BQU8sRUFBRTtJQUM1RCxJQUFNRyw4QkFBOEJGLFlBQVlXLElBQUksQ0FBQyxTQUFDSixZQUFlO1FBQ25FLElBQU1LLDZCQUE2QkMsNkJBQTZCTixZQUFZUjtRQUU1RSxJQUFJYSw0QkFBNEI7WUFDOUIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUEsT0FBT1Y7QUFDVDtBQUVBLFNBQVNXLDZCQUE2Qk4sVUFBVSxFQUFFUixPQUFPLEVBQUU7SUFDekQsSUFBTWUsUUFBUVAsV0FBV1EsUUFBUSxJQUMzQkMsd0JBQXdCQyx5QkFBeUJILE9BQU9mLFVBQ3hEYSw2QkFBNkJJLHVCQUF1QixHQUFHO0lBRTdELE9BQU9KO0FBQ1Q7QUFFQSxTQUFTSyx5QkFBeUJILEtBQUssRUFBRWYsT0FBTyxFQUFFO0lBQ2hELElBQU1pQix3QkFBd0JGLE1BQU1JLEtBQUssQ0FBQyxTQUFDQyxNQUFTO1FBQ2xELElBQU1DLHVCQUF1QkMsdUJBQXVCRixNQUFNcEI7UUFFMUQsSUFBSXFCLHNCQUFzQjtZQUN4QixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFQSxPQUFPSjtBQUNUO0FBRUEsU0FBU0ssdUJBQXVCRixJQUFJLEVBQUVwQixPQUFPLEVBQUU7SUFDN0MsSUFBSXFCO0lBRUosSUFBTUUsa0JBQWtCSCxLQUFLSSxjQUFjO0lBRTNDLElBQUlELGlCQUFpQjtRQUNuQixJQUFNRSxlQUFlTCxNQUNmTSxvQkFBb0JDLCtCQUErQkY7UUFFekRKLHVCQUF1QkssbUJBQW1CLEdBQUc7SUFDL0MsT0FBTztRQUNMLElBQU1FLG1CQUFtQlIsTUFDbkJTLGtDQUFrQ0Msa0NBQWtDRixrQkFBa0I1QjtRQUU1RnFCLHVCQUF1QlEsaUNBQWlDLEdBQUc7SUFDN0QsQ0FBQztJQUVELE9BQU9SO0FBQ1Q7QUFFQSxTQUFTTSwrQkFBK0JGLFlBQVksRUFBRTtJQUNwRCxJQUFNTCxPQUFPSyxjQUNQTSxZQUFZQyxJQUFBQSxpQkFBVyxFQUFDWixPQUN4QmEsK0JBQStCRixXQUFXLEdBQUc7SUFFbkQsT0FBT0U7QUFDVDtBQUVBLFNBQVNILGtDQUFrQ0ksZUFBZSxFQUFFbEMsT0FBTyxFQUFFO0lBQ25FLElBQUlxQix1QkFBdUIsS0FBSztJQUVoQyxJQUFNYyxPQUFPRCxnQkFBZ0JFLE9BQU87SUFFcEMsT0FBUUQ7UUFDTixLQUFLM0M7WUFBa0I7Z0JBQ3JCLElBQU02QyxlQUFlSCxpQkFDZkksV0FBV0QsYUFBYUUsV0FBVyxJQUNuQ3hDLE9BQU9DLE9BQU8sQ0FBQ3NDLFNBQVMsSUFBSSxJQUFJO2dCQUV0QyxJQUFJdkMsU0FBUyxJQUFJLEVBQUU7b0JBQ2pCLElBQU1NLHVCQUF1QmhCLHVCQUF1QlUsTUFBTUM7b0JBRTFEcUIsdUJBQXVCaEIsc0JBQXVCLEdBQUc7Z0JBQ25ELENBQUM7Z0JBRUQsS0FBTTtZQUNSO1FBRUEsS0FBS1g7WUFBc0I7Z0JBQ3pCMkIsdUJBQXVCLElBQUk7Z0JBRTNCLEtBQU07WUFDUjtRQUVBLEtBQUt6QjtZQUF3QjtnQkFDM0IsSUFBTTRDLHFCQUFxQk4saUJBQ3JCZCxPQUFPb0IsbUJBQW1CQyxPQUFPO2dCQUV2Q3BCLHVCQUF1QkMsdUJBQXVCRixNQUFNcEI7Z0JBRXBELEtBQU07WUFDUjtRQUVBLEtBQUtIO1lBQXlCO2dCQUM1QndCLHVCQUF1QixJQUFJO2dCQUUzQixLQUFNO1lBQ1I7UUFFQSxLQUFLdkI7WUFBeUI7Z0JBQzVCLElBQU00QyxzQkFBc0JSLGlCQUN0Qm5CLFFBQVEyQixvQkFBb0IxQixRQUFRLElBQ3BDQyx3QkFBd0JDLHlCQUF5QkgsT0FBT2Y7Z0JBRTlEcUIsdUJBQXVCSix1QkFBdUIsR0FBRztnQkFFakQsS0FBTTtZQUNSO1FBRUEsS0FBS3RCO1lBQXVCO2dCQUMxQixJQUFNZ0Qsb0JBQW9CVCxpQkFDcEJuQixTQUFRNEIsa0JBQWtCM0IsUUFBUSxJQUNsQ0MseUJBQXdCRixPQUFNSCxJQUFJLENBQUMsU0FBQ1EsTUFBUztvQkFDM0MsSUFBTUMsdUJBQXVCQyx1QkFBdUJGLE1BQU1wQjtvQkFFMUQsT0FBT3FCO2dCQUNUO2dCQUVOQSx1QkFBdUJKLHdCQUF1QixHQUFHO2dCQUVqRCxLQUFNO1lBQ1I7SUFDRjtJQUVBLE9BQU9JO0FBQ1QifQ==