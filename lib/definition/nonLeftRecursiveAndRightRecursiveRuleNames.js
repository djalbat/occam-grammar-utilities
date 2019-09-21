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
    nonLeftRecursiveRuleNameFromLeftRecursiveRuleName = ruleNameUtilities.nonLeftRecursiveRuleNameFromLeftRecursiveRuleName,
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName;

var NonLeftRecursiveAndRightRecursiveRuleNamesDefinition = function (_Definition) {
      _inherits(NonLeftRecursiveAndRightRecursiveRuleNamesDefinition, _Definition);

      function NonLeftRecursiveAndRightRecursiveRuleNamesDefinition() {
            _classCallCheck(this, NonLeftRecursiveAndRightRecursiveRuleNamesDefinition);

            return _possibleConstructorReturn(this, (NonLeftRecursiveAndRightRecursiveRuleNamesDefinition.__proto__ || Object.getPrototypeOf(NonLeftRecursiveAndRightRecursiveRuleNamesDefinition)).apply(this, arguments));
      }

      _createClass(NonLeftRecursiveAndRightRecursiveRuleNamesDefinition, null, [{
            key: 'fromRuleNameLeftRecursiveRuleNameAndLookAhead',
            value: function fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead) {
                  var nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName),
                      rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
                      nonLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(nonLeftRecursiveRuleName, lookAhead),
                      rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
                      ruleNameParts = [nonLeftRecursiveRuleNamePart, rightRecursiveRuleNamePart],
                      parts = ruleNameParts,
                      ///
                  nonLeftRecursiveAndRightRecursiveRuleNamesDefinition = new Definition(parts);

                  return nonLeftRecursiveAndRightRecursiveRuleNamesDefinition;
            }
      }]);

      return NonLeftRecursiveAndRightRecursiveRuleNamesDefinition;
}(Definition);

module.exports = NonLeftRecursiveAndRightRecursiveRuleNamesDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vbkxlZnRSZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lcy5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIk5vbkxlZnRSZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb24iLCJydWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxvb2tBaGVhZCIsIm5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRzIiwicGFydHMiLCJub25MZWZ0UmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkgsYUFEL0IsQ0FDRUcsd0JBREY7QUFBQSxJQUVFQyxpREFGRixHQUU0RkgsaUJBRjVGLENBRUVHLGlEQUZGO0FBQUEsSUFFcURDLGtDQUZyRCxHQUU0RkosaUJBRjVGLENBRXFESSxrQ0FGckQ7O0lBSUFDLG9EOzs7Ozs7Ozs7OzswRUFDaURDLFEsRUFBVUMscUIsRUFBdUJDLFMsRUFBVztBQUMvRixzQkFBTUMsMkJBQTJCTixrREFBa0RJLHFCQUFsRCxDQUFqQztBQUFBLHNCQUNNRyx5QkFBeUJOLG1DQUFtQ0UsUUFBbkMsQ0FEL0I7QUFBQSxzQkFFTUssK0JBQStCVCx5QkFBeUJPLHdCQUF6QixFQUFtREQsU0FBbkQsQ0FGckM7QUFBQSxzQkFHTUksNkJBQTZCVix5QkFBeUJRLHNCQUF6QixDQUhuQztBQUFBLHNCQUlNRyxnQkFBZ0IsQ0FDZEYsNEJBRGMsRUFFZEMsMEJBRmMsQ0FKdEI7QUFBQSxzQkFRTUUsUUFBUUQsYUFSZDtBQUFBLHNCQVE4QjtBQUN4QkUseUVBQXVELElBQUlkLFVBQUosQ0FBZWEsS0FBZixDQVQ3RDs7QUFXQSx5QkFBT0Msb0RBQVA7QUFDRDs7OztFQWRnRWQsVTs7QUFpQm5FZSxPQUFPQyxPQUFQLEdBQWlCWixvREFBakIiLCJmaWxlIjoibm9uTGVmdFJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyBub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgTm9uTGVmdFJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kTG9va0FoZWFkKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21MZWZ0UmVjdXJzaXZlUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGFydHMgPSBydWxlTmFtZVBhcnRzLCAgLy8vXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBub25MZWZ0UmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uTGVmdFJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbjtcbiJdfQ==