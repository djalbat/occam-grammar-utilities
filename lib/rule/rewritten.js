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
            value: function parse(state, callback) {
                var ruleNode = _get(_get_prototype_of(RewrittenRule.prototype), "parse", this).call(this, state, callback);
                if (ruleNode !== null) {
                    var nonTerminalNode;
                    nonTerminalNode = ruleNode; ///
                    (0, _nodes.rewriteDirectlyRepeatedNodes)(nonTerminalNode);
                    var parentNode = (0, _nodes.rewriteIndirectlyRepeatedNodes)(nonTerminalNode);
                    nonTerminalNode = parentNode; ///
                    (0, _nodes.rewriteReducedNodes)(nonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuXG5pbXBvcnQgeyBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgcmV3cml0ZVJlZHVjZWROb2RlcywgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcywgcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHBhcnNlKHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHJ1bGVOb2RlID0gc3VwZXIucGFyc2Uoc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmIChydWxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlID0gcnVsZU5vZGU7ICAvLy9cblxuICAgICAgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHBhcmVudE5vZGU7IC8vL1xuXG4gICAgICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcywgcnVsZU1hcCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocnVsZU5hbWUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKHJld3JpdHRlbkRlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uOyAvLy9cblxuICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXRocyA9IHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpO1xuXG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbVBhdGgocGF0aCwgcnVsZU1hcCk7XG5cbiAgICAgIGlmIChyZXdyaXR0ZW5EZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uOyAvLy9cblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gcnVsZS5pc0FtYmlndW91cygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmV3cml0dGVuUnVsZSA9IG5ldyBSZXdyaXR0ZW5SdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5SdWxlIiwicGFyc2UiLCJzdGF0ZSIsImNhbGxiYWNrIiwicnVsZU5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicGFyZW50Tm9kZSIsInJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJld3JpdGVSZWR1Y2VkTm9kZXMiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsInJ1bGUiLCJjeWNsZXMiLCJydWxlTWFwIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsImRlZmluaXRpb24iLCJwdXNoIiwicGF0aHMiLCJwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyIsImZvckVhY2giLCJwYXRoIiwiZnJvbVBhdGgiLCJuYW1lIiwiYW1iaWd1b3VzIiwiaXNBbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJyZXdyaXR0ZW5SdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NEJBUEE7Z0VBRVc7b0JBRVc7cUJBQ3VEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkYsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsUUFBUTtnQkFDbkIsSUFBTUMsV0FBVyx1QkFGQUosMEJBRU1DLFNBQU4sSUFBSyxhQUFPQyxPQUFPQztnQkFFcEMsSUFBSUMsYUFBYSxNQUFNO29CQUNyQixJQUFJQztvQkFFSkEsa0JBQWtCRCxVQUFXLEdBQUc7b0JBRWhDRSxJQUFBQSxtQ0FBNEIsRUFBQ0Q7b0JBRTdCLElBQU1FLGFBQWFDLElBQUFBLHFDQUE4QixFQUFDSDtvQkFFbERBLGtCQUFrQkUsWUFBWSxHQUFHO29CQUVqQ0UsSUFBQUEsMEJBQW1CLEVBQUNKO2dCQUN0QjtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE9BQU87Z0JBQzVDLElBQU1DLFdBQVdILEtBQUtJLE9BQU8sSUFDdkJDLGNBQWMsRUFBRSxFQUNoQkMsc0JBQXNCQyxrQkFBbUIsQ0FBQ0MsWUFBWSxDQUFDTCxVQUFVRDtnQkFFdkUsSUFBSUksd0JBQXdCLE1BQU07b0JBQ2hDLElBQU1HLGFBQWFILHFCQUFxQixHQUFHO29CQUUzQ0QsWUFBWUssSUFBSSxDQUFDRDtnQkFDbkI7Z0JBRUEsSUFBTUUsUUFBUUMsSUFBQUEsZ0NBQTBCLEVBQUNULFVBQVVGO2dCQUVuRFUsTUFBTUUsT0FBTyxDQUFDLFNBQUNDO29CQUNiLElBQU1SLHNCQUFzQkMsa0JBQW1CLENBQUNRLFFBQVEsQ0FBQ0QsTUFBTVo7b0JBRS9ELElBQUlJLHdCQUF3QixNQUFNO3dCQUNoQyxJQUFNRyxhQUFhSCxxQkFBcUIsR0FBRzt3QkFFM0NELFlBQVlLLElBQUksQ0FBQ0Q7b0JBQ25CO2dCQUNGO2dCQUVBLElBQU1PLE9BQU9iLFVBQ1BjLFlBQVlqQixLQUFLa0IsV0FBVyxJQUM1QkMsa0JBQWtCbkIsS0FBS29CLGtCQUFrQixJQUN6Q0MsZ0JBQWdCLElBL0NMaEMsY0ErQ3VCMkIsTUFBTUMsV0FBV1osYUFBYWM7Z0JBRXRFLE9BQU9FO1lBQ1Q7OztXQWxEbUJoQztFQUFzQmlDLGtCQUFJIn0=