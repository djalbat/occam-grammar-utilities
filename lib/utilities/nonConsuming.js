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
    isPartNonConsuming: function() {
        return isPartNonConsuming;
    },
    isRuleNonConsuming: function() {
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
    var ruleNonConsuming = false;
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
function isPartNonConsuming(part, ruleMap) {
    var ruleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9uQ29uc3VtaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiwgbm9XaGl0ZXNwYWNlLCBzdGFydE9mQ29udGVudCB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlTm9uQ29uc3VtaW5nKHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyA9IFtdKSB7XG4gIGxldCBydWxlTm9uQ29uc3VtaW5nID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgaWYgKCFydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgcnVsZU5hbWVzID0gWyAvLy9cbiAgICAgIC4uLnJ1bGVOYW1lcyxcbiAgICAgIHJ1bGVOYW1lXG4gICAgXTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGRlZmluaXRpb25zTm9uQ29uc3VtaW5nID0gYXJlRGVmaW5pdGlvbnNOb25Db25zdW1pbmcoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBydWxlTm9uQ29uc3VtaW5nID0gZGVmaW5pdGlvbnNOb25Db25zdW1pbmc7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVOb25Db25zdW1pbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcnROb25Db25zdW1pbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzID0gW10pIHtcbiAgbGV0IHBhcnROb25Db25zdW1pbmc7XG5cbiAgY29uc3QgcGFyVGVybWluYWxQYXJ0ID0gcGFydC5pc1Rlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJUZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgdGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nID0gaXNUZXJtaW5hbFBhcnROb25Db25zdW1pbmcodGVybWluYWxQYXJ0KTtcblxuICAgIHBhcnROb25Db25zdW1pbmcgPSB0ZXJtaW5hbFBhcnROb25Db25zdW1pbmc7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTlBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nID0gaXNOb25UZXJtaW5hbFBhcnROb25Db25zdW1pbmcobm9uVGVybWluYWxOUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHBhcnROb25Db25zdW1pbmcgPSBub25UZXJtaW5hbFBhcnROb25Db25zdW1pbmc7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnROb25Db25zdW1pbmc7XG59XG5cbmZ1bmN0aW9uIGFyZURlZmluaXRpb25zTm9uQ29uc3VtaW5nKGRlZmluaXRpb25zLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgZGVmaW5pdGlvbnNOb25Db25zdW1pbmcgPSBkZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbk5vbkNvbnN1bWluZyA9IGlzRGVmaW5pdGlvbk5vbkNvbnN1bWluZyhkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKGRlZmluaXRpb25Ob25Db25zdW1pbmcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zTm9uQ29uc3VtaW5nO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluaXRpb25Ob25Db25zdW1pbmcoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBwYXJ0c05vbkNvbnN1bWluZyA9IGFyZVBhcnRzTm9uQ29uc3VtaW5nKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpLFxuICAgICAgICBkZWZpbml0aW9uTm9uQ29uc3VtaW5nID0gcGFydHNOb25Db25zdW1pbmc7IC8vL1xuXG4gIHJldHVybiBkZWZpbml0aW9uTm9uQ29uc3VtaW5nO1xufVxuXG5mdW5jdGlvbiBhcmVQYXJ0c05vbkNvbnN1bWluZyhwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzTm9uQ29uc3VtaW5nID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0Tm9uQ29uc3VtaW5nID0gaXNQYXJ0Tm9uQ29uc3VtaW5nKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBpZiAocGFydE5vbkNvbnN1bWluZykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNOb25Db25zdW1pbmc7XG59XG5cbmZ1bmN0aW9uIGlzVGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nKHRlcm1pbmFsUGFydCkge1xuICBsZXQgdGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nO1xuXG4gIGNvbnN0IHRlcm1pbmFsUGFydFN0cmluZyA9IHRlcm1pbmFsUGFydC5hc1N0cmluZygpO1xuXG4gIHN3aXRjaCAodGVybWluYWxQYXJ0U3RyaW5nKSB7XG4gICAgY2FzZSBlcHNpbG9uOlxuICAgIGNhc2Ugbm9XaGl0ZXNwYWNlOlxuICAgIGNhc2Ugc3RhcnRPZkNvbnRlbnQ6IHtcbiAgICAgIHRlcm1pbmFsUGFydE5vbkNvbnN1bWluZyA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRlcm1pbmFsUGFydE5vbkNvbnN1bWluZyA9IGZhbHNlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nO1xufVxuXG5mdW5jdGlvbiBpc05vblRlcm1pbmFsUGFydE5vbkNvbnN1bWluZyhub25UZXJtaW5hbFBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydE5vbkNvbnN1bWluZyA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOb25Db25zdW1pbmcgPSBpc1J1bGVOb25Db25zdW1pbmcocnVsZSwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICBwYXJ0Tm9uQ29uc3VtaW5nID0gcnVsZU5vbkNvbnN1bWluZzsgIC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBwYXJ0Tm9uQ29uc3VtaW5nID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBwYXJ0Tm9uQ29uc3VtaW5nID0gaXNQYXJ0Tm9uQ29uc3VtaW5nKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIHBhcnROb25Db25zdW1pbmcgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNOb25Db25zdW1pbmcgPSBhcmVQYXJ0c05vbkNvbnN1bWluZyhwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgcGFydE5vbkNvbnN1bWluZyA9IHBhcnRzTm9uQ29uc3VtaW5nOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzTm9uQ29uc3VtaW5nID0gcGFydHMuc29tZSgocGFydCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0Tm9uQ29uc3VtaW5nID0gaXNQYXJ0Tm9uQ29uc3VtaW5nKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnROb25Db25zdW1pbmc7XG4gICAgICAgICAgICB9KVxuXG4gICAgICBwYXJ0Tm9uQ29uc3VtaW5nID0gcGFydHNOb25Db25zdW1pbmc7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydE5vbkNvbnN1bWluZztcbn1cbiJdLCJuYW1lcyI6WyJpc1BhcnROb25Db25zdW1pbmciLCJpc1J1bGVOb25Db25zdW1pbmciLCJlcHNpbG9uIiwic3BlY2lhbFN5bWJvbHMiLCJub1doaXRlc3BhY2UiLCJzdGFydE9mQ29udGVudCIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwicnVsZSIsInJ1bGVNYXAiLCJydWxlTmFtZXMiLCJydWxlTm9uQ29uc3VtaW5nIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zTm9uQ29uc3VtaW5nIiwiYXJlRGVmaW5pdGlvbnNOb25Db25zdW1pbmciLCJwYXJ0IiwicGFydE5vbkNvbnN1bWluZyIsInBhclRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nIiwiaXNUZXJtaW5hbFBhcnROb25Db25zdW1pbmciLCJub25UZXJtaW5hbE5QYXJ0Iiwibm9uVGVybWluYWxQYXJ0Tm9uQ29uc3VtaW5nIiwiaXNOb25UZXJtaW5hbFBhcnROb25Db25zdW1pbmciLCJzb21lIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25Ob25Db25zdW1pbmciLCJpc0RlZmluaXRpb25Ob25Db25zdW1pbmciLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNOb25Db25zdW1pbmciLCJhcmVQYXJ0c05vbkNvbnN1bWluZyIsImV2ZXJ5IiwidGVybWluYWxQYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJub25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsInJ1bGVOYW1lUGFydCIsImdldFJ1bGVOYW1lIiwib25lT3JNb3JlUGFydHNQYXJ0IiwiZ2V0UGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBa0NnQkEsa0JBQWtCO2VBQWxCQTs7SUFyQkFDLGtCQUFrQjtlQUFsQkE7Ozs0QkFYVTsyQkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBUUMsVUFBMENDLDJCQUFjLENBQXhERCxTQUFTRSxlQUFpQ0QsMkJBQWMsQ0FBL0NDLGNBQWNDLGlCQUFtQkYsMkJBQWMsQ0FBakNFLGdCQUN2QkMsbUJBSzRCQyx1QkFBUyxDQUxyQ0Qsa0JBQ0FFLHVCQUk0QkQsdUJBQVMsQ0FKckNDLHNCQUNBQyx3QkFHNEJGLHVCQUFTLENBSHJDRSx1QkFDQUMseUJBRTRCSCx1QkFBUyxDQUZyQ0csd0JBQ0FDLDBCQUM0QkosdUJBQVMsQ0FEckNJLHlCQUNBQywwQkFBNEJMLHVCQUFTLENBQXJDSztBQUVELFNBQVNYLG1CQUFtQlksSUFBSSxFQUFFQyxPQUFPO1FBQUVDLFlBQUFBLGlFQUFZLEVBQUU7SUFDOUQsSUFBSUMsbUJBQW1CO0lBRXZCLElBQU1DLFdBQVdKLEtBQUtLLE9BQU8sSUFDdkJDLDRCQUE0QkosVUFBVUssUUFBUSxDQUFDSDtJQUVyRCxJQUFJLENBQUNFLDJCQUEyQjtRQUM5QkosWUFBWSxBQUNWLHFCQUFHQSxrQkFETztZQUVWRTtTQUNEO1FBRUQs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