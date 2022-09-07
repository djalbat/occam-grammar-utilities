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
                var ruleMap = context.ruleMap, directlyLeftRecursiveDefinitions = context.directlyLeftRecursiveDefinitions, rule = this.getRule(), directlyRepeatedRule = _directly.default.fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlT3BlcmF0aW9uL2RpcmVjdGx5UmVwZWF0UnVsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVPcGVyYXRpb24gZnJvbSBcIi4uL3J1bGVPcGVyYXRpb25cIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi4vcnVsZS9yZXBlYXRlZC9kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbiBleHRlbmRzIFJ1bGVPcGVyYXRpb24ge1xuICBhcHBseShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwLCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBEaXJlY3RseVJlcGVhdGVkUnVsZS5mcm9tUnVsZUFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChkaXJlY3RseVJlcGVhdGVkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0gPSBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgICB9XG4gIH1cblxuICByZXRyaWV2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJ1bGUgPSB0aGlzLmdldFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBydWxlTWFwW2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIGNvbXBhcmUoZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvblJ1bGUgPSBkaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAocnVsZSA9PT0gZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uUnVsZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRSdWxlT3BlcmF0aW9uID0gbmV3IERpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbihydWxlKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IGRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbi5leGVjdXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0UnVsZU9wZXJhdGlvbiIsImFwcGx5IiwiY29udGV4dCIsInJ1bGVNYXAiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJnZXRSdWxlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJEaXJlY3RseVJlcGVhdGVkUnVsZSIsImZyb21SdWxlQW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJnZXROYW1lIiwicmV0cmlldmUiLCJydWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImNvbXBhcmUiLCJkaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb24iLCJkaXJlY3RseVJlcGVhdFJ1bGVPcGVyYXRpb25SdWxlIiwiY29tcGFyZXNUbyIsImV4ZWN1dGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZU9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBT1FBLDJCQUEyQjs7O2tFQUx0QixrQkFBa0I7NkRBQ1gsMkJBQTJCO3dCQUVQLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFBLEFBQU1BLDJCQUEyQixpQkFBakM7Y0FBTUEsMkJBQTJCOzhCQUEzQkEsMkJBQTJCO2FBQTNCQSwyQkFBMkI7OEJBQTNCQSwyQkFBMkI7OztpQkFBM0JBLDJCQUEyQjs7WUFDOUNDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2IsSUFBUUMsT0FBTyxHQUF1Q0QsT0FBTyxDQUFyREMsT0FBTyxFQUFFQyxnQ0FBZ0MsR0FBS0YsT0FBTyxDQUE1Q0UsZ0NBQWdDLEVBQzNDQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsRUFDckJDLG9CQUFvQixHQUFHQyxTQUFvQixRQUFBLENBQUNDLDJDQUEyQyxDQUFDSixJQUFJLEVBQUVELGdDQUFnQyxDQUFDLEFBQUM7Z0JBRXRJLElBQUlHLG9CQUFvQixLQUFLLElBQUksRUFBRTtvQkFDakMsSUFBTUcsd0JBQXdCLEdBQUdILG9CQUFvQixDQUFDSSxPQUFPLEVBQUUsQUFBQztvQkFFaEVSLE9BQU8sQ0FBQ08sd0JBQXdCLENBQUMsR0FBR0gsb0JBQW9CLENBQUM7Z0JBQzNELENBQUM7WUFDSCxDQUFDOzs7WUFFREssR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLENBQUNWLE9BQU8sRUFBRTtnQkFDaEIsSUFBTSxBQUFFQyxPQUFPLEdBQUtELE9BQU8sQ0FBbkJDLE9BQU8sQUFBWSxFQUNyQkUsSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUFFLEVBQ3JCTyxRQUFRLEdBQUdSLElBQUksQ0FBQ00sT0FBTyxFQUFFLEVBQ3pCRCx3QkFBd0IsR0FBR0ksSUFBQUEsU0FBb0MscUNBQUEsRUFBQ0QsUUFBUSxDQUFDLEVBQ3pFTixvQkFBb0IsR0FBR0osT0FBTyxDQUFDTyx3QkFBd0IsQ0FBQyxJQUFJLElBQUksQUFBQztnQkFFdkUsT0FBT0gsb0JBQW9CLENBQUM7WUFDOUIsQ0FBQzs7O1lBRURRLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQywyQkFBMkIsRUFBRTtnQkFDbkMsSUFBTVgsSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUFFLEVBQ3JCVywrQkFBK0IsR0FBR0QsMkJBQTJCLENBQUNWLE9BQU8sRUFBRSxFQUN2RVksVUFBVSxHQUFJYixJQUFJLEtBQUtZLCtCQUErQixBQUFDLEFBQUM7Z0JBRTlELE9BQU9DLFVBQVUsQ0FBQztZQUNwQixDQUFDOzs7O1lBRU1DLEdBQU8sRUFBUEEsU0FBTzttQkFBZCxTQUFPQSxPQUFPLENBQUNDLCtCQUErQixFQUFFbEIsT0FBTyxFQUFFO2dCQUN2RCxJQUFNRyxJQUFJLEdBQUdlLCtCQUErQixDQUFDZCxPQUFPLEVBQUUsRUFDaERVLDJCQUEyQixHQUFHLElBakNuQmhCLDJCQUEyQixDQWlDd0JLLElBQUksQ0FBQyxFQUNuRUUsb0JBQW9CLEdBQUdTLDJCQUEyQixDQUFDRyxPQUFPLENBQUNqQixPQUFPLENBQUMsQUFBQztnQkFFMUUsT0FBT0ssb0JBQW9CLENBQUM7WUFDOUIsQ0FBQzs7O1dBckNrQlAsMkJBQTJCO0NBc0MvQyxDQXRDd0RxQixjQUFhLFFBQUEsQ0FzQ3JFIn0=