"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionOperation;
    }
});
var _operation = /*#__PURE__*/ _interopRequireDefault(require("../operation"));
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
var DefinitionOperation = /*#__PURE__*/ function(Operation) {
    _inherits(DefinitionOperation, Operation);
    var _super = _createSuper(DefinitionOperation);
    function DefinitionOperation(rule, definition) {
        _classCallCheck(this, DefinitionOperation);
        var _this;
        _this = _super.call(this);
        _this.rule = rule;
        _this.definition = definition;
        return _this;
    }
    _createClass(DefinitionOperation, [
        {
            key: "getRule",
            value: function getRule() {
                return this.rule;
            }
        },
        {
            key: "getDefinition",
            value: function getDefinition() {
                return this.definition;
            }
        },
        {
            key: "compare",
            value: function compare(definitionOperation) {
                var definition = definitionOperation.getDefinition(), comparesTo = this.definition === definition;
                return comparesTo;
            }
        }
    ]);
    return DefinitionOperation;
}(_operation.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25PcGVyYXRpb24gZXh0ZW5kcyBPcGVyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlLCBkZWZpbml0aW9uKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucnVsZSA9IHJ1bGU7XG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGNvbXBhcmUoZGVmaW5pdGlvbk9wZXJhdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBkZWZpbml0aW9uT3BlcmF0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gKHRoaXMuZGVmaW5pdGlvbiA9PT0gZGVmaW5pdGlvbik7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZWZpbml0aW9uT3BlcmF0aW9uIiwicnVsZSIsImRlZmluaXRpb24iLCJnZXRSdWxlIiwiZ2V0RGVmaW5pdGlvbiIsImNvbXBhcmUiLCJkZWZpbml0aW9uT3BlcmF0aW9uIiwiY29tcGFyZXNUbyIsIk9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7OERBRkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFBLEFBQU1BLG9DQUFOO2NBQU1BOzhCQUFBQTthQUFBQSxvQkFDUEMsSUFBSSxFQUFFQyxVQUFVOzhCQURURjs7O1FBSWpCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxVQUFVLEdBQUdBOzs7aUJBTERGOztZQVFuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLG1CQUFtQixFQUFFO2dCQUMzQixJQUFNSixhQUFhSSxvQkFBb0JGLGFBQWEsSUFDOUNHLGFBQWMsSUFBSSxDQUFDTCxVQUFVLEtBQUtBO2dCQUV4QyxPQUFPSztZQUNUOzs7V0FyQm1CUDtFQUE0QlEsa0JBQVMifQ==