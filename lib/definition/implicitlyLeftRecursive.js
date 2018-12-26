'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var definitionUtilities = require('../utilities/definition');

var Definition = parsers.Definition,
    isFirstPartRuleNamePart = definitionUtilities.isFirstPartRuleNamePart;

var ImplicitlyLeftRecursiveDefinition = function (_Definition) {
  _inherits(ImplicitlyLeftRecursiveDefinition, _Definition);

  function ImplicitlyLeftRecursiveDefinition() {
    _classCallCheck(this, ImplicitlyLeftRecursiveDefinition);

    return _possibleConstructorReturn(this, (ImplicitlyLeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(ImplicitlyLeftRecursiveDefinition)).apply(this, arguments));
  }

  _createClass(ImplicitlyLeftRecursiveDefinition, null, [{
    key: 'fromDefinitionAndPreviousRule',
    value: function fromDefinitionAndPreviousRule(definition, previousRule) {
      var previousRuleName = previousRule.getName(),
          implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinitionFromDefinition(definition, function (ruleName) {
        if (previousRuleName === ruleName) {
          return true;
        }
      });

      return implicitlyLeftRecursiveDefinition;
    }
  }, {
    key: 'fromDefinitionAndPreviousRules',
    value: function fromDefinitionAndPreviousRules(definition, previousRules) {
      var previousRuleNames = previousRules.map(function (previousRule) {
        var previousRuleName = previousRule.getName();

        return previousRuleName;
      }),
          implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinitionFromDefinition(definition, function (ruleName) {
        var previousRuleNamesIncludesRuleName = previousRuleNames.includes(ruleName);

        if (previousRuleNamesIncludesRuleName) {
          return true;
        }
      });

      return implicitlyLeftRecursiveDefinition;
    }
  }]);

  return ImplicitlyLeftRecursiveDefinition;
}(Definition);

module.exports = ImplicitlyLeftRecursiveDefinition;

