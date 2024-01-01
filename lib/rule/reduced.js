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
                    var ruleName1 = rule.getName(), reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName1), name = reducedRuleName, ambiguous = rule.isAmbiguous(), NonTerminalNode = _reduced.default; ///
                    reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuXG5pbXBvcnQgeyBlZGdlc01hdGNoRWRnZSB9IGZyb20gXCIuLi9kaXJlY3RlZEdyYXBoXCI7XG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tQ3ljbGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21SdWxlTmFtZXMsIGVkZ2VGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RpcmVjdGVkR3JhcGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgcmVkdWNlZFJ1bGUgPSBudWxsLFxuICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlZHVjaWJsZSA9IGlzRGVmaW5pdGlvblJlZHVjaWJsZShkZWZpbml0aW9uLCBydWxlTmFtZSwgY3ljbGVzKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25MZWZ0UmVkdWNpYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG5hbWUgPSByZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgYW1iaWd1b3VzID0gcnVsZS5pc0FtYmlndW91cygpLFxuICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGU7ICAvLy9cblxuICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNEZWZpbml0aW9uUmVkdWNpYmxlKGRlZmluaXRpb24sIHJ1bGVOYW1lLCBjeWNsZXMpIHtcbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgZGVmaW5pdGlvblJlZHVjaWJsZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuZXZlcnkoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN5Y2xlc0luY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGN5Y2xlcy5zb21lKChjeWNsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3ljbGVJbmNsdWRlc1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZG9lc0N5Y2xlSW5jbHVkZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGN5Y2xlLCBydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghY3ljbGVzSW5jbHVkZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9uUmVkdWNpYmxlO1xufVxuXG5mdW5jdGlvbiBkb2VzQ3ljbGVJbmNsdWRlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoY3ljbGUsIHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgZWRnZSA9IGVkZ2VGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIGVkZ2VzID0gZWRnZXNGcm9tUnVsZU5hbWVzKHJ1bGVOYW1lcyksXG4gICAgICAgIG1hdGNoZXMgPSBlZGdlc01hdGNoRWRnZShlZGdlcywgZWRnZSksXG4gICAgICAgIGN5Y2xlSW5jbHVkZXNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IG1hdGNoZXM7ICAvLy9cblxuICByZXR1cm4gY3ljbGVJbmNsdWRlc1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xufVxuIl0sIm5hbWVzIjpbIlJlZHVjZWRSdWxlIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJydWxlIiwiY3ljbGVzIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVkdWNpYmxlIiwiaXNEZWZpbml0aW9uUmVkdWNpYmxlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiaXNBbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJSZWR1Y2VkTm9kZSIsIlJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZGVmaW5pdGlvblJlZHVjaWJsZSIsImV2ZXJ5IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiY3ljbGVzSW5jbHVkZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwic29tZSIsImN5Y2xlIiwiY3ljbGVJbmNsdWRlc1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZG9lc0N5Y2xlSW5jbHVkZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlIiwiZWRnZSIsImVkZ2VGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJlZGdlcyIsImVkZ2VzRnJvbVJ1bGVOYW1lcyIsIm1hdGNoZXMiLCJlZGdlc01hdGNoRWRnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7NEJBVkE7OERBRUc7NkJBRU87eUJBQ0k7d0JBQ1M7MEJBQ1M7OEJBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlELElBQUEsQUFBTUEsNEJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsV0FBV0YsS0FBS0csT0FBTztnQkFFN0IsSUFBSUMsY0FBYyxNQUNkQyxjQUFjTCxLQUFLTSxjQUFjO2dCQUVyQ0QsY0FBY0EsWUFBWUUsTUFBTSxDQUFDLFNBQUNDO29CQUNoQyxJQUFNQywwQkFBMEJDLHNCQUFzQkYsWUFBWU4sVUFBVUQ7b0JBRTVFLElBQUlRLHlCQUF5Qjt3QkFDM0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFNRSxvQkFBb0JOLFlBQVlPLE1BQU07Z0JBRTVDLElBQUlELG9CQUFvQixHQUFHO29CQUN6QixJQUFNVCxZQUFXRixLQUFLRyxPQUFPLElBQ3ZCVSxrQkFBa0JDLElBQUFBLHFDQUEyQixFQUFDWixZQUM5Q2EsT0FBT0YsaUJBQ1BHLFlBQVloQixLQUFLaUIsV0FBVyxJQUM1QkMsa0JBQWtCQyxnQkFBVyxFQUFHLEdBQUc7b0JBRXpDZixjQUFjLElBeEJDTixZQXdCZWlCLE1BQU1DLFdBQVdYLGFBQWFhO2dCQUM5RDtnQkFFQSxPQUFPZDtZQUNUOzs7V0E1Qm1CTjtFQUFvQnNCLGtCQUFJO0FBK0I3QyxTQUFTVixzQkFBc0JGLFVBQVUsRUFBRU4sUUFBUSxFQUFFRCxNQUFNO0lBQ3pELElBQU1vQix5QkFBeUJDLElBQUFBLGdEQUFvQyxFQUFDZCxhQUM5RGUsc0JBQXNCRix1QkFBdUJHLEtBQUssQ0FBQyxTQUFDQztRQUNsRCxJQUFNQyxnREFBZ0R6QixPQUFPMEIsSUFBSSxDQUFDLFNBQUNDO1lBQ2pFLElBQU1DLGdEQUFnREMsaURBQWlERixPQUFPMUIsVUFBVXVCO1lBRXhILElBQUlJLCtDQUErQztnQkFDakQsT0FBTztZQUNUO1FBQ0Y7UUFFQSxJQUFJLENBQUNILCtDQUErQztZQUNsRCxPQUFPO1FBQ1Q7SUFDRjtJQUVOLE9BQU9IO0FBQ1Q7QUFFQSxTQUFTTyxpREFBaURGLEtBQUssRUFBRTFCLFFBQVEsRUFBRXVCLHFCQUFxQjtJQUM5RixJQUFNTSxZQUFZQyxJQUFBQSw2QkFBa0IsRUFBQ0osUUFDL0JLLE9BQU9DLElBQUFBLHdEQUF3QyxFQUFDaEMsVUFBVXVCLHdCQUMxRFUsUUFBUUMsSUFBQUEsa0NBQWtCLEVBQUNMLFlBQzNCTSxVQUFVQyxJQUFBQSw2QkFBYyxFQUFDSCxPQUFPRixPQUNoQ0osZ0RBQWdEUSxTQUFVLEdBQUc7SUFFbkUsT0FBT1I7QUFDVCJ9