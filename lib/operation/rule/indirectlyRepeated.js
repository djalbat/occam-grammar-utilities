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
                var ruleMap = context.ruleMap, rule = indirectlyLeftRecursiveDefinition.getRule(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, function(indirectlyLeftRecursiveDefinition) {
                    var indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();
                    if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName) {
                        return true;
                    }
                }, context), indirectlyRepeatedRule = _indirectly.default.fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions);
                if (indirectlyRepeatedRule !== null) {
                    var indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS9pbmRpcmVjdGx5UmVwZWF0ZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vcnVsZVwiO1xuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24gZXh0ZW5kcyBSdWxlT3BlcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgc3VwZXIocnVsZSk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBhcHBseShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJ1bGVNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gSW5kaXJlY3RseVJlcGVhdGVkUnVsZS5mcm9tUnVsZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBydWxlTWFwW2luZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lXSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cblxuICByZXRyaWV2ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJ1bGVNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gcnVsZU1hcFtpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG5cbiAgY29tcGFyZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb25SdWxlID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgY29tcGFyZXNUbyA9ICgocnVsZSA9PT0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvblJ1bGUpICYmICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSkpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbiA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24uZXhlY3V0ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlcGVhdGVkUnVsZU9wZXJhdGlvbiIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJhcHBseSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImNvbnRleHQiLCJydWxlTWFwIiwiZ2V0UnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZnJvbVJ1bGVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJnZXROYW1lIiwicmV0cmlldmUiLCJydWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiY29tcGFyZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb24iLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlT3BlcmF0aW9uUnVsZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVPcGVyYXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJjb21wYXJlc1RvIiwiZXhlY3V0ZSIsIlJ1bGVPcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lEQU5LOytEQUNTO3VCQUVvQjt3QkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsSUFBQSxBQUFNQSxnREFBTjtjQUFNQTs4QkFBQUE7YUFBQUEsZ0NBQ1BDLElBQUksRUFBRUMscUJBQXFCOzhCQURwQkY7O2tDQUVYQztRQUVOLE1BQUtDLHFCQUFxQixHQUFHQTs7O2lCQUpaRjs7WUFPbkJHLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkI7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDRCxxQkFBcUI7WUFDbkM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsaUNBQWlDLEVBQUVDLE9BQU8sRUFBRTtnQkFDaEQsSUFBTSxBQUFFQyxVQUFZRCxRQUFaQyxTQUNGTixPQUFPSSxrQ0FBa0NHLE9BQU8sSUFDaEROLHdCQUF3Qkcsa0NBQWtDRix3QkFBd0IsSUFDbEZNLHFDQUFxQ0MsSUFBQUEsK0NBQXNDLEVBQUNULE1BQU0sU0FBQ0ksbUNBQXNDO29CQUN2SCxJQUFNTSx5REFBeUROLGtDQUFrQ0Ysd0JBQXdCO29CQUV6SCxJQUFJUSwyREFBMkRULHVCQUF1Qjt3QkFDcEYsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsR0FBR0ksVUFDSE0seUJBQXlCQyxtQkFBc0IsQ0FBQ0Msa0VBQWtFLENBQUNiLE1BQU1DLHVCQUF1Qk87Z0JBRXRKLElBQUlHLDJCQUEyQixJQUFJLEVBQUU7b0JBQ25DLElBQU1HLDZCQUE2QkgsdUJBQXVCSSxPQUFPO29CQUVqRVQsT0FBTyxDQUFDUSwyQkFBMkIsR0FBR0g7Z0JBQ3hDLENBQUM7Z0JBRUQsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTWixpQ0FBaUMsRUFBRUMsT0FBTyxFQUFFO2dCQUNuRCxJQUFNLEFBQUVDLFVBQVlELFFBQVpDLFNBQ0ZOLE9BQU9JLGtDQUFrQ0csT0FBTyxJQUNoRFUsV0FBV2pCLEtBQUtlLE9BQU8sSUFDdkJkLHdCQUF3Qkcsa0NBQWtDRix3QkFBd0IsSUFDbEZZLDZCQUE2QkksSUFBQUEsd0VBQThELEVBQUNELFVBQVVoQix3QkFDdEdVLHlCQUF5QkwsT0FBTyxDQUFDUSwyQkFBMkIsSUFBSSxJQUFJO2dCQUUxRSxPQUFPSDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLCtCQUErQixFQUFFO2dCQUN2QyxJQUFNcEIsT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJjLHNDQUFzQ0QsZ0NBQWdDYixPQUFPLElBQzdFZSx1REFBdURGLGdDQUFnQ2xCLHdCQUF3QixJQUMvR3FCLGFBQWMsQUFBQ3ZCLFNBQVNxQix1Q0FBeUMsSUFBSSxDQUFDcEIscUJBQXFCLEtBQUtxQjtnQkFFdEcsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxRQUFRcEIsaUNBQWlDLEVBQUVDLE9BQU8sRUFBRTtnQkFDekQsSUFBTUwsT0FBT0ksa0NBQWtDRyxPQUFPLElBQ2hETix3QkFBd0JHLGtDQUFrQ0Ysd0JBQXdCLElBQ2xGa0Isa0NBQWtDLElBeER2QnJCLGdDQXdEMkRDLE1BQU1DLHdCQUM1RVUseUJBQXlCUyxnQ0FBZ0NJLE9BQU8sQ0FBQ3BCLG1DQUFtQ0M7Z0JBRTFHLE9BQU9NO1lBQ1Q7OztXQTVEbUJaO0VBQXdDMEIsYUFBYSJ9