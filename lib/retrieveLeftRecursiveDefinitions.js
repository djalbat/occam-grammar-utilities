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
            var leftRecursiveDefinitions = context.leftRecursiveDefinitions;
            leftRecursiveDefinitions.some(function(leftRecursiveDefinition) {
                if (_instanceof(leftRecursiveDefinition, _indirectly.default)) {
                    var indirectlyLeftRecursiveDefinitionA = leftRecursiveDefinition, indirectlyLeftRecursiveDefinitionB = indirectlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinitionAEquivalentToRecursiveDefinitionB = indirectlyLeftRecursiveDefinitionA.isEquivalentTo(indirectlyLeftRecursiveDefinitionB);
                    if (indirectlyLeftRecursiveDefinitionAEquivalentToRecursiveDefinitionB) {
                        indirectlyLeftRecursiveDefinition = null;
                        return true;
                    }
                }
            });
            if (indirectlyLeftRecursiveDefinition !== null) {
                var leftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
                leftRecursiveDefinitions.push(leftRecursiveDefinition);
            }
        }
        recursiveDefinition = indirectlyLeftRecursiveDefinition; ///
    }
    if (recursiveDefinition === null) {
        var directlyLeftRecursiveDefinition = _directly.default.fromRuleAndDefinition(rule, definition);
        if (directlyLeftRecursiveDefinition !== null) {
            var leftRecursiveDefinitions1 = context.leftRecursiveDefinitions, leftRecursiveDefinition1 = directlyLeftRecursiveDefinition; ///
            leftRecursiveDefinitions1.push(leftRecursiveDefinition1);
        }
        recursiveDefinition = directlyLeftRecursiveDefinition; ///
    }
    if (recursiveDefinition === null) {
        var leftRecursiveDefinition2 = _left.default.fromRuleAndDefinition(rule, definition);
        recursiveDefinition = leftRecursiveDefinition2; ///
    }
    if (recursiveDefinition === null) {
        recursiveDefinition = _recursiveDefinition.default.fromRuleAndDefinition(rule, definition);
    }
    return recursiveDefinition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdFwiO1xuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNvbnRleHQsIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gW10pIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIGNvbnRleHQsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgcmVjdXJzaXZlRGVmaW5pdGlvbiBdLFxuICAgICAgICAgICAgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgocHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpO1xuXG4gICAgICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDsgLy8vXG5cbiAgICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNvbnRleHQsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgY29udGV4dCwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uID09PSBudWxsKSB7XG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dDtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnNvbWUoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkEgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQUVxdWl2YWxlbnRUb1JlY3Vyc2l2ZURlZmluaXRpb25CID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQS5pc0VxdWl2YWxlbnRUbyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25CKTtcblxuICAgICAgICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BRXF1aXZhbGVudFRvUmVjdXJzaXZlRGVmaW5pdGlvbkIpIHtcbiAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucHVzaChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuICB9XG5cbiAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb24gPT09IG51bGwpIHtcbiAgICBjb25zdCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnB1c2gobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gIH1cblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gIH1cblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gbnVsbCkge1xuICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKTtcbiAgfVxuXG4gIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuIl0sIm5hbWVzIjpbInJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImNvbnRleHQiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmb3JFYWNoIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucyIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzIiwibWFwIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSIsImluY2x1ZGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJzb21lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFFcXVpdmFsZW50VG9SZWN1cnNpdmVEZWZpbml0aW9uQiIsImlzRXF1aXZhbGVudFRvIiwicHVzaCIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBT2IsU0FpQ0M7OztlQWpDdUJBLGdDQUFnQzs7O3dFQUx4Qix1QkFBdUI7eURBQ25CLDRCQUE0Qjs2REFDcEIscUNBQXFDOytEQUNuQyx1Q0FBdUM7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