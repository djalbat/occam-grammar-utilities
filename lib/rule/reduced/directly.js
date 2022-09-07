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
            key: "fromRuleAndLeftRecursiveDefinitions",
            value: function fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, disallowIsolated) {
                var directlyReducedRule = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgRGlyZWN0bHlSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZWR1Y2VkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGRpc2FsbG93SXNvbGF0ZWQpIHtcbiAgICBsZXQgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IG51bGw7XG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnNsaWNlKDApOyAgLy8vXG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZm9yRWFjaCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICBpbmRleCA9IGRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChkaXNhbGxvd0lzb2xhdGVkKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBhcmUgaXNvbGF0ZWQgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IERpcmVjdGx5UmVkdWNlZE5vZGU7ICAvLy9cblxuICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IG5ldyBEaXJlY3RseVJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlSZWR1Y2VkUnVsZSIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpc2FsbG93SXNvbGF0ZWQiLCJkaXJlY3RseVJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInNsaWNlIiwiZm9yRWFjaCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImdldERlZmluaXRpb24iLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJFcnJvciIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiRGlyZWN0bHlSZWR1Y2VkTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVFRQSxtQkFBbUI7Ozs0QkFObkIsZUFBZTs2REFFSiw2QkFBNkI7d0JBRVQsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEsbUJBQW1CLGlCQUF6QjtjQUFNQSxtQkFBbUI7OEJBQW5CQSxtQkFBbUI7YUFBbkJBLG1CQUFtQjs4QkFBbkJBLG1CQUFtQjs7O2lCQUFuQkEsbUJBQW1COztZQUMvQkMsR0FBbUMsRUFBbkNBLHFDQUFtQzttQkFBMUMsU0FBT0EsbUNBQW1DLENBQUNDLElBQUksRUFBRUMsd0JBQXdCLEVBQUVDLGdCQUFnQixFQUFFO2dCQUMzRixJQUFJQyxtQkFBbUIsR0FBRyxJQUFJLEFBQUM7Z0JBRS9CLElBQUlDLFdBQVcsR0FBR0osSUFBSSxDQUFDSyxjQUFjLEVBQUUsQUFBQztnQkFFeENELFdBQVcsR0FBR0EsV0FBVyxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxHQUFHO2dCQUV4Q0wsd0JBQXdCLENBQUNNLE9BQU8sQ0FBQyxTQUFDQyx1QkFBdUIsRUFBSztvQkFDNUQsSUFBTUMsVUFBVSxHQUFHRCx1QkFBdUIsQ0FBQ0UsYUFBYSxFQUFFLEVBQ3BEQyxLQUFLLEdBQUdQLFdBQVcsQ0FBQ1EsT0FBTyxDQUFDSCxVQUFVLENBQUMsQUFBQztvQkFFOUMsSUFBSUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNkLElBQU1FLEtBQUssR0FBR0YsS0FBSyxFQUNiRyxXQUFXLEdBQUcsQ0FBQyxBQUFDO3dCQUV0QlYsV0FBVyxDQUFDVyxNQUFNLENBQUNGLEtBQUssRUFBRUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBTUUsaUJBQWlCLEdBQUdaLFdBQVcsQ0FBQ2EsTUFBTSxBQUFDO2dCQUU3QyxJQUFJRCxpQkFBaUIsS0FBSyxDQUFDLEVBQUU7b0JBQzNCLElBQUlkLGdCQUFnQixFQUFFO3dCQUNwQixJQUFNZ0IsUUFBUSxHQUFHbEIsSUFBSSxDQUFDbUIsT0FBTyxFQUFFLEFBQUM7d0JBRWhDLE1BQU0sSUFBSUMsS0FBSyxDQUFDLEFBQUMsa0RBQWdELENBQVcsTUFBc0QsQ0FBL0RGLFFBQVEsRUFBQyx3REFBc0QsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZJLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxJQUFJRixpQkFBaUIsR0FBRyxDQUFDLEVBQUU7b0JBQ3pCLElBQU1FLFNBQVEsR0FBR2xCLElBQUksQ0FBQ21CLE9BQU8sRUFBRSxFQUN6QkUsdUJBQXVCLEdBQUdDLElBQUFBLFNBQW1DLG9DQUFBLEVBQUNKLFNBQVEsQ0FBQyxFQUN2RUssSUFBSSxHQUFHRix1QkFBdUIsRUFDOUJHLFNBQVMsR0FBRyxLQUFLLEVBQ2pCQyxlQUFlLEdBQUdDLFNBQW1CLFFBQUEsQUFBQyxFQUFFLEdBQUc7b0JBRWpEdkIsbUJBQW1CLEdBQUcsSUFyQ1BMLG1CQUFtQixDQXFDWXlCLElBQUksRUFBRUMsU0FBUyxFQUFFcEIsV0FBVyxFQUFFcUIsZUFBZSxDQUFDLENBQUM7Z0JBQy9GLENBQUM7Z0JBRUQsT0FBT3RCLG1CQUFtQixDQUFDO1lBQzdCLENBQUM7OztXQXpDa0JMLG1CQUFtQjtDQTBDdkMsQ0ExQ2dENkIsYUFBSSxLQUFBLENBMENwRCJ9