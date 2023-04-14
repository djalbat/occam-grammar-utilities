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
var _definition = /*#__PURE__*/ _interop_require_default(require("../../operation/definition"));
var _replacement = /*#__PURE__*/ _interop_require_default(require("../../definition/replacement"));
var _indirectly = /*#__PURE__*/ _interop_require_default(require("../../recursiveDefinition/left/indirectly"));
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
var DirectlyLeftRecursiveDefinitionOperation = /*#__PURE__*/ function(DefinitionOperation) {
    _inherits(DirectlyLeftRecursiveDefinitionOperation, DefinitionOperation);
    var _super = _create_super(DirectlyLeftRecursiveDefinitionOperation);
    function DirectlyLeftRecursiveDefinitionOperation() {
        _class_call_check(this, DirectlyLeftRecursiveDefinitionOperation);
        return _super.apply(this, arguments);
    }
    _create_class(DirectlyLeftRecursiveDefinitionOperation, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9kaXJlY3RseUxlZnRSZWN1cnNpdmUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uT3BlcmF0aW9uIGZyb20gXCIuLi8uLi9vcGVyYXRpb24vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJlcGxhY2VtZW50RGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbk9wZXJhdGlvbiB7XG4gIGFwcGx5KGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBkaXJlY3RseVJlZHVjZWRSdWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjb250ZXh0KTtcblxuICAgIHJ1bGUucmVtb3ZlQWxsRGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVkdWNlZFJ1bGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZWR1Y2VkUnVsZSk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlcGVhdGVkUnVsZSksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gcmVwbGFjZW1lbnREZWZpbml0aW9uOyAvLy9cblxuICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVEZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxuXG4gIHJldHJpZXZlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRpcmVjdGx5UmVwZWF0ZWRSdWxlLCBkaXJlY3RseVJlZHVjZWRSdWxlLCBjb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlcGVhdGVkUnVsZSwgZGlyZWN0bHlSZWR1Y2VkUnVsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uKHJ1bGUsIGRlZmluaXRpb24pLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uLmV4ZWN1dGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIGRpcmVjdGx5UmVkdWNlZFJ1bGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiIsImFwcGx5IiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImNvbnRleHQiLCJydWxlIiwiZ2V0UnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlbW92ZUFsbERlZmluaXRpb25zIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwiUmVwbGFjZW1lbnREZWZpbml0aW9uIiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbiIsImFkZERlZmluaXRpb24iLCJtYXAiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZXRyaWV2ZSIsImV4ZWN1dGUiLCJnZXREZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiIsIkRlZmluaXRpb25PcGVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O2lFQVBXO2tFQUNFO2lFQUVZO3VCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEseURBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQywrQkFBK0IsRUFBRUMsb0JBQW9CLEVBQUVDLG1CQUFtQixFQUFFQyxPQUFPLEVBQUU7Z0JBQ3pGLElBQU1DLE9BQU9KLGdDQUFnQ0ssT0FBTztnQkFFcEQsSUFBSUMscUNBQXFDQyxJQUFBQSwrQ0FBc0MsRUFBQ0gsTUFBTUQ7Z0JBRXRGQyxLQUFLSSxvQkFBb0I7Z0JBRXpCLElBQU1DLHdCQUF3QkMsb0JBQXFCLENBQUNDLHlEQUF5RCxDQUFDWCxpQ0FBaUNFO2dCQUUvSSxJQUFJTywwQkFBMEIsSUFBSSxFQUFFO29CQUNsQyxJQUFNRyxhQUFhSCx1QkFBdUIsR0FBRztvQkFFN0NMLEtBQUtTLGFBQWEsQ0FBQ0Q7Z0JBQ3JCLENBQUM7Z0JBRUROLHFDQUFxQ0EsbUNBQW1DUSxHQUFHLENBQUMsU0FBQ0MsbUNBQXNDO29CQUNqSCxJQUFNQywyQkFBMkJELGtDQUFrQ0UsMkJBQTJCLElBQ3hGUix3QkFBd0JDLG9CQUFxQixDQUFDUSw0REFBNEQsQ0FBQ0gsbUNBQW1DZCx1QkFDOUlXLGFBQWFILHVCQUF1QixHQUFHO29CQUU3Q0wsS0FBS1MsYUFBYSxDQUFDRDtvQkFFbkJHLG9DQUFvQ0ksbUJBQWlDLENBQUNDLDZDQUE2QyxDQUFDaEIsTUFBTVEsWUFBWUk7b0JBRXRJLE9BQU9EO2dCQUNUO2dCQUVBLE9BQU9UO1lBQ1Q7OztZQUVBZSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU3JCLCtCQUErQixFQUFFQyxvQkFBb0IsRUFBRUMsbUJBQW1CLEVBQUVDLE9BQU8sRUFBRTtZQUM1RixHQUFHO1lBQ0w7Ozs7WUFFT21CLEtBQUFBO21CQUFQLFNBQU9BLFFBQVF0QiwrQkFBK0IsRUFBRUMsb0JBQW9CLEVBQUVDLG1CQUFtQixFQUFFQyxPQUFPLEVBQUU7Z0JBQ2xHLElBQU1DLE9BQU9KLGdDQUFnQ0ssT0FBTyxJQUM5Q08sYUFBYVosZ0NBQWdDdUIsYUFBYSxJQUMxREMsMkNBQTJDLElBdENoQzFCLHlDQXNDNkVNLE1BQU1RLGFBQzlGTixxQ0FBcUNrQix5Q0FBeUNGLE9BQU8sQ0FBQ3RCLGlDQUFpQ0Msc0JBQXNCQyxxQkFBcUJDO2dCQUV4SyxPQUFPRztZQUNUOzs7V0ExQ21CUjtFQUFpRDJCLG1CQUFtQiJ9