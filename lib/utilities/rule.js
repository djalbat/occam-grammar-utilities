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
    leftRecursiveRuleNamesFromRule: function() {
        return leftRecursiveRuleNamesFromRule;
    },
    recursiveRuleNamesFromRule: function() {
        return recursiveRuleNamesFromRule;
    }
});
var _occamparsers = require("occam-parsers");
var _part = require("./part");
var _definition = require("./definition");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNQYXJ0RW1wdHkgfSBmcm9tIFwiLi9wYXJ0XCI7XG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4vZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlRWZmZWN0aXZlbHlFbXB0eShydWxlLCBydWxlTWFwLCBydWxlTmFtZXMgPSBbXSkge1xuICBsZXQgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSB0cnVlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gIGlmICghcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgIHJ1bGVOYW1lcyA9IFsgLy8vXG4gICAgICAuLi5ydWxlTmFtZXMsXG4gICAgICBydWxlTmFtZVxuICAgIF07XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBydWxlRWZmZWN0aXZlbHlFbXB0eSA9IGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG4gIH1cblxuICByZXR1cm4gcnVsZUVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlLCByZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eShkZWZpbml0aW9ucywgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSA9IGRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSA9IGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpLFxuICAgICAgICBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgcmV0dXJuIGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgIGNvbnN0IHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eShwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKHBhcnRFZmZlY3RpdmVseUVtcHR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcblxuICBjb25zdCBwYXJUZXJtaW5hbFBhcnQgPSBwYXJ0LmlzVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhclRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnRFbXB0eSA9IGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSh0ZXJtaW5hbFBhcnQpO1xuXG4gICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0ZXJtaW5hbFBhcnRFbXB0eTsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KG5vblRlcm1pbmFsTlBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IG5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkodGVybWluYWxQYXJ0KSB7XG4gIGNvbnN0IHBhcnQgPSB0ZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgcGFydEVtcHR5ID0gaXNQYXJ0RW1wdHkocGFydCksXG4gICAgICAgIHRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0RW1wdHk7IC8vL1xuXG4gIHJldHVybiB0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkobm9uVGVybWluYWxQYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBpc1J1bGVFZmZlY3RpdmVseUVtcHR5KHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBydWxlRWZmZWN0aXZlbHlFbXB0eTsgIC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IGFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eShwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gcGFydHMuc29tZSgocGFydCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cbiJdLCJuYW1lcyI6WyJpc1J1bGVFZmZlY3RpdmVseUVtcHR5IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsInJ1bGUiLCJydWxlTWFwIiwicnVsZU5hbWVzIiwicnVsZUVmZmVjdGl2ZWx5RW1wdHkiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5IiwiYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5IiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZm9yRWFjaCIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJzb21lIiwiZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkiLCJpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5IiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzRWZmZWN0aXZlbHlFbXB0eSIsImFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eSIsImV2ZXJ5IiwicGFydCIsInBhcnRFZmZlY3RpdmVseUVtcHR5IiwiaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsInBhclRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0RW1wdHkiLCJpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJub25UZXJtaW5hbE5QYXJ0Iiwibm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsImlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsInBhcnRFbXB0eSIsImlzUGFydEVtcHR5IiwidGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwicnVsZU5hbWVQYXJ0IiwiZ2V0UnVsZU5hbWUiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJnZXRQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImNob2ljZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjZ0JBLHNCQUFzQjtlQUF0QkE7O0lBK0JBQyw4QkFBOEI7ZUFBOUJBOztJQVZBQywwQkFBMEI7ZUFBMUJBOzs7NEJBakNVO29CQUVFOzBCQUMyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkYsSUFBUUMsbUJBSzRCQyx1QkFBUyxDQUxyQ0Qsa0JBQ0FFLHVCQUk0QkQsdUJBQVMsQ0FKckNDLHNCQUNBQyx3QkFHNEJGLHVCQUFTLENBSHJDRSx1QkFDQUMseUJBRTRCSCx1QkFBUyxDQUZyQ0csd0JBQ0FDLDBCQUM0QkosdUJBQVMsQ0FEckNJLHlCQUNBQywwQkFBNEJMLHVCQUFTLENBQXJDSztBQUVELFNBQVNULHVCQUF1QlUsSUFBSSxFQUFFQyxPQUFPO1FBQUVDLFlBQUFBLGlFQUFZLEVBQUU7SUFDbEUsSUFBSUMsdUJBQXVCO0lBRTNCLElBQU1DLFdBQVdKLEtBQUtLLE9BQU8sSUFDdkJDLDRCQUE0QkosVUFBVUssUUFBUSxDQUFDSDtJQUVyRCxJQUFJLENBQUNFLDJCQUEyQjtRQUM5QkosWUFBWSxBQUNWLHFCQUFHQSxrQkFETztZQUVWRTtTQUNEO1FBRUQsSUFBTUksY0FBY1IsS0FBS1MsY0FBYyxJQUNqQ0MsOEJBQThCQywrQkFBK0JILGFBQWFQLFNBQVNDO1FBRXpGQyx1QkFBdUJPLDZCQUE2QixHQUFHO0lBQ3pEO0lBRUEsT0FBT1A7QUFDVDtBQUVPLFNBQVNYLDJCQUEyQlEsSUFBSTtRQUFFWSxxQkFBQUEsaUVBQXFCLEVBQUU7SUFD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