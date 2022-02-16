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
            key: "clearAdjustedBNF",
            value: function clearAdjustedBNF() {
                var value = "";
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getAdjustedBNF = this.getAdjustedBNF.bind(this), setAdjustedBNF = this.setAdjustedBNF.bind(this), clearAdjustedBNF = this.clearAdjustedBNF.bind(this);
                return {
                    getAdjustedBNF: getAdjustedBNF,
                    setAdjustedBNF: setAdjustedBNF,
                    clearAdjustedBNF: clearAdjustedBNF
                };
            }
        }
    ]);
    return AdjustedBNFTextarea;
}(_textarea.default);
exports.default = AdjustedBNFTextarea;
_defineProperty(AdjustedBNFTextarea, "defaultProperties", {
    className: "adjusted-bnf",
    spellCheck: "false",
    readOnly: false
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2FkanVzdGVkQk5GLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkanVzdGVkQk5GVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEFkanVzdGVkQk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGFkanVzdGVkQk5GID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGFkanVzdGVkQk5GO1xuICB9XG5cbiAgc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFkanVzdGVkQk5GOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNsZWFyQWRqdXN0ZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBcIlwiO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEFkanVzdGVkQk5GID0gdGhpcy5nZXRBZGp1c3RlZEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEFkanVzdGVkQk5GID0gdGhpcy5zZXRBZGp1c3RlZEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyQWRqdXN0ZWRCTkYgPSB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0QWRqdXN0ZWRCTkYsXG4gICAgICBzZXRBZGp1c3RlZEJORixcbiAgICAgIGNsZWFyQWRqdXN0ZWRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWRqdXN0ZWQtYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiBmYWxzZVxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJnZXRBZGp1c3RlZEJORiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwic2V0VmFsdWUiLCJjbGVhckFkanVzdGVkQk5GIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVTLEdBQWEsQ0FBYixTQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUViQSxtQkFBbUIsaUJBQXpCLFFBQVE7OzthQUFGQSxtQkFBbUI7Ozs7OztZQUN0Q0MsR0FBYyxFQUFkQSxDQUFjO21CQUFkQSxRQUFRLENBQVJBLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixHQUFLLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFdBQVcsR0FBR0YsS0FBSyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFOUIsTUFBTSxDQUFDRSxXQUFXO1lBQ3BCLENBQUM7OztZQUVEQyxHQUFjLEVBQWRBLENBQWM7bUJBQWRBLFFBQVEsQ0FBUkEsY0FBYyxDQUFDRCxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsR0FBSyxDQUFDRixLQUFLLEdBQUdFLFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRS9CLElBQUksQ0FBQ0UsUUFBUSxDQUFDSixLQUFLO1lBQ3JCLENBQUM7OztZQUVESyxHQUFnQixFQUFoQkEsQ0FBZ0I7bUJBQWhCQSxRQUFRLENBQVJBLGdCQUFnQixHQUFHLENBQUM7Z0JBQ2xCLEdBQUssQ0FBQ0wsS0FBSyxHQUFHLENBQUU7Z0JBRWhCLElBQUksQ0FBQ0ksUUFBUSxDQUFDSixLQUFLO1lBQ3JCLENBQUM7OztZQUVETSxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDUCxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNRLElBQUksQ0FBQyxJQUFJLEdBQzlDSixjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNJLElBQUksQ0FBQyxJQUFJLEdBQzlDRixnQkFBZ0IsR0FBRyxJQUFJLENBQUNBLGdCQUFnQixDQUFDRSxJQUFJLENBQUMsSUFBSTtnQkFFeEQsTUFBTSxDQUFFLENBQUM7b0JBQ1BSLGNBQWMsRUFBZEEsY0FBYztvQkFDZEksY0FBYyxFQUFkQSxjQUFjO29CQUNkRSxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtnQkFDbEIsQ0FBQztZQUNILENBQUM7Ozs7RUE5QjhDRyxTQUFRO2tCQUFwQ1YsbUJBQW1CO2dCQUFuQkEsbUJBQW1CLEVBZ0MvQlcsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQWM7SUFDekJDLFVBQVUsRUFBRSxDQUFPO0lBQ25CQyxRQUFRLEVBQUUsS0FBSztBQUNqQixDQUFDIn0=