'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var ErrorParagraph = function (_Element) {
  _inherits(ErrorParagraph, _Element);

  function ErrorParagraph() {
    _classCallCheck(this, ErrorParagraph);

    return _possibleConstructorReturn(this, (ErrorParagraph.__proto__ || Object.getPrototypeOf(ErrorParagraph)).apply(this, arguments));
  }

  _createClass(ErrorParagraph, [{
    key: 'showError',
    value: function showError(error) {
      var html = error; ///

      this.html(html);

      this.show();
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var showError = this.showError.bind(this),
          hideError = this.hide.bind(this); ///

      return {
        showError: showError,
        hideError: hideError
      };
    }
  }], [{
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3BhcmFncmFwaC9lcnJvci5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJFcnJvclBhcmFncmFwaCIsImVycm9yIiwiaHRtbCIsInNob3ciLCJzaG93RXJyb3IiLCJiaW5kIiwiaGlkZUVycm9yIiwiaGlkZSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLE8sR0FBWUYsSSxDQUFaRSxPOztJQUVGQyxjOzs7Ozs7Ozs7Ozs4QkFDTUMsSyxFQUFPO0FBQ2YsVUFBTUMsT0FBT0QsS0FBYixDQURlLENBQ0s7O0FBRXBCLFdBQUtDLElBQUwsQ0FBVUEsSUFBVjs7QUFFQSxXQUFLQyxJQUFMO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLFlBQVksS0FBS0EsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWxCO0FBQUEsVUFDTUMsWUFBWSxLQUFLQyxJQUFMLENBQVVGLElBQVYsQ0FBZSxJQUFmLENBRGxCLENBRGMsQ0FFMEI7O0FBRXhDLGFBQVE7QUFDTkQsNEJBRE07QUFFTkU7QUFGTSxPQUFSO0FBSUQ7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9ULFFBQVFVLGNBQVIsQ0FBdUJULGNBQXZCLEVBQXVDUSxVQUF2QyxDQUFQO0FBQTREOzs7O0VBbkJyRVQsTzs7QUFzQjdCVyxPQUFPQyxNQUFQLENBQWNYLGNBQWQsRUFBOEI7QUFDNUJZLFdBQVMsR0FEbUI7QUFFNUJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRlMsQ0FBOUI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJoQixjQUFqQiIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBFcnJvclBhcmFncmFwaCBleHRlbmRzIEVsZW1lbnQge1xuICBzaG93RXJyb3IoZXJyb3IpIHtcbiAgICBjb25zdCBodG1sID0gZXJyb3I7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dFcnJvciA9IHRoaXMuc2hvd0Vycm9yLmJpbmQodGhpcyksXG4gICAgICAgICAgaGlkZUVycm9yID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93RXJyb3IsXG4gICAgICBoaWRlRXJyb3JcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEVycm9yUGFyYWdyYXBoLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEVycm9yUGFyYWdyYXBoLCB7XG4gIHRhZ05hbWU6ICdwJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdlcnJvcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JQYXJhZ3JhcGg7XG4iXX0=