"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyReduceRuleOperation;
    }
});
var _operation = /*#__PURE__*/ _interopRequireDefault(require("../operation"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../rule/reduced/indirectly"));
var _ruleName = require("../utilities/ruleName");
var _context = require("../utilities/context");
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
var IndirectlyReduceRuleOperation = /*#__PURE__*/ function(Operation) {
    _inherits(IndirectlyReduceRuleOperation, Operation);
    var _super = _createSuper(IndirectlyReduceRuleOperation);
    function IndirectlyReduceRuleOperation() {
        _classCallCheck(this, IndirectlyReduceRuleOperation);
        return _super.apply(this, arguments);
    }
    _createClass(IndirectlyReduceRuleOperation, [
        {
            key: "apply",
            value: function apply(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, function(indirectlyLeftRecursiveDefinition) {
                    ///
                    return true;
                }, context), indirectlyReducedRule = _indirectly.default.fromRuleAndIndirectlyLeftRecursiveDefinitions(rule, indirectlyLeftRecursiveDefinitions);
                if (indirectlyReducedRule !== null) {
                    var indirectlyReducedRuleName = indirectlyReducedRule.getName();
                    ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;
                }
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {
                var ruleMap = context.ruleMap, rule = this.getRule(), ruleName = rule.getName(), indirectlyReducedRuleName = (0, _ruleName.indirectlyReducedRuleNameFromRuleName)(ruleName), indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null;
                return indirectlyReducedRule;
            }
        },
        {
            key: "compare",
            value: function compare(indirectlyReduceRuleOperation) {
                var rule = this.getRule(), indirectlyReduceRuleOperationRule = indirectlyReduceRuleOperation.getRule(), comparesTo = rule === indirectlyReduceRuleOperationRule;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), indirectlyReduceRuleOperation = new IndirectlyReduceRuleOperation(rule), indirectlyReducedRule = indirectlyReduceRuleOperation.execute(context);
                return indirectlyReducedRule;
            }
        }
    ]);
    return IndirectlyReduceRuleOperation;
}(_operation.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vaW5kaXJlY3RseVJlZHVjZVJ1bGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvblwiO1xuaW1wb3J0IEluZGlyZWN0bHlSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vcnVsZS9yZWR1Y2VkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uIGV4dGVuZHMgT3BlcmF0aW9uIHtcbiAgYXBwbHkoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9LCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBJbmRpcmVjdGx5UmVkdWNlZFJ1bGUuZnJvbVJ1bGVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHJ1bGVNYXBbaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZV0gPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gICAgfVxuICB9XG5cbiAgcmV0cmlldmUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlID0gcnVsZU1hcFtpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgfVxuXG4gIGNvbXBhcmUoaW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24pIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb25SdWxlID0gaW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAocnVsZSA9PT0gaW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb25SdWxlKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvO1xuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24gPSBuZXcgSW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24ocnVsZSksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlID0gaW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24uZXhlY3V0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24iLCJhcHBseSIsImNvbnRleHQiLCJydWxlTWFwIiwicnVsZSIsImdldFJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJJbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJmcm9tUnVsZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJldHJpZXZlIiwicnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiY29tcGFyZSIsImluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uIiwiaW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb25SdWxlIiwiY29tcGFyZXNUbyIsImV4ZWN1dGUiLCJPcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVFRQSw2QkFBNkI7Ozs4REFONUIsY0FBYzsrREFDRiw0QkFBNEI7d0JBRVIsdUJBQXVCO3VCQUN0Qixz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