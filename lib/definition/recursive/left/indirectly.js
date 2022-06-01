"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reduced = _interopRequireDefault(require("../../../rule/reduced"));
var _rewritten = _interopRequireDefault(require("../../../rule/rewritten"));
var _rewritten1 = _interopRequireDefault(require("../../../definition/rewritten"));
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _implicitly = _interopRequireDefault(require("../../../definition/recursive/left/implicitly"));
var _types = require("../../../types");
var _rule = require("../../../utilities/rule");
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
var IndirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(IndirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(IndirectlyLeftRecursiveDefinition);
    function IndirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
        _classCallCheck(this, IndirectlyLeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
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
                var unary = this.isUnary(), complex = this.isComplex(), ruleName = this.getRuleName(), definition = this.getDefinition(), definitionUnary = unary, definitionComplex = complex, implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(), implicitDefinition = implicitlyLeftRecursiveDefinition, implicitDefinitionUnary = implicitDefinition.isUnary(), implicitDefinitionRuleName = implicitDefinition.getRuleName(), implicitRuleName = implicitDefinitionRuleName; ///
                if (definitionUnary && implicitDefinitionUnary) {
                    var definitionString = definition.asString();
                    throw new Error("Both the '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule and the corresponding implicitly left recursive definition of the '").concat(implicitRuleName, "' rule are unary and therefore the former cannot be rewritten."));
                }
                if (definitionComplex) {
                    var definitionString1 = definition.asString();
                    throw new Error("The '".concat(definitionString1, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                }
                var rule = ruleMap[ruleName], rewrittenRule = (0, _rule).rewrittenRuleFromRule(rule, ruleMap, _rewritten.default), rewrittenDefinition = _rewritten1.default.fromDefinitionAndImplicitlyLeftRecursiveDefinition(definition, implicitlyLeftRecursiveDefinition);
                rewrittenRule.replaceDefinition(definition, rewrittenDefinition);
                var implicitRule = ruleMap[implicitRuleName];
                (0, _rule).reducedRuleFromRule(rule, ruleMap, _reduced.default);
                (0, _rule).reducedRuleFromRule(implicitRule, ruleMap, _reduced.default);
                (0, _rule).rewrittenRuleFromRule(implicitRule, ruleMap, _rewritten.default);
            }
        }
    ], [
        {
            key: "fromRuleNameDefinitionAndRecursiveDefinitions",
            value: function fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
                var indirectlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition);
                    leftRecursiveRuleNames.some(function(leftRecursiveRuleName) {
                        var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                        if (!ruleNameLeftRecursiveRuleName) {
                            var implicitlyLeftRecursiveDefinition = _implicitly.default.fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions);
                            if (implicitlyLeftRecursiveDefinition !== null) {
                                var parts = null, type = _types.INDIRECTLY_LEFT_RECURSIVE_TYPE, recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                                indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
                            }
                        }
                    });
                }
                return indirectlyLeftRecursiveDefinition;
            }
        }
    ]);
    return IndirectlyLeftRecursiveDefinition;
} // const ruleName = this.getRuleName(),
 //       rule = ruleMap[ruleName],
 //       definition = this.getDefinition(),
 //       definitionUnary = isDefinitionUnary(definition),
 //       leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
 //       firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
 //       leftRecursiveRuleName = firstLeftRecursiveRuleName, ///
 //       leftRecursiveRule = ruleMap[leftRecursiveRuleName];
 //
 // const reducedRule = reducedRuleFromRule(leftRecursiveRule, ruleMap, ReducedRule),
 //       reducedRuleEmpty = reducedRule.isEmpty();
 //
 // if (reducedRuleEmpty) {
 //   const definitionString = definition.asString(),
 //         implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
 //         implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
 //
 //   throw new Error(`The '${implicitlyLeftRecursiveDefinitionString}' implicitly left recursive definition of the '${leftRecursiveRuleName}' rule has no sibling non-left recursive definitions and therefore the '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule cannot be rewritten.`);
 // }
 //
 // const rewrittenRule = rewrittenRuleFromRule(leftRecursiveRule, ruleMap, RewrittenRule),
 //       replacedDefinition = this, ///
 //       rewrittenDefinition = definitionUnary ?
 //                               RewrittenDefinition.fromDefinitionLeftRecursiveRuleNameAndImplicitlyLeftRecursiveDefinition(definition, leftRecursiveRuleName, this.implicitlyLeftRecursiveDefinition) :
 //                                 RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
 //       replacementDefinition = rewrittenDefinition;  ///
 //
 // rule.replaceDefinition(replacedDefinition, replacementDefinition);
 //
 // if (definitionUnary) {
 //   const unaryImplicitlyLeftRecursiveDefinition = UnaryDefinition.fromDefinition(this.implicitlyLeftRecursiveDefinition),
 //         replacedDefinition = this.implicitlyLeftRecursiveDefinition,  ///
 //         replacementDefinition = unaryImplicitlyLeftRecursiveDefinition; ///
 //
 //   rewrittenRule.replaceDefinition(replacedDefinition, replacementDefinition);
 // }
