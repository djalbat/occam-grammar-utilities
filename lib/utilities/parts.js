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
        return part.clone();
    }); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY29uc3QgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0LCBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVBhcnRzKHBhcnRzKSB7XG4gIHBhcnRzID0gcGFydHMubWFwKChwYXJ0KSA9PiBwYXJ0LmNsb25lKCkpOyAgLy8vXG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gcmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgcGFydHNSZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzUmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnRzLCBydWxlTmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IGlzUGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwocGFydCwgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUocGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBsZXQgcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aDtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBsZXQgc2luZ2xlUGFydDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICBzaW5nbGVQYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgc2luZ2xlUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHNpbmdsZVBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVQYXJ0c0xlZnRSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgIHBhcnRzTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzTGVmdFJlY3Vyc2l2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBjb25zdCBzaW5nbGVQYXJ0ID0gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIHBhcnQgPSBzaW5nbGVQYXJ0LFxuICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCksXG4gICAgICAgIHJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICByZXR1cm4gcmVwZWF0ZWRQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSB7XG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdO1xuXG4gIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gIHJldHVybiByZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSxcbiAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGlzUGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwocGFydCwgcnVsZU5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVFZmZlY3RpdmVseU9wdGlvbmFsID0gaXNSdWxlRWZmZWN0aXZlbHlPcHRpb25hbChydWxlLCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBydWxlRWZmZWN0aXZlbHlPcHRpb25hbDsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsID0gaXNQYXJ0RWZmZWN0aXZlbHlPcHRpb25hbChwYXJ0LCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwocGFydHMsIHJ1bGVOYW1lcywgY29udGV4dCk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBwYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWw7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbCA9IGFyZVBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbChwYXJ0cywgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgICAgICBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuXG5mdW5jdGlvbiBpc1J1bGVFZmZlY3RpdmVseU9wdGlvbmFsKHJ1bGUsIHJ1bGVOYW1lcywgY29udGV4dCkge1xuICBsZXQgcnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAoIXJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICBydWxlTmFtZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZU5hbWVzLFxuICAgICAgcnVsZU5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBydWxlRWZmZWN0aXZlbHlPcHRpb25hbCA9IGRlZmluaXRpb25zLmV2ZXJ5KChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbCA9IGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWwoZGVmaW5pdGlvbiwgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVFZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsKGRlZmluaXRpb24sIHJ1bGVOYW1lcywgY29udGV4dCkge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsID0gYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnRzLCBydWxlTmFtZXMsIGNvbnRleHQpLFxuICAgICAgICBkZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbCA9IHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbDsgLy8vXG5cbiAgcmV0dXJuIGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuIl0sIm5hbWVzIjpbImNsb25lUGFydHMiLCJhcmVQYXJ0c1JlY3Vyc2l2ZSIsImFyZVBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbCIsImFyZVBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwic2luZ2xlUGFydEZyb21QYXJ0cyIsImFyZVBhcnRzTGVmdFJlY3Vyc2l2ZSIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiUGFydHMiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJ0cyIsIm1hcCIsInBhcnQiLCJjbG9uZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsInBhcnRzUmVjdXJzaXZlIiwicnVsZU5hbWVzIiwiY29udGV4dCIsInBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbCIsImV2ZXJ5IiwicGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwiLCJpc1BhcnRFZmZlY3RpdmVseU9wdGlvbmFsIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3QiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInNpbmdsZVBhcnQiLCJwYXJ0c0xlbmd0aCIsImZpcnN0UGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0c0xlZnRSZWN1cnNpdmUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwicmVwZWF0ZWRQYXJ0IiwiZm9yRWFjaCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTWFwIiwicnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJydWxlRWZmZWN0aXZlbHlPcHRpb25hbCIsImlzUnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJnZXRQYXJ0IiwiZ2V0UGFydHMiLCJjaG9pY2VPZlBhcnRzUGFydCIsImdldE5hbWUiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsIiwiaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZWdCQSxVQUFVO2VBQVZBOztJQU1BQyxpQkFBaUI7ZUFBakJBOztJQVFBQywyQkFBMkI7ZUFBM0JBOztJQVlBQyw2QkFBNkI7ZUFBN0JBOztJQWdCQUMsbUJBQW1CO2VBQW5CQTs7SUFrQkFDLHFCQUFxQjtlQUFyQkE7O0lBUUFDLHFCQUFxQjtlQUFyQkE7O0lBU0FDLDJCQUEyQjtlQUEzQkE7O0lBUUFDLCtCQUErQjtlQUEvQkE7Ozs0QkFsR2lCO3FCQUVYO29CQUNxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBUUMsc0JBQTZDQyxtQkFBSyxDQUFsREQscUJBQXFCRSxzQkFBd0JELG1CQUFLLENBQTdCQyxxQkFDckJDLG1CQUs0QkMsdUJBQVMsQ0FMckNELGtCQUNB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