"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyReduceRuleOperation;
    }
});
var _ruleOperation = /*#__PURE__*/ _interopRequireDefault(require("../ruleOperation"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../rule/reduced/indirectly"));
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
var IndirectlyReduceRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(IndirectlyReduceRuleOperation, RuleOperation);
    var _super = _createSuper(IndirectlyReduceRuleOperation);
    function IndirectlyReduceRuleOperation() {
        _classCallCheck(this, IndirectlyReduceRuleOperation);
        return _super.apply(this, arguments);
    }
    _createClass(IndirectlyReduceRuleOperation, [
        {
            key: "apply",
            value: function apply(context) {
                var ruleMap = context.ruleMap, indirectlyLeftRecursiveDefinitions = context.indirectlyLeftRecursiveDefinitions, rule = this.getRule(), indirectlyReducedRule = _indirectly.default.fromRuleAndIndirectlyLeftRecursiveDefinitions(rule, indirectlyLeftRecursiveDefinitions);
                if (indirectlyReducedRule !== null) {
                    var indirectlyReducedRuleName = indirectlyReducedRule.getName();
                    ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;
                }
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), ruleName = rule.getName(), indirectlyReducedRuleName = (0, _ruleName.indirectlyReducedRuleNameFromRuleName)(ruleName), indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null;
                return indirectlyReducedRule;
            }
        },
        {
            key: "compare",
            value: function compare(indirectlyReduceRuleOperation) {
                var rule = this.getRule(), indirectlyReduceRuleOperationRule = indirectlyReduceRuleOperation.getRule(), comparesTo = rule === indirectlyReduceRuleOperationRule;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), indirectlyReduceRuleOperation = new IndirectlyReduceRuleOperation(rule), indirectlyReducedRule = indirectlyReduceRuleOperation.execute(context);
                return indirectlyReducedRule;
            }
        }
    ]);
    return IndirectlyReduceRuleOperation;
}(_ruleOperation.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlT3BlcmF0aW9uL2luZGlyZWN0bHlSZWR1Y2VSdWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU9wZXJhdGlvbiBmcm9tIFwiLi4vcnVsZU9wZXJhdGlvblwiO1xuaW1wb3J0IEluZGlyZWN0bHlSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vcnVsZS9yZWR1Y2VkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24gZXh0ZW5kcyBSdWxlT3BlcmF0aW9uIHtcbiAgYXBwbHkoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlID0gSW5kaXJlY3RseVJlZHVjZWRSdWxlLmZyb21SdWxlQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2luZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVdID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlO1xuICAgIH1cbiAgfVxuXG4gIHJldHJpZXZlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJ1bGVNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IHJ1bGVNYXBbaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cblxuICBjb21wYXJlKGluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uUnVsZSA9IGluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gKHJ1bGUgPT09IGluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uUnVsZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uID0gbmV3IEluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uKHJ1bGUpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IGluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uLmV4ZWN1dGUoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uIiwiYXBwbHkiLCJjb250ZXh0IiwicnVsZU1hcCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlIiwiZ2V0UnVsZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsIkluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImZyb21SdWxlQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJnZXROYW1lIiwicmV0cmlldmUiLCJydWxlTmFtZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJjb21wYXJlIiwiaW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24iLCJpbmRpcmVjdGx5UmVkdWNlUnVsZU9wZXJhdGlvblJ1bGUiLCJjb21wYXJlc1RvIiwiZXhlY3V0ZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJ1bGVPcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU9RQSw2QkFBNkI7OztrRUFMeEIsa0JBQWtCOytEQUNWLDRCQUE0Qjt3QkFFUix1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUQsSUFBQSxBQUFNQSw2QkFBNkIsaUJBQW5DO2NBQU1BLDZCQUE2Qjs4QkFBN0JBLDZCQUE2QjthQUE3QkEsNkJBQTZCOzhCQUE3QkEsNkJBQTZCOzs7aUJBQTdCQSw2QkFBNkI7O1lBQ2hEQyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO2dCQUNiLElBQVFDLE9BQU8sR0FBeUNELE9BQU8sQ0FBdkRDLE9BQU8sRUFBRUMsa0NBQWtDLEdBQUtGLE9BQU8sQ0FBOUNFLGtDQUFrQyxFQUM3Q0MsSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUFFLEVBQ3JCQyxxQkFBcUIsR0FBR0MsV0FBcUIsUUFBQSxDQUFDQyw2Q0FBNkMsQ0FBQ0osSUFBSSxFQUFFRCxrQ0FBa0MsQ0FBQyxBQUFDO2dCQUU1SSxJQUFJRyxxQkFBcUIsS0FBSyxJQUFJLEVBQUU7b0JBQ2xDLElBQU1HLHlCQUF5QixHQUFHSCxxQkFBcUIsQ0FBQ0ksT0FBTyxFQUFFLEFBQUM7b0JBRWxFUixPQUFPLENBQUNPLHlCQUF5QixDQUFDLEdBQUdILHFCQUFxQixDQUFDO2dCQUM3RCxDQUFDO1lBQ0gsQ0FBQzs7O1lBRURLLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDVixPQUFPLEVBQUU7Z0JBQ2hCLElBQU0sQUFBRUMsT0FBTyxHQUFLRCxPQUFPLENBQW5CQyxPQUFPLEFBQVksRUFDckJFLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUNyQk8sUUFBUSxHQUFHUixJQUFJLENBQUNNLE9BQU8sRUFBRSxFQUN6QkQseUJBQXlCLEdBQUdJLElBQUFBLFNBQXFDLHNDQUFBLEVBQUNELFFBQVEsQ0FBQyxFQUMzRU4scUJBQXFCLEdBQUdKLE9BQU8sQ0FBQ08seUJBQXlCLENBQUMsSUFBSSxJQUFJLEFBQUM7Z0JBRXpFLE9BQU9ILHFCQUFxQixDQUFDO1lBQy9CLENBQUM7OztZQUVEUSxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsNkJBQTZCLEVBQUU7Z0JBQ3JDLElBQU1YLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUNyQlcsaUNBQWlDLEdBQUdELDZCQUE2QixDQUFDVixPQUFPLEVBQUUsRUFDM0VZLFVBQVUsR0FBSWIsSUFBSSxLQUFLWSxpQ0FBaUMsQUFBQyxBQUFDO2dCQUVoRSxPQUFPQyxVQUFVLENBQUM7WUFDcEIsQ0FBQzs7OztZQUVNQyxHQUFPLEVBQVBBLFNBQU87bUJBQWQsU0FBT0EsT0FBTyxDQUFDQyxpQ0FBaUMsRUFBRWxCLE9BQU8sRUFBRTtnQkFDekQsSUFBTUcsSUFBSSxHQUFHZSxpQ0FBaUMsQ0FBQ2QsT0FBTyxFQUFFLEVBQ2xEVSw2QkFBNkIsR0FBRyxJQWpDckJoQiw2QkFBNkIsQ0FpQzBCSyxJQUFJLENBQUMsRUFDdkVFLHFCQUFxQixHQUFHUyw2QkFBNkIsQ0FBQ0csT0FBTyxDQUFDakIsT0FBTyxDQUFDLEFBQUM7Z0JBRTdFLE9BQU9LLHFCQUFxQixDQUFDO1lBQy9CLENBQUM7OztXQXJDa0JQLDZCQUE2QjtDQXNDakQsQ0F0QzBEcUIsY0FBYSxRQUFBLENBc0N2RSJ9