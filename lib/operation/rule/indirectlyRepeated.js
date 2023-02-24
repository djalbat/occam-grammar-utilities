"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyRepeatedRuleOperation;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../../operation/rule"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../rule/repeated/indirectly"));
var _context = require("../../utilities/context");
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
var IndirectlyRepeatedRuleOperation = /*#__PURE__*/ function(RuleOperation) {
    _inherits(IndirectlyRepeatedRuleOperation, RuleOperation);
    var _super = _createSuper(IndirectlyRepeatedRuleOperation);
    function IndirectlyRepeatedRuleOperation(rule, leftRecursiveRuleName) {
        _classCallCheck(this, IndirectlyRepeatedRuleOperation);
        var _this;
        _this = _super.call(this, rule);
        _this.leftRecursiveRuleName = leftRecursiveRuleName;
        return _this;
    }
    _createClass(IndirectlyRepeatedRuleOperation, [
        {
            key: "getLeftRecursiveRuleName",
            value: function getLeftRecursiveRuleName() {
                return this.leftRecursiveRuleName;
            }
        },
        {
            key: "apply",
            value: function apply(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, function(indirectlyLeftRecursiveDefinition) {
                    var indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();
                    if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName) {
                        return true;
                    }
                }, context), indirectlyRepeatedRule = _indirectly.default.fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions);
                if (indirectlyRepeatedRule !== null) {
                    var ruleMap = context.ruleMap, indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();
                    ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
                }
                return indirectlyRepeatedRule;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(indirectlyLeftRecursiveDefinition, context) {
                var ruleMap = context.ruleMap, rule = indirectlyLeftRecursiveDefinition.getRule(), ruleName = rule.getName(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;
                return indirectlyRepeatedRule;
            }
        },
        {
            key: "compare",
            value: function compare(indirectlyRepeatedRuleOperation) {
                var rule = this.getRule(), indirectlyRepeatedRuleOperationRule = indirectlyRepeatedRuleOperation.getRule(), indirectlyRepeatedRuleOperationLeftRecursiveRuleName = indirectlyRepeatedRuleOperation.getLeftRecursiveRuleName(), comparesTo = rule === indirectlyRepeatedRuleOperationRule && this.leftRecursiveRuleName === indirectlyRepeatedRuleOperationLeftRecursiveRuleName;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyRepeatedRuleOperation = new IndirectlyRepeatedRuleOperation(rule, leftRecursiveRuleName), indirectlyRepeatedRule = indirectlyRepeatedRuleOperation.execute(indirectlyLeftRecursiveDefinition, context);
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatedRuleOperation;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9pbmRpcmVjdGx5UmVwZWF0ZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vcnVsZVwiO1xuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24gZXh0ZW5kcyBSdWxlT3BlcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgc3VwZXIocnVsZSk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBhcHBseShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKTtcblxuICAgICAgICAgICAgaWYgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGNvbnRleHQpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlLmZyb21SdWxlTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHJ1bGVNYXBbaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVdID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIHJldHJpZXZlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBydWxlTWFwW2luZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cblxuICBjb21wYXJlKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24pIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvblJ1bGUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gKChydWxlID09PSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uUnVsZSkgJiYgKHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uID0gbmV3IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24ocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbi5leGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uIiwicnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImFwcGx5IiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiY29udGV4dCIsImdldFJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImZyb21SdWxlTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVNYXAiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZXRyaWV2ZSIsInJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJjb21wYXJlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbiIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb25SdWxlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImNvbXBhcmVzVG8iLCJleGVjdXRlIiwiUnVsZU9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eURBTks7K0RBQ1M7dUJBRW9CO3dCQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLGdEQUFOO2NBQU1BOzhCQUFBQTthQUFBQSxnQ0FDUEMsSUFBSSxFQUFFQyxxQkFBcUI7OEJBRHBCRjs7a0NBRVhDO1FBRU4sTUFBS0MscUJBQXFCLEdBQUdBOzs7aUJBSlpGOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQjtnQkFDekIsT0FBTyxJQUFJLENBQUNELHFCQUFxQjtZQUNuQzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxpQ0FBaUMsRUFBRUMsT0FBTyxFQUFFO2dCQUNoRCxJQUFNTCxPQUFPSSxrQ0FBa0NFLE9BQU8sSUFDaERMLHdCQUF3Qkcsa0NBQWtDRix3QkFBd0IsSUFDbEZLLHFDQUFxQ0MsSUFBQUEsK0NBQXNDLEVBQUNSLE1BQU0sU0FBQ0ksbUNBQXNDO29CQUN2SCxJQUFNSyx5REFBeURMLGtDQUFrQ0Ysd0JBQXdCO29CQUV6SCxJQUFJTywyREFBMkRSLHVCQUF1Qjt3QkFDcEYsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsR0FBR0ksVUFDSEsseUJBQXlCQyxtQkFBc0IsQ0FBQ0Msa0VBQWtFLENBQUNaLE1BQU1DLHVCQUF1Qk07Z0JBRXRKLElBQUlHLDJCQUEyQixJQUFJLEVBQUU7b0JBQ25DLElBQU0sQUFBRUcsVUFBWVIsUUFBWlEsU0FDRkMsNkJBQTZCSix1QkFBdUJLLE9BQU87b0JBRWpFRixPQUFPLENBQUNDLDJCQUEyQixHQUFHSjtnQkFDeEMsQ0FBQztnQkFFRCxPQUFPQTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNaLGlDQUFpQyxFQUFFQyxPQUFPLEVBQUU7Z0JBQ25ELElBQU0sQUFBRVEsVUFBWVIsUUFBWlEsU0FDRmIsT0FBT0ksa0NBQWtDRSxPQUFPLElBQ2hEVyxXQUFXakIsS0FBS2UsT0FBTyxJQUN2QmQsd0JBQXdCRyxrQ0FBa0NGLHdCQUF3QixJQUNsRlksNkJBQTZCSSxJQUFBQSx3RUFBOEQsRUFBQ0QsVUFBVWhCLHdCQUN0R1MseUJBQXlCRyxPQUFPLENBQUNDLDJCQUEyQixJQUFJLElBQUk7Z0JBRTFFLE9BQU9KO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsK0JBQStCLEVBQUU7Z0JBQ3ZDLElBQU1wQixPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQmUsc0NBQXNDRCxnQ0FBZ0NkLE9BQU8sSUFDN0VnQix1REFBdURGLGdDQUFnQ2xCLHdCQUF3QixJQUMvR3FCLGFBQWMsQUFBQ3ZCLFNBQVNxQix1Q0FBeUMsSUFBSSxDQUFDcEIscUJBQXFCLEtBQUtxQjtnQkFFdEcsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxRQUFRcEIsaUNBQWlDLEVBQUVDLE9BQU8sRUFBRTtnQkFDekQsSUFBTUwsT0FBT0ksa0NBQWtDRSxPQUFPLElBQ2hETCx3QkFBd0JHLGtDQUFrQ0Ysd0JBQXdCLElBQ2xGa0Isa0NBQWtDLElBeER2QnJCLGdDQXdEMkRDLE1BQU1DLHdCQUM1RVMseUJBQXlCVSxnQ0FBZ0NJLE9BQU8sQ0FBQ3BCLG1DQUFtQ0M7Z0JBRTFHLE9BQU9LO1lBQ1Q7OztXQTVEbUJYO0VBQXdDMEIsYUFBYSJ9