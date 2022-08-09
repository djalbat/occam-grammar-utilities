"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return retrieveLeftRecursiveDefinitions;
    }
});
var _recursiveDefinition = /*#__PURE__*/ _interopRequireDefault(require("./recursiveDefinition"));
var _left = /*#__PURE__*/ _interopRequireDefault(require("./recursiveDefinition/left"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("./recursiveDefinition/left/directly"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("./recursiveDefinition/left/indirectly"));
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
    var recursiveDefinition = _indirectly.default.fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions) || _directly.default.fromRuleAndDefinition(rule, definition) || _left.default.fromRuleAndDefinition(rule, definition) || _recursiveDefinition.default.fromRuleAndDefinition(rule, definition);
    if (_instanceof(recursiveDefinition, _left.default)) {
        var leftRecursiveDefinition = recursiveDefinition; ///
        leftRecursiveDefinitions.push(leftRecursiveDefinition);
    }
    return recursiveDefinition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdFwiO1xuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJ1bGVNYXApIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbIC4uLnJlY3Vyc2l2ZURlZmluaXRpb25zLCByZWN1cnNpdmVEZWZpbml0aW9uIF0sXG4gICAgICAgICAgICBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZSA9IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCk7XG5cbiAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcy5mb3JFYWNoKChyZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUgPSBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhyZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdIHx8IG51bGw7IC8vL1xuXG4gICAgICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25zID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uczsgIC8vL1xuXG4gICAgICAgICAgICByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCByZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBydWxlTWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnB1c2gobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG59XG4iXSwibmFtZXMiOlsicmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlTWFwIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZvckVhY2giLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zIiwicHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMiLCJtYXAiLCJwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb24iLCJwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5jbHVkZXMiLCJydWxlTmFtZSIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQU9iLFNBZ0NDOzs7ZUFoQ3VCQSxnQ0FBZ0M7Ozt3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