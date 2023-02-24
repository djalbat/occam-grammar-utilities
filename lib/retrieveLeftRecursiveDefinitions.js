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
function retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, context) {
    var definitions = rule.getDefinitions();
    definitions.forEach(function(definition) {
        var recursiveDefinition = retrieveRecursiveDefinition(rule, definition, recursiveDefinitions, context);
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
                        var _$recursiveDefinitions = previousRecursiveDefinitions; ///
                        retrieveLeftRecursiveDefinitions(_$rule, _$recursiveDefinitions, context);
                    }
                }
            });
        }
    });
}
function retrieveRecursiveDefinition(rule, definition, recursiveDefinitions, context) {
    var recursiveDefinition = null;
    if (recursiveDefinition === null) {
        var indirectlyLeftRecursiveDefinition = _indirectly.default.fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions, context);
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
        var directlyLeftRecursiveDefinition = _directly.default.fromRuleAndDefinition(rule, definition, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdFwiO1xuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gcmV0cmlldmVSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgcmVjdXJzaXZlRGVmaW5pdGlvbiBdLFxuICAgICAgICAgICAgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgocHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpO1xuXG4gICAgICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDsgLy8vXG5cbiAgICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlUmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucywgY29udGV4dCkge1xuICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb24gPT09IG51bGwpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0O1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuc29tZSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25CID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BRXF1aXZhbGVudFRvUmVjdXJzaXZlRGVmaW5pdGlvbkIgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BLmlzRXF1aXZhbGVudFRvKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkIpO1xuXG4gICAgICAgICAgaWYgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFFcXVpdmFsZW50VG9SZWN1cnNpdmVEZWZpbml0aW9uQikge1xuICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gIH1cblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmIChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucHVzaChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cbiAgfVxuXG4gIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uID09PSBudWxsKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cbiAgfVxuXG4gIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uID09PSBudWxsKSB7XG4gICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG59XG4iXSwibmFtZXMiOlsicmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJjb250ZXh0IiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZvckVhY2giLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJldHJpZXZlUmVjdXJzaXZlRGVmaW5pdGlvbiIsInByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lcyIsIm1hcCIsInByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbiIsInByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0UmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJ1bGVNYXAiLCJydWxlTmFtZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwic29tZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkIiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BRXF1aXZhbGVudFRvUmVjdXJzaXZlRGVmaW5pdGlvbkIiLCJpc0VxdWl2YWxlbnRUbyIsInB1c2giLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7Ozt3RUFMUTt5REFDSTs2REFDUTsrREFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsU0FBU0EsaUNBQWlDQyxJQUFJLEVBQUVDLG9CQUFvQixFQUFFQyxPQUFPLEVBQUU7SUFDNUYsSUFBTUMsY0FBY0gsS0FBS0ksY0FBYztJQUV2Q0QsWUFBWUUsT0FBTyxDQUFDLFNBQUNDLFlBQWU7UUFDbEMsSUFBTUMsc0JBQXNCQyw0QkFBNEJSLE1BQU1NLFlBQVlMLHNCQUFzQkM7UUFFaEcsSUFBSUssd0JBQXdCLElBQUksRUFBRTtZQUNoQyxJQUFNRSwrQkFBK0IsQUFBRSxtQkFBR1IsNkJBQUw7Z0JBQTJCTTthQUFxQixHQUMvRUcsNkJBQTZCRCw2QkFBNkJFLEdBQUcsQ0FBQyxTQUFDQyw2QkFBZ0M7Z0JBQzdGLElBQU1DLHNDQUFzQ0QsNEJBQTRCRSxXQUFXLElBQzdFQyw0QkFBNEJGLHFDQUFzQyxHQUFHO2dCQUUzRSxPQUFPRTtZQUNULElBQ0FDLHFCQUFxQlQsb0JBQW9CVSxxQkFBcUI7WUFFcEVELG1CQUFtQlgsT0FBTyxDQUFDLFNBQUNhLG1CQUFzQjtnQkFDaEQsSUFBTUMsc0RBQXNEVCwyQkFBMkJVLFFBQVEsQ0FBQ0Y7Z0JBRWhHLElBQUksQ0FBQ0MscURBQXFEO29CQUN4RCxJQUFNLEFBQUVFLFVBQVluQixRQUFabUIsU0FDRkMsV0FBV0osbUJBQ1hsQixTQUFPcUIsT0FBTyxDQUFDQyxTQUFTLElBQUksSUFBSSxFQUFFLEdBQUc7b0JBRTNDLElBQUl0QixXQUFTLElBQUksRUFBRTt3QkFDakIsSUFBTUMseUJBQXVCUSw4QkFBK0IsR0FBRzt3QkFFL0RWLGlDQUFpQ0MsUUFBTUMsd0JBQXNCQztvQkFDL0QsQ0FBQztnQkFDSCxDQUFDO1lBQ0g7UUFDRixDQUFDO0lBQ0g7QUFDRjtBQUVBLFNBQVNNLDRCQUE0QlIsSUFBSSxFQUFFTSxVQUFVLEVBQUVMLG9CQUFvQixFQUFFQyxPQUFPLEVBQUU7SUFDcEYsSUFBSUssc0JBQXNCLElBQUk7SUFFOUIsSUFBSUEsd0JBQXdCLElBQUksRUFBRTtRQUNoQyxJQUFJZ0Isb0NBQW9DQyxtQkFBaUMsQ0FBQ0MseUNBQXlDLENBQUN6QixNQUFNTSxZQUFZTCxzQkFBc0JDO1FBRTVKLElBQUlxQixzQ0FBc0MsSUFBSSxFQUFFO1lBQzlDLElBQU0sQUFBRUcsMkJBQTZCeEIsUUFBN0J3QjtZQUVSQSx5QkFBeUJDLElBQUksQ0FBQyxTQUFDQyx5QkFBNEI7Z0JBQ3pELElBQUlBLEFBQXVCLFlBQXZCQSx5QkFBbUNKLG1CQUFpQyxHQUFFO29CQUN4RSxJQUFNSyxxQ0FBcUNELHlCQUNyQ0UscUNBQXFDUCxtQ0FDckNRLHFFQUFxRUYsbUNBQW1DRyxjQUFjLENBQUNGO29CQUU3SCxJQUFJQyxvRUFBb0U7d0JBQ3RFUixvQ0FBb0MsSUFBSTt3QkFFeEMsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsQ0FBQztZQUNIO1lBRUEsSUFBSUEsc0NBQXNDLElBQUksRUFBRTtnQkFDOUMsSUFBTUssMEJBQTBCTCxtQ0FBb0MsR0FBRztnQkFFdkVHLHlCQUF5Qk8sSUFBSSxDQUFDTDtZQUNoQyxDQUFDO1FBQ0gsQ0FBQztRQUVEckIsc0JBQXNCZ0IsbUNBQW9DLEdBQUc7SUFDL0QsQ0FBQztJQUVELElBQUloQix3QkFBd0IsSUFBSSxFQUFFO1FBQ2hDLElBQU0yQixrQ0FBa0NDLGlCQUErQixDQUFDQyxxQkFBcUIsQ0FBQ3BDLE1BQU1NLFlBQVlKO1FBRWhILElBQUlnQyxvQ0FBb0MsSUFBSSxFQUFFO1lBQzVDLElBQU0sQUFBRVIsNEJBQTZCeEIsUUFBN0J3QiwwQkFDRkUsMkJBQTBCTSxpQ0FBa0MsR0FBRztZQUVyRVIsMEJBQXlCTyxJQUFJLENBQUNMO1FBQ2hDLENBQUM7UUFFRHJCLHNCQUFzQjJCLGlDQUFrQyxHQUFHO0lBQzdELENBQUM7SUFFRCxJQUFJM0Isd0JBQXdCLElBQUksRUFBRTtRQUNoQyxJQUFNcUIsMkJBQTBCUyxhQUF1QixDQUFDRCxxQkFBcUIsQ0FBQ3BDLE1BQU1NO1FBRXBGQyxzQkFBc0JxQiwwQkFBMEIsR0FBRztJQUNyRCxDQUFDO0lBRUQsSUFBSXJCLHdCQUF3QixJQUFJLEVBQUU7UUFDaENBLHNCQUFzQitCLDRCQUFtQixDQUFDRixxQkFBcUIsQ0FBQ3BDLE1BQU1NO0lBQ3hFLENBQUM7SUFFRCxPQUFPQztBQUNUIn0=