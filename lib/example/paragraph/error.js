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

var Element = easy.Element;

var ErrorParagraph = /*#__PURE__*/function (_Element) {
  _inherits(ErrorParagraph, _Element);

  function ErrorParagraph() {
    _classCallCheck(this, ErrorParagraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorParagraph).apply(this, arguments));
  }

  _createClass(ErrorParagraph, [{
    key: "showError",
    value: function showError(error) {
      var html = error; ///

      this.html(html);
      this.show();
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var showError = this.showError.bind(this),
          hideError = this.hide.bind(this); ///

      return {
        showError: showError,
        hideError: hideError
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return Element.fromProperties(ErrorParagraph, properties);
    }
  }]);

  return ErrorParagraph;
}(Element);

Object.assign(ErrorParagraph, {
  tagName: 'p',
  defaultProperties: {
    className: 'error'
  }
});
module.exports = ErrorParagraph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiRWxlbWVudCIsIkVycm9yUGFyYWdyYXBoIiwiZXJyb3IiLCJodG1sIiwic2hvdyIsInNob3dFcnJvciIsImJpbmQiLCJoaWRlRXJyb3IiLCJoaWRlIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLGM7Ozs7Ozs7Ozs7OzhCQUNNQyxLLEVBQU87QUFDZixVQUFNQyxJQUFJLEdBQUdELEtBQWIsQ0FEZSxDQUNLOztBQUVwQixXQUFLQyxJQUFMLENBQVVBLElBQVY7QUFFQSxXQUFLQyxJQUFMO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLFNBQVMsR0FBRyxLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBQSxVQUNNQyxTQUFTLEdBQUcsS0FBS0MsSUFBTCxDQUFVRixJQUFWLENBQWUsSUFBZixDQURsQixDQURjLENBRTBCOztBQUV4QyxhQUFRO0FBQ05ELFFBQUFBLFNBQVMsRUFBVEEsU0FETTtBQUVORSxRQUFBQSxTQUFTLEVBQVRBO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCRSxVLEVBQVk7QUFBRSxhQUFPVCxPQUFPLENBQUNVLGNBQVIsQ0FBdUJULGNBQXZCLEVBQXVDUSxVQUF2QyxDQUFQO0FBQTREOzs7O0VBbkJyRVQsTzs7QUFzQjdCVyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsY0FBZCxFQUE4QjtBQUM1QlksRUFBQUEsT0FBTyxFQUFFLEdBRG1CO0FBRTVCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFGUyxDQUE5QjtBQU9BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJoQixjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBFcnJvclBhcmFncmFwaCBleHRlbmRzIEVsZW1lbnQge1xuICBzaG93RXJyb3IoZXJyb3IpIHtcbiAgICBjb25zdCBodG1sID0gZXJyb3I7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dFcnJvciA9IHRoaXMuc2hvd0Vycm9yLmJpbmQodGhpcyksXG4gICAgICAgICAgaGlkZUVycm9yID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93RXJyb3IsXG4gICAgICBoaWRlRXJyb3JcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEVycm9yUGFyYWdyYXBoLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEVycm9yUGFyYWdyYXBoLCB7XG4gIHRhZ05hbWU6ICdwJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdlcnJvcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JQYXJhZ3JhcGg7XG4iXX0=