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
    var ruleName = rule.getName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
    if (ruleNamesIncludesRuleName) {
        throw new Error("The '".concat(ruleName, "' rule has been encountered recursively whilst checking if a certain definition is effectively unary."));
    }
    ruleNames = _toConsumableArray(ruleNames).concat([
        ruleName
    ]);
    var definitions = rule.getDefinitions(), definitionsEffectivelyOptional = definitions.every(function(definition) {
        var definitionEffectivelyOptional = isDefinitionEffectivelyOptional(definition, ruleNames, context);
        if (definitionEffectivelyOptional) {
            return true;
        }
    });
    return definitionsEffectivelyOptional;
}
function isDefinitionEffectivelyOptional(definition, ruleNames, context) {
    var parts = definition.getParts(), partsEffectivelyOptional = arePartsEffectivelyOptional(parts, ruleNames, context), definitionEffectivelyOptional = partsEffectivelyOptional; ///
    return definitionEffectivelyOptional;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY29uc3QgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0LCBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVBhcnRzKHBhcnRzKSB7XG4gIHBhcnRzID0gcGFydHMubWFwKChwYXJ0KSA9PiBwYXJ0LmNsb25lKCkpOyAgLy8vXG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gcmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgcGFydHNSZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzUmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnRzLCBydWxlTmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IGlzUGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwocGFydCwgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBsZXQgc2luZ2xlUGFydDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICBzaW5nbGVQYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgc2luZ2xlUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHNpbmdsZVBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVQYXJ0c0xlZnRSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgIHBhcnRzTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzTGVmdFJlY3Vyc2l2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBjb25zdCBzaW5nbGVQYXJ0ID0gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIHBhcnQgPSBzaW5nbGVQYXJ0LFxuICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCksXG4gICAgICAgIHJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICByZXR1cm4gcmVwZWF0ZWRQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSB7XG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdO1xuXG4gIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuXG4gIHJldHVybiByZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSxcbiAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGlzUGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwocGFydCwgcnVsZU5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVFZmZlY3RpdmVseU9wdGlvbmFsID0gaXNSdWxlRWZmZWN0aXZlbHlPcHRpb25hbChydWxlLCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBydWxlRWZmZWN0aXZlbHlPcHRpb25hbDsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsID0gaXNQYXJ0RWZmZWN0aXZlbHlPcHRpb25hbChwYXJ0LCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwocGFydHMsIHJ1bGVOYW1lcywgY29udGV4dCk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBwYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWw7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbCA9IGFyZVBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbChwYXJ0cywgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgICAgICBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuXG5mdW5jdGlvbiBpc1J1bGVFZmZlY3RpdmVseU9wdGlvbmFsKHJ1bGUsIHJ1bGVOYW1lcywgY29udGV4dCkge1xuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke3J1bGVOYW1lfScgcnVsZSBoYXMgYmVlbiBlbmNvdW50ZXJlZCByZWN1cnNpdmVseSB3aGlsc3QgY2hlY2tpbmcgaWYgYSBjZXJ0YWluIGRlZmluaXRpb24gaXMgZWZmZWN0aXZlbHkgdW5hcnkuYCk7XG4gIH1cblxuICBydWxlTmFtZXMgPSBbIC8vL1xuICAgIC4uLnJ1bGVOYW1lcyxcbiAgICBydWxlTmFtZVxuICBdO1xuXG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5T3B0aW9uYWwgPSBkZWZpbml0aW9ucy5ldmVyeSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsID0gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbChkZWZpbml0aW9uLCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5T3B0aW9uYWw7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWwoZGVmaW5pdGlvbiwgcnVsZU5hbWVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwocGFydHMsIHJ1bGVOYW1lcywgY29udGV4dCksXG4gICAgICAgIGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsID0gcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsOyAvLy9cblxuICByZXR1cm4gZGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWw7XG59XG4iXSwibmFtZXMiOlsiY2xvbmVQYXJ0cyIsImFyZVBhcnRzUmVjdXJzaXZlIiwiYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsIiwic2luZ2xlUGFydEZyb21QYXJ0cyIsImFyZVBhcnRzTGVmdFJlY3Vyc2l2ZSIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiUGFydHMiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJ0cyIsIm1hcCIsInBhcnQiLCJjbG9uZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsInBhcnRzUmVjdXJzaXZlIiwicnVsZU5hbWVzIiwiY29udGV4dCIsInBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbCIsImV2ZXJ5IiwicGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwiLCJpc1BhcnRFZmZlY3RpdmVseU9wdGlvbmFsIiwic2luZ2xlUGFydCIsInBhcnRzTGVuZ3RoIiwiZmlyc3RQYXJ0IiwiZmlyc3QiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJwYXJ0c0xlZnRSZWN1cnNpdmUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwicmVwZWF0ZWRQYXJ0IiwiZm9yRWFjaCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTWFwIiwicnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJydWxlRWZmZWN0aXZlbHlPcHRpb25hbCIsImlzUnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJnZXRQYXJ0IiwiZ2V0UGFydHMiLCJjaG9pY2VPZlBhcnRzUGFydCIsImdldE5hbWUiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJFcnJvciIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0VmZmVjdGl2ZWx5T3B0aW9uYWwiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWwiLCJpc0RlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFlZ0JBLFVBQVU7ZUFBVkE7O0lBTUFDLGlCQUFpQjtlQUFqQkE7O0lBUUFDLDJCQUEyQjtlQUEzQkE7O0lBWUFDLG1C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