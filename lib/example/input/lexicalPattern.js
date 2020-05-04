'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var easy = require('easy');

var InputElement = easy.InputElement;

var LexicalPatternInput = /*#__PURE__*/function (_InputElement) {
  _inherits(LexicalPatternInput, _InputElement);

  var _super = _createSuper(LexicalPatternInput);

  function LexicalPatternInput() {
    _classCallCheck(this, LexicalPatternInput);

    return _super.apply(this, arguments);
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
  }], [{
    key: "fromProperties",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGljYWxQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsUGF0dGVybiIsInNldFZhbHVlIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJiaW5kIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxtQjs7Ozs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFDbEIsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLGNBQWMsR0FBR0YsS0FEdkIsQ0FEa0IsQ0FFYTs7QUFFL0IsYUFBT0UsY0FBUDtBQUNEOzs7c0NBRWlCQSxjLEVBQWdCO0FBQ2hDLFVBQU1GLEtBQUssR0FBR0UsY0FBZCxDQURnQyxDQUNGOztBQUU5QixXQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUksaUJBQWlCLEdBQUcsS0FBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQTFCO0FBQUEsVUFDTUMsaUJBQWlCLEdBQUcsS0FBS0EsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBRDFCO0FBR0EsYUFBUTtBQUNORCxRQUFBQSxpQkFBaUIsRUFBakJBLGlCQURNO0FBRU5FLFFBQUFBLGlCQUFpQixFQUFqQkE7QUFGTSxPQUFSO0FBSUQ7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9ULFlBQVksQ0FBQ1UsY0FBYixDQUE0QlQsbUJBQTVCLEVBQWlEUSxVQUFqRCxDQUFQO0FBQXNFOzs7O0VBeEIxRVQsWTs7QUEyQmxDVyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsbUJBQWQsRUFBbUM7QUFDakNZLEVBQUFBLE9BQU8sRUFBRSxPQUR3QjtBQUVqQ0MsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLElBQUksRUFBRSxNQURXO0FBRWpCQyxJQUFBQSxTQUFTLEVBQUUsaUJBRk07QUFHakJDLElBQUFBLFVBQVUsRUFBRTtBQUhLO0FBRmMsQ0FBbkM7QUFTQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsbUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgTGV4aWNhbFBhdHRlcm5JbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdmFsdWU7ICAvLy9cblxuICAgIHJldHVybiBsZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIHNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSB7XG4gICAgY29uc3QgdmFsdWUgPSBsZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TGV4aWNhbFBhdHRlcm4gPSB0aGlzLnNldExleGljYWxQYXR0ZXJuLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxQYXR0ZXJuLFxuICAgICAgc2V0TGV4aWNhbFBhdHRlcm5cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTGV4aWNhbFBhdHRlcm5JbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihMZXhpY2FsUGF0dGVybklucHV0LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGNsYXNzTmFtZTogJ2xleGljYWwtcGF0dGVybicsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMZXhpY2FsUGF0dGVybklucHV0O1xuIl19