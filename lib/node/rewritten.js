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
                nonTerminalNode = _$NonTerminalNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity);
                nonTerminalNode.setPrecedence(precedence);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgeyByZXdyaXRlUmVkdWNlZE5vZGVzLCByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzLCByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Jld3JpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHJld3JpdGUoc3RhdGUpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gc3RhdGUuTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuY2xvbmUoKTtcblxuICAgIGNvbnN0IG9wYWNpdHkgPSBub25UZXJtaW5hbE5vZGUuZ2V0T3BhY2l0eSgpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBub25UZXJtaW5hbE5vZGUuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuXG4gICAgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUsIHN0YXRlKTtcblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlLCBzdGF0ZSk7XG5cbiAgICB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBwYXJlbnROb2RlOyAvLy9cblxuICAgICAgcmV3cml0ZVJlZHVjZWROb2Rlcyhub25UZXJtaW5hbE5vZGUsIHN0YXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNVbnByZWNlZGVudGVkKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQgPSBpc05vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQobm9uVGVybWluYWxOb2RlKSxcbiAgICAgICAgICB1bnByZWNlZGVudGVkID0gbm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZDsgLy8vXG5cbiAgICByZXR1cm4gdW5wcmVjZWRlbnRlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFJld3JpdHRlbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlJld3JpdHRlbk5vZGUiLCJyZXdyaXRlIiwic3RhdGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lIiwiY2xvbmUiLCJvcGFjaXR5IiwiZ2V0T3BhY2l0eSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInNldFByZWNlZGVuY2UiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicGFyZW50Tm9kZSIsInJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJld3JpdGVSZWR1Y2VkTm9kZXMiLCJpc1VucHJlY2VkZW50ZWQiLCJub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIiwiaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIiwidW5wcmVjZWRlbnRlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7NEJBTFc7MEJBRWU7dUJBQ21EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsS0FBSztnQkFDWCxJQUFJQztnQkFFSixJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsb0JBQWtCSixNQUFNSywyQkFBMkIsQ0FBQ0g7Z0JBRTFERCxrQkFBa0IsSUFBSSxDQUFDSyxLQUFLO2dCQUU1QixJQUFNQyxVQUFVTixnQkFBZ0JPLFVBQVUsSUFDcENDLGFBQWFSLGdCQUFnQlMsYUFBYSxJQUMxQ0MsYUFBYVYsZ0JBQWdCVyxhQUFhO2dCQUVoRFgsa0JBQWtCRyxrQkFBZ0JTLGdDQUFnQyxDQUFDWCxVQUFVTyxZQUFZRjtnQkFFekZOLGdCQUFnQmEsYUFBYSxDQUFDSDtnQkFFOUJJLElBQUFBLHFDQUE0QixFQUFDZCxpQkFBaUJEO2dCQUU5QyxJQUFNZ0IsYUFBYUMsSUFBQUEsdUNBQThCLEVBQUNoQixpQkFBaUJEO2dCQUVuRTtvQkFDRSxJQUFNQyxtQkFBa0JlLFlBQVksR0FBRztvQkFFdkNFLElBQUFBLDRCQUFtQixFQUFDakIsa0JBQWlCRDtnQkFDdkM7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWxCLGtCQUFrQixJQUFJLEVBQ3RCbUIsK0JBQStCQyxJQUFBQSwwQ0FBOEIsRUFBQ3BCLGtCQUM5RHFCLGdCQUFnQkYsOEJBQThCLEdBQUc7Z0JBRXZELE9BQU9FO1lBQ1Q7Ozs7WUFFT1QsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDWCxRQUFRLEVBQUVPLFVBQVUsRUFBRUYsT0FBTztnQkFBSSxPQUFPSCw2QkFBZSxDQUFDUyxnQ0FBZ0MsQ0F0QzdHZixlQXNDNkhJLFVBQVVPLFlBQVlGO1lBQVU7OztXQXRDN0pUO0VBQXNCTSw2QkFBZSJ9