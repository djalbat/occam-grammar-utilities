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
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName,
    nonRecursiveRuleNameFromRuleName = ruleNameUtilities.nonRecursiveRuleNameFromRuleName;

var RecursiveDefinition = function (_Definition) {
  _inherits(RecursiveDefinition, _Definition);

  function RecursiveDefinition() {
    _classCallCheck(this, RecursiveDefinition);

    return _possibleConstructorReturn(this, (RecursiveDefinition.__proto__ || Object.getPrototypeOf(RecursiveDefinition)).apply(this, arguments));
  }

  _createClass(RecursiveDefinition, null, [{
    key: 'fromRuleName',
    value: function fromRuleName(ruleName) {
      var nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          ruleNames = [nonRecursiveRuleName, rightRecursiveRuleName],
          ruleNameParts = ruleNames.map(function (ruleName) {
        var ruleNamePart = ruleNamePartFromRuleName(ruleName);

        return ruleNamePart;
      }),
          parts = ruleNameParts,
          ///
      recursiveDefinition = new Definition(parts);

      return recursiveDefinition;
    }
  }, {
    key: 'fromRecursiveRuleNameAndRightRecursiveRuleName',
    value: function fromRecursiveRuleNameAndRightRecursiveRuleName(recursiveRuleName, rightRecursiveRuleName) {
      var ruleName = recursiveRuleName,
          ///
      nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          ruleNames = [nonRecursiveRuleName, rightRecursiveRuleName],
          ruleNameParts = ruleNames.map(function (ruleName) {
        var ruleNamePart = ruleNamePartFromRuleName(ruleName);

        return ruleNamePart;
      }),
          parts = ruleNameParts,
          ///
      recursiveDefinition = new Definition(parts);

      return recursiveDefinition;
    }
  }, {
    key: 'fromRuleNamePartAndRightRecursiveRuleName',
    value: function fromRuleNamePartAndRightRecursiveRuleName(ruleNamePart, rightRecursiveRuleName) {
      var ruleName = ruleNamePart.getRuleName(),
          lookAhead = ruleNamePart.isLookAhead(),
          noWhitespace = ruleNamePart.hasNoWhitespace(),
          nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName, noWhitespace, lookAhead),
          rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
          parts = [nonRecursiveRuleNamePart, rightRecursiveRuleNamePart],
          recursiveDefinition = new Definition(parts);

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}(Definition);

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5vbGQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJwYXJ0VXRpbGl0aWVzIiwicnVsZU5hbWVVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwibm9uUmVjdXJzaXZlUnVsZU5hbWUiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWVzIiwicnVsZU5hbWVQYXJ0cyIsIm1hcCIsInJ1bGVOYW1lUGFydCIsInBhcnRzIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsIm5vV2hpdGVzcGFjZSIsImhhc05vV2hpdGVzcGFjZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkgsYUFEL0IsQ0FDRUcsd0JBREY7QUFBQSxJQUVFQyxrQ0FGRixHQUUyRUgsaUJBRjNFLENBRUVHLGtDQUZGO0FBQUEsSUFFc0NDLGdDQUZ0QyxHQUUyRUosaUJBRjNFLENBRXNDSSxnQ0FGdEM7O0lBSUFDLG1COzs7Ozs7Ozs7OztpQ0FDZ0JDLFEsRUFBVTtBQUM1QixVQUFNQyx1QkFBdUJILGlDQUFpQ0UsUUFBakMsQ0FBN0I7QUFBQSxVQUNNRSx5QkFBeUJMLG1DQUFtQ0csUUFBbkMsQ0FEL0I7QUFBQSxVQUVNRyxZQUFZLENBQ1ZGLG9CQURVLEVBRVZDLHNCQUZVLENBRmxCO0FBQUEsVUFNTUUsZ0JBQWdCRCxVQUFVRSxHQUFWLENBQWMsVUFBQ0wsUUFBRCxFQUFjO0FBQzFDLFlBQU1NLGVBQWVWLHlCQUF5QkksUUFBekIsQ0FBckI7O0FBRUEsZUFBT00sWUFBUDtBQUNELE9BSmUsQ0FOdEI7QUFBQSxVQVdNQyxRQUFRSCxhQVhkO0FBQUEsVUFXOEI7QUFDeEJJLDRCQUFzQixJQUFJYixVQUFKLENBQWVZLEtBQWYsQ0FaNUI7O0FBY0EsYUFBT0MsbUJBQVA7QUFDRDs7O21FQUVxREMsaUIsRUFBbUJQLHNCLEVBQXdCO0FBQy9GLFVBQU1GLFdBQVdTLGlCQUFqQjtBQUFBLFVBQW9DO0FBQzlCUiw2QkFBdUJILGlDQUFpQ0UsUUFBakMsQ0FEN0I7QUFBQSxVQUVNRyxZQUFZLENBQ1ZGLG9CQURVLEVBRVZDLHNCQUZVLENBRmxCO0FBQUEsVUFNTUUsZ0JBQWdCRCxVQUFVRSxHQUFWLENBQWMsVUFBQ0wsUUFBRCxFQUFjO0FBQzFDLFlBQU1NLGVBQWVWLHlCQUF5QkksUUFBekIsQ0FBckI7O0FBRUEsZUFBT00sWUFBUDtBQUNELE9BSmUsQ0FOdEI7QUFBQSxVQVdNQyxRQUFRSCxhQVhkO0FBQUEsVUFXOEI7QUFDeEJJLDRCQUFzQixJQUFJYixVQUFKLENBQWVZLEtBQWYsQ0FaNUI7O0FBY0EsYUFBT0MsbUJBQVA7QUFDRDs7OzhEQUVnREYsWSxFQUFjSixzQixFQUF3QjtBQUNyRixVQUFNRixXQUFXTSxhQUFhSSxXQUFiLEVBQWpCO0FBQUEsVUFDTUMsWUFBWUwsYUFBYU0sV0FBYixFQURsQjtBQUFBLFVBRU1DLGVBQWVQLGFBQWFRLGVBQWIsRUFGckI7QUFBQSxVQUdNYix1QkFBdUJILGlDQUFpQ0UsUUFBakMsQ0FIN0I7QUFBQSxVQUlNZSwyQkFBMkJuQix5QkFBeUJLLG9CQUF6QixFQUErQ1ksWUFBL0MsRUFBNkRGLFNBQTdELENBSmpDO0FBQUEsVUFLTUssNkJBQTZCcEIseUJBQXlCTSxzQkFBekIsQ0FMbkM7QUFBQSxVQU1NSyxRQUFRLENBQ05RLHdCQURNLEVBRU5DLDBCQUZNLENBTmQ7QUFBQSxVQVVNUixzQkFBc0IsSUFBSWIsVUFBSixDQUFlWSxLQUFmLENBVjVCOztBQVlBLGFBQU9DLG1CQUFQO0FBQ0Q7Ozs7RUFuRCtCYixVOztBQXNEbENzQixPQUFPQyxPQUFQLEdBQWlCbkIsbUJBQWpCIiwiZmlsZSI6InJlY3Vyc2l2ZS5vbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXMsXG4gICAgICB7IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUsIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgY29uc3Qgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9IFtcbiAgICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lLFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0cyA9IHJ1bGVOYW1lcy5tYXAoKHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBhcnRzID0gcnVsZU5hbWVQYXJ0cywgIC8vL1xuICAgICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVjdXJzaXZlUnVsZU5hbWVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKHJlY3Vyc2l2ZVJ1bGVOYW1lLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcnVsZU5hbWVzID0gW1xuICAgICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWUsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBydWxlTmFtZVBhcnRzID0gcnVsZU5hbWVzLm1hcCgocnVsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGFydHMgPSBydWxlTmFtZVBhcnRzLCAgLy8vXG4gICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZVBhcnRBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lUGFydCwgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gcnVsZU5hbWVQYXJ0Lmhhc05vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=