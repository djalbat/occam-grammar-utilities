'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ruleNameUtilities = require('../utilities/ruleName'),
    RuleNameDefinition = require('../definition/ruleName'),
    PlaceHolderDefinition = require('../definition/placeHolder');

var Rule = parsers.Rule,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName;

var RewrittenRule = function (_Rule) {
  _inherits(RewrittenRule, _Rule);

  function RewrittenRule() {
    _classCallCheck(this, RewrittenRule);

    return _possibleConstructorReturn(this, (RewrittenRule.__proto__ || Object.getPrototypeOf(RewrittenRule)).apply(this, arguments));
  }

  _createClass(RewrittenRule, null, [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var definitions = rule.getDefinitions();

      var ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName),
          placeHolderDefinitions = definitions.filter(function (definition) {
        var definitionPlaceHolderDefinition = definition instanceof PlaceHolderDefinition;

        if (definitionPlaceHolderDefinition) {
          return true;
        }
      });

      definitions = [].concat(_toConsumableArray(placeHolderDefinitions), [reducedRuleNameDefinition]);

      var name = ruleName,
          ///
      NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, definitions, NonTerminalNode);

      return rewrittenRule;
    }
  }]);

  return RewrittenRule;
}(Rule);

module.exports = RewrittenRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiUGxhY2VIb2xkZXJEZWZpbml0aW9uIiwiUnVsZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIlJld3JpdHRlblJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJwbGFjZUhvbGRlckRlZmluaXRpb25zIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25QbGFjZUhvbGRlckRlZmluaXRpb24iLCJuYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicmV3cml0dGVuUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsb0JBQW9CRCxRQUFRLHVCQUFSLENBQTFCO0FBQUEsSUFDTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUcsd0JBQXdCSCxRQUFRLDJCQUFSLENBRjlCOztBQUlNLElBQUVJLElBQUYsR0FBV0wsT0FBWCxDQUFFSyxJQUFGO0FBQUEsSUFDRUMsMkJBREYsR0FDa0NKLGlCQURsQyxDQUNFSSwyQkFERjs7SUFHQUMsYTs7Ozs7Ozs7Ozs7NkJBQ1lDLEksRUFBTTtBQUNwQixVQUFJQyxjQUFjRCxLQUFLRSxjQUFMLEVBQWxCOztBQUVBLFVBQU1DLFdBQVdILEtBQUtJLE9BQUwsRUFBakI7QUFBQSxVQUNNQyxrQkFBa0JQLDRCQUE0QkssUUFBNUIsQ0FEeEI7QUFBQSxVQUVNRyw0QkFBNEJYLG1CQUFtQlksWUFBbkIsQ0FBZ0NGLGVBQWhDLENBRmxDO0FBQUEsVUFHTUcseUJBQXlCUCxZQUFZUSxNQUFaLENBQW1CLFVBQUNDLFVBQUQsRUFBZ0I7QUFDMUQsWUFBTUMsa0NBQW1DRCxzQkFBc0JkLHFCQUEvRDs7QUFFQSxZQUFJZSwrQkFBSixFQUFxQztBQUNuQyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU53QixDQUgvQjs7QUFXQVYsaURBQ0tPLHNCQURMLElBRUVGLHlCQUZGOztBQUtBLFVBQU1NLE9BQU9ULFFBQWI7QUFBQSxVQUF3QjtBQUNsQlUsd0JBQWtCYixLQUFLYyxrQkFBTCxFQUR4QjtBQUFBLFVBRU1DLGdCQUFnQixJQUFJaEIsYUFBSixDQUFrQmEsSUFBbEIsRUFBd0JYLFdBQXhCLEVBQXFDWSxlQUFyQyxDQUZ0Qjs7QUFJQSxhQUFPRSxhQUFQO0FBQ0Q7Ozs7RUF6QnlCbEIsSTs7QUE0QjVCbUIsT0FBT0MsT0FBUCxHQUFpQmxCLGFBQWpCIiwiZmlsZSI6InJld3JpdHRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKSxcbiAgICAgIFJ1bGVOYW1lRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcnVsZU5hbWUnKSxcbiAgICAgIFBsYWNlSG9sZGVyRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcGxhY2VIb2xkZXInKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBSZXdyaXR0ZW5SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcGxhY2VIb2xkZXJEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblBsYWNlSG9sZGVyRGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgUGxhY2VIb2xkZXJEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25QbGFjZUhvbGRlckRlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgIC4uLnBsYWNlSG9sZGVyRGVmaW5pdGlvbnMsXG4gICAgICByZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uXG4gICAgXTtcblxuICAgIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmV3cml0dGVuUnVsZSA9IG5ldyBSZXdyaXR0ZW5SdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXdyaXR0ZW5SdWxlO1xuIl19