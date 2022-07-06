"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return DirectlyLeftRecursiveDefinition;
    },
    enumerable: true
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _parts = require("../../../utilities/parts");
var _part = require("../../../utilities/part");
var _definition = require("../../../utilities/definition");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
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
var ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, first = _necessary.arrayUtilities.first, front = _necessary.arrayUtilities.front;
var DirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(DirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(DirectlyLeftRecursiveDefinition);
    function DirectlyLeftRecursiveDefinition() {
        _classCallCheck(this, DirectlyLeftRecursiveDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyLeftRecursiveDefinition, null, [
        {
            key: "fromPartsAndRuleName",
            value: function fromPartsAndRuleName(parts, ruleName) {
                var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return directlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var directlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition.isDefinitionLeftRecursive)(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), ruleNameFirstLeftRecursiveRuleName = ruleName === firstLeftRecursiveRuleName;
                    if (ruleNameFirstLeftRecursiveRuleName) {
                        var definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                        if (definitionComplex) {
                            var definitionString = definition.asString();
                            throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                        }
                        var parts = definition.getParts(), recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
                        directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                    }
                }
                return directlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromLeftRecursiveDefinitionsRepeatedRuleNameAndRuleName",
            value: function fromLeftRecursiveDefinitionsRepeatedRuleNameAndRuleName(leftRecursiveDefinitionA, leftRecursiveDefinitionB, repeatedRuleName, ruleName) {
                var parts;
                parts = leftRecursiveDefinitionA.getParts();
                var partsFront = front(parts);
                parts = leftRecursiveDefinitionB.getParts();
                var partsTail = tail(parts);
                var repeatedRuleNamePartPart = (0, _part.ruleNamePartFromRuleName)(repeatedRuleName), part = repeatedRuleNamePartPart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
                parts = _toConsumableArray(partsFront).concat([
                    zeroOrMorePartsPart
                ], _toConsumableArray(partsTail));
                parts = (0, _parts.cloneParts)(parts);
                var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return directlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName",
            value: function fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(), indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);
                if (repeatedRuleName !== null) {
                    var repeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(repeatedRuleName);
                    indirectlyLeftRecursiveDefinitionPartsHead.push(repeatedRuleNamePart);
                }
                var parts = (0, _parts.mergeParts)(indirectlyLeftRecursiveDefinitionPartsHead, leftRecursiveDefinitionPartsTail), ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IG1lcmdlUGFydHMsIGNsb25lUGFydHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgaGVhZCwgdGFpbCwgZmlyc3QsIGZyb250IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21QYXJ0c0FuZFJ1bGVOYW1lKHBhcnRzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lRmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lRmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1JlcGVhdGVkUnVsZU5hbWVBbmRSdWxlTmFtZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkEsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQiwgcmVwZWF0ZWRSdWxlTmFtZSwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcGFydHM7XG5cbiAgICBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQS5nZXRQYXJ0cygpO1xuXG4gICAgY29uc3QgcGFydHNGcm9udCA9IGZyb250KHBhcnRzKTtcblxuICAgIHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25CLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgIGNvbnN0IHJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0ID0gcmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0LFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgLi4ucGFydHNGcm9udCxcbiAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQsXG4gICAgICAuLi5wYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTtcblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHJlcGVhdGVkUnVsZU5hbWUpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCA9IHRhaWwobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQgPSBoZWFkKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKTtcblxuICAgIGlmIChyZXBlYXRlZFJ1bGVOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKTtcblxuICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkLnB1c2gocmVwZWF0ZWRSdWxlTmFtZVBhcnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRzID0gbWVyZ2VQYXJ0cyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsKSxcbiAgICAgICAgICBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUGFydHMiLCJoZWFkIiwiYXJyYXlVdGlsaXRpZXMiLCJ0YWlsIiwiZmlyc3QiLCJmcm9udCIsImZyb21QYXJ0c0FuZFJ1bGVOYW1lIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1JlcGVhdGVkUnVsZU5hbWVBbmRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQiIsInJlcGVhdGVkUnVsZU5hbWUiLCJwYXJ0c0Zyb250IiwicGFydHNUYWlsIiwicmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJjbG9uZVBhcnRzIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kUmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQiLCJyZXBlYXRlZFJ1bGVOYW1lUGFydCIsInB1c2giLCJtZXJnZVBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7ZUFlUUEsK0JBQStCOzs7OzRCQWI5QixlQUFlO3lCQUNOLFdBQVc7MkNBRU4sb0NBQW9DO3FCQUVqQywwQkFBMEI7b0JBQ3hCLHlCQUF5QjswQkFFcUUsK0JBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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