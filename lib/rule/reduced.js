"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _definition = require("../utilities/definition");
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
    _createClass(ReducedRule, [
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var _this = this;
                var name = this.getName(), reducedRuleName = name, ruleName = (0, _ruleName).ruleNameFromReducedRuleName(reducedRuleName), rule = ruleMap[ruleName], definitions = rule.getDefinitions(), nonLeftRecursiveDefinitions = [];
                backwardsForEach(definitions, function(definition, index) {
                    var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                    if (!definitionLeftRecursive) {
                        var start = index, deleteCount = 1;
                        definitions.splice(start, deleteCount);
                        var nonLeftRecursiveDefinition = definition; ///
                        nonLeftRecursiveDefinitions.unshift(nonLeftRecursiveDefinition);
                    }
                });
                nonLeftRecursiveDefinitions.forEach(function(nonLeftRecursiveDefinition) {
                    var definition = nonLeftRecursiveDefinition; ///
                    _this.addDefinition(definition);
                });
            }
        }
    ], [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), name = reducedRuleName, ambiguous = false, definitions = [], NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5cbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICByZXdyaXRlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gW107XG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKVxuXG4gICAgICBpZiAoIWRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBkZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb247IC8vL1xuXG4gICAgICAgIG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy51bnNoaWZ0KG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5mb3JFYWNoKChub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAvLy9cblxuICAgICAgdGhpcy5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiYmFja3dhcmRzRm9yRWFjaCIsImFycmF5VXRpbGl0aWVzIiwiUmVkdWNlZFJ1bGUiLCJyZXdyaXRlIiwicnVsZU1hcCIsIm5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsIm5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJpbmRleCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInVuc2hpZnQiLCJmb3JFYWNoIiwiYWRkRGVmaW5pdGlvbiIsImZyb21SdWxlIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUSxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDTCxJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFbEIsSUFBQSxRQUFpQixrQ0FBakIsaUJBQWlCLEVBQUE7QUFFQyxJQUFBLFdBQXlCLFdBQXpCLHlCQUF5QixDQUFBO0FBQ00sSUFBQSxTQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRyxJQUFNLEFBQUVBLGdCQUFnQixHQUFLQyxVQUFjLGVBQUEsQ0FBbkNELGdCQUFnQixBQUFtQixBQUFDO0FBRTdCLElBQUEsQUFBTUUsV0FBVyxpQkFBakI7OzthQUFNQSxXQUFXOzs7Ozs7WUFDOUJDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQyxPQUFPLEVBQUU7O2dCQUNmLElBQU1DLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUNyQkMsZUFBZSxHQUFHRixJQUFJLEVBQ3RCRyxRQUFRLEdBQUdDLENBQUFBLEdBQUFBLFNBQTJCLEFBQWlCLENBQUEsNEJBQWpCLENBQUNGLGVBQWUsQ0FBQyxFQUN2REcsSUFBSSxHQUFHTixPQUFPLENBQUNJLFFBQVEsQ0FBQyxFQUN4QkcsV0FBVyxHQUFHRCxJQUFJLENBQUNFLGNBQWMsRUFBRSxFQUNuQ0MsMkJBQTJCLEdBQUcsRUFBRSxBQUFDO2dCQUV2Q2IsZ0JBQWdCLENBQUNXLFdBQVcsRUFBRSxTQUFDRyxVQUFVLEVBQUVDLEtBQUssRUFBSztvQkFDbkQsSUFBTUMsdUJBQXVCLEdBQUdDLENBQUFBLEdBQUFBLFdBQXlCLEFBQVksQ0FBQSwwQkFBWixDQUFDSCxVQUFVLENBQUM7b0JBRXJFLElBQUksQ0FBQ0UsdUJBQXVCLEVBQUU7d0JBQzVCLElBQU1FLEtBQUssR0FBR0gsS0FBSyxFQUNiSSxXQUFXLEdBQUcsQ0FBQyxBQUFDO3dCQUV0QlIsV0FBVyxDQUFDUyxNQUFNLENBQUNGLEtBQUssRUFBRUMsV0FBVyxDQUFDLENBQUM7d0JBRXZDLElBQU1FLDBCQUEwQixHQUFHUCxVQUFVLEFBQUMsRUFBQyxHQUFHO3dCQUVsREQsMkJBQTJCLENBQUNTLE9BQU8sQ0FBQ0QsMEJBQTBCLENBQUMsQ0FBQztxQkFDakU7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVIUiwyQkFBMkIsQ0FBQ1UsT0FBTyxDQUFDLFNBQUNGLDBCQUEwQixFQUFLO29CQUNsRSxJQUFNUCxVQUFVLEdBQUdPLDBCQUEwQixBQUFDLEVBQUMsR0FBRztvQkFFbEQsTUFBS0csYUFBYSxDQUFDVixVQUFVLENBQUMsQ0FBQztpQkFDaEMsQ0FBQyxDQUFDO2FBQ0o7Ozs7WUFFTVcsR0FBUSxFQUFSQSxVQUFRO21CQUFmLFNBQU9BLFFBQVEsQ0FBQ2YsSUFBSSxFQUFFO2dCQUNwQixJQUFNRixRQUFRLEdBQUdFLElBQUksQ0FBQ0osT0FBTyxFQUFFLEVBQ3pCQyxlQUFlLEdBQUdtQixDQUFBQSxHQUFBQSxTQUEyQixBQUFVLENBQUEsNEJBQVYsQ0FBQ2xCLFFBQVEsQ0FBQyxFQUN2REgsSUFBSSxHQUFHRSxlQUFlLEVBQ3RCb0IsU0FBUyxHQUFHLEtBQUssRUFDakJoQixXQUFXLEdBQUcsRUFBRSxFQUNoQmlCLGVBQWUsR0FBR0MsUUFBVyxRQUFBLEVBQzdCQyxXQUFXLEdBQUcsSUFBSTVCLFdBQVcsQ0FBQ0csSUFBSSxFQUFFc0IsU0FBUyxFQUFFaEIsV0FBVyxFQUFFaUIsZUFBZSxDQUFDLEFBQUM7Z0JBRW5GLE9BQU9FLFdBQVcsQ0FBQzthQUNwQjs7OztDQUNGLENBMUN3Q0MsYUFBSSxLQUFBLENBMEM1QztrQkExQ29CN0IsV0FBVyJ9