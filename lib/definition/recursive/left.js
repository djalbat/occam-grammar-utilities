"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _recursive = _interopRequireDefault(require("../../definition/recursive"));
var _ruleName = require("../../utilities/ruleName");
var _definition = require("../../utilities/definition");
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
var LeftRecursiveDefinition = /*#__PURE__*/ function(RecursiveDefinition) {
    _inherits(LeftRecursiveDefinition, RecursiveDefinition);
    var _super = _createSuper(LeftRecursiveDefinition);
    function LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames) {
        _classCallCheck(this, LeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, parts, ruleName, recursiveRuleNames);
        _this.leftRecursiveRuleNames = leftRecursiveRuleNames;
        return _this;
    }
    _createClass(LeftRecursiveDefinition, [
        {
            key: "getLeftRecursiveRuleNames",
            value: function getLeftRecursiveRuleNames() {
                return this.leftRecursiveRuleNames;
            }
        },
        {
            key: "isUnary",
            value: function isUnary() {
                var definition = this, definitionUnary = (0, _definition).isDefinitionUnary(definition), unary = definitionUnary; ///
                return unary;
            }
        },
        {
            key: "isComplex",
            value: function isComplex() {
                var definition = this, definitionComplex = (0, _definition).isDefinitionComplex(definition), complex = definitionComplex; ///
                return complex;
            }
        },
        {
            key: "isIsolated",
            value: function isIsolated(ruleMap) {
                var ruleName = this.getRuleName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), reducedRule = ruleMap[reducedRuleName] || null, isolated = reducedRule === null;
                return isolated;
            }
        }
    ], [
        {
            key: "fromRecursiveDefinition",
            value: function fromRecursiveDefinition(recursiveDefinition) {
                var leftRecursiveDefinition = null;
                var recursiveDefinitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(recursiveDefinition);
                if (recursiveDefinitionLeftRecursive) {
                    var parts = recursiveDefinition.getParts(), ruleName = recursiveDefinition.getRuleName(), recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(recursiveDefinition);
                    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                }
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var leftRecursiveDefinition = null;
                var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, definitionLeftRecursiveDefinition = leftRecursiveRuleNamesLength > 0;
                if (definitionLeftRecursiveDefinition) {
                    var parts = definition.getParts(), recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                }
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinition;
}(_recursive.default);
exports.default = LeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgICBzdXBlcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgaXNVbmFyeSgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pLFxuICAgICAgICAgIHVuYXJ5ID0gZGVmaW5pdGlvblVuYXJ5OyAgLy8vXG5cbiAgICByZXR1cm4gdW5hcnk7XG4gIH1cblxuICBpc0NvbXBsZXgoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbiksXG4gICAgICAgICAgY29tcGxleCA9IGRlZmluaXRpb25Db21wbGV4OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzSXNvbGF0ZWQocnVsZU1hcCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBydWxlTWFwW3JlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbCxcbiAgICAgICAgICBpc29sYXRlZCA9IChyZWR1Y2VkUnVsZSA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaXNvbGF0ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlY3Vyc2l2ZURlZmluaXRpb24ocmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUocmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihyZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiaXNVbmFyeSIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25VbmFyeSIsInVuYXJ5IiwiaXNDb21wbGV4IiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiY29tcGxleCIsImlzSXNvbGF0ZWQiLCJydWxlTWFwIiwiZ2V0UnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZSIsImlzb2xhdGVkIiwiZnJvbVJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJnZXRQYXJ0cyIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmlu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