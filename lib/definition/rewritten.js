"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
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
                var definitionLookAhead = (0, _definition).isDefinitionLookAhead(definition), lookAhead = definitionLookAhead, rewrittenDefinition = rewrittenDefinitionFromLookAheadAndLeftRecursiveRuleName(lookAhead, leftRecursiveRuleName);
                return rewrittenDefinition;
            }
        },
        {
            key: "fromDefinitionLeftRecursiveRuleNameAndImplicitlyLeftRecursiveDefinition",
            value: function fromDefinitionLeftRecursiveRuleNameAndImplicitlyLeftRecursiveDefinition(definition, leftRecursiveRuleName, implicitlyLeftRecursiveDefinition) {
                var definitionLookAhead = (0, _definition).isDefinitionLookAhead(definition), lookAhead = definitionLookAhead, rewrittenDefinition = rewrittenDefinitionFromLookAheadAndLeftRecursiveRuleName(lookAhead, leftRecursiveRuleName);
                return rewrittenDefinition;
            }
        }
    ]);
    return RewrittenDefinition;
}(_occamParsers.Definition);
function rewrittenDefinitionFromLookAheadAndLeftRecursiveRuleName(lookAhead, leftRecursiveRuleName) {
    var repeatedRuleName = (0, _ruleName).repeatedRuleNameFromRuleName(leftRecursiveRuleName), reducedLeftRecursiveRuleName = (0, _ruleName).reducedRuleNameFromRuleName(leftRecursiveRuleName), oneOrMoreRepeatedRuleNamePart = (0, _part).oneOrMoreRuleNamePartPartFromRuleName(repeatedRuleName), reducedLeftRecursiveRuleNamePart = (0, _part).ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead), parts = [
        reducedLeftRecursiveRuleNamePart,
        oneOrMoreRepeatedRuleNamePart
    ], rewrittenDefinition = new RewrittenDefinition(parts);
    return rewrittenDefinition;
}
exports.default = RewrittenDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxvb2tBaGVhZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lLCBvbmVPck1vcmVSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbiksXG4gICAgICAgICAgbG9va0FoZWFkID0gZGVmaW5pdGlvbkxvb2tBaGVhZCwgIC8vL1xuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uRnJvbUxvb2tBaGVhZEFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShsb29rQWhlYWQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbiksXG4gICAgICAgICAgbG9va0FoZWFkID0gZGVmaW5pdGlvbkxvb2tBaGVhZCwgIC8vL1xuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uRnJvbUxvb2tBaGVhZEFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShsb29rQWhlYWQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXR0ZW5EZWZpbml0aW9uRnJvbUxvb2tBaGVhZEFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShsb29rQWhlYWQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBjb25zdCByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIG9uZU9yTW9yZVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gb25lT3JNb3JlUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbG9va0FoZWFkKSxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgb25lT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnRcbiAgICAgICAgXSxcbiAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzKTtcblxuICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbn0iXSwibmFtZXMiOlsiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25Mb29rQWhlYWQiLCJpc0RlZmluaXRpb25Mb29rQWhlYWQiLCJsb29rQWhlYWQiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwicmV3cml0dGVuRGVmaW5pdGlvbkZyb21Mb29rQWhlYWRBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmcm9tRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJvbmVPck1vcmVSZXBlYXRlZFJ1bGVOYW1lUGFydCIsIm9uZU9yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInBhcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWMsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBRUosSUFBQSxXQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUNXLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFDakIsSUFBQSxLQUFtQixXQUFuQixtQkFBbUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBQSxBQUFNQSxtQkFBbUIsaUJBa0JyQyxBQWxCWTs7O2FBQU1BLG1CQUFtQjs7Ozs7O1lBQy9CQyxHQUFzQyxFQUF0Q0Esd0NBQXNDO21CQUE3QyxTQUFPQSxzQ0FBc0MsQ0FBQ0MsVUFBVSxFQUFFQyxxQkFBcUIsRUFBRTtnQkFDL0UsSUFBTUMsbUJBQW1CLEdBQUdDLENBQUFBLEdBQUFBLFdBQXFCLEFBQVksQ0FBQSxzQkFBWixDQUFDSCxVQUFVLENBQUMsRUFDdkRJLFNBQVMsR0FBR0YsbUJBQW1CLEVBQy9CRyxtQkFBbUIsR0FBR0Msd0RBQXdELENBQUNGLFNBQVMsRUFBRUgscUJBQXFCLENBQUMsQUFBQztnQkFFdkgsT0FBT0ksbUJBQW1CLENBQUM7YUFDNUI7OztZQUVNRSxHQUF1RSxFQUF2RUEseUVBQXVFO21CQUE5RSxTQUFPQSx1RUFBdUUsQ0FBQ1AsVUFBVSxFQUFFQyxxQkFBcUIsRUFBRU8saUNBQWlDLEVBQUU7Z0JBQ25KLElBQU1OLG1CQUFtQixHQUFHQyxDQUFBQSxHQUFBQSxXQUFxQixBQUFZLENBQUEsc0JBQVosQ0FBQ0gsVUFBVSxDQUFDLEVBQ3ZESSxTQUFTLEdBQUdGLG1CQUFtQixFQUMvQkcsbUJBQW1CLEdBQUdDLHdEQUF3RCxDQUFDRixTQUFTLEVBQUVILHFCQUFxQixDQUFDLEFBQUM7Z0JBRXZILE9BQU9JLG1CQUFtQixDQUFDO2FBQzVCOzs7O0NBQ0YsQ0FoQmdESSxhQUFVLFdBQUEsQ0FnQjFEO0FBRUQsU0FBU0gsd0RBQXdELENBQUNGLFNBQVMsRUFBRUgscUJBQXFCLEVBQUU7SUFDbEcsSUFBTVMsZ0JBQWdCLEdBQUdDLENBQUFBLEdBQUFBLFNBQTRCLEFBQXVCLENBQUEsNkJBQXZCLENBQUNWLHFCQUFxQixDQUFDLEVBQ3RFVyw0QkFBNEIsR0FBR0MsQ0FBQUEsR0FBQUEsU0FBMkIsQUFBdUIsQ0FBQSw0QkFBdkIsQ0FBQ1oscUJBQXFCLENBQUMsRUFDakZhLDZCQUE2QixHQUFHQyxDQUFBQSxHQUFBQSxLQUFxQyxBQUFrQixDQUFBLHNDQUFsQixDQUFDTCxnQkFBZ0IsQ0FBQyxFQUN2Rk0sZ0NBQWdDLEdBQUdDLENBQUFBLEdBQUFBLEtBQXdCLEFBQXlDLENBQUEseUJBQXpDLENBQUNMLDRCQUE0QixFQUFFUixTQUFTLENBQUMsRUFDcEdjLEtBQUssR0FBRztRQUNORixnQ0FBZ0M7UUFDaENGLDZCQUE2QjtLQUM5QixFQUNEVCxtQkFBbUIsR0FBRyxJQUFJUCxtQkFBbUIsQ0FBQ29CLEtBQUssQ0FBQyxBQUFDO0lBRTNELE9BQU9iLG1CQUFtQixDQUFDO0NBQzVCO2tCQTlCb0JQLG1CQUFtQiJ9