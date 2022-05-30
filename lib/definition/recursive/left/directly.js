"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reduced = _interopRequireDefault(require("../../../rule/reduced"));
var _rewritten = _interopRequireDefault(require("../../../rule/rewritten"));
var _rewritten1 = _interopRequireDefault(require("../../../definition/rewritten"));
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _types = require("../../../types");
var _rule = require("../../../utilities/rule");
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
var DirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(DirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(DirectlyLeftRecursiveDefinition);
    function DirectlyLeftRecursiveDefinition() {
        _classCallCheck(this, DirectlyLeftRecursiveDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyLeftRecursiveDefinition, [
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var ruleName = this.getRuleName(), definition = this.getDefinition(), rule = ruleMap[ruleName], reducedRule = (0, _rule).reducedRuleFromRule(rule, ruleMap, _reduced.default), rewrittenRule = (0, _rule).rewrittenRuleFromRule(rule, ruleMap, _rewritten.default), leftRecursiveRuleName = ruleName, rewrittenDefinition = _rewritten1.default.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName);
                reducedRule.removeDefinition(definition);
                rewrittenRule.replaceDefinition(definition, rewrittenDefinition);
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var directlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition);
                    leftRecursiveRuleNames.some(function(leftRecursiveRuleName) {
                        var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                        if (ruleNameLeftRecursiveRuleName) {
                            // const definitionUnary = isDefinitionUnary(definition);
                            //
                            // if (definitionUnary) {
                            //   const definitionString = definition.asString();
                            //
                            //   throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
                            // }
                            //
                            // const definitionComplex = isDefinitionComplex(definition);
                            //
                            // if (definitionComplex) {
                            //   const definitionString = definition.asString();
                            //
                            //   throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
                            // }
                            var parts = [], type = _types.DIRECTLY_LEFT_RECURSIVE_TYPE, recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                            directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
                            return true;
                        }
                    });
                }
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);
exports.default = DirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVkdWNlZFJ1bGUgZnJvbSBcIi4uLy4uLy4uL3J1bGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlblJ1bGUgZnJvbSBcIi4uLy4uLy4uL3J1bGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgUmV3cml0dGVuRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvbi9yZXdyaXR0ZW5cIjtcbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdFwiO1xuXG5pbXBvcnQgeyBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHJld3JpdGUocnVsZU1hcCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVNYXAsIFJlZHVjZWRSdWxlKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVNYXAsIFJld3JpdHRlblJ1bGUpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgcmVkdWNlZFJ1bGUucmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24oZGVmaW5pdGlvbiwgcmV3cml0dGVuRGVmaW5pdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5zb21lKChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgLy8gY29uc3QgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbik7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgLy8gICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAvLyAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgY29uc3QgcGFydHMgPSBbXSxcbiAgICAgICAgICAgICAgICB0eXBlID0gRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJld3JpdGUiLCJydWxlTWFwIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwicnVsZSIsInJlZHVjZWRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsIlJlZHVjZWRSdWxlIiwicmV3cml0dGVuUnVsZSIsInJld3JpdHRlblJ1bGVGcm9tUnVsZSIsIlJld3JpdHRlblJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVtb3ZlRGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwic29tZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicGFydHMiLCJ0eXBlIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFVyxJQUFBLFFBQXVCLGtDQUF2Qix1QkFBdUIsRUFBQTtBQUNyQixJQUFBLFVBQXlCLGtDQUF6Qix5QkFBeUIsRUFBQTtBQUNuQixJQUFBLFdBQStCLGtDQUEvQiwrQkFBK0IsRUFBQTtBQUMzQixJQUFBLEtBQW9DLGtDQUFwQyxvQ0FBb0MsRUFBQTtBQUUzQixJQUFBLE1BQWdCLFdBQWhCLGdCQUFnQixDQUFBO0FBQ0YsSUFBQSxLQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUNzRSxJQUFBLFdBQStCLFdBQS9CLCtCQUErQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFLLElBQUEsQUFBTUEsK0JBQStCLGlCQ1hqRCxBRFdZOzs7YUFBTUEsK0JBQStCOzs7Ozs7WUFDbERDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsV0FBVyxFQUFFLEVBQzdCQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLEVBQUUsRUFDakNDLElBQUksR0FBR0wsT0FBTyxDQUFDQyxRQUFRLENBQUMsRUFDeEJLLFdBQVcsR0FBR0MsQ0FBQUEsR0FBQUEsS0FBbUIsQUFBNEIsQ0FBQSxvQkFBNUIsQ0FBQ0YsSUFBSSxFQUFFTCxPQUFPLEVBQUVRLFFBQVcsUUFBQSxDQUFDLEVBQzdEQyxhQUFhLEdBQUdDLENBQUFBLEdBQUFBLEtBQXFCLEFBQThCLENBQUEsc0JBQTlCLENBQUNMLElBQUksRUFBRUwsT0FBTyxFQUFFVyxVQUFhLFFBQUEsQ0FBQyxFQUNuRUMscUJBQXFCLEdBQUdYLFFBQVEsRUFDaENZLG1CQUFtQixHQUFHQyxXQUFtQixRQUFBLENBQUNDLHNDQUFzQyxDQUFDWixVQUFVLEVBQUVTLHFCQUFxQixDQUFDLEFBQUM7Z0JBRTFITixXQUFXLENBQUNVLGdCQUFnQixDQUFDYixVQUFVLENBQUMsQ0FBQztnQkFFekNNLGFBQWEsQ0FBQ1EsaUJBQWlCLENBQUNkLFVBQVUsRUFBRVUsbUJBQW1CLENBQUMsQ0FBQzthQUNsRTs7OztZQUVNSyxHQUF5QixFQUF6QkEsMkJBQXlCO21CQUFoQyxTQUFPQSx5QkFBeUIsQ0FBQ2pCLFFBQVEsRUFBRUUsVUFBVSxFQUFFO2dCQUNyRCxJQUFJZ0IsK0JBQStCLEdBQUcsSUFBSSxBQUFDO2dCQUUzQyxJQUFNQyx1QkFBdUIsR0FBR0MsQ0FBQUEsR0FBQUEsV0FBeUIsQUFBWSxDQUFBLDBCQUFaLENBQUNsQixVQUFVLENBQUMsQUFBQztnQkFFdEUsSUFBSWlCLHVCQUF1QixFQUFFO29CQUMzQixJQUFNRSxzQkFBc0IsR0FBR0MsQ0FBQUEsR0FBQUEsV0FBb0MsQUFBWSxDQUFBLHFDQUFaLENBQUNwQixVQUFVLENBQUMsQUFBQztvQkFFaEZtQixzQkFBc0IsQ0FBQ0UsSUFBSSxDQUFDLFNBQUNaLHFCQUFxQixFQUFLO3dCQUNyRCxJQUFNYSw2QkFBNkIsR0FBSXhCLFFBQVEsS0FBS1cscUJBQXFCLEFBQUMsQUFBQzt3QkFFM0UsSUFBSWEsNkJBQTZCLEVBQUU7NEJBQ2pDLHlEQUF5RDs0QkFDekQsRUFBRTs0QkFDRix5QkFBeUI7NEJBQ3pCLG9EQUFvRDs0QkFDcEQsRUFBRTs0QkFDRiwySkFBMko7NEJBQzNKLElBQUk7NEJBQ0osRUFBRTs0QkFDRiw2REFBNkQ7NEJBQzdELEVBQUU7NEJBQ0YsMkJBQTJCOzRCQUMzQixvREFBb0Q7NEJBQ3BELEVBQUU7NEJBQ0YsNkpBQTZKOzRCQUM3SixJQUFJOzRCQUVKLElBQU1DLEtBQUssR0FBRyxFQUFFLEVBQ1ZDLElBQUksR0FBR0MsTUFBNEIsNkJBQUEsRUFDbkNDLGtCQUFrQixHQUFHQyxDQUFBQSxHQUFBQSxXQUFnQyxBQUFZLENBQUEsaUNBQVosQ0FBQzNCLFVBQVUsQ0FBQyxBQUFDOzRCQUV4RWdCLCtCQUErQixHQUFHLElBQUlyQiwrQkFBK0IsQ0FBQzRCLEtBQUssRUFBRUMsSUFBSSxFQUFFMUIsUUFBUSxFQUFFRSxVQUFVLEVBQUUwQixrQkFBa0IsRUFBRVAsc0JBQXNCLENBQUMsQ0FBQzs0QkFFckosT0FBTyxJQUFJLENBQUM7eUJBQ2I7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKO2dCQUVELE9BQU9ILCtCQUErQixDQUFDO2FBQ3hDOzs7O0NBQ0YsQ0F4RDREWSxLQUF1QixRQUFBLENBd0RuRjtrQkF4RG9CakMsK0JBQStCIn0=