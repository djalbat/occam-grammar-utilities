'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var IntermediateNode = require('../node/intermediate'),
    ruleNameUtilities = require('../utilities/ruleName'),
    NonRecursiveDefinition = require('../definition/nonRecursive');

var Rule = parsers.Rule,
    arrayUtilities = necessary.arrayUtilities,
    last = arrayUtilities.last,
    secondLast = arrayUtilities.secondLast,
    nonRecursiveRuleNameFromRuleName = ruleNameUtilities.nonRecursiveRuleNameFromRuleName;

var NonRecursiveRule = function (_Rule) {
      _inherits(NonRecursiveRule, _Rule);

      function NonRecursiveRule() {
            _classCallCheck(this, NonRecursiveRule);

            return _possibleConstructorReturn(this, (NonRecursiveRule.__proto__ || Object.getPrototypeOf(NonRecursiveRule)).apply(this, arguments));
      }

      _createClass(NonRecursiveRule, null, [{
            key: 'fromNonRecursiveDefinitionsAndRuleNames',
            value: function fromNonRecursiveDefinitionsAndRuleNames(nonRecursiveDefinitions, ruleNames) {
                  var definitions = nonRecursiveDefinitions,
                      ///
                  ruleNamesLength = ruleNames.length;

                  if (ruleNamesLength > 1) {
                        var secondLastRuleName = secondLast(ruleNames),
                            _ruleName = secondLastRuleName,
                            ///
                        _nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(_ruleName),
                            nonRecursiveDefinition = NonRecursiveDefinition.fromNonRecursiveRuleName(_nonRecursiveRuleName);

                        definitions.unshift(nonRecursiveDefinition);
                  }

                  var lastRuleName = last(ruleNames),
                      ruleName = lastRuleName,
                      ///
                  nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
                      name = nonRecursiveRuleName,
                      ///
                  NonTerminalNode = IntermediateNode,
                      ///
                  nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

                  return nonRecursiveRule;
            }
      }]);

      return NonRecursiveRule;
}(Rule);

module.exports = NonRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsIkludGVybWVkaWF0ZU5vZGUiLCJydWxlTmFtZVV0aWxpdGllcyIsIk5vblJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0Iiwic2Vjb25kTGFzdCIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiTm9uUmVjdXJzaXZlUnVsZSIsIm5vblJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZU5hbWVzIiwiZGVmaW5pdGlvbnMiLCJydWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJzZWNvbmRMYXN0UnVsZU5hbWUiLCJydWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lIiwibm9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21Ob25SZWN1cnNpdmVSdWxlTmFtZSIsInVuc2hpZnQiLCJsYXN0UnVsZU5hbWUiLCJuYW1lIiwiTm9uVGVybWluYWxOb2RlIiwibm9uUmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLG1CQUFtQkYsUUFBUSxzQkFBUixDQUF6QjtBQUFBLElBQ01HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1JLHlCQUF5QkosUUFBUSw0QkFBUixDQUYvQjs7QUFJTSxJQUFFSyxJQUFGLEdBQVdOLE9BQVgsQ0FBRU0sSUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJMLFNBRHJCLENBQ0VLLGNBREY7QUFBQSxJQUVFQyxJQUZGLEdBRXVCRCxjQUZ2QixDQUVFQyxJQUZGO0FBQUEsSUFFUUMsVUFGUixHQUV1QkYsY0FGdkIsQ0FFUUUsVUFGUjtBQUFBLElBR0VDLGdDQUhGLEdBR3VDTixpQkFIdkMsQ0FHRU0sZ0NBSEY7O0lBS0FDLGdCOzs7Ozs7Ozs7OztvRUFDMkNDLHVCLEVBQXlCQyxTLEVBQVc7QUFDakYsc0JBQU1DLGNBQWNGLHVCQUFwQjtBQUFBLHNCQUE4QztBQUN4Q0csb0NBQWtCRixVQUFVRyxNQURsQzs7QUFHQSxzQkFBSUQsa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLDRCQUFNRSxxQkFBcUJSLFdBQVdJLFNBQVgsQ0FBM0I7QUFBQSw0QkFDTUssWUFBV0Qsa0JBRGpCO0FBQUEsNEJBQ3NDO0FBQ2hDRSxnREFBdUJULGlDQUFpQ1EsU0FBakMsQ0FGN0I7QUFBQSw0QkFHTUUseUJBQXlCZix1QkFBdUJnQix3QkFBdkIsQ0FBZ0RGLHFCQUFoRCxDQUgvQjs7QUFLQUwsb0NBQVlRLE9BQVosQ0FBb0JGLHNCQUFwQjtBQUNEOztBQUVELHNCQUFNRyxlQUFlZixLQUFLSyxTQUFMLENBQXJCO0FBQUEsc0JBQ01LLFdBQVdLLFlBRGpCO0FBQUEsc0JBQ2dDO0FBQzFCSix5Q0FBdUJULGlDQUFpQ1EsUUFBakMsQ0FGN0I7QUFBQSxzQkFHTU0sT0FBT0wsb0JBSGI7QUFBQSxzQkFHb0M7QUFDOUJNLG9DQUFrQnRCLGdCQUp4QjtBQUFBLHNCQUkwQztBQUNwQ3VCLHFDQUFtQixJQUFJZixnQkFBSixDQUFxQmEsSUFBckIsRUFBMkJWLFdBQTNCLEVBQXdDVyxlQUF4QyxDQUx6Qjs7QUFPQSx5QkFBT0MsZ0JBQVA7QUFDRDs7OztFQXRCNEJwQixJOztBQXlCL0JxQixPQUFPQyxPQUFQLEdBQWlCakIsZ0JBQWpCIiwiZmlsZSI6Im5vblJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBJbnRlcm1lZGlhdGVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9pbnRlcm1lZGlhdGUnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyksXG4gICAgICBOb25SZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ub25SZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBsYXN0LCBzZWNvbmRMYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBOb25SZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm9uUmVjdXJzaXZlRGVmaW5pdGlvbnNBbmRSdWxlTmFtZXMobm9uUmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJ1bGVOYW1lcykge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gbm9uUmVjdXJzaXZlRGVmaW5pdGlvbnMsICAvLy9cbiAgICAgICAgICBydWxlTmFtZXNMZW5ndGggPSBydWxlTmFtZXMubGVuZ3RoO1xuXG4gICAgaWYgKHJ1bGVOYW1lc0xlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHNlY29uZExhc3RSdWxlTmFtZSA9IHNlY29uZExhc3QocnVsZU5hbWVzKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gc2Vjb25kTGFzdFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG5vblJlY3Vyc2l2ZURlZmluaXRpb24gPSBOb25SZWN1cnNpdmVEZWZpbml0aW9uLmZyb21Ob25SZWN1cnNpdmVSdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGRlZmluaXRpb25zLnVuc2hpZnQobm9uUmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdFJ1bGVOYW1lID0gbGFzdChydWxlTmFtZXMpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbGFzdFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gSW50ZXJtZWRpYXRlTm9kZSwgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZSA9IG5ldyBOb25SZWN1cnNpdmVSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vblJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25SZWN1cnNpdmVSdWxlO1xuIl19