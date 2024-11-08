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
    isRuleNonConsuming: function() {
        return isRuleNonConsuming;
    },
    isRuleNonProducing: function() {
        return isRuleNonProducing;
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
function isRuleNonConsuming(rule, ruleMap) {
    var ruleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var ruleNonConsuming = true;
    var ruleName = rule.getName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
    if (!ruleNamesIncludesRuleName) {
        ruleNames = _to_consumable_array(ruleNames).concat([
            ruleName
        ]);
        var definitions = rule.getDefinitions(), definitionsNonConsuming = areDefinitionsNonConsuming(definitions, ruleMap, ruleNames);
        ruleNonConsuming = definitionsNonConsuming; ///
    }
    return ruleNonConsuming;
}
function isRuleNonProducing(rule, ruleMap) {
    var ruleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var ruleNonProducing = true;
    var ruleName = rule.getName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
    if (!ruleNamesIncludesRuleName) {
        ruleNames = _to_consumable_array(ruleNames).concat([
            ruleName
        ]);
        var definitions = rule.getDefinitions(), definitionsNonProducing = areDefinitionsNonProducing(definitions, ruleMap, ruleNames);
        ruleNonProducing = definitionsNonProducing; ///
    }
    return ruleNonProducing;
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
function areDefinitionsNonProducing(definitions, ruleMap, ruleNames) {
    var definitionsNonProducing = definitions.every(function(definition) {
        var definitionNonProducing = isDefinitionNonProducing(definition, ruleMap, ruleNames);
        if (definitionNonProducing) {
            return true;
        }
    });
    return definitionsNonProducing;
}
function isDefinitionNonProducing(definition, ruleMap, ruleNames) {
    var parts = definition.getParts(), partsNonConsuming = arePartsNonConsuming(parts, ruleMap, ruleNames), partsNonProducing = arePartsNonProducing(parts, ruleMap, ruleNames), definitionNonProducing = partsNonConsuming || partsNonProducing;
    return definitionNonProducing;
}
function arePartsNonProducing(parts, ruleMap, ruleNames) {
    var partsNonProducing = parts.some(function(part) {
        var partNonProducing = isPartNonProducing(part, ruleMap, ruleNames);
        if (partNonProducing) {
            return true;
        }
    });
    return partsNonProducing;
}
function isPartNonProducing(part, ruleMap, ruleNames) {
    var partNonProducing;
    var parTerminalPart = part.isTerminalPart();
    if (parTerminalPart) {
        var terminalPart = part, terminalPartUseless = isTerminalPartNonProducing(terminalPart);
        partNonProducing = terminalPartUseless; ///
    } else {
        var nonTerminalNPart = part, nonTerminalPartNonProducing = isNonTerminalPartNonProducing(nonTerminalNPart, ruleMap, ruleNames);
        partNonProducing = nonTerminalPartNonProducing; ///
    }
    return partNonProducing;
}
function isTerminalPartNonProducing(terminalPart) {
    var terminalPartNonProducing = false;
    return terminalPartNonProducing;
}
function isNonTerminalPartNonProducing(nonTerminalPart, ruleMap, ruleNames) {
    var partNonProducing = false;
    var type = nonTerminalPart.getType();
    switch(type){
        case RuleNamePartType:
            {
                var ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), rule = ruleMap[ruleName] || null;
                if (rule !== null) {
                    var ruleNonProducing = isRuleNonProducing(rule, ruleMap, ruleNames);
                    partNonProducing = ruleNonProducing; ///
                }
                break;
            }
        case OptionalPartPartType:
            {
                partNonProducing = false;
                break;
            }
        case OneOrMorePartsPartType:
            {
                var oneOrMorePartsPart = nonTerminalPart, part = oneOrMorePartsPart.getPart();
                partNonProducing = isPartNonProducing(part, ruleMap, ruleNames);
                break;
            }
        case ZeroOrMorePartsPartType:
            {
                partNonProducing = false;
                break;
            }
        case SequenceOfPartsPartType:
            {
                var sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts(), partsNonProducing = arePartsNonProducing(parts, ruleMap, ruleNames);
                partNonProducing = partsNonProducing; ///
                break;
            }
        case ChoiceOfPartsPartType:
            {
                var choiceOfPartsPart = nonTerminalPart, parts1 = choiceOfPartsPart.getParts(), partsNonProducing1 = parts1.every(function(part) {
                    var partNonProducing = isPartNonProducing(part, ruleMap, ruleNames);
                    return partNonProducing;
                });
                partNonProducing = partsNonProducing1; ///
                break;
            }
    }
    return partNonProducing;
}
function areDefinitionsNonConsuming(definitions, ruleMap, ruleNames) {
    var definitionsNonConsuming = definitions.some(function(definition) {
        var definitionNonConsuming = isDefinitionNonConsuming(definition, ruleMap, ruleNames);
        if (definitionNonConsuming) {
            return true;
        }
    });
    return definitionsNonConsuming;
}
function isDefinitionNonConsuming(definition, ruleMap, ruleNames) {
    var parts = definition.getParts(), partsNonConsuming = arePartsNonConsuming(parts, ruleMap, ruleNames), definitionNonConsuming = partsNonConsuming; ///
    return definitionNonConsuming;
}
function arePartsNonConsuming(parts, ruleMap, ruleNames) {
    var partsNonConsuming = parts.every(function(part) {
        var partNonConsuming = isPartNonConsuming(part, ruleMap, ruleNames);
        if (partNonConsuming) {
            return true;
        }
    });
    return partsNonConsuming;
}
function isPartNonConsuming(part, ruleMap, ruleNames) {
    var partNonConsuming;
    var parTerminalPart = part.isTerminalPart();
    if (parTerminalPart) {
        var terminalPart = part, terminalPartNonConsuming = isTerminalPartNonConsuming(terminalPart);
        partNonConsuming = terminalPartNonConsuming; ///
    } else {
        var nonTerminalNPart = part, nonTerminalPartNonConsuming = isNonTerminalPartNonConsuming(nonTerminalNPart, ruleMap, ruleNames);
        partNonConsuming = nonTerminalPartNonConsuming; ///
    }
    return partNonConsuming;
}
function isTerminalPartNonConsuming(terminalPart) {
    var terminalPartNonConsuming;
    var terminalPartString = terminalPart.asString();
    switch(terminalPartString){
        case epsilon:
        case noWhitespace:
        case startOfContent:
            {
                terminalPartNonConsuming = true;
                break;
            }
        default:
            {
                terminalPartNonConsuming = false;
                break;
            }
    }
    return terminalPartNonConsuming;
}
function isNonTerminalPartNonConsuming(nonTerminalPart, ruleMap, ruleNames) {
    var partNonConsuming = false;
    var type = nonTerminalPart.getType();
    switch(type){
        case RuleNamePartType:
            {
                var ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), rule = ruleMap[ruleName] || null;
                if (rule !== null) {
                    var ruleNonConsuming = isRuleNonConsuming(rule, ruleMap, ruleNames);
                    partNonConsuming = ruleNonConsuming; ///
                }
                break;
            }
        case OptionalPartPartType:
            {
                partNonConsuming = true;
                break;
            }
        case OneOrMorePartsPartType:
            {
                var oneOrMorePartsPart = nonTerminalPart, part = oneOrMorePartsPart.getPart();
                partNonConsuming = isPartNonConsuming(part, ruleMap, ruleNames);
                break;
            }
        case ZeroOrMorePartsPartType:
            {
                partNonConsuming = true;
                break;
            }
        case SequenceOfPartsPartType:
            {
                var sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts(), partsNonConsuming = arePartsNonConsuming(parts, ruleMap, ruleNames);
                partNonConsuming = partsNonConsuming; ///
                break;
            }
        case ChoiceOfPartsPartType:
            {
                var choiceOfPartsPart = nonTerminalPart, parts1 = choiceOfPartsPart.getParts(), partsNonConsuming1 = parts1.some(function(part) {
                    var partNonConsuming = isPartNonConsuming(part, ruleMap, ruleNames);
                    return partNonConsuming;
                });
                partNonConsuming = partsNonConsuming1; ///
                break;
            }
    }
    return partNonConsuming;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiwgbm9XaGl0ZXNwYWNlLCBzdGFydE9mQ29udGVudCB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlTm9uQ29uc3VtaW5nKHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyA9IFtdKSB7XG4gIGxldCBydWxlTm9uQ29uc3VtaW5nID0gdHJ1ZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb25Db25zdW1pbmcgPSBhcmVEZWZpbml0aW9uc05vbkNvbnN1bWluZyhkZWZpbml0aW9ucywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHJ1bGVOb25Db25zdW1pbmcgPSBkZWZpbml0aW9uc05vbkNvbnN1bWluZzsgLy8vXG4gIH1cblxuICByZXR1cm4gcnVsZU5vbkNvbnN1bWluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUnVsZU5vblByb2R1Y2luZyhydWxlLCBydWxlTWFwLCBydWxlTmFtZXMgPSBbXSkge1xuICBsZXQgcnVsZU5vblByb2R1Y2luZyA9IHRydWU7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgaWYgKCFydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgcnVsZU5hbWVzID0gWyAvLy9cbiAgICAgIC4uLnJ1bGVOYW1lcyxcbiAgICAgIHJ1bGVOYW1lXG4gICAgXTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGRlZmluaXRpb25zTm9uUHJvZHVjaW5nID0gYXJlRGVmaW5pdGlvbnNOb25Qcm9kdWNpbmcoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBydWxlTm9uUHJvZHVjaW5nID0gZGVmaW5pdGlvbnNOb25Qcm9kdWNpbmc7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVOb25Qcm9kdWNpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlLCByZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGFyZURlZmluaXRpb25zTm9uUHJvZHVjaW5nKGRlZmluaXRpb25zLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgZGVmaW5pdGlvbnNOb25Qcm9kdWNpbmcgPSBkZWZpbml0aW9ucy5ldmVyeSgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb25Ob25Qcm9kdWNpbmcgPSBpc0RlZmluaXRpb25Ob25Qcm9kdWNpbmcoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChkZWZpbml0aW9uTm9uUHJvZHVjaW5nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9uc05vblByb2R1Y2luZztcbn1cblxuZnVuY3Rpb24gaXNEZWZpbml0aW9uTm9uUHJvZHVjaW5nKGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgcGFydHNOb25Db25zdW1pbmcgPSBhcmVQYXJ0c05vbkNvbnN1bWluZyhwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSxcbiAgICAgICAgcGFydHNOb25Qcm9kdWNpbmcgPSBhcmVQYXJ0c05vblByb2R1Y2luZyhwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSxcbiAgICAgICAgZGVmaW5pdGlvbk5vblByb2R1Y2luZyA9IChwYXJ0c05vbkNvbnN1bWluZyB8fCBwYXJ0c05vblByb2R1Y2luZyk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25Ob25Qcm9kdWNpbmc7XG59XG5cbmZ1bmN0aW9uIGFyZVBhcnRzTm9uUHJvZHVjaW5nKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHNOb25Qcm9kdWNpbmcgPSBwYXJ0cy5zb21lKChwYXJ0KSA9PiB7XG4gICAgY29uc3QgcGFydE5vblByb2R1Y2luZyA9IGlzUGFydE5vblByb2R1Y2luZyhwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKHBhcnROb25Qcm9kdWNpbmcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzTm9uUHJvZHVjaW5nO1xufVxuXG5mdW5jdGlvbiBpc1BhcnROb25Qcm9kdWNpbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0Tm9uUHJvZHVjaW5nO1xuXG4gIGNvbnN0IHBhclRlcm1pbmFsUGFydCA9IHBhcnQuaXNUZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFyVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsUGFydFVzZWxlc3MgPSBpc1Rlcm1pbmFsUGFydE5vblByb2R1Y2luZyh0ZXJtaW5hbFBhcnQpO1xuXG4gICAgcGFydE5vblByb2R1Y2luZyA9IHRlcm1pbmFsUGFydFVzZWxlc3M7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTlBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nID0gaXNOb25UZXJtaW5hbFBhcnROb25Qcm9kdWNpbmcobm9uVGVybWluYWxOUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHBhcnROb25Qcm9kdWNpbmcgPSBub25UZXJtaW5hbFBhcnROb25Qcm9kdWNpbmc7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnROb25Qcm9kdWNpbmc7XG59XG5cbmZ1bmN0aW9uIGlzVGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nKHRlcm1pbmFsUGFydCkge1xuICBjb25zdCB0ZXJtaW5hbFBhcnROb25Qcm9kdWNpbmcgPSBmYWxzZTtcblxuICByZXR1cm4gdGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nO1xufVxuXG5mdW5jdGlvbiBpc05vblRlcm1pbmFsUGFydE5vblByb2R1Y2luZyhub25UZXJtaW5hbFBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydE5vblByb2R1Y2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOb25Qcm9kdWNpbmcgPSBpc1J1bGVOb25Qcm9kdWNpbmcocnVsZSwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICBwYXJ0Tm9uUHJvZHVjaW5nID0gcnVsZU5vblByb2R1Y2luZzsgIC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBwYXJ0Tm9uUHJvZHVjaW5nID0gZmFsc2U7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcGFydE5vblByb2R1Y2luZyA9IGlzUGFydE5vblByb2R1Y2luZyhwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBwYXJ0Tm9uUHJvZHVjaW5nID0gZmFsc2U7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c05vblByb2R1Y2luZyA9IGFyZVBhcnRzTm9uUHJvZHVjaW5nKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBwYXJ0Tm9uUHJvZHVjaW5nID0gcGFydHNOb25Qcm9kdWNpbmc7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNOb25Qcm9kdWNpbmcgPSBwYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0Tm9uUHJvZHVjaW5nID0gaXNQYXJ0Tm9uUHJvZHVjaW5nKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnROb25Qcm9kdWNpbmc7XG4gICAgICAgICAgICB9KVxuXG4gICAgICBwYXJ0Tm9uUHJvZHVjaW5nID0gcGFydHNOb25Qcm9kdWNpbmc7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydE5vblByb2R1Y2luZztcbn1cblxuZnVuY3Rpb24gYXJlRGVmaW5pdGlvbnNOb25Db25zdW1pbmcoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBkZWZpbml0aW9uc05vbkNvbnN1bWluZyA9IGRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uTm9uQ29uc3VtaW5nID0gaXNEZWZpbml0aW9uTm9uQ29uc3VtaW5nKGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbk5vbkNvbnN1bWluZykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVmaW5pdGlvbnNOb25Db25zdW1pbmc7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvbk5vbkNvbnN1bWluZyhkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgIHBhcnRzTm9uQ29uc3VtaW5nID0gYXJlUGFydHNOb25Db25zdW1pbmcocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyksXG4gICAgICAgIGRlZmluaXRpb25Ob25Db25zdW1pbmcgPSBwYXJ0c05vbkNvbnN1bWluZzsgLy8vXG5cbiAgcmV0dXJuIGRlZmluaXRpb25Ob25Db25zdW1pbmc7XG59XG5cbmZ1bmN0aW9uIGFyZVBhcnRzTm9uQ29uc3VtaW5nKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHNOb25Db25zdW1pbmcgPSBwYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgIGNvbnN0IHBhcnROb25Db25zdW1pbmcgPSBpc1BhcnROb25Db25zdW1pbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChwYXJ0Tm9uQ29uc3VtaW5nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0c05vbkNvbnN1bWluZztcbn1cblxuZnVuY3Rpb24gaXNQYXJ0Tm9uQ29uc3VtaW5nKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydE5vbkNvbnN1bWluZztcblxuICBjb25zdCBwYXJUZXJtaW5hbFBhcnQgPSBwYXJ0LmlzVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhclRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnROb25Db25zdW1pbmcgPSBpc1Rlcm1pbmFsUGFydE5vbkNvbnN1bWluZyh0ZXJtaW5hbFBhcnQpO1xuXG4gICAgcGFydE5vbkNvbnN1bWluZyA9IHRlcm1pbmFsUGFydE5vbkNvbnN1bWluZzsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbFBhcnROb25Db25zdW1pbmcgPSBpc05vblRlcm1pbmFsUGFydE5vbkNvbnN1bWluZyhub25UZXJtaW5hbE5QYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcGFydE5vbkNvbnN1bWluZyA9IG5vblRlcm1pbmFsUGFydE5vbkNvbnN1bWluZzsgLy8vXG4gIH1cblxuICByZXR1cm4gcGFydE5vbkNvbnN1bWluZztcbn1cblxuZnVuY3Rpb24gaXNUZXJtaW5hbFBhcnROb25Db25zdW1pbmcodGVybWluYWxQYXJ0KSB7XG4gIGxldCB0ZXJtaW5hbFBhcnROb25Db25zdW1pbmc7XG5cbiAgY29uc3QgdGVybWluYWxQYXJ0U3RyaW5nID0gdGVybWluYWxQYXJ0LmFzU3RyaW5nKCk7XG5cbiAgc3dpdGNoICh0ZXJtaW5hbFBhcnRTdHJpbmcpIHtcbiAgICBjYXNlIGVwc2lsb246XG4gICAgY2FzZSBub1doaXRlc3BhY2U6XG4gICAgY2FzZSBzdGFydE9mQ29udGVudDoge1xuICAgICAgdGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgdGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nID0gZmFsc2U7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hbFBhcnROb25Db25zdW1pbmc7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nKG5vblRlcm1pbmFsUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0Tm9uQ29uc3VtaW5nID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZU5vbkNvbnN1bWluZyA9IGlzUnVsZU5vbkNvbnN1bWluZyhydWxlLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICAgIHBhcnROb25Db25zdW1pbmcgPSBydWxlTm9uQ29uc3VtaW5nOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIHBhcnROb25Db25zdW1pbmcgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIHBhcnROb25Db25zdW1pbmcgPSBpc1BhcnROb25Db25zdW1pbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgcGFydE5vbkNvbnN1bWluZyA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c05vbkNvbnN1bWluZyA9IGFyZVBhcnRzTm9uQ29uc3VtaW5nKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBwYXJ0Tm9uQ29uc3VtaW5nID0gcGFydHNOb25Db25zdW1pbmc7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNOb25Db25zdW1pbmcgPSBwYXJ0cy5zb21lKChwYXJ0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnROb25Db25zdW1pbmcgPSBpc1BhcnROb25Db25zdW1pbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcGFydE5vbkNvbnN1bWluZztcbiAgICAgICAgICAgIH0pXG5cbiAgICAgIHBhcnROb25Db25zdW1pbmcgPSBwYXJ0c05vbkNvbnN1bWluZzsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0Tm9uQ29uc3VtaW5nO1xufVxuIl0sIm5hbWVzIjpbImlzUnVsZU5vbkNvbnN1bWluZyIsImlzUnVsZU5vblByb2R1Y2luZyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwibm9XaGl0ZXNwYWNlIiwic3RhcnRPZkNvbnRlbnQiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsInJ1bGUiLCJydWxlTWFwIiwicnVsZU5hbWVzIiwicnVsZU5vbkNvbnN1bWluZyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc05vbkNvbnN1bWluZyIsImFyZURlZmluaXRpb25zTm9uQ29uc3VtaW5nIiwicnVsZU5vblByb2R1Y2luZyIsImRlZmluaXRpb25zTm9uUHJvZHVjaW5nIiwiYXJlRGVmaW5pdGlvbnNOb25Qcm9kdWNpbmciLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJmb3JFYWNoIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImV2ZXJ5IiwiZGVmaW5pdGlvbk5vblByb2R1Y2luZyIsImlzRGVmaW5pdGlvbk5vblByb2R1Y2luZyIsInBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0c05vbkNvbnN1bWluZyIsImFyZVBhcnRzTm9uQ29uc3VtaW5nIiwicGFydHNOb25Qcm9kdWNpbmciLCJhcmVQYXJ0c05vblByb2R1Y2luZyIsInNvbWUiLCJwYXJ0IiwicGFydE5vblByb2R1Y2luZyIsImlzUGFydE5vblByb2R1Y2luZyIsInBhclRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0VXNlbGVzcyIsImlzVGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nIiwibm9uVGVybWluYWxOUGFydCIsIm5vblRlcm1pbmFsUGFydE5vblByb2R1Y2luZyIsImlzTm9uVGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nIiwidGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nIiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTmFtZVBhcnQiLCJnZXRSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsImdldFBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJkZWZpbml0aW9uTm9uQ29uc3VtaW5nIiwiaXNEZWZpbml0aW9uTm9uQ29uc3VtaW5nIiwicGFydE5vbkNvbnN1bWluZyIsImlzUGFydE5vbkNvbnN1bWluZyIsInRlcm1pbmFsUGFydE5vbkNvbnN1bWluZyIsImlzVGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nIiwibm9uVGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nIiwiaXNOb25UZXJtaW5hbFBhcnROb25Db25zdW1pbmciLCJ0ZXJtaW5hbFBhcnRTdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZWdCQSxrQkFBa0I7ZUFBbEJBOztJQXFCQUMsa0JBQWtCO2VBQWxCQTs7SUErQkFDLDhCQUE4QjtlQUE5QkE7O0lBVkFDLDBCQUEwQjtlQUExQkE7Ozs0QkF2RFU7MkJBQ0s7MEJBRXdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RixJQUFRQyxVQUEwQ0MsMkJBQWMsQ0FBeERELFNBQVNFLGVBQWlDRCwyQkFBYyxDQUEvQ0MsY0FBY0MsaUJBQW1CRiwyQkFBYyxDQUFqQ0UsZ0JBQ3ZCQyxtQkFLNEJDLHVCQUFTLENBTHJDRCxrQkFDQUUsdUJBSTRCRCx1QkFBUyxDQUpyQ0Msc0JBQ0FDLHdCQUc0QkYsdUJBQVMsQ0FIckNFLHVCQUNBQyx5QkFFNEJILHVCQUFTLENBRnJDRyx3QkFDQUMsMEJBQzRCSix1QkFBUyxDQURyQ0kseUJBQ0FDLDBCQUE0QkwsdUJBQVMsQ0FBckNLO0FBRUQsU0FBU2QsbUJBQW1CZSxJQUFJLEVBQUVDLE9BQU87UUFBRUMsWUFBQUEsaUVBQVksRUFBRTtJQUM5RCxJQUFJQyxtQkFBbUI7SUFFdkIsSUFBTUMsV0FBV0osS0FBS0ssT0FBTyxJQUN2QkMsNEJBQTRCSixVQUFVSyxRQUFRLENBQUNIO0lBRXJELElBQUksQ0FBQ0UsMkJBQTJCO1FBQzlCSixZQUFZLEFBQ1YscUJBQUdBLGtCQURPO1lBRVZFO1NBQ0Q7UUFFRCxJQUFNSSxjQUFjUixLQUFLUyxjQUFjLElBQ2pDQywwQkFBMEJDLDJCQUEyQkgsYUFBYVAsU0FBU0M7UUFFakZD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