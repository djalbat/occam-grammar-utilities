'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Parts = parsers.Parts,
    Definition = parsers.Definition,
    EpsilonPart = Parts.EpsilonPart;

var EpsilonDefinition = function (_Definition) {
  _inherits(EpsilonDefinition, _Definition);

  function EpsilonDefinition() {
    _classCallCheck(this, EpsilonDefinition);

    return _possibleConstructorReturn(this, (EpsilonDefinition.__proto__ || Object.getPrototypeOf(EpsilonDefinition)).apply(this, arguments));
  }

  _createClass(EpsilonDefinition, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var noWhitespace = false,
          ///
      epsilonPart = new EpsilonPart(noWhitespace),
          parts = [epsilonPart],
          epsilonPartDefinition = new EpsilonDefinition(parts);

      return epsilonPartDefinition;
    }
  }]);

  return EpsilonDefinition;
}(Definition);

module.exports = EpsilonDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2Vwc2lsb24uanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJQYXJ0cyIsIkRlZmluaXRpb24iLCJFcHNpbG9uUGFydCIsIkVwc2lsb25EZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwiZXBzaWxvblBhcnQiLCJwYXJ0cyIsImVwc2lsb25QYXJ0RGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztJQUVRQyxLLEdBQXNCRixPLENBQXRCRSxLO0lBQU9DLFUsR0FBZUgsTyxDQUFmRyxVO0lBQ1BDLFcsR0FBZ0JGLEssQ0FBaEJFLFc7O0lBRUZDLGlCOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBTUMsZUFBZSxLQUFyQjtBQUFBLFVBQTRCO0FBQ3RCQyxvQkFBYyxJQUFJSCxXQUFKLENBQWdCRSxZQUFoQixDQURwQjtBQUFBLFVBRU1FLFFBQVEsQ0FDTkQsV0FETSxDQUZkO0FBQUEsVUFLTUUsd0JBQXdCLElBQUlKLGlCQUFKLENBQXNCRyxLQUF0QixDQUw5Qjs7QUFPQSxhQUFPQyxxQkFBUDtBQUNEOzs7O0VBVjZCTixVOztBQWFoQ08sT0FBT0MsT0FBUCxHQUFpQk4saUJBQWpCIiwiZmlsZSI6ImVwc2lsb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHsgUGFydHMsIERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuY2xhc3MgRXBzaWxvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydChub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVwc2lsb25QYXJ0RGVmaW5pdGlvbiA9IG5ldyBFcHNpbG9uRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gZXBzaWxvblBhcnREZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvbkRlZmluaXRpb247XG4iXX0=