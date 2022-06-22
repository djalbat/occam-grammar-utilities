"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _directly = _interopRequireDefault(require("../definition/recursive/left/directly"));
var _indirectly = _interopRequireDefault(require("../definition/recursive/left/indirectly"));
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
                rule.removeDefinitions(definitions);
                var reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmaW5kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCBydWxlID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZTsgIC8vL1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcnVsZS5yZW1vdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucyk7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGVBbmREZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlOyAgLy8vXG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGZpbmQoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGlzSW5zdGFuY2VPZihkZWZpbml0aW9uLCBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICBydWxlLnJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKTtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VkUnVsZUZyb21SdWxlQW5kRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICBjb25zdCBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlO1xufVxuIl0sIm5hbWVzIjpbImZpbmQiLCJhcnJheVV0aWxpdGllcyIsIlJlZHVjZWRSdWxlIiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwicnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0luc3RhbmNlT2YiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJyZW1vdmVEZWZpbml0aW9ucyIsInJlZHVjZWRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZUFuZERlZmluaXRpb25zIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVEsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBQ0wsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWxCLElBQUEsUUFBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBQ0csSUFBQSxTQUF1QyxrQ0FBdkMsdUNBQXVDLEVBQUE7QUFDckMsSUFBQSxXQUF5QyxrQ0FBekMseUNBQXlDLEVBQUE7QUFFMUQsSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTtBQUNMLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBTSxBQUFFQSxJQUFJLEdBQUtDLFVBQWMsZUFBQSxDQUF2QkQsSUFBSSxBQUFtQixBQUFDO0FBRWpCLElBQUEsQUFBTUUsV0FBVyxpQkFzRDdCLEFBdERZOzs7YUFBTUEsV0FBVzs7Ozs7O1lBQ3ZCQyxHQUE2QixFQUE3QkEsK0JBQTZCO21CQUFwQyxTQUFP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