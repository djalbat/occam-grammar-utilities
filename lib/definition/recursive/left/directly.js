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
            value: function rewrite() {
                this.removeFirstPart();
                var parts = this.removeParts(), ruleName = this.getRuleName(), reducedPart = (0, _part).reducedPartFromRuleName(ruleName), repeatedPart = (0, _parts).repeatedPartFromParts(parts);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IHJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZXBlYXRlZFBhcnRGcm9tUGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LFxuICAgICAgICAgaXNEZWZpbml0aW9uQ29tcGxleCxcbiAgICAgICAgIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsXG4gICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbixcbiAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgcmV3cml0ZSgpIHtcbiAgICB0aGlzLnJlbW92ZUZpcnN0UGFydCgpO1xuXG4gICAgY29uc3QgcGFydHMgPSB0aGlzLnJlbW92ZVBhcnRzKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVwZWF0ZWRQYXJ0ID0gcmVwZWF0ZWRQYXJ0RnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIHRoaXMuYWRkUGFydChyZWR1Y2VkUGFydCk7XG5cbiAgICB0aGlzLmFkZFBhcnQocmVwZWF0ZWRQYXJ0KTtcbiAgfVxuXG4gIHJlbW92ZVBhcnRzKCkge1xuICAgIGxldCBwYXJ0cyA9IHRoaXMuZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gcGFydHMuc3BsaWNlKDApOyAgLy8vXG5cbiAgICByZXR1cm4gcGFydHM7XG4gIH1cblxuICByZW1vdmVGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLmdldFBhcnRzKCksXG4gICAgICAgICAgZmlyc3RQYXJ0ID0gcGFydHMuc2hpZnQoKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kUGFydHMocnVsZU5hbWUsIHBhcnRzKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgcnVsZU5hbWVGaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVGaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSB0aGlzLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXdyaXRlIiwicmVtb3ZlRmlyc3RQYXJ0IiwicGFydHMiLCJyZW1vdmVQYXJ0cyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZWR1Y2VkUGFydCIsInJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lIiwicmVwZWF0ZWRQYXJ0IiwicmVwZWF0ZWRQYXJ0RnJvbVBhcnRzIiwiYWRkUGFydCIsImdldFBhcnRzIiwic3BsaWNlIiwiZmlyc3RQYXJ0Iiwic2hpZnQiLCJmcm9tUnVsZU5hbWVBbmRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRU4sSUFBQSxLQUFvQyxrQ0FBcEMsb0NBQW9DLEVBQUE7QUFFaEMsSUFBQSxLQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUNtQyxJQUFBLE1BQTBCLFdBQTFCLDBCQUEwQixDQUFBO0FBS3pFLElBQUEsV0FBK0IsV0FBL0IsK0JBQStCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBTSxBQUFFQSxLQUFLLEdBQUtDLFVBQWMsZUFBQSxD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