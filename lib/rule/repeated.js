'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var parsers = require('occam-parsers');

var RepeatedNode = require('../node/repeated'),
    ruleNameUtilities = require('../utilities/ruleName');

var Rule = parsers.Rule,
    repeatedRuleNameFromRuleName = ruleNameUtilities.repeatedRuleNameFromRuleName;

var RepeatedRule = /*#__PURE__*/function (_Rule) {
  _inherits(RepeatedRule, _Rule);

  function RepeatedRule() {
    _classCallCheck(this, RepeatedRule);

    return _possibleConstructorReturn(this, _getPrototypeOf(RepeatedRule).apply(this, arguments));
  }

  _createClass(RepeatedRule, null, [{
    key: "fromRule",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGVhdGVkLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUmVwZWF0ZWROb2RlIiwicnVsZU5hbWVVdGlsaXRpZXMiLCJSdWxlIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIlJlcGVhdGVkUnVsZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwicmVwZWF0ZWRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUF2Qjs7QUFFQSxJQUFNQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxrQkFBRCxDQUE1QjtBQUFBLElBQ01FLGlCQUFpQixHQUFHRixPQUFPLENBQUMsdUJBQUQsQ0FEakM7O0FBR00sSUFBRUcsSUFBRixHQUFXSixPQUFYLENBQUVJLElBQUY7QUFBQSxJQUNFQyw0QkFERixHQUNtQ0YsaUJBRG5DLENBQ0VFLDRCQURGOztJQUdBQyxZOzs7Ozs7Ozs7Ozs2QkFDWUMsSSxFQUFNO0FBQ3BCLFVBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFMLEVBQWpCO0FBQUEsVUFDTUMsZ0JBQWdCLEdBQUdMLDRCQUE0QixDQUFDRyxRQUFELENBRHJEO0FBQUEsVUFFTUcsSUFBSSxHQUFHRCxnQkFGYjtBQUFBLFVBRWdDO0FBQzFCRSxNQUFBQSxXQUFXLEdBQUcsRUFIcEI7QUFBQSxVQUlNQyxlQUFlLEdBQUdYLFlBSnhCO0FBQUEsVUFJc0M7QUFDaENZLE1BQUFBLFlBQVksR0FBRyxJQUFJUixZQUFKLENBQWlCSyxJQUFqQixFQUF1QkMsV0FBdkIsRUFBb0NDLGVBQXBDLENBTHJCO0FBT0EsYUFBT0MsWUFBUDtBQUNEOzs7O0VBVndCVixJOztBQWEzQlcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgUmVwZWF0ZWROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZXBlYXRlZCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IHJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlcGVhdGVkTm9kZSwgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlID0gbmV3IFJlcGVhdGVkUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZXBlYXRlZFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXBlYXRlZFJ1bGU7XG4iXX0=