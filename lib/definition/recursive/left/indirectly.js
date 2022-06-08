"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reduced = _interopRequireDefault(require("../../../rule/reduced"));
var _rewritten = _interopRequireDefault(require("../../../rule/rewritten"));
var _reduced1 = _interopRequireDefault(require("../../../definition/reduced"));
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
                var rule = ruleMap[ruleName], rewrittenRule = (0, _rule).rewrittenRuleFromRule(rule, ruleMap, _rewritten.default), rewrittenDefinition = _rewritten1.default.fromDefinitionRuleNameAndImplicitlyLeftRecursiveDefinition(definition, ruleName, implicitlyLeftRecursiveDefinition);
                rewrittenRule.replaceDefinition(definition, rewrittenDefinition);
                var implicitRule = ruleMap[implicitRuleName], implicitRewrittenRule = (0, _rule).rewrittenRuleFromRule(implicitRule, ruleMap, _rewritten.default), implicitReducedDefinition = _reduced1.default.fromRuleName(implicitRuleName); ///
                implicitRewrittenRule.addDefinition(implicitReducedDefinition);
                var reducedRule = (0, _rule).reducedRuleFromRule(rule, ruleMap, _reduced.default), indirectReducedDefinition = _reduced1.default.fromDefinition(definition); ///
                reducedRule.addDefinition(indirectReducedDefinition);
                (0, _rule).reducedRuleFromRule(implicitRule, ruleMap, _reduced.default);
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
                                var type = _types.INDIRECTLY_LEFT_RECURSIVE_TYPE, parts = definition.getParts(), recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZWR1Y2VkRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvbi9yZWR1Y2VkXCI7XG5pbXBvcnQgUmV3cml0dGVuRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvbi9yZXdyaXR0ZW5cIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdFwiO1xuaW1wb3J0IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdC9pbXBsaWNpdGx5XCI7XG5cbmltcG9ydCB7IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmV3cml0dGVuUnVsZUZyb21SdWxlIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHN1cGVyKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHJld3JpdGUocnVsZU1hcCkge1xuICAgIGNvbnN0IHVuYXJ5ID0gdGhpcy5pc1VuYXJ5KCksXG4gICAgICAgICAgY29tcGxleCA9IHRoaXMuaXNDb21wbGV4KCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25VbmFyeSA9IHVuYXJ5LCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbkNvbXBsZXggPSBjb21wbGV4LCAgLy8vXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5nZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICBpbXBsaWNpdERlZmluaXRpb24gPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgIGltcGxpY2l0RGVmaW5pdGlvblVuYXJ5ID0gaW1wbGljaXREZWZpbml0aW9uLmlzVW5hcnkoKSxcbiAgICAgICAgICBpbXBsaWNpdERlZmluaXRpb25SdWxlTmFtZSA9IGltcGxpY2l0RGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGltcGxpY2l0UnVsZU5hbWUgPSBpbXBsaWNpdERlZmluaXRpb25SdWxlTmFtZTsgIC8vL1xuXG4gICAgaWYgKGRlZmluaXRpb25VbmFyeSAmJiBpbXBsaWNpdERlZmluaXRpb25VbmFyeSkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBCb3RoIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYW5kIHRoZSBjb3JyZXNwb25kaW5nIGltcGxpY2l0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7aW1wbGljaXRSdWxlTmFtZX0nIHJ1bGUgYXJlIHVuYXJ5IGFuZCB0aGVyZWZvcmUgdGhlIGZvcm1lciBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVNYXAsIFJld3JpdHRlblJ1bGUpLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uUnVsZU5hbWVBbmRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oZGVmaW5pdGlvbiwgcnVsZU5hbWUsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICByZXdyaXR0ZW5SdWxlLnJlcGxhY2VEZWZpbml0aW9uKGRlZmluaXRpb24sIHJld3JpdHRlbkRlZmluaXRpb24pO1xuXG4gICAgY29uc3QgaW1wbGljaXRSdWxlID0gcnVsZU1hcFtpbXBsaWNpdFJ1bGVOYW1lXSxcbiAgICAgICAgICBpbXBsaWNpdFJld3JpdHRlblJ1bGUgPSByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUoaW1wbGljaXRSdWxlLCBydWxlTWFwLCBSZXdyaXR0ZW5SdWxlKSwgIC8vL1xuICAgICAgICAgIGltcGxpY2l0UmVkdWNlZERlZmluaXRpb24gPSBSZWR1Y2VkRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUoaW1wbGljaXRSdWxlTmFtZSk7IC8vL1xuXG4gICAgaW1wbGljaXRSZXdyaXR0ZW5SdWxlLmFkZERlZmluaXRpb24oaW1wbGljaXRSZWR1Y2VkRGVmaW5pdGlvbik7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZU1hcCwgUmVkdWNlZFJ1bGUpLFxuICAgICAgICAgIGluZGlyZWN0UmVkdWNlZERlZmluaXRpb24gPSBSZWR1Y2VkRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTsgIC8vL1xuXG4gICAgcmVkdWNlZFJ1bGUuYWRkRGVmaW5pdGlvbihpbmRpcmVjdFJlZHVjZWREZWZpbml0aW9uKTtcblxuICAgIHJlZHVjZWRSdWxlRnJvbVJ1bGUoaW1wbGljaXRSdWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgICAgIGlmIChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICAgICAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsInR5cGUiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmV3cml0ZSIsInJ1bGVNYXAiLCJ1bmFyeSIsImlzVW5hcnkiLCJjb21wbGV4IiwiaXNDb21wbGV4IiwiZ2V0UnVsZU5hbWUiLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpbXBsaWNpdERlZmluaXRpb24iLCJpbXBsaWNpdERlZmluaXRpb25VbmFyeSIsImltcGxpY2l0RGVmaW5pdGlvblJ1bGVOYW1lIiwiaW1wbGljaXRSdWxlTmFtZSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwicnVsZSIsInJld3JpdHRlblJ1bGUiLCJyZXdyaXR0ZW5SdWxlRnJvbVJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvblJ1bGVOYW1lQW5kSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJpbXBsaWNpdFJ1bGUiLCJpbXBsaWNpdFJld3JpdHRlblJ1bGUiLCJpbXBsaWNpdFJlZHVjZWREZWZpbml0aW9uIiwiUmVkdWNlZERlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJhZGREZWZpbml0aW9uIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlIiwiUmVkdWNlZFJ1bGUiLCJpbmRpcmVjdFJlZHVjZWREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsInNvbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwiZ2V0UGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIkxlZnRSZWN1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