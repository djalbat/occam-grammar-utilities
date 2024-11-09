"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isRuleNonConsuming", {
    enumerable: true,
    get: function() {
        return isRuleNonConsuming;
    }
});
var _occamparsers = require("occam-parsers");
var _occamlexers = require("occam-lexers");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9uQ29uc3VtaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiwgbm9XaGl0ZXNwYWNlLCBzdGFydE9mQ29udGVudCB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlTm9uQ29uc3VtaW5nKHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyA9IFtdKSB7XG4gIGxldCBydWxlTm9uQ29uc3VtaW5nID0gdHJ1ZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb25Db25zdW1pbmcgPSBhcmVEZWZpbml0aW9uc05vbkNvbnN1bWluZyhkZWZpbml0aW9ucywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHJ1bGVOb25Db25zdW1pbmcgPSBkZWZpbml0aW9uc05vbkNvbnN1bWluZzsgLy8vXG4gIH1cblxuICByZXR1cm4gcnVsZU5vbkNvbnN1bWluZztcbn1cblxuZnVuY3Rpb24gYXJlRGVmaW5pdGlvbnNOb25Db25zdW1pbmcoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBkZWZpbml0aW9uc05vbkNvbnN1bWluZyA9IGRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uTm9uQ29uc3VtaW5nID0gaXNEZWZpbml0aW9uTm9uQ29uc3VtaW5nKGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbk5vbkNvbnN1bWluZykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVmaW5pdGlvbnNOb25Db25zdW1pbmc7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvbk5vbkNvbnN1bWluZyhkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgIHBhcnRzTm9uQ29uc3VtaW5nID0gYXJlUGFydHNOb25Db25zdW1pbmcocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyksXG4gICAgICAgIGRlZmluaXRpb25Ob25Db25zdW1pbmcgPSBwYXJ0c05vbkNvbnN1bWluZzsgLy8vXG5cbiAgcmV0dXJuIGRlZmluaXRpb25Ob25Db25zdW1pbmc7XG59XG5cbmZ1bmN0aW9uIGFyZVBhcnRzTm9uQ29uc3VtaW5nKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHNOb25Db25zdW1pbmcgPSBwYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgIGNvbnN0IHBhcnROb25Db25zdW1pbmcgPSBpc1BhcnROb25Db25zdW1pbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChwYXJ0Tm9uQ29uc3VtaW5nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0c05vbkNvbnN1bWluZztcbn1cblxuZnVuY3Rpb24gaXNQYXJ0Tm9uQ29uc3VtaW5nKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydE5vbkNvbnN1bWluZztcblxuICBjb25zdCBwYXJUZXJtaW5hbFBhcnQgPSBwYXJ0LmlzVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhclRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnROb25Db25zdW1pbmcgPSBpc1Rlcm1pbmFsUGFydE5vbkNvbnN1bWluZyh0ZXJtaW5hbFBhcnQpO1xuXG4gICAgcGFydE5vbkNvbnN1bWluZyA9IHRlcm1pbmFsUGFydE5vbkNvbnN1bWluZzsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbFBhcnROb25Db25zdW1pbmcgPSBpc05vblRlcm1pbmFsUGFydE5vbkNvbnN1bWluZyhub25UZXJtaW5hbE5QYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcGFydE5vbkNvbnN1bWluZyA9IG5vblRlcm1pbmFsUGFydE5vbkNvbnN1bWluZzsgLy8vXG4gIH1cblxuICByZXR1cm4gcGFydE5vbkNvbnN1bWluZztcbn1cblxuZnVuY3Rpb24gaXNUZXJtaW5hbFBhcnROb25Db25zdW1pbmcodGVybWluYWxQYXJ0KSB7XG4gIGxldCB0ZXJtaW5hbFBhcnROb25Db25zdW1pbmc7XG5cbiAgY29uc3QgdGVybWluYWxQYXJ0U3RyaW5nID0gdGVybWluYWxQYXJ0LmFzU3RyaW5nKCk7XG5cbiAgc3dpdGNoICh0ZXJtaW5hbFBhcnRTdHJpbmcpIHtcbiAgICBjYXNlIGVwc2lsb246XG4gICAgY2FzZSBub1doaXRlc3BhY2U6XG4gICAgY2FzZSBzdGFydE9mQ29udGVudDoge1xuICAgICAgdGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgdGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nID0gZmFsc2U7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hbFBhcnROb25Db25zdW1pbmc7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nKG5vblRlcm1pbmFsUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0Tm9uQ29uc3VtaW5nID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZU5vbkNvbnN1bWluZyA9IGlzUnVsZU5vbkNvbnN1bWluZyhydWxlLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICAgIHBhcnROb25Db25zdW1pbmcgPSBydWxlTm9uQ29uc3VtaW5nOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIHBhcnROb25Db25zdW1pbmcgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIHBhcnROb25Db25zdW1pbmcgPSBpc1BhcnROb25Db25zdW1pbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgcGFydE5vbkNvbnN1bWluZyA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c05vbkNvbnN1bWluZyA9IGFyZVBhcnRzTm9uQ29uc3VtaW5nKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBwYXJ0Tm9uQ29uc3VtaW5nID0gcGFydHNOb25Db25zdW1pbmc7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNOb25Db25zdW1pbmcgPSBwYXJ0cy5zb21lKChwYXJ0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnROb25Db25zdW1pbmcgPSBpc1BhcnROb25Db25zdW1pbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcGFydE5vbkNvbnN1bWluZztcbiAgICAgICAgICAgIH0pXG5cbiAgICAgIHBhcnROb25Db25zdW1pbmcgPSBwYXJ0c05vbkNvbnN1bWluZzsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0Tm9uQ29uc3VtaW5nO1xufVxuIl0sIm5hbWVzIjpbImlzUnVsZU5vbkNvbnN1bWluZyIsImVwc2lsb24iLCJzcGVjaWFsU3ltYm9scyIsIm5vV2hpdGVzcGFjZSIsInN0YXJ0T2ZDb250ZW50IiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJydWxlIiwicnVsZU1hcCIsInJ1bGVOYW1lcyIsInJ1bGVOb25Db25zdW1pbmciLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNOb25Db25zdW1pbmciLCJhcmVEZWZpbml0aW9uc05vbkNvbnN1bWluZyIsInNvbWUiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbk5vbkNvbnN1bWluZyIsImlzRGVmaW5pdGlvbk5vbkNvbnN1bWluZyIsInBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0c05vbkNvbnN1bWluZyIsImFyZVBhcnRzTm9uQ29uc3VtaW5nIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vbkNvbnN1bWluZyIsImlzUGFydE5vbkNvbnN1bWluZyIsInBhclRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nIiwiaXNUZXJtaW5hbFBhcnROb25Db25zdW1pbmciLCJub25UZXJtaW5hbE5QYXJ0Iiwibm9uVGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nIiwiaXNOb25UZXJtaW5hbFBhcnROb25Db25zdW1pbmciLCJ0ZXJtaW5hbFBhcnRTdHJpbmciLCJhc1N0cmluZyIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwicnVsZU5hbWVQYXJ0IiwiZ2V0UnVsZU5hbWUiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJnZXRQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImNob2ljZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhZ0JBOzs7ZUFBQUE7Ozs0QkFYVTsyQkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBUUMsVUFBMENDLDJCQUFjLENBQXhERCxTQUFTRSxlQUFpQ0QsMkJBQWMsQ0FBL0NDLGNBQWNDLGlCQUFtQkYsMkJBQWMsQ0FBakNFLGdCQUN2QkMsbUJBSzRCQyx1QkFBUyxDQUxyQ0Qsa0JBQ0FFLHVCQUk0QkQsdUJBQVMsQ0FKckNDLHNCQUNBQyx3QkFHNEJGLHVCQUFTLENBSHJDRSx1QkFDQUMseUJBRTRCSCx1QkFBUyxDQUZyQ0csd0JBQ0FDLDBCQUM0QkosdUJBQVMsQ0FEckNJLHlCQUNBQywwQkFBNEJMLHVCQUFTLENBQXJDSztBQUVELFNBQVNYLG1CQUFtQlksSUFBSSxFQUFFQyxPQUFPO1FBQUVDLFlBQUFBLGlFQUFZLEVBQUU7SUFDOUQsSUFBSUMsbUJBQW1CO0lBRXZCLElBQU1DLFdBQVdKLEtBQUtLLE9BQU8sSUFDdkJDLDRCQUE0QkosVUFBVUssUUFBUSxDQUFDSDtJQUVyRCxJQUFJLENBQUNFLDJCQUEyQjtRQUM5QkosWUFBWSxBQUNWLHFCQUFHQSxrQkFETztZQUVWRTtTQUNEO1FBRUQsSUFBTUksY0FBY1IsS0FBS1MsY0FBYyxJQUNqQ0MsMEJBQTBCQywyQkFBMkJILGFB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