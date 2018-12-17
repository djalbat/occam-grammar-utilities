'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var RightRecursiveRule = require('../rule/rightRecursive');

var Rule = parsers.Rule,
    Definition = parsers.Definition;

var NonLeftRecursiveRule = function (_Rule) {
  _inherits(NonLeftRecursiveRule, _Rule);

  function NonLeftRecursiveRule() {
    _classCallCheck(this, NonLeftRecursiveRule);

    return _possibleConstructorReturn(this, (NonLeftRecursiveRule.__proto__ || Object.getPrototypeOf(NonLeftRecursiveRule)).apply(this, arguments));
  }

  _createClass(NonLeftRecursiveRule, null, [{
    key: 'fromLeftRecursiveRule',
    value: function fromLeftRecursiveRule(leftRecursiveRule) {
      var ruleName = leftRecursiveRule.getName(),
          ruleNonTerminalNode = leftRecursiveRule.getNonTerminalNode(),
          name = ruleName,
          ///
      definitions = definitionsFromLeftRecursiveRule(leftRecursiveRule),
          NonTerminalNode = ruleNonTerminalNode,
          ///
      nonLeftRecursiveRule = new NonLeftRecursiveRule(name, definitions, NonTerminalNode);

      return nonLeftRecursiveRule;
    }
  }]);

  return NonLeftRecursiveRule;
}(Rule);

module.exports = NonLeftRecursiveRule;

