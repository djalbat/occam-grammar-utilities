'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var EliminateCyclesCheckbox = function (_InputElement) {
  _inherits(EliminateCyclesCheckbox, _InputElement);

  function EliminateCyclesCheckbox() {
    _classCallCheck(this, EliminateCyclesCheckbox);

    return _possibleConstructorReturn(this, (EliminateCyclesCheckbox.__proto__ || Object.getPrototypeOf(EliminateCyclesCheckbox)).apply(this, arguments));
  }

  _createClass(EliminateCyclesCheckbox, null, [{
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2NoZWNrYm94L2VsaW1pbmF0ZUN5Y2xlcy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIkVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyx1Qjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBRSxhQUFPRixhQUFhRyxjQUFiLENBQTRCRix1QkFBNUIsRUFBcURDLFVBQXJELENBQVA7QUFBMEU7Ozs7RUFEMUVGLFk7O0FBSXRDSSxPQUFPQyxNQUFQLENBQWNKLHVCQUFkLEVBQXVDO0FBQ3JDSyxXQUFTLFVBRDRCO0FBRXJDQyxxQkFBbUI7QUFDakJDLGVBQVcsa0JBRE07QUFFakJDLGNBQVU7QUFGTztBQUZrQixDQUF2Qzs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQlYsdUJBQWpCIiwiZmlsZSI6ImVsaW1pbmF0ZUN5Y2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhFbGltaW5hdGVDeWNsZXNDaGVja2JveCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGltaW5hdGVDeWNsZXNDaGVja2JveCwge1xuICB0YWdOYW1lOiAnY2hlY2tib3gnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2VsaW1pbmF0ZS1jeWNsZXMnLFxuICAgIGRpc2FibGVkOiBmYWxzZVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGltaW5hdGVDeWNsZXNDaGVja2JveDtcbiJdfQ==