'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var arrayUtilities = require('../utilities/array'),
    NonRecursiveNode = require('../node/nonRecursive'),
    ruleNameUtilities = require('../utilities/ruleName');

var Rule = parsers.Rule,
    last = arrayUtilities.last,
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
                  var lastRuleName = last(ruleNames),
                      ruleName = lastRuleName,
                      ///
                  definitions = nonRecursiveDefinitions,
                      ///
                  nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
                      name = nonRecursiveRuleName,
                      ///
                  NonTerminalNode = NonRecursiveNode,
                      ///
                  nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

                  return nonRecursiveRule;
            }
      }]);

      return NonRecursiveRule;
}(Rule);

module.exports = NonRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiTm9uUmVjdXJzaXZlTm9kZSIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiUnVsZSIsImxhc3QiLCJub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIk5vblJlY3Vyc2l2ZVJ1bGUiLCJub25SZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVOYW1lcyIsImxhc3RSdWxlTmFtZSIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJub25SZWN1cnNpdmVSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBQXZCO0FBQUEsSUFDTUUsbUJBQW1CRixRQUFRLHNCQUFSLENBRHpCO0FBQUEsSUFFTUcsb0JBQW9CSCxRQUFRLHVCQUFSLENBRjFCOztBQUlNLElBQUVJLElBQUYsR0FBV0wsT0FBWCxDQUFFSyxJQUFGO0FBQUEsSUFDRUMsSUFERixHQUNXSixjQURYLENBQ0VJLElBREY7QUFBQSxJQUVFQyxnQ0FGRixHQUV1Q0gsaUJBRnZDLENBRUVHLGdDQUZGOztJQUlBQyxnQjs7Ozs7Ozs7Ozs7b0VBQzJDQyx1QixFQUF5QkMsUyxFQUFXO0FBQ2pGLHNCQUFNQyxlQUFlTCxLQUFLSSxTQUFMLENBQXJCO0FBQUEsc0JBQ01FLFdBQVdELFlBRGpCO0FBQUEsc0JBQ2dDO0FBQzFCRSxnQ0FBY0osdUJBRnBCO0FBQUEsc0JBRThDO0FBQ3hDSyx5Q0FBdUJQLGlDQUFpQ0ssUUFBakMsQ0FIN0I7QUFBQSxzQkFJTUcsT0FBT0Qsb0JBSmI7QUFBQSxzQkFJb0M7QUFDOUJFLG9DQUFrQmIsZ0JBTHhCO0FBQUEsc0JBSzBDO0FBQ3BDYyxxQ0FBbUIsSUFBSVQsZ0JBQUosQ0FBcUJPLElBQXJCLEVBQTJCRixXQUEzQixFQUF3Q0csZUFBeEMsQ0FOekI7O0FBUUEseUJBQU9DLGdCQUFQO0FBQ0Q7Ozs7RUFYNEJaLEk7O0FBYy9CYSxPQUFPQyxPQUFQLEdBQWlCWCxnQkFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uUmVjdXJzaXZlTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvbm9uUmVjdXJzaXZlJyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblJlY3Vyc2l2ZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob25SZWN1cnNpdmVEZWZpbml0aW9uc0FuZFJ1bGVOYW1lcyhub25SZWN1cnNpdmVEZWZpbml0aW9ucywgcnVsZU5hbWVzKSB7XG4gICAgY29uc3QgbGFzdFJ1bGVOYW1lID0gbGFzdChydWxlTmFtZXMpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbGFzdFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBub25SZWN1cnNpdmVEZWZpbml0aW9ucywgIC8vL1xuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IE5vblJlY3Vyc2l2ZU5vZGUsIC8vL1xuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGUgPSBuZXcgTm9uUmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBub25SZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uUmVjdXJzaXZlUnVsZTtcbiJdfQ==