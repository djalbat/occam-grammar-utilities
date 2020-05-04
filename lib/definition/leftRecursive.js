"use strict";

var _recursive = _interopRequireDefault(require("../definition/recursive"));

var _types = require("../types");

var _definition = require("../utilities/definition");

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

var LeftRecursiveDefinition = /*#__PURE__*/function (_RecursiveDefinition) {
  _inherits(LeftRecursiveDefinition, _RecursiveDefinition);

  var _super = _createSuper(LeftRecursiveDefinition);

  function LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    var _this;

    _classCallCheck(this, LeftRecursiveDefinition);

    _this = _super.call(this, type, parts, ruleName, definition, recursiveRuleNames);
    _this.leftRecursiveRuleNames = leftRecursiveRuleNames;
    return _this;
  }

  _createClass(LeftRecursiveDefinition, [{
    key: "getLeftRecursiveRuleNames",
    value: function getLeftRecursiveRuleNames() {
      return this.leftRecursiveRuleNames;
    }
  }, {
    key: "rewrite",
    value: function rewrite(rules) {///
    }
  }], [{
    key: "fromRuleNameAndDefinition",
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var leftRecursiveDefinition = null;
      var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;

      if (definitionLeftRecursive) {
        var type = _types.LEFT_RECURSIVE_TYPE,
            parts = definition.getParts(),
            recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
        leftRecursiveDefinition = new LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
      }

      return leftRecursiveDefinition;
    }
  }]);

  return LeftRecursiveDefinition;
}(_recursive["default"]);

module.exports = LeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0eXBlIiwicGFydHMiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsIkxFRlRfUkVDVVJTSVZFX1RZUEUiLCJnZXRQYXJ0cyIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsdUI7Ozs7O0FBQ0osbUNBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQ0MsVUFBbkMsRUFBK0NDLGtCQUEvQyxFQUFtRUMsc0JBQW5FLEVBQTJGO0FBQUE7O0FBQUE7O0FBQ3pGLDhCQUFNTCxJQUFOLEVBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCQyxVQUE3QixFQUF5Q0Msa0JBQXpDO0FBRUEsVUFBS0Msc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUh5RjtBQUkxRjs7OztnREFFMkI7QUFDMUIsYUFBTyxLQUFLQSxzQkFBWjtBQUNEOzs7NEJBRU9DLEssRUFBTyxDQUNiO0FBQ0Q7Ozs4Q0FFZ0NKLFEsRUFBVUMsVSxFQUFZO0FBQ3JELFVBQUlJLHVCQUF1QixHQUFHLElBQTlCO0FBRUEsVUFBTUYsc0JBQXNCLEdBQUcsc0RBQXFDRixVQUFyQyxDQUEvQjtBQUFBLFVBQ01LLDRCQUE0QixHQUFHSCxzQkFBc0IsQ0FBQ0ksTUFENUQ7QUFBQSxVQUVNQyx1QkFBdUIsR0FBSUYsNEJBQTRCLEdBQUcsQ0FGaEU7O0FBSUEsVUFBSUUsdUJBQUosRUFBNkI7QUFDM0IsWUFBTVYsSUFBSSxHQUFHVywwQkFBYjtBQUFBLFlBQ01WLEtBQUssR0FBR0UsVUFBVSxDQUFDUyxRQUFYLEVBRGQ7QUFBQSxZQUVNUixrQkFBa0IsR0FBRyxrREFBaUNELFVBQWpDLENBRjNCO0FBSUFJLFFBQUFBLHVCQUF1QixHQUFHLElBQUlSLHVCQUFKLENBQTRCQyxJQUE1QixFQUFrQ0MsS0FBbEMsRUFBeUNDLFFBQXpDLEVBQW1EQyxVQUFuRCxFQUErREMsa0JBQS9ELEVBQW1GQyxzQkFBbkYsQ0FBMUI7QUFDRDs7QUFFRCxhQUFPRSx1QkFBUDtBQUNEOzs7O0VBL0JtQ00scUI7O0FBa0N0Q0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEIsdUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZVwiO1xuXG5pbXBvcnQgeyBMRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHJld3JpdGUocnVsZXMpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgdHlwZSA9IExFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=