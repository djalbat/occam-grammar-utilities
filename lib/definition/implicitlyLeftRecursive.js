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

  _createClass(ImplicitlyLeftRecursiveDefinition, [{
    key: 'getPreviousRuleName',
    value: function getPreviousRuleName() {
      var firstPart = this.getFirstPart(),
          ruleNamePart = firstPart,
          ///
      ruleNamePartRuleName = ruleNamePart.getRuleName(),
          previousRuleName = ruleNamePartRuleName; ///

      return previousRuleName;
    }
  }], [{
    key: 'fromDefinition',
    value: function fromDefinition(definition, callback) {
      var implicitlyLeftRecursiveDefinition = null;

      var definitionFirstPartRuleNamePart = definition.isFirstPartRuleNamePart();

      if (definitionFirstPartRuleNamePart) {
        var definitionFirstPart = definition.getFirstPart(),
            definitionFirstRuleNamePart = definitionFirstPart,
            ///
        definitionFirstRuleNamePartRuleName = definitionFirstRuleNamePart.getRuleName(),
            ruleName = definitionFirstRuleNamePartRuleName,
            ///
        definitionImplicitlyLeftRecursive = callback(ruleName);

        if (definitionImplicitlyLeftRecursive) {
          var parts = definition.getParts();

          implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts);
        }
      }

      return implicitlyLeftRecursiveDefinition;
    }
  }, {
    key: 'fromDefinitionAndPreviousRule',
    value: function fromDefinitionAndPreviousRule(definition, previousRule) {
      var previousRuleName = previousRule.getName(),
          implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinition(definition, function (ruleName) {
        var definitionImplicitlyLeftRecursive = previousRuleName === ruleName;

        return definitionImplicitlyLeftRecursive;
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
          implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinition(definition, function (ruleName) {
        var definitionImplicitlyLeftRecursive = previousRuleNames.includes(ruleName);

        return definitionImplicitlyLeftRecursive;
      });

      return implicitlyLeftRecursiveDefinition;
    }
  }]);

  return ImplicitlyLeftRecursiveDefinition;
}(Definition);

