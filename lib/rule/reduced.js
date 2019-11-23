'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ReducedNode = require('../node/reduced'),
    ruleNameUtilities = require('../utilities/ruleName'),
    LeftRecursiveDefinition = require('../definition/leftRecursive');

var Rule = parsers.Rule,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName;

var ReducedRule = function (_Rule) {
      _inherits(ReducedRule, _Rule);

      function ReducedRule() {
            _classCallCheck(this, ReducedRule);

            return _possibleConstructorReturn(this, (ReducedRule.__proto__ || Object.getPrototypeOf(ReducedRule)).apply(this, arguments));
      }

      _createClass(ReducedRule, [{
            key: 'isEmpty',
            value: function isEmpty() {
                  var definitionsLength = this.definitions.length,
                      empty = definitionsLength === 0;

                  return empty;
            }
      }], [{
            key: 'fromRule',
            value: function fromRule(rule) {
                  var definitions = rule.getDefinitions();

                  var ruleName = rule.getName(),
                      reducedRuleName = reducedRuleNameFromRuleName(ruleName),
                      nonLeftRecursiveDefinitions = definitions.filter(function (definition) {
                        var definitionLeftRecursiveDefinition = definition instanceof LeftRecursiveDefinition;

                        if (!definitionLeftRecursiveDefinition) {
                              return true;
                        }
                  });

                  definitions = nonLeftRecursiveDefinitions; ///

                  var name = reducedRuleName,
                      NonTerminalNode = ReducedNode,
                      ///
                  reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

                  return reducedRule;
            }
      }]);

      return ReducedRule;
}(Rule);

module.exports = ReducedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJSZWR1Y2VkTm9kZSIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiUmVkdWNlZFJ1bGUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImRlZmluaXRpb25zIiwibGVuZ3RoIiwiZW1wdHkiLCJydWxlIiwiZ2V0RGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsInJlZHVjZWRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsY0FBY0QsUUFBUSxpQkFBUixDQUFwQjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1HLDBCQUEwQkgsUUFBUSw2QkFBUixDQUZoQzs7QUFJTSxJQUFFSSxJQUFGLEdBQVdMLE9BQVgsQ0FBRUssSUFBRjtBQUFBLElBQ0VDLDJCQURGLEdBQ2tDSCxpQkFEbEMsQ0FDRUcsMkJBREY7O0lBR0FDLFc7Ozs7Ozs7Ozs7O3NDQUNNO0FBQ1Isc0JBQU1DLG9CQUFvQixLQUFLQyxXQUFMLENBQWlCQyxNQUEzQztBQUFBLHNCQUNNQyxRQUFTSCxzQkFBc0IsQ0FEckM7O0FBR0EseUJBQU9HLEtBQVA7QUFDRDs7O3FDQUVlQyxJLEVBQU07QUFDcEIsc0JBQUlILGNBQWNHLEtBQUtDLGNBQUwsRUFBbEI7O0FBRUEsc0JBQU1DLFdBQVdGLEtBQUtHLE9BQUwsRUFBakI7QUFBQSxzQkFDTUMsa0JBQWtCViw0QkFBNEJRLFFBQTVCLENBRHhCO0FBQUEsc0JBRU1HLDhCQUE4QlIsWUFBWVMsTUFBWixDQUFtQixVQUFDQyxVQUFELEVBQWdCO0FBQy9ELDRCQUFNQyxvQ0FBcUNELHNCQUFzQmYsdUJBQWpFOztBQUVBLDRCQUFJLENBQUNnQixpQ0FBTCxFQUF3QztBQUN0QyxxQ0FBTyxJQUFQO0FBQ0Q7QUFDRixtQkFONkIsQ0FGcEM7O0FBVUFYLGdDQUFjUSwyQkFBZCxDQWJvQixDQWF3Qjs7QUFFNUMsc0JBQU1JLE9BQU9MLGVBQWI7QUFBQSxzQkFDTU0sa0JBQWtCcEIsV0FEeEI7QUFBQSxzQkFDc0M7QUFDaENxQixnQ0FBYyxJQUFJaEIsV0FBSixDQUFnQmMsSUFBaEIsRUFBc0JaLFdBQXRCLEVBQW1DYSxlQUFuQyxDQUZwQjs7QUFJQSx5QkFBT0MsV0FBUDtBQUNEOzs7O0VBNUJ1QmxCLEk7O0FBK0IxQm1CLE9BQU9DLE9BQVAsR0FBaUJsQixXQUFqQiIsImZpbGUiOiJyZWR1Y2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBSZWR1Y2VkTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcmVkdWNlZCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKSxcbiAgICAgIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICAgIHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmICghZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7ICAvLy9cblxuICAgIGNvbnN0IG5hbWUgPSByZWR1Y2VkUnVsZU5hbWUsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHVjZWRSdWxlO1xuIl19