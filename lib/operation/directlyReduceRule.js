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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vZGlyZWN0bHlSZWR1Y2VSdWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb25cIjtcbmltcG9ydCBEaXJlY3RseVJlZHVjZWRSdWxlIGZyb20gXCIuLi9ydWxlL3JlZHVjZWQvZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbiBleHRlbmRzIE9wZXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGUsIGRpc2FsbG93SXNvbGF0ZWQpIHtcbiAgICBzdXBlcihydWxlKTtcblxuICAgIHRoaXMuZGlzYWxsb3dJc29sYXRlZCA9IGRpc2FsbG93SXNvbGF0ZWQ7XG4gIH1cblxuICBhcHBseShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwfSA9IGNvbnRleHQsXG4gICAgICAgICAgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgY29udGV4dCksXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IERpcmVjdGx5UmVkdWNlZFJ1bGUuZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCB0aGlzLmRpc2FsbG93SXNvbGF0ZWQpO1xuXG4gICAgaWYgKGRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHJ1bGVNYXBbZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVdID0gZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgICB9XG4gIH1cblxuICByZXRyaWV2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJ1bGUgPSB0aGlzLmdldFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBydWxlTWFwW2RpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cblxuICBjb21wYXJlKGRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbikge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb25SdWxlID0gZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gKHJ1bGUgPT09IGRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvblJ1bGUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXNhbGxvd0lzb2xhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbiA9IG5ldyBEaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24ocnVsZSwgZGlzYWxsb3dJc29sYXRlZCksXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IGRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbi5leGVjdXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uIiwicnVsZSIsImRpc2FsbG93SXNvbGF0ZWQiLCJhcHBseSIsImNvbnRleHQiLCJydWxlTWFwIiwiZ2V0UnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkaXJlY3RseVJlZHVjZWRSdWxlIiwiRGlyZWN0bHlSZWR1Y2VkUnVsZSIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJnZXROYW1lIiwicmV0cmlldmUiLCJydWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiY29tcGFyZSIsImRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbiIsImRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvblJ1bGUiLCJjb21wYXJlc1RvIiwiZXhlY3V0ZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJPcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVFRQSwyQkFBMkI7Ozs4REFOMUIsY0FBYzs2REFDSiwwQkFBMEI7dUJBRWIsc0JBQXNCO3dCQUNmLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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