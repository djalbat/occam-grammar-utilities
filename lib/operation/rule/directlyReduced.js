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
    function DirectlyReducedRuleOperation(rule, allowIsolated) {
        _classCallCheck(this, DirectlyReducedRuleOperation);
        var _this;
        _this = _super.call(this, rule);
        _this.allowIsolated = allowIsolated;
        return _this;
    }
    _createClass(DirectlyReducedRuleOperation, [
        {
            key: "apply",
            value: function apply(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), leftRecursiveDefinitions = (0, _context.findLeftRecursiveDefinitions)(rule, context), directlyReducedRule = _directly.default.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, this.allowIsolated);
                if (directlyReducedRule !== null) {
                    var directlyReducedRuleName = directlyReducedRule.getName();
                    ruleMap[directlyReducedRuleName] = directlyReducedRule;
                }
                return directlyReducedRule;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), ruleName = rule.getName(), directlyReducedRuleName = (0, _ruleName.directlyReducedRuleNameFromRuleName)(ruleName), directlyReducedRule = ruleMap[directlyReducedRuleName] || null;
                return directlyReducedRule;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(directlyLeftRecursiveDefinition, allowIsolated, context) {
                var rule = directlyLeftRecursiveDefinition.getRule(), directlyReducedRuleOperation = new DirectlyReducedRuleOperation(rule, allowIsolated), directlyReducedRule = directlyReducedRuleOperation.execute(context);
                return directlyReducedRule;
            }
        }
    ]);
    return DirectlyReducedRuleOperation;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9kaXJlY3RseVJlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vcnVsZVwiO1xuaW1wb3J0IERpcmVjdGx5UmVkdWNlZFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmVkdWNlZC9kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbiBleHRlbmRzIFJ1bGVPcGVyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlLCBhbGxvd0lzb2xhdGVkKSB7XG4gICAgc3VwZXIocnVsZSk7XG5cbiAgICB0aGlzLmFsbG93SXNvbGF0ZWQgPSBhbGxvd0lzb2xhdGVkO1xuICB9XG5cbiAgYXBwbHkoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjb250ZXh0KSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlID0gRGlyZWN0bHlSZWR1Y2VkUnVsZS5mcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHRoaXMuYWxsb3dJc29sYXRlZCk7XG5cbiAgICBpZiAoZGlyZWN0bHlSZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlLmdldE5hbWUoKTtcblxuICAgICAgcnVsZU1hcFtkaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gPSBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG5cbiAgcmV0cmlldmUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlID0gcnVsZU1hcFtkaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgYWxsb3dJc29sYXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlT3BlcmF0aW9uID0gbmV3IERpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24ocnVsZSwgYWxsb3dJc29sYXRlZCksXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24uZXhlY3V0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24iLCJydWxlIiwiYWxsb3dJc29sYXRlZCIsImFwcGx5IiwiY29udGV4dCIsInJ1bGVNYXAiLCJnZXRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJEaXJlY3RseVJlZHVjZWRSdWxlIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZXRyaWV2ZSIsInJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJleGVjdXRlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24iLCJSdWxlT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsNEJBQTRCOzs7eURBTnZCLHNCQUFzQjs2REFDaEIsNkJBQTZCO3VCQUVoQix5QkFBeUI7d0JBQ2xCLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxJQUFBLEFBQU1BLDRCQUE0QixpQkFBbEM7Y0FBTUEsNEJBQTRCOzhCQUE1QkEsNEJBQTRCO2FBQTVCQSw0QkFBNEIsQ0FDbkNDLElBQUksRUFBRUMsYUFBYTs4QkFEWkYsNEJBQTRCOztrQ0FFdkNDLElBQUksRUFBRTtRQUVaLE1BQUtDLGFBQWEsR0FBR0EsYUFBYSxDQUFDOzs7aUJBSmxCRiw0QkFBNEI7O1lBTy9DRyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO2dCQUNiLElBQU0sQUFBRUMsT0FBTyxHQUFLRCxPQUFPLENBQW5CQyxPQUFPLEFBQVksRUFDckJKLElBQUksR0FBRyxJQUFJLENBQUNLLE9BQU8sRUFBRSxFQUNyQkMsd0JBQXdCLEdBQUdDLElBQUFBLFFBQTRCLDZCQUFBLEVBQUNQLElBQUksRUFBRUcsT0FBTyxDQUFDLEVBQ3RFSyxtQkFBbUIsR0FBR0MsU0FBbUIsUUFBQSxDQUFDQyxtQ0FBbUMsQ0FBQ1YsSUFBSSxFQUFFTSx3QkFBd0IsRUFBRSxJQUFJLENBQUNMLGFBQWEsQ0FBQyxBQUFDO2dCQUV4SSxJQUFJTyxtQkFBbUIsS0FBSyxJQUFJLEVBQUU7b0JBQ2hDLElBQU1HLHVCQUF1QixHQUFHSCxtQkFBbUIsQ0FBQ0ksT0FBTyxFQUFFLEFBQUM7b0JBRTlEUixPQUFPLENBQUNPLHVCQUF1QixDQUFDLEdBQUdILG1CQUFtQixDQUFDO2dCQUN6RCxDQUFDO2dCQUVELE9BQU9BLG1CQUFtQixDQUFDO1lBQzdCLENBQUM7OztZQUVESyxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsQ0FBQ1YsT0FBTyxFQUFFO2dCQUNoQixJQUFNLEFBQUVDLE9BQU8sR0FBS0QsT0FBTyxDQUFuQkMsT0FBTyxBQUFZLEVBQ3JCSixJQUFJLEdBQUcsSUFBSSxDQUFDSyxPQUFPLEVBQUUsRUFDckJTLFFBQVEsR0FBR2QsSUFBSSxDQUFDWSxPQUFPLEVBQUUsRUFDekJELHVCQUF1QixHQUFHSSxJQUFBQSxTQUFtQyxvQ0FBQSxFQUFDRCxRQUFRLENBQUMsRUFDdkVOLG1CQUFtQixHQUFHSixPQUFPLENBQUNPLHVCQUF1QixDQUFDLElBQUksSUFBSSxBQUFDO2dCQUVyRSxPQUFPSCxtQkFBbUIsQ0FBQztZQUM3QixDQUFDOzs7O1lBRU1RLEdBQU8sRUFBUEEsU0FBTzttQkFBZCxTQUFPQSxPQUFPLENBQUNDLCtCQUErQixFQUFFaEIsYUFBYSxFQUFFRSxPQUFPLEVBQUU7Z0JBQ3RFLElBQU1ILElBQUksR0FBR2lCLCtCQUErQixDQUFDWixPQUFPLEVBQUUsRUFDaERhLDRCQUE0QixHQUFHLElBbENwQm5CLDRCQUE0QixDQWtDeUJDLElBQUksRUFBRUMsYUFBYSxDQUFDLEVBQ3BGTyxtQkFBbUIsR0FBR1UsNEJBQTRCLENBQUNGLE9BQU8sQ0FBQ2IsT0FBTyxDQUFDLEFBQUM7Z0JBRTFFLE9BQU9LLG1CQUFtQixDQUFDO1lBQzdCLENBQUM7OztXQXRDa0JULDRCQUE0QjtDQXVDaEQsQ0F2Q3lEb0IsS0FBYSxRQUFBLENBdUN0RSJ9