"use strict";

var _occamParsers = require("occam-parsers");

var _part = require("../utilities/part");

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

var RuleNameDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RuleNameDefinition, _Definition);

  var _super = _createSuper(RuleNameDefinition);

  function RuleNameDefinition() {
    _classCallCheck(this, RuleNameDefinition);

    return _super.apply(this, arguments);
  }

  _createClass(RuleNameDefinition, null, [{
    key: "fromRuleName",
    value: function fromRuleName(ruleName) {
      var ruleNamePart = (0, _part.ruleNamePartFromRuleName)(ruleName),
          parts = [ruleNamePart],
          ruleNameDefinition = new RuleNameDefinition(parts);
      return ruleNameDefinition;
    }
  }]);

  return RuleNameDefinition;
}(_occamParsers.Definition);

module.exports = RuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0IiwicGFydHMiLCJydWxlTmFtZURlZmluaXRpb24iLCJEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxrQjs7Ozs7Ozs7Ozs7OztpQ0FDZ0JDLFEsRUFBVTtBQUM1QixVQUFNQyxZQUFZLEdBQUcsb0NBQXlCRCxRQUF6QixDQUFyQjtBQUFBLFVBQ01FLEtBQUssR0FBRyxDQUNORCxZQURNLENBRGQ7QUFBQSxVQUlNRSxrQkFBa0IsR0FBRyxJQUFJSixrQkFBSixDQUF1QkcsS0FBdkIsQ0FKM0I7QUFNQSxhQUFPQyxrQkFBUDtBQUNEOzs7O0VBVDhCQyx3Qjs7QUFZakNDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsa0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY2xhc3MgUnVsZU5hbWVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBydWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlTmFtZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZURlZmluaXRpb247XG4iXX0=