function definitionsFromLeftRecursiveRule(leftRecursiveRule) {
  var definitions = void 0;

  var rightRecursiveRuleNamePart = RightRecursiveRule.ruleNamePartFromLeftRecursiveRule(leftRecursiveRule),
      ruleNonLeftRecursiveDefinitions = leftRecursiveRule.getNonLeftRecursiveDefinitions(),
      ruleNonLeftRecursiveDefinitionsLength = ruleNonLeftRecursiveDefinitions.length;

  if (ruleNonLeftRecursiveDefinitionsLength === 0) {
    var parts = [rightRecursiveRuleNamePart],
        definition = new Definition(parts);

    definitions = [definition];
  } else {
    definitions = ruleNonLeftRecursiveDefinitions.map(function (ruleNonLeftRecursiveDefinition) {
      var ruleNonLeftRecursiveDefinitionParts = ruleNonLeftRecursiveDefinition.getParts(),
          parts = [].concat(ruleNonLeftRecursiveDefinitionParts).concat(rightRecursiveRuleNamePart),
          definition = new Definition(parts);

      return definition;
    });
  }

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vbkxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJSaWdodFJlY3Vyc2l2ZVJ1bGUiLCJSdWxlIiwiRGVmaW5pdGlvbiIsIk5vbkxlZnRSZWN1cnNpdmVSdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJOb25UZXJtaW5hbE5vZGUiLCJub25MZWZ0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21MZWZ0UmVjdXJzaXZlUnVsZSIsInJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXROb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicGFydHMiLCJkZWZpbml0aW9uIiwibWFwIiwicnVsZU5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJnZXRQYXJ0cyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBQTNCOztJQUVRRSxJLEdBQXFCSCxPLENBQXJCRyxJO0lBQU1DLFUsR0FBZUosTyxDQUFmSSxVOztJQUVSQyxvQjs7Ozs7Ozs7Ozs7MENBQ3lCQyxpQixFQUFtQjtBQUM5QyxVQUFNQyxXQUFXRCxrQkFBa0JFLE9BQWxCLEVBQWpCO0FBQUEsVUFDTUMsc0JBQXNCSCxrQkFBa0JJLGtCQUFsQixFQUQ1QjtBQUFBLFVBRU1DLE9BQU9KLFFBRmI7QUFBQSxVQUV3QjtBQUNsQkssb0JBQWNDLGlDQUFpQ1AsaUJBQWpDLENBSHBCO0FBQUEsVUFJTVEsa0JBQWtCTCxtQkFKeEI7QUFBQSxVQUk4QztBQUN4Q00sNkJBQXVCLElBQUlWLG9CQUFKLENBQXlCTSxJQUF6QixFQUErQkMsV0FBL0IsRUFBNENFLGVBQTVDLENBTDdCOztBQU9BLGFBQU9DLG9CQUFQO0FBQ0Q7Ozs7RUFWZ0NaLEk7O0FBYW5DYSxPQUFPQyxPQUFQLEdBQWlCWixvQkFBakI7O0FBRUEsU0FBU1EsZ0NBQVQsQ0FBMENQLGlCQUExQyxFQUE2RDtBQUMzRCxNQUFJTSxvQkFBSjs7QUFFQSxNQUFNTSw2QkFBNkJoQixtQkFBbUJpQixpQ0FBbkIsQ0FBcURiLGlCQUFyRCxDQUFuQztBQUFBLE1BQ01jLGtDQUFrQ2Qsa0JBQWtCZSw4QkFBbEIsRUFEeEM7QUFBQSxNQUVNQyx3Q0FBd0NGLGdDQUFnQ0csTUFGOUU7O0FBSUEsTUFBSUQsMENBQTBDLENBQTlDLEVBQWlEO0FBQy9DLFFBQU1FLFFBQVEsQ0FBQ04sMEJBQUQsQ0FBZDtBQUFBLFFBQ01PLGFBQWEsSUFBSXJCLFVBQUosQ0FBZW9CLEtBQWYsQ0FEbkI7O0FBR0FaLGtCQUFjLENBQUNhLFVBQUQsQ0FBZDtBQUNELEdBTEQsTUFLTztBQUNMYixrQkFBY1EsZ0NBQWdDTSxHQUFoQyxDQUFvQyxVQUFTQyw4QkFBVCxFQUF5QztBQUN6RixVQUFNQyxzQ0FBc0NELCtCQUErQkUsUUFBL0IsRUFBNUM7QUFBQSxVQUNNTCxRQUFRLEdBQUdNLE1BQUgsQ0FBVUYsbUNBQVYsRUFBK0NFLE1BQS9DLENBQXNEWiwwQkFBdEQsQ0FEZDtBQUFBLFVBRU1PLGFBQWEsSUFBSXJCLFVBQUosQ0FBZW9CLEtBQWYsQ0FGbkI7O0FBSUEsYUFBT0MsVUFBUDtBQUNELEtBTmEsQ0FBZDtBQU9EOztBQUVELFNBQU9iLFdBQVA7QUFDRCIsImZpbGUiOiJub25MZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBSaWdodFJlY3Vyc2l2ZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3JpZ2h0UmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgUnVsZSwgRGVmaW5pdGlvbiB9ID0gcGFyc2VycztcblxuY2xhc3MgTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOb25UZXJtaW5hbE5vZGUgPSBsZWZ0UmVjdXJzaXZlUnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVSdWxlKGxlZnRSZWN1cnNpdmVSdWxlKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZVJ1bGUgPSBuZXcgTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uTGVmdFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25MZWZ0UmVjdXJzaXZlUnVsZTtcblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgbGV0IGRlZmluaXRpb25zO1xuXG4gIGNvbnN0IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gUmlnaHRSZWN1cnNpdmVSdWxlLnJ1bGVOYW1lUGFydEZyb21MZWZ0UmVjdXJzaXZlUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSksXG4gICAgICAgIHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlUnVsZS5nZXROb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgcnVsZU5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgcGFydHMgPSBbcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnRdLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICBkZWZpbml0aW9ucyA9IFtkZWZpbml0aW9uXTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbml0aW9ucyA9IHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uKHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgcnVsZU5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBydWxlTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW10uY29uY2F0KHJ1bGVOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKS5jb25jYXQocmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5pdGlvbnM7XG59XG4iXX0=