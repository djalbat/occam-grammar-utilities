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
                var ruleMap = context.ruleMap, directlyLeftRecursiveDefinitions = context.directlyLeftRecursiveDefinitions, indirectlyLeftRecursiveDefinitions = context.indirectlyLeftRecursiveDefinitions, rule = this.getRule(), leftRecursiveDefinitions = _toConsumableArray(directlyLeftRecursiveDefinitions).concat(_toConsumableArray(indirectlyLeftRecursiveDefinitions)), directlyReducedRule = _directly.default.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, this.disallowIsolated);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlT3BlcmF0aW9uL2RpcmVjdGx5UmVkdWNlUnVsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVPcGVyYXRpb24gZnJvbSBcIi4uL3J1bGVPcGVyYXRpb25cIjtcbmltcG9ydCBEaXJlY3RseVJlZHVjZWRSdWxlIGZyb20gXCIuLi9ydWxlL3JlZHVjZWQvZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbiBleHRlbmRzIFJ1bGVPcGVyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlLCBkaXNhbGxvd0lzb2xhdGVkKSB7XG4gICAgc3VwZXIocnVsZSk7XG5cbiAgICB0aGlzLmRpc2FsbG93SXNvbGF0ZWQgPSBkaXNhbGxvd0lzb2xhdGVkO1xuICB9XG5cbiAgYXBwbHkoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCwgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIC4uLmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLFxuICAgICAgICAgICAgLi4uaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IERpcmVjdGx5UmVkdWNlZFJ1bGUuZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCB0aGlzLmRpc2FsbG93SXNvbGF0ZWQpO1xuXG4gICAgaWYgKGRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHJ1bGVNYXBbZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVdID0gZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgICB9XG4gIH1cblxuICByZXRyaWV2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJ1bGUgPSB0aGlzLmdldFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBydWxlTWFwW2RpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cblxuICBjb21wYXJlKGRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbikge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb25SdWxlID0gZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gKHJ1bGUgPT09IGRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvblJ1bGUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXNhbGxvd0lzb2xhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbiA9IG5ldyBEaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24ocnVsZSwgZGlzYWxsb3dJc29sYXRlZCksXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IGRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvbi5leGVjdXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uIiwicnVsZSIsImRpc2FsbG93SXNvbGF0ZWQiLCJhcHBseSIsImNvbnRleHQiLCJydWxlTWFwIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0UnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJEaXJlY3RseVJlZHVjZWRSdWxlIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZXRyaWV2ZSIsInJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJjb21wYXJlIiwiZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uIiwiZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uUnVsZSIsImNvbXBhcmVzVG8iLCJleGVjdXRlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJ1bGVPcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVks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