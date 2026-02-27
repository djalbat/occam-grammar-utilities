"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyRepeatedRule;
    }
});
const _necessary = require("necessary");
const _occamparsers = require("occam-parsers");
const _epsilon = /*#__PURE__*/ _interop_require_default(require("../../definition/epsilon"));
const _indirectly = /*#__PURE__*/ _interop_require_default(require("../../node/repeated/indirectly"));
const _parts = require("../../utilities/parts");
const _nonProducing = require("../../utilities/nonProducing");
const _complex = require("../../utilities/complex");
const _occluded = require("../../utilities/occluded");
const _callAhead = require("../../utilities/callAhead");
const _qualified = require("../../utilities/qualified");
const _ruleName = require("../../utilities/ruleName");
const _leftRecursive = require("../../utilities/leftRecursive");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities;
class IndirectlyRepeatedRule extends _occamparsers.Rule {
    NonTerminalNodeFromRuleName(ruleName, state) {
        const NonTerminalNode = _indirectly.default;
        return NonTerminalNode;
    }
    static fromRuleAndLeftRecursiveRule(rule, leftRecursiveRule, ruleMap) {
        let definitions = rule.getDefinitions();
        const leftRecursiveRuleName = leftRecursiveRule.getName();
        let leftRecursiveDefinitions = definitions.filter((definition)=>{
            const definitionLeftRecursive = (0, _leftRecursive.isDefinitionLeftRecursive)(definition, ruleMap);
            if (definitionLeftRecursive) {
                const leftRecursiveRuleNames = (0, _leftRecursive.leftRecursiveRuleNamesFromDefinition)(definition, ruleMap), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);
                if (firstLeftRecursiveRuleName === leftRecursiveRuleName) {
                    const ruleName = rule.getName(), definitionString = definition.asString();
                    const definitionComplex = (0, _complex.isDefinitionComplex)(definition);
                    if (definitionComplex) {
                        throw new Error(`The '${definitionString}' left recursive-definition of the '${ruleName}' rule is complex.`);
                    }
                    const definitionOccluded = (0, _occluded.isDefinitionOccluded)(definition, ruleMap);
                    if (definitionOccluded) {
                        const definitionString = definition.asString();
                        throw new Error(`The '${definitionString}' left recursive definition of the '${ruleName}' rule is occluded.`);
                    }
                    const definitionCallAhead = (0, _callAhead.isDefinitionCallAhead)(definition);
                    if (definitionCallAhead) {
                        throw new Error(`The first part of the '${definitionString}' left recursive definition of the '${ruleName}' rule is look-ahead.`);
                    }
                    const definitionQualified = (0, _qualified.isDefinitionQualified)(definition);
                    if (definitionQualified) {
                        throw new Error(`The first part of the '${definitionString}' left recursive definition of the '${ruleName}' rule is qualified.`);
                    }
                    return true;
                }
            }
        });
        const firstPartsEqual = areFirstPartsEqual(leftRecursiveDefinitions);
        if (!firstPartsEqual) {
            const ruleName = rule.getName();
            throw new Error(`The first parts of the '${leftRecursiveRuleName}' left recursive definitions in the '${ruleName}' rule are not equal.`);
        }
        let precedence = null;
        leftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition)=>{
            const parts = leftRecursiveDefinition.getParts(), partsLength = parts.length;
            if (partsLength === 1) {
                precedence = leftRecursiveDefinition.getPrecedence();
            } else {
                return true;
            }
        });
        const ruleName = rule.getName(), leftRecursiveRuleOpacity = leftRecursiveRule.getOpacity(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, opacity = leftRecursiveRuleOpacity; ///
        definitions = definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions);
        const indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions), indirectlyRepeatedRuleNonProducing = (0, _nonProducing.isRuleNonProducing)(indirectlyRepeatedRule, ruleMap);
        if (indirectlyRepeatedRuleNonProducing) {
            const epsilonDefinition = _epsilon.default.fromPrecedence(precedence);
            definitions.push(epsilonDefinition);
        }
        return indirectlyRepeatedRule;
    }
}
function areFirstPartsEqual(definitions) {
    const firstParts = definitions.map((definition)=>{
        const parts = definition.getParts(), firstPart = first(parts);
        return firstPart;
    }), firstPartsEqual = (0, _parts.arePartsEqual)(firstParts);
    return firstPartsEqual;
}
function definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions) {
    const definitions = leftRecursiveDefinitions.map((leftRecursiveDefinition)=>{
        let parts = leftRecursiveDefinition.getParts();
        parts = [
            ...parts
        ];
        parts.shift();
        const precedence = leftRecursiveDefinition.getPrecedence(), definition = _occamparsers.Definition.fromPartsAndPrecedence(parts, precedence);
        return definition;
    });
    return definitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBFcHNpbG9uRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9lcHNpbG9uXCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc1J1bGVOb25Qcm9kdWNpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vblByb2R1Y2luZ1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29tcGxleFwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uT2NjbHVkZWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL29jY2x1ZGVkXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25DYWxsQWhlYWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NhbGxBaGVhZFwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uUXVhbGlmaWVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWFsaWZpZWRcIjtcbmltcG9ydCB7IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sZWZ0UmVjdXJzaXZlXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIE5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZShydWxlTmFtZSwgc3RhdGUpIHtcbiAgICBjb25zdCBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlO1xuXG4gICAgcmV0dXJuIE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbiwgcnVsZU1hcCk7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIHJ1bGVNYXApLFxuICAgICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgbGVmdCByZWN1cnNpdmUtZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXguYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbk9jY2x1ZGVkID0gaXNEZWZpbml0aW9uT2NjbHVkZWQoZGVmaW5pdGlvbiwgcnVsZU1hcCk7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbk9jY2x1ZGVkKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIG9jY2x1ZGVkLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25DYWxsQWhlYWQgPSBpc0RlZmluaXRpb25DYWxsQWhlYWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNhbGxBaGVhZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydCBvZiB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBsb29rLWFoZWFkLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25RdWFsaWZpZWQgPSBpc0RlZmluaXRpb25RdWFsaWZpZWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvblF1YWxpZmllZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydCBvZiB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBxdWFsaWZpZWQuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0UGFydHNFcXVhbCA9IGFyZUZpcnN0UGFydHNFcXVhbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKCFmaXJzdFBhcnRzRXF1YWwpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnRzIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBpbiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGFyZSBub3QgZXF1YWwuYCk7XG4gICAgfVxuXG4gICAgbGV0IHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZpbHRlcigobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgcHJlY2VkZW5jZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKTtcbiAgICAgIH0gZWxzZSAge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVPcGFjaXR5ID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0T3BhY2l0eSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IGxlZnRSZWN1cnNpdmVSdWxlT3BhY2l0eTsgLy8vXG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTm9uUHJvZHVjaW5nID0gaXNSdWxlTm9uUHJvZHVjaW5nKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOb25Qcm9kdWNpbmcpIHtcbiAgICAgIGNvbnN0IGVwc2lsb25EZWZpbml0aW9uID0gRXBzaWxvbkRlZmluaXRpb24uZnJvbVByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZXBzaWxvbkRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFyZUZpcnN0UGFydHNFcXVhbChkZWZpbml0aW9ucykge1xuICBjb25zdCBmaXJzdFBhcnRzID0gZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIGZpcnN0UGFydHNFcXVhbCA9IGFyZVBhcnRzRXF1YWwoZmlyc3RQYXJ0cyk7XG5cbiAgcmV0dXJuIGZpcnN0UGFydHNFcXVhbDtcbn1cblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgICAgIGxldCBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAgICAgICAuLi5wYXJ0c1xuICAgICAgICAgIF1cblxuICAgICAgICAgIHBhcnRzLnNoaWZ0KCk7XG5cbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSBEZWZpbml0aW9uLmZyb21QYXJ0c0FuZFByZWNlZGVuY2UocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlJ1bGUiLCJOb25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUiLCJydWxlTmFtZSIsInN0YXRlIiwiTm9uVGVybWluYWxOb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlTWFwIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldE5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiRXJyb3IiLCJkZWZpbml0aW9uT2NjbHVkZWQiLCJpc0RlZmluaXRpb25PY2NsdWRlZCIsImRlZmluaXRpb25DYWxsQWhlYWQiLCJpc0RlZmluaXRpb25DYWxsQWhlYWQiLCJkZWZpbml0aW9uUXVhbGlmaWVkIiwiaXNEZWZpbml0aW9uUXVhbGlmaWVkIiwiZmlyc3RQYXJ0c0VxdWFsIiwiYXJlRmlyc3RQYXJ0c0VxdWFsIiwicHJlY2VkZW5jZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0UHJlY2VkZW5jZSIsImxlZnRSZWN1cnNpdmVSdWxlT3BhY2l0eSIsImdldE9wYWNpdHkiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9uc0Zyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5vblByb2R1Y2luZyIsImlzUnVsZU5vblByb2R1Y2luZyIsImVwc2lsb25EZWZpbml0aW9uIiwiRXBzaWxvbkRlZmluaXRpb24iLCJmcm9tUHJlY2VkZW5jZSIsInB1c2giLCJmaXJzdFBhcnRzIiwibWFwIiwiZmlyc3RQYXJ0IiwiYXJlUGFydHNFcXVhbCIsInNoaWZ0IiwiRGVmaW5pdGlvbiIsImZyb21QYXJ0c0FuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQXFCQTs7OzJCQWpCVTs4QkFDRTtnRUFFSDttRUFDSzt1QkFFTDs4QkFDSzt5QkFDQzswQkFDQzsyQkFDQzsyQkFDQTswQkFDeUM7K0JBQ0M7Ozs7OztBQUVoRixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztBQUVqQixNQUFNRiwrQkFBK0JHLGtCQUFJO0lBQ3REQyw0QkFBNEJDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO1FBQzNDLE1BQU1DLGtCQUFrQkMsbUJBQXNCO1FBRTlDLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPRSw2QkFBNkJDLElBQUksRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU8sRUFBRTtRQUNwRSxJQUFJQyxjQUFjSCxLQUFLSSxjQUFjO1FBRXJDLE1BQU1DLHdCQUF3Qkosa0JBQWtCSyxPQUFPO1FBRXZELElBQUlDLDJCQUEy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