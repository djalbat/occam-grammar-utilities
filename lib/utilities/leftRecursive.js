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
    isDefinitionLeftRecursive: function() {
        return isDefinitionLeftRecursive;
    },
    leftRecursiveRuleNamesFromDefinition: function() {
        return leftRecursiveRuleNamesFromDefinition;
    },
    leftRecursiveRuleNamesFromRule: function() {
        return leftRecursiveRuleNamesFromRule;
    }
});
var _occamparsers = require("occam-parsers");
var _necessary = require("necessary");
var _nonConsuming = require("../utilities/nonConsuming");
var first = _necessary.arrayUtilities.first, RuleNamePartType = _occamparsers.partTypes.RuleNamePartType, OptionalPartPartType = _occamparsers.partTypes.OptionalPartPartType, ChoiceOfPartsPartType = _occamparsers.partTypes.ChoiceOfPartsPartType, OneOrMorePartsPartType = _occamparsers.partTypes.OneOrMorePartsPartType, ZeroOrMorePartsPartType = _occamparsers.partTypes.ZeroOrMorePartsPartType, SequenceOfPartsPartType = _occamparsers.partTypes.SequenceOfPartsPartType;
function isDefinitionLeftRecursive(definition, ruleMap) {
    var parts = definition.getParts(), partsLeftRecursive = arePartsLeftRecursive(parts, ruleMap), definitionLeftRecursive = partsLeftRecursive; ///
    return definitionLeftRecursive;
}
function leftRecursiveRuleNamesFromRule(rule, ruleMap) {
    var leftRecursiveRuleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var definitions = rule.getDefinitions();
    definitions.forEach(function(definition) {
        leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);
    });
    return leftRecursiveRuleNames;
}
function leftRecursiveRuleNamesFromDefinition(definition, ruleMap) {
    var leftRecursiveRuleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var parts = definition.getParts();
    leftRecursiveRuleNamesFromParts(parts, ruleMap, leftRecursiveRuleNames);
    return leftRecursiveRuleNames;
}
function arePartsLeftRecursive(parts, ruleMap) {
    var leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts, ruleMap), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, partsLeftRecursive = leftRecursiveRuleNamesLength > 0;
    return partsLeftRecursive;
}
function leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames) {
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part, type = nonTerminalPart.getType();
        switch(type){
            case RuleNamePartType:
                {
                    var ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);
                    if (!leftRecursiveRuleNamesIncludesRuleName) {
                        var leftRecursiveRuleName = ruleName; ///
                        leftRecursiveRuleNames.push(leftRecursiveRuleName);
                    }
                    break;
                }
            case OptionalPartPartType:
                {
                    var optionalPartPart = nonTerminalPart, _$part = optionalPartPart.getPart();
                    leftRecursiveRuleNamesFromPart(_$part, ruleMap, leftRecursiveRuleNames);
                    break;
                }
            case OneOrMorePartsPartType:
                {
                    var oneOrMorePartsPart = nonTerminalPart, _$part1 = oneOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(_$part1, ruleMap, leftRecursiveRuleNames);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    var zeroOrMorePartsPart = nonTerminalPart, _$part2 = zeroOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(_$part2, ruleMap, leftRecursiveRuleNames);
                    break;
                }
            case SequenceOfPartsPartType:
                {
                    var sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts(), firstPart = first(parts), _$part3 = firstPart; ///
                    leftRecursiveRuleNamesFromPart(_$part3, ruleMap, leftRecursiveRuleNames);
                    break;
                }
            case ChoiceOfPartsPartType:
                {
                    var choiceOfPartsPart = nonTerminalPart, parts1 = choiceOfPartsPart.getParts();
                    parts1.forEach(function(part) {
                        leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);
                    });
                    break;
                }
        }
    }
}
function leftRecursiveRuleNamesFromParts(parts, ruleMap) {
    var leftRecursiveRuleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    parts.every(function(part) {
        var partNonConsuming = (0, _nonConsuming.isPartNonConsuming)(part, ruleMap);
        if (!partNonConsuming) {
            leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);
        } else {
            return true;
        }
    });
    return leftRecursiveRuleNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGVmdFJlY3Vyc2l2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBpc1BhcnROb25Db25zdW1pbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vbkNvbnN1bWluZ1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24sIHJ1bGVNYXApIHtcbiAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgIHBhcnRzTGVmdFJlY3Vyc2l2ZSA9IGFyZVBhcnRzTGVmdFJlY3Vyc2l2ZShwYXJ0cywgcnVsZU1hcCksXG4gICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gcGFydHNMZWZ0UmVjdXJzaXZlOyAvLy9cblxuICByZXR1cm4gZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUocnVsZSwgcnVsZU1hcCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgcnVsZU1hcCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIHJ1bGVNYXAsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzLCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZnVuY3Rpb24gYXJlUGFydHNMZWZ0UmVjdXJzaXZlKHBhcnRzLCBydWxlTWFwKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzLCBydWxlTWFwKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICBwYXJ0c0xlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBwYXJ0c0xlZnRSZWN1cnNpdmU7XG59XG5cbmZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJ1bGVNYXAsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKVxuICAgICAgICB9KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cywgcnVsZU1hcCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgY29uc3QgcGFydE5vbkNvbnN1bWluZyA9IGlzUGFydE5vbkNvbnN1bWluZyhwYXJ0LCBydWxlTWFwKTtcblxuICAgIGlmICghcGFydE5vbkNvbnN1bWluZykge1xuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJ1bGVNYXAsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuIl0sIm5hbWVzIjpbImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInBhcnRUeXBlcyIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJkZWZpbml0aW9uIiwicnVsZU1hcCIsInBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0c0xlZnRSZWN1cnNpdmUiLCJhcmVQYXJ0c0xlZnRSZWN1cnNpdmUiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZvckVhY2giLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsInBhcnQiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0IiwiaXNOb25UZXJtaW5hbFBhcnQiLCJub25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsIm9wdGlvbmFsUGFydFBhcnQiLCJnZXRQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJmaXJzdFBhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCIsImV2ZXJ5IiwicGFydE5vbkNvbnN1bWluZyIsImlzUGFydE5vbkNvbnN1bWluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZWdCQSx5QkFBeUI7ZUFBekJBOztJQWtCQUMsb0NBQW9DO2VBQXBDQTs7SUFWQUMsOEJBQThCO2VBQTlCQTs7OzRCQXJCVTt5QkFDSzs0QkFFSTtBQUVuQyxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRCxPQUNBRSxtQkFLNEJDLHVCQUFTLENBTHJDRCxrQkFDQUUsdUJBSTRCRCx1QkFBUyxDQUpyQ0Msc0JBQ0FDLHdC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