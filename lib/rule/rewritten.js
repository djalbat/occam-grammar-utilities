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
var RewrittenRule = /*#__PURE__*/ function(Rule) {
    _inherits(RewrittenRule, Rule);
    var _super = _create_super(RewrittenRule);
    function RewrittenRule() {
        _class_call_check(this, RewrittenRule);
        return _super.apply(this, arguments);
    }
    _create_class(RewrittenRule, [
        {
            key: "rewriteNonTerminalNode",
            value: function rewriteNonTerminalNode(nonTerminalNode) {
                (0, _nodes.rewriteDirectlyRepeatedNodes)(nonTerminalNode);
                var parentNode = (0, _nodes.rewriteIndirectlyRepeatedNodes)(nonTerminalNode);
                nonTerminalNode = parentNode; ///
                (0, _nodes.rewriteReducedNodes)(nonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuXG5pbXBvcnQgeyBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgcmV3cml0ZVJlZHVjZWROb2RlcywgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcywgcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHJld3JpdGVOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlID0gcGFyZW50Tm9kZTsgLy8vXG5cbiAgICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzLCBydWxlTWFwKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtdLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSwgcnVsZU1hcCk7XG5cbiAgICBpZiAocmV3cml0dGVuRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHJld3JpdHRlbkRlZmluaXRpb247IC8vL1xuXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGhzID0gcGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMocnVsZU5hbWUsIGN5Y2xlcyk7XG5cbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tUGF0aChwYXRoLCBydWxlTWFwKTtcblxuICAgICAgaWYgKHJld3JpdHRlbkRlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHJld3JpdHRlbkRlZmluaXRpb247IC8vL1xuXG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBuYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBydWxlLmlzQW1iaWd1b3VzKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gbmV3IFJld3JpdHRlblJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5SdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJld3JpdHRlblJ1bGUiLCJyZXdyaXRlTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInBhcmVudE5vZGUiLCJyZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlUmVkdWNlZE5vZGVzIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJydWxlIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicHVzaCIsInBhdGhzIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJmb3JFYWNoIiwicGF0aCIsImZyb21QYXRoIiwibmFtZSIsImFtYmlndW91cyIsImlzQW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicmV3cml0dGVuUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzRCQVBBO2dFQUVXO29CQUVXO3FCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFBLEFBQU1BLDhCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCQyxlQUFlO2dCQUNwQ0MsSUFBQUEsbUNBQTRCLEVBQUNEO2dCQUU3QixJQUFNRSxhQUFhQyxJQUFBQSxxQ0FBOEIsRUFBQ0g7Z0JBRWxEQSxrQkFBa0JFLFlBQVksR0FBRztnQkFFakNFLElBQUFBLDBCQUFtQixFQUFDSjtZQUN0Qjs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUM1QyxJQUFNQyxXQUFXSCxLQUFLSSxPQUFPLElBQ3ZCQyxjQUFjLEVBQUUsRUFDaEJDLHNCQUFzQkMsa0JBQW1CLENBQUNDLFlBQVksQ0FBQ0wsVUFBVUQ7Z0JBRXZFLElBQUlJLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNRyxhQUFhSCxxQkFBcUIsR0FBRztvQkFFM0NELFlBQVlLLElBQUksQ0FBQ0Q7Z0JBQ25CO2dCQUVBLElBQU1FLFFBQVFDLElBQUFBLGdDQUEwQixFQUFDVCxVQUFVRjtnQkFFbkRVLE1BQU1FLE9BQU8sQ0FBQyxTQUFDQztvQkFDYixJQUFNUixzQkFBc0JDLGtCQUFtQixDQUFDUSxRQUFRLENBQUNELE1BQU1aO29CQUUvRCxJQUFJSSx3QkFBd0IsTUFBTTt3QkFDaEMsSUFBTUcsYUFBYUgscUJBQXFCLEdBQUc7d0JBRTNDRCxZQUFZSyxJQUFJLENBQUNEO29CQUNuQjtnQkFDRjtnQkFFQSxJQUFNTyxPQUFPYixVQUNQYyxZQUFZakIsS0FBS2tCLFdBQVcsSUFDNUJDLGtCQUFrQm5CLEtBQUtvQixrQkFBa0IsSUFDekNDLGdCQUFnQixJQXJDTDdCLGNBcUN1QndCLE1BQU1DLFdBQVdaLGFBQWFjO2dCQUV0RSxPQUFPRTtZQUNUOzs7V0F4Q21CN0I7RUFBc0I4QixrQkFBSSJ9