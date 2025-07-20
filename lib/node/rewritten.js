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
var _precedence = require("../utilities/precedence");
var _rewrite = require("../utilities/rewrite");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var RewrittenNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RewrittenNode, NonTerminalNode);
    function RewrittenNode() {
        _class_call_check(this, RewrittenNode);
        return _call_super(this, RewrittenNode, arguments);
    }
    _create_class(RewrittenNode, [
        {
            key: "rewrite",
            value: function rewrite(state) {
                var nonTerminalNode = this.clone();
                (0, _rewrite.rewriteDirectlyRepeatedNodes)(nonTerminalNode, state);
                var parentNode = (0, _rewrite.rewriteIndirectlyRepeatedNodes)(nonTerminalNode, state);
                {
                    var nonTerminalNode1 = parentNode; ///
                    (0, _rewrite.rewriteReducedNodes)(nonTerminalNode1, state);
                }
                return nonTerminalNode;
            }
        },
        {
            key: "isUnprecedented",
            value: function isUnprecedented() {
                var nonTerminalNode = this, nonTerminalNodeUnprecedented = (0, _precedence.isNonTerminalNodeUnprecedented)(nonTerminalNode), unprecedented = nonTerminalNodeUnprecedented; ///
                return unprecedented;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesAndOpacity(RewrittenNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return RewrittenNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgeyByZXdyaXRlUmVkdWNlZE5vZGVzLCByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzLCByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Jld3JpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHJld3JpdGUoc3RhdGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLmNsb25lKCk7XG5cbiAgICByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSwgc3RhdGUpO1xuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUsIHN0YXRlKTtcblxuICAgIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHBhcmVudE5vZGU7IC8vL1xuXG4gICAgICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSwgc3RhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc1VucHJlY2VkZW50ZWQoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCA9IGlzTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZChub25UZXJtaW5hbE5vZGUpLFxuICAgICAgICAgIHVucHJlY2VkZW50ZWQgPSBub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkOyAvLy9cblxuICAgIHJldHVybiB1bnByZWNlZGVudGVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoUmV3cml0dGVuTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiUmV3cml0dGVuTm9kZSIsInJld3JpdGUiLCJzdGF0ZSIsIm5vblRlcm1pbmFsTm9kZSIsImNsb25lIiwicmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInBhcmVudE5vZGUiLCJyZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlUmVkdWNlZE5vZGVzIiwiaXNVbnByZWNlZGVudGVkIiwibm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCIsImlzTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzRCQUxXOzBCQUVlO3VCQUNtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkYsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLEtBQUs7Z0JBQ1gsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsS0FBSztnQkFFbENDLElBQUFBLHFDQUE0QixFQUFDRixpQkFBaUJEO2dCQUU5QyxJQUFNSSxhQUFhQyxJQUFBQSx1Q0FBOEIsRUFBQ0osaUJBQWlCRDtnQkFFbkU7b0JBQ0UsSUFBTUMsbUJBQWtCRyxZQUFZLEdBQUc7b0JBRXZDRSxJQUFBQSw0QkFBbUIsRUFBQ0wsa0JBQWlCRDtnQkFDdkM7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTixrQkFBa0IsSUFBSSxFQUN0Qk8sK0JBQStCQyxJQUFBQSwwQ0FBOEIsRUFBQ1Isa0JBQzlEUyxnQkFBZ0JGLDhCQUE4QixHQUFHO2dCQUV2RCxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsNkJBQWUsQ0FBQ0osZ0NBQWdDLENBekI3R2IsZUF5QjZIYyxVQUFVQyxZQUFZQztZQUFVOzs7V0F6QjdKaEI7RUFBc0JpQiw2QkFBZSJ9