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
    _createClass(RewrittenNode, null, [
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
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _occamParsers.NonTerminalNode.fromRuleNameAndChildNodes(RewrittenNode, ruleName, childNodes);
            }
        }
    ]);
    return RewrittenNode;
}(_occamParsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSByZWR1Y2VkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcmV3cml0dGVuTm9kZSA9IG5ldyBSZXdyaXR0ZW5Ob2RlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZXBlYXRlZE5vZGUocmVwZWF0ZWROb2RlKSB7XG4gICAgY29uc3QgcmVwZWF0ZWROb2RlUnVsZU5hbWUgPSByZXBlYXRlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcmV3cml0dGVuTm9kZSA9IG5ldyBSZXdyaXR0ZW5Ob2RlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFJld3JpdHRlbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5Ob2RlIiwiZnJvbVJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmV3cml0dGVuTm9kZSIsImZyb21SZXBlYXRlZE5vZGUiLCJyZXBlYXRlZE5vZGUiLCJyZXBlYXRlZE5vZGVSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBTVFBLGFBQWE7Ozs0QkFKRixlQUFlO3dCQUUyQix1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLElBQUEsQUFBTUEsYUFBYSxpQkFBbkI7OzthQUFNQSxhQUFhOzs7Ozs7WUFDekJDLEdBQWUsRUFBZkEsaUJBQWU7bUJBQXRCLFNBQU9BLGVBQWUsQ0FBQ0MsV0FBVyxFQUFFO2dCQUNsQyxJQUFNQyxtQkFBbUIsR0FBR0QsV0FBVyxDQUFDRSxXQUFXLEVBQUUsRUFDL0NDLGVBQWUsR0FBR0YsbUJBQW1CLEVBQ3JDRyxRQUFRLEdBQUdDLElBQUFBLFNBQTJCLDRCQUFBLEVBQUNGLGVBQWUsQ0FBQyxFQUN2REcsVUFBVSxHQUFHTixXQUFXLENBQUNPLGFBQWEsRUFBRSxFQUN4Q0MsYUFBYSxHQUFHLElBQUlWLGFBQWEsQ0FBQ00sUUFBUSxFQUFFRSxVQUFVLENBQUMsQUFBQztnQkFFOUQsT0FBT0UsYUFBYSxDQUFDO2FBQ3RCOzs7WUFFTUMsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBdkIsU0FBT0EsZ0JBQWdCLENBQUNDLFlBQVksRUFBRTtnQkFDcEMsSUFBTUMsb0JBQW9CLEdBQUdELFlBQVksQ0FBQ1IsV0FBVyxFQUFFLEVBQ2pEVSxnQkFBZ0IsR0FBR0Qsb0JBQW9CLEVBQ3ZDUCxRQUFRLEdBQUdTLElBQUFBLFNBQTRCLDZCQUFBLEVBQUNELGdCQUFnQixDQUFDLEVBQ3pETixVQUFVLEdBQUdJLFlBQVksQ0FBQ0gsYUFBYSxFQUFFLEVBQ3pDQyxhQUFhLEdBQUcsSUFBSVYsYUFBYSxDQUFDTSxRQUFRLEVBQUVFLFVBQVUsQ0FBQyxBQUFDO2dCQUU5RCxPQUFPRSxhQUFhLENBQUM7YUFDdEI7OztZQUVNTSxHQUF5QixFQUF6QkEsMkJBQXlCO21CQUFoQyxTQUFPQSx5QkFBeUIsQ0FBQ1YsUUFBUSxFQUFFRSxVQUFVLEVBQUU7Z0JBQUUsT0FBT1MsYUFBZSxnQkFBQSxDQUFDRCx5QkFBeUIsQ0FBQ2hCLGFBQWEsRUFBRU0sUUFBUSxFQUFFRSxVQUFVLENBQUMsQ0FBQzthQUFFOzs7O0NBQ2xKLENBdEIwQ1MsYUFBZSxnQkFBQSxDQXNCekQifQ==