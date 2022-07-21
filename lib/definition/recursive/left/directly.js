"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyLeftRecursiveDefinition;
    }
});
var _necessary = require("necessary");
var _left = /*#__PURE__*/ _interopRequireDefault(require("../../../definition/recursive/left"));
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
var tail = _necessary.arrayUtilities.tail, first = _necessary.arrayUtilities.first, front = _necessary.arrayUtilities.front;
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
            key: "fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndIndirectlyRepeatedRuleName",
            value: function fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndIndirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, indirectlyRepeatedRuleName) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(), indirectlyLeftRecursiveDefinitionPartsFront = front(indirectlyLeftRecursiveDefinitionParts);
                var indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName);
                var parts = _toConsumableArray(indirectlyLeftRecursiveDefinitionPartsFront).concat([
                    indirectlyRepeatedRuleNamePart
                ], _toConsumableArray(leftRecursiveDefinitionPartsTail));
                parts = (0, _parts.cloneParts)(parts); ///
                var ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyB0YWlsLCBmaXJzdCwgZnJvbnQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydHNBbmRSdWxlTmFtZShwYXJ0cywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgICBydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmIChydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwgPSB0YWlsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNGcm9udCA9IGZyb250KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKTtcblxuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICBsZXQgcGFydHMgPSBbXG4gICAgICAuLi5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0Zyb250LFxuICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0LFxuICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidGFpbCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJmcm9udCIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmcm9tUGFydHNBbmRSdWxlTmFtZSIsInBhcnRzIiwicnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwicnVsZU5hbWVGaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZ2V0UGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNGcm9udCIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsImNsb25lUGFydHMiLCJnZXRSdWxlTmFtZSIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFhUUEsK0JBQStCOzs7eUJBWHJCLFdBQVc7eURBRU4sb0NBQW9DO3FCQUU3QywwQkFBMEI7b0JBQ1oseUJBQXlCOzBCQUVxRSwrQkFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRLLElBQVFDLElBQUksR0FBbUJDLFVBQWMsZUFBQSxDQUFyQ0QsSUFBSSxFQUFF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