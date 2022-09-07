"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyRepeatRuleOperation;
    }
});
var _ruleOperation = /*#__PURE__*/ _interopRequireDefault(require("../ruleOperation"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../rule/repeated/directly"));
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
var DirectlyRepeatRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(DirectlyRepeatRuleOperation, RuleOperation);
    var _super = _createSuper(DirectlyRepeatRuleOperation);
    function DirectlyRepeatRuleOperation() {
        _classCallCheck(this, DirectlyRepeatRuleOperation);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyRepeatRuleOperation, [
        {
            key: "apply",
            value: function apply(context) {
                var ruleMap = context.ruleMap, directlyLeftRecursiveDefinitions = context.directlyLeftRecursiveDefinitions, directlyRepeatedRule = _directly.default.fromRuleAndDirectlyLeftRecursiveDefinitions(this.rule, directlyLeftRecursiveDefinitions);
                if (directlyRepeatedRule !== null) {
                    var directlyRepeatedRuleName = directlyRepeatedRule.getName();
                    ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
                }
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), ruleName = rule.getName(), directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRule = ruleMap[directlyRepeatedRuleName] || null;
                return directlyRepeatedRule;
            }
        },
        {
            key: "compare",
            value: function compare(directlyRepeatRuleOperation) {
                var rule = this.getRule(), directlyRepeatRuleOperationRule = directlyRepeatRuleOperation.getRule(), comparesTo = rule === directlyRepeatRuleOperationRule;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(directlyLeftRecursiveDefinition, context) {
                var rule = directlyLeftRecursiveDefinition.getRule(), directlyRepeatRuleOperation = new DirectlyRepeatRuleOperation(rule), directlyRepeatedRule = directlyRepeatRuleOperation.execute(context);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatRuleOperation;
}(_ruleOperation.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlT3BlcmF0aW9uL2RpcmVjdGx5UmVwZWF0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU9wZXJhdGlvbiBmcm9tIFwiLi4vcnVsZU9wZXJhdGlvblwiO1xuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWRSdWxlIGZyb20gXCIuLi9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uIGV4dGVuZHMgUnVsZU9wZXJhdGlvbiB7XG4gIGFwcGx5KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJ1bGVNYXAsIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gRGlyZWN0bHlSZXBlYXRlZFJ1bGUuZnJvbVJ1bGVBbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyh0aGlzLnJ1bGUsIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChkaXJlY3RseVJlcGVhdGVkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0gPSBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgICB9XG4gIH1cblxuICByZXRyaWV2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJ1bGUgPSB0aGlzLmdldFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBydWxlTWFwW2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIGNvbXBhcmUoZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvblJ1bGUgPSBkaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAocnVsZSA9PT0gZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uUnVsZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uID0gbmV3IERpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbihydWxlKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IGRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbi5leGVjdXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbiIsImFwcGx5IiwiY29udGV4dCIsInJ1bGVNYXAiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmcm9tUnVsZUFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZXRyaWV2ZSIsImdldFJ1bGUiLCJydWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImNvbXBhcmUiLCJkaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb24iLCJkaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb25SdWxlIiwiY29tcGFyZXNUbyIsImV4ZWN1dGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZU9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBT1FBLDJCQUEyQjs7O2tFQUx0QixrQkFBa0I7NkRBQ1gsMkJBQTJCO3dCQUVQLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFBLEFBQU1BLDJCQUEyQixpQkFBakM7Y0FBTUEsMkJBQTJCOzhCQUEzQkEsMkJBQTJCO2FBQTNCQSwyQkFBMkI7OEJBQTNCQSwyQkFBMkI7OztpQkFBM0JBLDJCQUEyQjs7WUFDOUNDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2IsSUFBUUMsT0FBTyxHQUF1Q0QsT0FBTyxDQUFyREMsT0FBTyxFQUFFQyxnQ0FBZ0MsR0FBS0YsT0FBTyxDQUE1Q0UsZ0NBQWdDLEVBQzNDQyxvQkFBb0IsR0FBR0MsU0FBb0IsUUFBQSxDQUFDQywyQ0FBMkMsQ0FBQyxJQUFJLENBQUNDLElBQUksRUFBRUosZ0NBQWdDLENBQUMsQUFBQztnQkFFM0ksSUFBSUMsb0JBQW9CLEtBQUssSUFBSSxFQUFFO29CQUNqQyxJQUFNSSx3QkFBd0IsR0FBR0osb0JBQW9CLENBQUNLLE9BQU8sRUFBRSxBQUFDO29CQUVoRVAsT0FBTyxDQUFDTSx3QkFBd0IsQ0FBQyxHQUFHSixvQkFBb0IsQ0FBQztnQkFDM0QsQ0FBQztZQUNILENBQUM7OztZQUVETSxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsQ0FBQ1QsT0FBTyxFQUFFO2dCQUNoQixJQUFNLEFBQUVDLE9BQU8sR0FBS0QsT0FBTyxDQUFuQkMsT0FBTyxBQUFZLEVBQ3JCSyxJQUFJLEdBQUcsSUFBSSxDQUFDSSxPQUFPLEVBQUUsRUFDckJDLFFBQVEsR0FBR0wsSUFBSSxDQUFDRSxPQUFPLEVBQUUsRUFDekJELHdCQUF3QixHQUFHSyxJQUFBQSxTQUFvQyxxQ0FBQSxFQUFDRCxRQUFRLENBQUMsRUFDekVSLG9CQUFvQixHQUFHRixPQUFPLENBQUNNLHdCQUF3QixDQUFDLElBQUksSUFBSSxBQUFDO2dCQUV2RSxPQUFPSixvQkFBb0IsQ0FBQztZQUM5QixDQUFDOzs7WUFFRFUsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNDLDJCQUEyQixFQUFFO2dCQUNuQyxJQUFNUixJQUFJLEdBQUcsSUFBSSxDQUFDSSxPQUFPLEVBQUUsRUFDckJLLCtCQUErQixHQUFHRCwyQkFBMkIsQ0FBQ0osT0FBTyxFQUFFLEVBQ3ZFTSxVQUFVLEdBQUlWLElBQUksS0FBS1MsK0JBQStCLEFBQUMsQUFBQztnQkFFOUQsT0FBT0MsVUFBVSxDQUFDO1lBQ3BCLENBQUM7Ozs7WUFFTUMsR0FBTyxFQUFQQSxTQUFPO21CQUFkLFNBQU9BLE9BQU8sQ0FBQ0MsK0JBQStCLEVBQUVsQixPQUFPLEVBQUU7Z0JBQ3ZELElBQU1NLElBQUksR0FBR1ksK0JBQStCLENBQUNSLE9BQU8sRUFBRSxFQUNoREksMkJBQTJCLEdBQUcsSUFoQ25CaEIsMkJBQTJCLENBZ0N3QlEsSUFBSSxDQUFDLEVBQ25FSCxvQkFBb0IsR0FBR1csMkJBQTJCLENBQUNHLE9BQU8sQ0FBQ2pCLE9BQU8sQ0FBQyxBQUFDO2dCQUUxRSxPQUFPRyxvQkFBb0IsQ0FBQztZQUM5QixDQUFDOzs7V0FwQ2tCTCwyQkFBMkI7Q0FxQy9DLENBckN3RHFCLGNBQWEsUUFBQSxDQXFDckUifQ==