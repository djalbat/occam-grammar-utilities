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
var DirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(DirectlyRepeatedRule, Rule);
    var _super = _create_super(DirectlyRepeatedRule);
    function DirectlyRepeatedRule() {
        _class_call_check(this, DirectlyRepeatedRule);
        return _super.apply(this, arguments);
    }
    _create_class(DirectlyRepeatedRule, null, [
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
                var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), name = directlyRepeatedRuleName, opacity = rule.getOpacity(), NonTerminalNode = _directly.default, directlyRepeatedRule = new DirectlyRepeatedRule(name, opacity, definitions, NonTerminalNode);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRule;
}(_occamparsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWQvZGlyZWN0bHlcIlxuXG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW107XG5cbiAgICBjeWNsZXMubWFwKChjeWNsZSkgPT4ge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gPSBEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tUnVsZUFuZEN5Y2xlKHJ1bGUsIGN5Y2xlKTtcblxuICAgICAgaWYgKGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBydWxlLmdldE9wYWNpdHkoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBEaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IERpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsInJ1bGUiLCJjeWNsZXMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsIm1hcCIsImN5Y2xlIiwiZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24iLCJEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kQ3ljbGUiLCJkZWZpbml0aW9uIiwicHVzaCIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJvcGFjaXR5IiwiZ2V0T3BhY2l0eSIsIk5vblRlcm1pbmFsTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJSdWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NEJBUEE7K0RBRVk7Z0VBQ007d0JBRWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQyxXQUFXRixLQUFLRyxPQUFPLElBQ3ZCQyxjQUFjLEVBQUU7Z0JBRXRCSCxPQUFPSSxHQUFHLENBQUMsU0FBQ0M7b0JBQ1YsSUFBTUMsNkJBQTZCQyxrQkFBMEIsQ0FBQ0MsZ0JBQWdCLENBQUNULE1BQU1NO29CQUVyRixJQUFJQywrQkFBK0IsTUFBTTt3QkFDdkMsSUFBTUcsYUFBYUgsNEJBQTZCLEdBQUc7d0JBRW5ESCxZQUFZTyxJQUFJLENBQUNEO29CQUNuQjtnQkFDRjtnQkFFQSxJQUFNRSwyQkFBMkJDLElBQUFBLDhDQUFvQyxFQUFDWCxXQUNoRVksT0FBT0YsMEJBQ1BHLFVBQVVmLEtBQUtnQixVQUFVLElBQ3pCQyxrQkFBa0JDLGlCQUFvQixFQUN0Q0MsdUJBQXVCLElBbkJackIscUJBbUJxQ2dCLE1BQU1DLFNBQVNYLGFBQWFhO2dCQUVsRixPQUFPRTtZQUNUOzs7V0F0Qm1CckI7RUFBNkJzQixrQkFBSSJ9