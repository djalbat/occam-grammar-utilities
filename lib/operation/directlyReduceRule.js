"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyReduceRuleOperation;
    }
});
var _operation = /*#__PURE__*/ _interopRequireDefault(require("../operation"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../rule/reduced/directly"));
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
var DirectlyReduceRuleOperation = /*#__PURE__*/ function(Operation) {
    _inherits(DirectlyReduceRuleOperation, Operation);
    var _super = _createSuper(DirectlyReduceRuleOperation);
    function DirectlyReduceRuleOperation(rule, disallowIsolated) {
        _classCallCheck(this, DirectlyReduceRuleOperation);
        var _this;
        _this = _super.call(this, rule);
        _this.disallowIsolated = disallowIsolated;
        return _this;
    }
    _createClass(DirectlyReduceRuleOperation, [
        {
            key: "apply",
            value: function apply(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), leftRecursiveDefinitions = (0, _context.findLeftRecursiveDefinitions)(rule, context), directlyReducedRule = _directly.default.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, this.disallowIsolated);
                if (directlyReducedRule !== null) {
                    var directlyReducedRuleName = directlyReducedRule.getName();
                    ruleMap[directlyReducedRuleName] = directlyReducedRule;
                }
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), ruleName = rule.getName(), directlyReducedRuleName = (0, _ruleName.directlyReducedRuleNameFromRuleName)(ruleName), directlyReducedRule = ruleMap[directlyReducedRuleName] || null;
                return directlyReducedRule;
            }
        },
        {
            key: "compare",
            value: function compare(directlyReduceRuleOperation) {
                var rule = this.getRule(), directlyReduceRuleOperationRule = directlyReduceRuleOperation.getRule(), comparesTo = rule === directlyReduceRuleOperationRule;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(directlyLeftRecursiveDefinition, disallowIsolated, context) {
                var rule = directlyLeftRecursiveDefinition.getRule(), directlyReduceRuleOperation = new DirectlyReduceRuleOperation(rule, disallowIsolated), directlyReducedRule = directlyReduceRuleOperation.execute(context);
                return directlyReducedRule;
            }
        }
    ]);
    return DirectlyReduceRuleOperation;
}(_operation.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vZGlyZWN0bHlSZWR1Y2VSdWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb25cIjtcbmltcG9ydCBEaXJlY3RseVJlZHVjZWRSdWxlIGZyb20gXCIuLi9ydWxlL3JlZHVjZWQvZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbiBleHRlbmRzIE9wZXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGUsIGRpc2FsbG93SXNvbGF0ZWQpIHtcbiAgICBzdXBlcihydWxlKTtcblxuICAgIHRoaXMuZGlzYWxsb3dJc29sYXRlZCA9IGRpc2FsbG93SXNvbGF0ZWQ7XG4gIH1cblxuICBhcHBseShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJ1bGUgPSB0aGlzLmdldFJ1bGUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNvbnRleHQpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBEaXJlY3RseVJlZHVjZWRSdWxlLmZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgdGhpcy5kaXNhbGxvd0lzb2xhdGVkKTtcblxuICAgIGlmIChkaXJlY3RseVJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2RpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lXSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gICAgfVxuICB9XG5cbiAgcmV0cmlldmUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlID0gcnVsZU1hcFtkaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG5cbiAgY29tcGFyZShkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24pIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uUnVsZSA9IGRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgY29tcGFyZXNUbyA9IChydWxlID09PSBkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb25SdWxlKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvO1xuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlzYWxsb3dJc29sYXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24gPSBuZXcgRGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uKHJ1bGUsIGRpc2FsbG93SXNvbGF0ZWQpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24uZXhlY3V0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbiIsInJ1bGUiLCJkaXNhbGxvd0lzb2xhdGVkIiwiYXBwbHkiLCJjb250ZXh0IiwicnVsZU1hcCIsImdldFJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZSIsIkRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJldHJpZXZlIiwicnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImNvbXBhcmUiLCJkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24iLCJkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb25SdWxlIiwiY29tcGFyZXNUbyIsImV4ZWN1dGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsMkJBQTJCOzs7OERBTjFCLGNBQWM7NkRBQ0osMEJBQTBCO3VCQUViLHNCQUFzQjt3QkFDZix1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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