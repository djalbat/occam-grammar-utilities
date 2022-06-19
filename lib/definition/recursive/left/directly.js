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
    _createClass(DirectlyLeftRecursiveDefinition, [
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var unary = this.isUnary(), complex = this.isComplex(), isolated = this.isIsolated(ruleMap), ruleName = this.getRuleName();
                if (unary) {
                    var definitionString = this.asString();
                    throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
                }
                if (complex) {
                    var definitionString1 = this.asString();
                    throw new Error("The '".concat(definitionString1, "' directly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                }
                if (isolated) {
                    var definitionString2 = this.asString();
                    throw new Error("The '".concat(definitionString2, "' directly left recursive definition of the '").concat(ruleName, "' rule is isolated and therefore cannot be rewritten."));
                }
                this.removeFirstPart();
                var parts = this.removeParts(), reducedPart = (0, _part).reducedPartFromRuleName(ruleName), repeatedPart = (0, _parts).repeatedPartFromParts(parts);
                this.addPart(reducedPart);
                this.addPart(repeatedPart);
            }
        },
        {
            key: "removeParts",
            value: function removeParts() {
                var parts = this.getParts();
                parts = parts.splice(0); ///
                return parts;
            }
        },
        {
            key: "removeFirstPart",
            value: function removeFirstPart() {
                var parts = this.getParts(), firstPart = parts.shift();
                return firstPart;
            }
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IHJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZXBlYXRlZFBhcnRGcm9tUGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHJld3JpdGUocnVsZU1hcCkge1xuICAgIGNvbnN0IHVuYXJ5ID0gdGhpcy5pc1VuYXJ5KCksXG4gICAgICAgICAgY29tcGxleCA9IHRoaXMuaXNDb21wbGV4KCksXG4gICAgICAgICAgaXNvbGF0ZWQgPSB0aGlzLmlzSXNvbGF0ZWQocnVsZU1hcCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAodW5hcnkpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSB0aGlzLmFzU3RyaW5nKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGlmIChjb21wbGV4KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGlmIChpc29sYXRlZCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBpc29sYXRlZCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVGaXJzdFBhcnQoKTtcblxuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5yZW1vdmVQYXJ0cygpLFxuICAgICAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGVhdGVkUGFydCA9IHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICB0aGlzLmFkZFBhcnQocmVkdWNlZFBhcnQpO1xuXG4gICAgdGhpcy5hZGRQYXJ0KHJlcGVhdGVkUGFydCk7XG4gIH1cblxuICByZW1vdmVQYXJ0cygpIHtcbiAgICBsZXQgcGFydHMgPSB0aGlzLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IHBhcnRzLnNwbGljZSgwKTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG5cbiAgcmVtb3ZlRmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5nZXRQYXJ0cygpLFxuICAgICAgICAgIGZpcnN0UGFydCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZFBhcnRzKHJ1bGVOYW1lLCBwYXJ0cykge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lRmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lRmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXdyaXRlIiwicnVsZU1hcCIsInVuYXJ5IiwiaXNVbmFyeSIsImNvbXBsZXgiLCJpc0NvbXBsZXgiLCJpc29sYXRlZCIsImlzSXNvbGF0ZWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJyZW1vdmVGaXJzdFBhcnQiLCJwYXJ0cyIsInJlbW92ZVBhcnRzIiwicmVkdWNlZFBhcnQiLCJyZWR1Y2VkUGFydEZyb21SdWxlTmFtZSIsInJlcGVhdGVkUGFydCIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsImFkZFBhcnQiLCJnZXRQYXJ0cyIsInNwbGljZSIsImZpcnN0UGFydCIsInNoaWZ0IiwiZnJvbVJ1bGVOYW1lQW5kUGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWVGaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRU4sSUFBQSxLQUFvQyxrQ0FBcEMsb0NBQW9DLEVBQUE7QUFFaEMsSUFBQSxLQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUNtQyxJQUFBLE1BQTBCLFdBQTFCLDBCQUEwQixDQUFBO0FBQ1osSUFBQSxXQUErQixXQUEvQiwrQkFBK0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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