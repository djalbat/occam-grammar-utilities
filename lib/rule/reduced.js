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
    key: 'fromReducedRuleNameAndRule',
    value: function fromReducedRuleNameAndRule(reducedRuleName, rule) {
      var definitions = rule.getDefinitions(),
          name = reducedRuleName,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJSZWR1Y2VkTm9kZSIsIlJ1bGUiLCJSZWR1Y2VkUnVsZSIsImRlZmluaXRpb25zTGVuZ3RoIiwiZGVmaW5pdGlvbnMiLCJsZW5ndGgiLCJlbXB0eSIsInJlZHVjZWRSdWxlTmFtZSIsInJ1bGUiLCJnZXREZWZpbml0aW9ucyIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJyZWR1Y2VkUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGNBQWNELFFBQVEsaUJBQVIsQ0FBcEI7O0lBRVFFLEksR0FBU0gsTyxDQUFURyxJOztJQUVGQyxXOzs7Ozs7Ozs7Ozs4QkFDTTtBQUNSLFVBQU1DLG9CQUFvQixLQUFLQyxXQUFMLENBQWlCQyxNQUEzQztBQUFBLFVBQ01DLFFBQVNILHNCQUFzQixDQURyQzs7QUFHQSxhQUFPRyxLQUFQO0FBQ0Q7OzsrQ0FFaUNDLGUsRUFBaUJDLEksRUFBTTtBQUN2RCxVQUFNSixjQUFjSSxLQUFLQyxjQUFMLEVBQXBCO0FBQUEsVUFDTUMsT0FBT0gsZUFEYjtBQUFBLFVBQytCO0FBQ3pCSSx3QkFBa0JYLFdBRnhCO0FBQUEsVUFFb0M7QUFDOUJZLG9CQUFjLElBQUlWLFdBQUosQ0FBZ0JRLElBQWhCLEVBQXNCTixXQUF0QixFQUFtQ08sZUFBbkMsQ0FIcEI7O0FBS0EsYUFBT0MsV0FBUDtBQUNEOzs7O0VBZnVCWCxJOztBQWtCMUJZLE9BQU9DLE9BQVAsR0FBaUJaLFdBQWpCIiwiZmlsZSI6InJlZHVjZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IFJlZHVjZWROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZWR1Y2VkJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycztcblxuY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlZFJ1bGVOYW1lQW5kUnVsZShyZWR1Y2VkUnVsZU5hbWUsIHJ1bGUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGUsLy8vXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1Y2VkUnVsZTtcbiJdfQ==