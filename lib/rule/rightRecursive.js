'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ruleNameUtilities = require('../utilities/ruleName'),
    RightRecursiveNode = require('../node/rightRecursive'),
    RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule,
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName;

var RightRecursiveRule = function (_Rule) {
      _inherits(RightRecursiveRule, _Rule);

      function RightRecursiveRule() {
            _classCallCheck(this, RightRecursiveRule);

            return _possibleConstructorReturn(this, (RightRecursiveRule.__proto__ || Object.getPrototypeOf(RightRecursiveRule)).apply(this, arguments));
      }

      _createClass(RightRecursiveRule, null, [{
            key: 'fromRuleNameAndImmediatelyLeftRecursiveRecursiveDefinitions',
            value: function fromRuleNameAndImmediatelyLeftRecursiveRecursiveDefinitions(ruleName, immediatelyLeftRecursiveDefinitions) {
                  var rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
                      rightRecursiveDefinitions = immediatelyLeftRecursiveDefinitions.map(function (immediatelyLeftRecursiveDefinition) {
                        return RightRecursiveDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition);
                  }),
                      name = rightRecursiveRuleName,
                      ///
                  definitions = rightRecursiveDefinitions,
                      ///
                  NonTerminalNode = RightRecursiveNode,
                      ///
                  rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);

                  return rightRecursiveRule;
            }
      }]);

      return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicnVsZU5hbWVVdGlsaXRpZXMiLCJSaWdodFJlY3Vyc2l2ZU5vZGUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUnVsZSIsInJ1bGVOYW1lIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIm1hcCIsImltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsInJpZ2h0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLG9CQUFvQkQsUUFBUSx1QkFBUixDQUExQjtBQUFBLElBQ01FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUQzQjtBQUFBLElBRU1HLDJCQUEyQkgsUUFBUSw4QkFBUixDQUZqQzs7QUFJTSxJQUFFSSxJQUFGLEdBQVdMLE9BQVgsQ0FBRUssSUFBRjtBQUFBLElBQ0VDLGtDQURGLEdBQ3lDSixpQkFEekMsQ0FDRUksa0NBREY7O0lBR0FDLGtCOzs7Ozs7Ozs7Ozt3RkFDK0RDLFEsRUFBVUMsbUMsRUFBcUM7QUFDaEgsc0JBQU1DLHlCQUF5QkosbUNBQW1DRSxRQUFuQyxDQUEvQjtBQUFBLHNCQUNNRyw0QkFBNEJGLG9DQUFvQ0csR0FBcEMsQ0FBd0MsVUFBQ0Msa0NBQUQ7QUFBQSwrQkFBd0NULHlCQUF5QlUsc0NBQXpCLENBQWdFRCxrQ0FBaEUsQ0FBeEM7QUFBQSxtQkFBeEMsQ0FEbEM7QUFBQSxzQkFFTUUsT0FBT0wsc0JBRmI7QUFBQSxzQkFFc0M7QUFDaENNLGdDQUFjTCx5QkFIcEI7QUFBQSxzQkFHK0M7QUFDekNNLG9DQUFrQmQsa0JBSnhCO0FBQUEsc0JBSTRDO0FBQ3RDZSx1Q0FBcUIsSUFBSVgsa0JBQUosQ0FBdUJRLElBQXZCLEVBQTZCQyxXQUE3QixFQUEwQ0MsZUFBMUMsQ0FMM0I7O0FBT0EseUJBQU9DLGtCQUFQO0FBQ0Q7Ozs7RUFWOEJiLEk7O0FBYWpDYyxPQUFPQyxPQUFQLEdBQWlCYixrQkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3JpZ2h0UmVjdXJzaXZlJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICAgIHsgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSksXG4gICAgICAgICAgbmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJpZ2h0UmVjdXJzaXZlTm9kZSwgLy8vXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlID0gbmV3IFJpZ2h0UmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVJ1bGU7XG4iXX0=