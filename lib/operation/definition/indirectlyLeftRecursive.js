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
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
    function IndirectlyLeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition) {
        _classCallCheck(this, IndirectlyLeftRecursiveDefinitionOperation);
        var _this;
        _this = _super.call(this, rule, definition);
        _this.leftRecursiveRuleName = leftRecursiveRuleName;
        _this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
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
            key: "getIndirectlyLeftRecursiveDefinition",
            value: function getIndirectlyLeftRecursiveDefinition() {
                return this.indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "apply",
            value: function apply(context) {
                var rule = this.getRule();
                var indirectlyLeftRecursiveDefinitions;
                var leftRecursiveRuleName = this.getLeftRecursiveRuleName();
                var replacementDefinition = _replacementDefinition.default.fromIndirectlyLeftRecursiveDefinition(this.indirectlyLeftRecursiveDefinition, leftRecursiveRuleName);
                var definition = replacementDefinition; ///
                rule.addDefinition(definition);
                definition = this.getDefinition();
                var definitions = rule.getDefinitions(), definitionsIncludesDefinition = definitions.includes(definition);
                if (definitionsIncludesDefinition) {
                    indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, function(indirectlyLeftRecursiveDefinition) {
                        var indirectlyLeftRecursiveDefinitionDefinition = indirectlyLeftRecursiveDefinition.getDefinition(), indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();
                        if (indirectlyLeftRecursiveDefinitionDefinition !== definition && indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName) {
                            return true;
                        }
                    }, context);
                    indirectlyLeftRecursiveDefinitions = [
                        this.indirectlyLeftRecursiveDefinition
                    ].concat(_toConsumableArray(indirectlyLeftRecursiveDefinitions));
                    var definitions1 = indirectlyLeftRecursiveDefinitions.map(function(removedLeftRecursiveDefinition) {
                        var definition = removedLeftRecursiveDefinition.getDefinition();
                        return definition;
                    });
                    rule.removeDefinitions(definitions1);
                } else {
                    indirectlyLeftRecursiveDefinitions = [
                        this.indirectlyLeftRecursiveDefinition
                    ];
                }
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
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), definition = indirectlyLeftRecursiveDefinition.getDefinition(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyLeftRecursiveDefinitionOperation = new IndirectlyLeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition), indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitionOperation.execute(context);
                return indirectlyLeftRecursiveDefinitions;
            }
        }
    ]);
    return IndirectlyLeftRecursiveDefinitionOperation;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb25PcGVyYXRpb24gZnJvbSBcIi4uLy4uL29wZXJhdGlvbi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUmVwbGFjZW1lbnREZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudERlZmluaXRpb25cIjtcblxuaW1wb3J0IHsgZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbk9wZXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGUsIGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgICB0aGlzLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBnZXRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgYXBwbHkoY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGUoKTtcblxuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IFJlcGxhY2VtZW50RGVmaW5pdGlvbi5mcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgbGV0IGRlZmluaXRpb24gPSByZXBsYWNlbWVudERlZmluaXRpb247IC8vL1xuXG4gICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSBkZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKTtcblxuICAgICAgICBpZiAoKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlZmluaXRpb24gIT09IGRlZmluaXRpb24pICYmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbICAvLy9cbiAgICAgICAgdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sXG4gICAgICAgIC4uLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNcbiAgICAgIF07XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKHJlbW92ZWRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gcmVtb3ZlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKTtcblxuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgIH0pO1xuXG4gICAgICBydWxlLnJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtcbiAgICAgICAgdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25cbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICByZXRyaWV2ZShjb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZXhlY3V0ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbihydWxlLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5leGVjdXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIiwicnVsZSIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhcHBseSIsImNvbnRleHQiLCJnZXRSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsIlJlcGxhY2VtZW50RGVmaW5pdGlvbiIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiIsImluY2x1ZGVzIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibWFwIiwicmVtb3ZlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJyZXRyaWV2ZSIsImV4ZWN1dGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24iLCJEZWZpbml0aW9uT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFPUUEsMENBQTBDOzs7K0RBTC9CLDRCQUE0QjswRUFDMUIsNkJBQTZCO3VCQUVSLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakUsSUFBQSxBQUFNQSwwQ0FBMEMsaUJBQWhEO2NBQU1BLDBDQUEwQzs4QkFBMUNBLDBDQUEwQzthQUExQ0EsMENBQTBD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