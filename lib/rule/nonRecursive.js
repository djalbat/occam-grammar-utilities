'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var NonRecursiveNode = require('../node/nonRecursive'),
    ruleNameUtilities = require('../utilities/ruleName');

var Rule = parsers.Rule,
    nonRecursiveRuleNameFromRuleName = ruleNameUtilities.nonRecursiveRuleNameFromRuleName;

var NonRecursiveRule = function (_Rule) {
      _inherits(NonRecursiveRule, _Rule);

      function NonRecursiveRule() {
            _classCallCheck(this, NonRecursiveRule);

            return _possibleConstructorReturn(this, (NonRecursiveRule.__proto__ || Object.getPrototypeOf(NonRecursiveRule)).apply(this, arguments));
      }

      _createClass(NonRecursiveRule, [{
            key: 'addNonRecursiveDefinition',
            value: function addNonRecursiveDefinition(nonRecursiveDefinition) {
                  var definition = nonRecursiveDefinition; ///

                  _get(NonRecursiveRule.prototype.__proto__ || Object.getPrototypeOf(NonRecursiveRule.prototype), 'addDefinition', this).call(this, definition);
            }
      }], [{
            key: 'fromRuleName',
            value: function fromRuleName(ruleName) {
                  var definitions = [],
                      nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
                      name = nonRecursiveRuleName,
                      ///
                  NonTerminalNode = NonRecursiveNode,
                      ///
                  nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

                  return nonRecursiveRule;
            }
      }, {
            key: 'fromRule',
            value: function fromRule(rule) {
                  var ruleName = rule.getName(),
                      definitions = rule.getDefinitions(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIk5vblJlY3Vyc2l2ZU5vZGUiLCJydWxlTmFtZVV0aWxpdGllcyIsIlJ1bGUiLCJub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIk5vblJlY3Vyc2l2ZVJ1bGUiLCJub25SZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJub25SZWN1cnNpdmVSdWxlIiwicnVsZSIsImdldE5hbWUiLCJnZXREZWZpbml0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsbUJBQW1CRCxRQUFRLHNCQUFSLENBQXpCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLElBQUYsR0FBV0osT0FBWCxDQUFFSSxJQUFGO0FBQUEsSUFDRUMsZ0NBREYsR0FDdUNGLGlCQUR2QyxDQUNFRSxnQ0FERjs7SUFHQUMsZ0I7Ozs7Ozs7Ozs7O3NEQUNzQkMsc0IsRUFBd0I7QUFDaEQsc0JBQU1DLGFBQWFELHNCQUFuQixDQURnRCxDQUNKOztBQUU1QyxvSkFBb0JDLFVBQXBCO0FBQ0Q7Ozt5Q0FFbUJDLFEsRUFBVTtBQUM1QixzQkFBTUMsY0FBYyxFQUFwQjtBQUFBLHNCQUNNQyx1QkFBdUJOLGlDQUFpQ0ksUUFBakMsQ0FEN0I7QUFBQSxzQkFFTUcsT0FBT0Qsb0JBRmI7QUFBQSxzQkFFb0M7QUFDOUJFLG9DQUFrQlgsZ0JBSHhCO0FBQUEsc0JBRzBDO0FBQ3BDWSxxQ0FBbUIsSUFBSVIsZ0JBQUosQ0FBcUJNLElBQXJCLEVBQTJCRixXQUEzQixFQUF3Q0csZUFBeEMsQ0FKekI7O0FBTUEseUJBQU9DLGdCQUFQO0FBQ0Q7OztxQ0FFZUMsSSxFQUFNO0FBQ3BCLHNCQUFNTixXQUFXTSxLQUFLQyxPQUFMLEVBQWpCO0FBQUEsc0JBQ01OLGNBQWNLLEtBQUtFLGNBQUwsRUFEcEI7QUFBQSxzQkFFTU4sdUJBQXVCTixpQ0FBaUNJLFFBQWpDLENBRjdCO0FBQUEsc0JBR01HLE9BQU9ELG9CQUhiO0FBQUEsc0JBR29DO0FBQzlCRSxvQ0FBa0JYLGdCQUp4QjtBQUFBLHNCQUkwQztBQUNwQ1kscUNBQW1CLElBQUlSLGdCQUFKLENBQXFCTSxJQUFyQixFQUEyQkYsV0FBM0IsRUFBd0NHLGVBQXhDLENBTHpCOztBQU9BLHlCQUFPQyxnQkFBUDtBQUNEOzs7O0VBMUI0QlYsSTs7QUE2Qi9CYyxPQUFPQyxPQUFQLEdBQWlCYixnQkFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBOb25SZWN1cnNpdmVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ub25SZWN1cnNpdmUnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICAgIHsgbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBOb25SZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGFkZE5vblJlY3Vyc2l2ZURlZmluaXRpb24obm9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBub25SZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICBzdXBlci5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gW10sXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTm9uUmVjdXJzaXZlTm9kZSwgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZSA9IG5ldyBOb25SZWN1cnNpdmVSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vblJlY3Vyc2l2ZVJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTm9uUmVjdXJzaXZlTm9kZSwgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZSA9IG5ldyBOb25SZWN1cnNpdmVSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vblJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25SZWN1cnNpdmVSdWxlO1xuIl19