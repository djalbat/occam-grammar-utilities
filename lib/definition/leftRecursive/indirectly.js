"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _reduced = _interopRequireDefault(require("../../rule/reduced"));
var _repeated = _interopRequireDefault(require("../../rule/repeated"));
var _rewritten = _interopRequireDefault(require("../../rule/rewritten"));
var _repeated1 = _interopRequireDefault(require("../../definition/repeated"));
var _rewritten1 = _interopRequireDefault(require("../../definition/rewritten"));
var _leftRecursive = _interopRequireDefault(require("../../definition/leftRecursive"));
var _implicitly = _interopRequireDefault(require("../../definition/leftRecursive/implicitly"));
var _types = require("../../types");
var _rule = require("../../utilities/rule");
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
var first = _necessary.arrayUtilities.first;
var IndirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(IndirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(IndirectlyLeftRecursiveDefinition);
    function IndirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
        _classCallCheck(this, IndirectlyLeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
        _this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
        return _this;
    }
    _createClass(IndirectlyLeftRecursiveDefinition, [
        {
            key: "getImplicitlyLeftRecursiveDefinition",
            value: function getImplicitlyLeftRecursiveDefinition() {
                return this.implicitlyLeftRecursiveDefinition;
            }
        },
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var definition = this.getDefinition(), ruleName = this.getRuleName(), rule = ruleMap[ruleName] || null;
                var leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), leftRecursiveRuleName = firstLeftRecursiveRuleName, leftRecursiveRule = ruleMap[leftRecursiveRuleName] || null;
                var reducedRule = (0, _rule).reducedRuleFromRule(leftRecursiveRule, ruleMap, _reduced.default), reducedRuleEmpty = reducedRule.isEmpty();
                if (reducedRuleEmpty) {
                    var definitionString = definition.asString(), implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(), implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
                    throw new Error("The '".concat(implicitlyLeftRecursiveDefinitionString, "' implicitly left recursive definition of the '").concat(leftRecursiveRuleName, "' rule has no sibling non-left recursive definitions and therefore the '").concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule cannot be rewritten."));
                }
                var repeatedRule = (0, _rule).repeatedRuleFromRule(leftRecursiveRule, ruleMap, _repeated.default), repeatedDefinition = _repeated1.default.fromDefinition(definition);
                repeatedRule.addDefinition(repeatedDefinition);
                (0, _rule).rewrittenRuleFromRule(leftRecursiveRule, ruleMap, _rewritten.default);
                var rewrittenDefinition = _rewritten1.default.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName), replacementDefinition = this; ///
                rule.replaceDefinition(replacementDefinition, rewrittenDefinition);
            }
        }
    ], [
        {
            key: "fromRuleNameDefinitionAndRecursiveDefinitions",
            value: function fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
                var indirectlyLeftRecursiveDefinition = null;
                var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;
                if (definitionLeftRecursive) {
                    leftRecursiveRuleNames.some(function(leftRecursiveRuleName) {
                        var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                        if (!ruleNameLeftRecursiveRuleName) {
                            var implicitlyLeftRecursiveDefinition = _implicitly.default.fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions);
                            if (implicitlyLeftRecursiveDefinition !== null) {
                                var definitionUnary = (0, _definition).isDefinitionUnary(definition);
                                if (definitionUnary) {
                                    var definitionString = definition.asString();
                                    throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
                                }
                                var definitionComplex = (0, _definition).isDefinitionComplex(definition);
                                if (definitionComplex) {
                                    var definitionString1 = definition.asString();
                                    throw new Error("The '".concat(definitionString1, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                                }
                                var type = _types.INDIRECTLY_LEFT_RECURSIVE_TYPE, parts = [], recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                                indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
                                return true;
                            }
                        }
                    });
                }
                return indirectlyLeftRecursiveDefinition;
            }
        }
    ]);
    return IndirectlyLeftRecursiveDefinition;
}(_leftRecursive.default);
exports.default = IndirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW5kaXJlY3RseS5qcyIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJlcGVhdGVkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXBlYXRlZFwiO1xuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgUmVwZWF0ZWREZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmV3cml0dGVuRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZXdyaXR0ZW5cIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlXCI7XG5pbXBvcnQgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseVwiO1xuXG5pbXBvcnQgeyBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlRnJvbVJ1bGUsIHJlcGVhdGVkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICByZXdyaXRlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW2xlZnRSZWN1cnNpdmVSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSwgcnVsZU1hcCwgUmVkdWNlZFJ1bGUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlRW1wdHkgPSByZWR1Y2VkUnVsZS5pc0VtcHR5KCk7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGVFbXB0eSkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKSxcbiAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHRoaXMuZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmcgPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7aW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uU3RyaW5nfScgaW1wbGljaXRseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBydWxlIGhhcyBubyBzaWJsaW5nIG5vbi1sZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXBlYXRlZFJ1bGUgPSByZXBlYXRlZFJ1bGVGcm9tUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSwgcnVsZU1hcCwgUmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgcmV3cml0dGVuUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZXdyaXR0ZW5SdWxlKTtcblxuICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdGhpczsgLy8vXG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VtZW50RGVmaW5pdGlvbiwgcmV3cml0dGVuRGVmaW5pdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgICAgIGlmIChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICAgICAgICBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFVOQVNTSUdORURfRU5UUlkgPSBcIl4uKiRcIjtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidHlwZSIsInBhcnRzIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJld3JpdGUiLCJydWxlTWFwIiwiZ2V0RGVmaW5pdGlvbiIsImdldFJ1bGVOYW1lIiwicnVsZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlIiwiUmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUVtcHR5IiwiaXNFbXB0eSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyIsIkVycm9yIiwicmVwZWF0ZWRSdWxlIiwicmVwZWF0ZWRSdWxlRnJvbVJ1bGUiLCJSZXBlYXRlZFJ1bGUiLCJyZXBlYXRlZERlZmluaXRpb24iLCJSZXBlYXRlZERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsImFkZERlZmluaXRpb24iLCJyZXdyaXR0ZW5SdWxlRnJvbVJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJzb21lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25VbmFyeSIsImlzRGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRStCLEdBQVcsQ0FBWCxVQUFXO0FBRWxCLEdBQW9CLENBQXBCLFFBQW9CO0FBQ25CLEdBQXFCLENBQXJCLFNBQXFCO0FBQ3BCLEdBQXNCLENBQXRCLFVBQXNCO0FBQ2pCLEdBQTJCLENBQTNCLFVBQTJCO0FBQzFCLEdBQTRCLENBQTVCLFdBQTRCO0FBQ3hCLEdBQWdDLENBQWhDLGNBQWdDO0FBQ3RCLEdBQTJDLENBQTNDLFdBQTJDO0FBRTFDLEdBQWEsQ0FBYixNQUFhO0FBQ3FCLEdBQXNCLENBQXRCLEtBQXNCO0FBQ3dCLEdBQTRCLENBQTVCLFdBQTRCOzs7Ozs7Ozs7Ozs7Ozs7OERBZDNKO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7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