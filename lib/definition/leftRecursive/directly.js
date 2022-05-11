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
var DirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(DirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(DirectlyLeftRecursiveDefinition);
    function DirectlyLeftRecursiveDefinition() {
        _classCallCheck(this, DirectlyLeftRecursiveDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyLeftRecursiveDefinition, [
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var definition = this.getDefinition(), ruleName = this.getRuleName(), rule = ruleMap[ruleName];
                var reducedRule = (0, _rule).reducedRuleFromRule(rule, ruleMap, _reduced.default), reducedRuleEmpty = reducedRule.isEmpty();
                if (reducedRuleEmpty) {
                    var definitionString = definition.asString();
                    throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule has no sibling non-left recursive definitions and therefore cannot be rewritten."));
                }
                var leftRecursiveRuleName = ruleName; ///
                var repeatedRule = (0, _rule).repeatedRuleFromRule(rule, ruleMap, _repeated.default), repeatedDefinition = _repeated1.default.fromDefinition(definition);
                repeatedRule.addDefinition(repeatedDefinition);
                var rewrittenRule = (0, _rule).rewrittenRuleFromRule(rule, ruleMap, _rewritten.default), replacedDefinition = this, rewrittenDefinition = _rewritten1.default.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName), replacementDefinition = rewrittenDefinition; ///
                rewrittenRule.replaceDefinition(replacedDefinition, replacementDefinition);
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var directlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition);
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
                                var definitionString1 = definition.asString();
                                throw new Error("The '".concat(definitionString1, "' directly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZXBlYXRlZERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmVwZWF0ZWRSdWxlRnJvbVJ1bGUsIHJld3JpdHRlblJ1bGVGcm9tUnVsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZVwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXTtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVFbXB0eSA9IHJlZHVjZWRSdWxlLmlzRW1wdHkoKTtcblxuICAgIGlmIChyZWR1Y2VkUnVsZUVtcHR5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGhhcyBubyBzaWJsaW5nIG5vbi1sZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgY29uc3QgcmVwZWF0ZWRSdWxlID0gcmVwZWF0ZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZU1hcCwgUmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgY29uc3QgcmV3cml0dGVuUnVsZSA9IHJld3JpdHRlblJ1bGVGcm9tUnVsZShydWxlLCBydWxlTWFwLCBSZXdyaXR0ZW5SdWxlKSxcbiAgICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHJld3JpdHRlbkRlZmluaXRpb247ICAvLy9cblxuICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuc29tZSgobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gW10sXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXdyaXRlIiwicnVsZU1hcCIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRnJvbVJ1bGUiLCJSZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRW1wdHkiLCJpc0VtcHR5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGUiLCJyZXBlYXRlZFJ1bGVGcm9tUnVsZSIsIlJlcGVhdGVkUnVsZSIsInJlcGVhdGVkRGVmaW5pdGlvbiIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwiYWRkRGVmaW5pdGlvbiIsInJld3JpdHRlblJ1bGUiLCJyZXdyaXR0ZW5SdWxlRnJvbVJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwicmVwbGFjZWREZWZpbml0aW9uIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwic29tZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJ0eXBlIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsInBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVXLElBQUEsUUFBb0Isa0NBQXBCLG9CQUFvQixFQUFBO0FBQ25CLElBQUEsU0FBcUIsa0NBQXJCLHFCQUFxQixFQUFBO0FBQ3BCLElBQUEsVUFBc0Isa0NBQXRCLHNCQUFzQixFQUFBO0FBQ2pCLElBQUEsVUFBMkIsa0NBQTNCLDJCQUEyQixFQUFBO0FBQzFCLElBQUEsV0FBNEIsa0NBQTVCLDRCQUE0QixFQUFBO0FBQ3hCLElBQUEsY0FBZ0Msa0NBQWhDLGdDQUFnQyxFQUFBO0FBRXZCLElBQUEsTUFBYSxXQUFiLGFBQWEsQ0FBQTtBQUN1QixJQUFBLEtBQXNCLFdBQXRCLHNCQUFzQixDQUFBO0FBQ21ELElBQUEsV0FBNEIsV0FBNUIsNEJBQTRCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkssSUFBQSxBQUFNQSwrQkFBK0IsaUJDYmpELEFEYVk7OzthQUFNQSwrQkFBK0I7Ozs7OztZQUNsREMsR0FBTyxFQUFQQSxTQUFPO21CQUFQ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