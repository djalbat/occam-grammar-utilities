"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyRepeatedRule;
    }
});
var _occamparsers = require("occam-parsers");
var _directly = /*#__PURE__*/ _interop_require_default(require("../../node/repeated/directly"));
var _directly1 = /*#__PURE__*/ _interop_require_default(require("../../definition/repeated/directly"));
var _rewriteNodes = require("../../rewriteNodes");
var _ruleName = require("../../utilities/ruleName");
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
var DirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(DirectlyRepeatedRule, Rule);
    var _super = _create_super(DirectlyRepeatedRule);
    function DirectlyRepeatedRule() {
        _class_call_check(this, DirectlyRepeatedRule);
        return _super.apply(this, arguments);
    }
    _create_class(DirectlyRepeatedRule, [
        {
            key: "parse",
            value: function parse(state, callback) {
                var ruleNode = _get(_get_prototype_of(DirectlyRepeatedRule.prototype), "parse", this).call(this, state, callback);
                if (ruleNode !== null) {
                    var node = ruleNode, recursively = false;
                    (0, _rewriteNodes.rewriteDirectlyRepeatedNodes)(node, recursively);
                }
                return ruleNode;
            }
        }
    ], [
        {
            key: "fromRuleAndCycles",
            value: function fromRuleAndCycles(rule, cycles) {
                var ruleName = rule.getName(), definitions = [];
                cycles.map(function(cycle) {
                    var directlyRepeatedDefinition = _directly1.default.fromRuleAndCycle(rule, cycle);
                    if (directlyRepeatedDefinition !== null) {
                        var definition = directlyRepeatedDefinition; ///
                        definitions.push(definition);
                    }
                });
                var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), name = directlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _directly.default, directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRule;
}(_occamparsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWQvZGlyZWN0bHlcIlxuXG5pbXBvcnQgeyByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIH0gZnJvbSBcIi4uLy4uL3Jld3JpdGVOb2Rlc1wiO1xuaW1wb3J0IHsgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBydWxlTm9kZSA9IHN1cGVyLnBhcnNlKHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocnVsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmVjdXJzaXZlbHkgPSBmYWxzZTtcblxuICAgICAgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlLCByZWN1cnNpdmVseSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXTtcblxuICAgIGN5Y2xlcy5tYXAoKGN5Y2xlKSA9PiB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiA9IERpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uLmZyb21SdWxlQW5kQ3ljbGUocnVsZSwgY3ljbGUpO1xuXG4gICAgICBpZiAoZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gRGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBEaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwicGFyc2UiLCJzdGF0ZSIsImNhbGxiYWNrIiwicnVsZU5vZGUiLCJub2RlIiwicmVjdXJzaXZlbHkiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJydWxlIiwiY3ljbGVzIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJtYXAiLCJjeWNsZSIsImRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uIiwiRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24iLCJmcm9tUnVsZUFuZEN5Y2xlIiwiZGVmaW5pdGlvbiIsInB1c2giLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiRGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzRCQVJBOytEQUVZO2dFQUNNOzRCQUVNO3dCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsUUFBUTtnQkFDbkIsSUFBTUMsV0FBVyx1QkFGQUosaUNBRU1DLFNBQU4sSUFBSyxhQUFPQyxPQUFPQztnQkFFcEMsSUFBSUMsYUFBYSxNQUFNO29CQUNyQixJQUFNQyxPQUFPRCxVQUNQRSxjQUFjO29CQUVwQkMsSUFBQUEsNENBQTZCRixNQUFNQztnQkFDckM7Z0JBRUEsT0FBT0Y7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsV0FBV0YsS0FBS0csV0FDaEJDLGNBQWMsRUFBRTtnQkFFdEJILE9BQU9JLElBQUksU0FBQ0M7b0JBQ1YsSUFBTUMsNkJBQTZCQyxtQkFBMkJDLGlCQUFpQlQsTUFBTU07b0JBRXJGLElBQUlDLCtCQUErQixNQUFNO3dCQUN2QyxJQUFNRyxhQUFhSCw0QkFBNkIsR0FBRzt3QkFFbkRILFlBQVlPLEtBQUtEO29CQUNuQjtnQkFDRjtnQkFFQSxJQUFNRSwyQkFBMkJDLElBQUFBLGdEQUFxQ1gsV0FDaEVZLE9BQU9GLDBCQUNQRyxZQUFZLE9BQ1pDLGtCQUFrQkMsbUJBQ2xCQyx1QkFBdUIsSUFoQ1ozQixxQkFnQ3FDdUIsTUFBTUMsV0FBV1gsYUFBYVk7Z0JBRXBGLE9BQU9FO1lBQ1Q7OztXQW5DbUIzQjtFQUE2QjRCIn0=