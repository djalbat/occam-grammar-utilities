'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var types = require('../types'),
    classUtilities = require('../utilities/class'),
    ruleNameUtilities = require('../utilities/ruleName'),
    RuleNameDefinition = require('../definition/ruleName'),
    RecursiveDefinition = require('../definition/recursive');

var Rule = parsers.Rule,
    isInstanceOf = classUtilities.isInstanceOf,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName,
    DIRECTLY_LEFT_RECURSIVE_TYPE = types.DIRECTLY_LEFT_RECURSIVE_TYPE,
    INDIRECTLY_LEFT_RECURSIVE_TYPE = types.INDIRECTLY_LEFT_RECURSIVE_TYPE,
    IMPLICITLY_LEFT_RECURSIVE_TYPE = types.IMPLICITLY_LEFT_RECURSIVE_TYPE;

var RewrittenRule = function (_Rule) {
      _inherits(RewrittenRule, _Rule);

      function RewrittenRule() {
            _classCallCheck(this, RewrittenRule);

            return _possibleConstructorReturn(this, (RewrittenRule.__proto__ || Object.getPrototypeOf(RewrittenRule)).apply(this, arguments));
      }

      _createClass(RewrittenRule, null, [{
            key: 'fromRule',
            value: function fromRule(rule) {
                  var definitions = rule.getDefinitions();

                  var ruleName = rule.getName(),
                      reducedRuleName = reducedRuleNameFromRuleName(ruleName),
                      reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName);

                  definitions = definitions.filter(function (definition) {
                        var keep = false;

                        var definitionRecursiveDefinition = isInstanceOf(definition, RecursiveDefinition);

                        if (definitionRecursiveDefinition) {
                              var recursiveDefinition = definition,
                                  ///
                              type = recursiveDefinition.getType();

                              keep = type === DIRECTLY_LEFT_RECURSIVE_TYPE || type === INDIRECTLY_LEFT_RECURSIVE_TYPE || type === IMPLICITLY_LEFT_RECURSIVE_TYPE;
                        }

                        return keep;
                  });

                  definitions = [].concat(_toConsumableArray(definitions), [reducedRuleNameDefinition]);

                  var name = ruleName,
                      ///
                  NonTerminalNode = rule.getNonTerminalNode(),
                      rewrittenRule = new RewrittenRule(name, definitions, NonTerminalNode);

                  return rewrittenRule;
            }
      }]);

      return RewrittenRule;
}(Rule);

module.exports = RewrittenRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInR5cGVzIiwiY2xhc3NVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiaXNJbnN0YW5jZU9mIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIlJld3JpdHRlblJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwia2VlcCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJnZXRUeXBlIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5vblRlcm1pbmFsTm9kZSIsInJld3JpdHRlblJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUcsb0JBQW9CSCxRQUFRLHVCQUFSLENBRjFCO0FBQUEsSUFHTUkscUJBQXFCSixRQUFRLHdCQUFSLENBSDNCO0FBQUEsSUFJTUssc0JBQXNCTCxRQUFRLHlCQUFSLENBSjVCOztBQU1NLElBQUVNLElBQUYsR0FBV1AsT0FBWCxDQUFFTyxJQUFGO0FBQUEsSUFDRUMsWUFERixHQUNtQkwsY0FEbkIsQ0FDRUssWUFERjtBQUFBLElBRUVDLDJCQUZGLEdBRWtDTCxpQkFGbEMsQ0FFRUssMkJBRkY7QUFBQSxJQUdFQyw0QkFIRixHQUdtR1IsS0FIbkcsQ0FHRVEsNEJBSEY7QUFBQSxJQUdnQ0MsOEJBSGhDLEdBR21HVCxLQUhuRyxDQUdnQ1MsOEJBSGhDO0FBQUEsSUFHZ0VDLDhCQUhoRSxHQUdtR1YsS0FIbkcsQ0FHZ0VVLDhCQUhoRTs7SUFLQUMsYTs7Ozs7Ozs7Ozs7cUNBQ1lDLEksRUFBTTtBQUNwQixzQkFBSUMsY0FBY0QsS0FBS0UsY0FBTCxFQUFsQjs7QUFFQSxzQkFBTUMsV0FBV0gsS0FBS0ksT0FBTCxFQUFqQjtBQUFBLHNCQUNNQyxrQkFBa0JWLDRCQUE0QlEsUUFBNUIsQ0FEeEI7QUFBQSxzQkFFTUcsNEJBQTRCZixtQkFBbUJnQixZQUFuQixDQUFnQ0YsZUFBaEMsQ0FGbEM7O0FBSUFKLGdDQUFjQSxZQUFZTyxNQUFaLENBQW1CLFVBQUNDLFVBQUQsRUFBZ0I7QUFDL0MsNEJBQUlDLE9BQU8sS0FBWDs7QUFFQSw0QkFBTUMsZ0NBQWdDakIsYUFBYWUsVUFBYixFQUF5QmpCLG1CQUF6QixDQUF0Qzs7QUFFQSw0QkFBSW1CLDZCQUFKLEVBQW1DO0FBQ2pDLGtDQUFNQyxzQkFBc0JILFVBQTVCO0FBQUEsa0NBQXdDO0FBQ2xDSSxxQ0FBT0Qsb0JBQW9CRSxPQUFwQixFQURiOztBQUdBSixxQ0FBUUcsU0FBU2pCLDRCQUFWLElBQ0NpQixTQUFTaEIsOEJBRFYsSUFFQ2dCLFNBQVNmLDhCQUZqQjtBQUdEOztBQUVELCtCQUFPWSxJQUFQO0FBQ0QsbUJBZmEsQ0FBZDs7QUFpQkFULDZEQUNLQSxXQURMLElBRUVLLHlCQUZGOztBQUtBLHNCQUFNUyxPQUFPWixRQUFiO0FBQUEsc0JBQXdCO0FBQ2xCYSxvQ0FBa0JoQixLQUFLaUIsa0JBQUwsRUFEeEI7QUFBQSxzQkFFTUMsZ0JBQWdCLElBQUluQixhQUFKLENBQWtCZ0IsSUFBbEIsRUFBd0JkLFdBQXhCLEVBQXFDZSxlQUFyQyxDQUZ0Qjs7QUFJQSx5QkFBT0UsYUFBUDtBQUNEOzs7O0VBbkN5QnpCLEk7O0FBc0M1QjBCLE9BQU9DLE9BQVAsR0FBaUJyQixhQUFqQiIsImZpbGUiOiJyZXdyaXR0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vdHlwZXMnKSxcbiAgICAgIGNsYXNzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2NsYXNzJyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpLFxuICAgICAgUnVsZU5hbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ydWxlTmFtZScpLFxuICAgICAgUmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICAgIHsgaXNJbnN0YW5jZU9mIH0gPSBjbGFzc1V0aWxpdGllcyxcbiAgICAgIHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLCBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSA9IHR5cGVzO1xuXG5jbGFzcyBSZXdyaXR0ZW5SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IGtlZXAgPSBmYWxzZTtcblxuICAgICAgY29uc3QgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgUmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgIHR5cGUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFR5cGUoKTtcblxuICAgICAgICBrZWVwID0gKHR5cGUgPT09IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpIHx8XG4gICAgICAgICAgICAgICAodHlwZSA9PT0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSB8fFxuICAgICAgICAgICAgICAgKHR5cGUgPT09IElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBrZWVwO1xuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAuLi5kZWZpbml0aW9ucyxcbiAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb25cbiAgICBdO1xuXG4gICAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gbmV3IFJld3JpdHRlblJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJld3JpdHRlblJ1bGU7XG4iXX0=