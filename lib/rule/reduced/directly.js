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
var _necessary = require("necessary");
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../node/reduced/directly"));
var _directly1 = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left/directly"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left/indirectly"));
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
var DirectlyReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(DirectlyReducedRule, Rule);
    var _super = _createSuper(DirectlyReducedRule);
    function DirectlyReducedRule() {
        _classCallCheck(this, DirectlyReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyReducedRule, null, [
        {
            key: "fromRuleAndLeftRecursiveDefinitions",
            value: function fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
                var disallowIsolated = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                var directlyReducedRule = null;
                var directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions), indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);
                var definitions = rule.getDefinitions();
                definitions = definitions.slice(0); ///
                directlyLeftRecursiveDefinitions.forEach(function(directlyLeftRecursiveDefinition) {
                    var definition = directlyLeftRecursiveDefinition.getDefinition(), index = definitions.indexOf(definition);
                    if (index > -1) {
                        var start = index, deleteCount = 1;
                        definitions.splice(start, deleteCount);
                    }
                });
                indirectlyLeftRecursiveDefinitions.forEach(function(indirectlyLeftRecursiveDefinition) {
                    var definition = indirectlyLeftRecursiveDefinition.getDefinition(), index = definitions.indexOf(definition);
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
function findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
    var directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();
        if (leftRecursiveDefinitionRule === rule) {
            var leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _directly1.default);
            if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
                return true;
            }
        }
    });
    return directlyLeftRecursiveDefinitions;
}
function findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
    var indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();
        if (leftRecursiveDefinitionRule === rule) {
            var leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _indirectly.default);
            if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
                return true;
            }
        }
    });
    return indirectlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEaXJlY3RseVJlZHVjZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlZHVjZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGRpc2FsbG93SXNvbGF0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuc2xpY2UoMCk7ICAvLy9cblxuICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgIGluZGV4ID0gZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICBpbmRleCA9IGRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xICkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBkZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoZGlzYWxsb3dJc29sYXRlZCkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYXJlIGlzb2xhdGVkIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBuYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBEaXJlY3RseVJlZHVjZWROb2RlOyAgLy8vXG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBuZXcgRGlyZWN0bHlSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSA9PT0gcnVsZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPT09IHJ1bGUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0bHlSZWR1Y2VkUnVsZSIsImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpc2FsbG93SXNvbGF0ZWQiLCJkaXJlY3RseVJlZHVjZWRSdWxlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwic2xpY2UiLCJmb3JFYWNoIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiRXJyb3IiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkRpcmVjdGx5UmVkdWNlZE5vZGUiLCJSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUiLCJnZXRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFhUUEsbUJBQW1COzs7NEJBWG5CLGVBQWU7eUJBQ0wsV0FBVzs2REFFViw2QkFBNkI7OERBQ2pCLHlDQUF5QzsrREFDdkMsMkNBQTJDO3dCQUVyQywwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUMsSUFBSSxHQUFLQyxVQUFjLGVBQUEsQ0FBdkJELElBQUksQUFBbUIsQUFBQztBQUVqQixJQUFBLEFBQU1ELG1CQUFtQixpQkEyRHJDLEFBM0RZOzs7YUFBTUEsbUJBQW1COzs7Ozs7WUFDL0JHLEdBQW1DLEVBQW5DQSxxQ0FBbUM7bUJBQTFDLFNBQU9BLG1DQUFtQyxDQUFDQyxJQUFJLEVBQUVDLHdCQUF3QixFQUEyQjtvQkFBekJDLGdCQUFnQixHQUFoQkEsK0NBQXVCLGtCQUFKLElBQUk7Z0JBQ2hHLElBQUlDLG1CQUFtQixHQUFHLElBQUksQUFBQztnQkFFL0IsSUFBTUMsZ0NBQWdDLEdBQUdDLG9DQUFvQyxDQUFDTCxJQUFJLEVBQUVD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