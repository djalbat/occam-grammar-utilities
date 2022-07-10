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
var _reduced = /*#__PURE__*/ _interopRequireDefault(require("../../node/reduced"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive/left/directly"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive/left/indirectly"));
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
            key: "fromRule",
            value: function fromRule(rule) {
                var directlyReducedRule = null;
                var definitions = rule.getDefinitions();
                definitions = find(definitions, function(definition) {
                    var definitionDirectlyLeftRecursiveDefinition = _instanceof(definition, _directly.default), definitionIndirectlyLeftRecursiveDefinition = _instanceof(definition, _indirectly.default);
                    if (!definitionDirectlyLeftRecursiveDefinition && !definitionIndirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength > 0) {
                    var ruleName = rule.getName(), directlyReducedRuleName = (0, _ruleName.directlyReducedRuleNameFromRuleName)(ruleName), name = directlyReducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default; ///
                    directlyReducedRule = new DirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
                }
                return directlyReducedRule;
            }
        }
    ]);
    return DirectlyReducedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBudWxsO1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gJiYgIWRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlOyAgLy8vXG5cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBuZXcgRGlyZWN0bHlSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJmcm9tUnVsZSIsInJ1bGUiLCJkaXJlY3RseVJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBYVFBLG1CQUFtQjs7OzRCQVhuQixlQUFlO3lCQUNMLFdBQVc7NERBRWxCLG9CQUFvQjs2REFDQSwwQ0FBMEM7K0RBQ3hDLDRDQUE0Qzt3QkFFdEMsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RSxJQUFNLEFBQUVDLElBQUksR0FBS0MsVUFBYyxlQUFBLENBQXZCRCxJQUFJLEFBQW1CLEFBQUM7QUFFakIsSUFBQSxBQUFNRCxtQkFBbUIsaUJBQXpCOzs7YUFBTUEsbUJBQW1COzs7Ozs7WUFDL0JHLEdBQVEsRUFBUkEsVUFBUTttQkFBZixTQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRTtnQkFDcEIsSUFBSUMsbUJBQW1CLEdBQUcsSUFBSSxBQUFDO2dCQUUvQixJQUFJQyxXQUFXLEdBQUdGLElBQUksQ0FBQ0csY0FBYyxFQUFFLEFBQUM7Z0JBRXhDRCxXQUFXLEdBQUdMLElBQUksQ0FBQ0ssV0FBVyxFQUFFLFNBQUNFLFVBQVUsRUFBSztvQkFDOUMsSUFBTUMseUNBQXlDLEdBQUlELEFBQVUsV0FBWUUsQ0FBdEJGLFVBQVUsRUFBWUUsU0FBK0IsUUFBQSxDQUFBLEFBQUMsRUFDbkdDLDJDQUEyQyxHQUFJSCxBQUFVLFdBQVlJLENBQXRCSixVQUFVLEVBQVlJLFdBQWlDLFFBQUEsQ0FBQSxBQUFDLEFBQUM7b0JBRTlHLElBQUksQ0FBQ0gseUNBQXlDLElBQUksQ0FBQ0UsMkNBQTJDLEVBQUU7d0JBQzlGLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxJQUFNRSxpQkFBaUIsR0FBR1AsV0FBVyxDQUFDUSxNQUFNLEFBQUM7Z0JBRTdDLElBQUlELGlCQUFpQixHQUFHLENBQUMsRUFBRTtvQkFDekIsSUFBTUUsUUFBUSxHQUFHWCxJQUFJLENBQUNZLE9BQU8sRUFBRSxFQUN6QkMsdUJBQXVCLEdBQUdDLElBQUFBLFNBQW1DLG9DQUFBLEVBQUNILFFBQVEsQ0FBQyxFQUN2RUksSUFBSSxHQUFHRix1QkFBdUIsRUFDOUJHLFNBQVMsR0FBRyxLQUFLLEVBQ2pCQyxlQUFlLEdBQUdDLFFBQVcsUUFBQSxBQUFDLEVBQUUsR0FBRztvQkFFekNqQixtQkFBbUIsR0FBRyxJQUFJTCxtQkFBbUIsQ0FBQ21CLElBQUksRUFBRUMsU0FBUyxFQUFFZCxXQUFXLEVBQUVlLGVBQWUsQ0FBQyxDQUFDO2lCQUM5RjtnQkFFRCxPQUFPaEIsbUJBQW1CLENBQUM7YUFDNUI7Ozs7Q0FDRixDQTdCZ0RrQixhQUFJLEtBQUEsQ0E2QnBEIn0=