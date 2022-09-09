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
    function DirectlyLeftRecursiveDefinitionOperation(definition, leftRecursiveRuleName) {
        _classCallCheck(this, DirectlyLeftRecursiveDefinitionOperation);
        var _this;
        _this = _super.call(this, definition);
        _this.leftRecursiveRuleName = leftRecursiveRuleName;
        return _this;
    }
    _createClass(DirectlyLeftRecursiveDefinitionOperation, [
        {
            key: "getLeftRecursiveRuleName",
            value: function getLeftRecursiveRuleName() {
                return this.leftRecursiveRuleName;
            }
        },
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
                var definition = directlyLeftRecursiveDefinition.getDefinition(), directlyLeftRecursiveDefinitionOperation = new DirectlyLeftRecursiveDefinitionOperation(definition), indirectlyLeftRecursiveDefinitions = directlyLeftRecursiveDefinitionOperation.execute(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context);
                return indirectlyLeftRecursiveDefinitions;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinitionOperation;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9kaXJlY3RseUxlZnRSZWN1cnNpdmUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJlcGxhY2VtZW50RGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnREZWZpbml0aW9uXCI7XG5cbmltcG9ydCBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uT3BlcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgc3VwZXIoZGVmaW5pdGlvbik7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBhcHBseShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlcGVhdGVkUnVsZSwgZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgY29udGV4dCk7XG5cbiAgICBydWxlLnJlbW92ZUFsbERlZmluaXRpb25zKCk7XG5cbiAgICBpZiAoZGlyZWN0bHlSZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gUmVwbGFjZW1lbnREZWZpbml0aW9uLmZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCksXG4gICAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSBSZXBsYWNlbWVudERlZmluaXRpb24uZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICByZXRyaWV2ZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlcGVhdGVkUnVsZSwgZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uLmV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJhcHBseSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseVJlcGVhdGVkUnVsZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJjb250ZXh0IiwicnVsZSIsImdldFJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZW1vdmVBbGxEZWZpbml0aW9ucyIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsIlJlcGxhY2VtZW50RGVmaW5pdGlvbiIsImZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiYWRkRGVmaW5pdGlvbiIsIm1hcCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlcGVhdGVkUnVsZSIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJldHJpZXZlIiwiZXhlY3V0ZSIsImdldERlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIiwiRGVmaW5pdGlvbk9wZXJhdGlvbiJdLCJt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