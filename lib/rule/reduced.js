"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _left = _interopRequireDefault(require("../definition/recursive/left"));
var _directly = _interopRequireDefault(require("../definition/recursive/left/directly"));
var _indirectly = _interopRequireDefault(require("../definition/recursive/left/indirectly"));
var _class = require("../utilities/class");
var _part = require("../utilities/part");
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
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    debugger;
                }
                rule.removeDefinitions(definitions);
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
                    var definitionIndirectlyLeftRecursiveDefinition = (0, _class).isInstanceOf(definition, _indirectly.default);
                    if (!definitionIndirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    debugger;
                }
                var reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions), leftRecursiveDefinition = _left.default.fromReducedRule(reducedRule), definition = leftRecursiveDefinition; ///
                rule.addDefinition(definition);
                rule.removeDefinitions(definitions);
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
function reducedRuleFromRuleAndDefinitions(rule, definitions) {
    var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName);
    var name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
    return reducedRule;
}
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgaXNJbnN0YW5jZU9mIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jbGFzc1wiO1xuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmluZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZShkaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGlzSW5zdGFuY2VPZihkZWZpbml0aW9uLCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIHJ1bGUucmVtb3ZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZTsgIC8vL1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJlZHVjZWRSdWxlKHJlZHVjZWRSdWxlKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuXG4gICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgcnVsZS5yZW1vdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb25zKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJSZWR1Y2VkUnVsZSIsImZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsInJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaXNJbnN0YW5jZU9mIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRnJvbVJ1bGVBbmREZWZpbml0aW9ucyIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJkZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SZWR1Y2VkUnVsZSIsImFkZERlZmluaXRpb24iLCJSdWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWtCLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUNULElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtB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