function implicitlyLeftRecursiveDefinitionFromDefinition(definition, callback) {
  var implicitlyLeftRecursiveDefinition = null;

  var firstPartRuleNamePart = isFirstPartRuleNamePart(definition);

  if (firstPartRuleNamePart) {
    var firstPart = definition.getFirstPart(),
        firstRuleNamePart = firstPart,
        ///
    firstRuleNamePartRuleName = firstRuleNamePart.getRuleName(),
        ruleName = firstRuleNamePartRuleName,
        ///
    definitionImplicitlyLeftRecursive = callback(ruleName);

    if (definitionImplicitlyLeftRecursive) {
      var parts = definition.getParts();

      implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts);
    }
  }

  return implicitlyLeftRecursiveDefinition;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJpc0ZpcnN0UGFydFJ1bGVOYW1lUGFydCIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwcmV2aW91c1J1bGUiLCJwcmV2aW91c1J1bGVOYW1lIiwiZ2V0TmFtZSIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkZyb21EZWZpbml0aW9uIiwicnVsZU5hbWUiLCJwcmV2aW91c1J1bGVzIiwicHJldmlvdXNSdWxlTmFtZXMiLCJtYXAiLCJwcmV2aW91c1J1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWxsYmFjayIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsImZpcnN0UnVsZU5hbWVQYXJ0IiwiZmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwicGFydHMiLCJnZXRQYXJ0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsc0JBQXNCRCxRQUFRLHlCQUFSLENBQTVCOztBQUVNLElBQUVFLFVBQUYsR0FBaUJILE9BQWpCLENBQUVHLFVBQUY7QUFBQSxJQUNFQyx1QkFERixHQUM4QkYsbUJBRDlCLENBQ0VFLHVCQURGOztJQUdBQyxpQzs7Ozs7Ozs7Ozs7a0RBQ2lDQyxVLEVBQVlDLFksRUFBYztBQUM3RCxVQUFNQyxtQkFBbUJELGFBQWFFLE9BQWIsRUFBekI7QUFBQSxVQUNNQyxvQ0FBb0NDLGdEQUFnREwsVUFBaEQsRUFBNEQsVUFBU00sUUFBVCxFQUFtQjtBQUNqSCxZQUFJSixxQkFBcUJJLFFBQXpCLEVBQW1DO0FBQ2pDLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BSm1DLENBRDFDOztBQU9BLGFBQU9GLGlDQUFQO0FBQ0Q7OzttREFFcUNKLFUsRUFBWU8sYSxFQUFlO0FBQy9ELFVBQU1DLG9CQUFvQkQsY0FBY0UsR0FBZCxDQUFrQixVQUFTUixZQUFULEVBQXVCO0FBQzNELFlBQU1DLG1CQUFtQkQsYUFBYUUsT0FBYixFQUF6Qjs7QUFFQSxlQUFPRCxnQkFBUDtBQUNELE9BSm1CLENBQTFCO0FBQUEsVUFLTUUsb0NBQW9DQyxnREFBZ0RMLFVBQWhELEVBQTRELFVBQVNNLFFBQVQsRUFBbUI7QUFDakgsWUFBTUksb0NBQW9DRixrQkFBa0JHLFFBQWxCLENBQTJCTCxRQUEzQixDQUExQzs7QUFFQSxZQUFJSSxpQ0FBSixFQUF1QztBQUNyQyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU5tQyxDQUwxQzs7QUFhQSxhQUFPTixpQ0FBUDtBQUNEOzs7O0VBM0I2Q1AsVTs7QUE4QmhEZSxPQUFPQyxPQUFQLEdBQWlCZCxpQ0FBakI7O0FBRUEsU0FBU00sK0NBQVQsQ0FBeURMLFVBQXpELEVBQXFFYyxRQUFyRSxFQUErRTtBQUM3RSxNQUFJVixvQ0FBb0MsSUFBeEM7O0FBRUEsTUFBTVcsd0JBQXdCakIsd0JBQXdCRSxVQUF4QixDQUE5Qjs7QUFFQSxNQUFJZSxxQkFBSixFQUEyQjtBQUN6QixRQUFNQyxZQUFZaEIsV0FBV2lCLFlBQVgsRUFBbEI7QUFBQSxRQUNNQyxvQkFBb0JGLFNBRDFCO0FBQUEsUUFDc0M7QUFDaENHLGdDQUE0QkQsa0JBQWtCRSxXQUFsQixFQUZsQztBQUFBLFFBR01kLFdBQVdhLHlCQUhqQjtBQUFBLFFBRzRDO0FBQ3RDRSx3Q0FBb0NQLFNBQVNSLFFBQVQsQ0FKMUM7O0FBTUEsUUFBSWUsaUNBQUosRUFBdUM7QUFDckMsVUFBTUMsUUFBUXRCLFdBQVd1QixRQUFYLEVBQWQ7O0FBRUFuQiwwQ0FBb0MsSUFBSUwsaUNBQUosQ0FBc0N1QixLQUF0QyxDQUFwQztBQUNEO0FBQ0Y7O0FBRUQsU0FBT2xCLGlDQUFQO0FBQ0QiLCJmaWxlIjoiaW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IGlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0IH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUHJldmlvdXNSdWxlKGRlZmluaXRpb24sIHByZXZpb3VzUnVsZSkge1xuICAgIGNvbnN0IHByZXZpb3VzUnVsZU5hbWUgPSBwcmV2aW91c1J1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkZyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGZ1bmN0aW9uKHJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNSdWxlTmFtZSA9PT0gcnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRQcmV2aW91c1J1bGVzKGRlZmluaXRpb24sIHByZXZpb3VzUnVsZXMpIHtcbiAgICBjb25zdCBwcmV2aW91c1J1bGVOYW1lcyA9IHByZXZpb3VzUnVsZXMubWFwKGZ1bmN0aW9uKHByZXZpb3VzUnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNSdWxlTmFtZSA9IHByZXZpb3VzUnVsZS5nZXROYW1lKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUnVsZU5hbWU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZnVuY3Rpb24ocnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHByZXZpb3VzUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByZXZpb3VzUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG5cbmZ1bmN0aW9uIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkZyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGNhbGxiYWNrKSB7XG4gIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGZpcnN0UGFydFJ1bGVOYW1lUGFydCA9IGlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KGRlZmluaXRpb24pO1xuXG4gIGlmIChmaXJzdFBhcnRSdWxlTmFtZVBhcnQpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBkZWZpbml0aW9uLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIGZpcnN0UnVsZU5hbWVQYXJ0ID0gZmlyc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgZmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSA9IGZpcnN0UnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBmaXJzdFJ1bGVOYW1lUGFydFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBjYWxsYmFjayhydWxlTmFtZSk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cbiJdfQ==