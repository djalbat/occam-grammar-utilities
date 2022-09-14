"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyLeftRecursiveDefinitionOperation;
    }
});
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../../operation/definition"));
var _replacement = /*#__PURE__*/ _interopRequireDefault(require("../../definition/replacement"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left/indirectly"));
var _context = require("../../utilities/context");
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
var DirectlyLeftRecursiveDefinitionOperation = /*#__PURE__*/ function(DefinitionOperation) {
    _inherits(DirectlyLeftRecursiveDefinitionOperation, DefinitionOperation);
    var _super = _createSuper(DirectlyLeftRecursiveDefinitionOperation);
    function DirectlyLeftRecursiveDefinitionOperation() {
        _classCallCheck(this, DirectlyLeftRecursiveDefinitionOperation);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyLeftRecursiveDefinitionOperation, [
        {
            key: "apply",
            value: function apply(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context) {
                var rule = directlyLeftRecursiveDefinition.getRule();
                var indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, context);
                rule.removeAllDefinitions();
                var replacementDefinition = _replacement.default.fromDirectlyLeftRecursiveDefinitionAndDirectlyReducedRule(directlyLeftRecursiveDefinition, directlyReducedRule);
                if (replacementDefinition !== null) {
                    var definition = replacementDefinition; ///
                    rule.addDefinition(definition);
                }
                indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map(function(indirectlyLeftRecursiveDefinition) {
                    var leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions(), replacementDefinition = _replacement.default.fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, directlyRepeatedRule), definition = replacementDefinition; ///
                    rule.addDefinition(definition);
                    indirectlyLeftRecursiveDefinition = _indirectly.default.fromRuleDefinitionAndLeftRecursiveDefinitions(rule, definition, leftRecursiveDefinitions);
                    return indirectlyLeftRecursiveDefinition;
                });
                return indirectlyLeftRecursiveDefinitions;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context) {
            ///
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context) {
                var rule = directlyLeftRecursiveDefinition.getRule(), definition = directlyLeftRecursiveDefinition.getDefinition(), directlyLeftRecursiveDefinitionOperation = new DirectlyLeftRecursiveDefinitionOperation(rule, definition), indirectlyLeftRecursiveDefinitions = directlyLeftRecursiveDefinitionOperation.execute(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context);
                return indirectlyLeftRecursiveDefinitions;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinitionOperation;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9kaXJlY3RseUxlZnRSZWN1cnNpdmUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJlcGxhY2VtZW50RGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbk9wZXJhdGlvbiB7XG4gIGFwcGx5KGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBkaXJlY3RseVJlZHVjZWRSdWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjb250ZXh0KTtcblxuICAgIHJ1bGUucmVtb3ZlQWxsRGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVkdWNlZFJ1bGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZWR1Y2VkUnVsZSk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlcGVhdGVkUnVsZSksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVEZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxuXG4gIHJldHJpZXZlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBkaXJlY3RseVJlZHVjZWRSdWxlLCBjb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlcGVhdGVkUnVsZSwgZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uKHJ1bGUsIGRlZmluaXRpb24pLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uLmV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiIsImFwcGx5IiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImNvbnRleHQiLCJydWxlIiwiZ2V0UnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlbW92ZUFsbERlZmluaXRpb25zIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwiUmVwbGFjZW1lbnREZWZpbml0aW9uIiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbiIsImFkZERlZmluaXRpb24iLCJtYXAiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZXRyaWV2ZSIsImV4ZWN1dGUiLCJnZXREZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiIsIkRlZmluaXRpb25PcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVNRQSx3Q0FBd0M7OzsrREFQN0IsNEJBQTRCO2dFQUMxQiw4QkFBOEI7K0RBRWxCLDJDQUEyQzt1QkFFbEMseUJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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