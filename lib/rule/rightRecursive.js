'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule;

var RightRecursiveRule = function (_Rule) {
  _inherits(RightRecursiveRule, _Rule);

  function RightRecursiveRule(name, definitions, nonTerminalNode, noWhitespace, lookAhead) {
    _classCallCheck(this, RightRecursiveRule);

    var _this = _possibleConstructorReturn(this, (RightRecursiveRule.__proto__ || Object.getPrototypeOf(RightRecursiveRule)).call(this, name, definitions, nonTerminalNode));

    _this.noWhitespace = noWhitespace;

    _this.lookAhead = lookAhead;
    return _this;
  }

  _createClass(RightRecursiveRule, [{
    key: 'isLookAhead',
    value: function isLookAhead() {
      return this.lookAhead;
    }
  }, {
    key: 'hasNoWhitespace',
    value: function hasNoWhitespace() {
      return this.noWhitespace;
    }
  }], [{
    key: 'fromRuleAndImmediatelyLeftRecursiveDefinition',
    value: function fromRuleAndImmediatelyLeftRecursiveDefinition(rule, immediatelyLeftRecursiveDefinition, count) {
      var ruleName = rule.getName(),
          rightRecursiveRuleName = '' + ruleName + (count + 1) + '~',
          rightRecursiveDefinition = RightRecursiveDefinition.fromRightRecursiveRuleNameAndImmediatelyLeftRecursiveDefinition(rightRecursiveRuleName, immediatelyLeftRecursiveDefinition),
          noWhitespace = rightRecursiveDefinition.hasNoWhitespace(),
          lookAhead = rightRecursiveDefinition.isLookAhead(),
          name = rightRecursiveRuleName,
          ///
      definitions = [rightRecursiveDefinition],
          nonTerminalNode = rule.getNonTerminalNode(),
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode, noWhitespace, lookAhead);

      return rightRecursiveRule;
    }
  }]);

  return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZSIsIlJpZ2h0UmVjdXJzaXZlUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsInJ1bGUiLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiY291bnQiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaGFzTm9XaGl0ZXNwYWNlIiwiaXNMb29rQWhlYWQiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJyaWdodFJlY3Vyc2l2ZVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQywyQkFBMkJELFFBQVEsOEJBQVIsQ0FBakM7O0lBRVFFLEksR0FBU0gsTyxDQUFURyxJOztJQUVGQyxrQjs7O0FBQ0osOEJBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCQyxlQUEvQixFQUFnREMsWUFBaEQsRUFBOERDLFNBQTlELEVBQXlFO0FBQUE7O0FBQUEsd0lBQ2pFSixJQURpRSxFQUMzREMsV0FEMkQsRUFDOUNDLGVBRDhDOztBQUd2RSxVQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjs7QUFFQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUx1RTtBQU14RTs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsU0FBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0QsWUFBWjtBQUNEOzs7a0VBRW9ERSxJLEVBQU1DLGtDLEVBQW9DQyxLLEVBQU87QUFDcEcsVUFBTUMsV0FBV0gsS0FBS0ksT0FBTCxFQUFqQjtBQUFBLFVBQ01DLDhCQUE0QkYsUUFBNUIsSUFBdUNELFFBQVEsQ0FBL0MsT0FETjtBQUFBLFVBRU1JLDJCQUEyQmQseUJBQXlCZSwrREFBekIsQ0FBeUZGLHNCQUF6RixFQUFpSEosa0NBQWpILENBRmpDO0FBQUEsVUFHTUgsZUFBZVEseUJBQXlCRSxlQUF6QixFQUhyQjtBQUFBLFVBSU1ULFlBQVlPLHlCQUF5QkcsV0FBekIsRUFKbEI7QUFBQSxVQUtNZCxPQUFPVSxzQkFMYjtBQUFBLFVBS3NDO0FBQ2hDVCxvQkFBYyxDQUNaVSx3QkFEWSxDQU5wQjtBQUFBLFVBU01ULGtCQUFrQkcsS0FBS1Usa0JBQUwsRUFUeEI7QUFBQSxVQVVNQyxxQkFBcUIsSUFBSWpCLGtCQUFKLENBQXVCQyxJQUF2QixFQUE2QkMsV0FBN0IsRUFBMENDLGVBQTFDLEVBQTJEQyxZQUEzRCxFQUF5RUMsU0FBekUsQ0FWM0I7O0FBWUEsYUFBT1ksa0JBQVA7QUFDRDs7OztFQS9COEJsQixJOztBQWtDakNtQixPQUFPQyxPQUFQLEdBQWlCbkIsa0JBQWpCIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBub25UZXJtaW5hbE5vZGUsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKSB7XG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcblxuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgaGFzTm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZUFuZEltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY291bnQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUgPSBgJHtydWxlTmFtZX0ke2NvdW50ICsgMX1+YCxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUsIGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24uaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICBuYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUnVsZTtcbiJdfQ==