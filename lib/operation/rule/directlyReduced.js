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
var _rule = /*#__PURE__*/ _interop_require_default(require("../../operation/rule"));
var _directly = /*#__PURE__*/ _interop_require_default(require("../../rule/reduced/directly"));
var _context = require("../../utilities/context");
var _ruleName = require("../../utilities/ruleName");
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
var DirectlyReducedRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(DirectlyReducedRuleOperation, RuleOperation);
    var _super = _create_super(DirectlyReducedRuleOperation);
    function DirectlyReducedRuleOperation() {
        _class_call_check(this, DirectlyReducedRuleOperation);
        return _super.apply(this, arguments);
    }
    _create_class(DirectlyReducedRuleOperation, [
        {
            key: "apply",
            value: function apply(directlyLeftRecursiveDefinition, allowIsolated, context) {
                var rule = directlyLeftRecursiveDefinition.getRule(), leftRecursiveDefinitions = (0, _context.findLeftRecursiveDefinitions)(rule, context), directlyReducedRule = _directly.default.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, allowIsolated);
                if (directlyReducedRule !== null) {
                    var ruleMap = context.ruleMap, directlyReducedRuleName = directlyReducedRule.getName();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9kaXJlY3RseVJlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vcnVsZVwiO1xuaW1wb3J0IERpcmVjdGx5UmVkdWNlZFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmVkdWNlZC9kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbiBleHRlbmRzIFJ1bGVPcGVyYXRpb24ge1xuICBhcHBseShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBhbGxvd0lzb2xhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgY29udGV4dCksXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IERpcmVjdGx5UmVkdWNlZFJ1bGUuZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBhbGxvd0lzb2xhdGVkKTtcblxuICAgIGlmIChkaXJlY3RseVJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHJ1bGVNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2RpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lXSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cblxuICByZXRyaWV2ZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBhbGxvd0lzb2xhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBydWxlTWFwW2RpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBhbGxvd0lzb2xhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVPcGVyYXRpb24gPSBuZXcgRGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbihydWxlKSxcbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbi5leGVjdXRlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGFsbG93SXNvbGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbiIsImFwcGx5IiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImFsbG93SXNvbGF0ZWQiLCJjb250ZXh0IiwicnVsZSIsImdldFJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZSIsIkRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVNYXAiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZXRyaWV2ZSIsInJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJleGVjdXRlIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU9wZXJhdGlvbiIsIlJ1bGVPcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5LOytEQUNNO3VCQUVhO3dCQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQywrQkFBK0IsRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUU7Z0JBQzdELElBQU1DLE9BQU9ILGdDQUFnQ0ksT0FBTyxJQUM5Q0MsMkJBQTJCQyxJQUFBQSxxQ0FBNEIsRUFBQ0gsTUFBTUQsVUFDOURLLHNCQUFzQkMsaUJBQW1CLENBQUNDLG1DQUFtQyxDQUFDTixNQUFNRSwwQkFBMEJKO2dCQUVwSCxJQUFJTSx3QkFBd0IsSUFBSSxFQUFFO29CQUNoQyxJQUFNLEFBQUVHLFVBQVlSLFFBQVpRLFNBQ0ZDLDBCQUEwQkosb0JBQW9CSyxPQUFPO29CQUUzREYsT0FBTyxDQUFDQyx3QkFBd0IsR0FBR0o7Z0JBQ3JDLENBQUM7Z0JBRUQsT0FBT0E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTYiwrQkFBK0IsRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUU7Z0JBQ2hFLElBQU0sQUFBRVEsVUFBWVIsUUFBWlEsU0FDRlAsT0FBT0gsZ0NBQWdDSSxPQUFPLElBQzlDVSxXQUFXWCxLQUFLUyxPQUFPLElBQ3ZCRCwwQkFBMEJJLElBQUFBLDZDQUFtQyxFQUFDRCxXQUM5RFAsc0JBQXNCRyxPQUFPLENBQUNDLHdCQUF3QixJQUFJLElBQUk7Z0JBRXBFLE9BQU9KO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsUUFBUWhCLCtCQUErQixFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRTtnQkFDdEUsSUFBTUMsT0FBT0gsZ0NBQWdDSSxPQUFPLElBQzlDYSwrQkFBK0IsSUE1QnBCbkIsNkJBNEJxREssT0FDaEVJLHNCQUFzQlUsNkJBQTZCRCxPQUFPLENBQUNoQixpQ0FBaUNDLGVBQWVDO2dCQUVqSCxPQUFPSztZQUNUOzs7V0FoQ21CVDtFQUFxQ29CLGFBQWEifQ==