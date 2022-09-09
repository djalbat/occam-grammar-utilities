"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LeftRecursiveDefinitionOperation;
    }
});
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../../operation/definition"));
var _replacementDefinition = /*#__PURE__*/ _interopRequireDefault(require("../../replacementDefinition"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left/directly"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left/indirectly"));
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
var LeftRecursiveDefinitionOperation = /*#__PURE__*/ function(DefinitionOperation) {
    _inherits(LeftRecursiveDefinitionOperation, DefinitionOperation);
    var _super = _createSuper(LeftRecursiveDefinitionOperation);
    function LeftRecursiveDefinitionOperation(definition, leftRecursiveRuleName) {
        _classCallCheck(this, LeftRecursiveDefinitionOperation);
        var _this;
        _this = _super.call(this, definition);
        _this.leftRecursiveRuleName = leftRecursiveRuleName;
        return _this;
    }
    _createClass(LeftRecursiveDefinitionOperation, [
        {
            key: "getLeftRecursiveRuleName",
            value: function getLeftRecursiveRuleName() {
                return this.leftRecursiveRuleName;
            }
        },
        {
            key: "apply",
            value: function apply(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
                var leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();
                var rule = leftRecursiveDefinition.getRule();
                if (indirectlyReducedRule !== null) {
                    var replacementDefinition = _replacementDefinition.default.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(indirectlyLeftRecursiveDefinition, indirectlyReducedRule), definition = replacementDefinition; ///
                    rule.addDefinition(definition);
                }
                var definition1 = leftRecursiveDefinition.getDefinition();
                var definitions = rule.getDefinitions(), definitionsIncludesDefinition = definitions.includes(definition1), replacementDefinition1 = _replacementDefinition.default.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule), replacedDefinition = definition1; ///
                definition1 = replacementDefinition1; ///
                var least = indirectlyLeftRecursiveDefinition.isLeast(), leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();
                leftRecursiveDefinition = least ? _directly.default.fromRuleAndDefinition(rule, definition1) : _indirectly.default.fromDefinitionAndLeftRecursiveDefinitions(definition1, leftRecursiveDefinitions);
                definitionsIncludesDefinition ? rule.replaceDefinition(replacedDefinition, replacementDefinition1) : rule.addDefinition(definition1);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
            ///
            }
        },
        {
            key: "compare",
            value: function compare(leftRecursiveDefinitionOperation) {
                var definition = this.getDefinition(), leftRecursiveDefinitionOperationDefinition = leftRecursiveDefinitionOperation.getDefinition(), leftRecursiveDefinitionOperationLeftRecursiveRuleName = leftRecursiveDefinitionOperation.getLeftRecursiveRuleName(), comparesTo = definition === leftRecursiveDefinitionOperationDefinition && this.leftRecursiveRuleName === leftRecursiveDefinitionOperationLeftRecursiveRuleName;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
                var definition = indirectlyLeftRecursiveDefinition.getDefinition(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), leftRecursiveDefinitionOperation = new LeftRecursiveDefinitionOperation(definition, leftRecursiveRuleName), leftRecursiveDefinition = leftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context);
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinitionOperation;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbk9wZXJhdGlvbiBmcm9tIFwiLi4vLi4vb3BlcmF0aW9uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSZXBsYWNlbWVudERlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50RGVmaW5pdGlvblwiO1xuXG5pbXBvcnQgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiBleHRlbmRzIERlZmluaXRpb25PcGVyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBzdXBlcihkZWZpbml0aW9uKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGFwcGx5KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSwgaW5kaXJlY3RseVJlZHVjZWRSdWxlLCBjb250ZXh0KSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCk7XG5cbiAgICBjb25zdCBydWxlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gUmVwbGFjZW1lbnREZWZpbml0aW9uLmZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVkdWNlZFJ1bGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbiksXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gUmVwbGFjZW1lbnREZWZpbml0aW9uLmZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSksXG4gICAgICAgICAgcmVwbGFjZWREZWZpbml0aW9uID0gZGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgZGVmaW5pdGlvbiA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbjsgLy8vXG5cbiAgICBjb25zdCBsZWFzdCA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5pc0xlYXN0KCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWFzdCA/IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA/XG4gICAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKSA6XG4gICAgICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHJldHJpZXZlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSwgaW5kaXJlY3RseVJlZHVjZWRSdWxlLCBjb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wYXJlKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAoKGRlZmluaXRpb24gPT09IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uRGVmaW5pdGlvbikgJiYgKHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSkpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbihkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24uZXhlY3V0ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJkZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiYXBwbHkiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlIiwiY29udGV4dCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlIiwiZ2V0UnVsZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsIlJlcGxhY2VtZW50RGVmaW5pdGlvbiIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJhZGREZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiIsImluY2x1ZGVzIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJyZXBsYWNlZERlZmluaXRpb24iLCJsZWFzdCIsImlzTGVhc3QiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZXBsYWNlRGVmaW5pdGlvbiIsInJldHJpZXZlIiwiY29tcGFyZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb25EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJjb21wYXJlc1RvIiwiZXhlY3V0ZSIsIkRlZmluaXRpb25PcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVFRQSxnQ0FBZ0M7OzsrREFOckIsNEJBQTRCOzBFQUMxQiw2QkFBNkI7NkRBRW5CLHlDQUF5QzsrREFDdkMsMkNBQTJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFFLElBQUEsQUFBTUEsZ0NBQWdDLGlCQUF0QztjQUFNQSxnQ0FBZ0M7OEJBQWhDQSxnQ0FBZ0M7YUFBaENBLGdDQUFnQyxDQUN2Q0MsVUFBVSxFQUFFQyxxQkFBcUI7OEJBRDFCRixnQ0FBZ0M7O2tDQUUzQ0MsVUFBVSxFQUFFO1FBRWxCLE1BQUtDLHFCQUFxQixHQUFHQSxxQkFBcUIsQ0FBQzs7O2lCQUpsQ0YsZ0NBQWdDOztZQU9uREcsR0FBd0IsRUFBeEJBLDBCQUF3QjttQkFBeEJBLFNBQUFBLHdCQUF3QixHQUFHO2dCQUN6QixPQUFPLElBQUksQ0FBQ0QscUJBQXFCLENBQUM7WUFDcEMsQ0FBQzs7O1lBRURFLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxpQ0FBaUMsRUFBRUMsc0JBQXNCLEVBQUVDLHFCQUFxQixFQUFFQyxPQUFPLEVBQUU7Z0JBQy9G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