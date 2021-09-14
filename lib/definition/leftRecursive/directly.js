"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reduced = _interopRequireDefault(require("../../rule/reduced"));
var _repeated = _interopRequireDefault(require("../../rule/repeated"));
var _rewritten = _interopRequireDefault(require("../../rule/rewritten"));
var _repeated1 = _interopRequireDefault(require("../../definition/repeated"));
var _rewritten1 = _interopRequireDefault(require("../../definition/rewritten"));
var _leftRecursive = _interopRequireDefault(require("../../definition/leftRecursive"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var DirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(DirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    function DirectlyLeftRecursiveDefinition() {
        _classCallCheck(this, DirectlyLeftRecursiveDefinition);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectlyLeftRecursiveDefinition).apply(this, arguments));
    }
    _createClass(DirectlyLeftRecursiveDefinition, [
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var definition = this.getDefinition(), ruleName = this.getRuleName(), rule = ruleMap[ruleName] || null;
                var reducedRule = (0, _rule).reducedRuleFromRule(rule, ruleMap, _reduced.default), reducedRuleEmpty = reducedRule.isEmpty();
                if (reducedRuleEmpty) {
                    var definitionString = definition.asString();
                    throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule has no sibling non-left recursive definitions and therefore cannot be rewritten."));
                }
                var leftRecursiveRuleName = ruleName; ///
                var repeatedRule = (0, _rule).repeatedRuleFromRule(rule, ruleMap, _repeated.default), repeatedDefinition = _repeated1.default.fromDefinition(definition);
                repeatedRule.addDefinition(repeatedDefinition);
                var rewrittenRule = (0, _rule).rewrittenRuleFromRule(rule, ruleMap, _rewritten.default), rewrittenDefinition = _rewritten1.default.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName), replacementDefinition = this; ///
                rewrittenRule.replaceDefinition(replacementDefinition, rewrittenDefinition);
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var directlyLeftRecursiveDefinition = null;
                var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;
                if (definitionLeftRecursive) {
                    leftRecursiveRuleNames.some(function(leftRecursiveRuleName) {
                        var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                        if (ruleNameLeftRecursiveRuleName) {
                            var definitionUnary = (0, _definition).isDefinitionUnary(definition);
                            if (definitionUnary) {
                                var definitionString = definition.asString();
                                throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
                            }
                            var definitionComplex = (0, _definition).isDefinitionComplex(definition);
                            if (definitionComplex) {
                                var definitionString = definition.asString();
                                throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                            }
                            var type = _types.DIRECTLY_LEFT_RECURSIVE_TYPE, parts = [], recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                            directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
                            return true;
                        }
                    });
                }
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_leftRecursive.default);
exports.default = DirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZXBlYXRlZERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmVwZWF0ZWRSdWxlRnJvbVJ1bGUsIHJld3JpdHRlblJ1bGVGcm9tUnVsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZVwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVNYXAsIFJlZHVjZWRSdWxlKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICBjb25zdCByZXBlYXRlZFJ1bGUgPSByZXBlYXRlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlTWFwLCBSZXBlYXRlZFJ1bGUpLFxuICAgICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJlcGVhdGVkUnVsZS5hZGREZWZpbml0aW9uKHJlcGVhdGVkRGVmaW5pdGlvbik7XG5cbiAgICBjb25zdCByZXdyaXR0ZW5SdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVNYXAsIFJld3JpdHRlblJ1bGUpLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdGhpczsgLy8vXG5cbiAgICByZXdyaXR0ZW5SdWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VtZW50RGVmaW5pdGlvbiwgcmV3cml0dGVuRGVmaW5pdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5zb21lKChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICAgICAgcGFydHMgPSBbXSxcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVZLEdBQW9CLENBQXBCLFFBQW9CO0FBQ25CLEdBQXFCLENBQXJCLFNBQXFCO0FBQ3BCLEdBQXNCLENBQXRCLFVBQXNCO0FBQ2pCLEdBQTJCLENBQTNCLFVBQTJCO0FBQzFCLEdBQTRCLENBQTVCLFdBQTRCO0FBQ3hCLEdBQWdDLENBQWhDLGNBQWdDO0FBRXZCLEdBQWEsQ0FBYixNQUFhO0FBQ3VCLEdBQXNCLENBQXRCLEtBQXNCO0FBQ3dCLEdBQTRCLENBQTVCLFdBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEksK0JBQStCO2NBQS9CLCtCQUErQjthQUEvQiwrQkFBK0I7OEJBQS9CLCtCQUErQjtnRUFBL0IsK0JBQStCOztpQkFBL0IsK0JBQStCOztZQUNsRCxHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLEdBQUssQ0FBQyxVQUFVLFFBQVEsYUFBYSxJQUMvQixRQUFRLFFBQVEsV0FBVyxJQUMzQixJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsS0FBSyxJQUFJO2dCQUV0QyxHQUFLLENBQUMsV0FBVyxPQVQ0RCxLQUFzQixzQkFTM0QsSUFBSSxFQUFFLE9BQU8sRUFqQmpDLFFBQW9CLFdBa0JsQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsT0FBTztnQkFFNUMsRUFBRSxFQUFFLGdCQUFnQixFQUFFLENBQUM7b0JBQ3JCLEdBQUssQ0FBQyxnQkFBZ0IsR0FB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