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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdFwiO1xuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNvbnRleHQsIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gW10pIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIGNvbnRleHQsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgcmVjdXJzaXZlRGVmaW5pdGlvbiBdLFxuICAgICAgICAgICAgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgocHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpO1xuXG4gICAgICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDsgLy8vXG5cbiAgICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNvbnRleHQsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgY29udGV4dCwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uID09PSBudWxsKSB7XG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dDtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnNvbWUoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkEgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQUVxdWl2YWxlbnRUb1JlY3Vyc2l2ZURlZmluaXRpb25CID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQS5pc0VxdWl2YWxlbnRUbyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25CKTtcblxuICAgICAgICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BRXF1aXZhbGVudFRvUmVjdXJzaXZlRGVmaW5pdGlvbkIpIHtcbiAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucHVzaChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuICB9XG5cbiAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb24gPT09IG51bGwpIHtcbiAgICBjb25zdCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnB1c2gobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gIH1cblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gIH1cblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gbnVsbCkge1xuICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKTtcbiAgfVxuXG4gIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuIl0sIm5hbWVzIjpbInJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImNvbnRleHQiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmb3JFYWNoIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucyIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzIiwibWFwIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSIsImluY2x1ZGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJzb21lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFFcXVpdmFsZW50VG9SZWN1cnNpdmVEZWZpbml0aW9uQiIsImlzRXF1aXZhbGVudFRvIiwicHVzaCIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7O3dFQUxRO3lEQUNJOzZEQUNROytEQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixTQUFTQSxpQ0FBaUND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