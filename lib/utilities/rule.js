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
    areDefinitionsEffectivelyUseless: function() {
        return areDefinitionsEffectivelyUseless;
    },
    isRuleEffectivelyEmpty: function() {
        return isRuleEffectivelyEmpty;
    },
    isRuleEffectivelyUseless: function() {
        return isRuleEffectivelyUseless;
    },
    leftRecursiveRuleNamesFromRule: function() {
        return leftRecursiveRuleNamesFromRule;
    },
    recursiveRuleNamesFromRule: function() {
        return recursiveRuleNamesFromRule;
    }
});
var _occamparsers = require("occam-parsers");
var _part = require("../utilities/part");
var _definition = require("../utilities/definition");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var RuleNamePartType = _occamparsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamparsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamparsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamparsers.partTypes.OneOrMorePartsPartType, ZeroOrMorePartsPartType = _occamparsers.partTypes.ZeroOrMorePartsPartType, SequenceOfPartsPartType = _occamparsers.partTypes.SequenceOfPartsPartType;
function isRuleEffectivelyEmpty(rule, ruleMap) {
    var ruleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var ruleEffectivelyEmpty = true;
    var ruleName = rule.getName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
    if (!ruleNamesIncludesRuleName) {
        ruleNames = _to_consumable_array(ruleNames).concat([
            ruleName
        ]);
        var definitions = rule.getDefinitions(), definitionsEffectivelyEmpty = areDefinitionsEffectivelyEmpty(definitions, ruleMap, ruleNames);
        ruleEffectivelyEmpty = definitionsEffectivelyEmpty; ///
    }
    return ruleEffectivelyEmpty;
}
function isRuleEffectivelyUseless(rule, ruleMap) {
    var ruleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var ruleEffectivelyUseless = true;
    var ruleName = rule.getName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
    if (!ruleNamesIncludesRuleName) {
        ruleNames = _to_consumable_array(ruleNames).concat([
            ruleName
        ]);
        var definitions = rule.getDefinitions(), definitionsEffectivelyUseless = areDefinitionsEffectivelyUseless(definitions, ruleMap, ruleNames);
        ruleEffectivelyUseless = definitionsEffectivelyUseless; ///
    }
    return ruleEffectivelyUseless;
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
function areDefinitionsEffectivelyUseless(definitions, ruleMap, ruleNames) {
    var definitionsEffectivelyUseless = definitions.every(function(definition) {
        var definitionEffectivelyUseless = isDefinitionEffectivelyUseless(definition, ruleMap, ruleNames);
        if (definitionEffectivelyUseless) {
            return true;
        }
    });
    return definitionsEffectivelyUseless;
}
function isDefinitionEffectivelyUseless(definition, ruleMap, ruleNames) {
    var parts = definition.getParts(), partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap, ruleNames), partsEffectivelyUseless = arePartsEffectivelyUseless(parts, ruleMap, ruleNames), definitionEffectivelyUseless = partsEffectivelyEmpty || partsEffectivelyUseless;
    return definitionEffectivelyUseless;
}
function arePartsEffectivelyUseless(parts, ruleMap, ruleNames) {
    var partsEffectivelyUseless = parts.some(function(part) {
        var partEffectivelyUseless = isPartEffectivelyUseless(part, ruleMap, ruleNames);
        if (partEffectivelyUseless) {
            return true;
        }
    });
    return partsEffectivelyUseless;
}
function isPartEffectivelyUseless(part, ruleMap, ruleNames) {
    var partEffectivelyUseless;
    var parTerminalPart = part.isTerminalPart();
    if (parTerminalPart) {
        var terminalPart = part, terminalPartUseless = isTerminalPartEffectivelyUseless(terminalPart);
        partEffectivelyUseless = terminalPartUseless; ///
    } else {
        var nonTerminalNPart = part, nonTerminalPartEffectivelyUseless = isNonTerminalPartEffectivelyUseless(nonTerminalNPart, ruleMap, ruleNames);
        partEffectivelyUseless = nonTerminalPartEffectivelyUseless; ///
    }
    return partEffectivelyUseless;
}
function isTerminalPartEffectivelyUseless(terminalPart) {
    var terminalPartEffectivelyUseless = false;
    return terminalPartEffectivelyUseless;
}
function isNonTerminalPartEffectivelyUseless(nonTerminalPart, ruleMap, ruleNames) {
    var partEffectivelyUseless = false;
    var type = nonTerminalPart.getType();
    switch(type){
        case RuleNamePartType:
            {
                var ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), rule = ruleMap[ruleName] || null;
                if (rule !== null) {
                    var ruleEffectivelyUseless = isRuleEffectivelyUseless(rule, ruleMap, ruleNames);
                    partEffectivelyUseless = ruleEffectivelyUseless; ///
                }
                break;
            }
        case OptionalPartPartType:
            {
                partEffectivelyUseless = false;
                break;
            }
        case OneOrMorePartsPartType:
            {
                var oneOrMorePartsPart = nonTerminalPart, part = oneOrMorePartsPart.getPart();
                partEffectivelyUseless = isPartEffectivelyUseless(part, ruleMap, ruleNames);
                break;
            }
        case ZeroOrMorePartsPartType:
            {
                partEffectivelyUseless = false;
                break;
            }
        case SequenceOfPartsPartType:
            {
                var sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts(), partsEffectivelyUseless = arePartsEffectivelyUseless(parts, ruleMap, ruleNames);
                partEffectivelyUseless = partsEffectivelyUseless; ///
                break;
            }
        case ChoiceOfPartsPartType:
            {
                var choiceOfPartsPart = nonTerminalPart, parts1 = choiceOfPartsPart.getParts(), partsEffectivelyUseless1 = parts1.every(function(part) {
                    var partEffectivelyUseless = isPartEffectivelyUseless(part, ruleMap, ruleNames);
                    return partEffectivelyUseless;
                });
                partEffectivelyUseless = partsEffectivelyUseless1; ///
                break;
            }
    }
    return partEffectivelyUseless;
}
function areDefinitionsEffectivelyEmpty(definitions, ruleMap, ruleNames) {
    var definitionsEffectivelyEmpty = definitions.some(function(definition) {
        var definitionEffectivelyEmpty = isDefinitionEffectivelyEmpty(definition, ruleMap, ruleNames);
        if (definitionEffectivelyEmpty) {
            return true;
        }
    });
    return definitionsEffectivelyEmpty;
}
function isDefinitionEffectivelyEmpty(definition, ruleMap, ruleNames) {
    var parts = definition.getParts(), partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap, ruleNames), definitionEffectivelyEmpty = partsEffectivelyEmpty; ///
    return definitionEffectivelyEmpty;
}
function arePartsEffectivelyEmpty(parts, ruleMap, ruleNames) {
    var partsEffectivelyEmpty = parts.every(function(part) {
        var partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap, ruleNames);
        if (partEffectivelyEmpty) {
            return true;
        }
    });
    return partsEffectivelyEmpty;
}
function isPartEffectivelyEmpty(part, ruleMap, ruleNames) {
    var partEffectivelyEmpty;
    var parTerminalPart = part.isTerminalPart();
    if (parTerminalPart) {
        var terminalPart = part, terminalPartEmpty = isTerminalPartEffectivelyEmpty(terminalPart);
        partEffectivelyEmpty = terminalPartEmpty; ///
    } else {
        var nonTerminalNPart = part, nonTerminalPartEffectivelyEmpty = isNonTerminalPartEffectivelyEmpty(nonTerminalNPart, ruleMap, ruleNames);
        partEffectivelyEmpty = nonTerminalPartEffectivelyEmpty; ///
    }
    return partEffectivelyEmpty;
}
function isTerminalPartEffectivelyEmpty(terminalPart) {
    var part = terminalPart, partEmpty = (0, _part.isPartEmpty)(part), terminalPartEffectivelyEmpty = partEmpty; ///
    return terminalPartEffectivelyEmpty;
}
function isNonTerminalPartEffectivelyEmpty(nonTerminalPart, ruleMap, ruleNames) {
    var partEffectivelyEmpty = false;
    var type = nonTerminalPart.getType();
    switch(type){
        case RuleNamePartType:
            {
                var ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), rule = ruleMap[ruleName] || null;
                if (rule !== null) {
                    var ruleEffectivelyEmpty = isRuleEffectivelyEmpty(rule, ruleMap, ruleNames);
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
                partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap, ruleNames);
                break;
            }
        case ZeroOrMorePartsPartType:
            {
                partEffectivelyEmpty = true;
                break;
            }
        case SequenceOfPartsPartType:
            {
                var sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts(), partsEffectivelyEmpty = arePartsEffectivelyEmpty(parts, ruleMap, ruleNames);
                partEffectivelyEmpty = partsEffectivelyEmpty; ///
                break;
            }
        case ChoiceOfPartsPartType:
            {
                var choiceOfPartsPart = nonTerminalPart, parts1 = choiceOfPartsPart.getParts(), partsEffectivelyEmpty1 = parts1.some(function(part) {
                    var partEffectivelyEmpty = isPartEffectivelyEmpty(part, ruleMap, ruleNames);
                    return partEffectivelyEmpty;
                });
                partEffectivelyEmpty = partsEffectivelyEmpty1; ///
                break;
            }
    }
    return partEffectivelyEmpty;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNQYXJ0RW1wdHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkocnVsZSwgcnVsZU1hcCwgcnVsZU5hbWVzID0gW10pIHtcbiAgbGV0IHJ1bGVFZmZlY3RpdmVseUVtcHR5ID0gdHJ1ZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5ID0gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb25zLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlRWZmZWN0aXZlbHlVc2VsZXNzKHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyA9IFtdKSB7XG4gIGxldCBydWxlRWZmZWN0aXZlbHlVc2VsZXNzID0gdHJ1ZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNFZmZlY3RpdmVseVVzZWxlc3MgPSBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyhkZWZpbml0aW9ucywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHJ1bGVFZmZlY3RpdmVseVVzZWxlc3MgPSBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzczsgLy8vXG4gIH1cblxuICByZXR1cm4gcnVsZUVmZmVjdGl2ZWx5VXNlbGVzcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzKGRlZmluaXRpb25zLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgZGVmaW5pdGlvbnNFZmZlY3RpdmVseVVzZWxlc3MgPSBkZWZpbml0aW9ucy5ldmVyeSgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb25FZmZlY3RpdmVseVVzZWxlc3MgPSBpc0RlZmluaXRpb25FZmZlY3RpdmVseVVzZWxlc3MoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChkZWZpbml0aW9uRWZmZWN0aXZlbHlVc2VsZXNzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcztcbn1cblxuZnVuY3Rpb24gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlVc2VsZXNzKGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpLFxuICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcyA9IGFyZVBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpLFxuICAgICAgICBkZWZpbml0aW9uRWZmZWN0aXZlbHlVc2VsZXNzID0gKHBhcnRzRWZmZWN0aXZlbHlFbXB0eSB8fCBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcyk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25FZmZlY3RpdmVseVVzZWxlc3M7XG59XG5cbmZ1bmN0aW9uIGFyZVBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHNFZmZlY3RpdmVseVVzZWxlc3MgPSBwYXJ0cy5zb21lKChwYXJ0KSA9PiB7XG4gICAgY29uc3QgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IGlzUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyhwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKHBhcnRFZmZlY3RpdmVseVVzZWxlc3MpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzO1xufVxuXG5mdW5jdGlvbiBpc1BhcnRFZmZlY3RpdmVseVVzZWxlc3MocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzO1xuXG4gIGNvbnN0IHBhclRlcm1pbmFsUGFydCA9IHBhcnQuaXNUZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFyVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsUGFydFVzZWxlc3MgPSBpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyh0ZXJtaW5hbFBhcnQpO1xuXG4gICAgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IHRlcm1pbmFsUGFydFVzZWxlc3M7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTlBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3Mobm9uVGVybWluYWxOUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3M7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseVVzZWxlc3M7XG59XG5cbmZ1bmN0aW9uIGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzKHRlcm1pbmFsUGFydCkge1xuICBjb25zdCB0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBmYWxzZTtcblxuICByZXR1cm4gdGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzO1xufVxuXG5mdW5jdGlvbiBpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyhub25UZXJtaW5hbFBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVFZmZlY3RpdmVseVVzZWxlc3MgPSBpc1J1bGVFZmZlY3RpdmVseVVzZWxlc3MocnVsZSwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gcnVsZUVmZmVjdGl2ZWx5VXNlbGVzczsgIC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gZmFsc2VcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gaXNQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBmYWxzZVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseVVzZWxlc3MgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcyhwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IHBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IGlzUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyhwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzO1xuICAgICAgICAgICAgfSlcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IHBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseVVzZWxlc3M7XG59XG5cbmZ1bmN0aW9uIGFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eShkZWZpbml0aW9ucywgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSA9IGRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSA9IGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpLFxuICAgICAgICBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgcmV0dXJuIGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgIGNvbnN0IHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eShwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKHBhcnRFZmZlY3RpdmVseUVtcHR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcblxuICBjb25zdCBwYXJUZXJtaW5hbFBhcnQgPSBwYXJ0LmlzVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhclRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnRFbXB0eSA9IGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSh0ZXJtaW5hbFBhcnQpO1xuXG4gICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0ZXJtaW5hbFBhcnRFbXB0eTsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KG5vblRlcm1pbmFsTlBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IG5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkodGVybWluYWxQYXJ0KSB7XG4gIGNvbnN0IHBhcnQgPSB0ZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgcGFydEVtcHR5ID0gaXNQYXJ0RW1wdHkocGFydCksXG4gICAgICAgIHRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0RW1wdHk7IC8vL1xuXG4gIHJldHVybiB0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkobm9uVGVybWluYWxQYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBpc1J1bGVFZmZlY3RpdmVseUVtcHR5KHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBydWxlRWZmZWN0aXZlbHlFbXB0eTsgIC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IGFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eShwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gcGFydHMuc29tZSgocGFydCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cbiJdLCJuYW1lcyI6WyJhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyIsImlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkiLCJpc1J1bGVFZmZlY3RpdmVseVVzZWxlc3MiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwicnVsZSIsInJ1bGVNYXAiLCJydWxlTmFtZXMiLCJydWxlRWZmZWN0aXZlbHlFbXB0eSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkiLCJhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkiLCJydWxlRWZmZWN0aXZlbHlVc2VsZXNzIiwiZGVmaW5pdGlvbnNFZmZlY3RpdmVseVVzZWxlc3MiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJmb3JFYWNoIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImV2ZXJ5IiwiZGVmaW5pdGlvbkVmZmVjdGl2ZWx5VXNlbGVzcyIsImlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5VXNlbGVzcyIsInBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkiLCJhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkiLCJwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcyIsImFyZVBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzIiwic29tZSIsInBhcnQiLCJwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzIiwiaXNQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzIiwicGFyVGVybWluYWxQYXJ0IiwiaXNUZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnRVc2VsZXNzIiwiaXNUZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3MiLCJub25UZXJtaW5hbE5QYXJ0Iiwibm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzIiwiaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3MiLCJ0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3MiLCJub25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsInJ1bGVOYW1lUGFydCIsImdldFJ1bGVOYW1lIiwib25lT3JNb3JlUGFydHNQYXJ0IiwiZ2V0UGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCIsImRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5IiwiaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSIsInBhcnRFZmZlY3RpdmVseUVtcHR5IiwiaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsInRlcm1pbmFsUGFydEVtcHR5IiwiaXNUZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5Iiwibm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsImlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsInBhcnRFbXB0eSIsImlzUGFydEVtcHR5IiwidGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNEVnQkEsZ0NBQWdDO2VBQWhDQTs7SUE5REFDLHNCQUFzQjtlQUF0QkE7O0lBcUJBQyx3QkFBd0I7ZUFBeEJBOztJQStCQUMsOEJBQThCO2VBQTlCQTs7SUFWQUMsMEJBQTBCO2VBQTFCQTs7OzRCQXREVTtvQkFFRTswQkFDMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZGLElBQVFDLG1CQUs0QkMsdUJBQVMsQ0FMckNELGtCQUNBRSx1QkFJNEJELHVCQUFTLENBSnJDQyxzQkFDQUMsd0JBRzRCRix1QkFBUyxDQUhyQ0UsdUJBQ0FDLHlCQUU0QkgsdUJBQVMs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