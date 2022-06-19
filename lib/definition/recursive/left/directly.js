"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
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
            key: "fromRuleNameAndParts",
            value: function fromRuleNameAndParts(ruleName, parts) {
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
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);
exports.default = DirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LFxuICAgICAgICAgaXNEZWZpbml0aW9uQ29tcGxleCxcbiAgICAgICAgIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsXG4gICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbixcbiAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZFBhcnRzKHJ1bGVOYW1lLCBwYXJ0cykge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lRmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lRmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSB0aGlzLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kUGFydHMiLCJydWxlTmFtZSIsInBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lRmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiZ2V0UGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWtCLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVOLElBQUEsS0FBb0Msa0NBQXBDLG9DQUFvQyxFQUFBO0FBRUssSUFBQSxNQUEwQixXQUExQiwwQkFBMEIsQ0FBQTtBQUtsRCxJQUFBLFdBQStCLFdBQS9CLCtCQUErQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElB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