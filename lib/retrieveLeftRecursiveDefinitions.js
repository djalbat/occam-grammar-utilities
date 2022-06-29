"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return retrieveLeftRecursiveDefinitions;
    },
    enumerable: true
});
var _recursive = _interopRequireDefault(require("./definition/recursive"));
var _left = _interopRequireDefault(require("./definition/recursive/left"));
var _directly = _interopRequireDefault(require("./definition/recursive/left/directly"));
var _indirectly = _interopRequireDefault(require("./definition/recursive/left/indirectly"));
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
        }
    }
    return recursiveDefinition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5pbXBvcnQgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCByZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBydWxlTWFwKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gcmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBydWxlTWFwKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgcmVjdXJzaXZlRGVmaW5pdGlvbiBdLFxuICAgICAgICAgICAgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgocHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpO1xuXG4gICAgICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsOyAvLy9cblxuICAgICAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9ucyA9IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbnM7ICAvLy9cblxuICAgICAgICAgICAgcmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgcnVsZU1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJ1bGVNYXApIHtcbiAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb247XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbik7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXBsYWNlZERlZmluaXRpb24gPSBkZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlZERlZmluaXRpb24sIHJlcGxhY2VtZW50RGVmaW5pdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG59XG4iXSwibmFtZXMiOlsicmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlTWFwIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZvckVhY2giLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zIiwicHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMiLCJtYXAiLCJwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb24iLCJwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5jbHVkZXMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwdXNoIiwicmVwbGFjZWREZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7O2VBT1dBLGdDQUFnQzs7OztnREFMeEIsd0JBQXdCOzJDQUNwQiw2QkFBNkI7K0NBQ3JCLHNDQUFzQztpREFDcEMsd0NBQXdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RSxTQUFTQSxnQ0FBZ0MsQ0FBQ0MsSUFBSSxFQUFFQyxvQkFBb0IsRUFBRUMsd0JBQXdCLEVBQUVDLE9BQU8sRUFBRTtJQUN0SCxJQUFNQyxXQUFXLEdBQUdKLElBQUksQ0FBQ0ssY0FBYyxFQUFFLEFBQUM7SUFFMUNELFdBQVcsQ0FBQ0UsT0FBTyxDQUFDLFNB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