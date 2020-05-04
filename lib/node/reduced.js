"use strict";

var _occamParsers = require("occam-parsers");

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

var ReducedNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(ReducedNode, _NonTerminalNode);

  var _super = _createSuper(ReducedNode);

  function ReducedNode() {
    _classCallCheck(this, ReducedNode);

    return _super.apply(this, arguments);
  }

  _createClass(ReducedNode, null, [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _occamParsers.NonTerminalNode.fromRuleNameAndChildNodes(ReducedNode, ruleName, childNodes);
    }
  }]);

  return ReducedNode;
}(_occamParsers.NonTerminalNode);

module.exports = ReducedNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZWQuanMiXSwibmFtZXMiOlsiUmVkdWNlZE5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJOb25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7Ozs7Ozs7Ozs7OzhDQUM2QkMsUSxFQUFVQyxVLEVBQVk7QUFBRSxhQUFPQyw4QkFBZ0JDLHlCQUFoQixDQUEwQ0osV0FBMUMsRUFBdURDLFFBQXZELEVBQWlFQyxVQUFqRSxDQUFQO0FBQXNGOzs7O0VBRHZIQyw2Qjs7QUFJMUJFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sV0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY2xhc3MgUmVkdWNlZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUmVkdWNlZE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHVjZWROb2RlO1xuIl19