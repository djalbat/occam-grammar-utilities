"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImplicitlyReducedRule;
    }
});
var _occamparsers = require("occam-parsers");
var _implicitly = /*#__PURE__*/ _interop_require_default(require("../../node/reduced/implicitly"));
var _parts = require("../../utilities/parts");
var _definition = require("../../utilities/definition");
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
var ImplicitlyReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(ImplicitlyReducedRule, Rule);
    var _super = _create_super(ImplicitlyReducedRule);
    function ImplicitlyReducedRule() {
        _class_call_check(this, ImplicitlyReducedRule);
        return _super.apply(this, arguments);
    }
    _create_class(ImplicitlyReducedRule, null, [
        {
            key: "fromLeftRecursiveDefinitionAndRule",
            value: function fromLeftRecursiveDefinitionAndRule(leftRecursiveDefinition, rule) {
                var ruleName = rule.getName(), leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule(), leftRecursiveRule = leftRecursiveDefinitionRule, leftRecursiveRuleName = leftRecursiveRule.getName();
                var definitions = leftRecursiveRule.getDefinitions();
                definitions = definitions.reduce(function(definitions, definition) {
                    var definitionDirectlyLeftRecursive = (0, _definition.isDefinitionDirectlyLeftRecursive)(definition, leftRecursiveRuleName);
                    if (!definitionDirectlyLeftRecursive) {
                        var parts = definition.getParts();
                        (0, _parts.cloneParts)(parts);
                        definition = new _occamparsers.Definition(parts); ///
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var implicitlyReducedRuleName = (0, _ruleName.implicitlyReducedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), name = implicitlyReducedRuleName, ambiguous = false, NonTerminalNode = _implicitly.default, implicitlyReducedRule = new ImplicitlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
                return implicitlyReducedRule;
            }
        }
    ]);
    return ImplicitlyReducedRule;
}(_occamparsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvaW1wbGljaXRseS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSwgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBJbXBsaWNpdGx5UmVkdWNlZE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcmVkdWNlZC9pbXBsaWNpdGx5XCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcbmltcG9ydCB7IGltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcGxpY2l0bHlSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kUnVsZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcnVsZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlLCAgLy8vXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICAgIGNsb25lUGFydHMocGFydHMpO1xuXG4gICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7IC8vL1xuXG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lID0gaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gSW1wbGljaXRseVJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW1wbGljaXRseVJlZHVjZWRSdWxlID0gbmV3IEltcGxpY2l0bHlSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlSZWR1Y2VkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbXBsaWNpdGx5UmVkdWNlZFJ1bGUiLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlIiwiZ2V0UnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInJlZHVjZSIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwicGFydHMiLCJnZXRQYXJ0cyIsImNsb25lUGFydHMiLCJEZWZpbml0aW9uIiwicHVzaCIsImltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWUiLCJpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkltcGxpY2l0bHlSZWR1Y2VkTm9kZSIsImltcGxpY2l0bHlSZWR1Y2VkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzRCQVJZO2lFQUVDO3FCQUVQOzBCQUN1Qjt3QkFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0QsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLHVCQUF1QixFQUFFQyxJQUFJLEVBQUU7Z0JBQ3ZFLElBQU1DLFdBQVdELEtBQUtFLE9BQU8sSUFDdkJDLDhCQUE4Qkosd0JBQXdCSyxPQUFPLElBQzdEQyxvQkFBb0JGLDZCQUNwQkcsd0JBQXdCRCxrQkFBa0JILE9BQU87Z0JBRXZELElBQUlLLGNBQWNGLGtCQUFrQkcsY0FBYztnQkFFbERELGNBQWNBLFlBQVlFLE1BQU0sQ0FBQyxTQUFDRixhQUFhRyxZQUFlO29CQUM1RCxJQUFNQyxrQ0FBa0NDLElBQUFBLDZDQUFpQyxFQUFDRixZQUFZSjtvQkFFdEYsSUFBSSxDQUFDSyxpQ0FBaUM7d0JBQ3BDLElBQU1FLFFBQVFILFdBQVdJLFFBQVE7d0JBRWpDQyxJQUFBQSxpQkFBVSxFQUFDRjt3QkFFWEgsYUFBYSxJQUFJTSx3QkFBVSxDQUFDSCxRQUFRLEdBQUc7d0JBRXZDTixZQUFZVSxJQUFJLENBQUNQO29CQUNuQixDQUFDO29CQUVELE9BQU9IO2dCQUNULEdBQUcsRUFBRTtnQkFFTCxJQUFNVyw0QkFBNEJDLElBQUFBLHVFQUE2RCxFQUFDbEIsVUFBVUssd0JBQ3BHYyxPQUFPRiwyQkFDUEcsWUFBWSxLQUFLLEVBQ2pCQyxrQkFBa0JDLG1CQUFxQixFQUN2Q0Msd0JBQXdCLElBN0JiM0Isc0JBNkJ1Q3VCLE1BQU1DLFdBQVdkLGFBQWFlO2dCQUV0RixPQUFPRTtZQUNUOzs7V0FoQ21CM0I7RUFBOEI0QixrQkFBSSJ9