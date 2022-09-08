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
            value: function fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, allowIsolated) {
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
                    if (!allowIsolated) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgRGlyZWN0bHlSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZWR1Y2VkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGFsbG93SXNvbGF0ZWQpIHtcbiAgICBsZXQgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IG51bGw7XG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnNsaWNlKDApOyAgLy8vXG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZm9yRWFjaCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICBpbmRleCA9IGRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGlmICghYWxsb3dJc29sYXRlZCkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYXJlIGlzb2xhdGVkIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBuYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBEaXJlY3RseVJlZHVjZWROb2RlOyAgLy8vXG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBuZXcgRGlyZWN0bHlSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJhbGxvd0lzb2xhdGVkIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJzbGljZSIsImZvckVhY2giLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiRXJyb3IiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkRpcmVjdGx5UmVkdWNlZE5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsbUJBQW1COzs7NEJBTm5CLGVBQWU7NkRBRUosNkJBQTZCO3dCQUVULDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxJQUFBLEFBQU1BLG1CQUFtQixpQkFBekI7Y0FBTUEsbUJBQW1COzhCQUFuQkEsbUJBQW1CO2FBQW5CQSxtQkFBbUI7OEJBQW5CQSxtQkFBbUI7OztpQkFBbkJBLG1CQUFtQjs7WUFDL0JDLEdBQW1DLEVBQW5DQSxxQ0FBbUM7bUJBQTFDLFNBQU9BLG1DQUFtQyxDQUFDQyxJQUFJLEVBQUVDLHdCQUF3QixFQUFFQyxhQUFhLEVBQUU7Z0JBQ3hGLElBQUlDLG1CQUFtQixHQUFHLElBQUksQUFBQztnQkFFL0IsSUFBSUMsV0FBVyxHQUFHSixJQUFJLENBQUNLLGNBQWMsRUFBRSxBQUFDO2dCQUV4Q0QsV0FBVyxHQUFHQSxXQUFXLENBQUNFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLEdBQUc7Z0JBRXhDTCx3QkFBd0IsQ0FBQ00sT0FBTyxDQUFDLFNBQUNDLHVCQUF1QixFQUFLO29CQUM1RCxJQUFNQyxVQUFVLEdBQUdELHVCQUF1QixDQUFDRSxhQUFhLEVBQUUsRUFDcERDLEtBQUssR0FBR1AsV0FBVyxDQUFDUSxPQUFPLENBQUNILFVBQVUsQ0FBQyxBQUFDO29CQUU5QyxJQUFJRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQ2QsSUFBTUUsS0FBSyxHQUFHRixLQUFLLEVBQ2JHLFdBQVcsR0FBRyxDQUFDLEFBQUM7d0JBRXRCVixXQUFXLENBQUNXLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFQyxXQUFXLENBQUMsQ0FBQztvQkFDekMsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFNRSxpQkFBaUIsR0FBR1osV0FBVyxDQUFDYSxNQUFNLEFBQUM7Z0JBRTdDLElBQUlELGlCQUFpQixLQUFLLENBQUMsRUFBRTtvQkFDM0IsSUFBSSxDQUFDZCxhQUFhLEVBQUU7d0JBQ2xCLElBQU1nQixRQUFRLEdBQUdsQixJQUFJLENBQUNtQixPQUFPLEVBQUUsQUFBQzt3QkFFaEMsTUFBTSxJQUFJQyxLQUFLLENBQUMsQUFBQyxrREFBZ0QsQ0FBVyxNQUFzRCxDQUEvREYsUUFBUSxFQUFDLHdEQUFzRCxDQUFDLENBQUMsQ0FBQztvQkFDdkksQ0FBQztnQkFDSCxDQUFDO2dCQUVELElBQUlGLGlCQUFpQixHQUFHLENBQUMsRUFBRTtvQkFDekIsSUFBTUUsU0FBUSxHQUFHbEIsSUFBSSxDQUFDbUIsT0FBTyxFQUFFLEVBQ3pCRSx1QkFBdUIsR0FBR0MsSUFBQUEsU0FBbUMsb0NBQUEsRUFBQ0osU0FBUSxDQUFDLEVBQ3ZFSyxJQUFJLEdBQUdGLHVCQUF1QixFQUM5QkcsU0FBUyxHQUFHLEtBQUssRUFDakJDLGVBQWUsR0FBR0MsU0FBbUIsUUFBQSxBQUFDLEVBQUUsR0FBRztvQkFFakR2QixtQkFBbUIsR0FBRyxJQXJDUEwsbUJBQW1CLENBcUNZeUIsSUFBSSxFQUFFQyxTQUFTLEVBQUVwQixXQUFXLEVBQUVxQixlQUFlLENBQUMsQ0FBQztnQkFDL0YsQ0FBQztnQkFFRCxPQUFPdEIsbUJBQW1CLENBQUM7WUFDN0IsQ0FBQzs7O1dBekNrQkwsbUJBQW1CO0NBMEN2QyxDQTFDZ0Q2QixhQUFJLEtBQUEsQ0EwQ3BEIn0=