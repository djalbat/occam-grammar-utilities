'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var arrayUtilities = require('../utilities/array'),
    ruleNameUtilities = require('../utilities/ruleName'),
    NonLeftRecursiveNode = require('../node/nonLeftRecursive');

var Rule = parsers.Rule,
    filter = arrayUtilities.filter,
    nonLeftRecursiveRuleNameFromRuleName = ruleNameUtilities.nonLeftRecursiveRuleNameFromRuleName;

var NonLeftRecursiveRule = function (_Rule) {
      _inherits(NonLeftRecursiveRule, _Rule);

      function NonLeftRecursiveRule() {
            _classCallCheck(this, NonLeftRecursiveRule);

            return _possibleConstructorReturn(this, (NonLeftRecursiveRule.__proto__ || Object.getPrototypeOf(NonLeftRecursiveRule)).apply(this, arguments));
      }

      _createClass(NonLeftRecursiveRule, null, [{
            key: 'fromIndirectlyLeftRecursiveRuleAndIndirectlyLeftRecursiveDefinition',
            value: function fromIndirectlyLeftRecursiveRuleAndIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition) {
                  var ruleName = indirectlyLeftRecursiveRule.getName(),
                      definitions = indirectlyLeftRecursiveRule.getDefinitions();

                  filter(definitions, function (definition) {
                        var indirectlyLeftRecursiveDefinitionMatchesDefinition = indirectlyLeftRecursiveDefinition.matchDefinition(definition);

                        if (!indirectlyLeftRecursiveDefinitionMatchesDefinition) {
                              return true;
                        }
                  });

                  var nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromRuleName(ruleName),
                      name = nonLeftRecursiveRuleName,
                      ///
                  NonTerminalNode = NonLeftRecursiveNode,
                      ///
                  nonLeftRecursiveRule = new NonLeftRecursiveRule(name, definitions, NonTerminalNode);

                  return nonLeftRecursiveRule;
            }
      }, {
            key: 'fromNonLeftRecursiveRuleNameAndDefinitions',
            value: function fromNonLeftRecursiveRuleNameAndDefinitions(nonLeftRecursiveRuleName, definitions) {
                  var name = nonLeftRecursiveRuleName,
                      ///
                  NonTerminalNode = NonLeftRecursiveNode,
                      ///
                  nonLeftRecursiveRule = new NonLeftRecursiveRule(name, definitions, NonTerminalNode);

                  return nonLeftRecursiveRule;
            }
      }]);

      return NonLeftRecursiveRule;
}(Rule);

module.exports = NonLeftRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vbkxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiTm9uTGVmdFJlY3Vyc2l2ZU5vZGUiLCJSdWxlIiwiZmlsdGVyIiwibm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk1hdGNoZXNEZWZpbml0aW9uIiwibWF0Y2hEZWZpbml0aW9uIiwibm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vbkxlZnRSZWN1cnNpdmVSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBQXZCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCO0FBQUEsSUFFTUcsdUJBQXVCSCxRQUFRLDBCQUFSLENBRjdCOztBQUlNLElBQUVJLElBQUYsR0FBV0wsT0FBWCxDQUFFSyxJQUFGO0FBQUEsSUFDRUMsTUFERixHQUNhSixjQURiLENBQ0VJLE1BREY7QUFBQSxJQUVFQyxvQ0FGRixHQUUyQ0osaUJBRjNDLENBRUVJLG9DQUZGOztJQUlBQyxvQjs7Ozs7Ozs7Ozs7Z0dBQ3VFQywyQixFQUE2QkMsaUMsRUFBbUM7QUFDekksc0JBQU1DLFdBQVdGLDRCQUE0QkcsT0FBNUIsRUFBakI7QUFBQSxzQkFDTUMsY0FBY0osNEJBQTRCSyxjQUE1QixFQURwQjs7QUFHQVIseUJBQU9PLFdBQVAsRUFBb0IsVUFBQ0UsVUFBRCxFQUFnQjtBQUNsQyw0QkFBTUMscURBQXFETixrQ0FBa0NPLGVBQWxDLENBQWtERixVQUFsRCxDQUEzRDs7QUFFQSw0QkFBSSxDQUFDQyxrREFBTCxFQUF5RDtBQUN2RCxxQ0FBTyxJQUFQO0FBQ0Q7QUFDRixtQkFORDs7QUFRQSxzQkFBTUUsMkJBQTJCWCxxQ0FBcUNJLFFBQXJDLENBQWpDO0FBQUEsc0JBQ01RLE9BQU9ELHdCQURiO0FBQUEsc0JBQ3dDO0FBQ2xDRSxvQ0FBa0JoQixvQkFGeEI7QUFBQSxzQkFFOEM7QUFDeENpQix5Q0FBdUIsSUFBSWIsb0JBQUosQ0FBeUJXLElBQXpCLEVBQStCTixXQUEvQixFQUE0Q08sZUFBNUMsQ0FIN0I7O0FBS0EseUJBQU9DLG9CQUFQO0FBQ0Q7Ozt1RUFFaURILHdCLEVBQTBCTCxXLEVBQWE7QUFDdkYsc0JBQU1NLE9BQU9ELHdCQUFiO0FBQUEsc0JBQXdDO0FBQ2xDRSxvQ0FBa0JoQixvQkFEeEI7QUFBQSxzQkFDOEM7QUFDeENpQix5Q0FBdUIsSUFBSWIsb0JBQUosQ0FBeUJXLElBQXpCLEVBQStCTixXQUEvQixFQUE0Q08sZUFBNUMsQ0FGN0I7O0FBSUEseUJBQU9DLG9CQUFQO0FBQ0Q7Ozs7RUEzQmdDaEIsSTs7QUE4Qm5DaUIsT0FBT0MsT0FBUCxHQUFpQmYsb0JBQWpCIiwiZmlsZSI6Im5vbkxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpLFxuICAgICAgTm9uTGVmdFJlY3Vyc2l2ZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL25vbkxlZnRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBOb25MZWZ0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZmlsdGVyKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTWF0Y2hlc0RlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ubWF0Y2hEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk1hdGNoZXNEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gbm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTm9uTGVmdFJlY3Vyc2l2ZU5vZGUsIC8vL1xuICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVSdWxlID0gbmV3IE5vbkxlZnRSZWN1cnNpdmVSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vbkxlZnRSZWN1cnNpdmVSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmREZWZpbml0aW9ucyhub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGRlZmluaXRpb25zKSB7XG4gICAgY29uc3QgbmFtZSA9IG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IE5vbkxlZnRSZWN1cnNpdmVOb2RlLCAvLy9cbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlUnVsZSA9IG5ldyBOb25MZWZ0UmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBub25MZWZ0UmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vbkxlZnRSZWN1cnNpdmVSdWxlO1xuIl19