"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reduced = _interopRequireDefault(require("../../../rule/reduced"));
var _rewritten = _interopRequireDefault(require("../../../rule/rewritten"));
var _rewritten1 = _interopRequireDefault(require("../../../definition/rewritten"));
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
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
                var unary = this.isUnary(), ruleName = this.getRuleName(), definition = this.getDefinition();
                if (unary) {
                    var definitionString = definition.asString();
                    throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
                }
                var rule = ruleMap[ruleName], reducedRule = (0, _rule).reducedRuleFromRule(rule, ruleMap, _reduced.default), rewrittenRule = (0, _rule).rewrittenRuleFromRule(rule, ruleMap, _rewritten.default), leftRecursiveRuleName = ruleName, rewrittenDefinition = _rewritten1.default.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName);
                reducedRule.removeDefinition(definition);
                rewrittenRule.replaceDefinition(definition, rewrittenDefinition);
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
                            // const definitionComplex = isDefinitionComplex(definition);
                            //
                            // if (definitionComplex) {
                            //   const definitionString = definition.asString();
                            //
                            //   throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
                            // }
                            var parts = [], type = _types.DIRECTLY_LEFT_RECURSIVE_TYPE, recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                            directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
                            return true;
                        }
                    });
                }
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);
exports.default = DirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVkdWNlZFJ1bGUgZnJvbSBcIi4uLy4uLy4uL3J1bGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4uLy4uLy4uL3J1bGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgUmV3cml0dGVuRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvbi9yZXdyaXR0ZW5cIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdFwiO1xuXG5pbXBvcnQgeyBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgdW5hcnkgPSB0aGlzLmlzVW5hcnkoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCk7XG5cbiAgICBpZiAodW5hcnkpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZU1hcCwgUmVkdWNlZFJ1bGUpLFxuICAgICAgICAgIHJld3JpdHRlblJ1bGUgPSByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUocnVsZSwgcnVsZU1hcCwgUmV3cml0dGVuUnVsZSksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICByZWR1Y2VkUnVsZS5yZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgcmV3cml0dGVuUnVsZS5yZXBsYWNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICAvLyBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAvLyAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgY29uc3QgcGFydHMgPSBbXSxcbiAgICAgICAgICAgICAgICB0eXBlID0gRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJld3JpdGUiLCJydWxlTWFwIiwidW5hcnkiLCJpc1VuYXJ5IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJydWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlIiwiUmVkdWNlZFJ1bGUiLCJyZXdyaXR0ZW5SdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiUmV3cml0dGVuUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJld3JpdHRlbkRlZmluaXRpb24iLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZW1vdmVEZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJzb21lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJwYXJ0cyIsInR5cGUiLCJESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVXLElBQUEsUUFBdUIsa0NBQXZCLHVCQUF1QixFQUFBO0FBQ3JCLElBQUEsVUFBeUIsa0NBQXpCLHlCQUF5QixFQUFBO0FBQ25CLElBQUEsV0FBK0Isa0NBQS9CLCtCQUErQixFQUFBO0FBQzNCLElBQUEsS0FBb0Msa0NBQXBDLG9DQUFvQyxFQUFBO0FBRTNCLElBQUEsTUFBZ0IsV0FBaEIsZ0JBQWdCLENBQUE7QUFDRixJQUFBLEtBQXlCLFdBQXpCLHlCQUF5QixDQUFBO0FBQzhCLElBQUEsV0FBK0IsV0FBL0IsK0JBQStCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEksSUFBQSxBQUFNQSwrQkFBK0IsaUJBQXJDOzs7YUFBTUEsK0JBQStCOzs7Ozs7WUFDbERDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUFFLEVBQ3RCQyxRQUFRLEdBQUcsSUFBSSxDQUFDQyxXQUFXLEVBQUUsRUFDN0JDLFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRSxBQUFDO2dCQUV4QyxJQUFJTCxLQUFLLEVBQUU7b0JBQ1QsSUFBTU0sZ0JBQWdCLEdBQUdGLFVBQVUsQ0FBQ0csUUFBUSxFQUFF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