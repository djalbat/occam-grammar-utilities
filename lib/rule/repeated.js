'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var RepeatedNode = require('../node/repeated'),
    ruleNameUtilities = require('../utilities/ruleName');

var Rule = parsers.Rule,
    repeatedRuleNameFromRuleName = ruleNameUtilities.repeatedRuleNameFromRuleName;

var RepeatedRule = function (_Rule) {
      _inherits(RepeatedRule, _Rule);

      function RepeatedRule() {
            _classCallCheck(this, RepeatedRule);

            return _possibleConstructorReturn(this, (RepeatedRule.__proto__ || Object.getPrototypeOf(RepeatedRule)).apply(this, arguments));
      }

      _createClass(RepeatedRule, null, [{
            key: 'fromRule',
            value: function fromRule(rule) {
                  var ruleName = rule.getName(),
                      repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
                      name = repeatedRuleName,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlcGVhdGVkLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUmVwZWF0ZWROb2RlIiwicnVsZU5hbWVVdGlsaXRpZXMiLCJSdWxlIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIlJlcGVhdGVkUnVsZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwicmVwZWF0ZWRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZUFBZUQsUUFBUSxrQkFBUixDQUFyQjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjs7QUFHTSxJQUFFRyxJQUFGLEdBQVdKLE9BQVgsQ0FBRUksSUFBRjtBQUFBLElBQ0VDLDRCQURGLEdBQ21DRixpQkFEbkMsQ0FDRUUsNEJBREY7O0lBR0FDLFk7Ozs7Ozs7Ozs7O3FDQUNZQyxJLEVBQU07QUFDcEIsc0JBQU1DLFdBQVdELEtBQUtFLE9BQUwsRUFBakI7QUFBQSxzQkFDTUMsbUJBQW1CTCw2QkFBNkJHLFFBQTdCLENBRHpCO0FBQUEsc0JBRU1HLE9BQU9ELGdCQUZiO0FBQUEsc0JBRWdDO0FBQzFCRSxnQ0FBYyxFQUhwQjtBQUFBLHNCQUlNQyxrQkFBa0JYLFlBSnhCO0FBQUEsc0JBSXNDO0FBQ2hDWSxpQ0FBZSxJQUFJUixZQUFKLENBQWlCSyxJQUFqQixFQUF1QkMsV0FBdkIsRUFBb0NDLGVBQXBDLENBTHJCOztBQU9BLHlCQUFPQyxZQUFQO0FBQ0Q7Ozs7RUFWd0JWLEk7O0FBYTNCVyxPQUFPQyxPQUFQLEdBQWlCVixZQUFqQiIsImZpbGUiOiJyZXBlYXRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgUmVwZWF0ZWROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZXBlYXRlZCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IHJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlcGVhdGVkTm9kZSwgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlID0gbmV3IFJlcGVhdGVkUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZXBlYXRlZFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXBlYXRlZFJ1bGU7XG4iXX0=