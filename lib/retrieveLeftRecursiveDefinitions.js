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
        var recursiveDefinition = retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, leftRecursiveDefinitions);
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
function retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, leftRecursiveDefinitions) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5pbXBvcnQgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCByZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBydWxlTWFwKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gcmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgcmVjdXJzaXZlRGVmaW5pdGlvbiBdLFxuICAgICAgICAgICAgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgocHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpO1xuXG4gICAgICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsOyAvLy9cblxuICAgICAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9ucyA9IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbnM7ICAvLy9cblxuICAgICAgICAgICAgcmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgcnVsZU1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb247XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbik7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXBsYWNlZERlZmluaXRpb24gPSBkZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlZERlZmluaXRpb24sIHJlcGxhY2VtZW50RGVmaW5pdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG59XG4iXSwibmFtZXMiOlsicmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlTWFwIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZvckVhY2giLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zIiwicHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMiLCJtYXAiLCJwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb24iLCJwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5jbHVkZXMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwdXNoIiwicmVwbGFjZWREZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7O2VBT1dBLGdDQUFnQzs7OztnREFMeEIsd0JBQXdCOzJDQUNwQiw2QkFBNkI7K0NBQ3JCLHNDQUFzQztpREFDcEMsd0NBQXdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RSxTQUFTQSxnQ0FBZ0MsQ0FBQ0MsSUFBSSxFQUFFQyxvQkFBb0IsRUFBRUMsd0JBQXdCLEVBQUVDLE9BQU8sRUFBRTtJQUN0SCxJQUFNQyxXQUFXLEdBQUdKLElBQUksQ0FBQ0ssY0FBYyxFQUFFLEFBQUM7SUFFMUNELFdBQVcsQ0FBQ0UsT0FBTyxDQUFDLFNBQUNDLFVBQVUsRUFBSztRQUNs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