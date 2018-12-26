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
        var name = rule.getName(),
            definitions = rule.getDefinitions(),
            NonTerminalNode = rule.getNonTerminalNode();

        implicitlyLeftRecursiveRule = new ImplicitlyLeftRecursiveRule(name, definitions, NonTerminalNode);
      }

      return implicitlyLeftRecursiveRule;
    }
  }]);

  return ImplicitlyLeftRecursiveRule;
}(Rule);

module.exports = ImplicitlyLeftRecursiveRule;

function implicitlyLeftRecursiveDefinitionsFromRuleAndPreviousRules(rule, previousRules) {
  var definitions = rule.getDefinitions(),
      implicitlyLeftRecursiveDefinitions = definitions.reduce(function (implicitlyLeftRecursiveDefinitions, definition) {
    var implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinitionAndPreviousRules(definition, previousRules);

    if (implicitlyLeftRecursiveDefinition !== null) {
      implicitlyLeftRecursiveDefinitions.push(implicitlyLeftRecursiveDefinition);
    }

    return implicitlyLeftRecursiveDefinitions;
  }, []);

  return implicitlyLeftRecursiveDefinitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZSIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsInJ1bGUiLCJwcmV2aW91c1J1bGVzIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUnVsZUFuZFByZXZpb3VzUnVsZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicnVsZUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlIiwibmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImRlZmluaXRpb24iLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZFByZXZpb3VzUnVsZXMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxvQ0FBb0NELFFBQVEsdUNBQVIsQ0FBMUM7O0lBRVFFLEksR0FBU0gsTyxDQUFURyxJOztJQUVGQywyQjs7Ozs7Ozs7Ozs7NkNBQzRCQyxJLEVBQU1DLGEsRUFBZTtBQUNuRCxVQUFJQyw4QkFBOEIsSUFBbEM7O0FBRUEsVUFBTUMscUNBQXFDQywyREFBMkRKLElBQTNELEVBQWlFQyxhQUFqRSxDQUEzQztBQUFBLFVBQ01JLDJDQUEyQ0YsbUNBQW1DRyxNQURwRjtBQUFBLFVBRU1DLDhCQUErQkYsMkNBQTJDLENBRmhGOztBQUlBLFVBQUlFLDJCQUFKLEVBQWlDO0FBQy9CLFlBQU1DLE9BQU9SLEtBQUtTLE9BQUwsRUFBYjtBQUFBLFlBQ01DLGNBQWNWLEtBQUtXLGNBQUwsRUFEcEI7QUFBQSxZQUVNQyxrQkFBa0JaLEtBQUthLGtCQUFMLEVBRnhCOztBQUlBWCxzQ0FBOEIsSUFBSUgsMkJBQUosQ0FBZ0NTLElBQWhDLEVBQXNDRSxXQUF0QyxFQUFtREUsZUFBbkQsQ0FBOUI7QUFDRDs7QUFFRCxhQUFPViwyQkFBUDtBQUNEOzs7O0VBakJ1Q0osSTs7QUFvQjFDZ0IsT0FBT0MsT0FBUCxHQUFpQmhCLDJCQUFqQjs7QUFFQSxTQUFTSywwREFBVCxDQUFvRUosSUFBcEUsRUFBMEVDLGFBQTFFLEVBQXlGO0FBQ3ZGLE1BQU1TLGNBQWNWLEtBQUtXLGNBQUwsRUFBcEI7QUFBQSxNQUNNUixxQ0FBcUNPLFlBQVlNLE1BQVosQ0FBbUIsVUFBU2Isa0NBQVQsRUFBNkNjLFVBQTdDLEVBQXlEO0FBQy9HLFFBQU1DLG9DQUFvQ3JCLGtDQUFrQ3NCLDhCQUFsQyxDQUFpRUYsVUFBakUsRUFBNkVoQixhQUE3RSxDQUExQzs7QUFFQSxRQUFJaUIsc0NBQXNDLElBQTFDLEVBQWdEO0FBQzlDZix5Q0FBbUNpQixJQUFuQyxDQUF3Q0YsaUNBQXhDO0FBQ0Q7O0FBRUQsV0FBT2Ysa0NBQVA7QUFDRCxHQVJvQyxFQVFsQyxFQVJrQyxDQUQzQzs7QUFXQSxTQUFPQSxrQ0FBUDtBQUNEIiwiZmlsZSI6ImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycztcblxuY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZFByZXZpb3VzUnVsZXMocnVsZSwgcHJldmlvdXNSdWxlcykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUnVsZUFuZFByZXZpb3VzUnVsZXMocnVsZSwgcHJldmlvdXNSdWxlcyksXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAocnVsZUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IG5ldyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZTtcblxuZnVuY3Rpb24gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SdWxlQW5kUHJldmlvdXNSdWxlcyhydWxlLCBwcmV2aW91c1J1bGVzKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRQcmV2aW91c1J1bGVzKGRlZmluaXRpb24sIHByZXZpb3VzUnVsZXMpO1xuICBcbiAgICAgICAgICBpZiAoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnB1c2goaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXX0=