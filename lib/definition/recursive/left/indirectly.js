"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return IndirectlyLeftRecursiveDefinition;
    },
    enumerable: true
});
var _necessary = require("necessary");
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _implicitly = _interopRequireDefault(require("../../../definition/recursive/left/implicitly"));
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
var first = _necessary.arrayUtilities.first;
var IndirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(IndirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(IndirectlyLeftRecursiveDefinition);
    function IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
        _classCallCheck(this, IndirectlyLeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
        _this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
        return _this;
    }
    _createClass(IndirectlyLeftRecursiveDefinition, [
        {
            key: "getImplicitlyLeftRecursiveDefinition",
            value: function getImplicitlyLeftRecursiveDefinition() {
                return this.implicitlyLeftRecursiveDefinition;
            }
        }
    ], [
        {
            key: "fromRuleNameDefinitionAndRecursiveDefinitions",
            value: function fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
                var indirectlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition.isDefinitionLeftRecursive)(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), leftRecursiveRuleName = firstLeftRecursiveRuleName, ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                    if (!ruleNameLeftRecursiveRuleName) {
                        var leftRecursiveDefinition = _left.default.fromRuleNameAndDefinition(ruleName, definition);
                        recursiveDefinitions = _toConsumableArray(recursiveDefinitions).concat([
                            leftRecursiveDefinition
                        ]); ///
                        var implicitlyLeftRecursiveDefinition = _implicitly.default.fromRecursiveDefinitions(recursiveDefinitions);
                        if (implicitlyLeftRecursiveDefinition !== null) {
                            var definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                            if (definitionComplex) {
                                var definitionString = definition.asString();
                                throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                            }
                            var parts = definition.getParts(), recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
                            indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
                        }
                    }
                }
                return indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromPartsRuleNameAndImplicitlyLeftRecursiveDefinition",
            value: function fromPartsRuleNameAndImplicitlyLeftRecursiveDefinition(parts, ruleName, implicitlyLeftRecursiveDefinition) {
                var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
                return indirectlyLeftRecursiveDefinition;
            }
        }
    ]);
    return IndirectlyLeftRecursiveDefinition;
}(_left.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcbmltcG9ydCBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnQvaW1wbGljaXRseVwiO1xuXG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbik7XG5cbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbIC4uLnJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBdOyAgLy8vXG5cbiAgICAgICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgaWYgKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRzUnVsZU5hbWVBbmRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tUGFydHNSdWxlTmFtZUFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7O2VBWVFBLGlDQUFpQzs7Ozt5QkFWdkIsV0FBVzsyQ0FFTixvQ0FBb0M7aURBQzFCLCtDQUErQztxQkFFaEIsMEJBQTBCOzBCQUNnQywrQkFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7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