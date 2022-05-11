"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _parts = require("../utilities/parts");
var _definition = require("../utilities/definition");
var _ruleName = require("../utilities/ruleName");
var _part = require("../utilities/part");
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var RewrittenDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RewrittenDefinition, Definition);
    var _super = _createSuper(RewrittenDefinition);
    function RewrittenDefinition() {
        _classCallCheck(this, RewrittenDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(RewrittenDefinition, null, [
        {
            key: "fromDefinitionAndLeftRecursiveRuleName",
            value: function fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
                var definitionLookAhead = (0, _definition).isDefinitionLookAhead(definition), parts = definition.getParts(), lookAhead = definitionLookAhead, rewrittenDefinition = repeatedDefinitionFromPartsLookAheadAndLeftRecursiveRuleName(parts, lookAhead, leftRecursiveRuleName);
                return rewrittenDefinition;
            }
        },
        {
            key: "fromDefinitionLeftRecursiveRuleNameAndImplicitlyLeftRecursiveDefinition",
            value: function fromDefinitionLeftRecursiveRuleNameAndImplicitlyLeftRecursiveDefinition(definition, leftRecursiveRuleName, implicitlyLeftRecursiveDefinition) {
                var definitionLookAhead = (0, _definition).isDefinitionLookAhead(definition), parts = implicitlyLeftRecursiveDefinition.getParts(), lookAhead = definitionLookAhead, rewrittenDefinition = repeatedDefinitionFromPartsLookAheadAndLeftRecursiveRuleName(parts, lookAhead, leftRecursiveRuleName);
                return rewrittenDefinition;
            }
        }
    ]);
    return RewrittenDefinition;
}(_occamParsers.Definition);
function repeatedDefinitionFromPartsLookAheadAndLeftRecursiveRuleName(parts, lookAhead, leftRecursiveRuleName) {
    parts = (0, _parts).cloneParts(parts); ///
    parts.shift(); ///
    var repeatedRuleName = (0, _ruleName).repeatedRuleNameFromRuleName(leftRecursiveRuleName), reducedLeftRecursiveRuleName = (0, _ruleName).reducedRuleNameFromRuleName(leftRecursiveRuleName), zeroOrMoreRepeatedRuleNamePart = (0, _part).zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName), reducedLeftRecursiveRuleNamePart = (0, _part).ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead), rewrittenDefinition = new RewrittenDefinition(parts);
    parts.unshift(reducedLeftRecursiveRuleNamePart);
    parts.push(zeroOrMoreRepeatedRuleNamePart);
    return rewrittenDefinition;
}
exports.default = RewrittenDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25VbmFyeSwgaXNEZWZpbml0aW9uTG9va0FoZWFkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lLCByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUsIHplcm9Pck1vcmVSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbiksXG4gICAgICAgICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZGVmaW5pdGlvbkxvb2tBaGVhZCwgIC8vL1xuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSByZXBlYXRlZERlZmluaXRpb25Gcm9tUGFydHNMb29rQWhlYWRBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocGFydHMsIGxvb2tBaGVhZCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbkxvb2tBaGVhZCA9IGlzRGVmaW5pdGlvbkxvb2tBaGVhZChkZWZpbml0aW9uKSxcbiAgICAgICAgICBwYXJ0cyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGRlZmluaXRpb25Mb29rQWhlYWQsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gcmVwZWF0ZWREZWZpbml0aW9uRnJvbVBhcnRzTG9va0FoZWFkQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHBhcnRzLCBsb29rQWhlYWQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBlYXRlZERlZmluaXRpb25Gcm9tUGFydHNMb29rQWhlYWRBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocGFydHMsIGxvb2tBaGVhZCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICBwYXJ0cy5zaGlmdCgpOyAgLy8vXG5cbiAgY29uc3QgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICB6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSB6ZXJvT3JNb3JlUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbG9va0FoZWFkKSxcbiAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzKTtcblxuICBwYXJ0cy51bnNoaWZ0KHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0KTtcblxuICBwYXJ0cy5wdXNoKHplcm9Pck1vcmVSZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG5cbiAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG59Il0sIm5hbWVzIjpbIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uTG9va0FoZWFkIiwiaXNEZWZpbml0aW9uTG9va0FoZWFkIiwicGFydHMiLCJnZXRQYXJ0cyIsImxvb2tBaGVhZCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJyZXBlYXRlZERlZmluaXRpb25Gcm9tUGFydHNMb29rQWhlYWRBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmcm9tRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJjbG9uZVBhcnRzIiwic2hpZnQiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZSIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwidW5zaGlmdCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFYyxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFFZixJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBO0FBQ1UsSUFBQSxXQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUNSLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFDaEIsSUFBQSxLQUFtQixXQUFuQixtQkFBbUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckYsSUFBQSxBQUFNQSxtQkFBbUIsaUJBb0JyQyxBQXBCWTs7O2FBQU1BLG1CQUFtQjs7Ozs7O1lBQy9CQyxHQUFzQyxFQUF0Q0Esd0NBQXNDO21CQUE3QyxTQUFPQSxzQ0FBc0MsQ0FBQ0MsVUFBVSxFQUFFQyxxQkFBcUIsRUFBRTtnQkFDL0UsSUFBTUMsbUJBQW1CLEdBQUdDLENBQUFBLEdBQUFBLFdBQXFCLEFBQVksQ0FBQSxzQkFBWixDQUFDSCxVQUFVLENBQUMsRUFDdkRJLEtBQUssR0FBR0osVUFBVSxDQUFDSyxRQUFRLEVBQUUsRUFDN0JDLFNBQVMsR0FBR0osbUJBQW1CLEVBQy9CSyxtQkFBbUIsR0FBR0MsNERBQTRELENBQUNKLEtBQUssRUFBRUUsU0FBUyxFQUFFTCxxQkFBcUIsQ0FBQyxBQUFDO2dCQUVsSSxPQUFPTSxtQkFBbUIsQ0FBQzthQUM1Qjs7O1lBRU1FLEdBQXVFLEVBQXZFQSx5RUFBdUU7bUJBQTlFLFNBQU9BLHVFQUF1RSxDQUFDVCxVQUFVLEVBQUVDLHFCQUFxQixFQUFFUyxpQ0FBaUMsRUFBRTtnQkFDbkosSUFBTVIsbUJBQW1CLEdBQUdDLENBQUFBLEdBQUFBLFdBQXFCLEFBQVksQ0FBQSxzQkFBWixDQUFDSCxVQUFVLENBQUMsRUFDdkRJLEtBQUssR0FBR00saUNBQWlDLENBQUNMLFFBQVEsRUFBRSxFQUNwREMsU0FBUyxHQUFHSixtQkFBbUIsRUFDL0JLLG1CQUFtQixHQUFHQyw0REFBNEQsQ0FBQ0osS0FBSyxFQUFFRSxTQUFTLEVBQUVMLHFCQUFxQixDQUFDLEFBQUM7Z0JBRWxJLE9BQU9NLG1CQUFtQixDQUFDO2FBQzVCOzs7O0NBQ0YsQ0FsQmdESSxhQUFVLFdBQUEsQ0FrQjFEO0FBRUQsU0FBU0gsNERBQTRELENBQUNKLEtBQUssRUFBRUUsU0FBUyxFQUFFTCxxQkFBcUIsRUFBRTtJQUM3R0csS0FBSyxHQUFHUSxDQUFBQSxHQUFBQSxNQUFVLEFBQU8sQ0FBQSxXQUFQLENBQUNSLEtBQUssQ0FBQyxDQUFDLENBQUUsR0FBRztJQUUvQkEsS0FBSyxDQUFDUyxLQUFLLEVBQUUsQ0FBQyxDQUFFLEdBQUc7SUFFbkIsSUFBTUMsZ0JBQWdCLEdBQUdDLENBQUFBLEdBQUFBLFNBQTRCLEFBQXVCLENBQUEsNkJBQXZCLENBQUNkLHFCQUFxQixDQUFDLEVBQ3RFZSw0QkFBNEIsR0FBR0MsQ0FBQUEsR0FBQUEsU0FBMkIsQUFBdUIsQ0FBQSw0QkFBdkIsQ0FBQ2hCLHFCQUFxQixDQUFDLEVBQ2pGaUIsOEJBQThCLEdBQUdDLENBQUFBLEdBQUFBLEtBQXNDLEFBQWtCLENBQUEsdUNBQWxCLENBQUNMLGdCQUFnQixDQUFDLEVBQ3pGTSxnQ0FBZ0MsR0FBR0MsQ0FBQUEsR0FBQUEsS0FBd0IsQUFBeUMsQ0FBQSx5QkFBekMsQ0FBQ0wsNEJBQTRCLEVBQUVWLFNBQVMsQ0FBQyxFQUNwR0MsbUJBQW1CLEdBQUcsSUFBSVQsbUJBQW1CLENBQUNNLEtBQUssQ0FBQyxBQUFDO0lBRTNEQSxLQUFLLENBQUNrQixPQUFPLENBQUNGLGdDQUFnQyxDQUFDLENBQUM7SUFFaERoQixLQUFLLENBQUNtQixJQUFJLENBQUNMLDhCQUE4QixDQUFDLENBQUM7SUFFM0MsT0FBT1gsbUJBQW1CLENBQUM7Q0FDNUI7a0JBcENvQlQsbUJBQW1CIn0=