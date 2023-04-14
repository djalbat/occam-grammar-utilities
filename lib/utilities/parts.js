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
        ruleNames = _to_consumable_array(ruleNames).concat([
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY29uc3QgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0LCBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVBhcnRzKHBhcnRzKSB7XG4gIHBhcnRzID0gcGFydHMubWFwKChwYXJ0KSA9PiB7XG4gICAgY29uc3QgY2xvbmVkUGFydCA9IHBhcnQuY2xvbmUoKTtcblxuICAgIHBhcnQgPSBjbG9uZWRQYXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gcGFydDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gcmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgcGFydHNSZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzUmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnRzLCBydWxlTmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IGlzUGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwocGFydCwgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUocGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBsZXQgcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aDtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBsZXQgc2luZ2xlUGFydDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICBzaW5nbGVQYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgc2luZ2xlUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHNpbmdsZVBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVQYXJ0c0xlZnRSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgIHBhcnRzTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzTGVmdFJlY3Vyc2l2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBjb25zdCBzaW5nbGVQYXJ0ID0gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIHBhcnQgPSBzaW5nbGVQYXJ0LFxuICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCksXG4gICAgICAgIHJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cblxuICByZXR1cm4gcmVwZWF0ZWRQYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzLCByZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZnVuY3Rpb24gaXNQYXJ0RWZmZWN0aXZlbHlPcHRpb25hbChwYXJ0LCBydWxlTmFtZXMsIGNvbnRleHQpIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgICBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBpc1J1bGVFZmZlY3RpdmVseU9wdGlvbmFsKHJ1bGUsIHJ1bGVOYW1lcywgY29udGV4dCk7XG5cbiAgICAgICAgICBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IHJ1bGVFZmZlY3RpdmVseU9wdGlvbmFsOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBpc1BhcnRFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnQsIHJ1bGVOYW1lcywgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbCA9IGFyZVBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbChwYXJ0cywgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgICAgICBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsID0gYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnRzLCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsID0gcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWw7XG59XG5cbmZ1bmN0aW9uIGlzUnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwocnVsZSwgcnVsZU5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCBydWxlRWZmZWN0aXZlbHlPcHRpb25hbCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gIGlmICghcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgIHJ1bGVOYW1lcyA9IFsgLy8vXG4gICAgICAuLi5ydWxlTmFtZXMsXG4gICAgICBydWxlTmFtZVxuICAgIF07XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIHJ1bGVFZmZlY3RpdmVseU9wdGlvbmFsID0gZGVmaW5pdGlvbnMuZXZlcnkoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsID0gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbChkZWZpbml0aW9uLCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWw7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWwoZGVmaW5pdGlvbiwgcnVsZU5hbWVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwocGFydHMsIHJ1bGVOYW1lcywgY29udGV4dCksXG4gICAgICAgIGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsID0gcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsOyAvLy9cblxuICByZXR1cm4gZGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWw7XG59XG4iXSwibmFtZXMiOlsiY2xvbmVQYXJ0cyIsImFyZVBhcnRzUmVjdXJzaXZlIiwiYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsIiwiYXJlUGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUiLCJzaW5nbGVQYXJ0RnJvbVBhcnRzIiwiYXJlUGFydHNMZWZ0UmVjdXJzaXZlIiwicmVwZWF0ZWRQYXJ0RnJvbVBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJQYXJ0cyIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInBhcnRzIiwibWFwIiwicGFydCIsImNsb25lZFBhcnQiLCJjbG9uZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsInBhcnRzUmVjdXJzaXZlIiwicnVsZU5hbWVzIiwiY29udGV4dCIsInBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbCIsImV2ZXJ5IiwicGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwiLCJpc1BhcnRFZmZlY3RpdmVseU9wdGlvbmFsIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3QiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInNpbmdsZVBhcnQiLCJwYXJ0c0xlbmd0aCIsImZpcnN0UGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0c0xlZnRSZWN1cnNpdmUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwicmVwZWF0ZWRQYXJ0IiwiZm9yRWFjaCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTWFwIiwicnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJydWxlRWZmZWN0aXZlbHlPcHRpb25hbCIsImlzUnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJnZXRQYXJ0IiwiZ2V0UGFydHMiLCJjaG9pY2VPZlBhcnRzUGFydCIsImdldE5hbWUiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsIiwiaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZWdCQSxVQUFVO2VBQVZBOztJQVlBQyxpQkFBaUI7ZUFBakJBOztJQVFBQywyQkFBMkI7ZUFBM0JBOztJQVlBQyw2QkFBNkI7ZUFBN0JBOztJQWdCQUMsbUJBQW1CO2VBQW5CQTs7SUFrQkFDLHFCQUFxQjtlQUFyQkE7O0lBUUFDLHFCQUFxQjtlQUFyQkE7O0lBU0FDLDJCQUEyQjtlQUEzQkE7O0lBUUFDLCtCQUErQjtlQUEvQkE7Ozs0QkF4R2lCO3FCQUVYO29CQUNxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBUUMs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