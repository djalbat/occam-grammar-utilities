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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9kaXJlY3RseUxlZnRSZWN1cnNpdmUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJlcGxhY2VtZW50RGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnREZWZpbml0aW9uXCI7XG5cbmltcG9ydCBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiBleHRlbmRzIERlZmluaXRpb25PcGVyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlLCBkZWZpbml0aW9uLCBkaXJlY3RseVJlZHVjZWRSdWxlLCBkaXJlY3RseVJlcGVhdGVkUnVsZSkge1xuICAgIHN1cGVyKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgdGhpcy5kaXJlY3RseVJlZHVjZWRSdWxlID0gZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgICB0aGlzLmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cblxuICBnZXREaXJlY3RseVJlZHVjZWRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cblxuICBnZXREaXJlY3RseVJlcGVhdGVkUnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIGFwcGx5KGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKCk7XG5cbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNvbnRleHQpO1xuXG4gICAgcnVsZS5yZW1vdmVBbGxEZWZpbml0aW9ucygpO1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0bHlSZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IGRlZmluaXRpb24gPSB0aGlzLmdldERlZmluaXRpb24oKTtcblxuICAgICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gUmVwbGFjZW1lbnREZWZpbml0aW9uLmZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKTtcblxuICAgICAgZGVmaW5pdGlvbiA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCByZXBsYWNlbWVudERlZmluaXRpb24gPSBSZXBsYWNlbWVudERlZmluaXRpb24uZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgdGhpcy5kaXJlY3RseVJlcGVhdGVkUnVsZSksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBjb25zdCBkaXJlY3RseSA9IHRydWU7XG5cbiAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbihpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRlZmluaXRpb24sIGRpcmVjdGx5KTsgIC8vL1xuXG4gICAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICByZXRyaWV2ZShjb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlcGVhdGVkUnVsZSwgZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uKHJ1bGUsIGRlZmluaXRpb24sIGRpcmVjdGx5UmVkdWNlZFJ1bGUsIGRpcmVjdGx5UmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5leGVjdXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiIsInJ1bGUiLCJkZWZpbml0aW9uIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZ2V0RGlyZWN0bHlSZWR1Y2VkUnVsZSIsImdldERpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiYXBwbHkiLCJjb250ZXh0IiwiZ2V0UnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlbW92ZUFsbERlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsIlJlcGxhY2VtZW50RGVmaW5pdGlvbiIsImZyb21SdWxlQW5kRGVmaW5pdGlvbiIsImFkZERlZmluaXRpb24iLCJtYXAiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJkaXJlY3RseSIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREZWZpbml0aW9uIiwicmV0cmlldmUiLCJleGVjdXRlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJEZWZpbml0aW9uT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7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