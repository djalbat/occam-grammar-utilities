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
function cloneParts(parts) {
    parts = parts.map(function(part) {
        var clonedPart = part.clone();
        part = clonedPart; ///
        return part;
    });
    return parts;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUGFydHMsIHBhcnRUeXBlcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGlzUGFydEVtcHR5LCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0LCBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVBhcnRzKHBhcnRzKSB7XG4gIHBhcnRzID0gcGFydHMubWFwKChwYXJ0KSA9PiB7XG4gICAgY29uc3QgY2xvbmVkUGFydCA9IHBhcnQuY2xvbmUoKTtcblxuICAgIHBhcnQgPSBjbG9uZWRQYXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gcGFydDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNFcXVhbChwYXJ0cykge1xuICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgIGZpcnN0UGFydFN0cmluZyA9IGZpcnN0UGFydC5hc1N0cmluZygpLFxuICAgICAgICBwYXJ0c0VxdWFsID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpLFxuICAgICAgICAgICAgICAgIHBhcnRTdHJpbmdGaXJzdFBhcnRTdHJpbmcgPSAocGFydFN0cmluZyA9PT0gZmlyc3RQYXJ0U3RyaW5nKTtcblxuICAgICAgICAgIGlmIChwYXJ0U3RyaW5nRmlyc3RQYXJ0U3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJ0c0VxdWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gcmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgcGFydHNSZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzUmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUocGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBsZXQgcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aDtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBsZXQgc2luZ2xlUGFydDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICBzaW5nbGVQYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgc2luZ2xlUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHNpbmdsZVBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVQYXJ0c0xlZnRSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgIHBhcnRzTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzTGVmdFJlY3Vyc2l2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBjb25zdCBzaW5nbGVQYXJ0ID0gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIHBhcnQgPSBzaW5nbGVQYXJ0LFxuICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCksXG4gICAgICAgIHJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICByZXR1cm4gcmVwZWF0ZWRQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzLCByZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkocnVsZSwgcnVsZU1hcCwgcnVsZU5hbWVzID0gW10pIHsgLy8vXG4gIGxldCBydWxlRWZmZWN0aXZlbHlFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gIGlmICghcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgIHJ1bGVOYW1lcyA9IFsgLy8vXG4gICAgICAuLi5ydWxlTmFtZXMsXG4gICAgICBydWxlTmFtZVxuICAgIF07XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBydWxlRWZmZWN0aXZlbHlFbXB0eSA9IGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG4gIH1cblxuICByZXR1cm4gcnVsZUVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eShkZWZpbml0aW9ucywgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSA9IGRlZmluaXRpb25zLmV2ZXJ5KChkZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkgPSBpc0RlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb24sIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eShkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgIHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IGFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eShwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSxcbiAgICAgICAgZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gIHJldHVybiBkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIGlmIChwYXJ0RWZmZWN0aXZlbHlFbXB0eSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG5cbiAgY29uc3QgcGFyVGVybWluYWxQYXJ0ID0gcGFydC5pc1Rlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJUZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgdGVybWluYWxQYXJ0RW1wdHkgPSBpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkodGVybWluYWxQYXJ0KTtcblxuICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gdGVybWluYWxQYXJ0RW1wdHk7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTlBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eShub25UZXJtaW5hbE5QYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5OyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNUZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KHRlcm1pbmFsUGFydCkge1xuICBjb25zdCBwYXJ0ID0gdGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgIHBhcnRFbXB0eSA9IGlzUGFydEVtcHR5KHBhcnQpLFxuICAgICAgICB0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5ID0gcGFydEVtcHR5OyAvLy9cblxuICByZXR1cm4gdGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KG5vblRlcm1pbmFsUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUnVsZU5hbWVQYXJ0VHlwZToge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVFZmZlY3RpdmVseUVtcHR5ID0gaXNSdWxlRWZmZWN0aXZlbHlFbXB0eShydWxlLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gcnVsZUVmZmVjdGl2ZWx5RW1wdHk7ICAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eShwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gcGFydHNFZmZlY3RpdmVseUVtcHR5OyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IGFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eShwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG59XG4iXSwibmFtZXMiOlsiY2xvbmVQYXJ0cyIsImFyZVBhcnRzRXF1YWwiLCJhcmVQYXJ0c1JlY3Vyc2l2ZSIsImFyZVBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwic2luZ2xlUGFydEZyb21QYXJ0cyIsImFyZVBhcnRzTGVmdFJlY3Vyc2l2ZSIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJpc1J1bGVFZmZlY3RpdmVseUVtcHR5IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJQYXJ0cyIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInBhcnRzIiwibWFwIiwicGFydCIsImNsb25lZFBhcnQiLCJjbG9uZSIsImZpcnN0UGFydCIsImZpcnN0UGFydFN0cmluZyIsImFzU3RyaW5nIiwicGFydHNFcXVhbCIsImV2ZXJ5IiwicGFydFN0cmluZyIsInBhcnRTdHJpbmdGaXJzdFBhcnRTdHJpbmciLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJwYXJ0c1JlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwic2luZ2xlUGFydCIsInBhcnRzTGVuZ3RoIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnRzTGVmdFJlY3Vyc2l2ZSIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJyZXBlYXRlZFBhcnQiLCJmb3JFYWNoIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQiLCJydWxlIiwicnVsZU1hcCIsInJ1bGVOYW1lcyIsInJ1bGVFZmZlY3RpdmVseUVtcHR5IiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSIsImFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSIsImlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkiLCJnZXRQYXJ0cyIsInBhcnRzRWZmZWN0aXZlbHlFbXB0eSIsImFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eSIsInBhcnRFZmZlY3RpdmVseUVtcHR5IiwiaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsInBhclRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0RW1wdHkiLCJpc1Rlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJub25UZXJtaW5hbE5QYXJ0Iiwibm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsImlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsInBhcnRFbXB0eSIsImlzUGFydEVtcHR5IiwidGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwicnVsZU5hbWVQYXJ0IiwiZ2V0UnVsZU5hbWUiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJnZXRQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWdCZ0JBLFVBQVU7ZUFBVkE7O0lBWUFDLGFBQWE7ZUFBYkE7O0lBZUFDLGlCQUFpQjtlQUFqQkE7O0lBUUFDLDZCQUE2QjtlQUE3QkE7O0lBZ0JBQyxtQkFBbUI7ZUFBbkJBOztJQWtCQUMscUJBQXFCO2VBQXJCQTs7SUFRQUMscUJBQXFCO2VBQXJCQTs7SUFTQUMsMkJBQTJCO2VBQTNCQTs7SUFRQUMsK0JBQStCO2VBQS9CQTs7SUFTQUMsc0JBQXNCO2VBQXRCQTs7O3lCQXJIZTs0QkFDRTtvQkFFdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhGLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0FFLHNCQUE2Q0MsbUJBQUssQ0FBbERELHFCQUFxQkUsc0JBQXdCRCxtQkFBSyxDQUE3QkMscUJBQ3JCQyxtQkFLNEJDLHVCQUFTLENBTHJDRCxrQkFDQUUsdUJB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