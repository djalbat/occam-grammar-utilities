"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  border: 1px solid darkgrey;\n  padding: 0.25rem;\n  font-size: 1.2rem;\n  font-family: monospace;\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var LexicalPatternInput = /*#__PURE__*/function (_Input) {
  _inherits(LexicalPatternInput, _Input);

  function LexicalPatternInput() {
    _classCallCheck(this, LexicalPatternInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(LexicalPatternInput).apply(this, arguments));
  }

  _createClass(LexicalPatternInput, [{
    key: "getLexicalPattern",
    value: function getLexicalPattern() {
      var value = this.getValue(),
          lexicalPattern = value; ///

      return lexicalPattern;
    }
  }, {
    key: "setLexicalPattern",
    value: function setLexicalPattern(lexicalPattern) {
      var value = lexicalPattern; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getLexicalPattern = this.getLexicalPattern.bind(this),
          setLexicalPattern = this.setLexicalPattern.bind(this);
      return {
        getLexicalPattern: getLexicalPattern,
        setLexicalPattern: setLexicalPattern
      };
    }
  }]);

  return LexicalPatternInput;
}(_easy.Input);

_defineProperty(LexicalPatternInput, "defaultProperties", {
  className: "lexical-pattern",
  spellCheck: "false"
});

var _default = (0, _easyWithStyle["default"])(LexicalPatternInput)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGljYWxQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJ2YWx1ZSIsImdldFZhbHVlIiwibGV4aWNhbFBhdHRlcm4iLCJzZXRWYWx1ZSIsImdldExleGljYWxQYXR0ZXJuIiwiYmluZCIsInNldExleGljYWxQYXR0ZXJuIiwiSW5wdXQiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsbUI7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsY0FBYyxHQUFHRixLQUR2QixDQURrQixDQUVZOztBQUU5QixhQUFPRSxjQUFQO0FBQ0Q7OztzQ0FFaUJBLGMsRUFBZ0I7QUFDaEMsVUFBTUYsS0FBSyxHQUFHRSxjQUFkLENBRGdDLENBQ0Y7O0FBRTlCLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxpQkFBaUIsR0FBRyxLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBMUI7QUFBQSxVQUNNQyxpQkFBaUIsR0FBRyxLQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FEMUI7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBRE07QUFFTkUsUUFBQUEsaUJBQWlCLEVBQWpCQTtBQUZNLE9BQVI7QUFJRDs7OztFQXRCK0JDLFc7O2dCQUE1QlIsbUIsdUJBd0J1QjtBQUN6QlMsRUFBQUEsU0FBUyxFQUFFLGlCQURjO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUU7QUFGYSxDOztlQU1kLCtCQUFVVixtQkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImVhc3lcIjtcblxuY2xhc3MgTGV4aWNhbFBhdHRlcm5JbnB1dCBleHRlbmRzIElucHV0IHtcbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybikge1xuICAgIGNvbnN0IHZhbHVlID0gbGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldExleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldExleGljYWxQYXR0ZXJuID0gdGhpcy5zZXRMZXhpY2FsUGF0dGVybi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRMZXhpY2FsUGF0dGVybixcbiAgICAgIHNldExleGljYWxQYXR0ZXJuXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxleGljYWwtcGF0dGVyblwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGV4aWNhbFBhdHRlcm5JbnB1dClgXG5cbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBcbmA7XG4iXX0=