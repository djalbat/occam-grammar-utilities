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
var _occamlexers = require("occam-lexers");
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
var epsilon = _occamlexers.specialSymbols.epsilon, noWhitespace = _occamlexers.specialSymbols.noWhitespace, startOfContent = _occamlexers.specialSymbols.startOfContent, RuleNamePartType = _occamparsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamparsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamparsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamparsers.partTypes.OneOrMorePartsPartType, ZeroOrMorePartsPartType = _occamparsers.partTypes.ZeroOrMorePartsPartType, SequenceOfPartsPartType = _occamparsers.partTypes.SequenceOfPartsPartType;
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
        var terminalPart = part, terminalPartEffectivelyEmpty = isTerminalPartEffectivelyEmpty(terminalPart);
        partEffectivelyEmpty = terminalPartEffectivelyEmpty; ///
    } else {
        var nonTerminalNPart = part, nonTerminalPartEffectivelyEmpty = isNonTerminalPartEffectivelyEmpty(nonTerminalNPart, ruleMap, ruleNames);
        partEffectivelyEmpty = nonTerminalPartEffectivelyEmpty; ///
    }
    return partEffectivelyEmpty;
}
function isTerminalPartEffectivelyEmpty(terminalPart) {
    var terminalPartString = terminalPart.asString(), terminalPartStringEpsilon = terminalPartString === epsilon, terminalPartEpsilonPart = terminalPartStringEpsilon, terminalPartEffectivelyEmpty = terminalPartEpsilonPart; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiwgbm9XaGl0ZXNwYWNlLCBzdGFydE9mQ29udGVudCB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlRWZmZWN0aXZlbHlFbXB0eShydWxlLCBydWxlTWFwLCBydWxlTmFtZXMgPSBbXSkge1xuICBsZXQgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSB0cnVlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gIGlmICghcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgIHJ1bGVOYW1lcyA9IFsgLy8vXG4gICAgICAuLi5ydWxlTmFtZXMsXG4gICAgICBydWxlTmFtZVxuICAgIF07XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBydWxlRWZmZWN0aXZlbHlFbXB0eSA9IGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG4gIH1cblxuICByZXR1cm4gcnVsZUVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1J1bGVFZmZlY3RpdmVseVVzZWxlc3MocnVsZSwgcnVsZU1hcCwgcnVsZU5hbWVzID0gW10pIHtcbiAgbGV0IHJ1bGVFZmZlY3RpdmVseVVzZWxlc3MgPSB0cnVlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gIGlmICghcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgIHJ1bGVOYW1lcyA9IFsgLy8vXG4gICAgICAuLi5ydWxlTmFtZXMsXG4gICAgICBydWxlTmFtZVxuICAgIF07XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyA9IGFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzKGRlZmluaXRpb25zLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcnVsZUVmZmVjdGl2ZWx5VXNlbGVzcyA9IGRlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzOyAvLy9cbiAgfVxuXG4gIHJldHVybiBydWxlRWZmZWN0aXZlbHlVc2VsZXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUocnVsZSwgcmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseVVzZWxlc3MoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyA9IGRlZmluaXRpb25zLmV2ZXJ5KChkZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbkVmZmVjdGl2ZWx5VXNlbGVzcyA9IGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5VXNlbGVzcyhkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKGRlZmluaXRpb25FZmZlY3RpdmVseVVzZWxlc3MpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluaXRpb25FZmZlY3RpdmVseVVzZWxlc3MoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyksXG4gICAgICAgIHBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzID0gYXJlUGFydHNFZmZlY3RpdmVseVVzZWxlc3MocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyksXG4gICAgICAgIGRlZmluaXRpb25FZmZlY3RpdmVseVVzZWxlc3MgPSAocGFydHNFZmZlY3RpdmVseUVtcHR5IHx8IHBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzKTtcblxuICByZXR1cm4gZGVmaW5pdGlvbkVmZmVjdGl2ZWx5VXNlbGVzcztcbn1cblxuZnVuY3Rpb24gYXJlUGFydHNFZmZlY3RpdmVseVVzZWxlc3MocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcyA9IHBhcnRzLnNvbWUoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gaXNQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBpZiAocGFydEVmZmVjdGl2ZWx5VXNlbGVzcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNFZmZlY3RpdmVseVVzZWxlc3M7XG59XG5cbmZ1bmN0aW9uIGlzUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyhwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseVVzZWxlc3M7XG5cbiAgY29uc3QgcGFyVGVybWluYWxQYXJ0ID0gcGFydC5pc1Rlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJUZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgdGVybWluYWxQYXJ0VXNlbGVzcyA9IGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzKHRlcm1pbmFsUGFydCk7XG5cbiAgICBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gdGVybWluYWxQYXJ0VXNlbGVzczsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyhub25UZXJtaW5hbE5QYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IG5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzczsgLy8vXG4gIH1cblxuICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5VXNlbGVzcztcbn1cblxuZnVuY3Rpb24gaXNUZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3ModGVybWluYWxQYXJ0KSB7XG4gIGNvbnN0IHRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyA9IGZhbHNlO1xuXG4gIHJldHVybiB0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3M7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzKG5vblRlcm1pbmFsUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZUVmZmVjdGl2ZWx5VXNlbGVzcyA9IGlzUnVsZUVmZmVjdGl2ZWx5VXNlbGVzcyhydWxlLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICAgIHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBydWxlRWZmZWN0aXZlbHlVc2VsZXNzOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBmYWxzZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzID0gaXNQYXJ0RWZmZWN0aXZlbHlVc2VsZXNzKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBmYWxzZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzID0gYXJlUGFydHNFZmZlY3RpdmVseVVzZWxlc3MocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzczsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzcyA9IHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBpc1BhcnRFZmZlY3RpdmVseVVzZWxlc3MocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5VXNlbGVzcztcbiAgICAgICAgICAgIH0pXG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseVVzZWxlc3MgPSBwYXJ0c0VmZmVjdGl2ZWx5VXNlbGVzczsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlVc2VsZXNzO1xufVxuXG5mdW5jdGlvbiBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkgPSBkZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkgPSBpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eShkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgIHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IGFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eShwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSxcbiAgICAgICAgZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gIHJldHVybiBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChwYXJ0RWZmZWN0aXZlbHlFbXB0eSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG5cbiAgY29uc3QgcGFyVGVybWluYWxQYXJ0ID0gcGFydC5pc1Rlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJUZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgdGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSh0ZXJtaW5hbFBhcnQpO1xuXG4gICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5QYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkobm9uVGVybWluYWxOUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gbm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eTsgLy8vXG4gIH1cblxuICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSh0ZXJtaW5hbFBhcnQpIHtcbiAgY29uc3QgdGVybWluYWxQYXJ0U3RyaW5nID0gdGVybWluYWxQYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgIHRlcm1pbmFsUGFydFN0cmluZ0Vwc2lsb24gPSAodGVybWluYWxQYXJ0U3RyaW5nID09PSBlcHNpbG9uKSxcbiAgICAgICAgdGVybWluYWxQYXJ0RXBzaWxvblBhcnQgPSB0ZXJtaW5hbFBhcnRTdHJpbmdFcHNpbG9uLCAgLy8vXG4gICAgICAgIHRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0ZXJtaW5hbFBhcnRFcHNpbG9uUGFydDsgIC8vL1xuXG4gIHJldHVybiB0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkobm9uVGVybWluYWxQYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBpc1J1bGVFZmZlY3RpdmVseUVtcHR5KHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBydWxlRWZmZWN0aXZlbHlFbXB0eTsgIC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IGFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eShwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gcGFydHMuc29tZSgocGFydCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cbiJdLCJuYW1lcyI6WyJhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyIsImlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkiLCJpc1J1bGVFZmZlY3RpdmVseVVzZWxlc3MiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImVwc2lsb24iLCJzcGVjaWFsU3ltYm9scyIsIm5vV2hpdGVzcGFjZSIsInN0YXJ0T2ZDb250ZW50IiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJydWxlIiwicnVsZU1hcCIsInJ1bGVOYW1lcyIsInJ1bGVFZmZlY3RpdmVseUVtcHR5IiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSIsImFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSIsInJ1bGVFZmZlY3RpdmVseVVzZWxlc3MiLCJkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZvckVhY2giLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZXZlcnkiLCJkZWZpbml0aW9uRWZmZWN0aXZlbHlVc2VsZXNzIiwiaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlVc2VsZXNzIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzRWZmZWN0aXZlbHlFbXB0eSIsImFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eSIsInBhcnRzRWZmZWN0aXZlbHlVc2VsZXNzIiwiYXJlUGFydHNFZmZlY3RpdmVseVVzZWxlc3MiLCJzb21lIiwicGFydCIsInBhcnRFZmZlY3RpdmVseVVzZWxlc3MiLCJpc1BhcnRFZmZlY3RpdmVseVVzZWxlc3MiLCJwYXJUZXJtaW5hbFBhcnQiLCJpc1Rlcm1pbmFsUGFydCIsInRlcm1pbmFsUGFydCIsInRlcm1pbmFsUGFydFVzZWxlc3MiLCJpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyIsIm5vblRlcm1pbmFsTlBhcnQiLCJub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseVVzZWxlc3MiLCJpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyIsInRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5VXNlbGVzcyIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwicnVsZU5hbWVQYXJ0IiwiZ2V0UnVsZU5hbWUiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJnZXRQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImNob2ljZU9mUGFydHNQYXJ0IiwiZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkiLCJpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5IiwicGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJpc1BhcnRFZmZlY3RpdmVseUVtcHR5IiwidGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsImlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsIm5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJ0ZXJtaW5hbFBhcnRTdHJpbmciLCJhc1N0cmluZyIsInRlcm1pbmFsUGFydFN0cmluZ0Vwc2lsb24iLCJ0ZXJtaW5hbFBhcnRFcHNpbG9uUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNkVnQkEsZ0NBQWdDO2VBQWhDQTs7SUE5REFDLHNCQUFzQjtlQUF0QkE7O0lBcUJBQyx3QkFBd0I7ZUFBeEJBOztJQStCQUMsOEJBQThCO2VBQTlCQTs7SUFWQUMsMEJBQTBCO2VBQTFCQTs7OzRCQXZEVTsyQkFDSzswQkFFd0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZGLElBQVFDLFVBQTBDQywyQkFBYyxDQUF4REQsU0FBU0UsZUFBaUNELDJCQUFjLENBQS9DQyxjQUFjQyxpQkFBbUJGLDJCQUFjLENBQWpDRSxnQkFDdkJDLG1CQUs0QkMsdUJBQVMsQ0FMckNELGtCQUNBRSx1QkFJNEJELHVCQUFTLENBSnJDQyxzQkFDQUMsd0JBRzRCRix1QkFBUyxDQUhyQ0UsdUJBQ0FDLHlCQUU0QkgsdUJBQVMsQ0FGckNHLHdCQUNBQywwQkFDNEJKLHVCQUFTLENBRHJDSSx5QkFDQUMsMEJBQTRCTCx1QkFBUyxDQUFyQ0s7QUFFRCxTQUFTZCx1QkFBdUJlLElBQUksRUFBRUMsT0FBTztRQUFFQyxZQUFBQSxpRUFBWSxFQUFFO0lBQ2xFLElBQUlDLHVCQUF1QjtJQUUzQixJQUFNQyxXQUFXSixLQUFLSyxPQUFPLElBQ3ZCQyw0QkFBNEJKLFVBQVVLLFFBQVEsQ0FBQ0g7SUFFckQsSUFBSSxDQUFDRSwyQkFBMkI7UUFDOUJKLFlBQVksQUFDVixxQkFBR0Esa0JBRE87WUFFVkU7U0FDRDtRQUVELElBQU1JLGNBQWNSLEtBQUtTLGNBQWMsSUFDakNDLDhCQUE4QkMsK0JBQStCSCxhQUFhUCxTQUFTQztRQUV6RkMsdUJBQXVCTyw2QkFBNkIsR0FBRztJQUN6RDtJQUVBLE9BQU9QO0FBQ1Q7QUFFTyxTQUFTakIseUJBQXlCYyxJQUFJLEVBQUVDLE9BQU87UUFBRUMsWUFBQUEsaUVBQVksRUFBRTtJQUNwRSxJQUFJVSx5QkFBeUI7SUFFN0IsSUFBTVIsV0FBV0osS0FBS0ssT0FBTyxJQUN2QkMsNEJBQTRCSixVQUFVSyxRQUFRLENBQUNIO0lBRXJELElBQUksQ0FBQ0UsMkJBQTJCO1FBQzlCSixZQUFZLEFBQ1YscUJBQUdBLGtCQURPO1lBRVZFO1NBQ0Q7UUFFRCxJQUFNSSxjQUFjUixLQUFLUyxjQUFjLElBQ2pDSSxnQ0FBZ0M3QixpQ0FBaUN3QixhQUFhUCxTQUFTQztRQUU3RlUseUJBQXlCQywrQkFBK0IsR0FBRztJQUM3RDtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTeEIsMkJBQTJCWSxJQUFJO1FBQUVjLHFCQUFBQSxpRUFBcUIsRUFBRTtJQUN0RSxJQUFNTixjQUFjUixLQUFLUyxjQUFjO0lBRXZDRCxZQUFZTyxPQUFPLENBQUMsU0FBQ0M7UUFDbkJDLElBQUFBLDRDQUFnQyxFQUFDRCxZQUFZRjtJQUMvQztJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTM0IsK0JBQStCYSxJQUFJO1FBQUVrQix5QkFBQUEsaUVBQXlCLEVBQUU7SUFDOUUsSUFBTVYsY0FBY1IsS0FBS1MsY0FBYztJQUV2Q0QsWUFBWU8sT0FBTyxDQUFDLFNBQUNDO1FBQ25CRyxJQUFBQSxnREFBb0MsRUFBQ0gsWUFBWUU7SUFDbkQ7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU2xDLGlDQUFpQ3dCLFdBQVcsRUFBRVAsT0FBTyxFQUFFQyxTQUFTO0lBQzlFLElBQU1XLGdDQUFnQ0wsWUFBWVksS0FBSyxDQUFDLFNBQUNKO1FBQ3ZELElBQU1LLCtCQUErQkMsK0JBQStCTixZQUFZZixTQUFTQztRQUV6RixJQUFJbUIsOEJBQThCO1lBQ2hDLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT1I7QUFDVDtBQUVBLFNBQVNTLCtCQUErQk4sVUFBVSxFQUFFZixPQUFPLEVBQUVDLFNBQVM7SUFDcEUsSUFBTXFCLFFBQVFQLFdBQVdRLFFBQVEsSUFDM0JDLHdCQUF3QkMseUJBQXlCSCxPQUFPdEIsU0FBU0MsWUFDakV5QiwwQkFBMEJDLDJCQUEyQkwsT0FBT3RCLFNBQVNDLFlBQ3JFbUIsK0JBQWdDSSx5QkFBeUJFO0lBRS9ELE9BQU9OO0FBQ1Q7QUFFQSxTQUFTTywyQkFBMkJMLEtBQUssRUFBRXRCLE9BQU8sRUFBRUMsU0FBUztJQUMzRCxJQUFNeUIsMEJBQTBCSixNQUFNTSxJQUFJLENBQUMsU0FBQ0M7UUFDMUMsSUFBTUMseUJBQXlCQyx5QkFBeUJGLE1BQU03QixTQUFTQztRQUV2RSxJQUFJNkIsd0JBQXdCO1lBQzFCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0o7QUFDVDtBQUVBLFNBQVNLLHlCQUF5QkYsSUFBSSxFQUFFN0IsT0FBTyxFQUFFQyxTQUFTO0lBQ3hELElBQUk2QjtJQUVKLElBQU1FLGtCQUFrQkgsS0FBS0ksY0FBYztJQUUzQyxJQUFJRCxpQkFBaUI7UUFDbkIsSUFBTUUsZUFBZUwsTUFDZk0sc0JBQXNCQyxpQ0FBaUNGO1FBRTdESix5QkFBeUJLLHFCQUFxQixHQUFHO0lBQ25ELE9BQU87UUFDTCxJQUFNRSxtQkFBbUJSLE1BQ25CUyxvQ0FBb0NDLG9DQUFvQ0Ysa0JBQWtCckMsU0FBU0M7UUFFekc2Qix5QkFBeUJRLG1DQUFtQyxHQUFHO0lBQ2pFO0lBRUEsT0FBT1I7QUFDVDtBQUVBLFNBQVNNLGlDQUFpQ0YsWUFBWTtJQUNwRCxJQUFNTSxpQ0FBaUM7SUFFdkMsT0FBT0E7QUFDVDtBQUVBLFNBQVNELG9DQUFvQ0UsZUFBZSxFQUFFekMsT0FBTyxFQUFFQyxTQUFTO0lBQzlFLElBQUk2Qix5QkFBeUI7SUFFN0IsSUFBTVksT0FBT0QsZ0JBQWdCRSxPQUFPO0lBRXBDLE9BQVFEO1FBQ04sS0FBS2xEO1lBQWtCO2dCQUNyQixJQUFNb0QsZUFBZUgsaUJBQ2Z0QyxXQUFXeUMsYUFBYUMsV0FBVyxJQUNuQzlDLE9BQU9DLE9BQU8sQ0FBQ0csU0FBUyxJQUFJO2dCQUVsQyxJQUFJSixTQUFTLE1BQU07b0JBQ2pCLElBQU1ZLHlCQUF5QjFCLHlCQUF5QmMsTUFBTUMsU0FBU0M7b0JBRXZFNkIseUJBQXlCbkIsd0JBQXlCLEdBQUc7Z0JBQ3ZEO2dCQUVBO1lBQ0Y7UUFFQSxLQUFLakI7WUFBc0I7Z0JBQ3pCb0MseUJBQXlCO2dCQUV6QjtZQUNGO1FBRUEsS0FBS2xDO1lBQXdCO2dCQUMzQixJQUFNa0QscUJBQXFCTCxpQkFDckJaLE9BQU9pQixtQkFBbUJDLE9BQU87Z0JBRXZDakIseUJBQXlCQyx5QkFBeUJGLE1BQU03QixTQUFTQztnQkFFakU7WUFDRjtRQUVBLEtBQUtKO1lBQXlCO2dCQUM1QmlDLHlCQUF5QjtnQkFFekI7WUFDRjtRQUVBLEtBQUtoQztZQUF5QjtnQkFDNUIsSUFBTWtELHNCQUFzQlAsaUJBQ3RCbkIsUUFBUTBCLG9CQUFvQnpCLFFBQVEsSUFDcENHLDBCQUEwQkMsMkJBQTJCTCxPQUFPdEIsU0FBU0M7Z0JBRTNFNkIseUJBQXlCSix5QkFBeUIsR0FBRztnQkFFckQ7WUFDRjtRQUVBLEtBQUsvQjtZQUF1QjtnQkFDMUIsSUFBTXNELG9CQUFvQlIsaUJBQ3BCbkIsU0FBUTJCLGtCQUFrQjFCLFFBQVEsSUFDbENHLDJCQUEwQkosT0FBTUgsS0FBSyxDQUFDLFNBQUNVO29CQUNyQyxJQUFNQyx5QkFBeUJDLHlCQUF5QkYsTUFBTTdCLFNBQVNDO29CQUV2RSxPQUFPNkI7Z0JBQ1Q7Z0JBRU5BLHlCQUF5QkosMEJBQXlCLEdBQUc7Z0JBRXJEO1lBQ0Y7SUFDRjtJQUVBLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTcEIsK0JBQStCSCxXQUFXLEVBQUVQLE9BQU8sRUFBRUMsU0FBUztJQUNyRSxJQUFNUSw4QkFBOEJGLFlBQVlxQixJQUFJLENBQUMsU0FBQ2I7UUFDcEQsSUFBTW1DLDZCQUE2QkMsNkJBQTZCcEMsWUFBWWYsU0FBU0M7UUFFckYsSUFBSWlELDRCQUE0QjtZQUM5QixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU96QztBQUNUO0FBRUEsU0FBUzBDLDZCQUE2QnBDLFVBQVUsRUFBRWYsT0FBTyxFQUFFQyxTQUFTO0lBQ2xFLElBQU1xQixRQUFRUCxXQUFXUSxRQUFRLElBQzNCQyx3QkFBd0JDLHlCQUF5QkgsT0FBT3RCLFNBQVNDLFlBQ2pFaUQsNkJBQTZCMUIsdUJBQXVCLEdBQUc7SUFFN0QsT0FBTzBCO0FBQ1Q7QUFFQSxTQUFTekIseUJBQXlCSCxLQUFLLEVBQUV0QixPQUFPLEVBQUVDLFNBQVM7SUFDekQsSUFBTXVCLHdCQUF3QkYsTUFBTUgsS0FBSyxDQUFDLFNBQUNVO1FBQ3pDLElBQU11Qix1QkFBdUJDLHVCQUF1QnhCLE1BQU03QixTQUFTQztRQUVuRSxJQUFJbUQsc0JBQXNCO1lBQ3hCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBTzVCO0FBQ1Q7QUFFQSxTQUFTNkIsdUJBQXVCeEIsSUFBSSxFQUFFN0IsT0FBTyxFQUFFQyxTQUFTO0lBQ3RELElBQUltRDtJQUVKLElBQU1wQixrQkFBa0JILEtBQUtJLGNBQWM7SUFFM0MsSUFBSUQsaUJBQWlCO1FBQ25CLElBQU1FLGVBQWVMLE1BQ2Z5QiwrQkFBK0JDLCtCQUErQnJCO1FBRXBFa0IsdUJBQXVCRSw4QkFBOEIsR0FBRztJQUMxRCxPQUFPO1FBQ0wsSUFBTWpCLG1CQUFtQlIsTUFDbkIyQixrQ0FBa0NDLGtDQUFrQ3BCLGtCQUFrQnJDLFNBQVNDO1FBRXJHbUQsdUJBQXVCSSxpQ0FBaUMsR0FBRztJQUM3RDtJQUVBLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTRywrQkFBK0JyQixZQUFZO0lBQ2xELElBQU13QixxQkFBcUJ4QixhQUFheUIsUUFBUSxJQUMxQ0MsNEJBQTZCRix1QkFBdUJ0RSxTQUNwRHlFLDBCQUEwQkQsMkJBQzFCTiwrQkFBK0JPLHlCQUEwQixHQUFHO0lBRWxFLE9BQU9QO0FBQ1Q7QUFFQSxTQUFTRyxrQ0FBa0NoQixlQUFlLEVBQUV6QyxPQUFPLEVBQUVDLFNBQVM7SUFDNUUsSUFBSW1ELHVCQUF1QjtJQUUzQixJQUFNVixPQUFPRCxnQkFBZ0JFLE9BQU87SUFFcEMsT0FBUUQ7UUFDTixLQUFLbEQ7WUFBa0I7Z0JBQ3JCLElBQU1vRCxlQUFlSCxpQkFDZnRDLFdBQVd5QyxhQUFhQyxXQUFXLElBQ25DOUMsT0FBT0MsT0FBTyxDQUFDRyxTQUFTLElBQUk7Z0JBRWxDLElBQUlKLFNBQVMsTUFBTTtvQkFDakIsSUFBTUcsdUJBQXVCbEIsdUJBQXVCZSxNQUFNQyxTQUFTQztvQkFFbkVtRCx1QkFBdUJsRCxzQkFBdUIsR0FBRztnQkFDbkQ7Z0JBRUE7WUFDRjtRQUVBLEtBQUtSO1lBQXNCO2dCQUN6QjBELHVCQUF1QjtnQkFFdkI7WUFDRjtRQUVBLEtBQUt4RDtZQUF3QjtnQkFDM0IsSUFBTWtELHFCQUFxQkwsaUJBQ3JCWixPQUFPaUIsbUJBQW1CQyxPQUFPO2dCQUV2Q0ssdUJBQXVCQyx1QkFBdUJ4QixNQUFNN0IsU0FBU0M7Z0JBRTdEO1lBQ0Y7UUFFQSxLQUFLSjtZQUF5QjtnQkFDNUJ1RCx1QkFBdUI7Z0JBRXZCO1lBQ0Y7UUFFQSxLQUFLdEQ7WUFBeUI7Z0JBQzVCLElBQU1rRCxzQkFBc0JQLGlCQUN0Qm5CLFFBQVEwQixvQkFBb0J6QixRQUFRLElBQ3BDQyx3QkFBd0JDLHlCQUF5QkgsT0FBT3RCLFNBQVNDO2dCQUV2RW1ELHVCQUF1QjVCLHVCQUF1QixHQUFHO2dCQUVqRDtZQUNGO1FBRUEsS0FBSzdCO1lBQXVCO2dCQUMxQixJQUFNc0Qsb0JBQW9CUixpQkFDcEJuQixTQUFRMkIsa0JBQWtCMUIsUUFBUSxJQUNsQ0MseUJBQXdCRixPQUFNTSxJQUFJLENBQUMsU0FBQ0M7b0JBQ2xDLElBQU11Qix1QkFBdUJDLHVCQUF1QnhCLE1BQU03QixTQUFTQztvQkFFbkUsT0FBT21EO2dCQUNUO2dCQUVOQSx1QkFBdUI1Qix3QkFBdUIsR0FBRztnQkFFakQ7WUFDRjtJQUNGO0lBRUEsT0FBTzRCO0FBQ1QifQ==