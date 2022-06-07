"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _parts = require("../utilities/parts");
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
var first = _necessary.arrayUtilities.first, RuleNamePart = _occamParsers.Parts.RuleNamePart, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, SequenceOfPartsPart = _occamParsers.Parts.SequenceOfPartsPart;
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
                parts.shift();
                var reducedPart = reducedPartFromRuleName(ruleName), repeatedPart = repeatedPartFromParts(parts);
                parts = [
                    reducedPart,
                    repeatedPart
                ];
                var rewrittenDefinition = new RewrittenDefinition(parts);
                return rewrittenDefinition;
            }
        },
        {
            key: "fromDefinitionRuleNameAndImplicitlyLeftRecursiveDefinition",
            value: function fromDefinitionRuleNameAndImplicitlyLeftRecursiveDefinition(definition, ruleName, implicitlyLeftRecursiveDefinition) {
                var implicitlyLeftRecursiveDefinitionParts = implicitlyLeftRecursiveDefinition.getParts();
                var parts = definition.getParts(), implicitParts = implicitlyLeftRecursiveDefinitionParts; ///
                implicitParts = (0, _parts).cloneParts(implicitParts); ///
                implicitParts.shift();
                parts = (0, _parts).cloneParts(parts); ///
                parts.shift();
                parts = _toConsumableArray(implicitParts).concat(_toConsumableArray(parts));
                var reducedPart = reducedPartFromRuleName(ruleName), repeatedPart = repeatedPartFromParts(parts);
                parts = [
                    reducedPart,
                    repeatedPart
                ];
                var rewrittenDefinition = new RewrittenDefinition(parts);
                return rewrittenDefinition;
            }
        }
    ]);
    return RewrittenDefinition;
}(_occamParsers.Definition);
function repeatedPartFromParts(parts) {
    var repeatedPart;
    var partsLength = parts.length;
    if (partsLength === 1) {
        var firstPart = first(parts), part = firstPart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
        repeatedPart = zeroOrMorePartsPart; ///
    } else {
        var sequenceOfPartsPart = new SequenceOfPartsPart(parts), zeroOrMoreSequenceOfPartsPart = new ZeroOrMorePartsPart(sequenceOfPartsPart);
        repeatedPart = zeroOrMoreSequenceOfPartsPart; ///
    }
    return repeatedPart;
}
function reducedPartFromRuleName(ruleName) {
    var ruleNamePart = new RuleNamePart(ruleName), part = ruleNamePart, reducedPart = (0, _part).reducedPartFromPart(part);
    return reducedPart;
}
exports.default = RewrittenDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydHMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IHJlZHVjZWRQYXJ0RnJvbVBhcnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFJ1bGVOYW1lUGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCwgU2VxdWVuY2VPZlBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgY29uc3QgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVwZWF0ZWRQYXJ0ID0gcmVwZWF0ZWRQYXJ0RnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgcmVkdWNlZFBhcnQsXG4gICAgICByZXBlYXRlZFBhcnRcbiAgICBdO1xuXG4gICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuXG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25SdWxlTmFtZUFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBydWxlTmFtZSwgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgaW1wbGljaXRQYXJ0cyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzOyAvLy9cblxuICAgIGltcGxpY2l0UGFydHMgPSBjbG9uZVBhcnRzKGltcGxpY2l0UGFydHMpOyAgLy8vXG5cbiAgICBpbXBsaWNpdFBhcnRzLnNoaWZ0KCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgLi4uaW1wbGljaXRQYXJ0cyxcbiAgICAgIC4uLnBhcnRzXG4gICAgXTtcblxuICAgIGNvbnN0IHJlZHVjZWRQYXJ0ID0gcmVkdWNlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGVhdGVkUGFydCA9IHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICBwYXJ0cyA9IFtcbiAgICAgIHJlZHVjZWRQYXJ0LFxuICAgICAgcmVwZWF0ZWRQYXJ0XG4gICAgXTtcblxuICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBlYXRlZFBhcnRGcm9tUGFydHMocGFydHMpIHtcbiAgbGV0IHJlcGVhdGVkUGFydDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgcmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyksXG4gICAgICAgICAgemVyb09yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChzZXF1ZW5jZU9mUGFydHNQYXJ0KTtcblxuICAgIHJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0OyAgLy8vXG4gIH1cblxuICByZXR1cm4gcmVwZWF0ZWRQYXJ0O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lKSxcbiAgICAgICAgcGFydCA9IHJ1bGVOYW1lUGFydCwgIC8vL1xuICAgICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgcmV0dXJuIHJlZHVjZWRQYXJ0O1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJSdWxlTmFtZVBhcnQiLCJQYXJ0cyIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicnVsZU5hbWUiLCJwYXJ0cyIsImdldFBhcnRzIiwiY2xvbmVQYXJ0cyIsInNoaWZ0IiwicmVkdWNlZFBhcnQiLCJyZWR1Y2VkUGFydEZyb21SdWxlTmFtZSIsInJlcGVhdGVkUGFydCIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsInJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvblJ1bGVOYW1lQW5kSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJpbXBsaWNpdFBhcnRzIiwiRGVmaW5pdGlvbiIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQYXJ0IiwicGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiemVyb09yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJydWxlTmFtZVBhcnQiLCJyZWR1Y2VkUGFydEZyb21QYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBRU4sSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWYsSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTtBQUNYLElBQUEsS0FBbUIsV0FBbkIsbUJBQW1CLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNLEFBQUVBLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEVBQ3hCRSxZQUFZLEdBQStDQyxh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