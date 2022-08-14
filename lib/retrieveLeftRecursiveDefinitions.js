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
        var recursiveDefinition = _indirectly.default.fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions) || _directly.default.fromRuleAndDefinition(rule, definition) || _left.default.fromRuleAndDefinition(rule, definition) || _recursiveDefinition.default.fromRuleAndDefinition(rule, definition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdFwiO1xuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJ1bGVNYXApIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFsgLi4ucmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJlY3Vyc2l2ZURlZmluaXRpb24gXSxcbiAgICAgICAgICAgIHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSA9IHByZXZpb3VzUmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1JlY3Vyc2l2ZVJ1bGVOYW1lID0gcHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWU7ICAvLy9cblxuICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZWN1cnNpdmVSdWxlTmFtZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKTtcblxuICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLmZvckVhY2goKHJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSA9IHByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDsgLy8vXG5cbiAgICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBwcmV2aW91c1JlY3Vyc2l2ZURlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHJpZXZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIHJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJ1bGVNYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJyZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVNYXAiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZm9yRWFjaCIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwdXNoIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9ucyIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzIiwibWFwIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uIiwicHJldmlvdXNSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInByZXZpb3VzUmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSIsImluY2x1ZGVzIiwicnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFPYixTQXlDQzs7O2VBekN1QkEsZ0NBQWdDOzs7d0VBTHhCLHVCQUF1Qjt5REFDbkIsNEJBQTRCOzZEQUNwQixxQ0FBcUM7K0RBQ25DLHVDQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEUsU0FBU0EsZ0NBQWdDLENBQUNDLElBQUksRUFBRUMsb0JBQW9CLEVBQUVDLHdCQUF3QixFQUFFQyxPQUFPLEVBQUU7SUFDdEgsSUFBTUMsV0FBVyxHQUFHSixJQUFJLENBQUNLLGNBQWMsRUFBRSxBQUFDO0lBRTFDRCxXQUFXLENBQUNFLE9BQU8sQ0FBQyxTQUFDQyxVQUFVLEVBQUs7UUFDbEMsSUFBTUMsbUJBQW1CLEdBQUdDLFdBQWlDLFFBQUEsQ0FBQ0MseUNBQXlDLENBQUNWLElBQUksRUFBRU8sVUFBVSxFQUFFTixvQkFBb0IsQ0FBQyxJQUNuSFUsU0FBK0IsUUFBQSxDQUFDQyxxQkFBcUIsQ0FBQ1osSUFBSSxFQUFFTyxVQUFVLENBQUMsSUFDdkVNLEtBQXVCLFFBQUEsQ0FBQ0QscUJBQXFCLENBQUNaLElBQUksRUFBRU8sVUFBVSxDQUFDLElBQy9ETyxvQkFBbUIsUUFBQSxDQUFDRixxQkFBcUIsQ0FBQ1osSUFBSSxFQUFFTyxVQUFVLENBQUMsQUFBQztRQUV4RixJQUFJQyxtQkFBbUIsS0FBSyxJQUFJLEVBQUU7WUFDaEMsSUFBSUEsQUFBbUIsV0FBWUssQ0FBL0JMLG1CQUFtQixFQUFZSyxLQUF1QixRQUFBLENBQUEsRUFBRTtnQkFDMUQsSUFBTUUsdUJBQXVCLEdBQUdQLG1CQUFtQixBQUFDLEVBQUUsR0FBRztnQkFFekROLHdCQUF3QixDQUFDYyxJQUFJLENBQUNELHVCQUF1QixDQUFDLENBQUM7YUFDeEQ7WUFFRCxJQUFNRSw0QkFBNEIsR0FBRyxBQUFFLG1CQUFHaEIsb0JBQW9CLENBQXBCQSxRQUFMO2dCQUEyQk8sbUJBQW1CO2FBQUUsQ0FBQSxFQUMvRVUsMEJBQTBCLEdBQUdELDRCQUE0QixDQUFDRSxHQUFHLENBQUMsU0FBQ0MsMkJBQTJCLEVBQUs7Z0JBQzdGLElBQU1DLG1DQUFtQyxHQUFHRCwyQkFBMkIsQ0FBQ0UsV0FBVyxFQUFFLEVBQy9FQyx5QkFBeUIsR0FBR0YsbUNBQW1DLEFBQUMsRUFBRSxHQUFHO2dCQUUzRSxPQUFPRSx5QkFBeUIsQ0FBQzthQUNsQyxDQUFDLEVBQ0ZDLGtCQUFrQixHQUFHaEIsbUJBQW1CLENBQUNpQixxQkFBcUIsRUFBRSxBQUFDO1lBRXZFRCxrQkFBa0IsQ0FBQ2xCLE9BQU8sQ0FBQyxTQUFDb0IsaUJBQWlCLEVBQUs7Z0JBQ2hELElBQU1DLG1EQUFtRCxHQUFHVCwwQkFBMEIsQ0FBQ1UsUUFBUSxDQUFDRixpQkFBaUIsQ0FBQyxBQUFDO2dCQUVuSCxJQUFJLENBQUNDLG1EQUFtRCxFQUFFO29CQUN4RCxJQUFNRSxRQUFRLEdBQUdILGlCQUFpQixFQUM1QjFCLE1BQUksR0FBR0csT0FBTyxDQUFDMEIsUUFBUSxDQUFDLElBQUksSUFBSSxBQUFDLEVBQUMsR0FBRztvQkFFM0MsSUFBSTdCLE1BQUksS0FBSyxJQUFJLEVBQUU7d0JBQ2pCLElBQU1DLHNCQUFvQixHQUFHZ0IsNEJBQTRCLEFBQUMsRUFBRSxHQUFHO3dCQUUvRGxCLGdDQUFnQyxDQUFDQyxNQUFJLEVBQUVDLHNCQUFvQixFQUFFQyx3QkFBd0IsRUFBRUMsT0FBTyxDQUFDLENBQUM7cUJBQ2pHO2lCQUNGO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7S0FDRixDQUFDLENBQUM7Q0FDSiJ9