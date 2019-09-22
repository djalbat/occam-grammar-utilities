'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var RepeatedNode = require('../node/repeated');

var Rule = parsers.Rule;

var RepeatedRule = function (_Rule) {
  _inherits(RepeatedRule, _Rule);

  function RepeatedRule() {
    _classCallCheck(this, RepeatedRule);

    return _possibleConstructorReturn(this, (RepeatedRule.__proto__ || Object.getPrototypeOf(RepeatedRule)).apply(this, arguments));
  }

  _createClass(RepeatedRule, [{
    key: 'addRepeatedDefinition',
    value: function addRepeatedDefinition(repeatedDefinition) {
      var definition = repeatedDefinition; ///

      this.addDefinition(definition);
    }
  }], [{
    key: 'fromRepeatedRuleName',
    value: function fromRepeatedRuleName(repeatedRuleName) {
      var name = repeatedRuleName,
          ///
      definitions = [],
          NonTerminalNode = RepeatedNode,
          ///
      repeatedRule = new RepeatedRule(name, definitions, NonTerminalNode);

      return repeatedRule;
    }
  }]);

  return RepeatedRule;
}(Rule);

module.exports = RepeatedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlcGVhdGVkLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUmVwZWF0ZWROb2RlIiwiUnVsZSIsIlJlcGVhdGVkUnVsZSIsInJlcGVhdGVkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwicmVwZWF0ZWRSdWxlTmFtZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsInJlcGVhdGVkUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGVBQWVELFFBQVEsa0JBQVIsQ0FBckI7O0lBRVFFLEksR0FBU0gsTyxDQUFURyxJOztJQUVGQyxZOzs7Ozs7Ozs7OzswQ0FDa0JDLGtCLEVBQW9CO0FBQ3hDLFVBQU1DLGFBQWFELGtCQUFuQixDQUR3QyxDQUNBOztBQUV4QyxXQUFLRSxhQUFMLENBQW1CRCxVQUFuQjtBQUNEOzs7eUNBRTJCRSxnQixFQUFrQjtBQUM1QyxVQUFNQyxPQUFPRCxnQkFBYjtBQUFBLFVBQWdDO0FBQzFCRSxvQkFBYyxFQURwQjtBQUFBLFVBRU1DLGtCQUFrQlQsWUFGeEI7QUFBQSxVQUVzQztBQUNoQ1UscUJBQWUsSUFBSVIsWUFBSixDQUFpQkssSUFBakIsRUFBdUJDLFdBQXZCLEVBQW9DQyxlQUFwQyxDQUhyQjs7QUFLQSxhQUFPQyxZQUFQO0FBQ0Q7Ozs7RUFkd0JULEk7O0FBaUIzQlUsT0FBT0MsT0FBUCxHQUFpQlYsWUFBakIiLCJmaWxlIjoicmVwZWF0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IFJlcGVhdGVkTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcmVwZWF0ZWQnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzO1xuXG5jbGFzcyBSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgYWRkUmVwZWF0ZWREZWZpbml0aW9uKHJlcGVhdGVkRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSByZXBlYXRlZERlZmluaXRpb247ICAvLy9cblxuICAgIHRoaXMuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVwZWF0ZWRSdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlcGVhdGVkTm9kZSwgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlID0gbmV3IFJlcGVhdGVkUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZXBlYXRlZFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXBlYXRlZFJ1bGU7XG4iXX0=