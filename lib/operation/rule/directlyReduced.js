"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyReducedRuleOperation;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../../operation/rule"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../rule/reduced/directly"));
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
var DirectlyReducedRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(DirectlyReducedRuleOperation, RuleOperation);
    var _super = _createSuper(DirectlyReducedRuleOperation);
    function DirectlyReducedRuleOperation() {
        _classCallCheck(this, DirectlyReducedRuleOperation);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyReducedRuleOperation, [
        {
            key: "apply",
            value: function apply(directlyLeftRecursiveDefinition, allowIsolated, context) {
                var ruleMap = context.ruleMap, rule = directlyLeftRecursiveDefinition.getRule(), leftRecursiveDefinitions = (0, _context.findLeftRecursiveDefinitions)(rule, context), directlyReducedRule = _directly.default.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, allowIsolated);
                if (directlyReducedRule !== null) {
                    var directlyReducedRuleName = directlyReducedRule.getName();
                    ruleMap[directlyReducedRuleName] = directlyReducedRule;
                }
                return directlyReducedRule;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(directlyLeftRecursiveDefinition, allowIsolated, context) {
                var ruleMap = context.ruleMap, rule = directlyLeftRecursiveDefinition.getRule(), ruleName = rule.getName(), directlyReducedRuleName = (0, _ruleName.directlyReducedRuleNameFromRuleName)(ruleName), directlyReducedRule = ruleMap[directlyReducedRuleName] || null;
                return directlyReducedRule;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(directlyLeftRecursiveDefinition, allowIsolated, context) {
                var rule = directlyLeftRecursiveDefinition.getRule(), directlyReducedRuleOperation = new DirectlyReducedRuleOperation(rule), directlyReducedRule = directlyReducedRuleOperation.execute(directlyLeftRecursiveDefinition, allowIsolated, context);
                return directlyReducedRule;
            }
        }
    ]);
    return DirectlyReducedRuleOperation;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9kaXJlY3RseVJlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vcnVsZVwiO1xuaW1wb3J0IERpcmVjdGx5UmVkdWNlZFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmVkdWNlZC9kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbiBleHRlbmRzIFJ1bGVPcGVyYXRpb24ge1xuICBhcHBseShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBhbGxvd0lzb2xhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNvbnRleHQpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBEaXJlY3RseVJlZHVjZWRSdWxlLmZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgYWxsb3dJc29sYXRlZCk7XG5cbiAgICBpZiAoZGlyZWN0bHlSZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlLmdldE5hbWUoKTtcblxuICAgICAgcnVsZU1hcFtkaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gPSBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG5cbiAgcmV0cmlldmUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgYWxsb3dJc29sYXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlID0gcnVsZU1hcFtkaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgYWxsb3dJc29sYXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlT3BlcmF0aW9uID0gbmV3IERpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24ocnVsZSksXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24uZXhlY3V0ZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBhbGxvd0lzb2xhdGVkLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24iLCJhcHBseSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhbGxvd0lzb2xhdGVkIiwiY29udGV4dCIsInJ1bGVNYXAiLCJydWxlIiwiZ2V0UnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkaXJlY3RseVJlZHVjZWRSdWxlIiwiRGlyZWN0bHlSZWR1Y2VkUnVsZSIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJnZXROYW1lIiwicmV0cmlldmUiLCJydWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZXhlY3V0ZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24iLCJSdWxlT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsNEJBQTRCOzs7eURBTnZCLHNCQUFzQjs2REFDaEIsNkJBQTZCO3VCQUVoQix5QkFBeUI7d0JBQ2xCLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxJQUFBLEFBQU1BLDRCQUE0QixpQkFBbEM7Y0FBTUEsNEJBQTRCOzhCQUE1QkEsNEJBQTRCO2FBQTVCQSw0QkFBNEI7OEJBQTVCQSw0QkFBNEI7OztpQkFBNUJBLDRCQUE0Qjs7WUFDL0NDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQywrQkFBK0IsRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUU7Z0JBQzdELElBQU0sQUFBRUMsT0FBTyxHQUFLRCxPQUFPLENBQW5CQyxPQUFPLEFBQVksRUFDckJDLElBQUksR0FBR0osK0JBQStCLENBQUNLLE9BQU8sRUFBRSxFQUNoREMsd0JBQXdCLEdBQUdDLElBQUFBLFFBQTRCLDZCQUFBLEVBQUNILElBQUksRUFBRUYsT0FBTyxDQUFDLEVBQ3RFTSxtQkFBbUIsR0FBR0MsU0FBbUIsUUFBQSxDQUFDQyxtQ0FBbUMsQ0FBQ04sSUFBSSxFQUFFRSx3QkFBd0IsRUFBRUwsYUFBYSxDQUFDLEFBQUM7Z0JBRW5JLElBQUlPLG1CQUFtQixLQUFLLElBQUksRUFBRTtvQkFDaEMsSUFBTUcsdUJBQXVCLEdBQUdILG1CQUFtQixDQUFDSSxPQUFPLEVBQUUsQUFBQztvQkFFOURULE9BQU8sQ0FBQ1EsdUJBQXVCLENBQUMsR0FBR0gsbUJBQW1CLENBQUM7Z0JBQ3pELENBQUM7Z0JBRUQsT0FBT0EsbUJBQW1CLENBQUM7WUFDN0IsQ0FBQzs7O1lBRURLLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDYiwrQkFBK0IsRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUU7Z0JBQ2hFLElBQU0sQUFBRUMsT0FBTyxHQUFLRCxPQUFPLENBQW5CQyxPQUFPLEFBQVksRUFDckJDLElBQUksR0FBR0osK0JBQStCLENBQUNLLE9BQU8sRUFBRSxFQUNoRFMsUUFBUSxHQUFHVixJQUFJLENBQUNRLE9BQU8sRUFBRSxFQUN6QkQsdUJBQXVCLEdBQUdJLElBQUFBLFNBQW1DLG9DQUFBLEVBQUNELFFBQVEsQ0FBQyxFQUN2RU4sbUJBQW1CLEdBQUdMLE9BQU8sQ0FBQ1EsdUJBQXVCLENBQUMsSUFBSSxJQUFJLEFBQUM7Z0JBRXJFLE9BQU9ILG1CQUFtQixDQUFDO1lBQzdCLENBQUM7Ozs7WUFFTVEsR0FBTyxFQUFQQSxTQUFPO21CQUFkLFNBQU9BLE9BQU8sQ0FBQ2hCLCtCQUErQixFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRTtnQkFDdEUsSUFBTUUsSUFBSSxHQUFHSiwrQkFBK0IsQ0FBQ0ssT0FBTyxFQUFFLEVBQ2hEWSw0QkFBNEIsR0FBRyxJQTVCcEJuQiw0QkFBNEIsQ0E0QnlCTSxJQUFJLENBQUMsRUFDckVJLG1CQUFtQixHQUFHUyw0QkFBNEIsQ0FBQ0QsT0FBTyxDQUFDaEIsK0JBQStCLEVBQUVDLGFBQWEsRUFBRUMsT0FBTyxDQUFDLEFBQUM7Z0JBRTFILE9BQU9NLG1CQUFtQixDQUFDO1lBQzdCLENBQUM7OztXQWhDa0JWLDRCQUE0QjtDQWlDaEQsQ0FqQ3lEb0IsS0FBYSxRQUFBLENBaUN0RSJ9