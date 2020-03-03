'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy');

var InputElement = easy.InputElement;

var EliminateCyclesCheckbox = /*#__PURE__*/function (_InputElement) {
  _inherits(EliminateCyclesCheckbox, _InputElement);

  function EliminateCyclesCheckbox() {
    _classCallCheck(this, EliminateCyclesCheckbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(EliminateCyclesCheckbox).apply(this, arguments));
  }

  _createClass(EliminateCyclesCheckbox, null, [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(EliminateCyclesCheckbox, properties);
    }
  }]);

  return EliminateCyclesCheckbox;
}(InputElement);

Object.assign(EliminateCyclesCheckbox, {
  tagName: 'checkbox',
  defaultProperties: {
    className: 'eliminate-cycles',
    disabled: false
  }
});
module.exports = EliminateCyclesCheckbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsaW1pbmF0ZUN5Y2xlcy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIkVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyx1Qjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBRSxhQUFPRixZQUFZLENBQUNHLGNBQWIsQ0FBNEJGLHVCQUE1QixFQUFxREMsVUFBckQsQ0FBUDtBQUEwRTs7OztFQUQxRUYsWTs7QUFJdENJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSix1QkFBZCxFQUF1QztBQUNyQ0ssRUFBQUEsT0FBTyxFQUFFLFVBRDRCO0FBRXJDQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLGtCQURNO0FBRWpCQyxJQUFBQSxRQUFRLEVBQUU7QUFGTztBQUZrQixDQUF2QztBQVFBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLHVCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhFbGltaW5hdGVDeWNsZXNDaGVja2JveCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGltaW5hdGVDeWNsZXNDaGVja2JveCwge1xuICB0YWdOYW1lOiAnY2hlY2tib3gnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2VsaW1pbmF0ZS1jeWNsZXMnLFxuICAgIGRpc2FibGVkOiBmYWxzZVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGltaW5hdGVDeWNsZXNDaGVja2JveDtcbiJdfQ==