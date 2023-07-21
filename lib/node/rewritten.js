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
var _nodes = require("../utilities/nodes");
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
var RewrittenNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RewrittenNode, NonTerminalNode);
    var _super = _create_super(RewrittenNode);
    function RewrittenNode() {
        _class_call_check(this, RewrittenNode);
        return _super.apply(this, arguments);
    }
    _create_class(RewrittenNode, [
        {
            key: "getPreviousChildNodes",
            value: function getPreviousChildNodes() {
                return this.previousChildNodes;
            }
        },
        {
            key: "rewrite",
            value: function rewrite() {
                var nonTerminalNode = this.clone();
                (0, _nodes.rewriteDirectlyRepeatedNodes)(nonTerminalNode);
                var parentNode = (0, _nodes.rewriteIndirectlyRepeatedNodes)(nonTerminalNode);
                {
                    var nonTerminalNode1 = parentNode; ///
                    (0, _nodes.rewriteReducedNodes)(nonTerminalNode1);
                }
                return nonTerminalNode;
            }
        },
        {
            key: "setPrecedence",
            value: function setPrecedence(precedence) {
            ///
            }
        },
        {
            key: "rewritePrecedence",
            value: function rewritePrecedence(precedence) {
                _get(_get_prototype_of(RewrittenNode.prototype), "setPrecedence", this).call(this, precedence);
            }
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgcmV3cml0ZVJlZHVjZWROb2RlcywgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcywgcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0UHJldmlvdXNDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLnByZXZpb3VzQ2hpbGROb2RlcztcbiAgfVxuXG4gIHJld3JpdGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcy5jbG9uZSgpO1xuXG4gICAgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gcGFyZW50Tm9kZTsgLy8vXG5cbiAgICAgIHJld3JpdGVSZWR1Y2VkTm9kZXMobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgLy8vXG4gIH1cblxuICByZXdyaXRlUHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgc3VwZXIuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpIHtcbiAgICBjb25zdCByZWR1Y2VkTm9kZVJ1bGVOYW1lID0gcmVkdWNlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gcmVkdWNlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSByZWR1Y2VkTm9kZS5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgcmV3cml0dGVuTm9kZSA9IG5ldyBSZXdyaXR0ZW5Ob2RlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFJld3JpdHRlbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKFJld3JpdHRlbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5Ob2RlIiwiZ2V0UHJldmlvdXNDaGlsZE5vZGVzIiwicHJldmlvdXNDaGlsZE5vZGVzIiwicmV3cml0ZSIsIm5vblRlcm1pbmFsTm9kZSIsImNsb25lIiwicmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInBhcmVudE5vZGUiLCJyZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlUmVkdWNlZE5vZGVzIiwic2V0UHJlY2VkZW5jZSIsInByZWNlZGVuY2UiLCJyZXdyaXRlUHJlY2VkZW5jZSIsImZyb21SZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImdldFByZWNlZGVuY2UiLCJyZXdyaXR0ZW5Ob2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs0QkFMVzt3QkFFWTtxQkFDc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkYsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDQyxrQkFBa0I7WUFDaEM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsS0FBSztnQkFFbENDLElBQUFBLG1DQUE0QixFQUFDRjtnQkFFN0IsSUFBTUcsYUFBYUMsSUFBQUEscUNBQThCLEVBQUNKO2dCQUVsRDtvQkFDRSxJQUFNQSxtQkFBa0JHLFlBQVksR0FBRztvQkFFdkNFLElBQUFBLDBCQUFtQixFQUFDTDtnQkFDdEI7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxVQUFVO1lBQ3RCLEdBQUc7WUFDTDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JELFVBQVU7Z0JBQzFCLHVCQTFCaUJYLDBCQTBCWFUsaUJBQU4sSUFBSyxhQUFlQztZQUN0Qjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JDLFdBQVc7Z0JBQ2hDLElBQU1DLHNCQUFzQkQsWUFBWUUsV0FBVyxJQUM3Q0Msa0JBQWtCRixxQkFDbEJHLFdBQVdDLElBQUFBLHFDQUEyQixFQUFDRixrQkFDdkNHLGFBQWFOLFlBQVlPLGFBQWEsSUFDdENWLGFBQWFHLFlBQVlRLGFBQWEsSUFDdENDLGdCQUFnQixJQW5DTHZCLGNBbUN1QmtCLFVBQVVFLFlBQVlUO2dCQUU5RCxPQUFPWTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCTixRQUFRLEVBQUVFLFVBQVU7Z0JBQUksT0FBT0ssNkJBQWUsQ0FBQ0QseUJBQXlCLENBeEN0RnhCLGVBd0NzR2tCLFVBQVVFO1lBQWE7OztZQUV6SU0sS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DUixRQUFRLEVBQUVFLFVBQVUsRUFBRVQsVUFBVTtnQkFBSSxPQUFPYyw2QkFBZSxDQUFDQyxtQ0FBbUMsQ0ExQ3RIMUIsZUEwQ3NJa0IsVUFBVUUsWUFBWVQ7WUFBYTs7O1dBMUN6S1g7RUFBc0J5Qiw2QkFBZSJ9