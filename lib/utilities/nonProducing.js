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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9uUHJvZHVjaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlTm9uUHJvZHVjaW5nKHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyA9IFtdKSB7XG4gIGxldCBydWxlTm9uUHJvZHVjaW5nID0gdHJ1ZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNOb25Qcm9kdWNpbmcgPSBhcmVEZWZpbml0aW9uc05vblByb2R1Y2luZyhkZWZpbml0aW9ucywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHJ1bGVOb25Qcm9kdWNpbmcgPSBkZWZpbml0aW9uc05vblByb2R1Y2luZzsgLy8vXG4gIH1cblxuICByZXR1cm4gcnVsZU5vblByb2R1Y2luZztcbn1cblxuZnVuY3Rpb24gYXJlRGVmaW5pdGlvbnNOb25Qcm9kdWNpbmcoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBkZWZpbml0aW9uc05vblByb2R1Y2luZyA9IGRlZmluaXRpb25zLmV2ZXJ5KChkZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbk5vblByb2R1Y2luZyA9IGlzRGVmaW5pdGlvbk5vblByb2R1Y2luZyhkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKGRlZmluaXRpb25Ob25Qcm9kdWNpbmcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zTm9uUHJvZHVjaW5nO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluaXRpb25Ob25Qcm9kdWNpbmcoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBwYXJ0c05vblByb2R1Y2luZyA9IGFyZVBhcnRzTm9uUHJvZHVjaW5nKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpLFxuICAgICAgICBkZWZpbml0aW9uTm9uUHJvZHVjaW5nID0gcGFydHNOb25Qcm9kdWNpbmc7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25Ob25Qcm9kdWNpbmc7XG59XG5cbmZ1bmN0aW9uIGFyZVBhcnRzTm9uUHJvZHVjaW5nKHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHNOb25Qcm9kdWNpbmcgPSBwYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgIGNvbnN0IHBhcnROb25Qcm9kdWNpbmcgPSBpc1BhcnROb25Qcm9kdWNpbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChwYXJ0Tm9uUHJvZHVjaW5nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0c05vblByb2R1Y2luZztcbn1cblxuZnVuY3Rpb24gaXNQYXJ0Tm9uUHJvZHVjaW5nKHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydE5vblByb2R1Y2luZztcblxuICBjb25zdCBwYXJUZXJtaW5hbFBhcnQgPSBwYXJ0LmlzVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhclRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnRVc2VsZXNzID0gaXNUZXJtaW5hbFBhcnROb25Qcm9kdWNpbmcodGVybWluYWxQYXJ0KTtcblxuICAgIHBhcnROb25Qcm9kdWNpbmcgPSB0ZXJtaW5hbFBhcnRVc2VsZXNzOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5QYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsUGFydE5vblByb2R1Y2luZyA9IGlzTm9uVGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nKG5vblRlcm1pbmFsTlBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBwYXJ0Tm9uUHJvZHVjaW5nID0gbm9uVGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXJ0Tm9uUHJvZHVjaW5nO1xufVxuXG5mdW5jdGlvbiBpc1Rlcm1pbmFsUGFydE5vblByb2R1Y2luZyh0ZXJtaW5hbFBhcnQpIHtcbiAgY29uc3QgdGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nID0gZmFsc2U7XG5cbiAgcmV0dXJuIHRlcm1pbmFsUGFydE5vblByb2R1Y2luZztcbn1cblxuZnVuY3Rpb24gaXNOb25UZXJtaW5hbFBhcnROb25Qcm9kdWNpbmcobm9uVGVybWluYWxQYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgbGV0IHBhcnROb25Qcm9kdWNpbmcgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlTm9uUHJvZHVjaW5nID0gaXNSdWxlTm9uUHJvZHVjaW5nKHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgcGFydE5vblByb2R1Y2luZyA9IHJ1bGVOb25Qcm9kdWNpbmc7ICAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgcGFydE5vblByb2R1Y2luZyA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcGFydE5vblByb2R1Y2luZyA9IGlzUGFydE5vblByb2R1Y2luZyhwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBwYXJ0Tm9uUHJvZHVjaW5nID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzTm9uUHJvZHVjaW5nID0gYXJlUGFydHNOb25Qcm9kdWNpbmcocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIHBhcnROb25Qcm9kdWNpbmcgPSBwYXJ0c05vblByb2R1Y2luZzsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c05vblByb2R1Y2luZyA9IHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnROb25Qcm9kdWNpbmcgPSBpc1BhcnROb25Qcm9kdWNpbmcocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcGFydE5vblByb2R1Y2luZztcbiAgICAgICAgICAgIH0pXG5cbiAgICAgIHBhcnROb25Qcm9kdWNpbmcgPSBwYXJ0c05vblByb2R1Y2luZzsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0Tm9uUHJvZHVjaW5nO1xufVxuIl0sIm5hbWVzIjpbImlzUnVsZU5vblByb2R1Y2luZyIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwicnVsZSIsInJ1bGVNYXAiLCJydWxlTmFtZXMiLCJydWxlTm9uUHJvZHVjaW5nIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zTm9uUHJvZHVjaW5nIiwiYXJlRGVmaW5pdGlvbnNOb25Qcm9kdWNpbmciLCJldmVyeSIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTm9uUHJvZHVjaW5nIiwiaXNEZWZpbml0aW9uTm9uUHJvZHVjaW5nIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTm9uUHJvZHVjaW5nIiwiYXJlUGFydHNOb25Qcm9kdWNpbmciLCJwYXJ0IiwicGFydE5vblByb2R1Y2luZyIsImlzUGFydE5vblByb2R1Y2luZyIsInBhclRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0VXNlbGVzcyIsImlzVGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nIiwibm9uVGVybWluYWxOUGFydCIsIm5vblRlcm1pbmFsUGFydE5vblByb2R1Y2luZyIsImlzTm9uVGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nIiwidGVybWluYWxQYXJ0Tm9uUHJvZHVjaW5nIiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTmFtZVBhcnQiLCJnZXRSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsImdldFBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdnQkE7OztlQUFBQTs7OzRCQVRVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFRQyxtQkFLNEJDLHVCQUFTLENBTHJDRCxrQkFDQUUsdUJBSTRCRCx1QkFBUyxDQUpyQ0Msc0JBQ0FDLHdCQUc0QkYsdUJBQVMsQ0FIckNFLHVCQUNBQyx5QkFFNEJILHVCQUFTLENBRnJDRyx3QkFDQUMs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