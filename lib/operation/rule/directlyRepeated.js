"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyRepeatedRuleOperation;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../../operation/rule"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../rule/repeated/directly"));
var _context = require("../../utilities/context");
var _ruleName = require("../../utilities/ruleName");
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
var DirectlyRepeatedRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(DirectlyRepeatedRuleOperation, RuleOperation);
    var _super = _createSuper(DirectlyRepeatedRuleOperation);
    function DirectlyRepeatedRuleOperation() {
        _classCallCheck(this, DirectlyRepeatedRuleOperation);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyRepeatedRuleOperation, [
        {
            key: "apply",
            value: function apply(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), directlyLeftRecursiveDefinitions = (0, _context.findDirectlyLeftRecursiveDefinitions)(rule, context), directlyRepeatedRule = _directly.default.fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions);
                if (directlyRepeatedRule !== null) {
                    var directlyRepeatedRuleName = directlyRepeatedRule.getName();
                    ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
                }
                return directlyRepeatedRule;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), ruleName = rule.getName(), directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRule = ruleMap[directlyRepeatedRuleName] || null;
                return directlyRepeatedRule;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(directlyLeftRecursiveDefinition, context) {
                var rule = directlyLeftRecursiveDefinition.getRule(), directlyRepeatedRuleOperation = new DirectlyRepeatedRuleOperation(rule), directlyRepeatedRule = directlyRepeatedRuleOperation.execute(context);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRuleOperation;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9kaXJlY3RseVJlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU9wZXJhdGlvbiBmcm9tIFwiLi4vLi4vb3BlcmF0aW9uL3J1bGVcIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXBlYXRlZC9kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24gZXh0ZW5kcyBSdWxlT3BlcmF0aW9uIHtcbiAgYXBwbHkoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgY29udGV4dCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBEaXJlY3RseVJlcGVhdGVkUnVsZS5mcm9tUnVsZUFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChkaXJlY3RseVJlcGVhdGVkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0gPSBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cblxuICByZXRyaWV2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJ1bGUgPSB0aGlzLmdldFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBydWxlTWFwW2RpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24gPSBuZXcgRGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24ocnVsZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbi5leGVjdXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uIiwiYXBwbHkiLCJjb250ZXh0IiwicnVsZU1hcCIsInJ1bGUiLCJnZXRSdWxlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkaXJlY3RseVJlcGVhdGVkUnVsZSIsIkRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZnJvbVJ1bGVBbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZXRyaWV2ZSIsInJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZXhlY3V0ZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbiIsIlJ1bGVPcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVFRQSw2QkFBNkI7Ozt5REFOeEIsc0JBQXNCOzZEQUNmLDhCQUE4Qjt1QkFFVix5QkFBeUI7d0JBQ3pCLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLDZCQUE2QixpQkFBbkM7Y0FBTUEsNkJBQTZCOzhCQUE3QkEsNkJBQTZCO2FBQTdCQSw2QkFBNkI7OEJBQTdCQSw2QkFBNkI7OztpQkFBN0JBLDZCQUE2Qjs7WUFDaERDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2IsSUFBTSxBQUFFQyxPQUFPLEdBQUtELE9BQU8sQ0FBbkJDLE9BQU8sQUFBWSxFQUNyQkMsSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUFFLEVBQ3JCQyxnQ0FBZ0MsR0FBR0MsSUFBQUEsUUFBb0MscUNBQUEsRUFBQ0gsSUFBSSxFQUFFRixPQUFPLENBQUMsRUFDdEZNLG9CQUFvQixHQUFHQyxTQUFvQixRQUFBLENBQUNDLDJDQUEyQyxDQUFDTixJQUFJLEVBQUVFLGdDQUFnQyxDQUFDLEFBQUM7Z0JBRXRJLElBQUlFLG9CQUFvQixLQUFLLElBQUksRUFBRTtvQkFDakMsSUFBTUcsd0JBQXdCLEdBQUdILG9CQUFvQixDQUFDSSxPQUFPLEVBQUUsQUFBQztvQkFFaEVULE9BQU8sQ0FBQ1Esd0JBQXdCLENBQUMsR0FBR0gsb0JBQW9CLENBQUM7Z0JBQzNELENBQUM7Z0JBRUQsT0FBT0Esb0JBQW9CLENBQUM7WUFDOUIsQ0FBQzs7O1lBRURLLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDWCxPQUFPLEVBQUU7Z0JBQ2hCLElBQU0sQUFBRUMsT0FBTyxHQUFLRCxPQUFPLENBQW5CQyxPQUFPLEFBQVksRUFDckJDLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUNyQlMsUUFBUSxHQUFHVixJQUFJLENBQUNRLE9BQU8sRUFBRSxFQUN6QkQsd0JBQXdCLEdBQUdJLElBQUFBLFNBQW9DLHFDQUFBLEVBQUNELFFBQVEsQ0FBQyxFQUN6RU4sb0JBQW9CLEdBQUdMLE9BQU8sQ0FBQ1Esd0JBQXdCLENBQUMsSUFBSSxJQUFJLEFBQUM7Z0JBRXZFLE9BQU9ILG9CQUFvQixDQUFDO1lBQzlCLENBQUM7Ozs7WUFFTVEsR0FBTyxFQUFQQSxTQUFPO21CQUFkLFNBQU9BLE9BQU8sQ0FBQ0MsK0JBQStCLEVBQUVmLE9BQU8sRUFBRTtnQkFDdkQsSUFBTUUsSUFBSSxHQUFHYSwrQkFBK0IsQ0FBQ1osT0FBTyxFQUFFLEVBQ2hEYSw2QkFBNkIsR0FBRyxJQTVCckJsQiw2QkFBNkIsQ0E0QjBCSSxJQUFJLENBQUMsRUFDdkVJLG9CQUFvQixHQUFHVSw2QkFBNkIsQ0FBQ0YsT0FBTyxDQUFDZCxPQUFPLENBQUMsQUFBQztnQkFFNUUsT0FBT00sb0JBQW9CLENBQUM7WUFDOUIsQ0FBQzs7O1dBaENrQlIsNkJBQTZCO0NBaUNqRCxDQWpDMERtQixLQUFhLFFBQUEsQ0FpQ3ZFIn0=