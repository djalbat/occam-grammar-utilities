"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = retrieveLeftRecursiveDefinitions;
var _recursive = _interopRequireDefault(require("./definition/recursive"));
var _left = _interopRequireDefault(require("./definition/recursive/left"));
var _directly = _interopRequireDefault(require("./definition/recursive/left/directly"));
var _indirectly = _interopRequireDefault(require("./definition/recursive/left/indirectly"));
function retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
    var definitions = rule.getDefinitions();
    definitions.forEach(function(definition) {
        var recursiveDefinition = retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);
        if (recursiveDefinition !== null) {
            var previousRecursiveDefinitions = _toConsumableArray(recursiveDefinitions).concat([
                recursiveDefinition
            ]), previousRecursiveRuleNames = previousRecursiveDefinitions.map(function(previousRecursiveDefinition) {
                var previousRecursiveDefinitionRuleName = previousRecursiveDefinition.getRuleName(), previousRecursiveRuleName = previousRecursiveDefinitionRuleName; ///
                return previousRecursiveRuleName;
            }), recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames();
            recursiveRuleNames.forEach(function(recursiveRuleName) {
                var previousRecursiveRuleNamesIncludesRecursiveRuleName = previousRecursiveRuleNames.includes(recursiveRuleName);
                if (!previousRecursiveRuleNamesIncludesRecursiveRuleName) {
                    var ruleName = recursiveRuleName, _$rule = ruleMap[ruleName] || null; ///
                    if (_$rule !== null) {
                        var _$recursiveDefinitions = previousRecursiveDefinitions; ///
                        retrieveLeftRecursiveDefinitions(_$rule, _$recursiveDefinitions, leftRecursiveDefinitions, ruleMap);
                    }
                }
            });
        }
    });
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
    var recursiveDefinition;
    var ruleName = rule.getName(), definitionRecursiveDefinition = _instanceof(definition, _recursive.default);
    if (definitionRecursiveDefinition) {
        recursiveDefinition = definition; ///
    } else {
        var leftRecursiveDefinition = _indirectly.default.fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) || _directly.default.fromRuleNameAndDefinition(ruleName, definition) || _left.default.fromRuleNameAndDefinition(ruleName, definition);
        if (leftRecursiveDefinition !== null) {
            leftRecursiveDefinitions.push(leftRecursiveDefinition);
            recursiveDefinition = leftRecursiveDefinition; ///
        } else {
            recursiveDefinition = _recursive.default.fromRuleNameAndDefinition(ruleName, definition);
        }
        if (recursiveDefinition !== null) {
            var replacedDefinition = definition, replacementDefinition = recursiveDefinition; ///
            rule.replaceDefinition(replacedDefinition, replacementDefinition);
            var recursiveDefinitionIndirectlyLeftRecursiveDefinition = _instanceof(recursiveDefinition, _indirectly.default);
            if (recursiveDefinitionIndirectlyLeftRecursiveDefinition) {
                var indirectlyLeftRecursiveDefinition = recursiveDefinition, implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(), leftRecursiveDefinition1 = implicitlyLeftRecursiveDefinition.getLeftRecursiveDefinition(), ruleName1 = implicitlyLeftRecursiveDefinition.getRuleName(), replacedDefinition1 = leftRecursiveDefinition1, replacementDefinition1 = implicitlyLeftRecursiveDefinition; ///
                rule = ruleMap[ruleName1];
                rule.replaceDefinition(replacedDefinition1, replacementDefinition1);
            }
        }
    }
    return recursiveDefinition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5pbXBvcnQgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCByZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBydWxlTWFwKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gcmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBydWxlTWFwKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgcmVjdXJzaXZlRGVmaW5pdGlvbiBdLFxuICAgICAgICAgICAgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgocHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpO1xuXG4gICAgICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsOyAvLy9cblxuICAgICAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9ucyA9IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbnM7ICAvLy9cblxuICAgICAgICAgICAgcmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgcnVsZU1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJ1bGVNYXApIHtcbiAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb247XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbik7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXBsYWNlZERlZmluaXRpb24gPSBkZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlZERlZmluaXRpb24sIHJlcGxhY2VtZW50RGVmaW5pdGlvbik7XG5cbiAgICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdO1xuXG4gICAgICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuIl0sIm5hbWVzIjpbInJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZU1hcCIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmb3JFYWNoIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucyIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzIiwibWFwIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSIsImluY2x1ZGVzIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicHVzaCIsInJlcGxhY2VkRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7a0JBT1dBLGdDQUFnQztBQUx4QixJQUFBLFVBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTtBQUNwQixJQUFBLEtBQTZCLGtDQUE3Qiw2QkFBNkIsRUFBQTtBQUNyQixJQUFBLFNBQXNDLGtDQUF0Qyxz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