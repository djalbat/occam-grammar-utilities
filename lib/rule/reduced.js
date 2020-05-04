"use strict";

var _occamParsers = require("occam-parsers");

var _reduced = _interopRequireDefault(require("../node/reduced"));

var _recursive = _interopRequireDefault(require("../definition/recursive"));

var _class = require("../utilities/class");

var _ruleName = require("../utilities/ruleName");

var _types = require("../types");

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

var ReducedRule = /*#__PURE__*/function (_Rule) {
  _inherits(ReducedRule, _Rule);

  var _super = _createSuper(ReducedRule);

  function ReducedRule() {
    _classCallCheck(this, ReducedRule);

    return _super.apply(this, arguments);
  }

  _createClass(ReducedRule, [{
    key: "isEmpty",
    value: function isEmpty() {
      var definitionsLength = this.definitions.length,
          empty = definitionsLength === 0;
      return empty;
    }
  }], [{
    key: "fromRule",
    value: function fromRule(rule) {
      var definitions = rule.getDefinitions();
      var ruleName = rule.getName(),
          reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName);
      definitions = definitions.filter(function (definition) {
        var keep = true;
        var definitionRecursiveDefinition = (0, _class.isInstanceOf)(definition, _recursive["default"]);

        if (definitionRecursiveDefinition) {
          var recursiveDefinition = definition,
              ///
          type = recursiveDefinition.getType();
          keep = type !== _types.DIRECTLY_LEFT_RECURSIVE_TYPE && type !== _types.INDIRECTLY_LEFT_RECURSIVE_TYPE && type !== _types.IMPLICITLY_LEFT_RECURSIVE_TYPE;
        }

        return keep;
      });
      var name = reducedRuleName,
          NonTerminalNode = _reduced["default"],
          ///
      reducedRule = new ReducedRule(name, definitions, NonTerminalNode);
      return reducedRule;
    }
  }]);

  return ReducedRule;
}(_occamParsers.Rule);

module.exports = ReducedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZWQuanMiXSwibmFtZXMiOlsiUmVkdWNlZFJ1bGUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImRlZmluaXRpb25zIiwibGVuZ3RoIiwiZW1wdHkiLCJydWxlIiwiZ2V0RGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwia2VlcCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0eXBlIiwiZ2V0VHlwZSIsIkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJuYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkUnVsZSIsIlJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7Ozs7Ozs7Ozs4QkFDTTtBQUNSLFVBQU1DLGlCQUFpQixHQUFHLEtBQUtDLFdBQUwsQ0FBaUJDLE1BQTNDO0FBQUEsVUFDTUMsS0FBSyxHQUFJSCxpQkFBaUIsS0FBSyxDQURyQztBQUdBLGFBQU9HLEtBQVA7QUFDRDs7OzZCQUVlQyxJLEVBQU07QUFDcEIsVUFBSUgsV0FBVyxHQUFHRyxJQUFJLENBQUNDLGNBQUwsRUFBbEI7QUFFQSxVQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csT0FBTCxFQUFqQjtBQUFBLFVBQ01DLGVBQWUsR0FBRywyQ0FBNEJGLFFBQTVCLENBRHhCO0FBR0FMLE1BQUFBLFdBQVcsR0FBR0EsV0FBVyxDQUFDUSxNQUFaLENBQW1CLFVBQUNDLFVBQUQsRUFBZ0I7QUFDL0MsWUFBSUMsSUFBSSxHQUFHLElBQVg7QUFFQSxZQUFNQyw2QkFBNkIsR0FBRyx5QkFBYUYsVUFBYixFQUF5QkcscUJBQXpCLENBQXRDOztBQUVBLFlBQUlELDZCQUFKLEVBQW1DO0FBQ2pDLGNBQU1FLG1CQUFtQixHQUFHSixVQUE1QjtBQUFBLGNBQXdDO0FBQ2xDSyxVQUFBQSxJQUFJLEdBQUdELG1CQUFtQixDQUFDRSxPQUFwQixFQURiO0FBR0FMLFVBQUFBLElBQUksR0FBSUksSUFBSSxLQUFLRSxtQ0FBVixJQUNDRixJQUFJLEtBQUtHLHFDQURWLElBRUNILElBQUksS0FBS0kscUNBRmpCO0FBR0Q7O0FBRUQsZUFBT1IsSUFBUDtBQUNELE9BZmEsQ0FBZDtBQWlCQSxVQUFNUyxJQUFJLEdBQUdaLGVBQWI7QUFBQSxVQUNNYSxlQUFlLEdBQUdDLG1CQUR4QjtBQUFBLFVBQ3NDO0FBQ2hDQyxNQUFBQSxXQUFXLEdBQUcsSUFBSXhCLFdBQUosQ0FBZ0JxQixJQUFoQixFQUFzQm5CLFdBQXRCLEVBQW1Db0IsZUFBbkMsQ0FGcEI7QUFJQSxhQUFPRSxXQUFQO0FBQ0Q7Ozs7RUFwQ3VCQyxrQjs7QUF1QzFCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIzQixXQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJlZHVjZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlZHVjZWRcIjtcbmltcG9ydCBSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZVwiO1xuXG5pbXBvcnQgeyBpc0luc3RhbmNlT2YgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLCBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IGtlZXAgPSB0cnVlO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IGlzSW5zdGFuY2VPZihkZWZpbml0aW9uLCBSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgdHlwZSA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0VHlwZSgpO1xuXG4gICAgICAgIGtlZXAgPSAodHlwZSAhPT0gRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSkgJiZcbiAgICAgICAgICAgICAgICh0eXBlICE9PSBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpICYmXG4gICAgICAgICAgICAgICAodHlwZSAhPT0gSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGtlZXBcbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWUgPSByZWR1Y2VkUnVsZU5hbWUsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHVjZWRSdWxlO1xuIl19