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
            value: function rewrite() {
                var nonTerminalNode = this.clone();
                (0, _rewrite.rewriteDirectlyRepeatedNodes)(nonTerminalNode);
                var parentNode = (0, _rewrite.rewriteIndirectlyRepeatedNodes)(nonTerminalNode);
                {
                    var nonTerminalNode1 = parentNode; ///
                    (0, _rewrite.rewriteReducedNodes)(nonTerminalNode1);
                }
                if (nonTerminalNode.childNodes[0].ruleName === "E") {
                    globalThis.watchedNode = nonTerminalNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgeyByZXdyaXRlUmVkdWNlZE5vZGVzLCByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzLCByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Jld3JpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHJld3JpdGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcy5jbG9uZSgpO1xuXG4gICAgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gcGFyZW50Tm9kZTsgLy8vXG5cbiAgICAgIHJld3JpdGVSZWR1Y2VkTm9kZXMobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlLmNoaWxkTm9kZXNbMF0ucnVsZU5hbWUgPT09IFwiRVwiKSB7XG4gICAgICBnbG9iYWxUaGlzLndhdGNoZWROb2RlID0gbm9uVGVybWluYWxOb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc1VucHJlY2VkZW50ZWQoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCA9IGlzTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZChub25UZXJtaW5hbE5vZGUpLFxuICAgICAgICAgIHVucHJlY2VkZW50ZWQgPSBub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkOyAvLy9cblxuICAgIHJldHVybiB1bnByZWNlZGVudGVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoUmV3cml0dGVuTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiUmV3cml0dGVuTm9kZSIsInJld3JpdGUiLCJub25UZXJtaW5hbE5vZGUiLCJjbG9uZSIsInJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJwYXJlbnROb2RlIiwicmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZVJlZHVjZWROb2RlcyIsImNoaWxkTm9kZXMiLCJydWxlTmFtZSIsImdsb2JhbFRoaXMiLCJ3YXRjaGVkTm9kZSIsImlzVW5wcmVjZWRlbnRlZCIsIm5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQiLCJpc05vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQiLCJ1bnByZWNlZGVudGVkIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJvcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs0QkFMVzswQkFFZTt1QkFDbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsS0FBSztnQkFFbENDLElBQUFBLHFDQUE0QixFQUFDRjtnQkFFN0IsSUFBTUcsYUFBYUMsSUFBQUEsdUNBQThCLEVBQUNKO2dCQUVsRDtvQkFDRSxJQUFNQSxtQkFBa0JHLFlBQVksR0FBRztvQkFFdkNFLElBQUFBLDRCQUFtQixFQUFDTDtnQkFDdEI7Z0JBRUEsSUFBSUEsZ0JBQWdCTSxVQUFVLENBQUMsRUFBRSxDQUFDQyxRQUFRLEtBQUssS0FBSztvQkFDbERDLFdBQVdDLFdBQVcsR0FBR1Q7Z0JBQzNCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVYsa0JBQWtCLElBQUksRUFDdEJXLCtCQUErQkMsSUFBQUEsMENBQThCLEVBQUNaLGtCQUM5RGEsZ0JBQWdCRiw4QkFBOEIsR0FBRztnQkFFdkQsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNQLFFBQVEsRUFBRUQsVUFBVSxFQUFFUyxPQUFPO2dCQUFJLE9BQU9DLDZCQUFlLENBQUNGLGdDQUFnQyxDQTdCN0doQixlQTZCNkhTLFVBQVVELFlBQVlTO1lBQVU7OztXQTdCN0pqQjtFQUFzQmtCLDZCQUFlIn0=