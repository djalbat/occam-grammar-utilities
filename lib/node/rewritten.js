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
                var reducedNodeRuleName = reducedNode.getRuleName(), reducedRuleName = reducedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName), childNodes = reducedNode.getChildNodes(), rewrittenNode = new RewrittenNode(ruleName, childNodes);
                return rewrittenNode;
            }
        },
        {
            key: "fromRepeatedNode",
            value: function fromRepeatedNode(repeatedNode) {
                var repeatedNodeRuleName = repeatedNode.getRuleName(), repeatedRuleName = repeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromRepeatedRuleName)(repeatedRuleName), childNodes = repeatedNode.getChildNodes(), rewrittenNode = new RewrittenNode(ruleName, childNodes);
                return rewrittenNode;
            }
        },
        {
            key: "fromImplicitlyReducedNode",
            value: function fromImplicitlyReducedNode(implicitlyReducedNode) {
                var implicitlyReducedNodeRuleName = implicitlyReducedNode.getRuleName(), implicitlyReducedRuleName = implicitlyReducedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromImplicitlyReducedRuleName)(implicitlyReducedRuleName), childNodes = implicitlyReducedNode.getChildNodes(), rewrittenNode = new RewrittenNode(ruleName, childNodes);
                return rewrittenNode;
            }
        },
        {
            key: "fromIndirectlyRepeatedNode",
            value: function fromIndirectlyRepeatedNode(indirectlyRepeatedNode) {
                var indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName), childNodes = indirectlyRepeatedNode.getChildNodes(), rewrittenNode = new RewrittenNode(ruleName, childNodes);
                return rewrittenNode;
            }
        },
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _occamparsers.NonTerminalNode.fromRuleNameAndChildNodes(RewrittenNode, ruleName, childNodes);
            }
        }
    ]);
    return RewrittenNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLFxuICAgICAgICAgcnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZSxcbiAgICAgICAgIHJ1bGVOYW1lRnJvbUltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWUsXG4gICAgICAgICBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpIHtcbiAgICBjb25zdCByZWR1Y2VkTm9kZVJ1bGVOYW1lID0gcmVkdWNlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gcmVkdWNlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBuZXcgUmV3cml0dGVuTm9kZShydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVwZWF0ZWROb2RlKHJlcGVhdGVkTm9kZSkge1xuICAgIGNvbnN0IHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSByZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBuZXcgUmV3cml0dGVuTm9kZShydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1wbGljaXRseVJlZHVjZWROb2RlKGltcGxpY2l0bHlSZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlSZWR1Y2VkTm9kZVJ1bGVOYW1lID0gaW1wbGljaXRseVJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZSA9IGltcGxpY2l0bHlSZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21JbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lKGltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBpbXBsaWNpdGx5UmVkdWNlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBuZXcgUmV3cml0dGVuTm9kZShydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseVJlcGVhdGVkTm9kZShpbmRpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gbmV3IFJld3JpdHRlbk5vZGUocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUmV3cml0dGVuTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJld3JpdHRlbk5vZGUiLCJmcm9tUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyZXdyaXR0ZW5Ob2RlIiwiZnJvbVJlcGVhdGVkTm9kZSIsInJlcGVhdGVkTm9kZSIsInJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUiLCJmcm9tSW1wbGljaXRseVJlZHVjZWROb2RlIiwiaW1wbGljaXRseVJlZHVjZWROb2RlIiwiaW1wbGljaXRseVJlZHVjZWROb2RlUnVsZU5hbWUiLCJpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZSIsImZyb21JbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0QkFQVzt3QkFLdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCQyxXQUFXLEVBQUU7Z0JBQ2xDLElBQU1DLHNCQUFzQkQsWUFBWUUsV0FBVyxJQUM3Q0Msa0JBQWtCRixxQkFDbEJHLFdBQVdDLElBQUFBLHFDQUEyQixFQUFDRixrQkFDdkNHLGFBQWFOLFlBQVlPLGFBQWEsSUFDdENDLGdCQUFnQixJQU5MVixjQU11Qk0sVUFBVUU7Z0JBRWxELE9BQU9FO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVksRUFBRTtnQkFDcEMsSUFBTUMsdUJBQXVCRCxhQUFhUixXQUFXLElBQy9DVSxtQkFBbUJELHNCQUNuQlAsV0FBV1MsSUFBQUEsc0NBQTRCLEVBQUNELG1CQUN4Q04sYUFBYUksYUFBYUgsYUFBYSxJQUN2Q0MsZ0JBQWdCLElBaEJMVixjQWdCdUJNLFVBQVVFO2dCQUVsRCxPQUFPRTtZQUNUOzs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxxQkFBcUIsRUFBRTtnQkFDdEQsSUFBTUMsZ0NBQWdDRCxzQkFBc0JiLFdBQVcsSUFDakVlLDRCQUE0QkQsK0JBQzVCWixXQUFXYyxJQUFBQSwrQ0FBcUMsRUFBQ0QsNEJBQ2pEWCxhQUFhUyxzQkFBc0JSLGFBQWEsSUFDaERDLGdCQUFnQixJQTFCTFYsY0EwQnVCTSxVQUFVRTtnQkFFbEQsT0FBT0U7WUFDVDs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQkMsc0JBQXNCLEVBQUU7Z0JBQ3hELElBQU1DLGlDQUFpQ0QsdUJBQXVCbEIsV0FBVyxJQUNuRW9CLDZCQUE2QkQsZ0NBQzdCakIsV0FBV21CLElBQUFBLGdEQUFzQyxFQUFDRCw2QkFDbERoQixhQUFhYyx1QkFBdUJiLGFBQWEsSUFDakRDLGdCQUFnQixJQXBDTFYsY0FvQ3VCTSxVQUFVRTtnQkFFbEQsT0FBT0U7WUFDVDs7O1lBRU9nQixLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJwQixRQUFRLEVBQUVFLFVBQVUsRUFBRTtnQkFBRSxPQUFPbUIsNkJBQWUsQ0FBQ0QseUJBQXlCLENBekN0RjFCLGVBeUNzR00sVUFBVUU7WUFBYTs7O1dBekM3SFI7RUFBc0IyQiw2QkFBZSJ9