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
            value: function apply(context) {
                var _this = this;
                var ruleMap = context.ruleMap, rule = this.getRule(), indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, function(indirectlyLeftRecursiveDefinition) {
                    var indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();
                    if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === _this.leftRecursiveRuleName) {
                        return true;
                    }
                }, context), indirectlyRepeatedRule = _indirectly.default.fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(rule, this.leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions);
                if (indirectlyRepeatedRule !== null) {
                    var indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();
                    ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
                }
                return indirectlyRepeatedRule;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), ruleName = rule.getName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, this.leftRecursiveRuleName), indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;
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
                var rule = indirectlyLeftRecursiveDefinition.getRule(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyRepeatedRuleOperation = new IndirectlyRepeatedRuleOperation(rule, leftRecursiveRuleName), indirectlyRepeatedRule = indirectlyRepeatedRuleOperation.execute(context);
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatedRuleOperation;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9pbmRpcmVjdGx5UmVwZWF0ZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vcnVsZVwiO1xuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24gZXh0ZW5kcyBSdWxlT3BlcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgc3VwZXIocnVsZSk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBhcHBseShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlTWFwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJ1bGUgPSB0aGlzLmdldFJ1bGUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gSW5kaXJlY3RseVJlcGVhdGVkUnVsZS5mcm9tUnVsZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHJ1bGVNYXBbaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVdID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIHJldHJpZXZlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJ1bGVNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBydWxlTWFwW2luZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cblxuICBjb21wYXJlKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24pIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvblJ1bGUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gKChydWxlID09PSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uUnVsZSkgJiYgKHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uID0gbmV3IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24ocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCApLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uLmV4ZWN1dGUoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uIiwicnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImFwcGx5IiwiY29udGV4dCIsInJ1bGVNYXAiLCJnZXRSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmcm9tUnVsZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZXRyaWV2ZSIsInJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJjb21wYXJlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbiIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb25SdWxlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImNvbXBhcmVzVG8iLCJleGVjdXRlIiwiUnVsZU9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBUVFBLCtCQUErQjs7O3lEQU4xQixzQkFBc0I7K0RBQ2IsZ0NBQWdDO3VCQUVaLHlCQUF5Qjt3QkFDRCwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUYsSUFBQSxBQUFNQSwrQkFBK0IsaUJBQXJDO2NBQU1BLCtCQUErQjs4QkFBL0JBLCtCQUErQjthQUEvQkEsK0JBQStCLENBQ3RDQyxJQUFJLEVBQUVDLHFCQUFxQjs4QkFEcEJGLCtCQUErQjs7a0NBRTFDQyxJQUFJLEVBQUU7UUFFWixNQUFLQyxxQkFBcUIsR0FBR0EscUJBQXFCLENBQUM7OztpQkFKbENGLCtCQUErQjs7WUFPbERHLEdBQXdCLEVBQXhCQSwwQkFBd0I7bUJBQXhCQSxTQUFBQSx3QkFBd0IsR0FBRztnQkFDekIsT0FBTyxJQUFJLENBQUNELHFCQUFxQixDQUFDO1lBQ3BDLENBQUM7OztZQUVERSxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsT0FBTyxFQUFFOztnQkFDYixJQUFNLEFBQUVDLE9BQU8sR0FBS0QsT0FBTyxDQUFuQkMsT0FBTyxBQUFZLEVBQ3JCTCxJQUFJLEdBQUcsSUFBSSxDQUFDTSxPQUFPLEVBQUUsRUFDckJDLGtDQUFrQyxHQUFHQyxJQUFBQSxRQUFz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