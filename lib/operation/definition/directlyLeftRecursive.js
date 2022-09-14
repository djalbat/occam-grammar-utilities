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
var _replacementDefinition = /*#__PURE__*/ _interopRequireDefault(require("../../replacementDefinition"));
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
                if (directlyReducedRule !== null) {
                    var replacementDefinition = _replacementDefinition.default.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition), definition = replacementDefinition; ///
                    rule.addDefinition(definition);
                }
                indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map(function(indirectlyLeftRecursiveDefinition) {
                    var leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions(), replacementDefinition = _replacementDefinition.default.fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, directlyRepeatedRule), definition = replacementDefinition; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9kaXJlY3RseUxlZnRSZWN1cnNpdmUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJlcGxhY2VtZW50RGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnREZWZpbml0aW9uXCI7XG5cbmltcG9ydCBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uT3BlcmF0aW9uIHtcbiAgYXBwbHkoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNvbnRleHQpO1xuXG4gICAgcnVsZS5yZW1vdmVBbGxEZWZpbml0aW9ucygpO1xuXG4gICAgaWYgKGRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSByZXBsYWNlbWVudERlZmluaXRpb247IC8vL1xuXG4gICAgICBydWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gUmVwbGFjZW1lbnREZWZpbml0aW9uLmZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlcGVhdGVkUnVsZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRpcmVjdGx5UmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSByZXBsYWNlbWVudERlZmluaXRpb247IC8vL1xuXG4gICAgICBydWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgcmV0cmlldmUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBkaXJlY3RseVJlZHVjZWRSdWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24ocnVsZSwgZGVmaW5pdGlvbiksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24uZXhlY3V0ZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlcGVhdGVkUnVsZSwgZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIiwiYXBwbHkiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJkaXJlY3RseVJlZHVjZWRSdWxlIiwiY29udGV4dCIsInJ1bGUiLCJnZXRSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVtb3ZlQWxsRGVmaW5pdGlvbnMiLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJSZXBsYWNlbWVudERlZmluaXRpb24iLCJmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwibWFwIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVEZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmV0cmlldmUiLCJleGVjdXRlIiwiZ2V0RGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJEZWZpbml0aW9uT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFTUUEsd0NBQXdDOzs7K0RBUDdCLDRCQUE0QjswRUFDMUIsNkJBQTZCOytEQUVqQiwyQ0FBMkM7dUJBRWxDLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRSxJQUFBLEFB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