'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ReducedNode = require('../node/reduced'),
    arrayUtilities = require('../utilities/array'),
    ruleNameUtilities = require('../utilities/ruleName');

var Rule = parsers.Rule,
    filter = arrayUtilities.filter,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName;

var ReducedRule = function (_Rule) {
      _inherits(ReducedRule, _Rule);

      function ReducedRule() {
            _classCallCheck(this, ReducedRule);

            return _possibleConstructorReturn(this, (ReducedRule.__proto__ || Object.getPrototypeOf(ReducedRule)).apply(this, arguments));
      }

      _createClass(ReducedRule, null, [{
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

                  var reducedRuleName = reducedRuleNameFromRuleName(ruleName),
                      name = reducedRuleName,
                      ///
                  NonTerminalNode = ReducedNode,
                      ///
                  reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

                  return reducedRule;
            }
      }, {
            key: 'fromReducedRuleNameAndDefinitions',
            value: function fromReducedRuleNameAndDefinitions(reducedRuleName, definitions) {
                  var name = reducedRuleName,
                      ///
                  NonTerminalNode = ReducedNode,
                      ///
                  reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

                  return reducedRule;
            }
      }]);

      return ReducedRule;
}(Rule);

module.exports = ReducedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJSZWR1Y2VkTm9kZSIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWVVdGlsaXRpZXMiLCJSdWxlIiwiZmlsdGVyIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiUmVkdWNlZFJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk1hdGNoZXNEZWZpbml0aW9uIiwibWF0Y2hEZWZpbml0aW9uIiwicmVkdWNlZFJ1bGVOYW1lIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsInJlZHVjZWRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsY0FBY0QsUUFBUSxpQkFBUixDQUFwQjtBQUFBLElBQ01FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUYxQjs7QUFJTSxJQUFFSSxJQUFGLEdBQVdMLE9BQVgsQ0FBRUssSUFBRjtBQUFBLElBQ0VDLE1BREYsR0FDYUgsY0FEYixDQUNFRyxNQURGO0FBQUEsSUFFRUMsMkJBRkYsR0FFa0NILGlCQUZsQyxDQUVFRywyQkFGRjs7SUFJQUMsVzs7Ozs7Ozs7Ozs7Z0dBQ3VFQywyQixFQUE2QkMsaUMsRUFBbUM7QUFDekksc0JBQU1DLFdBQVdGLDRCQUE0QkcsT0FBNUIsRUFBakI7QUFBQSxzQkFDTUMsY0FBY0osNEJBQTRCSyxjQUE1QixFQURwQjs7QUFHQVIseUJBQU9PLFdBQVAsRUFBb0IsVUFBQ0UsVUFBRCxFQUFnQjtBQUNsQyw0QkFBTUMscURBQXFETixrQ0FBa0NPLGVBQWxDLENBQWtERixVQUFsRCxDQUEzRDs7QUFFQSw0QkFBSSxDQUFDQyxrREFBTCxFQUF5RDtBQUN2RCxxQ0FBTyxJQUFQO0FBQ0Q7QUFDRixtQkFORDs7QUFRQSxzQkFBTUUsa0JBQWtCWCw0QkFBNEJJLFFBQTVCLENBQXhCO0FBQUEsc0JBQ01RLE9BQU9ELGVBRGI7QUFBQSxzQkFDK0I7QUFDekJFLG9DQUFrQmxCLFdBRnhCO0FBQUEsc0JBRXFDO0FBQy9CbUIsZ0NBQWMsSUFBSWIsV0FBSixDQUFnQlcsSUFBaEIsRUFBc0JOLFdBQXRCLEVBQW1DTyxlQUFuQyxDQUhwQjs7QUFLQSx5QkFBT0MsV0FBUDtBQUNEOzs7OERBRXdDSCxlLEVBQWlCTCxXLEVBQWE7QUFDckUsc0JBQU1NLE9BQU9ELGVBQWI7QUFBQSxzQkFBK0I7QUFDekJFLG9DQUFrQmxCLFdBRHhCO0FBQUEsc0JBQ3FDO0FBQy9CbUIsZ0NBQWMsSUFBSWIsV0FBSixDQUFnQlcsSUFBaEIsRUFBc0JOLFdBQXRCLEVBQW1DTyxlQUFuQyxDQUZwQjs7QUFJQSx5QkFBT0MsV0FBUDtBQUNEOzs7O0VBM0J1QmhCLEk7O0FBOEIxQmlCLE9BQU9DLE9BQVAsR0FBaUJmLFdBQWpCIiwiZmlsZSI6InJlZHVjZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IFJlZHVjZWROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZWR1Y2VkJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZmlsdGVyKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTWF0Y2hlc0RlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ubWF0Y2hEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk1hdGNoZXNEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VkUnVsZU5hbWVBbmREZWZpbml0aW9ucyhyZWR1Y2VkUnVsZU5hbWUsIGRlZmluaXRpb25zKSB7XG4gICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLCAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHVjZWRSdWxlO1xuIl19