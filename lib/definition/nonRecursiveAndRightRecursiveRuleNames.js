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
    nonRecursiveRuleNameFromLeftRecursiveRuleName = ruleNameUtilities.nonRecursiveRuleNameFromLeftRecursiveRuleName,
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName;

var NonRecursiveAndRightRecursiveRuleNamesDefinition = function (_Definition) {
      _inherits(NonRecursiveAndRightRecursiveRuleNamesDefinition, _Definition);

      function NonRecursiveAndRightRecursiveRuleNamesDefinition() {
            _classCallCheck(this, NonRecursiveAndRightRecursiveRuleNamesDefinition);

            return _possibleConstructorReturn(this, (NonRecursiveAndRightRecursiveRuleNamesDefinition.__proto__ || Object.getPrototypeOf(NonRecursiveAndRightRecursiveRuleNamesDefinition)).apply(this, arguments));
      }

      _createClass(NonRecursiveAndRightRecursiveRuleNamesDefinition, null, [{
            key: 'fromRuleNameLeftRecursiveRuleNameAndLookAhead',
            value: function fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead) {
                  var nonRecursiveRuleName = nonRecursiveRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName),
                      rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
                      nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName, lookAhead),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJOb25SZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb24iLCJydWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxvb2tBaGVhZCIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0cyIsInBhcnRzIiwibm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkgsYUFEL0IsQ0FDRUcsd0JBREY7QUFBQSxJQUVFQyw2Q0FGRixHQUV3RkgsaUJBRnhGLENBRUVHLDZDQUZGO0FBQUEsSUFFaURDLGtDQUZqRCxHQUV3RkosaUJBRnhGLENBRWlESSxrQ0FGakQ7O0lBSUFDLGdEOzs7Ozs7Ozs7OzswRUFDaURDLFEsRUFBVUMscUIsRUFBdUJDLFMsRUFBVztBQUMvRixzQkFBTUMsdUJBQXVCTiw4Q0FBOENJLHFCQUE5QyxDQUE3QjtBQUFBLHNCQUNNRyx5QkFBeUJOLG1DQUFtQ0UsUUFBbkMsQ0FEL0I7QUFBQSxzQkFFTUssMkJBQTJCVCx5QkFBeUJPLG9CQUF6QixFQUErQ0QsU0FBL0MsQ0FGakM7QUFBQSxzQkFHTUksNkJBQTZCVix5QkFBeUJRLHNCQUF6QixDQUhuQztBQUFBLHNCQUlNRyxnQkFBZ0IsQ0FDZEYsd0JBRGMsRUFFZEMsMEJBRmMsQ0FKdEI7QUFBQSxzQkFRTUUsUUFBUUQsYUFSZDtBQUFBLHNCQVE4QjtBQUN4QkUscUVBQW1ELElBQUlkLFVBQUosQ0FBZWEsS0FBZixDQVR6RDs7QUFXQSx5QkFBT0MsZ0RBQVA7QUFDRDs7OztFQWQ0RGQsVTs7QUFpQi9EZSxPQUFPQyxPQUFQLEdBQWlCWixnREFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXMsXG4gICAgICB7IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kTG9va0FoZWFkKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSwgbG9va0FoZWFkKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnRzID0gW1xuICAgICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhcnRzID0gcnVsZU5hbWVQYXJ0cywgIC8vL1xuICAgICAgICAgIG5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBub25SZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25SZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb247XG4iXX0=