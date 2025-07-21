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
                var nonTerminalNode;
                var ruleName = this.getRuleName(), _$NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName);
                nonTerminalNode = this.clone();
                var opacity = nonTerminalNode.getOpacity(), childNodes = nonTerminalNode.getChildNodes(), precedence = nonTerminalNode.getPrecedence();
                nonTerminalNode = _$NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);
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
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RewrittenNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return RewrittenNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgeyByZXdyaXRlUmVkdWNlZE5vZGVzLCByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzLCByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Jld3JpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHJld3JpdGUoc3RhdGUpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gc3RhdGUuTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuY2xvbmUoKTtcblxuICAgIGNvbnN0IG9wYWNpdHkgPSBub25UZXJtaW5hbE5vZGUuZ2V0T3BhY2l0eSgpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBub25UZXJtaW5hbE5vZGUuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSwgc3RhdGUpO1xuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUsIHN0YXRlKTtcblxuICAgIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHBhcmVudE5vZGU7IC8vL1xuXG4gICAgICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSwgc3RhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc1VucHJlY2VkZW50ZWQoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCA9IGlzTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZChub25UZXJtaW5hbE5vZGUpLFxuICAgICAgICAgIHVucHJlY2VkZW50ZWQgPSBub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkOyAvLy9cblxuICAgIHJldHVybiB1bnByZWNlZGVudGVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShSZXdyaXR0ZW5Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5Ob2RlIiwicmV3cml0ZSIsInN0YXRlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsIk5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZSIsImNsb25lIiwib3BhY2l0eSIsImdldE9wYWNpdHkiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInBhcmVudE5vZGUiLCJyZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlUmVkdWNlZE5vZGVzIiwiaXNVbnByZWNlZGVudGVkIiwibm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCIsImlzTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzRCQUxXOzBCQUVlO3VCQUNtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkYsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLEtBQUs7Z0JBQ1gsSUFBSUM7Z0JBRUosSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLG9CQUFrQkosTUFBTUssMkJBQTJCLENBQUNIO2dCQUUxREQsa0JBQWtCLElBQUksQ0FBQ0ssS0FBSztnQkFFNUIsSUFBTUMsVUFBVU4sZ0JBQWdCTyxVQUFVLElBQ3BDQyxhQUFhUixnQkFBZ0JTLGFBQWEsSUFDMUNDLGFBQWFWLGdCQUFnQlcsYUFBYTtnQkFFaERYLGtCQUFrQkcsa0JBQWdCUywwQ0FBMEMsQ0FBQ1gsVUFBVU8sWUFBWUYsU0FBU0k7Z0JBRTVHRyxJQUFBQSxxQ0FBNEIsRUFBQ2IsaUJBQWlCRDtnQkFFOUMsSUFBTWUsYUFBYUMsSUFBQUEsdUNBQThCLEVBQUNmLGlCQUFpQkQ7Z0JBRW5FO29CQUNFLElBQU1DLG1CQUFrQmMsWUFBWSxHQUFHO29CQUV2Q0UsSUFBQUEsNEJBQW1CLEVBQUNoQixrQkFBaUJEO2dCQUN2QztnQkFFQSxPQUFPQztZQUNUOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNakIsa0JBQWtCLElBQUksRUFDdEJrQiwrQkFBK0JDLElBQUFBLDBDQUE4QixFQUFDbkIsa0JBQzlEb0IsZ0JBQWdCRiw4QkFBOEIsR0FBRztnQkFFdkQsT0FBT0U7WUFDVDs7OztZQUVPUixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNYLFFBQVEsRUFBRU8sVUFBVSxFQUFFRixPQUFPLEVBQUVJLFVBQVU7Z0JBQUksT0FBT1AsNkJBQWUsQ0FBQ1MsMENBQTBDLENBcEM3SWYsZUFvQzZKSSxVQUFVTyxZQUFZRixTQUFTSTtZQUFhOzs7V0FwQ3pNYjtFQUFzQk0sNkJBQWUifQ==