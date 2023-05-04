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
    arePartsEqual: function() {
        return arePartsEqual;
    },
    arePartsRecursive: function() {
        return arePartsRecursive;
    },
    arePartsDirectlyLeftRecursive: function() {
        return arePartsDirectlyLeftRecursive;
    },
    singlePartFromParts: function() {
        return singlePartFromParts;
    },
    arePartsLeftRecursive: function() {
        return arePartsLeftRecursive;
    },
    repeatedPartFromParts: function() {
        return repeatedPartFromParts;
    },
    recursiveRuleNamesFromParts: function() {
        return recursiveRuleNamesFromParts;
    },
    leftRecursiveRuleNamesFromParts: function() {
        return leftRecursiveRuleNamesFromParts;
    },
    isRuleEffectivelyEmpty: function() {
        return isRuleEffectivelyEmpty;
    }
});
var _necessary = require("necessary");
var _occamparsers = require("occam-parsers");
var _part = require("../utilities/part");
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
var first = _necessary.arrayUtilities.first, SequenceOfPartsPart = _occamparsers.Parts.SequenceOfPartsPart, ZeroOrMorePartsPart = _occamparsers.Parts.ZeroOrMorePartsPart, RuleNamePartType = _occamparsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamparsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamparsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamparsers.partTypes.OneOrMorePartsPartType, SequenceOfPartsPartType = _occamparsers.partTypes.SequenceOfPartsPartType, ZeroOrMorePartsPartType = _occamparsers.partTypes.ZeroOrMorePartsPartType;
function arePartsEqual(parts) {
    var firstPart = first(parts), firstPartString = firstPart.asString(), partsEqual = parts.every(function(part) {
        var partString = part.asString(), partStringFirstPartString = partString === firstPartString;
        if (partStringFirstPartString) {
            return true;
        }
    });
    return partsEqual;
}
function arePartsRecursive(parts) {
    var recursiveRuleNames = recursiveRuleNamesFromParts(parts), recursiveRuleNamesLength = recursiveRuleNames.length, partsRecursive = recursiveRuleNamesLength > 0;
    return partsRecursive;
}
function arePartsDirectlyLeftRecursive(parts, leftRecursiveRuleName) {
    var partsDirectlyLeftRecursive = false;
    var leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length;
    if (leftRecursiveRuleNamesLength > 0) {
        var firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), firstLeftRecursiveRuleNameLeftRecursiveRuleName = firstLeftRecursiveRuleName === leftRecursiveRuleName;
        partsDirectlyLeftRecursive = firstLeftRecursiveRuleNameLeftRecursiveRuleName; ///
    }
    return partsDirectlyLeftRecursive;
}
function singlePartFromParts(parts) {
    var singlePart;
    var partsLength = parts.length;
    if (partsLength === 1) {
        var firstPart = first(parts);
        singlePart = firstPart; ///
    } else {
        var sequenceOfPartsPart = new SequenceOfPartsPart(parts);
        singlePart = sequenceOfPartsPart; ///
    }
    return singlePart;
}
function arePartsLeftRecursive(parts) {
    var leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, partsLeftRecursive = leftRecursiveRuleNamesLength > 0;
    return partsLeftRecursive;
}
function repeatedPartFromParts(parts) {
    var singlePart = singlePartFromParts(parts), part = singlePart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part), repeatedPart = zeroOrMorePartsPart; ///
    return repeatedPart;
}
function recursiveRuleNamesFromParts(parts) {
    var recursiveRuleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    parts.forEach(function(part) {
        (0, _part.recursiveRuleNamesFromPart)(part, recursiveRuleNames);
    });
    return recursiveRuleNames;
}
function leftRecursiveRuleNamesFromParts(parts) {
    var leftRecursiveRuleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var firstPart = first(parts), part = firstPart; ///
    (0, _part.leftRecursiveRuleNamesFromPart)(part, leftRecursiveRuleNames);
    return leftRecursiveRuleNames;
}
function isRuleEffectivelyEmpty(rule, ruleMap) {
    var ruleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var ruleEffectivelyEmpty = false;
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
function areDefinitionsEffectivelyEmpty(definitions, ruleMap, ruleNames) {
    var definitionsEffectivelyEmpty = definitions.every(function(definition) {
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
                var choiceOfPartsPart = nonTerminalPart, parts1 = choiceOfPartsPart.getParts(), partsEffectivelyEmpty1 = arePartsEffectivelyEmpty(parts1, ruleMap, ruleNames);
                partEffectivelyEmpty = partsEffectivelyEmpty1; ///
                break;
            }
    }
    return partEffectivelyEmpty;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUGFydHMsIHBhcnRUeXBlcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGlzUGFydEVtcHR5LCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0LCBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVQYXJ0c0VxdWFsKHBhcnRzKSB7XG4gIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgZmlyc3RQYXJ0U3RyaW5nID0gZmlyc3RQYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgIHBhcnRzRXF1YWwgPSBwYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgcGFydFN0cmluZ0ZpcnN0UGFydFN0cmluZyA9IChwYXJ0U3RyaW5nID09PSBmaXJzdFBhcnRTdHJpbmcpO1xuXG4gICAgICAgICAgaWYgKHBhcnRTdHJpbmdGaXJzdFBhcnRTdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzRXF1YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVQYXJ0c1JlY3Vyc2l2ZShwYXJ0cykge1xuICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICBwYXJ0c1JlY3Vyc2l2ZSA9IChyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gcGFydHNSZWN1cnNpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVQYXJ0c0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZShwYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGxldCBwYXJ0c0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAoZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBwYXJ0c0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVQYXJ0RnJvbVBhcnRzKHBhcnRzKSB7XG4gIGxldCBzaW5nbGVQYXJ0O1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgIHNpbmdsZVBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICBzaW5nbGVQYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG4gIH1cblxuICByZXR1cm4gc2luZ2xlUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhcnRzTGVmdFJlY3Vyc2l2ZShwYXJ0cykge1xuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgcGFydHNMZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gcGFydHNMZWZ0UmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRQYXJ0RnJvbVBhcnRzKHBhcnRzKSB7XG4gIGNvbnN0IHNpbmdsZVBhcnQgPSBzaW5nbGVQYXJ0RnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgcGFydCA9IHNpbmdsZVBhcnQsXG4gICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KSxcbiAgICAgICAgcmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuXG4gIHJldHVybiByZXBlYXRlZFBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSdWxlRWZmZWN0aXZlbHlFbXB0eShydWxlLCBydWxlTWFwLCBydWxlTmFtZXMgPSBbXSkgeyAvLy9cbiAgbGV0IHJ1bGVFZmZlY3RpdmVseUVtcHR5ID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgaWYgKCFydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgcnVsZU5hbWVzID0gWyAvLy9cbiAgICAgIC4uLnJ1bGVOYW1lcyxcbiAgICAgIHJ1bGVOYW1lXG4gICAgXTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSA9IGFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eShkZWZpbml0aW9ucywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHJ1bGVFZmZlY3RpdmVseUVtcHR5ID0gZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBydWxlRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb25zLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5ID0gZGVmaW5pdGlvbnMuZXZlcnkoKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSA9IGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpLFxuICAgICAgICBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgcmV0dXJuIGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgIGNvbnN0IHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eShwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKHBhcnRFZmZlY3RpdmVseUVtcHR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcblxuICBjb25zdCBwYXJUZXJtaW5hbFBhcnQgPSBwYXJ0LmlzVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhclRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFBhcnRFbXB0eSA9IGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSh0ZXJtaW5hbFBhcnQpO1xuXG4gICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0ZXJtaW5hbFBhcnRFbXB0eTsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KG5vblRlcm1pbmFsTlBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IG5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkodGVybWluYWxQYXJ0KSB7XG4gIGNvbnN0IHBhcnQgPSB0ZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgcGFydEVtcHR5ID0gaXNQYXJ0RW1wdHkocGFydCksXG4gICAgICAgIHRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0RW1wdHk7IC8vL1xuXG4gIHJldHVybiB0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkobm9uVGVybWluYWxQYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBpc1J1bGVFZmZlY3RpdmVseUVtcHR5KHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBydWxlRWZmZWN0aXZlbHlFbXB0eTsgIC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IGFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eShwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBjaG9pY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cbiJdLCJuYW1lcyI6WyJhcmVQYXJ0c0VxdWFsIiwiYXJlUGFydHNSZWN1cnNpdmUiLCJhcmVQYXJ0c0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZSIsInNpbmdsZVBhcnRGcm9tUGFydHMiLCJhcmVQYXJ0c0xlZnRSZWN1cnNpdmUiLCJyZXBlYXRlZFBhcnRGcm9tUGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwiaXNSdWxlRWZmZWN0aXZlbHlFbXB0eSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiUGFydHMiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJ0cyIsImZpcnN0UGFydCIsImZpcnN0UGFydFN0cmluZyIsImFzU3RyaW5nIiwicGFydHNFcXVhbCIsImV2ZXJ5IiwicGFydCIsInBhcnRTdHJpbmciLCJwYXJ0U3RyaW5nRmlyc3RQYXJ0U3RyaW5nIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwicGFydHNSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJwYXJ0c0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInNpbmdsZVBhcnQiLCJwYXJ0c0xlbmd0aCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0c0xlZnRSZWN1cnNpdmUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwicmVwZWF0ZWRQYXJ0IiwiZm9yRWFjaCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwicnVsZSIsInJ1bGVNYXAiLCJydWxlTmFtZXMiLCJydWxlRWZmZWN0aXZlbHlFbXB0eSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkiLCJhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkiLCJpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5IiwiZ2V0UGFydHMiLCJwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkiLCJhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkiLCJwYXJ0RWZmZWN0aXZlbHlFbXB0eSIsImlzUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJwYXJUZXJtaW5hbFBhcnQiLCJpc1Rlcm1pbmFsUGFydCIsInRlcm1pbmFsUGFydCIsInRlcm1pbmFsUGFydEVtcHR5IiwiaXNUZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5Iiwibm9uVGVybWluYWxOUGFydCIsIm5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJwYXJ0RW1wdHkiLCJpc1BhcnRFbXB0eSIsInRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJub25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsInJ1bGVOYW1lUGFydCIsImdldFJ1bGVOYW1lIiwib25lT3JNb3JlUGFydHNQYXJ0IiwiZ2V0UGFydCIsImNob2ljZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnQmdCQSxhQUFhO2VBQWJBOztJQWVBQyxpQkFBaUI7ZUFBakJBOztJQVFBQyw2QkFBNkI7ZUFBN0JBOztJQWdCQUMsbUJBQW1CO2VBQW5CQTs7SUFrQkFDLHFCQUFxQjtlQUFyQkE7O0lBUUFDLHFCQUFxQjtlQUFyQkE7O0lBU0FDLDJCQUEyQjtlQUEzQkE7O0lBUUFDLCtCQUErQjtlQUEvQkE7O0lBU0FDLHNCQUFzQjtlQUF0QkE7Ozt5QkF6R2U7NEJBQ0U7b0JBRXVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRCxPQUNBRSxzQkFBNkNDLG1CQUFLLENBQWxERCxxQkFBcUJFLHNCQUF3QkQsbUJBQUssQ0FBN0JDLHFCQUNyQkMsbUJBSzRCQyx1QkFBUyxDQUxyQ0Qsa0JBQ0FFLHVCQUk0QkQsdUJBQVMsQ0FKckNDLHNCQUNBQyx3QkFHNEJGLHVCQUFTLENBSHJDRSx1QkFDQUMseUJBRTRCSCx1QkFBUyxDQUZyQ0csd0JBQ0FDLDBCQUM0QkosdUJBQVMsQ0FEckNJLHlCQUNBQywwQkFBNEJMLHVCQUFTLENBQXJDSztBQUVELFNBQVNwQixjQUFjcUIsS0FBSyxFQUFFO0lBQ25DLElBQU1DLFlBQVliLE1BQU1ZLFFBQ2xCRSxrQkFBa0JELFVBQVVFLFFBQVEsSUFDcENDLGFBQWFKLE1BQU1LLEtBQUssQ0FBQyxTQUFDQyxNQUFT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