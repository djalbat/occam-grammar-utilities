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
    nonRecursiveRuleNameFromRuleName = ruleNameUtilities.nonRecursiveRuleNameFromRuleName,
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName;

var NonRecursiveAndRightRecursiveRuleNamesDefinition = function (_Definition) {
      _inherits(NonRecursiveAndRightRecursiveRuleNamesDefinition, _Definition);

      function NonRecursiveAndRightRecursiveRuleNamesDefinition() {
            _classCallCheck(this, NonRecursiveAndRightRecursiveRuleNamesDefinition);

            return _possibleConstructorReturn(this, (NonRecursiveAndRightRecursiveRuleNamesDefinition.__proto__ || Object.getPrototypeOf(NonRecursiveAndRightRecursiveRuleNamesDefinition)).apply(this, arguments));
      }

      _createClass(NonRecursiveAndRightRecursiveRuleNamesDefinition, null, [{
            key: 'fromImmediatelyLeftRecursiveDefinition',
            value: function fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
                  var ruleName = immediatelyLeftRecursiveDefinition.getRuleName(),
                      lookAhead = immediatelyLeftRecursiveDefinition.isLookAhead(),
                      noWhiteSpace = immediatelyLeftRecursiveDefinition.hasNoWhitespace(),
                      nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
                      rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
                      nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName, noWhiteSpace, lookAhead),
                      rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
                      ruleNameParts = [nonRecursiveRuleNamePart, rightRecursiveRuleNamePart],
                      parts = ruleNameParts,
                      ///
                  nonRecursiveAndRightRecursiveRuleNamesDefinition = new Definition(parts);

                  return nonRecursiveAndRightRecursiveRuleNamesDefinition;
            }
      }]);

      return NonRecursiveAndRightRecursiveRuleNamesDefinition;
}(Definition);

module.exports = NonRecursiveAndRightRecursiveRuleNamesDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIk5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiIsImltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJub1doaXRlU3BhY2UiLCJoYXNOb1doaXRlc3BhY2UiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydHMiLCJwYXJ0cyIsIm5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjs7QUFHTSxJQUFFRyxVQUFGLEdBQWlCSixPQUFqQixDQUFFSSxVQUFGO0FBQUEsSUFDRUMsd0JBREYsR0FDK0JILGFBRC9CLENBQ0VHLHdCQURGO0FBQUEsSUFFRUMsZ0NBRkYsR0FFMkVILGlCQUYzRSxDQUVFRyxnQ0FGRjtBQUFBLElBRW9DQyxrQ0FGcEMsR0FFMkVKLGlCQUYzRSxDQUVvQ0ksa0NBRnBDOztJQUlBQyxnRDs7Ozs7Ozs7Ozs7bUVBQzBDQyxrQyxFQUFvQztBQUNoRixzQkFBTUMsV0FBV0QsbUNBQW1DRSxXQUFuQyxFQUFqQjtBQUFBLHNCQUNNQyxZQUFZSCxtQ0FBbUNJLFdBQW5DLEVBRGxCO0FBQUEsc0JBRU1DLGVBQWVMLG1DQUFtQ00sZUFBbkMsRUFGckI7QUFBQSxzQkFHTUMsdUJBQXVCVixpQ0FBaUNJLFFBQWpDLENBSDdCO0FBQUEsc0JBSU1PLHlCQUF5QlYsbUNBQW1DRyxRQUFuQyxDQUovQjtBQUFBLHNCQUtNUSwyQkFBMkJiLHlCQUF5Qlcsb0JBQXpCLEVBQStDRixZQUEvQyxFQUE2REYsU0FBN0QsQ0FMakM7QUFBQSxzQkFNTU8sNkJBQTZCZCx5QkFBeUJZLHNCQUF6QixDQU5uQztBQUFBLHNCQU9NRyxnQkFBZ0IsQ0FDZEYsd0JBRGMsRUFFZEMsMEJBRmMsQ0FQdEI7QUFBQSxzQkFXTUUsUUFBUUQsYUFYZDtBQUFBLHNCQVc4QjtBQUN4QkUscUVBQW1ELElBQUlsQixVQUFKLENBQWVpQixLQUFmLENBWnpEOztBQWNBLHlCQUFPQyxnREFBUDtBQUNEOzs7O0VBakI0RGxCLFU7O0FBb0IvRG1CLE9BQU9DLE9BQVAsR0FBaUJoQixnREFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXMsXG4gICAgICB7IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgTm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgIG5vV2hpdGVTcGFjZSA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uaGFzTm9XaGl0ZXNwYWNlKCksXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSwgbm9XaGl0ZVNwYWNlLCBsb29rQWhlYWQpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydHMgPSBbXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGFydHMgPSBydWxlTmFtZVBhcnRzLCAgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIG5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbjtcbiJdfQ==