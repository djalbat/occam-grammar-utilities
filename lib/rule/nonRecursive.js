'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var NonRecursiveNode = require('../node/nonRecursive'),
    ruleNameUtilities = require('../utilities/ruleName');

var Rule = parsers.Rule,
    arrayUtilities = necessary.arrayUtilities,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsIk5vblJlY3Vyc2l2ZU5vZGUiLCJydWxlTmFtZVV0aWxpdGllcyIsIlJ1bGUiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIk5vblJlY3Vyc2l2ZVJ1bGUiLCJub25SZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVOYW1lcyIsImxhc3RSdWxlTmFtZSIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJub25SZWN1cnNpdmVSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsbUJBQW1CRixRQUFRLHNCQUFSLENBQXpCO0FBQUEsSUFDTUcsb0JBQW9CSCxRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVJLElBQUYsR0FBV0wsT0FBWCxDQUFFSyxJQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkosU0FEckIsQ0FDRUksY0FERjtBQUFBLElBRUVDLElBRkYsR0FFV0QsY0FGWCxDQUVFQyxJQUZGO0FBQUEsSUFHRUMsZ0NBSEYsR0FHdUNKLGlCQUh2QyxDQUdFSSxnQ0FIRjs7SUFLQUMsZ0I7Ozs7Ozs7Ozs7O29FQUMyQ0MsdUIsRUFBeUJDLFMsRUFBVztBQUNqRixzQkFBTUMsZUFBZUwsS0FBS0ksU0FBTCxDQUFyQjtBQUFBLHNCQUNNRSxXQUFXRCxZQURqQjtBQUFBLHNCQUNnQztBQUMxQkUsZ0NBQWNKLHVCQUZwQjtBQUFBLHNCQUU4QztBQUN4Q0sseUNBQXVCUCxpQ0FBaUNLLFFBQWpDLENBSDdCO0FBQUEsc0JBSU1HLE9BQU9ELG9CQUpiO0FBQUEsc0JBSW9DO0FBQzlCRSxvQ0FBa0JkLGdCQUx4QjtBQUFBLHNCQUswQztBQUNwQ2UscUNBQW1CLElBQUlULGdCQUFKLENBQXFCTyxJQUFyQixFQUEyQkYsV0FBM0IsRUFBd0NHLGVBQXhDLENBTnpCOztBQVFBLHlCQUFPQyxnQkFBUDtBQUNEOzs7O0VBWDRCYixJOztBQWMvQmMsT0FBT0MsT0FBUCxHQUFpQlgsZ0JBQWpCIiwiZmlsZSI6Im5vblJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBOb25SZWN1cnNpdmVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ub25SZWN1cnNpdmUnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgTm9uUmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vblJlY3Vyc2l2ZURlZmluaXRpb25zQW5kUnVsZU5hbWVzKG5vblJlY3Vyc2l2ZURlZmluaXRpb25zLCBydWxlTmFtZXMpIHtcbiAgICBjb25zdCBsYXN0UnVsZU5hbWUgPSBsYXN0KHJ1bGVOYW1lcyksXG4gICAgICAgICAgcnVsZU5hbWUgPSBsYXN0UnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IG5vblJlY3Vyc2l2ZURlZmluaXRpb25zLCAgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gTm9uUmVjdXJzaXZlTm9kZSwgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZSA9IG5ldyBOb25SZWN1cnNpdmVSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vblJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25SZWN1cnNpdmVSdWxlO1xuIl19