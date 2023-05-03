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
    cloneParts: function() {
        return cloneParts;
    },
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
var _occamparsers = require("occam-parsers");
var _array = require("../utilities/array");
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
var SequenceOfPartsPart = _occamparsers.Parts.SequenceOfPartsPart, ZeroOrMorePartsPart = _occamparsers.Parts.ZeroOrMorePartsPart, RuleNamePartType = _occamparsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamparsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamparsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamparsers.partTypes.OneOrMorePartsPartType, SequenceOfPartsPartType = _occamparsers.partTypes.SequenceOfPartsPartType, ZeroOrMorePartsPartType = _occamparsers.partTypes.ZeroOrMorePartsPartType;
function cloneParts(parts) {
    parts = parts.map(function(part) {
        var clonedPart = part.clone();
        part = clonedPart; ///
        return part;
    });
    return parts;
}
function arePartsEqual(parts) {
    var firstPart = (0, _array.first)(parts), firstPartString = firstPart.asString(), partsEqual = parts.every(function(part) {
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
        var firstLeftRecursiveRuleName = (0, _array.first)(leftRecursiveRuleNames), firstLeftRecursiveRuleNameLeftRecursiveRuleName = firstLeftRecursiveRuleName === leftRecursiveRuleName;
        partsDirectlyLeftRecursive = firstLeftRecursiveRuleNameLeftRecursiveRuleName; ///
    }
    return partsDirectlyLeftRecursive;
}
function singlePartFromParts(parts) {
    var singlePart;
    var partsLength = parts.length;
    if (partsLength === 1) {
        var firstPart = (0, _array.first)(parts);
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
    var firstPart = (0, _array.first)(parts), part = firstPart; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzUGFydEVtcHR5LCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmNvbnN0IHsgU2VxdWVuY2VPZlBhcnRzUGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVQYXJ0cyhwYXJ0cykge1xuICBwYXJ0cyA9IHBhcnRzLm1hcCgocGFydCkgPT4ge1xuICAgIGNvbnN0IGNsb25lZFBhcnQgPSBwYXJ0LmNsb25lKCk7XG5cbiAgICBwYXJ0ID0gY2xvbmVkUGFydDsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhcnRzRXF1YWwocGFydHMpIHtcbiAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBmaXJzdFBhcnRTdHJpbmcgPSBmaXJzdFBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgcGFydHNFcXVhbCA9IHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBwYXJ0U3RyaW5nRmlyc3RQYXJ0U3RyaW5nID0gKHBhcnRTdHJpbmcgPT09IGZpcnN0UGFydFN0cmluZyk7XG5cbiAgICAgICAgICBpZiAocGFydFN0cmluZ0ZpcnN0UGFydFN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFydHNFcXVhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhcnRzUmVjdXJzaXZlKHBhcnRzKSB7XG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgIHBhcnRzUmVjdXJzaXZlID0gKHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBwYXJ0c1JlY3Vyc2l2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlKHBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgbGV0IHBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGg7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIHBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXJ0c0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZVBhcnRGcm9tUGFydHMocGFydHMpIHtcbiAgbGV0IHNpbmdsZVBhcnQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKHBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgc2luZ2xlUGFydCA9IGZpcnN0UGFydDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBTZXF1ZW5jZU9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHNpbmdsZVBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzaW5nbGVQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNMZWZ0UmVjdXJzaXZlKHBhcnRzKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICBwYXJ0c0xlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBwYXJ0c0xlZnRSZWN1cnNpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZFBhcnRGcm9tUGFydHMocGFydHMpIHtcbiAgY29uc3Qgc2luZ2xlUGFydCA9IHNpbmdsZVBhcnRGcm9tUGFydHMocGFydHMpLFxuICAgICAgICBwYXJ0ID0gc2luZ2xlUGFydCxcbiAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpLFxuICAgICAgICByZXBlYXRlZFBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgcmV0dXJuIHJlcGVhdGVkUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cywgcmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1J1bGVFZmZlY3RpdmVseUVtcHR5KHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyA9IFtdKSB7IC8vL1xuICBsZXQgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5ID0gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb25zLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkgPSBkZWZpbml0aW9ucy5ldmVyeSgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5ID0gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eShkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyksXG4gICAgICAgIGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5ID0gcGFydHNFZmZlY3RpdmVseUVtcHR5OyAvLy9cblxuICByZXR1cm4gZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eShwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgY29uc3QgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBpZiAocGFydEVmZmVjdGl2ZWx5RW1wdHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eShwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseUVtcHR5O1xuXG4gIGNvbnN0IHBhclRlcm1pbmFsUGFydCA9IHBhcnQuaXNUZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFyVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsUGFydEVtcHR5ID0gaXNUZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KHRlcm1pbmFsUGFydCk7XG5cbiAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHRlcm1pbmFsUGFydEVtcHR5OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5QYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkobm9uVGVybWluYWxOUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gbm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eTsgLy8vXG4gIH1cblxuICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSh0ZXJtaW5hbFBhcnQpIHtcbiAgY29uc3QgcGFydCA9IHRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICBwYXJ0RW1wdHkgPSBpc1BhcnRFbXB0eShwYXJ0KSxcbiAgICAgICAgdGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRFbXB0eTsgLy8vXG5cbiAgcmV0dXJuIHRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eShub25UZXJtaW5hbFBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlRWZmZWN0aXZlbHlFbXB0eSA9IGlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkocnVsZSwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHJ1bGVFZmZlY3RpdmVseUVtcHR5OyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gcGFydHNFZmZlY3RpdmVseUVtcHR5OyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseUVtcHR5O1xufVxuIl0sIm5hbWVzIjpbImNsb25lUGFydHMiLCJhcmVQYXJ0c0VxdWFsIiwiYXJlUGFydHNSZWN1cnNpdmUiLCJhcmVQYXJ0c0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZSIsInNpbmdsZVBhcnRGcm9tUGFydHMiLCJhcmVQYXJ0c0xlZnRSZWN1cnNpdmUiLCJyZXBlYXRlZFBhcnRGcm9tUGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwiaXNSdWxlRWZmZWN0aXZlbHlFbXB0eSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJQYXJ0cyIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInBhcnRzIiwibWFwIiwicGFydCIsImNsb25lZFBhcnQiLCJjbG9uZSIsImZpcnN0UGFydCIsImZpcnN0IiwiZmlyc3RQYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJwYXJ0c0VxdWFsIiwiZXZlcnkiLCJwYXJ0U3RyaW5nIiwicGFydFN0cmluZ0ZpcnN0UGFydFN0cmluZyIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsInBhcnRzUmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJzaW5nbGVQYXJ0IiwicGFydHNMZW5ndGgiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHNMZWZ0UmVjdXJzaXZlIiwiemVyb09yTW9yZVBhcnRzUGFydCIsInJlcGVhdGVkUGFydCIsImZvckVhY2giLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsInJ1bGUiLCJydWxlTWFwIiwicnVsZU5hbWVzIiwicnVsZUVmZmVjdGl2ZWx5RW1wdHkiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5IiwiYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5IiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5IiwiaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSIsImdldFBhcnRzIiwicGFydHNFZmZlY3RpdmVseUVtcHR5IiwiYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5IiwicGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJpc1BhcnRFZmZlY3RpdmVseUVtcHR5IiwicGFyVGVybWluYWxQYXJ0IiwiaXNUZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnRFbXB0eSIsImlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsIm5vblRlcm1pbmFsTlBhcnQiLCJub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5IiwiaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5IiwicGFydEVtcHR5IiwiaXNQYXJ0RW1wdHkiLCJ0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTmFtZVBhcnQiLCJnZXRSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsImdldFBhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZWdCQSxVQUFVO2VBQVZBOztJQVlBQyxhQUFhO2VBQWJBOztJQWVBQyxpQkFBaUI7ZUFBakJBOztJQVFBQyw2QkFBNkI7ZUFBN0JBOztJQWdCQUMsbUJBQW1CO2VBQW5CQTs7SUFrQkFDLHFCQUFxQjtlQUFyQkE7O0lBUUFDLHFCQUFxQjtlQUFyQkE7O0lBU0FDLDJCQUEyQjtlQUEzQkE7O0lBUUFDLCtCQUErQjtlQUEvQkE7O0lBU0FDLHNCQUFzQjtlQUF0QkE7Ozs0QkFwSGlCO3FCQUVYO29CQUNrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEYsSUFBUUMsc0JBQTZDQyxtQkFBSyxDQUFsREQscUJBQXFCRSxzQkFBd0JELG1CQUFLLENBQTdCQyxxQkFDckJDLG1CQUs0QkMsdUJBQVMsQ0FMckNELGtCQUNBRSx1QkFJNEJELHVCQUFTLENBSnJDQyxzQkFDQUMsd0JBRzRCRix1QkFBUyxDQUhyQ0UsdUJBQ0FDLHlCQUU0QkgsdUJBQVMsQ0FGckNHLHdCQUNBQyww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