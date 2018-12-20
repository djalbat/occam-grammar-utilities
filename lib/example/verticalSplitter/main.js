'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easylayout = require('easy-layout');

var Splitter = easylayout.Splitter,
    VerticalSplitter = easylayout.VerticalSplitter;

var MainVerticalSplitter = function (_VerticalSplitter) {
  _inherits(MainVerticalSplitter, _VerticalSplitter);

  function MainVerticalSplitter() {
    _classCallCheck(this, MainVerticalSplitter);

    return _possibleConstructorReturn(this, (MainVerticalSplitter.__proto__ || Object.getPrototypeOf(MainVerticalSplitter)).apply(this, arguments));
  }

  _createClass(MainVerticalSplitter, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var afterSizeableElement = true;

      Object.assign(properties, { afterSizeableElement: afterSizeableElement });

      var mainVerticalSplitter = Splitter.fromProperties(MainVerticalSplitter, properties);

      return mainVerticalSplitter;
    }
  }]);

  return MainVerticalSplitter;
}(VerticalSplitter);

Object.assign(MainVerticalSplitter, {
  defaultProperties: {
    className: 'main'
  }
});

module.exports = MainVerticalSplitter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJlYXN5bGF5b3V0IiwicmVxdWlyZSIsIlNwbGl0dGVyIiwiVmVydGljYWxTcGxpdHRlciIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwicHJvcGVydGllcyIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwibWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJmcm9tUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGFBQVIsQ0FBbkI7O0lBRVFDLFEsR0FBK0JGLFUsQ0FBL0JFLFE7SUFBVUMsZ0IsR0FBcUJILFUsQ0FBckJHLGdCOztJQUVaQyxvQjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFDaEMsVUFBTUMsdUJBQXVCLElBQTdCOztBQUVBQyxhQUFPQyxNQUFQLENBQWNILFVBQWQsRUFBMEIsRUFBRUMsMENBQUYsRUFBMUI7O0FBRUEsVUFBTUcsdUJBQXVCUCxTQUFTUSxjQUFULENBQXdCTixvQkFBeEIsRUFBOENDLFVBQTlDLENBQTdCOztBQUVBLGFBQU9JLG9CQUFQO0FBQ0Q7Ozs7RUFUZ0NOLGdCOztBQVluQ0ksT0FBT0MsTUFBUCxDQUFjSixvQkFBZCxFQUFvQztBQUNsQ08scUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEZSxDQUFwQzs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQlYsb0JBQWpCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3lsYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFNwbGl0dGVyLCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5bGF5b3V0O1xuXG5jbGFzcyBNYWluVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFZlcnRpY2FsU3BsaXR0ZXIge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgeyBhZnRlclNpemVhYmxlRWxlbWVudCB9KTtcblxuICAgIGNvbnN0IG1haW5WZXJ0aWNhbFNwbGl0dGVyID0gU3BsaXR0ZXIuZnJvbVByb3BlcnRpZXMoTWFpblZlcnRpY2FsU3BsaXR0ZXIsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIG1haW5WZXJ0aWNhbFNwbGl0dGVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWFpblZlcnRpY2FsU3BsaXR0ZXIsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdtYWluJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYWluVmVydGljYWxTcGxpdHRlcjtcbiJdfQ==