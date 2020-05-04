"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var parsers = require("occam-parsers");

var RepeatedNode = require("../node/repeated"),
    ruleNameUtilities = require("../utilities/ruleName");

var Rule = parsers.Rule,
    repeatedRuleNameFromRuleName = ruleNameUtilities.repeatedRuleNameFromRuleName;

var RepeatedRule = /*#__PURE__*/function (_Rule) {
  _inherits(RepeatedRule, _Rule);

  var _super = _createSuper(RepeatedRule);

  function RepeatedRule() {
    _classCallCheck(this, RepeatedRule);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGVhdGVkLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUmVwZWF0ZWROb2RlIiwicnVsZU5hbWVVdGlsaXRpZXMiLCJSdWxlIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIlJlcGVhdGVkUnVsZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwicmVwZWF0ZWRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBdkI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsa0JBQUQsQ0FBNUI7QUFBQSxJQUNNRSxpQkFBaUIsR0FBR0YsT0FBTyxDQUFDLHVCQUFELENBRGpDOztBQUdNLElBQUVHLElBQUYsR0FBV0osT0FBWCxDQUFFSSxJQUFGO0FBQUEsSUFDRUMsNEJBREYsR0FDbUNGLGlCQURuQyxDQUNFRSw0QkFERjs7SUFHQUMsWTs7Ozs7Ozs7Ozs7Ozs2QkFDWUMsSSxFQUFNO0FBQ3BCLFVBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFMLEVBQWpCO0FBQUEsVUFDTUMsZ0JBQWdCLEdBQUdMLDRCQUE0QixDQUFDRyxRQUFELENBRHJEO0FBQUEsVUFFTUcsSUFBSSxHQUFHRCxnQkFGYjtBQUFBLFVBRWdDO0FBQzFCRSxNQUFBQSxXQUFXLEdBQUcsRUFIcEI7QUFBQSxVQUlNQyxlQUFlLEdBQUdYLFlBSnhCO0FBQUEsVUFJc0M7QUFDaENZLE1BQUFBLFlBQVksR0FBRyxJQUFJUixZQUFKLENBQWlCSyxJQUFqQixFQUF1QkMsV0FBdkIsRUFBb0NDLGVBQXBDLENBTHJCO0FBT0EsYUFBT0MsWUFBUDtBQUNEOzs7O0VBVndCVixJOztBQWEzQlcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZShcIm9jY2FtLXBhcnNlcnNcIik7XG5cbmNvbnN0IFJlcGVhdGVkTm9kZSA9IHJlcXVpcmUoXCIuLi9ub2RlL3JlcGVhdGVkXCIpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCIpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gcmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gW10sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVwZWF0ZWROb2RlLCAvLy9cbiAgICAgICAgICByZXBlYXRlZFJ1bGUgPSBuZXcgUmVwZWF0ZWRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlcGVhdGVkUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcGVhdGVkUnVsZTtcbiJdfQ==