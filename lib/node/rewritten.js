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
    _create_class(RewrittenNode, [
        {
            key: "isUnprecedented",
            value: function isUnprecedented() {
                var nonTerminalNode = this, nonTerminalNodeUnprecedented = (0, _precedence.isNonTerminalNodeUnprecedented)(nonTerminalNode), unprecedented = nonTerminalNodeUnprecedented; ///
                return unprecedented;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgeyByZXdyaXRlUmVkdWNlZE5vZGVzLCByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzLCByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Jld3JpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzVW5wcmVjZWRlbnRlZCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkID0gaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkKG5vblRlcm1pbmFsTm9kZSksXG4gICAgICAgICAgdW5wcmVjZWRlbnRlZCA9IG5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVucHJlY2VkZW50ZWQ7XG4gIH1cblxuICByZXdyaXRlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuY2xvbmUoKTtcblxuICAgIHJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKTtcblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKTtcblxuICAgIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHBhcmVudE5vZGU7IC8vL1xuXG4gICAgICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFJld3JpdHRlbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG4iXSwibmFtZXMiOlsiUmV3cml0dGVuTm9kZSIsImlzVW5wcmVjZWRlbnRlZCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQiLCJpc05vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQiLCJ1bnByZWNlZGVudGVkIiwicmV3cml0ZSIsImNsb25lIiwicmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInBhcmVudE5vZGUiLCJyZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlUmVkdWNlZE5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7NEJBTFc7MEJBRWU7dUJBQ21EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFBLEFBQU1BLDhCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0IsSUFBSSxFQUN0QkMsK0JBQStCQyxJQUFBQSwwQ0FBOEIsRUFBQ0Ysa0JBQzlERyxnQkFBZ0JGLDhCQUE4QixHQUFHO2dCQUV2RCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLGtCQUFrQixJQUFJLENBQUNLLEtBQUs7Z0JBRWxDQyxJQUFBQSxxQ0FBNEIsRUFBQ047Z0JBRTdCLElBQU1PLGFBQWFDLElBQUFBLHVDQUE4QixFQUFDUjtnQkFFbEQ7b0JBQ0UsSUFBTUEsbUJBQWtCTyxZQUFZLEdBQUc7b0JBRXZDRSxJQUFBQSw0QkFBbUIsRUFBQ1Q7Z0JBQ3RCO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyw2QkFBZSxDQUFDSixnQ0FBZ0MsQ0F6QjdHWixlQXlCNkhhLFVBQVVDLFlBQVlDO1lBQVU7OztXQXpCN0pmO0VBQXNCZ0IsNkJBQWUifQ==