'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var types = require('../types'),
    ReducedNode = require('../node/reduced'),
    ruleNameUtilities = require('../utilities/ruleName'),
    RecursiveDefinition = require('../definition/recursive');

var Rule = parsers.Rule,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName,
    DIRECTLY_LEFT_RECURSIVE_TYPE = types.DIRECTLY_LEFT_RECURSIVE_TYPE,
    INDIRECTLY_LEFT_RECURSIVE_TYPE = types.INDIRECTLY_LEFT_RECURSIVE_TYPE,
    IMPLICITLY_LEFT_RECURSIVE_TYPE = types.IMPLICITLY_LEFT_RECURSIVE_TYPE;

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
                      reducedRuleName = reducedRuleNameFromRuleName(ruleName);

                  definitions = definitions.filter(function (definition) {
                        var keep = true;

                        var definitionRecursiveDefinition = definition instanceof RecursiveDefinition;

                        if (definitionRecursiveDefinition) {
                              var recursiveDefinition = definition,
                                  ///
                              type = recursiveDefinition.getType();

                              keep = type !== DIRECTLY_LEFT_RECURSIVE_TYPE && type !== INDIRECTLY_LEFT_RECURSIVE_TYPE && type !== IMPLICITLY_LEFT_RECURSIVE_TYPE;
                        }

                        return keep;
                  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJ0eXBlcyIsIlJlZHVjZWROb2RlIiwicnVsZU5hbWVVdGlsaXRpZXMiLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJSZWR1Y2VkUnVsZSIsImRlZmluaXRpb25zTGVuZ3RoIiwiZGVmaW5pdGlvbnMiLCJsZW5ndGgiLCJlbXB0eSIsInJ1bGUiLCJnZXREZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsImZpbHRlciIsImRlZmluaXRpb24iLCJrZWVwIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwidHlwZSIsImdldFR5cGUiLCJuYW1lIiwiTm9uVGVybWluYWxOb2RlIiwicmVkdWNlZFJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01FLGNBQWNGLFFBQVEsaUJBQVIsQ0FEcEI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7QUFBQSxJQUdNSSxzQkFBc0JKLFFBQVEseUJBQVIsQ0FINUI7O0FBS00sSUFBRUssSUFBRixHQUFXTixPQUFYLENBQUVNLElBQUY7QUFBQSxJQUNFQywyQkFERixHQUNrQ0gsaUJBRGxDLENBQ0VHLDJCQURGO0FBQUEsSUFFRUMsNEJBRkYsR0FFbUdOLEtBRm5HLENBRUVNLDRCQUZGO0FBQUEsSUFFZ0NDLDhCQUZoQyxHQUVtR1AsS0FGbkcsQ0FFZ0NPLDhCQUZoQztBQUFBLElBRWdFQyw4QkFGaEUsR0FFbUdSLEtBRm5HLENBRWdFUSw4QkFGaEU7O0lBSUFDLFc7Ozs7Ozs7Ozs7O3NDQUNNO0FBQ1Isc0JBQU1DLG9CQUFvQixLQUFLQyxXQUFMLENBQWlCQyxNQUEzQztBQUFBLHNCQUNNQyxRQUFTSCxzQkFBc0IsQ0FEckM7O0FBR0EseUJBQU9HLEtBQVA7QUFDRDs7O3FDQUVlQyxJLEVBQU07QUFDcEIsc0JBQUlILGNBQWNHLEtBQUtDLGNBQUwsRUFBbEI7O0FBRUEsc0JBQU1DLFdBQVdGLEtBQUtHLE9BQUwsRUFBakI7QUFBQSxzQkFDTUMsa0JBQWtCYiw0QkFBNEJXLFFBQTVCLENBRHhCOztBQUdBTCxnQ0FBY0EsWUFBWVEsTUFBWixDQUFtQixVQUFDQyxVQUFELEVBQWdCO0FBQy9DLDRCQUFJQyxPQUFPLElBQVg7O0FBRUEsNEJBQU1DLGdDQUFpQ0Ysc0JBQXNCakIsbUJBQTdEOztBQUVBLDRCQUFJbUIsNkJBQUosRUFBbUM7QUFDakMsa0NBQU1DLHNCQUFzQkgsVUFBNUI7QUFBQSxrQ0FBd0M7QUFDbENJLHFDQUFPRCxvQkFBb0JFLE9BQXBCLEVBRGI7O0FBR0FKLHFDQUFRRyxTQUFTbEIsNEJBQVYsSUFDQ2tCLFNBQVNqQiw4QkFEVixJQUVDaUIsU0FBU2hCLDhCQUZqQjtBQUdEOztBQUVELCtCQUFPYSxJQUFQO0FBQ0QsbUJBZmEsQ0FBZDs7QUFpQkEsc0JBQU1LLE9BQU9SLGVBQWI7QUFBQSxzQkFDTVMsa0JBQWtCMUIsV0FEeEI7QUFBQSxzQkFDc0M7QUFDaEMyQixnQ0FBYyxJQUFJbkIsV0FBSixDQUFnQmlCLElBQWhCLEVBQXNCZixXQUF0QixFQUFtQ2dCLGVBQW5DLENBRnBCOztBQUlBLHlCQUFPQyxXQUFQO0FBQ0Q7Ozs7RUFwQ3VCeEIsSTs7QUF1QzFCeUIsT0FBT0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwiZmlsZSI6InJlZHVjZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vdHlwZXMnKSxcbiAgICAgIFJlZHVjZWROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZWR1Y2VkJyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpLFxuICAgICAgUmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICAgIHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLCBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSA9IHR5cGVzO1xuXG5jbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IGtlZXAgPSB0cnVlO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgUmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgIHR5cGUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFR5cGUoKTtcblxuICAgICAgICBrZWVwID0gKHR5cGUgIT09IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpICYmXG4gICAgICAgICAgICAgICAodHlwZSAhPT0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSAmJlxuICAgICAgICAgICAgICAgKHR5cGUgIT09IElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBrZWVwXG4gICAgfSk7XG5cbiAgICBjb25zdCBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1Y2VkUnVsZTtcbiJdfQ==