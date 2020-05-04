"use strict";

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJSZWN1cnNpdmVEZWZpbml0aW9uIiwidHlwZSIsInBhcnRzIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZXMiLCJydWxlIiwicmVwbGFjZWREZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiUkVDVVJTSVZFX1RZUEUiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsbUI7Ozs7O0FBQ0osK0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQ0MsVUFBbkMsRUFBK0NDLGtCQUEvQyxFQUFtRTtBQUFBOztBQUFBOztBQUNqRSw4QkFBTUgsS0FBTjtBQUVBLFVBQUtELElBQUwsR0FBWUEsSUFBWjtBQUVBLFVBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCO0FBRUEsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFFQSxVQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBVGlFO0FBVWxFOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLSixJQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0UsUUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtDLGtCQUFaO0FBQ0Q7Ozs0QkFFT0MsSyxFQUFPO0FBQ2IsVUFBTUMsSUFBSSxHQUFHLG9CQUFTLEtBQUtKLFFBQWQsRUFBd0JHLEtBQXhCLENBQWI7QUFBQSxVQUNNRSxrQkFBa0IsR0FBRyxLQUFLSixVQURoQztBQUFBLFVBQzRDO0FBQ3RDSyxNQUFBQSxxQkFBcUIsR0FBRyxJQUY5QixDQURhLENBR3VCOztBQUVwQ0YsTUFBQUEsSUFBSSxDQUFDRyxpQkFBTCxDQUF1QkYsa0JBQXZCLEVBQTJDQyxxQkFBM0M7QUFDRDs7OzhDQUVnQ04sUSxFQUFVQyxVLEVBQVk7QUFDckQsVUFBSU8sbUJBQW1CLEdBQUcsSUFBMUI7QUFFQSxVQUFNVixJQUFJLEdBQUdXLHFCQUFiO0FBQUEsVUFDTVYsS0FBSyxHQUFHRSxVQUFVLENBQUNTLFFBQVgsRUFEZDtBQUFBLFVBRU1SLGtCQUFrQixHQUFHLGtEQUFpQ0QsVUFBakMsQ0FGM0I7QUFBQSxVQUdNVSx3QkFBd0IsR0FBR1Qsa0JBQWtCLENBQUNVLE1BSHBEO0FBQUEsVUFJTUMsNkJBQTZCLEdBQUlGLHdCQUF3QixHQUFHLENBSmxFOztBQU1BLFVBQUlFLDZCQUFKLEVBQW1DO0FBQ2pDTCxRQUFBQSxtQkFBbUIsR0FBRyxJQUFJWCxtQkFBSixDQUF3QkMsSUFBeEIsRUFBOEJDLEtBQTlCLEVBQXFDQyxRQUFyQyxFQUErQ0MsVUFBL0MsRUFBMkRDLGtCQUEzRCxDQUF0QjtBQUNEOztBQUVELGFBQU9NLG1CQUFQO0FBQ0Q7Ozs7RUFuRCtCTSx3Qjs7QUFzRGxDQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJuQixtQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpbmRSdWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBSRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHBhcnRzKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuXG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICByZXBsYWNlKHJ1bGVzKSB7XG4gICAgY29uc3QgcnVsZSA9IGZpbmRSdWxlKHRoaXMucnVsZU5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSB0aGlzLmRlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlZERlZmluaXRpb24sIHJlcGxhY2VtZW50RGVmaW5pdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCByZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGUgPSBSRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uID0gKHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==