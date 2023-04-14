"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImplicitlyReducedRuleOperation;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../operation/rule"));
var _implicitly = /*#__PURE__*/ _interop_require_default(require("../../rule/reduced/implicitly"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var ImplicitlyReducedRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(ImplicitlyReducedRuleOperation, RuleOperation);
    var _super = _create_super(ImplicitlyReducedRuleOperation);
    function ImplicitlyReducedRuleOperation(leftRecursiveDefinition, rule) {
        _class_call_check(this, ImplicitlyReducedRuleOperation);
        var _this;
        _this = _super.call(this, rule);
        _this.leftRecursiveDefinition = leftRecursiveDefinition;
        return _this;
    }
    _create_class(ImplicitlyReducedRuleOperation, [
        {
            key: "getLeftRecursiveDefinition",
            value: function getLeftRecursiveDefinition() {
                return this.leftRecursiveDefinition;
            }
        },
        {
            key: "compare",
            value: function compare(implicitlyReducedRuleOperation) {
                var comparesTo = false; ///
                return comparesTo;
            }
        },
        {
            key: "apply",
            value: function apply(leftRecursiveDefinition, rule, context) {
                var ruleMap = context.ruleMap, implicitlyReducedRule = _implicitly.default.fromLeftRecursiveDefinitionAndRule(leftRecursiveDefinition, rule), implicitlyReducedRuleName = implicitlyReducedRule.getName();
                ruleMap[implicitlyReducedRuleName] = implicitlyReducedRule;
                return implicitlyReducedRule;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(leftRecursiveDefinition, rule, context) {
                var implicitlyReducedRule = null;
                return implicitlyReducedRule;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(leftRecursiveDefinition, rule, context) {
                var implicitlyReducedRuleOperation = new ImplicitlyReducedRuleOperation(leftRecursiveDefinition, rule), implicitlyReducedRule = implicitlyReducedRuleOperation.execute(leftRecursiveDefinition, rule, context);
                return implicitlyReducedRule;
            }
        }
    ]);
    return ImplicitlyReducedRuleOperation;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9pbXBsaWNpdGx5UmVkdWNlZC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVPcGVyYXRpb24gZnJvbSBcIi4uLy4uL29wZXJhdGlvbi9ydWxlXCI7XG5pbXBvcnQgSW1wbGljaXRseVJlZHVjZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlZHVjZWQvaW1wbGljaXRseVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbXBsaWNpdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24gZXh0ZW5kcyBSdWxlT3BlcmF0aW9uIHtcbiAgY29uc3RydWN0b3IobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHJ1bGUpIHtcbiAgICBzdXBlcihydWxlKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgY29tcGFyZShpbXBsaWNpdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24pIHtcbiAgICBjb25zdCBjb21wYXJlc1RvID0gZmFsc2U7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBhcHBseShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcnVsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBpbXBsaWNpdGx5UmVkdWNlZFJ1bGUgPSBJbXBsaWNpdGx5UmVkdWNlZFJ1bGUuZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kUnVsZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcnVsZSksXG4gICAgICAgICAgaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZSA9IGltcGxpY2l0bHlSZWR1Y2VkUnVsZS5nZXROYW1lKCk7XG5cbiAgICBydWxlTWFwW2ltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWVdID0gaW1wbGljaXRseVJlZHVjZWRSdWxlO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlSZWR1Y2VkUnVsZTtcbiAgfVxuXG4gIHJldHJpZXZlKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBydWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW1wbGljaXRseVJlZHVjZWRSdWxlID0gbnVsbDtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5UmVkdWNlZFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcnVsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbiA9IG5ldyBJbXBsaWNpdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHJ1bGUpLFxuICAgICAgICAgIGltcGxpY2l0bHlSZWR1Y2VkUnVsZSA9IGltcGxpY2l0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbi5leGVjdXRlKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBydWxlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW1wbGljaXRseVJlZHVjZWRSdWxlT3BlcmF0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJjb21wYXJlIiwiaW1wbGljaXRseVJlZHVjZWRSdWxlT3BlcmF0aW9uIiwiY29tcGFyZXNUbyIsImFwcGx5IiwiY29udGV4dCIsInJ1bGVNYXAiLCJpbXBsaWNpdGx5UmVkdWNlZFJ1bGUiLCJJbXBsaWNpdGx5UmVkdWNlZFJ1bGUiLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSdWxlIiwiaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZXRyaWV2ZSIsImV4ZWN1dGUiLCJSdWxlT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyREFISztpRUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLCtDQUFOO2NBQU1BOytCQUFBQTthQUFBQSwrQkFDUEMsdUJBQXVCLEVBQUVDLElBQUk7Z0NBRHRCRjs7a0NBRVhFO1FBRU4sTUFBS0QsdUJBQXVCLEdBQUdBOzs7a0JBSmREOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QjtnQkFDM0IsT0FBTyxJQUFJLENBQUNGLHVCQUF1QjtZQUNyQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyw4QkFBOEIsRUFBRTtnQkFDdEMsSUFBTUMsYUFBYSxLQUFLLEVBQUUsR0FBRztnQkFFN0IsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNTix1QkFBdUIsRUFBRUMsSUFBSSxFQUFFTSxPQUFPLEVBQUU7Z0JBQzVDLElBQU0sQUFBRUMsVUFBWUQsUUFBWkMsU0FDRkMsd0JBQXdCQyxtQkFBcUIsQ0FBQ0Msa0NBQWtDLENBQUNYLHlCQUF5QkMsT0FDMUdXLDRCQUE0Qkgsc0JBQXNCSSxPQUFPO2dCQUUvREwsT0FBTyxDQUFDSSwwQkFBMEIsR0FBR0g7Z0JBRXJDLE9BQU9BO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU2QsdUJBQXVCLEVBQUVDLElBQUksRUFBRU0sT0FBTyxFQUFFO2dCQUMvQyxJQUFNRSx3QkFBd0IsSUFBSTtnQkFFbEMsT0FBT0E7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxRQUFRZix1QkFBdUIsRUFBRUMsSUFBSSxFQUFFTSxPQUFPLEVBQUU7Z0JBQ3JELElBQU1ILGlDQUFpQyxJQWxDdEJMLCtCQWtDeURDLHlCQUF5QkMsT0FDN0ZRLHdCQUF3QkwsK0JBQStCVyxPQUFPLENBQUNmLHlCQUF5QkMsTUFBTU07Z0JBRXBHLE9BQU9FO1lBQ1Q7OztXQXRDbUJWO0VBQXVDaUIsYUFBYSJ9