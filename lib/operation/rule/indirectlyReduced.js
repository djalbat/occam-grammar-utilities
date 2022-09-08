"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyReducedRuleOperation;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../../operation/rule"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../rule/reduced/indirectly"));
var _ruleName = require("../../utilities/ruleName");
var _context = require("../../utilities/context");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var IndirectlyReducedRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(IndirectlyReducedRuleOperation, RuleOperation);
    var _super = _createSuper(IndirectlyReducedRuleOperation);
    function IndirectlyReducedRuleOperation() {
        _classCallCheck(this, IndirectlyReducedRuleOperation);
        return _super.apply(this, arguments);
    }
    _createClass(IndirectlyReducedRuleOperation, [
        {
            key: "apply",
            value: function apply(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, context), indirectlyReducedRule = _indirectly.default.fromRuleAndIndirectlyLeftRecursiveDefinitions(rule, indirectlyLeftRecursiveDefinitions);
                if (indirectlyReducedRule !== null) {
                    var indirectlyReducedRuleName = indirectlyReducedRule.getName();
                    ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;
                }
                return indirectlyReducedRule;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), ruleName = rule.getName(), indirectlyReducedRuleName = (0, _ruleName.indirectlyReducedRuleNameFromRuleName)(ruleName), indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null;
                return indirectlyReducedRule;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), indirectlyReducedRuleOperation = new IndirectlyReducedRuleOperation(rule), indirectlyReducedRule = indirectlyReducedRuleOperation.execute(context);
                return indirectlyReducedRule;
            }
        }
    ]);
    return IndirectlyReducedRuleOperation;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9pbmRpcmVjdGx5UmVkdWNlZC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVPcGVyYXRpb24gZnJvbSBcIi4uLy4uL29wZXJhdGlvbi9ydWxlXCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlZHVjZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlZHVjZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlZHVjZWRSdWxlT3BlcmF0aW9uIGV4dGVuZHMgUnVsZU9wZXJhdGlvbiB7XG4gIGFwcGx5KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJ1bGVNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBJbmRpcmVjdGx5UmVkdWNlZFJ1bGUuZnJvbVJ1bGVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHJ1bGVNYXBbaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgfVxuXG4gIHJldHJpZXZlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJ1bGVNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IHJ1bGVNYXBbaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24gPSBuZXcgSW5kaXJlY3RseVJlZHVjZWRSdWxlT3BlcmF0aW9uKHJ1bGUpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbi5leGVjdXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24iLCJhcHBseSIsImNvbnRleHQiLCJydWxlTWFwIiwicnVsZSIsImdldFJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJJbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJmcm9tUnVsZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJldHJpZXZlIiwicnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZXhlY3V0ZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbiIsIlJ1bGVPcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVFRQSw4QkFBOEI7Ozt5REFOekIsc0JBQXNCOytEQUNkLCtCQUErQjt3QkFFWCwwQkFBMEI7dUJBQ3pCLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRSxJQUFBLEFBQU1BLDhCQUE4QixpQkFBcEM7Y0FBTUEsOEJBQThCOzhCQUE5QkEsOEJBQThCO2FBQTlCQSw4QkFBOEI7OEJBQTlCQSw4QkFBOEI7OztpQkFBOUJBLDhCQUE4Qjs7WUFDakRDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2IsSUFBTSxBQUFFQyxPQUFPLEdBQUtELE9BQU8sQ0FBbkJDLE9BQU8sQUFBWSxFQUNyQkMsSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUFFLEVBQ3JCQyxrQ0FBa0MsR0FBR0MsSUFBQUEsUUFBc0MsdUNBQUEsRUFBQ0gsSUFBSSxFQUFFRixPQUFPLENBQUMsRUFDMUZNLHFCQUFxQixHQUFHQyxXQUFxQixRQUFBLENBQUNDLDZDQUE2QyxDQUFDTixJQUFJLEVBQUVFLGtDQUFrQyxDQUFDLEFBQUM7Z0JBRTVJLElBQUlFLHFCQUFxQixLQUFLLElBQUksRUFBRTtvQkFDbEMsSUFBTUcseUJBQXlCLEdBQUdILHFCQUFxQixDQUFDSSxPQUFPLEVBQUUsQUFBQztvQkFFbEVULE9BQU8sQ0FBQ1EseUJBQXlCLENBQUMsR0FBR0gscUJBQXFCLENBQUM7Z0JBQzdELENBQUM7Z0JBRUQsT0FBT0EscUJBQXFCLENBQUM7WUFDL0IsQ0FBQzs7O1lBRURLLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDWCxPQUFPLEVBQUU7Z0JBQ2hCLElBQU0sQUFBRUMsT0FBTyxHQUFLRCxPQUFPLENBQW5CQyxPQUFPLEFBQVksRUFDckJDLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUNyQlMsUUFBUSxHQUFHVixJQUFJLENBQUNRLE9BQU8sRUFBRSxFQUN6QkQseUJBQXlCLEdBQUdJLElBQUFBLFNBQXFDLHNDQUFBLEVBQUNELFFBQVEsQ0FBQyxFQUMzRU4scUJBQXFCLEdBQUdMLE9BQU8sQ0FBQ1EseUJBQXlCLENBQUMsSUFBSSxJQUFJLEFBQUM7Z0JBRXpFLE9BQU9ILHFCQUFxQixDQUFDO1lBQy9CLENBQUM7Ozs7WUFFTVEsR0FBTyxFQUFQQSxTQUFPO21CQUFkLFNBQU9BLE9BQU8sQ0FBQ0MsaUNBQWlDLEVBQUVmLE9BQU8sRUFBRTtnQkFDekQsSUFBTUUsSUFBSSxHQUFHYSxpQ0FBaUMsQ0FBQ1osT0FBTyxFQUFFLEVBQ2xEYSw4QkFBOEIsR0FBRyxJQTVCdEJsQiw4QkFBOEIsQ0E0QjJCSSxJQUFJLENBQUMsRUFDekVJLHFCQUFxQixHQUFHVSw4QkFBOEIsQ0FBQ0YsT0FBTyxDQUFDZCxPQUFPLENBQUMsQUFBQztnQkFFOUUsT0FBT00scUJBQXFCLENBQUM7WUFDL0IsQ0FBQzs7O1dBaENrQlIsOEJBQThCO0NBaUNsRCxDQWpDMkRtQixLQUFhLFFBQUEsQ0FpQ3hFIn0=