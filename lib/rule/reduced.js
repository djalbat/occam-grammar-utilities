'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ReducedNode = require('../node/reduced'),
    ruleNameUtilities = require('../utilities/ruleName'),
    PlaceHolderDefinition = require('../definition/placeHolder');

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
                      nonPlaceHolderDefinitions = definitions.filter(function (definition) {
                        var definitionPlaceHolderDefinition = definition instanceof PlaceHolderDefinition;

                        if (!definitionPlaceHolderDefinition) {
                              return true;
                        }
                  });

                  definitions = nonPlaceHolderDefinitions; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJSZWR1Y2VkTm9kZSIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiUGxhY2VIb2xkZXJEZWZpbml0aW9uIiwiUnVsZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIlJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJkZWZpbml0aW9ucyIsImxlbmd0aCIsImVtcHR5IiwicnVsZSIsImdldERlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwibm9uUGxhY2VIb2xkZXJEZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uUGxhY2VIb2xkZXJEZWZpbml0aW9uIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsInJlZHVjZWRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsY0FBY0QsUUFBUSxpQkFBUixDQUFwQjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1HLHdCQUF3QkgsUUFBUSwyQkFBUixDQUY5Qjs7QUFJTSxJQUFFSSxJQUFGLEdBQVdMLE9BQVgsQ0FBRUssSUFBRjtBQUFBLElBQ0VDLDJCQURGLEdBQ2tDSCxpQkFEbEMsQ0FDRUcsMkJBREY7O0lBR0FDLFc7Ozs7Ozs7Ozs7O3NDQUNNO0FBQ1Isc0JBQU1DLG9CQUFvQixLQUFLQyxXQUFMLENBQWlCQyxNQUEzQztBQUFBLHNCQUNNQyxRQUFTSCxzQkFBc0IsQ0FEckM7O0FBR0EseUJBQU9HLEtBQVA7QUFDRDs7O3FDQUVlQyxJLEVBQU07QUFDcEIsc0JBQUlILGNBQWNHLEtBQUtDLGNBQUwsRUFBbEI7O0FBRUEsc0JBQU1DLFdBQVdGLEtBQUtHLE9BQUwsRUFBakI7QUFBQSxzQkFDTUMsa0JBQWtCViw0QkFBNEJRLFFBQTVCLENBRHhCO0FBQUEsc0JBRU1HLDRCQUE0QlIsWUFBWVMsTUFBWixDQUFtQixVQUFDQyxVQUFELEVBQWdCO0FBQzdELDRCQUFNQyxrQ0FBbUNELHNCQUFzQmYscUJBQS9EOztBQUVBLDRCQUFJLENBQUNnQiwrQkFBTCxFQUFzQztBQUNwQyxxQ0FBTyxJQUFQO0FBQ0Q7QUFDRixtQkFOMkIsQ0FGbEM7O0FBVUFYLGdDQUFjUSx5QkFBZCxDQWJvQixDQWFzQjs7QUFFMUMsc0JBQU1JLE9BQU9MLGVBQWI7QUFBQSxzQkFDTU0sa0JBQWtCcEIsV0FEeEI7QUFBQSxzQkFDc0M7QUFDaENxQixnQ0FBYyxJQUFJaEIsV0FBSixDQUFnQmMsSUFBaEIsRUFBc0JaLFdBQXRCLEVBQW1DYSxlQUFuQyxDQUZwQjs7QUFJQSx5QkFBT0MsV0FBUDtBQUNEOzs7O0VBNUJ1QmxCLEk7O0FBK0IxQm1CLE9BQU9DLE9BQVAsR0FBaUJsQixXQUFqQiIsImZpbGUiOiJyZWR1Y2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBSZWR1Y2VkTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcmVkdWNlZCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKSxcbiAgICAgIFBsYWNlSG9sZGVyRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcGxhY2VIb2xkZXInKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbm9uUGxhY2VIb2xkZXJEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblBsYWNlSG9sZGVyRGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgUGxhY2VIb2xkZXJEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKCFkZWZpbml0aW9uUGxhY2VIb2xkZXJEZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBub25QbGFjZUhvbGRlckRlZmluaXRpb25zOyAgLy8vXG5cbiAgICBjb25zdCBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1Y2VkUnVsZTtcbiJdfQ==