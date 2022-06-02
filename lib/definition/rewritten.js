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
var first = _necessary.arrayUtilities.first, OptionalPartPart = _occamParsers.Parts.OptionalPartPart, OneOrMorePartsPart = _occamParsers.Parts.OneOrMorePartsPart, SequenceOfPartsPart = _occamParsers.Parts.SequenceOfPartsPart;
var RewrittenDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RewrittenDefinition, Definition);
    var _super = _createSuper(RewrittenDefinition);
    function RewrittenDefinition() {
        _classCallCheck(this, RewrittenDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(RewrittenDefinition, null, [
        {
            key: "fromDefinition",
            value: function fromDefinition(definition) {
                var parts = definition.getParts();
                parts = (0, _parts).cloneParts(parts); ///
                var part = parts.shift(), reducedPart = (0, _part).reducedPartFromPart(part), optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromParts(parts);
                parts = [
                    reducedPart,
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
                var part = parts.shift(), reducedPart = (0, _part).reducedPartFromPart(part), optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromPartsAndImplicitParts(parts, implicitParts);
                parts = [
                    reducedPart,
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
        var firstPart = first(parts), part = firstPart, oneOrMorePartsPart = new OneOrMorePartsPart(part), optionalOneOrMorePartsPart = new OptionalPartPart(oneOrMorePartsPart);
        optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartsPart; ///
    } else {
        var sequenceOfPartsPart = new SequenceOfPartsPart(parts), optionalOneOrMoreSequenceOfPartsPart = new OptionalPartPart(sequenceOfPartsPart);
        optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMoreSequenceOfPartsPart; ///
    }
    return optionalOneOrMorePartOrSequenceOfParts;
}
function optionalOneOrMorePartOrSequenceOfPartsFromPartsAndImplicitParts(parts, implicitParts) {
    parts = _toConsumableArray(parts).concat(_toConsumableArray(implicitParts));
    var optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromParts(parts);
    return optionalOneOrMorePartOrSequenceOfParts;
}
exports.default = RewrittenDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydHMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IHJlZHVjZWRQYXJ0RnJvbVBhcnQsIG9wdGlvbmFsT25lT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IE9wdGlvbmFsUGFydFBhcnQsIE9uZU9yTW9yZVBhcnRzUGFydCwgU2VxdWVuY2VPZlBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBwYXJ0ID0gcGFydHMuc2hpZnQoKSxcbiAgICAgICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCksXG4gICAgICAgICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHMgPSBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0c0Zyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICBwYXJ0cyA9IFtcbiAgICAgIHJlZHVjZWRQYXJ0LFxuICAgICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHNcbiAgICBdO1xuXG4gICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuXG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oZGVmaW5pdGlvbiwgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgaW1wbGljaXRQYXJ0cyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzOyAvLy9cblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGltcGxpY2l0UGFydHMgPSBjbG9uZVBhcnRzKGltcGxpY2l0UGFydHMpOyAgLy8vXG5cbiAgICBpbXBsaWNpdFBhcnRzLnNoaWZ0KCk7XG5cbiAgICBjb25zdCBwYXJ0ID0gcGFydHMuc2hpZnQoKSxcbiAgICAgICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCksXG4gICAgICAgICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHMgPSBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0c0Zyb21QYXJ0c0FuZEltcGxpY2l0UGFydHMocGFydHMsIGltcGxpY2l0UGFydHMpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICByZWR1Y2VkUGFydCxcbiAgICAgIG9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzXG4gICAgXTtcblxuICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0c0Zyb21QYXJ0cyhwYXJ0cykge1xuICBsZXQgb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHM7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKHBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCksXG4gICAgICAgICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChvbmVPck1vcmVQYXJ0c1BhcnQpO1xuXG4gICAgb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHMgPSBvcHRpb25hbE9uZU9yTW9yZVBhcnRzUGFydDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyksXG4gICAgICAgICAgb3B0aW9uYWxPbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQoc2VxdWVuY2VPZlBhcnRzUGFydCk7XG5cbiAgICBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cyA9IG9wdGlvbmFsT25lT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzO1xufVxuXG5mdW5jdGlvbiBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0c0Zyb21QYXJ0c0FuZEltcGxpY2l0UGFydHMocGFydHMsIGltcGxpY2l0UGFydHMpIHtcbiAgcGFydHMgPSBbIC8vL1xuICAgIC4uLnBhcnRzLFxuICAgIC4uLmltcGxpY2l0UGFydHNcbiAgXTtcblxuICBjb25zdCBvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cyA9IG9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzRnJvbVBhcnRzKHBhcnRzKTtcblxuICByZXR1cm4gb3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHM7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIk9wdGlvbmFsUGFydFBhcnQiLCJQYXJ0cyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsImNsb25lUGFydHMiLCJwYXJ0Iiwic2hpZnQiLCJyZWR1Y2VkUGFydCIsInJlZHVjZWRQYXJ0RnJvbVBhcnQiLCJvcHRpb25hbE9uZU9yTW9yZVBhcnRPclNlcXVlbmNlT2ZQYXJ0cyIsIm9wdGlvbmFsT25lT3JNb3JlUGFydE9yU2VxdWVuY2VPZlBhcnRzRnJvbVBhcnRzIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJpbXBsaWNpdFBhcnRzIiwib3B0aW9uYWxPbmVPck1vcmVQYXJ0T3JTZXF1ZW5jZU9mUGFydHNGcm9tUGFydHNBbmRJbXBsaWNpdFBhcnRzIiwiRGVmaW5pdGlvbiIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0Iiwib3B0aW9uYWxPbmVPck1vcmVQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwib3B0aW9uYWxPbmVPck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBRU4sSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWYsSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTtBQUN5QixJQUFBLEtBQW1CLFdBQW5CLG1CQUFtQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0YsSUFBTSxBQUFFQSxLQUFLLEdBQUtDLFVBQWMsZUFBQSxDQUF4QkQsS0FBSyxBQUFtQixFQUN4QkUsZ0JBQWdCLEdBQThDQyxhQUFLLE1BQUEsQ0FBbkVELGdCQUFnQixFQUFFRSxrQkFBa0IsR0FBMEJELGFBQUssTUFBQSxDQUFqREMsa0JBQWtCLEVBQUVDLG1CQUFtQixHQUFLRixhQUFLLE1BQUEsQ0FBN0JFLG1CQUFtQixBQUFXO0FBRTdELElBQUEsQUFBTUMsbUJBQW1CLGlCQWdEckMsQUFoRFk7OzthQUFNQSxtQkFBbUI7Ozs7OztZQUMvQkMsR0FBYyxFQUFkQSxnQkFBYzttQkFBckIsU0FBT0EsY0FBYyxDQUFDQyxVQUFVLEVBQUU7Z0JBQ2hDLElBQUlDLEtBQUssR0FBR0QsVUFBVSxDQUFDRSxRQUFRLEVBQUUsQUFBQztnQkFFbENELEtBQUssR0FBR0UsQ0FBQUEsR0FBQUEsTUFBVSxBQUFPLENBQUEsV0FBUCxDQUFDRixLQUFLLENBQUMsQ0FB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