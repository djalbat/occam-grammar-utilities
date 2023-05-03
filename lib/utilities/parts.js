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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzUGFydEVtcHR5LCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmNvbnN0IHsgU2VxdWVuY2VPZlBhcnRzUGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVQYXJ0cyhwYXJ0cykge1xuICBwYXJ0cyA9IHBhcnRzLm1hcCgocGFydCkgPT4ge1xuICAgIGNvbnN0IGNsb25lZFBhcnQgPSBwYXJ0LmNsb25lKCk7XG5cbiAgICBwYXJ0ID0gY2xvbmVkUGFydDsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhcnRzUmVjdXJzaXZlKHBhcnRzKSB7XG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgIHBhcnRzUmVjdXJzaXZlID0gKHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBwYXJ0c1JlY3Vyc2l2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlKHBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgbGV0IHBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGg7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIHBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXJ0c0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZVBhcnRGcm9tUGFydHMocGFydHMpIHtcbiAgbGV0IHNpbmdsZVBhcnQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKHBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgc2luZ2xlUGFydCA9IGZpcnN0UGFydDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBTZXF1ZW5jZU9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHNpbmdsZVBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzaW5nbGVQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNMZWZ0UmVjdXJzaXZlKHBhcnRzKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICBwYXJ0c0xlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBwYXJ0c0xlZnRSZWN1cnNpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZFBhcnRGcm9tUGFydHMocGFydHMpIHtcbiAgY29uc3Qgc2luZ2xlUGFydCA9IHNpbmdsZVBhcnRGcm9tUGFydHMocGFydHMpLFxuICAgICAgICBwYXJ0ID0gc2luZ2xlUGFydCxcbiAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpLFxuICAgICAgICByZXBlYXRlZFBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgcmV0dXJuIHJlcGVhdGVkUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cywgcmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1J1bGVFZmZlY3RpdmVseUVtcHR5KHJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lcyA9IFtdKSB7IC8vL1xuICBsZXQgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5ID0gYXJlRGVmaW5pdGlvbnNFZmZlY3RpdmVseUVtcHR5KGRlZmluaXRpb25zLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgcnVsZUVmZmVjdGl2ZWx5RW1wdHkgPSBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVFZmZlY3RpdmVseUVtcHR5O1xufVxuXG5mdW5jdGlvbiBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbnMsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBjb25zdCBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHkgPSBkZWZpbml0aW9ucy5ldmVyeSgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5ID0gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eShkZWZpbml0aW9uLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgaWYgKGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHkoZGVmaW5pdGlvbiwgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyksXG4gICAgICAgIGRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5ID0gcGFydHNFZmZlY3RpdmVseUVtcHR5OyAvLy9cblxuICByZXR1cm4gZGVmaW5pdGlvbkVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGFyZVBhcnRzRWZmZWN0aXZlbHlFbXB0eShwYXJ0cywgcnVsZU1hcCwgcnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzRWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgY29uc3QgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc1BhcnRFZmZlY3RpdmVseUVtcHR5KHBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICBpZiAocGFydEVmZmVjdGl2ZWx5RW1wdHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzRWZmZWN0aXZlbHlFbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNQYXJ0RWZmZWN0aXZlbHlFbXB0eShwYXJ0LCBydWxlTWFwLCBydWxlTmFtZXMpIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseUVtcHR5O1xuXG4gIGNvbnN0IHBhclRlcm1pbmFsUGFydCA9IHBhcnQuaXNUZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFyVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsUGFydEVtcHR5ID0gaXNUZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5KHRlcm1pbmFsUGFydCk7XG5cbiAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHRlcm1pbmFsUGFydEVtcHR5OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5QYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBpc05vblRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHkobm9uVGVybWluYWxOUGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gbm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eTsgLy8vXG4gIH1cblxuICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSh0ZXJtaW5hbFBhcnQpIHtcbiAgY29uc3QgcGFydCA9IHRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICBwYXJ0RW1wdHkgPSBpc1BhcnRFbXB0eShwYXJ0KSxcbiAgICAgICAgdGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRFbXB0eTsgLy8vXG5cbiAgcmV0dXJuIHRlcm1pbmFsUGFydEVmZmVjdGl2ZWx5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eShub25UZXJtaW5hbFBhcnQsIHJ1bGVNYXAsIHJ1bGVOYW1lcykge1xuICBsZXQgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlRWZmZWN0aXZlbHlFbXB0eSA9IGlzUnVsZUVmZmVjdGl2ZWx5RW1wdHkocnVsZSwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHJ1bGVFZmZlY3RpdmVseUVtcHR5OyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IGlzUGFydEVmZmVjdGl2ZWx5RW1wdHkocGFydCwgcnVsZU1hcCwgcnVsZU5hbWVzKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgcGFydEVmZmVjdGl2ZWx5RW1wdHkgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseUVtcHR5ID0gYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5KHBhcnRzLCBydWxlTWFwLCBydWxlTmFtZXMpO1xuXG4gICAgICBwYXJ0RWZmZWN0aXZlbHlFbXB0eSA9IHBhcnRzRWZmZWN0aXZlbHlFbXB0eTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5RW1wdHkgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5RW1wdHkocGFydHMsIHJ1bGVNYXAsIHJ1bGVOYW1lcyk7XG5cbiAgICAgIHBhcnRFZmZlY3RpdmVseUVtcHR5ID0gcGFydHNFZmZlY3RpdmVseUVtcHR5OyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseUVtcHR5O1xufVxuIl0sIm5hbWVzIjpbImNsb25lUGFydHMiLCJhcmVQYXJ0c1JlY3Vyc2l2ZSIsImFyZVBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwic2luZ2xlUGFydEZyb21QYXJ0cyIsImFyZVBhcnRzTGVmdFJlY3Vyc2l2ZSIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJpc1J1bGVFZmZlY3RpdmVseUVtcHR5IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsIlBhcnRzIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlJ1bGVOYW1lUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwicGFydHMiLCJtYXAiLCJwYXJ0IiwiY2xvbmVkUGFydCIsImNsb25lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwicGFydHNSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJwYXJ0c0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmaXJzdCIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwic2luZ2xlUGFydCIsInBhcnRzTGVuZ3RoIiwiZmlyc3RQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnRzTGVmdFJlY3Vyc2l2ZSIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJyZXBlYXRlZFBhcnQiLCJmb3JFYWNoIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQiLCJydWxlIiwicnVsZU1hcCIsInJ1bGVOYW1lcyIsInJ1bGVFZmZlY3RpdmVseUVtcHR5IiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSIsImFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlFbXB0eSIsImV2ZXJ5IiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25FZmZlY3RpdmVseUVtcHR5IiwiaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlFbXB0eSIsImdldFBhcnRzIiwicGFydHNFZmZlY3RpdmVseUVtcHR5IiwiYXJlUGFydHNFZmZlY3RpdmVseUVtcHR5IiwicGFydEVmZmVjdGl2ZWx5RW1wdHkiLCJpc1BhcnRFZmZlY3RpdmVseUVtcHR5IiwicGFyVGVybWluYWxQYXJ0IiwiaXNUZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnRFbXB0eSIsImlzVGVybWluYWxQYXJ0RWZmZWN0aXZlbHlFbXB0eSIsIm5vblRlcm1pbmFsTlBhcnQiLCJub25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5IiwiaXNOb25UZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5IiwicGFydEVtcHR5IiwiaXNQYXJ0RW1wdHkiLCJ0ZXJtaW5hbFBhcnRFZmZlY3RpdmVseUVtcHR5Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTmFtZVBhcnQiLCJnZXRSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsImdldFBhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZWdCQSxVQUFVO2VBQVZBOztJQVlBQyxpQkFBaUI7ZUFBakJBOztJQVFBQyw2QkFBNkI7ZUFBN0JB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