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
var _occamParsers = require("occam-parsers");
var _ruleName = require("../utilities/ruleName");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var RewrittenNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RewrittenNode, NonTerminalNode);
    var _super = _createSuper(RewrittenNode);
    function RewrittenNode() {
        _classCallCheck(this, RewrittenNode);
        return _super.apply(this, arguments);
    }
    _createClass(RewrittenNode, [
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(RewrittenNode.prototype), "clone", this).call(this, RewrittenNode);
            }
        }
    ], [
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
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _occamParsers.NonTerminalNode.fromRuleNameAndChildNodes(RewrittenNode, ruleName, childNodes);
            }
        }
    ]);
    return RewrittenNode;
}(_occamParsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShSZXdyaXR0ZW5Ob2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpIHtcbiAgICBjb25zdCByZWR1Y2VkTm9kZVJ1bGVOYW1lID0gcmVkdWNlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gcmVkdWNlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBuZXcgUmV3cml0dGVuTm9kZShydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVwZWF0ZWROb2RlKHJlcGVhdGVkTm9kZSkge1xuICAgIGNvbnN0IHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSByZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBuZXcgUmV3cml0dGVuTm9kZShydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1wbGljaXRseVJlZHVjZWROb2RlKGltcGxpY2l0bHlSZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IGltcGxpY2l0bHlSZWR1Y2VkTm9kZVJ1bGVOYW1lID0gaW1wbGljaXRseVJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZSA9IGltcGxpY2l0bHlSZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21JbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lKGltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBpbXBsaWNpdGx5UmVkdWNlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBuZXcgUmV3cml0dGVuTm9kZShydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSZXdyaXR0ZW5Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmV3cml0dGVuTm9kZSIsImNsb25lIiwiZnJvbVJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmV3cml0dGVuTm9kZSIsImZyb21SZXBlYXRlZE5vZGUiLCJyZXBlYXRlZE5vZGUiLCJyZXBlYXRlZE5vZGVSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIiwiZnJvbUltcGxpY2l0bHlSZWR1Y2VkTm9kZSIsImltcGxpY2l0bHlSZWR1Y2VkTm9kZSIsImltcGxpY2l0bHlSZWR1Y2VkTm9kZVJ1bGVOYW1lIiwiaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbUltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs0QkFKVzt3QkFFaUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEcsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVE7Z0JBQUUsT0FBTyxxQkFERUQsMEJBQ0lDLFNBQU4sSUFBSyxhQURIRDtZQUMwQjs7OztZQUV0Q0UsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCQyxXQUFXLEVBQUU7Z0JBQ2xDLElBQU1DLHNCQUFzQkQsWUFBWUUsV0FBVyxJQUM3Q0Msa0JBQWtCRixxQkFDbEJHLFdBQVdDLElBQUFBLHFDQUEyQixFQUFDRixrQkFDdkNHLGFBQWFOLFlBQVlPLGFBQWEsSUFDdENDLGdCQUFnQixJQVJMWCxjQVF1Qk8sVUFBVUU7Z0JBRWxELE9BQU9FO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVksRUFBRTtnQkFDcEMsSUFBTUMsdUJBQXVCRCxhQUFhUixXQUFXLElBQy9DVSxtQkFBbUJELHNCQUNuQlAsV0FBV1MsSUFBQUEsc0NBQTRCLEVBQUNELG1CQUN4Q04sYUFBYUksYUFBYUgsYUFBYSxJQUN2Q0MsZ0JBQWdCLElBbEJMWCxjQWtCdUJPLFVBQVVFO2dCQUVsRCxPQUFPRTtZQUNUOzs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxxQkFBcUIsRUFBRTtnQkFDdEQsSUFBTUMsZ0NBQWdDRCxzQkFBc0JiLFdBQVcsSUFDakVlLDRCQUE0QkQsK0JBQzVCWixXQUFXYyxJQUFBQSwrQ0FBcUMsRUFBQ0QsNEJBQ2pEWCxhQUFhUyxzQkFBc0JSLGFBQWEsSUFDaERDLGdCQUFnQixJQTVCTFgsY0E0QnVCTyxVQUFVRTtnQkFFbEQsT0FBT0U7WUFDVDs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQmYsUUFBUSxFQUFFRSxVQUFVLEVBQUU7Z0JBQUUsT0FBT2MsNkJBQWUsQ0FBQ0QseUJBQXlCLENBakN0RnRCLGVBaUNzR08sVUFBVUU7WUFBYTs7O1dBakM3SFQ7RUFBc0J1Qiw2QkFBZSJ9