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
    function LeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, leftRecursiveDefinition) {
        _classCallCheck(this, LeftRecursiveDefinitionOperation);
        var _this;
        _this = _super.call(this, rule, definition);
        _this.leftRecursiveRuleName = leftRecursiveRuleName;
        _this.leftRecursiveDefinition = leftRecursiveDefinition;
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
            key: "getLeftRecursiveDefinition",
            value: function getLeftRecursiveDefinition() {
                return this.leftRecursiveDefinition;
            }
        },
        {
            key: "apply",
            value: function apply(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
                var leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();
                var rule = leftRecursiveDefinition.getRule();
                if (indirectlyReducedRule !== null) {
                    var replacementDefinition = _replacementDefinition.default.fromLeftRecursiveDefinitionAndIndirectlyReducedRule(leftRecursiveDefinition, indirectlyReducedRule), definition = replacementDefinition; ///
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
                var leftRecursiveRuleName = leftRecursiveDefinitionOperation.getLeftRecursiveRuleName(), leftRecursiveDefinition = leftRecursiveDefinitionOperation.getLeftRecursiveDefinition(), comparesTo = this.leftRecursiveRuleName === leftRecursiveRuleName && this.leftRecursiveDefinition === leftRecursiveDefinition;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), definition = indirectlyLeftRecursiveDefinition.getDefinition(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();
                var leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();
                var leftRecursiveDefinitionOperation = new LeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, leftRecursiveDefinition);
                leftRecursiveDefinition = leftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context);
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinitionOperation;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbk9wZXJhdGlvbiBmcm9tIFwiLi4vLi4vb3BlcmF0aW9uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSZXBsYWNlbWVudERlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50RGVmaW5pdGlvblwiO1xuXG5pbXBvcnQgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiBleHRlbmRzIERlZmluaXRpb25PcGVyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBhcHBseShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCkge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpO1xuXG4gICAgY29uc3QgcnVsZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgIGlmIChpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVkdWNlZFJ1bGUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGxldCBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSBkZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSBSZXBsYWNlbWVudERlZmluaXRpb24uZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSBkZWZpbml0aW9uOyAgLy8vXG5cbiAgICBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgIGNvbnN0IGxlYXN0ID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmlzTGVhc3QoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlYXN0ID8gLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID9cbiAgICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pIDpcbiAgICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgcmV0cmlldmUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNvbXBhcmUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24pIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgY29tcGFyZXNUbyA9ICgodGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgJiYgKHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPT09IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSwgaW5kaXJlY3RseVJlZHVjZWRSdWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpO1xuXG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCk7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbihydWxlLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24uZXhlY3V0ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJydWxlIiwiZGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhcHBseSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJjb250ZXh0IiwiZ2V0UnVsZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsIlJlcGxhY2VtZW50RGVmaW5pdGlvbiIsImZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImFkZERlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsImxlYXN0IiwiaXNMZWFzdCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZUFuZERlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlcGxhY2VEZWZpbml0aW9uIiwicmV0cmlldmUiLCJjb21wYXJlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJjb21wYXJlc1RvIiwiZXhlY3V0ZSIsIkRlZmluaXRpb25PcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVFRQSxnQ0FBZ0M7OzsrREFOckIsNEJBQTRCOzBFQUMxQiw2QkFBNkI7NkRBRW5CLHlDQUF5QzsrREFDdkMsMkNBQTJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFFLElBQUEsQUFBTUEsZ0NBQWdDLGlCQUF0QztjQUFNQSxnQ0FBZ0M7OEJBQWhDQSxnQ0FBZ0M7YUFBaENBLGdDQUFnQyxDQUN2Q0MsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLHFCQUFxQixFQUFFQyx1QkFBdUI7OEJBRHpESixnQ0FBZ0M7O2tDQUUzQ0MsSUFBSSxFQUFFQyxVQUFVLEVBQUU7UUFFeEIsTUFBS0MscUJBQXFCLEdBQUdBLHFCQUFxQixDQUFDO1FBQ25ELE1BQUtDLHVCQUF1QixHQUFHQSx1QkFBdUIsQ0FBQzs7O2lCQUx0Q0osZ0NBQWdDOztZQVFu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