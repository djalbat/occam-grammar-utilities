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

var RecursiveDefinition = function (_Definition) {
  _inherits(RecursiveDefinition, _Definition);

  function RecursiveDefinition() {
    _classCallCheck(this, RecursiveDefinition);

    return _possibleConstructorReturn(this, (RecursiveDefinition.__proto__ || Object.getPrototypeOf(RecursiveDefinition)).apply(this, arguments));
  }

  _createClass(RecursiveDefinition, null, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWVzIiwicnVsZU5hbWVQYXJ0cyIsIm1hcCIsInJ1bGVOYW1lUGFydCIsInBhcnRzIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFJ1bGVOYW1lIiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJub1doaXRlc3BhY2UiLCJoYXNOb1doaXRlc3BhY2UiLCJub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjs7QUFHTSxJQUFFRyxVQUFGLEdBQWlCSixPQUFqQixDQUFFSSxVQUFGO0FBQUEsSUFDRUMsd0JBREYsR0FDK0JILGFBRC9CLENBQ0VHLHdCQURGO0FBQUEsSUFFRUMsZ0NBRkYsR0FFdUNILGlCQUZ2QyxDQUVFRyxnQ0FGRjs7SUFJQUMsbUI7Ozs7Ozs7Ozs7O21FQUNrREMsaUIsRUFBbUJDLHNCLEVBQXdCO0FBQy9GLFVBQU1DLFdBQVdGLGlCQUFqQjtBQUFBLFVBQW9DO0FBQzlCRyw2QkFBdUJMLGlDQUFpQ0ksUUFBakMsQ0FEN0I7QUFBQSxVQUVNRSxZQUFZLENBQ1ZELG9CQURVLEVBRVZGLHNCQUZVLENBRmxCO0FBQUEsVUFNTUksZ0JBQWdCRCxVQUFVRSxHQUFWLENBQWMsVUFBQ0osUUFBRCxFQUFjO0FBQzFDLFlBQU1LLGVBQWVWLHlCQUF5QkssUUFBekIsQ0FBckI7O0FBRUEsZUFBT0ssWUFBUDtBQUNELE9BSmUsQ0FOdEI7QUFBQSxVQVdNQyxRQUFRSCxhQVhkO0FBQUEsVUFXOEI7QUFDeEJJLDRCQUFzQixJQUFJYixVQUFKLENBQWVZLEtBQWYsQ0FaNUI7O0FBY0EsYUFBT0MsbUJBQVA7QUFDRDs7OzhEQUVnREYsWSxFQUFjTixzQixFQUF3QjtBQUNyRixVQUFNQyxXQUFXSyxhQUFhRyxXQUFiLEVBQWpCO0FBQUEsVUFDTUMsWUFBWUosYUFBYUssV0FBYixFQURsQjtBQUFBLFVBRU1DLGVBQWVOLGFBQWFPLGVBQWIsRUFGckI7QUFBQSxVQUdNWCx1QkFBdUJMLGlDQUFpQ0ksUUFBakMsQ0FIN0I7QUFBQSxVQUlNYSwyQkFBMkJsQix5QkFBeUJNLG9CQUF6QixFQUErQ1UsWUFBL0MsRUFBNkRGLFNBQTdELENBSmpDO0FBQUEsVUFLTUssNkJBQTZCbkIseUJBQXlCSSxzQkFBekIsQ0FMbkM7QUFBQSxVQU1NTyxRQUFRLENBQ05PLHdCQURNLEVBRU5DLDBCQUZNLENBTmQ7QUFBQSxVQVVNUCxzQkFBc0IsSUFBSWIsVUFBSixDQUFlWSxLQUFmLENBVjVCOztBQVlBLGFBQU9DLG1CQUFQO0FBQ0Q7Ozs7RUFqQytCYixVOztBQW9DbENxQixPQUFPQyxPQUFQLEdBQWlCbkIsbUJBQWpCIiwiZmlsZSI6InJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0JyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcyxcbiAgICAgIHsgbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUmVjdXJzaXZlUnVsZU5hbWVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKHJlY3Vyc2l2ZVJ1bGVOYW1lLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcnVsZU5hbWVzID0gW1xuICAgICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWUsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBydWxlTmFtZVBhcnRzID0gcnVsZU5hbWVzLm1hcCgocnVsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGFydHMgPSBydWxlTmFtZVBhcnRzLCAgLy8vXG4gICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZVBhcnRBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lUGFydCwgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gcnVsZU5hbWVQYXJ0Lmhhc05vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=