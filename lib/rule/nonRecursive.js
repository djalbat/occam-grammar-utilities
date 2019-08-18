'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var ruleNameUtilities = require('../utilities/ruleName'),
    NonRecursiveRuleNameDefinition = require('../definition/nonRecursiveRuleName');

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
            key: 'fromRuleRuleNamesAndNonRecursiveDefinitions',
            value: function fromRuleRuleNamesAndNonRecursiveDefinitions(rule, ruleNames, nonRecursiveDefinitions) {
                  var ruleNamesLength = ruleNames.length,
                      definitions = nonRecursiveDefinitions; ///

                  if (ruleNamesLength > 1) {
                        var secondLastRuleName = secondLast(ruleNames),
                            _ruleName = secondLastRuleName,
                            ///
                        nonRecursiveRuleNameDefinition = NonRecursiveRuleNameDefinition.fromRuleName(_ruleName);

                        definitions.unshift(nonRecursiveRuleNameDefinition);
                  }

                  var lastRuleName = last(ruleNames),
                      ruleName = lastRuleName,
                      ///
                  nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
                      name = nonRecursiveRuleName,
                      ///
                  NonTerminalNone = rule.getNonTerminalNode(),
                      nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNone);

                  return nonRecursiveRule;
            }
      }]);

      return NonRecursiveRule;
}(Rule);

module.exports = NonRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZSIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsInNlY29uZExhc3QiLCJub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIk5vblJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwicnVsZU5hbWVzIiwibm9uUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9ucyIsInNlY29uZExhc3RSdWxlTmFtZSIsInJ1bGVOYW1lIiwibm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwidW5zaGlmdCIsImxhc3RSdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsIk5vblRlcm1pbmFsTm9uZSIsImdldE5vblRlcm1pbmFsTm9kZSIsIm5vblJlY3Vyc2l2ZVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHQSxJQUFNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FBMUI7QUFBQSxJQUNNRyxpQ0FBaUNILFFBQVEsb0NBQVIsQ0FEdkM7O0FBR00sSUFBRUksSUFBRixHQUFXTCxPQUFYLENBQUVLLElBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCSixTQURyQixDQUNFSSxjQURGO0FBQUEsSUFFRUMsSUFGRixHQUV1QkQsY0FGdkIsQ0FFRUMsSUFGRjtBQUFBLElBRVFDLFVBRlIsR0FFdUJGLGNBRnZCLENBRVFFLFVBRlI7QUFBQSxJQUdFQyxnQ0FIRixHQUd1Q04saUJBSHZDLENBR0VNLGdDQUhGOztJQUtBQyxnQjs7Ozs7Ozs7Ozs7d0VBQytDQyxJLEVBQU1DLFMsRUFBV0MsdUIsRUFBeUI7QUFDM0Ysc0JBQU1DLGtCQUFrQkYsVUFBVUcsTUFBbEM7QUFBQSxzQkFDTUMsY0FBY0gsdUJBRHBCLENBRDJGLENBRTdDOztBQUU5QyxzQkFBSUMsa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLDRCQUFNRyxxQkFBcUJULFdBQVdJLFNBQVgsQ0FBM0I7QUFBQSw0QkFDTU0sWUFBV0Qsa0JBRGpCO0FBQUEsNEJBQ3NDO0FBQ2hDRSx5REFBaUNmLCtCQUErQmdCLFlBQS9CLENBQTRDRixTQUE1QyxDQUZ2Qzs7QUFJQUYsb0NBQVlLLE9BQVosQ0FBb0JGLDhCQUFwQjtBQUNEOztBQUVELHNCQUFNRyxlQUFlZixLQUFLSyxTQUFMLENBQXJCO0FBQUEsc0JBQ01NLFdBQVdJLFlBRGpCO0FBQUEsc0JBQ2dDO0FBQzFCQyx5Q0FBdUJkLGlDQUFpQ1MsUUFBakMsQ0FGN0I7QUFBQSxzQkFHTU0sT0FBT0Qsb0JBSGI7QUFBQSxzQkFHb0M7QUFDOUJFLG9DQUFrQmQsS0FBS2Usa0JBQUwsRUFKeEI7QUFBQSxzQkFLTUMsbUJBQW1CLElBQUlqQixnQkFBSixDQUFxQmMsSUFBckIsRUFBMkJSLFdBQTNCLEVBQXdDUyxlQUF4QyxDQUx6Qjs7QUFPQSx5QkFBT0UsZ0JBQVA7QUFDRDs7OztFQXJCNEJ0QixJOztBQXdCL0J1QixPQUFPQyxPQUFQLEdBQWlCbkIsZ0JBQWpCIiwiZmlsZSI6Im5vblJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpLFxuICAgICAgTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ub25SZWN1cnNpdmVSdWxlTmFtZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGxhc3QsIHNlY29uZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblJlY3Vyc2l2ZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlUnVsZU5hbWVzQW5kTm9uUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgcnVsZU5hbWVzLCBub25SZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IHJ1bGVOYW1lc0xlbmd0aCA9IHJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBub25SZWN1cnNpdmVEZWZpbml0aW9uczsgIC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lc0xlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHNlY29uZExhc3RSdWxlTmFtZSA9IHNlY29uZExhc3QocnVsZU5hbWVzKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gc2Vjb25kTGFzdFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24gPSBOb25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgZGVmaW5pdGlvbnMudW5zaGlmdChub25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IGxhc3RSdWxlTmFtZSA9IGxhc3QocnVsZU5hbWVzKSxcbiAgICAgICAgICBydWxlTmFtZSA9IGxhc3RSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9uZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZSA9IG5ldyBOb25SZWN1cnNpdmVSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vbmUpO1xuXG4gICAgcmV0dXJuIG5vblJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25SZWN1cnNpdmVSdWxlO1xuIl19