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
                    var type = _types.IMPLICITLY_LEFT_RECURSIVE_TYPE, parts = leftRecursiveDefinition.getParts(), ruleName1 = leftRecursiveDefinition.getRuleName(), definition = leftRecursiveDefinition.getDefinition(), recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2ltcGxpY2l0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzRmluZCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpO1xuXG4gICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gYmFja3dhcmRzRmluZChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gW107XG5cbiAgYmFja3dhcmRzRXZlcnkocmVjdXJzaXZlRGVmaW5pdGlvbnMsIChyZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5pc0xlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCk7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnVuc2hpZnQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiYmFja3dhcmRzRmluZCIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzRXZlcnkiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJwYXJ0cyIsImdldFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaXNMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRU4sSUFBQSxLQUFvQyxrQ0FBcEMsb0NBQW9DLEVBQUE7QUFFekIsSUFBQSxNQUFnQixXQUFoQixnQkFBZ0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxJQUFRQSxhQUFhLEdBQXFCQyxVQUFjLGVBQUEsQ0FBaERELGFBQWEsRUFBRUUsY0FBYyxHQUFLRCxVQUFjLGVBQUEsQ0FBakNDLGNBQWMsQUFBb0I7QUFFMUMsSUFBQSxBQUFNQyxpQ0FBaUMsaUJBcUJuRCxBQXJCWTs7O2FBQU1BLGlDQUFpQzs7Ozs7O1lBQzdDQyxHQUF3RCxFQUF4REEsMERBQXdEO21CQUEvRCxTQUFPQSx3REFBd0QsQ0FBQ0MsUUFBUSxFQUFFQyxxQkFBcUIsRUFBRUMsb0JBQW9CLEVBQUU7Z0JBQ3JILElBQUlDLGlDQUFpQyxHQUFHLElBQUksQUFBQztnQkFFN0MsSUFBTUMsdUJBQXVCLEdBQUdDLDJCQUEyQixDQUFDSixxQkFBcUIsRUFBRUMsb0JBQW9CLENBQUMsQUFBQztnQkFFekcsSUFBSUUsdUJBQXVCLEtBQUssSUFBSSxFQUFFO29CQUNwQyxJQUFNRSxJQUFJLEdBQUdDLE1BQThCLCtCQUFBLEVBQ3JDQyxLQUFLLEdBQUdKLHVCQUF1QixDQUFDSyxRQUFRLEVBQUUsRUFDMUNULFNBQVEsR0FBR0ksdUJBQXVCLENBQUNNLFdBQVcsRUFBRSxFQUNoREMsVUFBVSxHQUFHUCx1QkFBdUIsQ0FBQ1EsYUFBYSxFQUFFLEVBQ3BEQyxrQkFBa0IsR0FBR1QsdUJBQXVCLENBQUNVLHFCQUFxQixFQUFFLEVBQ3BFQyxzQkFBc0IsR0FBR1gsdUJBQXVCLENBQUNZLHlCQUF5QixFQUFFLEFBQUM7b0JBRW5GYixpQ0FBaUMsR0FBRyxJQUFJTCxpQ0FBaUMsQ0FBQ1UsS0FBSyxFQUFFRixJQUFJLEVBQUVOLFNBQVEsRUFBRVcsVUFBVSxFQUFFRSxrQkFBa0IsRUFBRUUsc0JBQXNCLENBQUMsQ0FBQztpQkFDMUo7Z0JBRUQsT0FBT1osaUNBQWlDLENBQUM7YUFDMUM7Ozs7Q0FDRixDQW5COERjLEtBQXVCLFFBQUEsQ0FtQnJGO0FBRUQsU0FBU1osMkJBQTJCLENBQUNKLHFCQUFxQixFQUFFQyxvQkFBb0IsRUFBRTtJQUNoRixJQUFNZ0Isd0JBQXdCLEdBQUdDLGdEQUFnRCxDQUFDakIsb0JBQW9CLENBQUMsRUFDakdFLHdCQUF1QixHQUFHVCxhQUFhLENBQUN1Qix3QkFBd0IsRUFBRSxTQUFDZCx1QkFBdUIsRUFBSztRQUM3RixJQUFNSixRQUFRLEdBQUdJLHVCQUF1QixDQUFDTSxXQUFXLEVBQUUsQUFBQztRQUV2RCxJQUFJVixRQUFRLEtBQUtDLHFCQUFxQixFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRixDQUFDLElBQUksSUFBSSxBQUFDO0lBRWpCLE9BQU9HLHdCQUF1QixDQUFDO0NBQ2hDO0FBRUQsU0FBU2UsZ0RBQWdELENBQUNqQixvQkFBb0IsRUFBRTtJQUM5RSxJQUFNZ0Isd0JBQXdCLEdBQUcsRUFBRSxBQUFDO0lBRXBDckIsY0FBYyxDQUFDSyxvQkFBb0IsRUFBRSxTQUFDa0IsbUJBQW1CLEVBQUs7UUFDNUQsSUFBTUMsMENBQTBDLEdBQUdELG1CQUFtQixDQUFDRSx5QkFBeUIsRUFBRSxBQUFDO1FBRW5HLElBQUlELDBDQUEwQyxFQUFFO1lBQzlDLElBQU1qQix1QkFBdUIsR0FBR2dCLG1CQUFtQixBQUFDLEVBQUUsR0FBRztZQUV6REYsd0JBQXdCLENBQUNLLE9BQU8sQ0FBQ25CLHVCQUF1QixDQUFDLENBQUM7WUFFMUQsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU9jLHdCQUF3QixDQUFDO0NBQ2pDO2tCQWxEb0JwQixpQ0FBaUMifQ==