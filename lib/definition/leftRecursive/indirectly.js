"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reduced = _interopRequireDefault(require("../../rule/reduced"));
var _rewritten = _interopRequireDefault(require("../../rule/rewritten"));
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
                var ruleName = this.getRuleName(), definition = this.getDefinition(), implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(), implicitlyLeftRecursiveDefinitionRuleName = implicitlyLeftRecursiveDefinition.getRuleName(), implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveDefinitionRuleName, indirectlyLeftRecursiveRuleName = ruleName, implicitlyLeftRecursiveRule = ruleMap[implicitlyLeftRecursiveRuleName], indirectlyLeftRecursiveRule = ruleMap[indirectlyLeftRecursiveRuleName], reducedImplicitlyLeftRecursiveRule = (0, _rule).reducedRuleFromRule(implicitlyLeftRecursiveRule, ruleMap, _reduced.default), rewrittenIndirectlyLeftRecursiveRule = (0, _rule).rewrittenRuleFromRule(indirectlyLeftRecursiveRule, ruleMap, _rewritten.default), leftRecursiveRuleName = implicitlyLeftRecursiveRuleName, rewrittenDefinition = _rewritten1.default.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName);
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
                                //
                                // const definitionUnary = isDefinitionUnary(definition),
                                //       indirectlyLeftRecursiveDefinitionUnary = definitionUnary, ///
                                //       implicitlyLeftRecursiveDefinitionUnary = isDefinitionUnary(implicitlyLeftRecursiveDefinition);
                                //
                                // if (indirectlyLeftRecursiveDefinitionUnary && implicitlyLeftRecursiveDefinitionUnary) {
                                //     const definitionString = definition.asString(),
                                //           indirectlyLeftRecursiveDefinitionString = definitionString, ///
                                //           implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
                                //
                                //     throw new Error(`Both the '${indirectlyLeftRecursiveDefinitionString}' indirectly left recursive definition of the '${ruleName}' rule and the corresponding '${implicitlyLeftRecursiveDefinitionString}' implicitly left recursive definition of the '${leftRecursiveRuleName}' rule are unary and therefore neither can be rewritten.`);
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
}(_leftRecursive.default);
exports.default = IndirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW5kaXJlY3RseS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlZHVjZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlZHVjZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5SdWxlIGZyb20gXCIuLi8uLi9ydWxlL3Jld3JpdHRlblwiO1xuaW1wb3J0IFJld3JpdHRlbkRlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmV3cml0dGVuXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZVwiO1xuaW1wb3J0IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlL2ltcGxpY2l0bHlcIjtcblxuaW1wb3J0IHsgSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHN1cGVyKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHJld3JpdGUocnVsZU1hcCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSB0aGlzLmdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWVdLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IHJ1bGVNYXBbaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlTmFtZV0sXG4gICAgICAgICAgcmVkdWNlZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgcmV3cml0dGVuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSwgcnVsZU1hcCwgUmV3cml0dGVuUnVsZSksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIHJlZHVjZWRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUucmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJld3JpdHRlbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZS5yZXBsYWNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcblxuICAgIC8vIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgIC8vICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAvLyAgICAgICBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgLy8gICAgICAgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbiksXG4gICAgLy8gICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgIC8vICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgLy8gICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgIC8vICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlID0gcnVsZU1hcFtsZWZ0UmVjdXJzaXZlUnVsZU5hbWVdO1xuICAgIC8vXG4gICAgLy8gY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4gICAgLy8gICAgICAgcmVkdWNlZFJ1bGVFbXB0eSA9IHJlZHVjZWRSdWxlLmlzRW1wdHkoKTtcbiAgICAvL1xuICAgIC8vIGlmIChyZWR1Y2VkUnVsZUVtcHR5KSB7XG4gICAgLy8gICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpLFxuICAgIC8vICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5nZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAvLyAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5hc1N0cmluZygpO1xuICAgIC8vXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmd9JyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGNvbnN0IHJlcGVhdGVkUnVsZSA9IHJlcGVhdGVkUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZXBlYXRlZFJ1bGUpLFxuICAgIC8vICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IGRlZmluaXRpb25VbmFyeSA/XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBlYXRlZERlZmluaXRpb24uZnJvbUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgOlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgLy9cbiAgICAvLyByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuICAgIC8vXG4gICAgLy8gY29uc3QgcmV3cml0dGVuUnVsZSA9IHJld3JpdHRlblJ1bGVGcm9tUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSwgcnVsZU1hcCwgUmV3cml0dGVuUnVsZSksXG4gICAgLy8gICAgICAgcmVwbGFjZWREZWZpbml0aW9uID0gdGhpcywgLy8vXG4gICAgLy8gICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IGRlZmluaXRpb25VbmFyeSA/XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA6XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgLy8gICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgIC8vL1xuICAgIC8vXG4gICAgLy8gcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlZERlZmluaXRpb24sIHJlcGxhY2VtZW50RGVmaW5pdGlvbik7XG4gICAgLy9cbiAgICAvLyBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgLy8gICBjb25zdCB1bmFyeUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IFVuYXJ5RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbih0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgLy8gICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgIC8vICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdW5hcnlJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuICAgIC8vXG4gICAgLy8gICByZXdyaXR0ZW5SdWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcbiAgICAvLyB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgICAgIGlmIChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgIC8vICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIC8vICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblVuYXJ5ID0gZGVmaW5pdGlvblVuYXJ5LCAvLy9cbiAgICAgICAgICAgIC8vICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpZiAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkgJiYgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpLFxuICAgICAgICAgICAgLy8gICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgLy8gICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5hc1N0cmluZygpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoYEJvdGggdGhlICcke2luZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGFuZCB0aGUgY29ycmVzcG9uZGluZyAnJHtpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmd9JyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIHJ1bGUgYXJlIHVuYXJ5IGFuZCB0aGVyZWZvcmUgbmVpdGhlciBjYW4gYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgICAgICAgdHlwZSA9IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsInR5cGUiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmV3cml0ZSIsInJ1bGVNYXAiLCJnZXRSdWxlTmFtZSIsImdldERlZmluaXRpb24iLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwicmVkdWNlZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsInJlZHVjZWRSdWxlRnJvbVJ1bGUiLCJSZWR1Y2VkUnVsZSIsInJld3JpdHRlbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsInJld3JpdHRlblJ1bGVGcm9tUnVsZSIsIlJld3JpdHRlblJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVtb3ZlRGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJzb21lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFVyxJQUFBLFFBQW9CLGtDQUFwQixvQkFBb0IsRUFBQTtBQUNsQixJQUFBLFVBQXNCLGtDQUF0QixzQkFBc0IsRUFBQTtBQUNoQixJQUFBLFdBQTRCLGtDQUE1Qiw0QkFBNEIsRUFBQTtBQUN4QixJQUFBLGNBQWdDLGtDQUFoQyxnQ0FBZ0MsRUFBQTtBQUN0QixJQUFBLFdBQTJDLGtDQUEzQywyQ0FBMkMsRUFBQTtBQUUxQyxJQUFBLE1BQWEsV0FBYixhQUFhLENBQUE7QUFDRCxJQUFBLEtBQXNCLFdBQXRCLHNCQUFzQixDQUFBO0FBQ3lFLElBQUEsV0FBNEIsV0FBNUIsNEJBQTRCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkssSUFBQSxBQUFNQSxpQ0FBaUMsaUJDWm5ELEFEWVk7OzthQUFNQSxpQ0FBaUMsQ0FDeENDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyxpQ0FB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