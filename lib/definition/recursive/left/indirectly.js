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
                var unary = this.isUnary(), ruleName = this.getRuleName(), definition = this.getDefinition(), implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(), implicitlyLeftRecursiveDefinitionUnary = implicitlyLeftRecursiveDefinition.isUnary(), implicitlyLeftRecursiveDefinitionRuleName = implicitlyLeftRecursiveDefinition.getRuleName(), implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveDefinitionRuleName, indirectlyLeftRecursiveRuleName = ruleName; ///
                if (unary && implicitlyLeftRecursiveDefinitionUnary) {
                    var definitionString = definition.asString();
                    throw new Error("Both the '".concat(definitionString, "' indirectly left recursive definition of the '").concat(indirectlyLeftRecursiveRuleName, "' rule and the corresponding implicitly left recursive definition of the '").concat(implicitlyLeftRecursiveRuleName, "' rule are unary and therefore the former cannot be rewritten."));
                }
                var implicitlyLeftRecursiveRule = ruleMap[implicitlyLeftRecursiveRuleName], indirectlyLeftRecursiveRule = ruleMap[indirectlyLeftRecursiveRuleName], reducedImplicitlyLeftRecursiveRule = (0, _rule).reducedRuleFromRule(implicitlyLeftRecursiveRule, ruleMap, _reduced.default), rewrittenIndirectlyLeftRecursiveRule = (0, _rule).rewrittenRuleFromRule(indirectlyLeftRecursiveRule, ruleMap, _rewritten.default), leftRecursiveRuleName = implicitlyLeftRecursiveRuleName, rewrittenDefinition = _rewritten1.default.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName);
                reducedImplicitlyLeftRecursiveRule.removeDefinition(definition);
                rewrittenIndirectlyLeftRecursiveRule.replaceDefinition(definition, rewrittenDefinition);
            // const ruleName = this.getRuleName(),
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
            // const repeatedRule = repeatedRuleFromRule(leftRecursiveRule, ruleMap, RepeatedRule),
            //       repeatedDefinition = definitionUnary ?
            //                              RepeatedDefinition.fromImplicitlyLeftRecursiveDefinition(this.implicitlyLeftRecursiveDefinition) :
            //                                RepeatedDefinition.fromDefinition(definition);
            //
            // repeatedRule.addDefinition(repeatedDefinition);
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
                                // const definitionComplex = isDefinitionComplex(definition);
                                //
                                // if (definitionComplex) {
                                //   const definitionString = definition.asString();
                                //
                                //   throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
                                // }
                                var parts = [], type = _types.INDIRECTLY_LEFT_RECURSIVE_TYPE, recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
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
}(_left.default);
exports.default = IndirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5pbXBvcnQgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2ltcGxpY2l0bHlcIjtcblxuaW1wb3J0IHsgSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgdW5hcnkgPSB0aGlzLmlzVW5hcnkoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5nZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25VbmFyeSA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5pc1VuYXJ5KCksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUgPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgaWYgKHVuYXJ5ICYmIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJvdGggdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2luZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBydWxlIGFuZCB0aGUgY29ycmVzcG9uZGluZyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBydWxlIGFyZSB1bmFyeSBhbmQgdGhlcmVmb3JlIHRoZSBmb3JtZXIgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWVdLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IHJ1bGVNYXBbaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlTmFtZV0sXG4gICAgICAgICAgcmVkdWNlZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgcmV3cml0dGVuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSwgcnVsZU1hcCwgUmV3cml0dGVuUnVsZSksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIHJlZHVjZWRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUucmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJld3JpdHRlbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZS5yZXBsYWNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcblxuICAgIC8vIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgIC8vICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAvLyAgICAgICBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgLy8gICAgICAgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbiksXG4gICAgLy8gICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgIC8vICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgLy8gICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgIC8vICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlID0gcnVsZU1hcFtsZWZ0UmVjdXJzaXZlUnVsZU5hbWVdO1xuICAgIC8vXG4gICAgLy8gY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4gICAgLy8gICAgICAgcmVkdWNlZFJ1bGVFbXB0eSA9IHJlZHVjZWRSdWxlLmlzRW1wdHkoKTtcbiAgICAvL1xuICAgIC8vIGlmIChyZWR1Y2VkUnVsZUVtcHR5KSB7XG4gICAgLy8gICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpLFxuICAgIC8vICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5nZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAvLyAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5hc1N0cmluZygpO1xuICAgIC8vXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmd9JyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGNvbnN0IHJlcGVhdGVkUnVsZSA9IHJlcGVhdGVkUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZXBlYXRlZFJ1bGUpLFxuICAgIC8vICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IGRlZmluaXRpb25VbmFyeSA/XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBlYXRlZERlZmluaXRpb24uZnJvbUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgLy9cbiAgICAvLyByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuICAgIC8vXG4gICAgLy8gY29uc3QgcmV3cml0dGVuUnVsZSA9IHJld3JpdHRlblJ1bGVGcm9tUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSwgcnVsZU1hcCwgUmV3cml0dGVuUnVsZSksXG4gICAgLy8gICAgICAgcmVwbGFjZWREZWZpbml0aW9uID0gdGhpcywgLy8vXG4gICAgLy8gICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IGRlZmluaXRpb25VbmFyeSA/XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgLy8gICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgIC8vL1xuICAgIC8vXG4gICAgLy8gcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlZERlZmluaXRpb24sIHJlcGxhY2VtZW50RGVmaW5pdGlvbik7XG4gICAgLy9cbiAgICAvLyBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgLy8gICBjb25zdCB1bmFyeUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IFVuYXJ5RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbih0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgLy8gICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgIC8vICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdW5hcnlJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuICAgIC8vXG4gICAgLy8gICByZXdyaXR0ZW5SdWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcbiAgICAvLyB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgICAgIGlmIChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgIC8vICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBbXSxcbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJ0eXBlIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJld3JpdGUiLCJydWxlTWFwIiwidW5hcnkiLCJpc1VuYXJ5IiwiZ2V0UnVsZU5hbWUiLCJnZXREZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJyZWR1Y2VkSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsIlJlZHVjZWRSdWxlIiwicmV3cml0dGVuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiUmV3cml0dGVuUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJld3JpdHRlbkRlZmluaXRpb24iLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZW1vdmVEZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsInNvbWUiLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVXLElBQUEs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