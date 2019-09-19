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
            key: 'fromRuleNameAndLookAhead',
            value: function fromRuleNameAndLookAhead(ruleName, lookAhead) {
                  var nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIk5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwibG9va0FoZWFkIiwibm9uUmVjdXJzaXZlUnVsZU5hbWUiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRzIiwicGFydHMiLCJub25SZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FEMUI7O0FBR00sSUFBRUcsVUFBRixHQUFpQkosT0FBakIsQ0FBRUksVUFBRjtBQUFBLElBQ0VDLHdCQURGLEdBQytCSCxhQUQvQixDQUNFRyx3QkFERjtBQUFBLElBRUVDLGdDQUZGLEdBRTJFSCxpQkFGM0UsQ0FFRUcsZ0NBRkY7QUFBQSxJQUVvQ0Msa0NBRnBDLEdBRTJFSixpQkFGM0UsQ0FFb0NJLGtDQUZwQzs7SUFJQUMsZ0Q7Ozs7Ozs7Ozs7O3FEQUM0QkMsUSxFQUFVQyxTLEVBQVc7QUFDbkQsc0JBQU1DLHVCQUF1QkwsaUNBQWlDRyxRQUFqQyxDQUE3QjtBQUFBLHNCQUNNRyx5QkFBeUJMLG1DQUFtQ0UsUUFBbkMsQ0FEL0I7QUFBQSxzQkFFTUksMkJBQTJCUix5QkFBeUJNLG9CQUF6QixFQUErQ0QsU0FBL0MsQ0FGakM7QUFBQSxzQkFHTUksNkJBQTZCVCx5QkFBeUJPLHNCQUF6QixDQUhuQztBQUFBLHNCQUlNRyxnQkFBZ0IsQ0FDZEYsd0JBRGMsRUFFZEMsMEJBRmMsQ0FKdEI7QUFBQSxzQkFRTUUsUUFBUUQsYUFSZDtBQUFBLHNCQVE4QjtBQUN4QkUscUVBQW1ELElBQUliLFVBQUosQ0FBZVksS0FBZixDQVR6RDs7QUFXQSx5QkFBT0MsZ0RBQVA7QUFDRDs7OztFQWQ0RGIsVTs7QUFpQi9EYyxPQUFPQyxPQUFQLEdBQWlCWCxnREFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXMsXG4gICAgICB7IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgTm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRMb29rQWhlYWQocnVsZU5hbWUsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUgPSByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUobm9uUmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXJ0cyA9IHJ1bGVOYW1lUGFydHMsICAvLy9cbiAgICAgICAgICBub25SZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gbm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uO1xuIl19