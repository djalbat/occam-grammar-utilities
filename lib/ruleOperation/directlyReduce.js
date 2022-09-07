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
var _ruleOperation = /*#__PURE__*/ _interopRequireDefault(require("../ruleOperation"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../rule/reduced/directly"));
var _ruleName = require("../utilities/ruleName");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
var DirectlyReduceRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(DirectlyReduceRuleOperation, RuleOperation);
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
                var ruleMap = context.ruleMap, directlyLeftRecursiveDefinitions = context.directlyLeftRecursiveDefinitions, indirectlyLeftRecursiveDefinitions = context.indirectlyLeftRecursiveDefinitions, leftRecursiveDefinitions = _toConsumableArray(directlyLeftRecursiveDefinitions).concat(_toConsumableArray(indirectlyLeftRecursiveDefinitions)), directlyReducedRule = _directly.default.fromRuleDisallowIsolatedAndLeftRecursiveDefinitions(this.rule, this.disallowIsolated, leftRecursiveDefinitions);
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
}(_ruleOperation.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlT3BlcmF0aW9uL2RpcmVjdGx5UmVkdWNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU9wZXJhdGlvbiBmcm9tIFwiLi4vcnVsZU9wZXJhdGlvblwiO1xuaW1wb3J0IERpcmVjdGx5UmVkdWNlZFJ1bGUgZnJvbSBcIi4uL3J1bGUvcmVkdWNlZC9kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uIGV4dGVuZHMgUnVsZU9wZXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGUsIGRpc2FsbG93SXNvbGF0ZWQpIHtcbiAgICBzdXBlcihydWxlKTtcblxuICAgIHRoaXMuZGlzYWxsb3dJc29sYXRlZCA9IGRpc2FsbG93SXNvbGF0ZWQ7XG4gIH1cblxuICBhcHBseShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwLCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICAuLi5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyxcbiAgICAgICAgICAgIC4uLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBEaXJlY3RseVJlZHVjZWRSdWxlLmZyb21SdWxlRGlzYWxsb3dJc29sYXRlZEFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyh0aGlzLnJ1bGUsIHRoaXMuZGlzYWxsb3dJc29sYXRlZCwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChkaXJlY3RseVJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2RpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lXSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gICAgfVxuICB9XG5cbiAgcmV0cmlldmUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlID0gcnVsZU1hcFtkaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG5cbiAgY29tcGFyZShkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24pIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uUnVsZSA9IGRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgY29tcGFyZXNUbyA9IChydWxlID09PSBkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb25SdWxlKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvO1xuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlzYWxsb3dJc29sYXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24gPSBuZXcgRGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uKHJ1bGUsIGRpc2FsbG93SXNvbGF0ZWQpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24uZXhlY3V0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbiIsInJ1bGUiLCJkaXNhbGxvd0lzb2xhdGVkIiwiYXBwbHkiLCJjb250ZXh0IiwicnVsZU1hcCIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJEaXJlY3RseVJlZHVjZWRSdWxlIiwiZnJvbVJ1bGVEaXNhbGxvd0lzb2xhdGVkQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJnZXROYW1lIiwicmV0cmlldmUiLCJnZXRSdWxlIiwicnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImNvbXBhcmUiLCJkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24iLCJkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb25SdWxlIiwiY29tcGFyZXNUbyIsImV4ZWN1dGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZU9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxD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