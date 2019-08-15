'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var LexicalPatternInput = function (_InputElement) {
  _inherits(LexicalPatternInput, _InputElement);

  function LexicalPatternInput() {
    _classCallCheck(this, LexicalPatternInput);

    return _possibleConstructorReturn(this, (LexicalPatternInput.__proto__ || Object.getPrototypeOf(LexicalPatternInput)).apply(this, arguments));
  }

  _createClass(LexicalPatternInput, [{
    key: 'getLexicalPattern',
    value: function getLexicalPattern() {
      var value = this.getValue(),
          lexicalPattern = value; ///

      return lexicalPattern;
    }
  }, {
    key: 'setLexicalPattern',
    value: function setLexicalPattern(lexicalPattern) {
      var value = lexicalPattern; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getLexicalPattern = this.getLexicalPattern.bind(this),
          setLexicalPattern = this.setLexicalPattern.bind(this);

      return {
        getLexicalPattern: getLexicalPattern,
        setLexicalPattern: setLexicalPattern
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(LexicalPatternInput, properties);
    }
  }]);

  return LexicalPatternInput;
}(InputElement);

Object.assign(LexicalPatternInput, {
  tagName: 'input',
  defaultProperties: {
    type: 'text',
    className: 'lexical-pattern',
    spellCheck: 'false'
  }
});

module.exports = LexicalPatternInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2lucHV0L2xleGljYWxQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsUGF0dGVybiIsInNldFZhbHVlIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJiaW5kIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLG1COzs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFDbEIsVUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxpQkFBaUJGLEtBRHZCLENBRGtCLENBRWE7O0FBRS9CLGFBQU9FLGNBQVA7QUFDRDs7O3NDQUVpQkEsYyxFQUFnQjtBQUNoQyxVQUFNRixRQUFRRSxjQUFkLENBRGdDLENBQ0Y7O0FBRTlCLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxvQkFBb0IsS0FBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQTFCO0FBQUEsVUFDTUMsb0JBQW9CLEtBQUtBLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUQxQjs7QUFHQSxhQUFRO0FBQ05ELDRDQURNO0FBRU5FO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPVCxhQUFhVSxjQUFiLENBQTRCVCxtQkFBNUIsRUFBaURRLFVBQWpELENBQVA7QUFBc0U7Ozs7RUF4QjFFVCxZOztBQTJCbENXLE9BQU9DLE1BQVAsQ0FBY1gsbUJBQWQsRUFBbUM7QUFDakNZLFdBQVMsT0FEd0I7QUFFakNDLHFCQUFtQjtBQUNqQkMsVUFBTSxNQURXO0FBRWpCQyxlQUFXLGlCQUZNO0FBR2pCQyxnQkFBWTtBQUhLO0FBRmMsQ0FBbkM7O0FBU0FDLE9BQU9DLE9BQVAsR0FBaUJsQixtQkFBakIiLCJmaWxlIjoibGV4aWNhbFBhdHRlcm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBMZXhpY2FsUGF0dGVybklucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB2YWx1ZTsgIC8vL1xuXG4gICAgcmV0dXJuIGxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGxleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRMZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsUGF0dGVybiA9IHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4uYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TGV4aWNhbFBhdHRlcm4sXG4gICAgICBzZXRMZXhpY2FsUGF0dGVyblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhMZXhpY2FsUGF0dGVybklucHV0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKExleGljYWxQYXR0ZXJuSW5wdXQsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY2xhc3NOYW1lOiAnbGV4aWNhbC1wYXR0ZXJuJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExleGljYWxQYXR0ZXJuSW5wdXQ7XG4iXX0=