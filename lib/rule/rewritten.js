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
var _nodes = require("../utilities/nodes");
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
            value: function parse(state, callback, precedence, parentRuleName) {
                var ruleNode = _get(_get_prototype_of(RewrittenRule.prototype), "parse", this).call(this, state, callback, precedence, parentRuleName);
                if (ruleNode !== null) {
                // let nonTerminalNode;
                //
                // nonTerminalNode = ruleNode;  ///
                //
                // rewriteDirectlyRepeatedNodes(nonTerminalNode);
                // const parentNode = rewriteIndirectlyRepeatedNodes(nonTerminalNode);
                //
                // nonTerminalNode = parentNode; ///
                //
                // rewriteReducedNodes(nonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuXG5pbXBvcnQgeyBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgcmV3cml0ZVJlZHVjZWROb2RlcywgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcywgcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHBhcnNlKHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcGFyZW50UnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTm9kZSA9IHN1cGVyLnBhcnNlKHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcGFyZW50UnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyBsZXQgbm9uVGVybWluYWxOb2RlO1xuICAgICAgLy9cbiAgICAgIC8vIG5vblRlcm1pbmFsTm9kZSA9IHJ1bGVOb2RlOyAgLy8vXG4gICAgICAvL1xuICAgICAgLy8gcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICAvLyBjb25zdCBwYXJlbnROb2RlID0gcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG4gICAgICAvL1xuICAgICAgLy8gbm9uVGVybWluYWxOb2RlID0gcGFyZW50Tm9kZTsgLy8vXG4gICAgICAvL1xuICAgICAgLy8gcmV3cml0ZVJlZHVjZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMsIHJ1bGVNYXApIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW10sXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBydWxlTWFwKTtcblxuICAgIGlmIChyZXdyaXR0ZW5EZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aHMgPSBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKTtcblxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21QYXRoKHBhdGgsIHJ1bGVNYXApO1xuXG4gICAgICBpZiAocmV3cml0dGVuRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IHJ1bGUuaXNBbWJpZ3VvdXMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJld3JpdHRlblJ1bGUgPSBuZXcgUmV3cml0dGVuUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmV3cml0dGVuUnVsZSIsInBhcnNlIiwic3RhdGUiLCJjYWxsYmFjayIsInByZWNlZGVuY2UiLCJwYXJlbnRSdWxlTmFtZSIsInJ1bGVOb2RlIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJydWxlIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicHVzaCIsInBhdGhzIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJmb3JFYWNoIiwicGF0aCIsImZyb21QYXRoIiwibmFtZSIsImFtYmlndW91cyIsImlzQW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicmV3cml0dGVuUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzRCQVBBO2dFQUVXO29CQUVXO3FCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxjQUFjO2dCQUMvQyxJQUFNQyxXQUFXLHVCQUZBTiwwQkFFTUMsU0FBTixJQUFLLGFBQU9DLE9BQU9DLFVBQVVDLFlBQVlDO2dCQUUxRCxJQUFJQyxhQUFhLE1BQU07Z0JBQ3JCLHVCQUF1QjtnQkFDdkIsRUFBRTtnQkFDRixtQ0FBbUM7Z0JBQ25DLEVBQUU7Z0JBQ0YsaURBQWlEO2dCQUVqRCxzRUFBc0U7Z0JBQ3RFLEVBQUU7Z0JBQ0Ysb0NBQW9DO2dCQUNwQyxFQUFFO2dCQUNGLHdDQUF3QztnQkFDMUM7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUM1QyxJQUFNQyxXQUFXSCxLQUFLSSxPQUFPLElBQ3ZCQyxjQUFjLEVBQUUsRUFDaEJDLHNCQUFzQkMsa0JBQW1CLENBQUNDLFlBQVksQ0FBQ0wsVUFBVUQ7Z0JBRXZFLElBQUlJLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNRyxhQUFhSCxxQkFBcUIsR0FBRztvQkFFM0NELFlBQVlLLElBQUksQ0FBQ0Q7Z0JBQ25CO2dCQUVBLElBQU1FLFFBQVFDLElBQUFBLGdDQUEwQixFQUFDVCxVQUFVRjtnQkFFbkRVLE1BQU1FLE9BQU8sQ0FBQyxTQUFDQztvQkFDYixJQUFNUixzQkFBc0JDLGtCQUFtQixDQUFDUSxRQUFRLENBQUNELE1BQU1aO29CQUUvRCxJQUFJSSx3QkFBd0IsTUFBTTt3QkFDaEMsSUFBTUcsYUFBYUgscUJBQXFCLEdBQUc7d0JBRTNDRCxZQUFZSyxJQUFJLENBQUNEO29CQUNuQjtnQkFDRjtnQkFFQSxJQUFNTyxPQUFPYixVQUNQYyxZQUFZakIsS0FBS2tCLFdBQVcsSUFDNUJDLGtCQUFrQm5CLEtBQUtvQixrQkFBa0IsSUFDekNDLGdCQUFnQixJQS9DTDdCLGNBK0N1QndCLE1BQU1DLFdBQVdaLGFBQWFjO2dCQUV0RSxPQUFPRTtZQUNUOzs7V0FsRG1CN0I7RUFBc0I4QixrQkFBSSJ9