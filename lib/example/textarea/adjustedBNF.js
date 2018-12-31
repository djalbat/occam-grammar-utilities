'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var AdjustedBNFTextarea = function (_InputElement) {
  _inherits(AdjustedBNFTextarea, _InputElement);

  function AdjustedBNFTextarea() {
    _classCallCheck(this, AdjustedBNFTextarea);

    return _possibleConstructorReturn(this, (AdjustedBNFTextarea.__proto__ || Object.getPrototypeOf(AdjustedBNFTextarea)).apply(this, arguments));
  }

  _createClass(AdjustedBNFTextarea, [{
    key: 'showError',
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: 'hideError',
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
    key: 'clearAdjustedBNF',
    value: function clearAdjustedBNF() {
      var value = '';

      this.setValue(value);
    }
  }, {
    key: 'setAdjustedBNF',
    value: function setAdjustedBNF(adjustedBNF) {
      var value = adjustedBNF; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var showError = this.showError.bind(this),
          hideError = this.hideError.bind(this),
          setAdjustedBNF = this.setAdjustedBNF.bind(this),
          clearAdjustedBNF = this.clearAdjustedBNF.bind(this);

      return {
        showError: showError,
        hideError: hideError,
        setAdjustedBNF: setAdjustedBNF,
        clearAdjustedBNF: clearAdjustedBNF
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(AdjustedBNFTextarea, properties);
    }
  }]);

  return AdjustedBNFTextarea;
}(InputElement);

Object.assign(AdjustedBNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'adjusted-bnf',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = AdjustedBNFTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL2FkanVzdGVkQk5GLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ2YWx1ZSIsInNldFZhbHVlIiwiYWRqdXN0ZWRCTkYiLCJzaG93RXJyb3IiLCJiaW5kIiwiaGlkZUVycm9yIiwic2V0QWRqdXN0ZWRCTkYiLCJjbGVhckFkanVzdGVkQk5GIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsbUI7Ozs7Ozs7Ozs7O2dDQUNRO0FBQ1YsV0FBS0MsUUFBTCxDQUFjLE9BQWQ7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS0MsV0FBTCxDQUFpQixPQUFqQjtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1DLFFBQVEsRUFBZDs7QUFFQSxXQUFLQyxRQUFMLENBQWNELEtBQWQ7QUFDRDs7O21DQUVjRSxXLEVBQWE7QUFDMUIsVUFBTUYsUUFBUUUsV0FBZCxDQUQwQixDQUNFOztBQUU1QixXQUFLRCxRQUFMLENBQWNELEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUcsWUFBWSxLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBQSxVQUNNQyxZQUFZLEtBQUtBLFNBQUwsQ0FBZUQsSUFBZixDQUFvQixJQUFwQixDQURsQjtBQUFBLFVBRU1FLGlCQUFpQixLQUFLQSxjQUFMLENBQW9CRixJQUFwQixDQUF5QixJQUF6QixDQUZ2QjtBQUFBLFVBR01HLG1CQUFtQixLQUFLQSxnQkFBTCxDQUFzQkgsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FIekI7O0FBS0EsYUFBUTtBQUNORCw0QkFETTtBQUVORSw0QkFGTTtBQUdOQyxzQ0FITTtBQUlOQztBQUpNLE9BQVI7QUFNRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT1osYUFBYWEsY0FBYixDQUE0QlosbUJBQTVCLEVBQWlEVyxVQUFqRCxDQUFQO0FBQXNFOzs7O0VBbkMxRVosWTs7QUFzQ2xDYyxPQUFPQyxNQUFQLENBQWNkLG1CQUFkLEVBQW1DO0FBQ2pDZSxXQUFTLFVBRHdCO0FBRWpDQyxxQkFBbUI7QUFDakJDLGVBQVcsY0FETTtBQUVqQkMsZ0JBQVksT0FGSztBQUdqQkMsY0FBVTtBQUhPO0FBRmMsQ0FBbkM7O0FBU0FDLE9BQU9DLE9BQVAsR0FBaUJyQixtQkFBakIiLCJmaWxlIjoiYWRqdXN0ZWRCTkYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBBZGp1c3RlZEJORlRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc2hvd0Vycm9yKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gIH1cblxuICBoaWRlRXJyb3IoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfVxuXG4gIGNsZWFyQWRqdXN0ZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSAnJztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFkanVzdGVkQk5GOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gdGhpcy5zaG93RXJyb3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBoaWRlRXJyb3IgPSB0aGlzLmhpZGVFcnJvci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEFkanVzdGVkQk5GID0gdGhpcy5zZXRBZGp1c3RlZEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyQWRqdXN0ZWRCTkYgPSB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0Vycm9yLFxuICAgICAgaGlkZUVycm9yLFxuICAgICAgc2V0QWRqdXN0ZWRCTkYsXG4gICAgICBjbGVhckFkanVzdGVkQk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEFkanVzdGVkQk5GVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQWRqdXN0ZWRCTkZUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2FkanVzdGVkLWJuZicsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJyxcbiAgICByZWFkT25seTogdHJ1ZVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGp1c3RlZEJORlRleHRhcmVhO1xuIl19