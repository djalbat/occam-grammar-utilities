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
var _operation = /*#__PURE__*/ _interopRequireDefault(require("../operation"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../rule/repeated/directly"));
var _context = require("../utilities/context");
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
var DirectlyRepeatRuleOperation = /*#__PURE__*/ function(Operation) {
    _inherits(DirectlyRepeatRuleOperation, Operation);
    var _super = _createSuper(DirectlyRepeatRuleOperation);
    function DirectlyRepeatRuleOperation() {
        _classCallCheck(this, DirectlyRepeatRuleOperation);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyRepeatRuleOperation, [
        {
            key: "apply",
            value: function apply(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), directlyLeftRecursiveDefinitions = (0, _context.findDirectlyLeftRecursiveDefinitions)(rule, context), directlyRepeatedRule = _directly.default.fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions);
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
}(_operation.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vZGlyZWN0bHlSZXBlYXRSdWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb25cIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi4vcnVsZS9yZXBlYXRlZC9kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uIGV4dGVuZHMgT3BlcmF0aW9uIHtcbiAgYXBwbHkoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgY29udGV4dCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBEaXJlY3RseVJlcGVhdGVkUnVsZS5mcm9tUnVsZUFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChkaXJlY3RseVJlcGVhdGVkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0gPSBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgICB9XG4gIH1cblxuICByZXRyaWV2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJ1bGUgPSB0aGlzLmdldFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBydWxlTWFwW2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIGNvbXBhcmUoZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvblJ1bGUgPSBkaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAocnVsZSA9PT0gZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uUnVsZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uID0gbmV3IERpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbihydWxlKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IGRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbi5leGVjdXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbiIsImFwcGx5IiwiY29udGV4dCIsInJ1bGVNYXAiLCJydWxlIiwiZ2V0UnVsZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJEaXJlY3RseVJlcGVhdGVkUnVsZSIsImZyb21SdWxlQW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJnZXROYW1lIiwicmV0cmlldmUiLCJydWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImNvbXBhcmUiLCJkaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb24iLCJkaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb25SdWxlIiwiY29tcGFyZXNUbyIsImV4ZWN1dGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsMkJBQTJCOzs7OERBTjFCLGNBQWM7NkRBQ0gsMkJBQTJCO3VCQUVQLHNCQUFzQjt3QkFDdEIsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQUEsQUFBTUEsMkJBQTJCLGlCQUFqQztjQUFNQSwyQkFBMkI7OEJBQTNCQSwyQkFBMkI7YUFBM0JBLDJCQUEyQjs4QkFBM0JBLDJCQUEyQjs7O2lCQUEzQkEsMkJBQTJCOztZQUM5Q0MsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFDYixJQUFNLEFBQUVDLE9BQU8sR0FBS0QsT0FBTyxDQUFuQkMsT0FBTyxBQUFZLEVBQ3JCQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsRUFDckJDLGdDQUFnQyxHQUFHQyxJQUFBQSxRQUFvQyxxQ0FBQSxFQUFDSCxJQUFJLEVBQUVGLE9BQU8sQ0FBQyxFQUN0Rk0sb0JBQW9CLEdBQUdDLFNBQW9CLFFBQUEsQ0FBQ0MsMkNBQTJDLENBQUNOLElBQUksRUFBRUUsZ0NBQWdDLENBQUMsQUFBQztnQkFFdEksSUFBSUUsb0JBQW9CLEtBQUssSUFBSSxFQUFFO29CQUNqQyxJQUFNRyx3QkFBd0IsR0FBR0gsb0JBQW9CLENBQUNJLE9BQU8sRUFBRSxBQUFDO29CQUVoRVQsT0FBTyxDQUFDUSx3QkFBd0IsQ0FBQyxHQUFHSCxvQkFBb0IsQ0FBQztnQkFDM0QsQ0FBQztZQUNILENBQUM7OztZQUVESyxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsQ0FBQ1gsT0FBTyxFQUFFO2dCQUNoQixJQUFNLEFBQUVDLE9BQU8sR0FBS0QsT0FBTyxDQUFuQkMsT0FBTyxBQUFZLEVBQ3JCQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsRUFDckJTLFFBQVEsR0FBR1YsSUFBSSxDQUFDUSxPQUFPLEVBQUUsRUFDekJELHdCQUF3QixHQUFHSSxJQUFBQSxTQUFvQyxxQ0FBQSxFQUFDRCxRQUFRLENBQUMsRUFDekVOLG9CQUFvQixHQUFHTCxPQUFPLENBQUNRLHdCQUF3QixDQUFDLElBQUksSUFBSSxBQUFDO2dCQUV2RSxPQUFPSCxvQkFBb0IsQ0FBQztZQUM5QixDQUFDOzs7WUFFRFEsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNDLDJCQUEyQixFQUFFO2dCQUNuQyxJQUFNYixJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsRUFDckJhLCtCQUErQixHQUFHRCwyQkFBMkIsQ0FBQ1osT0FBTyxFQUFFLEVBQ3ZFYyxVQUFVLEdBQUlmLElBQUksS0FBS2MsK0JBQStCLEFBQUMsQUFBQztnQkFFOUQsT0FBT0MsVUFBVSxDQUFDO1lBQ3BCLENBQUM7Ozs7WUFFTUMsR0FBTyxFQUFQQSxTQUFPO21CQUFkLFNBQU9BLE9BQU8sQ0FBQ0MsK0JBQStCLEVBQUVuQixPQUFPLEVBQUU7Z0JBQ3ZELElBQU1FLElBQUksR0FBR2lCLCtCQUErQixDQUFDaEIsT0FBTyxFQUFFLEVBQ2hEWSwyQkFBMkIsR0FBRyxJQWxDbkJqQiwyQkFBMkIsQ0FrQ3dCSSxJQUFJLENBQUMsRUFDbkVJLG9CQUFvQixHQUFHUywyQkFBMkIsQ0FBQ0csT0FBTyxDQUFDbEIsT0FBTyxDQUFDLEFBQUM7Z0JBRTFFLE9BQU9NLG9CQUFvQixDQUFDO1lBQzlCLENBQUM7OztXQXRDa0JSLDJCQUEyQjtDQXVDL0MsQ0F2Q3dEc0IsVUFBUyxRQUFBLENBdUNqRSJ9