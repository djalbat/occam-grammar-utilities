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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IHJlcGVhdGVkUGFydEZyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IHJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICByZXdyaXRlKHJ1bGVNYXApIHtcbiAgICBjb25zdCB1bmFyeSA9IHRoaXMuaXNVbmFyeSgpLFxuICAgICAgICAgIGNvbXBsZXggPSB0aGlzLmlzQ29tcGxleCgpLFxuICAgICAgICAgIGlzb2xhdGVkID0gdGhpcy5pc0lzb2xhdGVkKHJ1bGVNYXApO1xuXG4gICAgaWYgKHVuYXJ5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGxleCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGlmIChpc29sYXRlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGlzb2xhdGVkIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBsZXQgcGFydHMgPSB0aGlzLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgcGFydHMgPSBwYXJ0cy5zcGxpY2UoMCk7ICAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGVhdGVkUGFydCA9IHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICB0aGlzLmFkZFBhcnQocmVkdWNlZFBhcnQpO1xuXG4gICAgdGhpcy5hZGRQYXJ0KHJlcGVhdGVkUGFydCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgICBydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmIChydWxlTmFtZUZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJld3JpdGUiLCJydWxlTWFwIiwidW5hcnkiLCJpc1VuYXJ5IiwiY29tcGxleCIsImlzQ29tcGxleCIsImlzb2xhdGVkIiwiaXNJc29sYXRlZCIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJzaGlmdCIsInNwbGljZSIsInJlZHVjZWRQYXJ0IiwicmVkdWNlZFBhcnRGcm9tUnVsZU5hbWUiLCJyZXBlYXRlZFBhcnQiLCJyZXBlYXRlZFBhcnRGcm9tUGFydHMiLCJhZGRQYXJ0IiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWVGaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInR5cGUiLCJESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFTixJQUFBLEtBQW9DLGtDQUFwQyxvQ0FBb0MsRUFBQTtBQUVsQyxJQUFBLE1BQTBCLFdBQTFCLDBCQUEwQixDQUFBO0FBQ3hCLElBQUEsS0FBeUIsV0FBekIseUJBQXlCLENBQUE7QUFDcEIsSUFBQSxNQUFnQixXQUFoQixnQkFBZ0IsQ0FBQTtBQUNxRCxJQUFBLFdBQStCLFdBQS9CLCtCQUErQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpKLElBQU0sQUFBRUEsS0FBSyxHQUFLQyxVQUFjLGVBQUEsQ0FBeEJELEtBQUssQUFBbUIsQUFBQztBQUVsQixJQUFBLEFBQU1FLCtCQUErQixpQkFBckM7OzthQUFNQSwrQkFBK0I7Ozs7OztZQUNsREMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNDLE9BQU8sRUFBRTtnQkFDZixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsRUFDdEJDLE9BQU8sR0FBRyxJQUFJLENBQUNDLFNBQVMsRUFBRSxFQUMxQkMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxDQUFDTixPQUFPLENBQUMsQUFBQztnQkFFMUMsSUFBSUMsS0FBSyxFQUFFO29CQUNULElBQU1NLGdCQUFnQixHQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEFBQUM7b0JBRXpDLE1BQU0sSUFBSUMsS0FBSyxDQUFDLEFBQUMsT0FBSyxDQUFrRUMsTUFBUSxDQUF4RUgsZ0JBQWdCLEVBQUMsK0NB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