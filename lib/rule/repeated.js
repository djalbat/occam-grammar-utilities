"use strict";

var _occamParsers = require("occam-parsers");

var _repeated = _interopRequireDefault(require("../node/repeated"));

var _ruleName = require("../utilities/ruleName");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
          repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(ruleName),
          name = repeatedRuleName,
          ///
      definitions = [],
          NonTerminalNode = _repeated["default"],
          ///
      repeatedRule = new RepeatedRule(name, definitions, NonTerminalNode);
      return repeatedRule;
    }
  }]);

  return RepeatedRule;
}(_occamParsers.Rule);

module.exports = RepeatedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGVhdGVkLmpzIl0sIm5hbWVzIjpbIlJlcGVhdGVkUnVsZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiUmVwZWF0ZWROb2RlIiwicmVwZWF0ZWRSdWxlIiwiUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7Ozs7Ozs7Ozs7OzZCQUNZQyxJLEVBQU07QUFDcEIsVUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE9BQUwsRUFBakI7QUFBQSxVQUNNQyxnQkFBZ0IsR0FBRyw0Q0FBNkJGLFFBQTdCLENBRHpCO0FBQUEsVUFFTUcsSUFBSSxHQUFHRCxnQkFGYjtBQUFBLFVBRWdDO0FBQzFCRSxNQUFBQSxXQUFXLEdBQUcsRUFIcEI7QUFBQSxVQUlNQyxlQUFlLEdBQUdDLG9CQUp4QjtBQUFBLFVBSXNDO0FBQ2hDQyxNQUFBQSxZQUFZLEdBQUcsSUFBSVQsWUFBSixDQUFpQkssSUFBakIsRUFBdUJDLFdBQXZCLEVBQW9DQyxlQUFwQyxDQUxyQjtBQU9BLGFBQU9FLFlBQVA7QUFDRDs7OztFQVZ3QkMsa0I7O0FBYTNCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJaLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkXCI7XG5cbmltcG9ydCB7IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNsYXNzIFJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZXBlYXRlZE5vZGUsIC8vL1xuICAgICAgICAgIHJlcGVhdGVkUnVsZSA9IG5ldyBSZXBlYXRlZFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVwZWF0ZWRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVwZWF0ZWRSdWxlO1xuIl19