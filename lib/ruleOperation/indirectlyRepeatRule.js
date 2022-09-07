"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyRepeatRuleOperation;
    }
});
var _ruleOperation = /*#__PURE__*/ _interopRequireDefault(require("../ruleOperation"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../rule/repeated/indirectly"));
var _ruleName = require("../utilities/ruleName");
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
var IndirectlyRepeatRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(IndirectlyRepeatRuleOperation, RuleOperation);
    var _super = _createSuper(IndirectlyRepeatRuleOperation);
    function IndirectlyRepeatRuleOperation(rule, leftRecursiveRuleName) {
        _classCallCheck(this, IndirectlyRepeatRuleOperation);
        var _this;
        _this = _super.call(this, rule);
        _this.leftRecursiveRuleName = leftRecursiveRuleName;
        return _this;
    }
    _createClass(IndirectlyRepeatRuleOperation, [
        {
            key: "getLeftRecursiveRuleName",
            value: function getLeftRecursiveRuleName() {
                return this.leftRecursiveRuleName;
            }
        },
        {
            key: "apply",
            value: function apply(context) {
                var ruleMap = context.ruleMap, indirectlyLeftRecursiveDefinitions = context.indirectlyLeftRecursiveDefinitions, indirectlyRepeatedRule = _indirectly.default.fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(this.rule, this.leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions);
                if (indirectlyRepeatedRule !== null) {
                    var indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();
                    ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
                }
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), ruleName = rule.getName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, this.leftRecursiveRuleName), indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;
                return indirectlyRepeatedRule;
            }
        },
        {
            key: "compare",
            value: function compare(indirectlyRepeatRuleOperation) {
                var rule = this.getRule(), indirectlyRepeatRuleOperationRule = indirectlyRepeatRuleOperation.getRule(), indirectlyRepeatRuleOperationLeftRecursiveRuleName = indirectlyRepeatRuleOperation.getLeftRecursiveRuleName(), comparesTo = rule === indirectlyRepeatRuleOperationRule && this.leftRecursiveRuleName === indirectlyRepeatRuleOperationLeftRecursiveRuleName;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyRepeatRuleOperation = new IndirectlyRepeatRuleOperation(rule, leftRecursiveRuleName), indirectlyRepeatedRule = indirectlyRepeatRuleOperation.execute(context);
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatRuleOperation;
}(_ruleOperation.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlT3BlcmF0aW9uL2luZGlyZWN0bHlSZXBlYXRSdWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU9wZXJhdGlvbiBmcm9tIFwiLi4vcnVsZU9wZXJhdGlvblwiO1xuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZnJvbSBcIi4uL3J1bGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb24gZXh0ZW5kcyBSdWxlT3BlcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgc3VwZXIocnVsZSk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBhcHBseShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlLmZyb21SdWxlTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyh0aGlzLnJ1bGUsIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2luZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lXSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gICAgfVxuICB9XG5cbiAgcmV0cmlldmUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IHJ1bGVNYXBbaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIGNvbXBhcmUoaW5kaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb24pIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb25SdWxlID0gaW5kaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgY29tcGFyZXNUbyA9ICgocnVsZSA9PT0gaW5kaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb25SdWxlKSAmJiAodGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGluZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbiA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbihydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IGluZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uLmV4ZWN1dGUoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbiIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJhcHBseSIsImNvbnRleHQiLCJydWxlTWFwIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZnJvbVJ1bGVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJnZXROYW1lIiwicmV0cmlldmUiLCJnZXRSdWxlIiwicnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImNvbXBhcmUiLCJpbmRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbiIsImluZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uUnVsZSIsImluZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiY29tcGFyZXNUbyIsImV4ZWN1dGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFPUUEsNkJBQTZCOzs7a0VBTHhCLGtCQUFrQjsrREFDVCw2QkFBNkI7d0JBRWUsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZGLElBQUEsQUFBTUEsNkJBQTZCLGlCQUFuQztjQUFNQSw2QkFBNkI7OEJBQTdCQSw2QkFBNkI7YUFBN0JBLDZCQUE2QixDQUNwQ0MsSUFBSSxFQUFFQyxxQkFBcUI7OEJBRHBCRiw2QkFBNkI7O2tDQUV4Q0MsSUFBSSxFQUFFO1FBRVosTUFBS0MscUJBQXFCLEdBQUdBLHFCQUFxQixDQUFDOzs7aUJBSmxDRiw2QkFBNkI7O1lBT2hERyxHQUF3QixFQUF4QkEsMEJBQXdCO21CQUF4QkEsU0FBQUEsd0JBQXdCLEdBQUc7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDRCxxQkFBcUIsQ0FBQztZQUNwQyxDQUFDOzs7WUFFREUsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFDYixJQUFRQyxPQUFPLEdBQXlDRCxPQUFPLENBQXZEQyxPQUFPLEVBQUVDLGtDQUFrQyxHQUFLRixPQUFPLENBQTlDRSxrQ0FBa0MsRUFDN0NDLHNCQUFzQixHQUFHQyxXQUFzQixRQUFBLENBQUNDLGtFQUFrRSxDQUFDLElBQUksQ0FBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQ0MscUJBQXFCLEVBQUVLLGtDQUFrQyxDQUFDLEFBQUM7Z0JBRXBNLElBQUlDLHNCQUFzQixLQUFLLElBQUksRUFBRTtvQkFDbkMsSUFBTUcsMEJBQTBCLEdBQUdILHNCQUFzQixDQUFDSSxPQUFPLEVBQUUsQUFBQztvQkFFcEVOLE9BQU8sQ0FBQ0ssMEJBQTBCLENBQUMsR0FBR0gsc0JBQXNCLENBQUM7Z0JBQy9ELENBQUM7WUFDSCxDQUFDOzs7WUFFREssR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLENBQUNSLE9BQU8sRUFBRTtnQkFDaEIsSUFBTSxBQUFFQyxPQUFPLEdBQUtELE9BQU8sQ0FBbkJDLE9BQU8sQUFBWSxFQUNyQkwsSUFBSSxHQUFHLElBQUksQ0FBQ2EsT0FBTyxFQUFFLEVBQ3JCQyxRQUFRLEdBQUdkLElBQUksQ0FBQ1csT0FBTyxFQUFFLEVBQ3pCRCwwQkFBMEIsR0FBR0ssSUFBQUEsU0FBOEQsK0RBQUEsRUFBQ0QsUUFBUSxFQUFFLElBQUksQ0FBQ2IscUJBQXFCLENBQUMsRUFDaklNLHNCQUFzQixHQUFHRixPQUFPLENBQUNLLDBCQUEwQixDQUFDLElBQUksSUFBSSxBQUFDO2dCQUUzRSxPQUFPSCxzQkFBc0IsQ0FBQztZQUNoQyxDQUFDOzs7WUFFRFMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNDLDZCQUE2QixFQUFFO2dCQUNyQyxJQUFNakIsSUFBSSxHQUFHLElBQUksQ0FBQ2EsT0FBTyxFQUFFLEVBQ3JCSyxpQ0FBaUMsR0FBR0QsNkJBQTZCLENBQUNKLE9BQU8sRUFBRSxFQUMzRU0sa0RBQWtELEdBQUdGLDZCQUE2QixDQUFDZix3QkFBd0IsRUFBRSxFQUM3R2tCLFVBQVUsR0FBSSxBQUFDcEIsSUFBSSxLQUFLa0IsaUNBQWlDLElBQU0sSUFBSSxDQUFDakIscUJBQXFCLEtBQUtrQixrREFBa0QsQUFBQyxBQUFDLEFBQUM7Z0JBRXpKLE9BQU9DLFVBQVUsQ0FBQztZQUNwQixDQUFDOzs7O1lBRU1DLEdBQU8sRUFBUEEsU0FBTzttQkFBZCxTQUFPQSxPQUFPLENBQUNDLGlDQUFpQyxFQUFFbEIsT0FBTyxFQUFFO2dCQUN6RCxJQUFNSixJQUFJLEdBQUdzQixpQ0FBaUMsQ0FBQ1QsT0FBTyxFQUFFLEVBQ2xEWixxQkFBcUIsR0FBR3FCLGlDQUFpQyxDQUFDcEIsd0JBQXdCLEVBQUUsRUFDcEZlLDZCQUE2QixHQUFHLElBNUNyQmxCLDZCQUE2QixDQTRDMEJDLElBQUksRUFBRUMscUJBQXFCLENBQUcsRUFDaEdNLHNCQUFzQixHQUFHVSw2QkFBNkIsQ0FBQ0ksT0FBTyxDQUFDakIsT0FBTyxDQUFDLEFBQUM7Z0JBRTlFLE9BQU9HLHNCQUFzQixDQUFDO1lBQ2hDLENBQUM7OztXQWhEa0JSLDZCQUE2QjtDQWlEakQsQ0FqRDBEd0IsY0FBYSxRQUFBLENBaUR2RSJ9