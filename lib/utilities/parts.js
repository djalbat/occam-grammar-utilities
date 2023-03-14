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
function arePartsDirectlyLeftRecursive(parts, ruleName) {
    var partsDirectlyLeftRecursive = false;
    var leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length;
    if (leftRecursiveRuleNamesLength > 0) {
        var firstLeftRecursiveRuleName = (0, _array.first)(leftRecursiveRuleNames), firstLeftRecursiveRuleNameRuleName = firstLeftRecursiveRuleName === ruleName;
        partsDirectlyLeftRecursive = firstLeftRecursiveRuleNameRuleName; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY29uc3QgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0LCBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVBhcnRzKHBhcnRzKSB7XG4gIHBhcnRzID0gcGFydHMubWFwKChwYXJ0KSA9PiBwYXJ0LmNsb25lKCkpOyAgLy8vXG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNSZWN1cnNpdmUocGFydHMpIHtcbiAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gcmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgcGFydHNSZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHBhcnRzUmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnRzLCBydWxlTmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICBjb25zdCBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IGlzUGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwocGFydCwgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUocGFydHMsIHJ1bGVOYW1lKSB7XG4gIGxldCBwYXJ0c0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWVSdWxlTmFtZSA9IChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gcnVsZU5hbWUpO1xuXG4gICAgcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZVJ1bGVOYW1lOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVQYXJ0RnJvbVBhcnRzKHBhcnRzKSB7XG4gIGxldCBzaW5nbGVQYXJ0O1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgIHNpbmdsZVBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICBzaW5nbGVQYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG4gIH1cblxuICByZXR1cm4gc2luZ2xlUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhcnRzTGVmdFJlY3Vyc2l2ZShwYXJ0cykge1xuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgcGFydHNMZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gcGFydHNMZWZ0UmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRQYXJ0RnJvbVBhcnRzKHBhcnRzKSB7XG4gIGNvbnN0IHNpbmdsZVBhcnQgPSBzaW5nbGVQYXJ0RnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgcGFydCA9IHNpbmdsZVBhcnQsXG4gICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KSxcbiAgICAgICAgcmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuXG4gIHJldHVybiByZXBlYXRlZFBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpIHtcbiAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gW107XG5cbiAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpIHtcbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdLFxuICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZnVuY3Rpb24gaXNQYXJ0RWZmZWN0aXZlbHlPcHRpb25hbChwYXJ0LCBydWxlTmFtZXMsIGNvbnRleHQpIHtcbiAgbGV0IHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsID0gZmFsc2U7XG5cbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgIHR5cGUgPSBub25UZXJtaW5hbFBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgICBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBpc1J1bGVFZmZlY3RpdmVseU9wdGlvbmFsKHJ1bGUsIHJ1bGVOYW1lcywgY29udGV4dCk7XG5cbiAgICAgICAgICBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IHJ1bGVFZmZlY3RpdmVseU9wdGlvbmFsOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZToge1xuICAgICAgICBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSBpc1BhcnRFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnQsIHJ1bGVOYW1lcywgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgWmVyb09yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbCA9IGFyZVBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbChwYXJ0cywgcnVsZU5hbWVzLCBjb250ZXh0KTtcblxuICAgICAgICBwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCA9IHBhcnRzRWZmZWN0aXZlbHlPcHRpb25hbDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gY2hvaWNlT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsID0gYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsKHBhcnRzLCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIHBhcnRFZmZlY3RpdmVseU9wdGlvbmFsID0gcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydEVmZmVjdGl2ZWx5T3B0aW9uYWw7XG59XG5cbmZ1bmN0aW9uIGlzUnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwocnVsZSwgcnVsZU5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCBydWxlRWZmZWN0aXZlbHlPcHRpb25hbCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gIGlmICghcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgIHJ1bGVOYW1lcyA9IFsgLy8vXG4gICAgICAuLi5ydWxlTmFtZXMsXG4gICAgICBydWxlTmFtZVxuICAgIF07XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIHJ1bGVFZmZlY3RpdmVseU9wdGlvbmFsID0gZGVmaW5pdGlvbnMuZXZlcnkoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsID0gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbChkZWZpbml0aW9uLCBydWxlTmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWw7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWwoZGVmaW5pdGlvbiwgcnVsZU5hbWVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBwYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwgPSBhcmVQYXJ0c0VmZmVjdGl2ZWx5T3B0aW9uYWwocGFydHMsIHJ1bGVOYW1lcywgY29udGV4dCksXG4gICAgICAgIGRlZmluaXRpb25FZmZlY3RpdmVseU9wdGlvbmFsID0gcGFydHNFZmZlY3RpdmVseU9wdGlvbmFsOyAvLy9cblxuICByZXR1cm4gZGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWw7XG59XG4iXSwibmFtZXMiOlsiY2xvbmVQYXJ0cyIsImFyZVBhcnRzUmVjdXJzaXZlIiwiYXJlUGFydHNFZmZlY3RpdmVseU9wdGlvbmFsIiwiYXJlUGFydHNEaXJlY3RseUxlZnRSZWN1cnNpdmUiLCJzaW5nbGVQYXJ0RnJvbVBhcnRzIiwiYXJlUGFydHNMZWZ0UmVjdXJzaXZlIiwicmVwZWF0ZWRQYXJ0RnJvbVBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJQYXJ0cyIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSdWxlTmFtZVBhcnRUeXBlIiwicGFydFR5cGVzIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInBhcnRzIiwibWFwIiwicGFydCIsImNsb25lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwicGFydHNSZWN1cnNpdmUiLCJydWxlTmFtZXMiLCJjb250ZXh0IiwicGFydHNFZmZlY3RpdmVseU9wdGlvbmFsIiwiZXZlcnkiLCJwYXJ0RWZmZWN0aXZlbHlPcHRpb25hbCIsImlzUGFydEVmZmVjdGl2ZWx5T3B0aW9uYWwiLCJydWxlTmFtZSIsInBhcnRzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0IiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWVSdWxlTmFtZSIsInNpbmdsZVBhcnQiLCJwYXJ0c0xlbmd0aCIsImZpcnN0UGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0c0xlZnRSZWN1cnNpdmUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwicmVwZWF0ZWRQYXJ0IiwiZm9yRWFjaCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwicGFydE5vblRlcm1pbmFsUGFydCIsImlzTm9uVGVybWluYWxQYXJ0Iiwibm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImdldFR5cGUiLCJydWxlTWFwIiwicnVsZU5hbWVQYXJ0IiwiZ2V0UnVsZU5hbWUiLCJydWxlIiwicnVsZUVmZmVjdGl2ZWx5T3B0aW9uYWwiLCJpc1J1bGVFZmZlY3RpdmVseU9wdGlvbmFsIiwib25lT3JNb3JlUGFydHNQYXJ0IiwiZ2V0UGFydCIsImdldFBhcnRzIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJnZXROYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uRWZmZWN0aXZlbHlPcHRpb25hbCIsImlzRGVmaW5pdGlvbkVmZmVjdGl2ZWx5T3B0aW9uYWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWVnQkEsVUFBVTtlQUFWQTs7SUFNQUMsaUJBQWlCO2VBQWpCQTs7SUFRQUMsMkJBQTJCO2VBQTNCQTs7SUFZQUMsNkJBQTZCO2VBQTdCQTs7SUFnQkFDLG1CQUFtQjtlQUFuQkE7O0lBa0JBQyxxQkFBcUI7ZUFBckJBOztJQVFBQyxxQkFBcUI7ZUFBckJBOztJQVNBQywyQkFBMkI7ZUFBM0JBOztJQVFBQywrQkFBK0I7ZUFBL0JBOzs7NEJBbEdpQjtxQkFFWDtvQkFDcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQVFDLHNCQUE2Q0MsbUJBQUssQ0FBbERELHFCQUFxQkUsc0JBQXdCRCxtQkFBSyxDQUE3QkMscUJBQ3JCQyxtQkFLNEJDLHVCQUFTLENBTHJDRCxrQkFDQUUsdUJBSTRCRCx1QkFBUyxDQUpyQ0Msc0JBQ0FDLHdCQUc0QkYsdUJBQVMsQ0FIckNFLHVCQUNBQyx5QkFFNEJILHVCQUFTLENBRnJDRyx3QkFDQUMsMEJBQzRCSix1QkFBUyxDQURyQ0kseUJBQ0FDLDBCQUE0QkwsdUJBQVMsQ0FBckNLO0FBRUQsU0FBU2xCLFdBQVdtQixLQUFLLEVBQUU7SUFDaENBLFFBQVFBLE1BQU1DLEdBQUcsQ0FBQyxTQUFDQztlQUFTQSxLQUFLQyxLQUFLO1FBQU0sR0FBRztJQUUvQyxPQUFPSDtBQUNUO0FBRU8sU0FBU2xCLGtCQUFrQmtCLEtBQUssRUFBRTtJQUN2QyxJQUFNSSxxQkFBcUJoQiw0QkFBNEJZLFFBQ2pESywyQkFBMkJELG1CQUFtQkUsTUFBTSxFQUNwREMsaUJBQWtCRiwyQkFBMkI7SUFFbkQsT0FBT0U7QUFDVDtBQUVPLFNBQVN4Qiw0QkFBNEJpQixLQUFLLEVBQUVRLFNBQVMsRUFBRUMsT0FBTyxFQUFFO0lBQ3JFLElBQU1DLDJCQUEyQlYsTUFBTVcsS0FBSyxDQUFDLFNBQUNULE1BQVM7UUFDckQsSUFBTVUsMEJBQTBCQywwQkFBMEJYLE1BQU1NLFdBQVdDO1FBRTNFLElBQUlHLHlCQUF5QjtZQUMzQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBUzFCLDhCQUE4QmdCLEtBQUssRUFBRWMsUUFBUSxFQUFFO0lBQzdELElBQUlDLDZCQUE2QixLQUFLO0lBRXRDLElBQU1DLHlCQUF5QjNCLGdDQUFnQ1csUUFDekRpQiwrQkFBK0JELHVCQUF1QlYsTUFBTTtJQUVsRSxJQUFJVywrQkFBK0IsR0FBRztRQUNwQyxJQUFNQyw2QkFBNkJDLElBQUFBLFlBQUssRUFBQ0gseUJBQ25DSSxxQ0FBc0NGLCtCQUErQko7UUFFM0VDLDZCQUE2Qkssb0NBQXFDLEdBQUc7SUFDdkUsQ0FBQztJQUVELE9BQU9MO0FBQ1Q7QUFFTyxTQUFTOUIsb0JBQW9CZSxLQUFLLEVBQUU7SUFDekMsSUFBSXFCO0lBRUosSUFBTUMsY0FBY3RCLE1BQU1NLE1BQU07SUFFaEMsSUFBSWdCLGdCQUFnQixHQUFHO1FBQ3JCLElBQU1DLFlBQVlKLElBQUFBLFlBQUssRUFBQ25CO1FBRXhCcUIsYUFBYUUsV0FBVyxHQUFHO0lBQzdCLE9BQU87UUFDTCxJQUFNQyxzQkFBc0IsSUFBSWxDLG9CQUFvQlU7UUFFcERxQixhQUFhRyxxQkFBcUIsR0FBRztJQUN2QyxDQUFDO0lBRUQsT0FBT0g7QUFDVDtBQUVPLFNBQVNuQyxzQkFBc0JjLEtBQUssRUFBRTtJQUMzQyxJQUFNZ0IseUJBQXlCM0IsZ0NBQWdDVyxRQUN6RGlCLCtCQUErQkQsdUJBQXVCVixNQUFNLEVBQzVEbUIscUJBQXNCUiwrQkFBK0I7SUFFM0QsT0FBT1E7QUFDVDtBQUVPLFNBQVN0QyxzQkFBc0JhLEtBQUssRUFBRTtJQUMzQyxJQUFNcUIsYUFBYXBDLG9CQUFvQmUsUUFDakNFLE9BQU9tQixZQUNQSyxzQkFBc0IsSUFBSWxDLG9CQUFvQlUsT0FDOUN5QixlQUFlRCxxQkFBc0IsR0FBRztJQUU5QyxPQUFPQztBQUNUO0FBRU8sU0FBU3ZDLDRCQUE0QlksS0FBSyxFQUFFO0lBQ2pELElBQU1JLHFCQUFxQixFQUFFO0lBRTdCSixNQUFNNEIsT0FBTyxDQUFDLFNBQUMxQjtlQUFTMkIsSUFBQUEsZ0NBQTBCLEVBQUMzQixNQUFNRTs7SUFFekQsT0FBT0E7QUFDVDtBQUVPLFNBQVNmLGdDQUFnQ1csS0FBSyxFQUFFO0lBQ3JELElBQU1nQix5QkFBeUIsRUFBRSxFQUMzQk8sWUFBWUosSUFBQUEsWUFBSyxFQUFDbkIsUUFDbEJFLE9BQU9xQixXQUFXLEdBQUc7SUFFM0JPLElBQUFBLG9DQUE4QixFQUFDNUIsTUFBTWM7SUFFckMsT0FBT0E7QUFDVDtBQUVBLFNBQVNILDBCQUEwQlgsSUFBSSxFQUFFTSxTQUFTLEVBQUVDLE9BQU8sRUFBRTtJQUMzRCxJQUFJRywwQkFBMEIsS0FBSztJQUVuQyxJQUFNbUIsc0JBQXNCN0IsS0FBSzhCLGlCQUFpQjtJQUVsRCxJQUFJRCxxQkFBcUI7UUFDdkIsSUFBTUUsa0JBQWtCL0IsTUFDbEJnQyxPQUFPRCxnQkFBZ0JFLE9BQU87UUFFcEMsT0FBUUQ7WUFDTixLQUFLekM7Z0JBQWtCO29CQUNyQixJQUFNLEFBQUUyQyxVQUFZM0IsUUFBWjJCLFNBQ0ZDLGVBQWVuQyxNQUNmWSxXQUFXdUIsYUFBYUMsV0FBVyxJQUNuQ0MsT0FBT0gsT0FBTyxDQUFDdEIsU0FBUyxJQUFJLElBQUk7b0JBRXRDLElBQUl5QixTQUFTLElBQUksRUFBRTt3QkFDakIsSUFBTUMsMEJBQTBCQywwQkFBMEJGLE1BQU0vQixXQUFXQzt3QkFFM0VHLDBCQUEwQjRCLHlCQUEwQixHQUFHO29CQUN6RCxDQUFDO29CQUVELEtBQU07Z0JBQ1I7WUFFQSxLQUFLN0M7Z0JBQXNCO29CQUN6QmlCLDBCQUEwQixJQUFJO29CQUU5QixLQUFNO2dCQUNSO1lBRUEsS0FBS2Y7Z0JBQXdCO29CQUMzQixJQUFNNkMscUJBQXFCVCxpQkFDckIvQixTQUFPd0MsbUJBQW1CQyxPQUFPO29CQUV2Qy9CLDBCQUEwQkMsMEJBQTBCWCxRQUFNTSxXQUFXQztvQkFFckUsS0FBTTtnQkFDUjtZQUVBLEtBQUtWO2dCQUF5QjtvQkFDNUJhLDBCQUEwQixJQUFJO29CQUU5QixLQUFNO2dCQUNSO1lBRUEsS0FBS2Q7Z0JBQXlCO29CQUM1QixJQUFNMEIsc0JBQXNCdEIsTUFDdEJGLFFBQVF3QixvQkFBb0JvQixRQUFRLElBQ3BDbEMsMkJBQTJCM0IsNEJBQTRCaUIsT0FBT1EsV0FBV0M7b0JBRS9FRywwQkFBMEJGLDBCQUEwQixHQUFHO29CQUV2RCxLQUFNO2dCQUNSO1lBRUEsS0FBS2Q7Z0JBQXVCO29CQUMxQixJQUFNaUQsb0JBQW9CM0MsTUFDcEJGLFNBQVE2QyxrQkFBa0JELFFBQVEsSUFDbENsQyw0QkFBMkIzQiw0QkFBNEJpQixRQUFPUSxXQUFXQztvQkFFL0VHLDBCQUEwQkYsMkJBQTBCLEdBQUc7b0JBRXZELEtBQU07Z0JBQ1I7UUFDRjtJQUNGLENBQUM7SUFFRCxPQUFPRTtBQUNUO0FBRUEsU0FBUzZCLDBCQUEwQkYsSUFBSSxFQUFFL0IsU0FBUyxFQUFFQyxPQUFPLEVBQUU7SUFDM0QsSUFBSStCLDBCQUEwQixLQUFLO0lBRW5DLElBQU0xQixXQUFXeUIsS0FBS08sT0FBTyxJQUN2QkMsNEJBQTRCdkMsVUFBVXdDLFFBQVEsQ0FBQ2xDO0lBRXJELElBQUksQ0FBQ2lDLDJCQUEyQjtRQUM5QnZDLFlBQVksQUFDVixtQkFBR0Esa0JBRE87WUFFVk07U0FDRDtRQUVELElBQU1tQyxjQUFjVixLQUFLVyxjQUFjO1FBRXZDViwwQkFBMEJTLFlBQVl0QyxLQUFLLENBQUMsU0FBQ3dDLFlBQWU7WUFDMUQsSUFBTUMsZ0NBQWdDQyxnQ0FBZ0NGLFlBQVkzQyxXQUFXQztZQUU3RixJQUFJMkMsK0JBQStCO2dCQUNqQyxPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0g7SUFDRixDQUFDO0lBRUQsT0FBT1o7QUFDVDtBQUVBLFNBQVNhLGdDQUFnQ0YsVUFBVSxFQUFFM0MsU0FBUyxFQUFFQyxPQUFPLEVBQUU7SUFDdkUsSUFBTVQsUUFBUW1ELFdBQVdQLFFBQVEsSUFDM0JsQywyQkFBMkIzQiw0QkFBNEJpQixPQUFPUSxXQUFXQyxVQUN6RTJDLGdDQUFnQzFDLDBCQUEwQixHQUFHO0lBRW5FLE9BQU8wQztBQUNUIn0=