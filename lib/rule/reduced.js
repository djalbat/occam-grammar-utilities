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

  _createClass(ReducedRule, [{
    key: 'isEmpty',
    value: function isEmpty() {
      var definitionsLength = this.definitions.length,
          empty = definitionsLength === 0;

      return empty;
    }
  }], [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJSZWR1Y2VkTm9kZSIsIlJ1bGUiLCJSZWR1Y2VkUnVsZSIsImRlZmluaXRpb25zTGVuZ3RoIiwiZGVmaW5pdGlvbnMiLCJsZW5ndGgiLCJlbXB0eSIsInJlZHVjZWRSdWxlTmFtZSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJyZWR1Y2VkUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGNBQWNELFFBQVEsaUJBQVIsQ0FBcEI7O0lBRVFFLEksR0FBU0gsTyxDQUFURyxJOztJQUVGQyxXOzs7Ozs7Ozs7Ozs4QkFDTTtBQUNSLFVBQU1DLG9CQUFvQixLQUFLQyxXQUFMLENBQWlCQyxNQUEzQztBQUFBLFVBQ01DLFFBQVNILHNCQUFzQixDQURyQzs7QUFHQSxhQUFPRyxLQUFQO0FBQ0Q7OztzREFFd0NDLGUsRUFBaUJILFcsRUFBYTtBQUNyRSxVQUFNSSxPQUFPRCxlQUFiO0FBQUEsVUFBK0I7QUFDekJFLHdCQUFrQlQsV0FEeEI7QUFBQSxVQUNvQztBQUM5QlUsb0JBQWMsSUFBSVIsV0FBSixDQUFnQk0sSUFBaEIsRUFBc0JKLFdBQXRCLEVBQW1DSyxlQUFuQyxDQUZwQjs7QUFJQSxhQUFPQyxXQUFQO0FBQ0Q7Ozs7RUFkdUJULEk7O0FBaUIxQlUsT0FBT0MsT0FBUCxHQUFpQlYsV0FBakIiLCJmaWxlIjoicmVkdWNlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgUmVkdWNlZE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3JlZHVjZWQnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzO1xuXG5jbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VkUnVsZU5hbWVBbmREZWZpbml0aW9ucyhyZWR1Y2VkUnVsZU5hbWUsIGRlZmluaXRpb25zKSB7XG4gICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdWNlZFJ1bGU7XG4iXX0=