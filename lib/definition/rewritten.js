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
var first = _necessary.arrayUtilities.first, RuleNamePart = _occamParsers.Parts.RuleNamePart, OptionalPartPart = _occamParsers.Parts.OptionalPartPart, OneOrMorePartsPart = _occamParsers.Parts.OneOrMorePartsPart, SequenceOfPartsPart = _occamParsers.Parts.SequenceOfPartsPart;
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
        var firstPart = first(parts), part = firstPart, oneOrMorePartsPart = new OneOrMorePartsPart(part), optionalOneOrMorePartsPart = new OptionalPartPart(oneOrMorePartsPart);
        repeatedPart = optionalOneOrMorePartsPart; ///
    } else {
        var sequenceOfPartsPart = new SequenceOfPartsPart(parts), neOrMoreSequenceOfPartsPart = new OneOrMorePartsPart(sequenceOfPartsPart), optionalOneOrMoreSequenceOfPartsPart = new OptionalPartPart(neOrMoreSequenceOfPartsPart);
        repeatedPart = optionalOneOrMoreSequenceOfPartsPart; ///
    }
    return repeatedPart;
}
function reducedPartFromRuleName(ruleName) {
    var ruleNamePart = new RuleNamePart(ruleName), part = ruleNamePart, reducedPart = (0, _part).reducedPartFromPart(part);
    return reducedPart;
}
exports.default = RewrittenDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydHMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IHJlZHVjZWRQYXJ0RnJvbVBhcnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFJ1bGVOYW1lUGFydCwgT3B0aW9uYWxQYXJ0UGFydCwgT25lT3JNb3JlUGFydHNQYXJ0LCBTZXF1ZW5jZU9mUGFydHNQYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZShkZWZpbml0aW9uLCBydWxlTmFtZSkge1xuICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBjb25zdCByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBlYXRlZFBhcnQgPSByZXBlYXRlZFBhcnRGcm9tUGFydHMocGFydHMpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICByZWR1Y2VkUGFydCxcbiAgICAgIHJlcGVhdGVkUGFydFxuICAgIF07XG5cbiAgICBjb25zdCByZXdyaXR0ZW5EZWZpbml0aW9uID0gbmV3IFJld3JpdHRlbkRlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvblJ1bGVOYW1lQW5kSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGRlZmluaXRpb24sIHJ1bGVOYW1lLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBpbXBsaWNpdFBhcnRzID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHM7IC8vL1xuXG4gICAgaW1wbGljaXRQYXJ0cyA9IGNsb25lUGFydHMoaW1wbGljaXRQYXJ0cyk7ICAvLy9cblxuICAgIGltcGxpY2l0UGFydHMuc2hpZnQoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAuLi5pbXBsaWNpdFBhcnRzLFxuICAgICAgLi4ucGFydHNcbiAgICBdO1xuXG4gICAgY29uc3QgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVwZWF0ZWRQYXJ0ID0gcmVwZWF0ZWRQYXJ0RnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgcmVkdWNlZFBhcnQsXG4gICAgICByZXBlYXRlZFBhcnRcbiAgICBdO1xuXG4gICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBsZXQgcmVwZWF0ZWRQYXJ0O1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnQpLFxuICAgICAgICAgIG9wdGlvbmFsT25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQob25lT3JNb3JlUGFydHNQYXJ0KTtcblxuICAgIHJlcGVhdGVkUGFydCA9IG9wdGlvbmFsT25lT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBTZXF1ZW5jZU9mUGFydHNQYXJ0KHBhcnRzKSxcbiAgICAgICAgICBuZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpLFxuICAgICAgICAgIG9wdGlvbmFsT25lT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KG5lT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCk7XG5cbiAgICByZXBlYXRlZFBhcnQgPSBvcHRpb25hbE9uZU9yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiByZXBlYXRlZFBhcnQ7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWUpLFxuICAgICAgICBwYXJ0ID0gcnVsZU5hbWVQYXJ0LCAgLy8vXG4gICAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KTtcblxuICByZXR1cm4gcmVkdWNlZFBhcnQ7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlJ1bGVOYW1lUGFydCIsIlBhcnRzIiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZSIsImRlZmluaXRpb24iLCJydWxlTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJjbG9uZVBhcnRzIiwic2hpZnQiLCJyZWR1Y2VkUGFydCIsInJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lIiwicmVwZWF0ZWRQYXJ0IiwicmVwZWF0ZWRQYXJ0RnJvbVBhcnRzIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uUnVsZU5hbWVBbmRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImltcGxpY2l0UGFydHMiLCJEZWZpbml0aW9uIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFBhcnQiLCJwYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0Iiwib3B0aW9uYWxPbmVPck1vcmVQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwibmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0Iiwib3B0aW9uYWxPbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicnVsZU5hbWVQYXJ0IiwicmVkdWNlZFBhcnRGcm9tUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsYUFBZSxXQUFmLGVB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