'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var NonTerminalNode = parsers.NonTerminalNode;

var NonLeftRecursiveNode = function (_NonTerminalNode) {
  _inherits(NonLeftRecursiveNode, _NonTerminalNode);

  function NonLeftRecursiveNode() {
    _classCallCheck(this, NonLeftRecursiveNode);

    return _possibleConstructorReturn(this, (NonLeftRecursiveNode.__proto__ || Object.getPrototypeOf(NonLeftRecursiveNode)).apply(this, arguments));
  }

  _createClass(NonLeftRecursiveNode, null, [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(NonLeftRecursiveNode, ruleName, childNodes);
    }
  }]);

  return NonLeftRecursiveNode;
}(NonTerminalNode);

module.exports = NonLeftRecursiveNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL25vbkxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJOb25MZWZ0UmVjdXJzaXZlTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7SUFFUUMsZSxHQUFvQkYsTyxDQUFwQkUsZTs7SUFFRkMsb0I7Ozs7Ozs7Ozs7OzhDQUM2QkMsUSxFQUFVQyxVLEVBQVk7QUFBRSxhQUFPSCxnQkFBZ0JJLHlCQUFoQixDQUEwQ0gsb0JBQTFDLEVBQWdFQyxRQUFoRSxFQUEwRUMsVUFBMUUsQ0FBUDtBQUErRjs7OztFQUR2SEgsZTs7QUFJbkNLLE9BQU9DLE9BQVAsR0FBaUJMLG9CQUFqQiIsImZpbGUiOiJub25MZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB7IE5vblRlcm1pbmFsTm9kZSB9ID0gcGFyc2VycztcblxuY2xhc3MgTm9uTGVmdFJlY3Vyc2l2ZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoTm9uTGVmdFJlY3Vyc2l2ZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vbkxlZnRSZWN1cnNpdmVOb2RlO1xuIl19