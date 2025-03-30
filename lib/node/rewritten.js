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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgeyByZXdyaXRlUmVkdWNlZE5vZGVzLCByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzLCByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Jld3JpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHJld3JpdGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcy5jbG9uZSgpO1xuXG4gICAgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gcGFyZW50Tm9kZTsgLy8vXG5cbiAgICAgIHJld3JpdGVSZWR1Y2VkTm9kZXMobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNVbnByZWNlZGVudGVkKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQgPSBpc05vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQobm9uVGVybWluYWxOb2RlKSxcbiAgICAgICAgICB1bnByZWNlZGVudGVkID0gbm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZDsgLy8vXG5cbiAgICByZXR1cm4gdW5wcmVjZWRlbnRlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFJld3JpdHRlbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlJld3JpdHRlbk5vZGUiLCJyZXdyaXRlIiwibm9uVGVybWluYWxOb2RlIiwiY2xvbmUiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicGFyZW50Tm9kZSIsInJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJld3JpdGVSZWR1Y2VkTm9kZXMiLCJpc1VucHJlY2VkZW50ZWQiLCJub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIiwiaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIiwidW5wcmVjZWRlbnRlZCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7NEJBTFc7MEJBRWU7dUJBQ21EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQixJQUFJLENBQUNDLEtBQUs7Z0JBRWxDQyxJQUFBQSxxQ0FBNEIsRUFBQ0Y7Z0JBRTdCLElBQU1HLGFBQWFDLElBQUFBLHVDQUE4QixFQUFDSjtnQkFFbEQ7b0JBQ0UsSUFBTUEsbUJBQWtCRyxZQUFZLEdBQUc7b0JBRXZDRSxJQUFBQSw0QkFBbUIsRUFBQ0w7Z0JBQ3RCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sa0JBQWtCLElBQUksRUFDdEJPLCtCQUErQkMsSUFBQUEsMENBQThCLEVBQUNSLGtCQUM5RFMsZ0JBQWdCRiw4QkFBOEIsR0FBRztnQkFFdkQsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLDZCQUFlLENBQUNKLGdDQUFnQyxDQXpCN0daLGVBeUI2SGEsVUFBVUMsWUFBWUM7WUFBVTs7O1dBekI3SmY7RUFBc0JnQiw2QkFBZSJ9