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
    function LeftRecursiveDefinitionOperation(rule, definition, indirectlyReducedRule, indirectlyRepeatedRule, indirectlyLeftRecursiveDefinition) {
        _classCallCheck(this, LeftRecursiveDefinitionOperation);
        var _this;
        _this = _super.call(this, rule, definition);
        _this.indirectlyReducedRule = indirectlyReducedRule;
        _this.indirectlyRepeatedRule = indirectlyRepeatedRule;
        _this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
        return _this;
    }
    _createClass(LeftRecursiveDefinitionOperation, [
        {
            key: "getIndirectlyReducedRule",
            value: function getIndirectlyReducedRule() {
                return this.indirectlyReducedRule;
            }
        },
        {
            key: "getIndirectlyRepeatedRule",
            value: function getIndirectlyRepeatedRule() {
                return this.indirectlyRepeatedRule;
            }
        },
        {
            key: "getIndirectlyLeftRecursiveDefinition",
            value: function getIndirectlyLeftRecursiveDefinition() {
                return this.indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "apply",
            value: function apply(context) {
                var leftRecursiveDefinition = this.indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();
                var rule = leftRecursiveDefinition.getRule();
                if (this.indirectlyReducedRule !== null) {
                    var replacementDefinition = _replacementDefinition.default.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(this.indirectlyLeftRecursiveDefinition, this.indirectlyReducedRule), definition = replacementDefinition; ///
                    rule.addDefinition(definition);
                }
                var least = this.indirectlyLeftRecursiveDefinition.isLeast();
                var definition1 = leftRecursiveDefinition.getDefinition();
                var definitions = rule.getDefinitions(), definitionsIncludesDefinition = definitions.includes(definition1), replacementDefinition1 = _replacementDefinition.default.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule(this.indirectlyLeftRecursiveDefinition, this.indirectlyRepeatedRule), replacedDefinition = definition1; ///
                definition1 = replacementDefinition1; ///
                leftRecursiveDefinition = least ? _directly.default.fromRuleAndDefinition(rule, definition1) : _indirectly.default.fromIndirectlyLeftRecursiveDefinitionAndDefinition(this.indirectlyLeftRecursiveDefinition, definition1);
                definitionsIncludesDefinition ? rule.replaceDefinition(replacedDefinition, replacementDefinition1) : rule.addDefinition(definition1);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {}
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), definition = indirectlyLeftRecursiveDefinition.getDefinition(), leftRecursiveDefinitionOperation = new LeftRecursiveDefinitionOperation(rule, definition, indirectlyReducedRule, indirectlyRepeatedRule, indirectlyLeftRecursiveDefinition), leftRecursiveDefinition = leftRecursiveDefinitionOperation.execute(context);
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinitionOperation;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbk9wZXJhdGlvbiBmcm9tIFwiLi4vLi4vb3BlcmF0aW9uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSZXBsYWNlbWVudERlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50RGVmaW5pdGlvblwiO1xuXG5pbXBvcnQgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiBleHRlbmRzIERlZmluaXRpb25PcGVyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlLCBkZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUsIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHN1cGVyKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgdGhpcy5pbmRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gICAgdGhpcy5pbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcblxuICAgIHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0SW5kaXJlY3RseVJlZHVjZWRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLmluZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgfVxuXG4gIGdldEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIGdldEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBhcHBseShjb250ZXh0KSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKTtcblxuICAgIGNvbnN0IHJ1bGUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICBpZiAodGhpcy5pbmRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlZHVjZWRSdWxlKHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCB0aGlzLmluZGlyZWN0bHlSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IGxlYXN0ID0gdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uaXNMZWFzdCgpO1xuXG4gICAgbGV0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IGRlZmluaXRpb25zLmluY2x1ZGVzKGRlZmluaXRpb24pLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlcGVhdGVkUnVsZSh0aGlzLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgdGhpcy5pbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSBkZWZpbml0aW9uOyAgLy8vXG5cbiAgICBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVhc3QgPyAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbih0aGlzLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGVmaW5pdGlvbik7XG5cbiAgICBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA/XG4gICAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKSA6XG4gICAgICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHJldHJpZXZlKGNvbnRleHQpIHtcblxuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbihydWxlLCBkZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUsIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5leGVjdXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIiwicnVsZSIsImRlZmluaXRpb24iLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0SW5kaXJlY3RseVJlZHVjZWRSdWxlIiwiZ2V0SW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImdldEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImFwcGx5IiwiY29udGV4dCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRSdWxlIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwiUmVwbGFjZW1lbnREZWZpbml0aW9uIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImFkZERlZmluaXRpb24iLCJsZWFzdCIsImlzTGVhc3QiLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZUFuZERlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwicmV0cmlldmUiLCJleGVjdXRlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJEZWZpbml0aW9uT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsZ0NBQWdDOzs7K0RBTnJCLDRCQUE0QjswRUFDMUIsNkJBQTZCOzZEQUVuQix5Q0FBeUM7K0RBQ3ZDLDJDQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRSxJQUFBLEFBQU1BLGdDQUFnQyxpQkFBdEM7Y0FBTUEsZ0NBQWdDOzhCQUFoQ0EsZ0NBQWdDO2FBQWhDQSxnQ0FBZ0MsQ0FDdkNDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxxQkFBcUIsRUFBRUMsc0JBQXNCLEVBQUVDLGlDQUFpQzs4QkFEM0ZMLGdDQUFnQzs7a0NBRTNDQyxJQUFJLEVBQUVDLFVBQVUsRUFBRTtRQUV4QixNQUFLQyxxQkFBcUIsR0FBR0EscUJBQXFCLENBQUM7UUFDbkQsTUFBS0Msc0JBQXNCLEdBQUdBLHNCQUFzQixDQUFDO1FBRXJELE1BQUtDLGlDQUFpQyxHQUFHQSxpQ0FBaUMsQ0FBQzs7O2lCQVAxREwsZ0NBQWdDOztZQVVuRE0sR0FBd0IsRUFBeEJBLDBCQUF3QjttQkFBeEJBLFNBQUFBLHdCQUF3QixHQUFHO2dCQUN6QixPQUFPLElBQUksQ0FBQ0gscUJBQXFCLENBQUM7WUFDcEMsQ0FBQzs7O1lBRURJLEdBQXlCLEVBQXpCQSwyQkFBeUI7bUJBQXpCQSxTQUFBQSx5QkFBeUIsR0FBRztnQkFDMUIsT0FBTyxJQUFJLENBQUNILHNCQUFzQixDQUFDO1lBQ3JDLENBQUM7OztZQUVESSxHQUFvQyxFQUFwQ0Esc0NBQW9DO21CQUFwQ0EsU0FBQUEsb0NBQW9DLEdBQUc7Z0JBQ3JDLE9BQU8sSUFBSSxDQUFDSCxpQ0FBaUMsQ0FBQztZQUNoRCxDQUFDOzs7WUFFREksR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFDYixJQUFJQyx1QkFBdUIsR0FBRyxJQUFJLENBQUNOLGlDQUFpQyxDQUFDTywwQkFBMEIsRUFBRSxBQUFDO2dCQUVsRyxJQUFNWCxJQUFJLEdBQUdVLHVCQUF1QixDQUFDRSxPQUFPLEVBQUUsQUFBQztnQkFFL0MsSUFBSSxJQUFJLENBQUNWLHFCQUFxQixLQUFLLElBQUksRUFBRTtvQkFDdkMsSUFBTVcscUJBQXFCLEdBQUdDLHNCQUFxQixRQUFBLENBQUNDLDZEQUE2RCxDQUFDLElBQUksQ0FBQ1gsaUNBQWlDLEVBQUUsSUFBSSxDQUFDRixxQkFBcUIsQ0FBQyxFQUMvS0QsVUFBVSxHQUFHWSxxQkFBcUIsQUFBQyxFQUFDLEdBQUc7b0JBRTdDYixJQUFJLENBQUNnQixhQUFhLENBQUNmLFVBQVUsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELElBQU1nQixLQUFLLEdBQUcsSUFBSSxDQUFDYixpQ0FBaUMsQ0FBQ2MsT0FBTyxFQUFFLEFBQUM7Z0JBRS9ELElBQUlqQixXQUFVLEdBQUdTLHVCQUF1QixDQUFDUyxhQUFhLEVBQUUsQUFBQztnQkFFekQsSUFBTUMsV0FBVyxHQUFHcEIsSUFBSSxDQUFDcUIsY0FBYyxFQUFFLEVBQ25DQyw2QkFBNkIsR0FBR0YsV0FBVyxDQUFDRyxRQUFRLENBQUN0QixXQUFVLENBQUMsRUFDaEVZLHNCQUFxQixHQUFHQyxzQkFBcUIsUUFBQSxDQUFDVSw4REFBOEQsQ0FBQyxJQUFJLENBQUNwQixpQ0FBaUMsRUFBRSxJQUFJLENBQUNELHNCQUFzQixDQUFDLEVBQ2pMc0Isa0JBQWtCLEdBQUd4QixXQUFVLEFBQUMsRUFBRSxHQUFHO2dCQUUzQ0EsV0FBVSxHQUFHWSxzQkFBcUIsQ0FBQyxDQUFDLEdBQUc7Z0JBRXZDSCx1QkFBdUIsR0FBR08sS0FBSyxHQUNIUyxTQUErQixRQUFBLENBQUNDLHFCQUFxQixDQUFDM0IsSUFBSSxFQUFFQyxXQUFVLENBQUMsR0FDckUyQixXQUFpQyxRQUFBLENBQUNDLGtEQUFrRCxDQUFDLElBQUksQ0FBQ3pCLGlDQUFpQyxFQUFFSCxXQUFVLENBQUMsQ0FBQztnQkFFdktxQiw2QkFBNkIsR0FDM0J0QixJQUFJLENBQUM4QixpQkFBaUIsQ0FBQ0wsa0JBQWtCLEVBQUVaLHNCQUFxQixDQUFDLEdBQy9EYixJQUFJLENBQUNnQixhQUFhLENBQUNmLFdBQVUsQ0FBQyxDQUFDO2dCQUVuQyxPQUFPUyx1QkFBdUIsQ0FBQztZQUNqQyxDQUFDOzs7WUFFRHFCLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDdEIsT0FBTyxFQUFFLENBRWxCLENBQUM7Ozs7WUFFTXVCLEdBQU8sRUFBUEEsU0FBTzttQkFBZCxTQUFPQSxPQUFPLENBQUM1QixpQ0FBaUMsRUFBRUQsc0JBQXNCLEVBQUVELHFCQUFxQixFQUFFTyxPQUFPLEVBQUU7Z0JBQ3hHLElBQU1ULElBQUksR0FBR0ksaUNBQWlDLENBQUNRLE9BQU8sRUFBRSxFQUNsRFgsVUFBVSxHQUFHRyxpQ0FBaUMsQ0FBQ2UsYUFBYSxFQUFFLEVBQzlEYyxnQ0FBZ0MsR0FBRyxJQS9EeEJsQyxnQ0FBZ0MsQ0ErRDZCQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMscUJBQXFCLEVBQUVDLHNCQUFzQixFQUFFQyxpQ0FBaUMsQ0FBQyxFQUMzS00sdUJBQXVCLEdBQUd1QixnQ0FBZ0MsQ0FBQ0QsT0FBTyxDQUFDdkIsT0FBTyxDQUFDLEFBQUM7Z0JBRWxGLE9BQU9DLHVCQUF1QixDQUFDO1lBQ2pDLENBQUM7OztXQW5Fa0JYLGdDQUFnQztDQW9FcEQsQ0FwRTZEbUMsV0FBbUIsUUFBQSxDQW9FaEYifQ==