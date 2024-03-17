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
var _ruleNames = require("../utilities/ruleNames");
var _ruleName = require("../utilities/ruleName");
var _definition = require("../utilities/definition");
var _directedGraph1 = require("../utilities/directedGraph");
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
var ReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(ReducedRule, Rule);
    var _super = _create_super(ReducedRule);
    function ReducedRule() {
        _class_call_check(this, ReducedRule);
        return _super.apply(this, arguments);
    }
    _create_class(ReducedRule, null, [
        {
            key: "fromRuleAndCycles",
            value: function fromRuleAndCycles(rule, cycles) {
                var ruleName = rule.getName();
                var reducedRule = null, definitions = rule.getDefinitions();
                definitions = definitions.filter(function(definition) {
                    var definitionLeftReducible = isDefinitionReducible(definition, ruleName, cycles);
                    if (definitionLeftReducible) {
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength > 0) {
                    var ruleName1 = rule.getName(), reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName1), name = reducedRuleName, opacity = rule.getOpacity(), NonTerminalNode = _reduced.default; ///
                    reducedRule = new ReducedRule(name, opacity, definitions, NonTerminalNode);
                }
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamparsers.Rule);
function isDefinitionReducible(definition, ruleName, cycles) {
    var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), definitionReducible = leftRecursiveRuleNames.every(function(leftRecursiveRuleName) {
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
    var ruleNames = (0, _ruleNames.ruleNamesFromCycle)(cycle), edge = (0, _directedGraph1.edgeFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), edges = (0, _directedGraph1.edgesFromRuleNames)(ruleNames), matches = (0, _directedGraph.edgesMatchEdge)(edges, edge), cycleIncludesRuleNameAndLeftRecursiveRuleName = matches; ///
    return cycleIncludesRuleNameAndLeftRecursiveRuleName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuXG5pbXBvcnQgeyBlZGdlc01hdGNoRWRnZSB9IGZyb20gXCIuLi9kaXJlY3RlZEdyYXBoXCI7XG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tQ3ljbGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21SdWxlTmFtZXMsIGVkZ2VGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RpcmVjdGVkR3JhcGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgcmVkdWNlZFJ1bGUgPSBudWxsLFxuICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlZHVjaWJsZSA9IGlzRGVmaW5pdGlvblJlZHVjaWJsZShkZWZpbml0aW9uLCBydWxlTmFtZSwgY3ljbGVzKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25MZWZ0UmVkdWNpYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG5hbWUgPSByZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgb3BhY2l0eSA9IHJ1bGUuZ2V0T3BhY2l0eSgpLFxuICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGU7ICAvLy9cblxuICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvblJlZHVjaWJsZShkZWZpbml0aW9uLCBydWxlTmFtZSwgY3ljbGVzKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgIGRlZmluaXRpb25SZWR1Y2libGUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBjeWNsZXNJbmNsdWRlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBjeWNsZXMuc29tZSgoY3ljbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGRvZXNDeWNsZUluY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShjeWNsZSwgcnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChjeWNsZUluY2x1ZGVzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoIWN5Y2xlc0luY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVmaW5pdGlvblJlZHVjaWJsZTtcbn1cblxuZnVuY3Rpb24gZG9lc0N5Y2xlSW5jbHVkZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGN5Y2xlLCBydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSksXG4gICAgICAgIGVkZ2UgPSBlZGdlRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVJ1bGVOYW1lcyhydWxlTmFtZXMpLFxuICAgICAgICBtYXRjaGVzID0gZWRnZXNNYXRjaEVkZ2UoZWRnZXMsIGVkZ2UpLFxuICAgICAgICBjeWNsZUluY2x1ZGVzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBtYXRjaGVzOyAgLy8vXG5cbiAgcmV0dXJuIGN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJSZWR1Y2VkUnVsZSIsImZyb21SdWxlQW5kQ3ljbGVzIiwicnVsZSIsImN5Y2xlcyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlZHVjaWJsZSIsImlzRGVmaW5pdGlvblJlZHVjaWJsZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsIm9wYWNpdHkiLCJnZXRPcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJSdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImRlZmluaXRpb25SZWR1Y2libGUiLCJldmVyeSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImN5Y2xlc0luY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInNvbWUiLCJjeWNsZSIsImN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRvZXNDeWNsZUluY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZSIsImVkZ2UiLCJlZGdlRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZWRnZXMiLCJlZGdlc0Zyb21SdWxlTmFtZXMiLCJtYXRjaGVzIiwiZWRnZXNNYXRjaEVkZ2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzRCQVZBOzhEQUVHOzZCQUVPO3lCQUNJO3dCQUNTOzBCQUNTOzhCQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RCxJQUFBLEFBQU1BLDRCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLFdBQVdGLEtBQUtHLE9BQU87Z0JBRTdCLElBQUlDLGNBQWMsTUFDZEMsY0FBY0wsS0FBS00sY0FBYztnQkFFckNELGNBQWNBLFlBQVlFLE1BQU0sQ0FBQyxTQUFDQztvQkFDaEMsSUFBTUMsMEJBQTBCQyxzQkFBc0JGLFlBQVlOLFVBQVVEO29CQUU1RSxJQUFJUSx5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBTUUsb0JBQW9CTixZQUFZTyxNQUFNO2dCQUU1QyxJQUFJRCxvQkFBb0IsR0FBRztvQkFDekIsSUFBTVQsWUFBV0YsS0FBS0csT0FBTyxJQUN2QlUsa0JBQWtCQyxJQUFBQSxxQ0FBMkIsRUFBQ1osWUFDOUNhLE9BQU9GLGlCQUNQRyxVQUFVaEIsS0FBS2lCLFVBQVUsSUFDekJDLGtCQUFrQkMsZ0JBQVcsRUFBRyxHQUFHO29CQUV6Q2YsY0FBYyxJQXhCQ04sWUF3QmVpQixNQUFNQyxTQUFTWCxhQUFhYTtnQkFDNUQ7Z0JBRUEsT0FBT2Q7WUFDVDs7O1dBNUJtQk47RUFBb0JzQixrQkFBSTtBQStCN0MsU0FBU1Ysc0JBQXNCRixVQUFVLEVBQUVOLFFBQVEsRUFBRUQsTUFBTTtJQUN6RCxJQUFNb0IseUJBQXlCQyxJQUFBQSxnREFBb0MsRUFBQ2QsYUFDOURlLHNCQUFzQkYsdUJBQXVCRyxLQUFLLENBQUMsU0FBQ0M7UUFDbEQsSUFBTUMsZ0RBQWdEekIsT0FBTzBCLElBQUksQ0FBQyxTQUFDQztZQUNqRSxJQUFNQyxnREFBZ0RDLGlEQUFpREYsT0FBTzFCLFVBQVV1QjtZQUV4SCxJQUFJSSwrQ0FBK0M7Z0JBQ2pELE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBSSxDQUFDSCwrQ0FBK0M7WUFDbEQsT0FBTztRQUNUO0lBQ0Y7SUFFTixPQUFPSDtBQUNUO0FBRUEsU0FBU08saURBQWlERixLQUFLLEVBQUUxQixRQUFRLEVBQUV1QixxQkFBcUI7SUFDOUYsSUFBTU0sWUFBWUMsSUFBQUEsNkJBQWtCLEVBQUNKLFFBQy9CSyxPQUFPQyxJQUFBQSx3REFBd0MsRUFBQ2hDLFVBQVV1Qix3QkFDMURVLFFBQVFDLElBQUFBLGtDQUFrQixFQUFDTCxZQUMzQk0sVUFBVUMsSUFBQUEsNkJBQWMsRUFBQ0gsT0FBT0YsT0FDaENKLGdEQUFnRFEsU0FBVSxHQUFHO0lBRW5FLE9BQU9SO0FBQ1QifQ==