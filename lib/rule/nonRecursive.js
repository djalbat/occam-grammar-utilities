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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIk5vblJlY3Vyc2l2ZU5vZGUiLCJydWxlTmFtZVV0aWxpdGllcyIsIlJ1bGUiLCJub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIk5vblJlY3Vyc2l2ZVJ1bGUiLCJub25SZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwibm9uUmVjdXJzaXZlUnVsZU5hbWUiLCJuYW1lIiwiTm9uVGVybWluYWxOb2RlIiwibm9uUmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsbUJBQW1CRCxRQUFRLHNCQUFSLENBQXpCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLElBQUYsR0FBV0osT0FBWCxDQUFFSSxJQUFGO0FBQUEsSUFDRUMsZ0NBREYsR0FDdUNGLGlCQUR2QyxDQUNFRSxnQ0FERjs7SUFHQUMsZ0I7Ozs7Ozs7Ozs7O3NEQUNzQkMsc0IsRUFBd0I7QUFDaEQsc0JBQU1DLGFBQWFELHNCQUFuQixDQURnRCxDQUNKOztBQUU1QyxvSkFBb0JDLFVBQXBCO0FBQ0Q7OztxQ0FFZUMsSSxFQUFNO0FBQ3BCLHNCQUFNQyxXQUFXRCxLQUFLRSxPQUFMLEVBQWpCO0FBQUEsc0JBQ01DLGNBQWNILEtBQUtJLGNBQUwsRUFEcEI7QUFBQSxzQkFFTUMsdUJBQXVCVCxpQ0FBaUNLLFFBQWpDLENBRjdCO0FBQUEsc0JBR01LLE9BQU9ELG9CQUhiO0FBQUEsc0JBR29DO0FBQzlCRSxvQ0FBa0JkLGdCQUp4QjtBQUFBLHNCQUkwQztBQUNwQ2UscUNBQW1CLElBQUlYLGdCQUFKLENBQXFCUyxJQUFyQixFQUEyQkgsV0FBM0IsRUFBd0NJLGVBQXhDLENBTHpCOztBQU9BLHlCQUFPQyxnQkFBUDtBQUNEOzs7O0VBaEI0QmIsSTs7QUFtQi9CYyxPQUFPQyxPQUFQLEdBQWlCYixnQkFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBOb25SZWN1cnNpdmVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ub25SZWN1cnNpdmUnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICAgIHsgbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBOb25SZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGFkZE5vblJlY3Vyc2l2ZURlZmluaXRpb24obm9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBub25SZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICBzdXBlci5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IE5vblJlY3Vyc2l2ZU5vZGUsIC8vL1xuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGUgPSBuZXcgTm9uUmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBub25SZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uUmVjdXJzaXZlUnVsZTtcbiJdfQ==