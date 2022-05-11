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
var _unary = _interopRequireDefault(require("../unary"));
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
                var ruleName = this.getRuleName(), rule = ruleMap[ruleName], definition = this.getDefinition(), definitionUnary = (0, _definition).isDefinitionUnary(definition), leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), leftRecursiveRuleName = firstLeftRecursiveRuleName, leftRecursiveRule = ruleMap[leftRecursiveRuleName];
                var reducedRule = (0, _rule).reducedRuleFromRule(leftRecursiveRule, ruleMap, _reduced.default), reducedRuleEmpty = reducedRule.isEmpty();
                if (reducedRuleEmpty) {
                    var definitionString = definition.asString(), implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(), implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
                    throw new Error("The '".concat(implicitlyLeftRecursiveDefinitionString, "' implicitly left recursive definition of the '").concat(leftRecursiveRuleName, "' rule has no sibling non-left recursive definitions and therefore the '").concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule cannot be rewritten."));
                }
                var repeatedRule = (0, _rule).repeatedRuleFromRule(leftRecursiveRule, ruleMap, _repeated.default), repeatedDefinition = definitionUnary ? _repeated1.default.fromImplicitlyLeftRecursiveDefinition(this.implicitlyLeftRecursiveDefinition) : _repeated1.default.fromDefinition(definition);
                repeatedRule.addDefinition(repeatedDefinition);
                var rewrittenRule = (0, _rule).rewrittenRuleFromRule(leftRecursiveRule, ruleMap, _rewritten.default), replacedDefinition = this, rewrittenDefinition = definitionUnary ? _rewritten1.default.fromDefinitionLeftRecursiveRuleNameAndImplicitlyLeftRecursiveDefinition(definition, leftRecursiveRuleName, this.implicitlyLeftRecursiveDefinition) : _rewritten1.default.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName), replacementDefinition = rewrittenDefinition; ///
                rule.replaceDefinition(replacedDefinition, replacementDefinition);
                if (definitionUnary) {
                    var unaryImplicitlyLeftRecursiveDefinition = _unary.default.fromDefinition(this.implicitlyLeftRecursiveDefinition), replacedDefinition1 = this.implicitlyLeftRecursiveDefinition, replacementDefinition1 = unaryImplicitlyLeftRecursiveDefinition; ///
                    rewrittenRule.replaceDefinition(replacedDefinition1, replacementDefinition1);
                }
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
                                var definitionComplex = (0, _definition).isDefinitionComplex(definition);
                                if (definitionComplex) {
                                    var definitionString = definition.asString();
                                    throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                                }
                                var definitionUnary = (0, _definition).isDefinitionUnary(definition), indirectlyLeftRecursiveDefinitionUnary = definitionUnary, implicitlyLeftRecursiveDefinitionUnary = (0, _definition).isDefinitionUnary(implicitlyLeftRecursiveDefinition);
                                if (indirectlyLeftRecursiveDefinitionUnary && implicitlyLeftRecursiveDefinitionUnary) {
                                    var definitionString1 = definition.asString(), indirectlyLeftRecursiveDefinitionString = definitionString1, implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
                                    throw new Error("Both the '".concat(indirectlyLeftRecursiveDefinitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule and the corresponding '").concat(implicitlyLeftRecursiveDefinitionString, "' implicitly left recursive definition of the '").concat(leftRecursiveRuleName, "' rule are unary and therefore neither can be rewritten."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW5kaXJlY3RseS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJlcGVhdGVkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXBlYXRlZFwiO1xuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgUmVwZWF0ZWREZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmV3cml0dGVuRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZXdyaXR0ZW5cIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlXCI7XG5pbXBvcnQgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseVwiO1xuXG5pbXBvcnQgeyBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlRnJvbVJ1bGUsIHJlcGVhdGVkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LFxuICAgICAgICAgaXNEZWZpbml0aW9uQ29tcGxleCxcbiAgICAgICAgIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsXG4gICAgICAgICB1bmFyeURlZmluaXRpb25mcm9tRGVmaW5pdGlvbixcbiAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLFxuICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgVW5hcnlEZWZpbml0aW9uIGZyb20gXCIuLi91bmFyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW2xlZnRSZWN1cnNpdmVSdWxlTmFtZV07XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVNYXAsIFJlZHVjZWRSdWxlKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCksXG4gICAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSB0aGlzLmdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uU3RyaW5nID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZ30nIGltcGxpY2l0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7bGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lfScgcnVsZSBoYXMgbm8gc2libGluZyBub24tbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIHRoZXJlZm9yZSB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVwZWF0ZWRSdWxlID0gcmVwZWF0ZWRSdWxlRnJvbVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVNYXAsIFJlcGVhdGVkUnVsZSksXG4gICAgICAgICAgcmVwZWF0ZWREZWZpbml0aW9uID0gZGVmaW5pdGlvblVuYXJ5ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJlcGVhdGVkUnVsZS5hZGREZWZpbml0aW9uKHJlcGVhdGVkRGVmaW5pdGlvbik7XG5cbiAgICBjb25zdCByZXdyaXR0ZW5SdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZXdyaXR0ZW5SdWxlKSxcbiAgICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gZGVmaW5pdGlvblVuYXJ5ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uOyAgLy8vXG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgIGNvbnN0IHVuYXJ5SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gVW5hcnlEZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB1bmFyeUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuc29tZSgobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkgPSBkZWZpbml0aW9uVW5hcnksIC8vL1xuICAgICAgICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkgJiYgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCb3RoIHRoZSAnJHtpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgJyR7aW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uU3RyaW5nfScgaW1wbGljaXRseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBydWxlIGFyZSB1bmFyeSBhbmQgdGhlcmVmb3JlIG5laXRoZXIgY2FuIGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgICAgICAgIHBhcnRzID0gW10sXG4gICAgICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFVOQVNTSUdORURfRU5UUlkgPSBcIl4uKiRcIjtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidHlwZSIsInBhcnRzIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJld3JpdGUiLCJydWxlTWFwIiwiZ2V0UnVsZU5hbWUiLCJydWxlIiwiZ2V0RGVmaW5pdGlvbiIsImRlZmluaXRpb25VbmFyeSIsImlzRGVmaW5pdGlvblVuYXJ5IiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGUiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRnJvbVJ1bGUiLCJSZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRW1wdHkiLCJpc0VtcHR5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uU3RyaW5nIiwiRXJyb3IiLCJyZXBlYXRlZFJ1bGUiLCJyZXBlYXRlZFJ1bGVGcm9tUnVsZSIsIlJlcGVhdGVkUnVsZSIsInJlcGVhdGVkRGVmaW5pdGlvbiIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsImFkZERlZmluaXRpb24iLCJyZXdyaXR0ZW5SdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiUmV3cml0dGVuUnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsInJld3JpdHRlbkRlZmluaXRpb24iLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwidW5hcnlJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJVbmFyeURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsInNvbWUiLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25VbmFyeSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWxCLElBQUEsUUFBb0Isa0NBQXBCLG9CQUFvQixFQUFBO0FBQ25CLElBQUEsU0FBcUIsa0NBQXJCLHFCQUFxQixFQUFBO0FBQ3BCLElBQUEsVUFBc0Isa0NBQXRCLHNCQUFzQixFQUFBO0FBQ2pCLElBQUEsVUFBMkIsa0NBQTNCLDJCQUEyQixFQUFBO0FBQzFCLElBQUEsV0FBNEIsa0NBQTVCLDRCQUE0QixFQUFBO0FBQ3hCLElBQUEsY0FBZ0Msa0NBQWhDLGdDQUFnQyxFQUFBO0FBQ3RCLElBQUEsV0FBMkMsa0NBQTNDLDJDQUEyQyxFQUFBO0FBRTFDLElBQUEsTUFBYSxXQUFiLGFBQWEsQ0FBQTtBQUNxQixJQUFBLEtBQXNCLFdBQXRCLHNCQUFzQixDQUFBO0FBTWxELElBQUEsV0FBNEIsV0FBNUIsNEJBQTRCLENBQUE7QUFDckQsSUFBQSxNQUFVLGtDQUFWLFVBQVUsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNLEFBQUVBLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEFBQUM7QUFFbEIsSUFBQSxBQUFNRSxpQ0FBaUMsaUJDeEJuRCxBRHdCWTs7O2FBQU1BLGlDQUFpQyxDQUN4Q0MsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLEVBQUVDLGlDQUFpQzs7O2tDQUNwSE4sSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLENFMUJ2RixDRjBCeUY7UUFFckYsTUFBS0MsaUNBQWlDLEdBQUdBLGlDQUFpQyxDQUFDOzs7OztZQUc3RUMsR0FBb0MsRUFBcENBLHNDQUFvQzttQkFBcENBLFNBQUFBLG9DQUFvQyxHQUFHO2dCQUNyQyxPQUFPLElBQUksQ0FBQ0QsaUNBQWlDLENBQUM7YUFDL0M7OztZQUVERSxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsT0FBTyxFQUFFO2dCQUNmLElBQU1QLFFBQVEsR0FBRyxJQUFJLENBQUNRLFdBQVcsRUFBRSxFQUM3QkMsSUFBSSxHQUFHRixPQUFPLENBQUNQLFFBQVEsQ0FBQyxFQUN4QkMsVUFBVSxHQUFHLElBQUksQ0FBQ1MsYUFBYSxFQUFFLEVBQ2pDQyxlQUFlLEdBQUdDLENBQUFBLEdBQUFBLFdBQWlCLEFBQVksQ0FBQSxrQkFBWixDQUFDWCxVQUFVLENBQUMsRUFDL0NFLHNCQUFzQixHQUFHLElBQUksQ0FBQ1UseUJBQXlCLEVBQUUsRUFDekRDLDBCQUEwQixHQUFHbkIsS0FBSyxDQUFDUSxzQkFBc0IsQ0FBQyxFQUMxRFkscUJBQXFCLEdBQUdELDBCQUEwQixFQUNsREUsaUJBQWlCLEdBQUdULE9BQU8sQ0FBQ1EscUJBQXFCLENBQUMsQUFBQztnQkFFekQsSUFBTUUsV0FBVyxHQUFHQyxDQUFBQSxHQUFBQSxLQUFtQixBQUF5QyxDQUFBLG9CQUF6QyxDQUFDRixpQkFBaUIsRUFBRVQsT0FBTyxFQUFFWSxRQUFXLFFBQUEsQ0FBQyxFQUMxRUMsZ0JBQWdCLEdBQUdILFdBQVcsQ0FBQ0ksT0FBTyxFQUFFLEFBQUM7Z0JBRS9DLElBQUlELGdCQUFnQixFQUFFO29CQUNwQixJQUFNRSxnQkFBZ0IsR0FBR3JCLFVBQVUsQ0FBQ3NCLFFBQVEsRUFBRSxFQUN4Q25CLGlDQUFpQyxHQUFHLElBQUksQ0FBQ0Msb0NBQW9DLEVBQUUsRUFDL0VtQix1Q0FBdUMsR0FBR3BCLGlDQUFpQyxDQUFDbUIsUUFBUSxFQUFFLEFBQUM7b0JBRTdGLE1BQU0sSUFBSUUsS0FBSyxDQUFDLEFBQUMsT0FBSyxDQUEyRlYsTUFBcUIsQ0FBOUdTLHVDQUF1QyxFQUFDLGlEQUErQyxDQUF3QixDQUEwRUYsTUFBZ0IsQ0FBaEhQLHFCQUFxQixFQUFDLDBFQUF3RSxDQUFtQixDQUFpRGYsTUFBUSxDQUExRXNCLGdCQUFnQixFQUFDLGlEQUErQyxDQUFXLENBQUEsTUFBMkIsQ0FBcEN0QixRQUFRLEVBQUMsNkJBQTJCLENBQUMsQ0FBQyxDQUFDO2lCQUMzVDtnQkFFRCxJQUFNMEIsWUFBWSxHQUFHQyxDQUFBQSxHQUFBQSxLQUFvQixBQUEwQyxDQUFBLHFCQUExQyxDQUFDWCxpQkFBaUIsRUFBRVQsT0FBTyxFQUFFcUIsU0FBWSxRQUFBLENBQUMsRUFDN0VDLGtCQUFrQixHQUFHbEIsZUFBZSxHQUNibUIsVUFBa0IsUUFBQSxDQUFDQyxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMzQixpQ0FBaUMsQ0FBQyxHQUM5RjBCLFVBQWtCLFFBQUEsQ0FBQ0UsY0FBYyxDQUFDL0IsVUFBVSxDQUFDLEFBQUM7Z0JBRTdFeUIsWUFBWSxDQUFDTyxhQUFhLENBQUNKLGtCQUFrQixDQUFDLENBQUM7Z0JBRS9DLElBQU1LLGFBQWEsR0FBR0MsQ0FBQUEsR0FBQUEsS0FBcUIsQUFBMkMsQ0FBQSxzQkFBM0MsQ0FBQ25CLGlCQUFpQixFQUFFVCxPQUFPLEVBQUU2QixVQUFhLFFBQUEsQ0FBQyxFQUNoRkMsa0JBQWtCLEdBQUcsSUFBSSxFQUN6QkMsbUJBQW1CLEdBQUczQixlQUFlLEdBQ2I0QixXQUFtQixRQUFBLENBQUNDLHVFQUF1RSxDQUFDdkMsVUFBVSxFQUFFYyxxQkFBcUIsRUFBRSxJQUFJLENBQUNYLGlDQUFpQyxDQUFDLEdBQ3BLbUMsV0FBbUIsUUFBQSxDQUFDRSxzQ0FBc0MsQ0FBQ3hDLFVBQVUsRUFBRWMscUJBQXFCLENBQUMsRUFDdkgyQixxQkFBcUIsR0FBR0osbUJBQW1CLEFBQUMsRUFBRSxHQUFHO2dCQUV2RDdCLElBQUksQ0FBQ2tDLGlCQUFpQixDQUFDTixrQkFBa0IsRUFBRUsscUJBQXFCLENBQUMsQ0FBQztnQkFFbEUsSUFBSS9CLGVBQWUsRUFBRTtvQkFDbkIsSUFBTWlDLHNDQUFzQyxHQUFHQyxNQUFlLFFBQUEsQ0FBQ2IsY0FBYyxDQUFDLElBQUksQ0FBQzVCLGlDQUFpQyxDQUFDLEVBQy9HaUMsbUJBQWtCLEdBQUcsSUFBSSxDQUFDakMsaUNBQWlDLEVBQzNEc0Msc0JBQXFCLEdBQUdFLHNDQUFzQyxBQUFDLEVBQUMsR0FBRztvQkFFekVWLGFBQWEsQ0FBQ1MsaUJBQWlCLENBQUNOLG1CQUFrQixFQUFFSyxzQkFBcUIsQ0FBQyxDQUFDO2lCQUM1RTthQUNGOzs7O1lBRU1JLEdBQTZDLEVBQTdDQSwrQ0FBNkM7bUJBQXBELFNBQU9BLDZDQUE2QyxDQUFDOUMsUUFBUSxFQUFFQyxVQUFVLEVBQUU4QyxvQkFBb0IsRUFBRTtnQkFDL0YsSUFBSUMsaUNBQWlDLEdBQUcsSUFBSSxBQUFDO2dCQUU3QyxJQUFNQyx1QkFBdUIsR0FBR0MsQ0FBQUEsR0FBQUEsV0FBeUIsQUFBWSxDQUFBLDBCQUFaLENBQUNqRCxVQUFVLENBQUMsQUFBQztnQkFFdEUsSUFBSWdELHVCQUF1QixFQUFFO29CQUMzQixJQUFNOUMsc0JBQXNCLEdBQUdnRCxDQUFBQSxHQUFBQSxXQUFvQyxBQUFZLENBQUEscUNBQVosQ0FBQ2xELFVBQVUsQ0FBQyxBQUFDO29CQUVoRkUsc0JBQXNCLENBQUNpRCxJQUFJLENBQUMsU0FBQ3JDLHFCQUFxQixFQUFLO3dCQUNyRCxJQUFNc0MsNkJBQTZCLEdBQUlyRCxRQUFRLEtBQUtlLHFCQUFxQixBQUFDLEFBQUM7d0JBRTNFLElBQUksQ0FBQ3NDLDZCQUE2QixFQUFFOzRCQUNsQyxJQUFNakQsaUNBQWlDLEdBQUdrRCxXQUFpQyxRQUFBLENBQUNDLHdEQUF3RCxDQUFDdkQsUUFBUSxFQUFFZSxxQkFBcUIsRUFBRWdDLG9CQUFvQixDQUFDLEFBQUM7NEJBRTVMLElBQUkzQyxpQ0FBaUMsS0FBSyxJQUFJLEVBQUU7Z0NBQzlDLElBQU1vRCxpQkFBaUIsR0FBR0MsQ0FBQUEsR0FBQUEsV0FBbUIsQUFBWSxDQUFBLG9CQUFaLENBQUN4RCxVQUFVLENBQUMsQUFBQztnQ0FFMUQsSUFBSXVELGlCQUFpQixFQUFFO29DQUNyQixJQUFNbEMsZ0JBQWdCLEdBQUdyQixVQUFVLENBQUNzQixRQUFRLEVBQUUsQUFBQztvQ0FFL0MsTUFBTSxJQUFJRSxLQUFLLENBQUMsQUFBQyxPQUFLLENBQW9FekIsTUFBUSxDQUExRXNCLGdCQUFnQixFQUFDLGlEQUErQyxDQUFXLENBQUEsTUFBb0QsQ0FBN0R0QixRQUFRLEVBQUMsc0RBQW9ELENBQUMsQ0FBQyxDQUFDO2lDQUMzSjtnQ0FFRCxJQUFNVyxlQUFlLEdBQUdDLENBQUFBLEdBQUFBLFdBQWlCLEFBQVksQ0FBQSxrQkFBWixDQUFDWCxVQUFVLENBQUMsRUFDL0N5RCxzQ0FBc0MsR0FBRy9DLGVBQWUsRUFDeERnRCxzQ0FBc0MsR0FBRy9DLENBQUFBLEdBQUFBLFdBQWlCLEFBQW1DLENBQUEsa0JBQW5DLENBQUNSLGlDQUFpQyxDQUFDLEFBQUM7Z0NBRXBHLElBQUlzRCxzQ0FBc0MsSUFBSUMsc0NBQXNDLEVBQUU7b0NBQ2xGLElBQU1yQyxpQkFBZ0IsR0FBR3JCLFVBQVUsQ0FBQ3NCLFFBQVEsRUFBRSxFQUN4Q3FDLHVDQUF1QyxHQUFHdEMsaUJBQWdCLEVBQzFERSx1Q0FBdUMsR0FBR3BCLGlDQUFpQyxDQUFDbUIsUUFBUSxFQUFFLEFBQUM7b0NBRTdGLE1BQU0sSUFBSUUsS0FBSyxDQUFDLEFBQUMsWUFBVSxDQUEyRnpCLE1BQVEsQ0FBakc0RCx1Q0FBdUMsRUFBQyxpREFBK0MsQ0FBVyxDQUFnQ3BDLE1BQXVDLENBQWhGeEIsUUFBUSxFQUFDLGdDQUE4QixDQUEwQyxDQUFpRGUsTUFBcUIsQ0FBOUdTLHVDQUF1QyxFQUFDLGlEQUErQyxDQUF3QixDQUFBLE1BQXdELENBQTlFVCxxQkFBcUIsRUFBQywwREFBd0QsQ0FBQyxDQUFDLENBQUM7aUNBQzVVO2dDQUVELElBQU1qQixJQUFJLEdBQUcrRCxNQUE4QiwrQkFBQSxFQUNyQzlELEtBQUssR0FBRyxFQUFFLEVBQ1ZHLGtCQUFrQixHQUFHNEQsQ0FBQUEsR0FBQUEsV0FBZ0MsQUFBWSxDQUFBLGlDQUFaLENBQUM3RCxVQUFVLENBQUMsQUFBQztnQ0FFeEUrQyxpQ0FBaUMsR0FBRyxJQUFJbkQsaUNBQWlDLENBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyxpQ0FBaUMsQ0FBQyxDQUFDO2dDQUU1TCxPQUFPLElBQUksQ0FBQzs2QkFDYjt5QkFDRjtxQkFDRixDQUFDLENBQUM7aUJBQ0o7Z0JBRUQsT0FBTzRDLGlDQUFpQyxDQUFDO2FBQzFDOzs7O0NBQ0YsQ0ExRzhEZSxjQUF1QixRQUFBLENBMEdyRjtrQkExR29CbEUsaUNBQWlDIn0=