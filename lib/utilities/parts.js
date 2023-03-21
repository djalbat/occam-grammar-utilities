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
    arePartsEffectivelyOptional: function() {
        return arePartsEffectivelyOptional;
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
    }
});
var _occamParsers = require("occam-parsers");
var _array = require("../utilities/array");
var _part = require("../utilities/part");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var SequenceOfPartsPart = _occamParsers.Parts.SequenceOfPartsPart, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, RuleNamePartType = _occamParsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamParsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamParsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamParsers.partTypes.OneOrMorePartsPartType, SequenceOfPartsPartType = _occamParsers.partTypes.SequenceOfPartsPartType, ZeroOrMorePartsPartType = _occamParsers.partTypes.ZeroOrMorePartsPartType;
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
function arePartsEffectivelyOptional(parts, ruleNames, context) {
    var partsEffectivelyOptional = parts.every(function(part) {
        var partEffectivelyOptional = isPartEffectivelyOptional(part, ruleNames, context);
        if (partEffectivelyOptional) {
            return true;
        }
    });
    return partsEffectivelyOptional;
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
    var recursiveRuleNames = [];
    parts.forEach(function(part) {
        return (0, _part.recursiveRuleNamesFromPart)(part, recursiveRuleNames);
    });
    return recursiveRuleNames;
}
function leftRecursiveRuleNamesFromParts(parts) {
    var leftRecursiveRuleNames = [], firstPart = (0, _array.first)(parts), part = firstPart; ///
    (0, _part.leftRecursiveRuleNamesFromPart)(part, leftRecursiveRuleNames);
    return leftRecursiveRuleNames;
}
function isPartEffectivelyOptional(part, ruleNames, context) {
    var partEffectivelyOptional = false;
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part, type = nonTerminalPart.getType();
        switch(type){
            case RuleNamePartType:
                {
                    var ruleMap = context.ruleMap, ruleNamePart = part, ruleName = ruleNamePart.getRuleName(), rule = ruleMap[ruleName] || null;
                    if (rule !== null) {
                        var ruleEffectivelyOptional = isRuleEffectivelyOptional(rule, ruleNames, context);
                        partEffectivelyOptional = ruleEffectivelyOptional; ///
                    }
                    break;
                }
            case OptionalPartPartType:
                {
                    partEffectivelyOptional = true;
                    break;
                }
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = nonTerminalPart, _$part = oneOrMorePartsPart.getPart();
                    partEffectivelyOptional = isPartEffectivelyOptional(_$part, ruleNames, context);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    partEffectivelyOptional = true;
                    break;
                }
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = part, parts = sequenceOfPartsPart.getParts(), partsEffectivelyOptional = arePartsEffectivelyOptional(parts, ruleNames, context);
                    partEffectivelyOptional = partsEffectivelyOptional; ///
                    break;
                }
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = part, parts1 = choiceOfPartsPart.getParts(), partsEffectivelyOptional1 = arePartsEffectivelyOptional(parts1, ruleNames, context);
                    partEffectivelyOptional = partsEffectivelyOptional1; ///
                    break;
                }
        }
    }
    return partEffectivelyOptional;
}
function isRuleEffectivelyOptional(rule, ruleNames, context) {
    var ruleEffectivelyOptional = false;
    var ruleName = rule.getName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
    if (!ruleNamesIncludesRuleName) {
        ruleNames = _toConsumableArray(ruleNames).concat([
            ruleName
        ]);
        var definitions = rule.getDefinitions();
        ruleEffectivelyOptional = definitions.every(function(definition) {
            var definitionEffectivelyOptional = isDefinitionEffectivelyOptional(definition, ruleNames, context);
            if (definitionEffectivelyOptional) {
                return true;
            }
        });
    }
    return ruleEffectivelyOptional;
}
function isDefinitionEffectivelyOptional(definition, ruleNames, context) {
    var parts = definition.getParts(), partsEffectivelyOptional = arePartsEffectivelyOptional(parts, ruleNames, context), definitionEffectivelyOptional = partsEffectivelyOptional; ///
    return definitionEffectivelyOptional;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY29uc3QgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0LCBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVBhcnRzKHBhcnRzKSB7XG4gIHBhcnRzID0gcGFydHMubWFwKChwYXJ0KSA9PiB7XG4gICAgY29uc3QgY2xvbmVkUGFydCA9IHBhcnQuY2xvbmUoKTtcblxuICAgIHBhcnQgPSBjbG9uZWRQYXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gcGFydDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gcmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgcGFydHNSZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzUmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnRzLCBydWxlTmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IGlzUGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwocGFydCwgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUocGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBsZXQgcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aDtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBsZXQgc2luZ2xlUGFydDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICBzaW5nbGVQYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgc2luZ2xlUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHNpbmdsZVBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVQYXJ0c0xlZnRSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgIHBhcnRzTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzTGVmdFJlY3Vyc2l2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBjb25zdCBzaW5nbGVQYXJ0ID0gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIHBhcnQgPSBzaW5nbGVQYXJ0LFxuICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCksXG4gICAgICAgIHJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICByZXR1cm4gcmVwZWF0ZWRQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSB7XG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdO1xuXG4gIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gIHJldHVybiByZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSxcbiAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGlzUGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwocGFydCwgcnVsZU5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVFZmZlY3RpdmVseU9wdGlvbmFsID0gaXNSdWxlRWZmZWN0aXZlbHlPcHRpb25hbChydWxlLCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBydWxlRWZmZWN0aXZlbHlPcHRpb25hbDsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsID0gaXNQYXJ0RWZmZWN0aXZlbHlPcHRpb25hbChwYXJ0LCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwocGFydHMsIHJ1bGVOYW1lcywgY29udGV4dCk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBwYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWw7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbCA9IGFyZVBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbChwYXJ0cywgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgICAgICBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuXG5mdW5jdGlvbiBpc1J1bGVFZmZlY3RpdmVseU9wdGlvbmFsKHJ1bGUsIHJ1bGVOYW1lcywgY29udGV4dCkge1xuICBsZXQgcnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBydWxlRWZmZWN0aXZlbHlPcHRpb25hbCA9IGRlZmluaXRpb25zLmV2ZXJ5KChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbCA9IGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWwoZGVmaW5pdGlvbiwgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVFZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsKGRlZmluaXRpb24sIHJ1bGVOYW1lcywgY29udGV4dCkge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsID0gYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnRzLCBydWxlTmFtZXMsIGNvbnRleHQpLFxuICAgICAgICBkZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbCA9IHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbDsgLy8vXG5cbiAgcmV0dXJuIGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuIl0sIm5hbWVzIjpbImNsb25lUGFydHMiLCJhcmVQYXJ0c1JlY3Vyc2l2ZSIsImFyZVBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbCIsImFyZVBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwic2luZ2xlUGFydEZyb21QYXJ0cyIsImFyZVBhcnRzTGVmdFJlY3Vyc2l2ZSIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiUGFydHMiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJ0cyIsIm1hcCIsInBhcnQiLCJjbG9uZWRQYXJ0IiwiY2xvbmUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJwYXJ0c1JlY3Vyc2l2ZSIsInJ1bGVOYW1lcyIsImNvbnRleHQiLCJwYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwiLCJldmVyeSIsInBhcnRFZmZlY3RpdmVseU9wdGlvbmFsIiwiaXNQYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0IiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJzaW5nbGVQYXJ0IiwicGFydHNMZW5ndGgiLCJmaXJzdFBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHNMZWZ0UmVjdXJzaXZlIiwiemVyb09yTW9yZVBhcnRzUGFydCIsInJlcGVhdGVkUGFydCIsImZvckVhY2giLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsInBhcnROb25UZXJtaW5hbFBhcnQiLCJpc05vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwicnVsZU1hcCIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlIiwicnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwiLCJpc1J1bGVFZmZlY3RpdmVseU9wdGlvbmFsIiwib25lT3JNb3JlUGFydHNQYXJ0IiwiZ2V0UGFydCIsImdldFBhcnRzIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJnZXROYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbCIsImlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWVnQkEsVUFBVTtlQUFWQTs7SUFZQUMsaUJBQWlCO2VBQWpCQTs7SUFRQUMsMkJBQTJCO2VBQTNCQTs7SUFZQUMsNkJBQTZCO2VBQTdCQTs7SUFnQkFDLG1CQUFtQjtlQUFuQkE7O0lBa0JBQyxxQkFBcUI7ZUFBckJBOztJQVFBQyxxQkFBcUI7ZUFBckJBOztJQVNBQywyQkFBMkI7ZUFBM0JBOztJQVFBQywrQkFBK0I7ZUFBL0JBOzs7NEJBeEdpQjtxQkFFWDtvQkFDcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQVFDLHNCQUE2Q0MsbUJBQUssQ0FBbERELHFCQUFxQkUsc0JBQXdCRCxtQkFBSyxDQUE3QkMscUJBQ3JCQyxtQkFLNEJDLHVCQUFTLENBTHJDRCxrQkFDQUUsdUJBSTRCRCx1QkFBUyxDQUpyQ0Msc0JBQ0FDLHdCQUc0QkYsdUJBQVMsQ0FIckNFLHVCQUNBQyx5QkFFNEJILHVCQUFTLENBRnJDRyx3QkFDQUMsMEJBQzRCSix1QkFBUyxDQURyQ0kseUJBQ0FDLDBCQUE0QkwsdUJBQVMsQ0FBckNLO0FBRUQsU0FBU2xCLFdBQVdtQixLQUFLLEVBQUU7SUFDaENBLFFBQVFBLE1BQU1DLEdBQUcsQ0FBQyxTQUFDQyxNQUFTO1FBQzFCLElBQU1DLGFBQWFELEtBQUtFLEtBQUs7UUFFN0JGLE9BQU9DLFlBQWEsR0FBRztRQUV2QixPQUFPRDtJQUNUO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVNsQixrQkFBa0JrQixLQUFLLEVBQUU7SUFDdkMsSUFBTUsscUJBQXFCakIsNEJBQTRCWSxRQUNqRE0sMkJBQTJCRCxtQkFBbUJFLE1BQU0sRUFDcERDLGlCQUFrQkYsMkJBQTJCO0lBRW5ELE9BQU9FO0FBQ1Q7QUFFTyxTQUFTekIsNEJBQTRCaUIsS0FBSyxFQUFFUyxTQUFTLEVBQUVDLE9BQU8sRUFBRTtJQUNyRSxJQUFNQywyQkFBMkJYLE1BQU1ZLEtBQUssQ0FBQyxTQUFDVixNQUFTO1FBQ3JELElBQU1XLDBCQUEwQkMsMEJBQTBCWixNQUFNTyxXQUFXQztRQUUzRSxJQUFJRyx5QkFBeUI7WUFDM0IsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVMzQiw4QkFBOEJnQixLQUFLLEVBQUVlLHFCQUFxQixFQUFFO0lBQzFFLElBQUlDLDZCQUE2QixLQUFLO0lBRXRDLElBQU1DLHlCQUF5QjVCLGdDQUFnQ1csUUFDekRrQiwrQkFBK0JELHVCQUF1QlYsTUFBTTtJQUVsRSxJQUFJVywrQkFBK0IsR0FBRztRQUNwQyxJQUFNQyw2QkFBNkJDLElBQUFBLFlBQUssRUFBQ0gseUJBQ25DSSxrREFBbURGLCtCQUErQko7UUFFeEZDLDZCQUE2QkssaURBQWtELEdBQUc7SUFDcEYsQ0FBQztJQUVELE9BQU9MO0FBQ1Q7QUFFTyxTQUFTL0Isb0JBQW9CZSxLQUFLLEVBQUU7SUFDekMsSUFBSXNCO0lBRUosSUFBTUMsY0FBY3ZCLE1BQU1PLE1BQU07SUFFaEMsSUFBSWdCLGdCQUFnQixHQUFHO1FBQ3JCLElBQU1DLFlBQVlKLElBQUFBLFlBQUssRUFBQ3BCO1FBRXhCc0IsYUFBYUUsV0FBVyxHQUFHO0lBQzdCLE9BQU87UUFDTCxJQUFNQyxzQkFBc0IsSUFBSW5DLG9CQUFvQlU7UUFFcERzQixhQUFhRyxxQkFBcUIsR0FBRztJQUN2QyxDQUFDO0lBRUQsT0FBT0g7QUFDVDtBQUVPLFNBQVNwQyxzQkFBc0JjLEtBQUssRUFBRTtJQUMzQyxJQUFNaUIseUJBQXlCNUIsZ0NBQWdDVyxRQUN6RGtCLCtCQUErQkQsdUJBQXVCVixNQUFNLEVBQzVEbUIscUJBQXNCUiwrQkFBK0I7SUFFM0QsT0FBT1E7QUFDVDtBQUVPLFNBQVN2QyxzQkFBc0JhLEtBQUssRUFBRTtJQUMzQyxJQUFNc0IsYUFBYXJDLG9CQUFvQmUsUUFDakNFLE9BQU9vQixZQUNQSyxzQkFBc0IsSUFBSW5DLG9CQUFvQlUsT0FDOUMwQixlQUFlRCxxQkFBc0IsR0FBRztJQUU5QyxPQUFPQztBQUNUO0FBRU8sU0FBU3hDLDRCQUE0QlksS0FBSyxFQUFFO0lBQ2pELElBQU1LLHFCQUFxQixFQUFFO0lBRTdCTCxNQUFNNkIsT0FBTyxDQUFDLFNBQUMzQjtlQUFTNEIsSUFBQUEsZ0NBQTBCLEVBQUM1QixNQUFNRzs7SUFFekQsT0FBT0E7QUFDVDtBQUVPLFNBQVNoQixnQ0FBZ0NXLEtBQUssRUFBRTtJQUNyRCxJQUFNaUIseUJBQXlCLEVBQUUsRUFDM0JPLFlBQVlKLElBQUFBLFlBQUssRUFBQ3BCLFFBQ2xCRSxPQUFPc0IsV0FBVyxHQUFHO0lBRTNCTyxJQUFBQSxvQ0FBOEIsRUFBQzdCLE1BQU1lO0lBRXJDLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTSCwwQkFBMEJaLElBQUksRUFBRU8sU0FBUyxFQUFFQyxPQUFPLEVBQUU7SUFDM0QsSUFBSUcsMEJBQTBCLEtBQUs7SUFFbkMsSUFBTW1CLHNCQUFzQjlCLEtBQUsrQixpQkFBaUI7SUFFbEQsSUFBSUQscUJBQXFCO1FBQ3ZCLElBQU1FLGtCQUFrQmhDLE1BQ2xCaUMsT0FBT0QsZ0JBQWdCRSxPQUFPO1FBRXBDLE9BQVFEO1lBQ04sS0FBSzFDO2dCQUFrQjtvQkFDckIsSUFBTSxBQUFFNEMsVUFBWTNCLFFBQVoyQixTQUNGQyxlQUFlcEMsTUFDZnFDLFdBQVdELGFBQWFFLFdBQVcsSUFDbkNDLE9BQU9KLE9BQU8sQ0FBQ0UsU0FBUyxJQUFJLElBQUk7b0JBRXRDLElBQUlFLFNBQVMsSUFBSSxFQUFFO3dCQUNqQixJQUFNQywwQkFBMEJDLDBCQUEwQkYsTUFBTWhDLFdBQVdDO3dCQUUzRUcsMEJBQTBCNkIseUJBQTBCLEdBQUc7b0JBQ3pELENBQUM7b0JBRUQsS0FBTTtnQkFDUjtZQUVBLEtBQUsvQztnQkFBc0I7b0JBQ3pCa0IsMEJBQTBCLElBQUk7b0JBRTlCLEtBQU07Z0JBQ1I7WUFFQSxLQUFLaEI7Z0JBQXdCO29CQUMzQixJQUFNK0MscUJBQXFCVixpQkFDckJoQyxTQUFPMEMsbUJBQW1CQyxPQUFPO29CQUV2Q2hDLDBCQUEwQkMsMEJBQTBCWixRQUFNTyxXQUFXQztvQkFFckUsS0FBTTtnQkFDUjtZQUVBLEtBQUtYO2dCQUF5QjtvQkFDNUJjLDBCQUEwQixJQUFJO29CQUU5QixLQUFNO2dCQUNSO1lBRUEsS0FBS2Y7Z0JBQXlCO29CQUM1QixJQUFNMkIsc0JBQXNCdkIsTUFDdEJGLFFBQVF5QixvQkFBb0JxQixRQUFRLElBQ3BDbkMsMkJBQTJCNUIsNEJBQTRCaUIsT0FBT1MsV0FBV0M7b0JBRS9FRywwQkFBMEJGLDBCQUEwQixHQUFHO29CQUV2RCxLQUFNO2dCQUNSO1lBRUEsS0FBS2Y7Z0JBQXVCO29CQUMxQixJQUFNbUQsb0JBQW9CN0MsTUFDcEJGLFNBQVErQyxrQkFBa0JELFFBQVEsSUFDbENuQyw0QkFBMkI1Qiw0QkFBNEJpQixRQUFPUyxXQUFXQztvQkFFL0VHLDBCQUEwQkYsMkJBQTBCLEdBQUc7b0JBRXZELEtBQU07Z0JBQ1I7UUFDRjtJQUNGLENBQUM7SUFFRCxPQUFPRTtBQUNUO0FBRUEsU0FBUzhCLDBCQUEwQkYsSUFBSSxFQUFFaEMsU0FBUyxFQUFFQyxPQUFPLEVBQUU7SUFDM0QsSUFBSWdDLDBCQUEwQixLQUFLO0lBRW5DLElBQU1ILFdBQVdFLEtBQUtPLE9BQU8sSUFDdkJDLDRCQUE0QnhDLFVBQVV5QyxRQUFRLENBQUNYO0lBRXJELElBQUksQ0FBQ1UsMkJBQTJCO1FBQzlCeEMsWUFBWSxBQUNWLG1CQUFHQSxrQkFETztZQUVWOEI7U0FDRDtRQUVELElBQU1ZLGNBQWNWLEtBQUtXLGNBQWM7UUFFdkNWLDBCQUEwQlMsWUFBWXZDLEtBQUssQ0FBQyxTQUFDeUMsWUFBZTtZQUMxRCxJQUFNQyxnQ0FBZ0NDLGdDQUFnQ0YsWUFBWTVDLFdBQVdDO1lBRTdGLElBQUk0QywrQkFBK0I7Z0JBQ2pDLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSDtJQUNGLENBQUM7SUFFRCxPQUFPWjtBQUNUO0FBRUEsU0FBU2EsZ0NBQWdDRixVQUFVLEVBQUU1QyxTQUFTLEVBQUVDLE9BQU8sRUFBRTtJQUN2RSxJQUFNVixRQUFRcUQsV0FBV1AsUUFBUSxJQUMzQm5DLDJCQUEyQjVCLDRCQUE0QmlCLE9BQU9TLFdBQVdDLFVBQ3pFNEMsZ0NBQWdDM0MsMEJBQTBCLEdBQUc7SUFFbkUsT0FBTzJDO0FBQ1QifQ==