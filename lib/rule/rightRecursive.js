'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var IntermediateNode = require('../node/intermediate'),
    ruleNameUtilities = require('../utilities/ruleName'),
    RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule,
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
          rightRecursiveDefinition = RightRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName, count),
          name = rightRecursiveRuleName,
          ///
      definitions = [rightRecursiveDefinition],
          NonTerminalNode = IntermediateNode,
          ///
      noWhitespace = rightRecursiveDefinition.hasNoWhitespace(),
          lookAhead = rightRecursiveDefinition.isLookAhead(),
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode, noWhitespace, lookAhead);

      return rightRecursiveRule;
    }
  }]);

  return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiSW50ZXJtZWRpYXRlTm9kZSIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZVJ1bGUiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJub25UZXJtaW5hbE5vZGUiLCJub1doaXRlc3BhY2UiLCJsb29rQWhlYWQiLCJkZWZpbml0aW9uIiwicnVsZU5hbWUiLCJydWxlcyIsImNvdW50IiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJoYXNOb1doaXRlc3BhY2UiLCJpc0xvb2tBaGVhZCIsInJpZ2h0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLG1CQUFtQkQsUUFBUSxzQkFBUixDQUF6QjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1HLDJCQUEyQkgsUUFBUSw4QkFBUixDQUZqQzs7QUFJTSxJQUFFSSxJQUFGLEdBQVdMLE9BQVgsQ0FBRUssSUFBRjtBQUFBLElBQ0VDLGtDQURGLEdBQ3lDSCxpQkFEekMsQ0FDRUcsa0NBREY7O0lBR0FDLGtCOzs7QUFDSiw4QkFBWUMsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLGVBQS9CLEVBQWdEQyxZQUFoRCxFQUE4REMsU0FBOUQsRUFBeUU7QUFBQTs7QUFBQSx3SUFDakVKLElBRGlFLEVBQzNEQyxXQUQyRCxFQUM5Q0MsZUFEOEM7O0FBR3ZFLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBTHVFO0FBTXhFOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxTQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLRCxZQUFaO0FBQ0Q7Ozs4Q0FFZ0NFLFUsRUFBWUMsUSxFQUFVQyxLLEVBQU9DLEssRUFBTztBQUNuRSxVQUFNQyx5QkFBeUJYLG1DQUFtQ1EsUUFBbkMsRUFBNkNFLEtBQTdDLENBQS9CO0FBQUEsVUFDTUUsMkJBQTJCZCx5QkFBeUJlLHlCQUF6QixDQUFtRE4sVUFBbkQsRUFBK0RDLFFBQS9ELEVBQXlFRSxLQUF6RSxDQURqQztBQUFBLFVBRU1SLE9BQU9TLHNCQUZiO0FBQUEsVUFFc0M7QUFDaENSLG9CQUFjLENBQ1pTLHdCQURZLENBSHBCO0FBQUEsVUFNTUUsa0JBQWtCbEIsZ0JBTnhCO0FBQUEsVUFNMEM7QUFDcENTLHFCQUFlTyx5QkFBeUJHLGVBQXpCLEVBUHJCO0FBQUEsVUFRTVQsWUFBWU0seUJBQXlCSSxXQUF6QixFQVJsQjtBQUFBLFVBU01DLHFCQUFxQixJQUFJaEIsa0JBQUosQ0FBdUJDLElBQXZCLEVBQTZCQyxXQUE3QixFQUEwQ1csZUFBMUMsRUFBMkRULFlBQTNELEVBQXlFQyxTQUF6RSxDQVQzQjs7QUFXQSxhQUFPVyxrQkFBUDtBQUNEOzs7O0VBOUI4QmxCLEk7O0FBaUNqQ21CLE9BQU9DLE9BQVAsR0FBaUJsQixrQkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IEludGVybWVkaWF0ZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2ludGVybWVkaWF0ZScpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBub25UZXJtaW5hbE5vZGUsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKSB7XG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcblxuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgaGFzTm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFJ1bGVOYW1lKGRlZmluaXRpb24sIHJ1bGVOYW1lLCBydWxlcywgY291bnQpIHtcbiAgICBjb25zdCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSwgY291bnQpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZFJ1bGVOYW1lKGRlZmluaXRpb24sIHJ1bGVOYW1lLCBjb3VudCksXG4gICAgICAgICAgbmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gSW50ZXJtZWRpYXRlTm9kZSwgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uLmhhc05vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUnVsZTtcbiJdfQ==