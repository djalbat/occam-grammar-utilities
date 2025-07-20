"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReducedRule;
    }
});
var _occamparsers = require("occam-parsers");
var _reduced = /*#__PURE__*/ _interop_require_default(require("../node/reduced"));
var _directedGraph = require("../directedGraph");
var _cycle = require("../utilities/cycle");
var _ruleName = require("../utilities/ruleName");
var _leftRecursive = require("../utilities/leftRecursive");
var _directedGraph1 = require("../utilities/directedGraph");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(ReducedRule, Rule);
    function ReducedRule() {
        _class_call_check(this, ReducedRule);
        return _call_super(this, ReducedRule, arguments);
    }
    _create_class(ReducedRule, [
        {
            key: "NonTerminalNodeFromRuleName",
            value: function NonTerminalNodeFromRuleName(ruleName, state) {
                var NonTerminalNode = _reduced.default;
                return NonTerminalNode;
            }
        }
    ], [
        {
            key: "fromRuleAndCycles",
            value: function fromRuleAndCycles(rule, cycles, ruleMap) {
                var ruleName = rule.getName();
                var reducedRule = null, definitions = rule.getDefinitions();
                definitions = definitions.filter(function(definition) {
                    var definitionLeftReducible = isDefinitionReducible(definition, ruleName, cycles, ruleMap);
                    if (definitionLeftReducible) {
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength > 0) {
                    var ruleName1 = rule.getName(), reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName1), name = reducedRuleName, opacity = rule.getOpacity();
                    reducedRule = new ReducedRule(name, opacity, definitions);
                }
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamparsers.Rule);
function isDefinitionReducible(definition, ruleName, cycles, ruleMap) {
    var leftRecursiveRuleNames = (0, _leftRecursive.leftRecursiveRuleNamesFromDefinition)(definition, ruleMap), definitionReducible = leftRecursiveRuleNames.every(function(leftRecursiveRuleName) {
        var cyclesIncludeRuleNameAndLeftRecursiveRuleName = cycles.some(function(cycle) {
            var cycleIncludesRuleNameAndLeftRecursiveRuleName = doesCycleIncludeRuleNameAndLeftRecursiveRuleName(cycle, ruleName, leftRecursiveRuleName);
            if (cycleIncludesRuleNameAndLeftRecursiveRuleName) {
                return true;
            }
        });
        if (!cyclesIncludeRuleNameAndLeftRecursiveRuleName) {
            return true;
        }
    });
    return definitionReducible;
}
function doesCycleIncludeRuleNameAndLeftRecursiveRuleName(cycle, ruleName, leftRecursiveRuleName) {
    var ruleNames = (0, _cycle.ruleNamesFromCycle)(cycle), edge = (0, _directedGraph1.edgeFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), edges = (0, _directedGraph1.edgesFromRuleNames)(ruleNames), matches = (0, _directedGraph.edgesMatchEdge)(edges, edge), cycleIncludesRuleNameAndLeftRecursiveRuleName = matches; ///
    return cycleIncludesRuleNameAndLeftRecursiveRuleName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuXG5pbXBvcnQgeyBlZGdlc01hdGNoRWRnZSB9IGZyb20gXCIuLi9kaXJlY3RlZEdyYXBoXCI7XG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tQ3ljbGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N5Y2xlXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2xlZnRSZWN1cnNpdmVcIjtcbmltcG9ydCB7IGVkZ2VzRnJvbVJ1bGVOYW1lcywgZWRnZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBOb25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUocnVsZU5hbWUsIHN0YXRlKSB7XG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGU7XG5cbiAgICByZXR1cm4gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcywgcnVsZU1hcCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgcmVkdWNlZFJ1bGUgPSBudWxsLFxuICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlZHVjaWJsZSA9IGlzRGVmaW5pdGlvblJlZHVjaWJsZShkZWZpbml0aW9uLCBydWxlTmFtZSwgY3ljbGVzLCBydWxlTWFwKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25MZWZ0UmVkdWNpYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG5hbWUgPSByZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgb3BhY2l0eSA9IHJ1bGUuZ2V0T3BhY2l0eSgpO1xuXG4gICAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvblJlZHVjaWJsZShkZWZpbml0aW9uLCBydWxlTmFtZSwgY3ljbGVzLCBydWxlTWFwKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgcnVsZU1hcCksXG4gICAgICAgIGRlZmluaXRpb25SZWR1Y2libGUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBjeWNsZXNJbmNsdWRlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBjeWNsZXMuc29tZSgoY3ljbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGRvZXNDeWNsZUluY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShjeWNsZSwgcnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChjeWNsZUluY2x1ZGVzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoIWN5Y2xlc0luY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVmaW5pdGlvblJlZHVjaWJsZTtcbn1cblxuZnVuY3Rpb24gZG9lc0N5Y2xlSW5jbHVkZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGN5Y2xlLCBydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSksXG4gICAgICAgIGVkZ2UgPSBlZGdlRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVJ1bGVOYW1lcyhydWxlTmFtZXMpLFxuICAgICAgICBtYXRjaGVzID0gZWRnZXNNYXRjaEVkZ2UoZWRnZXMsIGVkZ2UpLFxuICAgICAgICBjeWNsZUluY2x1ZGVzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBtYXRjaGVzOyAgLy8vXG5cbiAgcmV0dXJuIGN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJSZWR1Y2VkUnVsZSIsIk5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZSIsInJ1bGVOYW1lIiwic3RhdGUiLCJOb25UZXJtaW5hbE5vZGUiLCJSZWR1Y2VkTm9kZSIsImZyb21SdWxlQW5kQ3ljbGVzIiwicnVsZSIsImN5Y2xlcyIsInJ1bGVNYXAiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVkdWNpYmxlIiwiaXNEZWZpbml0aW9uUmVkdWNpYmxlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwib3BhY2l0eSIsImdldE9wYWNpdHkiLCJSdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImRlZmluaXRpb25SZWR1Y2libGUiLCJldmVyeSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImN5Y2xlc0luY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInNvbWUiLCJjeWNsZSIsImN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRvZXNDeWNsZUluY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZSIsImVkZ2UiLCJlZGdlRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZWRnZXMiLCJlZGdlc0Zyb21SdWxlTmFtZXMiLCJtYXRjaGVzIiwiZWRnZXNNYXRjaEVkZ2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzRCQVZBOzhEQUVHOzZCQUVPO3FCQUNJO3dCQUNTOzZCQUNTOzhCQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RCxJQUFBLEFBQU1BLDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxRQUFRLEVBQUVDLEtBQUs7Z0JBQ3pDLElBQU1DLGtCQUFrQkMsZ0JBQVc7Z0JBRW5DLE9BQU9EO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDNUMsSUFBTVAsV0FBV0ssS0FBS0csT0FBTztnQkFFN0IsSUFBSUMsY0FBYyxNQUNkQyxjQUFjTCxLQUFLTSxjQUFjO2dCQUVyQ0QsY0FBY0EsWUFBWUUsTUFBTSxDQUFDLFNBQUNDO29CQUNoQyxJQUFNQywwQkFBMEJDLHNCQUFzQkYsWUFBWWIsVUFBVU0sUUFBUUM7b0JBRXBGLElBQUlPLHlCQUF5Qjt3QkFDM0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFNRSxvQkFBb0JOLFlBQVlPLE1BQU07Z0JBRTVDLElBQUlELG9CQUFvQixHQUFHO29CQUN6QixJQUFNaEIsWUFBV0ssS0FBS0csT0FBTyxJQUN2QlUsa0JBQWtCQyxJQUFBQSxxQ0FBMkIsRUFBQ25CLFlBQzlDb0IsT0FBT0YsaUJBQ1BHLFVBQVVoQixLQUFLaUIsVUFBVTtvQkFFL0JiLGNBQWMsSUE3QkNYLFlBNkJlc0IsTUFBTUMsU0FBU1g7Z0JBQy9DO2dCQUVBLE9BQU9EO1lBQ1Q7OztXQWpDbUJYO0VBQW9CeUIsa0JBQUk7QUFvQzdDLFNBQVNSLHNCQUFzQkYsVUFBVSxFQUFFYixRQUFRLEVBQUVNLE1BQU0sRUFBRUMsT0FBTztJQUNsRSxJQUFNaUIseUJBQXlCQyxJQUFBQSxtREFBb0MsRUFBQ1osWUFBWU4sVUFDMUVtQixzQkFBc0JGLHVCQUF1QkcsS0FBSyxDQUFDLFNBQUNDO1FBQ2xELElBQU1DLGdEQUFnRHZCLE9BQU93QixJQUFJLENBQUMsU0FBQ0M7WUFDakUsSUFBTUMsZ0RBQWdEQyxpREFBaURGLE9BQU8vQixVQUFVNEI7WUFFeEgsSUFBSUksK0NBQStDO2dCQUNqRCxPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQUksQ0FBQ0gsK0NBQStDO1lBQ2xELE9BQU87UUFDVDtJQUNGO0lBRU4sT0FBT0g7QUFDVDtBQUVBLFNBQVNPLGlEQUFpREYsS0FBSyxFQUFFL0IsUUFBUSxFQUFFNEIscUJBQXFCO0lBQzlGLElBQU1NLFlBQVlDLElBQUFBLHlCQUFrQixFQUFDSixRQUMvQkssT0FBT0MsSUFBQUEsd0RBQXdDLEVBQUNyQyxVQUFVNEIsd0JBQzFEVSxRQUFRQyxJQUFBQSxrQ0FBa0IsRUFBQ0wsWUFDM0JNLFVBQVVDLElBQUFBLDZCQUFjLEVBQUNILE9BQU9GLE9BQ2hDSixnREFBZ0RRLFNBQVUsR0FBRztJQUVuRSxPQUFPUjtBQUNUIn0=