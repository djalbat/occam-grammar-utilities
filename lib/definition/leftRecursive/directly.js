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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiXSwibmFtZXMiOlsiUmVkdWNlZFJ1bGUiLCJSZXBlYXRlZFJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwiUmVwZWF0ZWREZWZpbml0aW9uIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsInJlZHVjZWRSdWxlRnJvbVJ1bGUiLCJyZXBlYXRlZFJ1bGVGcm9tUnVsZSIsInJld3JpdHRlblJ1bGVGcm9tUnVsZSIsImlzRGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJld3JpdGUiLCJydWxlTWFwIiwiZGVmaW5pdGlvbiIsImdldERlZmluaXRpb24iLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZSIsInJlZHVjZWRSdWxlIiwicmVkdWNlZFJ1bGVFbXB0eSIsImlzRW1wdHkiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGVhdGVkUnVsZSIsInJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwiYWRkRGVmaW5pdGlvbiIsInJld3JpdHRlblJ1bGUiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJyZXBsYWNlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsInNvbWUiLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25Db21wbGV4IiwidHlwZSIsInBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVZLEdBQW9CLENBQXBCLFFBQW9CO0FBQ25CLEdBQXFCLENBQXJCLFNBQXFCO0FBQ3BCLEdBQXNCLENBQXRCLFVBQXNCO0FBQ2pCLEdBQTJCLENBQTNCLFVBQTJCO0FBQzFCLEdBQTRCLENBQTVCLFdBQTRCO0FBQ3hCLEdBQWdDLENBQWhDLGNBQWdDO0FBRXZCLEdBQWEsQ0FBYixNQUFhO0FBQ3VCLEdBQXNCLENBQXRCLEtBQXNCO0FBQ3dCLEdBQTRCLENBQTVCLFdBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEksK0JBQStCLGlCQUFyQyxRQUFRO2NBQUYsK0JBQStCO2FBQS9CLCtCQUErQjs4QkFBL0IsK0JBQStCO2dFQUEvQiwrQkFBK0I7O2lCQUEvQiwrQkFBK0I7O1lBQ2xELEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLEdBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFDL0IsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQzNCLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUk7Z0JBRXRDLEdBQUssQ0FBQyxXQUFXLE9BVDRELEtBQXNCLHNCQVMzRCxJQUFJLEVBQUUsT0FBTyxFQWpCakMsUUFBb0IsV0FrQmxDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxPQUFPO2dCQUU1QyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUs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