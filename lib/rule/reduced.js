'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ReducedNode = require('../node/reduced');

var Rule = parsers.Rule;

var ReducedRule = function (_Rule) {
  _inherits(ReducedRule, _Rule);

  function ReducedRule() {
    _classCallCheck(this, ReducedRule);

    return _possibleConstructorReturn(this, (ReducedRule.__proto__ || Object.getPrototypeOf(ReducedRule)).apply(this, arguments));
  }

  _createClass(ReducedRule, null, [{
    key: 'fromReducedRuleNameAndDefinitions',
    value: function fromReducedRuleNameAndDefinitions(reducedRuleName, definitions) {
      var name = reducedRuleName,
          ///
      NonTerminalNode = ReducedNode,
          ///
      reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

      return reducedRule;
    }
  }]);

  return ReducedRule;
}(Rule);

module.exports = ReducedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJSZWR1Y2VkTm9kZSIsIlJ1bGUiLCJSZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlTmFtZSIsImRlZmluaXRpb25zIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsInJlZHVjZWRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsY0FBY0QsUUFBUSxpQkFBUixDQUFwQjs7SUFFUUUsSSxHQUFTSCxPLENBQVRHLEk7O0lBRUZDLFc7Ozs7Ozs7Ozs7O3NEQUNxQ0MsZSxFQUFpQkMsVyxFQUFhO0FBQ3JFLFVBQU1DLE9BQU9GLGVBQWI7QUFBQSxVQUErQjtBQUN6Qkcsd0JBQWtCTixXQUR4QjtBQUFBLFVBQ3FDO0FBQy9CTyxvQkFBYyxJQUFJTCxXQUFKLENBQWdCRyxJQUFoQixFQUFzQkQsV0FBdEIsRUFBbUNFLGVBQW5DLENBRnBCOztBQUlBLGFBQU9DLFdBQVA7QUFDRDs7OztFQVB1Qk4sSTs7QUFVMUJPLE9BQU9DLE9BQVAsR0FBaUJQLFdBQWpCIiwiZmlsZSI6InJlZHVjZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IFJlZHVjZWROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZWR1Y2VkJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycztcblxuY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SZWR1Y2VkUnVsZU5hbWVBbmREZWZpbml0aW9ucyhyZWR1Y2VkUnVsZU5hbWUsIGRlZmluaXRpb25zKSB7XG4gICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLCAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHVjZWRSdWxlO1xuIl19