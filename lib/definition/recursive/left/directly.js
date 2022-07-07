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
    _createClass(DirectlyLeftRecursiveDefinition, [
        {
            key: "getLeftRecursiveRuleName",
            value: function getLeftRecursiveRuleName() {
                var leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), leftRecursiveRuleName = firstLeftRecursiveRuleName; ///
                return leftRecursiveRuleName;
            }
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IG1lcmdlUGFydHMsIGNsb25lUGFydHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgaGVhZCwgdGFpbCwgZmlyc3QsIGZyb250IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSB0aGlzLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRzQW5kUnVsZU5hbWUocGFydHMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgcnVsZU5hbWVGaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVGaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUmVwZWF0ZWRSdWxlTmFtZUFuZFJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25CLCByZXBlYXRlZFJ1bGVOYW1lLCBydWxlTmFtZSkge1xuICAgIGxldCBwYXJ0cztcblxuICAgIHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBwYXJ0c0Zyb250ID0gZnJvbnQocGFydHMpO1xuXG4gICAgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkIuZ2V0UGFydHMoKTtcblxuICAgIGNvbnN0IHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgY29uc3QgcmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnQgPSByZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQsXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICAuLi5wYXJ0c0Zyb250LFxuICAgICAgemVyb09yTW9yZVBhcnRzUGFydCxcbiAgICAgIC4uLnBhcnRzVGFpbFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpO1xuXG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZFJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcmVwZWF0ZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsID0gdGFpbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCA9IGhlYWQoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpO1xuXG4gICAgaWYgKHJlcGVhdGVkUnVsZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQucHVzaChyZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFydHMgPSBtZXJnZVBhcnRzKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJQYXJ0cyIsImhlYWQiLCJhcnJheVV0aWxpdGllcyIsInRhaWwiLCJmaXJzdCIsImZyb250IiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZyb21QYXJ0c0FuZFJ1bGVOYW1lIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1JlcGVhdGVkUnVsZU5hbWVBbmRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQiIsInJlcGVhdGVkUnVsZU5hbWUiLCJwYXJ0c0Zyb250IiwicGFydHNUYWlsIiwicmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJjbG9uZVBhcnRzIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kUmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQiLCJyZXBlYXRlZFJ1bGVOYW1lUGFydCIsInB1c2giLCJtZXJnZVBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7ZUFlUUEsK0JBQStCOzs7OzRCQWI5QixlQUFlO3lCQUNOLFdBQVc7MkNBRU4sb0NBQW9DO3FCQUVqQywwQkFBMEI7b0JBQ3hCLHlCQUF5QjswQkFFcUUsK0JBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0SyxJQUFNLEFBQUVDLG1CQUFtQixHQUFLQyxhQUFLLE1BQUEsQ0FBN0JELG1CQUFtQixBQUFVLEVBQzdCRSxJQUFJLEdBQXlCQyxVQUFjLGVBQUEsQ0FBM0NELElBQUksRUFBRUUsSUFBSSxHQUFtQkQsVUFBYyxlQUFBLENBQXJDQyxJQUFJLEVBQUVDLEtBQUssR0FBWUYsVUFBYyxlQUFBLENBQS9CRSxLQUFLLEVBQUVDLEtBQUssR0FBS0gsVUFBYyxlQUFBLENBQXhCRyxLQUFLLEFBQW9CO0FBRXJDLElBQUEsQUFBTVAsK0JBQStCLGlCQUFyQzs7O2FBQU1BLCtCQUErQjs7Ozs7O1lBQ2xEUSxHQUF3QixFQUF4QkEsMEJBQXdCO21CQUF4QkEsU0FBQUEsd0JBQXdCLEdBQUc7Z0JBQ3pCLElBQU1DLHNCQUFzQixHQUFHLElBQUksQ0FBQ0MseUJBQXlCLEVBQUUsRUFDekRDLDBCQUEwQixHQUFHTCxLQUFLLENBQUNHLHNCQUFzQixDQUFDLEVBQzFERyxxQkFBcUIsR0FBR0QsMEJBQTBCLEFBQUMsRUFBQyxHQUFHO2dCQUU3RCxPQUFPQyxxQkFBcUIsQ0FBQzthQUM5Qjs7OztZQUVNQyxHQUFvQixFQUFwQkEsc0JBQW9C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