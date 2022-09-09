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
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../../operation/definition"));
var _replacementDefinition = /*#__PURE__*/ _interopRequireDefault(require("../../replacementDefinition"));
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
var IndirectlyLeftRecursiveDefinitionOperation = /*#__PURE__*/ function(DefinitionOperation) {
    _inherits(IndirectlyLeftRecursiveDefinitionOperation, DefinitionOperation);
    var _super = _createSuper(IndirectlyLeftRecursiveDefinitionOperation);
    function IndirectlyLeftRecursiveDefinitionOperation(definition, leftRecursiveRuleName) {
        _classCallCheck(this, IndirectlyLeftRecursiveDefinitionOperation);
        var _this;
        _this = _super.call(this, definition);
        _this.leftRecursiveRuleName = leftRecursiveRuleName;
        return _this;
    }
    _createClass(IndirectlyLeftRecursiveDefinitionOperation, [
        {
            key: "getLeftRecursiveRuleName",
            value: function getLeftRecursiveRuleName() {
                return this.leftRecursiveRuleName;
            }
        },
        {
            key: "apply",
            value: function apply(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), replacementDefinition = _replacementDefinition.default.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveRuleName), indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, function(indirectlyLeftRecursiveDefinition) {
                    var indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();
                    if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName) {
                        return true;
                    }
                }, context), definition = replacementDefinition, definitions = indirectlyLeftRecursiveDefinitions.map(function(removedLeftRecursiveDefinition) {
                    var definition = removedLeftRecursiveDefinition.getDefinition();
                    return definition;
                }); ///
                rule.addDefinition(definition);
                rule.removeDefinitions(definitions);
                return indirectlyLeftRecursiveDefinitions;
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
                var definition = this.getDefinition(), indirectlyLeftRecursiveDefinitionOperationDefinition = indirectlyLeftRecursiveDefinitionOperation.getDefinition(), indirectlyLeftRecursiveDefinitionOperationLeftRecursiveRuleName = indirectlyLeftRecursiveDefinitionOperation.getLeftRecursiveRuleName(), comparesTo = definition === indirectlyLeftRecursiveDefinitionOperationDefinition && this.leftRecursiveRuleName === indirectlyLeftRecursiveDefinitionOperationLeftRecursiveRuleName;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var definition = indirectlyLeftRecursiveDefinition.getDefinition(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyLeftRecursiveDefinitionOperation = new IndirectlyLeftRecursiveDefinitionOperation(definition, leftRecursiveRuleName), indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, context);
                return indirectlyLeftRecursiveDefinitions;
            }
        }
    ]);
    return IndirectlyLeftRecursiveDefinitionOperation;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb25PcGVyYXRpb24gZnJvbSBcIi4uLy4uL29wZXJhdGlvbi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUmVwbGFjZW1lbnREZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudERlZmluaXRpb25cIjtcblxuaW1wb3J0IHsgZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbk9wZXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIHN1cGVyKGRlZmluaXRpb24pO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgYXBwbHkoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgY29udGV4dCksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgocmVtb3ZlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gcmVtb3ZlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgICAgfSk7IC8vL1xuXG4gICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgcnVsZS5yZW1vdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxuXG4gIHJldHJpZXZlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgY29tcGFyZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAoKGRlZmluaXRpb24gPT09IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbkRlZmluaXRpb24pICYmICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5leGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJkZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiYXBwbHkiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJjb250ZXh0IiwicnVsZSIsImdldFJ1bGUiLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJSZXBsYWNlbWVudERlZmluaXRpb24iLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJtYXAiLCJyZW1vdmVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwiYWRkRGVmaW5pdGlvbiIsInJlbW92ZURlZmluaXRpb25zIiwicmV0cmlldmUiLCJjb21wYXJlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImNvbXBhcmVzVG8iLCJleGVjdXRlIiwiRGVmaW5pdGlvbk9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBT1FBLDBDQUEwQzs7OytEQUwvQiw0QkFBNEI7MEVBQzFCLDZCQUE2Qjt1QkFFUix5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakUsSUFBQSxBQUFNQSwwQ0FBMEMsaUJBQWhEO2NBQU1BLDBDQUEwQzs4QkFBMUNBLDBDQUEwQzthQUExQ0EsMENBQTBDLENBQ2pEQyxVQUFVLEVBQUVDLHFCQUFxQjs4QkFEMUJGLDBDQUEwQzs7a0NBRXJEQyxVQUFVLEVBQUU7UUFFbEIsTUFBS0MscUJBQXFCLEdBQUdBLHFCQUFxQixDQUFDOzs7aUJBSmxDRiwwQ0FBMEM7O1lBTzdERyxHQUF3QixFQUF4QkEsMEJBQXdCO21CQUF4QkEsU0FBQUEsd0JBQXdCLEdBQUc7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDRCxxQkFBcUIsQ0FBQztZQUNwQyxDQUFDOzs7WUFFREUsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLGlDQUFpQyxFQUFFQyxPQUFPLEVBQUU7Z0JB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