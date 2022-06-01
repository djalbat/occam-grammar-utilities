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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5pbXBvcnQgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2ltcGxpY2l0bHlcIjtcblxuaW1wb3J0IHsgSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgdW5hcnkgPSB0aGlzLmlzVW5hcnkoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5nZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25VbmFyeSA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5pc1VuYXJ5KCksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUgPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgaWYgKHVuYXJ5ICYmIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJvdGggdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2luZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBydWxlIGFuZCB0aGUgY29ycmVzcG9uZGluZyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBydWxlIGFyZSB1bmFyeSBhbmQgdGhlcmVmb3JlIHRoZSBmb3JtZXIgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWVdLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IHJ1bGVNYXBbaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlTmFtZV0sXG4gICAgICAgICAgcmVkdWNlZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgcmV3cml0dGVuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSwgcnVsZU1hcCwgUmV3cml0dGVuUnVsZSksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIHJlZHVjZWRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUucmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJld3JpdHRlbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZS5yZXBsYWNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcblxuICAgIC8vIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgIC8vICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAvLyAgICAgICBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgLy8gICAgICAgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbiksXG4gICAgLy8gICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgIC8vICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgLy8gICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgIC8vICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlID0gcnVsZU1hcFtsZWZ0UmVjdXJzaXZlUnVsZU5hbWVdO1xuICAgIC8vXG4gICAgLy8gY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4gICAgLy8gICAgICAgcmVkdWNlZFJ1bGVFbXB0eSA9IHJlZHVjZWRSdWxlLmlzRW1wdHkoKTtcbiAgICAvL1xuICAgIC8vIGlmIChyZWR1Y2VkUnVsZUVtcHR5KSB7XG4gICAgLy8gICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpLFxuICAgIC8vICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5nZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAvLyAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5hc1N0cmluZygpO1xuICAgIC8vXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmd9JyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGNvbnN0IHJld3JpdHRlblJ1bGUgPSByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVNYXAsIFJld3JpdHRlblJ1bGUpLFxuICAgIC8vICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMsIC8vL1xuICAgIC8vICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBkZWZpbml0aW9uVW5hcnkgP1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgIC8vICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHJld3JpdHRlbkRlZmluaXRpb247ICAvLy9cbiAgICAvL1xuICAgIC8vIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICAgIC8vXG4gICAgLy8gaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgIC8vICAgY29uc3QgdW5hcnlJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBVbmFyeURlZmluaXRpb24uZnJvbURlZmluaXRpb24odGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgIC8vICAgICAgICAgcmVwbGFjZWREZWZpbml0aW9uID0gdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sICAvLy9cbiAgICAvLyAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHVuYXJ5SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAvLy9cbiAgICAvL1xuICAgIC8vICAgcmV3cml0dGVuUnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlZERlZmluaXRpb24sIHJlcGxhY2VtZW50RGVmaW5pdGlvbik7XG4gICAgLy8gfVxuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5zb21lKChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgICBpZiAoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICAvLyAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gW10sXG4gICAgICAgICAgICAgICAgICB0eXBlID0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwidHlwZSIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXdyaXRlIiwicnVsZU1hcCIsInVuYXJ5IiwiaXNVbmFyeSIsImdldFJ1bGVOYW1lIiwiZ2V0RGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblVuYXJ5IiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwicmVkdWNlZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsInJlZHVjZWRSdWxlRnJvbVJ1bGUiLCJSZWR1Y2VkUnVsZSIsInJld3JpdHRlbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsInJld3JpdHRlblJ1bGVGcm9tUnVsZSIsIlJld3JpdHRlblJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVtb3ZlRGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJzb21lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFVyxJQUFBLFFBQXVCLGtDQUF2Qix1QkFBdUIsRUFBQTtBQUNyQixJQUFBLFVBQXlCLGtDQUF6Qix5QkFBeUIsRUFBQTtBQUNuQixJQUFBLFdBQStCLGtDQUEvQiwrQkFBK0IsRUFBQTtBQUMzQixJQUFBLEtBQW9DLGtDQUFwQyxvQ0FBb0MsRUFBQTtBQUMxQixJQUFBLFdBQStDLGtDQUEvQywrQ0FBK0MsRUFBQTtBQUU5QyxJQUFBLE1BQWdCLFdBQWhCLGdCQUFnQixDQUFBO0FBQ0osSUFBQSxLQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUM4QixJQUFBLFdBQStCLFdBQS9CLCtCQUErQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxJLElBQUEsQUFBTUEsaUNBQWlDLGlCQUF2Qzs7O2FBQU1BLGlDQUFpQyxDQUN4Q0MsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLFFB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