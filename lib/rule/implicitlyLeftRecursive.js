'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ImplicitlyLeftRecursiveDefinition = require('../definition/implicitlyLeftRecursive');

var Rule = parsers.Rule;

var ImplicitlyLeftRecursiveRule = function (_Rule) {
  _inherits(ImplicitlyLeftRecursiveRule, _Rule);

  function ImplicitlyLeftRecursiveRule() {
    _classCallCheck(this, ImplicitlyLeftRecursiveRule);

    return _possibleConstructorReturn(this, (ImplicitlyLeftRecursiveRule.__proto__ || Object.getPrototypeOf(ImplicitlyLeftRecursiveRule)).apply(this, arguments));
  }

  _createClass(ImplicitlyLeftRecursiveRule, null, [{
    key: 'fromRuleAndPreviousRules',
    value: function fromRuleAndPreviousRules(rule, previousRules) {
      var implicitlyLeftRecursiveRule = null;

      var implicitlyLeftRecursiveDefinitions = implicitlyLeftRecursiveDefinitionsFromRuleAndPreviousRules(rule, previousRules),
          implicitlyLeftRecursiveDefinitionsLength = implicitlyLeftRecursiveDefinitions.length,
          ruleImplicitlyLeftRecursive = implicitlyLeftRecursiveDefinitionsLength > 0;

      if (ruleImplicitlyLeftRecursive) {
        implicitlyLeftRecursiveRule = Rule.fromRule(ImplicitlyLeftRecursiveRule, rule); ///
      }

      return implicitlyLeftRecursiveRule;
    }
  }]);

  return ImplicitlyLeftRecursiveRule;
}(Rule);

module.exports = ImplicitlyLeftRecursiveRule;

function implicitlyLeftRecursiveDefinitionsFromRuleAndPreviousRules(rule, previousRules) {
  var ruleDefinitions = rule.getDefinitions(),
      implicitlyLeftRecursiveDefinitions = ruleDefinitions.reduce(function (implicitlyLeftRecursiveDefinitions, ruleDefinition) {
    var definition = ruleDefinition,
        ///
    implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinitionAndPreviousRules(definition, previousRules);

    if (implicitlyLeftRecursiveDefinition !== null) {
      implicitlyLeftRecursiveDefinitions.push(implicitlyLeftRecursiveDefinition);
    }

    return implicitlyLeftRecursiveDefinitions;
  }, []);

  return implicitlyLeftRecursiveDefinitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZSIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsInJ1bGUiLCJwcmV2aW91c1J1bGVzIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUnVsZUFuZFByZXZpb3VzUnVsZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicnVsZUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwiZnJvbVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJydWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZFByZXZpb3VzUnVsZXMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxvQ0FBb0NELFFBQVEsdUNBQVIsQ0FBMUM7O0lBRVFFLEksR0FBU0gsTyxDQUFURyxJOztJQUVGQywyQjs7Ozs7Ozs7Ozs7NkNBQzRCQyxJLEVBQU1DLGEsRUFBZTtBQUNuRCxVQUFJQyw4QkFBOEIsSUFBbEM7O0FBRUEsVUFBTUMscUNBQXFDQywyREFBMkRKLElBQTNELEVBQWlFQyxhQUFqRSxDQUEzQztBQUFBLFVBQ01JLDJDQUEyQ0YsbUNBQW1DRyxNQURwRjtBQUFBLFVBRU1DLDhCQUErQkYsMkNBQTJDLENBRmhGOztBQUlBLFVBQUlFLDJCQUFKLEVBQWlDO0FBQy9CTCxzQ0FBOEJKLEtBQUtVLFFBQUwsQ0FBY1QsMkJBQWQsRUFBMkNDLElBQTNDLENBQTlCLENBRCtCLENBQ2lEO0FBQ2pGOztBQUVELGFBQU9FLDJCQUFQO0FBQ0Q7Ozs7RUFidUNKLEk7O0FBZ0IxQ1csT0FBT0MsT0FBUCxHQUFpQlgsMkJBQWpCOztBQUVBLFNBQVNLLDBEQUFULENBQW9FSixJQUFwRSxFQUEwRUMsYUFBMUUsRUFBeUY7QUFDdkYsTUFBTVUsa0JBQWtCWCxLQUFLWSxjQUFMLEVBQXhCO0FBQUEsTUFDTVQscUNBQXFDUSxnQkFBZ0JFLE1BQWhCLENBQXVCLFVBQVNWLGtDQUFULEVBQTZDVyxjQUE3QyxFQUE2RDtBQUN2SCxRQUFNQyxhQUFhRCxjQUFuQjtBQUFBLFFBQW9DO0FBQzlCRSx3Q0FBb0NuQixrQ0FBa0NvQiw4QkFBbEMsQ0FBaUVGLFVBQWpFLEVBQTZFZCxhQUE3RSxDQUQxQzs7QUFHQSxRQUFJZSxzQ0FBc0MsSUFBMUMsRUFBZ0Q7QUFDOUNiLHlDQUFtQ2UsSUFBbkMsQ0FBd0NGLGlDQUF4QztBQUNEOztBQUVELFdBQU9iLGtDQUFQO0FBQ0QsR0FUb0MsRUFTbEMsRUFUa0MsQ0FEM0M7O0FBWUEsU0FBT0Esa0NBQVA7QUFDRCIsImZpbGUiOiJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRQcmV2aW91c1J1bGVzKHJ1bGUsIHByZXZpb3VzUnVsZXMpIHtcbiAgICBsZXQgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJ1bGVBbmRQcmV2aW91c1J1bGVzKHJ1bGUsIHByZXZpb3VzUnVsZXMpLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBydWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSAoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKHJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlID0gUnVsZS5mcm9tUnVsZShJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGUpOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlO1xuXG5mdW5jdGlvbiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJ1bGVBbmRQcmV2aW91c1J1bGVzKHJ1bGUsIHByZXZpb3VzUnVsZXMpIHtcbiAgY29uc3QgcnVsZURlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gcnVsZURlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBydWxlRGVmaW5pdGlvbikge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBydWxlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZFByZXZpb3VzUnVsZXMoZGVmaW5pdGlvbiwgcHJldmlvdXNSdWxlcyk7XG4gIFxuICAgICAgICAgIGlmIChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucHVzaChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdfQ==