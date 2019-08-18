'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ruleUtilities = require('../utilities/rule'),
    ruleNameUtilities = require('../utilities/ruleName'),
    RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule,
    findRuleByName = ruleUtilities.findRuleByName,
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName;

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
    key: 'fromDefinitionAndRuleName',
    value: function fromDefinitionAndRuleName(definition, ruleName, rules, count) {
      var rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName, count),
          rightRecursiveDefinition = RightRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName, count);

      var name = ruleName; ///

      var rule = findRuleByName(name, rules);

      name = rightRecursiveRuleName; ///

      var definitions = [rightRecursiveDefinition],
          NonTerminalNode = rule.getNonTerminalNode(),
          noWhitespace = rightRecursiveDefinition.hasNoWhitespace(),
          lookAhead = rightRecursiveDefinition.isLookAhead(),
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode, noWhitespace, lookAhead);

      return rightRecursiveRule;
    }
  }]);

  return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicnVsZVV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZSIsImZpbmRSdWxlQnlOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImRlZmluaXRpb24iLCJydWxlTmFtZSIsInJ1bGVzIiwiY291bnQiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZSIsInJ1bGUiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJoYXNOb1doaXRlc3BhY2UiLCJpc0xvb2tBaGVhZCIsInJpZ2h0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1HLDJCQUEyQkgsUUFBUSw4QkFBUixDQUZqQzs7QUFJTSxJQUFFSSxJQUFGLEdBQVdMLE9BQVgsQ0FBRUssSUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJKLGFBRHJCLENBQ0VJLGNBREY7QUFBQSxJQUVFQyxrQ0FGRixHQUV5Q0osaUJBRnpDLENBRUVJLGtDQUZGOztJQUlBQyxrQjs7O0FBQ0osOEJBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCQyxlQUEvQixFQUFnREMsWUFBaEQsRUFBOERDLFNBQTlELEVBQXlFO0FBQUE7O0FBQUEsd0lBQ2pFSixJQURpRSxFQUMzREMsV0FEMkQsRUFDOUNDLGVBRDhDOztBQUd2RSxVQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjs7QUFFQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUx1RTtBQU14RTs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0EsU0FBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0QsWUFBWjtBQUNEOzs7OENBRWdDRSxVLEVBQVlDLFEsRUFBVUMsSyxFQUFPQyxLLEVBQU87QUFDbkUsVUFBTUMseUJBQXlCWCxtQ0FBbUNRLFFBQW5DLEVBQTZDRSxLQUE3QyxDQUEvQjtBQUFBLFVBQ01FLDJCQUEyQmYseUJBQXlCZ0IseUJBQXpCLENBQW1ETixVQUFuRCxFQUErREMsUUFBL0QsRUFBeUVFLEtBQXpFLENBRGpDOztBQUdBLFVBQUlSLE9BQU9NLFFBQVgsQ0FKbUUsQ0FJN0M7O0FBRXRCLFVBQU1NLE9BQU9mLGVBQWVHLElBQWYsRUFBcUJPLEtBQXJCLENBQWI7O0FBRUFQLGFBQU9TLHNCQUFQLENBUm1FLENBUW5DOztBQUVoQyxVQUFNUixjQUFjLENBQ1pTLHdCQURZLENBQXBCO0FBQUEsVUFHTUcsa0JBQWtCRCxLQUFLRSxrQkFBTCxFQUh4QjtBQUFBLFVBSU1YLGVBQWVPLHlCQUF5QkssZUFBekIsRUFKckI7QUFBQSxVQUtNWCxZQUFZTSx5QkFBeUJNLFdBQXpCLEVBTGxCO0FBQUEsVUFNTUMscUJBQXFCLElBQUlsQixrQkFBSixDQUF1QkMsSUFBdkIsRUFBNkJDLFdBQTdCLEVBQTBDWSxlQUExQyxFQUEyRFYsWUFBM0QsRUFBeUVDLFNBQXpFLENBTjNCOztBQVFBLGFBQU9hLGtCQUFQO0FBQ0Q7Ozs7RUFwQzhCckIsSTs7QUF1Q2pDc0IsT0FBT0MsT0FBUCxHQUFpQnBCLGtCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBub25UZXJtaW5hbE5vZGUsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKSB7XG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcblxuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgaGFzTm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFJ1bGVOYW1lKGRlZmluaXRpb24sIHJ1bGVOYW1lLCBydWxlcywgY291bnQpIHtcbiAgICBjb25zdCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSwgY291bnQpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZFJ1bGVOYW1lKGRlZmluaXRpb24sIHJ1bGVOYW1lLCBjb3VudCk7XG5cbiAgICBsZXQgbmFtZSA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICBjb25zdCBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpO1xuXG4gICAgbmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWU7ICAvLy9cblxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24uaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGUgPSBuZXcgUmlnaHRSZWN1cnNpdmVSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVJ1bGU7XG4iXX0=