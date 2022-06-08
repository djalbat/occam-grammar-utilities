"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _parts = require("../../../utilities/parts");
var _part = require("../../../utilities/part");
var _types = require("../../../types");
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
                var unary = this.isUnary(), complex = this.isComplex(), isolated = this.isIsolated(ruleMap);
                if (unary) {
                    var definitionString = this.asString();
                    throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName2, "' rule is unary and therefore cannot be rewritten."));
                }
                if (complex) {
                    var ruleName = this.getRuleName(), definitionString1 = this.asString();
                    throw new Error("The '".concat(definitionString1, "' directly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                }
                if (isolated) {
                    var ruleName1 = this.getRuleName(), definitionString2 = this.asString();
                    throw new Error("The '".concat(definitionString2, "' directly left recursive definition of the '").concat(ruleName1, "' rule is isolated and therefore cannot be rewritten."));
                }
                var parts = this.getParts();
                parts.shift();
                parts = parts.splice(0); ///
                var ruleName2 = this.getRuleName(), reducedPart = (0, _part).reducedPartFromRuleName(ruleName2), repeatedPart = (0, _parts).repeatedPartFromParts(parts);
                this.addPart(reducedPart);
                this.addPart(repeatedPart);
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var directlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition);
                    leftRecursiveRuleNames.some(function(leftRecursiveRuleName) {
                        var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                        if (ruleNameLeftRecursiveRuleName) {
                            var type = _types.DIRECTLY_LEFT_RECURSIVE_TYPE, parts = definition.getParts(), recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                            directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
                            return true;
                        }
                    });
                }
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);
exports.default = DirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgcmVwZWF0ZWRQYXJ0RnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgcmVkdWNlZFBhcnRGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgdW5hcnkgPSB0aGlzLmlzVW5hcnkoKSxcbiAgICAgICAgICBjb21wbGV4ID0gdGhpcy5pc0NvbXBsZXgoKSxcbiAgICAgICAgICBpc29sYXRlZCA9IHRoaXMuaXNJc29sYXRlZChydWxlTWFwKTtcblxuICAgIGlmICh1bmFyeSkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBsZXgpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBpZiAoaXNvbGF0ZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBpc29sYXRlZCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgbGV0IHBhcnRzID0gdGhpcy5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMuc2hpZnQoKTtcblxuICAgIHBhcnRzID0gcGFydHMuc3BsaWNlKDApOyAgLy8vXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBlYXRlZFBhcnQgPSByZXBlYXRlZFBhcnRGcm9tUGFydHMocGFydHMpO1xuXG4gICAgdGhpcy5hZGRQYXJ0KHJlZHVjZWRQYXJ0KTtcblxuICAgIHRoaXMuYWRkUGFydChyZXBlYXRlZFBhcnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuc29tZSgobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmV3cml0ZSIsInJ1bGVNYXAiLCJ1bmFyeSIsImlzVW5hcnkiLCJjb21wbGV4IiwiaXNDb21wbGV4IiwiaXNvbGF0ZWQiLCJpc0lzb2xhdGVkIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicGFydHMiLCJnZXRQYXJ0cyIsInNoaWZ0Iiwic3BsaWNlIiwicmVkdWNlZFBhcnQiLCJyZWR1Y2VkUGFydEZyb21SdWxlTmFtZSIsInJlcGVhdGVkUGFydCIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsImFkZFBhcnQiLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwic29tZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwidHlwZSIsIkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9t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