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
function retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
    var definitions = rule.getDefinitions();
    definitions.forEach(function(definition) {
        var recursiveDefinition = retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, leftRecursiveDefinitions);
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
                        retrieveLeftRecursiveDefinitions(_$rule, _$recursiveDefinitions, leftRecursiveDefinitions, ruleMap);
                    }
                }
            });
        }
    });
}
function retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, leftRecursiveDefinitions) {
    var recursiveDefinition = _indirectly.default.fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions) || _directly.default.fromRuleAndDefinition(rule, definition) || _left.default.fromRuleAndDefinition(rule, definition) || _recursiveDefinition.default.fromRuleAndDefinition(rule, definition);
    if (recursiveDefinition !== null) {
        if (false) {
        ///
        } else if (_instanceof(recursiveDefinition, _indirectly.default)) {
            var indirectlyLeftRRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions);
            indirectlyLeftRRecursiveDefinitions.some(function(indirectlyLeftRRecursiveDefinition) {
                var indirectlyLeftRecursiveDefinitionEquivalentToRecursiveDefinition = indirectlyLeftRRecursiveDefinition.isEquivalentTo(recursiveDefinition); ///
                if (indirectlyLeftRecursiveDefinitionEquivalentToRecursiveDefinition) {
                    recursiveDefinition = null;
                    return true;
                }
            });
        } else if (_instanceof(recursiveDefinition, _directly.default)) {
            var directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(definition, leftRecursiveDefinitions);
            directlyLeftRecursiveDefinitions.some(function(directlyLeftRecursiveDefinition) {
                recursiveDefinition = null;
                return true;
            });
        }
    }
    return recursiveDefinition;
}
function findDirectlyLeftRecursiveDefinitions(definition, leftRecursiveDefinitions) {
    var directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
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
function findIndirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions) {
    var indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _indirectly.default);
        if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
            return true;
        }
    });
    return indirectlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb25cIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnRcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5jb25zdCB7IGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCByZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBydWxlTWFwKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gcmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFsgLi4ucmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJlY3Vyc2l2ZURlZmluaXRpb24gXSxcbiAgICAgICAgICAgIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSA9IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWU7ICAvLy9cblxuICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKTtcblxuICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLmZvckVhY2goKHJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSA9IHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDsgLy8vXG5cbiAgICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJ1bGVNYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCByZWN1cnNpdmVEZWZpbml0aW9uID0gSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSUmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICBpbmRpcmVjdGx5TGVmdFJSZWN1cnNpdmVEZWZpbml0aW9ucy5zb21lKChpbmRpcmVjdGx5TGVmdFJSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkVxdWl2YWxlbnRUb1JlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJSZWN1cnNpdmVEZWZpbml0aW9uLmlzRXF1aXZhbGVudFRvKHJlY3Vyc2l2ZURlZmluaXRpb24pOyAgLy8vXG5cbiAgICAgICAgaWYgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkVxdWl2YWxlbnRUb1JlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5zb21lKChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7ICAvLy9cbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9uID09PSBkZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cblxuZnVuY3Rpb24gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsicmV0cmlldmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlTWFwIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZvckVhY2giLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicHVzaCIsInByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lcyIsIm1hcCIsInByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbiIsInByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0UmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJ1bGVOYW1lIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UlJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJzb21lIiwiaW5kaXJlY3RseUxlZnRSUmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkVxdWl2YWxlbnRUb1JlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0VxdWl2YWxlbnRUbyIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbiIsImdldERlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJl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