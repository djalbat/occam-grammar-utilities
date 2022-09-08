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
    function DirectlyLeftRecursiveDefinitionOperation(rule, definition, directlyReducedRule, directlyRepeatedRule) {
        _classCallCheck(this, DirectlyLeftRecursiveDefinitionOperation);
        var _this;
        _this = _super.call(this, rule, definition);
        _this.directlyReducedRule = directlyReducedRule;
        _this.directlyRepeatedRule = directlyRepeatedRule;
        return _this;
    }
    _createClass(DirectlyLeftRecursiveDefinitionOperation, [
        {
            key: "getDirectlyReducedRule",
            value: function getDirectlyReducedRule() {
                return this.directlyReducedRule;
            }
        },
        {
            key: "getDirectlyRepeatedRule",
            value: function getDirectlyRepeatedRule() {
                return this.directlyRepeatedRule;
            }
        },
        {
            key: "apply",
            value: function apply(context) {
                var _this = this;
                var rule = this.getRule();
                var indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, context);
                rule.removeAllDefinitions();
                if (this.directlyReducedRule !== null) {
                    var definition = this.getDefinition();
                    var replacementDefinition = _replacementDefinition.default.fromRuleAndDefinition(rule, definition);
                    definition = replacementDefinition; ///
                    rule.addDefinition(definition);
                }
                indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map(function(indirectlyLeftRecursiveDefinition) {
                    var replacementDefinition = _replacementDefinition.default.fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, _this.directlyRepeatedRule), definition = replacementDefinition; ///
                    rule.addDefinition(definition);
                    var directly = true;
                    indirectlyLeftRecursiveDefinition = _indirectly.default.fromIndirectlyLeftRecursiveDefinitionAndDefinition(indirectlyLeftRecursiveDefinition, definition, directly); ///
                    return indirectlyLeftRecursiveDefinition;
                });
                return indirectlyLeftRecursiveDefinitions;
            }
        },
        {
            key: "retrieve",
            value: function retrieve(context) {
            ///
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context) {
                var rule = directlyLeftRecursiveDefinition.getRule(), definition = directlyLeftRecursiveDefinition.getDefinition(), directlyLeftRecursiveDefinitionOperation = new DirectlyLeftRecursiveDefinitionOperation(rule, definition, directlyReducedRule, directlyRepeatedRule), indirectlyLeftRecursiveDefinitions = directlyLeftRecursiveDefinitionOperation.execute(context);
                return indirectlyLeftRecursiveDefinitions;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinitionOperation;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9kaXJlY3RseUxlZnRSZWN1cnNpdmUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJlcGxhY2VtZW50RGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnREZWZpbml0aW9uXCI7XG5cbmltcG9ydCBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uT3BlcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgZGlyZWN0bHlSZWR1Y2VkUnVsZSwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUpIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uKTtcblxuICAgIHRoaXMuZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gICAgdGhpcy5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG5cbiAgZ2V0RGlyZWN0bHlSZWR1Y2VkUnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG5cbiAgZ2V0RGlyZWN0bHlSZXBlYXRlZFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cblxuICBhcHBseShjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpO1xuXG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjb250ZXh0KTtcblxuICAgIHJ1bGUucmVtb3ZlQWxsRGVmaW5pdGlvbnMoKTtcblxuICAgIGlmICh0aGlzLmRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGxldCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCk7XG5cbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgICAgIGRlZmluaXRpb24gPSByZXBsYWNlbWVudERlZmluaXRpb247IC8vL1xuXG4gICAgICBydWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gUmVwbGFjZW1lbnREZWZpbml0aW9uLmZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlcGVhdGVkUnVsZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHRoaXMuZGlyZWN0bHlSZXBlYXRlZFJ1bGUpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgY29uc3QgZGlyZWN0bHkgPSB0cnVlO1xuXG4gICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERlZmluaXRpb24oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkZWZpbml0aW9uLCBkaXJlY3RseSk7ICAvLy9cblxuICAgICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgcmV0cmlldmUoY29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbihydWxlLCBkZWZpbml0aW9uLCBkaXJlY3RseVJlZHVjZWRSdWxlLCBkaXJlY3RseVJlcGVhdGVkUnVsZSksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24uZXhlY3V0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJydWxlIiwiZGVmaW5pdGlvbiIsImRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZSIsImdldERpcmVjdGx5UmVkdWNlZFJ1bGUiLCJnZXREaXJlY3RseVJlcGVhdGVkUnVsZSIsImFwcGx5IiwiY29udGV4dCIsImdldFJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZW1vdmVBbGxEZWZpbml0aW9ucyIsImdldERlZmluaXRpb24iLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJSZXBsYWNlbWVudERlZmluaXRpb24iLCJmcm9tUnVsZUFuZERlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwibWFwIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHkiLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbiIsInJldHJpZXZlIiwiZXhlY3V0ZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIiwiRGVmaW5pdGlvbk9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBU1FBLHdDQUF3Qzs7OytEQVA3Qiw0QkFBNEI7MEVBQzFCLDZC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