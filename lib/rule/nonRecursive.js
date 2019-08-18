'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ruleNameUtilities = require('../utilities/ruleName'),
    NonRecursiveRuleNameDefinition = require('../definition/nonRecursiveRuleName');

var Rule = parsers.Rule,
    nonRecursiveRuleNameFromRuleName = ruleNameUtilities.nonRecursiveRuleNameFromRuleName;

var NonRecursiveRule = function (_Rule) {
  _inherits(NonRecursiveRule, _Rule);

  function NonRecursiveRule() {
    _classCallCheck(this, NonRecursiveRule);

    return _possibleConstructorReturn(this, (NonRecursiveRule.__proto__ || Object.getPrototypeOf(NonRecursiveRule)).apply(this, arguments));
  }

  _createClass(NonRecursiveRule, null, [{
    key: 'fromRuleRuleNameAndNonRecursiveDefinitions',
    value: function fromRuleRuleNameAndNonRecursiveDefinitions(rule, ruleName, nonRecursiveDefinitions) {
      var name = rule.getName();

      var definitions = nonRecursiveDefinitions; ///

      if (name !== ruleName) {
        var nonRecursiveRuleNameDefinition = NonRecursiveRuleNameDefinition.fromRuleName(ruleName);

        definitions.unshift(nonRecursiveRuleNameDefinition);
      }

      ruleName = rule.getName();

      var nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName);

      name = nonRecursiveRuleName; ///

      var NonTerminalNone = rule.getNonTerminalNode(),
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNone);

      return nonRecursiveRule;
    }
  }]);

  return NonRecursiveRule;
}(Rule);

module.exports = NonRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiTm9uUmVjdXJzaXZlUnVsZSIsInJ1bGUiLCJydWxlTmFtZSIsIm5vblJlY3Vyc2l2ZURlZmluaXRpb25zIiwibmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsInVuc2hpZnQiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsIk5vblRlcm1pbmFsTm9uZSIsImdldE5vblRlcm1pbmFsTm9kZSIsIm5vblJlY3Vyc2l2ZVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxvQkFBb0JELFFBQVEsdUJBQVIsQ0FBMUI7QUFBQSxJQUNNRSxpQ0FBaUNGLFFBQVEsb0NBQVIsQ0FEdkM7O0FBR00sSUFBRUcsSUFBRixHQUFXSixPQUFYLENBQUVJLElBQUY7QUFBQSxJQUNFQyxnQ0FERixHQUN1Q0gsaUJBRHZDLENBQ0VHLGdDQURGOztJQUdBQyxnQjs7Ozs7Ozs7Ozs7K0RBQzhDQyxJLEVBQU1DLFEsRUFBVUMsdUIsRUFBeUI7QUFDekYsVUFBSUMsT0FBT0gsS0FBS0ksT0FBTCxFQUFYOztBQUVBLFVBQU1DLGNBQWNILHVCQUFwQixDQUh5RixDQUczQzs7QUFFOUMsVUFBSUMsU0FBU0YsUUFBYixFQUF1QjtBQUNyQixZQUFNSyxpQ0FBaUNWLCtCQUErQlcsWUFBL0IsQ0FBNENOLFFBQTVDLENBQXZDOztBQUVBSSxvQkFBWUcsT0FBWixDQUFvQkYsOEJBQXBCO0FBQ0Q7O0FBRURMLGlCQUFXRCxLQUFLSSxPQUFMLEVBQVg7O0FBRUEsVUFBTUssdUJBQXVCWCxpQ0FBaUNHLFFBQWpDLENBQTdCOztBQUVBRSxhQUFPTSxvQkFBUCxDQWZ5RixDQWUzRDs7QUFFOUIsVUFBTUMsa0JBQWtCVixLQUFLVyxrQkFBTCxFQUF4QjtBQUFBLFVBQ01DLG1CQUFtQixJQUFJYixnQkFBSixDQUFxQkksSUFBckIsRUFBMkJFLFdBQTNCLEVBQXdDSyxlQUF4QyxDQUR6Qjs7QUFHQSxhQUFPRSxnQkFBUDtBQUNEOzs7O0VBdEI0QmYsSTs7QUF5Qi9CZ0IsT0FBT0MsT0FBUCxHQUFpQmYsZ0JBQWpCIiwiZmlsZSI6Im5vblJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKSxcbiAgICAgIE5vblJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9uUmVjdXJzaXZlUnVsZU5hbWUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblJlY3Vyc2l2ZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlUnVsZU5hbWVBbmROb25SZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBydWxlTmFtZSwgbm9uUmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBub25SZWN1cnNpdmVEZWZpbml0aW9uczsgIC8vL1xuXG4gICAgaWYgKG5hbWUgIT09IHJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24gPSBOb25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgZGVmaW5pdGlvbnMudW5zaGlmdChub25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBub25SZWN1cnNpdmVSdWxlTmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIG5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZTsgIC8vL1xuXG4gICAgY29uc3QgTm9uVGVybWluYWxOb25lID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlID0gbmV3IE5vblJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9uZSk7XG5cbiAgICByZXR1cm4gbm9uUmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblJlY3Vyc2l2ZVJ1bGU7XG4iXX0=