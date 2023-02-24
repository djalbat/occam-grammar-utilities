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
            value: function apply(directlyLeftRecursiveDefinition, context) {
                var rule = directlyLeftRecursiveDefinition.getRule(), directlyLeftRecursiveDefinitions = (0, _context.findDirectlyLeftRecursiveDefinitions)(rule, context), directlyRepeatedRule = _directly.default.fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions);
                if (directlyRepeatedRule !== null) {
                    var ruleMap = context.ruleMap, directlyRepeatedRuleName = directlyRepeatedRule.getName();
                    ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
                }
                return directlyRepeatedRule;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(directlyLeftRecursiveDefinition, context) {
                var ruleMap = context.ruleMap, rule = directlyLeftRecursiveDefinition.getRule(), ruleName = rule.getName(), directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRule = ruleMap[directlyRepeatedRuleName] || null;
                return directlyRepeatedRule;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(directlyLeftRecursiveDefinition, context) {
                var rule = directlyLeftRecursiveDefinition.getRule(), directlyRepeatedRuleOperation = new DirectlyRepeatedRuleOperation(rule), directlyRepeatedRule = directlyRepeatedRuleOperation.execute(directlyLeftRecursiveDefinition, context);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRuleOperation;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9kaXJlY3RseVJlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU9wZXJhdGlvbiBmcm9tIFwiLi4vLi4vb3BlcmF0aW9uL3J1bGVcIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXBlYXRlZC9kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24gZXh0ZW5kcyBSdWxlT3BlcmF0aW9uIHtcbiAgYXBwbHkoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjb250ZXh0KSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IERpcmVjdGx5UmVwZWF0ZWRSdWxlLmZyb21SdWxlQW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGRpcmVjdGx5UmVwZWF0ZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHJ1bGVNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHJ1bGVNYXBbZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lXSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIHJldHJpZXZlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJ1bGVNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IHJ1bGVNYXBbZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbiA9IG5ldyBEaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbihydWxlKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uLmV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24iLCJhcHBseSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJjb250ZXh0IiwicnVsZSIsImdldFJ1bGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmcm9tUnVsZUFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZU1hcCIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZXRyaWV2ZSIsInJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZXhlY3V0ZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uIiwiUnVsZU9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eURBTks7NkRBQ087dUJBRW9CO3dCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsOENBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQywrQkFBK0IsRUFBRUMsT0FBTyxFQUFFO2dCQUM5QyxJQUFNQyxPQUFPRixnQ0FBZ0NHLE9BQU8sSUFDOUNDLG1DQUFtQ0MsSUFBQUEsNkNBQW9DLEVBQUNILE1BQU1ELFVBQzlFSyx1QkFBdUJDLGlCQUFvQixDQUFDQywyQ0FBMkMsQ0FBQ04sTUFBTUU7Z0JBRXBHLElBQUlFLHlCQUF5QixJQUFJLEVBQUU7b0JBQ2pDLElBQU0sQUFBRUcsVUFBWVIsUUFBWlEsU0FDRkMsMkJBQTJCSixxQkFBcUJLLE9BQU87b0JBRTdERixPQUFPLENBQUNDLHlCQUF5QixHQUFHSjtnQkFDdEMsQ0FBQztnQkFFRCxPQUFPQTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNaLCtCQUErQixFQUFFQyxPQUFPLEVBQUU7Z0JBQ2pELElBQU0sQUFBRVEsVUFBWVIsUUFBWlEsU0FDRlAsT0FBT0YsZ0NBQWdDRyxPQUFPLElBQzlDVSxXQUFXWCxLQUFLUyxPQUFPLElBQ3ZCRCwyQkFBMkJJLElBQUFBLDhDQUFvQyxFQUFDRCxXQUNoRVAsdUJBQXVCRyxPQUFPLENBQUNDLHlCQUF5QixJQUFJLElBQUk7Z0JBRXRFLE9BQU9KO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsUUFBUWYsK0JBQStCLEVBQUVDLE9BQU8sRUFBRTtnQkFDdkQsSUFBTUMsT0FBT0YsZ0NBQWdDRyxPQUFPLElBQzlDYSxnQ0FBZ0MsSUE1QnJCbEIsOEJBNEJ1REksT0FDbEVJLHVCQUF1QlUsOEJBQThCRCxPQUFPLENBQUNmLGlDQUFpQ0M7Z0JBRXBHLE9BQU9LO1lBQ1Q7OztXQWhDbUJSO0VBQXNDbUIsYUFBYSJ9