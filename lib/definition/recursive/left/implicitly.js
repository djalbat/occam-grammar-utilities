"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _definition = require("../../../utilities/definition");
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
var backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var ImplicitlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(ImplicitlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(ImplicitlyLeftRecursiveDefinition);
    function ImplicitlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition) {
        _classCallCheck(this, ImplicitlyLeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
        _this.leftRecursiveDefinition = leftRecursiveDefinition;
        return _this;
    }
    _createClass(ImplicitlyLeftRecursiveDefinition, [
        {
            key: "getLeftRecursiveDefinition",
            value: function getLeftRecursiveDefinition() {
                return this.leftRecursiveDefinition;
            }
        }
    ], [
        {
            key: "fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions",
            value: function fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
                var implicitlyLeftRecursiveDefinition = null;
                var leftRecursiveDefinition = findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions);
                if (leftRecursiveDefinition !== null) {
                    var leftRecursiveDefinitionImplicitlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, ImplicitlyLeftRecursiveDefinition);
                    if (leftRecursiveDefinitionImplicitlyLeftRecursiveDefinition) {
                        implicitlyLeftRecursiveDefinition = leftRecursiveDefinition; ///
                    } else {
                        var definition = leftRecursiveDefinition, definitionComplex = (0, _definition).isDefinitionComplex(definition);
                        if (definitionComplex) {
                            var definitionString = definition.asString();
                            throw new Error("The '".concat(definitionString, "' implicitly left recursive definition of the '").concat(_$ruleName, "' rule is complex and therefore cannot be rewritten."));
                        }
                        var parts = leftRecursiveDefinition.getParts(), _$ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();
                        implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts, _$ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition);
                    }
                }
                return implicitlyLeftRecursiveDefinition;
            }
        }
    ]);
    return ImplicitlyLeftRecursiveDefinition;
}(_left.default);
function findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
    var leftRecursiveDefinitions = findLeftRecursiveDefinitions(recursiveDefinitions), leftRecursiveDefinition = backwardsFind(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var ruleName = leftRecursiveDefinition.getRuleName();
        if (ruleName === leftRecursiveRuleName) {
            return true;
        }
    }) || null;
    return leftRecursiveDefinition;
}
function findLeftRecursiveDefinitions(recursiveDefinitions) {
    var leftRecursiveDefinitions = [];
    backwardsEvery(recursiveDefinitions, function(recursiveDefinition) {
        var recursiveDefinitionLeftRecursiveDefinition = _instanceof(recursiveDefinition, _left.default);
        if (recursiveDefinitionLeftRecursiveDefinition) {
            var leftRecursiveDefinition = recursiveDefinition; ///
            leftRecursiveDefinitions.unshift(leftRecursiveDefinition);
            return true;
        }
    });
    return leftRecursiveDefinitions;
}
exports.default = ImplicitlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2ltcGxpY2l0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc0ZpbmQsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW1wbGljaXRseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCk7XG5cbiAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGJhY2t3YXJkc0ZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbXTtcblxuICBiYWNrd2FyZHNFdmVyeShyZWN1cnNpdmVEZWZpbml0aW9ucywgKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJiYWNrd2FyZHNGaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNFdmVyeSIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwicnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImdldFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRU4sSUFBQSxLQUFvQyxrQ0FBcEMsb0NBQW9DLEVBQUE7QUFFcEMsSUFBQSxXQUErQixXQUEvQiwrQkFBK0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBUUEsYUFBYSxHQUFxQkMsVUFBYyxlQUFBLENBQWhERCxhQUFhLEVBQUVFLGNBQWMsR0FBS0QsVUFBYyxlQUFBLENBQWpDQyxjQUFjLEFBQW9CO0FBRTFDLElBQUEsQUFBTUMsaUNBQWlDLGlCQTRDbkQsQUE1Q1k7OzthQUFNQSxpQ0FBaUMsQ0FDeENDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLEVBQUVDLHVCQUF1Qjs7O2tDQUN4RkosS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsRUFBRTtRQUVuRSxNQUFLQyx1QkFBdUIsR0FBR0EsdUJBQXVCLENBQUM7Ozs7O1lBR3pEQyxHQUEwQixFQUExQkEsNEJBQTBCO21CQUExQkEsU0FBQUEsMEJBQTBCLEdBQUc7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDRCx1QkFBdUIsQ0FBQzthQUNyQzs7OztZQUVNRSxHQUF3RCxFQUF4REEsMERBQXdEO21CQUEvRCxTQUFPQSx3REFBd0QsQ0FBQ0wsUUFBUSxFQUFFTSxxQkFBcUIsRUFBRUMsb0JBQW9CLEVBQUU7Z0JBQ3JILElBQUlDLGlDQUFpQyxHQUFHLElBQUksQUFBQztnQkFFN0MsSUFBTUwsdUJBQXVCLEdBQUdNLDJCQUEyQixDQUFDVCxRQUFRLEVBQUVNLHFCQUFxQixFQUFFQyxvQkFBb0IsQ0FBQyxBQUFDO2dCQUVuSCxJQUFJSix1QkFBdUIsS0FBSyxJQUFJLEVBQUU7b0JBQ3BDLElBQU1PLHdEQUF3RCxHQUFJUCxBQUF1QixXQUFZTCxDQUFuQ0ssdUJBQXVCLEVBQVlMLGlDQUFpQyxDQUFBLEFBQUMsQUFBQztvQkFFeEksSUFBSVksd0RBQXdELEVBQUU7d0JBQzVERixpQ0FBaUMsR0FBR0wsdUJBQXVCLENBQUMsQ0FBRSxHQUFHO3FCQUNsRSxNQUFNO3dCQUNMLElBQU1RLFVBQVUsR0FBR1IsdUJBQXVCLEVBQ3BDUyxpQkFBaUIsR0FBR0MsQ0FBQUEsR0FBQUEsV0FBbUIsQUFBWSxDQUFBLG9CQUFaLENBQUNGLFVBQVUsQ0FBQyxBQUFDO3dCQUUxRCxJQUFJQyxpQkFBaUIsRUFBRTs0QkFDckIsSUFBTUUsZ0JBQWdCLEdBQUdILFVBQVUsQ0FBQ0ksUUFBUSxFQUFFLEFBQUM7NEJBRS9DLE1BQU0sSUFBSUMsS0FBSyxDQUFDLEFBQUMsT0FBSyxDQUFvRWhCLE1BQVEsQ0FBMUVjLGdCQUFnQixFQUFDLGlEQUErQyxDQUFXLENBQUEsTUFBb0QsQ0FBN0RkLFVBQVEsRUFBQyxzREFBb0QsQ0FBQyxDQUFDLENBQUM7eUJBQzNKO3dCQUVELElBQU1ELEtBQUssR0FBR0ksdUJBQXVCLENBQUNjLFFBQVEsRUFBRSxFQUMxQ2pCLFVBQVEsR0FBR0csdUJBQXVCLENBQUNlLFdBQVcsRUFBRSxFQUNoRGpCLGtCQUFrQixHQUFHRSx1QkFBdUIsQ0FBQ2dCLHFCQUFxQixFQUFFLEVBQ3BFakIsc0JBQXNCLEdBQUdDLHVCQUF1QixDQUFDaUIseUJBQXlCLEVBQUUsQUFBQzt3QkFFbkZaLGlDQUFpQyxHQUFHLElBQUlWLGlDQUFpQyxDQUFDQyxLQUFLLEVBQUVDLFVBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyx1QkFBdUIsQ0FBQyxDQUFDO3FCQUNqSztpQkFDRjtnQkFFRCxPQUFPSyxpQ0FBaUMsQ0FBQzthQUMxQzs7OztDQUNGLENBMUM4RGEsS0FBdUIsUUFBQSxDQTBDckY7QUFFRCxTQUFTWiwyQkFBMkIsQ0FBQ1QsUUFBUSxFQUFFTSxxQkFBcUIsRUFBRUMsb0JBQW9CLEVBQUU7SUFDMUYsSUFBTWUsd0JBQXdCLEdBQUdDLDRCQUE0QixDQUFDaEIsb0JBQW9CLENBQUMsRUFDN0VKLHVCQUF1QixHQUFHUixhQUFhLENBQUMyQix3QkFBd0IsRUFBRSxTQUFDbkIsdUJBQXVCLEVBQUs7UUFDN0YsSUFBTUgsUUFBUSxHQUFHRyx1QkFBdUIsQ0FBQ2UsV0FBVyxFQUFFLEFBQUM7UUFFdkQsSUFBSWxCLFFBQVEsS0FBS00scUJBQXFCLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsSUFBSSxJQUFJLEFBQUM7SUFFakIsT0FBT0gsdUJBQXVCLENBQUM7Q0FDaEM7QUFFRCxTQUFTb0IsNEJBQTRCLENBQUNoQixvQkFBb0IsRUFBRTtJQUMxRCxJQUFNZSx3QkFBd0IsR0FBRyxFQUFFLEFBQUM7SUFFcEN6QixjQUFjLENBQUNVLG9CQUFvQixFQUFFLFNBQUNpQixtQkFBbUIsRUFBSztRQUM1RCxJQUFNQywwQ0FBMEMsR0FBSUQsQUFBbUIsV0FBWUgsQ0FBL0JHLG1CQUFtQixFQUFZSCxLQUF1QixRQUFBLENBQUEsQUFBQyxBQUFDO1FBRTVHLElBQUlJLDBDQUEwQyxFQUFFO1lBQzlDLElBQU10Qix1QkFBdUIsR0FBR3FCLG1CQUFtQixBQUFDLEVBQUUsR0FBRztZQUV6REYsd0JBQXdCLENBQUNJLE9BQU8sQ0FBQ3ZCLHVCQUF1QixDQUFDLENBQUM7WUFFMUQsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU9tQix3QkFBd0IsQ0FBQztDQUNqQztrQkF6RW9CeEIsaUNBQWlDIn0=