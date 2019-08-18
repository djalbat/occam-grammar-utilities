'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Rule = parsers.Rule;

var NonRecursiveRule = function (_Rule) {
  _inherits(NonRecursiveRule, _Rule);

  function NonRecursiveRule() {
    _classCallCheck(this, NonRecursiveRule);

    return _possibleConstructorReturn(this, (NonRecursiveRule.__proto__ || Object.getPrototypeOf(NonRecursiveRule)).apply(this, arguments));
  }

  _createClass(NonRecursiveRule, null, [{
    key: 'fromRuleAndNonRecursiveDefinitions',
    value: function fromRuleAndNonRecursiveDefinitions(rule, nonRecursiveDefinitions) {
      var nonRecursiveRuleName = nonRecursiveRuleNameFromRule(rule),
          name = nonRecursiveRuleName,
          ///
      definitions = nonRecursiveDefinitions,
          ///
      NonTerminalNone = rule.getNonTerminalNode(),
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNone);

      return nonRecursiveRule;
    }
  }]);

  return NonRecursiveRule;
}(Rule);

module.exports = NonRecursiveRule;

function nonRecursiveRuleNameFromRule(rule) {
  var ruleName = rule.getName(),
      nonRecursiveRuleName = ruleName + '_';

  return nonRecursiveRuleName;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJOb25SZWN1cnNpdmVSdWxlIiwicnVsZSIsIm5vblJlY3Vyc2l2ZURlZmluaXRpb25zIiwibm9uUmVjdXJzaXZlUnVsZU5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb25lIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibm9uUmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJydWxlTmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztJQUVRQyxJLEdBQVNGLE8sQ0FBVEUsSTs7SUFFRkMsZ0I7Ozs7Ozs7Ozs7O3VEQUNzQ0MsSSxFQUFNQyx1QixFQUF5QjtBQUN2RSxVQUFNQyx1QkFBdUJDLDZCQUE2QkgsSUFBN0IsQ0FBN0I7QUFBQSxVQUNNSSxPQUFPRixvQkFEYjtBQUFBLFVBQ29DO0FBQzlCRyxvQkFBY0osdUJBRnBCO0FBQUEsVUFFOEM7QUFDeENLLHdCQUFrQk4sS0FBS08sa0JBQUwsRUFIeEI7QUFBQSxVQUlNQyxtQkFBbUIsSUFBSVQsZ0JBQUosQ0FBcUJLLElBQXJCLEVBQTJCQyxXQUEzQixFQUF3Q0MsZUFBeEMsQ0FKekI7O0FBTUEsYUFBT0UsZ0JBQVA7QUFDRDs7OztFQVQ0QlYsSTs7QUFZL0JXLE9BQU9DLE9BQVAsR0FBaUJYLGdCQUFqQjs7QUFFQSxTQUFTSSw0QkFBVCxDQUFzQ0gsSUFBdEMsRUFBNEM7QUFDMUMsTUFBTVcsV0FBV1gsS0FBS1ksT0FBTCxFQUFqQjtBQUFBLE1BQ01WLHVCQUEwQlMsUUFBMUIsTUFETjs7QUFHQSxTQUFPVCxvQkFBUDtBQUNEIiwiZmlsZSI6Im5vblJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzO1xuXG5jbGFzcyBOb25SZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZE5vblJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIG5vblJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3Qgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlKHJ1bGUpLFxuICAgICAgICAgIG5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gbm9uUmVjdXJzaXZlRGVmaW5pdGlvbnMsICAvLy9cbiAgICAgICAgICBOb25UZXJtaW5hbE5vbmUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGUgPSBuZXcgTm9uUmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb25lKTtcblxuICAgIHJldHVybiBub25SZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uUmVjdXJzaXZlUnVsZTtcblxuZnVuY3Rpb24gbm9uUmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZShydWxlKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gYCR7cnVsZU5hbWV9X2A7XG5cbiAgcmV0dXJuIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lO1xufVxuIl19