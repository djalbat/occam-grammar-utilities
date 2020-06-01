"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamParsers = require("occam-parsers");

var _rule = require("../utilities/rule");

var _types = require("../types");

var _definition = require("../utilities/definition");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RecursiveDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RecursiveDefinition, _Definition);

  var _super = _createSuper(RecursiveDefinition);

  function RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames) {
    var _this;

    _classCallCheck(this, RecursiveDefinition);

    _this = _super.call(this, parts);
    _this.type = type;
    _this.ruleName = ruleName;
    _this.definition = definition;
    _this.recursiveRuleNames = recursiveRuleNames;
    return _this;
  }

  _createClass(RecursiveDefinition, [{
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "getRuleName",
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: "getDefinition",
    value: function getDefinition() {
      return this.definition;
    }
  }, {
    key: "getRecursiveRuleNames",
    value: function getRecursiveRuleNames() {
      return this.recursiveRuleNames;
    }
  }, {
    key: "replace",
    value: function replace(rules) {
      var rule = (0, _rule.findRule)(this.ruleName, rules),
          replacedDefinition = this.definition,
          ///
      replacementDefinition = this; ///

      rule.replaceDefinition(replacedDefinition, replacementDefinition);
    }
  }], [{
    key: "fromRuleNameAndDefinition",
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var recursiveDefinition = null;
      var type = _types.RECURSIVE_TYPE,
          parts = definition.getParts(),
          recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = recursiveRuleNamesLength > 0;

      if (definitionRecursiveDefinition) {
        recursiveDefinition = new RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}(_occamParsers.Definition);

exports["default"] = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJSZWN1cnNpdmVEZWZpbml0aW9uIiwidHlwZSIsInBhcnRzIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZXMiLCJydWxlIiwicmVwbGFjZWREZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiUkVDVVJTSVZFX1RZUEUiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxtQjs7Ozs7QUFDbkIsK0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQ0MsVUFBbkMsRUFBK0NDLGtCQUEvQyxFQUFtRTtBQUFBOztBQUFBOztBQUNqRSw4QkFBTUgsS0FBTjtBQUVBLFVBQUtELElBQUwsR0FBWUEsSUFBWjtBQUVBLFVBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCO0FBRUEsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFFQSxVQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBVGlFO0FBVWxFOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLSixJQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0UsUUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtDLGtCQUFaO0FBQ0Q7Ozs0QkFFT0MsSyxFQUFPO0FBQ2IsVUFBTUMsSUFBSSxHQUFHLG9CQUFTLEtBQUtKLFFBQWQsRUFBd0JHLEtBQXhCLENBQWI7QUFBQSxVQUNNRSxrQkFBa0IsR0FBRyxLQUFLSixVQURoQztBQUFBLFVBQzRDO0FBQ3RDSyxNQUFBQSxxQkFBcUIsR0FBRyxJQUY5QixDQURhLENBR3VCOztBQUVwQ0YsTUFBQUEsSUFBSSxDQUFDRyxpQkFBTCxDQUF1QkYsa0JBQXZCLEVBQTJDQyxxQkFBM0M7QUFDRDs7OzhDQUVnQ04sUSxFQUFVQyxVLEVBQVk7QUFDckQsVUFBSU8sbUJBQW1CLEdBQUcsSUFBMUI7QUFFQSxVQUFNVixJQUFJLEdBQUdXLHFCQUFiO0FBQUEsVUFDTVYsS0FBSyxHQUFHRSxVQUFVLENBQUNTLFFBQVgsRUFEZDtBQUFBLFVBRU1SLGtCQUFrQixHQUFHLGtEQUFpQ0QsVUFBakMsQ0FGM0I7QUFBQSxVQUdNVSx3QkFBd0IsR0FBR1Qsa0JBQWtCLENBQUNVLE1BSHBEO0FBQUEsVUFJTUMsNkJBQTZCLEdBQUlGLHdCQUF3QixHQUFHLENBSmxFOztBQU1BLFVBQUlFLDZCQUFKLEVBQW1DO0FBQ2pDTCxRQUFBQSxtQkFBbUIsR0FBRyxJQUFJWCxtQkFBSixDQUF3QkMsSUFBeEIsRUFBOEJDLEtBQTlCLEVBQXFDQyxRQUFyQyxFQUErQ0MsVUFBL0MsRUFBMkRDLGtCQUEzRCxDQUF0QjtBQUNEOztBQUVELGFBQU9NLG1CQUFQO0FBQ0Q7Ozs7RUFuRDhDTSx3QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgZmluZFJ1bGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IFJFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG5cbiAgICB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHJlcGxhY2UocnVsZXMpIHtcbiAgICBjb25zdCBydWxlID0gZmluZFJ1bGUodGhpcy5ydWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdGhpczsgLy8vXG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IFJFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiJdfQ==