'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var IntermediateNode = require('../node/intermediate'),
    ruleNameUtilities = require('../utilities/ruleName'),
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
            key: 'fromNonRecursiveDefinitionsAndRuleNames',
            value: function fromNonRecursiveDefinitionsAndRuleNames(nonRecursiveDefinitions, ruleNames) {
                  var definitions = nonRecursiveDefinitions,
                      ///
                  ruleNamesLength = ruleNames.length;

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
                  NonTerminalNode = IntermediateNode,
                      ///
                  nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

                  return nonRecursiveRule;
            }
      }]);

      return NonRecursiveRule;
}(Rule);

module.exports = NonRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsIkludGVybWVkaWF0ZU5vZGUiLCJydWxlTmFtZVV0aWxpdGllcyIsIk5vblJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGUiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJzZWNvbmRMYXN0Iiwibm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJOb25SZWN1cnNpdmVSdWxlIiwibm9uUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlTmFtZXMiLCJkZWZpbml0aW9ucyIsInJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsInNlY29uZExhc3RSdWxlTmFtZSIsInJ1bGVOYW1lIiwibm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwidW5zaGlmdCIsImxhc3RSdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vblJlY3Vyc2l2ZVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHQSxJQUFNRSxtQkFBbUJGLFFBQVEsc0JBQVIsQ0FBekI7QUFBQSxJQUNNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FEMUI7QUFBQSxJQUVNSSxpQ0FBaUNKLFFBQVEsb0NBQVIsQ0FGdkM7O0FBSU0sSUFBRUssSUFBRixHQUFXTixPQUFYLENBQUVNLElBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCTCxTQURyQixDQUNFSyxjQURGO0FBQUEsSUFFRUMsSUFGRixHQUV1QkQsY0FGdkIsQ0FFRUMsSUFGRjtBQUFBLElBRVFDLFVBRlIsR0FFdUJGLGNBRnZCLENBRVFFLFVBRlI7QUFBQSxJQUdFQyxnQ0FIRixHQUd1Q04saUJBSHZDLENBR0VNLGdDQUhGOztJQUtBQyxnQjs7Ozs7Ozs7Ozs7b0VBQzJDQyx1QixFQUF5QkMsUyxFQUFXO0FBQ2pGLHNCQUFNQyxjQUFjRix1QkFBcEI7QUFBQSxzQkFBOEM7QUFDeENHLG9DQUFrQkYsVUFBVUcsTUFEbEM7O0FBR0Esc0JBQUlELGtCQUFrQixDQUF0QixFQUF5QjtBQUN2Qiw0QkFBTUUscUJBQXFCUixXQUFXSSxTQUFYLENBQTNCO0FBQUEsNEJBQ01LLFlBQVdELGtCQURqQjtBQUFBLDRCQUNzQztBQUNoQ0UseURBQWlDZCwrQkFBK0JlLFlBQS9CLENBQTRDRixTQUE1QyxDQUZ2Qzs7QUFJQUosb0NBQVlPLE9BQVosQ0FBb0JGLDhCQUFwQjtBQUNEOztBQUVELHNCQUFNRyxlQUFlZCxLQUFLSyxTQUFMLENBQXJCO0FBQUEsc0JBQ01LLFdBQVdJLFlBRGpCO0FBQUEsc0JBQ2dDO0FBQzFCQyx5Q0FBdUJiLGlDQUFpQ1EsUUFBakMsQ0FGN0I7QUFBQSxzQkFHTU0sT0FBT0Qsb0JBSGI7QUFBQSxzQkFHb0M7QUFDOUJFLG9DQUFrQnRCLGdCQUp4QjtBQUFBLHNCQUkwQztBQUNwQ3VCLHFDQUFtQixJQUFJZixnQkFBSixDQUFxQmEsSUFBckIsRUFBMkJWLFdBQTNCLEVBQXdDVyxlQUF4QyxDQUx6Qjs7QUFPQSx5QkFBT0MsZ0JBQVA7QUFDRDs7OztFQXJCNEJwQixJOztBQXdCL0JxQixPQUFPQyxPQUFQLEdBQWlCakIsZ0JBQWpCIiwiZmlsZSI6Im5vblJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBJbnRlcm1lZGlhdGVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9pbnRlcm1lZGlhdGUnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyksXG4gICAgICBOb25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZVJ1bGVOYW1lJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbGFzdCwgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgTm9uUmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vblJlY3Vyc2l2ZURlZmluaXRpb25zQW5kUnVsZU5hbWVzKG5vblJlY3Vyc2l2ZURlZmluaXRpb25zLCBydWxlTmFtZXMpIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IG5vblJlY3Vyc2l2ZURlZmluaXRpb25zLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWVzTGVuZ3RoID0gcnVsZU5hbWVzLmxlbmd0aDtcblxuICAgIGlmIChydWxlTmFtZXNMZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBzZWNvbmRMYXN0UnVsZU5hbWUgPSBzZWNvbmRMYXN0KHJ1bGVOYW1lcyksXG4gICAgICAgICAgICBydWxlTmFtZSA9IHNlY29uZExhc3RSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uID0gTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICAgIGRlZmluaXRpb25zLnVuc2hpZnQobm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYXN0UnVsZU5hbWUgPSBsYXN0KHJ1bGVOYW1lcyksXG4gICAgICAgICAgcnVsZU5hbWUgPSBsYXN0UnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbnRlcm1lZGlhdGVOb2RlLCAvLy9cbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlID0gbmV3IE5vblJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uUmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblJlY3Vyc2l2ZVJ1bGU7XG4iXX0=