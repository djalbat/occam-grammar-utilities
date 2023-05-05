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
    var ruleNames = cycle, edge = (0, _directedGraph1.edgeFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), edges = (0, _directedGraph1.edgesFromRuleNames)(ruleNames), matches = (0, _directedGraph.edgesMatchEdge)(edges, edge), cycleIncludesRuleNameAndLeftRecursiveRuleName = matches; ///
    return cycleIncludesRuleNameAndLeftRecursiveRuleName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuXG5pbXBvcnQgeyBlZGdlc01hdGNoRWRnZSB9IGZyb20gXCIuLi9kaXJlY3RlZEdyYXBoXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcbmltcG9ydCB7IGVkZ2VzRnJvbVJ1bGVOYW1lcywgZWRnZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGxldCByZWR1Y2VkUnVsZSA9IG51bGwsXG4gICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVkdWNpYmxlID0gaXNEZWZpbml0aW9uUmVkdWNpYmxlKGRlZmluaXRpb24sIHJ1bGVOYW1lLCBjeWNsZXMpO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWR1Y2libGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgICAgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBydWxlLmlzQW1iaWd1b3VzKCksXG4gICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZTsgIC8vL1xuXG4gICAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0RlZmluaXRpb25SZWR1Y2libGUoZGVmaW5pdGlvbiwgcnVsZU5hbWUsIGN5Y2xlcykge1xuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICBkZWZpbml0aW9uUmVkdWNpYmxlID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5ldmVyeSgobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgY3ljbGVzSW5jbHVkZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gY3ljbGVzLnNvbWUoKGN5Y2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjeWNsZUluY2x1ZGVzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBkb2VzQ3ljbGVJbmNsdWRlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoY3ljbGUsIHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoY3ljbGVJbmNsdWRlc1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFjeWNsZXNJbmNsdWRlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25SZWR1Y2libGU7XG59XG5cbmZ1bmN0aW9uIGRvZXNDeWNsZUluY2x1ZGVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShjeWNsZSwgcnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBjb25zdCBydWxlTmFtZXMgPSBjeWNsZSwgIC8vL1xuICAgICAgICBlZGdlID0gZWRnZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgZWRnZXMgPSBlZGdlc0Zyb21SdWxlTmFtZXMocnVsZU5hbWVzKSxcbiAgICAgICAgbWF0Y2hlcyA9IGVkZ2VzTWF0Y2hFZGdlKGVkZ2VzLCBlZGdlKSxcbiAgICAgICAgY3ljbGVJbmNsdWRlc1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbWF0Y2hlczsgIC8vL1xuXG4gIHJldHVybiBjeWNsZUluY2x1ZGVzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG59XG4iXSwibmFtZXMiOlsiUmVkdWNlZFJ1bGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsInJ1bGUiLCJjeWNsZXMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWR1Y2libGUiLCJpc0RlZmluaXRpb25SZWR1Y2libGUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJpc0FtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIiwiUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJkZWZpbml0aW9uUmVkdWNpYmxlIiwiZXZlcnkiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJjeWNsZXNJbmNsdWRlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJzb21lIiwiY3ljbGUiLCJjeWNsZUluY2x1ZGVzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkb2VzQ3ljbGVJbmNsdWRlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZXMiLCJlZGdlIiwiZWRnZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImVkZ2VzIiwiZWRnZXNGcm9tUnVsZU5hbWVzIiwibWF0Y2hlcyIsImVkZ2VzTWF0Y2hFZGdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozs0QkFUQTs4REFFRzs2QkFFTzt3QkFDYTswQkFDUzs4QkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUQsSUFBQSxBQUFNQSw0QkErQmxCLEFBL0JZO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7Z0JBQ3JDLElBQU1DLFdBQVdGLEtBQUtHLE9BQU87Z0JBRTdCLElBQUlDLGNBQWMsSUFBSSxFQUNsQkMsY0FBY0wsS0FBS00sY0FBYztnQkFFckNELGNBQWNBLFlBQVlFLE1BQU0sQ0FBQyxTQUFDQyxZQUFlO29CQUMvQyxJQUFNQywwQkFBMEJDLHNCQUFzQkYsWUFBWU4sVUFBVUQ7b0JBRTVFLElBQUlRLHlCQUF5Qjt3QkFDM0IsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsSUFBTUUsb0JBQW9CTixZQUFZTyxNQUFNO2dCQUU1QyxJQUFJRCxvQkFBb0IsR0FBRztvQkFDekIsSUFBTVQsWUFBV0YsS0FBS0csT0FBTyxJQUN2QlUsa0JBQWtCQyxJQUFBQSxxQ0FBMkIsRUFBQ1osWUFDOUNhLE9BQU9GLGlCQUNQRyxZQUFZaEIsS0FBS2lCLFdBQVcsSUFDNUJDLGtCQUFrQkMsZ0JBQVcsRUFBRyxHQUFHO29CQUV6Q2YsY0FBYyxJQXhCQ04sWUF3QmVpQixNQUFNQyxXQUFXWCxhQUFhYTtnQkFDOUQsQ0FBQztnQkFFRCxPQUFPZDtZQUNUOzs7V0E1Qm1CTjtFQUFvQnNCLGtCQUFJO0FBK0I3QyxTQUFTVixzQkFBc0JGLFVBQVUsRUFBRU4sUUFBUSxFQUFFRCxNQUFNLEVBQUU7SUFDM0QsSUFBTW9CLHlCQUF5QkMsSUFBQUEsZ0RBQW9DLEVBQUNkLGFBQzlEZSxzQkFBc0JGLHVCQUF1QkcsS0FBSyxDQUFDLFNBQUNDLHVCQUEwQjtRQUM1RSxJQUFNQyxnREFBZ0R6QixPQUFPMEIsSUFBSSxDQUFDLFNBQUNDLE9BQVU7WUFDM0UsSUFBTUMsZ0RBQWdEQyxpREFBaURGLE9BQU8xQixVQUFVdUI7WUFFeEgsSUFBSUksK0NBQStDO2dCQUNqRCxPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0g7UUFFQSxJQUFJLENBQUNILCtDQUErQztZQUNsRCxPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFTixPQUFPSDtBQUNUO0FBRUEsU0FBU08saURBQWlERixLQUFLLEVBQUUxQixRQUFRLEVBQUV1QixxQkFBcUIsRUFBRTtJQUNoRyxJQUFNTSxZQUFZSCxPQUNaSSxPQUFPQyxJQUFBQSx3REFBd0MsRUFBQy9CLFVBQVV1Qix3QkFDMURTLFFBQVFDLElBQUFBLGtDQUFrQixFQUFDSixZQUMzQkssVUFBVUMsSUFBQUEsNkJBQWMsRUFBQ0gsT0FBT0YsT0FDaENILGdEQUFnRE8sU0FBVSxHQUFHO0lBRW5FLE9BQU9QO0FBQ1QifQ==