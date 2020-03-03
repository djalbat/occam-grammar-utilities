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

var NonTerminalNode = parsers.NonTerminalNode;

var ReducedNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(ReducedNode, _NonTerminalNode);

  function ReducedNode() {
    _classCallCheck(this, ReducedNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReducedNode).apply(this, arguments));
  }

  _createClass(ReducedNode, null, [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(ReducedNode, ruleName, childNodes);
    }
  }]);

  return ReducedNode;
}(NonTerminalNode);

module.exports = ReducedNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJSZWR1Y2VkTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQXZCOztJQUVRQyxlLEdBQW9CRixPLENBQXBCRSxlOztJQUVGQyxXOzs7Ozs7Ozs7Ozs4Q0FDNkJDLFEsRUFBVUMsVSxFQUFZO0FBQUUsYUFBT0gsZUFBZSxDQUFDSSx5QkFBaEIsQ0FBMENILFdBQTFDLEVBQXVEQyxRQUF2RCxFQUFpRUMsVUFBakUsQ0FBUDtBQUFzRjs7OztFQUR2SEgsZTs7QUFJMUJLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkwsV0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHsgTm9uVGVybWluYWxOb2RlIH0gPSBwYXJzZXJzO1xuXG5jbGFzcyBSZWR1Y2VkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSZWR1Y2VkTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdWNlZE5vZGU7XG4iXX0=