(_left.default);
exports.default = IndirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5pbXBvcnQgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2ltcGxpY2l0bHlcIjtcblxuaW1wb3J0IHsgSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgdW5hcnkgPSB0aGlzLmlzVW5hcnkoKSxcbiAgICAgICAgICBjb21wbGV4ID0gdGhpcy5pc0NvbXBsZXgoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvblVuYXJ5ID0gdW5hcnksICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGNvbXBsZXgsICAvLy9cbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSB0aGlzLmdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGltcGxpY2l0RGVmaW5pdGlvbiA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgaW1wbGljaXREZWZpbml0aW9uVW5hcnkgPSBpbXBsaWNpdERlZmluaXRpb24uaXNVbmFyeSgpLFxuICAgICAgICAgIGltcGxpY2l0RGVmaW5pdGlvblJ1bGVOYW1lID0gaW1wbGljaXREZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW1wbGljaXRSdWxlTmFtZSA9IGltcGxpY2l0RGVmaW5pdGlvblJ1bGVOYW1lOyAgLy8vXG5cbiAgICBpZiAoZGVmaW5pdGlvblVuYXJ5ICYmIGltcGxpY2l0RGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJvdGggdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgaW1wbGljaXRseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtpbXBsaWNpdFJ1bGVOYW1lfScgcnVsZSBhcmUgdW5hcnkgYW5kIHRoZXJlZm9yZSB0aGUgZm9ybWVyIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIHJld3JpdHRlblJ1bGUgPSByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUocnVsZSwgcnVsZU1hcCwgUmV3cml0dGVuUnVsZSksXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oZGVmaW5pdGlvbiwgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24oZGVmaW5pdGlvbiwgcmV3cml0dGVuRGVmaW5pdGlvbik7XG5cbiAgICBjb25zdCBpbXBsaWNpdFJ1bGUgPSBydWxlTWFwW2ltcGxpY2l0UnVsZU5hbWVdO1xuXG4gICAgcmVkdWNlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSk7XG5cbiAgICByZWR1Y2VkUnVsZUZyb21SdWxlKGltcGxpY2l0UnVsZSwgcnVsZU1hcCwgUmVkdWNlZFJ1bGUpO1xuXG4gICAgcmV3cml0dGVuUnVsZUZyb21SdWxlKGltcGxpY2l0UnVsZSwgcnVsZU1hcCwgUmV3cml0dGVuUnVsZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgICAgIGlmIChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbi8vIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuLy8gICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuLy8gICAgICAgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuLy8gICAgICAgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbiksXG4vLyAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4vLyAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuLy8gICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuLy8gICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW2xlZnRSZWN1cnNpdmVSdWxlTmFtZV07XG4vL1xuLy8gY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4vLyAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuLy9cbi8vIGlmIChyZWR1Y2VkUnVsZUVtcHR5KSB7XG4vLyAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCksXG4vLyAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHRoaXMuZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4vLyAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5hc1N0cmluZygpO1xuLy9cbi8vICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7aW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uU3RyaW5nfScgaW1wbGljaXRseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBydWxlIGhhcyBubyBzaWJsaW5nIG5vbi1sZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbi8vIH1cbi8vXG4vLyBjb25zdCByZXdyaXR0ZW5SdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZXdyaXR0ZW5SdWxlKSxcbi8vICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMsIC8vL1xuLy8gICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IGRlZmluaXRpb25VbmFyeSA/XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIDpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuLy8gICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgIC8vL1xuLy9cbi8vIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuLy9cbi8vIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbi8vICAgY29uc3QgdW5hcnlJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBVbmFyeURlZmluaXRpb24uZnJvbURlZmluaXRpb24odGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuLy8gICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuLy8gICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB1bmFyeUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG4vL1xuLy8gICByZXdyaXR0ZW5SdWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsInR5cGUiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmV3cml0ZSIsInJ1bGVNYXAiLCJ1bmFyeSIsImlzVW5hcnkiLCJjb21wbGV4IiwiaXNDb21wbGV4IiwiZ2V0UnVsZU5hbWUiLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpbXBsaWNpdERlZmluaXRpb24iLCJpbXBsaWNpdERlZmluaXRpb25VbmFyeSIsImltcGxpY2l0RGVmaW5pdGlvblJ1bGVOYW1lIiwiaW1wbGljaXRSdWxlTmFtZSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwicnVsZSIsInJld3JpdHRlblJ1bGUiLCJyZXdyaXR0ZW5SdWxlRnJvbVJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiaW1wbGljaXRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsIlJlZHVjZWRSdWxlIiwiZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJzb21lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFVyxJQUFBLFFBQXVCLGtDQUF2Qix1QkFBdUIsRUFBQTtBQUNyQixJQUFBLFVBQXlCLGtDQUF6Qix5QkFBeUIsRUFBQTtBQUNuQixJQUFBLFdBQStCLGtDQUEvQiwrQkFBK0IsRUFBQTtBQUMzQixJQUFBLEtBQW9DLGtDQUFwQyxvQ0FBb0MsRUFBQTtBQUMxQixJQUFBLFdBQStDLGtDQUEvQywrQ0FBK0MsRUFBQTtBQUU5QyxJQUFBLE1BQWdCLFdBQWhCLGdCQUFnQixDQUFBO0FBQ0osSUFBQSxLQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUM4QixJQUFBLFdBQStCLFdBQS9CLCtCQUErQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxJLElBQUEsQUFBTUEsaUNBQWlDLGlCQWdGbkQsQUFoRlk7OzthQUFNQSxpQ0FBaUMsQ0FDeENDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyxpQ0FBaUM7OztrQ0FDcEhOLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFO1FBRXJGLE1BQUtDLGlDQUFpQyxHQUFHQSxpQ0FBaUMsQ0FBQzs7Ozs7WUFHN0VDLEdBQW9DLEVBQXBDQSxzQ0FBb0M7bUJBQXBDQSxTQUFBQSxvQ0FBb0MsR0FBRztnQkFDckMsT0FBTyxJQUFJLENBQUNELGlDQUFpQyxDQUFDO2FBQy9DOzs7WUFFREUsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNDLE9BQU8sRUFBRTtnQkFDZixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsRUFDdEJDLE9BQU8sR0FBRyxJQUFJLENBQUNDLFNBQVMsRUFBRSxFQUMxQlgsUUFBUSxHQUFHLElBQUksQ0FBQ1ksV0FBVyxFQUFFLEVBQzdCWCxVQUFVLEdBQUcsSUFBSSxDQUFDWSxhQUFhLEVBQUUsRUFDakNDLGVBQWUsR0FBR04sS0FBSyxFQUN2Qk8saUJBQWlCLEdBQUdMLE9BQU8sRUFDM0JOLGlDQUFpQyxHQUFHLElBQUksQ0FBQ0Msb0NBQW9DLEVBQUUsRUFDL0VXLGtCQUFrQixHQUFHWixpQ0FBaUMsRUFDdERhLHVCQUF1QixHQUFHRCxrQkFBa0IsQ0FBQ1AsT0FBTyxFQUFFLEVBQ3REUywwQkFBMEIsR0FBR0Ysa0JBQWtCLENBQUNKLFdBQVcsRUFBRSxFQUM3RE8sZ0JBQWdCLEdBQUdELDBCQUEwQixBQUFDLEVBQUUsR0FBRztnQkFFekQsSUFBSUosZUFBZSxJQUFJRyx1QkFBdUIsRUFBRTtvQkFDOUMsSUFBTUcsZ0JBQWdCLEdBQUduQixVQUFVLENBQUNvQixRQUFRLEVBQUUsQUFBQztvQkFFL0MsTUFBTSxJQUFJQyxLQUFLLENBQUMsQUFBQyxZQUFVLENBQW9FdEIsTUFBUSxDQUExRW9CLGdCQUFnQixFQUFDLGlEQUErQyxDQUFXLENBQTRFRCxNQUFnQixDQUFyR25CLFFBQVEsRUFBQyw0RUFBMEUsQ0FBbUIsQ0FBQSxNQUE4RCxDQUEvRW1CLGdCQUFnQixFQUFDLGdFQUE4RCxDQUFDLENBQUMsQ0FBQztpQkFDdlE7Z0JBRUQsSUFBSUosaUJBQWlCLEVBQUU7b0JBQ3JCLElBQU1LLGlCQUFnQixHQUFHbkIsVUFBVSxDQUFDb0IsUUFBUSxFQUFFLEFBQUM7b0JBRS9DLE1BQU0sSUFBSUMsS0FBSyxDQUFDLEFBQUMsT0FBSyxDQUFvRXRCLE1BQVEsQ0FBMUVvQixpQkFBZ0IsRUFBQyxpREFBK0MsQ0FBVyxDQUFBLE1BQW9ELENBQTdEcEIsUUFBUSxFQUFDLHNEQUFvRCxDQUFDLENBQUMsQ0FBQztpQkFDM0o7Z0JBRUQsSUFBTXVCLElBQUksR0FBR2hCLE9BQU8sQ0FBQ1AsUUFBUSxDQUFDLEVBQ3hCd0IsYUFBYSxHQUFHQyxDQUFBQSxHQUFBQSxLQUFxQixBQUE4QixDQUFBLHNCQUE5QixDQUFDRixJQUFJLEVBQUVoQixPQUFPLEVBQUVtQixVQUFhLFFBQUEsQ0FBQyxFQUNuRUMsbUJBQW1CLEdBQUdDLFdBQW1CLFFBQUEsQ0FBQ0Msa0RBQWtELENBQUM1QixVQUFVLEVBQUVHLGlDQUFpQyxDQUFDLEFBQUM7Z0JBRWxKb0IsYUFBYSxDQUFDTSxpQkFBaUIsQ0FBQzdCLFVBQVUsRUFBRTBCLG1CQUFtQixDQUFDLENBQUM7Z0JBRWpFLElBQU1JLFlBQVksR0FBR3hCLE9BQU8sQ0FBQ1ksZ0JBQWdCLENBQUMsQUFBQztnQkFFL0NhLENBQUFBLEdBQUFBLEtBQW1CLEFBQTRCLENBQUEsb0JBQTVCLENBQUNULElBQUksRUFBRWhCLE9BQU8sRUFBRTBCLFFBQVcsUUFBQSxDQUFDLENBQUM7Z0JBRWhERCxDQUFBQSxHQUFBQSxLQUFtQixBQUFvQyxDQUFBLG9CQUFwQyxDQUFDRCxZQUFZLEVBQUV4QixPQUFPLEVBQUUwQixRQUFXLFFBQUEsQ0FBQyxDQUFDO2dCQUV4RFIsQ0FBQUEsR0FBQUEsS0FBcUIsQUFBc0MsQ0FBQSxzQkFBdEMsQ0FBQ00sWUFBWSxFQUFFeEIsT0FBTyxFQUFFbUIsVUFBYSxRQUFBLENBQUMsQ0FBQzthQUM3RDs7OztZQUVNUSxHQUE2QyxFQUE3Q0EsK0NBQTZDO21CQUFwRCxTQUFPQSw2Q0FBNkMsQ0FBQ2xDLFFBQVEsRUFBRUMsVUFBVSxFQUFFa0Msb0JBQW9CLEVBQUU7Z0JBQy9GLElBQUlDLGlDQUFpQyxHQUFHLElBQUksQUFBQztnQkFFN0MsSUFBTUMsdUJBQXVCLEdBQUdDLENBQUFBLEdBQUFBLFdBQXlCLEFBQVksQ0FBQSwwQkFBWixDQUFDckMsVUFBVSxDQUFDLEFBQUM7Z0JBRXRFLElBQUlvQyx1QkFBdUIsRUFBRTtvQkFDM0IsSUFBTWxDLHNCQUFzQixHQUFHb0MsQ0FBQUEsR0FBQUEsV0FBb0MsQUFBWSxDQUFBLHFDQUFaLENBQUN0QyxVQUFVLENBQUMsQUFBQztvQkFFaEZFLHNCQUFzQixDQUFDcUMsSUFBSSxDQUFDLFNBQUNDLHFCQUFxQixFQUFLO3dCQUNyRCxJQUFNQyw2QkFBNkIsR0FBSTFDLFFBQVEsS0FBS3lDLHFCQUFxQixBQUFDLEFBQUM7d0JBRTNFLElBQUksQ0FBQ0MsNkJBQTZCLEVBQUU7NEJBQ2xDLElBQU10QyxpQ0FBaUMsR0FBR3VDLFdBQWlDLFFBQUEsQ0FBQ0Msd0RBQXdELENBQUM1QyxRQUFRLEVBQUV5QyxxQkFBcUIsRUFBRU4sb0JBQW9CLENBQUMsQUFBQzs0QkFFNUwsSUFBSS9CLGlDQUFpQyxLQUFLLElBQUksRUFBRTtnQ0FDOUMsSUFBTU4sS0FBSyxHQUFHLElBQUksRUFDWkMsSUFBSSxHQUFHOEMsTUFBOEIsK0JBQUEsRUFDckMzQyxrQkFBa0IsR0FBRzRDLENBQUFBLEdBQUFBLFdBQWdDLEFBQVksQ0FBQSxpQ0FBWixDQUFDN0MsVUFBVSxDQUFDLEFBQUM7Z0NBRXhFbUMsaUNBQWlDLEdBQUcsSUFBSXZDLGlDQUFpQyxDQUFDQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsRUFBRUMsaUNBQWlDLENBQUMsQ0FBQzs2QkFDN0w7eUJBQ0Y7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKO2dCQUVELE9BQU9nQyxpQ0FBaUMsQ0FBQzthQUMxQzs7OztDQUNGLENBRUQsdUNBQXVDO0NBQ3ZDLGtDQUFrQztDQUNsQywyQ0FBMkM7Q0FDM0MseURBQXlEO0NBQ3pELG1FQUFtRTtDQUNuRSxvRUFBb0U7Q0FDcEUsZ0VBQWdFO0NBQ2hFLDREQUE0RDtDQUM1RCxFQUFFO0NBQ0Ysb0ZBQW9GO0NBQ3BGLGtEQUFrRDtDQUNsRCxFQUFFO0NBQ0YsMEJBQTBCO0NBQzFCLG9EQUFvRDtDQUNwRCwyRkFBMkY7Q0FDM0Ysa0dBQWtHO0NBQ2xHLEVBQUU7Q0FDRiwrVEFBK1Q7Q0FDL1QsSUFBSTtDQUNKLEVBQUU7Q0FDRiwwRkFBMEY7Q0FDMUYsdUNBQXVDO0NBQ3ZDLGdEQUFnRDtDQUNoRCx5TUFBeU07Q0FDek0saUlBQWlJO0NBQ2pJLDBEQUEwRDtDQUMxRCxFQUFFO0NBQ0YscUVBQXFFO0NBQ3JFLEVBQUU7Q0FDRix5QkFBeUI7Q0FDekIsMkhBQTJIO0NBQzNILDRFQUE0RTtDQUM1RSw4RUFBOEU7Q0FDOUUsRUFBRTtDQUNGLGdGQUFnRjtDQUNoRixJQUFJO0NBbkgyRFcsS0FBdUIsUUFBQSxDQThFckY7a0JBOUVvQmxELGlDQUFpQyJ9