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
function retrieveLeftRecursiveDefinitions(rule, context) {
    var recursiveDefinitions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var definitions = rule.getDefinitions();
    definitions.forEach(function(definition) {
        var recursiveDefinition = retrieveLeftRecursiveDefinition(rule, definition, context, recursiveDefinitions);
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
                    var ruleMap = context.ruleMap, ruleName = recursiveRuleName, _$rule = ruleMap[ruleName] || null; ///
                    if (_$rule !== null) {
                        var recursiveDefinitions = previousRecursiveDefinitions; ///
                        retrieveLeftRecursiveDefinitions(_$rule, context, recursiveDefinitions);
                    }
                }
            });
        }
    });
}
function retrieveLeftRecursiveDefinition(rule, definition, context, recursiveDefinitions) {
    var recursiveDefinition = null;
    if (recursiveDefinition === null) {
        var indirectlyLeftRecursiveDefinition = _indirectly.default.fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions);
        if (indirectlyLeftRecursiveDefinition !== null) {
            var indirectlyLeftRecursiveDefinitions = context.indirectlyLeftRecursiveDefinitions, indirectlyLeftRecursiveDefinitionsB = indirectlyLeftRecursiveDefinitions, indirectlyLeftRecursiveDefinitionA = indirectlyLeftRecursiveDefinition; ///
            indirectlyLeftRecursiveDefinitionsB.some(function(indirectlyLeftRecursiveDefinitionB) {
                var indirectlyLeftRecursiveDefinitionAEquivalentToRecursiveDefinitionB = indirectlyLeftRecursiveDefinitionA.isEquivalentTo(indirectlyLeftRecursiveDefinitionB);
                if (indirectlyLeftRecursiveDefinitionAEquivalentToRecursiveDefinitionB) {
                    indirectlyLeftRecursiveDefinition = null;
                    return true;
                }
            });
            if (indirectlyLeftRecursiveDefinition !== null) {
                indirectlyLeftRecursiveDefinitions.push(indirectlyLeftRecursiveDefinition);
            }
        }
        recursiveDefinition = indirectlyLeftRecursiveDefinition; ///
    }
    if (recursiveDefinition === null) {
        var directlyLeftRecursiveDefinition = _directly.default.fromRuleAndDefinition(rule, definition);
        if (directlyLeftRecursiveDefinition !== null) {
            var directlyLeftRecursiveDefinitions = context.directlyLeftRecursiveDefinitions;
            directlyLeftRecursiveDefinitions.push(directlyLeftRecursiveDefinition);
        }
        recursiveDefinition = directlyLeftRecursiveDefinition; ///
    }
    if (recursiveDefinition === null) {
        var leftRecursiveDefinition = _left.default.fromRuleAndDefinition(rule, definition);
        recursiveDefinition = leftRecursiveDefinition; ///
    }
    if (recursiveDefinition === null) {
        recursiveDefinition = _recursiveDefinition.default.fromRuleAndDefinition(rule, definition);
    }
    return recursiveDefinition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdFwiO1xuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNvbnRleHQsIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gW10pIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIGNvbnRleHQsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgcmVjdXJzaXZlRGVmaW5pdGlvbiBdLFxuICAgICAgICAgICAgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgocHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpO1xuXG4gICAgICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDsgLy8vXG5cbiAgICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNvbnRleHQsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgY29udGV4dCwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uID09PSBudWxsKSB7XG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zQiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIC8vL1xuICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNCLnNvbWUoKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkIpID0+IHtcbiAgICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQUVxdWl2YWxlbnRUb1JlY3Vyc2l2ZURlZmluaXRpb25CID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQS5pc0VxdWl2YWxlbnRUbyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25CKTtcblxuICAgICAgICBpZiAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQUVxdWl2YWxlbnRUb1JlY3Vyc2l2ZURlZmluaXRpb25CKSB7XG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnB1c2goaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gIH1cblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKTtcblxuICAgIGlmIChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0O1xuXG4gICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gIH1cblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gIH1cblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gbnVsbCkge1xuICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKTtcbiAgfVxuXG4gIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuIl0sIm5hbWVzIjpbInJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImNvbnRleHQiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmb3JFYWNoIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucyIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzIiwibWFwIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSIsImluY2x1ZGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0IiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BIiwic29tZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkIiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BRXF1aXZhbGVudFRvUmVjdXJzaXZlRGVmaW5pdGlvbkIiLCJpc0VxdWl2YWxlbnRUbyIsInB1c2giLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFPYixTQWlDQzs7O2VBakN1QkEsZ0NBQWdDOzs7d0VBTHhCLHVCQUF1Qjt5REFDbkIsNEJBQTRCOzZEQUNwQixxQ0FBcUM7K0RBQ25DLHVDQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RSxTQUFTQSxnQ0FBZ0MsQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQTZCO1FBQTNCQyxvQkFBb0IsR0FBcEJBLCtDQUF5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