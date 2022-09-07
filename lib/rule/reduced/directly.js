"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyReducedRule;
    }
});
var _occamParsers = require("occam-parsers");
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../node/reduced/directly"));
var _ruleName = require("../../utilities/ruleName");
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
var DirectlyReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(DirectlyReducedRule, Rule);
    var _super = _createSuper(DirectlyReducedRule);
    function DirectlyReducedRule() {
        _classCallCheck(this, DirectlyReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyReducedRule, null, [
        {
            key: "fromRuleDisallowIsolatedAndLeftRecursiveDefinitions",
            value: function fromRuleDisallowIsolatedAndLeftRecursiveDefinitions(rule, disallowIsolated, leftRecursiveDefinitions) {
                var directlyReducedRule = null;
                leftRecursiveDefinitions = leftRecursiveDefinitions.filter(function(leftRecursiveDefinition) {
                    var leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();
                    if (leftRecursiveDefinitionRule === rule) {
                        return true;
                    }
                });
                var definitions = rule.getDefinitions();
                definitions = definitions.slice(0); ///
                leftRecursiveDefinitions.forEach(function(leftRecursiveDefinition) {
                    var definition = leftRecursiveDefinition.getDefinition(), index = definitions.indexOf(definition);
                    if (index > -1) {
                        var start = index, deleteCount = 1;
                        definitions.splice(start, deleteCount);
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    if (disallowIsolated) {
                        var ruleName = rule.getName();
                        throw new Error("The directly left recursive definitions of the '".concat(ruleName, "' rule are isolated and therefore cannot be rewritten."));
                    }
                }
                if (definitionsLength > 0) {
                    var ruleName1 = rule.getName(), directlyReducedRuleName = (0, _ruleName.directlyReducedRuleNameFromRuleName)(ruleName1), name = directlyReducedRuleName, ambiguous = false, NonTerminalNode = _directly.default; ///
                    directlyReducedRule = new DirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
                }
                return directlyReducedRule;
            }
        }
    ]);
    return DirectlyReducedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgRGlyZWN0bHlSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZWR1Y2VkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZURpc2FsbG93SXNvbGF0ZWRBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGlzYWxsb3dJc29sYXRlZCwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBudWxsO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZpbHRlcigobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPT09IHJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnNsaWNlKDApOyAgLy8vXG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZm9yRWFjaCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICBpbmRleCA9IGRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChkaXNhbGxvd0lzb2xhdGVkKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBhcmUgaXNvbGF0ZWQgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IERpcmVjdGx5UmVkdWNlZE5vZGU7ICAvLy9cblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IG5ldyBEaXJlY3RseVJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlSZWR1Y2VkUnVsZSIsImZyb21SdWxlRGlzYWxsb3dJc29sYXRlZEFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJkaXNhbGxvd0lzb2xhdGVkIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImZpbHRlciIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlIiwiZ2V0UnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJzbGljZSIsImZvckVhY2giLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsIkVycm9yIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJEaXJlY3RseVJlZHVjZWROb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBUVFBLG1CQUFtQjs7OzRCQU5uQixlQUFlOzZEQUVKLDZCQUE2Qjt3QkFFVCwwQkFBMEI7Ozs7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