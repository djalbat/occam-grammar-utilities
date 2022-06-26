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
                    var ruleName = directlyLeftRecursiveRule.getRuleName(), definition = directlyLeftRecursiveRule, definitionString = definition.asString();
                    throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is isolated and therefore cannot be rewritten."));
                }
                rule.removeDefinitions(definitions);
                var reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);
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
                var definitionsLength = definitions.length;
                if (definitionsLength !== 0) {
                    reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);
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
function reducedRuleFromRuleAndDefinitions(rule, definitions) {
    var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName);
    var name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
    return reducedRule;
}
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlOyAgLy8vXG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGZpbmQoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUsIC8vL1xuICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBpc29sYXRlZCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgcnVsZS5yZW1vdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucyk7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGVBbmREZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBsZXQgcmVkdWNlZFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZTsgIC8vL1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoICE9PSAwKSB7XG4gICAgICByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGVBbmREZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9ucyk7XG5cbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJlZHVjZWRSdWxlKHJlZHVjZWRSdWxlKSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJ1bGUucmVtb3ZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpO1xuXG4gICAgICBydWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRSdWxlRnJvbVJ1bGVBbmREZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9ucykge1xuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gIGNvbnN0IG5hbWUgPSByZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGU7XG59XG4iXSwibmFtZXMiOlsiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiUmVkdWNlZFJ1bGUiLCJmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsInJlbW92ZURlZmluaXRpb25zIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwiZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUmVkdWNlZFJ1bGUiLCJhZGREZWZpbml0aW9uIiwiUnVsZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUSxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDTCxJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFbEIsSUFBQSxRQUFpQixrQ0FBakIsaUJBQWlCLEVBQUE7QUFDTCxJQUFBLEtBQThCLGtDQUE5Qiw4QkFBOEIsRUFBQTtBQUN0QixJQUFBLFNBQXVDLGtDQUF2Qyx1Q0FBdUMsRUFBQTtBQUNyQyxJQUFBLFdBQXlDLGtDQUF6Qyx5Q0FBeUMsRUFBQTtBQUUzQyxJQUFBLFNBQXVCLFdBQXZCLHVCQUF1QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRSxJQUFNLEFBQUVBLElBQUksR0FBS0MsVUFBYyxlQUFBLENBQXZCRCxJQUFJLEFBQW1CLEFBQUM7QUFFakIsSUFBQSxBQUFNRSxXQUFXLGlCQStEN0IsQUEvRFk7OzthQUFNQSxXQUFXOzs7Ozs7WUFDdkJDLEdBQTZCLEVBQTdCQSwrQkFBNkI7bUJBQXBDLFNBQU9BLDZCQUE2QixDQUFDQyx5QkFBeUIsRUFBRTtnQkFDOUQsSUFBTUMsSUFBSSxHQUFHRCx5QkFBeUIsQUFBQyxFQUFFLEdBQUc7Z0JBRTVDLElBQUlFLFdBQVcsR0FBR0QsSUFBSSxDQUFDRSxjQUFjLEVBQUUsQUFBQztnQkFFeENELFdBQVcsR0FBR04sSUFBSSxDQUFDTSxXQUFXLEVBQUUsU0FBQ0UsVUFBVSxFQUFLO29CQUM5QyxJQUFNQyx5Q0FBeUMsR0FBSUQsQUFBVSxXQUFZRSxDQUF0QkYsVUFBVSxF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