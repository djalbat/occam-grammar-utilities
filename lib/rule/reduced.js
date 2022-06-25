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
var _indirectly = _interopRequireDefault(require("../definition/recursive/left/indirectly"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
                    var definitionDirectlyLeftRecursiveDefinition = _instanceof(definition, _directly.default);
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
                    var definitionIndirectlyLeftRecursiveDefinition = _instanceof(definition, _indirectly.default);
                    if (!definitionIndirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    debugger;
                }
                var reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions), leftRecursiveDefinition = _left.default.fromReducedRule(reducedRule), definition = leftRecursiveDefinition; ///
                rule.removeDefinitions(definitions);
                rule.addDefinition(definition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlOyAgLy8vXG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGZpbmQoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcnVsZS5yZW1vdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucyk7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGVBbmREZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlOyAgLy8vXG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGZpbmQoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJlZHVjZWRSdWxlKHJlZHVjZWRSdWxlKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuXG4gICAgcnVsZS5yZW1vdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucyk7XG5cbiAgICBydWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb25zKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJSZWR1Y2VkUnVsZSIsImZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsInJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRnJvbVJ1bGVBbmREZWZpbml0aW9ucyIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJkZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SZWR1Y2VkUnVsZSIsImFkZERlZmluaXRpb24iLCJSdWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVEsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBQ0wsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWxCLElBQUEsUUFBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBQ0wsSUFBQSxLQUE4QixrQ0FBOUIsOEJBQThCLEVBQUE7QUFDdEIsSUFBQSxTQUF1QyxrQ0FBdkMsdUNBQXVDLEVBQUE7QUFDckMsSUFBQSxXQUF5QyxrQ0FBekMseUNBQXlDLEVBQUE7QUFFM0MsSUFB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