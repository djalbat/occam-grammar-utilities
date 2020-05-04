"use strict";

var _occamParsers = require("occam-parsers");

var _parts = require("../utilities/parts");

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

var RepeatedDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RepeatedDefinition, _Definition);

  var _super = _createSuper(RepeatedDefinition);

  function RepeatedDefinition() {
    _classCallCheck(this, RepeatedDefinition);

    return _super.apply(this, arguments);
  }

  _createClass(RepeatedDefinition, null, [{
    key: "fromDefinition",
    value: function fromDefinition(definition) {
      var parts = definition.getParts();
      parts = (0, _parts.cloneParts)(parts); ///

      parts.shift(); ///

      var repeatedDefinition = new RepeatedDefinition(parts);
      return repeatedDefinition;
    }
  }]);

  return RepeatedDefinition;
}(_occamParsers.Definition);

module.exports = RepeatedDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGVhdGVkLmpzIl0sIm5hbWVzIjpbIlJlcGVhdGVkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwic2hpZnQiLCJyZXBlYXRlZERlZmluaXRpb24iLCJEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxrQjs7Ozs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUNoQyxVQUFJQyxLQUFLLEdBQUdELFVBQVUsQ0FBQ0UsUUFBWCxFQUFaO0FBRUFELE1BQUFBLEtBQUssR0FBRyx1QkFBV0EsS0FBWCxDQUFSLENBSGdDLENBR0o7O0FBRTVCQSxNQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FMZ0MsQ0FLaEI7O0FBRWhCLFVBQU1DLGtCQUFrQixHQUFHLElBQUlMLGtCQUFKLENBQXVCRSxLQUF2QixDQUEzQjtBQUVBLGFBQU9HLGtCQUFQO0FBQ0Q7Ozs7RUFYOEJDLHdCOztBQWNqQ0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixrQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5cbmNsYXNzIFJlcGVhdGVkRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIHBhcnRzLnNoaWZ0KCk7ICAvLy9cblxuICAgIGNvbnN0IHJlcGVhdGVkRGVmaW5pdGlvbiA9IG5ldyBSZXBlYXRlZERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlcGVhdGVkRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcGVhdGVkRGVmaW5pdGlvbjtcbiJdfQ==