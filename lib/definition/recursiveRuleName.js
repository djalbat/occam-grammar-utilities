'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part');

var Parts = parsers.Parts,
    Definition = parsers.Definition,
    RuleNamePart = Parts.RuleNamePart,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName;

var RecursiveRuleNameDefinition = function (_Definition) {
  _inherits(RecursiveRuleNameDefinition, _Definition);

  function RecursiveRuleNameDefinition() {
    _classCallCheck(this, RecursiveRuleNameDefinition);

    return _possibleConstructorReturn(this, (RecursiveRuleNameDefinition.__proto__ || Object.getPrototypeOf(RecursiveRuleNameDefinition)).apply(this, arguments));
  }

  _createClass(RecursiveRuleNameDefinition, null, [{
    key: 'fromNonRecursiveRuleAndRecursiveRule',
    value: function fromNonRecursiveRuleAndRecursiveRule(nonRecursiveRule, recursiveRule) {
      var lookAhead = recursiveRule.isLookAhead(),
          noWhitespace = recursiveRule.hasNoWhitespace(),
          recursiveRuleName = recursiveRule.getName(),
          nonRecursiveRuleName = nonRecursiveRule.getName(),
          recursiveRuleNamePart = ruleNamePartFromRuleName(recursiveRuleName),
          nonRecursiveRuleNamePart = new RuleNamePart(nonRecursiveRuleName, noWhitespace, lookAhead),
          parts = [nonRecursiveRuleNamePart, recursiveRuleNamePart],
          recursiveRuleNameDefinition = new Definition(parts);

      return recursiveRuleNameDefinition;
    }
  }]);

  return RecursiveRuleNameDefinition;
}(Definition);

module.exports = RecursiveRuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZVJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsIlBhcnRzIiwiRGVmaW5pdGlvbiIsIlJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsIlJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbiIsIm5vblJlY3Vyc2l2ZVJ1bGUiLCJyZWN1cnNpdmVSdWxlIiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJub1doaXRlc3BhY2UiLCJoYXNOb1doaXRlc3BhY2UiLCJyZWN1cnNpdmVSdWxlTmFtZSIsImdldE5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCOztJQUVRRSxLLEdBQXNCSCxPLENBQXRCRyxLO0lBQU9DLFUsR0FBZUosTyxDQUFmSSxVO0lBQ1BDLFksR0FBaUJGLEssQ0FBakJFLFk7SUFDQUMsd0IsR0FBNkJKLGEsQ0FBN0JJLHdCOztJQUVGQywyQjs7Ozs7Ozs7Ozs7eURBQ3dDQyxnQixFQUFrQkMsYSxFQUFlO0FBQzNFLFVBQU1DLFlBQVlELGNBQWNFLFdBQWQsRUFBbEI7QUFBQSxVQUNNQyxlQUFlSCxjQUFjSSxlQUFkLEVBRHJCO0FBQUEsVUFFTUMsb0JBQW9CTCxjQUFjTSxPQUFkLEVBRjFCO0FBQUEsVUFHTUMsdUJBQXVCUixpQkFBaUJPLE9BQWpCLEVBSDdCO0FBQUEsVUFJTUUsd0JBQXdCWCx5QkFBeUJRLGlCQUF6QixDQUo5QjtBQUFBLFVBS01JLDJCQUEyQixJQUFJYixZQUFKLENBQWlCVyxvQkFBakIsRUFBdUNKLFlBQXZDLEVBQXFERixTQUFyRCxDQUxqQztBQUFBLFVBTU1TLFFBQVEsQ0FDTkQsd0JBRE0sRUFFTkQscUJBRk0sQ0FOZDtBQUFBLFVBVU1HLDhCQUE4QixJQUFJaEIsVUFBSixDQUFlZSxLQUFmLENBVnBDOztBQVlBLGFBQU9DLDJCQUFQO0FBQ0Q7Ozs7RUFmdUNoQixVOztBQWtCMUNpQixPQUFPQyxPQUFQLEdBQWlCZiwyQkFBakIiLCJmaWxlIjoicmVjdXJzaXZlUnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpO1xuXG5jb25zdCB7IFBhcnRzLCBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBSdWxlTmFtZVBhcnQgfSA9IFBhcnRzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXM7XG5cbmNsYXNzIFJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vblJlY3Vyc2l2ZVJ1bGVBbmRSZWN1cnNpdmVSdWxlKG5vblJlY3Vyc2l2ZVJ1bGUsIHJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCBsb29rQWhlYWQgPSByZWN1cnNpdmVSdWxlLmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gcmVjdXJzaXZlUnVsZS5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KG5vblJlY3Vyc2l2ZVJ1bGVOYW1lLCBub1doaXRlc3BhY2UsIGxvb2tBaGVhZCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb247XG4iXX0=