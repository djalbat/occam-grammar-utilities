"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var AdjustedBNFTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(AdjustedBNFTextarea, Textarea);
    var _super = _createSuper(AdjustedBNFTextarea);
    function AdjustedBNFTextarea() {
        _classCallCheck(this, AdjustedBNFTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(AdjustedBNFTextarea, [
        {
            key: "getAdjustedBNF",
            value: function getAdjustedBNF() {
                var value = this.getValue(), adjustedBNF = value; ///
                return adjustedBNF;
            }
        },
        {
            key: "setAdjustedBNF",
            value: function setAdjustedBNF(adjustedBNF) {
                var value = adjustedBNF; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getAdjustedBNF = this.getAdjustedBNF.bind(this), setAdjustedBNF = this.setAdjustedBNF.bind(this);
                return {
                    getAdjustedBNF: getAdjustedBNF,
                    setAdjustedBNF: setAdjustedBNF
                };
            }
        }
    ]);
    return AdjustedBNFTextarea;
}(_textarea.default);
_defineProperty(AdjustedBNFTextarea, "defaultProperties", {
    className: "adjusted-bnf",
    spellCheck: "false",
    readOnly: false
});
exports.default = AdjustedBNFTextarea;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2FkanVzdGVkQk5GLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkanVzdGVkQk5GVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEFkanVzdGVkQk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGFkanVzdGVkQk5GID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGFkanVzdGVkQk5GO1xuICB9XG5cbiAgc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFkanVzdGVkQk5GOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0QWRqdXN0ZWRCTkYgPSB0aGlzLmdldEFkanVzdGVkQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0QWRqdXN0ZWRCTkYgPSB0aGlzLnNldEFkanVzdGVkQk5GLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEFkanVzdGVkQk5GLFxuICAgICAgc2V0QWRqdXN0ZWRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWRqdXN0ZWQtYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiBmYWxzZVxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJBZGp1c3RlZEJORlRleHRhcmVhIiwiZ2V0QWRqdXN0ZWRCTkYiLCJ2YWx1ZSIsImdldFZhbHVlIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVEsSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSxtQkFBbUIsaUJDSnJDLEFESVk7OzthQUFNQSxtQkFBbUI7Ozs7OztZQUN0Q0MsR0FBYyxFQUFkQSxnQkFBYzttQkFBZEEsU0FBQUEsY0FBYyxHQUFHO2dCQUNmLElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsRUFBRSxFQUN2QkMsV0FBVyxHQUFHRixLQUFLLEFBQUMsRUFBQyxHQUFHO2dCQUU5QixPQUFPRSxXQUFXLENBQUM7YUFDcEI7OztZQUVEQyxHQUFjLEVBQWRBLGdCQUFjO21CQUFkQSxTQUFBQSxjQUFjLENBQUNELFdBQVcsRUFBRTtnQkFDMUIsSUFBTUYsS0FBSyxHQUFHRSxXQUFXLEFBQUMsRUFBRSxHQUFHO2dCQUUvQixJQUFJLENBQUNFLFFBQVEsQ0FBQ0osS0FBSyxDQUFDLENBQUM7YUFDdEI7OztZQUVESyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNTixjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDL0NILGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDO2dCQUV0RCxPQUFRO29CQUNOUCxjQUFjLEVBQWRBLGNBQWM7b0JBQ2RJLGNBQWMsRUFBZEEsY0FBYztpQkFDZixDQUFFO2FBQ0o7Ozs7Q0FPRixDQTdCZ0RJLFNBQVEsUUFBQSxDQTZCeEQ7QUFMQyxnQkF4Qm1CVCxtQkFBbUIsRUF3Qi9CVSxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLGNBQWM7SUFDekJDLFVBQVUsRUFBRSxPQUFPO0lBQ25CQyxRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO2tCQTVCaUJiLG1CQUFtQiJ9