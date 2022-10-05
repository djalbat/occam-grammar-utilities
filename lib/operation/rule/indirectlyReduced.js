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
            value: function apply(indirectlyLeftRecursiveDefinition, context) {
                var ruleMap = context.ruleMap, rule = indirectlyLeftRecursiveDefinition.getRule(), indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, context), indirectlyReducedRule = _indirectly.default.fromRuleAndIndirectlyLeftRecursiveDefinitions(rule, indirectlyLeftRecursiveDefinitions);
                if (indirectlyReducedRule !== null) {
                    var indirectlyReducedRuleName = indirectlyReducedRule.getName();
                    ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;
                }
                return indirectlyReducedRule;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(indirectlyLeftRecursiveDefinition, context) {
                var ruleMap = context.ruleMap, rule = indirectlyLeftRecursiveDefinition.getRule(), ruleName = rule.getName(), indirectlyReducedRuleName = (0, _ruleName.indirectlyReducedRuleNameFromRuleName)(ruleName), indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null;
                return indirectlyReducedRule;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), indirectlyReducedRuleOperation = new IndirectlyReducedRuleOperation(rule), indirectlyReducedRule = indirectlyReducedRuleOperation.execute(indirectlyLeftRecursiveDefinition, context);
                return indirectlyReducedRule;
            }
        }
    ]);
    return IndirectlyReducedRuleOperation;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9pbmRpcmVjdGx5UmVkdWNlZC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVPcGVyYXRpb24gZnJvbSBcIi4uLy4uL29wZXJhdGlvbi9ydWxlXCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlZHVjZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlZHVjZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlZHVjZWRSdWxlT3BlcmF0aW9uIGV4dGVuZHMgUnVsZU9wZXJhdGlvbiB7XG4gIGFwcGx5KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgY29udGV4dCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlID0gSW5kaXJlY3RseVJlZHVjZWRSdWxlLmZyb21SdWxlQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2luZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVdID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cblxuICByZXRyaWV2ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJ1bGVNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlID0gcnVsZU1hcFtpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbiA9IG5ldyBJbmRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24ocnVsZSksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlT3BlcmF0aW9uLmV4ZWN1dGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlZHVjZWRSdWxlT3BlcmF0aW9uIiwiYXBwbHkiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJjb250ZXh0IiwicnVsZU1hcCIsInJ1bGUiLCJnZXRSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlIiwiSW5kaXJlY3RseVJlZHVjZWRSdWxlIiwiZnJvbVJ1bGVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZXRyaWV2ZSIsInJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImV4ZWN1dGUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24iLCJSdWxlT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5REFOSzsrREFDUTt3QkFFb0I7dUJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBQSxBQUFNQSwrQ0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGlDQUFpQyxFQUFFQyxPQUFPLEVBQUU7Z0JBQ2hELElBQU0sQUFBRUMsVUFBWUQsUUFBWkMsU0FDRkMsT0FBT0gsa0NBQWtDSSxPQUFPLElBQ2hEQyxxQ0FBcUNDLElBQUFBLCtDQUFzQyxFQUFDSCxNQUFNRixVQUNsRk0sd0JBQXdCQyxtQkFBcUIsQ0FBQ0MsNkNBQTZDLENBQUNOLE1BQU1FO2dCQUV4RyxJQUFJRSwwQkFBMEIsSUFBSSxFQUFFO29CQUNsQyxJQUFNRyw0QkFBNEJILHNCQUFzQkksT0FBTztvQkFFL0RULE9BQU8sQ0FBQ1EsMEJBQTBCLEdBQUdIO2dCQUN2QyxDQUFDO2dCQUVELE9BQU9BO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1osaUNBQWlDLEVBQUVDLE9BQU8sRUFBRTtnQkFDbkQsSUFBTSxBQUFFQyxVQUFZRCxRQUFaQyxTQUNGQyxPQUFPSCxrQ0FBa0NJLE9BQU8sSUFDaERTLFdBQVdWLEtBQUtRLE9BQU8sSUFDdkJELDRCQUE0QkksSUFBQUEsK0NBQXFDLEVBQUNELFdBQ2xFTix3QkFBd0JMLE9BQU8sQ0FBQ1EsMEJBQTBCLElBQUksSUFBSTtnQkFFeEUsT0FBT0g7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxRQUFRZixpQ0FBaUMsRUFBRUMsT0FBTyxFQUFFO2dCQUN6RCxJQUFNRSxPQUFPSCxrQ0FBa0NJLE9BQU8sSUFDaERZLGlDQUFpQyxJQTVCdEJsQiwrQkE0QnlESyxPQUNwRUksd0JBQXdCUywrQkFBK0JELE9BQU8sQ0FBQ2YsbUNBQW1DQztnQkFFeEcsT0FBT007WUFDVDs7O1dBaENtQlQ7RUFBdUNtQixhQUFhIn0=