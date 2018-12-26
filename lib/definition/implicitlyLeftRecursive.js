'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Definition = parsers.Definition;

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

  var firstPartRuleNamePart = definition.isFirstPartRuleNamePart();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwcmV2aW91c1J1bGUiLCJwcmV2aW91c1J1bGVOYW1lIiwiZ2V0TmFtZSIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkZyb21EZWZpbml0aW9uIiwicnVsZU5hbWUiLCJwcmV2aW91c1J1bGVzIiwicHJldmlvdXNSdWxlTmFtZXMiLCJtYXAiLCJwcmV2aW91c1J1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWxsYmFjayIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsImlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0IiwiZmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwiZmlyc3RSdWxlTmFtZVBhcnQiLCJmaXJzdFJ1bGVOYW1lUGFydFJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUiLCJwYXJ0cyIsImdldFBhcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7SUFFUUMsVSxHQUFlRixPLENBQWZFLFU7O0lBRUZDLGlDOzs7Ozs7Ozs7OztrREFDaUNDLFUsRUFBWUMsWSxFQUFjO0FBQzdELFVBQU1DLG1CQUFtQkQsYUFBYUUsT0FBYixFQUF6QjtBQUFBLFVBQ01DLG9DQUFvQ0MsZ0RBQWdETCxVQUFoRCxFQUE0RCxVQUFTTSxRQUFULEVBQW1CO0FBQ2pILFlBQUlKLHFCQUFxQkksUUFBekIsRUFBbUM7QUFDakMsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FKbUMsQ0FEMUM7O0FBT0EsYUFBT0YsaUNBQVA7QUFDRDs7O21EQUVxQ0osVSxFQUFZTyxhLEVBQWU7QUFDL0QsVUFBTUMsb0JBQW9CRCxjQUFjRSxHQUFkLENBQWtCLFVBQVNSLFlBQVQsRUFBdUI7QUFDM0QsWUFBTUMsbUJBQW1CRCxhQUFhRSxPQUFiLEVBQXpCOztBQUVBLGVBQU9ELGdCQUFQO0FBQ0QsT0FKbUIsQ0FBMUI7QUFBQSxVQUtNRSxvQ0FBb0NDLGdEQUFnREwsVUFBaEQsRUFBNEQsVUFBU00sUUFBVCxFQUFtQjtBQUNqSCxZQUFNSSxvQ0FBb0NGLGtCQUFrQkcsUUFBbEIsQ0FBMkJMLFFBQTNCLENBQTFDOztBQUVBLFlBQUlJLGlDQUFKLEVBQXVDO0FBQ3JDLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTm1DLENBTDFDOztBQWFBLGFBQU9OLGlDQUFQO0FBQ0Q7Ozs7RUEzQjZDTixVOztBQThCaERjLE9BQU9DLE9BQVAsR0FBaUJkLGlDQUFqQjs7QUFFQSxTQUFTTSwrQ0FBVCxDQUF5REwsVUFBekQsRUFBcUVjLFFBQXJFLEVBQStFO0FBQzdFLE1BQUlWLG9DQUFvQyxJQUF4Qzs7QUFFQSxNQUFNVyx3QkFBd0JmLFdBQVdnQix1QkFBWCxFQUE5Qjs7QUFFQSxNQUFJRCxxQkFBSixFQUEyQjtBQUN6QixRQUFNRSxZQUFZakIsV0FBV2tCLFlBQVgsRUFBbEI7QUFBQSxRQUNNQyxvQkFBb0JGLFNBRDFCO0FBQUEsUUFDc0M7QUFDaENHLGdDQUE0QkQsa0JBQWtCRSxXQUFsQixFQUZsQztBQUFBLFFBR01mLFdBQVdjLHlCQUhqQjtBQUFBLFFBRzRDO0FBQ3RDRSx3Q0FBb0NSLFNBQVNSLFFBQVQsQ0FKMUM7O0FBTUEsUUFBSWdCLGlDQUFKLEVBQXVDO0FBQ3JDLFVBQU1DLFFBQVF2QixXQUFXd0IsUUFBWCxFQUFkOztBQUVBcEIsMENBQW9DLElBQUlMLGlDQUFKLENBQXNDd0IsS0FBdEMsQ0FBcEM7QUFDRDtBQUNGOztBQUVELFNBQU9uQixpQ0FBUDtBQUNEIiwiZmlsZSI6ImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnM7XG5cbmNsYXNzIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRQcmV2aW91c1J1bGUoZGVmaW5pdGlvbiwgcHJldmlvdXNSdWxlKSB7XG4gICAgY29uc3QgcHJldmlvdXNSdWxlTmFtZSA9IHByZXZpb3VzUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZnVuY3Rpb24ocnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1J1bGVOYW1lID09PSBydWxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFByZXZpb3VzUnVsZXMoZGVmaW5pdGlvbiwgcHJldmlvdXNSdWxlcykge1xuICAgIGNvbnN0IHByZXZpb3VzUnVsZU5hbWVzID0gcHJldmlvdXNSdWxlcy5tYXAoZnVuY3Rpb24ocHJldmlvdXNSdWxlKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1J1bGVOYW1lID0gcHJldmlvdXNSdWxlLmdldE5hbWUoKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSdWxlTmFtZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25Gcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBmdW5jdGlvbihydWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcHJldmlvdXNSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJldmlvdXNSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcblxuZnVuY3Rpb24gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgY2FsbGJhY2spIHtcbiAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0ID0gZGVmaW5pdGlvbi5pc0ZpcnN0UGFydFJ1bGVOYW1lUGFydCgpO1xuXG4gIGlmIChmaXJzdFBhcnRSdWxlTmFtZVBhcnQpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBkZWZpbml0aW9uLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIGZpcnN0UnVsZU5hbWVQYXJ0ID0gZmlyc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgZmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSA9IGZpcnN0UnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBmaXJzdFJ1bGVOYW1lUGFydFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBjYWxsYmFjayhydWxlTmFtZSk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cbiJdfQ==