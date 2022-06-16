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
            key: "fromNonDirectlyLeftRecursiveRule",
            value: function fromNonDirectlyLeftRecursiveRule(nonDirectlyLeftRecursiveRule) {
                var rule = nonDirectlyLeftRecursiveRule; ///
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
        var ruleName = rule.getName(), reducedDefinition = (0, _definition).reducedDefinitionFromRuleName(ruleName), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), definition1 = reducedDefinition; ///
        definitions.forEach(function(definition) {
            rule.removeDefinition(definition);
        });
        rule.addDefinition(definition1);
        var name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default; ///
        reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }
    return reducedRule;
}
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IHJlZHVjZWREZWZpbml0aW9uRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmluZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZShkaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGlzSW5zdGFuY2VPZihkZWZpbml0aW9uLCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZShub25EaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZSA9IG5vbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbnMpIHtcbiAgbGV0IHJlZHVjZWRSdWxlID0gbnVsbDtcblxuICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWREZWZpbml0aW9uID0gcmVkdWNlZERlZmluaXRpb25Gcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHJlZHVjZWREZWZpbml0aW9uOyAvLy9cblxuICAgIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICAgIHJ1bGUucmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICB9KTtcblxuICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIGNvbnN0IG5hbWUgPSByZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlOyAgLy8vXG5cbiAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlO1xufVxuIl0sIm5hbWVzIjpbImZpbmQiLCJhcnJheVV0aWxpdGllcyIsIlJlZHVjZWRSdWxlIiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwicnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0luc3RhbmNlT2YiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMiLCJmcm9tTm9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsIm5vbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJ1bGUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWREZWZpbml0aW9uIiwicmVkdWNlZERlZmluaXRpb25Gcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJmb3JFYWNoIiwicmVtb3ZlRGVmaW5pdGlvbiIsImFkZERlZmluaXRpb24iLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUSxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDTCxJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFbEIsSUFBQSxRQUFpQixrQ0FBakIsaUJBQWlCLEVBQUE7QUFDTCxJQUFBLEtBQThCLGtDQUE5Qiw4QkFBOEIsRUFBQTtBQUN0QixJQUFBLFNBQXVDLGtDQUF2Qyx1Q0FBdUMsRUFBQTtBQUV0RCxJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBO0FBQ0wsSUFBQSxTQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTtBQUNyQixJQUFBLFdBQXlCLFdBQXpCLHlCQUF5QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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