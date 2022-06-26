"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _part = require("../../../utilities/part");
var _parts = require("../../../utilities/parts");
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
var first = _necessary.arrayUtilities.first, tail = _necessary.arrayUtilities.tail;
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
                var recursiveRuleNames = (0, _parts).recursiveRuleNamesFromParts(parts), leftRecursiveRuleNames = (0, _parts).leftRecursiveRuleNamesFromParts(parts), directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return directlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var directlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), ruleNameFirstLeftRecursiveRuleName = ruleName === firstLeftRecursiveRuleName;
                    if (ruleNameFirstLeftRecursiveRuleName) {
                        var definitionUnary = (0, _definition).isDefinitionUnary(definition);
                        if (definitionUnary) {
                            var definitionString = this.asString();
                            throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
                        }
                        var definitionComplex = (0, _definition).isDefinitionComplex(definition);
                        if (definitionComplex) {
                            var definitionString1 = this.asString();
                            throw new Error("The '".concat(definitionString1, "' directly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                        }
                        var parts = definition.getParts(), recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                        directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                    }
                }
                return directlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromImplicitlyLeftRecursiveDefinitionAndDefinition",
            value: function fromImplicitlyLeftRecursiveDefinitionAndDefinition(implicitlyLeftRecursiveDefinition, definition) {
                var parts;
                var ruleName = implicitlyLeftRecursiveDefinition.getRuleName(), definitionParts = (0, _definition).definitionPartsFromDefinition(definition), implicitlyLeftRecursiveDefinitionParts = (0, _definition).definitionPartsFromDefinition(implicitlyLeftRecursiveDefinition);
                parts = tail(implicitlyLeftRecursiveDefinitionParts); ///
                parts = _toConsumableArray(definitionParts).concat(_toConsumableArray(parts));
                var recursiveRuleNames = (0, _parts).recursiveRuleNamesFromParts(parts), leftRecursiveRuleNames = (0, _parts).leftRecursiveRuleNamesFromParts(parts), directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return directlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionAndRepeatedRuleName",
            value: function fromIndirectlyLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, repeatedRuleName) {
                var parts = (0, _definition).definitionPartsFromDefinition(indirectlyLeftRecursiveDefinition);
                var firstPart = first(parts), repeatedRuleNamePart = (0, _part).ruleNamePartFromRuleName(repeatedRuleName);
                parts = [
                    firstPart,
                    repeatedRuleNamePart
                ];
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts).recursiveRuleNamesFromParts(parts), leftRecursiveRuleNames = (0, _parts).leftRecursiveRuleNamesFromParts(parts), directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);
exports.default = DirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uVW5hcnksXG4gICAgICAgICBpc0RlZmluaXRpb25Db21wbGV4LFxuICAgICAgICAgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSxcbiAgICAgICAgIGRlZmluaXRpb25QYXJ0c0Zyb21EZWZpbml0aW9uLFxuICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sXG4gICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCwgdGFpbCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUGFydHNBbmRSdWxlTmFtZShwYXJ0cywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgICBydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmIChydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbihpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHM7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25QYXJ0cyA9IGRlZmluaXRpb25QYXJ0c0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gZGVmaW5pdGlvblBhcnRzRnJvbURlZmluaXRpb24oaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIHBhcnRzID0gdGFpbChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyk7ICAvLy9cblxuICAgIHBhcnRzID0gW1xuICAgICAgLi4uZGVmaW5pdGlvblBhcnRzLFxuICAgICAgLi4ucGFydHNcbiAgICBdO1xuXG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcmVwZWF0ZWRSdWxlTmFtZSkge1xuICAgIGxldCAgcGFydHMgPSBkZWZpbml0aW9uUGFydHNGcm9tRGVmaW5pdGlvbihpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpXG5cbiAgICBwYXJ0cyA9IFtcbiAgICAgIGZpcnN0UGFydCxcbiAgICAgIHJlcGVhdGVkUnVsZU5hbWVQYXJ0XG4gICAgXTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ0YWlsIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21QYXJ0c0FuZFJ1bGVOYW1lIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvblBhcnRzIiwiZGVmaW5pdGlvblBhcnRzRnJvbURlZmluaXRpb24iLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVwZWF0ZWRSdWxlTmFtZSIsImZpcnN0UGFydCIsInJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRU4sSUFBQSxLQUFvQyxrQ0FBcEMsb0NBQW9DLEVBQUE7QUFFL0IsSUFBQSxLQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUNXLElBQUEsTUFBMEIsV0FBMUIsMEJBQTBCLENBQUE7QUFNbEQsSUFBQSxXQUErQixXQUEvQiwrQkFBK0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBUUEsS0FBSyxHQUFXQyxVQUFjLGVBQUEsQ0FBOUJELEtBQUssRUFBRUUsSUFBSSxHQUFLRCxVQUFjLGVBQUEsQ0FBdkJDLElBQUksQUFBb0I7QUFFeEIsSUFBQSxBQUFNQywrQkFBK0IsaUJBQXJDOzs7YUFBTUEsK0JBQStCOzs7Ozs7WUFDM0NDLEdBQW9CLEVBQXBCQSxzQkFBb0I7bUJBQTNCLFNBQU9BLG9CQUFvQixDQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtnQkFDM0MsSUFBTUMsa0JBQWtCLEdBQUdDLENBQUFBLEdBQUFBLE1BQTJCLEFBQU8sQ0FBQSw0QkFBUCxDQUFDSCxLQUFLLENBQUMsRUFDdkRJLHNCQUFzQixHQUFHQyxDQUFBQSxHQUFBQSxNQUErQixBQUFPLENBQUEsZ0NBQVAsQ0FBQ0wsS0FBSyxDQUFDLEVBQy9ETSwrQkFBK0IsR0FBRyxJQUFJUiwrQkFBK0IsQ0FBQ0UsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFRSxzQkFBc0IsQ0FBQyxBQUFDO2dCQUV6SSxPQUFPRSwrQkFBK0IsQ0FBQzthQUN4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