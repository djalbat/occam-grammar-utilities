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

var parsers = require('occam-parsers');

var partsUtilities = require('../utilities/parts');

var Definition = parsers.Definition,
    cloneParts = partsUtilities.cloneParts;

var RepeatedDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RepeatedDefinition, _Definition);

  function RepeatedDefinition() {
    _classCallCheck(this, RepeatedDefinition);

    return _possibleConstructorReturn(this, _getPrototypeOf(RepeatedDefinition).apply(this, arguments));
  }

  _createClass(RepeatedDefinition, null, [{
    key: "fromDefinition",
    value: function fromDefinition(definition) {
      var parts = definition.getParts();
      parts = cloneParts(parts); ///

      parts.shift(); ///

      var repeatedDefinition = new RepeatedDefinition(parts);
      return repeatedDefinition;
    }
  }]);

  return RepeatedDefinition;
}(Definition);

module.exports = RepeatedDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGVhdGVkLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydHNVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwiY2xvbmVQYXJ0cyIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwic2hpZnQiLCJyZXBlYXRlZERlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQXZCOztBQUVBLElBQU1DLGNBQWMsR0FBR0QsT0FBTyxDQUFDLG9CQUFELENBQTlCOztBQUVNLElBQUVFLFVBQUYsR0FBaUJILE9BQWpCLENBQUVHLFVBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCRixjQURqQixDQUNFRSxVQURGOztJQUdBQyxrQjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFDaEMsVUFBSUMsS0FBSyxHQUFHRCxVQUFVLENBQUNFLFFBQVgsRUFBWjtBQUVBRCxNQUFBQSxLQUFLLEdBQUdILFVBQVUsQ0FBQ0csS0FBRCxDQUFsQixDQUhnQyxDQUdKOztBQUU1QkEsTUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBTGdDLENBS2hCOztBQUVoQixVQUFNQyxrQkFBa0IsR0FBRyxJQUFJTCxrQkFBSixDQUF1QkUsS0FBdkIsQ0FBM0I7QUFFQSxhQUFPRyxrQkFBUDtBQUNEOzs7O0VBWDhCUCxVOztBQWNqQ1EsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxrQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnRzJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgY2xvbmVQYXJ0cyB9ID0gcGFydHNVdGlsaXRpZXM7XG5cbmNsYXNzIFJlcGVhdGVkRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIHBhcnRzLnNoaWZ0KCk7ICAvLy9cblxuICAgIGNvbnN0IHJlcGVhdGVkRGVmaW5pdGlvbiA9IG5ldyBSZXBlYXRlZERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlcGVhdGVkRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcGVhdGVkRGVmaW5pdGlvbjtcbiJdfQ==