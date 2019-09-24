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
    key: 'fromReducedRuleNameAndRule',
    value: function fromReducedRuleNameAndRule(reducedRuleName, rule) {
      var reducedRule = null;

      var definitions = rule.getDefinitions(),
          definitionsLength = definitions.length;

      if (definitionsLength > 0) {
        var name = reducedRuleName,
            ///
        NonTerminalNode = ReducedNode; ///

        reducedRule = new ReducedRule(name, definitions, NonTerminalNode);
      }

      return reducedRule;
    }
  }]);

  return ReducedRule;
}(Rule);

module.exports = ReducedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJSZWR1Y2VkTm9kZSIsIlJ1bGUiLCJSZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlTmFtZSIsInJ1bGUiLCJyZWR1Y2VkUnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxjQUFjRCxRQUFRLGlCQUFSLENBQXBCOztJQUVRRSxJLEdBQVNILE8sQ0FBVEcsSTs7SUFFRkMsVzs7Ozs7Ozs7Ozs7K0NBQzhCQyxlLEVBQWlCQyxJLEVBQU07QUFDdkQsVUFBSUMsY0FBYyxJQUFsQjs7QUFFQSxVQUFNQyxjQUFjRixLQUFLRyxjQUFMLEVBQXBCO0FBQUEsVUFDTUMsb0JBQW9CRixZQUFZRyxNQUR0Qzs7QUFHQSxVQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBTUUsT0FBT1AsZUFBYjtBQUFBLFlBQStCO0FBQ3pCUSwwQkFBa0JYLFdBRHhCLENBRHlCLENBRVc7O0FBRXBDSyxzQkFBYyxJQUFJSCxXQUFKLENBQWdCUSxJQUFoQixFQUFzQkosV0FBdEIsRUFBbUNLLGVBQW5DLENBQWQ7QUFDRDs7QUFFRCxhQUFPTixXQUFQO0FBQ0Q7Ozs7RUFmdUJKLEk7O0FBa0IxQlcsT0FBT0MsT0FBUCxHQUFpQlgsV0FBakIiLCJmaWxlIjoicmVkdWNlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgUmVkdWNlZE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3JlZHVjZWQnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzO1xuXG5jbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJlZHVjZWRSdWxlTmFtZUFuZFJ1bGUocmVkdWNlZFJ1bGVOYW1lLCBydWxlKSB7XG4gICAgbGV0IHJlZHVjZWRSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGU7Ly8vXG5cbiAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHVjZWRSdWxlO1xuIl19