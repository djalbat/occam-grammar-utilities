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
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
            key: "fromDefinitionAndRuleName",
            value: function fromDefinitionAndRuleName(definition, ruleName) {
                var parts = definition.getParts();
                parts = (0, _parts).cloneParts(parts); ///
                var part = parts.shift(), leftRecursiveRuleName = ruleName, reducedLeftRecursiveRuleNamePart = reducedLeftRecursiveRuleNamePartFromPartAndLeftRecursiveRuleName(part, leftRecursiveRuleName), optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromParts(parts);
                parts = [
                    reducedLeftRecursiveRuleNamePart,
                    optionalOneOrMorePartOrSequenceOfParts
                ];
                var rewrittenDefinition = new RewrittenDefinition(parts);
                return rewrittenDefinition;
            }
        },
        {
            key: "fromDefinitionAndImplicitlyLeftRecursiveDefinition",
            value: function fromDefinitionAndImplicitlyLeftRecursiveDefinition(definition, implicitlyLeftRecursiveDefinition) {
                var implicitlyLeftRecursiveDefinitionParts = implicitlyLeftRecursiveDefinition.getParts();
                var parts = definition.getParts(), implicitParts = implicitlyLeftRecursiveDefinitionParts; ///
                parts = (0, _parts).cloneParts(parts); ///
                implicitParts = (0, _parts).cloneParts(implicitParts); ///
                implicitParts.shift();
                var part = parts.shift(), implicitlyLeftRecursiveDefinitionRuleName = implicitlyLeftRecursiveDefinition.getRuleName(), leftRecursiveRuleName = implicitlyLeftRecursiveDefinitionRuleName, reducedLeftRecursiveRuleNamePart = reducedLeftRecursiveRuleNamePartFromPartAndLeftRecursiveRuleName(part, leftRecursiveRuleName), optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromPartsAndImplicitParts(parts, implicitParts);
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
function optionalOneOrMorePartOrSequenceOfPartsFromPartsAndImplicitParts(parts, implicitParts) {
    parts = _toConsumableArray(parts).concat(_toConsumableArray(implicitParts));
    var optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromParts(parts);
    return optionalOneOrMorePartOrSequenceOfParts;
}
function reducedLeftRecursiveRuleNamePartFromPartAndLeftRecursiveRuleName(part, leftRecursiveRuleName) {
    var partLookAhead = (0, _part).isPartLookAhead(part), lookAhead = partLookAhead, reducedLeftRecursiveRuleName = (0, _ruleName).reducedRuleNameFromRuleName(leftRecursiveRuleName), reducedLeftRecursiveRuleNamePart = (0, _part).ruleNamePartFromRuleNameAndLookAhead(reducedLeftRecursiveRuleName, lookAhead);
    return reducedLeftRecursiveRuleNamePart;
}
exports.default = RewrittenDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzUGFydExvb2tBaGVhZCxcbiAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydHMsXG4gICAgICAgICBvcHRpb25hbE9uZU9yTW9yZVBhcnRzUGFydEZyb21QYXJ0LFxuICAgICAgICAgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lQW5kTG9va0FoZWFkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFJ1bGVOYW1lKGRlZmluaXRpb24sIHJ1bGVOYW1lKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcGFydCA9IHBhcnRzLnNoaWZ0KCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0RnJvbVBhcnRBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cyA9IG9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzRnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0c1xuICAgIF07XG5cbiAgICBjb25zdCByZXdyaXR0ZW5EZWZpbml0aW9uID0gbmV3IFJld3JpdHRlbkRlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBpbXBsaWNpdFBhcnRzID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHM7IC8vL1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgaW1wbGljaXRQYXJ0cyA9IGNsb25lUGFydHMoaW1wbGljaXRQYXJ0cyk7ICAvLy9cblxuICAgIGltcGxpY2l0UGFydHMuc2hpZnQoKTtcblxuICAgIGNvbnN0IHBhcnQgPSBwYXJ0cy5zaGlmdCgpLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0RnJvbVBhcnRBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cyA9IG9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzRnJvbVBhcnRzQW5kSW1wbGljaXRQYXJ0cyhwYXJ0cywgaW1wbGljaXRQYXJ0cyk7XG5cbiAgICBwYXJ0cyA9IFtcbiAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0LFxuICAgICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHNcbiAgICBdO1xuXG4gICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzRnJvbVBhcnRzKHBhcnRzKSB7XG4gIGxldCBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cztcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0c1BhcnQgPSBvcHRpb25hbE9uZU9yTW9yZVBhcnRzUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHMgPSBvcHRpb25hbE9uZU9yTW9yZVBhcnRzUGFydDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBvcHRpb25hbE9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbE9uZU9yTW9yZVBhcnRzUGFydEZyb21QYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpO1xuXG4gICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHMgPSBvcHRpb25hbE9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cztcbn1cblxuZnVuY3Rpb24gb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHNGcm9tUGFydHNBbmRJbXBsaWNpdFBhcnRzKHBhcnRzLCBpbXBsaWNpdFBhcnRzKSB7XG4gIHBhcnRzID0gWyAvLy9cbiAgICAgIC4uLnBhcnRzLFxuICAgICAgLi4uaW1wbGljaXRQYXJ0c1xuICBdO1xuXG4gIGNvbnN0IG9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzID0gb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHNGcm9tUGFydHMocGFydHMpO1xuXG4gIHJldHVybiBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cztcbn1cblxuZnVuY3Rpb24gcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnRGcm9tUGFydEFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgcGFydExvb2tBaGVhZCA9IGlzUGFydExvb2tBaGVhZChwYXJ0KSxcbiAgICAgICAgbG9va0FoZWFkID0gcGFydExvb2tBaGVhZCwgIC8vL1xuICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lQW5kTG9va0FoZWFkKHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgcmV0dXJuIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0O1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZSIsImRlZmluaXRpb24iLCJydWxlTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJjbG9uZVBhcnRzIiwicGFydCIsInNoaWZ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydEZyb21QYXJ0QW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwib3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHMiLCJvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0c0Zyb21QYXJ0cyIsInJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiaW1wbGljaXRQYXJ0cyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0c0Zyb21QYXJ0c0FuZEltcGxpY2l0UGFydHMiLCJEZWZpbml0aW9uIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFBhcnQiLCJvcHRpb25hbE9uZU9yTW9yZVBhcnRzUGFydCIsIm9wdGlvbmFsT25lT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0cyIsIm9wdGlvbmFsT25lT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnRMb29rQWhlYWQiLCJpc1BhcnRMb29rQWhlYWQiLCJsb29rQWhlYWQiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lQW5kTG9va0FoZWFkIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWMsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBQ1gsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWYsSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTtBQUNILElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFJZCxJQUFBLEtBQW1CLFdBQW5CLG1CQUFtQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEUsSUFBTSxBQUFFQSxLQUFLLEdBQUtDLFVBQWMsZUFBQSxDQUF4QkQsS0FBSyxBQUFtQixB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