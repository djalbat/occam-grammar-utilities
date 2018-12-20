'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var BNFTextarea = function (_InputElement) {
  _inherits(BNFTextarea, _InputElement);

  function BNFTextarea() {
    _classCallCheck(this, BNFTextarea);

    return _possibleConstructorReturn(this, (BNFTextarea.__proto__ || Object.getPrototypeOf(BNFTextarea)).apply(this, arguments));
  }

  _createClass(BNFTextarea, [{
    key: 'getBNF',
    value: function getBNF() {
      var value = this.getValue(),
          bnf = value; ///

      return bnf;
    }
  }, {
    key: 'setBNF',
    value: function setBNF(bnf) {
      var value = bnf; ///

      this.setValue(value);
    }
  }, {
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
    key: 'parentContext',
    value: function parentContext() {
      var getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this),
          showError = this.showError.bind(this),
          hideError = this.hideError.bind(this);

      return {
        getBNF: getBNF,
        setBNF: setBNF,
        showError: showError,
        hideError: hideError
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(BNFTextarea, properties);
    }
  }]);

  return BNFTextarea;
}(InputElement);

Object.assign(BNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'bnf',
    spellCheck: 'false'
  }
});

module.exports = BNFTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIkJORlRleHRhcmVhIiwidmFsdWUiLCJnZXRWYWx1ZSIsImJuZiIsInNldFZhbHVlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImdldEJORiIsImJpbmQiLCJzZXRCTkYiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsVzs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE1BQU1GLEtBRFosQ0FETyxDQUVhOztBQUVwQixhQUFPRSxHQUFQO0FBQ0Q7OzsyQkFFTUEsRyxFQUFLO0FBQ1YsVUFBTUYsUUFBUUUsR0FBZCxDQURVLENBQ1U7O0FBRXBCLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLSSxRQUFMLENBQWMsT0FBZDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLQyxXQUFMLENBQWlCLE9BQWpCO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLFNBQVMsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWY7QUFBQSxVQUNNQyxTQUFTLEtBQUtBLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQixDQURmO0FBQUEsVUFFTUUsWUFBWSxLQUFLQSxTQUFMLENBQWVGLElBQWYsQ0FBb0IsSUFBcEIsQ0FGbEI7QUFBQSxVQUdNRyxZQUFZLEtBQUtBLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixJQUFwQixDQUhsQjs7QUFLQSxhQUFRO0FBQ05ELHNCQURNO0FBRU5FLHNCQUZNO0FBR05DLDRCQUhNO0FBSU5DO0FBSk0sT0FBUjtBQU1EOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPYixhQUFhYyxjQUFiLENBQTRCYixXQUE1QixFQUF5Q1ksVUFBekMsQ0FBUDtBQUE4RDs7OztFQXBDMUViLFk7O0FBdUMxQmUsT0FBT0MsTUFBUCxDQUFjZixXQUFkLEVBQTJCO0FBQ3pCZ0IsV0FBUyxVQURnQjtBQUV6QkMscUJBQW1CO0FBQ2pCQyxlQUFXLEtBRE07QUFFakJDLGdCQUFZO0FBRks7QUFGTSxDQUEzQjs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEJORlRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0Qk5GKGJuZikge1xuICAgIGNvbnN0IHZhbHVlID0gYm5mOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHNob3dFcnJvcigpIHtcbiAgICB0aGlzLmFkZENsYXNzKCdlcnJvcicpO1xuICB9XG5cbiAgaGlkZUVycm9yKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEJORiA9IHRoaXMuZ2V0Qk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Qk5GID0gdGhpcy5zZXRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93RXJyb3IgPSB0aGlzLnNob3dFcnJvci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGhpZGVFcnJvciA9IHRoaXMuaGlkZUVycm9yLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEJORixcbiAgICAgIHNldEJORixcbiAgICAgIHNob3dFcnJvcixcbiAgICAgIGhpZGVFcnJvclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhCTkZUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihCTkZUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2JuZicsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZUZXh0YXJlYTtcbiJdfQ==