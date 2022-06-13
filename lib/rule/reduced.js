"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _left = _interopRequireDefault(require("../definition/recursive/left"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var ReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(ReducedRule, Rule);
    var _super = _createSuper(ReducedRule);
    function ReducedRule() {
        _classCallCheck(this, ReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(ReducedRule, null, [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var reducedRule = null;
                var definitions = rule.getDefinitions(), nonLeftRecursiveDefinitions = [];
                backwardsForEach(definitions, function(definition, index) {
                    var definitionLeftRecursiveDefinition = (0, _class).isInstanceOf(definition, _left.default);
                    if (!definitionLeftRecursiveDefinition) {
                        var nonLeftRecursiveDefinition = definition; ///
                        nonLeftRecursiveDefinitions.unshift(nonLeftRecursiveDefinition);
                        rule.removeDefinition(definition);
                    }
                });
                var nonLeftRecursiveDefinitionsLength = nonLeftRecursiveDefinitions.length;
                if (nonLeftRecursiveDefinitionsLength > 0) {
                    var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), name = reducedRuleName, ambiguous = false, definitions1 = nonLeftRecursiveDefinitions, NonTerminalNode = _reduced.default; ///
                    reducedRule = new ReducedRule(name, ambiguous, definitions1, NonTerminalNode);
                }
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgaXNJbnN0YW5jZU9mIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jbGFzc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCByZWR1Y2VkUnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbXTtcblxuICAgIGJhY2t3YXJkc0ZvckVhY2goZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uOyAvLy9cblxuICAgICAgICBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgcnVsZS5yZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG5hbWUgPSByZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgICBkZWZpbml0aW9ucyA9IG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgIC8vL1xuICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGU7ICAvLy9cblxuICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiYmFja3dhcmRzRm9yRWFjaCIsImFycmF5VXRpbGl0aWVzIiwiUmVkdWNlZFJ1bGUiLCJmcm9tUnVsZSIsInJ1bGUiLCJyZWR1Y2VkUnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiaW5kZXgiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0luc3RhbmNlT2YiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIm5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidW5zaGlmdCIsInJlbW92ZURlZmluaXRpb24iLCJub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVEsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBQ0wsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWxCLElBQUEsUUFBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBQ0wsSUFBQSxLQUE4QixrQ0FBOUIsOEJBQThCLEVBQUE7QUFFckMsSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTtBQUNMLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBTSxBQUFFQSxnQkFBZ0IsR0FBS0MsVUFBYyxlQUFBLENBQW5DRCxnQkFBZ0IsQUFBbUIsQUFBQztBQUU3QixJQUFBLEFBQU1FLFdBQVcsaUJBQWpCOzs7YUFBTUEsV0FBVzs7Ozs7O1lBQ3ZCQyxHQUFRLEVBQVJBLFVBQVE7bUJBQWYsU0FBT0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7Z0JBQ3BCLElBQUlDLFdBQVcsR0FBRyxJQUFJLEFBQUM7Z0JBRXZCLElBQU1DLFdBQVcsR0FBR0YsSUFBSSxDQUFDRyxjQUFjLEVBQUUsRUFDbkNDLDJCQUEyQixHQUFHLEVBQUUsQUFBQztnQkFFdkNSLGdCQUFnQixDQUFDTSxXQUFXLEVBQUUsU0FBQ0csVUFBVSxFQUFFQyxLQUFLLEVBQUs7b0JBQ25ELElBQU1DLGlDQUFpQyxHQUFHQyxDQUFBQSxHQUFBQSxNQUFZLEFBQXFDLENBQUEsYUFBckMsQ0FBQ0gsVUFBVSxFQUFFSSxLQUF1QixRQUFBLENBQUMsQUFBQztvQkFFNUYsSUFBSSxDQUFDRixpQ0FBaUMsRUFBRTt3QkFDdEMsSUFBTUcsMEJBQTBCLEdBQUdMLFVBQVUsQUFBQyxFQUFDLEdBQUc7d0JBRWxERCwyQkFBMkIsQ0FBQ08sT0FBTyxDQUFDRCwwQkFBMEIsQ0FBQyxDQUFDO3dCQUVoRVYsSUFBSSxDQUFDWSxnQkFBZ0IsQ0FBQ1AsVUFBVSxDQUFDLENBQUM7cUJBQ25DO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxJQUFNUSxpQ0FBaUMsR0FBR1QsMkJBQTJCLENBQUNVLE1BQU0sQUFBQztnQkFFN0UsSUFBSUQsaUNBQWlDLEdBQUcsQ0FBQyxFQUFFO29CQUN6QyxJQUFNRSxRQUFRLEdBQUdmLElBQUksQ0FBQ2dCLE9BQU8sRUFBRSxFQUN6QkMsZUFBZSxHQUFHQyxDQUFBQSxHQUFBQSxTQUEyQixBQUFVLENBQUEsNEJBQVYsQ0FBQ0gsUUFBUSxDQUFDLEVBQ3ZESSxJQUFJLEdBQUdGLGVBQWUsRUFDdEJHLFNBQVMsR0FBRyxLQUFLLEVBQ2pCbEIsWUFBVyxHQUFHRSwyQkFBMkIsRUFDekNpQixlQUFlLEdBQUdDLFFBQVcsUUFBQSxBQUFDLEVBQUUsR0FBRztvQkFFekNyQixXQUFXLEdBQUcsSUFBSUgsV0FBVyxDQUFDcUIsSUFBSSxFQUFFQyxTQUFTLEVBQUVsQixZQUFXLEVBQUVtQixlQUFlLENBQUMsQ0FBQztpQkFDOUU7Z0JBRUQsT0FBT3BCLFdBQVcsQ0FBQzthQUNwQjs7OztDQUNGLENBbEN3Q3NCLGFBQUksS0FBQSxDQWtDNUM7a0JBbENvQnpCLFdBQVcifQ==