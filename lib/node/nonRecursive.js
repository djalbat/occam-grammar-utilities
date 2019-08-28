'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var NonTerminalNode = parsers.NonTerminalNode;

var NonRecursiveNode = function (_NonTerminalNode) {
  _inherits(NonRecursiveNode, _NonTerminalNode);

  function NonRecursiveNode() {
    _classCallCheck(this, NonRecursiveNode);

    return _possibleConstructorReturn(this, (NonRecursiveNode.__proto__ || Object.getPrototypeOf(NonRecursiveNode)).apply(this, arguments));
  }

  _createClass(NonRecursiveNode, null, [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(NonRecursiveNode, ruleName, childNodes);
    }
  }]);

  return NonRecursiveNode;
}(NonTerminalNode);

module.exports = NonRecursiveNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIk5vblJlY3Vyc2l2ZU5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0lBRVFDLGUsR0FBb0JGLE8sQ0FBcEJFLGU7O0lBRUZDLGdCOzs7Ozs7Ozs7Ozs4Q0FDNkJDLFEsRUFBVUMsVSxFQUFZO0FBQUUsYUFBT0gsZ0JBQWdCSSx5QkFBaEIsQ0FBMENILGdCQUExQyxFQUE0REMsUUFBNUQsRUFBc0VDLFVBQXRFLENBQVA7QUFBMkY7Ozs7RUFEdkhILGU7O0FBSS9CSyxPQUFPQyxPQUFQLEdBQWlCTCxnQkFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB7IE5vblRlcm1pbmFsTm9kZSB9ID0gcGFyc2VycztcblxuY2xhc3MgTm9uUmVjdXJzaXZlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhOb25SZWN1cnNpdmVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25SZWN1cnNpdmVOb2RlO1xuIl19