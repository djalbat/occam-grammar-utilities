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
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(RewrittenNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return RewrittenNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgeyByZXdyaXRlUmVkdWNlZE5vZGVzLCByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzLCByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Jld3JpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzVW5wcmVjZWRlbnRlZCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkID0gaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkKG5vblRlcm1pbmFsTm9kZSksXG4gICAgICAgICAgdW5wcmVjZWRlbnRlZCA9IG5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVucHJlY2VkZW50ZWQ7XG4gIH1cblxuICByZXdyaXRlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuY2xvbmUoKTtcblxuICAgIHJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKTtcblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKTtcblxuICAgIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHBhcmVudE5vZGU7IC8vL1xuXG4gICAgICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKFJld3JpdHRlbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG5cbiJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5Ob2RlIiwiaXNVbnByZWNlZGVudGVkIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCIsImlzTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiLCJyZXdyaXRlIiwiY2xvbmUiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicGFyZW50Tm9kZSIsInJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJld3JpdGVSZWR1Y2VkTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs0QkFMVzswQkFFZTt1QkFDbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQUEsQUFBTUEsOEJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQixJQUFJLEVBQ3RCQywrQkFBK0JDLElBQUFBLDBDQUE4QixFQUFDRixrQkFDOURHLGdCQUFnQkYsOEJBQThCLEdBQUc7Z0JBRXZELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosa0JBQWtCLElBQUksQ0FBQ0ssS0FBSztnQkFFbENDLElBQUFBLHFDQUE0QixFQUFDTjtnQkFFN0IsSUFBTU8sYUFBYUMsSUFBQUEsdUNBQThCLEVBQUNSO2dCQUVsRDtvQkFDRSxJQUFNQSxtQkFBa0JPLFlBQVksR0FBRztvQkFFdkNFLElBQUFBLDRCQUFtQixFQUFDVDtnQkFDdEI7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxTQUFTO2dCQUFJLE9BQU9DLDZCQUFlLENBQUNKLGtDQUFrQyxDQXpCbkhaLGVBeUJtSWEsVUFBVUMsWUFBWUM7WUFBWTs7O1dBekJyS2Y7RUFBc0JnQiw2QkFBZSJ9