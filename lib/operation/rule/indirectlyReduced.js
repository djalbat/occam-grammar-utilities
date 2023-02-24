"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyReducedRuleOperation;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../../operation/rule"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../rule/reduced/indirectly"));
var _ruleName = require("../../utilities/ruleName");
var _context = require("../../utilities/context");
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
var IndirectlyReducedRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(IndirectlyReducedRuleOperation, RuleOperation);
    var _super = _createSuper(IndirectlyReducedRuleOperation);
    function IndirectlyReducedRuleOperation() {
        _classCallCheck(this, IndirectlyReducedRuleOperation);
        return _super.apply(this, arguments);
    }
    _createClass(IndirectlyReducedRuleOperation, [
        {
            key: "apply",
            value: function apply(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, context), indirectlyReducedRule = _indirectly.default.fromRuleAndIndirectlyLeftRecursiveDefinitions(rule, indirectlyLeftRecursiveDefinitions);
                if (indirectlyReducedRule !== null) {
                    var ruleMap = context.ruleMap, indirectlyReducedRuleName = indirectlyReducedRule.getName();
                    ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;
                }
                return indirectlyReducedRule;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(indirectlyLeftRecursiveDefinition, context) {
                var ruleMap = context.ruleMap, rule = indirectlyLeftRecursiveDefinition.getRule(), ruleName = rule.getName(), indirectlyReducedRuleName = (0, _ruleName.indirectlyReducedRuleNameFromRuleName)(ruleName), indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null;
                return indirectlyReducedRule;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), indirectlyReducedRuleOperation = new IndirectlyReducedRuleOperation(rule), indirectlyReducedRule = indirectlyReducedRuleOperation.execute(indirectlyLeftRecursiveDefinition, context);
                return indirectlyReducedRule;
            }
        }
    ]);
    return IndirectlyReducedRuleOperation;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9pbmRpcmVjdGx5UmVkdWNlZC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVPcGVyYXRpb24gZnJvbSBcIi4uLy4uL29wZXJhdGlvbi9ydWxlXCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlZHVjZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlZHVjZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlZHVjZWRSdWxlT3BlcmF0aW9uIGV4dGVuZHMgUnVsZU9wZXJhdGlvbiB7XG4gIGFwcGx5KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBJbmRpcmVjdGx5UmVkdWNlZFJ1bGUuZnJvbVJ1bGVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHJ1bGVNYXBbaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgfVxuXG4gIHJldHJpZXZlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBydWxlTWFwW2luZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlT3BlcmF0aW9uID0gbmV3IEluZGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbihydWxlKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24uZXhlY3V0ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24iLCJhcHBseSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImNvbnRleHQiLCJydWxlIiwiZ2V0UnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsIkluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImZyb21SdWxlQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVNYXAiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJldHJpZXZlIiwicnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZXhlY3V0ZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbiIsIlJ1bGVPcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lEQU5LOytEQUNRO3dCQUVvQjt1QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1BLCtDQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsaUNBQWlDLEVBQUVDLE9BQU8sRUFBRTtnQkFDaEQsSUFBTUMsT0FBT0Ysa0NBQWtDRyxPQUFPLElBQ2hEQyxxQ0FBcUNDLElBQUFBLCtDQUFzQyxFQUFDSCxNQUFNRCxVQUNsRkssd0JBQXdCQyxtQkFBcUIsQ0FBQ0MsNkNBQTZDLENBQUNOLE1BQU1FO2dCQUV4RyxJQUFJRSwwQkFBMEIsSUFBSSxFQUFFO29CQUNsQyxJQUFNLEFBQUVHLFVBQVlSLFFBQVpRLFNBQ0ZDLDRCQUE0Qkosc0JBQXNCSyxPQUFPO29CQUUvREYsT0FBTyxDQUFDQywwQkFBMEIsR0FBR0o7Z0JBQ3ZDLENBQUM7Z0JBRUQsT0FBT0E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTWixpQ0FBaUMsRUFBRUMsT0FBTyxFQUFFO2dCQUNuRCxJQUFNLEFBQUVRLFVBQVlSLFFBQVpRLFNBQ0ZQLE9BQU9GLGtDQUFrQ0csT0FBTyxJQUNoRFUsV0FBV1gsS0FBS1MsT0FBTyxJQUN2QkQsNEJBQTRCSSxJQUFBQSwrQ0FBcUMsRUFBQ0QsV0FDbEVQLHdCQUF3QkcsT0FBTyxDQUFDQywwQkFBMEIsSUFBSSxJQUFJO2dCQUV4RSxPQUFPSjtZQUNUOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLFFBQVFmLGlDQUFpQyxFQUFFQyxPQUFPLEVBQUU7Z0JBQ3pELElBQU1DLE9BQU9GLGtDQUFrQ0csT0FBTyxJQUNoRGEsaUNBQWlDLElBNUJ0QmxCLCtCQTRCeURJLE9BQ3BFSSx3QkFBd0JVLCtCQUErQkQsT0FBTyxDQUFDZixtQ0FBbUNDO2dCQUV4RyxPQUFPSztZQUNUOzs7V0FoQ21CUjtFQUF1Q21CLGFBQWEifQ==