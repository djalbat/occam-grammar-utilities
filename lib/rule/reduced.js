"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return ReducedRule;
    },
    enumerable: true
});
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
                    var ruleName = rule.getName(), definition = directlyLeftRecursiveRule, definitionString = definition.asString();
                    throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is isolated and therefore cannot be rewritten."));
                }
                rule.removeDefinitions(definitions);
                var ruleName1 = rule.getName(), reducedRule = reducedRuleFromRuleNameAndDefinitions(ruleName1, definitions);
                return reducedRule;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveRule",
            value: function fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule) {
                var reducedRule = null;
                var rule = indirectlyLeftRecursiveRule; ///
                var definitions = rule.getDefinitions();
                definitions = find(definitions, function(definition) {
                    var definitionIndirectlyLeftRecursiveDefinition = _instanceof(definition, _indirectly.default);
                    if (!definitionIndirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var ruleName = rule.getName(), definitionsLength = definitions.length;
                if (definitionsLength !== 0) {
                    definitions.forEach(function(definition) {
                        var definitionDirectlyLeftRecursiveDefinition = _instanceof(definition, _directly.default);
                        if (definitionDirectlyLeftRecursiveDefinition) {
                            var definitionString = definition.asString();
                            throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule has a sibling indirectly left recursive definition and therefore cannot be rewritten."));
                        }
                    });
                    reducedRule = reducedRuleFromRuleNameAndDefinitions(ruleName, definitions);
                    var leftRecursiveDefinition = _left.default.fromReducedRule(reducedRule), definition = leftRecursiveDefinition; ///
                    rule.removeDefinitions(definitions);
                    rule.addDefinition(definition);
                }
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
function reducedRuleFromRuleNameAndDefinitions(ruleName, definitions) {
    var reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName), name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
    return reducedRule;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlOyAgLy8vXG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGZpbmQoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSwgLy8vXG4gICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGlzb2xhdGVkIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBydWxlLnJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlTmFtZUFuZERlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBsZXQgcmVkdWNlZFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZTsgIC8vL1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggIT09IDApIHtcbiAgICAgIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGhhcyBhIHNpYmxpbmcgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZU5hbWVBbmREZWZpbml0aW9ucyhydWxlTmFtZSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SZWR1Y2VkUnVsZShyZWR1Y2VkUnVsZSksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuXG4gICAgICBydWxlLnJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKTtcblxuICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VkUnVsZUZyb21SdWxlTmFtZUFuZERlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9ucykge1xuICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlO1xufVxuIl0sIm5hbWVzIjpbIlJlZHVjZWRSdWxlIiwiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwicnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsInJlbW92ZURlZmluaXRpb25zIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlTmFtZUFuZERlZmluaXRpb25zIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmb3JFYWNoIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SZWR1Y2VkUnVsZSIsImFkZERlZmluaXRpb24iLCJSdWxlIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7OztlQWNRQSxXQUFXOzs7OzRCQVpYLGVBQWU7eUJBQ0wsV0FBVzs4Q0FFbEIsaUJBQWlCOzJDQUNMLDhCQUE4QjsrQ0FDdEIsdUNBQXVDO2lEQUNyQyx5Q0FBeUM7d0JBRTNDLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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