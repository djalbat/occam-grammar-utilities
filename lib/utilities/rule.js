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
    var parts = definition.getParts(), partsEffectivelyUseless = arePartsEffectivelyUseless(parts, ruleMap, ruleNames), definitionEffectivelyUseless = partsEffectivelyUseless; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNQYXJ0RW1wdHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkocnVsZSwgcnVsZU1hcCwgcnVsZU5hbWVzID0gW10pIHtcbiAgbGV0IHJ1bGVFZmZlY3RpdmVseUVtcHR5ID0gdHJ1ZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5ID0gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb25zLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlRWZmZWN0aXZlbHlVc2VsZXNzKHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyA9IFtdKSB7XG4gIGxldCBydWxlRWZmZWN0aXZlbHlVc2VsZXNzID0gdHJ1ZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNFZmZlY3RpdmVseVVzZWxlc3MgPSBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyhkZWZpbml0aW9ucywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHJ1bGVFZmZlY3RpdmVseVVzZWxlc3MgPSBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzczsgLy8vXG4gIH1cblxuICByZXR1cm4gcnVsZUVmZmVjdGl2ZWx5VXNlbGVzcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZnVuY3Rpb24gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseVVzZWxlc3MoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyA9IGRlZmluaXRpb25zLmV2ZXJ5KChkZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbkVmZmVjdGl2ZWx5VXNlbGVzcyA9IGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5VXNlbGVzcyhkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKGRlZmluaXRpb25FZmZlY3RpdmVseVVzZWxlc3MpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluaXRpb25FZmZlY3RpdmVseVVzZWxlc3MoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcyA9IGFyZVBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpLFxuICAgICAgICBkZWZpbml0aW9uRWZmZWN0aXZlbHlVc2VsZXNzID0gcGFydHNFZmZlY3RpdmVseVVzZWxlc3M7IC8vL1xuXG4gIHJldHVybiBkZWZpbml0aW9uRWZmZWN0aXZlbHlVc2VsZXNzO1xufVxuXG5mdW5jdGlvbiBhcmVQYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcyhwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzID0gcGFydHMuc29tZSgocGFydCkgPT4ge1xuICAgIGNvbnN0IHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBpc1BhcnRFZmZlY3RpdmVseVVzZWxlc3MocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcztcbn1cblxuZnVuY3Rpb24gaXNQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcztcblxuICBjb25zdCBwYXJUZXJtaW5hbFBhcnQgPSBwYXJ0LmlzVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhclRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnRVc2VsZXNzID0gaXNUZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3ModGVybWluYWxQYXJ0KTtcblxuICAgIHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSB0ZXJtaW5hbFBhcnRVc2VsZXNzOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5QYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IGlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzKG5vblRlcm1pbmFsTlBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gbm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzO1xufVxuXG5mdW5jdGlvbiBpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyh0ZXJtaW5hbFBhcnQpIHtcbiAgY29uc3QgdGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gZmFsc2U7XG5cbiAgcmV0dXJuIHRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcztcbn1cblxuZnVuY3Rpb24gaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3Mobm9uVGVybWluYWxQYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlRWZmZWN0aXZlbHlVc2VsZXNzID0gaXNSdWxlRWZmZWN0aXZlbHlVc2VsZXNzKHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IHJ1bGVFZmZlY3RpdmVseVVzZWxlc3M7ICAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IGZhbHNlXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IGlzUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyhwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gZmFsc2VcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzID0gYXJlUGFydHNFZmZlY3RpdmVseVVzZWxlc3MocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzczsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcyA9IHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBpc1BhcnRFZmZlY3RpdmVseVVzZWxlc3MocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5VXNlbGVzcztcbiAgICAgICAgICAgIH0pXG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzczsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzO1xufVxuXG5mdW5jdGlvbiBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkgPSBkZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkgPSBpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eShkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgIHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IGFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eShwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSxcbiAgICAgICAgZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gIHJldHVybiBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChwYXJ0RWZmZWN0aXZlbHlFbXB0eSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG5cbiAgY29uc3QgcGFyVGVybWluYWxQYXJ0ID0gcGFydC5pc1Rlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJUZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgdGVybWluYWxQYXJ0RW1wdHkgPSBpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkodGVybWluYWxQYXJ0KTtcblxuICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gdGVybWluYWxQYXJ0RW1wdHk7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTlBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eShub25UZXJtaW5hbE5QYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNUZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KHRlcm1pbmFsUGFydCkge1xuICBjb25zdCBwYXJ0ID0gdGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgIHBhcnRFbXB0eSA9IGlzUGFydEVtcHR5KHBhcnQpLFxuICAgICAgICB0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5ID0gcGFydEVtcHR5OyAvLy9cblxuICByZXR1cm4gdGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KG5vblRlcm1pbmFsUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVFZmZlY3RpdmVseUVtcHR5ID0gaXNSdWxlRWZmZWN0aXZlbHlFbXB0eShydWxlLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gcnVsZUVmZmVjdGl2ZWx5RW1wdHk7ICAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eShwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gcGFydHNFZmZlY3RpdmVseUVtcHR5OyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzLnNvbWUoKHBhcnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseUVtcHR5O1xuICAgICAgICAgICAgfSlcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG59XG4iXSwibmFtZXMiOlsiaXNSdWxlRWZmZWN0aXZlbHlFbXB0eSIsImlzUnVsZUVmZmVjdGl2ZWx5VXNlbGVzcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJydWxlIiwicnVsZU1hcCIsInJ1bGVOYW1lcyIsInJ1bGVFZmZlY3RpdmVseUVtcHR5IiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSIsImFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSIsInJ1bGVFZmZlY3RpdmVseVVzZWxlc3MiLCJkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyIsImFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZm9yRWFjaCIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJldmVyeSIsImRlZmluaXRpb25FZmZlY3RpdmVseVVzZWxlc3MiLCJpc0RlZmluaXRpb25FZmZlY3RpdmVseVVzZWxlc3MiLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNFZmZlY3RpdmVseVVzZWxlc3MiLCJhcmVQYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcyIsInNvbWUiLCJwYXJ0IiwicGFydEVmZmVjdGl2ZWx5VXNlbGVzcyIsImlzUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyIsInBhclRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0VXNlbGVzcyIsImlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzIiwibm9uVGVybWluYWxOUGFydCIsIm5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyIsImlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzIiwidGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzIiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTmFtZVBhcnQiLCJnZXRSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsImdldFBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSIsImlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkiLCJwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkiLCJhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkiLCJwYXJ0RWZmZWN0aXZlbHlFbXB0eSIsImlzUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJ0ZXJtaW5hbFBhcnRFbXB0eSIsImlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsIm5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJwYXJ0RW1wdHkiLCJpc1BhcnRFbXB0eSIsInRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNnQkEsc0JBQXNCO2VBQXRCQTs7SUFxQkFDLHdCQUF3QjtlQUF4QkE7O0lBK0JBQyw4QkFBOEI7ZUFBOUJBOztJQVZBQywwQkFBMEI7ZUFBMUJBOzs7NEJBdERVO29CQUVFOzBCQUMyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkYsSUFBUUMsbUJBSzRCQyx1QkFBUyxDQUxyQ0Qsa0JBQ0FFLHVCQUk0QkQsdUJBQVMsQ0FKckNDLHNCQUNBQyx3QkFHNEJGLHVCQUFTLENBSHJDRSx1QkFDQUMseUJBRTRCSCx1QkFBUyxDQUZyQ0csd0JBQ0FDLDBCQUM0QkosdUJBQVMsQ0FEckNJLHlCQUNBQywwQkFBNEJMLHVCQUFTLENBQXJDSztBQUVELFNBQVNWLHVCQUF1QlcsSUFBSSxFQUFFQyxPQUFPO1FBQUVDLFlBQUFBLGlFQUFZLEVBQUU7SUFDbEUsSUFBSUMsdUJBQXVC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