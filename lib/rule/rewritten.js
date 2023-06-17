"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RewrittenRule;
    }
});
var _occamparsers = require("occam-parsers");
var _rewritten = /*#__PURE__*/ _interop_require_default(require("../definition/rewritten"));
var _path = require("../utilities/path");
var _rewriteNodes = require("../rewriteNodes");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var RewrittenRule = /*#__PURE__*/ function(Rule) {
    _inherits(RewrittenRule, Rule);
    var _super = _create_super(RewrittenRule);
    function RewrittenRule() {
        _class_call_check(this, RewrittenRule);
        return _super.apply(this, arguments);
    }
    _create_class(RewrittenRule, [
        {
            key: "parse",
            value: function parse(state, callback) {
                var ruleNode = _get(_get_prototype_of(RewrittenRule.prototype), "parse", this).call(this, state, callback);
                if (ruleNode !== null) {
                    var node = ruleNode, recursively = false;
                    (0, _rewriteNodes.rewriteDirectlyRepeatedNodes)(node, recursively);
                    var parentNode = (0, _rewriteNodes.rewriteIndirectlyRepeatedNodes)(node, recursively);
                    (0, _rewriteNodes.rewriteReducedNodes)(parentNode, recursively);
                }
                return ruleNode;
            }
        }
    ], [
        {
            key: "fromRuleAndCycles",
            value: function fromRuleAndCycles(rule, cycles, ruleMap) {
                var ruleName = rule.getName(), definitions = [], rewrittenDefinition = _rewritten.default.fromRuleName(ruleName, ruleMap);
                if (rewrittenDefinition !== null) {
                    var definition = rewrittenDefinition; ///
                    definitions.push(definition);
                }
                var paths = (0, _path.pathsFromRuleNameAndCycles)(ruleName, cycles);
                paths.forEach(function(path) {
                    var rewrittenDefinition = _rewritten.default.fromPath(path, ruleMap);
                    if (rewrittenDefinition !== null) {
                        var definition = rewrittenDefinition; ///
                        definitions.push(definition);
                    }
                });
                var name = ruleName, ambiguous = rule.isAmbiguous(), NonTerminalNode = rule.getNonTerminalNode(), rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamparsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuXG5pbXBvcnQgeyBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgcmV3cml0ZVJlZHVjZWROb2RlcywgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcywgcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIH0gZnJvbSBcIi4uL3Jld3JpdGVOb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHBhcnNlKHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHJ1bGVOb2RlID0gc3VwZXIucGFyc2Uoc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmIChydWxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHJ1bGVOb2RlLCAgLy8vXG4gICAgICAgICAgICByZWN1cnNpdmVseSA9IGZhbHNlO1xuXG4gICAgICByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUsIHJlY3Vyc2l2ZWx5KTtcblxuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlLCByZWN1cnNpdmVseSk7XG5cbiAgICAgIHJld3JpdGVSZWR1Y2VkTm9kZXMocGFyZW50Tm9kZSwgcmVjdXJzaXZlbHkpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMsIHJ1bGVNYXApIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW10sXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBydWxlTWFwKTtcblxuICAgIGlmIChyZXdyaXR0ZW5EZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aHMgPSBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKTtcblxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21QYXRoKHBhdGgsIHJ1bGVNYXApO1xuXG4gICAgICBpZiAocmV3cml0dGVuRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IHJ1bGUuaXNBbWJpZ3VvdXMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJld3JpdHRlblJ1bGUgPSBuZXcgUmV3cml0dGVuUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmV3cml0dGVuUnVsZSIsInBhcnNlIiwic3RhdGUiLCJjYWxsYmFjayIsInJ1bGVOb2RlIiwibm9kZSIsInJlY3Vyc2l2ZWx5IiwicmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInBhcmVudE5vZGUiLCJyZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlUmVkdWNlZE5vZGVzIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJydWxlIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicHVzaCIsInBhdGhzIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJmb3JFYWNoIiwicGF0aCIsImZyb21QYXRoIiwibmFtZSIsImFtYmlndW91cyIsImlzQW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicmV3cml0dGVuUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzRCQVBBO2dFQUVXO29CQUVXOzRCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLFFBQVE7Z0JBQ25CLElBQU1DLFdBQVcsdUJBRkFKLDBCQUVNQyxTQUFOLElBQUssYUFBT0MsT0FBT0M7Z0JBRXBDLElBQUlDLGFBQWEsTUFBTTtvQkFDckIsSUFBTUMsT0FBT0QsVUFDUEUsY0FBYztvQkFFcEJDLElBQUFBLDRDQUE2QkYsTUFBTUM7b0JBRW5DLElBQU1FLGFBQWFDLElBQUFBLDhDQUErQkosTUFBTUM7b0JBRXhESSxJQUFBQSxtQ0FBb0JGLFlBQVlGO2dCQUNsQztnQkFFQSxPQUFPRjtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE9BQU87Z0JBQzVDLElBQU1DLFdBQVdILEtBQUtJLFdBQ2hCQyxjQUFjLEVBQUUsRUFDaEJDLHNCQUFzQkMsbUJBQW9CQyxhQUFhTCxVQUFVRDtnQkFFdkUsSUFBSUksd0JBQXdCLE1BQU07b0JBQ2hDLElBQU1HLGFBQWFILHFCQUFxQixHQUFHO29CQUUzQ0QsWUFBWUssS0FBS0Q7Z0JBQ25CO2dCQUVBLElBQU1FLFFBQVFDLElBQUFBLGtDQUEyQlQsVUFBVUY7Z0JBRW5EVSxNQUFNRSxRQUFRLFNBQUNDO29CQUNiLElBQU1SLHNCQUFzQkMsbUJBQW9CUSxTQUFTRCxNQUFNWjtvQkFFL0QsSUFBSUksd0JBQXdCLE1BQU07d0JBQ2hDLElBQU1HLGFBQWFILHFCQUFxQixHQUFHO3dCQUUzQ0QsWUFBWUssS0FBS0Q7b0JBQ25CO2dCQUNGO2dCQUVBLElBQU1PLE9BQU9iLFVBQ1BjLFlBQVlqQixLQUFLa0IsZUFDakJDLGtCQUFrQm5CLEtBQUtvQixzQkFDdkJDLGdCQUFnQixJQTVDTGpDLGNBNEN1QjRCLE1BQU1DLFdBQVdaLGFBQWFjO2dCQUV0RSxPQUFPRTtZQUNUOzs7V0EvQ21CakM7RUFBc0JrQyJ9