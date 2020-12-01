"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AdjustedBNFTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(AdjustedBNFTextarea, _Textarea);

  var _super = _createSuper(AdjustedBNFTextarea);

  function AdjustedBNFTextarea() {
    _classCallCheck(this, AdjustedBNFTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(AdjustedBNFTextarea, [{
    key: "getAdjustedBNF",
    value: function getAdjustedBNF() {
      var value = this.getValue(),
          adjustedBNF = value; ///

      return adjustedBNF;
    }
  }, {
    key: "setAdjustedBNF",
    value: function setAdjustedBNF(adjustedBNF) {
      var value = adjustedBNF; ///

      this.setValue(value);
    }
  }, {
    key: "clearAdjustedBNF",
    value: function clearAdjustedBNF() {
      var value = "";
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getAdjustedBNF = this.getAdjustedBNF.bind(this),
          setAdjustedBNF = this.setAdjustedBNF.bind(this),
          clearAdjustedBNF = this.clearAdjustedBNF.bind(this);
      return {
        getAdjustedBNF: getAdjustedBNF,
        setAdjustedBNF: setAdjustedBNF,
        clearAdjustedBNF: clearAdjustedBNF
      };
    }
  }]);

  return AdjustedBNFTextarea;
}(_textarea["default"]);

exports["default"] = AdjustedBNFTextarea;

_defineProperty(AdjustedBNFTextarea, "defaultProperties", {
  className: "adjusted-bnf",
  spellCheck: "false",
  readOnly: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkanVzdGVkQk5GLmpzIl0sIm5hbWVzIjpbIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJ2YWx1ZSIsImdldFZhbHVlIiwiYWRqdXN0ZWRCTkYiLCJzZXRWYWx1ZSIsImdldEFkanVzdGVkQk5GIiwiYmluZCIsInNldEFkanVzdGVkQk5GIiwiY2xlYXJBZGp1c3RlZEJORiIsIlRleHRhcmVhIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7Ozs7O3FDQUNGO0FBQ2YsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFdBQVcsR0FBR0YsS0FEcEIsQ0FEZSxDQUVZOztBQUUzQixhQUFPRSxXQUFQO0FBQ0Q7OzttQ0FFY0EsVyxFQUFhO0FBQzFCLFVBQU1GLEtBQUssR0FBR0UsV0FBZCxDQUQwQixDQUNFOztBQUU1QixXQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNQSxLQUFLLEdBQUcsRUFBZDtBQUVBLFdBQUtHLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxjQUFjLEdBQUcsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdkI7QUFBQSxVQUNNQyxjQUFjLEdBQUcsS0FBS0EsY0FBTCxDQUFvQkQsSUFBcEIsQ0FBeUIsSUFBekIsQ0FEdkI7QUFBQSxVQUVNRSxnQkFBZ0IsR0FBRyxLQUFLQSxnQkFBTCxDQUFzQkYsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FGekI7QUFJQSxhQUFRO0FBQ05ELFFBQUFBLGNBQWMsRUFBZEEsY0FETTtBQUVORSxRQUFBQSxjQUFjLEVBQWRBLGNBRk07QUFHTkMsUUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUhNLE9BQVI7QUFLRDs7OztFQTlCOENDLG9COzs7O2dCQUE1QlQsbUIsdUJBZ0NRO0FBQ3pCVSxFQUFBQSxTQUFTLEVBQUUsY0FEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLE9BRmE7QUFHekJDLEVBQUFBLFFBQVEsRUFBRTtBQUhlLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGp1c3RlZEJORlRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRBZGp1c3RlZEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBhZGp1c3RlZEJORiA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBhZGp1c3RlZEJORjtcbiAgfVxuXG4gIHNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhZGp1c3RlZEJORjsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjbGVhckFkanVzdGVkQk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gXCJcIjtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRBZGp1c3RlZEJORiA9IHRoaXMuZ2V0QWRqdXN0ZWRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRBZGp1c3RlZEJORiA9IHRoaXMuc2V0QWRqdXN0ZWRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhckFkanVzdGVkQk5GID0gdGhpcy5jbGVhckFkanVzdGVkQk5GLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEFkanVzdGVkQk5GLFxuICAgICAgc2V0QWRqdXN0ZWRCTkYsXG4gICAgICBjbGVhckFkanVzdGVkQk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFkanVzdGVkLWJuZlwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogZmFsc2VcbiAgfTtcbn1cbiJdfQ==