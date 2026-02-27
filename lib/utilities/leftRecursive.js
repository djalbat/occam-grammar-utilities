"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get isDefinitionLeftRecursive () {
        return isDefinitionLeftRecursive;
    },
    get leftRecursiveRuleNamesFromDefinition () {
        return leftRecursiveRuleNamesFromDefinition;
    },
    get leftRecursiveRuleNamesFromRule () {
        return leftRecursiveRuleNamesFromRule;
    }
});
const _occamparsers = require("occam-parsers");
const _necessary = require("necessary");
const _nonConsuming = require("../utilities/nonConsuming");
const { first } = _necessary.arrayUtilities, { RuleNamePartType, OptionalPartPartType, ChoiceOfPartsPartType, OneOrMorePartsPartType, ZeroOrMorePartsPartType, SequenceOfPartsPartType } = _occamparsers.partTypes;
function isDefinitionLeftRecursive(definition, ruleMap) {
    const parts = definition.getParts(), partsLeftRecursive = arePartsLeftRecursive(parts, ruleMap), definitionLeftRecursive = partsLeftRecursive; ///
    return definitionLeftRecursive;
}
function leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames = []) {
    const definitions = rule.getDefinitions();
    definitions.forEach((definition)=>{
        leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);
    });
    return leftRecursiveRuleNames;
}
function leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames = []) {
    const parts = definition.getParts();
    leftRecursiveRuleNamesFromParts(parts, ruleMap, leftRecursiveRuleNames);
    return leftRecursiveRuleNames;
}
function arePartsLeftRecursive(parts, ruleMap) {
    const leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts, ruleMap), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, partsLeftRecursive = leftRecursiveRuleNamesLength > 0;
    return partsLeftRecursive;
}
function leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames) {
    const partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        const nonTerminalPart = part, type = nonTerminalPart.getType();
        switch(type){
            case RuleNamePartType:
                {
                    const ruleNamePart = nonTerminalPart, ruleName = ruleNamePart.getRuleName(), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);
                    if (!leftRecursiveRuleNamesIncludesRuleName) {
                        const leftRecursiveRuleName = ruleName; ///
                        leftRecursiveRuleNames.push(leftRecursiveRuleName);
                    }
                    break;
                }
            case OptionalPartPartType:
                {
                    const optionalPartPart = nonTerminalPart, part = optionalPartPart.getPart();
                    leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);
                    break;
                }
            case OneOrMorePartsPartType:
                {
                    const oneOrMorePartsPart = nonTerminalPart, part = oneOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    const zeroOrMorePartsPart = nonTerminalPart, part = zeroOrMorePartsPart.getPart();
                    leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);
                    break;
                }
            case SequenceOfPartsPartType:
                {
                    const sequenceOfPartsPart = nonTerminalPart, parts = sequenceOfPartsPart.getParts(), firstPart = first(parts), part = firstPart; ///
                    leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);
                    break;
                }
            case ChoiceOfPartsPartType:
                {
                    const choiceOfPartsPart = nonTerminalPart, parts = choiceOfPartsPart.getParts();
                    parts.forEach((part)=>{
                        leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);
                    });
                    break;
                }
        }
    }
}
function leftRecursiveRuleNamesFromParts(parts, ruleMap, leftRecursiveRuleNames = []) {
    parts.every((part)=>{
        const partNonConsuming = (0, _nonConsuming.isPartNonConsuming)(part, ruleMap);
        if (!partNonConsuming) {
            leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);
        } else {
            return true;
        }
    });
    return leftRecursiveRuleNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGVmdFJlY3Vyc2l2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBpc1BhcnROb25Db25zdW1pbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vbkNvbnN1bWluZ1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgIFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24sIHJ1bGVNYXApIHtcbiAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgIHBhcnRzTGVmdFJlY3Vyc2l2ZSA9IGFyZVBhcnRzTGVmdFJlY3Vyc2l2ZShwYXJ0cywgcnVsZU1hcCksXG4gICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gcGFydHNMZWZ0UmVjdXJzaXZlOyAvLy9cblxuICByZXR1cm4gZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUocnVsZSwgcnVsZU1hcCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgcnVsZU1hcCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIHJ1bGVNYXAsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzLCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZnVuY3Rpb24gYXJlUGFydHNMZWZ0UmVjdXJzaXZlKHBhcnRzLCBydWxlTWFwKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzLCBydWxlTWFwKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICBwYXJ0c0xlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBwYXJ0c0xlZnRSZWN1cnNpdmU7XG59XG5cbmZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5vblRlcm1pbmFsUGFydCwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJ1bGVNYXAsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbm9uVGVybWluYWxQYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gc2VxdWVuY2VPZlBhcnRzUGFydC5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGU6IHtcbiAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBydWxlTWFwLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKVxuICAgICAgICB9KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cywgcnVsZU1hcCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgY29uc3QgcGFydE5vbkNvbnN1bWluZyA9IGlzUGFydE5vbkNvbnN1bWluZyhwYXJ0LCBydWxlTWFwKTtcblxuICAgIGlmICghcGFydE5vbkNvbnN1bWluZykge1xuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJ1bGVNYXAsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuIl0sIm5hbWVzIjpbImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJkZWZpbml0aW9uIiwicnVsZU1hcCIsInBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0c0xlZnRSZWN1cnNpdmUiLCJhcmVQYXJ0c0xlZnRSZWN1cnNpdmUiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZvckVhY2giLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsInBhcnQiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0IiwiaXNOb25UZXJtaW5hbFBhcnQiLCJub25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsIm9wdGlvbmFsUGFydFBhcnQiLCJnZXRQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJmaXJzdFBhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCIsImV2ZXJ5IiwicGFydE5vbkNvbnN1bWluZyIsImlzUGFydE5vbkNvbnN1bWluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZWdCQTtlQUFBQTs7UUFrQkFDO2VBQUFBOztRQVZBQztlQUFBQTs7OzhCQXJCVTsyQkFDSzs4QkFFSTtBQUVuQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYyxFQUMxQixFQUFFQyxnQkFBZ0IsRUFDaEJDLG9CQUFvQixFQUNwQkMscUJBQXFCLEVBQ3JCQyxzQkFBc0IsRUFDdEJDLHVCQUF1QixFQUN2QkMsdUJB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