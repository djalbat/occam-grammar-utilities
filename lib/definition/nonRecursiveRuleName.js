'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part'),
    ruleNameUtilities = require('../utilities/ruleName');

var Definition = parsers.Definition,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName,
    nonRecursiveRuleNameFromRuleName = ruleNameUtilities.nonRecursiveRuleNameFromRuleName;

var NonRecursiveRuleNameDefinition = function (_Definition) {
  _inherits(NonRecursiveRuleNameDefinition, _Definition);

  function NonRecursiveRuleNameDefinition() {
    _classCallCheck(this, NonRecursiveRuleNameDefinition);

    return _possibleConstructorReturn(this, (NonRecursiveRuleNameDefinition.__proto__ || Object.getPrototypeOf(NonRecursiveRuleNameDefinition)).apply(this, arguments));
  }

  _createClass(NonRecursiveRuleNameDefinition, null, [{
    key: 'fromRuleName',
    value: function fromRuleName(ruleName) {
      var nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          parts = [nonRecursiveRuleNamePart],
          nonRecursiveDefinition = new NonRecursiveRuleNameDefinition(parts);

      return nonRecursiveDefinition;
    }
  }, {
    key: 'fromNonRecursiveRule',
    value: function fromNonRecursiveRule(nonRecursiveRule) {
      var nonRecursiveRuleName = nonRecursiveRule.getName(),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          parts = [nonRecursiveRuleNamePart],
          nonRecursiveDefinition = new NonRecursiveRuleNameDefinition(parts);

      return nonRecursiveDefinition;
    }
  }]);

  return NonRecursiveRuleNameDefinition;
}(Definition);

module.exports = NonRecursiveRuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZVJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInBhcnRzIiwibm9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIm5vblJlY3Vyc2l2ZVJ1bGUiLCJnZXROYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkgsYUFEL0IsQ0FDRUcsd0JBREY7QUFBQSxJQUVFQyxnQ0FGRixHQUV1Q0gsaUJBRnZDLENBRUVHLGdDQUZGOztJQUlBQyw4Qjs7Ozs7Ozs7Ozs7aUNBQ2dCQyxRLEVBQVU7QUFDNUIsVUFBTUMsdUJBQXVCSCxpQ0FBaUNFLFFBQWpDLENBQTdCO0FBQUEsVUFDTUUsMkJBQTJCTCx5QkFBeUJJLG9CQUF6QixDQURqQztBQUFBLFVBRU1FLFFBQVEsQ0FDTkQsd0JBRE0sQ0FGZDtBQUFBLFVBS01FLHlCQUF5QixJQUFJTCw4QkFBSixDQUFtQ0ksS0FBbkMsQ0FML0I7O0FBT0EsYUFBT0Msc0JBQVA7QUFDRDs7O3lDQUUyQkMsZ0IsRUFBa0I7QUFDNUMsVUFBTUosdUJBQXVCSSxpQkFBaUJDLE9BQWpCLEVBQTdCO0FBQUEsVUFDTUosMkJBQTJCTCx5QkFBeUJJLG9CQUF6QixDQURqQztBQUFBLFVBRU1FLFFBQVEsQ0FDTkQsd0JBRE0sQ0FGZDtBQUFBLFVBS01FLHlCQUF5QixJQUFJTCw4QkFBSixDQUFtQ0ksS0FBbkMsQ0FML0I7O0FBT0EsYUFBT0Msc0JBQVA7QUFDRDs7OztFQXJCMENSLFU7O0FBd0I3Q1csT0FBT0MsT0FBUCxHQUFpQlQsOEJBQWpCIiwiZmlsZSI6Im5vblJlY3Vyc2l2ZVJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgY29uc3Qgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKG5vblJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbm9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBOb25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIG5vblJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vblJlY3Vyc2l2ZVJ1bGUobm9uUmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKG5vblJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbm9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBOb25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIG5vblJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb247XG4iXX0=