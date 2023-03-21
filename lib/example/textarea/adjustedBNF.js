"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _textarea = /*#__PURE__*/ _interopRequireDefault(require("../textarea"));
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  height: 56rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
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
var _default = (0, _easyWithStyle.default)(AdjustedBNFTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2FkanVzdGVkQk5GLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmNsYXNzIEFkanVzdGVkQk5GVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEFkanVzdGVkQk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGFkanVzdGVkQk5GID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGFkanVzdGVkQk5GO1xuICB9XG5cbiAgc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFkanVzdGVkQk5GOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0QWRqdXN0ZWRCTkYgPSB0aGlzLmdldEFkanVzdGVkQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0QWRqdXN0ZWRCTkYgPSB0aGlzLnNldEFkanVzdGVkQk5GLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEFkanVzdGVkQk5GLFxuICAgICAgc2V0QWRqdXN0ZWRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYWRqdXN0ZWQtYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiBmYWxzZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWRqdXN0ZWRCTkZUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiA1NnJlbTtcbiAgXG5gOyJdLCJuYW1lcyI6WyJBZGp1c3RlZEJORlRleHRhcmVhIiwiZ2V0QWRqdXN0ZWRCTkYiLCJ2YWx1ZSIsImdldFZhbHVlIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQ0E7OztlQUFBOzs7a0VBbkNzQjs2REFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsb0NBK0JILEFBL0JIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsSUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLGNBQWNGLE9BQU8sR0FBRztnQkFFOUIsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRCxXQUFXLEVBQUU7Z0JBQzFCLElBQU1GLFFBQVFFLGFBQWMsR0FBRztnQkFFL0IsSUFBSSxDQUFDRSxRQUFRLENBQUNKO1lBQ2hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNTixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNPLElBQUksQ0FBQyxJQUFJLEdBQzlDSCxpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNHLElBQUksQ0FBQyxJQUFJO2dCQUVwRCxPQUFRO29CQUNOUCxnQkFBQUE7b0JBQ0FJLGdCQUFBQTtnQkFDRjtZQUNGOzs7V0F0QklMO0VBQTRCUyxpQkFBUTtBQXdCeEMsZ0JBeEJJVCxxQkF3QkdVLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxZQUFZO0lBQ1pDLFVBQVUsS0FBSztBQUNqQjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNkIn0=