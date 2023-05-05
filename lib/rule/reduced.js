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
var _definition = require("../utilities/definition");
var _ruleName = require("../utilities/ruleName");
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
    var definitionReducible = true;
    var definitionLeftRecursive = (0, _definition.isDefinitionLeftRecursive)(definition);
    if (definitionLeftRecursive) {
        definitionReducible = false;
    }
    return definitionReducible;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuXG5pbXBvcnQgeyBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IHJlZHVjZWRSdWxlID0gbnVsbCxcbiAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWR1Y2libGUgPSBpc0RlZmluaXRpb25SZWR1Y2libGUoZGVmaW5pdGlvbiwgcnVsZU5hbWUsIGN5Y2xlcyk7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlZHVjaWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIGFtYmlndW91cyA9IHJ1bGUuaXNBbWJpZ3VvdXMoKSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlOyAgLy8vXG5cbiAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5pdGlvblJlZHVjaWJsZShkZWZpbml0aW9uLCBydWxlTmFtZSwgY3ljbGVzKSB7XG4gIGxldCBkZWZpbml0aW9uUmVkdWNpYmxlID0gdHJ1ZTtcblxuICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgZGVmaW5pdGlvblJlZHVjaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluaXRpb25SZWR1Y2libGU7XG59XG4iXSwibmFtZXMiOlsiUmVkdWNlZFJ1bGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsInJ1bGUiLCJjeWNsZXMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWR1Y2libGUiLCJpc0RlZmluaXRpb25SZWR1Y2libGUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJpc0FtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIiwiUnVsZSIsImRlZmluaXRpb25SZWR1Y2libGUiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzRCQVBBOzhEQUVHOzBCQUVrQjt3QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDRCQStCbEIsQUEvQlk7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtnQkFDckMsSUFBTUMsV0FBV0YsS0FBS0csT0FBTztnQkFFN0IsSUFBSUMsY0FBYyxJQUFJLEVBQ2xCQyxjQUFjTCxLQUFLTSxjQUFjO2dCQUVyQ0QsY0FBY0EsWUFBWUUsTUFBTSxDQUFDLFNBQUNDLFlBQWU7b0JBQy9DLElBQU1DLDBCQUEwQkMsc0JBQXNCRixZQUFZTixVQUFVRDtvQkFFNUUsSUFBSVEseUJBQXlCO3dCQUMzQixPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSDtnQkFFQSxJQUFNRSxvQkFBb0JOLFlBQVlPLE1BQU07Z0JBRTVDLElBQUlELG9CQUFvQixHQUFHO29CQUN6QixJQUFNVCxZQUFXRixLQUFLRyxPQUFPLElBQ3ZCVSxrQkFBa0JDLElBQUFBLHFDQUEyQixFQUFDWixZQUM5Q2EsT0FBT0YsaUJBQ1BHLFlBQVloQixLQUFLaUIsV0FBVyxJQUM1QkMsa0JBQWtCQyxnQkFBVyxFQUFHLEdBQUc7b0JBRXpDZixjQUFjLElBeEJDTixZQXdCZWlCLE1BQU1DLFdBQVdYLGFBQWFhO2dCQUM5RCxDQUFDO2dCQUVELE9BQU9kO1lBQ1Q7OztXQTVCbUJOO0VBQW9Cc0Isa0JBQUk7QUErQjdDLFNBQVNWLHNCQUFzQkYsVUFBVSxFQUFFTixRQUFRLEVBQUVELE1BQU0sRUFBRTtJQUMzRCxJQUFJb0Isc0JBQXNCLElBQUk7SUFFOUIsSUFBTUMsMEJBQTBCQyxJQUFBQSxxQ0FBeUIsRUFBQ2Y7SUFFMUQsSUFBSWMseUJBQXlCO1FBQzNCRCxzQkFBc0IsS0FBSztJQUM3QixDQUFDO0lBRUQsT0FBT0E7QUFDVCJ9