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
                    var definition = directlyLeftRecursiveDefinition.getDefinition(), index = definitions.indexOf(definition), start = index, deleteCount = 1;
                    definitions.splice(start, deleteCount);
                });
                indirectlyLeftRecursiveDefinitions.forEach(function(indirectlyLeftRecursiveDefinition) {
                    var definition = indirectlyLeftRecursiveDefinition.getDefinition(), index = definitions.indexOf(definition), start = index, deleteCount = 1;
                    definitions.splice(start, deleteCount);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEaXJlY3RseVJlZHVjZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlZHVjZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGRpc2FsbG93SXNvbGF0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuc2xpY2UoMCk7ICAvLy9cblxuICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgIGluZGV4ID0gZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfSk7XG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICBpbmRleCA9IGRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIGRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChkaXNhbGxvd0lzb2xhdGVkKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBhcmUgaXNvbGF0ZWQgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IERpcmVjdGx5UmVkdWNlZE5vZGU7ICAvLy9cblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IG5ldyBEaXJlY3RseVJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID09PSBydWxlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cblxuZnVuY3Rpb24gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSA9PT0gcnVsZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RseVJlZHVjZWRSdWxlIiwiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGlzYWxsb3dJc29sYXRlZCIsImRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJzbGljZSIsImZvckVhY2giLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImdldERlZmluaXRpb24iLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJFcnJvciIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiRGlyZWN0bHlSZWR1Y2VkTm9kZSIsIlJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSIsImdldFJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWFRQSxtQkFBbUI7Ozs0QkFYbkIsZUFBZTt5QkFDTCxXQUFXOzZEQUVWLDZCQUE2Qjs4REFDakIseUNBQXlDOytEQUN2QywyQ0FBMkM7d0JBRXJDLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUsSUFBTSxBQUFFQyxJQUFJLEdBQUtDLFVBQWMsZUFBQSxDQUF2QkQsSUFBSSxBQUFtQixBQUFDO0FBRWpCLElBQUEsQUFBTUQsbUJBQW1CLGlCQXFEckMsQUFyRFk7OzthQUFNQSxtQkFBbUI7Ozs7OztZQUMvQkcsR0FBbUMsRUFBbkNBLHFDQUFtQzttQkFBMUMsU0FBT0EsbUNBQW1DLENBQUNDLElBQUksRUFBRUMsd0JBQXdCLEVBQTJCO29CQUF6QkMsZ0JBQWdCLEdBQWhCQSwrQ0FBdUIsa0JBQUosSUFBSTtnQkFDaEcsSUFBSUMsbUJBQW1CLEdBQUcsSUFBSSxBQUFDO2dCQUUvQixJQUFNQyxnQ0FBZ0MsR0FBR0Msb0NBQW9DLENBQUNMLElBQUksRUFBRUMsd0JBQXdCLENBQUMsRUFDdkdLLGtDQUFrQyxHQUFHQyxzQ0FBc0MsQ0FBQ1AsSUFBSSxFQUFFQyx3QkFBd0IsQ0FBQyxBQUFDO2dCQUVsSCxJQUFJ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