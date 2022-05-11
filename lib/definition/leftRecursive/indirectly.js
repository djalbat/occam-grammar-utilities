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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW5kaXJlY3RseS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJlcGVhdGVkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXBlYXRlZFwiO1xuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgUmVwZWF0ZWREZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmV3cml0dGVuRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZXdyaXR0ZW5cIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlXCI7XG5pbXBvcnQgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseVwiO1xuXG5pbXBvcnQgeyBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlRnJvbVJ1bGUsIHJlcGVhdGVkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LFxuICAgICAgICAgaXNEZWZpbml0aW9uQ29tcGxleCxcbiAgICAgICAgIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsXG4gICAgICAgICB1bmFyeURlZmluaXRpb25mcm9tRGVmaW5pdGlvbixcbiAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLFxuICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgVW5hcnlEZWZpbml0aW9uIGZyb20gXCIuLi91bmFyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW2xlZnRSZWN1cnNpdmVSdWxlTmFtZV07XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVNYXAsIFJlZHVjZWRSdWxlKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCksXG4gICAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSB0aGlzLmdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uU3RyaW5nID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZ30nIGltcGxpY2l0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7bGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lfScgcnVsZSBoYXMgbm8gc2libGluZyBub24tbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIHRoZXJlZm9yZSB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVwZWF0ZWRSdWxlID0gcmVwZWF0ZWRSdWxlRnJvbVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVNYXAsIFJlcGVhdGVkUnVsZSksXG4gICAgICAgICAgcmVwZWF0ZWREZWZpbml0aW9uID0gZGVmaW5pdGlvblVuYXJ5ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJlcGVhdGVkUnVsZS5hZGREZWZpbml0aW9uKHJlcGVhdGVkRGVmaW5pdGlvbik7XG5cbiAgICBjb25zdCByZXdyaXR0ZW5SdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZXdyaXR0ZW5SdWxlKSxcbiAgICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gZGVmaW5pdGlvblVuYXJ5ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uOyAgLy8vXG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgIGNvbnN0IHVuYXJ5SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gVW5hcnlEZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB1bmFyeUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuc29tZSgobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkgPSBkZWZpbml0aW9uVW5hcnksIC8vL1xuICAgICAgICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkgJiYgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCb3RoIHRoZSAnJHtpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgJyR7aW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uU3RyaW5nfScgaW1wbGljaXRseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBydWxlIGFyZSB1bmFyeSBhbmQgdGhlcmVmb3JlIG5laXRoZXIgY2FuIGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgICAgICAgIHBhcnRzID0gW10sXG4gICAgICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZXBlYXRlZERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmVwZWF0ZWRSdWxlRnJvbVJ1bGUsIHJld3JpdHRlblJ1bGVGcm9tUnVsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZVwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXTtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVFbXB0eSA9IHJlZHVjZWRSdWxlLmlzRW1wdHkoKTtcblxuICAgIGlmIChyZWR1Y2VkUnVsZUVtcHR5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGhhcyBubyBzaWJsaW5nIG5vbi1sZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgY29uc3QgcmVwZWF0ZWRSdWxlID0gcmVwZWF0ZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZU1hcCwgUmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgY29uc3QgcmV3cml0dGVuUnVsZSA9IHJld3JpdHRlblJ1bGVGcm9tUnVsZShydWxlLCBydWxlTWFwLCBSZXdyaXR0ZW5SdWxlKSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcmV3cml0dGVuUnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlbWVudERlZmluaXRpb24sIHJld3JpdHRlbkRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuc29tZSgobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gW10sXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXdyaXRlIiwicnVsZU1hcCIsImdldFJ1bGVOYW1lIiwicnVsZSIsImdldERlZmluaXRpb24iLCJkZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25VbmFyeSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlIiwiUmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUVtcHR5IiwiaXNFbXB0eSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyIsIkVycm9yIiwicmVwZWF0ZWRSdWxlIiwicmVwZWF0ZWRSdWxlRnJvbVJ1bGUiLCJSZXBlYXRlZFJ1bGUiLCJyZXBlYXRlZERlZmluaXRpb24iLCJSZXBlYXRlZERlZmluaXRpb24iLCJmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwicmV3cml0dGVuUnVsZSIsInJld3JpdHRlblJ1bGVGcm9tUnVsZSIsIlJld3JpdHRlblJ1bGUiLCJyZXBsYWNlZERlZmluaXRpb24iLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJyZXBsYWNlRGVmaW5pdGlvbiIsInVuYXJ5SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiVW5hcnlEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJzb21lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblVuYXJ5IiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uVW5hcnkiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmciLCJJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWtCLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVsQixJQUFBLFFBQW9CLGtDQUFwQixvQkFBb0IsRUFBQTtBQUNuQixJQUFBLFNB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