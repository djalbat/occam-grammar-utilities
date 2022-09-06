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
var _necessary = require("necessary");
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
var find = _necessary.arrayUtilities.find;
function retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, context) {
    var ruleMap = context.ruleMap, leftRecursiveDefinitions = context.leftRecursiveDefinitions, definitions = rule.getDefinitions();
    definitions.forEach(function(definition) {
        var recursiveDefinition = retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, context);
        if (recursiveDefinition !== null) {
            if (_instanceof(recursiveDefinition, _left.default)) {
                var leftRecursiveDefinition = recursiveDefinition; ///
                leftRecursiveDefinitions.push(leftRecursiveDefinition);
            }
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
                        retrieveLeftRecursiveDefinitions(_$rule, _$recursiveDefinitions, context);
                    }
                }
            });
        }
    });
}
function retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, context) {
    var recursiveDefinition = _indirectly.default.fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions) || _directly.default.fromRuleAndDefinition(rule, definition) || _left.default.fromRuleAndDefinition(rule, definition) || _recursiveDefinition.default.fromRuleAndDefinition(rule, definition);
    if (recursiveDefinition !== null) {
        if (false) {
        ///
        } else if (_instanceof(recursiveDefinition, _indirectly.default)) {
            var indirectlyLeftRRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(context);
            indirectlyLeftRRecursiveDefinitions.some(function(indirectlyLeftRRecursiveDefinition) {
                var indirectlyLeftRecursiveDefinitionEquivalentToRecursiveDefinition = indirectlyLeftRRecursiveDefinition.isEquivalentTo(recursiveDefinition); ///
                if (indirectlyLeftRecursiveDefinitionEquivalentToRecursiveDefinition) {
                    recursiveDefinition = null;
                    return true;
                }
            });
        } else if (_instanceof(recursiveDefinition, _directly.default)) {
            var directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(definition, context);
            directlyLeftRecursiveDefinitions.some(function(directlyLeftRecursiveDefinition) {
                recursiveDefinition = null;
                return true;
            });
        }
    }
    return recursiveDefinition;
}
function findDirectlyLeftRecursiveDefinitions(definition, context) {
    var leftRecursiveDefinitions = context.leftRecursiveDefinitions, directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionDefinition = leftRecursiveDefinition.getDefinition();
        if (leftRecursiveDefinitionDefinition === definition) {
            var leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _directly.default);
            if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
                return true;
            }
        }
    });
    return directlyLeftRecursiveDefinitions;
}
function findIndirectlyLeftRecursiveDefinitions(context) {
    var leftRecursiveDefinitions = context.leftRecursiveDefinitions, indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _indirectly.default);
        if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
            return true;
        }
    });
    return indirectlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb25cIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnRcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5jb25zdCB7IGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCByZWN1cnNpdmVEZWZpbml0aW9ucywgY29udGV4dCkge1xuICBjb25zdCB7IHJ1bGVNYXAsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFsgLi4ucmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJlY3Vyc2l2ZURlZmluaXRpb24gXSxcbiAgICAgICAgICAgIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSA9IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWU7ICAvLy9cblxuICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKTtcblxuICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLmZvckVhY2goKHJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSA9IHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDsgLy8vXG5cbiAgICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKTtcblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICBpbmRpcmVjdGx5TGVmdFJSZWN1cnNpdmVEZWZpbml0aW9ucy5zb21lKChpbmRpcmVjdGx5TGVmdFJSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkVxdWl2YWxlbnRUb1JlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJSZWN1cnNpdmVEZWZpbml0aW9uLmlzRXF1aXZhbGVudFRvKHJlY3Vyc2l2ZURlZmluaXRpb24pOyAgLy8vXG5cbiAgICAgICAgaWYgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkVxdWl2YWxlbnRUb1JlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkZWZpbml0aW9uLCBjb250ZXh0KTtcblxuICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuc29tZSgoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG59XG5cbmZ1bmN0aW9uIGZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkZWZpbml0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCk7XG5cbiAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9uID09PSBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cblxuZnVuY3Rpb24gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoY29udGV4dCkge1xuICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJyZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmQiLCJhcnJheVV0aWxpdGllcyIsInJ1bGUiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImNvbnRleHQiLCJydWxlTWFwIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZvckVhY2giLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicHVzaCIsInByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lcyIsIm1hcCIsInByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbiIsInByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0UmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJ1bGVOYW1lIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UlJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJzb21lIiwiaW5kaXJlY3RseUxlZnRSUmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkVxdWl2YWxlbnRUb1JlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0VxdWl2YWxlbnRUbyIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbiIsImdldERlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBV2IsU0F1Q0M7OztlQXZDdUJBLGdDQUFnQzs7O3lCQVR6QixXQUFXO3dFQUVWLHVCQUF1Qjt5REFDbkIsNEJBQTRCOzZEQUNwQixxQ0FBcUM7K0RBQ25DLHVDQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckYsSUFBTSxBQUFFQyxJQUFJLEdBQUtDLFVBQWMsZUFBQSxDQUF2QkQsSUFBSSxBQUFtQixBQUFDO0FBRWpCLFNBQVNELGdDQUFnQyxDQUFDRyxJQUFJLEVBQUVDLG9CQUFvQixFQUFFQyxPQUFPLEVBQUU7SUFDNUYsSUFBUUMsT0FBTyxHQUErQkQsT0FBTyxDQUE3Q0MsT0FBTyxFQUFFQyx3QkFBd0IsR0FBS0YsT0FBTyxDQUFwQ0Usd0JBQXdCLEVBQ25DQyxXQUFXLEdBQUdMLElBQUksQ0FBQ00sY0FBYyxFQUFFLEFBQUM7SUFFMUNELFdBQVcsQ0FBQ0UsT0FBTyxDQUFDLFNBQUNDLFVBQVUsRUFBSztRQUNsQyxJQUFNQyxtQkFBbUIsR0FBR0MsK0JBQStCLENBQUNWLElBQUksRUFBRVEsVUFBVSxFQUFFUCxvQkFBb0IsRUFBRUMsT0FBTyxDQUFDLEFBQUM7UUFFN0csSUFBSU8sbUJBQW1CLEtBQUssSUFBSSxFQUFFO1lBQ2hDLElBQUlBLEFBQW1CLFdBQVlFLENBQS9CRixtQkFBbUIsRUFBWUUsS0FBdUIsUUFBQSxDQUFBLEVBQUU7Z0JBQzFELElBQU1DLHVCQUF1QixHQUFHSCxtQkFBbUIsQUFBQyxFQUFFLEdBQUc7Z0JBRXpETCx3QkFBd0IsQ0FBQ1MsSUFBSSxDQUFDRCx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFFRCxJQUFNRSw0QkFBNEIsR0FBRyxBQUFFLG1CQUFHYixvQkFBb0Is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