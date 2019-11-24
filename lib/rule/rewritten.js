'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var types = require('../types'),
    ruleNameUtilities = require('../utilities/ruleName'),
    RuleNameDefinition = require('../definition/ruleName'),
    RecursiveDefinition = require('../definition/recursive');

var Rule = parsers.Rule,
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

                        var definitionRecursiveDefinition = definition instanceof RecursiveDefinition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInR5cGVzIiwicnVsZU5hbWVVdGlsaXRpZXMiLCJSdWxlTmFtZURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJSZXdyaXR0ZW5SdWxlIiwicnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImtlZXAiLCJkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0eXBlIiwiZ2V0VHlwZSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJyZXdyaXR0ZW5SdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSx3QkFBUixDQUYzQjtBQUFBLElBR01JLHNCQUFzQkosUUFBUSx5QkFBUixDQUg1Qjs7QUFLTSxJQUFFSyxJQUFGLEdBQVdOLE9BQVgsQ0FBRU0sSUFBRjtBQUFBLElBQ0VDLDJCQURGLEdBQ2tDSixpQkFEbEMsQ0FDRUksMkJBREY7QUFBQSxJQUVFQyw0QkFGRixHQUVtR04sS0FGbkcsQ0FFRU0sNEJBRkY7QUFBQSxJQUVnQ0MsOEJBRmhDLEdBRW1HUCxLQUZuRyxDQUVnQ08sOEJBRmhDO0FBQUEsSUFFZ0VDLDhCQUZoRSxHQUVtR1IsS0FGbkcsQ0FFZ0VRLDhCQUZoRTs7SUFJQUMsYTs7Ozs7Ozs7Ozs7cUNBQ1lDLEksRUFBTTtBQUNwQixzQkFBSUMsY0FBY0QsS0FBS0UsY0FBTCxFQUFsQjs7QUFFQSxzQkFBTUMsV0FBV0gsS0FBS0ksT0FBTCxFQUFqQjtBQUFBLHNCQUNNQyxrQkFBa0JWLDRCQUE0QlEsUUFBNUIsQ0FEeEI7QUFBQSxzQkFFTUcsNEJBQTRCZCxtQkFBbUJlLFlBQW5CLENBQWdDRixlQUFoQyxDQUZsQzs7QUFJQUosZ0NBQWNBLFlBQVlPLE1BQVosQ0FBbUIsVUFBQ0MsVUFBRCxFQUFnQjtBQUMvQyw0QkFBSUMsT0FBTyxLQUFYOztBQUVBLDRCQUFNQyxnQ0FBaUNGLHNCQUFzQmhCLG1CQUE3RDs7QUFFQSw0QkFBSWtCLDZCQUFKLEVBQW1DO0FBQ2pDLGtDQUFNQyxzQkFBc0JILFVBQTVCO0FBQUEsa0NBQXdDO0FBQ2xDSSxxQ0FBT0Qsb0JBQW9CRSxPQUFwQixFQURiOztBQUdBSixxQ0FBUUcsU0FBU2pCLDRCQUFWLElBQ0NpQixTQUFTaEIsOEJBRFYsSUFFQ2dCLFNBQVNmLDhCQUZqQjtBQUdEOztBQUVELCtCQUFPWSxJQUFQO0FBQ0QsbUJBZmEsQ0FBZDs7QUFpQkFULDZEQUNLQSxXQURMLElBRUVLLHlCQUZGOztBQUtBLHNCQUFNUyxPQUFPWixRQUFiO0FBQUEsc0JBQXdCO0FBQ2xCYSxvQ0FBa0JoQixLQUFLaUIsa0JBQUwsRUFEeEI7QUFBQSxzQkFFTUMsZ0JBQWdCLElBQUluQixhQUFKLENBQWtCZ0IsSUFBbEIsRUFBd0JkLFdBQXhCLEVBQXFDZSxlQUFyQyxDQUZ0Qjs7QUFJQSx5QkFBT0UsYUFBUDtBQUNEOzs7O0VBbkN5QnhCLEk7O0FBc0M1QnlCLE9BQU9DLE9BQVAsR0FBaUJyQixhQUFqQiIsImZpbGUiOiJyZXdyaXR0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vdHlwZXMnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyksXG4gICAgICBSdWxlTmFtZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3J1bGVOYW1lJyksXG4gICAgICBSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLCBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9ID0gdHlwZXM7XG5cbmNsYXNzIFJld3JpdHRlblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQga2VlcCA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgUmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgIHR5cGUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFR5cGUoKTtcblxuICAgICAgICBrZWVwID0gKHR5cGUgPT09IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpIHx8XG4gICAgICAgICAgICAgICAodHlwZSA9PT0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSB8fFxuICAgICAgICAgICAgICAgKHR5cGUgPT09IElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBrZWVwO1xuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAuLi5kZWZpbml0aW9ucyxcbiAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb25cbiAgICBdO1xuXG4gICAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gbmV3IFJld3JpdHRlblJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJld3JpdHRlblJ1bGU7XG4iXX0=