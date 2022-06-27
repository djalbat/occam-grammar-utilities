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
var _necessary = require("necessary");
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _part = require("../../../utilities/part");
var _parts = require("../../../utilities/parts");
var _definition = require("../../../utilities/definition");
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
            key: "fromImplicitlyLeftRecursiveDefinitionAndDefinition",
            value: function fromImplicitlyLeftRecursiveDefinitionAndDefinition(implicitlyLeftRecursiveDefinition, definition) {
                var parts = (0, _definition.mergeDefinitionParts)(definition, implicitlyLeftRecursiveDefinition), ruleName = implicitlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return directlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionAndRepeatedRuleName",
            value: function fromIndirectlyLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, repeatedRuleName) {
                var clonedParts = (0, _definition.cloneDefinitionParts)(indirectlyLeftRecursiveDefinition);
                var parts = clonedParts; ///
                var firstPart = first(parts);
                parts = [
                    firstPart
                ];
                if (repeatedRuleName !== null) {
                    var repeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(repeatedRuleName);
                    parts.push(repeatedRuleNamePart);
                }
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCxcbiAgICAgICAgIGNsb25lRGVmaW5pdGlvblBhcnRzLFxuICAgICAgICAgbWVyZ2VEZWZpbml0aW9uUGFydHMsXG4gICAgICAgICBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLFxuICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sXG4gICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUGFydHNBbmRSdWxlTmFtZShwYXJ0cywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgICBydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmIChydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREZWZpbml0aW9uKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHBhcnRzID0gbWVyZ2VEZWZpbml0aW9uUGFydHMoZGVmaW5pdGlvbiwgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgICAgICBydWxlTmFtZSA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kUmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHJlcGVhdGVkUnVsZU5hbWUpIHtcbiAgICBjb25zdCBjbG9uZWRQYXJ0cyA9IGNsb25lRGVmaW5pdGlvblBhcnRzKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBsZXQgcGFydHMgPSBjbG9uZWRQYXJ0czsgIC8vL1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBmaXJzdFBhcnRcbiAgICBdO1xuXG4gICAgaWYgKHJlcGVhdGVkUnVsZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0cy5wdXNoKHJlcGVhdGVkUnVsZU5hbWVQYXJ0KTtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZyb21QYXJ0c0FuZFJ1bGVOYW1lIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERlZmluaXRpb24iLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJtZXJnZURlZmluaXRpb25QYXJ0cyIsImdldFJ1bGVOYW1lIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZFJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXBlYXRlZFJ1bGVOYW1lIiwiY2xvbmVkUGFydHMiLCJjbG9uZURlZmluaXRpb25QYXJ0cyIsImZpcnN0UGFydCIsInJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicHVzaCIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7OztlQWlCUUEsK0JBQStCOzs7O3lCQWZyQixXQUFXOzJDQUVOLG9DQUFvQztvQkFFL0IseUJBQXlCO3FCQUNXLDBCQUEwQjswQkFNbEQsK0JBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQU0sQUFBRUMsS0FBSyxHQUFLQyxVQUFjLGVBQUEsQ0FBeEJELEtBQUssQUFBbUIsQUFBQztBQUVsQixJQUFBLEFBQU1ELCtCQUErQixpQkFBckM7OzthQUFNQSwrQkFBK0I7Ozs7OztZQUMzQ0csR0FBb0IsRUFBcEJBLHNCQUFvQjttQkFBM0IsU0FBT0Esb0JBQW9CLENBQUNDLEtBQUssRUFBRUMsUUFBUSxFQUFFO2dCQUMzQyxJQUFNQyxrQkFBa0IsR0FBR0MsSUFBQUEsTUFBMkIsNEJBQUEsRUFBQ0gsS0FBSyxDQUFDLEVBQ3ZE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