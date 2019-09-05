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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZXMiLCJydWxlTmFtZVBhcnRzIiwibWFwIiwicnVsZU5hbWVQYXJ0IiwicGFydHMiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwibm9XaGl0ZXNwYWNlIiwiaGFzTm9XaGl0ZXNwYWNlIiwibm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FEMUI7O0FBR00sSUFBRUcsVUFBRixHQUFpQkosT0FBakIsQ0FBRUksVUFBRjtBQUFBLElBQ0VDLHdCQURGLEdBQytCSCxhQUQvQixDQUNFRyx3QkFERjtBQUFBLElBRUVDLGtDQUZGLEdBRTJFSCxpQkFGM0UsQ0FFRUcsa0NBRkY7QUFBQSxJQUVzQ0MsZ0NBRnRDLEdBRTJFSixpQkFGM0UsQ0FFc0NJLGdDQUZ0Qzs7SUFJQUMsbUI7Ozs7Ozs7Ozs7O2lDQUNnQkMsUSxFQUFVO0FBQzVCLFVBQU1DLHVCQUF1QkgsaUNBQWlDRSxRQUFqQyxDQUE3QjtBQUFBLFVBQ01FLHlCQUF5QkwsbUNBQW1DRyxRQUFuQyxDQUQvQjtBQUFBLFVBRU1HLFlBQVksQ0FDVkYsb0JBRFUsRUFFVkMsc0JBRlUsQ0FGbEI7QUFBQSxVQU1NRSxnQkFBZ0JELFVBQVVFLEdBQVYsQ0FBYyxVQUFDTCxRQUFELEVBQWM7QUFDMUMsWUFBTU0sZUFBZVYseUJBQXlCSSxRQUF6QixDQUFyQjs7QUFFQSxlQUFPTSxZQUFQO0FBQ0QsT0FKZSxDQU50QjtBQUFBLFVBV01DLFFBQVFILGFBWGQ7QUFBQSxVQVc4QjtBQUN4QkksNEJBQXNCLElBQUliLFVBQUosQ0FBZVksS0FBZixDQVo1Qjs7QUFjQSxhQUFPQyxtQkFBUDtBQUNEOzs7bUVBRXFEQyxpQixFQUFtQlAsc0IsRUFBd0I7QUFDL0YsVUFBTUYsV0FBV1MsaUJBQWpCO0FBQUEsVUFBb0M7QUFDOUJSLDZCQUF1QkgsaUNBQWlDRSxRQUFqQyxDQUQ3QjtBQUFBLFVBRU1HLFlBQVksQ0FDVkYsb0JBRFUsRUFFVkMsc0JBRlUsQ0FGbEI7QUFBQSxVQU1NRSxnQkFBZ0JELFVBQVVFLEdBQVYsQ0FBYyxVQUFDTCxRQUFELEVBQWM7QUFDMUMsWUFBTU0sZUFBZVYseUJBQXlCSSxRQUF6QixDQUFyQjs7QUFFQSxlQUFPTSxZQUFQO0FBQ0QsT0FKZSxDQU50QjtBQUFBLFVBV01DLFFBQVFILGFBWGQ7QUFBQSxVQVc4QjtBQUN4QkksNEJBQXNCLElBQUliLFVBQUosQ0FBZVksS0FBZixDQVo1Qjs7QUFjQSxhQUFPQyxtQkFBUDtBQUNEOzs7OERBRWdERixZLEVBQWNKLHNCLEVBQXdCO0FBQ3JGLFVBQU1GLFdBQVdNLGFBQWFJLFdBQWIsRUFBakI7QUFBQSxVQUNNQyxZQUFZTCxhQUFhTSxXQUFiLEVBRGxCO0FBQUEsVUFFTUMsZUFBZVAsYUFBYVEsZUFBYixFQUZyQjtBQUFBLFVBR01iLHVCQUF1QkgsaUNBQWlDRSxRQUFqQyxDQUg3QjtBQUFBLFVBSU1lLDJCQUEyQm5CLHlCQUF5Qkssb0JBQXpCLEVBQStDWSxZQUEvQyxFQUE2REYsU0FBN0QsQ0FKakM7QUFBQSxVQUtNSyw2QkFBNkJwQix5QkFBeUJNLHNCQUF6QixDQUxuQztBQUFBLFVBTU1LLFFBQVEsQ0FDTlEsd0JBRE0sRUFFTkMsMEJBRk0sQ0FOZDtBQUFBLFVBVU1SLHNCQUFzQixJQUFJYixVQUFKLENBQWVZLEtBQWYsQ0FWNUI7O0FBWUEsYUFBT0MsbUJBQVA7QUFDRDs7OztFQW5EK0JiLFU7O0FBc0RsQ3NCLE9BQU9DLE9BQVAsR0FBaUJuQixtQkFBakIiLCJmaWxlIjoicmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lLCBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICAgIGNvbnN0IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUgPSByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBbXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZSxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydHMgPSBydWxlTmFtZXMubWFwKChydWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwYXJ0cyA9IHJ1bGVOYW1lUGFydHMsICAvLy9cbiAgICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZShyZWN1cnNpdmVSdWxlTmFtZSwgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9IFtcbiAgICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lLFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0cyA9IHJ1bGVOYW1lcy5tYXAoKHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBhcnRzID0gcnVsZU5hbWVQYXJ0cywgIC8vL1xuICAgICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVQYXJ0QW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZVBhcnQsIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IHJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHJ1bGVOYW1lUGFydC5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUobm9uUmVjdXJzaXZlUnVsZU5hbWUsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19