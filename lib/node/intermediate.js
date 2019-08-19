'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var NonTerminalNode = parsers.NonTerminalNode;

var IntermediateNode = function (_NonTerminalNode) {
  _inherits(IntermediateNode, _NonTerminalNode);

  function IntermediateNode() {
    _classCallCheck(this, IntermediateNode);

    return _possibleConstructorReturn(this, (IntermediateNode.__proto__ || Object.getPrototypeOf(IntermediateNode)).apply(this, arguments));
  }

  return IntermediateNode;
}(NonTerminalNode);

module.exports = IntermediateNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL2ludGVybWVkaWF0ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkludGVybWVkaWF0ZU5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0lBRVFDLGUsR0FBb0JGLE8sQ0FBcEJFLGU7O0lBRUZDLGdCOzs7Ozs7Ozs7O0VBQXlCRCxlOztBQUUvQkUsT0FBT0MsT0FBUCxHQUFpQkYsZ0JBQWpCIiwiZmlsZSI6ImludGVybWVkaWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgeyBOb25UZXJtaW5hbE5vZGUgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIEludGVybWVkaWF0ZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge31cblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcm1lZGlhdGVOb2RlO1xuIl19