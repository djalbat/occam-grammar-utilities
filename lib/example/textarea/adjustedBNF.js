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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var AdjustedBNFTextarea = function(Textarea) {
    _inherits(AdjustedBNFTextarea, _textarea.default);
    function AdjustedBNFTextarea() {
        _classCallCheck(this, AdjustedBNFTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(AdjustedBNFTextarea).apply(this, arguments));
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
_defineProperty(AdjustedBNFTextarea, "defaultProperties", {
    className: "adjusted-bnf",
    spellCheck: "false",
    readOnly: false
});
exports.default = AdjustedBNFTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2FkanVzdGVkQk5GLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkanVzdGVkQk5GVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEFkanVzdGVkQk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGFkanVzdGVkQk5GID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGFkanVzdGVkQk5GO1xuICB9XG5cbiAgc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFkanVzdGVkQk5GOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNsZWFyQWRqdXN0ZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBcIlwiO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEFkanVzdGVkQk5GID0gdGhpcy5nZXRBZGp1c3RlZEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEFkanVzdGVkQk5GID0gdGhpcy5zZXRBZGp1c3RlZEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyQWRqdXN0ZWRCTkYgPSB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0QWRqdXN0ZWRCTkYsXG4gICAgICBzZXRBZGp1c3RlZEJORixcbiAgICAgIGNsZWFyQWRqdXN0ZWRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWRqdXN0ZWQtYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiBmYWxzZVxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLG1CQUFBLFlBQUEsUUFBQTtjQUFBLG1CQUFBLEVBRkEsU0FBQTthQUVBLG1CQUFBOzhCQUFBLG1CQUFBO2dFQUFBLG1CQUFBOztpQkFBQSxtQkFBQTs7QUFDQSxlQUFBLEdBQUEsY0FBQTs0QkFBQSxjQUFBO29CQUNBLEtBQUEsUUFBQSxRQUFBLElBQ0EsV0FBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTt1QkFFQSxXQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGNBQUE7NEJBQUEsY0FBQSxDQUFBLFdBQUE7b0JBQ0EsS0FBQSxHQUFBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtxQkFFQSxRQUFBLENBQUEsS0FBQTs7OztBQUdBLGVBQUEsR0FBQSxnQkFBQTs0QkFBQSxnQkFBQTtvQkFDQSxLQUFBO3FCQUVBLFFBQUEsQ0FBQSxLQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGFBQUE7NEJBQUEsYUFBQTtvQkFDQSxjQUFBLFFBQUEsY0FBQSxDQUFBLElBQUEsUUFDQSxjQUFBLFFBQUEsY0FBQSxDQUFBLElBQUEsUUFDQSxnQkFBQSxRQUFBLGdCQUFBLENBQUEsSUFBQTs7QUFHQSxrQ0FBQSxFQUFBLGNBQUE7QUFDQSxrQ0FBQSxFQUFBLGNBQUE7QUFDQSxvQ0FBQSxFQUFBLGdCQUFBOzs7OztXQTVCQSxtQkFBQTtFQUZBLFNBQUE7Z0JBRUEsbUJBQUEsR0FnQ0EsaUJBQUE7QUFDQSxhQUFBLEdBQUEsWUFBQTtBQUNBLGNBQUEsR0FBQSxLQUFBO0FBQ0EsWUFBQSxFQUFBLEtBQUE7O2tCQW5DQSxtQkFBQSJ9