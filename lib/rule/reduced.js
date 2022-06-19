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
                var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName);
                rule.removeDefinitions(definitions);
                var name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IHJlZHVjZWREZWZpbml0aW9uRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmluZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGlzSW5zdGFuY2VPZihkZWZpbml0aW9uLCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksICAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcnVsZS5yZW1vdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucyk7XG5cbiAgICBjb25zdCBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb25zKSB7XG4gIGxldCByZWR1Y2VkUnVsZSA9IG51bGw7XG5cbiAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksICAvLy9cbiAgICAgICAgICByZWR1Y2VkRGVmaW5pdGlvbiA9IHJlZHVjZWREZWZpbml0aW9uRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSByZWR1Y2VkRGVmaW5pdGlvbjsgLy8vXG5cbiAgICBydWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICBydWxlLnJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKTtcblxuICAgIGNvbnN0IG5hbWUgPSByZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlOyAgLy8vXG5cbiAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlO1xufVxuIl0sIm5hbWVzIjpbImZpbmQiLCJhcnJheVV0aWxpdGllcyIsIlJlZHVjZWRSdWxlIiwiZnJvbUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsInJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaXNJbnN0YW5jZU9mIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlZHVjZWRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJSdWxlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJyZWR1Y2VkRGVmaW5pdGlvbiIsInJlZHVjZWREZWZpbml0aW9uRnJvbVJ1bGVOYW1lIiwiYWRkRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVRLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUNMLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVsQixJQUFBLFFBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtB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