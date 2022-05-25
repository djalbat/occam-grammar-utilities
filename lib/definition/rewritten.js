"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _parts = require("../utilities/parts");
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
var first = _necessary.arrayUtilities.first;
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
                var parts;
                parts = definition.getParts();
                parts = (0, _parts).cloneParts(parts); ///
                var part = parts.shift(), reducedLeftRecursiveRuleNamePart = reducedLeftRecursiveRuleNamePartFromPartAndLeftRecursiveRuleName(part, leftRecursiveRuleName), optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromParts(parts);
                parts = [
                    reducedLeftRecursiveRuleNamePart,
                    optionalOneOrMorePartOrSequenceOfParts
                ];
                var rewrittenDefinition = new RewrittenDefinition(parts);
                return rewrittenDefinition;
            }
        }
    ]);
    return RewrittenDefinition;
}(_occamParsers.Definition);
function optionalOneOrMorePartOrSequenceOfPartsFromParts(parts) {
    var optionalOneOrMorePartOrSequenceOfParts;
    var partsLength = parts.length;
    if (partsLength === 1) {
        var firstPart = first(parts), part = firstPart, optionalOneOrMorePartsPart = (0, _part).optionalOneOrMorePartsPartFromPart(part);
        optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartsPart; ///
    } else {
        var sequenceOfPartsPart = (0, _part).sequenceOfPartsPartFromParts(parts), optionalOneOrMoreSequenceOfPartsPart = (0, _part).optionalOneOrMorePartsPartFromPart(sequenceOfPartsPart);
        optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMoreSequenceOfPartsPart; ///
    }
    return optionalOneOrMorePartOrSequenceOfParts;
}
function reducedLeftRecursiveRuleNamePartFromPartAndLeftRecursiveRuleName(part, leftRecursiveRuleName) {
    var partLookAhead = (0, _part).isPartLookAhead(part), lookAhead = partLookAhead, reducedLeftRecursiveRuleName = (0, _ruleName).reducedRuleNameFromRuleName(leftRecursiveRuleName), reducedLeftRecursiveRuleNamePart = (0, _part).ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead);
    return reducedLeftRecursiveRuleNamePart;
}
exports.default = RewrittenDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzUGFydExvb2tBaGVhZCwgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lLCBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRzLCBvcHRpb25hbE9uZU9yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBsZXQgcGFydHM7XG5cbiAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHBhcnQgPSBwYXJ0cy5zaGlmdCgpLFxuICAgICAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnRGcm9tUGFydEFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIG9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzID0gb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCxcbiAgICAgIG9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzXG4gICAgXTtcblxuICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxuXG4gIC8vIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAvLyAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbiksXG4gIC8vICAgICAgICAgbG9va0FoZWFkID0gZGVmaW5pdGlvbkxvb2tBaGVhZCwgIC8vL1xuICAvLyAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uRnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUobG9va0FoZWFkLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuICAvL1xuICAvLyAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuICAvLyB9XG59XG5cbmZ1bmN0aW9uIG9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzRnJvbVBhcnRzKHBhcnRzKSB7XG4gIGxldCBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cztcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0c1BhcnQgPSBvcHRpb25hbE9uZU9yTW9yZVBhcnRzUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHMgPSBvcHRpb25hbE9uZU9yTW9yZVBhcnRzUGFydDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBvcHRpb25hbE9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbE9uZU9yTW9yZVBhcnRzUGFydEZyb21QYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpO1xuXG4gICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHMgPSBvcHRpb25hbE9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cztcbn1cblxuZnVuY3Rpb24gcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnRGcm9tUGFydEFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgcGFydExvb2tBaGVhZCA9IGlzUGFydExvb2tBaGVhZChwYXJ0KSxcbiAgICAgICAgbG9va0FoZWFkID0gcGFydExvb2tBaGVhZCwgIC8vL1xuICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgcmV0dXJuIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0O1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicGFydHMiLCJnZXRQYXJ0cyIsImNsb25lUGFydHMiLCJwYXJ0Iiwic2hpZnQiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0RnJvbVBhcnRBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cyIsIm9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzRnJvbVBhcnRzIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UGFydCIsIm9wdGlvbmFsT25lT3JNb3JlUGFydHNQYXJ0Iiwib3B0aW9uYWxPbmVPck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRzIiwib3B0aW9uYWxPbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydExvb2tBaGVhZCIsImlzUGFydExvb2tBaGVhZCIsImxvb2tBaGVhZCIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFYyxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDWCxJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFZixJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBO0FBQ0gsSUFBQSxTQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTtBQUN5RCxJQUFBLEtBQW1CLFdBQW5CLG1CQUFtQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvSSxJQUFNLEFBQUVBLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEFBQUM7QUFFbEIsSUFBQSxBQUFNRSxtQkFBbUIsaUJBK0JyQyxBQS9CWTs7O2FBQU1BLG1CQUFtQjs7Ozs7O1lBQy9CQyxHQUFzQyxFQUF0Q0Esd0NBQXNDO21CQUE3QyxTQUFPQSxzQ0FBc0MsQ0FBQ0MsVUFBVSxFQUFFQyxxQkFBcUIsRUFBRTtnQkFDL0UsSUFBSUMsS0FBSyxBQUFDO2dCQUVWQSxLQUFLLEdBQUdGLFVBQVUsQ0FBQ0csUUFBUSxFQUFFLENBQUM7Z0JBRTlCRCxLQUFLLEdBQUdFLENBQUFBLEdBQUFBLE1BQVUsQUFBTyxDQUFBLFdBQVAsQ0FBQ0YsS0FBSyxDQUFDLENBQUMsQ0FBRSxHQUFHO2dCQUUvQixJQUFNRyxJQUFJLEdBQUdILEtBQUssQ0FBQ0ksS0FBSyxFQUFFLEVBQ3BCQyxnQ0FBZ0MsR0FBR0MsZ0VBQWdFLENBQUNILElBQUksRUFBRUoscUJBQXFCLENBQUMsRUFDaElRLHNDQUFzQyxHQUFHQywrQ0FBK0MsQ0FBQ1IsS0FBSyxDQUFDLEFBQUM7Z0JBRXRHQSxLQUFLLEdBQUc7b0JBQ05LLGdDQUFnQztvQkFDaENFLHNDQUFzQztpQkFDdkMsQ0FBQztnQkFFRixJQUFNRSxtQkFBbUIsR0FBRyxJQUFJYixtQkFBbUIsQ0FBQ0ksS0FBSyxDQUFDLEFBQUM7Z0JBRTNELE9BQU9TLG1CQUFtQixDQUFDO2FBQzVCOzs7O0NBU0YsQ0E3QmdEQyxhQUFVLFdBQUEsQ0E2QjFEO0FBRUQsU0FBU0YsK0NBQStDLENBQUNSLEtBQUssRUFBRTtJQUM5RCxJQUFJTyxzQ0FBc0MsQUFBQztJQUUzQyxJQUFNSSxXQUFXLEdBQUdYLEtBQUssQ0FBQ1ksTUFBTSxBQUFDO0lBRWpDLElBQUlELFdBQVcsS0FBSyxDQUFDLEVBQUU7UUFDckIsSUFBTUUsU0FBUyxHQUFHbkIsS0FBSyxDQUFDTSxLQUFLLENBQUMsRUFDeEJHLElBQUksR0FBR1UsU0FBUyxFQUNoQkMsMEJBQTBCLEdBQUdDLENBQUFBLEdBQUFBLEtBQWtDLEFBQU0sQ0FBQSxtQ0FBTixDQUFDWixJQUFJLENBQUMsQUFBQztRQUU1RUksc0NBQXNDLEdBQUdPLDBCQUEwQixDQUFDLENBQUUsR0FBRztLQUMxRSxNQUFNO1FBQ0wsSUFBTUUsbUJBQW1CLEdBQUdDLENBQUFBLEdBQUFBLEtBQTRCLEFBQU8sQ0FBQSw2QkFBUCxDQUFDakIsS0FBSyxDQUFDLEVBQ3pEa0Isb0NBQW9DLEdBQUdILENBQUFBLEdBQUFBLEtBQWtDLEFBQXFCLENBQUEsbUNBQXJCLENBQUNDLG1CQUFtQixDQUFDLEFBQUM7UUFFckdULHNDQUFzQyxHQUFHVyxvQ0FBb0MsQ0FBQyxDQUFFLEdBQUc7S0FDcEY7SUFFRCxPQUFPWCxzQ0FBc0MsQ0FBQztDQUMvQztBQUVELFNBQVNELGdFQUFnRSxDQUFDSCxJQUFJLEVBQUVKLHFCQUFxQixFQUFFO0lBQ3JHLElBQU1vQixhQUFhLEdBQUdDLENBQUFBLEdBQUFBLEtBQWUsQUFBTSxDQUFBLGdCQUFOLENBQUNqQixJQUFJLENBQUMsRUFDckNrQixTQUFTLEdBQUdGLGFBQWEsRUFDekJHLDRCQUE0QixHQUFHQyxDQUFBQSxHQUFBQSxTQUEyQixBQUF1QixDQUFBLDRCQUF2QixDQUFDeEIscUJBQXFCLENBQUMsRUFDakZNLGdDQUFnQyxHQUFHbUIsQ0FBQUEsR0FBQUEsS0FBd0IsQUFBeUMsQ0FBQSx5QkFBekMsQ0FBQ0YsNEJBQTRCLEVBQUVELFNBQVMsQ0FBQyxBQUFDO0lBRTNHLE9BQU9oQixnQ0FBZ0MsQ0FBQztDQUN6QztrQkEzRG9CVCxtQkFBbUIifQ==