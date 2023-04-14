"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyLeftRecursiveDefinitionOperation;
    }
});
var _definition = /*#__PURE__*/ _interop_require_default(require("../../operation/definition"));
var _replacement = /*#__PURE__*/ _interop_require_default(require("../../definition/replacement"));
var _context = require("../../utilities/context");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var IndirectlyLeftRecursiveDefinitionOperation = /*#__PURE__*/ function(DefinitionOperation) {
    _inherits(IndirectlyLeftRecursiveDefinitionOperation, DefinitionOperation);
    var _super = _create_super(IndirectlyLeftRecursiveDefinitionOperation);
    function IndirectlyLeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, leftRecursiveDefinition) {
        _class_call_check(this, IndirectlyLeftRecursiveDefinitionOperation);
        var _this;
        _this = _super.call(this, rule, definition);
        _this.leftRecursiveRuleName = leftRecursiveRuleName;
        _this.leftRecursiveDefinition = leftRecursiveDefinition;
        return _this;
    }
    _create_class(IndirectlyLeftRecursiveDefinitionOperation, [
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
            value: function apply(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(), indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, function(indirectlyLeftRecursiveDefinition) {
                    var indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyLeftRecursiveDefinitionLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();
                    if (leftRecursiveDefinition === indirectlyLeftRecursiveDefinitionLeftRecursiveDefinition && leftRecursiveRuleName === indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName) {
                        return true;
                    }
                }, context), definitions = indirectlyLeftRecursiveDefinitions.map(function(indirectlyLeftRecursiveDefinition) {
                    var definition = indirectlyLeftRecursiveDefinition.getDefinition();
                    return definition;
                });
                rule.removeDefinitions(definitions);
                var replacementDefinition = _replacement.default.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition);
                if (replacementDefinition !== null) {
                    var definition = replacementDefinition; ///
                    rule.addDefinition(definition);
                }
            }
        },
        {
            key: "retrieve",
            value: function retrieve(indirectlyLeftRecursiveDefinition, context) {
            ///
            }
        },
        {
            key: "compare",
            value: function compare(indirectlyLeftRecursiveDefinitionOperation) {
                var rule = this.getRule(), indirectlyLeftRecursiveDefinitionOperationRule = indirectlyLeftRecursiveDefinitionOperation.getRule(), indirectlyLeftRecursiveDefinitionOperationLeftRecursiveRuleName = indirectlyLeftRecursiveDefinitionOperation.getLeftRecursiveRuleName(), indirectlyLeftRecursiveDefinitionOperationLeftRecursiveDefinition = indirectlyLeftRecursiveDefinitionOperation.getLeftRecursiveDefinition(), comparesTo = rule === indirectlyLeftRecursiveDefinitionOperationRule && this.leftRecursiveRuleName === indirectlyLeftRecursiveDefinitionOperationLeftRecursiveRuleName && this.leftRecursiveDefinition === indirectlyLeftRecursiveDefinitionOperationLeftRecursiveDefinition;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), definition = indirectlyLeftRecursiveDefinition.getDefinition(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(), indirectlyLeftRecursiveDefinitionOperation = new IndirectlyLeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, leftRecursiveDefinition);
                indirectlyLeftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, context);
            }
        }
    ]);
    return IndirectlyLeftRecursiveDefinitionOperation;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb25PcGVyYXRpb24gZnJvbSBcIi4uLy4uL29wZXJhdGlvbi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUmVwbGFjZW1lbnREZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3JlcGxhY2VtZW50XCI7XG5cbmltcG9ydCB7IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiBleHRlbmRzIERlZmluaXRpb25PcGVyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBhcHBseShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pICYmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgY29udGV4dCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBydWxlLnJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBpZiAocmVwbGFjZW1lbnREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHJpZXZlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgY29tcGFyZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24pIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uUnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgY29tcGFyZXNUbyA9ICgocnVsZSA9PT0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uUnVsZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSYmXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvO1xuICB9XG5cbiAgc3RhdGljIGV4ZWN1dGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbihydWxlLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5leGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCk7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIiwicnVsZSIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiYXBwbHkiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJjb250ZXh0IiwiZ2V0UnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJtYXAiLCJnZXREZWZpbml0aW9uIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJSZXBsYWNlbWVudERlZmluaXRpb24iLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiYWRkRGVmaW5pdGlvbiIsInJldHJpZXZlIiwiY29tcGFyZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvblJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImNvbXBhcmVzVG8iLCJleGVjdXRlIiwiRGVmaW5pdGlvbk9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7aUVBTFc7a0VBQ0U7dUJBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEsMkRBQU47Y0FBTUE7K0JBQUFBO2FBQUFBLDJDQUNQQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMscUJBQXFCLEVBQUVDLHVCQUF1QjtnQ0FEekRKOztrQ0FFWEMsTUFBTUM7UUFFWixNQUFLQyxxQkFBcUIsR0FBR0E7UUFDN0IsTUFBS0MsdUJBQXVCLEdBQUdBOzs7a0JBTGRKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQjtnQkFDekIsT0FBTyxJQUFJLENBQUNGLHFCQUFxQjtZQUNuQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkI7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDRix1QkFBdUI7WUFDckM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsaUNBQWlDLEVBQUVDLE9BQU8sRUFBRTtnQkFDaEQsSUFBTVIsT0FBT08sa0NBQWtDRSxPQUFPLElBQ2hEUCx3QkFBd0JLLGtDQUFrQ0gsd0JBQXdCLElBQ2xGRCwwQkFBMEJJLGtDQUFrQ0YsMEJBQTBCLElBQ3RGSyxxQ0FBcUNDLElBQUFBLCtDQUFzQyxFQUFDWCxNQUFNLFNBQUNPLG1DQUFzQztvQkFDdkgsSUFBTUsseURBQXlETCxrQ0FBa0NILHdCQUF3QixJQUNuSFMsMkRBQTJETixrQ0FBa0NGLDBCQUEwQjtvQkFFN0gsSUFBSSxBQUFDRiw0QkFBNEJVLDREQUE4RFgsMEJBQTBCVSx3REFBeUQ7d0JBQ2hMLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNILEdBQUdKLFVBQ0hNLGNBQWNKLG1DQUFtQ0ssR0FBRyxDQUFDLFNBQUNSLG1DQUFzQztvQkFDMUYsSUFBTU4sYUFBYU0sa0NBQWtDUyxhQUFhO29CQUVsRSxPQUFPZjtnQkFDVDtnQkFFTkQsS0FBS2lCLGlCQUFpQixDQUFDSDtnQkFFdkIsSUFBTUksd0JBQXdCQyxvQkFBcUIsQ0FBQ0MscUNBQXFDLENBQUNiO2dCQUUxRixJQUFJVywwQkFBMEIsSUFBSSxFQUFFO29CQUNsQyxJQUFNakIsYUFBYWlCLHVCQUF1QixHQUFHO29CQUU3Q2xCLEtBQUtxQixhQUFhLENBQUNwQjtnQkFDckIsQ0FBQztZQUNIOzs7WUFFQXFCLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTZixpQ0FBaUMsRUFBRUMsT0FBTyxFQUFFO1lBQ25ELEdBQUc7WUFDTDs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQywwQ0FBMEMsRUFBRTtnQkFDbEQsSUFBTXhCLE9BQU8sSUFBSSxDQUFDUyxPQUFPLElBQ25CZ0IsaURBQWlERCwyQ0FBMkNmLE9BQU8sSUFDbkdpQixrRUFBa0VGLDJDQUEyQ3BCLHdCQUF3QixJQUNySXVCLG9FQUFvRUgsMkNBQTJDbkIsMEJBQTBCLElBQ3pJdUIsYUFBYyxBQUFDNUIsU0FBU3lCLGtEQUNULElBQUksQ0FBQ3ZCLHFCQUFxQixLQUFLd0IsbUVBQy9CLElBQUksQ0FBQ3ZCLHVCQUF1QixLQUFLd0I7Z0JBRXRELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsUUFBUXRCLGlDQUFpQyxFQUFFQyxPQUFPLEVBQUU7Z0JBQ3pELElBQU1SLE9BQU9PLGtDQUFrQ0UsT0FBTyxJQUNoRFIsYUFBYU0sa0NBQWtDUyxhQUFhLElBQzVEZCx3QkFBd0JLLGtDQUFrQ0gsd0JBQXdCLElBQ2xGRCwwQkFBMEJJLGtDQUFrQ0YsMEJBQTBCLElBQ3RGbUIsNkNBQTZDLElBbEVsQ3pCLDJDQWtFaUZDLE1BQU1DLFlBQVlDLHVCQUF1QkM7Z0JBRTNJcUIsMkNBQTJDSyxPQUFPLENBQUN0QixtQ0FBbUNDO1lBQ3hGOzs7V0FyRW1CVDtFQUFtRCtCLG1CQUFtQiJ9