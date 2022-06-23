"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _recursive = _interopRequireDefault(require("../../definition/recursive"));
var _part = require("../../utilities/part");
var _ruleName = require("../../utilities/ruleName");
var _parts = require("../../utilities/parts");
var _definition = require("../../utilities/definition");
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
var LeftRecursiveDefinition = /*#__PURE__*/ function(RecursiveDefinition) {
    _inherits(LeftRecursiveDefinition, RecursiveDefinition);
    var _super = _createSuper(LeftRecursiveDefinition);
    function LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames) {
        _classCallCheck(this, LeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, parts, ruleName, recursiveRuleNames);
        _this.leftRecursiveRuleNames = leftRecursiveRuleNames;
        return _this;
    }
    _createClass(LeftRecursiveDefinition, [
        {
            key: "getLeftRecursiveRuleNames",
            value: function getLeftRecursiveRuleNames() {
                return this.leftRecursiveRuleNames;
            }
        }
    ], [
        {
            key: "fromReducedRule",
            value: function fromReducedRule(reducedRule) {
                var reducedRuleName = reducedRule.getName(), reducedRuleNamePart = (0, _part).ruleNamePartFromRuleName(reducedRuleName), parts = [
                    reducedRuleNamePart
                ], ruleName = (0, _ruleName).ruleNameFromReducedRuleName(reducedRuleName), recursiveRuleNames = (0, _parts).recursiveRuleNamesFromParts(parts), leftRecursiveRuleNames = (0, _parts).leftRecursiveRuleNamesFromParts(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromRecursiveDefinition",
            value: function fromRecursiveDefinition(recursiveDefinition) {
                var leftRecursiveDefinition = null;
                var recursiveDefinitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(recursiveDefinition);
                if (recursiveDefinitionLeftRecursive) {
                    var parts = recursiveDefinition.getParts(), ruleName = recursiveDefinition.getRuleName(), recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(recursiveDefinition);
                    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                }
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var leftRecursiveDefinition = null;
                var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, definitionLeftRecursiveDefinition = leftRecursiveRuleNamesLength > 0;
                if (definitionLeftRecursiveDefinition) {
                    var parts = definition.getParts(), recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                }
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinition;
}(_recursive.default);
exports.default = LeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlZFJ1bGUocmVkdWNlZFJ1bGUpIHtcbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlY3Vyc2l2ZURlZmluaXRpb24ocmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUocmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihyZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZnJvbVJlZHVjZWRSdWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImdldFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFbUIsSUFBQSxVQUE0QixrQ0FBNUIsNEJBQTRCLEVBQUE7QUFFbkIsSUFBQSxLQUFzQixXQUF0QixzQkFBc0IsQ0FBQTtBQUNuQixJQUFBLFNBQTBCLFdBQTFCLDBCQUEwQixDQUFBO0FBQ08sSUFBQSxNQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTtBQUNjLElBQUEsV0FBNEIsV0FBNUIsNEJBQTRCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0gsSUFBQSxBQUFNQSx1QkFBdUIsaUJBQTdCOzs7YUFBTUEsdUJBQXVCLENBQzlCQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQjs7O2tDQUMvREgsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFO1FBRTNDLE1BQUtDLHNCQUFzQixHQUFHQSxzQkFBc0IsQ0FBQzs7Ozs7WUFHdkRDLEdBQXlCLEVBQXpCQSwyQkFBeUI7bUJBQXpCQSxTQUFBQSx5QkFBeUIsR0FBRztnQkFDMUIsT0FBTyxJQUFJLENBQUNELHNCQUFzQixDQUFDO2FBQ3BDOzs7O1lBRU1FLEdBQWUsRUFBZkEsaUJBQWU7bUJBQXRCLFNBQU9BLGVBQWUsQ0FBQ0MsV0FBVyxFQUFFO2dCQUNsQyxJQUFNQyxlQUFlLEdBQUdELFdBQVcsQ0FBQ0UsT0FBTyxFQUFFLEVBQ3ZDQyxtQkFBbUIsR0FBR0MsQ0FBQUEsR0FBQUEsS0FBd0IsQUFBaUIsQ0FBQSx5QkFBakIsQ0FBQ0gsZUFBZSxDQUFDLEVBQy9EUCxLQUFLLEdBQUc7b0JBQ05T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