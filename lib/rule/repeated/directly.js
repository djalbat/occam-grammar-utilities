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
var _nodes = require("../../utilities/nodes");
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
            value: function parse(state, callback, precedence, parentRuleName) {
                var ruleNode = _get(_get_prototype_of(DirectlyRepeatedRule.prototype), "parse", this).call(this, state, callback, precedence, parentRuleName);
                if (ruleNode !== null) {
                // const nonTerminalNode = ruleNode;  ///
                //
                // rewriteDirectlyRepeatedNodes(nonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWQvZGlyZWN0bHlcIlxuXG5pbXBvcnQgeyByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2Rlc1wiO1xuaW1wb3J0IHsgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHBhcmVudFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5vZGUgPSBzdXBlci5wYXJzZShzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHBhcmVudFJ1bGVOYW1lKTtcblxuICAgIGlmIChydWxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc3Qgbm9uVGVybWluYWxOb2RlID0gcnVsZU5vZGU7ICAvLy9cbiAgICAgIC8vXG4gICAgICAvLyByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXTtcblxuICAgIGN5Y2xlcy5tYXAoKGN5Y2xlKSA9PiB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiA9IERpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uLmZyb21SdWxlQW5kQ3ljbGUocnVsZSwgY3ljbGUpO1xuXG4gICAgICBpZiAoZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gRGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBEaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwicGFyc2UiLCJzdGF0ZSIsImNhbGxiYWNrIiwicHJlY2VkZW5jZSIsInBhcmVudFJ1bGVOYW1lIiwicnVsZU5vZGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsInJ1bGUiLCJjeWNsZXMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsIm1hcCIsImN5Y2xlIiwiZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24iLCJEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kQ3ljbGUiLCJkZWZpbml0aW9uIiwicHVzaCIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7NEJBUkE7K0RBRVk7Z0VBQ007cUJBRU07d0JBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLHFDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsY0FBYztnQkFDL0MsSUFBTUMsV0FBVyx1QkFGQU4saUNBRU1DLFNBQU4sSUFBSyxhQUFPQyxPQUFPQyxVQUFVQyxZQUFZQztnQkFFMUQsSUFBSUMsYUFBYSxNQUFNO2dCQUNyQix5Q0FBeUM7Z0JBQ3pDLEVBQUU7Z0JBQ0YsaURBQWlEO2dCQUNuRDtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQyxXQUFXRixLQUFLRyxPQUFPLElBQ3ZCQyxjQUFjLEVBQUU7Z0JBRXRCSCxPQUFPSSxHQUFHLENBQUMsU0FBQ0M7b0JBQ1YsSUFBTUMsNkJBQTZCQyxrQkFBMEIsQ0FBQ0MsZ0JBQWdCLENBQUNULE1BQU1NO29CQUVyRixJQUFJQywrQkFBK0IsTUFBTTt3QkFDdkMsSUFBTUcsYUFBYUgsNEJBQTZCLEdBQUc7d0JBRW5ESCxZQUFZTyxJQUFJLENBQUNEO29CQUNuQjtnQkFDRjtnQkFFQSxJQUFNRSwyQkFBMkJDLElBQUFBLDhDQUFvQyxFQUFDWCxXQUNoRVksT0FBT0YsMEJBQ1BHLFlBQVksT0FDWkMsa0JBQWtCQyxpQkFBb0IsRUFDdENDLHVCQUF1QixJQS9CWjFCLHFCQStCcUNzQixNQUFNQyxXQUFXWCxhQUFhWTtnQkFFcEYsT0FBT0U7WUFDVDs7O1dBbENtQjFCO0VBQTZCMkIsa0JBQUkifQ==