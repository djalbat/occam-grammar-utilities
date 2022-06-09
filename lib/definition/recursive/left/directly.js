"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
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
                this.removeFirstPart();
                var parts = this.removeParts(), ruleName2 = this.getRuleName(), reducedPart = (0, _part).reducedPartFromRuleName(ruleName2), repeatedPart = (0, _parts).repeatedPartFromParts(parts);
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
                var parts = this.getParts(), firstParts = parts.shift();
                return firstParts;
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var directlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), ruleNameFirstLeftRecursiveRuleName = ruleName === firstLeftRecursiveRuleName;
                    if (ruleNameFirstLeftRecursiveRuleName) {
                        var type = _types.DIRECTLY_LEFT_RECURSIVE_TYPE, parts = definition.getParts(), recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                        directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
                    }
                }
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);
exports.default = DirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IHJlcGVhdGVkUGFydEZyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IHJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICByZXdyaXRlKHJ1bGVNYXApIHtcbiAgICBjb25zdCB1bmFyeSA9IHRoaXMuaXNVbmFyeSgpLFxuICAgICAgICAgIGNvbXBsZXggPSB0aGlzLmlzQ29tcGxleCgpLFxuICAgICAgICAgIGlzb2xhdGVkID0gdGhpcy5pc0lzb2xhdGVkKHJ1bGVNYXApO1xuXG4gICAgaWYgKHVuYXJ5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGxleCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGlmIChpc29sYXRlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGlzb2xhdGVkIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUZpcnN0UGFydCgpO1xuXG4gICAgY29uc3QgcGFydHMgPSB0aGlzLnJlbW92ZVBhcnRzKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVwZWF0ZWRQYXJ0ID0gcmVwZWF0ZWRQYXJ0RnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIHRoaXMuYWRkUGFydChyZWR1Y2VkUGFydCk7XG5cbiAgICB0aGlzLmFkZFBhcnQocmVwZWF0ZWRQYXJ0KTtcbiAgfVxuXG4gIHJlbW92ZVBhcnRzKCkge1xuICAgIGxldCBwYXJ0cyA9IHRoaXMuZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gcGFydHMuc3BsaWNlKDApOyAgLy8vXG5cbiAgICByZXR1cm4gcGFydHM7XG4gIH1cblxuICByZW1vdmVGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLmdldFBhcnRzKCksXG4gICAgICAgICAgZmlyc3RQYXJ0cyA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lRmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lRmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmV3cml0ZSIsInJ1bGVNYXAiLCJ1bmFyeSIsImlzVW5hcnkiLCJjb21wbGV4IiwiaXNDb21wbGV4IiwiaXNvbGF0ZWQiLCJpc0lzb2xhdGVkIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmVtb3ZlRmlyc3RQYXJ0IiwicGFydHMiLCJyZW1vdmVQYXJ0cyIsInJlZHVjZWRQYXJ0IiwicmVkdWNlZFBhcnRGcm9tUnVsZU5hbWUiLCJyZXBlYXRlZFBhcnQiLCJyZXBlYXRlZFBhcnRGcm9tUGFydHMiLCJhZGRQYXJ0IiwiZ2V0UGFydHMiLCJzcGxpY2UiLCJmaXJzdFBhcnRzIiwic2hpZnQiLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwidHlwZSIsIkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWtCLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVOLElBQUEsS0FBb0Msa0NBQXBDLG9DQUFvQyxFQUFBO0FBRWxDLElBQUEsTUFBMEIsV0FBMUIsMEJBQTBCLENBQUE7QUFDeEIsSUFBQSxLQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUNwQixJQUFBLE1BQWdCLFdBQWhCLGdCQUFnQixDQUFBO0FBQ3FELElBQUEsV0FBK0IsV0FBL0IsK0JBQStCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakosSUFBTSxBQUFFQSxLQUFLLEdBQUtDLFVBQWMsZUFBQSxDQUF4QkQsS0FBSyxBQUFtQixBQUFDO0FBRWxCLElBQUEsQUFBTUUsK0JBQStCLGlCQUFyQzs7O2FBQU1BLCtCQUErQjs7Ozs7O1lBQ2xEQyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsT0FBTyxFQUFFO2dCQUNmLElBQU1D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