module.exports = ImplicitlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydFJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwcmV2aW91c1J1bGVOYW1lIiwiZGVmaW5pdGlvbiIsImNhbGxiYWNrIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbkZpcnN0UGFydFJ1bGVOYW1lUGFydCIsImlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0IiwiZGVmaW5pdGlvbkZpcnN0UGFydCIsImRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydCIsImRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUiLCJwYXJ0cyIsImdldFBhcnRzIiwicHJldmlvdXNSdWxlIiwiZ2V0TmFtZSIsImZyb21EZWZpbml0aW9uIiwicHJldmlvdXNSdWxlcyIsInByZXZpb3VzUnVsZU5hbWVzIiwibWFwIiwiaW5jbHVkZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7SUFFUUMsVSxHQUFlRixPLENBQWZFLFU7O0lBRUZDLGlDOzs7Ozs7Ozs7OzswQ0FDa0I7QUFDcEIsVUFBTUMsWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMsZUFBZUYsU0FEckI7QUFBQSxVQUNnQztBQUMxQkcsNkJBQXVCRCxhQUFhRSxXQUFiLEVBRjdCO0FBQUEsVUFHTUMsbUJBQW1CRixvQkFIekIsQ0FEb0IsQ0FJNEI7O0FBRWhELGFBQU9FLGdCQUFQO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWUMsUSxFQUFVO0FBQzFDLFVBQUlDLG9DQUFvQyxJQUF4Qzs7QUFFQSxVQUFNQyxrQ0FBa0NILFdBQVdJLHVCQUFYLEVBQXhDOztBQUVBLFVBQUlELCtCQUFKLEVBQXFDO0FBQ25DLFlBQU1FLHNCQUFzQkwsV0FBV0wsWUFBWCxFQUE1QjtBQUFBLFlBQ01XLDhCQUE4QkQsbUJBRHBDO0FBQUEsWUFDMEQ7QUFDcERFLDhDQUFzQ0QsNEJBQTRCUixXQUE1QixFQUY1QztBQUFBLFlBR01VLFdBQVdELG1DQUhqQjtBQUFBLFlBR3NEO0FBQ2hERSw0Q0FBb0NSLFNBQVNPLFFBQVQsQ0FKMUM7O0FBTUEsWUFBSUMsaUNBQUosRUFBdUM7QUFDckMsY0FBTUMsUUFBUVYsV0FBV1csUUFBWCxFQUFkOztBQUVBVCw4Q0FBb0MsSUFBSVQsaUNBQUosQ0FBc0NpQixLQUF0QyxDQUFwQztBQUNEO0FBQ0Y7O0FBRUQsYUFBT1IsaUNBQVA7QUFDRDs7O2tEQUVvQ0YsVSxFQUFZWSxZLEVBQWM7QUFDN0QsVUFBTWIsbUJBQW1CYSxhQUFhQyxPQUFiLEVBQXpCO0FBQUEsVUFDTVgsb0NBQW9DVCxrQ0FBa0NxQixjQUFsQyxDQUFpRGQsVUFBakQsRUFBNkQsVUFBU1EsUUFBVCxFQUFtQjtBQUNsSCxZQUFNQyxvQ0FBcUNWLHFCQUFxQlMsUUFBaEU7O0FBRUEsZUFBT0MsaUNBQVA7QUFDRCxPQUptQyxDQUQxQzs7QUFRQSxhQUFPUCxpQ0FBUDtBQUNEOzs7bURBRXFDRixVLEVBQVllLGEsRUFBZTtBQUMvRCxVQUFNQyxvQkFBb0JELGNBQWNFLEdBQWQsQ0FBa0IsVUFBU0wsWUFBVCxFQUF1QjtBQUMzRCxZQUFNYixtQkFBbUJhLGFBQWFDLE9BQWIsRUFBekI7O0FBRUEsZUFBT2QsZ0JBQVA7QUFDRCxPQUptQixDQUExQjtBQUFBLFVBS01HLG9DQUFvQ1Qsa0NBQWtDcUIsY0FBbEMsQ0FBaURkLFVBQWpELEVBQTZELFVBQVNRLFFBQVQsRUFBbUI7QUFDbEgsWUFBTUMsb0NBQW9DTyxrQkFBa0JFLFFBQWxCLENBQTJCVixRQUEzQixDQUExQzs7QUFFQSxlQUFPQyxpQ0FBUDtBQUNELE9BSm1DLENBTDFDOztBQVdBLGFBQU9QLGlDQUFQO0FBQ0Q7Ozs7RUF6RDZDVixVOztBQTREaEQyQixPQUFPQyxPQUFQLEdBQWlCM0IsaUNBQWpCIiwiZmlsZSI6ImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnM7XG5cbmNsYXNzIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBnZXRQcmV2aW91c1J1bGVOYW1lKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgICBydWxlTmFtZVBhcnRSdWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHByZXZpb3VzUnVsZU5hbWUgPSBydWxlTmFtZVBhcnRSdWxlTmFtZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBwcmV2aW91c1J1bGVOYW1lO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgY2FsbGJhY2spIHtcbiAgICBsZXQgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25GaXJzdFBhcnRSdWxlTmFtZVBhcnQgPSBkZWZpbml0aW9uLmlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkZpcnN0UGFydFJ1bGVOYW1lUGFydCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkZpcnN0UGFydCA9IGRlZmluaXRpb24uZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgICBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnQgPSBkZWZpbml0aW9uRmlyc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgICBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSA9IGRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBjYWxsYmFjayhydWxlTmFtZSk7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFByZXZpb3VzUnVsZShkZWZpbml0aW9uLCBwcmV2aW91c1J1bGUpIHtcbiAgICBjb25zdCBwcmV2aW91c1J1bGVOYW1lID0gcHJldmlvdXNSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZnVuY3Rpb24ocnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChwcmV2aW91c1J1bGVOYW1lID09PSBydWxlTmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVcbiAgICAgICAgICB9KTtcbiAgICBcblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFByZXZpb3VzUnVsZXMoZGVmaW5pdGlvbiwgcHJldmlvdXNSdWxlcykge1xuICAgIGNvbnN0IHByZXZpb3VzUnVsZU5hbWVzID0gcHJldmlvdXNSdWxlcy5tYXAoZnVuY3Rpb24ocHJldmlvdXNSdWxlKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1J1bGVOYW1lID0gcHJldmlvdXNSdWxlLmdldE5hbWUoKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSdWxlTmFtZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZnVuY3Rpb24ocnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHByZXZpb3VzUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19