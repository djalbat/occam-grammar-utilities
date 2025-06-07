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
    _create_class(ReducedRule, null, [
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
                    var ruleName1 = rule.getName(), reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName1), name = reducedRuleName, opacity = rule.getOpacity(), NonTerminalNode = _reduced.default; ///
                    reducedRule = new ReducedRule(name, opacity, definitions, NonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuXG5pbXBvcnQgeyBlZGdlc01hdGNoRWRnZSB9IGZyb20gXCIuLi9kaXJlY3RlZEdyYXBoXCI7XG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tQ3ljbGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N5Y2xlXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2xlZnRSZWN1cnNpdmVcIjtcbmltcG9ydCB7IGVkZ2VzRnJvbVJ1bGVOYW1lcywgZWRnZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzLCBydWxlTWFwKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGxldCByZWR1Y2VkUnVsZSA9IG51bGwsXG4gICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVkdWNpYmxlID0gaXNEZWZpbml0aW9uUmVkdWNpYmxlKGRlZmluaXRpb24sIHJ1bGVOYW1lLCBjeWNsZXMsIHJ1bGVNYXApO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWR1Y2libGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgICAgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBvcGFjaXR5ID0gcnVsZS5nZXRPcGFjaXR5KCksXG4gICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZTsgIC8vL1xuXG4gICAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNEZWZpbml0aW9uUmVkdWNpYmxlKGRlZmluaXRpb24sIHJ1bGVOYW1lLCBjeWNsZXMsIHJ1bGVNYXApIHtcbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBydWxlTWFwKSxcbiAgICAgICAgZGVmaW5pdGlvblJlZHVjaWJsZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuZXZlcnkoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN5Y2xlc0luY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGN5Y2xlcy5zb21lKChjeWNsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3ljbGVJbmNsdWRlc1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZG9lc0N5Y2xlSW5jbHVkZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGN5Y2xlLCBydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghY3ljbGVzSW5jbHVkZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9uUmVkdWNpYmxlO1xufVxuXG5mdW5jdGlvbiBkb2VzQ3ljbGVJbmNsdWRlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoY3ljbGUsIHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgZWRnZSA9IGVkZ2VGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIGVkZ2VzID0gZWRnZXNGcm9tUnVsZU5hbWVzKHJ1bGVOYW1lcyksXG4gICAgICAgIG1hdGNoZXMgPSBlZGdlc01hdGNoRWRnZShlZGdlcywgZWRnZSksXG4gICAgICAgIGN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IG1hdGNoZXM7ICAvLy9cblxuICByZXR1cm4gY3ljbGVJbmNsdWRlc1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xufVxuIl0sIm5hbWVzIjpbIlJlZHVjZWRSdWxlIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJydWxlIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlZHVjaWJsZSIsImlzRGVmaW5pdGlvblJlZHVjaWJsZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsIm9wYWNpdHkiLCJnZXRPcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJSdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImRlZmluaXRpb25SZWR1Y2libGUiLCJldmVyeSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImN5Y2xlc0luY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInNvbWUiLCJjeWNsZSIsImN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRvZXNDeWNsZUluY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZSIsImVkZ2UiLCJlZGdlRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZWRnZXMiLCJlZGdlc0Zyb21SdWxlTmFtZXMiLCJtYXRjaGVzIiwiZWRnZXNNYXRjaEVkZ2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzRCQVZBOzhEQUVHOzZCQUVPO3FCQUNJO3dCQUNTOzZCQUNTOzhCQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RCxJQUFBLEFBQU1BLDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE9BQU87Z0JBQzVDLElBQU1DLFdBQVdILEtBQUtJLE9BQU87Z0JBRTdCLElBQUlDLGNBQWMsTUFDZEMsY0FBY04sS0FBS08sY0FBYztnQkFFckNELGNBQWNBLFlBQVlFLE1BQU0sQ0FBQyxTQUFDQztvQkFDaEMsSUFBTUMsMEJBQTBCQyxzQkFBc0JGLFlBQVlOLFVBQVVGLFFBQVFDO29CQUVwRixJQUFJUSx5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBTUUsb0JBQW9CTixZQUFZTyxNQUFNO2dCQUU1QyxJQUFJRCxvQkFBb0IsR0FBRztvQkFDekIsSUFBTVQsWUFBV0gsS0FBS0ksT0FBTyxJQUN2QlUsa0JBQWtCQyxJQUFBQSxxQ0FBMkIsRUFBQ1osWUFDOUNhLE9BQU9GLGlCQUNQRyxVQUFVakIsS0FBS2tCLFVBQVUsSUFDekJDLGtCQUFrQkMsZ0JBQVcsRUFBRyxHQUFHO29CQUV6Q2YsY0FBYyxJQXhCQ1AsWUF3QmVrQixNQUFNQyxTQUFTWCxhQUFhYTtnQkFDNUQ7Z0JBRUEsT0FBT2Q7WUFDVDs7O1dBNUJtQlA7RUFBb0J1QixrQkFBSTtBQStCN0MsU0FBU1Ysc0JBQXNCRixVQUFVLEVBQUVOLFFBQVEsRUFBRUYsTUFBTSxFQUFFQyxPQUFPO0lBQ2xFLElBQU1vQix5QkFBeUJDLElBQUFBLG1EQUFvQyxFQUFDZCxZQUFZUCxVQUMxRXNCLHNCQUFzQkYsdUJBQXVCRyxLQUFLLENBQUMsU0FBQ0M7UUFDbEQsSUFBTUMsZ0RBQWdEMUIsT0FBTzJCLElBQUksQ0FBQyxTQUFDQztZQUNqRSxJQUFNQyxnREFBZ0RDLGlEQUFpREYsT0FBTzFCLFVBQVV1QjtZQUV4SCxJQUFJSSwrQ0FBK0M7Z0JBQ2pELE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBSSxDQUFDSCwrQ0FBK0M7WUFDbEQsT0FBTztRQUNUO0lBQ0Y7SUFFTixPQUFPSDtBQUNUO0FBRUEsU0FBU08saURBQWlERixLQUFLLEVBQUUxQixRQUFRLEVBQUV1QixxQkFBcUI7SUFDOUYsSUFBTU0sWUFBWUMsSUFBQUEseUJBQWtCLEVBQUNKLFFBQy9CSyxPQUFPQyxJQUFBQSx3REFBd0MsRUFBQ2hDLFVBQVV1Qix3QkFDMURVLFFBQVFDLElBQUFBLGtDQUFrQixFQUFDTCxZQUMzQk0sVUFBVUMsSUFBQUEsNkJBQWMsRUFBQ0gsT0FBT0YsT0FDaENKLGdEQUFnRFEsU0FBVSxHQUFHO0lBRW5FLE9BQU9SO0FBQ1QifQ==