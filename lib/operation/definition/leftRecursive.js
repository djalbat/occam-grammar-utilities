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
var _replacement = /*#__PURE__*/ _interopRequireDefault(require("../../definition/replacement"));
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
                var replacementDefinition = _replacement.default.fromLeftRecursiveDefinitionAndIndirectlyReducedRule(leftRecursiveDefinition, indirectlyReducedRule);
                if (replacementDefinition !== null) {
                    var definition = replacementDefinition; ///
                    rule.addDefinition(definition);
                }
                var definition1 = leftRecursiveDefinition.getDefinition();
                var definitions = rule.getDefinitions(), definitionsIncludesDefinition = definitions.includes(definition1);
                replacementDefinition = _replacement.default.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule);
                var replacedDefinition = definition1; ///
                definition1 = replacementDefinition; ///
                var least = indirectlyLeftRecursiveDefinition.isLeast(), leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();
                leftRecursiveDefinition = least ? _directly.default.fromRuleAndDefinition(rule, definition1, context) : _indirectly.default.fromDefinitionAndLeftRecursiveDefinitions(definition1, leftRecursiveDefinitions);
                definitionsIncludesDefinition ? rule.replaceDefinition(replacedDefinition, replacementDefinition) : rule.addDefinition(definition1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbk9wZXJhdGlvbiBmcm9tIFwiLi4vLi4vb3BlcmF0aW9uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSZXBsYWNlbWVudERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwbGFjZW1lbnRcIjtcblxuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2luZGlyZWN0bHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uT3BlcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHN1cGVyKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgYXBwbHkoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKTtcblxuICAgIGNvbnN0IHJ1bGUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICBsZXQgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gUmVwbGFjZW1lbnREZWZpbml0aW9uLmZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlZHVjZWRSdWxlKTtcblxuICAgIGlmIChyZXBsYWNlbWVudERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSByZXBsYWNlbWVudERlZmluaXRpb247IC8vL1xuXG4gICAgICBydWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgbGV0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IGRlZmluaXRpb25zLmluY2x1ZGVzKGRlZmluaXRpb24pO1xuXG4gICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gUmVwbGFjZW1lbnREZWZpbml0aW9uLmZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSk7XG5cbiAgICBjb25zdCByZXBsYWNlZERlZmluaXRpb24gPSBkZWZpbml0aW9uOyAgLy8vXG5cbiAgICBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgIGNvbnN0IGxlYXN0ID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmlzTGVhc3QoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlYXN0ID8gLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID9cbiAgICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pIDpcbiAgICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgcmV0cmlldmUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNvbXBhcmUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24pIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgY29tcGFyZXNUbyA9ICgodGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgJiYgKHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPT09IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSwgaW5kaXJlY3RseVJlZHVjZWRSdWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpO1xuXG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCk7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbihydWxlLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24uZXhlY3V0ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJydWxlIiwiZGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhcHBseSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJjb250ZXh0IiwiZ2V0UnVsZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsIlJlcGxhY2VtZW50RGVmaW5pdGlvbiIsImZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImFkZERlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsImxlYXN0IiwiaXNMZWFzdCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZUFuZERlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlcGxhY2VEZWZpbml0aW9uIiwicmV0cmlldmUiLCJjb21wYXJlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJjb21wYXJlc1RvIiwiZXhlY3V0ZSIsIkRlZmluaXRpb25PcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5XO2dFQUNFOzZEQUVVOytEQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQUEsQUFBTUEsaURBQU47Y0FBTUE7OEJBQUFBO2FBQUFBLGlDQUNQQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMscUJBQXFCLEVBQUVDLHVCQUF1Qjs4QkFEekRKOztrQ0FFWEMsTUFBTUM7UUFFWixNQUFLQyxxQkFBcUIsR0FBR0E7UUFDN0IsTUFBS0MsdUJBQXVCLEdBQUdBOzs7aUJBTGRKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQjtnQkFDekIsT0FBTyxJQUFJLENBQUNGLHFCQUFxQjtZQUNuQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkI7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDRix1QkFBdUI7WUFDckM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsaUNBQWlDLEVBQUVDLHNCQUFzQixFQUFFQyxxQkFBcUIsRUFBRUMsT0FBTyxFQUFFO2dCQUMvRixJQUFJUCwwQkFBMEJJLGtDQUFrQ0YsMEJBQTBCO2dCQUUxRixJQUFNTCxPQUFPRyx3QkFBd0JRLE9BQU87Z0JBRTVDLElBQUlDLHdCQUF3QkMsb0JBQXFCLENBQUNDLG1EQUFtRCxDQUFDWCx5QkFBeUJNO2dCQUUvSCxJQUFJRywwQkFBMEIsSUFBSSxFQUFFO29CQUNsQyxJQUFNWCxhQUFhVyx1QkFBdUIsR0FBRztvQkFFN0NaLEtBQUtlLGFBQWEsQ0FBQ2Q7Z0JBQ3JCLENBQUM7Z0JBRUQsSUFBSUEsY0FBYUUsd0JBQXdCYSxhQUFhO2dCQUV0RCxJQUFNQyxjQUFjakIsS0FBS2tCLGNBQWMsSUFDakNDLGdDQUFnQ0YsWUFBWUcsUUFBUSxDQUFDbkI7Z0JBRTNEVyx3QkFBd0JDLG9CQUFxQixDQUFDUSw4REFBOEQsQ0FBQ2QsbUNBQW1DQztnQkFFaEosSUFBTWMscUJBQXFCckIsYUFBYSxHQUFHO2dCQUUzQ0EsY0FBYVcsdUJBQXVCLEdBQUc7Z0JBRXZDLElBQU1XLFFBQVFoQixrQ0FBa0NpQixPQUFPLElBQ2pEQywyQkFBMkJsQixrQ0FBa0NtQiwyQkFBMkI7Z0JBRTlGdkIsMEJBQTBCb0IsUUFDRUksaUJBQStCLENBQUNDLHFCQUFxQixDQUFDNUIsTUFBTUMsYUFBWVMsV0FDdEVtQixtQkFBaUMsQ0FBQ0MseUNBQXlDLENBQUM3QixhQUFZd0IseUJBQXlCO2dCQUUvSU4sZ0NBQ0VuQixLQUFLK0IsaUJBQWlCLENBQUNULG9CQUFvQlYseUJBQ3pDWixLQUFLZSxhQUFhLENBQUNkLFlBQVc7Z0JBRWxDLE9BQU9FO1lBQ1Q7OztZQUVBNkIsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVN6QixpQ0FBaUMsRUFBRUMsc0JBQXNCLEVBQUVDLHFCQUFxQixFQUFFQyxPQUFPLEVBQUU7WUFDbEcsR0FBRztZQUNMOzs7WUFFQXVCLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxnQ0FBZ0MsRUFBRTtnQkFDeEMsSUFBTWhDLHdCQUF3QmdDLGlDQUFpQzlCLHdCQUF3QixJQUNqRkQsMEJBQTBCK0IsaUNBQWlDN0IsMEJBQTBCLElBQ3JGOEIsYUFBYyxBQUFDLElBQUksQ0FBQ2pDLHFCQUFxQixLQUFLQSx5QkFBMkIsSUFBSSxDQUFDQyx1QkFBdUIsS0FBS0E7Z0JBRWhILE9BQU9nQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFFBQVE3QixpQ0FBaUMsRUFBRUMsc0JBQXNCLEVBQUVDLHFCQUFxQixFQUFFQyxPQUFPLEVBQUU7Z0JBQ3hHLElBQU1WLE9BQU9PLGtDQUFrQ0ksT0FBTyxJQUNoRFYsYUFBYU0sa0NBQWtDUyxhQUFhLElBQzVEZCx3QkFBd0JLLGtDQUFrQ0gsd0JBQXdCO2dCQUV4RixJQUFJRCwwQkFBMEJJLGtDQUFrQ0YsMEJBQTBCO2dCQUUxRixJQUFNNkIsbUNBQW1DLElBekV4Qm5DLGlDQXlFNkRDLE1BQU1DLFlBQVlDLHVCQUF1QkM7Z0JBRXZIQSwwQkFBMEIrQixpQ0FBaUNFLE9BQU8sQ0FBQzdCLG1DQUFtQ0Msd0JBQXdCQyx1QkFBdUJDO2dCQUVySixPQUFPUDtZQUNUOzs7V0E5RW1CSjtFQUF5Q3NDLG1CQUFtQiJ9