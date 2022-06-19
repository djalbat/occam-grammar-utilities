"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _left = _interopRequireDefault(require("../definition/recursive/left"));
var _directly = _interopRequireDefault(require("../definition/recursive/left/directly"));
var _class = require("../utilities/class");
var _ruleName = require("../utilities/ruleName");
var _definition = require("../utilities/definition");
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
var find = _necessary.arrayUtilities.find;
var ReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(ReducedRule, Rule);
    var _super = _createSuper(ReducedRule);
    function ReducedRule() {
        _classCallCheck(this, ReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(ReducedRule, null, [
        {
            key: "fromImplicitlyLeftRecursiveRule",
            value: function fromImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule) {
                var rule = implicitlyLeftRecursiveRule; ///
                var definitions = rule.getDefinitions();
                definitions = find(definitions, function(definition) {
                    var definitionDirectlyLeftRecursiveDefinition = (0, _class).isInstanceOf(definition, _directly.default);
                    if (!definitionDirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);
                return reducedRule;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveRule",
            value: function fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule) {
                var rule = indirectlyLeftRecursiveRule; ///
                var definitions = rule.getDefinitions();
                definitions = find(definitions, function(definition) {
                    var definitionLeftRecursiveDefinition = (0, _class).isInstanceOf(definition, _left.default);
                    if (!definitionLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
function reducedRuleFromRuleAndDefinitions(rule, definitions) {
    var reducedRule = null;
    var definitionsLength = definitions.length;
    if (definitionsLength > 0) {
        var ruleName = rule.getName(), reducedDefinition = (0, _definition).reducedDefinitionFromRuleName(ruleName), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), definition = reducedDefinition; ///
        rule.addDefinition(definition);
        rule.removeDefinitions(definitions);
        var name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default; ///
        reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }
    return reducedRule;
}
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IHJlZHVjZWREZWZpbml0aW9uRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmluZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGlzSW5zdGFuY2VPZihkZWZpbml0aW9uLCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbnMpIHtcbiAgbGV0IHJlZHVjZWRSdWxlID0gbnVsbDtcblxuICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWREZWZpbml0aW9uID0gcmVkdWNlZERlZmluaXRpb25Gcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHJlZHVjZWREZWZpbml0aW9uOyAvLy9cblxuICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJ1bGUucmVtb3ZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpO1xuXG4gICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGU7ICAvLy9cblxuICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlZFJ1bGU7XG59XG4iXSwibmFtZXMiOlsiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiUmVkdWNlZFJ1bGUiLCJmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIiwicnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0luc3RhbmNlT2YiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkRGVmaW5pdGlvbiIsInJlZHVjZWREZWZpbml0aW9uRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiYWRkRGVmaW5pdGlvbiIsInJlbW92ZURlZmluaXRpb25zIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVEsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBQ0wsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWxCLElBQUEsUUFBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBQ0wsSUFBQSxLQUE4QixrQ0FBOUIsOEJBQThCLEVBQUE7QUFDdEIsSUFBQSxTQUF1QyxrQ0FBdkMsdUNBQXVDLEVBQUE7QUFFdEQsSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTtBQUNMLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFDckIsSUFBQSxXQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RSxJQUFNLEFBQUVBLElB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