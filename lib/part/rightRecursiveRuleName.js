'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Parts = parsers.Parts,
    RuleNamePart = Parts.RuleNamePart;

var RightRecursiveRuleNamePart = function (_RuleNamePart) {
      _inherits(RightRecursiveRuleNamePart, _RuleNamePart);

      function RightRecursiveRuleNamePart() {
            _classCallCheck(this, RightRecursiveRuleNamePart);

            return _possibleConstructorReturn(this, (RightRecursiveRuleNamePart.__proto__ || Object.getPrototypeOf(RightRecursiveRuleNamePart)).apply(this, arguments));
      }

      _createClass(RightRecursiveRuleNamePart, null, [{
            key: 'fromRightRecursiveRule',
            value: function fromRightRecursiveRule(rightRecursiveRule) {
                  var rightRecursiveRuleName = rightRecursiveRule.getName(),
                      ruleName = rightRecursiveRuleName,
                      ///
                  noWhitespace = false,
                      ///
                  lookAhead = false,
                      ///
                  rightRecursiveRuleNamePart = new RightRecursiveRuleNamePart(ruleName, noWhitespace, lookAhead);

                  return rightRecursiveRuleNamePart;
            }
      }]);

      return RightRecursiveRuleNamePart;
}(RuleNamePart);

module.exports = RightRecursiveRuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3JpZ2h0UmVjdXJzaXZlUnVsZU5hbWUuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJQYXJ0cyIsIlJ1bGVOYW1lUGFydCIsIlJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicmlnaHRSZWN1cnNpdmVSdWxlIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZSIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRU0sSUFBRUMsS0FBRixHQUFZRixPQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxZQURGLEdBQ21CRCxLQURuQixDQUNFQyxZQURGOztJQUdBQywwQjs7Ozs7Ozs7Ozs7bURBQzBCQyxrQixFQUFvQjtBQUNoRCxzQkFBTUMseUJBQXlCRCxtQkFBbUJFLE9BQW5CLEVBQS9CO0FBQUEsc0JBQ01DLFdBQVdGLHNCQURqQjtBQUFBLHNCQUMwQztBQUNwQ0csaUNBQWUsS0FGckI7QUFBQSxzQkFFNEI7QUFDdEJDLDhCQUFZLEtBSGxCO0FBQUEsc0JBRzBCO0FBQ3BCQywrQ0FBNkIsSUFBSVAsMEJBQUosQ0FBK0JJLFFBQS9CLEVBQXlDQyxZQUF6QyxFQUF1REMsU0FBdkQsQ0FKbkM7O0FBTUEseUJBQU9DLDBCQUFQO0FBQ0Q7Ozs7RUFUc0NSLFk7O0FBWXpDUyxPQUFPQyxPQUFQLEdBQWlCVCwwQkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmVSdWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgeyBQYXJ0cyB9ID0gcGFyc2VycyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0IH0gPSBQYXJ0cztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgZXh0ZW5kcyBSdWxlTmFtZVBhcnQge1xuICBzdGF0aWMgZnJvbVJpZ2h0UmVjdXJzaXZlUnVsZShyaWdodFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2UsICAvLy9cbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydChydWxlTmFtZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQ7XG4iXX0=