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

var partUtilities = require('../utilities/part');

var Definition = parsers.Definition,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName;

var RuleNameDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RuleNameDefinition, _Definition);

  function RuleNameDefinition() {
    _classCallCheck(this, RuleNameDefinition);

    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameDefinition).apply(this, arguments));
  }

  _createClass(RuleNameDefinition, null, [{
    key: "fromRuleName",
    value: function fromRuleName(ruleName) {
      var ruleNamePart = ruleNamePartFromRuleName(ruleName),
          parts = [ruleNamePart],
          ruleNameDefinition = new RuleNameDefinition(parts);
      return ruleNameDefinition;
    }
  }]);

  return RuleNameDefinition;
}(Definition);

module.exports = RuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJSdWxlTmFtZURlZmluaXRpb24iLCJydWxlTmFtZSIsInJ1bGVOYW1lUGFydCIsInBhcnRzIiwicnVsZU5hbWVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUF2Qjs7QUFFQSxJQUFNQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxtQkFBRCxDQUE3Qjs7QUFFTSxJQUFFRSxVQUFGLEdBQWlCSCxPQUFqQixDQUFFRyxVQUFGO0FBQUEsSUFDRUMsd0JBREYsR0FDK0JGLGFBRC9CLENBQ0VFLHdCQURGOztJQUdBQyxrQjs7Ozs7Ozs7Ozs7aUNBQ2dCQyxRLEVBQVU7QUFDNUIsVUFBTUMsWUFBWSxHQUFHSCx3QkFBd0IsQ0FBQ0UsUUFBRCxDQUE3QztBQUFBLFVBQ01FLEtBQUssR0FBRyxDQUNORCxZQURNLENBRGQ7QUFBQSxVQUlNRSxrQkFBa0IsR0FBRyxJQUFJSixrQkFBSixDQUF1QkcsS0FBdkIsQ0FKM0I7QUFNQSxhQUFPQyxrQkFBUDtBQUNEOzs7O0VBVDhCTixVOztBQVlqQ08sTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixrQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcztcblxuY2xhc3MgUnVsZU5hbWVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBydWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlTmFtZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZURlZmluaXRpb247XG4iXX0=