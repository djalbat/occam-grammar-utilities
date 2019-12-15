'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var types = require('../types'),
    ReducedNode = require('../node/reduced'),
    classUtilities = require('../utilities/class'),
    ruleNameUtilities = require('../utilities/ruleName'),
    RecursiveDefinition = require('../definition/recursive');

var Rule = parsers.Rule,
    isInstanceOf = classUtilities.isInstanceOf,
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

                        var definitionRecursiveDefinition = isInstanceOf(definition, RecursiveDefinition);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJ0eXBlcyIsIlJlZHVjZWROb2RlIiwiY2xhc3NVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiaXNJbnN0YW5jZU9mIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIlJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJkZWZpbml0aW9ucyIsImxlbmd0aCIsImVtcHR5IiwicnVsZSIsImdldERlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImtlZXAiLCJkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0eXBlIiwiZ2V0VHlwZSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJyZWR1Y2VkUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUUsY0FBY0YsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1HLGlCQUFpQkgsUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01JLG9CQUFvQkosUUFBUSx1QkFBUixDQUgxQjtBQUFBLElBSU1LLHNCQUFzQkwsUUFBUSx5QkFBUixDQUo1Qjs7QUFNTSxJQUFFTSxJQUFGLEdBQVdQLE9BQVgsQ0FBRU8sSUFBRjtBQUFBLElBQ0VDLFlBREYsR0FDbUJKLGNBRG5CLENBQ0VJLFlBREY7QUFBQSxJQUVFQywyQkFGRixHQUVrQ0osaUJBRmxDLENBRUVJLDJCQUZGO0FBQUEsSUFHRUMsNEJBSEYsR0FHbUdSLEtBSG5HLENBR0VRLDRCQUhGO0FBQUEsSUFHZ0NDLDhCQUhoQyxHQUdtR1QsS0FIbkcsQ0FHZ0NTLDhCQUhoQztBQUFBLElBR2dFQyw4QkFIaEUsR0FHbUdWLEtBSG5HLENBR2dFVSw4QkFIaEU7O0lBS0FDLFc7Ozs7Ozs7Ozs7O3NDQUNNO0FBQ1Isc0JBQU1DLG9CQUFvQixLQUFLQyxXQUFMLENBQWlCQyxNQUEzQztBQUFBLHNCQUNNQyxRQUFTSCxzQkFBc0IsQ0FEckM7O0FBR0EseUJBQU9HLEtBQVA7QUFDRDs7O3FDQUVlQyxJLEVBQU07QUFDcEIsc0JBQUlILGNBQWNHLEtBQUtDLGNBQUwsRUFBbEI7O0FBRUEsc0JBQU1DLFdBQVdGLEtBQUtHLE9BQUwsRUFBakI7QUFBQSxzQkFDTUMsa0JBQWtCYiw0QkFBNEJXLFFBQTVCLENBRHhCOztBQUdBTCxnQ0FBY0EsWUFBWVEsTUFBWixDQUFtQixVQUFDQyxVQUFELEVBQWdCO0FBQy9DLDRCQUFJQyxPQUFPLElBQVg7O0FBRUEsNEJBQU1DLGdDQUFnQ2xCLGFBQWFnQixVQUFiLEVBQXlCbEIsbUJBQXpCLENBQXRDOztBQUVBLDRCQUFJb0IsNkJBQUosRUFBbUM7QUFDakMsa0NBQU1DLHNCQUFzQkgsVUFBNUI7QUFBQSxrQ0FBd0M7QUFDbENJLHFDQUFPRCxvQkFBb0JFLE9BQXBCLEVBRGI7O0FBR0FKLHFDQUFRRyxTQUFTbEIsNEJBQVYsSUFDQ2tCLFNBQVNqQiw4QkFEVixJQUVDaUIsU0FBU2hCLDhCQUZqQjtBQUdEOztBQUVELCtCQUFPYSxJQUFQO0FBQ0QsbUJBZmEsQ0FBZDs7QUFpQkEsc0JBQU1LLE9BQU9SLGVBQWI7QUFBQSxzQkFDTVMsa0JBQWtCNUIsV0FEeEI7QUFBQSxzQkFDc0M7QUFDaEM2QixnQ0FBYyxJQUFJbkIsV0FBSixDQUFnQmlCLElBQWhCLEVBQXNCZixXQUF0QixFQUFtQ2dCLGVBQW5DLENBRnBCOztBQUlBLHlCQUFPQyxXQUFQO0FBQ0Q7Ozs7RUFwQ3VCekIsSTs7QUF1QzFCMEIsT0FBT0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwiZmlsZSI6InJlZHVjZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vdHlwZXMnKSxcbiAgICAgIFJlZHVjZWROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZWR1Y2VkJyksXG4gICAgICBjbGFzc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jbGFzcycpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKSxcbiAgICAgIFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGlzSW5zdGFuY2VPZiB9ID0gY2xhc3NVdGlsaXRpZXMsXG4gICAgICB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXMsXG4gICAgICB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gPSB0eXBlcztcblxuY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBrZWVwID0gdHJ1ZTtcblxuICAgICAgY29uc3QgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgUmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgIHR5cGUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFR5cGUoKTtcblxuICAgICAgICBrZWVwID0gKHR5cGUgIT09IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpICYmXG4gICAgICAgICAgICAgICAodHlwZSAhPT0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSAmJlxuICAgICAgICAgICAgICAgKHR5cGUgIT09IElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBrZWVwXG4gICAgfSk7XG5cbiAgICBjb25zdCBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1Y2VkUnVsZTtcbiJdfQ==