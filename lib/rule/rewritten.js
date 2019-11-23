'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ruleNameUtilities = require('../utilities/ruleName'),
    RuleNameDefinition = require('../definition/ruleName'),
    LeftRecursiveDefinition = require('../definition/leftRecursive');

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
          leftRecursiveDefinitions = definitions.filter(function (definition) {
        var definitionLeftRecursiveDefinition = definition instanceof LeftRecursiveDefinition;

        if (definitionLeftRecursiveDefinition) {
          return true;
        }
      });

      definitions = [].concat(_toConsumableArray(leftRecursiveDefinitions), [reducedRuleNameDefinition]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiUmV3cml0dGVuUnVsZSIsInJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJuYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicmV3cml0dGVuUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsb0JBQW9CRCxRQUFRLHVCQUFSLENBQTFCO0FBQUEsSUFDTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUcsMEJBQTBCSCxRQUFRLDZCQUFSLENBRmhDOztBQUlNLElBQUVJLElBQUYsR0FBV0wsT0FBWCxDQUFFSyxJQUFGO0FBQUEsSUFDRUMsMkJBREYsR0FDa0NKLGlCQURsQyxDQUNFSSwyQkFERjs7SUFHQUMsYTs7Ozs7Ozs7Ozs7NkJBQ1lDLEksRUFBTTtBQUNwQixVQUFJQyxjQUFjRCxLQUFLRSxjQUFMLEVBQWxCOztBQUVBLFVBQU1DLFdBQVdILEtBQUtJLE9BQUwsRUFBakI7QUFBQSxVQUNNQyxrQkFBa0JQLDRCQUE0QkssUUFBNUIsQ0FEeEI7QUFBQSxVQUVNRyw0QkFBNEJYLG1CQUFtQlksWUFBbkIsQ0FBZ0NGLGVBQWhDLENBRmxDO0FBQUEsVUFHTUcsMkJBQTJCUCxZQUFZUSxNQUFaLENBQW1CLFVBQUNDLFVBQUQsRUFBZ0I7QUFDNUQsWUFBTUMsb0NBQXFDRCxzQkFBc0JkLHVCQUFqRTs7QUFFQSxZQUFJZSxpQ0FBSixFQUF1QztBQUNyQyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU4wQixDQUhqQzs7QUFXQVYsaURBQ0tPLHdCQURMLElBRUVGLHlCQUZGOztBQUtBLFVBQU1NLE9BQU9ULFFBQWI7QUFBQSxVQUF3QjtBQUNsQlUsd0JBQWtCYixLQUFLYyxrQkFBTCxFQUR4QjtBQUFBLFVBRU1DLGdCQUFnQixJQUFJaEIsYUFBSixDQUFrQmEsSUFBbEIsRUFBd0JYLFdBQXhCLEVBQXFDWSxlQUFyQyxDQUZ0Qjs7QUFJQSxhQUFPRSxhQUFQO0FBQ0Q7Ozs7RUF6QnlCbEIsSTs7QUE0QjVCbUIsT0FBT0MsT0FBUCxHQUFpQmxCLGFBQWpCIiwiZmlsZSI6InJld3JpdHRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKSxcbiAgICAgIFJ1bGVOYW1lRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcnVsZU5hbWUnKSxcbiAgICAgIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICAgIHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmV3cml0dGVuUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgIC4uLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyxcbiAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb25cbiAgICBdO1xuXG4gICAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gbmV3IFJld3JpdHRlblJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJld3JpdHRlblJ1bGU7XG4iXX0=