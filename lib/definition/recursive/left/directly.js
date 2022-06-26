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
                        var definitionComplex = (0, _definition).isDefinitionComplex(definition);
                        if (definitionComplex) {
                            var definitionString = definition.asString();
                            throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
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
                var definitionParts = (0, _definition).definitionPartsFromDefinition(indirectlyLeftRecursiveDefinition);
                var parts = definitionParts; ///
                var firstPart = first(parts);
                parts = [
                    firstPart
                ];
                if (repeatedRuleName !== null) {
                    var repeatedRuleNamePart = (0, _part).ruleNamePartFromRuleName(repeatedRuleName);
                    parts.push(repeatedRuleNamePart);
                }
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts).recursiveRuleNamesFromParts(parts), leftRecursiveRuleNames = (0, _parts).leftRecursiveRuleNamesFromParts(parts), directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);
exports.default = DirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCxcbiAgICAgICAgIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsXG4gICAgICAgICBkZWZpbml0aW9uUGFydHNGcm9tRGVmaW5pdGlvbixcbiAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLFxuICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHRhaWwgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVBhcnRzQW5kUnVsZU5hbWUocGFydHMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgcnVsZU5hbWVGaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVGaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbihpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHM7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25QYXJ0cyA9IGRlZmluaXRpb25QYXJ0c0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gZGVmaW5pdGlvblBhcnRzRnJvbURlZmluaXRpb24oaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIHBhcnRzID0gdGFpbChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyk7ICAvLy9cblxuICAgIHBhcnRzID0gW1xuICAgICAgLi4uZGVmaW5pdGlvblBhcnRzLFxuICAgICAgLi4ucGFydHNcbiAgICBdO1xuXG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcmVwZWF0ZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25QYXJ0cyA9IGRlZmluaXRpb25QYXJ0c0Zyb21EZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBsZXQgcGFydHMgPSBkZWZpbml0aW9uUGFydHM7ICAvLy9cblxuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgZmlyc3RQYXJ0XG4gICAgXTtcblxuICAgIGlmIChyZXBlYXRlZFJ1bGVOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKTtcblxuICAgICAgcGFydHMucHVzaChyZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG4gICAgfVxuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInRhaWwiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVBhcnRzQW5kUnVsZU5hbWUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lRmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvblBhcnRzIiwiZGVmaW5pdGlvblBhcnRzRnJvbURlZmluaXRpb24iLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVwZWF0ZWRSdWxlTmFtZSIsImZpcnN0UGFydCIsInJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicHVzaCIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWtCLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVOLElBQUEsS0FBb0Msa0NBQXBDLG9DQUFvQyxFQUFBO0FBRS9CLElBQUEsS0FBeUIsV0FBekIseUJBQXlCLENBQUE7QUFDVyxJQUFBLE1BQTBCLFdBQTFCLDBCQUEwQixD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