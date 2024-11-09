"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isRuleNonProducing", {
    enumerable: true,
    get: function() {
        return isRuleNonProducing;
    }
});
var _occamparsers = require("occam-parsers");
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
function isRuleNonProducing(rule, ruleMap) {
    var ruleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var ruleNonProducing = false;
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
    var parts = definition.getParts(), partsNonProducing = arePartsNonProducing(parts, ruleMap, ruleNames), definitionNonProducing = partsNonProducing;
    return definitionNonProducing;
}
function arePartsNonProducing(parts, ruleMap, ruleNames) {
    var partsNonProducing = parts.every(function(part) {
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
                partNonProducing = true;
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
                partNonProducing = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9uUHJvZHVjaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlTm9uUHJvZHVjaW5nKHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyA9IFtdKSB7XG4gIGxldCBydWxlTm9uUHJvZHVjaW5nID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgaWYgKCFydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgcnVsZU5hbWVzID0gWyAvLy9cbiAgICAgIC4uLnJ1bGVOYW1lcyxcbiAgICAgIHJ1bGVOYW1lXG4gICAgXTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGRlZmluaXRpb25zTm9uUHJvZHVjaW5nID0gYXJlRGVmaW5pdGlvbnNOb25Qcm9kdWNpbmcoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBydWxlTm9uUHJvZHVjaW5nID0gZGVmaW5pdGlvbnNOb25Qcm9kdWNpbmc7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVOb25Qcm9kdWNpbmc7XG59XG5cbmZ1bmN0aW9uIGFyZURlZmluaXRpb25zTm9uUHJvZHVjaW5nKGRlZmluaXRpb25zLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgZGVmaW5pdGlvbnNOb25Qcm9kdWNpbmcgPSBkZWZpbml0aW9ucy5ldmVyeSgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb25Ob25Qcm9kdWNpbmcgPSBpc0RlZmluaXRpb25Ob25Qcm9kdWNpbmcoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChkZWZpbml0aW9uTm9uUHJvZHVjaW5nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9uc05vblByb2R1Y2luZztcbn1cblxuZnVuY3Rpb24gaXNEZWZpbml0aW9uTm9uUHJvZHVjaW5nKGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgcGFydHNOb25Qcm9kdWNpbmcgPSBhcmVQYXJ0c05vblByb2R1Y2luZyhwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSxcbiAgICAgICAgZGVmaW5pdGlvbk5vblByb2R1Y2luZyA9IHBhcnRzTm9uUHJvZHVjaW5nO1xuXG4gIHJldHVybiBkZWZpbml0aW9uTm9uUHJvZHVjaW5nO1xufVxuXG5mdW5jdGlvbiBhcmVQYXJ0c05vblByb2R1Y2luZyhwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzTm9uUHJvZHVjaW5nID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0Tm9uUHJvZHVjaW5nID0gaXNQYXJ0Tm9uUHJvZHVjaW5nKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBpZiAocGFydE5vblByb2R1Y2luZykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNOb25Qcm9kdWNpbmc7XG59XG5cbmZ1bmN0aW9uIGlzUGFydE5vblByb2R1Y2luZyhwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgbGV0IHBhcnROb25Qcm9kdWNpbmc7XG5cbiAgY29uc3QgcGFyVGVybWluYWxQYXJ0ID0gcGFydC5pc1Rlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJUZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgdGVybWluYWxQYXJ0VXNlbGVzcyA9IGlzVGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nKHRlcm1pbmFsUGFydCk7XG5cbiAgICBwYXJ0Tm9uUHJvZHVjaW5nID0gdGVybWluYWxQYXJ0VXNlbGVzczsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbFBhcnROb25Qcm9kdWNpbmcgPSBpc05vblRlcm1pbmFsUGFydE5vblByb2R1Y2luZyhub25UZXJtaW5hbE5QYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcGFydE5vblByb2R1Y2luZyA9IG5vblRlcm1pbmFsUGFydE5vblByb2R1Y2luZzsgLy8vXG4gIH1cblxuICByZXR1cm4gcGFydE5vblByb2R1Y2luZztcbn1cblxuZnVuY3Rpb24gaXNUZXJtaW5hbFBhcnROb25Qcm9kdWNpbmcodGVybWluYWxQYXJ0KSB7XG4gIGNvbnN0IHRlcm1pbmFsUGFydE5vblByb2R1Y2luZyA9IGZhbHNlO1xuXG4gIHJldHVybiB0ZXJtaW5hbFBhcnROb25Qcm9kdWNpbmc7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nKG5vblRlcm1pbmFsUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0Tm9uUHJvZHVjaW5nID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZU5vblByb2R1Y2luZyA9IGlzUnVsZU5vblByb2R1Y2luZyhydWxlLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICAgIHBhcnROb25Qcm9kdWNpbmcgPSBydWxlTm9uUHJvZHVjaW5nOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIHBhcnROb25Qcm9kdWNpbmcgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIHBhcnROb25Qcm9kdWNpbmcgPSBpc1BhcnROb25Qcm9kdWNpbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgcGFydE5vblByb2R1Y2luZyA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c05vblByb2R1Y2luZyA9IGFyZVBhcnRzTm9uUHJvZHVjaW5nKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBwYXJ0Tm9uUHJvZHVjaW5nID0gcGFydHNOb25Qcm9kdWNpbmc7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNOb25Qcm9kdWNpbmcgPSBwYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0Tm9uUHJvZHVjaW5nID0gaXNQYXJ0Tm9uUHJvZHVjaW5nKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnROb25Qcm9kdWNpbmc7XG4gICAgICAgICAgICB9KVxuXG4gICAgICBwYXJ0Tm9uUHJvZHVjaW5nID0gcGFydHNOb25Qcm9kdWNpbmc7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydE5vblByb2R1Y2luZztcbn1cbiJdLCJuYW1lcyI6WyJpc1J1bGVOb25Qcm9kdWNpbmciLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsInJ1bGUiLCJydWxlTWFwIiwicnVsZU5hbWVzIiwicnVsZU5vblByb2R1Y2luZyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc05vblByb2R1Y2luZyIsImFyZURlZmluaXRpb25zTm9uUHJvZHVjaW5nIiwiZXZlcnkiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbk5vblByb2R1Y2luZyIsImlzRGVmaW5pdGlvbk5vblByb2R1Y2luZyIsInBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0c05vblByb2R1Y2luZyIsImFyZVBhcnRzTm9uUHJvZHVjaW5nIiwicGFydCIsInBhcnROb25Qcm9kdWNpbmciLCJpc1BhcnROb25Qcm9kdWNpbmciLCJwYXJUZXJtaW5hbFBhcnQiLCJpc1Rlcm1pbmFsUGFydCIsInRlcm1pbmFsUGFydCIsInRlcm1pbmFsUGFydFVzZWxlc3MiLCJpc1Rlcm1pbmFsUGFydE5vblByb2R1Y2luZyIsIm5vblRlcm1pbmFsTlBhcnQiLCJub25UZXJtaW5hbFBhcnROb25Qcm9kdWNpbmciLCJpc05vblRlcm1pbmFsUGFydE5vblByb2R1Y2luZyIsInRlcm1pbmFsUGFydE5vblByb2R1Y2luZyIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwicnVsZU5hbWVQYXJ0IiwiZ2V0UnVsZU5hbWUiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJnZXRQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImNob2ljZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXZ0JBOzs7ZUFBQUE7Ozs0QkFUVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBUUMsbUJBSzRCQyx1QkFBUyxDQUxyQ0Qsa0JBQ0FFLHVCQUk0QkQsdUJBQVMsQ0FKckNDLHNCQUNBQyx3QkFHNEJGLHVCQUFTLENBSHJDRSx1QkFDQUMseUJBRTRCSCx1QkFBUyxDQUZyQ0csd0JBQ0FDLDBCQUM0QkosdUJBQVMsQ0FEckNJLHlCQUNBQywwQkFBNEJMLHVCQUFTLENBQXJDSztBQUVELFNBQVNQLG1CQUFtQlEsSUFBSSxFQUFFQyxPQUFPO1FBQUVDLFlBQUFBLGlFQUFZLEVBQUU7SUFDOUQsSUFBSUMsbUJBQW1CO0lBRXZCLElBQU1DLFdBQVdKLEtBQUtLLE9BQU8sSUFDdkJDLDRCQUE0QkosVUFBVUssUUFBUSxDQUFDSDtJQUVyRCxJQUFJLENBQUNFLDJCQUEyQjtRQUM5QkosWUFBWSxBQUNWLHFCQUFHQSxrQkFETztZQUVWRTtTQUNEO1FBRUQsSUFBTUksY0FBY1IsS0FBS1MsY0FBYyxJQUNqQ0MsMEJBQTBCQywyQkFBMkJILGFBQWFQLFNBQVNDO1FBRWpGQyxtQkFBbUJPLHlCQUF5QixHQUFHO0lBQ2pEO0lBRUEsT0FBT1A7QUFDVDtBQUVBLFNBQVNRLDJCQUEyQkgsV0FBVyxFQUFFUCxPQUFPLEVBQUVDLFNBQVM7SUFDakUsSUFBTVEsMEJBQTBCRixZQUFZSSxLQUFLLENBQUMsU0FBQ0M7UUFDakQsSUFBTUMseUJBQXlCQyx5QkFBeUJGLFlBQVlaLFNBQVNDO1FBRTdFLElBQUlZLHdCQUF3QjtZQUMxQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTSyx5QkFBeUJGLFVBQVUsRUFBRVosT0FBTyxFQUFFQyxTQUFTO0lBQzlELElBQU1jLFFBQVFILFdBQVdJLFFBQVEsSUFDM0JDLG9CQUFvQkMscUJBQXFCSCxPQUFPZixTQUFTQyxZQUN6RFkseUJBQXlCSTtJQUUvQixPQUFPSjtBQUNUO0FBRUEsU0FBU0sscUJBQXFCSCxLQUFLLEVBQUVmLE9BQU8sRUFBRUMsU0FBUztJQUNyRCxJQUFNZ0Isb0JBQW9CRixNQUFNSixLQUFLLENBQUMsU0FBQ1E7UUFDckMsSUFBTUMsbUJBQW1CQyxtQkFBbUJGLE1BQU1uQixTQUFTQztRQUUzRCxJQUFJbUIsa0JBQWtCO1lBQ3BCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0g7QUFDVDtBQUVBLFNBQVNJLG1CQUFtQkYsSUFBSSxFQUFFbkIsT0FBTyxFQUFFQyxTQUFTO0lBQ2xELElBQUltQjtJQUVKLElBQU1FLGtCQUFrQkgsS0FBS0ksY0FBYztJQUUzQyxJQUFJRCxpQkFBaUI7UUFDbkIsSUFBTUUsZUFBZUwsTUFDZk0sc0JBQXNCQywyQkFBMkJGO1FBRXZESixtQkFBbUJLLHFCQUFxQixHQUFHO0lBQzdDLE9BQU87UUFDTCxJQUFNRSxtQkFBbUJSLE1BQ25CUyw4QkFBOEJDLDhCQUE4QkYsa0JBQWtCM0IsU0FBU0M7UUFFN0ZtQixtQkFBbUJRLDZCQUE2QixHQUFHO0lBQ3JEO0lBRUEsT0FBT1I7QUFDVDtBQUVBLFNBQVNNLDJCQUEyQkYsWUFBWTtJQUM5QyxJQUFNTSwyQkFBMkI7SUFFakMsT0FBT0E7QUFDVDtBQUVBLFNBQVNELDhCQUE4QkUsZUFBZSxFQUFFL0IsT0FBTyxFQUFFQyxTQUFTO0lBQ3hFLElBQUltQixtQkFBbUI7SUFFdkIsSUFBTVksT0FBT0QsZ0JBQWdCRSxPQUFPO0lBRXBDLE9BQVFEO1FBQ04sS0FBS3hDO1lBQWtCO2dCQUNyQixJQUFNMEMsZUFBZUgsaUJBQ2Y1QixXQUFXK0IsYUFBYUMsV0FBVyxJQUNuQ3BDLE9BQU9DLE9BQU8sQ0FBQ0csU0FBUyxJQUFJO2dCQUVsQyxJQUFJSixTQUFTLE1BQU07b0JBQ2pCLElBQU1HLG1CQUFtQlgsbUJBQW1CUSxNQUFNQyxTQUFTQztvQkFFM0RtQixtQkFBbUJsQixrQkFBbUIsR0FBRztnQkFDM0M7Z0JBRUE7WUFDRjtRQUVBLEtBQUtSO1lBQXNCO2dCQUN6QjBCLG1CQUFtQjtnQkFFbkI7WUFDRjtRQUVBLEtBQUt4QjtZQUF3QjtnQkFDM0IsSUFBTXdDLHFCQUFxQkwsaUJBQ3JCWixPQUFPaUIsbUJBQW1CQyxPQUFPO2dCQUV2Q2pCLG1CQUFtQkMsbUJBQW1CRixNQUFNbkIsU0FBU0M7Z0JBRXJEO1lBQ0Y7UUFFQSxLQUFLSjtZQUF5QjtnQkFDNUJ1QixtQkFBbUI7Z0JBRW5CO1lBQ0Y7UUFFQSxLQUFLdEI7WUFBeUI7Z0JBQzVCLElBQU13QyxzQkFBc0JQLGlCQUN0QmhCLFFBQVF1QixvQkFBb0J0QixRQUFRLElBQ3BDQyxvQkFBb0JDLHFCQUFxQkgsT0FBT2YsU0FBU0M7Z0JBRS9EbUIsbUJBQW1CSCxtQkFBbUIsR0FBRztnQkFFekM7WUFDRjtRQUVBLEtBQUt0QjtZQUF1QjtnQkFDMUIsSUFBTTRDLG9CQUFvQlIsaUJBQ3BCaEIsU0FBUXdCLGtCQUFrQnZCLFFBQVEsSUFDbENDLHFCQUFvQkYsT0FBTUosS0FBSyxDQUFDLFNBQUNRO29CQUMvQixJQUFNQyxtQkFBbUJDLG1CQUFtQkYsTUFBTW5CLFNBQVNDO29CQUUzRCxPQUFPbUI7Z0JBQ1Q7Z0JBRU5BLG1CQUFtQkgsb0JBQW1CLEdBQUc7Z0JBRXpDO1lBQ0Y7SUFDRjtJQUVBLE9BQU9HO0FBQ1QifQ==