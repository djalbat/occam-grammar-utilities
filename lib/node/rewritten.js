"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RewrittenNode;
    }
});
var _occamparsers = require("occam-parsers");
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
var RewrittenNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RewrittenNode, NonTerminalNode);
    var _super = _create_super(RewrittenNode);
    function RewrittenNode() {
        _class_call_check(this, RewrittenNode);
        return _super.apply(this, arguments);
    }
    _create_class(RewrittenNode, null, [
        {
            key: "fromReducedNode",
            value: function fromReducedNode(reducedNode) {
                var reducedNodeRuleName = reducedNode.getRuleName(), reducedRuleName = reducedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName), childNodes = reducedNode.getChildNodes(), precedence = reducedNode.getPrecedence(), rewrittenNode = new RewrittenNode(ruleName, childNodes, precedence);
                return rewrittenNode;
            }
        },
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _occamparsers.NonTerminalNode.fromRuleNameAndChildNodes(RewrittenNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(RewrittenNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return RewrittenNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSByZWR1Y2VkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IHJlZHVjZWROb2RlLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gbmV3IFJld3JpdHRlbk5vZGUocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUmV3cml0dGVuTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoUmV3cml0dGVuTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJld3JpdHRlbk5vZGUiLCJmcm9tUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsInJld3JpdHRlbk5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzRCQUpXO3dCQUVZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDhCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQkMsV0FBVztnQkFDaEMsSUFBTUMsc0JBQXNCRCxZQUFZRSxXQUFXLElBQzdDQyxrQkFBa0JGLHFCQUNsQkcsV0FBV0MsSUFBQUEscUNBQTJCLEVBQUNGLGtCQUN2Q0csYUFBYU4sWUFBWU8sYUFBYSxJQUN0Q0MsYUFBYVIsWUFBWVMsYUFBYSxJQUN0Q0MsZ0JBQWdCLElBUExaLGNBT3VCTSxVQUFVRSxZQUFZRTtnQkFFOUQsT0FBT0U7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQlAsUUFBUSxFQUFFRSxVQUFVO2dCQUFJLE9BQU9NLDZCQUFlLENBQUNELHlCQUF5QixDQVp0RmIsZUFZc0dNLFVBQVVFO1lBQWE7OztZQUV6SU8sS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DVCxRQUFRLEVBQUVFLFVBQVUsRUFBRUUsVUFBVTtnQkFBSSxPQUFPSSw2QkFBZSxDQUFDQyxtQ0FBbUMsQ0FkdEhmLGVBY3NJTSxVQUFVRSxZQUFZRTtZQUFhOzs7V0FkektWO0VBQXNCYyw2QkFBZSJ9