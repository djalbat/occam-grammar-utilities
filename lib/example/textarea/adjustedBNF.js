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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AdjustedBNFTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(AdjustedBNFTextarea, _Textarea);

  function AdjustedBNFTextarea() {
    _classCallCheck(this, AdjustedBNFTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdjustedBNFTextarea).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkanVzdGVkQk5GLmpzIl0sIm5hbWVzIjpbIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJ2YWx1ZSIsImdldFZhbHVlIiwiYWRqdXN0ZWRCTkYiLCJzZXRWYWx1ZSIsImdldEFkanVzdGVkQk5GIiwiYmluZCIsInNldEFkanVzdGVkQk5GIiwiY2xlYXJBZGp1c3RlZEJORiIsIlRleHRhcmVhIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7OztxQ0FDRjtBQUNmLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxXQUFXLEdBQUdGLEtBRHBCLENBRGUsQ0FFWTs7QUFFM0IsYUFBT0UsV0FBUDtBQUNEOzs7bUNBRWNBLFcsRUFBYTtBQUMxQixVQUFNRixLQUFLLEdBQUdFLFdBQWQsQ0FEMEIsQ0FDRTs7QUFFNUIsV0FBS0MsUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUEsS0FBSyxHQUFHLEVBQWQ7QUFFQSxXQUFLRyxRQUFMLENBQWNILEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUksY0FBYyxHQUFHLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXZCO0FBQUEsVUFDTUMsY0FBYyxHQUFHLEtBQUtBLGNBQUwsQ0FBb0JELElBQXBCLENBQXlCLElBQXpCLENBRHZCO0FBQUEsVUFFTUUsZ0JBQWdCLEdBQUcsS0FBS0EsZ0JBQUwsQ0FBc0JGLElBQXRCLENBQTJCLElBQTNCLENBRnpCO0FBSUEsYUFBUTtBQUNORCxRQUFBQSxjQUFjLEVBQWRBLGNBRE07QUFFTkUsUUFBQUEsY0FBYyxFQUFkQSxjQUZNO0FBR05DLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFITSxPQUFSO0FBS0Q7Ozs7RUE5QjhDQyxvQjs7OztnQkFBNUJULG1CLHVCQWdDUTtBQUN6QlUsRUFBQUEsU0FBUyxFQUFFLGNBRGM7QUFFekJDLEVBQUFBLFVBQVUsRUFBRSxPQUZhO0FBR3pCQyxFQUFBQSxRQUFRLEVBQUU7QUFIZSxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRqdXN0ZWRCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0QWRqdXN0ZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgYWRqdXN0ZWRCTkYgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gYWRqdXN0ZWRCTkY7XG4gIH1cblxuICBzZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORikge1xuICAgIGNvbnN0IHZhbHVlID0gYWRqdXN0ZWRCTkY7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJBZGp1c3RlZEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFwiXCI7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0QWRqdXN0ZWRCTkYgPSB0aGlzLmdldEFkanVzdGVkQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0QWRqdXN0ZWRCTkYgPSB0aGlzLnNldEFkanVzdGVkQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJBZGp1c3RlZEJORiA9IHRoaXMuY2xlYXJBZGp1c3RlZEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRBZGp1c3RlZEJORixcbiAgICAgIHNldEFkanVzdGVkQk5GLFxuICAgICAgY2xlYXJBZGp1c3RlZEJORlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhZGp1c3RlZC1ibmZcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IGZhbHNlXG4gIH07XG59XG4iXX0=