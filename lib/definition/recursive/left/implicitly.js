"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _types = require("../../../types");
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
var backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var ImplicitlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(ImplicitlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(ImplicitlyLeftRecursiveDefinition);
    function ImplicitlyLeftRecursiveDefinition() {
        _classCallCheck(this, ImplicitlyLeftRecursiveDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(ImplicitlyLeftRecursiveDefinition, null, [
        {
            key: "fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions",
            value: function fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
                var implicitlyLeftRecursiveDefinition = null;
                var leftRecursiveDefinition = findLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions);
                if (leftRecursiveDefinition !== null) {
                    var parts = [], type = _types.IMPLICITLY_LEFT_RECURSIVE_TYPE, ruleName1 = leftRecursiveDefinition.getRuleName(), definition = leftRecursiveDefinition.getDefinition(), recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();
                    implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts, type, ruleName1, definition, recursiveRuleNames, leftRecursiveRuleNames);
                }
                return implicitlyLeftRecursiveDefinition;
            }
        }
    ]);
    return ImplicitlyLeftRecursiveDefinition;
}(_left.default);
function findLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions) {
    var leftRecursiveDefinitions = leftRecursiveDefinitionsFromRecursiveDefinitions(recursiveDefinitions), leftRecursiveDefinition1 = backwardsFind(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var ruleName = leftRecursiveDefinition.getRuleName();
        if (ruleName === leftRecursiveRuleName) {
            return true;
        }
    }) || null;
    return leftRecursiveDefinition1;
}
function leftRecursiveDefinitionsFromRecursiveDefinitions(recursiveDefinitions) {
    var leftRecursiveDefinitions = [];
    backwardsEvery(recursiveDefinitions, function(recursiveDefinition) {
        var recursiveDefinitionLeftRecursiveDefinition = recursiveDefinition.isLeftRecursiveDefinition();
        if (recursiveDefinitionLeftRecursiveDefinition) {
            var leftRecursiveDefinition = recursiveDefinition; ///
            leftRecursiveDefinitions.unshift(leftRecursiveDefinition);
            return true;
        }
    });
    return leftRecursiveDefinitions;
}
exports.default = ImplicitlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2ltcGxpY2l0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzRmluZCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gW10sXG4gICAgICAgICAgICB0eXBlID0gSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKTtcblxuICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGJhY2t3YXJkc0ZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtdO1xuXG4gIGJhY2t3YXJkc0V2ZXJ5KHJlY3Vyc2l2ZURlZmluaXRpb25zLCAocmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb24uaXNMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy51bnNoaWZ0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbImJhY2t3YXJkc0ZpbmQiLCJhcnJheVV0aWxpdGllcyIsImJhY2t3YXJkc0V2ZXJ5IiwiSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsInR5cGUiLCJJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJnZXRSdWxlTmFtZSIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0xlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFTixJQUFBLEtBQW9DLGtDQUFwQyxvQ0FBb0MsRUFBQTtBQUV6QixJQUFBLE1BQWdCLFdBQWhCLGdCQUFnQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQVFBLGFBQWEsR0FBcUJDLFVBQWMsZUFBQSxDQUFoREQsYUFBYSxFQUFFRSxjQUFjLEdBQUtELFVBQWMsZUFBQSxDQUFqQ0MsY0FBYyxBQUFvQjtBQUUxQyxJQUFBLEFBQU1DLGlDQUFpQyxpQkFxQm5ELEFBckJZOzs7YUFBTUEsaUNBQWlDOzs7Ozs7WUFDN0NDLEdBQXdELEVBQXhEQSwwREFBd0Q7bUJBQS9ELFNBQU9BLHdEQUF3RCxDQUFDQyxRQUFRLEVBQUVDLHFCQUFxQixFQUFFQyxvQkFBb0IsRUFBRTtnQkFDckgsSUFBSUMsaUNBQWlDLEdBQUcsSUFBSSxBQUFDO2dCQUU3QyxJQUFNQyx1QkFBdUIsR0FBR0MsMkJBQTJCLENBQUNKLHFCQUFxQixFQUFFQyxvQkFBb0IsQ0FBQyxBQUFDO2dCQUV6RyxJQUFJRSx1QkFBdUIsS0FBSyxJQUFJLEVBQUU7b0JBQ3BDLElBQU1FLEtBQUssR0FBRyxFQUFFLEVBQ1ZDLElBQUksR0FBR0MsTUFBOEIsK0JBQUEsRUFDckNSLFNBQVEsR0FBR0ksdUJBQXVCLENBQUNLLFdBQVcsRUFBRSxFQUNoREMsVUFBVSxHQUFHTix1QkFBdUIsQ0FBQ08sYUFBYSxFQUFFLEVBQ3BEQyxrQkFBa0IsR0FBR1IsdUJBQXVCLENBQUNTLHFCQUFxQixFQUFFLEVBQ3BFQyxzQkFBc0IsR0FBR1YsdUJBQXVCLENBQUNXLHlCQUF5QixFQUFFLEFBQUM7b0JBRW5GWixpQ0FBaUMsR0FBRyxJQUFJTCxpQ0FBaUMsQ0FBQ1EsS0FBSyxFQUFFQyxJQUFJLEVBQUVQLFNBQVEsRUFBRVUsVUFBVSxFQUFFRSxrQkFBa0IsRUFBRUUsc0JBQXNCLENBQUMsQ0FBQztpQkFDMUo7Z0JBRUQsT0FBT1gsaUNBQWlDLENBQUM7YUFDMUM7Ozs7Q0FDRixDQW5COERhLEtBQXVCLFFBQUEsQ0FtQnJGO0FBRUQsU0FBU1gsMkJBQTJCLENBQUNKLHFCQUFxQixFQUFFQyxvQkFBb0IsRUFBRTtJQUNoRixJQUFNZSx3QkFBd0IsR0FBR0MsZ0RBQWdELENBQUNoQixvQkFBb0IsQ0FBQyxFQUNqR0Usd0JBQXVCLEdBQUdULGFBQWEsQ0FBQ3NCLHdCQUF3QixFQUFFLFNBQUNiLHVCQUF1QixFQUFLO1FBQzdGLElBQU1KLFFBQVEsR0FBR0ksdUJBQXVCLENBQUNLLFdBQVcsRUFBRSxBQUFDO1FBRXZELElBQUlULFFBQVEsS0FBS0MscUJBQXFCLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsSUFBSSxJQUFJLEFBQUM7SUFFakIsT0FBT0csd0JBQXVCLENBQUM7Q0FDaEM7QUFFRCxTQUFTYyxnREFBZ0QsQ0FBQ2hCLG9CQUFvQixFQUFFO0lBQzlFLElBQU1lLHdCQUF3QixHQUFHLEVBQUUsQUFBQztJQUVwQ3BCLGNBQWMsQ0FBQ0ssb0JBQW9CLEVBQUUsU0FBQ2lCLG1CQUFtQixFQUFLO1FBQzVELElBQU1DLDBDQUEwQyxHQUFHRCxtQkFBbUIsQ0FBQ0UseUJBQXlCLEVBQUUsQUFBQztRQUVuRyxJQUFJRCwwQ0FBMEMsRUFBRTtZQUM5QyxJQUFNaEIsdUJBQXVCLEdBQUdlLG1CQUFtQixBQUFDLEVBQUUsR0FBRztZQUV6REYsd0JBQXdCLENBQUNLLE9BQU8sQ0FBQ2xCLHVCQUF1QixDQUFDLENBQUM7WUFFMUQsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU9hLHdCQUF3QixDQUFDO0NBQ2pDO2tCQWxEb0JuQixpQ0FBaUMifQ==