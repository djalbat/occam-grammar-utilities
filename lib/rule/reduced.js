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
            key: "fromDirectlyLeftRecursiveRule",
            value: function fromDirectlyLeftRecursiveRule(directlyLeftRecursiveRule) {
                var rule = directlyLeftRecursiveRule; ///
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
        var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName);
        rule.removeDefinitions(definitions);
        var name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default; ///
        reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }
    return reducedRule;
}
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmaW5kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCBydWxlID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZTsgIC8vL1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZSA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZTsgIC8vL1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZTsgIC8vL1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGlzSW5zdGFuY2VPZihkZWZpbml0aW9uLCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRSdWxlRnJvbVJ1bGVBbmREZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9ucykge1xuICBsZXQgcmVkdWNlZFJ1bGUgPSBudWxsO1xuXG4gIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChkZWZpbml0aW9uc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLCAgLy8vXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJ1bGUucmVtb3ZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpO1xuXG4gICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGU7ICAvLy9cblxuICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlZFJ1bGU7XG59XG4iXSwibmFtZXMiOlsiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiUmVkdWNlZFJ1bGUiLCJmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzSW5zdGFuY2VPZiIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRnJvbVJ1bGVBbmREZWZpbml0aW9ucyIsImZyb21JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZW1vdmVEZWZpbml0aW9ucyIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJSZWR1Y2VkTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVRLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUNMLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVsQixJQUFBLFFBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUNMLElBQUEsS0FBOEIsa0NBQTlCLDhCQUE4QixFQUFBO0FBQ3RCLElBQUEsU0FBdUMsa0NBQXZDLHVDQUF1QyxFQUFBO0FBRXRELElBQUEsTUFBb0IsV0FBcEIsb0JBQW9CLENBQUE7QUFDTCxJQUFBLFNBQXVCLFdBQXZCLHVCQUF1QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5FLElBQU0sQUFBRUEsSUFBSSxHQUFLQyxVQUFjLGVBQUEsQ0FBdkJELElBQUksQUFBbUIsQUFBQztBQUVqQixJQUFBLEFBQU1FLFdBQVcsaUJBd0Q3QixBQXhEWTs7O2FBQU1BLFdBQVc7Ozs7OztZQUN2QkMsR0FBNkIsRUFBN0JBLCtCQUE2QjttQkFBcEMsU0FBT0EsNkJBQTZCLENBQUNDLHlCQUF5QixFQUFFO2dCQUM5RCxJQUFNQyxJQUFJLEdBQUdELHlCQUF5QixBQUFDLEVBQUUsR0FBRztnQkFFNUMsSUFBSUUsV0FBVyxHQUFHRCxJQUFJLENBQUNFLGNBQWMsRUFBRSxBQUFDO2dCQUV4Q0QsV0FBVyxHQUFHTixJQUFJLENBQUNNLFdBQVcsRUFBRSxTQUFDRSxVQUFVLEVBQUs7b0JBQzlDLElBQU1DLHlDQUF5QyxHQUFHQyxDQUFBQSxHQUFBQSxNQUFZLEFBQTZDLENBQUEsYUFBN0MsQ0FBQ0YsVUFBVSxFQUFFRyxTQUErQixRQUFBLENBQUMsQUFBQztvQkFFNUcsSUFBSSxDQUFDRix5Q0FBeUMsRUFBRTt3QkFDOUMsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILElBQU1HLFdBQVcsR0FBR0MsaUNBQWlDLENBQUNSLElBQUksRUFBRUMsV0FBVyxDQUFDLEFBQUM7Z0JBRXpFLE9BQU9NLFdBQVcsQ0FBQzthQUNwQjs7O1lBRU1FLEdBQStCLEVBQS9CQSxpQ0FBK0I7bUJBQXRDLFNBQU9BLCtCQUErQixDQUFDQywyQkFBMkIsRUFBRTtnQkFDbEUsSUFBTVYsSUFBSSxHQUFHVSwyQkFBMkIsQUFBQyxFQUFFLEdBQUc7Z0JBRTlDLElBQUlULFdBQVcsR0FBR0QsSUFBSSxDQUFDRSxjQUFjLEVBQUUsQUFBQztnQkFFeENELFdBQVcsR0FBR04sSUFBSSxDQUFDTSxXQUFXLEVBQUUsU0FBQ0UsVUFBVSxFQUFLO29CQUM5QyxJQUFNQyx5Q0FBeUMsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBWSxBQUE2QyxDQUFBLGFBQTdDLENBQUNGLFVBQVUsRUFBRUcsU0FBK0IsUUFBQSxDQUFDLEFBQUM7b0JBRTVHLElBQUksQ0FBQ0YseUNBQXlDLEVBQUU7d0JBQzlDLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxJQUFNRyxXQUFXLEdBQUdDLGlDQUFpQyxDQUFDUixJQUFJLEVBQUVDLFdBQVcsQ0FBQyxBQUFDO2dCQUV6RSxPQUFPTSxXQUFXLENBQUM7YUFDcEI7OztZQUVNSSxHQUErQixFQUEvQkEsaUNBQStCO21CQUF0QyxTQUFPQSwrQkFBK0IsQ0FBQ0MsMkJBQTJCLEVBQUU7Z0JBQ2xFLElBQU1aLElBQUksR0FBR1ksMkJBQTJCLEFBQUMsRUFBRSxHQUFHO2dCQUU5QyxJQUFJWCxXQUFXLEdBQUdELElBQUksQ0FBQ0UsY0FBYyxFQUFFLEFBQUM7Z0JBRXhDRCxXQUFXLEdBQUdOLElBQUksQ0FBQ00sV0FBVyxFQUFFLFNBQUNFLFVBQVUsRUFBSztvQkFDOUMsSUFBTVUsaUNBQWlDLEdBQUdSLENBQUFBLEdBQUFBLE1BQVksQUFBcUMsQ0FBQSxhQUFyQyxDQUFDRixVQUFVLEVBQUVXLEtBQXVCLFFBQUEsQ0FBQyxBQUFDO29CQUU1RixJQUFJLENBQUNELGlDQUFpQyxFQUFFO3dCQUN0QyxPQUFPLElBQUksQ0FBQztxQkFDYjtpQkFDRixDQUFDLENBQUM7Z0JBRUgsSUFBTU4sV0FBVyxHQUFHQyxpQ0FBaUMsQ0FBQ1IsSUFBSSxFQUFFQyxXQUFXLENBQUMsQUFBQztnQkFFekUsT0FBT00sV0FBVyxDQUFDO2FBQ3BCOzs7O0NBQ0YsQ0F0RHdDUSxhQUFJLEtBQUEsQ0FzRDVDO0FBRUQsU0FBU1AsaUNBQWlDLENBQUNSLElBQUksRUFBRUMsV0FBVyxFQUFFO0lBQzVELElBQUlNLFdBQVcsR0FBRyxJQUFJLEFBQUM7SUFFdkIsSUFBTVMsaUJBQWlCLEdBQUdmLFdBQVcsQ0FBQ2dCLE1BQU0sQUFBQztJQUU3QyxJQUFJRCxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7UUFDekIsSUFBTUUsUUFBUSxHQUFHbEIsSUFBSSxDQUFDbUIsT0FBTyxFQUFFLEVBQ3pCQyxlQUFlLEdBQUdDLENBQUFBLEdBQUFBLFNBQTJCLEFBQVUsQ0FBQSw0QkFBVixDQUFDSCxRQUFRLENBQUMsQUFBQztRQUU5RGxCLElBQUksQ0FBQ3NCLGlCQUFpQixDQUFDckIsV0FBVyxDQUFDLENBQUM7UUFFcEMsSUFBTXNCLElBQUksR0FBR0gsZUFBZSxFQUN0QkksU0FBUyxHQUFHLEtBQUssRUFDakJDLGVBQWUsR0FBR0MsUUFBVyxRQUFBLEFBQUMsRUFBRSxHQUFHO1FBRXpDbkIsV0FBVyxHQUFHLElBQUlWLFdBQVcsQ0FBQzBCLElBQUksRUFBRUMsU0FBUyxFQUFFdkIsV0FBVyxFQUFFd0IsZUFBZSxDQUFDLENBQUM7S0FDOUU7SUFFRCxPQUFPbEIsV0FBVyxDQUFDO0NBQ3BCO2tCQTNFb0JWLFdBQVcifQ==